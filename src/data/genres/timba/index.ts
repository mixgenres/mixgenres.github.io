import type { GenreWorld } from '../../schema';
import { TIMBA_WORLD_WORLD } from './world';
import { TIMBA_WORLD_CULTURE } from './culture';
import { TIMBA_WORLD_ROLES } from './roles';
import { TIMBA_WORLD_FEEL } from './feel';
import { TIMBA_WORLD_STYLES } from './styles/index';
import { TIMBA_WORLD_PATTERNS } from './patterns/index';

export const TIMBA_WORLD: GenreWorld = {
  ...TIMBA_WORLD_WORLD,
  ...TIMBA_WORLD_CULTURE,
  ...TIMBA_WORLD_ROLES,
  ...TIMBA_WORLD_FEEL,
  ...TIMBA_WORLD_STYLES,
  ...TIMBA_WORLD_PATTERNS,
} as GenreWorld;
