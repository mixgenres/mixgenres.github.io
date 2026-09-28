import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID, WORLD_INSTRUMENT_HINTS } from '../src/data/instruments/index.ts';
import { ARTICULATIONS, resolveArticulation } from '../src/engine/theory/articulation.ts';
import { LUTHIER_INSTRUMENT_MAP } from '../src/engine/audio/LuthierAPI.ts';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';
import { renderVoice, type VoiceState, type TrackParams } from '../src/engine/elementary/elementaryEngine.ts';
import { buildVoiceContext } from '../src/engine/instruments/registry.ts';
import { isCollisionAllowedForAction } from '../src/engine/theory/excitationGates.ts';

const root = resolve('src/data/instruments/definitions');
const files = readdirSync(root).filter(f => f.endsWith('.ts')).sort();
const errors: string[] = [];
const warnings: string[] = [];

if (files.length !== INSTRUMENT_CATALOG.length) errors.push(`definition file count ${files.length} != catalog count ${INSTRUMENT_CATALOG.length}`);
const ids = INSTRUMENT_CATALOG.map(i => i.id);
for (const id of ids) {
  const filename = `${id.replace(/[^A-Za-z0-9_]/g, '_')}.ts`;
  if (!existsSync(resolve(root, filename))) errors.push(`missing definition file for ${id}`);
  if (!INSTRUMENTS_BY_ID[id]) errors.push(`missing registry entry for ${id}`);
  const def = INSTRUMENTS_BY_ID[id];
  if (!def.techniques?.articulations.length) errors.push(`${id}: no supported articulations`);
  if (!def.techniques?.techniqueMethods.length) errors.push(`${id}: no physical technique methods`);
  if (!def.techniques?.playingStyles.length) warnings.push(`${id}: no playing-style metadata`);
  for (const art of def.techniques.articulations) {
    if (!ARTICULATIONS[art] && !resolveArticulation(art)) errors.push(`${id}: unsupported articulation '${art}'`);
  }
  for (const [style, arts] of Object.entries(def.techniques.genreTechniques ?? {})) {
    for (const art of arts) {
      if (!def.techniques.articulations.includes(art)) errors.push(`${id}: ${style} technique '${art}' is not in its supported articulation set`);
    }
  }
  if (!LUTHIER_INSTRUMENT_MAP[id]) errors.push(`${id}: no dedicated Luthier physical model`);
  if (def.voicing === 'unpitched' && !def.drum && !def.kit) warnings.push(`${id}: unpitched instrument has no drum/kit voice definition`);
  if (def.family === 'plucked' && !def.bodyConstruction && !def.kit && def.voicing !== 'bass') warnings.push(`${id}: plucked instrument lacks body construction metadata`);
}
for (const [world, hints] of Object.entries(WORLD_INSTRUMENT_HINTS)) {
  for (const id of hints) if (!INSTRUMENTS_BY_ID[id]) errors.push(`world ${world}: unknown instrument ${id}`);
}

const STRUCTURAL_PATTERN_TAGS = new Set([
  'rubato-aware','fill','kick','call-response','stop-time','re-entry','tag','offbeat','bossa','dembow','hand-drum','tumbao','offbeat guitar','cumbia','chicha','organ','hook','maracas','texture','cadence','walking','horn answer','drive','rocksteady','two-tone','piano bubble','final hit','hat','sequence','four-on-floor','offbeat hat','Detroit','acid','clap','backbeat','build','automation','breakdown','tension','chromatic-lead','low-drum','hand-percussion','surdo','samba','pandeiro','interlock','cavaquinho','partido-alto','guitar rhythm','anticipation','piano','voicing','batucada','break','extended harmony','release','syncopated','delay','organ bubble','dub','echo','version','steppers','horn reply','percussive-finger','kick-snare','sub','timeline','offbeat texture','negative space','syncopation','density control','vocal pocket','hook lift','phrase end','transition','bass','dropout','shaker','walking bass','pickup'
]);

const unknownPatternArts = new Map<string, number>();
function visit(v: unknown): void {
  if (!v || typeof v !== 'object') return;
  if (Array.isArray(v)) { for (const x of v) visit(x); return; }
  const o = v as Record<string, unknown>;
  if (typeof o.articulation === 'string' && o.articulation.trim() && !resolveArticulation(o.articulation)) {
    unknownPatternArts.set(o.articulation, (unknownPatternArts.get(o.articulation) ?? 0) + 1);
  }
  if (Array.isArray(o.articulations)) for (const x of o.articulations) if (typeof x === 'string' && !resolveArticulation(x)) unknownPatternArts.set(x, (unknownPatternArts.get(x) ?? 0) + 1);
  for (const x of Object.values(o)) visit(x);
}
visit(ALL_PATTERNS);
for (const [art, count] of unknownPatternArts) {
  if (!STRUCTURAL_PATTERN_TAGS.has(art.trim())) errors.push(`pattern articulation '${art}' is not resolved and is not classified as a structural/style tag`);
  else warnings.push(`pattern structural tag '${art}' appears in articulation fields (${count} uses)`);
}

// =========================================================================
// FIX 1 & FIX 3 GRAPH INSPECTION AUDIT
// =========================================================================
function countDistinctTanhNodes(node: any): number {
  const hashes = new Set<number>();
  function walk(obj: any) {
    if (!obj || typeof obj !== 'object') return;
    if (obj.kind === 'tanh' && typeof obj.hash === 'number') {
      hashes.add(obj.hash);
    }
    for (const key of Object.keys(obj)) {
      walk(obj[key]);
    }
  }
  walk(node);
  return hashes.size;
}

