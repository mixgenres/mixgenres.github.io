import { foldToRange } from '../sheet/instrumentRoles.ts';
import type { VoiceProfile } from '../../data/instruments/schema/voice-profile';
import type { ResolvedStyle } from '../../data/styles/schema';
import { PREVIEW_MODAL_INSTRUMENTS, PREVIEW_FIXED_INSTRUMENTS, FIXED_CULTURAL_PITCH_INTERVALS, MODAL_CULTURAL_PITCH_INTERVALS, CELTIC_OPEN_HARMONY_INTERVALS, CELTIC_COLOR_INTERVALS, SHO_HIGH_INTENSITY_INTERVALS, SHO_LOW_INTENSITY_INTERVALS } from '../../data/musicTheory/culturalPitchSets';
import type { CulturalRules, CulturalHarmonyModel } from '../../data/musicTheory/culturalPitchSets';

export function culturalRules(style: ResolvedStyle, _instrumentId?: string): CulturalRules | undefined {
  const model = style.contract.harmonyModel;
  if (!['modal-drone', 'heterophonic', 'fixed-cluster'].includes(model)) return undefined;
  const heterophonic = model === 'heterophonic' || /heterophonic|ensemble|silk|bamboo/i.test(style.contract.ensemble.interaction ?? '');
  const authoredTimingOnly = style.contract.pulseModel === 'free-rubato' || /rubato|ma|free/i.test(style.contract.form.join(' '));
  return {
    styleId: style.id,
    sourceModel: model,
    harmonyModel: model as CulturalHarmonyModel,
    pitchIntervals: style.contract.pitchIntervals,
    snapToChord: false,
    authoredTimingOnly,
    heterophonic,
    avoidBassFoundation: true,
  };
}

export function previewCulturalRules(instrumentId: string): CulturalRules | undefined {
  const modal = PREVIEW_MODAL_INSTRUMENTS.includes(instrumentId);
  const fixed = PREVIEW_FIXED_INSTRUMENTS.includes(instrumentId);
  if (!modal && !fixed) return undefined;
  return {
    styleId: `preview-${instrumentId}`,
    sourceModel: fixed ? 'fixed-cluster' : 'modal-drone',
    harmonyModel: fixed ? 'fixed-cluster' : 'modal-drone',
    pitchIntervals: fixed ? FIXED_CULTURAL_PITCH_INTERVALS : MODAL_CULTURAL_PITCH_INTERVALS,
    snapToChord: false,
    authoredTimingOnly: modal,
    heterophonic: modal,
    avoidBassFoundation: true,
  };
}

export function culturalDronePitch(rules: CulturalRules, tonicPc: number, profile: VoiceProfile, seed: number): number {
  const pc = /drone|gagaku|guqin/i.test(rules.styleId) ? tonicPc : (seed & 1 ? (tonicPc + 7) % 12 : tonicPc);
  const centre = Math.round(profile.centre);
  const midi = pc + 12 * Math.round((centre - pc) / 12);
  return foldToRange(midi, profile);
}


/**
 * Celtic accompaniment is not reduced to a stack of Western thirds.  The
 * written chord can still describe the harmonic moment, but realization favors
 * root/fifth drones, octaves and occasional modal color from the style's
 * pitch collection. This keeps chord support available without making functional
 * harmony the organizing principle.
 */
export function celticOpenHarmony(
  rootPc: number,
  profile: VoiceProfile,
  intensity: number,
  seed: number,
): number[] {
  const centre = Math.round(profile.centre);
  const candidates = CELTIC_OPEN_HARMONY_INTERVALS.map(interval => (rootPc + interval) % 12);
  if (intensity > 0.68) candidates.push((rootPc + CELTIC_COLOR_INTERVALS[seed & 1]) % 12);
  const out = candidates.map((pc, i) => foldToRange(pc + 12 * Math.round((centre + (i === 0 ? -7 : i === 1 ? 0 : 7) - pc) / 12), profile));
  return [...new Set(out)].sort((a,b) => a-b);
}

export function isCulturalWorld(style: ResolvedStyle): boolean {
  return ['modal-drone', 'heterophonic', 'fixed-cluster'].includes(style.contract.harmonyModel);
}

export function culturalPitchSet(rules: CulturalRules, tonicPc: number): number[] {
  return rules.pitchIntervals.map(iv => (tonicPc + iv) % 12);
}

/**
 * This is intentionally a close cluster, not a claim that 12-TET reproduces an actual aitake tuning.
 */
export function shoCluster(tonicPc: number, profile: VoiceProfile, intensity: number): number[] {
  const centre = Math.round(profile.centre);
  const chosenIntervals = intensity > 0.72 ? SHO_HIGH_INTENSITY_INTERVALS : SHO_LOW_INTENSITY_INTERVALS;
  const out = chosenIntervals.map(iv => {
    const pc = (tonicPc + iv) % 12;
    return pc + 12 * Math.round((centre + (iv >= 7 ? 5 : 0) - pc) / 12);
  });
  return out.map(n => foldToRange(n, profile)).sort((a, b) => a - b).filter((n, i, arr) => i === 0 || n !== arr[i - 1]);
}
