import type { GenreWorld, MusicalPattern } from '../../../schema';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_GROOVE } from './groove';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_BREAK } from './break';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_CELL } from './cell';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_FILL } from './fill';
import { REGGAETON_DEMBOW_WORLD_PATTERNS_CADENCE } from './cadence';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": REGGAETON_DEMBOW_WORLD_PATTERNS_GROOVE,
  "ostinato": REGGAETON_DEMBOW_WORLD_PATTERNS_OSTINATO,
  "rolePattern": REGGAETON_DEMBOW_WORLD_PATTERNS_ROLEPATTERN,
  "break": REGGAETON_DEMBOW_WORLD_PATTERNS_BREAK,
  "cell": REGGAETON_DEMBOW_WORLD_PATTERNS_CELL,
  "phrasePattern": REGGAETON_DEMBOW_WORLD_PATTERNS_PHRASEPATTERN,
  "sectionPattern": REGGAETON_DEMBOW_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": REGGAETON_DEMBOW_WORLD_PATTERNS_FILL,
  "cadence": REGGAETON_DEMBOW_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"ostinato","index":0},{"category":"rolePattern","index":0},{"category":"ostinato","index":1},{"category":"break","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"rolePattern","index":1},{"category":"cell","index":0},{"category":"ostinato","index":2},{"category":"phrasePattern","index":0},{"category":"sectionPattern","index":0},{"category":"break","index":1},{"category":"fill","index":0},{"category":"cadence","index":0},{"category":"phrasePattern","index":1},{"category":"phrasePattern","index":2},{"category":"ostinato","index":3}];

export const REGGAETON_DEMBOW_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
