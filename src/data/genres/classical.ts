import { GenreWorld } from '../../types';
import { BowedStringTimbreControl, KeysTimbreControl } from '../../engine/theory/physicsInterfaces';
import { FOLK_WORLD } from './folk';

export const CLASSICAL_WORLD: GenreWorld = {
  ...FOLK_WORLD,
  id: 'classical',
  name: 'Classical',
  family: 'Orchestral / Acoustic',
  color: '#715a99',
  description: 'Acoustic orchestral architecture: Late Romantic and Baroque physics.',
  rhythm: { syncopation: 0.0, swing: 0.0, pocket: 'center', pocketDepth: 0, intonationSystem: 'expressive_melodic' },
  performanceRules: {
    'strings': {
      evaluateNote: (phrase: any, index: number) => {
        const note = phrase.notes[index];
        const vel = note.velocity ?? note.vel ?? 80;

        const timbre: BowedStringTimbreControl = {
          bowDirection: index % 2 === 0 ? 'downbow' : 'upbow',
          bowPressure: vel > 70 ? 0.85 : 0.5,
          bowSpeed: 0.6,
          contactPoint: 0.5,
          rosinGripBite: 0.3,
          stringSelection: 'III',
          shiftNoiseLevel: 0.5,
          vibrato: { delayMs: 150, rateHz: 6.2, depthCents: 20, rateRamp: 0.4 },
          mute: 'none'
        };

        return [{ ...note, type: 'bowed', articulation: 'legato', timbreControl: timbre }];
      }
    },
    'piano': {
      evaluateNote: (phrase: any, index: number) => {
        const note = phrase.notes[index];
        const isChord = phrase.notes.filter((n: any) => n.time === note.time).length > 1;

        const timbre: KeysTimbreControl = {
          hammerVelocity: note.velocity ?? 80,
          keyPressWeight: 0.8,
          damperState: 'open',
          sympatheticResonance: 0.9,
          mechanicalNoise: 0.2
        };

        const timingOffset = isChord ? ((note.pitch ?? 60) % 12) * 0.002 : 0;
        return [{ ...note, time: (note.time ?? 0) + timingOffset, type: 'percussive_string', articulation: 'legato_pedaled', timbreControl: timbre }];
      }
    }
  },
  styles: {
    'baroque': {
      id: 'baroque',
      name: 'Baroque',
      tempoRange: [80, 140],
      performanceRules: {
        'strings': {
          evaluateNote: (phrase: any, index: number) => {
            const note = phrase.notes[index];
            const dur = note.duration ?? note.dur ?? 0.25;

            const timbre: BowedStringTimbreControl = {
              bowDirection: index % 2 === 0 ? 'downbow' : 'upbow',
              bowPressure: 0.3,
              bowSpeed: 0.9,
              contactPoint: 0.2,
              rosinGripBite: 0.1,
              stringSelection: 'I',
              shiftNoiseLevel: 0.0,
              vibrato: { delayMs: 0, rateHz: 0, depthCents: 0, rateRamp: 0 },
              mute: 'none'
            };

            const articulation = dur < 0.2 ? 'spiccato' : 'detache';
            return [{ ...note, type: 'bowed', articulation, timbreControl: timbre }];
          }
        },
        'piano': {
          evaluateNote: (phrase: any, index: number) => {
            const note = phrase.notes[index];

            const timbre: KeysTimbreControl = {
              hammerVelocity: 0.5,
              keyPressWeight: 0.2,
              damperState: 'full_damping',
              sympatheticResonance: 0.1,
              mechanicalNoise: 0.8
            };

            return [{ ...note, type: 'percussive_string', articulation: 'detached_staccato', timbreControl: timbre }];
          }
        }
      }
    }
  }
};

export const ClassicalGenre = CLASSICAL_WORLD;
