import type { GenreWorld, MusicalPattern } from '../../../schema';
import { FOLK_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { FOLK_WORLD_PATTERNS_FILL } from './fill';
import { FOLK_WORLD_PATTERNS_BREAK } from './break';
import { FOLK_WORLD_PATTERNS_CADENCE } from './cadence';
import { FOLK_WORLD_PATTERNS_GROOVE } from './groove';
import { FOLK_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { FOLK_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { FOLK_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { FOLK_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "phrasePattern": FOLK_WORLD_PATTERNS_PHRASEPATTERN,
  "fill": FOLK_WORLD_PATTERNS_FILL,
  "break": FOLK_WORLD_PATTERNS_BREAK,
  "cadence": FOLK_WORLD_PATTERNS_CADENCE,
  "groove": FOLK_WORLD_PATTERNS_GROOVE,
  "ostinato": FOLK_WORLD_PATTERNS_OSTINATO,
  "rolePattern": FOLK_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": FOLK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": FOLK_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"phrasePattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"ostinato","index":0},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"rolePattern","index":0},{"category":"rolePattern","index":1},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":5},{"category":"sectionPattern","index":0},{"category":"groove","index":6}];

export const FOLK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
