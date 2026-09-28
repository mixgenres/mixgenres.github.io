import { makeSheet } from '../src/engine/generators/arrange';
import { compileWholeSong } from '../src/engine/compiler/wholeSongCompiler';
import { GENRE_FORMS } from '../src/data/genreForms';

// Minimal regression check: every genre must build a sheet and compile to a
// non-empty performance without throwing. This replaced package.json's
// original "test" script (scripts/test-filter.ts), which referenced a file
// that did not exist anywhere in the project.
let failures = 0;
for (const genreId of Object.keys(GENRE_FORMS)) {
  try {
    const sheet = makeSheet(genreId);
    const perf = compileWholeSong(sheet);
    if (!perf.notes.length) throw new Error('compiled performance has zero notes');
    console.log(`ok    ${genreId.padEnd(20)} ${sheet.tracks.length} tracks, ${perf.notes.length} notes, ${perf.duration.toFixed(1)}s`);
  } catch (err) {
    failures++;
    console.error(`FAIL  ${genreId.padEnd(20)} ${(err as Error).message}`);
  }
}

if (failures) {
  console.error(`\n${failures} genre(s) failed to compile.`);
  process.exit(1);
} else {
  console.log(`\nall ${Object.keys(GENRE_FORMS).length} genres compiled successfully.`);
}

