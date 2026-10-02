import type { GenreWorld } from '../../schema';
import { SWING_WORLD_WORLD } from './world';
import { SWING_WORLD_CULTURE } from './culture';
import { SWING_WORLD_ROLES } from './roles';
import { SWING_WORLD_FEEL } from './feel';
import { SWING_WORLD_STYLES } from './styles/index';
import { SWING_WORLD_PATTERNS } from './patterns/index';

export const SWING_WORLD: GenreWorld = {
  ...SWING_WORLD_WORLD,
  ...SWING_WORLD_CULTURE,
  ...SWING_WORLD_ROLES,
  ...SWING_WORLD_FEEL,
  ...SWING_WORLD_STYLES,
  ...SWING_WORLD_PATTERNS,
} as GenreWorld;
