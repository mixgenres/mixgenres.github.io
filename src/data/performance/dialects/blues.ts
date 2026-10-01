import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_8: [string, InstrumentDialect] = ["guitar:blues", {
    id: 'guitar:blues',
    instrumentId: 'guitarra_blues',
    name: 'Blues Guitar',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pick',
    allowedTechniques: ['pick', 'slide', 'bend', 'palm-mute'],
    pluckPositionOverride: 0.3,
    brightnessMultiplier: 1.1,
    decayMultiplier: 1.2,
    tuningSystemId: 'blues-continuum',
    micProximityPreset: 'direct-box',
    bendGlideMs: 40,
  }];
