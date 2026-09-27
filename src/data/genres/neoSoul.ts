import { GenreWorld } from '../../types';
import { KeysTimbreControl, BassTimbreControl } from '../../engine/theory/physicsInterfaces';
import { HIP_HOP_WORLD } from './hipHop';

export const NEO_SOUL_WORLD: GenreWorld = {
  ...HIP_HOP_WORLD,
  id: 'neo_soul',
  name: 'Neo Soul',
  family: 'African American Groove / R&B',
  color: '#a85b88',
  description: "D'Angelo / J Dilla rhythm feel. Massive swing, highly unquantized ('drunk' pocket).",
  rhythm: { syncopation: 0.8, swing: 0.7, pocket: 'drunk', pocketDepth: 35 },
  performanceRules: {
    'electric_piano': {
      evaluateNote: (phrase: any, index: number, _state?: any) => {
        const note = phrase.notes[index];
        const isChord = phrase.notes.filter((n: any) => n.time === note.time).length > 1;

        const timbre: KeysTimbreControl = {
          hammerVelocity: (note.velocity ?? 80) * 0.8,
          keyPressWeight: 0.9,
          strikePosition: 0.8,
          damperState: (note.duration ?? 0.25) > 0.5 ? 'open' : 'full_damping',
          sympatheticResonance: 0.4,
          mechanicalNoise: 0.7
        };

        const timingOffset = isChord ? ((note.pitch ?? 60) % 12) * 0.008 : 0;
        return [{ ...note, time: (note.time ?? 0) + timingOffset, type: 'percussive_string', articulation: 'legato', timbreControl: timbre }];
      }
    },
    'rhodes': {
      evaluateNote: (phrase: any, index: number, _state?: any) => {
        const note = phrase.notes[index];
        const isChord = phrase.notes.filter((n: any) => n.time === note.time).length > 1;

        const timbre: KeysTimbreControl = {
          hammerVelocity: (note.velocity ?? 80) * 0.8,
          keyPressWeight: 0.9,
          strikePosition: 0.8,
          damperState: (note.duration ?? 0.25) > 0.5 ? 'open' : 'full_damping',
          sympatheticResonance: 0.4,
          mechanicalNoise: 0.7
        };

        const timingOffset = isChord ? ((note.pitch ?? 60) % 12) * 0.008 : 0;
        return [{ ...note, time: (note.time ?? 0) + timingOffset, type: 'percussive_string', articulation: 'legato', timbreControl: timbre }];
      }
    },
    'electric_bass': {
      evaluateNote: (phrase: any, index: number, state?: any) => {
        const note = phrase.notes[index];
        const timbre: BassTimbreControl = {
          actuationMethod: 'finger_flesh',
          pluckPosition: 0.8,
          stringSelection: 4,
          palmMuteAmount: 0.5,
          fretNoiseLevel: 0.6,
          fretBuzz: 0.0,
          vibrato: { delayMs: 200, rateHz: 3.5, depthCents: 10, rateRamp: 0.2 },
          deadNoteAmount: 0.0
        };

        const arcPos = state?.phraseArcPosition ?? 0.5;
        const velocityArc = arcPos > 0.8 ? (note.velocity ?? 80) * 0.7 : (note.velocity ?? 80);

        return [{ ...note, velocity: velocityArc, type: 'plucked', articulation: 'fingerstyle', timbreControl: timbre }];
      }
    },
    'electric-bass': {
      evaluateNote: (phrase: any, index: number, state?: any) => {
        const note = phrase.notes[index];
        const timbre: BassTimbreControl = {
          actuationMethod: 'finger_flesh',
          pluckPosition: 0.8,
          stringSelection: 4,
          palmMuteAmount: 0.5,
          fretNoiseLevel: 0.6,
          fretBuzz: 0.0,
          vibrato: { delayMs: 200, rateHz: 3.5, depthCents: 10, rateRamp: 0.2 },
          deadNoteAmount: 0.0
        };

        const arcPos = state?.phraseArcPosition ?? 0.5;
        const velocityArc = arcPos > 0.8 ? (note.velocity ?? 80) * 0.7 : (note.velocity ?? 80);

        return [{ ...note, velocity: velocityArc, type: 'plucked', articulation: 'fingerstyle', timbreControl: timbre }];
      }
    }
  }
};

export const NeoSoulGenre = NEO_SOUL_WORLD;
