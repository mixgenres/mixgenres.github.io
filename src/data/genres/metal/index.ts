import type { GenreWorld } from '../../schema';
import { METAL_WORLD_WORLD } from './world';
import { METAL_WORLD_CULTURE } from './culture';
import { METAL_WORLD_ROLES } from './roles';
import { METAL_WORLD_FEEL } from './feel';
import { METAL_WORLD_STYLES } from './styles/index';
import { METAL_WORLD_PATTERNS } from './patterns/index';

export const METAL_WORLD: GenreWorld = {
  ...METAL_WORLD_WORLD,
  ...METAL_WORLD_CULTURE,
  ...METAL_WORLD_ROLES,
  ...METAL_WORLD_FEEL,
  ...METAL_WORLD_STYLES,
  ...METAL_WORLD_PATTERNS,
} as GenreWorld;

export const MetalGenre = METAL_WORLD;
