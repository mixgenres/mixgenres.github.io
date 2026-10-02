import type { GenreWorld } from '../../schema';
import { SAMBA_BOSSA_WORLD_WORLD } from './world';
import { SAMBA_BOSSA_WORLD_CULTURE } from './culture';
import { SAMBA_BOSSA_WORLD_ROLES } from './roles';
import { SAMBA_BOSSA_WORLD_FEEL } from './feel';
import { SAMBA_BOSSA_WORLD_STYLES } from './styles/index';
import { SAMBA_BOSSA_WORLD_PATTERNS } from './patterns/index';

export const SAMBA_BOSSA_WORLD: GenreWorld = {
  ...SAMBA_BOSSA_WORLD_WORLD,
  ...SAMBA_BOSSA_WORLD_CULTURE,
  ...SAMBA_BOSSA_WORLD_ROLES,
  ...SAMBA_BOSSA_WORLD_FEEL,
  ...SAMBA_BOSSA_WORLD_STYLES,
  ...SAMBA_BOSSA_WORLD_PATTERNS,
} as GenreWorld;
