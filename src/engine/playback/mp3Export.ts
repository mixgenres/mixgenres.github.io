import { createSongMixGraph, type SongMixGraph } from '../studio/dynamicMix/MixGraph';
import { accumulatePortableMix, renderPortableAmbience } from '../studio/dynamicMix/PortableMixRuntime';
import { createNoteTailResolver } from './noteLifetime';
import { prepareNoteVoice, applyPhysicalController } from './performancePlan';
import { checkAbort, encodeMp3, wavBlob, yieldToUI } from '../../export/audioEncoding';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { computeTrackStemFingerprint, stemCache } from '../cache/stemCache.ts';
import type { StemCacheEntry } from '../cache/stemCache';
import { renderCompactTrack } from './compactInstrument';
import type { Performance, PerfNote, PerfCC } from '../band/performanceData.ts';
import { resolveTrackSound, resolveTrackGain } from './trackSound';
import { createMasterChain, type MasterChain, type StudioMixState } from '../studio/mixer.ts';
import { resolvePlaybackMix, ensembleHeadroom } from '../studio/masterSettings';
import { measureAudio, type RenderDiagnostic } from '../studio/audioMetrics';
import { reserveOutputHeadroom } from '../studio/outputHeadroom';
import { FORM_BLUEPRINTS } from '../../data/genreForms';
import { processOfflineAudioDSP } from '../studio/effects.ts';
import { excerptMixTimeline } from '../studio/dynamicMix/MixAutomation';
import { RenderQueue } from './renderQueue';
import {
  determineBusCategory,
  type TrackParams,
} from './elementaryEngine.ts';

export interface Mp3RenderOptions {
  selectedTrackIds?: string[];
  /** Physical stems already rendered in workers, before any ensemble mastering. */
  preparedStems?: Map<string, RenderedPerformanceAudio>;
  /** Render a short excerpt for auditions and diagnostic exports. */
  renderWindow?: { start: number; end: number };
  /** Lower values run first. Evaluated again when a queued render is picked. */
  renderPriority?: () => number;
  signal?: AbortSignal;
  format?: 'mp3' | 'wav';
  rawStem?: boolean;
  /** Main-thread section PCM owns reuse; workers need not retain a second copy. */
  cacheDSPStem?: boolean;
  /** Mix preparation can consume cached sections without copying a whole part. */
  sectionStems?: boolean;
  /** Playback may stop section synthesis at its requested window's end. */
  boundedStems?: boolean;
  /** Internal: prepare reusable outgoing tails when transport has a reserve. */
  stemLookaheadSeconds?: number;
  /** Keep a favorite's prepared opening mix across browser sessions. */
  persistMix?: boolean;
  persistMixPriority?: 'favorite' | 'catalog';
  /** Limit PCM output without changing note holds, releases or DSP state. */
  maxDurationSeconds?: number;
  /** Internal raw-section optimization: advance DSP normally, retain only this suffix. */
  rawOutputStartSample?: number;
  /** Workers have their own event loop; main-thread fallback yields for input. */
  yieldForUI?: boolean;
  trackInstruments: Map<string, string>;
  trackRoles?: Map<string, string>;
  worldId?: string;
  styleId?: string;
  bypassWebAudioMaster?: boolean;
  mixState?: StudioMixState;
  /** Optional observations before encoding and normalization. */
  onDiagnostics?: (event: RenderDiagnostic) => void;
}


function applyCCToParams(
  params: TrackParams,
  cc: number,
  value: number,
  trackMixVolume: number,
  controllerGain: { volume: number; expression: number },
) {
  const norm = value / 127;
  if (cc === 7 || cc === 11) {
    if (cc === 7) controllerGain.volume = norm;
    else controllerGain.expression = norm;
    params.volume = resolveTrackGain(params, trackMixVolume, controllerGain.volume, controllerGain.expression);
  } else if (cc === 10) params.pan = norm;
  else applyPhysicalController(params, cc, value);
}

