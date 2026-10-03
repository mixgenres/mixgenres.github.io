import { createSongMixGraph, type SongMixGraph } from '../studio/dynamicMix/MixGraph';
import { accumulatePortableMix, renderPortableAmbience } from '../studio/dynamicMix/PortableMixRuntime';
import { requiredVoiceCount, voiceTailSeconds } from './voiceAllocation';
import { createNoteTailResolver } from './noteLifetime';
import { prepareNoteVoice, applyPhysicalController } from './performancePlan';
import { checkAbort, encodeMp3, wavBlob, yieldToUI } from '../../export/audioEncoding';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { computeTrackStemFingerprint, stemCache } from '../cache/stemCache.ts';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from '../band/performanceData.ts';
import { resolveTrackSound, resolveTrackGain } from './trackSound';
import { createMasterChain, type MasterChain, type StudioMixState } from '../studio/mixer.ts';
import { resolvePlaybackMix, ensembleHeadroom } from '../studio/masterSettings';
import { measureAudio, type RenderDiagnostic } from '../studio/audioMetrics';
import { FORM_BLUEPRINTS } from '../../data/genreForms';
import { processOfflineAudioDSP } from '../studio/effects.ts';
import { excerptMixTimeline } from '../studio/dynamicMix/MixAutomation';
import { RenderQueue } from './renderQueue';
import {
  renderTrack,
  determineBusCategory,
  midiToFreq,
  type TrackParams,
  type VoiceState,
} from './elementaryEngine.ts';

export interface Mp3RenderOptions {
  selectedTrackIds?: string[];
  /** Physical stems already rendered in workers, before any ensemble mastering. */
  preparedStems?: Map<string, RenderedPerformanceAudio>;
  /** Render a short window of the performance timeline for incremental playback. */
  renderWindow?: { start: number; end: number };
  /** Lower values run first. Evaluated again when a queued render is picked. */
  renderPriority?: () => number;
  signal?: AbortSignal;
  format?: 'mp3' | 'wav';
  rawStem?: boolean;
  /** Main-thread section PCM owns reuse; workers need not retain a second copy. */
  cacheDSPStem?: boolean;
  trackInstruments: Map<string, string>;
  trackRoles?: Map<string, string>;
  worldId?: string;
  styleId?: string;
  bypassWebAudioMaster?: boolean;
  mixState?: StudioMixState;
  /** Optional observations before encoding and normalization. */
  onDiagnostics?: (event: RenderDiagnostic) => void;
}

