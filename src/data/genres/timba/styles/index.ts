import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './timba-timba-habanera';
import { STYLE_DEFINITION as STYLE_1 } from './timba-songo';
import { STYLE_DEFINITION as EXPANSION_STYLE_0 } from './timba-son-montuno-timba';
import { STYLE_DEFINITION as EXPANSION_STYLE_1 } from './timba-los-van-van-songo';
import { STYLE_DEFINITION as EXPANSION_STYLE_2 } from './timba-timba-aggression';
import { STYLE_DEFINITION as EXPANSION_STYLE_3 } from './timba-timba-piano-tumbao';

export const TIMBA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3],
};
