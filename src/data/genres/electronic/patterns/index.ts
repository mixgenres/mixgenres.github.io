import type { GenreWorld, MusicalPattern } from '../../../schema';
import { ELECTRONIC_WORLD_PATTERNS_FILL } from './fill';
import { ELECTRONIC_WORLD_PATTERNS_BREAK } from './break';
import { ELECTRONIC_WORLD_PATTERNS_CADENCE } from './cadence';
import { ELECTRONIC_WORLD_PATTERNS_GROOVE } from './groove';
import { ELECTRONIC_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { ELECTRONIC_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { ELECTRONIC_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { ELECTRONIC_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": ELECTRONIC_WORLD_PATTERNS_FILL,
  "break": ELECTRONIC_WORLD_PATTERNS_BREAK,
  "cadence": ELECTRONIC_WORLD_PATTERNS_CADENCE,
  "groove": ELECTRONIC_WORLD_PATTERNS_GROOVE,
  "ostinato": ELECTRONIC_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": ELECTRONIC_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": ELECTRONIC_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": ELECTRONIC_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":8},{"category":"sectionPattern","index":0}];

export const ELECTRONIC_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
