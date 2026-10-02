import type { GenreWorld } from '../../schema';
import { ELECTRONIC_WORLD_WORLD, ELECTRONIC_WORLD_CULTURE, ELECTRONIC_WORLD_ROLES, ELECTRONIC_WORLD_FEEL } from './identity';
import { ELECTRONIC_WORLD_STYLES } from './styles';
import { ELECTRONIC_WORLD_PATTERNS } from './patterns';

export const ELECTRONIC_WORLD: GenreWorld = {
  ...ELECTRONIC_WORLD_WORLD,
  ...ELECTRONIC_WORLD_CULTURE,
  ...ELECTRONIC_WORLD_ROLES,
  ...ELECTRONIC_WORLD_FEEL,
  ...ELECTRONIC_WORLD_STYLES,
  ...ELECTRONIC_WORLD_PATTERNS,
  homeStyleId: 'electronic-techno',
} as GenreWorld;
