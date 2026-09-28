import { GenreWorld } from '../../types';
import { HIP_HOP_WORLD } from './hipHop';

export const NEO_SOUL_WORLD: GenreWorld = {
  ...HIP_HOP_WORLD,
  id: 'neo_soul',
  name: 'Neo Soul',
  family: 'African American Groove / R&B',
  color: '#a85b88',
  description: "D'Angelo / J Dilla rhythm feel. Massive swing, highly unquantized ('drunk' pocket).",
  rhythm: { syncopation: 0.8, swing: 0.7, pocket: 'drunk', pocketDepth: 35 }
};

export const NeoSoulGenre = NEO_SOUL_WORLD;
