import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { makeSheet } from '../src/engine/generators/arrange';
import { tieredCompile } from '../src/engine/sequencing/tieredEngine';
import { renderPerformanceToMp3 } from '../src/engine/audio/offlineRender';

function volumedetectMeanDb(path: string): number {
  const out = execSync(`ffmpeg -i ${path} -af volumedetect -f null - 2>&1`).toString();
  const m = out.match(/mean_volume:\s*(-?[\d.]+) dB/);
  return m ? parseFloat(m[1]) : NaN;
}

async function main() {
  const genreId = process.argv[2] || 'salsa';
  const sheet = makeSheet(genreId);
  const perf = tieredCompile(sheet);
  const trackInstruments = new Map(sheet.tracks.map(t => [t.id, t.instrumentId]));

  console.log(`[${genreId}] sections: ${sheet.regions.map(r => `${r.kind}(e${r.energy})`).join(' -> ')}`);

  // --- per-track solo balance ---
  console.log('\n--- per-track solo levels (whole song) ---');
  const levels: { id: string; instrument: string; db: number }[] = [];
  for (const t of sheet.tracks) {
    const blob = await renderPerformanceToMp3(perf, {
      selectedTrackIds: [t.id],
      trackInstruments,
      worldId: sheet.worldId,
      styleId: sheet.styleId,
    });
    const path = `/tmp/solo_${genreId}_${t.id}.mp3`;
    writeFileSync(path, Buffer.from(await blob.arrayBuffer()));
    const db = volumedetectMeanDb(path);
    levels.push({ id: t.id, instrument: t.instrumentId, db });
  }
  levels.sort((a, b) => b.db - a.db);
  for (const l of levels) console.log(`  ${l.id.padEnd(4)} ${l.instrument.padEnd(16)} ${l.db.toFixed(1)} dB`);
  const spread = Math.max(...levels.map(l => l.db)) - Math.min(...levels.map(l => l.db));
  console.log(`  spread: ${spread.toFixed(1)} dB`);

  // --- section-to-section dynamics (full mix) ---
  console.log('\n--- section loudness (full mix) ---');
  const fullBlob = await renderPerformanceToMp3(perf, {
    trackInstruments,
    worldId: sheet.worldId,
    styleId: sheet.styleId,
  });
  const fullPath = `/tmp/full_${genreId}.mp3`;
  writeFileSync(fullPath, Buffer.from(await fullBlob.arrayBuffer()));

  // Figure out each region's [start,end] time in seconds from bpm/timeSignature.
  const secondsPerBeat = 60 / sheet.bpm;
  const beatsPerBar = parseInt(String(sheet.timeSignature).split('/')[0], 10) || 4;
  let barCursor = 0;
  for (const r of sheet.regions) {
    const startBar = barCursor;
    const endBar = barCursor + r.bars;
    barCursor = endBar;
    const startSec = startBar * beatsPerBar * secondsPerBeat;
    const durSec = (endBar - startBar) * beatsPerBar * secondsPerBeat;
    const out = execSync(
      `ffmpeg -ss ${startSec.toFixed(2)} -t ${durSec.toFixed(2)} -i ${fullPath} -af volumedetect -f null - 2>&1`,
    ).toString();
    const m = out.match(/mean_volume:\s*(-?[\d.]+) dB/);
    console.log(`  ${r.kind.padEnd(10)} energy=${r.energy}  ${startSec.toFixed(1)}s-${(startSec + durSec).toFixed(1)}s  mean=${m ? m[1] : '?'} dB`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
