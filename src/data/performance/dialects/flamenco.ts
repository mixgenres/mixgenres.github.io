import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_6: [string, InstrumentDialect] = ["guitar:flamenco", {
    id: 'guitar:flamenco',
    instrumentId: 'guitar',
    name: 'Flamenco Guitar (Spanish Nylon)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'fingerstyle',
    allowedTechniques: ['fingerstyle', 'rasgueado', 'abanico', 'golpe', 'picado', 'alzapua', 'tremolo', 'palm-mute'],
    pluckPositionOverride: 0.22,
    brightnessMultiplier: 1.25,
    decayMultiplier: 0.85,
    micProximityPreset: 'close-mic',
  }];

export const ENTRY_9: [string, InstrumentDialect] = ["cajon:flamenco", {
    id: 'cajon:flamenco',
    instrumentId: 'cajon',
    name: 'Flamenco Cajón (Peru/Spain Mesh)',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'center-bass',
    allowedTechniques: ['center-bass', 'edge-slap', 'rim-tap', 'side-wood'],
    micProximityPreset: 'close-mic',
  }];
