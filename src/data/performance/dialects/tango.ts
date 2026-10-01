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

export const ENTRY_21: [string, InstrumentDialect] = ["violin:tango", {
  id: 'violin:tango', instrumentId: 'violin', name: 'Tango Violin', family: 'bowed',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'arco',
  allowedTechniques: ['arco', 'detache', 'staccato', 'marcato', 'pizzicato', 'legato', 'chicharra'],
  bowPressureOverride: 0.62, brightnessMultiplier: 0.92, decayMultiplier: 0.92, bendGlideMs: 28,
  micProximityPreset: 'close-mic',
}];

export const ENTRY_22: [string, InstrumentDialect] = ["piano:tango", {
  id: 'piano:tango', instrumentId: 'piano', name: 'Tango Piano', family: 'keys',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'staccato',
  allowedTechniques: ['staccato', 'marcato', 'yumba', 'chapa', 'arrastre', 'accent', 'cluster', 'tenuto'],
  brightnessMultiplier: 0.94, decayMultiplier: 0.82, micProximityPreset: 'close-mic',
}];

export const ENTRY_23: [string, InstrumentDialect] = ["cello:tango", {
  id: 'cello:tango', instrumentId: 'cello', name: 'Tango Cello', family: 'bowed',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'arco',
  allowedTechniques: ['arco', 'detache', 'staccato', 'marcato', 'pizzicato', 'legato', 'arrastre'],
  bowPressureOverride: 0.58, brightnessMultiplier: 0.90, decayMultiplier: 1.0, micProximityPreset: 'close-mic',
}];

export const ENTRY_24: [string, InstrumentDialect] = ["flute:tango", {
  id: 'flute:tango', instrumentId: 'flute', name: 'Tango Flute', family: 'winds',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'tenuto',
  allowedTechniques: ['tenuto', 'legato', 'staccato', 'vibrato', 'accent'],
  brightnessMultiplier: 0.94, decayMultiplier: 0.96, micProximityPreset: 'close-mic',
}];

export const ENTRY_25: [string, InstrumentDialect] = ["clarinet:tango", {
  id: 'clarinet:tango', instrumentId: 'clarinet', name: 'Tango Clarinet', family: 'winds',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'tenuto',
  allowedTechniques: ['tenuto', 'legato', 'staccato', 'vibrato', 'bend', 'trill', 'portato', 'accent'],
  brightnessMultiplier: 0.92, decayMultiplier: 1.0, micProximityPreset: 'close-mic',
}];
