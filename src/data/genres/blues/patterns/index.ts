import type { GenreWorld, MusicalPattern } from '../../../schema';
import { BLUES_WORLD_PATTERNS_FILL } from './fill';
import { BLUES_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { BLUES_WORLD_PATTERNS_CADENCE } from './cadence';
import { BLUES_WORLD_PATTERNS_BREAK } from './break';
import { BLUES_WORLD_PATTERNS_GROOVE } from './groove';
import { BLUES_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { BLUES_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { BLUES_WORLD_PATTERNS_BASS } from './bass';
import { BLUES_WORLD_PATTERNS_COMPING } from './comping';
import { BLUES_WORLD_PATTERNS_LEAD } from './lead';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": BLUES_WORLD_PATTERNS_FILL,
  "ostinato": BLUES_WORLD_PATTERNS_OSTINATO,
  "cadence": BLUES_WORLD_PATTERNS_CADENCE,
  "break": BLUES_WORLD_PATTERNS_BREAK,
  "groove": BLUES_WORLD_PATTERNS_GROOVE,
  "phrasePattern": BLUES_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": BLUES_WORLD_PATTERNS_INTERACTIONPATTERN,
  "bass": BLUES_WORLD_PATTERNS_BASS,
  "comping": BLUES_WORLD_PATTERNS_COMPING,
  "lead": BLUES_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"ostinato","index":0},{"category":"cadence","index":0},{"category":"break","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":8},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"lead","index":2}];

export const BLUES_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
