import type { FormIntensity, Region, SectionEnergy } from '../../types';
import type { WorldContract, EnergyMapping } from '../../engine/style/contracts';
import { FORM_INTENSITY_TO_ENERGY, ENERGY_TO_FORM_INTENSITY, ENERGY_LABELS } from '../../data/performance/energy';

/**
 * ENERGY — the one weight dial.
 *
 * The engine used to carry three overlapping notions of "how much is going on":
 *
 *   - `Region.intensity`      'low' | 'medium' | 'high' | 'peak'
 *   - `Region.density` / `Song.densities`   (never actually typed; UI-only)
 *   - `sheet.energies[region][track]`       1..5
 *
 * plus a fourth inside the world contract (`EnergyMapping.density`). They
 * disagreed with each other and two of them did not exist at runtime.
 *
 * There is now exactly one scalar — `SectionEnergy` (1..5) — and one place that
 * says what it *means*: the world contract's `energyMappings`. Energy is not a
 * loudness curve and not a note count. It is a request that the world
 * interprets: in tango energy 5 is a yumba marcato and a louder bandoneón, in
 * house it is another layer of percussion and an open filter, in flamenco it is
 * jaleo and palmas, not a busier guitar.
 *
 * `FormIntensity` survives only as the *authoring* vocabulary for form
 * templates, because that is how a musician writes a song map ("the bridge is
 * high"). It is converted here, at the boundary, and never read as truth.
 */

export function energyForFormIntensity(intensity: FormIntensity | undefined): SectionEnergy {
  return FORM_INTENSITY_TO_ENERGY[intensity ?? 'medium'] ?? 3;
}

export function formIntensityForEnergy(energy: SectionEnergy | undefined): FormIntensity {
  return ENERGY_TO_FORM_INTENSITY[clampEnergy(energy ?? 3)];
}

export function clampEnergy(value: number | undefined): SectionEnergy {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return 3;
  return Math.max(1, Math.min(5, n)) as SectionEnergy;
}

/**
 * The authoritative read of a section's weight. `energy` wins; `intensity` is
 * only consulted for songs written before the migration.
 */
export function energyOf(region: Region | undefined): SectionEnergy {
  if (!region) return 3;
  if (region.energy !== undefined) return clampEnergy(region.energy);
  return energyForFormIntensity(region.intensity);
}

/**
 * A 0..1 scalar for the parts of the engine that want a continuous shape
 * (section curves, drive, thinning). Derived — never stored.
 */
export function shapeScalarOf(region: Region | undefined): number {
  return (energyOf(region) - 1) / 4;
}

export function energyMappingFor(contract: WorldContract, energy: SectionEnergy): EnergyMapping {
  return contract.energyMappings[clampEnergy(energy)] ?? contract.energyMappings[3];
}

/**
 * How much of a part's authored material is voiced at this energy, in this
 * world. Returns 0..1. A world that says energy 1 still means `activity: 0.9`
 * (flamenco: the compás never thins) gets exactly that.
 */
export function activityFor(contract: WorldContract, energy: SectionEnergy): number {
  return Math.max(0, Math.min(1, energyMappingFor(contract, energy).activity));
}

/** Nearest energy level whose `activity` matches a 0..1 request. */
export function energyForActivity(contract: WorldContract, activity: number): SectionEnergy {
  const target = Math.max(0, Math.min(1, activity));
  const levels: SectionEnergy[] = [1, 2, 3, 4, 5];
  return levels
    .slice()
    .sort(
      (a, b) =>
        Math.abs(energyMappingFor(contract, a).activity - target) -
        Math.abs(energyMappingFor(contract, b).activity - target),
    )[0] ?? 3;
}


/**
 * A world may rename the five steps so the dial speaks the genre's language.
 * Falls back to the neutral labels above.
 */
export function energyLabel(energy: SectionEnergy, contract?: WorldContract): string {
  const named = contract?.energyLabels?.[clampEnergy(energy)];
  return named ?? ENERGY_LABELS[clampEnergy(energy)];
}
