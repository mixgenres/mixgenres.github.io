import { applyMixCalibration } from '../_shared/mixCalibration';
import { MIX_CALIBRATION } from './mixCalibration';
import { createGenreWorld } from '../_shared/genrePack';
import { GENRE_PACK } from './catalog';
import { authorWeirdArrangements } from './arrangements';

export const GENRE_WORLD = createGenreWorld(applyMixCalibration(authorWeirdArrangements(GENRE_PACK), MIX_CALIBRATION));
export const WeirdGenre = GENRE_WORLD;
