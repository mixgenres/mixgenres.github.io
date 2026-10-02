import { checkAbort, encodeMp3, wavBlob, yieldToUI } from '../../export/audioEncoding';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { computeTrackStemFingerprint, stemCache } from '../cache/stemCache.ts';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from '../band/performanceData.ts';
import { resolveTrackSound, resolveTrackGain } from './trackSound';
import { createMasterChain, type StudioMixState } from '../studio/mixer.ts';
import { resolvePlaybackMix, ensembleHeadroom } from '../studio/masterSettings';
import { measureAudio, type RenderDiagnostic } from '../studio/audioMetrics';
import { FORM_BLUEPRINTS } from '../../data/genreForms';
import { processOfflineAudioDSP } from '../studio/effects.ts';
import { resolveRenderGesture } from './renderGesture.ts';
import {
  renderTrack,
  determineBusCategory,
  midiToFreq,
  type TrackParams,
  type VoiceState,
} from './elementaryEngine.ts';

export interface Mp3RenderOptions {
  selectedTrackIds?: string[];
  signal?: AbortSignal;
  format?: 'mp3' | 'wav';
  rawStem?: boolean;
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
  else if (cc === 74) params.brightness = norm;
  else if (cc === 16) params.articulation = norm;
  else if (cc === 17) params.contact = norm;
  else if (cc === 18) params.mute = norm;
  else if (cc === 19) params.bowPressure = norm;
  else if (cc === 20) params.bowVelocity = norm;
  else if (cc === 21) params.bodyTap = norm;
  else if (cc === 22) params.pluckPosition = norm;
  else if (cc === 24) params.pressure = norm;
  else if (cc === 25) params.resonance = norm;
}

