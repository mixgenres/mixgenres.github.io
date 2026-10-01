import type { GenreWorld, MusicalPattern } from '../../../schema';
import { ROCK_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { ROCK_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { ROCK_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { ROCK_WORLD_PATTERNS_FILL } from './fill';
import { ROCK_WORLD_PATTERNS_BREAK } from './break';
import { ROCK_WORLD_PATTERNS_CADENCE } from './cadence';
import { ROCK_WORLD_PATTERNS_CELL } from './cell';
import { ROCK_WORLD_PATTERNS_GROOVE } from './groove';
import { ROCK_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { ROCK_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { ROCK_WORLD_PATTERNS_COMPING } from './comping';
import { ROCK_WORLD_PATTERNS_LEAD } from './lead';
import { ROCK_WORLD_PATTERNS_TEXTURE } from './texture';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": ROCK_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": ROCK_WORLD_PATTERNS_PHRASEPATTERN,
  "sectionPattern": ROCK_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": ROCK_WORLD_PATTERNS_FILL,
  "break": ROCK_WORLD_PATTERNS_BREAK,
  "cadence": ROCK_WORLD_PATTERNS_CADENCE,
  "cell": ROCK_WORLD_PATTERNS_CELL,
  "groove": ROCK_WORLD_PATTERNS_GROOVE,
  "rolePattern": ROCK_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": ROCK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "comping": ROCK_WORLD_PATTERNS_COMPING,
  "lead": ROCK_WORLD_PATTERNS_LEAD,
  "texture": ROCK_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"sectionPattern","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"cell","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"comping","index":3},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"texture","index":0},{"category":"texture","index":1}];

export const ROCK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
