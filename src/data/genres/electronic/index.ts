import type { GenreWorld } from '../../schema';
import { ELECTRONIC_WORLD_WORLD } from './world';
import { ELECTRONIC_WORLD_CULTURE } from './culture';
import { ELECTRONIC_WORLD_ROLES } from './roles';
import { ELECTRONIC_WORLD_FEEL } from './feel';
import { ELECTRONIC_WORLD_STYLES } from './styles/index';
import { ELECTRONIC_WORLD_PATTERNS } from './patterns/index';

export const ELECTRONIC_WORLD: GenreWorld = {
  ...ELECTRONIC_WORLD_WORLD,
  ...ELECTRONIC_WORLD_CULTURE,
  ...ELECTRONIC_WORLD_ROLES,
  ...ELECTRONIC_WORLD_FEEL,
  ...ELECTRONIC_WORLD_STYLES,
  ...ELECTRONIC_WORLD_PATTERNS,
} as GenreWorld;
