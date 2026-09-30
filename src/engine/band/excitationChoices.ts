/**
 * Excitation Gates & Action Compatibility Matrix
 * 
 * Determines whether transient collision noise is idiomatically valid for a given
 * instrument excitation type and performance action/articulation.
 */

import { PERCUSSIVE_ACTIONS } from '../../data/performance/excitationCompatibility';

export function isCollisionAllowedForAction(
  excitationType?: string,
  family?: string,
  action?: string,
  articulation?: string
): boolean {
  const act = (action || '').toLowerCase();
  const art = (articulation || '').toLowerCase();
  const ex = (excitationType || '').toLowerCase();
  const fam = (family || '').toLowerCase();

  // Continuous excitation types (breath, bellows, bow) or continuous instrument families
  const isContinuous =
    ex === 'breath' ||
    ex === 'bow' ||
    fam === 'bellows-and-keys' ||
    fam === 'winds' ||
    fam === 'brass' ||
    fam === 'bowed' ||
    fam === 'free-reed';

  if (!isContinuous) {
    // For plucked, struck, mallet, drum, and electronic instruments, collision transients are broadly valid
    return true;
  }

  // For continuous exciters, only allow attack collisions if the note action or articulation
  // is an explicitly percussive technique
  const isActionPercussive = PERCUSSIVE_ACTIONS.has(act) || PERCUSSIVE_ACTIONS.has(art);
  return isActionPercussive;
}
