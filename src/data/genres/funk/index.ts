import type { GenreWorld } from '../../schema';
import { FUNK_WORLD_WORLD } from './meta';
import { FUNK_WORLD_CULTURE } from './meta';
import { FUNK_WORLD_ROLES } from './meta';
import { FUNK_WORLD_FEEL } from './meta';
import { FUNK_WORLD_STYLES } from './styles';
import { FUNK_WORLD_PATTERNS } from './patterns';

export const FUNK_WORLD: GenreWorld = {
  ...FUNK_WORLD_WORLD,
  ...FUNK_WORLD_CULTURE,
  ...FUNK_WORLD_ROLES,
  ...FUNK_WORLD_FEEL,
  ...FUNK_WORLD_STYLES,
  ...FUNK_WORLD_PATTERNS,
} as GenreWorld;

export const FunkGenre = FUNK_WORLD;
