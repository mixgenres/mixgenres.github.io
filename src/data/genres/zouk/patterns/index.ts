import type { GenreWorld, MusicalPattern } from '../../../schema';
import { ZOUK_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { ZOUK_WORLD_PATTERNS_BREAK } from './break';
import { ZOUK_WORLD_PATTERNS_CADENCE } from './cadence';
import { ZOUK_WORLD_PATTERNS_GROOVE } from './groove';
import { ZOUK_WORLD_PATTERNS_PHRASEPATTERN } from './phrase-pattern';
import { ZOUK_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { ZOUK_WORLD_PATTERNS_SECTIONPATTERN } from './section-pattern';
import { ZOUK_WORLD_PATTERNS_BASS } from './bass';
import { ZOUK_WORLD_PATTERNS_COMPING } from './comping';
import { ZOUK_WORLD_PATTERNS_LEAD } from './lead';
import { ZOUK_WORLD_PATTERNS_TEXTURE } from './texture';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": ZOUK_WORLD_PATTERNS_OSTINATO,
  "break": ZOUK_WORLD_PATTERNS_BREAK,
  "cadence": ZOUK_WORLD_PATTERNS_CADENCE,
  "groove": ZOUK_WORLD_PATTERNS_GROOVE,
  "phrasePattern": ZOUK_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": ZOUK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": ZOUK_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": ZOUK_WORLD_PATTERNS_BASS,
  "comping": ZOUK_WORLD_PATTERNS_COMPING,
  "lead": ZOUK_WORLD_PATTERNS_LEAD,
  "texture": ZOUK_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"bass","index":2},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"texture","index":0}];

export const ZOUK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
