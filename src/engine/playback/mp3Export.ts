import { ELECTRONIC_PLAYBACK_INSTRUMENT_PATTERN } from '../../data/instruments/idClassifiers';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { computeTrackStemFingerprint, stemCache } from '../cache/stemCache.ts';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from '../band/performanceData.ts';
import { getLuthierModelForInstrument } from './luthier.ts';
import { resolveDialect, performanceModeForContext } from '../band/genreDialect.ts';
import { createMasterChain, getRoleGainLinear, type StudioMixState } from '../studio/mixer.ts';
import { contractForGenre } from '../../engine/style/contracts';
import { resolveStyle } from '../../engine/style';
import { FORM_BLUEPRINTS } from '../../data/genreForms';
import { processOfflineAudioDSP } from '../studio/effects.ts';
import { spotlightGain } from '../band/spotlight.ts';
import { resolveRenderGesture } from './renderGesture.ts';
import {
  defaultTrackParams,
  modelForInstrument,
  makeupGainFor,
  renderTrack,
  determineBusCategory,
  midiToFreq,
  type TrackParams,
  type VoiceState,
} from './elementaryEngine.ts';

export interface Mp3RenderOptions {
  selectedTrackIds?: string[];
  trackInstruments: Map<string, string>;
  worldId?: string;
  styleId?: string;
  bypassWebAudioMaster?: boolean;
  mixState?: StudioMixState;
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
  instDef: import('../../data/instruments/schema/instrument-def').InstrumentDef | undefined,
  roleGain: number,
  trackMixVolume: number,
  controllerGain: { volume: number; expression: number },
) {
  const norm = value / 127;
  if (cc === 7 || cc === 11) {
    if (cc === 7) controllerGain.volume = norm;
    else controllerGain.expression = norm;
    const isElectronic =
      instDef?.family === 'electronic' ||
      instDef?.elementaryModel === 9 ||
      ELECTRONIC_PLAYBACK_INSTRUMENT_PATTERN.test((params.instrumentId || '').toLowerCase());
    const baseGain = instDef?.makeupGain ?? makeupGainFor(isElectronic ? 9 : params.model, params.instrumentId);
    params.volume = Math.max(0, Math.min(35, baseGain * roleGain * trackMixVolume * controllerGain.volume * controllerGain.expression));
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
  const sampleRate = 44100;
  const duration = Math.max(1, perf.duration + (perf.tail || 3));
  const totalSamples = Math.ceil(duration * sampleRate);
  const selected = options.selectedTrackIds?.length ? new Set(options.selectedTrackIds) : null;
  const hasSolo = options.mixState?.solo && Object.values(options.mixState.solo).some(Boolean);
  const hasSpotlight = Object.values(options.mixState?.spotlight ?? {}).some(mode => mode === 'on');

  const activeTrackIds = [...new Set(perf.notes.map(n => n.trackId))].filter(id => {
    if (selected && !selected.has(id)) return false;
    if (options.mixState) {
      if (hasSolo && !options.mixState.solo?.[id]) return false;
      if (!hasSolo && options.mixState.muted?.[id]) return false;
    }
    return true;
  });

  if (onProgress) onProgress(0.02);

  let mixCharacter: import('../../engine/style/contracts').MixCharacter | undefined;
  let styleMaster = { pocket: 0.5, lift: 0.5 };
  if (options.worldId) {
    try {
      mixCharacter = contractForGenre(options.worldId)?.timbreSpace?.mixCharacter;
      if (options.styleId) {
        const resolved = resolveStyle({ genreId: options.worldId, styleId: options.styleId });
        styleMaster = {
          pocket: resolved.sound.masterProfile?.pocket ?? 0.5,
          lift: resolved.sound.masterProfile?.lift ?? 0.5,
        };
        if (mixCharacter) {
          mixCharacter = {
            ...mixCharacter,
            dryness: Math.max(0, Math.min(1, mixCharacter.dryness + (styleMaster.pocket - 0.5) * 0.18)),
            transientSnap: Math.max(0, Math.min(1, (mixCharacter.transientSnap ?? 0.3) + (styleMaster.lift - 0.5) * 0.18)),
          };
        }
      }
    } catch {
      mixCharacter = undefined;
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
    const roleGain = getRoleGainLinear(role, options.worldId || 'default', instrumentId);
    params.roleGain = roleGain;

    let trackMixVolume = 1.0;
    const controllerGain = { volume: 1, expression: 1 };
    if (options.mixState) {
      if (options.mixState.volume?.[trackId] !== undefined) {
        trackMixVolume = options.mixState.volume[trackId];
      }
      trackMixVolume *= spotlightGain(options.mixState.spotlight?.[trackId], hasSpotlight);
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
        applyCCToParams(params, cc.cc, cc.value, instDef, roleGain, trackMixVolume, controllerGain);
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
              ELECTRONIC_PLAYBACK_INSTRUMENT_PATTERN.test(
                (params.instrumentId || '').toLowerCase(),
              );
            const effectiveModelForGain = isElectronic ? 9 : params.model;
            const baseGain = instDef?.makeupGain ?? makeupGainFor(effectiveModelForGain, params.instrumentId);

            const rendered = resolveRenderGesture(instrumentId, event.note.gestureCode);
            const hitGainMultiplier = rendered.gainMultiplier;

            const role = instDef?.acousticProfile?.role || 'comp';
            const roleGain = params.roleGain ?? getRoleGainLinear(role, options.worldId || 'default', instrumentId);
            // Track gain is static. Per-note dynamics belong to the voice, not the
            // whole track; changing params.volume here used to pump every sounding
            // voice whenever a new note arrived.
            params.volume = Math.max(0, Math.min(35, baseGain * roleGain * trackMixVolume * controllerGain.volume * controllerGain.expression));

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
            voice.velocity = Math.max(0.01, Math.min(1.0, event.note.vel / 127)) * hitGainMultiplier;
            voice.articulation = rendered.articulationNorm;
            voice.bellowsDirectionCode = event.note.bellowsDirectionCode;
            voice.bandoneonButtonId = event.note.bandoneonButtonId;
            voice.bandoneonButtonIndex = event.note.bandoneonButtonIndex;
            voice.bandoneonSideCode = event.note.bandoneonSideCode;
            voice.gate = 1;

            voice.action = rendered.action;
            voice.excitationType = rendered.excitationType;


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
            applyCCToParams(params, event.cc.cc, event.cc.value, instDef, roleGain, trackMixVolume, controllerGain);
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

      stemCache.set(stemFingerprint, stem);
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
  const styleLift = 0.94 + styleMaster.lift * 0.12;
  const headroomTrim = Math.min(1.0, (1.8 / Math.sqrt(Math.max(1, activeTrackIds.length))) * styleLift);
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

  const styleBlueprint = options.styleId ? FORM_BLUEPRINTS[options.styleId] : (options.worldId ? FORM_BLUEPRINTS[options.worldId] : undefined);

  // Node/CI environments do not expose Web Audio's OfflineAudioContext. Keep a
  // deterministic export path for isolated instrument validation: the exact same
  // Elementary-rendered stems are emitted without pretending that the browser
  // studio master chain ran. Browser production exports continue through the full
  // Web Audio master chain below.
  if (options.bypassWebAudioMaster || typeof OfflineAudioContext === 'undefined') {
    const renderedLeft = new Float32Array(totalSamples);
    const renderedRight = new Float32Array(totalSamples);
    for (let i = 0; i < totalSamples; i++) {
      renderedLeft[i] = drumBusL[i] + subBusL[i] + instBusL[i];
      renderedRight[i] = drumBusR[i] + subBusR[i] + instBusR[i];
    }
    if (styleBlueprint?.dspProfile) processOfflineAudioDSP(renderedLeft, renderedRight, styleBlueprint.dspProfile);
    let peak = 0;
    for (let i = 0; i < totalSamples; i++) peak = Math.max(peak, Math.abs(renderedLeft[i]), Math.abs(renderedRight[i]));
    const scalar = peak > 0.965 ? 0.965 / peak : 1;
    const fade = Math.min(totalSamples, Math.round(sampleRate * 0.008));
    const leftInt16 = new Int16Array(totalSamples);
    const rightInt16 = new Int16Array(totalSamples);
    for (let i = 0; i < totalSamples; i++) {
      const edge = i < fade ? i / Math.max(1, fade) : i >= totalSamples - fade ? (totalSamples - i) / Math.max(1, fade) : 1;
      leftInt16[i] = Math.max(-32768, Math.min(32767, Math.round(renderedLeft[i] * scalar * edge * 32767)));
      rightInt16[i] = Math.max(-32768, Math.min(32767, Math.round(renderedRight[i] * scalar * edge * 32767)));
    }
    const { Mp3Encoder } = await import('@breezystack/lamejs');
    const encoder = new Mp3Encoder(2, sampleRate, 192);
    const mp3Data: Uint8Array[] = [];
    for (let i = 0; i < totalSamples; i += 1152) {
      const chunk = encoder.encodeBuffer(leftInt16.subarray(i, Math.min(i + 1152, totalSamples)), rightInt16.subarray(i, Math.min(i + 1152, totalSamples)));
      if (chunk?.length) mp3Data.push(chunk);
    }
    const flush = encoder.flush();
    if (flush?.length) mp3Data.push(flush);
    if (!mp3Data.length) throw new Error('MP3 encoder returned no audio frames');
    onProgress?.(1);
    return new Blob(mp3Data, { type: 'audio/mpeg' });
  }

  // Master Processing via Web Audio OfflineAudioContext
  const offlineCtx = new OfflineAudioContext(2, totalSamples, sampleRate);
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

  const { Mp3Encoder } = await import('@breezystack/lamejs');
  const encoder = new Mp3Encoder(2, sampleRate, 192);
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
