import type { GenreWorld } from '../../schema';
import { JAZZ_WORLD_WORLD } from './world';
import { JAZZ_WORLD_CULTURE } from './culture';
import { JAZZ_WORLD_ROLES } from './roles';
import { JAZZ_WORLD_FEEL } from './feel';
import { JAZZ_WORLD_HARMONY } from './harmony';
import { JAZZ_WORLD_STYLES } from './styles/index';
import { JAZZ_WORLD_PATTERNS } from './patterns/index';

export const JAZZ_WORLD: GenreWorld = {
  ...JAZZ_WORLD_WORLD,
  ...JAZZ_WORLD_CULTURE,
  ...JAZZ_WORLD_ROLES,
  ...JAZZ_WORLD_FEEL,
  ...JAZZ_WORLD_HARMONY,
  ...JAZZ_WORLD_STYLES,
  ...JAZZ_WORLD_PATTERNS,
} as GenreWorld;

export const JazzGenre = JAZZ_WORLD;
