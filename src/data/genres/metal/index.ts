import type { GenreWorld } from '../../schema';
import { METAL_WORLD_WORLD, METAL_WORLD_CULTURE, METAL_WORLD_ROLES, METAL_WORLD_FEEL } from './identity';
import { METAL_WORLD_STYLES } from './styles';
import { METAL_WORLD_PATTERNS } from './patterns';

export const METAL_WORLD: GenreWorld = {
  ...METAL_WORLD_WORLD,
  ...METAL_WORLD_CULTURE,
  ...METAL_WORLD_ROLES,
  ...METAL_WORLD_FEEL,
  ...METAL_WORLD_STYLES,
  ...METAL_WORLD_PATTERNS,
  homeStyleId: 'metal-heavy-metal',
} as GenreWorld;

export const MetalGenre = METAL_WORLD;
