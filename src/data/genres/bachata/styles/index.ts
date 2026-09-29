import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './bachata-urbana';
import { STYLE_DEFINITION as STYLE_1 } from './bachata-tradicional';
import { STYLE_DEFINITION as STYLE_2 } from './bachata-sensual';
import { STYLE_DEFINITION as STYLE_3 } from './bachata-moderna';
import { STYLE_DEFINITION as STYLE_4 } from './bachata-bolero';
import { STYLE_DEFINITION as STYLE_5 } from './bachata-bachatango';
import { STYLE_DEFINITION as STYLE_6 } from './bachata-campestre';
import { STYLE_DEFINITION as STYLE_7 } from './bachata-merengue-de-guitarra';

export const BACHATA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
