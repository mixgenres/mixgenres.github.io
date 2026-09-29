import type { GenreWorld } from '../../schema';
import { REGGAETON_DEMBOW_WORLD_WORLD } from './world';
import { REGGAETON_DEMBOW_WORLD_CULTURE } from './culture';
import { REGGAETON_DEMBOW_WORLD_ROLES } from './roles';
import { REGGAETON_DEMBOW_WORLD_FEEL } from './feel';
import { REGGAETON_DEMBOW_WORLD_STYLES } from './styles/index';
import { REGGAETON_DEMBOW_WORLD_PATTERNS } from './patterns/index';

export const REGGAETON_DEMBOW_WORLD: GenreWorld = {
  ...REGGAETON_DEMBOW_WORLD_WORLD,
  ...REGGAETON_DEMBOW_WORLD_CULTURE,
  ...REGGAETON_DEMBOW_WORLD_ROLES,
  ...REGGAETON_DEMBOW_WORLD_FEEL,
  ...REGGAETON_DEMBOW_WORLD_STYLES,
  ...REGGAETON_DEMBOW_WORLD_PATTERNS,
} as GenreWorld;
