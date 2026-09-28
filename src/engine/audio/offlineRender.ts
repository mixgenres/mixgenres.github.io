import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import * as lamejsModule from '@breezystack/lamejs';
import { Mp3Encoder } from '@breezystack/lamejs';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from '../sequencing/perform';
import { getLuthierModelForInstrument } from './LuthierAPI';
import { resolveDialect, performanceModeForContext } from '../theory/dialects';
import { createMasterChain, getRoleGainLinear } from './mixer';
import { contractForGenre } from '../../data/styles/contracts';
import { FORM_BLUEPRINTS } from '../../data/genreForms';
import { processOfflineAudioDSP } from '../dsp/processor';
import { resolveRenderGesture } from './renderGesture';
import {
  defaultTrackParams,
  modelForInstrument,
  makeupGainFor,
  renderTrack,
  determineBusCategory,
  midiToFreq,
  type TrackParams,
  type VoiceState,
} from '../elementary/elementaryEngine';

const Mp3EncoderClass: any =
  Mp3Encoder ||
  (lamejsModule as any).Mp3Encoder ||
  (lamejsModule as any).default?.Mp3Encoder ||
  (lamejsModule as any).default;

export interface StemCacheEntry {
  left: Float32Array;
  right: Float32Array;
  startSample: number;
}

export const stemCache = new Map<string, StemCacheEntry>();
const MAX_STEM_CACHE_SIZE = 128;

export function clearStemCache(): void {
  stemCache.clear();
}

/**
 * Computes a deterministic hash representing a track's Tier 2 Performance Cell.
 * Incorporates the track's instrument assignment, static macro parameters,
 * track-level mix volume/pan, sample rate, and the exact sequence of timed notes & CCs.
 */
export function computeTrackStemFingerprint(
  trackId: string,
  instrumentId: string,
  params: TrackParams,
  trackMixVolume: number,
  trackNotes: PerfNote[],
  trackCCs: PerfCC[],
  sampleRate: number = 44100,
): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;

  function update(str: string) {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      h1 ^= code;
      h1 = Math.imul(h1, 0x01000193);
      h2 ^= code;
      h2 = Math.imul(h2, 0x27d4eb2d);
    }
    h1 ^= 0x7c; // pipe separator
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= 0x7c;
    h2 = Math.imul(h2, 0x27d4eb2d);
  }

  // 1. Static instrument assignment & macro parameters
  update(trackId);
  update(instrumentId);
  update(String(params.model));
  update(params.dialect || '');
  update(params.performanceMode || '');
  update(params.decay.toFixed(3));
  update(params.brightness.toFixed(3));
  update(params.articulation.toFixed(3));
  update(params.pluckPosition.toFixed(3));
  update(params.bowPressure.toFixed(3));
  update(params.contact.toFixed(3));
  update(params.drive.toFixed(3));
  update(params.body.toFixed(3));
  update(params.tension.toFixed(3));
  update((params.bendGlideMs ?? 0).toFixed(1));
  update(params.pan.toFixed(3));
  update(trackMixVolume.toFixed(3));
  update(String(sampleRate));

  // 2. Exact sequence of timed notes
  const sortedNotes = trackNotes.slice().sort((a, b) => a.time - b.time || a.midi - b.midi || a.dur - b.dur);
  update(`notes_${sortedNotes.length}`);
  for (let i = 0; i < sortedNotes.length; i++) {
    const n = sortedNotes[i];
    let s = `${n.time.toFixed(4)},${n.dur.toFixed(4)},${n.midi},${n.vel},${n.gestureCode},${n.frequencyHz ? n.frequencyHz.toFixed(2) : ''}`;
    if (n.pitchBend && n.pitchBend.length > 0) {
      s += ':' + n.pitchBend.map(p => `${p.offset.toFixed(4)}@${p.value}`).join(';');
    }
    update(s);
  }

  // 3. Exact sequence of timed CCs
  const sortedCCs = trackCCs.slice().sort((a, b) => a.time - b.time || a.cc - b.cc);
  update(`ccs_${sortedCCs.length}`);
  for (let i = 0; i < sortedCCs.length; i++) {
    const c = sortedCCs[i];
    update(`${c.time.toFixed(4)},${c.cc},${c.value}`);
  }

  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

type TrackRenderEvent =
  | { sample: number; kind: 'on'; note: PerfNote }
  | { sample: number; kind: 'off'; midi: number }
  | { sample: number; kind: 'cc'; cc: PerfCC }
  | { sample: number; kind: 'bend'; value: number; targetMidi?: number };

