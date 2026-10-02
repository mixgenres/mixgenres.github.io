import type { GenreWorld, MusicalPattern } from '../../../schema';
import { REGGAE_DUB_WORLD_PATTERNS_GROOVE } from './groove';
import { REGGAE_DUB_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { REGGAE_DUB_WORLD_PATTERNS_BREAK } from './break';
import { REGGAE_DUB_WORLD_PATTERNS_CELL } from './cell';
import { REGGAE_DUB_WORLD_PATTERNS_BASS } from './bass';
import { REGGAE_DUB_WORLD_PATTERNS_TEXTURE } from './texture';
import { REGGAE_DUB_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { REGGAE_DUB_WORLD_PATTERNS_CADENCE } from './cadence';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": REGGAE_DUB_WORLD_PATTERNS_GROOVE,
  "ostinato": REGGAE_DUB_WORLD_PATTERNS_OSTINATO,
  "break": REGGAE_DUB_WORLD_PATTERNS_BREAK,
  "cell": REGGAE_DUB_WORLD_PATTERNS_CELL,
  "bass": REGGAE_DUB_WORLD_PATTERNS_BASS,
  "texture": REGGAE_DUB_WORLD_PATTERNS_TEXTURE,
  "interactionPattern": REGGAE_DUB_WORLD_PATTERNS_INTERACTIONPATTERN,
  "cadence": REGGAE_DUB_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"break","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"cell","index":0},{"category":"bass","index":0},{"category":"cell","index":1},{"category":"texture","index":0},{"category":"break","index":1},{"category":"groove","index":3},{"category":"ostinato","index":2},{"category":"interactionPattern","index":0},{"category":"cadence","index":0}];

export const REGGAE_DUB_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
