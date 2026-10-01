// CHECK: one pass over every style (363) with four independent rule groups.
// Replaces four scripts that each resolved/compiled every style separately:
//   audit-all-styles.ts        -> group `provenance`  (source provenance + hardcoded-decision coverage)
//   audit-style-performance.ts -> group `schema`      (required fields, non-empty patterns, technique use)
//   audit-style-tone.ts        -> group `tone`        (mixCharacter 0..1, room send/RT60 in safe range, orphan patches)
//   engine-integrity-audit.ts  -> group `compile`     (exactly 8 starter tracks, instrument modules exist, notes > 0)
// Each style is resolved, sheeted and compiled ONCE (was 3x).
//
// Usage: tsx scripts/checks/styles.ts [--only=compile,schema,tone,provenance]   (default: all groups)
// Output: audit/style-checks.json. Exit 1 if any selected group has failures.
// `npm test` runs only `--only=compile` (same gate as before); `npm run check:styles` runs everything.
import { ALL_STYLES } from '../../src/engine/style/registry.ts';
import { resolveStyle } from '../../src/engine/style/resolve.ts';
import { StyleRuntime } from '../../src/engine/style/runtime.ts';
import { contractForGenre } from '../../src/engine/style/contracts.ts';
import { styleCalibrationTarget } from '../../src/engine/style/performance-schema';
import { styleTechniqueExpectation } from '../../src/engine/style/performance-expectations';
import { STYLE_PATCHES } from '../../src/data/styles/contracts.ts';
import { masterToneSettings } from '../../src/engine/studio/mixer.ts';
import { makeSheet, getResolvedSectionStyle } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { getInstrumentModule } from '../../src/engine/playback/instrumentRegistry.ts';
import { getInstrumentPerformanceProfile } from '../../src/engine/lookup/performance';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';
import { flag, round, writeReport } from '../lib/io.ts';

const GROUPS = ['compile', 'schema', 'tone', 'provenance'] as const;
type Group = (typeof GROUPS)[number];
const only = flag('only');
const selected = new Set<Group>(typeof only === 'string' ? (only.split(',') as Group[]) : GROUPS);
for (const g of selected) if (!GROUPS.includes(g)) throw new Error(`Unknown group "${g}". Valid: ${GROUPS.join(', ')}`);

const failures: Record<Group, string[]> = { compile: [], schema: [], tone: [], provenance: [] };
const fail = (g: Group, styleId: string, msg: string) => failures[g].push(`${styleId}: ${msg}`);
const rows: Array<Record<string, unknown>> = [];
let hardcodedDecisions = 0;

const EXPECTED_PROVENANCE = [
  'form.sectionVocab', 'form.templates', 'form.preferredMeters', 'form.defaultSpotlights',
  'harmony.model', 'harmony.modePolicy', 'harmony.progressionTemplates', 'harmony.chordVocabulary',
  'rhythm.meter', 'rhythm.tempoRange', 'rhythm.defaultBpm', 'rhythm.feel', 'rhythm.swingPercentage',
  'rhythm.anticipationOffsetSteps', 'rhythm.microtimingFeel', 'rhythm.humanizeJitterMs', 'melody.scaleMode',
  'arrangement.ensemble', 'sound.instrumentPalette', 'sound.masterProfile.pocket', 'sound.masterProfile.lift',
];

