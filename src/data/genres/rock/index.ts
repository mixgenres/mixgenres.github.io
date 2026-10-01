import type { GenreWorld } from '../../schema';
import { ROCK_WORLD_WORLD } from './meta';
import { ROCK_WORLD_CULTURE } from './meta';
import { ROCK_WORLD_ROLES } from './meta';
import { ROCK_WORLD_FEEL } from './meta';
import { ROCK_WORLD_STYLES } from './styles';
import { ROCK_WORLD_PATTERNS } from './patterns';

export const ROCK_WORLD: GenreWorld = {
  ...ROCK_WORLD_WORLD,
  ...ROCK_WORLD_CULTURE,
  ...ROCK_WORLD_ROLES,
  ...ROCK_WORLD_FEEL,
  ...ROCK_WORLD_STYLES,
  ...ROCK_WORLD_PATTERNS,
} as GenreWorld;
