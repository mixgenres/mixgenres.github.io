import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './metal-heavy-metal';
import { STYLE_DEFINITION as STYLE_1 } from './metal-thrash';
import { STYLE_DEFINITION as STYLE_2 } from './metal-death-metal';
import { STYLE_DEFINITION as STYLE_3 } from './metal-black-metal';
import { STYLE_DEFINITION as STYLE_4 } from './metal-power-metal';
import { STYLE_DEFINITION as STYLE_5 } from './metal-doom-metal';
import { STYLE_DEFINITION as STYLE_6 } from './metal-sludge';
import { STYLE_DEFINITION as STYLE_7 } from './metal-progressive-metal';
import { STYLE_DEFINITION as EXPANSION_STYLE_0 } from './metal-nwobhm';
import { STYLE_DEFINITION as EXPANSION_STYLE_1 } from './metal-groove-metal';
import { STYLE_DEFINITION as EXPANSION_STYLE_2 } from './metal-metalcore';
import { STYLE_DEFINITION as EXPANSION_STYLE_3 } from './metal-deathcore';
import { STYLE_DEFINITION as EXPANSION_STYLE_4 } from './metal-blackgaze';

export const METAL_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3, EXPANSION_STYLE_4],
};
