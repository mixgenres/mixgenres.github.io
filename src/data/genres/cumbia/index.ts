import type { GenreWorld } from '../../schema';
import { CUMBIA_WORLD_WORLD } from './world';
import { CUMBIA_WORLD_CULTURE } from './culture';
import { CUMBIA_WORLD_ROLES } from './roles';
import { CUMBIA_WORLD_FEEL } from './feel';
import { CUMBIA_WORLD_STYLES } from './styles/index';
import { CUMBIA_WORLD_PATTERNS } from './patterns/index';

export const CUMBIA_WORLD: GenreWorld = {
  ...CUMBIA_WORLD_WORLD,
  ...CUMBIA_WORLD_CULTURE,
  ...CUMBIA_WORLD_ROLES,
  ...CUMBIA_WORLD_FEEL,
  ...CUMBIA_WORLD_STYLES,
  ...CUMBIA_WORLD_PATTERNS,
} as GenreWorld;
