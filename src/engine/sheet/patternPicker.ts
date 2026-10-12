import type { MusicalPattern } from '../../types';
import { instrumentPatternKinds } from '../lookup/instruments';

/** Keep pattern pickers focused on material an instrument can actually play. */
export function patternsForPickerVoice(patterns: MusicalPattern[], instrumentId: string, role: string): MusicalPattern[] {
  const kinds = new Set(instrumentPatternKinds(instrumentId));
  if (!kinds.size) return [];

  return patterns.filter(pattern => {
    const instrumentTargets = [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])].map(String);
    if (instrumentTargets.length && !instrumentTargets.some(target => kinds.has(target))) return false;

    const roleTargets = [...pattern.roles, ...(pattern.compatibleRoles ?? [])].map(String);
    return roleTargets.some(target => target === role || kinds.has(target)) || !!pattern.canCrossRole;
  });
}

