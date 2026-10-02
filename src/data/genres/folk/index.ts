import type { GenreWorld } from '../../schema';
import { FOLK_WORLD_WORLD, FOLK_WORLD_CULTURE, FOLK_WORLD_ROLES, FOLK_WORLD_FEEL } from './identity';
import { FOLK_WORLD_STYLES } from './styles';
import { FOLK_WORLD_PATTERNS } from './patterns';

export const FOLK_WORLD: GenreWorld = {
  ...FOLK_WORLD_WORLD,
  ...FOLK_WORLD_CULTURE,
  ...FOLK_WORLD_ROLES,
  ...FOLK_WORLD_FEEL,
  ...FOLK_WORLD_STYLES,
  ...FOLK_WORLD_PATTERNS,
} as GenreWorld;