type TrackRenderEvent =
  | { sample: number; kind: 'on'; note: PerfNote; noteInstanceId: string }
  | { sample: number; kind: 'off'; noteInstanceId: string }
  | { sample: number; kind: 'cc'; cc: PerfCC }
  | { sample: number; kind: 'bend'; value: number; targetMidi?: number; noteInstanceId?: string };

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
  if (options.renderWindow) perf = performanceWindow(perf, options.renderWindow.start, options.renderWindow.end);
  const sampleRate = 44100;
  const noteTail = createNoteTailResolver(perf, options);
  // Match each note's end to its own lifetime, rather than adding the longest
  // instrument tail to the latest note in an unrelated part.
  const lastDecayEnd = perf.notes.reduce((end, note) => Math.max(end, note.time + note.dur + noteTail(note)), 0);
  const duration = Math.max(1, perf.duration + (perf.tail ?? 3), lastDecayEnd);
  const totalSamples = Math.ceil(duration * sampleRate);
  const activeTrackIds = [...new Set(perf.notes.map(n => n.trackId))];

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
    (globalThis as unknown as { webkitOfflineAudioContext?: typeof OfflineAudioContext }).webkitOfflineAudioContext;
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
    const makeBus = () => {
      const buffer = dynamicGraph ? undefined : masterContext?.createBuffer(2, totalSamples, sampleRate);
      return { buffer, left: buffer?.getChannelData(0) ?? new Float32Array(dynamicGraph ? 0 : totalSamples), right: buffer?.getChannelData(1) ?? new Float32Array(dynamicGraph ? 0 : totalSamples) };
    };
    const drums = makeBus(), sub = makeBus(), instruments = makeBus();
    const drumBusL = drums.left, drumBusR = drums.right;
    const subBusL = sub.left, subBusR = sub.right;
    const instBusL = instruments.left, instBusR = instruments.right;

    const roomL = timeline && !masterContext ? new Float32Array(totalSamples) : new Float32Array(0);
    const roomR = new Float32Array(roomL.length), echoL = new Float32Array(roomL.length), echoR = new Float32Array(roomL.length);

    const BLOCK_SIZE = 64;
    const totalTracks = Math.max(1, activeTrackIds.length);

    // Render each track in isolation (Stem-by-Stem Sequential Rendering)
    for (let tIdx = 0; tIdx < activeTrackIds.length; tIdx++) {
      checkAbort(options.signal);
      await yieldToUI();
      const trackId = activeTrackIds[tIdx];
      const trackNotes = notesByTrack.get(trackId) ?? [];
      if (trackNotes.length === 0) continue;

      const instrumentId = options.trackInstruments.get(trackId) || perf.trackInfo?.[trackId]?.instrumentId || trackId;
      const instDef = INSTRUMENTS_BY_ID[instrumentId];
      const params = resolveTrackSound(instrumentId, options.worldId ?? perf.worldId, options.styleId, options.trackRoles?.get(trackId) ?? perf.trackInfo?.[trackId]?.role);
      const trackMixVolume = options.mixState?.volume?.[trackId] ?? 1;
      const trackMixPan = options.mixState?.pan?.[trackId] ?? params.pan;
      // Instrument physics and authored CCs render at unity, with the kit's
      // own component placement. User balance belongs after this reusable PCM.
      params.pan = .5;
      const controllerGain = { volume: 1, expression: 1 };

      // Determine active time window for this track to avoid rendering silence
      let minNoteTime = Infinity;
      for (const n of trackNotes) {
        if (n.time < minNoteTime) minNoteTime = n.time;
      }

      const trackStartSample = Math.max(0, Math.floor(minNoteTime * sampleRate));
      const trackEndSample = Math.min(totalSamples, Math.ceil(trackNotes.reduce((end, note) => Math.max(end, note.time + note.dur + noteTail(note)), 0) * sampleRate));
      const trackSamples = trackEndSample - trackStartSample;
      if (trackSamples <= 0) continue;

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
      const stemFingerprint = computeTrackStemFingerprint(
        trackId,
        instrumentId,
        params,
        1,
        trackNotes,
        trackCCs,
        sampleRate,
      );

      const cacheKey = `${stemFingerprint}:${trackStartSample}:${trackSamples}:v9`;
      const prepared = options.preparedStems?.get(trackId);
      if (prepared && prepared.sampleRate !== sampleRate) throw new Error('Prepared stem sample rate does not match the mix.');
      let stem = prepared ? { left: prepared.left, right: prepared.right, startSample: 0 }
        : options.cacheDSPStem === false ? undefined : stemCache.get(cacheKey);

      if (!stem) {
        const voiceCount = requiredVoiceCount(trackNotes, noteTail);
        const availableAt = new Map<VoiceState, number>();
        const releaseTails = new Map<VoiceState, number>();

        const voices: VoiceState[] = [];
        for (let vIdx = 0; vIdx < voiceCount; vIdx++) {
          voices.push({
            id: `stem-${trackId}-v${vIdx}`,
            gate: 0,
            frequencyHz: 440,
            note: 60,
            velocity: 0,
          });
        }

        // Build timeline of events relative to trackStartSample
        const trackEvents: TrackRenderEvent[] = [];
        for (let noteIndex = 0; noteIndex < trackNotes.length; noteIndex++) {
          const note = trackNotes[noteIndex];
          const noteInstanceId = `${trackId}:${noteIndex}`;
          const start = Math.round(note.time * sampleRate) - trackStartSample;
          const end = Math.round((note.time + note.dur) * sampleRate) - trackStartSample;
          if (start >= 0 && start < trackSamples) {
            trackEvents.push({ sample: start, kind: 'on', note, noteInstanceId });
          }
          if (end >= 0 && end <= trackSamples) {
            trackEvents.push({ sample: end, kind: 'off', noteInstanceId });
          }
          for (const bend of note.pitchBend ?? []) {
            const bendSample = Math.round((note.time + bend.offset) * sampleRate) - trackStartSample;
            if (bendSample >= 0 && bendSample < trackSamples) {
              trackEvents.push({ sample: bendSample, kind: 'bend', value: bend.value, targetMidi: note.midi, noteInstanceId });
            }
          }
          if (note.pitchBend?.length) {
            const lastBend = note.pitchBend[note.pitchBend.length - 1];
            const unbendSample = Math.round((note.time + lastBend.offset + 0.05) * sampleRate) - trackStartSample;
            if (unbendSample >= 0 && unbendSample < end && unbendSample < trackSamples) {
              trackEvents.push({ sample: unbendSample, kind: 'bend', value: 8192, targetMidi: note.midi, noteInstanceId });
            }
          }
        }

        for (const cc of trackCCs) {
          const sample = Math.round(cc.time * sampleRate) - trackStartSample;
          if (sample >= 0 && sample < trackSamples) {
            trackEvents.push({ sample, kind: 'cc', cc });
          }
        }

        const priority = { off: 0, cc: 1, on: 2, bend: 3 };
        trackEvents.sort((a, b) => a.sample - b.sample || priority[a.kind] - priority[b.kind]);

        // Initialize an isolated, lightweight OfflineRenderer for this single track
        const core = new OfflineRenderer();
        await core.initialize({
          sampleRate,
          numInputChannels: 0,
          numOutputChannels: 2,
          blockSize: BLOCK_SIZE,
        });

        const sounding = new Set<VoiceState>();
        let currentSig = renderTrack(trackId, voices, params, voice => sounding.has(voice));
        await core.render(currentSig.left, currentSig.right);

        const trackLeft = new Float32Array(trackSamples);
        const trackRight = new Float32Array(trackSamples);

        let eventIdx = 0;
        let cursor = 0;
        let eventSeq = 0;
        let syncCount = 0;

        let lastYield = performance.now();
        try {
        while (cursor < trackSamples) {
          if (performance.now() - lastYield > 16) {
            onProgress?.(0.05 + ((tIdx + cursor / trackSamples) / totalTracks) * 0.68);
            await yieldToUI();
            checkAbort(options.signal);
            lastYield = performance.now();
          }
          const nextBlockLimit = cursor + BLOCK_SIZE;
          let graphDirty = false;
          for (const voice of sounding) {
            if (voice.gate === 0 && (availableAt.get(voice) ?? Infinity) <= cursor) {
              sounding.delete(voice);
              graphDirty = true;
            }
          }

          while (eventIdx < trackEvents.length && trackEvents[eventIdx].sample < nextBlockLimit) {
            const event = trackEvents[eventIdx++];
            if (event.kind === 'on') {

              // Track gain is static. Per-note dynamics belong to the voice, not the
              // whole track; changing params.volume here used to pump every sounding
              // voice whenever a new note arrived.
              params.volume = resolveTrackGain(params, 1, controllerGain.volume, controllerGain.expression);

              // Prefer idle voice; if all busy, steal oldest
              const idleVoices = voices.filter(v => v.gate === 0 && (availableAt.get(v) ?? 0) <= event.sample);
              let voice: VoiceState;
              if (idleVoices.length > 0) {
                voice = idleVoices.reduce((oldest, current) => {
                  const oSeq = oldest.triggerSeq ?? 0;
                  const cSeq = current.triggerSeq ?? 0;
                  return cSeq < oSeq ? current : oldest;
                }, idleVoices[0]);
              } else {
                voice = voices.reduce((oldest, current) => {
                  const oSeq = oldest.triggerSeq ?? 0;
                  const cSeq = current.triggerSeq ?? 0;
                  return cSeq < oSeq ? current : oldest;
                }, voices[0]);
                voice.retriggerId = (voice.retriggerId || 0) + 1;
              }

              const prepared = prepareNoteVoice(event.note, params, options.worldId ?? perf.worldId ?? '', options.styleId ?? '',
                options.trackRoles?.get(trackId) ?? perf.trackInfo?.[trackId]?.role, controllerNumbers);
              Object.assign(voice, prepared, { id: voice.id, noteInstanceId: event.noteInstanceId, gate: 1,
                baseFrequencyHz: prepared.frequencyHz, triggerSeq: ++eventSeq });
              availableAt.set(voice, Infinity);
              releaseTails.set(voice, noteTail(event.note));
              sounding.add(voice);

              graphDirty = true;
            } else if (event.kind === 'off') {
              const activeVoices = voices.filter(v => v.noteInstanceId === event.noteInstanceId && v.gate === 1);
              for (const voice of activeVoices) {
                availableAt.set(voice, event.sample + Math.ceil((releaseTails.get(voice) ?? voiceTailSeconds(params)) * sampleRate));
                voice.gate = 0;
                if (voice.baseFrequencyHz) {
                  voice.frequencyHz = voice.baseFrequencyHz;
                }
                graphDirty = true;
              }
            } else if (event.kind === 'bend') {
              const activeVoices = voices.filter(v => v.gate === 1 && (!event.noteInstanceId || v.noteInstanceId === event.noteInstanceId));
              if (activeVoices.length > 0) {
                const semitones = ((event.value - 8192) / 8192) * 2;
                const bendRatio = Math.pow(2, semitones / 12);
                const targetVoice =
                (event.noteInstanceId
                  ? activeVoices.find(v => v.noteInstanceId === event.noteInstanceId)
                  : event.targetMidi !== undefined
                    ? activeVoices.find(v => Math.round(v.note) === Math.round(event.targetMidi!))
                    : undefined) ??
                  activeVoices.reduce((latest, current) => {
                    const tSeq = current.triggerSeq ?? 0;
                    const lSeq = latest.triggerSeq ?? 0;
                    return tSeq >= lSeq ? current : latest;
                  }, activeVoices[0]);

                const base =
                  targetVoice.baseFrequencyHz ?? targetVoice.frequencyHz ?? midiToFreq(targetVoice.note);
                targetVoice.baseFrequencyHz = base;
                targetVoice.frequencyHz = base * bendRatio;
                graphDirty = true;
              }
            } else if (event.kind === 'cc') {
              applyCCToParams(params, event.cc.cc, event.cc.value, 1, controllerGain);
              graphDirty = true;
            }
          }

          if (graphDirty) {
            currentSig = renderTrack(trackId, voices, params, voice => sounding.has(voice));
            await core.render(currentSig.left, currentSig.right);
            syncCount++;
            if (syncCount % 64 === 0) {
              core.gc();
            }
          }

          // Graph parameters remain unchanged until the next event's original
          // 64-sample boundary. Process those spans in batches directly into the
          // stem buffers: fewer JS calls and no intermediate PCM copying.
          const nextEventBoundary = eventIdx < trackEvents.length
            ? Math.floor(trackEvents[eventIdx].sample / BLOCK_SIZE) * BLOCK_SIZE
            : trackSamples;
          const nextReleaseBoundary = [...sounding].reduce((end, voice) => voice.gate === 0
            ? Math.min(end, Math.ceil((availableAt.get(voice) ?? Infinity) / BLOCK_SIZE) * BLOCK_SIZE) : end, trackSamples);
          const frames = Math.min(BLOCK_SIZE * 128, trackSamples - cursor,
            Math.max(BLOCK_SIZE, Math.min(nextEventBoundary, nextReleaseBoundary) - cursor));
          core.process([], [trackLeft.subarray(cursor, cursor + frames), trackRight.subarray(cursor, cursor + frames)]);

          cursor += frames;
        }

        } finally { core.reset(); }

        stem = {
          left: trackLeft,
          right: trackRight,
          startSample: trackStartSample,
        };

        if (options.cacheDSPStem !== false) stemCache.set(cacheKey, stem);
      }

      if (!options.rawStem || options.mixState) {
        // Equal-power balance of the centred physical stem. This preserves kit
        // spread and authored pan automation, and is identical for cached and
        // freshly synthesized stems. Never mutate shared cached arrays.
        const pan = Math.max(0, Math.min(1, trackMixPan));
        const gainL = Math.cos(pan * Math.PI / 2) * Math.SQRT2 * trackMixVolume;
        const gainR = Math.sin(pan * Math.PI / 2) * Math.SQRT2 * trackMixVolume;
        const left = new Float32Array(stem.left.length), right = new Float32Array(stem.right.length);
        for (let i = 0; i < left.length; i++) { left[i] = stem.left[i] * gainL; right[i] = stem.right[i] * gainR; }
        stem = { left, right, startSample: stem.startSample };
      }

      if (options.onDiagnostics) options.onDiagnostics({ stage: 'stem', id: trackId, instrumentId,
        bus: determineBusCategory(instDef?.acousticProfile?.role, instrumentId),
        metrics: measureAudio(stem.left, stem.right, sampleRate), trackLevel: trackMixVolume,
        resolvedGain: resolveTrackGain(params, trackMixVolume, controllerGain.volume, controllerGain.expression) });

      if (dynamicGraph && masterContext) {
        const buffer = masterContext.createBuffer(2, stem.left.length, sampleRate);
        buffer.getChannelData(0).set(stem.left); buffer.getChannelData(1).set(stem.right);
        const source = masterContext.createBufferSource(); source.buffer = buffer;
        source.connect(dynamicGraph.tracks.get(trackId)!.input);
        source.start(stem.startSample / sampleRate);
        onProgress?.(0.05 + ((tIdx + 1) / totalTracks) * .68);
        continue;
      }
      if (timeline && !masterContext) {
        accumulatePortableMix(timeline, trackId, stem.left, stem.right, stem.startSample, sampleRate,
          instBusL, instBusR, roomL, roomR, echoL, echoR);
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

      const offset = stem.startSample;
      const copyLen = Math.min(stem.left.length, Math.max(0, totalSamples - offset));
      for (let i = 0; i < copyLen; i++) {
        targetL[offset + i] += stem.left[i];
        targetR[offset + i] += stem.right[i];
      }

      if (onProgress) {
        onProgress(0.05 + ((tIdx + 1) / totalTracks) * 0.68);
      }
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
    // Elementary-rendered stems are emitted without pretending that the browser
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
      observeOutput(renderedLeft, renderedRight, false);
      checkAbort(options.signal);
      if (pcm) { onProgress?.(1); return { sampleRate, left: renderedLeft, right: renderedRight }; }
      if (options.format === 'wav') { onProgress?.(1); return wavBlob(renderedLeft, renderedRight, sampleRate, options.rawStem); }
      return encodeMp3(renderedLeft, renderedRight, sampleRate, fraction => onProgress?.(0.85 + fraction * 0.15), options.signal);
    }

    // Master Processing via Web Audio OfflineAudioContext
    const offlineCtx = masterContext;
    const offlineChain = dynamicChain ?? createMasterChain(offlineCtx, mixCharacter, mixContext);

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

/** Clip events to one playback window while retaining controller state at its start. */
function performanceWindow(perf: Performance, start: number, end: number): Performance {
  const from = Math.max(0, start), to = Math.max(from + 0.01, end);
  const notes = perf.notes.flatMap(note => {
    const noteStart = Math.max(from, note.time), noteEnd = Math.min(to, note.time + note.dur);
    if (noteEnd <= noteStart) return [];
    const bendBefore = (note.pitchBend ?? []).filter(bend => note.time + bend.offset < noteStart).at(-1);
    const pitchBend = [
      ...(bendBefore ? [{ ...bendBefore, offset: 0 }] : []),
      ...(note.pitchBend ?? []).filter(bend => note.time + bend.offset >= noteStart && note.time + bend.offset < noteEnd)
        .map(bend => ({ ...bend, offset: note.time + bend.offset - noteStart })),
    ];
    return [{ ...note, time: noteStart - from, dur: noteEnd - noteStart, ...(pitchBend.length ? { pitchBend } : {}) }];
  });
  const latestCC = new Map<string, PerfCC>();
  const windowCCs: PerfCC[] = [];
  for (const cc of perf.ccs) {
    if (cc.time < from) latestCC.set(`${cc.trackId}:${cc.cc}`, cc);
    else if (cc.time < to) windowCCs.push({ ...cc, time: cc.time - from });
  }
  const ccs = [
    ...[...latestCC.values()].map(cc => ({ ...cc, time: 0 })),
    ...windowCCs,
  ].sort((a, b) => a.time - b.time);
  const bars = perf.bars.filter(bar => bar.end > from && bar.start < to).map(bar => ({
    ...bar, start: Math.max(0, bar.start - from), end: Math.min(to, bar.end) - from,
  }));
  const timeline = perf.mixTimeline && from < perf.mixTimeline.duration
    ? excerptMixTimeline(perf.mixTimeline, from, Math.min(to - from, perf.mixTimeline.duration - from))
    : undefined;
  return { ...perf, notes, ccs, bars, duration: to - from, tail: 0, mixTimeline: timeline };
}
