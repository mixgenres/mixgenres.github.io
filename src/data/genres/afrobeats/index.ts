import type { GenreWorld } from '../../schema';
import { AFROBEATS_WORLD_WORLD } from './world';
import { AFROBEATS_WORLD_CULTURE } from './culture';
import { AFROBEATS_WORLD_ROLES } from './roles';
import { AFROBEATS_WORLD_FEEL } from './feel';
import { AFROBEATS_WORLD_STYLES } from './styles/index';
import { AFROBEATS_WORLD_PATTERNS } from './patterns/index';

export const AFROBEATS_WORLD: GenreWorld = {
  ...AFROBEATS_WORLD_WORLD,
  ...AFROBEATS_WORLD_CULTURE,
  ...AFROBEATS_WORLD_ROLES,
  ...AFROBEATS_WORLD_FEEL,
  ...AFROBEATS_WORLD_STYLES,
  ...AFROBEATS_WORLD_PATTERNS,
} as GenreWorld;
