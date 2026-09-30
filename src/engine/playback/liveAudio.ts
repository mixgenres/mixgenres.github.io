/**
 * DECOLONIZED PHYSICAL MODELING AUDIO ENGINE
 * =========================================
 * Uses Elementary Audio declarative signal graphs for live synthesis and master processing.
 */

import { BandWorkletNode } from './bandWorklet.ts';
import { previewCulturalRules, culturalPitchSet, shoCluster, celticOpenHarmony } from '../sheet/culturalMaterial.ts';
import { parseChord, noteName as theoryNoteName, midiOf } from '../sheet/musicTheory.ts';
import { voiceProfile, foldToRange } from '../sheet/instrumentRoles.ts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { getLuthierModelForInstrument } from './luthier.ts';
import type { TransportSink } from './transport.ts';
import type { Performance } from '../band/performanceData.ts';

let ctx: AudioContext | null = null;
let bandWorklet: BandWorkletNode | null = null;

/** trackId -> instrumentId, so the sink can resolve a physical model per note
 *  even though the transport only ever hands it a bare trackId. Populated by
 *  the UI layer (App.tsx) from the current song's tracks whenever they change. */
const trackInstruments = new Map<string, string>();
let activeWorldId = '';
let activeStyleId = '';

export function setActiveWorld(worldId: string, styleId?: string) {
  activeWorldId = worldId;
  if (styleId !== undefined) activeStyleId = styleId;
  if (bandWorklet) {
    bandWorklet.setWorldAndStyle(worldId, styleId);
  }
}

export function setTrackInstruments(map: Record<string, string | undefined>) {
  trackInstruments.clear();
  for (const key of Object.keys(map)) {
    const v = map[key];
    if (v) trackInstruments.set(key, v);
  }
  if (bandWorklet) void bandWorklet.prepareTracks(trackInstruments);
}
let initPromise: Promise<BandWorkletNode> | null = null;

export let isRenderingMp3 = false;

export function getAudioContext(): AudioContext | null {
  return ctx;
}


export async function ensureSynth(): Promise<BandWorkletNode> {
  if (bandWorklet) return bandWorklet;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      if (!ctx) {
        const AudioCtx = window.AudioContext;
        ctx = new AudioCtx();
      }
      if (ctx.state === 'suspended') {
        try {
          await ctx.resume();
        } catch {
          // Resume on user action
        }
      }

      const node = new BandWorkletNode();
      await node.initialize(ctx, 1);
      bandWorklet = node;
      await node.prepareTracks(trackInstruments);
      return node;
    } catch (err) {
      console.error('Physical Modeling Worklet initialization error:', err);
      initPromise = null;
      throw err;
    }
  })();

  return initPromise;
}

