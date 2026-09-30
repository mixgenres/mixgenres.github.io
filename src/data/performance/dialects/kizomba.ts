import type { InstrumentDialect } from '../../styles/contracts';

export const ENTRY_20: [string, InstrumentDialect] = ["drums:kizomba", {
    id: 'drums:kizomba',
    instrumentId: 'drums',
    name: 'Zouk/Kizomba Drum Kit',
    family: 'kit',
    performanceMode: 'programmed-electronic',
    defaultTechnique: 'strike',
    allowedTechniques: ['strike', 'accent', 'ghost'],
    bodyMultiplier: 1.5,
    brightnessMultiplier: 0.75,
    decayMultiplier: 1.1,
  }];
