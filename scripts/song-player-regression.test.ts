import test from 'node:test';
import assert from 'node:assert/strict';
import { RenderQueue } from '../src/engine/playback/renderQueue';
import { planPlaybackChunks, playbackChunkAt } from '../src/engine/playback/playbackChunks';
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


const flush = () => new Promise<void>(resolve => setImmediate(resolve));
function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}
function fakePlaybackContext() {
  const starts: Array<{ buffer: any; when: number; offset: number; duration: number }> = [];
  const gain = () => ({ gain: { value: 1, setValueAtTime() {}, linearRampToValueAtTime() {}, cancelScheduledValues() {} },
    connect() {}, disconnect() {} });
  const ctx = { currentTime: 0, sampleRate: 44100, state: 'running', createGain: gain,
    createBuffer: (_channels: number, frames: number, sampleRate: number) => {
      const data = [new Float32Array(frames), new Float32Array(frames)];
      return { duration: frames / sampleRate, length: frames, sampleRate, getChannelData: (index: number) => data[index] };
    }, createBufferSource: () => ({
      buffer: undefined as any, connect() {}, disconnect() {}, stop() {},
      start(when: number, offset: number, duration: number) { starts.push({ buffer: this.buffer, when, offset, duration }); },
    }) };
  return { ctx, starts, output: gain() };
}
function fixture(durations = [1, 2, 1]) {
  const fake = fakePlaybackContext(), player = new SongPlayer(() => {}, () => {}) as any;
  let cursor = 0;
  const bars = durations.map((duration, index) => {
    const start = cursor; cursor += duration;
    return { index, start, end: cursor, regionId: `region-${index}`, bpm: 120, beatsPerBar: 4 };
  });
  const performance = { duration: cursor, tail: 0, bars, ccs: [], blends: {}, notes: [{}] } as any;
  Object.assign(player, { ctx: fake.ctx, output: fake.output, ensureContext: () => {}, animate: () => {},
    song: { tracks: [] }, abort: new AbortController(), chunks: planPlaybackChunks(performance) });
  player.state.performance = performance;
  const buffers = durations.map(duration => fake.ctx.createBuffer(2, Math.round(duration * 44100), 44100));
  buffers.forEach((buffer, index) => player.chunkBuffers.set(index, buffer));
  return { ...fake, player, buffers, performance };
}

test('seek while a start is pending plays the newest position and discards the stale completion', async () => {
  const { player, buffers, starts } = fixture();
  const waiting = deferred<AudioBuffer>();
  const ensure = player.ensureChunk.bind(player);
  player.ensureChunk = (index: number, ...args: any[]) => index === 0 ? waiting.promise : ensure(index, ...args);
  try {
    const playing = player.play(); await flush();
    player.locate(2); await flush();
    assert.equal(starts[0].buffer, buffers[1]); assert.equal(starts[0].offset, 1);
    const scheduled = starts.length, generation = player.playbackGeneration;
    waiting.resolve(buffers[0] as unknown as AudioBuffer); await playing; await flush();
    assert.equal(player.playbackGeneration, generation, 'stale Play must not replace the newer seek');
    assert.equal(player.anchorPosition, 2);
    assert.ok(starts.slice(scheduled).every(start => start.when >= 2.005), 'only the future loop may schedule after the stale chunk completes');
  } finally { player.pause(); }
});

test('pause cancels a pending start and replay consumes ready chunks', async () => {
  const { player, buffers, starts } = fixture();
  const waiting = deferred<AudioBuffer>();
  const ensure = player.ensureChunk.bind(player);
  player.ensureChunk = () => waiting.promise;
  try {
    const playing = player.play(); await flush(); player.pause();
    waiting.resolve(buffers[0] as unknown as AudioBuffer); await playing; await flush();
    assert.equal(starts.length, 0, 'preparation must not override Pause');
    player.ensureChunk = ensure;
    await player.play(); await flush();
    assert.equal(starts[0].buffer, buffers[0]);
  } finally { player.pause(); }
});

test('locating during compilation retains the offset without requesting an unknown chunk', async () => {
  const { player, buffers, starts } = fixture();
  const chunks = player.chunks, compiling = deferred<void>();
  player.chunks = []; player.compiling = compiling.promise;
  const ensure = player.ensureChunk.bind(player);
  let requests = 0;
  player.ensureChunk = (...args: any[]) => { requests++; return ensure(...args); };
  try {
    const playing = player.play(); await flush(); player.locate(2);
    assert.equal(requests, 0); assert.equal(player.position(), 2);
    assert.notEqual(player.snapshot.status, 'error');
    player.chunks = chunks; compiling.resolve(); await playing; await flush();
    assert.equal(starts[0].buffer, buffers[1]); assert.equal(starts[0].offset, 1);
  } finally { player.pause(); }
});

