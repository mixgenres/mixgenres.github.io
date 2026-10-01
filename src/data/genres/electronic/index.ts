import type { GenreWorld } from '../../schema';
import { ELECTRONIC_WORLD_WORLD } from './meta';
import { ELECTRONIC_WORLD_CULTURE } from './meta';
import { ELECTRONIC_WORLD_ROLES } from './meta';
import { ELECTRONIC_WORLD_FEEL } from './meta';
import { ELECTRONIC_WORLD_STYLES } from './styles';
import { ELECTRONIC_WORLD_PATTERNS } from './patterns';

export const ELECTRONIC_WORLD: GenreWorld = {
  ...ELECTRONIC_WORLD_WORLD,
  ...ELECTRONIC_WORLD_CULTURE,
  ...ELECTRONIC_WORLD_ROLES,
  ...ELECTRONIC_WORLD_FEEL,
  ...ELECTRONIC_WORLD_STYLES,
  ...ELECTRONIC_WORLD_PATTERNS,
} as GenreWorld;
