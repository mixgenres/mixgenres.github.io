import type { GenreWorld } from '../../schema';
import { BLUES_WORLD_WORLD } from './world';
import { BLUES_WORLD_CULTURE } from './culture';
import { BLUES_WORLD_ROLES } from './roles';
import { BLUES_WORLD_FEEL } from './feel';
import { BLUES_WORLD_STYLES } from './styles/index';
import { BLUES_WORLD_PATTERNS } from './patterns/index';

export const BLUES_WORLD: GenreWorld = {
  ...BLUES_WORLD_WORLD,
  ...BLUES_WORLD_CULTURE,
  ...BLUES_WORLD_ROLES,
  ...BLUES_WORLD_FEEL,
  ...BLUES_WORLD_STYLES,
  ...BLUES_WORLD_PATTERNS,
} as GenreWorld;
