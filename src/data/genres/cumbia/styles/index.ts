import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './cumbia-colombiana';
import { STYLE_DEFINITION as STYLE_1 } from './cumbia-villera';
import { STYLE_DEFINITION as STYLE_2 } from './cumbia-chicha';
import { STYLE_DEFINITION as STYLE_3 } from './cumbia-sonora';
import { STYLE_DEFINITION as STYLE_4 } from './cumbia-rebajada';
import { STYLE_DEFINITION as STYLE_5 } from './cumbia-digitale';
import { STYLE_DEFINITION as STYLE_6 } from './cumbia-santafesina';
import { STYLE_DEFINITION as STYLE_7 } from './cumbia-porro';

export const CUMBIA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
