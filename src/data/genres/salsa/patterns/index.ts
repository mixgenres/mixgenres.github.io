import type { GenreWorld, MusicalPattern } from '../../../schema';
import { SALSA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { SALSA_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { SALSA_WORLD_PATTERNS_FILL } from './fill';
import { SALSA_WORLD_PATTERNS_BREAK } from './break';
import { SALSA_WORLD_PATTERNS_CADENCE } from './cadence';
import { SALSA_WORLD_PATTERNS_GROOVE } from './groove';
import { SALSA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { SALSA_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": SALSA_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": SALSA_WORLD_PATTERNS_PHRASEPATTERN,
  "fill": SALSA_WORLD_PATTERNS_FILL,
  "break": SALSA_WORLD_PATTERNS_BREAK,
  "cadence": SALSA_WORLD_PATTERNS_CADENCE,
  "groove": SALSA_WORLD_PATTERNS_GROOVE,
  "interactionPattern": SALSA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": SALSA_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"ostinato","index":3},{"category":"ostinato","index":4},{"category":"phrasePattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"phrasePattern","index":1},{"category":"interactionPattern","index":0},{"category":"ostinato","index":5},{"category":"groove","index":2},{"category":"sectionPattern","index":0},{"category":"phrasePattern","index":2}];

export const SALSA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
