import type { GenreWorld } from '../../schema';
import { JAZZ_WORLD_WORLD, JAZZ_WORLD_CULTURE, JAZZ_WORLD_ROLES, JAZZ_WORLD_FEEL, JAZZ_WORLD_HARMONY } from './identity';
import { JAZZ_WORLD_STYLES } from './styles';
import { JAZZ_WORLD_PATTERNS } from './patterns';

export const JAZZ_WORLD: GenreWorld = {
  ...JAZZ_WORLD_WORLD,
  ...JAZZ_WORLD_CULTURE,
  ...JAZZ_WORLD_ROLES,
  ...JAZZ_WORLD_FEEL,
  ...JAZZ_WORLD_HARMONY,
  ...JAZZ_WORLD_STYLES,
  ...JAZZ_WORLD_PATTERNS,
  homeStyleId: 'jazz-hard-bop',
} as GenreWorld;

export const JazzGenre = JAZZ_WORLD;
