import type { GenreWorld } from '../../schema';
import { TANGO_WORLD_WORLD } from './world';
import { TANGO_WORLD_CULTURE } from './culture';
import { TANGO_WORLD_ROLES } from './roles';
import { TANGO_WORLD_FEEL } from './feel';
import { TANGO_WORLD_HARMONY } from './harmony';
import { TANGO_WORLD_STYLES } from './styles/index';
import { TANGO_WORLD_PATTERNS } from './patterns/index';

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
