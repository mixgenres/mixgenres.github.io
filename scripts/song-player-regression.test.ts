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
  const stops: number[] = [];
  const fades: Array<{ value: number; when: number }> = [];
  const gain = () => ({ gain: { value: 1, setValueAtTime() {},
    linearRampToValueAtTime(value: number, when: number) { fades.push({ value, when }); }, cancelScheduledValues() {} },
    connect() {}, disconnect() {} });
  const ctx = { currentTime: 0, sampleRate: 44100, state: 'running', createGain: gain,
    createBuffer: (_channels: number, frames: number, sampleRate: number) => {
      const data = [new Float32Array(frames), new Float32Array(frames)];
      return { duration: frames / sampleRate, length: frames, numberOfChannels: 2, sampleRate, getChannelData: (index: number) => data[index] };
    }, createBufferSource: () => ({
      buffer: undefined as any, connect() {}, disconnect() {}, stop(when: number) { stops.push(when); },
      start(when: number, offset: number, duration: number) { starts.push({ buffer: this.buffer, when, offset, duration }); },
    }) };
  return { ctx, starts, stops, fades, output: gain() };
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
  player.chunkBuffers.delete(0);
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
  player.chunkBuffers.delete(0);
  const ensure = player.ensureChunk.bind(player);
  player.ensureChunk = () => waiting.promise;
  try {
    const playing = player.play(); await flush(); player.pause();
    waiting.resolve(buffers[0] as unknown as AudioBuffer); await playing; await flush();
    assert.equal(starts.length, 0, 'preparation must not override Pause');
    player.ensureChunk = ensure;
    player.chunkBuffers.set(0, buffers[0]);
    await player.play(); await flush();
    assert.equal(starts[0].buffer, buffers[0]);
  } finally { player.pause(); }
});

test('a drag previews many positions and resumes once at the final position', async () => {
  const { player, starts, ctx } = fixture();
  try {
    await player.play(); await flush(); ctx.currentTime = .25;
    player.beginScrub(); const before = starts.length;
    assert.equal(player.snapshot.status, 'seeking');
    for (let i = 0; i < 50; i++) player.locate(1 + i / 100);
    ctx.currentTime = 1.25; await flush();
    assert.equal(starts.length, before, 'drag previews must not create sources');
    assert.equal(player.position(), 1.49, 'the preview stays put while the audio clock advances');
    player.endScrub(); await flush();
    assert.equal(starts[before].offset, .49);
    assert.equal(player.anchorPosition, 1.49);
    const resumed = starts.length;
    player.endScrub(); await flush();
    assert.equal(starts.length, resumed, 'lost capture after pointer-up cannot resume twice');
  } finally { player.pause(); }
});

test('paused scrubbing and Pause during a drag never start audio', async () => {
  const { player, starts } = fixture();
  try {
    player.beginScrub(); player.locate(2); player.endScrub(); await flush();
    assert.equal(starts.length, 0);
    await player.play(); await flush();
    player.beginScrub(); player.locate(3); player.pause(); const before = starts.length;
    player.endScrub(); await flush();
    assert.equal(starts.length, before); assert.equal(player.snapshot.status, 'paused');
    assert.equal(player.position(), 3);
  } finally { player.pause(); }
});

test('scrubbing cancels a pending Play before resuming its newest position', async () => {
  const { player, buffers, starts } = fixture();
  const waiting = deferred<AudioBuffer>();
  player.chunkBuffers.delete(0);
  const ensure = player.ensureChunk.bind(player);
  player.ensureChunk = (index: number, ...args: any[]) => index === 0 ? waiting.promise : ensure(index, ...args);
  try {
    const pending = player.play(); await flush();
    player.beginScrub(); player.locate(2);
    waiting.resolve(buffers[0] as unknown as AudioBuffer); await pending; await flush();
    assert.equal(starts.length, 0, 'a completed render cannot interrupt the drag');
    player.endScrub(); await flush();
    assert.equal(starts[0].buffer, buffers[1]); assert.equal(starts[0].offset, 1);
  } finally { player.pause(); }
});

