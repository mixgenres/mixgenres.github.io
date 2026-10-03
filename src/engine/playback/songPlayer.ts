import { checkAbort } from '../../export/audioEncoding';
import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';
import { renderSongMix } from './renderSongMix';
import { compilePerformance } from './compilePerformance';
import { type RenderedPerformanceAudio } from './mp3Export';
import { planPlaybackChunks, playbackChunkAt, type PlaybackChunk } from './playbackChunks';
import { releasePlaybackWorkers, warmPlaybackWorkers } from './renderPlaybackPart';

export type PlayerStatus = 'idle' | 'compiling' | 'ready' | 'rendering' | 'starting' | 'playing' | 'paused' | 'error';
export interface PlayerState {
  status: PlayerStatus;
  progress: number;
  performance?: Performance;
  composition?: Sheet;
  error?: string;
  /** Optional development measurement at the player's output, before hardware latency. */
  audioStartMs?: number;
  outputLatencyMs?: number;
}

/** Prepare small structural playback chunks while keeping musical caches coarse. */
export class SongPlayer {
  private state: PlayerState = { status: 'idle', progress: 0 };
  private song?: Sheet;
  private compositionKey = '';
  private renderKey = '';
  private abort?: AbortController;
  private revision = 0;
  private playRequest = 0;
  private wantsPlayback = false;
  private ctx?: AudioContext;
  private output?: GainNode;
  private mixOutput?: GainNode;
  private chunks: PlaybackChunk[] = [];
  private chunkBuffers = new Map<number, AudioBuffer>();
  private chunkJobs = new Map<number, Promise<AudioBuffer>>();
  private sources = new Set<AudioBufferSourceNode>();
  private anchorContextTime = 0;
  private anchorPosition = 0;
  private transportStarted = false;
  private offset = 0;
  private raf?: number;
  private disposed = false;
  private compiling: Promise<void> = Promise.resolve();
  private probe?: AnalyserNode;
  private probeSamples = new Float32Array(256);
  private playClickedAt = 0;
  private waitingForSignal = false;
  private playbackGeneration = 0;
  private scheduleIndex = 0;
  private scheduleOffset = 0;
  private scheduleWhen = 0;
  private pump?: Promise<void>;
  private pumpGeneration = -1;
  private schedulerTimer?: ReturnType<typeof setInterval>;

  constructor(private readonly onState: (state: PlayerState) => void, private readonly onPosition: (seconds: number) => void,
    private readonly diagnostics = false) {}

  get snapshot(): PlayerState { return this.state; }
  get composition(): Sheet | undefined { return this.song; }
  get preparedDuration(): number {
    let end = 0;
    for (const chunk of this.chunks) {
      if (!this.chunkBuffers.has(chunk.index) || chunk.start > end + 1 / 44100) break;
      end = chunk.end;
    }
    return end;
  }

  private publish(patch: Partial<PlayerState>) {
    if (this.disposed) return;
    this.state = { ...this.state, ...patch };
    this.onState(this.state);
  }

  configure(song: Sheet, force = false): void {
    if (this.disposed || !force && this.song === song) return;
    const renderKey = JSON.stringify({ ...song, title: '' });
    if (!force && renderKey === this.renderKey) {
      this.song = song;
      this.publish({ composition: song });
      return;
    }
    this.renderKey = renderKey;

    const compositionKey = JSON.stringify({ ...song, title: '', tracks: song.tracks.map(track => {
      const musical = { ...track } as Record<string, unknown>;
      delete musical.volume; delete musical.pan; delete musical.solo; delete musical.muted;
      return musical;
    }) });
    const retainedPerformance = !force && compositionKey === this.compositionKey ? this.state.performance : undefined;
    this.compositionKey = compositionKey;
    this.offset = this.position();
    this.haltSources();
    this.abort?.abort();
    this.abort = new AbortController();
    const signal = this.abort.signal;
    const revision = ++this.revision;
    ++this.playRequest;
    this.song = song;
    this.chunks = [];
    this.chunkBuffers.clear();
    this.chunkJobs.clear();
    this.publish({ status: retainedPerformance ? 'ready' : 'compiling', composition: song, progress: 0,
      performance: retainedPerformance, error: undefined });

    this.compiling = (retainedPerformance ? Promise.resolve(retainedPerformance) : compilePerformance(song, signal)).then(performance => {
      if (signal.aborted || revision !== this.revision || this.disposed) return;
      this.chunks = planPlaybackChunks(performance);
      this.offset = Math.min(this.offset, Math.max(0, this.loopDuration(performance) - 1 / 44100));
      this.publish({ status: this.wantsPlayback ? 'starting' : 'rendering', progress: 0, performance });
      this.onPosition(this.offset);
      // Build the output context and DSP helpers during selection warmup. The
      // context remains suspended until Play resumes it from a user gesture.
      try { this.ensureContext(); } catch { /* Play surfaces browser capability errors. */ }
      warmPlaybackWorkers();
      this.warmChunks(performance, song, signal, revision);
      if (this.wantsPlayback) void this.play();
    }).catch(error => { if (!signal.aborted && revision === this.revision) this.fail(error); });
  }

