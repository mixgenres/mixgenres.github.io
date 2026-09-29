import type { GenreWorld } from '../../schema';
import { SALSA_WORLD_WORLD } from './world';
import { SALSA_WORLD_CULTURE } from './culture';
import { SALSA_WORLD_ROLES } from './roles';
import { SALSA_WORLD_FEEL } from './feel';
import { SALSA_WORLD_STYLES } from './styles/index';
import { SALSA_WORLD_PATTERNS } from './patterns/index';

export const SALSA_WORLD: GenreWorld = {
  ...SALSA_WORLD_WORLD,
  ...SALSA_WORLD_CULTURE,
  ...SALSA_WORLD_ROLES,
  ...SALSA_WORLD_FEEL,
  ...SALSA_WORLD_STYLES,
  ...SALSA_WORLD_PATTERNS,
} as GenreWorld;
