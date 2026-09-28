import { writeFileSync, mkdirSync } from 'node:fs';
import { makeSheet, type Sheet } from '../src/engine/generators/arrange.ts';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler.ts';
import { getCanonicalStyle } from '../src/data/styles/registry.ts';
import type { PerfNote } from '../src/engine/sequencing/perform.ts';

const OUT = 'reports/genre-instrument';
mkdirSync(OUT, { recursive: true });

const GENRES = ['afrobeats','bachata','blues','brazilian','country','cumbia','disco','electronic','folk','funk','gospel','hip-hop','house','jazz','kizomba','tango','flamenco','metal','r-and-b','reggae','reggaeton','rock','salsa','ska','soul','swing','timba','zouk','drum-and-bass','industrial','punk-hardcore','uk-bass'];

function shorten(sheet: Sheet, bars = 8): Sheet {
  const r = sheet.regions[0];
  if (!r) return sheet;
  const end = Math.min(r.start + bars, r.end);
  const region = { ...r, start: 0, end: end - r.start, bars: end - r.start };
  const measures = sheet.measures.filter(m => m.index >= r.start && m.index < end).map((m, i) => ({ ...m, index: i, regionId: region.id }));
  return {
    ...sheet,
    durationMeasures: measures.length,
    regions: [region],
    measures,
    arrangement: { [region.id]: Object.fromEntries(sheet.tracks.map(t => [t.id, sheet.arrangement?.[r.id]?.[t.id] ?? ''])) },
    energies: { [region.id]: Object.fromEntries(sheet.tracks.map(t => [t.id, sheet.energies?.[r.id]?.[t.id] ?? r.energy ?? 3])) },
    partLens: sheet.partLens?.[r.id] ? { [region.id]: { ...sheet.partLens[r.id] } } : undefined,
  } as Sheet;
}

function mean(xs: number[]): number { return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0; }
function stdev(xs: number[]): number {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  return Math.sqrt(mean(xs.map(x => (x - m) ** 2)));
}

function overlapRatio(notes: PerfNote[]): number {
  let overlaps = 0;
  for (let i = 0; i < notes.length; i++) {
    const a = notes[i];
    const found = notes.some((b, j) => i !== j && a.trackId !== b.trackId && b.time < a.time + a.dur && b.time + b.dur > a.time);
    if (found) overlaps++;
  }
  return notes.length ? overlaps / notes.length : 0;
}

function trackVariation(notes: PerfNote[]): number {
  const bars = new Map<number, string>();
  for (const n of notes) {
    const old = bars.get(n.bar) ?? '';
    bars.set(n.bar, `${old}${n.bar}:${Math.round(n.time * 100)}:${n.midi}:${n.gestureCode}:${n.accent.toFixed(2)}|`);
  }
  const a = [...bars.entries()].filter(([b]) => b < 4).map(([, v]) => v).join('');
  const b = [...bars.entries()].filter(([x]) => x >= 4).map(([, v]) => v).join('');
  return a !== b ? 1 : 0;
}

function auditGenre(genre: string) {
  const sheet = shorten(makeSheet({ genreId: genre, styleId: getCanonicalStyle(genre).id }));
  const perf = compileWholeSong(sheet, 0);
  const notesByTrack = new Map<string, PerfNote[]>();
  for (const n of perf.notes) (notesByTrack.get(n.trackId) ?? notesByTrack.set(n.trackId, []).get(n.trackId)!).push(n);
  const activeTracks = sheet.tracks.filter(t => (notesByTrack.get(t.id)?.length ?? 0) > 0);
  const trackRows = activeTracks.map(t => {
    const notes = notesByTrack.get(t.id)!;
    return {
      trackId: t.id,
      instrumentId: t.instrumentId,
      role: t.role,
      notes: notes.length,
      velocityRange: [Math.min(...notes.map(n => n.vel)), Math.max(...notes.map(n => n.vel))],
      velocityStdev: stdev(notes.map(n => n.vel)),
      durationStdev: stdev(notes.map(n => n.dur)),
      gestureCount: new Set(notes.map(n => n.gestureCode)).size,
      hitCount: new Set(notes.map(n => n.hitFunctionCode)).size,
      derivedShare: notes.filter(n => n.originCode === 1).length / notes.length,
      phraseChanged: trackVariation(notes) > 0,
      range: [Math.min(...notes.map(n => n.midi)), Math.max(...notes.map(n => n.midi))],
    };
  });
  const phraseChangedShare = mean(trackRows.map(x => x.phraseChanged ? 1 : 0));
  const derivedShare = perf.notes.length ? perf.notes.filter(n => n.originCode === 1).length / perf.notes.length : 0;
  const row = {
    genre,
    styleId: sheet.styleId,
    duration: perf.duration,
    notes: perf.notes.length,
    activeTracks: activeTracks.length,
    totalTracks: sheet.tracks.length,
    instrumentCount: new Set(activeTracks.map(t => t.instrumentId)).size,
    overlapRatio: overlapRatio(perf.notes),
    velocityStdev: stdev(perf.notes.map(n => n.vel)),
    velocityRange: [Math.min(...perf.notes.map(n => n.vel)), Math.max(...perf.notes.map(n => n.vel))],
    phraseChangedShare,
    derivedShare,
    tailSeconds: perf.tail,
    blendCount: Object.keys(perf.blends).length,
    trackRows,
  };
  return row;
}

const rows = GENRES.map(auditGenre);
const failures = rows.filter(r => r.notes <= 0 || r.activeTracks < 2 || r.instrumentCount < 2 || r.velocityRange[1] - r.velocityRange[0] < 8 || r.tailSeconds <= 0);
const summary = {
  genres: rows.length,
  failures: failures.map(f => ({ genre: f.genre, activeTracks: f.activeTracks, instrumentCount: f.instrumentCount, velocityRange: f.velocityRange, tailSeconds: f.tailSeconds })),
  meanNotes: mean(rows.map(x => x.notes)),
  meanActiveTracks: mean(rows.map(x => x.activeTracks)),
  meanOverlapRatio: mean(rows.map(x => x.overlapRatio)),
  meanVelocityStdev: mean(rows.map(x => x.velocityStdev)),
  meanPhraseChangedShare: mean(rows.map(x => x.phraseChangedShare)),
  meanDerivedShare: mean(rows.map(x => x.derivedShare)),
  minActiveTracks: Math.min(...rows.map(x => x.activeTracks)),
  minInstrumentCount: Math.min(...rows.map(x => x.instrumentCount)),
  minPhraseChangedShare: Math.min(...rows.map(x => x.phraseChangedShare)),
};
writeFileSync(`${OUT}/mix-structure.json`, JSON.stringify({ summary, rows }, null, 2));
console.log(JSON.stringify({ summary }, null, 2));
if (failures.length) process.exit(1);
