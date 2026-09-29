import type { GenreWorld, MusicalPattern } from '../../../schema';
import { BACHATA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { BACHATA_WORLD_PATTERNS_FILL } from './fill';
import { BACHATA_WORLD_PATTERNS_BREAK } from './break';
import { BACHATA_WORLD_PATTERNS_CADENCE } from './cadence';
import { BACHATA_WORLD_PATTERNS_GROOVE } from './groove';
import { BACHATA_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { BACHATA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { BACHATA_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { BACHATA_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": BACHATA_WORLD_PATTERNS_OSTINATO,
  "fill": BACHATA_WORLD_PATTERNS_FILL,
  "break": BACHATA_WORLD_PATTERNS_BREAK,
  "cadence": BACHATA_WORLD_PATTERNS_CADENCE,
  "groove": BACHATA_WORLD_PATTERNS_GROOVE,
  "rolePattern": BACHATA_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": BACHATA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": BACHATA_WORLD_PATTERNS_SECTIONPATTERN,
  "phrasePattern": BACHATA_WORLD_PATTERNS_PHRASEPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"phrasePattern","index":0}];

export const BACHATA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
