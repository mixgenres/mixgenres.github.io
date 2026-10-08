import type { Sheet } from '../sheet/sheet';
import { compileSongPipeline } from '../pipeline/compileSong';
export { GESTURE_NAMES, GESTURE_CODES, velocityForEnergy, type BandPlan, type SongPlan, type RhythmIdea, type RhythmOnset, type LensStack } from './interpretBand';

/** Public score and playback entry points share the same composition pipeline. */
export function arrangeBand(sheet: Sheet, _seed = 0) { return compileSongPipeline(sheet).performance; }
export function composeMusicianScore(sheet: Sheet) {
  const compiled = compileSongPipeline(sheet);
  return { ...compiled.interpretation, mixTimeline: compiled.mix };
}
export const compileWholeSong = arrangeBand;
