import type { GenreWorld, MusicalPattern } from '../../../schema';
import { FLAMENCO_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { FLAMENCO_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { FLAMENCO_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { FLAMENCO_WORLD_PATTERNS_FILL } from './fill';
import { FLAMENCO_WORLD_PATTERNS_BREAK } from './break';
import { FLAMENCO_WORLD_PATTERNS_CADENCE } from './cadence';
import { FLAMENCO_WORLD_PATTERNS_GROOVE } from './groove';
import { FLAMENCO_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { FLAMENCO_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { FLAMENCO_WORLD_PATTERNS_TRANSITION } from './transition';
import { FLAMENCO_WORLD_PATTERNS_PULSE } from './pulse';
import { FLAMENCO_WORLD_PATTERNS_BASS } from './bass';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": FLAMENCO_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": FLAMENCO_WORLD_PATTERNS_PHRASEPATTERN,
  "rolePattern": FLAMENCO_WORLD_PATTERNS_ROLEPATTERN,
  "fill": FLAMENCO_WORLD_PATTERNS_FILL,
  "break": FLAMENCO_WORLD_PATTERNS_BREAK,
  "cadence": FLAMENCO_WORLD_PATTERNS_CADENCE,
  "groove": FLAMENCO_WORLD_PATTERNS_GROOVE,
  "interactionPattern": FLAMENCO_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": FLAMENCO_WORLD_PATTERNS_SECTIONPATTERN,
  "transition": FLAMENCO_WORLD_PATTERNS_TRANSITION,
  "pulse": FLAMENCO_WORLD_PATTERNS_PULSE,
  "bass": FLAMENCO_WORLD_PATTERNS_BASS,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"phrasePattern","index":0},{"category":"rolePattern","index":0},{"category":"phrasePattern","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"phrasePattern","index":2},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":1},{"category":"sectionPattern","index":0},{"category":"groove","index":2},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"ostinato","index":3},{"category":"rolePattern","index":1},{"category":"transition","index":0},{"category":"cadence","index":1},{"category":"groove","index":3},{"category":"rolePattern","index":2},{"category":"rolePattern","index":3},{"category":"ostinato","index":4},{"category":"rolePattern","index":4},{"category":"pulse","index":0},{"category":"phrasePattern","index":3},{"category":"rolePattern","index":5},{"category":"ostinato","index":5},{"category":"ostinato","index":6},{"category":"rolePattern","index":6},{"category":"bass","index":0},{"category":"ostinato","index":7}];

export const FLAMENCO_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
