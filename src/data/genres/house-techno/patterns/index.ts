import type { GenreWorld, MusicalPattern } from '../../../schema';
import { HOUSE_TECHNO_WORLD_PATTERNS_GROOVE } from './groove';
import { HOUSE_TECHNO_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { HOUSE_TECHNO_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { HOUSE_TECHNO_WORLD_PATTERNS_BASS } from './bass';
import { HOUSE_TECHNO_WORLD_PATTERNS_CELL } from './cell';
import { HOUSE_TECHNO_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { HOUSE_TECHNO_WORLD_PATTERNS_BREAK } from './break';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": HOUSE_TECHNO_WORLD_PATTERNS_GROOVE,
  "ostinato": HOUSE_TECHNO_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": HOUSE_TECHNO_WORLD_PATTERNS_PHRASEPATTERN,
  "bass": HOUSE_TECHNO_WORLD_PATTERNS_BASS,
  "cell": HOUSE_TECHNO_WORLD_PATTERNS_CELL,
  "sectionPattern": HOUSE_TECHNO_WORLD_PATTERNS_SECTIONPATTERN,
  "break": HOUSE_TECHNO_WORLD_PATTERNS_BREAK,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"phrasePattern","index":0},{"category":"groove","index":1},{"category":"ostinato","index":3},{"category":"bass","index":0},{"category":"cell","index":0},{"category":"ostinato","index":4},{"category":"ostinato","index":5},{"category":"groove","index":2},{"category":"sectionPattern","index":0},{"category":"break","index":0},{"category":"sectionPattern","index":1}];

export const HOUSE_TECHNO_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