test('prepared chunks schedule contiguously across a loop and preserve song time', async () => {
  const { player, starts, ctx, buffers } = fixture();
  try {
    await player.play(); await flush();
    assert.equal(starts.length, 3);
    for (let i = 1; i < starts.length; i++) assert.ok(Math.abs(starts[i].when - starts[i - 1].when - starts[i - 1].duration) < 1e-9);
    ctx.currentTime = 3.005;
    await player.pumpSchedule(player.playbackGeneration, player.revision);
    assert.equal(starts[3].buffer, buffers[0]);
    assert.ok(Math.abs(starts[3].when - 4.005) < 1e-9);
    assert.ok(Math.abs(player.position() - 3) < 1e-9);
  } finally { player.pause(); }
});

test('a missed deadline skips expired chunks without shifting the playhead or loop phase', async () => {
  const { player, starts, ctx, buffers } = fixture(Array(8).fill(1));
  try {
    await player.play(); await flush(); const before = starts.length;
    ctx.currentTime = 7.255;
    await player.pumpSchedule(player.playbackGeneration, player.revision);
    const resumed = starts[before];
    assert.equal(resumed.buffer, buffers[7]);
    assert.ok(Math.abs(resumed.offset - .253) < 1e-9);
    assert.ok(Math.abs(resumed.when + resumed.duration - 8.005) < 1e-9);
    const next = starts[before + 1];
    assert.equal(next.buffer, buffers[0]); assert.ok(Math.abs(next.when - 8.005) < 1e-9);
    ctx.currentTime = 1000.255; const count = starts.length;
    await player.pumpSchedule(player.playbackGeneration, player.revision);
    assert.equal(starts[count].buffer, buffers[0]);
    assert.ok(Math.abs(starts[count].offset - .253) < 1e-8);
    assert.ok(starts.length - count <= 5, 'catching up must not schedule every missed loop');
  } finally { player.pause(); }
});

test('a slow next-chunk render resumes at the correct sample of that chunk', async () => {
  const { player, starts, ctx, buffers } = fixture();
  const waiting = deferred<AudioBuffer>(), ensure = player.ensureChunk.bind(player);
  player.ensureChunk = (index: number, ...args: any[]) => index === 1 ? waiting.promise : ensure(index, ...args);
  try {
    await player.play(); await flush(); assert.equal(starts.length, 1);
    ctx.currentTime = 1.5; waiting.resolve(buffers[1] as unknown as AudioBuffer);
    await player.pump; await flush();
    assert.equal(starts[1].buffer, buffers[1]);
    assert.ok(Math.abs(starts[1].offset - .498) < 1e-9);
    assert.ok(Math.abs(starts[1].when + starts[1].duration - 3.005) < 1e-9);
  } finally { player.pause(); }
});

test('scheduling continues independently of animation frames and stops on Pause', async t => {
  const callbacks: Array<() => void> = [], cleared: unknown[] = [];
  t.mock.method(globalThis, 'setInterval', (callback: () => void) => { callbacks.push(callback); return 123 as any; });
  t.mock.method(globalThis, 'clearInterval', (id: unknown) => { cleared.push(id); });
  const { player, ctx, starts } = fixture(Array(8).fill(1));
  try {
    await player.play(); await flush(); const before = starts.length;
    assert.equal(callbacks.length, 1);
    ctx.currentTime = 3.5; callbacks[0](); await player.pump;
    assert.ok(starts.length > before, 'a timer, without UI frames, schedules the next horizon');
    player.pause(); assert.deepEqual(cleared, [123]);
    const after = starts.length; callbacks[0](); await flush();
    assert.equal(starts.length, after, 'a queued stale callback cannot restart playback');
  } finally { player.pause(); }
});

test('scheduler failures reach player state; superseded failures are ignored', async () => {
  const { player } = fixture();
  player.wantsPlayback = true; player.mixOutput = player.output;
  player.ensureChunk = () => Promise.reject(new Error('DSP failed'));
  player.requestPump(player.playbackGeneration, player.revision);
  await player.pump;
  assert.equal(player.snapshot.status, 'error'); assert.equal(player.snapshot.error, 'DSP failed');
  const stale = fixture(), waiting = deferred<AudioBuffer>();
  stale.player.wantsPlayback = true; stale.player.mixOutput = stale.player.output;
  stale.player.ensureChunk = () => waiting.promise;
  stale.player.requestPump(stale.player.playbackGeneration, stale.player.revision);
  const pending = stale.player.pump;
  stale.player.pause(); waiting.reject(new DOMException('Superseded', 'AbortError')); await pending;
  assert.equal(stale.player.snapshot.status, 'paused');
});