export async function startAudio(): Promise<AudioContext | null> {
  try {
    if (!ctx) {
      const AudioCtx = window.AudioContext;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    await ensureSynth();
    return ctx;
  } catch (err) {
    console.error('Failed to start audio engine:', err);
    initPromise = null;
    throw err;
  }
}

export function stopAudio() {
  if (bandWorklet) {
    bandWorklet.clear();
  }
}

/** Stable id shared by noteOn/noteOff for the same physical voice, so a
 *  RELEASE message can actually find and stop the sustained voice it started
 *  (bowed strings, reed instruments, winds, held synth/pad notes). */
function voiceId(trackId: string | number, midi: number, noteInstanceId?: string): string {
  return noteInstanceId ? `${trackId}_${noteInstanceId}` : `${trackId}_${midi}`;
}

import { resolveDialect } from '../band/genreDialect.ts';
import { resolveTuningSystem } from '../sheet/tuning.ts';
import { getRoleGainLinear } from '../studio/mixer.ts';
import { resolveRenderGesture } from './renderGesture.ts';

export function createSink(): TransportSink {
  return {
    now: () => (ctx ? ctx.currentTime : 0),
    noteOn(trackId, midi, vel, time, gestureCode, frequencyHz, bellowsDirectionCode, bandoneonButtonId, bandoneonButtonIndex, bandoneonSideCode, noteInstanceId) {
      if (!bandWorklet) return;
      const instrumentId = trackInstruments.get(String(trackId)) ?? String(trackId);
      let luthier = getLuthierModelForInstrument(instrumentId);
      const vel01 = Math.max(0, Math.min(1, vel / 127));

      const dialect = resolveDialect(instrumentId, activeWorldId, activeStyleId);
      const tuningSystem = resolveTuningSystem(dialect?.tuningSystemId || (activeWorldId.includes('maqam') || activeWorldId.includes('middle_east') ? 'maqam-bayati' : activeWorldId.includes('blues') ? 'blues-continuum' : '12-tet'));
      const freqHz = frequencyHz ?? tuningSystem.getFrequencyHz(midi);

      const instDef = INSTRUMENTS_BY_ID[instrumentId];
      const rendered = resolveRenderGesture(instrumentId, gestureCode ?? 0);
      const action = rendered.action;
      if (rendered.categoryOverride) luthier = { ...luthier, category: rendered.categoryOverride };
      if (rendered.harmonicRichnessDelta !== 0 || rendered.decayTimeFactorScale !== 1) {
        luthier = {
          ...luthier,
          harmonicRichness: Math.max(0, Math.min(1, luthier.harmonicRichness + rendered.harmonicRichnessDelta)),
          decayTimeFactor: luthier.decayTimeFactor * rendered.decayTimeFactorScale,
        };
      }

      const role = instDef?.acousticProfile?.role || 'comp';
      const roleGain = getRoleGainLinear(role, activeWorldId || 'default', instrumentId);
      const deterministicJitter = (((Number(gestureCode ?? 0) * 1103515245 + midi * 12345 + Math.round(time * 1000)) >>> 0) / 0xffffffff) - 0.5;
      const contactPoint = Math.max(0.05, Math.min(0.95, dialect?.contactPointOverride ?? (rendered.contactPoint - (vel01 - 0.5) * 0.18 + deterministicJitter * 0.08)));
      const mass = Math.max(0.1, Math.min(0.95, rendered.mass + vel01 * 0.42 + deterministicJitter * 0.08));

      bandWorklet.postEvent({
        id: voiceId(trackId, midi, noteInstanceId),
        noteInstanceId,
        cyclePhase: 0,
        luthierObjectId: instrumentId,
        trackId: String(trackId),
        action: { type: action as import('./acousticEvent.ts').ExcitationActionType, force: vel01, contactPoint, mass },
        tuning: { baseFrequencyHz: freqHz, culturalMicrotoneCents: tuningSystem.getCentsOffset(midi) },
        spatialPosition: { x: 0, y: 0, z: 0 },
        luthier,
        worldId: activeWorldId,
        midi,
        velocity: vel,
        frequencyHz: freqHz,
        duration: 0.5,
        gestureCode,
        bellowsDirectionCode,
        bandoneonButtonId,
        bandoneonButtonIndex,
        bandoneonSideCode,
        roleGain,
      }, time);
    },
    noteOff(trackId, midi, time, noteInstanceId) {
      // Releases sustain-capable voices (bowed/reed/wind/held synth); a
      // no-op for decaying/percussive voices, which just ring out.
      if (bandWorklet) bandWorklet.postRelease(String(trackId), midi, time, noteInstanceId);
    },
    pitchBend(trackId, value, time) {
      if (bandWorklet) bandWorklet.postBend(String(trackId), value, time);
    },
    controlChange(trackId, cc, value, time) {
      if (bandWorklet) bandWorklet.postCC(String(trackId), cc, value, time);
    },
    setDrumChannel(_trackId, _isDrum) {
      // Percussive vs. pitched behaviour is carried by the luthier category.
    },
    allNotesOff() {
      if (bandWorklet) {
        bandWorklet.clear();
      }
    },
    setPlaybackEnabled(enabled) {
      bandWorklet?.setPlaybackEnabled(enabled);
    },
    softNotesOff() {
      if (bandWorklet) bandWorklet.softNotesOff();
    },
    processPendingEvents() {
      if (bandWorklet) bandWorklet.processPendingEvents();
    },
    setTrackVolume(trackId, volume, time) {
      if (bandWorklet) bandWorklet.setTrackVolume(String(trackId), volume, time);
    },
    setTrackMute(trackId, muted, time) {
      if (bandWorklet) bandWorklet.setTrackMute(String(trackId), muted, time);
    },
    setTrackPan(trackId, pan, time) {
      if (bandWorklet) bandWorklet.setTrackPan(String(trackId), pan, time);
    },
    setTrackSolo(trackId, solo, time) {
      if (bandWorklet) bandWorklet.setTrackSolo(String(trackId), solo, time);
    },
    setTrackSpotlight(trackId, mode, time) {
      if (bandWorklet) bandWorklet.setTrackSpotlight(String(trackId), mode, time);
    },
  };
}

import { NOTE_NAME_TO_PC } from '../../data/musicTheory/noteNameToPc';

export function chordRootMidi(chord: string): number {
  const m = chord.match(/^([A-G](?:#|b)?)/);
  return m ? (NOTE_NAME_TO_PC[m[1]] ?? 57) : 57;
}

export function midiToNoteName(midi: number): string {
  return theoryNoteName(midi);
}

export function getVoiceFeedSummary(instrumentId: string, chord: string) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) return null;
  if (def.kit || def.drum) {
    return {
      instrumentName: def.name,
      source: def.kit ? 'Percussion Membrane Mesh' : `Percussion (${def.drum?.high ?? 0}/${def.drum?.mid ?? 0}/${def.drum?.low ?? 0})`,
      voicing: 'rhythm / unpitched physical excitation',
      notes: def.kit ? ['Kick', 'Snare', 'Hat'] : ['Perc'],
    };
  }
  const parsed = parseChord(chord);
  const prof = voiceProfile(instrumentId);
  const culture = previewCulturalRules(instrumentId);
  if (culture) {
    const pcs = culturalPitchSet(culture, parsed.rootPc);
    const midis = culture.sourceModel === 'modal-drone' && def.voicing === 'chord'
      ? celticOpenHarmony(parsed.rootPc, prof, 0.84, 17)
      : instrumentId === 'sho'
        ? shoCluster(parsed.rootPc, prof, 0.84)
        : [foldToRange(midiOf(pcs[0], 4), prof)];
    return {
      instrumentName: def.name,
      source: `Cultural Physical Model (${culture.harmonyModel})`,
      voicing: culture.sourceModel === 'modal-drone' && def.voicing === 'chord' ? 'modal open-fifth harmony' : culture.harmonyModel,
      notes: midis.map(m => theoryNoteName(m)),
    };
  }
  let midis: number[];
  if (prof.role === 'bass') {
    midis = [foldToRange(midiOf(parsed.bassPc, 2), prof)];
  } else if (def.voicing === 'single') {
    midis = [foldToRange(midiOf(parsed.rootPc, 4), prof)];
  } else {
    midis = parsed.intervals
      .map(iv => foldToRange(midiOf((parsed.rootPc + iv) % 12, 3) + Math.floor(iv / 12) * 12, prof))
      .sort((a, b) => a - b);
  }
  return {
    instrumentName: def.name,
    source: `Physical Model (${instrumentId})`,
    voicing: def.voicing,
    notes: midis.map(m => theoryNoteName(m)),
  };
}

export function setMasterVolume(value: number) {
  void bandWorklet?.setVolume(value);
}

import { renderPerformanceToMp3, type Mp3RenderOptions } from './mp3Export.ts';

export async function renderSongToMp3(
  perf: Performance,
  optionsOrProgress?: Omit<Mp3RenderOptions, 'trackInstruments'> | ((frac: number) => void),
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  let options: Omit<Mp3RenderOptions, 'trackInstruments'> = {};
  let progressCb = onProgress;
  if (typeof optionsOrProgress === 'function') {
    progressCb = optionsOrProgress;
  } else if (optionsOrProgress) {
    options = optionsOrProgress;
  }

  // Compile with expressive, phrase-based playback system
  return renderPerformanceToMp3(
    perf,
    {
      selectedTrackIds: options.selectedTrackIds,
      trackInstruments,
      worldId: options.worldId || activeWorldId,
      styleId: options.styleId || activeStyleId,
      mixState: options.mixState,
    },
    progressCb
  );
}
