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
  ["upright-bass:salsa", salsa.ENTRY_4[1]],
  ["bass:salsa", salsa.ENTRY_4[1]],
  ["baby-bass:salsa", salsa.ENTRY_4[1]],
  tango.ENTRY_5,
  ["upright-bass:tango", tango.ENTRY_5[1]],
  ["bass:tango", tango.ENTRY_5[1]],
  flamenco.ENTRY_6,
  ["spanish-guitar:flamenco", flamenco.ENTRY_6[1]],
  ["acoustic-guitar:flamenco", flamenco.ENTRY_6[1]],
  tango.ENTRY_7,
  ["spanish-guitar:tango", tango.ENTRY_7[1]],
  ["acoustic-guitar:tango", tango.ENTRY_7[1]],
  blues.ENTRY_8,
  ["electric-guitar:blues", blues.ENTRY_8[1]],
  flamenco.ENTRY_9,
  flamenco.ENTRY_26,
  flamenco.ENTRY_27,
  flamenco.ENTRY_28,
  flamenco.ENTRY_29,
  flamenco.ENTRY_30,
  flamenco.ENTRY_31,
  tango.ENTRY_10,
  tango.ENTRY_21,
  tango.ENTRY_22,
  tango.ENTRY_23,
  tango.ENTRY_24,
  tango.ENTRY_25,
  misc.ENTRY_11,
  misc.ENTRY_12,
  misc.ENTRY_13,
  misc.ENTRY_14,
  salsa.ENTRY_15,
  electronic.ENTRY_16,
  reggae.ENTRY_17,
  ["electric-bass:reggae", reggae.ENTRY_17[1]],
  ["upright-bass:reggae", reggae.ENTRY_17[1]],
  afrobeats.ENTRY_18,
  bachata.ENTRY_19,
  ["acoustic-guitar:bachata", bachata.ENTRY_19[1]],
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