  private ensureContext() {
    if (!this.ctx || this.ctx.state === 'closed') {
      const Constructor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Constructor) throw new Error('This browser does not support audio playback.');
      this.ctx = new Constructor({ latencyHint: 'interactive' });
      this.output = this.ctx.createGain();
      this.output.gain.value = 1;
      if (this.diagnostics) {
        this.probe = this.ctx.createAnalyser(); this.probe.fftSize = 256;
        this.output.connect(this.probe); this.probe.connect(this.ctx.destination);
      } else this.output.connect(this.ctx.destination);
      this.ctx.onstatechange = () => {
        if (this.sources.size && this.ctx?.state !== 'running') {
          this.pause();
          this.publish({ error: 'Audio was interrupted. Press Play to resume.' });
        }
      };
    }
  }

  private loopDuration(performance = this.state.performance) {
    return this.chunks.at(-1)?.end ?? Math.max(0.1, (performance?.duration ?? 0) + (performance?.tail ?? 0));
  }

  private chunkPriority(index: number) {
    if (!this.chunks.length) return 3;
    const current = playbackChunkAt(this.chunks, this.position());
    if (current < 0) return 3;
    return (index - current + this.chunks.length) % this.chunks.length;
  }

  private ensureChunk(index: number, performance: Performance, song: Sheet, signal: AbortSignal, revision: number,
    priority: () => number = () => this.chunkPriority(index)): Promise<AudioBuffer> {
    const ready = this.chunkBuffers.get(index);
    if (ready) return Promise.resolve(ready);
    const pending = this.chunkJobs.get(index);
    if (pending) return pending;
    const chunk = this.chunks[index];
    if (!chunk) return Promise.reject(new Error(`Unknown playback chunk ${index}.`));
    const job = renderSongMix(performance, song, signal,
      { start: chunk.renderStart, end: chunk.renderEnd }, priority).then(audio => {
      checkAbort(signal);
      if (revision !== this.revision || this.disposed) throw new DOMException('Playback rendering superseded', 'AbortError');
      const buffer = this.toChunkBuffer(audio, chunk);
      this.chunkBuffers.set(index, buffer);
      return buffer;
    }).finally(() => {
      if (this.chunkJobs.get(index) === job) this.chunkJobs.delete(index);
    });
    this.chunkJobs.set(index, job);
    return job;
  }

  private warmChunks(performance: Performance, song: Sheet, signal: AbortSignal, revision: number) {
    if (!this.chunks.length) return;
    const start = Math.max(0, playbackChunkAt(this.chunks, this.offset));
    const order = [...this.chunks.slice(start), ...this.chunks.slice(0, start)].map(chunk => chunk.index);
    void (async () => {
      for (let i = 0; i < order.length; i++) {
        await this.ensureChunk(order[i], performance, song, signal, revision);
        checkAbort(signal);
        if (revision !== this.revision || this.disposed) return;
        this.publish({ progress: (i + 1) / order.length });
      }
      if (!this.wantsPlayback) this.publish({ status: 'ready', progress: 1 });
    })().catch(error => {
      if (!signal.aborted && revision === this.revision) this.fail(error);
    });
  }

  private toChunkBuffer(audio: RenderedPerformanceAudio, chunk: PlaybackChunk) {
    const sampleRate = audio.sampleRate;
    const from = Math.max(0, Math.round((chunk.start - chunk.renderStart) * sampleRate));
    const frames = Math.max(1, Math.round((chunk.end - chunk.start) * sampleRate));
    const buffer = this.ctx!.createBuffer(2, frames, sampleRate);
    const left = audio.left.subarray(from, Math.min(audio.left.length, from + frames));
    const right = audio.right.subarray(from, Math.min(audio.right.length, from + frames));
    buffer.getChannelData(0).set(left);
    buffer.getChannelData(1).set(right);
    return buffer;
  }

  private beginChunkPlayback(position: number, revision: number) {
    if (!this.ctx || !this.song || !this.state.performance || !this.chunks.length) return;
    const when = this.ctx.currentTime + .005;
    const index = Math.max(0, playbackChunkAt(this.chunks, position));
    const chunk = this.chunks[index];
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(1, when + .008);
    gain.connect(this.output!);
    this.mixOutput = gain;
    this.anchorPosition = position;
    this.anchorContextTime = when;
    this.transportStarted = true;
    this.waitingForSignal = this.diagnostics;
    this.scheduleIndex = index;
    this.scheduleOffset = Math.max(0, position - chunk.start);
    this.scheduleWhen = when;
    const generation = this.playbackGeneration;
    this.requestPump(generation, revision);
    // Audio scheduling must continue even when the browser stops UI frames.
    this.schedulerTimer = setInterval(() => this.requestPump(generation, revision), 100);
    this.animate();
  }

  private requestPump(generation: number, revision: number) {
    if (!this.currentPlayback(generation, revision)) return;
    if (this.pump && this.pumpGeneration === generation) return;
    this.pumpGeneration = generation;
    const pump = this.pumpSchedule(generation, revision).catch(error => {
      if (this.currentPlayback(generation, revision)) this.fail(error);
    }).finally(() => {
      if (this.pump === pump) this.pump = undefined;
    });
    this.pump = pump;
  }

  private async pumpSchedule(generation: number, revision: number) {
    if (!this.ctx || !this.song || !this.state.performance || !this.mixOutput) return;
    const performance = this.state.performance;
    const song = this.song;
    const signal = this.abort?.signal;
    if (!signal) return;
    const horizon = 4;
    while (this.currentPlayback(generation, revision) && this.scheduleWhen < this.ctx.currentTime + horizon) {
      const index = this.scheduleIndex;
      const chunk = this.chunks[index];
      if (!chunk) return;
      const buffer = await this.ensureChunk(index, performance, song, signal, revision,
        () => index === playbackChunkAt(this.chunks, this.position()) ? 0 : Math.min(3, this.chunkPriority(index) + 1));
      if (!this.currentPlayback(generation, revision) || !this.ctx || !this.mixOutput) return;

      const earliest = this.ctx.currentTime + .003;
      // Preserve song time when rendering or a throttled timer misses a deadline.
      // Skip complete loops cheaply, then advance through any missed chunks.
      const loopDuration = this.loopDuration();
      if (earliest - this.scheduleWhen >= loopDuration) {
        this.scheduleWhen += Math.floor((earliest - this.scheduleWhen) / loopDuration) * loopDuration;
      }
      const when = Math.max(this.scheduleWhen, earliest);
      const offset = this.scheduleOffset + (when - this.scheduleWhen);
      const duration = chunk.end - chunk.start;
      if (offset < duration - 1 / 44100) {
        const remaining = duration - offset;
        const playable = Math.min(Math.max(0, buffer.duration - offset), remaining);
        if (playable > 1 / 44100) {
          const source = this.ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(this.mixOutput);
          source.onended = () => { this.sources.delete(source); source.disconnect(); };
          this.sources.add(source);
          source.start(when, offset, playable);
        }
      }
      this.scheduleWhen += duration - this.scheduleOffset;

      this.scheduleIndex = (index + 1) % this.chunks.length;
      this.scheduleOffset = 0;
      const next = this.scheduleIndex;
      const afterNext = (next + 1) % this.chunks.length;
      void this.ensureChunk(next, performance, song, signal, revision, () => 1).catch(() => {});
      if (this.chunks.length > 2) void this.ensureChunk(afterNext, performance, song, signal, revision, () => 2).catch(() => {});
    }
  }

  private currentPlayback(generation: number, revision: number) {
    return !this.disposed && this.wantsPlayback && generation === this.playbackGeneration && revision === this.revision;
  }

  /** Called directly from click/keyboard handlers so resume retains user activation. */
  async play(): Promise<void> {
    if (this.disposed || !this.song || this.state.status === 'playing') return;
    if (!this.wantsPlayback) this.playClickedAt = performance.now();
    this.wantsPlayback = true;
    const request = ++this.playRequest;
    const revision = this.revision;
    // Acknowledge the click immediately. Only the current chunk must be ready
    // before playback starts; remaining chunks prepare behind it.
    this.publish({ status: 'starting', error: undefined, audioStartMs: undefined });
    try {
      this.ensureContext();
      const resumed = this.ctx!.state === 'running' ? Promise.resolve() : this.ctx!.resume();
      await resumed;
      await this.compiling;
      if (!this.current(request, revision)) return;
      const performance = this.state.performance;
      const song = this.song;
      if (!performance?.notes.length || !song) throw new Error('This arrangement has no audible notes.');
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      const index = Math.max(0, playbackChunkAt(this.chunks, this.offset));
      await this.ensureChunk(index, performance, song, this.abort!.signal, revision, () => 0);
      if (!this.current(request, revision)) return;
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      this.startSourcesAt(this.offset);
      this.publish({ status: 'starting', error: undefined });
      this.beginChunkPlayback(this.offset, revision);
    } catch (error) { if (this.current(request, revision)) this.fail(error); }
  }

  private current(request: number, revision: number) {
    return !this.disposed && this.wantsPlayback && request === this.playRequest && revision === this.revision;
  }

  private startSourcesAt(position: number) {
    this.haltSources();
    this.offset = position;
    this.anchorPosition = position;
    this.anchorContextTime = 0;
    this.transportStarted = false;
  }

  position(): number {
    if (!this.wantsPlayback || !this.ctx || !this.state.performance) return this.offset;
    if (!this.transportStarted) return this.offset;
    const duration = this.loopDuration();
    const absolute = this.anchorPosition + Math.max(0, this.ctx.currentTime - this.anchorContextTime);
    return duration > 0 ? absolute % duration : 0;
  }

  locate(seconds: number) {
    if (!Number.isFinite(seconds)) return;
    const duration = this.loopDuration();
    this.offset = Math.max(0, Math.min(Math.max(0, duration - 1 / 44100), seconds));
    if (this.wantsPlayback && this.state.performance && this.song && this.chunks.length) {
      this.playClickedAt = performance.now();
      this.publish({ status: 'starting', audioStartMs: undefined });
      this.startSourcesAt(this.offset);
      const request = ++this.playRequest;
      const revision = this.revision;
      const perf = this.state.performance;
      const song = this.song;
      const index = Math.max(0, playbackChunkAt(this.chunks, this.offset));
      void this.ensureChunk(index, perf, song, this.abort!.signal, revision, () => 0).then(() => {
        if (!this.current(request, revision)) return;
        this.beginChunkPlayback(this.offset, revision);
      }).catch(error => { if (this.current(request, revision)) this.fail(error); });
    }
    this.onPosition(this.offset);
  }

  pause() {
    this.offset = this.position();
    this.wantsPlayback = false;
    ++this.playRequest;
    this.haltSources();
    if (this.state.status !== 'compiling') this.publish({ status: 'paused' });
    this.onPosition(this.offset);
  }

  toggle() { if (this.wantsPlayback || this.sources.size) this.pause(); else void this.play(); }

  private animate() {
    if (!this.wantsPlayback || this.disposed) return;
    // An analyser can still contain pre-seek samples. Wait until its complete
    // observation window belongs to the newly scheduled sources.
    if (this.waitingForSignal && this.probe && this.transportStarted && this.ctx &&
      this.ctx.currentTime >= this.anchorContextTime + this.probe.fftSize / this.ctx.sampleRate) {
      this.probe.getFloatTimeDomainData(this.probeSamples);
      if (this.probeSamples.some(sample => Math.abs(sample) > 1e-5)) {
        this.waitingForSignal = false;
        this.publish({ audioStartMs: performance.now()-this.playClickedAt,
          outputLatencyMs: (this.ctx!.outputLatency ?? this.ctx!.baseLatency ?? 0)*1000 });
      }
    }
    if (this.state.status === 'starting' && this.transportStarted && this.ctx!.currentTime >= this.anchorContextTime) {
      this.publish({ status: 'playing', error: undefined });
    }
    this.offset = this.position();
    this.onPosition(this.offset);
    this.raf = requestAnimationFrame(() => this.animate());
  }

  private haltSources() {
    this.playbackGeneration++;
    if (this.schedulerTimer !== undefined) clearInterval(this.schedulerTimer);
    this.schedulerTimer = undefined;
    if (this.raf !== undefined) cancelAnimationFrame(this.raf);
    this.raf = undefined;
    for (const source of this.sources) {
      source.onended = () => source.disconnect();
      try { source.stop(); } catch { /* source already ended */ }
      source.disconnect();
    }
    this.sources.clear();
    this.mixOutput?.disconnect();
    this.mixOutput = undefined;
    this.waitingForSignal = false;
    this.pump = undefined;
    this.pumpGeneration = -1;
  }

  private fail(error: unknown) {
    this.wantsPlayback = false;
    this.haltSources();
    this.publish({ status: 'error', error: error instanceof Error ? error.message : String(error), progress: 0 });
  }

  dispose() {
    this.disposed = true;
    this.wantsPlayback = false;
    ++this.revision; ++this.playRequest;
    this.abort?.abort();
    this.haltSources();
    releasePlaybackWorkers();
    if (this.ctx) { this.ctx.onstatechange = null; void this.ctx.close().catch(() => {}); }
    this.output?.disconnect();
    this.probe?.disconnect();
    this.chunkBuffers.clear();
    this.chunkJobs.clear();
  }
}
