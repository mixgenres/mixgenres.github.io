import type { GenreWorld } from '../../schema';
import { TIMBA_WORLD_WORLD } from './meta';
import { TIMBA_WORLD_CULTURE } from './meta';
import { TIMBA_WORLD_ROLES } from './meta';
import { TIMBA_WORLD_FEEL } from './meta';
import { TIMBA_WORLD_STYLES } from './styles';
import { TIMBA_WORLD_PATTERNS } from './patterns';

export const TIMBA_WORLD: GenreWorld = {
  ...TIMBA_WORLD_WORLD,
  ...TIMBA_WORLD_CULTURE,
  ...TIMBA_WORLD_ROLES,
  ...TIMBA_WORLD_FEEL,
  ...TIMBA_WORLD_STYLES,
  ...TIMBA_WORLD_PATTERNS,
} as GenreWorld;
