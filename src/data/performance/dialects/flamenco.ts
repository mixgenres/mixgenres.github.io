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

export const ENTRY_26: [string, InstrumentDialect] = ["flute:flamenco", {
  id: 'flute:flamenco', instrumentId: 'flute', name: 'Flamenco Flute', family: 'winds',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'legato',
  allowedTechniques: ['legato', 'tenuto', 'staccato', 'vibrato', 'accent', 'flutter-tongue'],
  brightnessMultiplier: 1.02, decayMultiplier: 0.94, micProximityPreset: 'close-mic',
}];

export const ENTRY_27: [string, InstrumentDialect] = ["palmas:flamenco", {
  id: 'palmas:flamenco', instrumentId: 'palmas', name: 'Flamenco Palmas', family: 'body-percussion',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'staccato',
  allowedTechniques: ['staccato', 'ghost', 'accent', 'open', 'palmas-sordas', 'palmas-claras', 'palmas-fuertes'],
  brightnessMultiplier: 1.04, decayMultiplier: 0.72, micProximityPreset: 'close-mic',
}];

export const ENTRY_28: [string, InstrumentDialect] = ["hand-percussion:flamenco", {
  id: 'hand-percussion:flamenco', instrumentId: 'hand-percussion', name: 'Flamenco Hand Percussion', family: 'body-percussion',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'ghost',
  allowedTechniques: ['ghost', 'accent', 'staccato', 'flam', 'roll', 'open'],
  brightnessMultiplier: 1.0, decayMultiplier: 0.78, micProximityPreset: 'close-mic',
}];

export const ENTRY_29: [string, InstrumentDialect] = ["zapateado:flamenco", {
  id: 'zapateado:flamenco', instrumentId: 'zapateado', name: 'Flamenco Zapateado', family: 'body-percussion',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'golpe',
  allowedTechniques: ['golpe', 'tacon', 'planta', 'punta', 'redoble', 'staccato', 'ghost', 'accent'],
  brightnessMultiplier: 1.03, decayMultiplier: 0.72, micProximityPreset: 'close-mic',
}];

export const ENTRY_30: [string, InstrumentDialect] = ["voice:flamenco", {
  id: 'voice:flamenco', instrumentId: 'voice', name: 'Flamenco Voice', family: 'voice',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'legato',
  allowedTechniques: ['legato', 'portato', 'vibrato', 'scoop', 'fall', 'accent', 'staccato'],
  brightnessMultiplier: 1.03, decayMultiplier: 0.96, micProximityPreset: 'close-mic',
}];

export const ENTRY_31: [string, InstrumentDialect] = ["castanets:flamenco", {
  id: 'castanets:flamenco', instrumentId: 'castanets', name: 'Flamenco Castanets', family: 'metal-and-wood',
  performanceMode: 'acoustic-ensemble', defaultTechnique: 'accent',
  allowedTechniques: ['accent', 'staccato', 'roll', 'flam', 'ghost', 'golpe', 'open'],
  brightnessMultiplier: 1.04, decayMultiplier: 0.70, micProximityPreset: 'close-mic',
}];
