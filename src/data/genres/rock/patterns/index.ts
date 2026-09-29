import type { GenreWorld, MusicalPattern } from '../../../schema';
import { ROCK_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { ROCK_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { ROCK_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { ROCK_WORLD_PATTERNS_FILL } from './fill';
import { ROCK_WORLD_PATTERNS_BREAK } from './break';
import { ROCK_WORLD_PATTERNS_CADENCE } from './cadence';
import { ROCK_WORLD_PATTERNS_CELL } from './cell';
import { ROCK_WORLD_PATTERNS_GROOVE } from './groove';
import { ROCK_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { ROCK_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": ROCK_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": ROCK_WORLD_PATTERNS_PHRASEPATTERN,
  "sectionPattern": ROCK_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": ROCK_WORLD_PATTERNS_FILL,
  "break": ROCK_WORLD_PATTERNS_BREAK,
  "cadence": ROCK_WORLD_PATTERNS_CADENCE,
  "cell": ROCK_WORLD_PATTERNS_CELL,
  "groove": ROCK_WORLD_PATTERNS_GROOVE,
  "rolePattern": ROCK_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": ROCK_WORLD_PATTERNS_INTERACTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"sectionPattern","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"cell","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"groove","index":5}];

export const ROCK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
