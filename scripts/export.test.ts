import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { createSheet } from '../src/engine/sheet/sheet';
import { arrangeBand } from '../src/engine/band';
import { codeForGesture } from '../src/engine/band/gestures';
import { createExport } from '../src/export';
import { midiBytes } from '../src/export/midi';
import { gp5Bytes } from '../src/export/gp5';
import { musicXml } from '../src/export/musicxml';
import { tickAt, type ExportContext } from '../src/export/model';
import { PCMStemCache } from '../src/engine/cache/stemCache';
import { encodeMp3PCM, wavBlob } from '../src/export/audioEncoding';

const song = createSheet('flamenco');
const performance = arrangeBand(song);
const ctx: ExportContext = { song, performance, selectedTrackIds: song.tracks.map(t => t.id) };
assert.ok(performance.notes.length > 0);
assert.equal(tickAt(performance, performance.bars[1].start), Math.round(performance.bars[0].beatsPerBar * 960));
for (const format of ['midi', 'musicxml', 'mxl', 'tablature', 'json'] as const) {
  // Tablature may contain unplayable physical notes; plain notation must always export.
  const result = await createExport(ctx, format);
  assert.ok(result.blob.size > 100, format);
}
const bass = { ...song.tracks[0], id: 'bass', name: 'Bass & low', instrumentId: 'electric-bass', role: 'bass' as const, muted: true };
const guitar = { ...song.tracks[0], id: 'guitar', name: 'Flamenco guitar', instrumentId: 'flamenco-guitar', role: 'harmony' as const };
const drums = { ...song.tracks[0], id: 'drums', name: 'Percussion', instrumentId: 'drum-kit', role: 'drums' as const };
const bars = [{ index: 0, start: 0, end: 2, bpm: 120, beatsPerBar: 4, regionId: 'a' }, { index: 1, start: 2, end: 6, bpm: 60, beatsPerBar: 4, regionId: 'b' }];
const note = (trackId: string, midi: number, time: number, dur: number) => ({ trackId, midi, time, dur, vel: 96, bar: 0, gestureCode: codeForGesture(trackId === 'guitar' ? 'rasgueado' : 'accent'), hitFunctionCode: 0, accent: 0.8 });
const fixture: ExportContext = {
  song: { title: 'Tempo & ties', timeSignature: '4/4', tracks: [bass, guitar, drums], regions: [{ id: 'a', name: 'Intro' }, { id: 'b', name: 'Slower' }] },
  performance: { notes: [note('bass', 40, 0, 0.5), note('bass', 43, 1.75, 1.25), note('guitar', 64, 0, 1), note('guitar', 59, 0, 1), note('guitar', 55, 0, 1), note('guitar', 65, 2, 1), note('drums', 36, 0, 0.25)], ccs: [{ time: 0, trackId: 'bass', cc: 11, value: 100 }], bars, duration: 6, tail: 1, blends: {} },
  selectedTrackIds: ['bass', 'guitar', 'drums'],
};
assert.equal(tickAt(fixture.performance, 3), 4800);
const onlyBass = { ...fixture, selectedTrackIds: ['bass'] };
const json = JSON.parse(await (await createExport(onlyBass, 'json')).blob.text());
assert.deepEqual(json.tracks.map((t: { id: string }) => t.id), ['bass']);
assert.equal(json.notes.length, 2);
assert.ok(!musicXml(onlyBass).includes('<part-name>Percussion</part-name>'));
assert.ok(musicXml(fixture).includes('<unpitched>'));
assert.ok(musicXml(onlyBass).includes('<tied type="stop"/>'));
assert.ok(musicXml({ ...fixture, selectedTrackIds: ['guitar'] }, true).includes('<sign>TAB</sign>'));
assert.throws(() => gp5Bytes(fixture), /guitar and bass/);
assert.throws(() => midiBytes({ ...fixture, selectedTrackIds: [] }), /Select/);
const abort = new AbortController(); abort.abort();
await assert.rejects(createExport(fixture, 'midi', undefined, abort.signal), { name: 'AbortError' });
const cache = new PCMStemCache(32);
const stem = { left: new Float32Array(4), right: new Float32Array(4), startSample: 0 };
cache.set('a', stem); cache.set('b', stem);
assert.equal(cache.size, 1); assert.equal(cache.byteLength, 32); assert.equal(cache.has('a'), false);
cache.clear(); assert.equal(cache.byteLength, 0);
const pcm = new Float32Array(4410).map((_, i) => Math.sin(i * 440 * 2 * Math.PI / 44100) * 0.2);
const mp3 = await encodeMp3PCM(pcm, pcm, 44100);
assert.ok(mp3.size > 1000); assert.equal(mp3.type, 'audio/mpeg');
const loud = new Float32Array([2.5, -2, 0.25]);
const floatWav = new DataView(await wavBlob(loud, loud, 44100, true).arrayBuffer());
assert.equal(floatWav.getUint16(20, true), 3);
assert.equal(floatWav.getUint16(34, true), 32);
assert.equal(floatWav.getFloat32(56, true), 2.5);
assert.equal(floatWav.getUint32(44, true), 3); // fact chunk frame count
const manyTracks = Array.from({ length: 15 }, (_, i) => ({ ...guitar, id: `melodic-${i}` }));
assert.ok(midiBytes({ ...fixture, song: { ...fixture.song, tracks: manyTracks }, selectedTrackIds: manyTracks.map(t => t.id) }).length > 100);
const tooMany = [...manyTracks, { ...guitar, id: 'sixteenth' }];
assert.throws(() => midiBytes({ ...fixture, song: { ...fixture.song, tracks: tooMany }, selectedTrackIds: tooMany.map(t => t.id) }), /15 melodic/);
const path = '/tmp/mix-export-fixtures'; await mkdir(path, { recursive: true });
await writeFile(`${path}/song.mid`, midiBytes(fixture));
await writeFile(`${path}/bass.mid`, midiBytes(onlyBass));
await writeFile(`${path}/strings.gp5`, gp5Bytes({ ...fixture, selectedTrackIds: ['bass', 'guitar'] }));
await writeFile(`${path}/score.musicxml`, musicXml(fixture));
await writeFile(`${path}/tab.musicxml`, musicXml({ ...fixture, selectedTrackIds: ['bass', 'guitar'] }, true));
await writeFile(`${path}/score.mxl`, new Uint8Array(await (await createExport(fixture, 'mxl')).blob.arrayBuffer()));
await writeFile(`${path}/tone.mp3`, new Uint8Array(await mp3.arrayBuffer()));
console.log('Export tests passed. Independent-parser fixtures written to', path);
