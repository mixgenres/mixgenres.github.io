import type { GenreWorld, MusicalPattern } from '../../../schema';
import { HIP_HOP_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { HIP_HOP_WORLD_PATTERNS_FILL } from './fill';
import { HIP_HOP_WORLD_PATTERNS_BREAK } from './break';
import { HIP_HOP_WORLD_PATTERNS_CADENCE } from './cadence';
import { HIP_HOP_WORLD_PATTERNS_GROOVE } from './groove';
import { HIP_HOP_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { HIP_HOP_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "sectionPattern": HIP_HOP_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": HIP_HOP_WORLD_PATTERNS_FILL,
  "break": HIP_HOP_WORLD_PATTERNS_BREAK,
  "cadence": HIP_HOP_WORLD_PATTERNS_CADENCE,
  "groove": HIP_HOP_WORLD_PATTERNS_GROOVE,
  "ostinato": HIP_HOP_WORLD_PATTERNS_OSTINATO,
  "interactionPattern": HIP_HOP_WORLD_PATTERNS_INTERACTIONPATTERN,
  "phrasePattern": HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"sectionPattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"ostinato","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"phrasePattern","index":0}];

export const HIP_HOP_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
