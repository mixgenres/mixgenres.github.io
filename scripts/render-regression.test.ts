import test from 'node:test';
import assert from 'node:assert/strict';
import OfflineRenderer from '@elemaudio/offline-renderer';
import { el } from '@elemaudio/core';
import { renderMixBuses } from '../src/engine/playback/elementaryEngine';
import { renderPerformanceToMp3, renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
const note = (time = 0, midi = 60): PerfNote => ({ time, dur: 0.1, midi, vel: 80, trackId: 'keys', bar: 0,
  gestureCode: 0, hitFunctionCode: 0, accent: 0.8 });
const performanceOf = (notes: PerfNote[]): Performance => ({ notes, ccs: [], bars: [], duration: 0.4, tail: 0.1, blends: {},
  worldId: 'jazz', trackInfo: { keys: { instrumentId: 'organ', role: 'harmony' } } });

test('raw bus rendering keeps all six output channels separate', async () => {
  const renderer = new OfflineRenderer();
  await renderer.initialize({ sampleRate: 44100, numInputChannels: 0, numOutputChannels: 6, blockSize: 64 });
  try {
    const signals = [ ['drums', 'drums', 0.1], ['sub', 'bass', 0.2], ['inst', 'piano', 0.3] ] as const;
    const buses = renderMixBuses(signals.map(([category, instrumentId, value]) => ({ category, instrumentId, left: el.const({ value }), right: el.const({ value: -value }) })));
    await renderer.render(buses.drums.left, buses.drums.right, buses.sub.left, buses.sub.right, buses.inst.left, buses.inst.right);
    const outputs = Array.from({ length: 6 }, () => new Float32Array(64));
    for (let block = 0; block < 32; block++) renderer.process([], outputs);
    [0.1, -0.1, 0.2, -0.2, 0.3, -0.3].forEach((expected, i) => assert.ok(Math.abs(outputs[i][63] - expected) < 1e-6, `channel ${i}: ${outputs[i][63]} expected ${expected}`));
  } finally { renderer.reset(); }
});

test('dense offline WAV renders all voices as finite, audible PCM and preserves its tail', async () => {
  const perf = performanceOf(Array.from({ length: 20 }, (_, i) => note(0, 48 + i)));
  let invalidSamples = 0;
  const blob = await renderPerformanceToMp3(perf, { trackInstruments: new Map(), format: 'wav', rawStem: true,
    onDiagnostics: event => { invalidSamples += event.metrics.nonFiniteSamples; } });
  assert.equal(invalidSamples, 0);
  const bytes = await blob.arrayBuffer();
  const data = new DataView(bytes);
  assert.equal(String.fromCharCode(...new Uint8Array(bytes, 0, 4)), 'RIFF');
  const seconds = (bytes.byteLength - 44) / (44100 * 2 * 2);
  assert.ok(seconds >= 0.1 + voiceTailSeconds(resolveTrackSound('organ', 'jazz', '', 'harmony')) - 0.001);
  let peak = 0;
  for (let i = 44; i + 1 < bytes.byteLength; i += 2) peak = Math.max(peak, Math.abs(data.getInt16(i, true)));
  assert.ok(peak > 10, 'audible waveform');
});

test('isolated playback windows allocate only the selected instrument lifetime', async () => {
  const perf = performanceOf([{ ...note(), trackId: 'lead' }, { ...note(), trackId: 'piano' }]);
  const audio = await renderPerformanceToAudio(perf, { selectedTrackIds: ['lead'], renderWindow: { start: 0, end: .4 },
    trackInstruments: new Map([['lead', 'bandoneon'], ['piano', 'piano']]), worldId: 'tango', rawStem: true });
  const expected = Math.max(1, .4, .1 + voiceTailSeconds(resolveTrackSound('bandoneon', 'tango')));
  assert.ok(Math.abs(audio.left.length / audio.sampleRate - expected) < 1 / audio.sampleRate,
    'an unselected piano must not add its long ring to a bandoneon clip');
});

test('piano release budgeting follows the played articulation', () => {
  const params = resolveTrackSound('piano', 'tango');
  const voice = { id: 'piano-tail', note: 60, velocity: .7, gate: 0 };
  const sustained = voiceTailSeconds(params, { ...voice, action: 'tone' });
  const marcato = voiceTailSeconds(params, { ...voice, action: 'marcato' });
  const muted = voiceTailSeconds(params, { ...voice, action: 'chapa' });
  assert.ok(sustained > marcato, 'dry strikes do not inherit the sustained string lifetime');
  assert.ok(marcato >= muted, 'a damped strike remains shorter than a marcato');
  assert.ok(muted >= .12, 'the physical release remains intact');
});

test('background song mixes preserve export levels and apply the ensemble processing once', async () => {
  const { renderSongMix, songMixOptions } = await import('../src/engine/playback/renderSongMix');
  const { clearStemCache } = await import('../src/engine/cache/stemCache');
  const { clearPreparedAudio, preparedAudioStats, preparedMixStats } = await import('../src/engine/cache/preparedAudio');
  const { makeSheet } = await import('../src/engine/sheet/sheet');
  const song = makeSheet('tango');
  song.tracks = [
    { ...song.tracks[0], id: 'keys', instrumentId: 'organ', role: 'harmony', volume: .3, pan: .25, muted: false, solo: false },
    { ...song.tracks[0], id: 'lead', instrumentId: 'bandoneon', role: 'lead', volume: .8, pan: .7, muted: false, solo: false },
  ];
  const perf = { ...performanceOf([note(), { ...note(.2, 67), trackId: 'lead' }]), worldId: 'tango',
    trackInfo: { keys: { instrumentId: 'organ', role: 'harmony' }, lead: { instrumentId: 'bandoneon', role: 'lead' } } };
  clearStemCache();
  clearPreparedAudio();
  const expected = await renderPerformanceToAudio(perf, songMixOptions(song));
  const actual = await renderSongMix(perf, song, new AbortController().signal);
  assert.equal(actual.sampleRate, expected.sampleRate);
  assert.equal(actual.left.length, expected.left.length);
  let difference = 0;
  for (let i = 0; i < actual.left.length; i++) difference = Math.max(difference,
    Math.abs(actual.left[i] - expected.left[i]), Math.abs(actual.right[i] - expected.right[i]));
  assert.ok(difference < 1e-6, `prepared stems must reproduce the shared export mix; max difference ${difference}`);
  const coldDSP = preparedAudioStats(), coldMix = preparedMixStats();
  const replay = await renderSongMix(perf, song, new AbortController().signal);
  assert.equal(replay.left, actual.left, 'replay reuses the finished PCM instead of mastering again');
  assert.equal(preparedMixStats().hits, coldMix.hits + 1);
  assert.equal(preparedAudioStats().misses, coldDSP.misses);
});

test('section DSP PCM reuses unchanged parts and preserves sustained notes and controller carry across boundaries', async () => {
  const { planDSPSections, assembleDSPSections } = await import('../src/engine/playback/dspSections');
  const { renderPlaybackPart } = await import('../src/engine/playback/renderPlaybackPart');
  const { clearPreparedAudio, preparedAudioStats } = await import('../src/engine/cache/preparedAudio');
  clearPreparedAudio();
  const perf: Performance = { ...performanceOf([
    { ...note(0,60), dur:1.5, bar:0 }, { ...note(1.1,67), dur:.2, bar:1 },
  ]), duration:2, tail:.3, ccs:[{trackId:'keys',time:0,cc:11,value:90},{trackId:'keys',time:1.2,cc:11,value:60}],
    bars:[{index:0,start:0,end:1,bpm:240,beatsPerBar:4,regionId:'a'},
      {index:1,start:1,end:2,bpm:240,beatsPerBar:4,regionId:'b'}] };
  const options={selectedTrackIds:['keys'],trackInstruments:new Map([['keys','organ']]),rawStem:true};
  const sections=planDSPSections(perf,options);
  assert.equal(sections.length,2);
  assert.equal(sections[0].performance.notes[0].dur,1.5,'a hold continues through the next section, without a second attack');
  assert.equal(sections[1].performance.notes.length,1,'the incoming hold is not synthesized twice');
  assert.ok(sections[0].performance.ccs.some(c => c.time===1.2),'later expression changes still affect the outgoing hold');
  assert.equal(sections[1].performance.ccs[0].value,90,'controller state is carried into the new section');
  const first=await renderPlaybackPart(perf,options), cold=preparedAudioStats();
  assert.equal(cold.size,2); assert.equal(cold.pending,0);
  const same=await renderPlaybackPart(perf,{...options,mixState:{volume:{keys:.2},pan:{keys:.1}}});
  const warm=preparedAudioStats();
  assert.equal(warm.misses,cold.misses); assert.equal(warm.hits-cold.hits,2);
  assert.deepEqual(same.left,first.left,'mixer edits leave physical audio unchanged');
  const chunked = await renderPlaybackPart(perf, { ...options, sectionStems: true });
  assert.equal(chunked.left.length, 0, 'the mixer does not allocate a duplicate whole-instrument buffer');
  assert.equal(chunked.sections?.length, 2);
  const assembled = assembleDSPSections(perf, sections,
    chunked.sections!.map(chunk => ({ ...chunk, sampleRate: chunked.sampleRate })));
  assert.deepEqual(assembled.left, first.left, 'direct section sources retain the complete overlapping waveform');
  assert.deepEqual(assembled.right, first.right);
  const chunkStats = preparedAudioStats();
  assert.equal(chunkStats.misses, warm.misses, 'changing the consumer buffer layout never reruns DSP');
  const changed={...perf,notes:perf.notes.map((n,i) => i ? {...n,midi:69} : n)};
  const changedSections=planDSPSections(changed,options);
  assert.equal(sections[0].key,changedSections[0].key); assert.notEqual(sections[1].key,changedSections[1].key);
  await renderPlaybackPart(changed,options);
  const edited=preparedAudioStats();
  assert.equal(edited.misses-chunkStats.misses,1); assert.equal(edited.hits-chunkStats.hits,1);
  assert.ok(first.left.slice(44100,Math.floor(1.1*44100)).some(v => Math.abs(v)>.0001),'the outgoing hold remains audible after the boundary');
});
