import type { GenreWorld, MusicalPattern } from '../../../schema';
import { TANGO_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { TANGO_WORLD_PATTERNS_CELL } from './cell';
import { TANGO_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { TANGO_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { TANGO_WORLD_PATTERNS_FILL } from './fill';
import { TANGO_WORLD_PATTERNS_BREAK } from './break';
import { TANGO_WORLD_PATTERNS_CADENCE } from './cadence';
import { TANGO_WORLD_PATTERNS_GROOVE } from './groove';
import { TANGO_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { TANGO_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { TANGO_WORLD_PATTERNS_BASS } from './bass';
import { TANGO_WORLD_PATTERNS_MOTIF } from './motif';
import { TANGO_WORLD_PATTERNS_TEXTURE } from './texture';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": TANGO_WORLD_PATTERNS_OSTINATO,
  "cell": TANGO_WORLD_PATTERNS_CELL,
  "phrasePattern": TANGO_WORLD_PATTERNS_PHRASEPATTERN,
  "rolePattern": TANGO_WORLD_PATTERNS_ROLEPATTERN,
  "fill": TANGO_WORLD_PATTERNS_FILL,
  "break": TANGO_WORLD_PATTERNS_BREAK,
  "cadence": TANGO_WORLD_PATTERNS_CADENCE,
  "groove": TANGO_WORLD_PATTERNS_GROOVE,
  "interactionPattern": TANGO_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": TANGO_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": TANGO_WORLD_PATTERNS_BASS,
  "motif": TANGO_WORLD_PATTERNS_MOTIF,
  "texture": TANGO_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"cell","index":0},{"category":"phrasePattern","index":0},{"category":"rolePattern","index":0},{"category":"ostinato","index":2},{"category":"phrasePattern","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"phrasePattern","index":2},{"category":"interactionPattern","index":0},{"category":"ostinato","index":3},{"category":"groove","index":1},{"category":"sectionPattern","index":0},{"category":"groove","index":2},{"category":"bass","index":0},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"motif","index":0},{"category":"motif","index":1},{"category":"motif","index":2},{"category":"motif","index":3},{"category":"motif","index":4},{"category":"motif","index":5},{"category":"motif","index":6},{"category":"motif","index":7},{"category":"motif","index":8},{"category":"motif","index":9},{"category":"texture","index":0}];

export const TANGO_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
