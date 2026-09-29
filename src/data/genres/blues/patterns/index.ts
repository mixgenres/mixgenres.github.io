import type { GenreWorld, MusicalPattern } from '../../../schema';
import { BLUES_WORLD_PATTERNS_FILL } from './fill';
import { BLUES_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { BLUES_WORLD_PATTERNS_CADENCE } from './cadence';
import { BLUES_WORLD_PATTERNS_BREAK } from './break';
import { BLUES_WORLD_PATTERNS_GROOVE } from './groove';
import { BLUES_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { BLUES_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": BLUES_WORLD_PATTERNS_FILL,
  "ostinato": BLUES_WORLD_PATTERNS_OSTINATO,
  "cadence": BLUES_WORLD_PATTERNS_CADENCE,
  "break": BLUES_WORLD_PATTERNS_BREAK,
  "groove": BLUES_WORLD_PATTERNS_GROOVE,
  "phrasePattern": BLUES_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": BLUES_WORLD_PATTERNS_INTERACTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"ostinato","index":0},{"category":"cadence","index":0},{"category":"break","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":8},{"category":"phrasePattern","index":1}];

export const BLUES_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
