import type { GenreWorld } from '../../schema';
import { BLUES_WORLD_WORLD } from './meta';
import { BLUES_WORLD_CULTURE } from './meta';
import { BLUES_WORLD_ROLES } from './meta';
import { BLUES_WORLD_FEEL } from './meta';
import { BLUES_WORLD_STYLES } from './styles';
import { BLUES_WORLD_PATTERNS } from './patterns';

export const BLUES_WORLD: GenreWorld = {
  ...BLUES_WORLD_WORLD,
  ...BLUES_WORLD_CULTURE,
  ...BLUES_WORLD_ROLES,
  ...BLUES_WORLD_FEEL,
  ...BLUES_WORLD_STYLES,
  ...BLUES_WORLD_PATTERNS,
} as GenreWorld;
