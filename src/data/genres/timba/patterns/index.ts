import type { GenreWorld, MusicalPattern } from '../../../schema';
import { TIMBA_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { TIMBA_WORLD_PATTERNS_FILL } from './fill';
import { TIMBA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { TIMBA_WORLD_PATTERNS_BREAK } from './break';
import { TIMBA_WORLD_PATTERNS_CADENCE } from './cadence';
import { TIMBA_WORLD_PATTERNS_GROOVE } from './groove';
import { TIMBA_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { TIMBA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "sectionPattern": TIMBA_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": TIMBA_WORLD_PATTERNS_FILL,
  "ostinato": TIMBA_WORLD_PATTERNS_OSTINATO,
  "break": TIMBA_WORLD_PATTERNS_BREAK,
  "cadence": TIMBA_WORLD_PATTERNS_CADENCE,
  "groove": TIMBA_WORLD_PATTERNS_GROOVE,
  "phrasePattern": TIMBA_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": TIMBA_WORLD_PATTERNS_INTERACTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"sectionPattern","index":0},{"category":"fill","index":0},{"category":"ostinato","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":6},{"category":"sectionPattern","index":1},{"category":"phrasePattern","index":1}];

export const TIMBA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
