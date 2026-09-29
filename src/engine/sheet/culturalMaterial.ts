import { VoiceProfile, foldToRange } from '../sheet/instrumentRoles.ts';
import type { ResolvedStyle } from '../../data/styles/schema';

export type CulturalHarmonyModel = 'functional' | 'modal-drone' | 'heterophonic' | 'fixed-cluster';

export interface CulturalRules {
  styleId: string;
  sourceModel: string;
  harmonyModel: CulturalHarmonyModel;
  /** Pitch intervals above the style's tonal center, in 12-TET approximation. */
  pitchIntervals: number[];
  /** Do not snap melody notes to Western chord tones. */
  snapToChord: boolean;
  /** Preserve pattern-authored timing instead of imposing a generic groove template. */
  authoredTimingOnly: boolean;
  /** Whether melodic layers should shadow a shared phrase with ornament/density changes. */
  heterophonic: boolean;
  /** Keep the default output sparse enough for the style to speak. */
  avoidBassFoundation: boolean;
}

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
  const modal = ['guqin','guzheng','pipa','erhu','dizi','xiao','jinghu','bagpipes','uilleann-pipes','tin-whistle','low-whistle','celtic-harp','fiddle','concertina','bodhran','bones'].includes(instrumentId);
  const fixed = ['sho','ryuteki','hichiriki'].includes(instrumentId);
  if (!modal && !fixed) return undefined;
  return {
    styleId: `preview-${instrumentId}`,
    sourceModel: fixed ? 'fixed-cluster' : 'modal-drone',
    harmonyModel: fixed ? 'fixed-cluster' : 'modal-drone',
    pitchIntervals: fixed ? [0,2,4,7,9] : [0,2,4,5,7,9,10],
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
  const fifthPc = (rootPc + 7) % 12;
  const octave = (rootPc + 12) % 12;
  const candidates = [rootPc, fifthPc, octave];
  if (intensity > 0.68) candidates.push((rootPc + (seed & 1 ? 9 : 2)) % 12);
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
  const chosenIntervals = intensity > 0.72 ? [0, 2, 4, 7, 9] : [0, 2, 5, 7];
  const out = chosenIntervals.map(iv => {
    const pc = (tonicPc + iv) % 12;
    return pc + 12 * Math.round((centre + (iv >= 7 ? 5 : 0) - pc) / 12);
  });
  return out.map(n => foldToRange(n, profile)).sort((a, b) => a - b).filter((n, i, arr) => i === 0 || n !== arr[i - 1]);
}
