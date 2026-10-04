import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { INSTRUMENT_CATALOG, WORLD_INSTRUMENT_HINTS } from '../src/data/instruments';
import { ENRICHED_INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { INSTRUMENT_PATTERN_KIND_RULES } from '../src/data/instruments/patternKinds';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID, ALL_PATTERNS, PATTERNS_BY_ID } from '../src/data/genres';
import { GENRE_CONTRACTS } from '../src/data/styles/contracts';
import { songCatalog } from '../src/data/songs/catalog';
import { RECORDING_ARRANGEMENTS } from '../src/data/songs/recordingArrangements';
import { ALL_STYLES, ALL_STYLES_BY_ID, resolveStyle } from '../src/engine/style';
import { StyleRuntime } from '../src/engine/style/runtime';
import { getInstrumentModule, resolveVoiceParameters } from '../src/engine/playback/instrumentRegistry';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { determineBusCategory } from '../src/engine/playback/elementaryEngine';
import { resolveRenderGesture } from '../src/engine/playback/renderGesture';
import { resolveInstrumentKitComponent } from '../src/engine/lookup/instrument-components';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { getGenreTheory } from '../src/engine/lookup/theory';
import { codeForGesture } from '../src/engine/band/gestures';
import { resolveMasterSettings } from '../src/engine/studio/masterSettings';
import { reportMetadata, writeReport, summarizeFindings, printFindings, type Finding } from './lib/auditReport';

