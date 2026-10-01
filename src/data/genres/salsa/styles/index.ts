import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './salsa-mambo';
import { STYLE_DEFINITION as STYLE_1 } from './salsa-salsa-dura';
import { STYLE_DEFINITION as STYLE_2 } from './salsa-son-montuno';
import { STYLE_DEFINITION as STYLE_3 } from './salsa-cha-cha-cha';
import { STYLE_DEFINITION as STYLE_4 } from './salsa-salsa-romantica';
import { STYLE_DEFINITION as EXPANSION_STYLE_0 } from './salsa-son-cubano-foundation';
import { STYLE_DEFINITION as EXPANSION_STYLE_1 } from './salsa-salsa-brava-1970s-new-york';
import { STYLE_DEFINITION as EXPANSION_STYLE_2 } from './salsa-salsa-conjunto';
import { STYLE_DEFINITION as EXPANSION_STYLE_3 } from './salsa-salsa-jazz-fusion';
import { STYLE_DEFINITION as EXPANSION_STYLE_4 } from './salsa-boogaloo-latin-soul';

export const SALSA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3, EXPANSION_STYLE_4],
};
