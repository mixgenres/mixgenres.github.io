import assert from 'node:assert/strict';
import { densePlaybackFixture } from './lib/densePlaybackFixture';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import { planDSPSectionsWithTail } from '../src/engine/playback/dspSectionPlan';
import { preparedDSPSections } from '../src/engine/playback/preparedDSPSections';
import { preparedNoteLifetimes } from '../src/engine/playback/preparedNoteLifetimes';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import type { DSPSection } from '../src/engine/playback/dspSectionPlan';

// Isolate JS preparation/clone payload costs from synthesis and native mixing.
// Run: node --import tsx scripts/benchmark-playback-preparation.ts
for (const players of [12, 15, 30] as const) {
const song = densePlaybackFixture(players);
const performance = arrangeBand(song), options = songMixOptions(song);
const tail = await preparedNoteLifetimes(performance, options);
const musicalSnapshot = JSON.stringify(performance);
async function run(cached: boolean) {
  let workerPayloadBytes = 0, priorPayloadBytes = 0;
  const payloads: DSPSection[] = [];
  const keys: string[] = [], started = globalThis.performance.now();
  for (let window = 0; window < 20; window++) for (const id of options.trackInstruments.keys()) {
    const request = { ...options, selectedTrackIds: [id], renderWindow: { start: window * 4, end: window * 4 + 4.5 } };
    const sections = cached ? await preparedDSPSections(performance, request)
      : planDSPSectionsWithTail(performance, request, tail);
    for (const section of sections) {
      keys.push(section.key); payloads.push(section);
    }
  }
  const milliseconds = Number((globalThis.performance.now() - started).toFixed(2));
  for (const section of payloads) {
    workerPayloadBytes += JSON.stringify(section.performance).length;
    // Model the previous full-song spread in each worker's section payload.
    priorPayloadBytes += JSON.stringify({ ...section.performance, pipeline: performance.pipeline,
      phrases: performance.phrases, blends: performance.blends }).length;
  }
  return { milliseconds, sectionCount: payloads.length, workerPayloadBytes, priorPayloadBytes, keys };
}
const uncached = await run(false), firstCached = await run(true), warmCached = await run(true);
assert.deepEqual(firstCached.keys, uncached.keys);
assert.deepEqual(warmCached.keys, uncached.keys);
assert.equal(JSON.stringify(performance), musicalSnapshot, 'preparation must not mutate musical data');
for (const [name, { keys: _keys, ...result }] of Object.entries({ uncached, firstCached, warmCached })) {
  console.log(JSON.stringify({ players, name, ...result }));
}
}
