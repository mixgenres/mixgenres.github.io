/** Controlled A/B: current physics/patterns, with previous versus calibrated static source gains.
 * Previous gains change only this process's instrument definitions, never repository files.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { readNumbers } from './lib/jsonData';
import { resolve } from 'node:path';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { chooseAudioWindows } from './lib/audioExcerpt';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { MASTER_MIX_DEFAULTS } from '../src/data/sound/mix/masterProfiles';
import { stemCache } from '../src/engine/cache/stemCache';
import type { RenderDiagnostic } from '../src/engine/studio/audioMetrics';
const prior = readNumbers('audit/all-samples/instrument-gain-baseline.json');
const current = Object.fromEntries(Object.values(INSTRUMENTS_BY_ID).map(def => [def.id, def.makeupGain]));
const programMakeupDb = MASTER_MIX_DEFAULTS.programMakeupDb;
const genres = process.argv[2]?.split(',') ?? ['tango', 'flamenco', 'salsa', 'ambient', 'afrobeat', 'arabic', 'rock', 'country'];
mkdirSync('audit/all-samples/gain-ab', { recursive: true });
for (const genre of genres) {
  const sheet = makeSheet(genre), performance = compileWholeSong(sheet), seconds = 6;
  const start = chooseAudioWindows(performance, seconds).find(window => window.name === 'ensemble')?.start ?? 0;
  for (const phase of ['before', 'after'] as const) {
    MASTER_MIX_DEFAULTS.programMakeupDb = phase === 'before' ? 0 : programMakeupDb;
    for (const [id, gain] of Object.entries(phase === 'before' ? prior : current)) {
      if (gain !== undefined) INSTRUMENTS_BY_ID[id].makeupGain = gain;
    }
    stemCache.clear();
    const diagnostics: RenderDiagnostic[] = [];
    const blob = await renderPerformanceToMp3(performance, { ...songMixOptions(sheet),
      selectedTrackIds: sheet.tracks.filter(track => INSTRUMENTS_BY_ID[track.instrumentId!].family !== 'voice').map(track => track.id),
      renderWindow: { start, end: start + seconds }, maxDurationSeconds: seconds,
      onDiagnostics: event => diagnostics.push(event) });
    const prefix = resolve('audit/all-samples/gain-ab', `${genre}-${phase}`);
    writeFileSync(`${prefix}.mp3`, Buffer.from(await blob.arrayBuffer()));
    writeFileSync(`${prefix}.json`, JSON.stringify({ genre, phase, start, seconds, diagnostics,
      evidence: 'Controlled source-gain and program-level comparison using current instrument physics and authored study; not a historical complete-system baseline.' }, null, 2) + '\n');
    console.log(`${genre}: ${phase}`);
  }
}
