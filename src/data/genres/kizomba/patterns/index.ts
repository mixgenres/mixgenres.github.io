import type { GenreWorld, MusicalPattern } from '../../../schema';
import { KIZOMBA_WORLD_PATTERNS_BREAK } from './break';
import { KIZOMBA_WORLD_PATTERNS_CADENCE } from './cadence';
import { KIZOMBA_WORLD_PATTERNS_GROOVE } from './groove';
import { KIZOMBA_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { KIZOMBA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { KIZOMBA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { KIZOMBA_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { KIZOMBA_WORLD_PATTERNS_FILL } from './fill';
import { KIZOMBA_WORLD_PATTERNS_BASS } from './bass';
import { KIZOMBA_WORLD_PATTERNS_COMPING } from './comping';
import { KIZOMBA_WORLD_PATTERNS_LEAD } from './lead';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "break": KIZOMBA_WORLD_PATTERNS_BREAK,
  "cadence": KIZOMBA_WORLD_PATTERNS_CADENCE,
  "groove": KIZOMBA_WORLD_PATTERNS_GROOVE,
  "phrasePattern": KIZOMBA_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": KIZOMBA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": KIZOMBA_WORLD_PATTERNS_OSTINATO,
  "sectionPattern": KIZOMBA_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": KIZOMBA_WORLD_PATTERNS_FILL,
  "bass": KIZOMBA_WORLD_PATTERNS_BASS,
  "comping": KIZOMBA_WORLD_PATTERNS_COMPING,
  "lead": KIZOMBA_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":6},{"category":"sectionPattern","index":0},{"category":"groove","index":7},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"fill","index":0},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"groove","index":16},{"category":"groove","index":17},{"category":"lead","index":0}];

export const KIZOMBA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