test('latency diagnostics ignore analyser samples left over from before a seek', async () => {
  const originalRAF = globalThis.requestAnimationFrame, originalCancel = globalThis.cancelAnimationFrame;
  globalThis.requestAnimationFrame = () => 1;
  globalThis.cancelAnimationFrame = () => {};
  const { player, ctx } = fixture();
  player.diagnostics = true;
  player.probe = { fftSize: 256, getFloatTimeDomainData: (samples: Float32Array) => samples.fill(.1) };
  player.animate = (SongPlayer.prototype as any).animate;
  try {
    await player.play(); await flush();
    assert.equal(player.snapshot.audioStartMs, undefined, 'old nonzero samples cannot acknowledge the new source');
    ctx.currentTime = .008; player.animate();
    assert.equal(player.snapshot.audioStartMs, undefined, 'the analyser window must have refreshed');
    ctx.currentTime = .02; player.animate();
    assert.ok(Number.isFinite(player.snapshot.audioStartMs));
  } finally {
    player.pause(); globalThis.requestAnimationFrame = originalRAF; globalThis.cancelAnimationFrame = originalCancel;
  }
});

test('ready-prefix duration, title retention and mixer invalidation follow chunk ownership', async () => {
  const { player, performance, buffers } = fixture();
  const song = { title: 'Song', worldId: 'tango', tracks: [{ id: 'keys', instrumentId: 'piano', role: 'harmony', volume: .5 }] } as any;
  player.compositionKey = JSON.stringify({ ...song, title: '', tracks: song.tracks.map(({ volume: _volume, ...track }: any) => track) });
  let backgroundRenders = 0;
  player.warmChunks = () => { backgroundRenders++; };
  player.configure(song); await player.compiling;
  assert.equal(player.wantsPlayback, false); assert.equal(backgroundRenders, 1);
  player.chunkBuffers.set(0, buffers[0]); player.chunkBuffers.set(2, buffers[2]);
  assert.equal(player.preparedDuration, 1, 'a gap is not counted as prepared');
  player.chunkBuffers.set(1, buffers[1]); assert.equal(player.preparedDuration, 4);
  const revision = player.revision;
  player.configure({ ...song, title: 'Renamed' });
  assert.equal(player.revision, revision); assert.equal(player.chunkBuffers.size, 3);
  player.configure({ ...song, tracks: [{ ...song.tracks[0], volume: .2 }] });
  assert.equal(player.chunkBuffers.size, 0, 'a fader change invalidates mastered chunks');
  assert.equal(player.state.performance, performance, 'faders retain musical calculations');
  await player.compiling;
});

test('chunk planning covers tempo and region boundaries, tail and exact loop wrap', () => {
  const { performance } = fixture();
  const chunks = planPlaybackChunks({ ...performance, tail: .5 });
  assert.deepEqual(chunks.map(c => [c.start, c.end]), [[0, 1], [1, 3], [3, 4.5]]);
  assert.equal(playbackChunkAt(chunks, 1), 1);
  assert.equal(playbackChunkAt(chunks, 4.5), 0);
  assert.equal(playbackChunkAt(chunks, -0.1), 2);
  assert.deepEqual(planPlaybackChunks({ ...performance, bars: [] }).map(c => [c.start, c.end]), [[0, 4]]);
});

test('tempo-dependent chunk lengths sum to exact sample boundaries without accumulating drift', () => {
  const duration = 240 / 123;
  const performance = { duration: duration * 120, tail: 0, bars: Array.from({ length: 120 }, (_, index) => ({
    index, start: index * duration, end: (index + 1) * duration, regionId: 'song', bpm: 123, beatsPerBar: 4,
  })) } as any;
  const chunks = planPlaybackChunks(performance);
  for (let i = 1; i < chunks.length; i++) assert.equal(chunks[i].start, chunks[i - 1].end);
  const frames = chunks.reduce((sum, chunk) => sum + Math.round((chunk.end - chunk.start) * 44100), 0);
  assert.equal(frames, Math.ceil(performance.duration * 44100));
  assert.ok(planPlaybackChunks(performance, 1.5).every(chunk => Number.isFinite(chunk.end)));
});
