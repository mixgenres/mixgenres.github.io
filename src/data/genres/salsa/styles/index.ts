import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './salsa-mambo';
import { STYLE_DEFINITION as STYLE_1 } from './salsa-salsa-dura';
import { STYLE_DEFINITION as STYLE_2 } from './salsa-son-montuno';
import { STYLE_DEFINITION as STYLE_3 } from './salsa-cha-cha-cha';
import { STYLE_DEFINITION as STYLE_4 } from './salsa-salsa-romantica';

export const SALSA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4],
};
