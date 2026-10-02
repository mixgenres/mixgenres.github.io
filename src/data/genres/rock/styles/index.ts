import type { GenreWorld } from '../../../schema';
import { STYLE_DEFINITION as STYLE_0 } from './rock-hard-rock';
import { STYLE_DEFINITION as STYLE_1 } from './rock-grunge';
import { STYLE_DEFINITION as STYLE_2 } from './rock-progressive-rock';
import { STYLE_DEFINITION as STYLE_3 } from './rock-punk-rock';
import { STYLE_DEFINITION as STYLE_4 } from './rock-garage-rock';
import { STYLE_DEFINITION as STYLE_5 } from './rock-psychedelic';
import { STYLE_DEFINITION as STYLE_6 } from './rock-post-rock';
import { STYLE_DEFINITION as STYLE_7 } from './rock-shoegaze';

export const ROCK_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
