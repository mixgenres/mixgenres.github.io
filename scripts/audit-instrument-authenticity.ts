import { writeFileSync, mkdirSync } from 'node:fs';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';

const required = ['trumpet', 'muted-trumpet', 'bandoneon', 'congas', 'bongos', 'timbales', 'cajon'];
const rows = required.map(instrumentId => {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  const module = getInstrumentModule(instrumentId);
  return {
    instrumentId,
    moduleId: module.id,
    family: def?.family,
    hasAuthoredPhysicalModelData: Boolean(def?.physicalModel || def?.dspProfile || def?.luthierPhysics),
    hasDspProfile: Boolean(def?.dspProfile),
    hasPhysicalModel: Boolean(def?.physicalModel),
    bespokeModule: module.id === instrumentId || module.specializedInstrumentIds?.includes(instrumentId) === true || (instrumentId === 'muted-trumpet' && module.id === 'trumpet'),
  };
});

// Several instruments have dedicated physical voice paths instead of a
// generic preset profile. Require authored model evidence and an instrument
// specific render path; a `dspProfile` field alone is not the definition of
// physical specialization.
const failures = rows.filter(r => !r.bespokeModule || !r.hasAuthoredPhysicalModelData);
mkdirSync('audit', { recursive: true });
writeFileSync('audit/instrument-authenticity.json', JSON.stringify({
  generatedAt: new Date().toISOString(),
  scope: 'high-value instrument identity probes; not a claim of measured physical accuracy',
  rows,
  failures,
  status: failures.length ? 'FAIL' : 'PASS',
}, null, 2));
console.log(JSON.stringify({ status: failures.length ? 'FAIL' : 'PASS', rows: rows.length, failures: failures.length }, null, 2));
if (failures.length) process.exit(1);
