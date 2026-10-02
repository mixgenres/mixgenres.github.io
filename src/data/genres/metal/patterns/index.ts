import type { GenreWorld, MusicalPattern } from '../../../schema';
import { METAL_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { METAL_WORLD_PATTERNS_FILL } from './fill';
import { METAL_WORLD_PATTERNS_BREAK } from './break';
import { METAL_WORLD_PATTERNS_CADENCE } from './cadence';
import { METAL_WORLD_PATTERNS_GROOVE } from './groove';
import { METAL_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { METAL_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { METAL_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": METAL_WORLD_PATTERNS_OSTINATO,
  "fill": METAL_WORLD_PATTERNS_FILL,
  "break": METAL_WORLD_PATTERNS_BREAK,
  "cadence": METAL_WORLD_PATTERNS_CADENCE,
  "groove": METAL_WORLD_PATTERNS_GROOVE,
  "phrasePattern": METAL_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": METAL_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": METAL_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"phrasePattern","index":1}];

export const METAL_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
