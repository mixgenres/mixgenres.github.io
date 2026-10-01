import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './swing-big-band-swing';
import { STYLE_DEFINITION as STYLE_1 } from './swing-gypsy-jazz';
import { STYLE_DEFINITION as STYLE_2 } from './swing-jump-blues';
import { STYLE_DEFINITION as EXPANSION_STYLE_0 } from './swing-new-orleans-trad-jazz';
import { STYLE_DEFINITION as EXPANSION_STYLE_1 } from './swing-kansas-city-swing';
import { STYLE_DEFINITION as EXPANSION_STYLE_2 } from './swing-chicago-swing';
import { STYLE_DEFINITION as EXPANSION_STYLE_3 } from './swing-vocal-swing';

export const SWING_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3],
};
