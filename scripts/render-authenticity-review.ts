import { mkdirSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { renderPerformanceToMp3 } from '../src/engine/playback/mp3Export';
import { songMixOptions } from '../src/engine/playback/renderSongMix';

mkdirSync('audit', { recursive: true });
const song = makeSheet('tango', 'tango-golden-age'), perf = compileWholeSong(song);
const options = songMixOptions(song);
const save = async (name: string, extra: Partial<Parameters<typeof renderPerformanceToMp3>[1]>) => {
  const blob = await renderPerformanceToMp3(perf, { ...options, ...extra });
  writeFileSync(`audit/${name}`, Buffer.from(await blob.arrayBuffer()));
  console.log(`Rendered audit/${name}`);
};
await save('tango-after.wav', { format: 'wav', renderWindow: { start: 0, end: perf.bars[4].start } });
await save('tango-complete-after.mp3', { format: 'mp3' });
for (const id of ['bandoneon', 'piano', 'violin', 'upright-bass']) {
  const track = song.tracks.find(t => t.instrumentId === id)!;
  await save(`tango-${id}-after.wav`, { selectedTrackIds: [track.id], format: 'wav', renderWindow: { start: perf.bars[4].start, end: perf.bars[8].start } });
}
