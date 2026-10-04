/** Catalog-wide structural evidence accompanying the decoded reference survey. */
import { readFileSync, writeFileSync } from 'node:fs';
import { catalogIdForStyle, createCatalogSong } from '../src/engine/sheet/songCatalog';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
const inventory = JSON.parse(readFileSync('audit/all-samples/inventory.json', 'utf8')) as {
  entries: Array<{ matches: Array<{ genre: string; styleId: string; name: string }> }>;
};
const rows = [];
for (const match of inventory.entries.flatMap(entry => entry.matches)) {
  const sheet = createCatalogSong(catalogIdForStyle(match.styleId)), performance = compileWholeSong(sheet);
  const tracks = sheet.tracks.map(track => {
    const notes = performance.notes.filter(note => note.trackId === track.id);
    const pitched = INSTRUMENTS_BY_ID[track.instrumentId!]?.voicing === 'unpitched' ? [] : notes;
    return { instrumentId: track.instrumentId, role: track.role, notes: notes.length,
      registerLow: pitched.length ? Math.min(...pitched.map(note => note.midi)) : null,
      registerHigh: pitched.length ? Math.max(...pitched.map(note => note.midi)) : null,
      meanDurationSeconds: notes.length ? notes.reduce((sum, note) => sum + note.dur, 0) / notes.length : 0,
      gestures: [...new Set(notes.map(note => note.gestureCode))] };
  });
  const frequencies = performance.notes.filter(note => INSTRUMENTS_BY_ID[performance.trackInfo?.[note.trackId]?.instrumentId ?? '']?.voicing !== 'unpitched')
    .map(note => 440 * 2 ** ((note.midi - 69) / 12));
  rows.push({ ...match, bpm: sheet.bpm, meter: sheet.timeSignature, durationSeconds: performance.duration,
    lowFundamentalFraction: frequencies.length ? frequencies.filter(frequency => frequency < 200).length / frequencies.length : null,
    tracks, warnings: tracks.filter(track => !track.notes).map(track => `Authored ${track.instrumentId} part has no notes in the complete study.`) });
}
writeFileSync('audit/all-samples/patterns.json', JSON.stringify({ rows, evidence: 'Compiled example arrangements, not transcribed album notes. Register and event count do not measure instrument loudness.' }, null, 2) + '\n');
console.log(`${rows.length} style patterns inspected`);
