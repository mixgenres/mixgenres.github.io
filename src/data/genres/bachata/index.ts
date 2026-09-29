import type { GenreWorld } from '../../schema';
import { BACHATA_WORLD_WORLD } from './world';
import { BACHATA_WORLD_CULTURE } from './culture';
import { BACHATA_WORLD_ROLES } from './roles';
import { BACHATA_WORLD_FEEL } from './feel';
import { BACHATA_WORLD_STYLES } from './styles/index';
import { BACHATA_WORLD_PATTERNS } from './patterns/index';

export const BACHATA_WORLD: GenreWorld = {
  ...BACHATA_WORLD_WORLD,
  ...BACHATA_WORLD_CULTURE,
  ...BACHATA_WORLD_ROLES,
  ...BACHATA_WORLD_FEEL,
  ...BACHATA_WORLD_STYLES,
  ...BACHATA_WORLD_PATTERNS,
} as GenreWorld;