// Inspect data and resolved contracts, without generating songs or building DSP graphs.
const findings: Finding[] = [];
const seen = new WeakSet<object>();
let properties = 0, dataFiles = 0, dialects = 0;
const check = (ok: unknown, scope: string, message: string) => {
  if (!ok) findings.push({ severity: 'error', code: 'catalog-contract', scope, message });
};
const vocabulary = new Set([...Object.keys(INSTRUMENTS_BY_ID), ...INSTRUMENT_PATTERN_KIND_RULES.flatMap(r => r.aliases)]);
function instrumentRefs(ids: string[], scope: string, allowKinds = false) {
  for (const id of ids) check(allowKinds ? vocabulary.has(id) : INSTRUMENTS_BY_ID[id], scope, `Unknown instrument ${id}`);
}
function inspect(value: unknown, path: string, key = ''): void {
  properties++;
  if (typeof value === 'number') {
    check(Number.isFinite(value) || (key === 'upperBound' && value === Infinity), path, `Non-finite number ${value}`);
    if (/^(probability|syncopationRating)$|Probability$/.test(key)) check(value >= 0 && value <= 1, path, `Probability ${value} outside 0–1`);
    if (key === 'w') check(value >= 0, path, `Negative distribution weight ${value}`);
    return;
  }
  if (!value || typeof value !== 'object' || seen.has(value)) return;
  seen.add(value);
  if (Array.isArray(value)) {
    if (['instrumentIds', 'characteristicInstruments'].includes(key)) instrumentRefs(value, path);
    if (['instruments', 'palette'].includes(key) && value.every(x => typeof x === 'string')) instrumentRefs(value, path, true);
    if (key === 'tempoRange') check(value.length === 2 && value[0] > 0 && value[1] >= value[0], path, 'Invalid tempo range');
    if (value.length && value.every(x => x && typeof x === 'object' && 'w' in x)) check(value.some(x => x.w > 0), path, 'Distribution has no positive weight');
    value.forEach((item, i) => inspect(item, `${path}[${i}]`, key));
    return;
  }
  const record = value as Record<string, unknown>;
  if (typeof record.min === 'number' && typeof record.max === 'number') check(record.min <= record.max, path, 'Minimum exceeds maximum');
  if (typeof record.lowMidi === 'number' && typeof record.highMidi === 'number') check(record.lowMidi <= record.highMidi, path, 'Inverted instrument range');
  for (const [name, child] of Object.entries(record)) {
    if (['instrumentId', 'leadInstrumentId'].includes(name) && typeof child === 'string' && !(child === '' && path.endsWith(':DEFAULT_DIALECT_SHAPE'))) instrumentRefs([child], `${path}.${name}`);
    inspect(child, `${path}.${name}`, name);
  }
}
async function inspectData(dir: string): Promise<void> {
  for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await inspectData(path);
    else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
      const exports = await import(pathToFileURL(resolve(path)).href);
      dataFiles++;
      for (const [name, value] of Object.entries(exports)) inspect(value, `${path}:${name}`);
    }
  }
}
await inspectData('src/data');
for (const [name, entries] of [['instruments', INSTRUMENT_CATALOG], ['styles', ALL_STYLES], ['genres', GENRE_WORLDS], ['patterns', ALL_PATTERNS]] as const) {
  check(new Set(entries.map(x => x.id)).size === entries.length, name, 'Duplicate IDs');
}
for (const [genre, ids] of Object.entries(WORLD_INSTRUMENT_HINTS)) instrumentRefs(ids, `hints/${genre}`);
for (const world of GENRE_WORLDS) {
  check(GENRE_CONTRACTS[world.id], world.id, 'Missing genre contract');
  check(getGenreTheory(world.id).genreId === world.id, world.id, 'Theory falls back to another genre');
  check(ALL_STYLES.filter(s => s.primaryGenre === world.id && s.canonical).length === 1, world.id, 'Expected one canonical style');
  for (const seed of world.styleDefinitions) {
    check(ALL_STYLES_BY_ID[seed.id], seed.id, 'Authored style is missing from runtime catalog');
    instrumentRefs(seed.characteristicInstruments, seed.id);
  }
  const solo = GENRE_CONTRACTS[world.id]?.soloDefinition;
  check(solo, world.id, 'Missing solo policy');
  for (const policy of Object.values(solo?.modes ?? {})) check(policy.phraseBars > 0 && policy.name && policy.description, `${world.id}/solo`, 'Invalid solo policy');
}
for (const def of ENRICHED_INSTRUMENT_CATALOG) {
  inspect(def, `physical/${def.id}`);
  try {
    getInstrumentModule(def.id);
    const profile = getInstrumentPerformanceProfile(def.id);
    inspect(profile, `performance/${def.id}`);
    check(def.dspProfile?.familyModel && def.dspProfile.excitationDynamics && def.dspProfile.articulationPhysics, def.id, 'Incomplete physical DSP profile');
    check(def.acousticProfile, def.id, 'Missing acoustic metadata');
    if (def.acousticProfile?.role === 'percussion') check(determineBusCategory(def.acousticProfile.role, def.id) === 'drums', def.id, 'Percussion routed outside drum bus');
    for (const articulation of def.techniques.articulations) check(resolveRenderGesture(def.id, codeForGesture(articulation)).name === articulation, def.id, `Articulation ${articulation} fails round trip`);
    for (const component of def.kitComponents ?? []) check(resolveInstrumentKitComponent(def.id, component.midi, component.id)?.id === component.id, def.id, `Kit component ${component.id} fails lookup`);
    dialects += Object.keys(profile.genreProfiles).length;
    check(Object.keys(profile.gestures).length && profile.capabilities.polyphony > 0, def.id, 'Missing playable gestures or polyphony');
  } catch (error) { check(false, def.id, String(error)); }
}
for (const pattern of ALL_PATTERNS) {
  check(GENRE_WORLDS_BY_ID[pattern.worldId], pattern.id, `Unknown world ${pattern.worldId}`);
  check(pattern.subdivisions > 0 && pattern.cycleLength > 0, pattern.id, 'Invalid pattern grid');
  for (const variant of pattern.variants) check(variant.parentPatternId === pattern.id, `${pattern.id}/${variant.id}`, 'Variant belongs to another pattern');
  for (const id of pattern.styleIds ?? []) check(ALL_STYLES_BY_ID[id], pattern.id, `Unknown style ${id}`);
}
const provenancePaths = ['form.sectionVocab', 'form.templates', 'form.preferredMeters', 'harmony.model', 'harmony.modePolicy', 'harmony.progressionTemplates', 'harmony.chordVocabulary', 'rhythm.meter', 'rhythm.tempoRange', 'rhythm.defaultBpm', 'rhythm.feel', 'rhythm.swingPercentage', 'rhythm.anticipationOffsetSteps', 'rhythm.microtimingFeel', 'rhythm.humanizeJitterMs', 'melody.scaleMode', 'arrangement.ensemble', 'sound.instrumentPalette', 'sound.masterProfile.pocket', 'sound.masterProfile.lift'];
for (const style of ALL_STYLES) {
  try {
    const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
    inspect(resolved, `resolved/${style.id}`);
    check(GENRE_WORLDS_BY_ID[style.primaryGenre], style.id, 'Unknown primary genre');
    if (style.extends) check(ALL_STYLES_BY_ID[style.extends], style.id, `Unknown parent ${style.extends}`);
    for (const influence of style.influences ?? []) {
      if (influence.source.styleId) check(ALL_STYLES_BY_ID[influence.source.styleId], style.id, `Unknown influence ${influence.source.styleId}`);
      if (influence.source.genreId) check(GENRE_WORLDS_BY_ID[influence.source.genreId], style.id, `Unknown influence world ${influence.source.genreId}`);
    }
    for (const path of provenancePaths) check(style.sourceProvenance?.[path], `${style.id}/${path}`, 'Missing source provenance');
    const coverage = StyleRuntime.create(resolved).getCoverageReport();
    check(!coverage.hardcodedDecisions, style.id, `Hardcoded decisions: ${coverage.fallbackPaths.join(', ')}`);
    check(resolved.rhythm.defaultBpm > 0 && resolved.form.templates.length && resolved.harmony.model && resolved.melody.scaleMode, style.id, 'Incomplete musical contract');
    check(resolved.arrangement.ensemble.length, style.id, 'Empty ensemble');
    for (const part of resolved.arrangement.ensemble) {
      instrumentRefs(part.instrumentIds, style.id);
      for (const instrumentId of part.instrumentIds) {
        const params = resolveTrackSound(instrumentId, style.primaryGenre, style.id, part.role);
        inspect(params, `sound/${style.id}/${instrumentId}/${part.role}`);
        inspect(resolveVoiceParameters({ id: 'audit', note: 60, velocity: .7, gate: 1 }, params), `voice/${style.id}/${instrumentId}/${part.role}`);
      }
    }
    instrumentRefs(resolved.sound.instrumentPalette.map(x => x.value), style.id);
    check(resolved.patterns?.allowed?.length, style.id, 'No playable patterns');
    for (const ids of Object.values(resolved.patterns ?? {})) for (const id of ids ?? []) check(PATTERNS_BY_ID[id], style.id, `Unknown pattern ${id}`);
    const character = resolved.resolvedMix.contract.character;
    for (const [key, value] of Object.entries(character)) {
      if (typeof value !== 'number') continue;
      const range = key === 'compressionRatio' ? [1, 20] : key === 'delayToneHz' ? [20, 22050] : key === 'delayTimeSeconds' ? [0, 10] : [0, 1];
      check(Number.isFinite(value) && value >= range[0] && value <= range[1], `${style.id}/mix/${key}`, `Value ${value} outside ${range.join('–')}`);
    }
    inspect(resolveMasterSettings(character, `${style.primaryGenre} ${style.id}`), `master/${style.id}`);
  } catch (error) { check(false, style.id, String(error)); }
}
for (const song of songCatalog) {
  check(GENRE_WORLDS_BY_ID[song.genreId], song.id, 'Unknown song genre');
  check(ALL_STYLES_BY_ID[song.styleId]?.primaryGenre === song.genreId, song.id, 'Invalid song style');
  instrumentRefs(RECORDING_ARRANGEMENTS[song.referenceKey].instruments ?? [], song.id);
}
const coverage = { dataFiles, properties, genres: GENRE_WORLDS.length, styles: ALL_STYLES.length, instruments: INSTRUMENT_CATALOG.length, patterns: ALL_PATTERNS.length, dialects };
writeReport('catalog-audit', { ...reportMetadata(), status: findings.length ? 'FAIL' : 'PASS', coverage, counts: summarizeFindings(findings), findings });
printFindings('catalog-audit', findings, coverage);
