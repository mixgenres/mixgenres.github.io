/**
 * DECOLONIZED PHYSICAL MODELING AUDIO ENGINE
 * =========================================
 * Uses Elementary Audio declarative signal graphs for live synthesis and master processing.
 */

import { BandWorkletNode } from './BandWorklet';
import { previewCulturalRules, culturalPitchSet, shoCluster, celticOpenHarmony } from '../generators/cultural';
import { parseChord, noteName as theoryNoteName, midiOf } from '../theory/theory';
import { voiceProfile, foldToRange } from '../theory/instrumentProfile';
import { INSTRUMENTS_BY_ID, genreTechniquesForInstrument } from '../../data/instruments';
import { getLuthierModelForInstrument } from './LuthierAPI';
import type { TransportSink } from '../sequencing/transport';
import type { Performance } from '../sequencing/perform';
import InstrumentRenderer from '../InstrumentRenderer';

let ctx: AudioContext | null = null;
let bandWorklet: BandWorkletNode | null = null;

/** trackId -> instrumentId, so the sink can resolve a physical model per note
 *  even though the transport only ever hands it a bare trackId. Populated by
 *  the UI layer (App.tsx) from the current song's tracks whenever they change. */
const trackInstruments = new Map<string, string>();
let activeWorldId = 'flamenco';
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
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
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
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
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
function voiceId(trackId: string | number, midi: number): string {
  return `${trackId}_${midi}`;
}

import { resolveDialect } from '../theory/dialects';
import { resolveTuningSystem } from '../theory/tuning';
import { getRoleGainLinear } from './mixer';

