import { writeFileSync, mkdirSync } from 'node:fs';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { GENRE_NAMES } from '../src/data/genres';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';
import { BANDONEON_142_BUTTONS } from '../src/engine/band/fingering/bandoneon';
import { makeSheet } from '../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../src/engine/band/arrangeBand.ts';

const instrumentId = process.argv[2];
const genre = process.argv[3];
if (!instrumentId || !INSTRUMENTS_BY_ID[instrumentId]) throw new Error(`Unknown instrument: ${instrumentId}`);

const def = INSTRUMENTS_BY_ID[instrumentId];
const module = getInstrumentModule(instrumentId);
const sheet = makeSheet(genre || Object.keys(GENRE_NAMES).find(g => makeSheet(g).tracks.some(t => t.instrumentId === instrumentId)) || Object.keys(GENRE_NAMES)[0]);
const performance = compileWholeSong(sheet);
const notes = performance.notes.filter(n => sheet.tracks.some(t => t.id === n.trackId && t.instrumentId === instrumentId));
const gestures = new Map<number, string>();
for (const n of notes) {
  if (n.gestureCode !== undefined) gestures.set(n.gestureCode, String(n.gestureCode));
}

const report = {
  schemaVersion: 2,
  generatedAt: new Date().toISOString(),
  preRender: true,
  instrument: {
    id: def.id,
    name: def.name,
    family: def.family,
    voicing: def.voicing,
    authoredEvidence: 'unspecified',
    physicalModel: def.physicalModel,
    dspProfile: def.dspProfile,
    luthierPhysics: def.luthierPhysics,
    techniques: def.techniques,
    articulationModels: def.articulationModels,
    performanceArticulations: def.performanceArticulations,
    biomechanicsAndKinematics: def.biomechanicsAndKinematics,
    transitionMechanics: def.transitionMechanics,
    tuningAndMechanics: def.tuningAndMechanics,
    kitComponents: def.kitComponents,
  },
  runtimePath: {
    registryModuleId: module.id,
    specializedInstrumentIds: module.specializedInstrumentIds ?? [],
    ownedDspSections: module.ownedDspSections ?? [],
  },
  genre,
  compiled: {
    duration: performance.duration,
    noteCount: notes.length,
    midiHistogram: Object.fromEntries([...notes.reduce((m, n) => m.set(n.midi, (m.get(n.midi) ?? 0) + 1), new Map<number, number>())].sort((a,b) => a[0]-b[0])),
    gestureCodes: [...gestures.keys()].sort((a,b) => a-b),
    bandoneonDirections: instrumentId === 'bandoneon' ? {
      open: notes.filter(n => n.bellowsDirectionCode === 1).length,
      close: notes.filter(n => n.bellowsDirectionCode === 2).length,
      mappedButtons: notes.filter(n => n.bandoneonButtonId).length,
      totalButtonsInAuthoritativeMap: BANDONEON_142_BUTTONS.length,
    } : undefined,
  },
  genresInCatalog: Object.keys(GENRE_NAMES).length,
};

mkdirSync('audit/pre-render-schemas', { recursive: true });
const path = `audit/pre-render-schemas/${instrumentId}${genre ? `-${genre}` : ''}.json`;
writeFileSync(path, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ path, instrumentId, genre: sheet.worldId, notes: notes.length, module: module.id }, null, 2));
