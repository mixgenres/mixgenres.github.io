// CHECK: id integrity across the data catalog - patterns (meter/cycle/grid/profile ranges, unique ids, present in the
// global catalog), styles (world match, registered, form template, known instruments) and instrument references.
// Writes audit/data-id-audit.json.   Run: npm run check:ids   (part of `npm run check`)   Exit 1 on errors.
import { mkdirSync, writeFileSync } from 'node:fs';
import { GENRE_WORLDS, ALL_PATTERNS } from '../../src/data/genres/index.ts';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID } from '../../src/data/instruments/index.ts';
import { ALL_STYLES, ALL_STYLES_BY_ID } from '../../src/engine/style/registry.ts';
import { STYLE_FORM_TEMPLATES } from '../../src/data/styles/styleFormTemplates.ts';
import { INSTRUMENT_PATTERN_KIND_RULES } from '../../src/data/instruments/patternKinds.ts';
import { starterSongs } from '../../src/data/songs/starters.ts';
import { getInstrumentModule } from '../../src/engine/playback/instrumentRegistry.ts';
import { validateSongStyle } from '../../src/data/styles/validation.ts';
import { validateInstrumentDef } from '../../src/data/instruments/validation.ts';

const errors: string[] = [];
const warnings: string[] = [];
const genreIds = new Set(GENRE_WORLDS.map(world => world.id));
const styleIds = new Set(ALL_STYLES.map(style => style.id));
const patternIds = new Set(ALL_PATTERNS.map(pattern => pattern.id));
const instrumentIds = new Set(INSTRUMENT_CATALOG.map(instrument => instrument.id));
const instrumentRoles = new Map(INSTRUMENT_CATALOG.map(instrument => [instrument.id, instrument.acousticProfile?.role]));
const patternKinds = new Set(INSTRUMENT_PATTERN_KIND_RULES.flatMap(rule => [...rule.aliases, ...(rule.ids ?? [])]));
const patternDefinitions = new Map<string, string>();
const variantDefinitions = new Map<string, string>();
const count = { genres: GENRE_WORLDS.length, styles: ALL_STYLES.length, patterns: ALL_PATTERNS.length, instruments: INSTRUMENT_CATALOG.length, starters: starterSongs.length, filteredSyntheticPatterns: 0 };

function validateRhythmicGrid(label: string, pattern: { meter: string; cycleLength: number; subdivisions: number; onsetGrid: number[]; durationGrid?: number[]; accentProfile?: number[]; velocityProfile?: number[]; microtimingOffset?: number[] }) {
  const meter = /^(\d+)\/(\d+)$/.exec(pattern.meter);
  if (!meter || Number(meter[1]) < 1 || Number(meter[1]) > 32 || ![1, 2, 4, 8, 16, 32].includes(Number(meter[2]))) errors.push(`${label}: invalid meter ${pattern.meter}`);
  if (!Number.isInteger(pattern.cycleLength) || pattern.cycleLength < 1 || pattern.cycleLength > 32) errors.push(`${label}: cycleLength must be an integer from 1 to 32`);
  if (!Number.isInteger(pattern.subdivisions) || pattern.subdivisions < 1 || pattern.subdivisions > 256) errors.push(`${label}: subdivisions must be an integer from 1 to 256`);
  // Fractional steps encode intentional swing/tuplets, and some legacy patterns
  // use extended grids across multiple bars. Reject only values the engine
  // cannot meaningfully schedule.
  if (!Array.isArray(pattern.onsetGrid) || pattern.onsetGrid.some(step => !Number.isFinite(step) || step < 0 || step > 4096)) errors.push(`${label}: onsetGrid contains a non-finite, negative, or excessive step`);
  for (const [name, values] of [['durationGrid', pattern.durationGrid], ['accentProfile', pattern.accentProfile], ['velocityProfile', pattern.velocityProfile], ['microtimingOffset', pattern.microtimingOffset]] as const) {
    if (values && values.length !== pattern.onsetGrid.length) warnings.push(`${label}: ${name} length ${values.length} differs from onset count ${pattern.onsetGrid.length}; engine fallback fills missing values and ignores extras`);
    if (values?.some(value => !Number.isFinite(value))) errors.push(`${label}: ${name} contains a non-finite value`);
  }
  for (const [name, values] of [['accentProfile', pattern.accentProfile], ['velocityProfile', pattern.velocityProfile]] as const) {
    if (values?.some(value => value < 0 || value > 1)) errors.push(`${label}: ${name} values must be between 0 and 1`);
  }
  if (pattern.durationGrid?.some(value => value <= 0)) errors.push(`${label}: durationGrid values must be positive`);
}

