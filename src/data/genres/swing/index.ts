import type { GenreWorld } from '../../schema';
import { SWING_WORLD_WORLD } from './meta';
import { SWING_WORLD_CULTURE } from './meta';
import { SWING_WORLD_ROLES } from './meta';
import { SWING_WORLD_FEEL } from './meta';
import { SWING_WORLD_STYLES } from './styles';
import { SWING_WORLD_PATTERNS } from './patterns';

export const SWING_WORLD: GenreWorld = {
  ...SWING_WORLD_WORLD,
  ...SWING_WORLD_CULTURE,
  ...SWING_WORLD_ROLES,
  ...SWING_WORLD_FEEL,
  ...SWING_WORLD_STYLES,
  ...SWING_WORLD_PATTERNS,
} as GenreWorld;
