import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_6: [string, InstrumentDialect] = ["guitar:flamenco", {
    id: 'guitar:flamenco',
    instrumentId: 'guitarra_flamenca',
    name: 'Flamenco Guitar',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'punteado',
    allowedTechniques: ['punteado', 'rasgueado', 'abanico', 'golpe', 'arrastre', 'palm-mute'],
    pluckPositionOverride: 0.22,
    // Preserve the characteristic nail attack while leaving headroom for the
    // instrument's own resonances and the master tone profile.
    brightnessMultiplier: 1.08,
    decayMultiplier: 0.85,
    micProximityPreset: 'close-mic',
  }];

export const ENTRY_9: [string, InstrumentDialect] = ["cajon:flamenco", {
    id: 'cajon:flamenco',
    instrumentId: 'cajon_flamenco',
    name: 'Cajón',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'center-bass',
    allowedTechniques: ['center-bass', 'edge-slap', 'rim-tap', 'side-wood'],
    micProximityPreset: 'close-mic',
  }];
