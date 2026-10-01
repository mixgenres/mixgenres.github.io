import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_11: [string, InstrumentDialect] = ["oud:arabic-maqam", {
    id: 'oud:arabic-maqam',
    instrumentId: 'oud',
    name: 'Oud',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'tremolo', 'glissando'],
    pluckPositionOverride: 0.25,
    brightnessMultiplier: 1.05,
    tuningSystemId: 'maqam-bayati',
    micProximityPreset: 'close-mic',
    bendGlideMs: 35,
  }];

export const ENTRY_12: [string, InstrumentDialect] = ["sitar:hindustani", {
    id: 'sitar:hindustani',
    instrumentId: 'sitar',
    name: 'Sitar',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'meend-bend', 'jhala-drone'],
    pluckPositionOverride: 0.2,
    brightnessMultiplier: 1.3,
    decayMultiplier: 1.5,
    tuningSystemId: 'just-intonation',
    micProximityPreset: 'room-ambient',
    bendGlideMs: 65,
  }];

export const ENTRY_13: [string, InstrumentDialect] = ["quena:andean-flute", {
    id: 'quena:andean-flute',
    instrumentId: 'quena',
    name: 'Quena',
    family: 'wind',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'breath',
    allowedTechniques: ['breath', 'overblow', 'glissando'],
    brightnessMultiplier: 1.2,
    micProximityPreset: 'close-mic',
    bendGlideMs: 30,
  }];

export const ENTRY_14: [string, InstrumentDialect] = ["bagpipes:celtic", {
    id: 'bagpipes:celtic',
    instrumentId: 'bagpipes',
    name: 'Highland Bagpipes',
    family: 'winds',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'legato',
    allowedTechniques: ['legato', 'grace', 'accent'],
    decayMultiplier: 4.0,
    micProximityPreset: 'room-ambient',
  }];
