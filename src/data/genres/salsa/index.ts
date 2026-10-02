import type { GenreWorld } from '../../schema';
import { SALSA_WORLD_WORLD, SALSA_WORLD_CULTURE, SALSA_WORLD_ROLES, SALSA_WORLD_FEEL } from './identity';
import { SALSA_WORLD_STYLES } from './styles';
import { SALSA_WORLD_PATTERNS } from './patterns';

export const SALSA_WORLD: GenreWorld = {
  ...SALSA_WORLD_WORLD,
  ...SALSA_WORLD_CULTURE,
  ...SALSA_WORLD_ROLES,
  ...SALSA_WORLD_FEEL,
  ...SALSA_WORLD_STYLES,
  ...SALSA_WORLD_PATTERNS,
  homeStyleId: 'salsa-salsa-dura',
} as GenreWorld;
