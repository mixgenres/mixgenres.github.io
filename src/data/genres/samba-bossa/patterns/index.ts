import type { GenreWorld, MusicalPattern } from '../../../schema';
import { SAMBA_BOSSA_WORLD_PATTERNS_GROOVE } from './groove';
import { SAMBA_BOSSA_WORLD_PATTERNS_OSTINATO } from './ostinato';
import { SAMBA_BOSSA_WORLD_PATTERNS_CELL } from './cell';
import { SAMBA_BOSSA_WORLD_PATTERNS_BASS } from './bass';
import { SAMBA_BOSSA_WORLD_PATTERNS_ROLEPATTERN } from './role-pattern';
import { SAMBA_BOSSA_WORLD_PATTERNS_INTERACTIONPATTERN } from './interaction-pattern';
import { SAMBA_BOSSA_WORLD_PATTERNS_BREAK } from './break';
import { SAMBA_BOSSA_WORLD_PATTERNS_CADENCE } from './cadence';

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": SAMBA_BOSSA_WORLD_PATTERNS_GROOVE,
  "ostinato": SAMBA_BOSSA_WORLD_PATTERNS_OSTINATO,
  "cell": SAMBA_BOSSA_WORLD_PATTERNS_CELL,
  "bass": SAMBA_BOSSA_WORLD_PATTERNS_BASS,
  "rolePattern": SAMBA_BOSSA_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": SAMBA_BOSSA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "break": SAMBA_BOSSA_WORLD_PATTERNS_BREAK,
  "cadence": SAMBA_BOSSA_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"groove","index":1},{"category":"ostinato","index":0},{"category":"groove","index":2},{"category":"ostinato","index":1},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"ostinato","index":2},{"category":"cell","index":0},{"category":"ostinato","index":3},{"category":"bass","index":0},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"break","index":0},{"category":"cadence","index":0}];

export const SAMBA_BOSSA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
