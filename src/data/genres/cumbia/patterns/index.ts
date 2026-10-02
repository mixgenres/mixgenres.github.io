import type { GenreWorld, MusicalPattern } from '../../../schema';
import { CUMBIA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { CUMBIA_WORLD_PATTERNS_GROOVE } from './groove';
import { CUMBIA_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { CUMBIA_WORLD_PATTERNS_BASS } from './bass';
import { CUMBIA_WORLD_PATTERNS_CELL } from './cell';
import { CUMBIA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { CUMBIA_WORLD_PATTERNS_BREAK } from './break';
import { CUMBIA_WORLD_PATTERNS_CADENCE } from './cadence';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": CUMBIA_WORLD_PATTERNS_OSTINATO,
  "groove": CUMBIA_WORLD_PATTERNS_GROOVE,
  "rolePattern": CUMBIA_WORLD_PATTERNS_ROLEPATTERN,
  "bass": CUMBIA_WORLD_PATTERNS_BASS,
  "cell": CUMBIA_WORLD_PATTERNS_CELL,
  "interactionPattern": CUMBIA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "break": CUMBIA_WORLD_PATTERNS_BREAK,
  "cadence": CUMBIA_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"groove","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"rolePattern","index":0},{"category":"bass","index":0},{"category":"groove","index":1},{"category":"ostinato","index":3},{"category":"cell","index":0},{"category":"ostinato","index":4},{"category":"rolePattern","index":1},{"category":"ostinato","index":5},{"category":"interactionPattern","index":0},{"category":"break","index":0},{"category":"cadence","index":0}];

export const CUMBIA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
