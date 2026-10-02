/**
 * DECOLONIZED PHYSICAL MODELING AUDIO ENGINE
 * =========================================
 * Uses Elementary Audio declarative signal graphs for live synthesis and master processing.
 */

import { BandWorkletNode } from './bandWorklet.ts';
import { previewCulturalRules, culturalPitchSet, shoCluster, celticOpenHarmony } from '../sheet/culturalMaterial.ts';
import { PREVIEW_CLUSTER_INSTRUMENTS } from '../../data/musicTheory/culturalPitchSets';
import { parseChord, noteName as theoryNoteName, midiOf } from '../sheet/musicTheory.ts';
import { voiceProfile, foldToRange } from '../sheet/instrumentRoles.ts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import type { TransportSink } from './transport.ts';
import type { Performance } from '../band/performanceData.ts';

let ctx: AudioContext | null = null;
let bandWorklet: BandWorkletNode | null = null;

/** trackId -> instrumentId, so the sink can resolve a physical model per note
 *  even though the transport only ever hands it a bare trackId. Populated by
 *  the UI layer (App.tsx) from the current song's tracks whenever they change. */
const trackInstruments = new Map<string, string>();
const trackRoles = new Map<string, string>();
const trackLevels = new Map<string, number>();
let activeWorldId = 'flamenco';
let activeStyleId = '';

let activePerformance: Performance | null = null;

/** Single UI transaction; musical ticks never resolve or construct graphs. */
export function setPlaybackConfiguration(performance: Performance, instruments: Record<string, string | undefined>, roles: Record<string, string>, levels: Record<string, number>, worldId: string, styleId?: string) {
  activePerformance = performance;
  activeWorldId = worldId; activeStyleId = styleId ?? '';
  trackInstruments.clear(); trackRoles.clear(); trackLevels.clear();
  for (const [id, instrument] of Object.entries(instruments)) if (instrument) trackInstruments.set(id, instrument);
  for (const [id, role] of Object.entries(roles)) trackRoles.set(id, role);
  for (const [id, level] of Object.entries(levels)) trackLevels.set(id, level);
  if (bandWorklet) void bandWorklet.configure(currentConfiguration()).catch(error => console.error('Playback preparation failed:', error));
}
function currentConfiguration() {
  if (!activePerformance) throw new Error('Prepare a song before starting audio');
  return { performance: activePerformance, instruments: trackInstruments, roles: trackRoles, levels: trackLevels, worldId: activeWorldId, styleId: activeStyleId };
}
export function getPlaybackDiagnostics() { return bandWorklet?.getDiagnostics() ?? null; }

export function setActiveWorld(worldId: string, styleId?: string) {
  activeWorldId = worldId;
  activeStyleId = styleId ?? '';
  if (bandWorklet) {
    bandWorklet.setWorldAndStyle(worldId, styleId);
  }
}

export function setTrackInstruments(map: Record<string, string | undefined>, roles: Record<string, string> = {}, levels: Record<string, number> = {}) {
  trackLevels.clear();
  for (const [id, level] of Object.entries(levels)) {
    trackLevels.set(id, level);
    bandWorklet?.setTrackVolume(id, level);
  }
  trackRoles.clear();
  for (const [id, role] of Object.entries(roles)) trackRoles.set(id, role);
  bandWorklet?.setTrackRoles(trackRoles);
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
      await node.configure(currentConfiguration());
      await node.initialize(ctx, 1);
      bandWorklet = node;
      await node.configure(currentConfiguration());
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

/** Direct engine reset for non-transport integrations. */
export function stopAudio() {
  bandWorklet?.clear();
}

export function createSink(): TransportSink {
  return {
    now: () => (ctx ? ctx.currentTime : 0),
    noteOn(trackId, _midi, _vel, time, _gestureCode, _frequencyHz, _bellowsDirectionCode, _bandoneonButtonId, _bandoneonButtonIndex, _bandoneonSideCode, noteInstanceId, profileId) {
      if (!bandWorklet) return;
      if (profileId === undefined || !noteInstanceId) throw new Error('Transport must supply a prepared note profile');
      bandWorklet.postPreparedNote(String(trackId), profileId, noteInstanceId, time);
    },
    noteOff(trackId, midi, time, noteInstanceId) {
      // Releases sustain-capable voices (bowed/reed/wind/held synth); a
      // no-op for decaying/percussive voices, which just ring out.
      if (bandWorklet) bandWorklet.postRelease(String(trackId), midi, time, noteInstanceId);
    },
    pitchBend(trackId, value, time, targetMidi) {
      if (bandWorklet) bandWorklet.postBend(String(trackId), value, targetMidi, time);
    },
    controlChange(trackId, cc, value, time) {
      if (bandWorklet) bandWorklet.postCC(String(trackId), cc, value, time);
    },
    setMixPosition(songTime, contextTime) { bandWorklet?.setMixPosition(songTime, contextTime); },
    restoreControllers(controllers, time) { bandWorklet?.restoreControllers(controllers, time); },
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
      : PREVIEW_CLUSTER_INSTRUMENTS.includes(instrumentId)
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
      signal: options.signal,
      format: options.format,
      trackInstruments,
      trackRoles,
      worldId: options.worldId || activeWorldId,
      styleId: options.styleId || activeStyleId,
      mixState: options.mixState,
    },
    progressCb
  );
}
