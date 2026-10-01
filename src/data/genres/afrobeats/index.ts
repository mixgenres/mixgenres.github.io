import type { GenreWorld } from '../../schema';
import { AFROBEATS_WORLD_WORLD } from './meta';
import { AFROBEATS_WORLD_CULTURE } from './meta';
import { AFROBEATS_WORLD_ROLES } from './meta';
import { AFROBEATS_WORLD_FEEL } from './meta';
import { AFROBEATS_WORLD_STYLES } from './styles';
import { AFROBEATS_WORLD_PATTERNS } from './patterns';

export const AFROBEATS_WORLD: GenreWorld = {
  ...AFROBEATS_WORLD_WORLD,
  ...AFROBEATS_WORLD_CULTURE,
  ...AFROBEATS_WORLD_ROLES,
  ...AFROBEATS_WORLD_FEEL,
  ...AFROBEATS_WORLD_STYLES,
  ...AFROBEATS_WORLD_PATTERNS,
} as GenreWorld;
