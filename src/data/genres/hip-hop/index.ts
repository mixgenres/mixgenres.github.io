import type { GenreWorld } from '../../schema';
import { HIP_HOP_WORLD_WORLD } from './world';
import { HIP_HOP_WORLD_CULTURE } from './culture';
import { HIP_HOP_WORLD_ROLES } from './roles';
import { HIP_HOP_WORLD_FEEL } from './feel';
import { HIP_HOP_WORLD_STYLES } from './styles/index';
import { HIP_HOP_WORLD_PATTERNS } from './patterns/index';

export const HIP_HOP_WORLD: GenreWorld = {
  ...HIP_HOP_WORLD_WORLD,
  ...HIP_HOP_WORLD_CULTURE,
  ...HIP_HOP_WORLD_ROLES,
  ...HIP_HOP_WORLD_FEEL,
  ...HIP_HOP_WORLD_STYLES,
  ...HIP_HOP_WORLD_PATTERNS,
} as GenreWorld;
