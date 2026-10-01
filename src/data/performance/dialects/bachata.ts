import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_19: [string, InstrumentDialect] = ["requinto:bachata", {
    id: 'requinto:bachata',
    instrumentId: 'requinto',
    name: 'Requinto',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'apagado', 'staccato'],
    // Keep the requinto's pick/nail definition without pushing its resonant
    // upper partials into the renderer's maximum-brightness clamp.
    brightnessMultiplier: 1.12,
    bodyMultiplier: 0.6,
    decayMultiplier: 0.65,
    micProximityPreset: 'close-mic',
  }];
