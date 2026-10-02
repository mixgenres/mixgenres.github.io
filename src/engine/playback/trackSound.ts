import { defaultTrackParams, modelForInstrument, makeupGainFor, type TrackParams } from './elementaryEngine';
import { getLuthierModelForInstrument } from './luthier';
import { resolveDialect, performanceModeForContext } from '../band/genreDialect';
import { getRoleGainLinear } from '../studio/mixer';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import type { LuthierPhysicalParameters } from '../../data/instruments/schema/luthier';

/** Resolve once from authored instrument metadata, then layer the selected dialect. */
export function resolveTrackSound(instrumentId: string, worldId = '', styleId = '', role?: string, luthier?: LuthierPhysicalParameters) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  const assignedRole = role ?? def?.acousticProfile?.role ?? 'comp';
  const dialect = resolveDialect(instrumentId, worldId, styleId, assignedRole);
  const variant = def?.variants?.find(item => item.id === dialect?.variantId);
  const params = defaultTrackParams(instrumentId, luthier ?? variant?.luthierPhysics ?? def?.luthierPhysics ?? getLuthierModelForInstrument(instrumentId), def?.elementaryModel ?? modelForInstrument(instrumentId));
  params.variantId = variant?.id;
  params.courses = variant?.courses ?? params.courses;
  params.bodyConstruction = variant?.bodyConstruction ?? params.bodyConstruction;
  params.excitationType = variant?.excitationType ?? params.excitationType;
  params.synthPatchId = dialect?.patchId;
  params.synthPatch = def?.patches?.find(item => item.id === dialect?.patchId);
  params.genreId = worldId;
  params.performanceMode = performanceModeForContext(worldId, styleId);
  if (dialect) {
    params.dialect = dialect.id;
    if (dialect.courses !== undefined) params.courses = dialect.courses;
    if (dialect.bodyConstruction !== undefined) params.bodyConstruction = dialect.bodyConstruction;
    if (dialect.excitationType !== undefined) params.excitationType = dialect.excitationType;
    if (dialect.sympatheticStrings !== undefined) params.sympatheticStrings = dialect.sympatheticStrings;
    params.performanceMode = dialect.performanceMode;
    if (dialect.pluckPositionOverride !== undefined) params.pluckPosition = dialect.pluckPositionOverride;
    if (dialect.bowPressureOverride !== undefined) params.bowPressure = dialect.bowPressureOverride;
    if (dialect.contactPointOverride !== undefined) params.contact = dialect.contactPointOverride;
    params.brightness *= dialect.brightnessMultiplier ?? 1;
    params.decay *= dialect.decayMultiplier ?? 1;
    params.body *= dialect.bodyMultiplier ?? 1;
    if (dialect.bendGlideMs !== undefined) params.bendGlideMs = dialect.bendGlideMs;
    if (dialect.drive !== undefined) params.drive = Math.max(params.drive, dialect.drive);
    if (dialect.registration !== undefined) params.registration = dialect.registration;
    if (dialect.rotary !== undefined) params.rotary = dialect.rotary;
    if (dialect.muteType && dialect.muteType !== 'open') params.mute = Math.max(params.mute, 0.82);
  }
  params.roleGain = getRoleGainLinear(assignedRole, worldId || 'default', instrumentId, styleId);
  return params;
}

/** User level, authored makeup gain, assigned role and controllers are independent factors. */
export function resolveTrackGain(params: TrackParams, level = 1, volume = 1, expression = 1): number {
  return Math.max(0, Math.min(35, makeupGainFor(params.model, params.instrumentId) * (params.roleGain ?? 1) * level * volume * expression));
}
