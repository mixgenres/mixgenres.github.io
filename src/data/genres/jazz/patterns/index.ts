import type { GenreWorld, MusicalPattern } from '../../../schema';
import { JAZZ_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { JAZZ_WORLD_PATTERNS_FILL } from './fill';
import { JAZZ_WORLD_PATTERNS_BREAK } from './break';
import { JAZZ_WORLD_PATTERNS_CADENCE } from './cadence';
import { JAZZ_WORLD_PATTERNS_GROOVE } from './groove';
import { JAZZ_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { JAZZ_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { JAZZ_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": JAZZ_WORLD_PATTERNS_OSTINATO,
  "fill": JAZZ_WORLD_PATTERNS_FILL,
  "break": JAZZ_WORLD_PATTERNS_BREAK,
  "cadence": JAZZ_WORLD_PATTERNS_CADENCE,
  "groove": JAZZ_WORLD_PATTERNS_GROOVE,
  "phrasePattern": JAZZ_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": JAZZ_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": JAZZ_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"fill","index":0},{"category":"ostinato","index":3},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":4},{"category":"groove","index":5},{"category":"sectionPattern","index":0}];

export const JAZZ_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
