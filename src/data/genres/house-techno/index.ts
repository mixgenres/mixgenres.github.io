import type { GenreWorld } from '../../schema';
import { HOUSE_TECHNO_WORLD_WORLD } from './world';
import { HOUSE_TECHNO_WORLD_CULTURE } from './culture';
import { HOUSE_TECHNO_WORLD_ROLES } from './roles';
import { HOUSE_TECHNO_WORLD_FEEL } from './feel';
import { HOUSE_TECHNO_WORLD_STYLES } from './styles/index';
import { HOUSE_TECHNO_WORLD_PATTERNS } from './patterns/index';

export const HOUSE_TECHNO_WORLD: GenreWorld = {
  ...HOUSE_TECHNO_WORLD_WORLD,
  ...HOUSE_TECHNO_WORLD_CULTURE,
  ...HOUSE_TECHNO_WORLD_ROLES,
  ...HOUSE_TECHNO_WORLD_FEEL,
  ...HOUSE_TECHNO_WORLD_STYLES,
  ...HOUSE_TECHNO_WORLD_PATTERNS,
} as GenreWorld;
