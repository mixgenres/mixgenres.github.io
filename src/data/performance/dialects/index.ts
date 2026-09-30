import type { InstrumentDialect } from '../../styles/contracts';
import * as salsa from './salsa';
import * as funk from './funk';
import * as jazz from './jazz';
import * as tango from './tango';
import * as flamenco from './flamenco';
import * as blues from './blues';
import * as misc from './misc';
import * as electronic from './electronic';
import * as reggae from './reggae';
import * as afrobeats from './afrobeats';
import * as bachata from './bachata';
import * as kizomba from './kizomba';

export const DIALECTS: Record<string, InstrumentDialect> = Object.fromEntries([
  salsa.ENTRY_0,
  funk.ENTRY_1,
  salsa.ENTRY_2,
  jazz.ENTRY_3,
  salsa.ENTRY_4,
  tango.ENTRY_5,
  flamenco.ENTRY_6,
  tango.ENTRY_7,
  blues.ENTRY_8,
  flamenco.ENTRY_9,
  tango.ENTRY_10,
  misc.ENTRY_11,
  misc.ENTRY_12,
  misc.ENTRY_13,
  misc.ENTRY_14,
  salsa.ENTRY_15,
  electronic.ENTRY_16,
  reggae.ENTRY_17,
  afrobeats.ENTRY_18,
  bachata.ENTRY_19,
  kizomba.ENTRY_20
]);

export const DEFAULT_DIALECT_SHAPE: InstrumentDialect = {
  id: 'generic:dialect',
  instrumentId: '',
  name: 'Acoustic Dialect',
  family: 'plucked',
  performanceMode: 'acoustic-ensemble',
  defaultTechnique: 'default',
  allowedTechniques: ['default'],
  brightnessMultiplier: 1.0,
  decayMultiplier: 1.0,
};