export function createSink(): TransportSink {
  return {
    now: () => (ctx ? ctx.currentTime : 0),
    noteOn(trackId, midi, vel, time, articulation, frequencyHz) {
      if (!bandWorklet) return;
      const instrumentId = trackInstruments.get(String(trackId)) ?? String(trackId);
      let luthier = getLuthierModelForInstrument(instrumentId);
      const vel01 = Math.max(0, Math.min(1, vel / 127));

      const dialect = resolveDialect(instrumentId, activeWorldId, activeStyleId);
      const tuningSystem = resolveTuningSystem(dialect?.tuningSystemId || (activeWorldId.includes('maqam') || activeWorldId.includes('middle_east') ? 'maqam-bayati' : activeWorldId.includes('blues') ? 'blues-continuum' : '12-tet'));
      const freqHz = frequencyHz ?? tuningSystem.getFrequencyHz(midi);

      const instDef = INSTRUMENTS_BY_ID[instrumentId];
      const isBowed = instDef?.family === 'bowed' || /violin|fiddle|cello|viola|erhu/i.test(instrumentId);
      let actionType = isBowed ? 'bow_drag' : (dialect?.defaultTechnique || 'strike');
      if (isBowed) {
        luthier = { ...luthier, category: 'continuous_bowed_friction' };
      }
      const authoredArticulation = articulation?.trim();
      const styleTechnique = !authoredArticulation
        ? genreTechniquesForInstrument(instrumentId, activeStyleId)[0]
        : undefined;
      const effectiveArticulation = authoredArticulation || styleTechnique;
      if (effectiveArticulation) {
        const artLow = effectiveArticulation.toLowerCase();
        if (artLow.includes('ponticello')) {
          luthier = { ...luthier, harmonicRichness: Math.min(1, luthier.harmonicRichness + 0.12), decayTimeFactor: luthier.decayTimeFactor * 0.94 };
        } else if (artLow.includes('tasto')) {
          luthier = { ...luthier, harmonicRichness: Math.max(0, luthier.harmonicRichness - 0.10), decayTimeFactor: luthier.decayTimeFactor * 1.05 };
        } else if (artLow.includes('mwah-growl')) {
          luthier = { ...luthier, harmonicRichness: Math.min(1, luthier.harmonicRichness + 0.07) };
        }
        if (isBowed) {
          if (artLow.includes('pizzicato') || artLow.includes('pizz')) {
            luthier = { ...luthier, category: 'strum_friction_pluck' };
            actionType = 'pluck';
          } else {
            // A generic staccato, spiccato, legato, or chop on a bowed instrument MUST remain a bow stroke,
            // while specialized articulations (chicharra, tambor, latigo, sul-ponticello, etc.) must be passed as-is.
            luthier = { ...luthier, category: 'continuous_bowed_friction' };
            actionType = artLow;
          }
        } else {
          // For non-bowed instruments, preserve exact multi-word technique names (e.g. golpe-caja, bellows-slap,
          // marcato, staccato, legato, legato_squeeze, arrastre) so instrument DSP modules match them verbatim.
          actionType = artLow;
          if (artLow.includes('arco') || artLow.includes('bowed')) {
            luthier = { ...luthier, category: 'continuous_bowed_friction' };
            actionType = 'bow_drag';
          } else if (artLow.includes('pizzicato') || artLow.includes('plucked') || artLow.includes('slap-bass') || artLow.includes('pizz')) {
            luthier = { ...luthier, category: 'strum_friction_pluck' };
            if (!artLow.includes('strappata')) actionType = 'pluck';
          } else if (/conga-heel|macho-thumb|dayan-ti-ke|cajon-tip/.test(artLow)) {
            actionType = 'tap';
          } else if (/conga-toe|macho-finger-tap|dayan-na|dayan-tun|bayan-ghe|iya-enu|iya-chacha|itotele-enu|okonkolo-chacha/.test(artLow)) {
            actionType = 'tap';
          } else if (artLow.includes('cup-mute') || artLow.includes('stopped') || artLow.includes('palm-mute')) {
            actionType = 'mute';
          } else if (artLow.includes('shake')) {
            actionType = 'tremolo';
          } else if (artLow.includes('rimshot') || artLow.includes('cascara') || artLow.includes('rim')) {
            actionType = 'tap';
          } else if (artLow.includes('conga-open') || artLow.includes('tumba-open')) {
            actionType = 'strike';
          } else if (artLow.includes('rasgue') || artLow.includes('abanico') || artLow.includes('strum-roll')) {
            actionType = 'abanico';
          } else if (artLow.includes('scratch')) {
            actionType = 'arrastre';
          } else if (artLow.includes('fingerstyle') || artLow.includes('flatpick') || artLow.includes('pick') || artLow.includes('plectrum')) {
            actionType = 'pluck';
          } else if (artLow.includes('tongue') || artLow.includes('tongued') || artLow.includes('cut') || artLow.includes('martellato')) {
            actionType = 'tongue';
          } else if (artLow.includes('brush')) {
            actionType = 'strike';
          }
        }
      }

      let excitationType = instDef?.excitationType ?? instDef?.luthierPhysics?.excitationType ?? 'fingerpad';

      // Comprehensive physical excitation mappings based on cultural techniques and fusion output
      const FINGERPAD_ARTS = [
        'fingerstyle', 'pizzicato', 'thumb-slap', 'thumb-sweep', 'tirando', 'apoyando',
        'short-decay-pluck', 'tight-env-pluck', 'finger-snap'
      ];
      const HARD_PICK_ARTS = [
        'flatpick', 'pick', 'fast-picking', 'tremolo-picking', 'ricochet', 'heavy-detaché', 
        'hard-pizzicato', 'bartok-pizzicato', 'fm-bite'
      ];
      const NAIL_ARTS = [
        'rasgueado', 'golpe', 'alzapúa', 'alzapua', 'picado', 'fast-arpeggiato', 'fast-chord-rake',
        'noise-burst', 'noise-transient', 'cluster-tap'
      ];
      const HAMMER_ARTS = [
        'staccato', 'staccatissimo', 'bass-cluster-staccato', 'accented-staccato-octave',
        'muted-key-thump', 'trill'
      ];
      const BOW_ARTS = [
        'arco', 'e-bow-sustain', 'tremolo-bow', 'sul-ponticello-heavy', 'glissando-down', 'glissando-up'
      ];
      const AIR_ARTS = [
        'flutter-tongue', 'rip', 'tongue-slap', 'stopped', 'double-tongue', 'fp-crescendo'
      ];

      const artLow = (effectiveArticulation || actionType || '').toLowerCase();

      // Forward the vastly expanded articulation map to physical model triggers
      if (FINGERPAD_ARTS.includes(actionType) || FINGERPAD_ARTS.includes(artLow)) {
        excitationType = 'fingerpad';
      } else if (HARD_PICK_ARTS.includes(actionType) || HARD_PICK_ARTS.includes(artLow)) {
        excitationType = 'hard-pick';
      } else if (NAIL_ARTS.includes(actionType) || NAIL_ARTS.includes(artLow)) {
        excitationType = 'nail';
      } else if (HAMMER_ARTS.includes(actionType) || HAMMER_ARTS.includes(artLow)) {
        excitationType = 'hammer'; // Native mapping for Piano, Dulcimer, Mallets
      } else if (BOW_ARTS.includes(actionType) || BOW_ARTS.includes(artLow)) {
        excitationType = 'bow';    // Native mapping for Strings, continuous pads
      } else if (AIR_ARTS.includes(actionType) || AIR_ARTS.includes(artLow)) {
        excitationType = 'breath'; // Native mapping for Brass, Woodwinds
      }

      const role = instDef?.acousticProfile?.role || 'comp';
      const roleGain = getRoleGainLinear(role, activeWorldId || 'default');

      const artForContact = effectiveArticulation?.toLowerCase() ?? '';
      const rimLike = /rimshot|cascara|side-stick|rim/.test(artForContact);
      const bellLike = /bell|campana|ride-bell/.test(artForContact);
      const handStrokeContact = artForContact.includes('heel') ? 0.34
        : /toe|finger-tap|tip/.test(artForContact) ? 0.68
        : /thumb|tumba-open|conga-open|macho-open|hembra-open|bayan-ghe|iya-enu/.test(artForContact) ? 0.52
        : undefined;
      const baseContact = handStrokeContact ?? (rimLike ? 0.84 : (bellLike ? 0.9 : 0.5));
      const baseMass = artForContact.includes('heel') ? 0.26
        : /slap|quinto-slap|macho-slap|tapao/.test(artForContact) ? 0.58
        : handStrokeContact !== undefined ? 0.34
        : (rimLike || bellLike ? 0.52 : 0.35);
      const contactPoint = Math.max(0.05, Math.min(0.95, dialect?.contactPointOverride ?? (baseContact - (vel01 - 0.5) * 0.18 + (Math.random() - 0.5) * 0.08)));
      const mass = Math.max(0.1, Math.min(0.95, baseMass + vel01 * 0.42 + (Math.random() - 0.5) * 0.08));

      bandWorklet.postEvent({
        id: voiceId(trackId, midi),
        cyclePhase: 0,
        luthierObjectId: instrumentId,
        trackId: String(trackId),
        action: { type: actionType as any, force: vel01, contactPoint, mass, technique: effectiveArticulation },
        tuning: { baseFrequencyHz: freqHz, culturalMicrotoneCents: tuningSystem.getCentsOffset(midi) },
        spatialPosition: { x: 0, y: 0, z: 0 },
        luthier,
        worldId: activeWorldId,
        midi,
        velocity: vel,
        frequencyHz: freqHz,
        duration: 0.5,
        techniqueModifier: effectiveArticulation,
        actionType,
        excitationType,
        roleGain,
      } as any, time);
    },
    noteOff(trackId, midi, time) {
      // Releases sustain-capable voices (bowed/reed/wind/held synth); a
      // no-op for decaying/percussive voices, which just ring out.
      if (bandWorklet) bandWorklet.postRelease(String(trackId), midi, time);
      const instId = trackInstruments.get(String(trackId)) || 'guitar';
      const renderer = new InstrumentRenderer(instId, ctx);
      renderer.scheduleNoteOffNoise({ pitch: midi, velocity: 0.8 }, time, renderer.getAcousticProfile(instId), ctx);
    },
    pitchBend(trackId, value, time) {
      if (bandWorklet) bandWorklet.postBend(String(trackId), value, time);
    },
    controlChange(trackId, cc, value, time) {
      if (bandWorklet) bandWorklet.postCC(String(trackId), cc, value, time);
    },
    programChange(_trackId, _program, _time, _bank) {
      // Instrument identity is resolved from the track map, not GM program
      // numbers — several distinct instruments share a GM program.
    },
    setDrumChannel(_trackId, _isDrum) {
      // Percussive vs. pitched behaviour is carried by the luthier category.
    },
    allNotesOff() {
      if (bandWorklet) {
        bandWorklet.clear();
      }
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

export function chordRootMidi(chord: string): number {
  const NOTE: Record<string, number> = {
    C: 48, 'C#': 49, Db: 49, D: 50, 'D#': 51, Eb: 51, E: 52, F: 53,
    'F#': 54, Gb: 54, G: 55, 'G#': 56, Ab: 56, A: 57, 'A#': 58, Bb: 58, B: 59,
  };
  const m = chord.match(/^([A-G](?:#|b)?)/);
  return m ? (NOTE[m[1]] ?? 57) : 57;
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
      : instrumentId === 'shō'
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

import { renderPerformanceToMp3 } from './offlineRender';
import { compilePhrasePerformance } from '../sequencing/phrase';

export async function renderSongToMp3(
  perf: Performance,
  optionsOrProgress?: any,
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  let options: any = {};
  let progressCb = onProgress;
  if (typeof optionsOrProgress === 'function') {
    progressCb = optionsOrProgress;
  } else if (optionsOrProgress) {
    options = optionsOrProgress;
  }

  // Compile with expressive, phrase-based playback system
  const phraseCompiledPerf = compilePhrasePerformance(perf);

  return renderPerformanceToMp3(
    phraseCompiledPerf,
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
