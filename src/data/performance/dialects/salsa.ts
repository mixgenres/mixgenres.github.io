import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_0: [string, InstrumentDialect] = ["congas:salsa", {
    id: 'congas:salsa',
    instrumentId: 'congas',
    name: 'Congas',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'slap', 'muff', 'bass'],
    bodyMultiplier: 1.6, // Huge room resonance
    brightnessMultiplier: 1.1,
  }];

export const ENTRY_2: [string, InstrumentDialect] = ["trumpet:salsa", {
    id: 'trumpet:salsa',
    instrumentId: 'trumpet',
    name: 'Trumpet',
    family: 'brass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'marcato',
    allowedTechniques: ['marcato', 'accent', 'staccato', 'fall'],
    bodyMultiplier: 1.3,
    brightnessMultiplier: 1.25,
  }];

export const ENTRY_4: [string, InstrumentDialect] = ["upright-bass:salsa-tumbao", {
    id: 'upright-bass:salsa-tumbao',
    instrumentId: 'upright-bass',
    name: 'Upright Bass',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pizzicato',
    allowedTechniques: ['pizzicato', 'slap-bass', 'mute'],
    pluckPositionOverride: 0.15,
    contactPointOverride: 0.2,
    decayMultiplier: 0.7,
    brightnessMultiplier: 1.15,
    micProximityPreset: 'close-mic',
  }];

export const ENTRY_15: [string, InstrumentDialect] = ["cowbell:salsa", {
    id: 'cowbell:salsa',
    instrumentId: 'cowbell',
    name: 'Salsa Cowbell / Claves',
    family: 'metal-and-wood',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'accent', 'staccato'],
    brightnessMultiplier: 1.5,
  }];
