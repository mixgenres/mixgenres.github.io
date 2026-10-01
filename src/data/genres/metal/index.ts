import type { GenreWorld } from '../../schema';
import { METAL_WORLD_WORLD } from './meta';
import { METAL_WORLD_CULTURE } from './meta';
import { METAL_WORLD_ROLES } from './meta';
import { METAL_WORLD_FEEL } from './meta';
import { METAL_WORLD_STYLES } from './styles';
import { METAL_WORLD_PATTERNS } from './patterns';

export const METAL_WORLD: GenreWorld = {
  ...METAL_WORLD_WORLD,
  ...METAL_WORLD_CULTURE,
  ...METAL_WORLD_ROLES,
  ...METAL_WORLD_FEEL,
  ...METAL_WORLD_STYLES,
  ...METAL_WORLD_PATTERNS,
} as GenreWorld;

export const MetalGenre = METAL_WORLD;
