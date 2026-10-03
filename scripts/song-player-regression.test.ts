import test from 'node:test';
import assert from 'node:assert/strict';
import { RenderQueue } from '../src/engine/playback/renderQueue';
import { SongPlayer } from '../src/engine/playback/songPlayer';

test('render queue promotes currently needed work and removes cancelled queued renders', async () => {
  const queue = new RenderQueue();
  const order: string[] = [];
  const cancelled = new AbortController();
  const background = queue.enqueue(async () => { order.push('background'); }, () => 1);
  const exportJob = queue.enqueue(async () => { order.push('export'); });
  const abortJob = queue.enqueue(async () => { order.push('cancelled'); }, () => 0, cancelled.signal);
  const rejected = assert.rejects(abortJob, { name: 'AbortError' });
  cancelled.abort();
  const playback = queue.enqueue(async () => { order.push('playback'); }, () => 0);
  await Promise.all([background, exportJob, playback, rejected]);
  assert.deepEqual(order, ['playback', 'background', 'export']);
});

test('unfinished playback clips schedule once and retain the requested opening position', async () => {
  const player = new SongPlayer(() => {}, () => {}) as any;
  const starts: Array<{ when: number; offset: number }> = [];
  let resolveBuffer!: (buffer: any) => void;
  const buffer = new Promise(resolve => { resolveBuffer = resolve; });
  let renders = 0;
  player.ctx = { currentTime: 0, createBufferSource: () => ({
    connect() {}, disconnect() {}, start(when: number, offset: number) { starts.push({ when, offset }); },
  }) };
  player.output = {};
  player.song = { tracks: [{ id: 'lead', role: 'lead' }] };
  player.state.performance = { duration: 4, tail: 0, bars: [{ start: 0, end: 4 }],
    notes: [{ time: 0, dur: 1, trackId: 'lead' }] };
  player.abort = new AbortController();
  player.wantsPlayback = true;
  player.ensureSegment = () => { renders++; return buffer; };
  for (let i = 0; i < 20; i++) {
    player.ctx.currentTime = i * 0.2;
    player.scheduleAhead();
  }
  assert.equal(renders, 2, 'one pending render subscription for each loop occurrence');
  assert.equal(player.position(), 0, 'rendering time does not consume the opening');
  resolveBuffer({ duration: 4.25 });
  await buffer;
  await Promise.resolve();
  assert.equal(starts.length, 2, 'each loop clip starts once');
  assert.equal(starts[0].offset, 0);
  assert.ok(Math.abs(starts[0].when - 3.82) < 1e-6);
});

test('a late mid-song segment resumes from its boundary without losing playback intent', async () => {
  const player = new SongPlayer(() => {}, () => {}) as any;
  const starts: Array<{ part: string; offset: number }> = [];
  let stoppedSources = 0;
  let finishNext!: (buffer: any) => void;
  const next = new Promise(resolve => { finishNext = resolve; });
  player.ctx = { currentTime: 0, createBufferSource: () => ({
    buffer: undefined as any, connect() {}, disconnect() {}, stop() { stoppedSources++; },
    start(_when: number, offset: number) { starts.push({ part: this.buffer.part, offset }); },
  }) };
  player.output = {};
  player.song = { tracks: [{ id: 'lead', role: 'lead' }] };
  player.state.performance = { duration: 4, tail: 0,
    bars: [0, 1, 2, 3].map(start => ({ start, end: start + 1 })),
    notes: [{ time: 0, dur: 4, trackId: 'lead' }] };
  player.abort = new AbortController();
  player.wantsPlayback = true;
  player.ensureSegment = (_p: unknown, index: number) => index === 0
    ? Promise.resolve({ duration: 2.2, part: 'opening' }) : next;
  player.scheduleAhead();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(player.scheduledThrough, 2);
  player.ctx.currentTime = 2.3;
  player.advancePlayback();
  assert.equal(player.position(), 2);
  assert.equal(player.wantsPlayback, true);
  assert.equal(stoppedSources, 0, 'sounding releases finish naturally while the next clip renders');
  assert.equal(player.transportStarted, false);
  finishNext({ duration: 2.2, part: 'next' });
  await new Promise(resolve => setImmediate(resolve));
  player.scheduleAhead();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(player.transportStarted, true);
  assert.deepEqual(starts.find(start => start.part === 'next'), { part: 'next', offset: 0 });
});

