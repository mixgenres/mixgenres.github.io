import type { GenreWorld } from '../../schema';
import { CUMBIA_WORLD_WORLD, CUMBIA_WORLD_CULTURE, CUMBIA_WORLD_ROLES, CUMBIA_WORLD_FEEL } from './identity';
import { CUMBIA_WORLD_STYLES } from './styles';
import { CUMBIA_WORLD_PATTERNS } from './patterns';

export const CUMBIA_WORLD: GenreWorld = {
  ...CUMBIA_WORLD_WORLD,
  ...CUMBIA_WORLD_CULTURE,
  ...CUMBIA_WORLD_ROLES,
  ...CUMBIA_WORLD_FEEL,
  ...CUMBIA_WORLD_STYLES,
  ...CUMBIA_WORLD_PATTERNS,
} as GenreWorld;
