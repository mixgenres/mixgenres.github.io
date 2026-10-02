import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './samba-bossa-bossa-nova';
import { STYLE_DEFINITION as STYLE_1 } from './samba-bossa-samba-de-enredo';
import { STYLE_DEFINITION as STYLE_2 } from './samba-bossa-pagode';
import { STYLE_DEFINITION as STYLE_3 } from './samba-bossa-samba-reggae';

export const SAMBA_BOSSA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3],
};
