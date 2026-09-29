import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './jazz-bebop';
import { STYLE_DEFINITION as STYLE_1 } from './jazz-cool-jazz';
import { STYLE_DEFINITION as STYLE_2 } from './jazz-hard-bop';
import { STYLE_DEFINITION as STYLE_3 } from './jazz-free-jazz';
import { STYLE_DEFINITION as STYLE_4 } from './jazz-gypsy-jazz';
import { STYLE_DEFINITION as STYLE_5 } from './jazz-fusion';
import { STYLE_DEFINITION as STYLE_6 } from './jazz-spiritual-jazz';
import { STYLE_DEFINITION as STYLE_7 } from './jazz-ragtime';

export const JAZZ_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
