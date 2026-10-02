import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_1: [string, InstrumentDialect] = ["congas:funk", {
    id: 'congas:funk',
    instrumentId: 'congas',
    name: 'Congas (Funk/Dry)',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'slap', 'muff'],
    bodyMultiplier: 0.35, // Tight, dry studio sound
    decayMultiplier: 0.6,
  }];
