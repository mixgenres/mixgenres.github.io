import { ELECTRIC_INSTRUMENT_PATTERN, ELECTRONIC_GAIN_INSTRUMENT_PATTERN } from '../../data/instruments/idClassifiers';
import { EXACT_PLUCKED_PRESETS, INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import type { LuthierPhysicalParameters } from '../../data/instruments/schema/luthier';
import { getLuthierModelForInstrument } from './luthier';
import { StereoFieldManager } from '../studio/panning';
import type { TrackParams } from './soundTypes';

export function normalizedParams(instrumentId: string, luthier: LuthierPhysicalParameters) {
  const family = INSTRUMENTS_BY_ID[instrumentId]?.family ?? 'hybrid';
  const electric = ELECTRIC_INSTRUMENT_PATTERN.test(instrumentId.toLowerCase());
  const brightness = Math.max(0, Math.min(1, 0.42 + luthier.harmonicRichness * 0.48 + (electric ? 0.1 : 0)));
  const decay = Math.max(0.1, Math.min(8, luthier.decayTimeSec ?? luthier.decayTimeFactor));
  const drive = Math.max(0, Math.min(1, electric ? 0.15 + luthier.harmonicRichness * 0.55 : luthier.harmonicRichness * 0.08));
  const bodyDivisor = family === 'hand-drums' || family === 'metal-and-wood' ? 2 : family === 'plucked' && /bass/.test(instrumentId) ? 120 : 30;
  const body = Math.max(0, Math.min(1, luthier.bodyResonanceVolume / bodyDivisor));
  return { brightness, decay, drive, body, model: family };
}

export function defaultTrackParams(instrumentId = '', luthier?: LuthierPhysicalParameters): TrackParams {
  const physical = luthier ?? getLuthierModelForInstrument(instrumentId);
  const normalized = normalizedParams(instrumentId, physical);
  const isElectronic = ELECTRONIC_GAIN_INSTRUMENT_PATTERN.test(instrumentId.toLowerCase());
  const preset = EXACT_PLUCKED_PRESETS[instrumentId.toLowerCase()];
  return {
    ...normalized,
    tension: Math.max(0, Math.min(1, physical.stringTension ?? physical.tension)),
    styleFlavor: 0.5, articulation: 0, contact: 0.5, mute: 0, bowPressure: 0.45,
    bowVelocity: 0.35, bodyTap: 0, pluckPosition: 0.28, pressure: 0.55, resonance: 0.5,
    pan: new StereoFieldManager().resolveInstrumentPanNormalized(instrumentId),
    performanceMode: isElectronic ? 'programmed-electronic' : 'acoustic-ensemble',
    bendGlideMs: 15, instrumentId,
    courses: physical.courses ?? preset?.courses ?? 1,
    bodyConstruction: physical.bodyConstruction ?? preset?.bodyConstruction ?? 'wood-box',
    excitationType: physical.excitationType ?? INSTRUMENTS_BY_ID[instrumentId]?.excitationType ?? preset?.excitationType ?? 'fingerpad',
    sympatheticStrings: physical.sympatheticStrings ?? preset?.sympatheticStrings ?? false,
  };
}

export function midiToFreq(note: number): number {
  return 440 * Math.pow(2, (note - 69) / 12);
}
