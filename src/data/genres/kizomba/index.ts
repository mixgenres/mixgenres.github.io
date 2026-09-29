import type { GenreWorld } from '../../schema';
import { KIZOMBA_WORLD_WORLD } from './world';
import { KIZOMBA_WORLD_CULTURE } from './culture';
import { KIZOMBA_WORLD_ROLES } from './roles';
import { KIZOMBA_WORLD_FEEL } from './feel';
import { KIZOMBA_WORLD_STYLES } from './styles/index';
import { KIZOMBA_WORLD_PATTERNS } from './patterns/index';

export const KIZOMBA_WORLD: GenreWorld = {
  ...KIZOMBA_WORLD_WORLD,
  ...KIZOMBA_WORLD_CULTURE,
  ...KIZOMBA_WORLD_ROLES,
  ...KIZOMBA_WORLD_FEEL,
  ...KIZOMBA_WORLD_STYLES,
  ...KIZOMBA_WORLD_PATTERNS,
} as GenreWorld;