export async function renderPerformanceToMp3(
  perf: Performance,
  options: Mp3RenderOptions,
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  checkAbort(options.signal);
  const sampleRate = 44100;
  const duration = Math.max(1, perf.duration + (perf.tail || 3));
  const totalSamples = Math.ceil(duration * sampleRate);
  const selected = options.selectedTrackIds ? new Set(options.selectedTrackIds) : null;
  const hasSolo = options.mixState?.solo && Object.values(options.mixState.solo).some(Boolean);

  const activeTrackIds = [...new Set(perf.notes.map(n => n.trackId))].filter(id => {
    if (selected && !selected.has(id)) return false;
    if (options.mixState) {
      if (hasSolo && !options.mixState.solo?.[id]) return false;
      if (!hasSolo && options.mixState.muted?.[id]) return false;
    }
    return true;
  });

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
      encodingPeakTrim: options.format === 'wav' ? 1 : metrics.samplePeak > 0.965 ? 0.965 / metrics.samplePeak : 1 });
  };

  // Accumulate directly into Web Audio bus buffers, avoiding six full-song
  // copies during mastering. Node/raw-stem exports use plain typed arrays.
  const masterContext = !options.rawStem && !options.bypassWebAudioMaster && typeof OfflineAudioContext !== 'undefined'
    ? new OfflineAudioContext(2, totalSamples, sampleRate) : undefined;
  const makeBus = () => {
    const buffer = masterContext?.createBuffer(2, totalSamples, sampleRate);
    return { buffer, left: buffer?.getChannelData(0) ?? new Float32Array(totalSamples), right: buffer?.getChannelData(1) ?? new Float32Array(totalSamples) };
  };
  const drums = makeBus(), sub = makeBus(), instruments = makeBus();
  const drumBusL = drums.left, drumBusR = drums.right;
  const subBusL = sub.left, subBusR = sub.right;
  const instBusL = instruments.left, instBusR = instruments.right;

  const BLOCK_SIZE = 64;
  const totalTracks = Math.max(1, activeTrackIds.length);

  // Render each track in isolation (Stem-by-Stem Sequential Rendering)
  for (let tIdx = 0; tIdx < activeTrackIds.length; tIdx++) {
    checkAbort(options.signal);
    await yieldToUI();
    const trackId = activeTrackIds[tIdx];
    const trackNotes = notesByTrack.get(trackId) ?? [];
    if (trackNotes.length === 0) continue;

    const instrumentId = options.trackInstruments.get(trackId) || trackId;
    const instDef = INSTRUMENTS_BY_ID[instrumentId];
    const params = resolveTrackSound(instrumentId, options.worldId, options.styleId, options.trackRoles?.get(trackId) ?? perf.trackInfo?.[trackId]?.role);

    let trackMixVolume = 1.0;
    const controllerGain = { volume: 1, expression: 1 };
    if (options.mixState) {
      if (options.mixState.volume?.[trackId] !== undefined) {
        trackMixVolume = options.mixState.volume[trackId];
      }
      if (options.mixState.pan?.[trackId] !== undefined) {
        params.pan = options.mixState.pan[trackId];
      }
    }

    // Determine active time window for this track to avoid rendering silence
    let minNoteTime = Infinity;
    let maxNoteEndTime = 0;
    for (const n of trackNotes) {
      if (n.time < minNoteTime) minNoteTime = n.time;
      const end = n.time + n.dur;
      if (end > maxNoteEndTime) maxNoteEndTime = end;
    }

    const tailSec = Math.max(1.5, Math.min(4.0, (params.decay || 1.0) * 1.5));
    const trackStartSample = Math.max(0, Math.floor(minNoteTime * sampleRate));
    const trackEndSample = Math.min(totalSamples, Math.ceil((maxNoteEndTime + tailSec) * sampleRate));
    const trackSamples = trackEndSample - trackStartSample;
    if (trackSamples <= 0) continue;

    const trackCCs = ccsByTrack.get(trackId) ?? [];

    // Apply any initial CC values before track start
    for (const cc of trackCCs) {
      const s = Math.round(cc.time * sampleRate);
      if (s <= trackStartSample) {
        applyCCToParams(params, cc.cc, cc.value, trackMixVolume, controllerGain);
      }
    }

    // Check aggressive PCM stem cache (Tier 2 Performance Cell fingerprint)
    const stemFingerprint = computeTrackStemFingerprint(
      trackId,
      instrumentId,
      params,
      trackMixVolume,
      trackNotes,
      trackCCs,
      sampleRate,
    );

    const cacheKey = `${stemFingerprint}:${trackStartSample}:${trackSamples}:v2`;
    let stem = stemCache.get(cacheKey);

    if (!stem) {
      // Right-size polyphony demand for this track
      const times: { t: number; d: number }[] = [];
      for (const n of trackNotes) {
        times.push({ t: n.time, d: 1 });
        times.push({ t: n.time + n.dur, d: -1 });
      }
      times.sort((a, b) => a.t - b.t || a.d - b.d);
      let curr = 0;
      let maxConcurrent = 0;
      for (const item of times) {
        curr += item.d;
        if (curr > maxConcurrent) maxConcurrent = curr;
      }
      const defPolyphony = instDef?.polyphony ?? (params.model === 4 ? 8 : params.model === 3 ? 3 : 8);
      const voiceCount = Math.max(2, Math.min(Math.min(12, defPolyphony), maxConcurrent + 2));

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

      trackEvents.sort((a, b) => a.sample - b.sample);

      // Initialize an isolated, lightweight OfflineRenderer for this single track
      const core = new OfflineRenderer();
      await core.initialize({
        sampleRate,
        numInputChannels: 0,
        numOutputChannels: 2,
        blockSize: BLOCK_SIZE,
      });

      let currentSig = renderTrack(trackId, voices, params);
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

        while (eventIdx < trackEvents.length && trackEvents[eventIdx].sample < nextBlockLimit) {
          const event = trackEvents[eventIdx++];
          if (event.kind === 'on') {
            const noteMidi = event.note.midi;
            const rendered = resolveRenderGesture(instrumentId, event.note.gestureCode);
            const hitGainMultiplier = rendered.gainMultiplier;

            // Track gain is static. Per-note dynamics belong to the voice, not the
            // whole track; changing params.volume here used to pump every sounding
            // voice whenever a new note arrived.
            params.volume = resolveTrackGain(params, trackMixVolume, controllerGain.volume, controllerGain.expression);

            // Prefer idle voice; if all busy, steal oldest
            const idleVoices = voices.filter(v => v.gate === 0);
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

            voice.note = noteMidi;
            voice.noteInstanceId = event.noteInstanceId;
            const targetFreq = Math.max(20, event.note.frequencyHz ?? midiToFreq(noteMidi));
            voice.frequencyHz = targetFreq;
            voice.baseFrequencyHz = targetFreq;
            voice.triggerSeq = ++eventSeq;
            voice.velocity = Math.max(0, Math.min(1, (event.note.vel / 127) * hitGainMultiplier));
            voice.articulation = rendered.articulationNorm;
            voice.bellowsDirectionCode = event.note.bellowsDirectionCode;
            voice.bandoneonButtonId = event.note.bandoneonButtonId;
            voice.bandoneonButtonIndex = event.note.bandoneonButtonIndex;
            voice.bandoneonSideCode = event.note.bandoneonSideCode;
            voice.gate = 1;

            voice.action = rendered.action;
            voice.excitationType = rendered.excitationOverride ?? params.excitationType;
            voice.harmonicRichnessDelta = rendered.harmonicRichnessDelta;
            voice.decayTimeFactorScale = rendered.decayTimeFactorScale;


            graphDirty = true;
          } else if (event.kind === 'off') {
            const activeVoices = voices.filter(v => v.noteInstanceId === event.noteInstanceId && v.gate === 1);
            for (const voice of activeVoices) {
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
            applyCCToParams(params, event.cc.cc, event.cc.value, trackMixVolume, controllerGain);
            graphDirty = true;
          }
        }

        if (graphDirty) {
          currentSig = renderTrack(trackId, voices, params);
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
        const frames = Math.min(BLOCK_SIZE * 128, trackSamples - cursor, Math.max(BLOCK_SIZE, nextEventBoundary - cursor));
        core.process([], [trackLeft.subarray(cursor, cursor + frames), trackRight.subarray(cursor, cursor + frames)]);

        cursor += frames;
      }

      } finally { core.reset(); }

      stem = {
        left: trackLeft,
        right: trackRight,
        startSample: trackStartSample,
      };

      stemCache.set(cacheKey, stem);
    }

    if (options.onDiagnostics) options.onDiagnostics({ stage: 'stem', id: trackId, instrumentId,
      bus: determineBusCategory(instDef?.acousticProfile?.role, instrumentId),
      metrics: measureAudio(stem.left, stem.right, sampleRate), trackLevel: trackMixVolume,
      resolvedGain: resolveTrackGain(params, trackMixVolume, controllerGain.volume, controllerGain.expression) });

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
  const headroomTrim = options.rawStem ? 1 : ensembleHeadroom(activeTrackIds.length, styleMaster.lift);
  if (!options.rawStem && headroomTrim < 1.0) {
    for (let i = 0; i < totalSamples; i++) {
      drumBusL[i] *= headroomTrim;
      drumBusR[i] *= headroomTrim;
      subBusL[i] *= headroomTrim;
      subBusR[i] *= headroomTrim;
      instBusL[i] *= headroomTrim;
      instBusR[i] *= headroomTrim;
    }
  }

  if (options.onDiagnostics) {
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
    if (options.format === 'wav') { onProgress?.(1); return wavBlob(renderedLeft, renderedRight, sampleRate, options.rawStem); }
    return encodeMp3(renderedLeft, renderedRight, sampleRate, fraction => onProgress?.(0.85 + fraction * 0.15), options.signal);
  }

  // Master Processing via Web Audio OfflineAudioContext
  const offlineCtx = masterContext;
  const offlineChain = createMasterChain(offlineCtx, mixCharacter, mixContext);

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

  if (onProgress) onProgress(0.78);

  checkAbort(options.signal);
  const rendered = await offlineCtx.startRendering().finally(() => offlineChain.dispose());

  if (onProgress) onProgress(0.85);

  const renderedLeft = rendered.getChannelData(0);
  const renderedRight = rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : renderedLeft;

  if (!options.rawStem && styleBlueprint?.dspProfile) {
    processOfflineAudioDSP(renderedLeft, renderedRight, styleBlueprint.dspProfile);
  }

  observeOutput(renderedLeft, renderedRight, true);
  checkAbort(options.signal);
  if (options.format === 'wav') { onProgress?.(1); return wavBlob(renderedLeft, renderedRight, sampleRate, options.rawStem); }
  return encodeMp3(renderedLeft, renderedRight, sampleRate, fraction => onProgress?.(0.85 + fraction * 0.15), options.signal);
}
