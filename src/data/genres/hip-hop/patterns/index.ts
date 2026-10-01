import type { GenreWorld, MusicalPattern } from '../../../schema';
import { HIP_HOP_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { HIP_HOP_WORLD_PATTERNS_FILL } from './fill';
import { HIP_HOP_WORLD_PATTERNS_BREAK } from './break';
import { HIP_HOP_WORLD_PATTERNS_CADENCE } from './cadence';
import { HIP_HOP_WORLD_PATTERNS_GROOVE } from './groove';
import { HIP_HOP_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { HIP_HOP_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { HIP_HOP_WORLD_PATTERNS_BASS } from './bass';
import { HIP_HOP_WORLD_PATTERNS_COMPING } from './comping';
import { HIP_HOP_WORLD_PATTERNS_LEAD } from './lead';
import { HIP_HOP_WORLD_PATTERNS_TEXTURE } from './texture';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "sectionPattern": HIP_HOP_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": HIP_HOP_WORLD_PATTERNS_FILL,
  "break": HIP_HOP_WORLD_PATTERNS_BREAK,
  "cadence": HIP_HOP_WORLD_PATTERNS_CADENCE,
  "groove": HIP_HOP_WORLD_PATTERNS_GROOVE,
  "ostinato": HIP_HOP_WORLD_PATTERNS_OSTINATO,
  "interactionPattern": HIP_HOP_WORLD_PATTERNS_INTERACTIONPATTERN,
  "phrasePattern": HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN,
  "bass": HIP_HOP_WORLD_PATTERNS_BASS,
  "comping": HIP_HOP_WORLD_PATTERNS_COMPING,
  "lead": HIP_HOP_WORLD_PATTERNS_LEAD,
  "texture": HIP_HOP_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"sectionPattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"ostinato","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"phrasePattern","index":0},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"groove","index":16},{"category":"groove","index":17},{"category":"groove","index":18},{"category":"groove","index":19},{"category":"lead","index":0},{"category":"texture","index":0},{"category":"texture","index":1}];

export const HIP_HOP_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
