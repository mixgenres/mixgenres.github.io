import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './tango-tango-tradicional';
import { STYLE_DEFINITION as STYLE_1 } from './tango-tango-nuevo';
import { STYLE_DEFINITION as STYLE_2 } from './tango-milonga';
import { STYLE_DEFINITION as STYLE_3 } from './tango-tango-vals';
import { STYLE_DEFINITION as STYLE_4 } from './tango-tango-electronico';

export const TANGO_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4],
};