test('playback workers prioritize parts and stop superseded work', async () => {
  const { renderPlaybackPart } = await import('../src/engine/playback/renderPlaybackPart');
  const originalWorker = globalThis.Worker;
  const workers: FakeWorker[] = [];
  class FakeWorker {
    onmessage: ((event: any) => void) | null = null;
    onerror: ((event: any) => void) | null = null;
    onmessageerror: (() => void) | null = null;
    messages: any[] = [];
    terminated = false;
    constructor() { workers.push(this); }
    postMessage(data: any) { this.messages.push(data); }
    terminate() { this.terminated = true; }
  }
  globalThis.Worker = FakeWorker as any;
  try {
    const abort = new AbortController();
    const perf = { duration: 1, notes: [], ccs: [], bars: [], blends: {} } as any;
    const opts = (id: string, priority: number) => ({ trackInstruments: new Map([[id, 'piano']]), renderPriority: () => priority });
    const background = renderPlaybackPart(perf, opts('future', 1));
    const cancelled = renderPlaybackPart(perf, { ...opts('old', 0), signal: abort.signal });
    const rejected = assert.rejects(cancelled, { name: 'AbortError' });
    const immediate = renderPlaybackPart(perf, opts('current', -1));
    await new Promise(resolve => setImmediate(resolve));
    assert.ok(workers.length <= 3, 'bounded parallel render pool');
    assert.equal([...workers[0].messages[0].options.trackInstruments.keys()][0], 'current');
    assert.equal(workers[0].messages[0].options.renderPriority, undefined, 'functions are never cloned');
    abort.abort();
    await rejected;
    await new Promise(resolve => setImmediate(resolve));
    const active = workers.filter(worker => !worker.terminated);
    for (const worker of active) worker.onmessage?.({ data: { audio: { sampleRate: 44100, left: new Float32Array(1), right: new Float32Array(1) } } });
    // A single-core host may dispatch its remaining job only after completion.
    await new Promise(resolve => setImmediate(resolve));
    for (const worker of workers.filter(worker => !worker.terminated)) worker.onmessage?.({ data: { audio: { sampleRate: 44100, left: new Float32Array(1), right: new Float32Array(1) } } });
    await Promise.all([background, immediate]);
  } finally { globalThis.Worker = originalWorker; }
});

function fakePlaybackContext() {
  const starts: Array<{ buffer: any; when: number; offset: number; loop: boolean }> = [];
  const gain = () => ({ gain: { value: 1, setValueAtTime() {}, linearRampToValueAtTime() {}, cancelScheduledValues() {} },
    connect() {}, disconnect() {} });
  const ctx = { currentTime: 0, state: 'running', createGain: gain, createBufferSource: () => ({
    buffer: undefined as any, loop: false, connect() {}, disconnect() {}, stop() {},
    start(when: number, offset: number) { starts.push({ buffer: this.buffer, when, offset, loop: this.loop }); },
  }) };
  return { ctx, starts, output: gain() };
}

test('the complete mix plays as one looping source and keeps the play position', () => {
  const fake = fakePlaybackContext();
  const player = new SongPlayer(() => {}, () => {}) as any;
  player.ctx = fake.ctx; player.output = fake.output;
  player.state.performance = { duration: 20, tail: 0 };
  player.fullBuffer = { duration: 22 };
  player.wantsPlayback = true;
  player.offset = 7;
  player.startFullMix();
  assert.equal(fake.starts.length, 1);
  assert.equal(fake.starts[0].buffer, player.fullBuffer);
  assert.equal(fake.starts[0].loop, true);
  assert.equal(fake.starts[0].offset, 7);
  fake.ctx.currentTime = 3.02;
  assert.ok(Math.abs(player.position() - 10) < 1e-6);
  player.scheduleAhead();
  assert.equal(fake.starts.length, 1, 'no independent instrument sources are scheduled');
});

test('an unchanged song warms the entire mix without waiting for Play; titles retain it', async () => {
  const fake = fakePlaybackContext();
  const player = new SongPlayer(() => {}, () => {}) as any;
  const song = { title: 'Song', worldId: 'tango', tracks: [{ id: 'keys', instrumentId: 'piano', role: 'harmony', volume: .5 }] } as any;
  const perf = { duration: 4, tail: 0, bars: [{ start: 0, end: 4 }], notes: [] };
  player.ctx = fake.ctx; player.output = fake.output; player.state.performance = perf;
  player.compositionKey = JSON.stringify({ ...song, title: '', tracks: song.tracks.map(({ volume: _volume, ...track }: any) => track) });
  let backgroundRenders = 0;
  player.prepareOpening = async () => {};
  player.prepareWholeSong = () => { backgroundRenders++; };
  player.configure(song);
  await player.compiling;
  await Promise.resolve();
  assert.equal(player.wantsPlayback, false);
  assert.equal(backgroundRenders, 1);
  player.fullBuffer = { duration: 5 };
  const revision = player.revision;
  player.configure({ ...song, title: 'Renamed' });
  assert.equal(player.revision, revision);
  assert.ok(player.fullBuffer);
  player.configure({ ...song, tracks: [{ ...song.tracks[0], volume: .2 }] });
  assert.equal(player.fullBuffer, undefined, 'a fader change invalidates the baked mix');
  assert.equal(player.state.performance, perf, 'fader changes reuse the musical calculation');
  await player.compiling;
});
