import type { GenreWorld, MusicalPattern } from '../../../schema';
import { SKA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { SKA_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { SKA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { SKA_WORLD_PATTERNS_GROOVE } from './groove';
import { SKA_WORLD_PATTERNS_CELL } from './cell';
import { SKA_WORLD_PATTERNS_BASS } from './bass';
import { SKA_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { SKA_WORLD_PATTERNS_BREAK } from './break';
import { SKA_WORLD_PATTERNS_CADENCE } from './cadence';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": SKA_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": SKA_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": SKA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "groove": SKA_WORLD_PATTERNS_GROOVE,
  "cell": SKA_WORLD_PATTERNS_CELL,
  "bass": SKA_WORLD_PATTERNS_BASS,
  "sectionPattern": SKA_WORLD_PATTERNS_SECTIONPATTERN,
  "break": SKA_WORLD_PATTERNS_BREAK,
  "cadence": SKA_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"groove","index":0},{"category":"ostinato","index":1},{"category":"cell","index":0},{"category":"bass","index":0},{"category":"interactionPattern","index":1},{"category":"groove","index":1},{"category":"sectionPattern","index":0},{"category":"groove","index":2},{"category":"cell","index":1},{"category":"cell","index":2},{"category":"break","index":0},{"category":"cadence","index":0}];

export const SKA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
