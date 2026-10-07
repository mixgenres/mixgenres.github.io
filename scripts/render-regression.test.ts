import test from 'node:test';
import assert from 'node:assert/strict';
import { AudioRenderer as OfflineRenderer } from '../src/engine/playback/offlineRenderer';
import { el } from '@elemaudio/core';
import { renderMixBuses } from '../src/engine/playback/elementaryEngine';
import { renderPerformanceToMp3, renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { createNoteTailResolver } from '../src/engine/playback/noteLifetime';
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
  const tail = createNoteTailResolver(perf, { trackInstruments: new Map() });
  assert.ok(seconds >= .1 + tail(perf.notes[0]) - .001, 'the shared acoustic model release remains intact');
  let peak = 0;
  for (let i = 44; i + 1 < bytes.byteLength; i += 2) peak = Math.max(peak, Math.abs(data.getInt16(i, true)));
  assert.ok(peak > 10, 'audible waveform');
});

test('isolated playback windows allocate only the selected instrument lifetime', async () => {
  const perf = performanceOf([{ ...note(), trackId: 'lead' }, { ...note(), trackId: 'piano' }]);
  const audio = await renderPerformanceToAudio(perf, { selectedTrackIds: ['lead'], renderWindow: { start: 0, end: .4 },
    trackInstruments: new Map([['lead', 'bandoneon'], ['piano', 'piano']]), worldId: 'tango', rawStem: true });
  const tail = createNoteTailResolver(perf, { trackInstruments: new Map([['lead', 'bandoneon'], ['piano', 'piano']]), worldId: 'tango' });
  const expected = Math.max(1, .4, .1 + tail(perf.notes[0]));
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

test('window requests render complete section PCM and cannot poison the section cache', async () => {
  const { renderPlaybackPart } = await import('../src/engine/playback/renderPlaybackPart');
  const { clearPreparedAudio } = await import('../src/engine/cache/preparedAudio');
  const perf: Performance = { ...performanceOf([
    { ...note(.1), dur: .2 }, { ...note(1.1, 67), dur: .2, bar: 1 },
  ]), duration: 2, tail: .3, bars: [
    { index: 0, start: 0, end: 1, bpm: 240, beatsPerBar: 4, regionId: 'a' },
    { index: 1, start: 1, end: 2, bpm: 240, beatsPerBar: 4, regionId: 'a' },
  ] };
  const options = { selectedTrackIds: ['keys'], trackInstruments: new Map([['keys', 'organ']]), rawStem: true, sectionStems: true };
  clearPreparedAudio();
  const whole = await renderPlaybackPart(perf, options);
  clearPreparedAudio();
  const windowed = await renderPlaybackPart(perf, { ...options, renderWindow: { start: .65, end: 2.2 } });
  assert.ok(windowed.sections!.length > 0);
  for (const section of windowed.sections!) {
    const expected = whole.sections!.find(candidate => candidate.startSample === section.startSample)!;
    assert.deepEqual(section.left, expected.left, 'physical PCM is independent of the requesting song window');
    assert.deepEqual(section.right, expected.right);
  }
  const replay = await renderPlaybackPart(perf, options);
  for (let i = 0; i < whole.sections!.length; i++) {
    assert.deepEqual(replay.sections![i].left, whole.sections![i].left, 'a cold seek must not cache truncated or silent sections');
  }
});

test('a window containing only a release tail retains its prepared track and does not re-attack it', async () => {
  const { renderPreparedMix } = await import('../src/engine/playback/renderSongMix');
  const { createNoteTailResolver } = await import('../src/engine/playback/noteLifetime');
  const { clearPreparedAudio } = await import('../src/engine/cache/preparedAudio');
  clearPreparedAudio();
  const perf: Performance = { ...performanceOf([{ ...note(), dur: .2 }]), worldId: undefined,
    duration: 4, tail: 0, bars: [{ index: 0, start: 0, end: 4, bpm: 60, beatsPerBar: 4, regionId: 'a' }] };
  const options = { trackInstruments: new Map([['keys', 'organ']]), mixState: { volume: { keys: .1 } }, bypassWebAudioMaster: true };
  const tail = createNoteTailResolver(perf, options)(perf.notes[0]);
  assert.ok(tail > .1);
  const window = { start: .21, end: .28 };
  const whole = await renderPreparedMix(perf, options, new AbortController().signal);
  const windowed = await renderPreparedMix(perf, { ...options, renderWindow: window }, new AbortController().signal);
  const from = Math.floor(window.start * 44100), frames = Math.floor((window.end - window.start) * 44100);
  assert.ok(windowed.left.subarray(0, frames).some(sample => Math.abs(sample) > 1e-6), 'the tail cannot become silent when its note-off precedes the window');
  assert.deepEqual(windowed.left.subarray(0, frames), whole.left.subarray(from, from + frames));
});


test('bounded playback renders exact physical prefixes without shortening exported releases', async () => {
  const { renderPlaybackPart } = await import('../src/engine/playback/renderPlaybackPart');
  const { clearPreparedAudio, preparedAudioStats } = await import('../src/engine/cache/preparedAudio');
  const perf: Performance = { ...performanceOf([
    { ...note(.1), dur: 1.4 }, { ...note(1.2, 67), dur: .2, bar: 1 },
  ]), duration: 2, tail: .3, ccs: [{trackId:'keys',time:.8,cc:11,value:60}], bars: [
    { index: 0, start: 0, end: 1, bpm: 240, beatsPerBar: 4, regionId: 'a' },
    { index: 1, start: 1, end: 2, bpm: 240, beatsPerBar: 4, regionId: 'b' },
  ] };
  const options = { selectedTrackIds: ['keys'], trackInstruments: new Map([['keys', 'organ']]), rawStem: true, sectionStems: true };
  clearPreparedAudio();
  const prefix = await renderPlaybackPart(perf, { ...options, boundedStems: true, renderWindow: {start:0,end:.9} });
  assert.equal(prefix.sections!.length, 1);
  assert.equal(prefix.sections![0].left.length, Math.ceil(.9*44100));
  const cold = preparedAudioStats();
  const full = await renderPlaybackPart(perf, options);
  assert.ok(preparedAudioStats().misses > cold.misses, 'a prefix cannot satisfy a complete export');
  assert.ok(full.sections![0].left.length > prefix.sections![0].left.length, 'complete hold and release remain available');
  assert.deepEqual(prefix.sections![0].left, full.sections![0].left.subarray(0,prefix.sections![0].left.length));
  assert.deepEqual(prefix.sections![0].right, full.sections![0].right.subarray(0,prefix.sections![0].right.length));
  const before = preparedAudioStats();
  const later = await renderPlaybackPart(perf, { ...options, boundedStems: true, renderWindow:{start:1.05,end:1.4} });
  assert.equal(preparedAudioStats().misses, before.misses, 'completed sections satisfy later playback windows without DSP');
  assert.ok(later.sections!.some(section => section.startSample===0), 'incoming sustain keeps its original attack');
});


test('worker rendering without UI pauses produces identical PCM', async () => {
  const perf = performanceOf([{ ...note(), dur: .25 }, note(.3, 67)]);
  const options = { trackInstruments: new Map([['keys','organ']]), rawStem: true, cacheDSPStem: false };
  const cooperative = await renderPerformanceToAudio(perf, { ...options, yieldForUI: true });
  const worker = await renderPerformanceToAudio(perf, { ...options, yieldForUI: false });
  assert.deepEqual(worker.left, cooperative.left);
  assert.deepEqual(worker.right, cooperative.right);
});

test('cropped raw sections retain exact DSP state without storing the preceding PCM', async () => {
  const perf = {...performanceOf([{...note(.01),dur:4.5}]),duration:6,
    ccs:[{trackId:'keys',time:1.1,cc:11,value:60},{trackId:'keys',time:3.3,cc:11,value:95}]};
  const options={trackInstruments:new Map([['keys','organ']]),rawStem:true,cacheDSPStem:false,maxDurationSeconds:5.4,yieldForUI:false};
  const full=await renderPerformanceToAudio(perf,options);
  const from=Math.floor(3.113*44100);
  const cropped=await renderPerformanceToAudio(perf,{...options,rawOutputStartSample:from});
  assert.equal(cropped.left.length,full.left.length-from);
  assert.deepEqual(cropped.left,full.left.subarray(from),'discarding PCM must not restart a held note or shift DSP blocks');
  assert.deepEqual(cropped.right,full.right.subarray(from));
  const {renderPlaybackPart}=await import('../src/engine/playback/renderPlaybackPart');
  const {clearPreparedAudio}=await import('../src/engine/cache/preparedAudio');
  clearPreparedAudio();
  const sectionPerf={...perf,bars:[{index:0,start:0,end:6,bpm:40,beatsPerBar:4,regionId:'hold'}]};
  const sections=await renderPlaybackPart(sectionPerf,{...options,selectedTrackIds:['keys'],boundedStems:true,sectionStems:true,
    renderWindow:{start:from/44100,end:5.4}});
  assert.equal(sections.sections![0].startSample,from);
  assert.deepEqual(sections.sections![0].left,cropped.left);
});


test('independent renders reproduce shared PCM without allocating native DSP runtimes', async () => {
  const { offlineRendererStats } = await import('../src/engine/playback/offlineRenderer');
  const perf = performanceOf([note()]);
  const options = {trackInstruments:new Map([['keys','organ']]),rawStem:true,cacheDSPStem:false,maxDurationSeconds:.2,yieldForUI:false};
  const first = await renderPerformanceToAudio(perf,options), baseline = offlineRendererStats();
  for(let i=0;i<5;i++) {
    const repeat=await renderPerformanceToAudio(perf,options);
    assert.ok(repeat.left.every((sample,index) => sample === first.left[index]), 'fresh public renderers preserve the waveform');
    const stats=offlineRendererStats();
    assert.equal(stats.initializedRuntimes,baseline.initializedRuntimes,'shared compact synthesis needs no per-job native runtime');
    assert.equal(stats.activeRenders,0,'no render remains acquired');
  }
});

test('lookahead reuses a covering physical window without restarting a sustain or growing a second cache', async () => {
  const { renderPlaybackPart } = await import('../src/engine/playback/renderPlaybackPart');
  const { clearPreparedAudio, preparedAudioStats } = await import('../src/engine/cache/preparedAudio');
  const perf = { ...performanceOf([{ ...note(.01), dur: 5.5 }]), duration: 7, tail: 0,
    bars: [{ index: 0, start: 0, end: 7, bpm: 34, beatsPerBar: 4, regionId: 'hold' }] };
  const options = { trackInstruments: new Map([['keys', 'organ']]), selectedTrackIds: ['keys'], rawStem: true,
    sectionStems: true, boundedStems: true, stemLookaheadSeconds: 2, renderPriority: () => 1 };
  clearPreparedAudio();
  const first = await renderPlaybackPart(perf, { ...options, renderWindow: { start: .5, end: 2 } });
  const cached = preparedAudioStats();
  const later = await renderPlaybackPart(perf, { ...options, renderWindow: { start: 2, end: 3.5 } });
  assert.equal(preparedAudioStats().misses, cached.misses, 'covered audio needs no more DSP');
  assert.equal(preparedAudioStats().bytes, cached.bytes, 'window reuse retains no duplicate PCM');
  assert.equal(later.sections![0].left, first.sections![0].left, 'the cached sustain keeps its original DSP state');
  assert.equal(later.sections![0].startSample, first.sections![0].startSample);
  const full = await renderPlaybackPart(perf, { ...options, boundedStems: false });
  const section = first.sections![0], from = section.startSample;
  assert.deepEqual(section.left, full.sections![0].left.subarray(from, from + section.left.length));
  assert.deepEqual(section.right, full.sections![0].right.subarray(from, from + section.right.length));
});
