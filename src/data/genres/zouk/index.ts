import type { GenreWorld } from '../../schema';
import { ZOUK_WORLD_WORLD } from './world';
import { ZOUK_WORLD_CULTURE } from './culture';
import { ZOUK_WORLD_ROLES } from './roles';
import { ZOUK_WORLD_FEEL } from './feel';
import { ZOUK_WORLD_STYLES } from './styles/index';
import { ZOUK_WORLD_PATTERNS } from './patterns/index';

export const ZOUK_WORLD: GenreWorld = {
  ...ZOUK_WORLD_WORLD,
  ...ZOUK_WORLD_CULTURE,
  ...ZOUK_WORLD_ROLES,
  ...ZOUK_WORLD_FEEL,
  ...ZOUK_WORLD_STYLES,
  ...ZOUK_WORLD_PATTERNS,
} as GenreWorld;
