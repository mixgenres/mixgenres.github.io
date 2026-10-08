import { ELECTRIC_INSTRUMENT_PATTERN } from '../../data/instruments/idClassifiers';
import { resolveDialect } from '../band/genreDialect';
import { getRoleGainLinear } from '../studio/mixer';
import { StereoFieldManager } from '../studio/panning';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import type { SynthPatch } from '../../data/instruments/schema/instrument-def';

/** The small set of authored sound choices that affect SoundFont routing/mix. */
export interface TrackSound {
  pan: number;
  roleGain: number;
  drive: number;
  mute: number;
  variantId?: string;
  bodyConstruction?: string;
  excitationType?: string;
  synthPatchId?: string;
  synthPatch?: SynthPatch;
}

/** Resolve one part's sample and mixer choices from instrument/style metadata. */
export function resolveTrackSound(instrumentId: string, worldId = '', styleId = '', role?: string): TrackSound {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) throw new Error(`Unknown sampled instrument: ${instrumentId}`);
  const assignedRole = role ?? def.acousticProfile?.role ?? 'comp';
  const dialect = resolveDialect(instrumentId, worldId, styleId, assignedRole);
  const variant = def.variants?.find(item => item.id === dialect?.variantId);
  const physical = def.luthierPhysics;
  const electric = ELECTRIC_INSTRUMENT_PATTERN.test(instrumentId.toLowerCase());
  let drive = Math.max(0, Math.min(1, electric
    ? 0.15 + (physical?.harmonicRichness ?? 0.5) * 0.55
    : (physical?.harmonicRichness ?? 0.5) * 0.08));
  if (dialect?.drive !== undefined) drive = Math.max(drive, dialect.drive);
  return {
    pan: Math.max(0, Math.min(1, new StereoFieldManager().resolveInstrumentPanNormalized(instrumentId) + (def.acousticProfile?.pan ?? 0) * 0.5)),
    roleGain: getRoleGainLinear(assignedRole, worldId || 'default', instrumentId, styleId) * 10 ** ((def.acousticProfile?.trim ?? 0) / 20),
    drive,
    mute: dialect?.muteType && dialect.muteType !== 'open' ? 0.82 : 0,
    variantId: variant?.id,
    bodyConstruction: dialect?.bodyConstruction ?? variant?.bodyConstruction ?? physical?.bodyConstruction ?? def.bodyConstruction,
    excitationType: dialect?.excitationType ?? variant?.excitationType ?? physical?.excitationType ?? def.excitationType,
    synthPatchId: dialect?.patchId,
    synthPatch: def.patches?.find(item => item.id === dialect?.patchId),
  };
}

/** User level, authored role makeup, and live controls stay independent. */
export function resolveTrackGain(params: TrackSound, level = 1, volume = 1, expression = 1): number {
  return Math.max(0, params.roleGain * level * volume * expression);
}
