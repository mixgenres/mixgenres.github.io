import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_3: [string, InstrumentDialect] = ["trumpet:jazz", {
    id: 'trumpet:jazz',
    instrumentId: 'trumpet',
    name: 'Trumpet',
    family: 'brass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'legato',
    allowedTechniques: ['legato', 'staccato', 'fall', 'doit'],
    bodyMultiplier: 0.85,
    decayMultiplier: 0.9,
  }];
