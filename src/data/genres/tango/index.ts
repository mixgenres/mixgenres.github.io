import type { GenreWorld } from '../../schema';
import { TANGO_WORLD_WORLD, TANGO_WORLD_CULTURE, TANGO_WORLD_ROLES, TANGO_WORLD_FEEL, TANGO_WORLD_HARMONY } from './identity';
import { TANGO_WORLD_STYLES } from './styles';
import { TANGO_WORLD_PATTERNS } from './patterns';

export const TANGO_WORLD: GenreWorld = {
  ...TANGO_WORLD_WORLD,
  ...TANGO_WORLD_CULTURE,
  ...TANGO_WORLD_ROLES,
  ...TANGO_WORLD_FEEL,
  ...TANGO_WORLD_HARMONY,
  ...TANGO_WORLD_STYLES,
  ...TANGO_WORLD_PATTERNS,
} as GenreWorld;

export const TangoGenre = TANGO_WORLD;
