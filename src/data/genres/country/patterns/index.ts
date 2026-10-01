import type { GenreWorld, MusicalPattern } from '../../../schema';
import { COUNTRY_WORLD_PATTERNS_FILL } from './fill';
import { COUNTRY_WORLD_PATTERNS_BREAK } from './break';
import { COUNTRY_WORLD_PATTERNS_CADENCE } from './cadence';
import { COUNTRY_WORLD_PATTERNS_GROOVE } from './groove';
import { COUNTRY_WORLD_PATTERNS_CELL } from './cell';
import { COUNTRY_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { COUNTRY_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { COUNTRY_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { COUNTRY_WORLD_PATTERNS_BASS } from './bass';
import { COUNTRY_WORLD_PATTERNS_COMPING } from './comping';
import { COUNTRY_WORLD_PATTERNS_LEAD } from './lead';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": COUNTRY_WORLD_PATTERNS_FILL,
  "break": COUNTRY_WORLD_PATTERNS_BREAK,
  "cadence": COUNTRY_WORLD_PATTERNS_CADENCE,
  "groove": COUNTRY_WORLD_PATTERNS_GROOVE,
  "cell": COUNTRY_WORLD_PATTERNS_CELL,
  "phrasePattern": COUNTRY_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": COUNTRY_WORLD_PATTERNS_OSTINATO,
  "sectionPattern": COUNTRY_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": COUNTRY_WORLD_PATTERNS_BASS,
  "comping": COUNTRY_WORLD_PATTERNS_COMPING,
  "lead": COUNTRY_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"cell","index":0},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":6},{"category":"sectionPattern","index":0},{"category":"groove","index":7},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"comping","index":3},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"lead","index":1}];

export const COUNTRY_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
