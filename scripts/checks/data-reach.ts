// T1 data reach/provenance audit.
// Runs the real resolver/compiler with recording proxies, then checks registry cardinality,
// authored-vs-resolved provenance, actual pattern/instrument/gesture coverage and aliases.
// Shard with --start/--end (or AUDIT_START/AUDIT_END) so CI can run this in parallel.
import { ALL_PATTERNS, GENRE_WORLDS, GENRE_WORLDS_BY_ID, PATTERNS_BY_ID } from '../../src/data/genres';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID } from '../../src/data/instruments';
import { ALL_STYLES, ALL_STYLES_BY_ID } from '../../src/engine/style/registry.ts';
import { resolveStyle } from '../../src/engine/style/resolve.ts';
import { makeSheet } from '../../src/engine/sheet/sheet.ts';
import { compileWholeSong } from '../../src/engine/band/arrangeBand.ts';
import { STYLE_PATCHES } from '../../src/data/styles/contracts.ts';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';
import { flag, writeReport } from '../lib/io.ts';

interface ReadState { reads: Map<string, number>; root: string }
const states = new Map<string, ReadState>();
function recorder<T extends object>(value: T, root: string, path = root, seen = new WeakMap<object, unknown>()): T {
  const existing = seen.get(value);
  if (existing) return existing as T;
  let state = states.get(root);
  if (!state) { state = { reads: new Map(), root }; states.set(root, state); }
  const proxy = new Proxy(value, {
    get(target, prop, receiver) {
      if (typeof prop === 'string') {
        const p = `${path}.${prop}`;
        state!.reads.set(p, (state!.reads.get(p) ?? 0) + 1);
      }
      const result = Reflect.get(target, prop, receiver);
      return result && typeof result === 'object' ? recorder(result as object, root, `${path}.${String(prop)}`, seen) : result;
    },
  });
  seen.set(value, proxy);
  return proxy;
}

const originalPatterns = new Map(Object.entries(PATTERNS_BY_ID));
for (const [id, value] of Object.entries(ALL_STYLES_BY_ID)) ALL_STYLES_BY_ID[id] = recorder(value, `style:${id}`);
for (const [id, value] of originalPatterns) PATTERNS_BY_ID[id] = recorder(value, `pattern:${id}`);
for (const [id, value] of Object.entries(INSTRUMENTS_BY_ID)) INSTRUMENTS_BY_ID[id] = recorder(value, `instrument:${id}`);

const start = Math.max(0, Number(flag('start') ?? process.env.AUDIT_START ?? 0));
const requestedEnd = Number(flag('end') ?? process.env.AUDIT_END ?? ALL_STYLES.length);
const end = Math.min(ALL_STYLES.length, Math.max(start, requestedEnd));
const selectedStyles = ALL_STYLES.slice(start, end);
const failures: string[] = [];
const overridden: Array<Record<string, string>> = [];
const styleRows: Array<Record<string, unknown>> = [];
const usedPatterns = new Set<string>();
const usedInstruments = new Set<string>();
const usedGestures = new Set<string>();

for (const style of selectedStyles) {
  try {
    const resolved = resolveStyle({ genreId: style.primaryGenre, styleId: style.id });
    const sheet = makeSheet({ genreId: style.primaryGenre, styleId: style.id });
    const perf = compileWholeSong(sheet, 0);
    for (const measure of sheet.measures) for (const id of Object.values(measure.patternByTrack ?? {})) if (id) usedPatterns.add(id);
    for (const track of sheet.tracks) if (track.instrumentId) usedInstruments.add(track.instrumentId);
    for (const note of perf.notes) usedGestures.add(GESTURE_NAMES[note.gestureCode] ?? `code:${note.gestureCode}`);
    const hardcoded = resolved.trace.filter(t => t.source === 'hardcoded').map(t => t.path);
    const patch = STYLE_PATCHES[style.id];
    if (patch) overridden.push({ styleId: style.id, layer: 'patch', paths: Object.keys(patch).join(',') });
    styleRows.push({ styleId: style.id, genre: style.primaryGenre, notes: perf.notes.length, hardcodedFallbackPaths: hardcoded });
  } catch (error) {
    failures.push(`${style.id}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const readPaths = (prefix: string) => new Set([...states.values()].filter(s => s.root.startsWith(prefix)).flatMap(s => [...s.reads.keys()]));
const styleReads = readPaths('style:');
const patternReads = readPaths('pattern:');
const instrumentReads = readPaths('instrument:');
const styleDead = selectedStyles.filter(s => ![...styleReads].some(p => p === `style:${s.id}` || p.startsWith(`style:${s.id}.`))).map(s => s.id);
const patternDead = ALL_PATTERNS.filter(p => !patternReads.has(`pattern:${p.id}`) && ![...patternReads].some(path => path.startsWith(`pattern:${p.id}.`))).map(p => p.id);
const instrumentDead = INSTRUMENT_CATALOG.filter(i => !instrumentReads.has(`instrument:${i.id}`) && ![...instrumentReads].some(path => path.startsWith(`instrument:${i.id}.`))).map(i => i.id);

const normalized = new Map<string, string[]>();
for (const id of Object.keys(ALL_STYLES_BY_ID)) {
  const key = id.toLowerCase().replace(/[^a-z0-9]+/g, '');
  normalized.set(key, [...(normalized.get(key) ?? []), id]);
}
const aliases = [...normalized.entries()].filter(([, ids]) => ids.length > 1).map(([normalizedId, ids]) => ({ normalizedId, ids }));
for (const genre of GENRE_WORLDS) if (!GENRE_WORLDS_BY_ID[genre.id]) failures.push(`genre ${genre.id}: missing lookup entry`);
for (const style of selectedStyles) if (!ALL_STYLES_BY_ID[style.id]) failures.push(`style ${style.id}: missing registry entry`);

const fallbackPaths = [...new Set(styleRows.flatMap(r => r.hardcodedFallbackPaths as string[]))];
const report = {
  schemaVersion: 2,
  status: failures.length ? 'FAIL' : 'PASS',
  shard: [start, end],
  counts: { genres: GENRE_WORLDS.length, styles: selectedStyles.length, totalStyles: ALL_STYLES.length, patterns: ALL_PATTERNS.length, instruments: INSTRUMENT_CATALOG.length },
  reads: { stylePaths: styleReads.size, patternPaths: patternReads.size, instrumentPaths: instrumentReads.size },
  dead: { styles: styleDead, patterns: patternDead, instruments: instrumentDead },
  coverage: { patterns: [...usedPatterns], instruments: [...usedInstruments], gestures: [...usedGestures] },
  aliases,
  fallbackPaths,
  patchOverrides: overridden,
  failures,
  rows: styleRows,
};
const name = start === 0 && end === ALL_STYLES.length ? 'data-reach.json' : `data-reach-${start}-${end}.json`;
writeReport(name, report);
console.log(JSON.stringify({ status: report.status, shard: report.shard, failures: failures.length, fallbackPaths: fallbackPaths.length, deadStyles: styleDead.length, deadPatterns: patternDead.length, deadInstruments: instrumentDead.length, coverage: report.coverage }, null, 2));
if (failures.length || (process.env.STRICT === '1' && fallbackPaths.length)) process.exit(1);
