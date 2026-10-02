import type { GenreWorld } from '../../schema';
import { SKA_WORLD_WORLD } from './world';
import { SKA_WORLD_CULTURE } from './culture';
import { SKA_WORLD_ROLES } from './roles';
import { SKA_WORLD_FEEL } from './feel';
import { SKA_WORLD_STYLES } from './styles/index';
import { SKA_WORLD_PATTERNS } from './patterns/index';

export const SKA_WORLD: GenreWorld = {
  ...SKA_WORLD_WORLD,
  ...SKA_WORLD_CULTURE,
  ...SKA_WORLD_ROLES,
  ...SKA_WORLD_FEEL,
  ...SKA_WORLD_STYLES,
  ...SKA_WORLD_PATTERNS,
} as GenreWorld;
