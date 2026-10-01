import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './blues-chicago';
import { STYLE_DEFINITION as STYLE_1 } from './blues-delta';
import { STYLE_DEFINITION as STYLE_2 } from './blues-texas';
import { STYLE_DEFINITION as STYLE_3 } from './blues-piedmont';
import { STYLE_DEFINITION as STYLE_4 } from './blues-jump';
import { STYLE_DEFINITION as STYLE_5 } from './blues-hill-country';
import { STYLE_DEFINITION as STYLE_6 } from './blues-swamp';
import { STYLE_DEFINITION as STYLE_7 } from './blues-soul';
import { STYLE_DEFINITION as EXPANSION_STYLE_0 } from './blues-memphis-electric-blues';
import { STYLE_DEFINITION as EXPANSION_STYLE_1 } from './blues-west-coast-jump-blues';
import { STYLE_DEFINITION as EXPANSION_STYLE_2 } from './blues-new-orleans-blues';
import { STYLE_DEFINITION as EXPANSION_STYLE_3 } from './blues-british-blues-revival';

export const BLUES_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3],
};
