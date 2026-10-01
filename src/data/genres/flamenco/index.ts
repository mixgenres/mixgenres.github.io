import type { GenreWorld } from '../../schema';
import { FLAMENCO_WORLD_WORLD } from './meta';
import { FLAMENCO_WORLD_CULTURE } from './meta';
import { FLAMENCO_WORLD_ROLES } from './meta';
import { FLAMENCO_WORLD_FEEL } from './meta';
import { FLAMENCO_WORLD_HARMONY } from './meta';
import { FLAMENCO_WORLD_STYLES } from './styles';
import { FLAMENCO_WORLD_PATTERNS } from './patterns';

export const FLAMENCO_WORLD: GenreWorld = {
  ...FLAMENCO_WORLD_WORLD,
  ...FLAMENCO_WORLD_CULTURE,
  ...FLAMENCO_WORLD_ROLES,
  ...FLAMENCO_WORLD_FEEL,
  ...FLAMENCO_WORLD_HARMONY,
  ...FLAMENCO_WORLD_STYLES,
  ...FLAMENCO_WORLD_PATTERNS,
} as GenreWorld;

export const FlamencoGenre = FLAMENCO_WORLD;