function applyCCToParams(
  params: TrackParams,
  cc: number,
  value: number,
  instDef: any,
  trackMixVolume: number,
) {
  const norm = value / 127;
  if (cc === 7 || cc === 11) {
    const isElectronic =
      instDef?.family === 'electronic' ||
      instDef?.elementaryModel === 9 ||
      /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test(
        (params.instrumentId || '').toLowerCase(),
      );
    const effectiveModelForGain = isElectronic ? 9 : params.model;
    const baseGain = instDef?.makeupGain ?? makeupGainFor(effectiveModelForGain, params.instrumentId);
    params.volume = Math.max(0.01, Math.min(35, norm * baseGain * trackMixVolume));
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
  options: {
    selectedTrackIds?: string[];
    trackInstruments: Map<string, string>;
    worldId?: string;
    styleId?: string;
    mixState?: {
      volume?: Record<string, number>;
      pan?: Record<string, number>;
      muted?: Record<string, boolean>;
      solo?: Record<string, boolean>;
      spotlight?: Record<string, string>;
    };
  },
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  const sampleRate = 44100;
  const duration = Math.max(1, perf.duration + (perf.tail || 3));
  const totalSamples = Math.ceil(duration * sampleRate);
  const selected = options.selectedTrackIds?.length ? new Set(options.selectedTrackIds) : null;
  const hasSolo = options.mixState?.solo && Object.values(options.mixState.solo).some(Boolean);

  const activeTrackIds = [...new Set(perf.notes.map(n => n.trackId))].filter(id => {
    if (selected && !selected.has(id)) return false;
    if (options.mixState) {
      if (hasSolo && !options.mixState.solo?.[id]) return false;
      if (!hasSolo && options.mixState.muted?.[id]) return false;
    }
    return true;
  });

  if (onProgress) onProgress(0.02);

  let mixCharacter: import('../../data/styles/contracts').MixCharacter | undefined;
  if (options.worldId) {
    try {
      mixCharacter = contractForGenre(options.worldId)?.timbreSpace?.mixCharacter;
    } catch {
      /* ignore */
    }
  }

  // Pre-allocate 3 stereo stem bus buffers: drums, sub, and instruments
  const drumBusL = new Float32Array(totalSamples);
  const drumBusR = new Float32Array(totalSamples);
  const subBusL = new Float32Array(totalSamples);
  const subBusR = new Float32Array(totalSamples);
  const instBusL = new Float32Array(totalSamples);
  const instBusR = new Float32Array(totalSamples);

  const BLOCK_SIZE = 64;
  const totalTracks = Math.max(1, activeTrackIds.length);

  // Render each track in isolation (Stem-by-Stem Sequential Rendering)
  for (let tIdx = 0; tIdx < activeTrackIds.length; tIdx++) {
    const trackId = activeTrackIds[tIdx];
    const trackNotes = perf.notes.filter(n => n.trackId === trackId);
    if (trackNotes.length === 0) continue;

    const instrumentId = options.trackInstruments.get(trackId) || trackId;
    const instDef = INSTRUMENTS_BY_ID[instrumentId];
    let luthier = instDef?.luthierPhysics ?? getLuthierModelForInstrument(instrumentId);
    const model = instDef?.elementaryModel ?? modelForInstrument(instrumentId);
    const params = defaultTrackParams(instrumentId, luthier, model);
    params.performanceMode = performanceModeForContext(options.worldId ?? '', options.styleId ?? '');
    const dialect = resolveDialect(instrumentId, options.worldId ?? '', options.styleId ?? '');
    if (options.worldId) {
      params.genreId = options.worldId;
    }
    if (dialect) {
      params.dialect = dialect.id;
      params.performanceMode = dialect.performanceMode;
      if (dialect.pluckPositionOverride !== undefined) params.pluckPosition = dialect.pluckPositionOverride;
      if (dialect.bowPressureOverride !== undefined) params.bowPressure = dialect.bowPressureOverride;
      if (dialect.contactPointOverride !== undefined) params.contact = dialect.contactPointOverride;
      if (dialect.brightnessMultiplier !== undefined) params.brightness *= dialect.brightnessMultiplier;
      if (dialect.decayMultiplier !== undefined) params.decay *= dialect.decayMultiplier;
      if (dialect.bodyMultiplier !== undefined) params.body *= dialect.bodyMultiplier;
      if (dialect.bendGlideMs !== undefined) params.bendGlideMs = dialect.bendGlideMs;
    }

    const role = instDef?.acousticProfile?.role || 'comp';
    const roleGain = getRoleGainLinear(role, options.styleId || 'default');
    params.roleGain = roleGain;

    let trackMixVolume = 1.0;
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

    const trackCCs = perf.ccs.filter(c => c.trackId === trackId);

    // Apply any initial CC values before track start
    for (const cc of trackCCs) {
      const s = Math.round(cc.time * sampleRate);
      if (s <= trackStartSample) {
        applyCCToParams(params, cc.cc, cc.value, instDef, trackMixVolume);
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

    let stem = stemCache.get(stemFingerprint);

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
      for (const note of trackNotes) {
        const start = Math.round(note.time * sampleRate) - trackStartSample;
        const end = Math.round((note.time + note.dur) * sampleRate) - trackStartSample;
        if (start >= 0 && start < trackSamples) {
          trackEvents.push({ sample: start, kind: 'on', note });
        }
        if (end >= 0 && end <= trackSamples) {
          trackEvents.push({ sample: end, kind: 'off', midi: note.midi });
        }
        for (const bend of note.pitchBend ?? []) {
          const bendSample = Math.round((note.time + bend.offset) * sampleRate) - trackStartSample;
          if (bendSample >= 0 && bendSample < trackSamples) {
            trackEvents.push({ sample: bendSample, kind: 'bend', value: bend.value, targetMidi: note.midi });
          }
        }
        if (note.pitchBend?.length) {
          const lastBend = note.pitchBend[note.pitchBend.length - 1];
          const unbendSample = Math.round((note.time + lastBend.offset + 0.05) * sampleRate) - trackStartSample;
          if (unbendSample >= 0 && unbendSample < end && unbendSample < trackSamples) {
            trackEvents.push({ sample: unbendSample, kind: 'bend', value: 8192, targetMidi: note.midi });
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
      const stepBlock = [new Float32Array(BLOCK_SIZE), new Float32Array(BLOCK_SIZE)];

      let eventIdx = 0;
      let cursor = 0;
      let eventSeq = 0;
      let syncCount = 0;

      while (cursor < trackSamples) {
        const nextBlockLimit = cursor + BLOCK_SIZE;
        let graphDirty = false;

        while (eventIdx < trackEvents.length && trackEvents[eventIdx].sample < nextBlockLimit) {
          const event = trackEvents[eventIdx++];
          if (event.kind === 'on') {
            const noteMidi = event.note.midi;
            const isElectronic =
              instDef?.family === 'electronic' ||
              instDef?.elementaryModel === 9 ||
              /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test(
                (params.instrumentId || '').toLowerCase(),
              );
            const effectiveModelForGain = isElectronic ? 9 : params.model;
            const baseGain = instDef?.makeupGain ?? makeupGainFor(effectiveModelForGain, params.instrumentId);

            const rendered = resolveRenderGesture(instrumentId, event.note.gestureCode);
            const hitGainMultiplier = rendered.gainMultiplier;

            const role = instDef?.acousticProfile?.role || 'comp';
            const roleGain = params.roleGain ?? getRoleGainLinear(role, options.styleId || 'default');
            const velScaled = Math.max(0.01, Math.min(1.0, event.note.vel / 127)) * hitGainMultiplier;
            params.volume = Math.max(0.01, Math.min(35, velScaled * baseGain * roleGain * trackMixVolume));
            params.articulation = rendered.articulationNorm;

            // Prefer idle voice; if all busy, steal oldest
            const idleVoices = voices.filter(v => v.gate === 0);
            let voice: VoiceState;
            if (idleVoices.length > 0) {
              voice = idleVoices.reduce((oldest, current) => {
                const oSeq = (oldest as any).triggerSeq ?? 0;
                const cSeq = (current as any).triggerSeq ?? 0;
                return cSeq < oSeq ? current : oldest;
              }, idleVoices[0]);
            } else {
              voice = voices.reduce((oldest, current) => {
                const oSeq = (oldest as any).triggerSeq ?? 0;
                const cSeq = (current as any).triggerSeq ?? 0;
                return cSeq < oSeq ? current : oldest;
              }, voices[0]);
              voice.retriggerId = (voice.retriggerId || 0) + 1;
            }

            voice.note = noteMidi;
            const targetFreq = Math.max(20, event.note.frequencyHz ?? midiToFreq(noteMidi));
            voice.frequencyHz = targetFreq;
            (voice as any).baseFrequencyHz = targetFreq;
            (voice as any).triggerSeq = ++eventSeq;
            voice.velocity = velScaled;
            voice.gate = 1;

            voice.action = rendered.action;
            voice.excitationType = rendered.excitationType;

            voice.attack = (event.note as any).attack;
            voice.decay = (event.note as any).decay;
            voice.sustain = (event.note as any).sustain;
            voice.release = (event.note as any).release;

            graphDirty = true;
          } else if (event.kind === 'off') {
            const roundedMidi = Math.round(event.midi);
            const activeVoices = voices.filter(
              v => (v.note === event.midi || Math.round(v.note) === roundedMidi) && v.gate === 1,
            );
            for (const voice of activeVoices) {
              voice.gate = 0;
              if ((voice as any).baseFrequencyHz) {
                voice.frequencyHz = (voice as any).baseFrequencyHz;
              }
              graphDirty = true;
            }
          } else if (event.kind === 'bend') {
            const activeVoices = voices.filter(v => v.gate === 1);
            if (activeVoices.length > 0) {
              const semitones = ((event.value - 8192) / 8192) * 2;
              const bendRatio = Math.pow(2, semitones / 12);
              const targetVoice =
                (event.targetMidi !== undefined
                  ? activeVoices.find(v => Math.round(v.note) === Math.round(event.targetMidi!))
                  : undefined) ??
                activeVoices.reduce((latest, current) => {
                  const tSeq = (current as any).triggerSeq ?? 0;
                  const lSeq = (latest as any).triggerSeq ?? 0;
                  return tSeq >= lSeq ? current : latest;
                }, activeVoices[0]);

              const base =
                (targetVoice as any).baseFrequencyHz ?? targetVoice.frequencyHz ?? midiToFreq(targetVoice.note);
              (targetVoice as any).baseFrequencyHz = base;
              targetVoice.frequencyHz = base * bendRatio;
              graphDirty = true;
            }
          } else if (event.kind === 'cc') {
            applyCCToParams(params, event.cc.cc, event.cc.value, instDef, trackMixVolume);
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

        core.process([], stepBlock);

        const frames = Math.min(BLOCK_SIZE, trackSamples - cursor);
        for (let i = 0; i < frames; i++) {
          trackLeft[cursor + i] = stepBlock[0][i] || 0;
          trackRight[cursor + i] = stepBlock[1][i] || 0;
        }

        cursor += frames;
      }

      core.reset();

      stem = {
        left: trackLeft,
        right: trackRight,
        startSample: trackStartSample,
      };

      if (stemCache.size >= MAX_STEM_CACHE_SIZE) {
        const oldestKey = stemCache.keys().next().value;
        if (oldestKey !== undefined) {
          stemCache.delete(oldestKey);
        }
      }
      stemCache.set(stemFingerprint, stem);
    }

    // Accumulate the rendered stem into its target mix bus
    const busCategory = determineBusCategory(instDef?.family, instDef?.id || trackId);
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
  const headroomTrim = Math.min(1.0, 1.8 / Math.sqrt(Math.max(1, activeTrackIds.length)));
  if (headroomTrim < 1.0) {
    for (let i = 0; i < totalSamples; i++) {
      drumBusL[i] *= headroomTrim;
      drumBusR[i] *= headroomTrim;
      subBusL[i] *= headroomTrim;
      subBusR[i] *= headroomTrim;
      instBusL[i] *= headroomTrim;
      instBusR[i] *= headroomTrim;
    }
  }

  if (onProgress) onProgress(0.75);

  // Master Processing via Web Audio OfflineAudioContext
  let CtxClass: typeof OfflineAudioContext;
  if (typeof OfflineAudioContext !== 'undefined') {
    CtxClass = OfflineAudioContext;
  } else if (typeof (globalThis as any).webkitOfflineAudioContext !== 'undefined') {
    CtxClass = (globalThis as any).webkitOfflineAudioContext;
  } else {
    const pkg = 'node-web-audio-api';
    const nodeWebAudio = await import(/* @vite-ignore */ pkg);
    CtxClass = nodeWebAudio.OfflineAudioContext as unknown as typeof OfflineAudioContext;
  }
  const offlineCtx: OfflineAudioContext = new CtxClass(2, totalSamples, sampleRate);
  const offlineChain = createMasterChain(offlineCtx, mixCharacter, options.worldId);

  // Route Drums Stem to drumBus (waveshaper knock, kick filter)
  const drumBuffer = offlineCtx.createBuffer(2, totalSamples, sampleRate);
  drumBuffer.getChannelData(0).set(drumBusL);
  drumBuffer.getChannelData(1).set(drumBusR);
  const drumSource = offlineCtx.createBufferSource();
  drumSource.buffer = drumBuffer;
  drumSource.connect(offlineChain.drumBus);
  drumSource.start(0);

  // Route Sub Stem to subBus (sub-harmonic exciter, ducking)
  const subBuffer = offlineCtx.createBuffer(2, totalSamples, sampleRate);
  subBuffer.getChannelData(0).set(subBusL);
  subBuffer.getChannelData(1).set(subBusR);
  const subSource = offlineCtx.createBufferSource();
  subSource.buffer = subBuffer;
  subSource.connect(offlineChain.subBus);
  subSource.start(0);

  // Route Instruments Stem to instBus (crosstalk, Haas widening, EQ, glue comp)
  const instBuffer = offlineCtx.createBuffer(2, totalSamples, sampleRate);
  instBuffer.getChannelData(0).set(instBusL);
  instBuffer.getChannelData(1).set(instBusR);
  const instSource = offlineCtx.createBufferSource();
  instSource.buffer = instBuffer;
  instSource.connect(offlineChain.instBus);
  instSource.start(0);

  if (onProgress) onProgress(0.78);

  const rendered = await offlineCtx.startRendering();
  offlineChain.dispose();

  if (onProgress) onProgress(0.85);

  const renderedLeft = rendered.getChannelData(0);
  const renderedRight = rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : renderedLeft;

  const styleBlueprint = options.styleId ? FORM_BLUEPRINTS[options.styleId] : (options.worldId ? FORM_BLUEPRINTS[options.worldId] : undefined);
  if (styleBlueprint?.dspProfile) {
    processOfflineAudioDSP(renderedLeft, renderedRight, styleBlueprint.dspProfile);
  }

  let maxPeak = 0;
  for (let i = 0; i < totalSamples; i++) {
    const absL = Math.abs(renderedLeft[i]);
    const absR = Math.abs(renderedRight[i]);
    if (absL > maxPeak) maxPeak = absL;
    if (absR > maxPeak) maxPeak = absR;
  }
  const normScalar = maxPeak > 0.965 ? 0.965 / maxPeak : 1.0;

  const fadeInSamples = Math.min(totalSamples, Math.round(sampleRate * 0.008));
  const fadeOutSamples = Math.min(totalSamples, Math.round(sampleRate * 0.008));

  const leftInt16 = new Int16Array(totalSamples);
  const rightInt16 = new Int16Array(totalSamples);

  for (let i = 0; i < totalSamples; i++) {
    let fade = 1;
    if (i < fadeInSamples) fade *= i / Math.max(1, fadeInSamples);
    if (i >= totalSamples - fadeOutSamples) fade *= (totalSamples - i) / Math.max(1, fadeOutSamples);

    const lSample = renderedLeft[i] * normScalar * fade;
    const rSample = renderedRight[i] * normScalar * fade;

    leftInt16[i] = Math.max(-32768, Math.min(32767, Math.round(lSample * 32767)));
    rightInt16[i] = Math.max(-32768, Math.min(32767, Math.round(rSample * 32767)));
  }

  let EncoderCtor = Mp3EncoderClass;
  if (typeof EncoderCtor !== 'function') {
    try {
      if (typeof process !== 'undefined' && typeof process.cwd === 'function') {
        const fs = await import('fs');
        const path = await import('path');
        const candidatePaths = [
          path.resolve('node_modules/@breezystack/lamejs/dist/lamejs.iife.js'),
          path.resolve(process.cwd(), 'node_modules/@breezystack/lamejs/dist/lamejs.iife.js'),
        ];
        for (const p of candidatePaths) {
          if (fs.existsSync(p)) {
            const code = fs.readFileSync(p, 'utf8');
            const fn = new Function(code + '; return (typeof lamejs !== "undefined" ? lamejs : this.lamejs);');
            const res = fn();
            if (res?.Mp3Encoder) {
              EncoderCtor = res.Mp3Encoder;
              break;
            }
          }
        }
      }
    } catch {
      /* ignore */
    }
  }

  const encoder = new EncoderCtor(2, sampleRate, 192);
  const mp3Data: Uint8Array[] = [];
  const chunkSize = 1152;

  for (let i = 0; i < totalSamples; i += chunkSize) {
    const mp3buf = encoder.encodeBuffer(
      leftInt16.subarray(i, Math.min(i + chunkSize, totalSamples)),
      rightInt16.subarray(i, Math.min(i + chunkSize, totalSamples)),
    );
    if (mp3buf?.length) mp3Data.push(mp3buf);
    if (onProgress) onProgress(0.85 + (i / totalSamples) * 0.14);
  }

  const flush = encoder.flush();
  if (flush?.length) mp3Data.push(flush);
  if (!mp3Data.length) throw new Error('MP3 encoder returned no audio frames');
  onProgress?.(1);
  return new Blob(mp3Data, { type: 'audio/mpeg' });
}
