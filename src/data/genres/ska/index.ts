import type { GenreWorld } from '../../schema';
import { SKA_WORLD_WORLD, SKA_WORLD_CULTURE, SKA_WORLD_ROLES, SKA_WORLD_FEEL } from './identity';
import { SKA_WORLD_STYLES } from './styles';
import { SKA_WORLD_PATTERNS } from './patterns';

export const SKA_WORLD: GenreWorld = {
  ...SKA_WORLD_WORLD,
  ...SKA_WORLD_CULTURE,
  ...SKA_WORLD_ROLES,
  ...SKA_WORLD_FEEL,
  ...SKA_WORLD_STYLES,
  ...SKA_WORLD_PATTERNS,
} as GenreWorld;
