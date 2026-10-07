import { applyReferenceMix } from '../_shared/referenceMix';
import { REFERENCE_MIX } from './referenceMix';
import { createGenreWorld } from '../_shared/genrePack';
import { GENRE_PACK } from './catalog';

export const GENRE_WORLD = createGenreWorld(applyReferenceMix(GENRE_PACK, REFERENCE_MIX));
export const TangoGenre = GENRE_WORLD;