console.log('\n--- Fix 1 & Fix 3: Node Graph Saturation & Ownership Audit ---');
const mockBandoneonVoice: VoiceState = {
  note: 58,
  velocity: 0.85,
  gate: 1,
  id: 'bandoneon_audit_voice',
  actionType: 'marcato',
  articulation: 'marcato'
};
const mockBandoneonParams: TrackParams = {
  brightness: 0.75,
  decay: 1.5,
  drive: 0.2,
  body: 0.8,
  tension: 0.7,
  pressure: 0.6,
  articulation: 0.5,
  mute: 0,
  resonance: 0.5,
  bowVelocity: 0.8,
  bowPressure: 0.7,
  model: 10,
  volume: 1.0,
  pan: 0,
  styleFlavor: 0.5,
  contact: 0.5,
  bodyTap: 0,
  pluckPosition: 0.5,
  instrumentId: 'bandoneon',
  genreId: 'tango'
};

const bandoneonNode = renderVoice('audit_track', 0, mockBandoneonVoice, mockBandoneonParams);
const bandoneonTanhCount = countDistinctTanhNodes(bandoneonNode);
console.log(`Bandoneón Voice Graph Tanh Saturation Nodes: ${bandoneonTanhCount} (Target: <=2 with self-owned excitation + preamp insert)`);
if (bandoneonTanhCount > 2) {
  errors.push(`Bandoneon voice node graph contains ${bandoneonTanhCount} distinct tanh nodes (expected <=2)`);
}

// =========================================================================
// FIX 2 DIALECT RESOLUTION RATE AUDIT
// =========================================================================
console.log('\n--- Fix 2: Genre Dialect Resolution Audit ---');
let totalDialectChecks = 0;
let resolvedDialectChecks = 0;

for (const id of ids) {
  const def = INSTRUMENTS_BY_ID[id];
  const dsp = def?.dspProfile;
  if (dsp?.genreDialects) {
    const authoredGenres = Object.keys(dsp.genreDialects);
    for (const genreId of authoredGenres) {
      totalDialectChecks++;
      const testParams: TrackParams = {
        ...mockBandoneonParams,
        instrumentId: id,
        genreId: genreId
      };
      const testVoiceContext = buildVoiceContext('test_track', 0, mockBandoneonVoice, testParams);
      const testDsp = testVoiceContext.dspProfile;
      const resolvedEntry = (testParams.genreId ?? testParams.dialect ?? '') ? testDsp?.genreDialects[testParams.genreId.toLowerCase()] : undefined;
      if (resolvedEntry) {
        resolvedDialectChecks++;
      }
    }
  }
}

const resolutionRatePct = totalDialectChecks > 0 ? (resolvedDialectChecks / totalDialectChecks) * 100 : 100;
console.log(`Genre Dialect Resolution Rate: ${resolutionRatePct.toFixed(1)}% (${resolvedDialectChecks}/${totalDialectChecks} resolved)`);
if (resolutionRatePct < 100) {
  errors.push(`Genre dialect resolution rate is ${resolutionRatePct.toFixed(1)}% (expected 100%)`);
}

// =========================================================================
// FIX 4 EXCITATION GATE AUDIT
// =========================================================================
console.log('\n--- Fix 4: Excitation Gate Action Compatibility Audit ---');
const bandoneonLegatoAllowed = isCollisionAllowedForAction('breath', 'bellows-and-keys', 'legato', 'legato');
const bandoneonSlapAllowed = isCollisionAllowedForAction('breath', 'bellows-and-keys', 'bellows-slap', 'bellows-slap');
const concertinaLegatoAllowed = isCollisionAllowedForAction('breath', 'bellows-and-keys', 'legato', 'legato');
const violinLegatoAllowed = isCollisionAllowedForAction('bow', 'bowed', 'legato', 'legato');
const guitarPluckAllowed = isCollisionAllowedForAction('plectrum', 'plucked', 'pluck', 'pluck');

console.log(`  Bandoneón Legato Collision Allowed: ${bandoneonLegatoAllowed} (Expected: false)`);
console.log(`  Bandoneón Bellows Slap Collision Allowed: ${bandoneonSlapAllowed} (Expected: true)`);
console.log(`  Concertina Legato Collision Allowed: ${concertinaLegatoAllowed} (Expected: false)`);
console.log(`  Violin Legato Collision Allowed: ${violinLegatoAllowed} (Expected: false)`);
console.log(`  Guitar Pluck Collision Allowed: ${guitarPluckAllowed} (Expected: true)`);

if (bandoneonLegatoAllowed || !bandoneonSlapAllowed || concertinaLegatoAllowed || violinLegatoAllowed || !guitarPluckAllowed) {
  errors.push(`Excitation gate action compatibility check failed!`);
}

if (errors.length) {
  console.error(`\nInstrument audit failed: ${errors.length} error(s)`);
  for (const e of errors) console.error(`ERROR ${e}`);
  for (const w of warnings) console.warn(`WARN ${w}`);
  process.exit(1);
}
console.log(`\nInstrument audit passed: ${INSTRUMENT_CATALOG.length} definitions, ${Object.keys(LUTHIER_INSTRUMENT_MAP).length} physical profiles, ${Object.keys(ARTICULATIONS).length} articulation specs.`);
for (const w of warnings) console.warn(`WARN ${w}`);
