import type { GenreWorld } from '../../schema';
import { ROCK_WORLD_WORLD } from './world';
import { ROCK_WORLD_CULTURE } from './culture';
import { ROCK_WORLD_ROLES } from './roles';
import { ROCK_WORLD_FEEL } from './feel';
import { ROCK_WORLD_STYLES } from './styles/index';
import { ROCK_WORLD_PATTERNS } from './patterns/index';

export const ROCK_WORLD: GenreWorld = {
  ...ROCK_WORLD_WORLD,
  ...ROCK_WORLD_CULTURE,
  ...ROCK_WORLD_ROLES,
  ...ROCK_WORLD_FEEL,
  ...ROCK_WORLD_STYLES,
  ...ROCK_WORLD_PATTERNS,
} as GenreWorld;
