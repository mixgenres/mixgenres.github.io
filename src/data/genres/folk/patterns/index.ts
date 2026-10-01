import type { GenreWorld, MusicalPattern } from '../../../schema';
import { FOLK_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { FOLK_WORLD_PATTERNS_FILL } from './fill';
import { FOLK_WORLD_PATTERNS_BREAK } from './break';
import { FOLK_WORLD_PATTERNS_CADENCE } from './cadence';
import { FOLK_WORLD_PATTERNS_GROOVE } from './groove';
import { FOLK_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { FOLK_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { FOLK_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { FOLK_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { FOLK_WORLD_PATTERNS_COMPING } from './comping';
import { FOLK_WORLD_PATTERNS_LEAD } from './lead';
import { FOLK_WORLD_PATTERNS_TEXTURE } from './texture';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "phrasePattern": FOLK_WORLD_PATTERNS_PHRASEPATTERN,
  "fill": FOLK_WORLD_PATTERNS_FILL,
  "break": FOLK_WORLD_PATTERNS_BREAK,
  "cadence": FOLK_WORLD_PATTERNS_CADENCE,
  "groove": FOLK_WORLD_PATTERNS_GROOVE,
  "ostinato": FOLK_WORLD_PATTERNS_OSTINATO,
  "rolePattern": FOLK_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": FOLK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": FOLK_WORLD_PATTERNS_SECTIONPATTERN,
  "comping": FOLK_WORLD_PATTERNS_COMPING,
  "lead": FOLK_WORLD_PATTERNS_LEAD,
  "texture": FOLK_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"phrasePattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"ostinato","index":0},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"rolePattern","index":0},{"category":"rolePattern","index":1},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":5},{"category":"sectionPattern","index":0},{"category":"groove","index":6},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"lead","index":2},{"category":"texture","index":0}];

export const FOLK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
