import { mkdirSync, writeFileSync } from 'node:fs';
import { GENRE_WORLDS, ALL_PATTERNS } from '../src/data/genres/index.ts';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID } from '../src/data/instruments/index.ts';
import { ALL_STYLES, ALL_STYLES_BY_ID } from '../src/engine/style/registry.ts';
import { STYLE_FORM_TEMPLATES } from '../src/data/styles/styleFormTemplates.ts';
import { INSTRUMENT_PATTERN_KIND_RULES } from '../src/data/instruments/patternKinds.ts';
import { starterSongs } from '../src/data/songs/starters.ts';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry.ts';
import { validateSongStyle } from '../src/data/styles/validation.ts';
import { validateInstrumentDef } from '../src/data/instruments/validation.ts';

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
    if (!patternIds.has(pattern.id)) errors.push(`${world.id}: pattern ${pattern.id} absent from global pattern catalog`);
    if (pattern.worldId !== world.id) errors.push(`pattern ${pattern.id}: worldId ${pattern.worldId} does not match containing world ${world.id}`);
    for (const styleId of pattern.styleIds ?? []) if (!styleIds.has(styleId)) errors.push(`pattern ${pattern.id}: missing style ${styleId}`);
    for (const kind of [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])]) {
      if (!instrumentIds.has(kind) && !patternKinds.has(kind)) errors.push(`pattern ${pattern.id}: unknown instrument/pattern kind ${kind}`);
    }
    const signature = JSON.stringify(pattern);
    const previous = patternDefinitions.get(pattern.id);
    if (previous && previous !== signature) errors.push(`pattern id ${pattern.id} has conflicting definitions`);
    else patternDefinitions.set(pattern.id, signature);
    for (const variant of pattern.variants ?? []) {
      if (variant.parentPatternId !== pattern.id) errors.push(`variant ${variant.id}: parent ${variant.parentPatternId} does not match ${pattern.id}`);
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