test('Pause fades the current output over eight milliseconds before stopping sources', async () => {
  const { player, stops, fades, ctx } = fixture();
  await player.play(); await flush(); ctx.currentTime = .25;
  player.pause();
  assert.ok(stops.length > 0); assert.ok(stops.every(time => time === .258));
  assert.deepEqual(fades.at(-1), { value: 0, when: .258 });
});

test('preparation follows a new position and reports ready after its first playable chunk', async () => {
  const { player, buffers, performance } = fixture();
  player.chunkBuffers.clear(); player.state.status = 'rendering';
  const requests: number[] = [], jobs = new Map<number, ReturnType<typeof deferred<AudioBuffer>>>();
  player.ensureChunk = (index: number) => {
    requests.push(index);
    const job = deferred<AudioBuffer>(); jobs.set(index, job);
    return job.promise.then(buffer => { player.chunkBuffers.set(index, buffer); return buffer; });
  };
  player.warmChunks(performance, player.song, player.abort.signal, player.revision);
  assert.deepEqual(requests, [0]);
  player.offset = 3.2;
  jobs.get(0)!.resolve(buffers[0] as unknown as AudioBuffer); await flush();
  assert.deepEqual(requests, [0, 2], 'the sought chunk jumps ahead of earlier background work');
  jobs.get(2)!.resolve(buffers[2] as unknown as AudioBuffer); await flush();
  assert.equal(player.snapshot.status, 'ready', 'Play is ready before the whole song has rendered');
  assert.deepEqual(requests, [0, 2, 1]);
  jobs.get(1)!.resolve(buffers[1] as unknown as AudioBuffer); await flush();
  assert.equal(player.snapshot.progress, 1);
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

test('a seek before the initial tempo map arrives is retained instead of clamped to 100ms', async () => {
  const { player, performance, starts, buffers } = fixture();
  const chunks = player.chunks, compiling = deferred<void>();
  player.chunks = []; player.state.performance = undefined; player.compiling = compiling.promise;
  try {
    const playing = player.play(); await flush(); player.locate(2);
    assert.equal(player.position(), 2);
    player.chunks = chunks; player.state.performance = performance;
    compiling.resolve(); await playing; await flush();
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
  player.chunkBuffers.delete(1);
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
  player.chunkBuffers.clear();
  player.wantsPlayback = true; player.mixOutput = player.output;
  player.ensureChunk = () => Promise.reject(new Error('DSP failed'));
  player.requestPump(player.playbackGeneration, player.revision);
  await player.pump;
  assert.equal(player.snapshot.status, 'error'); assert.equal(player.snapshot.error, 'DSP failed');
  const stale = fixture(), waiting = deferred<AudioBuffer>();
  stale.player.chunkBuffers.clear();
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
  const song = { title: 'Song', worldId: 'tango', regions: [{ id: 'intro', name: 'Intro', formLabel: 'Intro' }],
    tracks: [{ id: 'keys', name: 'Piano', instrumentId: 'piano', role: 'harmony', volume: .5 }] } as any;
  player.compositionKey = JSON.stringify({ ...song, title: '', regions: [{ id: 'intro' }],
    tracks: song.tracks.map(({ volume: _volume, name: _name, ...track }: any) => track) });
  let backgroundRenders = 0;
  player.warmChunks = () => { backgroundRenders++; };
  player.configure(song); await player.compiling;
  assert.equal(player.wantsPlayback, false); assert.equal(backgroundRenders, 1);
  player.chunkBuffers.set(0, buffers[0]); player.chunkBuffers.set(2, buffers[2]);
  assert.equal(player.preparedDuration, 1, 'a gap is not counted as prepared');
  player.chunkBuffers.set(1, buffers[1]); assert.equal(player.preparedDuration, 4);
  const revision = player.revision;
  player.configure({ ...song, title: 'Renamed', catalogId: 'renamed-source',
    regions: [{ ...song.regions[0], name: 'Opening', formLabel: 'Opening' }],
    tracks: [{ ...song.tracks[0], name: 'Keys' }] });
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


test('transport chunks cap slow bars and long releases without gaps or lost samples', async () => {
  const { planTransportChunks } = await import('../src/engine/playback/playbackChunks');
  const perf = { duration: 24, tail: 9.137, bars: [{index:0,start:0,end:24,regionId:'slow',bpm:10,beatsPerBar:4}] } as any;
  const chunks = planTransportChunks(perf);
  assert.equal(chunks[0].end,2,'the opening prefix stays short');
  assert.ok(chunks.every(chunk => chunk.end - chunk.start <= 4 + 1/44100));
  for (let i=1;i<chunks.length;i++) assert.equal(chunks[i].start,chunks[i-1].end);
  assert.equal(Math.round(chunks.at(-1)!.end*44100),Math.ceil((perf.duration+perf.tail)*44100));
});

test('background preparation stops at four seconds and seeks evict old playback buffers', async () => {
  const { player, buffers, performance } = fixture(Array(50).fill(2));
  player.chunkBuffers.clear(); player.state.status='rendering';
  const requested: number[] = [];
  player.ensureChunk = async (index: number) => {
    requested.push(index); player.chunkBuffers.set(index,buffers[index]); return buffers[index];
  };
  player.warmChunks(performance,player.song,player.abort.signal,player.revision);
  await flush();
  assert.deepEqual(requested,[0,1],'an idle editor does not synthesize the entire song');
  for (const position of [30,60,90,0,50]) {
    player.locate(position); await flush();
    assert.ok(player.chunkBuffers.size<=3,'old positions are evicted');
    assert.ok(player.bufferedBytes<=4*1024*1024,'retained PCM stays inside the mobile budget');
  }
});

test('click-to-signal diagnostics work when animation frames stop', async () => {
  const original = globalThis.setInterval;
  let tick: (()=>void) | undefined;
  globalThis.setInterval = ((callback: ()=>void) => {tick=callback;return 1;}) as any;
  const { player, ctx } = fixture(); player.diagnostics=true;
  player.probe = {fftSize:256,getFloatTimeDomainData:(samples:Float32Array)=>samples.fill(.1)};
  Object.assign(ctx,{baseLatency:.01,outputLatency:.02});
  try {
    await player.play(); await flush();
    assert.equal(player.snapshot.playbackTiming.bufferWaitMs,0,'a cached Play needs no render');
    assert.ok(Number.isFinite(player.snapshot.playbackTiming.scheduledStartMs));
    assert.equal(player.snapshot.audioStartMs,undefined);
    ctx.currentTime=.02; tick!();
    assert.ok(Number.isFinite(player.snapshot.playbackTiming.signalObservedMs));
    assert.equal(player.snapshot.outputLatencyMs,30);
    assert.ok(player.snapshot.playbackTiming.estimatedOutputMs>=player.snapshot.audioStartMs);
  } finally {player.pause();globalThis.setInterval=original;}
});

test('mobile resource policy caps workers and caches without deviceMemory', async () => {
  const { playbackResourceLimits } = await import('../src/engine/playback/playbackResources');
  const phone=playbackResourceLimits({touch:true,cores:8});
  assert.equal(phone.workers,2);
  assert.equal(phone.partCacheBytes+phone.mixCacheBytes+phone.playbackBufferBytes+phone.stemCacheBytes,28*1024*1024);
  assert.equal(playbackResourceLimits({memoryGB:2,cores:8}).workers,1);
  assert.equal(playbackResourceLimits({touch:true,cores:2}).workers,1);
  assert.equal(playbackResourceLimits({memoryGB:8,cores:8}).workers,3);
});

test('mobile compilation and synthesis share one worker; cancellation releases it', async () => {
  const { renderPlaybackPart, releasePlaybackWorkers, playbackWorkerStats } = await import('../src/engine/playback/renderPlaybackPart');
  const { compilePerformance } = await import('../src/engine/playback/compilePerformance');
  const savedNavigator=Object.getOwnPropertyDescriptor(globalThis,'navigator'), savedWorker=globalThis.Worker;
  const workers: any[]=[];
  class MobileWorker {
    onmessage: any=null; onerror: any=null; onmessageerror: any=null; messages: any[]=[]; terminated=false;
    constructor(){workers.push(this);}
    postMessage(message:any){this.messages.push(message);}
    terminate(){this.terminated=true;}
  }
  releasePlaybackWorkers();
  Object.defineProperty(globalThis,'navigator',{configurable:true,value:{hardwareConcurrency:2,maxTouchPoints:5}});
  globalThis.Worker=MobileWorker as any;
  try {
    const compiling=compilePerformance({tracks:[]} as any,new AbortController().signal);
    await flush();
    assert.equal(workers.length,1);assert.equal(workers[0].messages[0].kind,'compile');
    const perf={duration:1,notes:[],ccs:[],bars:[],blends:{}} as any;
    workers[0].onmessage({data:{performance:perf}});await compiling;
    const controller=new AbortController();
    const rendering=renderPlaybackPart(perf,{trackInstruments:new Map(),signal:controller.signal});
    const cancelled=assert.rejects(rendering,{name:'AbortError'});
    await flush();
    assert.equal(workers.length,1,'rendering reuses the compilation worker');
    assert.equal(workers[0].messages[1].kind,'render');
    controller.abort();await cancelled;
    assert.ok(workers[0].terminated);
    assert.equal(playbackWorkerStats().running,0);assert.equal(playbackWorkerStats().heapBytes,0);
  } finally {
    releasePlaybackWorkers();globalThis.Worker=savedWorker;
    if(savedNavigator)Object.defineProperty(globalThis,'navigator',savedNavigator);else Reflect.deleteProperty(globalThis,'navigator');
  }
});

test('cold Play resumes once after compilation and retains its complete wait timing', async () => {
  const {releasePlaybackWorkers}=await import('../src/engine/playback/renderPlaybackPart');
  const savedNavigator=Object.getOwnPropertyDescriptor(globalThis,'navigator'),savedWorker=globalThis.Worker;
  const workers:any[]=[];
  class WorkerStub {
    onmessage:any=null;onerror:any=null;onmessageerror:any=null;
    constructor(){workers.push(this);} postMessage(){} terminate(){}
  }
  releasePlaybackWorkers();
  Object.defineProperty(globalThis,'navigator',{configurable:true,value:{hardwareConcurrency:2,maxTouchPoints:5}});
  globalThis.Worker=WorkerStub as any;
  const {player,performance:compiled,buffers,starts}=fixture();
  player.diagnostics=true;player.warmChunks=()=>{};
  player.ensureChunk=async(index:number)=>{player.chunkBuffers.set(index,buffers[index]);return buffers[index];};
  const originalPlay=player.play.bind(player);let calls=0;
  player.play=(...args:any[])=>{calls++;return originalPlay(...args);};
  try {
    player.configure({title:'Cold song',tracks:[]});
    const playing=player.play();await flush();
    await new Promise(resolve=>setTimeout(resolve,20));
    workers[0].onmessage({data:{performance:compiled}});
    await playing;await flush();
    assert.equal(calls,1,'compiler completion must not replace a Play already awaiting that score');
    assert.ok(player.snapshot.playbackTiming.compileWaitMs>=15,'timing includes the actual compilation wait');
    assert.ok(starts.length>0);assert.equal(player.snapshot.status,'playing');
  } finally {
    player.pause();releasePlaybackWorkers();globalThis.Worker=savedWorker;
    if(savedNavigator)Object.defineProperty(globalThis,'navigator',savedNavigator);else Reflect.deleteProperty(globalThis,'navigator');
  }
});
