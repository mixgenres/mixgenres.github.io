import type { GenreWorld, MusicalPattern } from '../../../schema';
import { AFROBEATS_WORLD_PATTERNS_GROOVE } from './groove';
import { AFROBEATS_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { AFROBEATS_WORLD_PATTERNS_CADENCE } from './cadence';
import { AFROBEATS_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { AFROBEATS_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { AFROBEATS_WORLD_PATTERNS_FILL } from './fill';
import { AFROBEATS_WORLD_PATTERNS_BREAK } from './break';
import { AFROBEATS_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": AFROBEATS_WORLD_PATTERNS_GROOVE,
  "ostinato": AFROBEATS_WORLD_PATTERNS_OSTINATO,
  "cadence": AFROBEATS_WORLD_PATTERNS_CADENCE,
  "interactionPattern": AFROBEATS_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": AFROBEATS_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": AFROBEATS_WORLD_PATTERNS_FILL,
  "break": AFROBEATS_WORLD_PATTERNS_BREAK,
  "phrasePattern": AFROBEATS_WORLD_PATTERNS_PHRASEPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"groove","index":1},{"category":"ostinato","index":0},{"category":"groove","index":2},{"category":"cadence","index":0},{"category":"groove","index":3},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":1},{"category":"phrasePattern","index":0}];

export const AFROBEATS_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
