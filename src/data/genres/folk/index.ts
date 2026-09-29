import type { GenreWorld } from '../../schema';
import { FOLK_WORLD_WORLD } from './world';
import { FOLK_WORLD_CULTURE } from './culture';
import { FOLK_WORLD_ROLES } from './roles';
import { FOLK_WORLD_FEEL } from './feel';
import { FOLK_WORLD_STYLES } from './styles/index';
import { FOLK_WORLD_PATTERNS } from './patterns/index';

export const FOLK_WORLD: GenreWorld = {
  ...FOLK_WORLD_WORLD,
  ...FOLK_WORLD_CULTURE,
  ...FOLK_WORLD_ROLES,
  ...FOLK_WORLD_FEEL,
  ...FOLK_WORLD_STYLES,
  ...FOLK_WORLD_PATTERNS,
} as GenreWorld;
