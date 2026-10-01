import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_5: [string, InstrumentDialect] = ["upright-bass:tango-arco", {
    id: 'upright-bass:tango-arco',
    instrumentId: 'upright-bass',
    name: 'Upright Bass',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'arco',
    allowedTechniques: ['arco', 'arrastre', 'chicharra', 'pizzicato', 'golpe'],
    bowPressureOverride: 0.65,
    decayMultiplier: 1.4,
    brightnessMultiplier: 0.85,
    micProximityPreset: 'hall-stage',
    bendGlideMs: 45,
  }];

export const ENTRY_7: [string, InstrumentDialect] = ["guitar:tango", {
    id: 'guitar:tango',
    instrumentId: 'guitarra_tango',
    name: 'Tango Guitar',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'punteado',
    allowedTechniques: ['punteado', 'arrastre', 'palm-mute', 'chicharra'],
    pluckPositionOverride: 0.35,
    brightnessMultiplier: 0.9,
    decayMultiplier: 0.75,
    micProximityPreset: 'close-mic',
  }];

export const ENTRY_10: [string, InstrumentDialect] = ["bandoneon:tango", {
    id: 'bandoneon:tango',
    instrumentId: 'bandoneon',
    name: 'Bandoneón',
    family: 'bellows',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'bellows-press',
    allowedTechniques: ['bellows-press', 'staccato-stab', 'bellows-shake'],
    micProximityPreset: 'room-ambient',
  }];
