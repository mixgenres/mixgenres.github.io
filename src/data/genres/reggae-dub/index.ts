import type { GenreWorld } from '../../schema';
import { REGGAE_DUB_WORLD_WORLD } from './world';
import { REGGAE_DUB_WORLD_CULTURE } from './culture';
import { REGGAE_DUB_WORLD_ROLES } from './roles';
import { REGGAE_DUB_WORLD_FEEL } from './feel';
import { REGGAE_DUB_WORLD_STYLES } from './styles/index';
import { REGGAE_DUB_WORLD_PATTERNS } from './patterns/index';

export const REGGAE_DUB_WORLD: GenreWorld = {
  ...REGGAE_DUB_WORLD_WORLD,
  ...REGGAE_DUB_WORLD_CULTURE,
  ...REGGAE_DUB_WORLD_ROLES,
  ...REGGAE_DUB_WORLD_FEEL,
  ...REGGAE_DUB_WORLD_STYLES,
  ...REGGAE_DUB_WORLD_PATTERNS,
} as GenreWorld;