/** Float PCM shared by playback and export, without a WAV encode/decode round trip. */
export interface RenderedPerformanceAudio {
  sampleRate: number;
  left: Float32Array;
  right: Float32Array;
  buffer?: AudioBuffer;
  sections?: StemCacheEntry[];
}

// Serialize expensive renders so superseded edits and exports cannot allocate
// several full-song graphs/buffers at once on memory-constrained devices.
const renderQueue = new RenderQueue();

export function renderPerformanceToMp3(perf: Performance, options: Mp3RenderOptions, onProgress?: (fraction: number) => void): Promise<Blob> {
  return renderQueue.enqueue(() => renderPerformance(perf, options, onProgress, false) as Promise<Blob>, options.renderPriority, options.signal);
}

export function renderPerformanceToAudio(perf: Performance, options: Mp3RenderOptions, onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  return renderQueue.enqueue(() => renderPerformance(perf, options, onProgress, true) as Promise<RenderedPerformanceAudio>, options.renderPriority, options.signal);
}

async function renderPerformance(
  perf: Performance,
  options: Mp3RenderOptions,
  onProgress?: (frac: number) => void,
  pcm = false,
): Promise<Blob | RenderedPerformanceAudio> {
  checkAbort(options.signal);
  const selected = options.selectedTrackIds ? new Set(options.selectedTrackIds) : null;
  const hasSolo = options.mixState?.solo && Object.values(options.mixState.solo).some(Boolean);
  const isActive = (id: string) => (!selected || selected.has(id)) &&
    (!hasSolo || !!options.mixState?.solo?.[id]) && !options.mixState?.muted?.[id];
  // Isolated playback parts must not pay for other parts' event scans, sound
  // resolution or decay tails. Keep the ensemble mix timeline for its headroom.
  perf = { ...perf, notes: perf.notes.filter(note => isActive(note.trackId)), ccs: perf.ccs.filter(cc => isActive(cc.trackId)) };
  if (options.renderWindow) perf = performanceWindow(perf, options.renderWindow.start, options.renderWindow.end, createNoteTailResolver(perf, options));
  const sampleRate = 44100;
  const noteTail = createNoteTailResolver(perf, options);
  // Match each note's end to its own lifetime, rather than adding the longest
  // instrument tail to the latest note in an unrelated part.
  const lastDecayEnd = perf.notes.reduce((end, note) => Math.max(end, note.time + note.dur + noteTail(note)), 0);
  const completeDuration = Math.max(1, perf.duration + (perf.tail ?? 3), lastDecayEnd);
  const limit = options.maxDurationSeconds ?? (options.preparedStems && options.renderWindow ? perf.duration : undefined);
  const duration = limit !== undefined && Number.isFinite(limit) && limit > 0
    ? Math.min(completeDuration, limit) : completeDuration;
  const totalSamples = Math.ceil(duration * sampleRate);
  const outputStartSample = Math.max(0,Math.min(totalSamples-1,Math.floor(options.rawOutputStartSample ?? 0)));
  if (outputStartSample && (!options.rawStem || options.onDiagnostics)) throw new Error('A cropped physical stem requires raw PCM without diagnostics.');
  const outputSamples = totalSamples-outputStartSample;
  const activeTrackIds = [...new Set([
    ...perf.notes.map(n => n.trackId),
    ...(options.preparedStems?.keys() ?? []),
  ])];

  if (!activeTrackIds.length && !options.rawStem) throw new Error('No audible notes in the selected tracks.');
  const notesByTrack = new Map<string, PerfNote[]>();
  const ccsByTrack = new Map<string, PerfCC[]>();
  for (const note of perf.notes) { const bucket = notesByTrack.get(note.trackId) ?? []; bucket.push(note); notesByTrack.set(note.trackId, bucket); }
  for (const cc of perf.ccs) { const bucket = ccsByTrack.get(cc.trackId) ?? []; bucket.push(cc); ccsByTrack.set(cc.trackId, bucket); }
  for (const ccs of ccsByTrack.values()) ccs.sort((a, b) => a.time - b.time);
  if (onProgress) onProgress(0.02);

  const { mixCharacter, masterProfile: styleMaster, context: mixContext } = resolvePlaybackMix(options.worldId, options.styleId);
  const observeOutput = (left: Float32Array, right: Float32Array, browserMasterApplied: boolean) => {
    if (!options.onDiagnostics) return;
    const metrics = measureAudio(left, right, sampleRate);
    options.onDiagnostics({ stage: 'output', id: 'master', metrics, browserMasterApplied, rawStem: !!options.rawStem,
      encodingPeakTrim: options.rawStem && options.format === 'wav' ? 1 : metrics.samplePeak > 0.965 ? 0.965 / metrics.samplePeak : 1 });
  };

  // Accumulate directly into Web Audio bus buffers, avoiding six full-song
  // copies during mastering. Node/raw-stem exports use plain typed arrays.
  const OfflineConstructor = globalThis.OfflineAudioContext ??
    (typeof window !== 'undefined' ? window.webkitOfflineAudioContext : undefined);
  if (pcm && typeof window !== 'undefined' && !OfflineConstructor) throw new Error('This browser cannot prepare the studio audio. Try a browser with OfflineAudioContext support.');
  const masterContext = !options.rawStem && !options.bypassWebAudioMaster && OfflineConstructor
    ? new OfflineConstructor(2, totalSamples, sampleRate) : undefined;
  const timeline = !options.rawStem && perf.mixTimeline?.scenes.some(scene => scene.enabled) ? perf.mixTimeline : undefined;
  let dynamicChain: MasterChain | undefined;
  let dynamicGraph: SongMixGraph | undefined;
  try {
    if (masterContext && timeline) {
      dynamicChain = createMasterChain(masterContext, timeline.scenes[0].resolvedMix.contract.character, mixContext);
      dynamicGraph = createSongMixGraph(masterContext, dynamicChain, timeline, activeTrackIds, timeline.baselineHeadroom ?? ensembleHeadroom(activeTrackIds.length, styleMaster.lift));
      dynamicGraph.schedule(0, 0);
    }
    const directRaw = !!options.rawStem && !options.onDiagnostics;
    let rawOutput: {left: Float32Array; right: Float32Array} | undefined;
    const makeBus = () => {
      const buffer = dynamicGraph ? undefined : masterContext?.createBuffer(2, totalSamples, sampleRate);
      return { buffer, left: buffer?.getChannelData(0) ?? new Float32Array(dynamicGraph || directRaw ? 0 : totalSamples), right: buffer?.getChannelData(1) ?? new Float32Array(dynamicGraph || directRaw ? 0 : totalSamples) };
    };
    const drums = makeBus(), sub = makeBus(), instruments = makeBus();
    const drumBusL = drums.left, drumBusR = drums.right;
    const subBusL = sub.left, subBusR = sub.right;
    const instBusL = instruments.left, instBusR = instruments.right;

    const roomL = timeline && !masterContext ? new Float32Array(totalSamples) : new Float32Array(0);
    const roomR = new Float32Array(roomL.length), echoL = new Float32Array(roomL.length), echoR = new Float32Array(roomL.length);

    const totalTracks = Math.max(1, activeTrackIds.length);

    // Render each track in isolation (Stem-by-Stem Sequential Rendering)
    for (let tIdx = 0; tIdx < activeTrackIds.length; tIdx++) {
      checkAbort(options.signal);
      if (options.yieldForUI !== false) await yieldToUI();
      const trackId = activeTrackIds[tIdx];
      const trackNotes = notesByTrack.get(trackId) ?? [];
      const prepared = options.preparedStems?.get(trackId);
      if (trackNotes.length === 0 && !prepared?.sections?.length && !prepared?.left.length) continue;

      const instrumentId = options.trackInstruments.get(trackId) || perf.trackInfo?.[trackId]?.instrumentId || trackId;
      const instDef = INSTRUMENTS_BY_ID[instrumentId];
      const params = resolveTrackSound(instrumentId, options.worldId ?? perf.worldId, options.styleId, options.trackRoles?.get(trackId) ?? perf.trackInfo?.[trackId]?.role);
      const trackMixVolume = options.mixState?.volume?.[trackId] ?? 1;
      const trackMixPan = options.mixState?.pan?.[trackId] ?? params.pan;
      // Instrument physics and authored CCs render at unity, with the kit's
      // own component placement. User balance belongs after this reusable PCM.
      params.pan = .5;
      const controllerGain = { volume: 1, expression: 1 };

      // A playback window can contain only the release tail of a note attacked
      // earlier. In that case prepared PCM defines the active sample span.
      let minNoteTime = Infinity;
      for (const n of trackNotes) {
        if (n.time < minNoteTime) minNoteTime = n.time;
      }

      const preparedSections = prepared?.sections ?? (prepared?.left.length
        ? [{ left: prepared.left, right: prepared.right, startSample: 0 }] : []);
      const trackStartSample = prepared ? 0 : Math.max(0, Math.floor(minNoteTime * sampleRate));
      const noteEndSample = Math.ceil(trackNotes.reduce((end, note) => Math.max(end, note.time + note.dur + noteTail(note)), 0) * sampleRate);
      const preparedEndSample = preparedSections.reduce((end, section) => Math.max(end, section.startSample + section.left.length), 0);
      const trackEndSample = Math.min(totalSamples, Math.max(noteEndSample, preparedEndSample));
      const trackSamples = trackEndSample - trackStartSample;
      if (trackSamples <= 0 || trackEndSample <= outputStartSample) continue;
      const retainedStart = Math.max(trackStartSample,outputStartSample);

      const trackCCs = ccsByTrack.get(trackId) ?? [];
      const controllerNumbers = [...new Set(trackCCs.map(cc => cc.cc))];

      // Apply any initial CC values before track start
      for (const cc of trackCCs) {
        const s = Math.round(cc.time * sampleRate);
        if (s <= trackStartSample) {
          applyCCToParams(params, cc.cc, cc.value, 1, controllerGain);
        }
      }

      // Check aggressive PCM stem cache (Tier 2 Performance Cell fingerprint)
      const stemFingerprint = !prepared && options.cacheDSPStem !== false ? computeTrackStemFingerprint(
        trackId,
        instrumentId,
        params,
        1,
        trackNotes,
        trackCCs,
        sampleRate,
      ) : '';

      const cacheKey = `${stemFingerprint}:${trackStartSample}:${trackSamples}:${outputStartSample}:compact-v3`;
      if (prepared && prepared.sampleRate !== sampleRate) throw new Error('Prepared stem sample rate does not match the mix.');
      let stem = prepared ? { left: prepared.left, right: prepared.right, startSample: 0 }
        : options.cacheDSPStem === false ? undefined : stemCache.get(cacheKey);

      if (!stem) {
        const voices = trackNotes.map(note => prepareNoteVoice(note, params,
          options.worldId ?? perf.worldId ?? '', options.styleId ?? '',
          options.trackRoles?.get(trackId) ?? perf.trackInfo?.[trackId]?.role, controllerNumbers));
        if (!instDef) throw new Error(`Unknown instrument: ${instrumentId}`);
        stem = await renderCompactTrack(trackNotes, trackCCs, instDef, { ...params, volume: resolveTrackGain(params) },
          retainedStart, trackEndSample, voices, options.signal, options.yieldForUI !== false);

        if (options.cacheDSPStem !== false) stemCache.set(cacheKey, stem);
      }

      let chunks = prepared?.sections ?? [stem];
      const applyBalance = !options.rawStem || !!options.mixState;
      const pan = Math.max(0, Math.min(1, trackMixPan));
      const gainL = applyBalance ? Math.cos(pan * Math.PI / 2) * Math.SQRT2 * trackMixVolume : 1;
      const gainR = applyBalance ? Math.sin(pan * Math.PI / 2) * Math.SQRT2 * trackMixVolume : 1;
      if (!masterContext && applyBalance) {
        // Equal-power balance of the centred physical stem. This preserves kit
        // spread and authored pan automation, and is identical for cached and
        // freshly synthesized stems. Never mutate shared cached arrays.
        chunks = chunks.map(chunk => {
          const left = new Float32Array(chunk.left.length), right = new Float32Array(chunk.right.length);
          for (let i = 0; i < left.length; i++) { left[i] = chunk.left[i]*gainL; right[i] = chunk.right[i]*gainR; }
          return {left,right,startSample:chunk.startSample};
        });
      }

      if (options.onDiagnostics) {
        const left = new Float32Array(trackSamples), right = new Float32Array(trackSamples);
        for (const chunk of chunks) for (let i=0;i<chunk.left.length;i++) {
          const offset=chunk.startSample+i-trackStartSample;
          if(offset>=0 && offset<trackSamples) {
            left[offset]+=chunk.left[i]*(masterContext ? gainL : 1);
            right[offset]+=chunk.right[i]*(masterContext ? gainR : 1);
          }
        }
        options.onDiagnostics({ stage: 'stem', id: trackId, instrumentId,
          bus: determineBusCategory(instDef?.acousticProfile?.role, instrumentId),
          metrics: measureAudio(left,right,sampleRate), trackLevel: trackMixVolume,
          resolvedGain: resolveTrackGain(params,trackMixVolume,controllerGain.volume,controllerGain.expression) });
      }

      if (directRaw) {
        // Worker parts need physical PCM only. Avoid allocating three empty
        // mix buses and another output copy around an already complete stem.
        const single = chunks.length === 1 ? chunks[0] : undefined;
        if (activeTrackIds.length === 1 && single?.startSample === outputStartSample && single.left.length === outputSamples && single.right.length === outputSamples) {
          rawOutput = single;
        } else {
          rawOutput ??= {left:new Float32Array(outputSamples),right:new Float32Array(outputSamples)};
          for (const chunk of chunks) {
            const offset = chunk.startSample-outputStartSample;
            const length = Math.min(chunk.left.length, Math.max(0,outputSamples-offset));
            for(let i=0;i<length;i++) {
              rawOutput.left[offset+i]+=chunk.left[i];
              rawOutput.right[offset+i]+=chunk.right[i];
            }
          }
        }
        onProgress?.(0.05 + ((tIdx + 1) / totalTracks) * .68);
        continue;
      }
      if (dynamicGraph && masterContext) {
        // Keep cached sections intact. Native sources sum their complete tails
        // into one continuous master, without a second full-part PCM copy.
        const split=masterContext.createChannelSplitter(2), merge=masterContext.createChannelMerger(2);
        const balanceL=masterContext.createGain(), balanceR=masterContext.createGain();
        balanceL.gain.value=gainL; balanceR.gain.value=gainR;
        split.connect(balanceL,0); split.connect(balanceR,1);
        balanceL.connect(merge,0,0); balanceR.connect(merge,0,1);
        merge.connect(dynamicGraph.tracks.get(trackId)!.input);
        for(const chunk of chunks) {
          const buffer=masterContext.createBuffer(2,chunk.left.length,sampleRate);
          buffer.getChannelData(0).set(chunk.left); buffer.getChannelData(1).set(chunk.right);
          const source=masterContext.createBufferSource(); source.buffer=buffer; source.connect(split);
          source.start(chunk.startSample/sampleRate);
        }
        onProgress?.(0.05 + ((tIdx + 1) / totalTracks) * .68);
        continue;
      }
      if (timeline && !masterContext) {
        for(const chunk of chunks) accumulatePortableMix(timeline,trackId,chunk.left,chunk.right,chunk.startSample,sampleRate,
          instBusL,instBusR,roomL,roomR,echoL,echoR);
        onProgress?.(0.05 + ((tIdx + 1) / totalTracks) * .68);
        continue;
      }

      // Accumulate the rendered stem into its target mix bus
      const busCategory = determineBusCategory(instDef?.acousticProfile?.role, instDef?.id || trackId);
      let targetL: Float32Array;
      let targetR: Float32Array;
      if (busCategory === 'drums') {
        targetL = drumBusL;
        targetR = drumBusR;
      } else if (busCategory === 'sub') {
        targetL = subBusL;
        targetR = subBusR;
      } else {
        targetL = instBusL;
        targetR = instBusR;
      }

      for(const chunk of chunks) {
        const offset=chunk.startSample, copyLen=Math.min(chunk.left.length,Math.max(0,totalSamples-offset));
        for(let i=0;i<copyLen;i++) {
          targetL[offset+i]+=chunk.left[i]*(masterContext ? gainL : 1);
          targetR[offset+i]+=chunk.right[i]*(masterContext ? gainR : 1);
        }
      }

      if (onProgress) {
        onProgress(0.05 + ((tIdx + 1) / totalTracks) * 0.68);
      }
    }

    if (directRaw) {
      const {left,right} = rawOutput ?? {left:new Float32Array(outputSamples),right:new Float32Array(outputSamples)};
      checkAbort(options.signal);
      if (pcm) {onProgress?.(1);return {sampleRate,left,right};}
      if (options.format === 'wav') {onProgress?.(1);return wavBlob(left,right,sampleRate,true);}
      return encodeMp3(left,right,sampleRate,fraction=>onProgress?.(.85+fraction*.15),options.signal);
    }

    // Headroom trim across summed stems to maintain clean dynamic headroom
    const headroomTrim = options.rawStem ? 1 : timeline?.baselineHeadroom ?? ensembleHeadroom(activeTrackIds.length, styleMaster.lift);
    if (timeline && !masterContext) renderPortableAmbience(timeline, sampleRate, instBusL, instBusR, roomL, roomR, echoL, echoR);
    if (!dynamicGraph && !options.rawStem && headroomTrim < 1.0) {
      for (let i = 0; i < totalSamples; i++) {
        drumBusL[i] *= headroomTrim;
        drumBusR[i] *= headroomTrim;
        subBusL[i] *= headroomTrim;
        subBusR[i] *= headroomTrim;
        instBusL[i] *= headroomTrim;
        instBusR[i] *= headroomTrim;
      }
    }

    // Native strips render directly into the master; avoid reporting empty accumulation buffers as measured buses.
    if (options.onDiagnostics && !dynamicGraph) {
      for (const [id, left, right] of [['drums', drumBusL, drumBusR], ['sub', subBusL, subBusR], ['inst', instBusL, instBusR]] as const) {
        options.onDiagnostics({ stage: 'bus', id, metrics: measureAudio(left, right, sampleRate), headroomTrim });
      }
    }
    if (onProgress) onProgress(0.75);

    const styleBlueprint = options.styleId ? FORM_BLUEPRINTS[options.styleId] : (options.worldId ? FORM_BLUEPRINTS[options.worldId] : undefined);

    // Node/CI environments do not expose Web Audio's OfflineAudioContext. Keep a
    // deterministic export path for isolated instrument validation: the exact same
    // shared instrument stems are emitted without pretending that the browser
    // studio master chain ran. Browser production exports continue through the full
    // Web Audio master chain below.
    if (!masterContext) {
      const renderedLeft = new Float32Array(totalSamples);
      const renderedRight = new Float32Array(totalSamples);
      for (let i = 0; i < totalSamples; i++) {
        renderedLeft[i] = drumBusL[i] + subBusL[i] + instBusL[i];
        renderedRight[i] = drumBusR[i] + subBusR[i] + instBusR[i];
      }
      if (!options.rawStem && styleBlueprint?.dspProfile) processOfflineAudioDSP(renderedLeft, renderedRight, styleBlueprint.dspProfile);
      if (!options.rawStem) reserveOutputHeadroom(renderedLeft, renderedRight);
      observeOutput(renderedLeft, renderedRight, false);
      checkAbort(options.signal);
      if (pcm) { onProgress?.(1); return { sampleRate, left: renderedLeft, right: renderedRight }; }
      if (options.format === 'wav') { onProgress?.(1); return wavBlob(renderedLeft, renderedRight, sampleRate, options.rawStem); }
      return encodeMp3(renderedLeft, renderedRight, sampleRate, fraction => onProgress?.(0.85 + fraction * 0.15), options.signal);
    }

    // Master Processing via Web Audio OfflineAudioContext
    const offlineCtx = masterContext;
    const offlineChain = dynamicChain ?? createMasterChain(offlineCtx, mixCharacter, mixContext);
    dynamicChain = offlineChain;

    if (!dynamicGraph) {

      // Route Drums Stem to drumBus (waveshaper knock, kick filter)
      const drumBuffer = drums.buffer!;
      const drumSource = offlineCtx.createBufferSource();
      drumSource.buffer = drumBuffer;
      drumSource.connect(offlineChain.drumBus);
      drumSource.start(0);

      // Route Sub Stem to subBus (sub-harmonic exciter, ducking)
      const subBuffer = sub.buffer!;
      const subSource = offlineCtx.createBufferSource();
      subSource.buffer = subBuffer;
      subSource.connect(offlineChain.subBus);
      subSource.start(0);

      // Route Instruments Stem to instBus (crosstalk, Haas widening, EQ, glue comp)
      const instBuffer = instruments.buffer!;
      const instSource = offlineCtx.createBufferSource();
      instSource.buffer = instBuffer;
      instSource.connect(offlineChain.instBus);
      instSource.start(0);

    }

    if (onProgress) onProgress(0.78);

    checkAbort(options.signal);
    const rendered = await offlineCtx.startRendering().finally(() => { if (!dynamicChain) offlineChain.dispose(); });

    if (onProgress) onProgress(0.85);

    const renderedLeft = rendered.getChannelData(0);
    const renderedRight = rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : renderedLeft;

    if (!options.rawStem && styleBlueprint?.dspProfile) {
      processOfflineAudioDSP(renderedLeft, renderedRight, styleBlueprint.dspProfile);
    }
    if (!options.rawStem) reserveOutputHeadroom(renderedLeft, renderedRight);

    observeOutput(renderedLeft, renderedRight, true);
    checkAbort(options.signal);
    if (pcm) { onProgress?.(1); return { sampleRate, left: renderedLeft, right: renderedRight, buffer: rendered }; }
    if (options.format === 'wav') { onProgress?.(1); return wavBlob(renderedLeft, renderedRight, sampleRate, options.rawStem); }
    return encodeMp3(renderedLeft, renderedRight, sampleRate, fraction => onProgress?.(0.85 + fraction * 0.15), options.signal);
  } finally {
    dynamicGraph?.dispose();
    dynamicChain?.dispose();
  }
}

