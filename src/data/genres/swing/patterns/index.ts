import type { GenreWorld, MusicalPattern } from '../../../schema';
import { SWING_WORLD_PATTERNS_FILL } from './fill';
import { SWING_WORLD_PATTERNS_BREAK } from './break';
import { SWING_WORLD_PATTERNS_CADENCE } from './cadence';
import { SWING_WORLD_PATTERNS_GROOVE } from './groove';
import { SWING_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { SWING_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { SWING_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { SWING_WORLD_PATTERNS_OSTINATO } from './ostinato';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": SWING_WORLD_PATTERNS_FILL,
  "break": SWING_WORLD_PATTERNS_BREAK,
  "cadence": SWING_WORLD_PATTERNS_CADENCE,
  "groove": SWING_WORLD_PATTERNS_GROOVE,
  "sectionPattern": SWING_WORLD_PATTERNS_SECTIONPATTERN,
  "phrasePattern": SWING_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": SWING_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": SWING_WORLD_PATTERNS_OSTINATO,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"groove","index":6},{"category":"sectionPattern","index":2},{"category":"phrasePattern","index":1}];

export const SWING_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
