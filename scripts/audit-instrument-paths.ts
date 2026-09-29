import { writeFileSync, mkdirSync } from 'node:fs';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';
import { resolveRenderGesture } from '../src/engine/playback/renderGesture.ts';
import { codeForGesture } from '../src/engine/band/gestures.ts';
import { determineBusCategory } from '../src/engine/playback/elementaryEngine.ts';
import { resolveInstrumentKitComponent } from '../src/engine/lookup/instrument-components';

const rows = Object.values(INSTRUMENTS_BY_ID).map(def => {
  let module: ReturnType<typeof getInstrumentModule> | undefined;
  let registryError: string | undefined;
  try { module = getInstrumentModule(def.id); } catch (error) { registryError = String(error); }
  const articulations = def.techniques?.articulations ?? [];
  const mapped = articulations.map(a => ({
    articulation: a,
    resolved: resolveRenderGesture(def.id, codeForGesture(a)),
  }));
  const kitMidi = new Map<number, string[]>();
  for (const c of def.kitComponents ?? []) kitMidi.set(c.midi, [...(kitMidi.get(c.midi) ?? []), c.id]);
  const duplicateKitMidi = [...kitMidi.entries()].filter(([, ids]) => ids.length > 1);
  const kitComponentMappings = (def.kitComponents ?? []).map(component => ({
    id: component.id,
    resolvedId: resolveInstrumentKitComponent(def.id, component.midi, component.id)?.id ?? null,
  }));
  return {
    instrumentId: def.id,
    family: def.family,
    acousticRole: def.acousticProfile?.role ?? null,
    busCategory: determineBusCategory(def.acousticProfile?.role, def.id),
    moduleId: module?.id ?? null,
    registryError,
    moduleMapping: module ? (module.id === def.id || module.specializedInstrumentIds?.includes(def.id) === true ? 'dedicated' : 'shared-family-module') : 'missing',
    moduleAcceptsInstrument: Boolean(module),
    articulationCount: articulations.length,
    articulationMappings: mapped,
    kitComponentCount: def.kitComponents?.length ?? 0,
    duplicateKitMidi,
    kitComponentMappings,
    hasPhysicalSource: Boolean(def.dspProfile || def.physicalModel || def.luthierPhysics),
  };
});

const failures = rows.flatMap(r => [
  ...(r.moduleAcceptsInstrument ? [] : [`${r.instrumentId}: ${r.registryError ?? 'missing registry module'}`]),
  ...(r.hasPhysicalSource ? [] : [`${r.instrumentId}: no physical source metadata`]),
  ...(r.acousticRole === 'percussion' && r.busCategory !== 'drums' ? [`${r.instrumentId}: percussion role routed to ${r.busCategory}`] : []),
  ...r.kitComponentMappings.flatMap(mapping => mapping.resolvedId === mapping.id ? [] : [`${r.instrumentId}: kit component ${mapping.id} resolves as ${mapping.resolvedId}`]),
  ...r.articulationMappings.flatMap(mapping => mapping.resolved.name === mapping.articulation ? [] : [`${r.instrumentId}: ${mapping.articulation} decodes as ${mapping.resolved.name}`]),
]);
const sharedMidiWarnings = rows.filter(r => r.duplicateKitMidi.length).map(r => ({ instrumentId: r.instrumentId, duplicateKitMidi: r.duplicateKitMidi }));
mkdirSync('audit', { recursive: true });
writeFileSync('audit/instrument-path-audit.json', JSON.stringify({
  schemaVersion: 2,
  status: failures.length ? 'FAIL' : 'PASS',
  instruments: rows.length,
  failures,
  sharedMidiWarnings,
  rows,
}, null, 2));
console.log(JSON.stringify({ status: failures.length ? 'FAIL' : 'PASS', instruments: rows.length, failures: failures.length, sharedMidiWarnings: sharedMidiWarnings.length }, null, 2));
if (failures.length) process.exit(1);
