import { GenreWorld } from '../../types';
import { FOLK_WORLD } from './folk';

export const CLASSICAL_WORLD: GenreWorld = {
  ...FOLK_WORLD,
  id: 'classical',
  name: 'Classical',
  family: 'Orchestral / Acoustic',
  color: '#715a99',
  description: 'Acoustic orchestral architecture: Late Romantic and Baroque physics.',
  rhythm: { syncopation: 0.0, swing: 0.0, pocket: 'center', pocketDepth: 0, intonationSystem: 'expressive_melodic' },
  styles: {
    'baroque': {
      id: 'baroque',
      name: 'Baroque',
      tempoRange: [80, 140]
    }
  }
};

export const ClassicalGenre = CLASSICAL_WORLD;
