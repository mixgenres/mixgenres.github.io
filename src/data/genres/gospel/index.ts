import { applyMixCalibration } from '../_shared/mixCalibration';
import { MIX_CALIBRATION } from './mixCalibration';
import { createGenreWorld } from '../_shared/genrePack';
import { GENRE_PACK } from './catalog';

export const GENRE_WORLD = createGenreWorld(applyMixCalibration(GENRE_PACK, MIX_CALIBRATION));
export const GospelGenre = GENRE_WORLD;