for (const def of ALL_STYLES as any[]) {
  const id: string = def.id;
  const genre: string = def.primaryGenre;
  try {
    const style: any = resolveStyle({ genreId: genre, styleId: id });
    const sheet: any = makeSheet({ genreId: genre, styleId: id } as any);
    const perf: any = compileWholeSong(sheet, 0);
    const row: Record<string, unknown> = { styleId: id, genre, name: def.name, notes: perf.notes.length, durationSec: round(perf.duration), tracks: sheet.tracks.map((t: any) => ({ instrumentId: t.instrumentId, role: t.role, volume: t.volume })) };

    if (selected.has('compile')) {
      // makeSheet() is the default-song constructor: starters have exactly eight playable parts.
      // That is NOT an engine ceiling - users can add tracks afterwards.
      if (sheet.tracks.length !== 8) fail('compile', id, `default starter has ${sheet.tracks.length} tracks (expected exactly 8)`);
      for (const t of sheet.tracks) if (t.instrumentId) { try { getInstrumentModule(t.instrumentId); } catch { fail('compile', id, `no instrument module for ${t.instrumentId}`); } }
      if (!perf.notes.length) fail('compile', id, 'zero notes');
      const target = styleCalibrationTarget(genre, id, def);
      row.referenceSong = target.referenceSong; row.referenceTone = target.referenceTone; row.preferredProgression = target.preferredProgression;
    }

    if (selected.has('schema')) {
      if (!style.rhythm?.meter || !style.harmony?.model || !style.melody?.scaleMode) fail('schema', id, 'missing rhythm.meter / harmony.model / melody.scaleMode');
      if (!style.patterns?.allowed?.length) fail('schema', id, 'no allowed patterns');
      const firstRegionStyle = getResolvedSectionStyle(sheet, sheet.regions[0]) ?? style;
      for (const t of sheet.tracks) {
        const notes = perf.notes.filter((n: any) => n.trackId === t.id);
        if (!notes.length || !t.instrumentId) continue;
        const expectation = styleTechniqueExpectation(firstRegionStyle, getInstrumentPerformanceProfile(t.instrumentId), String(t.role ?? 'comp'));
        const used = new Set(notes.map((n: any) => GESTURE_NAMES[n.gestureCode]).filter(Boolean));
        if (expectation.required.length && notes.length >= 6 && !expectation.required.some((x: string) => used.has(x))) {
          fail('schema', id, `${t.instrumentId} never plays any required technique (${expectation.required.join('/')})`);
        }
      }
    }

    if (selected.has('tone')) {
      const mix = contractForGenre(genre, style).timbreSpace.mixCharacter;
      if (!mix) fail('tone', id, 'no resolved mix character');
      else {
        for (const [k, v] of Object.entries({ dryness: mix.dryness, brightness: mix.brightness, bassForward: mix.bassForward, width: mix.width })) {
          if (!Number.isFinite(v) || (v as number) < 0 || (v as number) > 1) fail('tone', id, `${k} outside 0..1 (${v})`);
        }
        const tone = masterToneSettings(mix, genre);
        for (const [k, v] of Object.entries(tone)) if (!Number.isFinite(v as number)) fail('tone', id, `non-finite resolved ${k}`);
        if (tone.roomDepth < 0 || tone.roomDepth > 0.08 || tone.roomRt60 < 0.2 || tone.roomRt60 > 0.8) fail('tone', id, `room send/tail outside safe range (${tone.roomDepth}/${tone.roomRt60})`);
        row.tone = { roomDepth: tone.roomDepth, roomRt60: tone.roomRt60, presenceGainDb: tone.presenceGainDb, airGainDb: tone.airGainDb, widthGain: tone.widthGain, hasStyleOverride: Boolean((STYLE_PATCHES as any)[id]?.timbreSpace?.mixCharacter) };
      }
    }

    if (selected.has('provenance')) {
      hardcodedDecisions += StyleRuntime.create(style).getCoverageReport().hardcodedDecisions;
      const missing = EXPECTED_PROVENANCE.filter(p => !def.sourceProvenance?.[p]);
      if (missing.length) fail('provenance', id, `missing source provenance: ${missing.join(', ')}`);
    }
    rows.push(row);
  } catch (e) {
    for (const g of selected) fail(g, id, `threw: ${e instanceof Error ? e.message : String(e)}`);
  }
}

if (selected.has('tone')) {
  const known = new Set((ALL_STYLES as any[]).map(s => s.id));
  for (const pid of Object.keys(STYLE_PATCHES)) if (!known.has(pid)) fail('tone', pid, 'style patch references an unknown style');
}
if (selected.has('provenance') && hardcodedDecisions) failures.provenance.push(`hardcoded decisions remain: ${hardcodedDecisions} (replace with authored style/genre values)`);

const summary = Object.fromEntries([...selected].map(g => [g, failures[g].length]));
const path = writeReport('style-checks.json', { generatedAt: new Date().toISOString(), groups: [...selected], styles: ALL_STYLES.length, hardcodedDecisions, failureCounts: summary, failures: Object.fromEntries([...selected].map(g => [g, failures[g]])), rows });
console.log(JSON.stringify({ styles: ALL_STYLES.length, groups: [...selected], failureCounts: summary, report: path }, null, 2));
process.exitCode = [...selected].some(g => failures[g].length) ? 1 : 0;
