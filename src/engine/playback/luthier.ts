import { INSTRUMENTS_BY_ID, LUTHIER_INSTRUMENT_MAP } from '../../engine/lookup/instruments';
import type { LuthierPhysicalParameters } from '../../data/instruments/schema/luthier';

/**
 * THE PLUGGABLE LUTHIER API
 * =========================
 * Maps instruments to physical wave, mesh, friction, and waveguide models.
 * Provides deterministic physical instrument models for the shared renderer.
 */

/**
 * Resolves physical Luthier model parameters for any given instrument ID.
 */
export function getLuthierModelForInstrument(instrumentId: string): LuthierPhysicalParameters {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  const profile = def?.luthierPhysics ?? LUTHIER_INSTRUMENT_MAP[instrumentId];
  if (profile) return profile;

  throw new Error(
    `UNRESOLVED_MUSICAL_IDENTITY_ERROR: no physical Luthier profile for instrument "${instrumentId}". ` +
    `Author a catalog definition and physical model before rendering.`
  );
}
