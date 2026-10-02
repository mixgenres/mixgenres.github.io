import type { GenreWorld } from '../../schema';
import { BACHATA_WORLD_WORLD, BACHATA_WORLD_CULTURE, BACHATA_WORLD_ROLES, BACHATA_WORLD_FEEL } from './identity';
import { BACHATA_WORLD_STYLES } from './styles';
import { BACHATA_WORLD_PATTERNS } from './patterns';

export const BACHATA_WORLD: GenreWorld = {
  ...BACHATA_WORLD_WORLD,
  ...BACHATA_WORLD_CULTURE,
  ...BACHATA_WORLD_ROLES,
  ...BACHATA_WORLD_FEEL,
  ...BACHATA_WORLD_STYLES,
  ...BACHATA_WORLD_PATTERNS,
} as GenreWorld;