/** Retain original attacks, bends and controller history when an excerpt starts
 * inside a held note or release. Negative times describe its existing age. */
function performanceWindow(perf: Performance, start: number, end: number, tail: (note: PerfNote) => number): Performance {
  const from = Math.round(Math.max(0, start) * 44100) / 44100, to = Math.max(from + 0.01, end);
  const notes = perf.notes.filter(note => note.time < to && note.time + note.dur + tail(note) > from)
    .map(note => ({ ...note, time: (Math.round(note.time * 44100) - Math.round(from * 44100)) / 44100 }));
  // Keep earlier events at their original relative time: a canonical synthesis
  // block can begin just before the crop and must see the same controller state.
  const ccs = perf.ccs.filter(cc => cc.time < to).map(cc => ({ ...cc, time: cc.time - from }));
  const bars = perf.bars.filter(bar => bar.end > from && bar.start < to).map(bar => ({
    ...bar, start: Math.max(0, bar.start - from), end: Math.min(to, bar.end) - from,
  }));
  const timeline = perf.mixTimeline && from < perf.mixTimeline.duration
    ? excerptMixTimeline(perf.mixTimeline, from, Math.min(to - from, perf.mixTimeline.duration - from))
    : undefined;
  return { ...perf, notes, ccs, bars, duration: to - from, tail: 0, mixTimeline: timeline };
}
