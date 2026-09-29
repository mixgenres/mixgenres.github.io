import type { GenreWorld } from '../../schema';
import { FUNK_WORLD_WORLD } from './world';
import { FUNK_WORLD_CULTURE } from './culture';
import { FUNK_WORLD_ROLES } from './roles';
import { FUNK_WORLD_FEEL } from './feel';
import { FUNK_WORLD_STYLES } from './styles/index';
import { FUNK_WORLD_PATTERNS } from './patterns/index';

export const FUNK_WORLD: GenreWorld = {
  ...FUNK_WORLD_WORLD,
  ...FUNK_WORLD_CULTURE,
  ...FUNK_WORLD_ROLES,
  ...FUNK_WORLD_FEEL,
  ...FUNK_WORLD_STYLES,
  ...FUNK_WORLD_PATTERNS,
} as GenreWorld;

export const FunkGenre = FUNK_WORLD;