for (const world of GENRE_WORLDS) {
  for (const style of world.styleDefinitions ?? []) {
    if (style.worldId !== world.id) errors.push(`style ${style.id}: worldId ${style.worldId} does not match ${world.id}`);
    if (!ALL_STYLES_BY_ID[style.id]) errors.push(`style ${style.id}: absent from runtime registry`);
    if (!STYLE_FORM_TEMPLATES[style.id]?.length) errors.push(`style ${style.id}: missing form template`);
    for (const instrumentId of style.characteristicInstruments ?? []) if (!instrumentIds.has(instrumentId)) errors.push(`style ${style.id}: missing instrument ${instrumentId}`);
  }
  const localPatternIds = new Set<string>();
  for (const pattern of world.patterns ?? []) {
    if (localPatternIds.has(pattern.id)) errors.push(`${world.id}: duplicate pattern id ${pattern.id} in world`);
    localPatternIds.add(pattern.id);
    // These generated connective placeholders are intentionally removed when
    // building the playable pattern catalog; they are not runtime references.
    const synthetic = /-(phrase|call|anchor|comp|intro|verse)-\d+$/.test(pattern.id.toLowerCase())
      || /--phrasing$/.test(pattern.id.toLowerCase())
      || /\b(comping comping|roster-)$/.test(pattern.name.toLowerCase().trim());
    if (synthetic) { count.filteredSyntheticPatterns++; continue; }
    validateRhythmicGrid(`pattern ${pattern.id}`, pattern);
    if (!patternIds.has(pattern.id)) errors.push(`${world.id}: pattern ${pattern.id} absent from global pattern catalog`);
    if (pattern.worldId !== world.id) errors.push(`pattern ${pattern.id}: worldId ${pattern.worldId} does not match containing world ${world.id}`);
    for (const styleId of pattern.styleIds ?? []) if (!styleIds.has(styleId)) errors.push(`pattern ${pattern.id}: missing style ${styleId}`);
    if (new Set(pattern.styleIds ?? []).size !== (pattern.styleIds ?? []).length) errors.push(`pattern ${pattern.id}: duplicate style references`);
    if (new Set(pattern.onsetGrid ?? []).size !== (pattern.onsetGrid ?? []).length) errors.push(`pattern ${pattern.id}: duplicate onset positions are discarded by bar mapping`);
    if (pattern.hitGrid && pattern.hitGrid.length !== pattern.onsetGrid.length) warnings.push(`pattern ${pattern.id}: hitGrid length ${pattern.hitGrid.length} differs from onset count ${pattern.onsetGrid.length}; engine ignores the hitGrid`);
    for (const kind of [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])]) {
      if (!instrumentIds.has(kind) && !patternKinds.has(kind)) errors.push(`pattern ${pattern.id}: unknown instrument/pattern kind ${kind}`);
    }
    const signature = JSON.stringify(pattern);
    const previous = patternDefinitions.get(pattern.id);
    if (previous && previous !== signature) errors.push(`pattern id ${pattern.id} has conflicting definitions`);
    else patternDefinitions.set(pattern.id, signature);
    for (const variant of pattern.variants ?? []) {
      if (!variant.id?.trim()) errors.push(`pattern ${pattern.id}: variant id must be non-empty`);
      if (variant.parentPatternId !== pattern.id) errors.push(`variant ${variant.id}: parent ${variant.parentPatternId} does not match ${pattern.id}`);
      if (!Number.isFinite(variant.probability) || variant.probability < 0 || variant.probability > 1) errors.push(`variant ${variant.id}: probability must be between 0 and 1`);
      if (new Set(variant.onsetGrid ?? []).size !== (variant.onsetGrid ?? []).length) warnings.push(`variant ${variant.id}: duplicate onset positions may create simultaneous duplicate attacks`);
      validateRhythmicGrid(`variant ${variant.id}`, { ...pattern, ...variant });
      if (variant.hitGrid && variant.hitGrid.length !== variant.onsetGrid.length) errors.push(`variant ${variant.id}: hitGrid length does not match onset count`);
      const variantSignature = JSON.stringify(variant);
      const previousVariant = variantDefinitions.get(variant.id);
      if (previousVariant && previousVariant !== variantSignature) errors.push(`variant id ${variant.id} has conflicting definitions`);
      else variantDefinitions.set(variant.id, variantSignature);
    }
  }
}

for (const style of ALL_STYLES) {
  errors.push(...validateSongStyle(style, { genreIds, styleIds, instrumentRoles }));
  if (!genreIds.has(style.primaryGenre)) errors.push(`runtime style ${style.id}: missing genre ${style.primaryGenre}`);
  for (const list of [style.patterns?.require, style.patterns?.preferred, style.patterns?.allowed, style.patterns?.avoid, style.patterns?.inferred]) {
    for (const patternId of list ?? []) if (!patternIds.has(patternId)) errors.push(`runtime style ${style.id}: missing pattern ${patternId}`);
  }
}
for (const starter of starterSongs) {
  if (!genreIds.has(starter.genreId)) errors.push(`starter ${starter.id}: missing genre ${starter.genreId}`);
  if (!styleIds.has(starter.styleId)) errors.push(`starter ${starter.id}: missing style ${starter.styleId}`);
  for (const instrumentId of starter.instruments) if (!instrumentIds.has(instrumentId)) errors.push(`starter ${starter.id}: missing instrument ${instrumentId}`);
  if (starter.instruments.length !== 8) errors.push(`starter ${starter.id}: expected 8 instruments, found ${starter.instruments.length}`);
  if (new Set(starter.instruments).size !== starter.instruments.length) errors.push(`starter ${starter.id}: duplicate instrument ids`);
}
for (const instrumentId of instrumentIds) {
  if (!INSTRUMENTS_BY_ID[instrumentId]) errors.push(`instrument catalog id ${instrumentId} absent from lookup`);
  try { getInstrumentModule(instrumentId); } catch { errors.push(`instrument ${instrumentId}: missing playback module`); }
}
for (const instrument of INSTRUMENT_CATALOG) errors.push(...validateInstrumentDef(instrument));
for (const id of Object.keys(STYLE_FORM_TEMPLATES)) if (!styleIds.has(id)) warnings.push(`orphan form template id: ${id}`);

const report = { status: errors.length ? 'FAIL' : 'PASS', count, errors, warnings };
mkdirSync('audit', { recursive: true });
writeFileSync('audit/data-id-audit.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, count, errors: errors.length, warnings: warnings.length }, null, 2));
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
}
