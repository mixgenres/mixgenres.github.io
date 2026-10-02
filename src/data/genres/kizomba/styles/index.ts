import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './kizomba-tradicional';
import { STYLE_DEFINITION as STYLE_1 } from './kizomba-semba-playful';
import { STYLE_DEFINITION as STYLE_2 } from './kizomba-urbankiz';
import { STYLE_DEFINITION as STYLE_3 } from './kizomba-tarraxinha';
import { STYLE_DEFINITION as STYLE_4 } from './kizomba-tarraxo';
import { STYLE_DEFINITION as STYLE_5 } from './kizomba-passada';
import { STYLE_DEFINITION as STYLE_6 } from './kizomba-ghetto-zouk';
import { STYLE_DEFINITION as STYLE_7 } from './kizomba-semba-lento';

export const KIZOMBA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
