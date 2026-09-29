import { writeFileSync, mkdirSync } from 'node:fs';
import { GENRE_NAMES } from '../src/data/genres';
import { makeSheet } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { genreDialectTarget } from '../src/data/performance/genreDialectTargets';
import { getInstrumentPerformanceProfile } from '../src/data/performance/instrumentPerformanceProfiles';
import { parseChord } from '../src/engine/theory/theory';

mkdirSync('audit', { recursive: true });
const rows: Array<Record<string, unknown>> = [];
for (const genre of Object.keys(GENRE_NAMES)) {
  const target = genreDialectTarget(genre);
  const sheet = makeSheet(genre);
  const perf = compileWholeSong(sheet);
  for (const track of sheet.tracks) {
    const notes = perf.notes.filter(n => n.trackId === track.id);
    if (!notes.length) continue;
    const profile = getInstrumentPerformanceProfile(track.instrumentId ?? track.instrument);
    const roots = notes.filter(n => {
      const chord = sheet.measures[n.bar]?.chord;
      return Boolean(chord) && n.midi % 12 === (parseChord(chord!).rootPc ?? -99);
    }).length;
    rows.push({
      genre,
      reference: target.reference,
      instrumentId: track.instrumentId,
      role: track.role,
      noteCount: notes.length,
      target,
      scope: profile.scope,
      evidence: profile.evidence,
      physicalRange: [profile.capabilities.lowMidi, profile.capabilities.highMidi],
      meanVelocity: notes.reduce((a, n) => a + n.vel, 0) / notes.length,
      rootCountApproximation: roots,
    });
  }
}
writeFileSync('audit/genre-dialect-calibration.json', JSON.stringify({ generatedAt: new Date().toISOString(), genres: Object.keys(GENRE_NAMES).length, rows }, null, 2));
console.log(`audited ${Object.keys(GENRE_NAMES).length} default genres / ${rows.length} lanes`);
