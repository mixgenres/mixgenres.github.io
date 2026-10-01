import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './ska-trad-ska';
import { STYLE_DEFINITION as STYLE_1 } from './ska-two-tone';
import { STYLE_DEFINITION as STYLE_2 } from './ska-ska-punk';
import { STYLE_DEFINITION as EXPANSION_STYLE_0 } from './ska-jamaican-first-wave-ska';
import { STYLE_DEFINITION as EXPANSION_STYLE_1 } from './ska-rocksteady';
import { STYLE_DEFINITION as EXPANSION_STYLE_2 } from './ska-jamaican-ska-jazz';
import { STYLE_DEFINITION as EXPANSION_STYLE_3 } from './ska-third-wave-ska';

export const SKA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3],
};
