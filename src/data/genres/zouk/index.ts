import type { GenreWorld } from '../../schema';
import { ZOUK_WORLD_WORLD, ZOUK_WORLD_CULTURE, ZOUK_WORLD_ROLES, ZOUK_WORLD_FEEL } from './identity';
import { ZOUK_WORLD_STYLES } from './styles';
import { ZOUK_WORLD_PATTERNS } from './patterns';

export const ZOUK_WORLD: GenreWorld = {
  ...ZOUK_WORLD_WORLD,
  ...ZOUK_WORLD_CULTURE,
  ...ZOUK_WORLD_ROLES,
  ...ZOUK_WORLD_FEEL,
  ...ZOUK_WORLD_STYLES,
  ...ZOUK_WORLD_PATTERNS,
} as GenreWorld;
