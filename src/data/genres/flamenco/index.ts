import type { GenreWorld } from '../../schema';
import { FLAMENCO_WORLD_WORLD } from './world';
import { FLAMENCO_WORLD_CULTURE } from './culture';
import { FLAMENCO_WORLD_ROLES } from './roles';
import { FLAMENCO_WORLD_FEEL } from './feel';
import { FLAMENCO_WORLD_HARMONY } from './harmony';
import { FLAMENCO_WORLD_STYLES } from './styles/index';
import { FLAMENCO_WORLD_PATTERNS } from './patterns/index';

export const FLAMENCO_WORLD: GenreWorld = {
  ...FLAMENCO_WORLD_WORLD,
  ...FLAMENCO_WORLD_CULTURE,
  ...FLAMENCO_WORLD_ROLES,
  ...FLAMENCO_WORLD_FEEL,
  ...FLAMENCO_WORLD_HARMONY,
  ...FLAMENCO_WORLD_STYLES,
  ...FLAMENCO_WORLD_PATTERNS,
} as GenreWorld;

export const FlamencoGenre = FLAMENCO_WORLD;
