import type { GenreWorld } from '../../schema';
import { KIZOMBA_WORLD_WORLD } from './meta';
import { KIZOMBA_WORLD_CULTURE } from './meta';
import { KIZOMBA_WORLD_ROLES } from './meta';
import { KIZOMBA_WORLD_FEEL } from './meta';
import { KIZOMBA_WORLD_STYLES } from './styles';
import { KIZOMBA_WORLD_PATTERNS } from './patterns';

export const KIZOMBA_WORLD: GenreWorld = {
  ...KIZOMBA_WORLD_WORLD,
  ...KIZOMBA_WORLD_CULTURE,
  ...KIZOMBA_WORLD_ROLES,
  ...KIZOMBA_WORLD_FEEL,
  ...KIZOMBA_WORLD_STYLES,
  ...KIZOMBA_WORLD_PATTERNS,
} as GenreWorld;
