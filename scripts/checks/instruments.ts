// CHECK: every instrument definition resolves to a real render path.
// Replaces audit-instrument-paths.ts + audit-instrument-authenticity.ts (the latter was a 7-instrument subset
// of the same registry walk).
//
// Per instrument: registry module exists; physical-model source metadata exists; articulation names decode to the
// same render gesture; kit components resolve to themselves; percussion routes to the drum bus. Warns on shared
// kit MIDI notes. Additionally, high-value instruments (REQUIRE_BESPOKE) must have a dedicated module.
//
// Output: audit/instrument-checks.json    Exit 1 on any failure.   Run: npm run check:instruments
import { INSTRUMENTS_BY_ID } from '../../src/data/instruments';
import { getInstrumentModule } from '../../src/engine/playback/instrumentRegistry.ts';
import { resolveRenderGesture } from '../../src/engine/playback/renderGesture.ts';
import { codeForGesture } from '../../src/engine/band/gestures.ts';
import { determineBusCategory } from '../../src/engine/playback/elementaryEngine.ts';
import { instrumentEngineKeys } from '../../src/engine/lookup/instrumentKeys.ts';
import { resolveInstrumentKitComponent } from '../../src/engine/lookup/instrument-components';
import { writeReport } from '../lib/io.ts';
import type { InstrumentDef } from '../../src/data/instruments/schema/instrument-def';

/** Instruments whose identity depends on a dedicated physical voice path, not a generic family preset. */
const REQUIRE_BESPOKE = ['trumpet', 'muted-trumpet', 'bandoneon', 'congas', 'bongos', 'timbales', 'cajon'];

const rows = Object.values(INSTRUMENTS_BY_ID).map((def: InstrumentDef) => {
  let module: ReturnType<typeof getInstrumentModule> | undefined;
  let registryError: string | undefined;
  try { module = getInstrumentModule(def.id); } catch (error) { registryError = String(error); }
  const articulations: string[] = def.techniques?.articulations ?? [];
  const articulationMappings = articulations.map(a => ({ articulation: a, resolved: resolveRenderGesture(def.id, codeForGesture(a)) }));
  const kitMidi = new Map<number, string[]>();
  for (const c of def.kitComponents ?? []) kitMidi.set(c.midi, [...(kitMidi.get(c.midi) ?? []), c.id]);
  const duplicateKitMidi = [...kitMidi.entries()].filter(([, ids]) => ids.length > 1);
  const kitComponentMappings = (def.kitComponents ?? []).map(c => ({ id: c.id, resolvedId: resolveInstrumentKitComponent(def.id, c.midi, c.id)?.id ?? null }));
  const dedicated = Boolean(module) && (module!.id === def.id || module!.specializedInstrumentIds?.includes(def.id) === true || (def.id === 'muted-trumpet' && module!.id === 'trumpet'));
  return {
    instrumentId: def.id, family: def.family,
    engineKeys: instrumentEngineKeys(def.id),
    acousticRole: def.acousticProfile?.role ?? null,
    busCategory: determineBusCategory(def.acousticProfile?.role, def.id),
    moduleId: module?.id ?? null, registryError,
    moduleMapping: module ? (dedicated ? 'dedicated' : 'shared-family-module') : 'missing',
    articulationCount: articulations.length, articulationMappings,
    kitComponentCount: def.kitComponents?.length ?? 0, duplicateKitMidi, kitComponentMappings,
    hasPhysicalSource: Boolean(def.dspProfile || def.physicalModel || def.luthierPhysics),
  };
});

const failures = rows.flatMap(r => [
  ...rows.filter(r => r.engineKeys.length === 0).map(r => `${r.instrumentId}: no semantic engine key`),
  ...(r.moduleId ? [] : [`${r.instrumentId}: ${r.registryError ?? 'missing registry module'}`]),
  ...(r.hasPhysicalSource ? [] : [`${r.instrumentId}: no physical source metadata`]),
  ...(r.acousticRole === 'percussion' && r.busCategory !== 'drums' ? [`${r.instrumentId}: percussion role routed to ${r.busCategory}`] : []),
  ...r.kitComponentMappings.flatMap(m => (m.resolvedId === m.id ? [] : [`${r.instrumentId}: kit component ${m.id} resolves as ${m.resolvedId}`])),
  ...r.articulationMappings.flatMap(m => (m.resolved.name === m.articulation ? [] : [`${r.instrumentId}: ${m.articulation} decodes as ${m.resolved.name}`])),
]);
for (const id of REQUIRE_BESPOKE) {
  const r = rows.find(x => x.instrumentId === id);
  if (!r) failures.push(`${id}: required high-value instrument is not defined`);
  else if (r.moduleMapping !== 'dedicated') failures.push(`${id}: high-value instrument must have a dedicated render module (has ${r.moduleMapping})`);
}
const sharedMidiWarnings = rows.filter(r => r.duplicateKitMidi.length).map(r => ({ instrumentId: r.instrumentId, duplicateKitMidi: r.duplicateKitMidi }));

const status = failures.length ? 'FAIL' : 'PASS';
writeReport('instrument-checks.json', { schemaVersion: 3, status, instruments: rows.length, requireBespoke: REQUIRE_BESPOKE, failures, sharedMidiWarnings, rows });
console.log(JSON.stringify({ status, instruments: rows.length, failures: failures.length, sharedMidiWarnings: sharedMidiWarnings.length }, null, 2));
if (failures.length) process.exit(1);
