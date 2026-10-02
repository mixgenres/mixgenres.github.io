import type { Region, Track } from '../../types';
import type { SoloMode, SoloPolicy } from '../../data/styles/schema';
import type { WorldContract } from '../style/contracts';

export interface SoloPlan {
  trackIds: string[];
  mode: SoloMode;
  policy: SoloPolicy;
  trackRoles?: Record<string, string>;
}

/** A musical solo is explicitly assigned, never inferred from a section name. */
export function resolveSoloPlan(region: Region, tracks: Track[], contract: WorldContract, activeIds: string[]): SoloPlan | undefined {
  const assignment = region.solo;
  const definition = contract.soloDefinition;
  if (!assignment || !definition) return undefined;
  const trackIds = [...new Set(assignment.trackIds)].filter(id =>
    tracks.some(t => t.id === id && !t.muted) && activeIds.includes(id));
  if (!trackIds.length) return undefined;
  const mode = !assignment.mode || assignment.mode === 'genre' ? definition.defaultMode : assignment.mode;
  const policy = definition.modes[mode];
  if (!policy) return undefined;
  return { trackIds, mode, policy, trackRoles: Object.fromEntries(tracks.map(t => [t.id, t.role])) };
}

export function supportsSolo(plan: SoloPlan, track: Track, activeSoloists?: string[]): boolean {
  if (plan.trackIds.includes(track.id)) return true;
  if (plan.mode === 'trading' && activeSoloists?.some(id => plan.policy.tradingRestRoles?.includes(plan.trackRoles?.[id] ?? ''))) return false;
  if (plan.policy.accompaniment === 'none') return false;
  return plan.policy.accompaniment !== 'rhythm' || !!plan.policy.supportRoles?.includes(track.role);
}

/** Shared bar-based turns keep every instrument on the same trading clock. */
export function soloistAtBar(plan: SoloPlan, region: Region, bar: number, cycleLength = 1): string[] {
  if (plan.mode !== 'trading') return plan.trackIds;
  const cycle = Math.max(1, cycleLength);
  const bars = Math.max(cycle, Math.ceil((plan.policy.tradingBars ?? plan.policy.phraseBars) / cycle) * cycle);
  const turn = Math.floor(Math.max(0, bar - region.start) / bars);
  return [plan.trackIds[turn % plan.trackIds.length]];
}
