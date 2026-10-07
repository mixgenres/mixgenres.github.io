import { catalogPreparationOrder } from '../cache/favoritePlayback';
import { persistentPreparedAudioAvailable } from '../cache/persistentPreparedAudio';
import { checkAbort } from '../../export/audioEncoding';
import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';
import { renderSongMix, songMixOptions } from './renderSongMix';
import { playbackResources } from './playbackResources';
import { compilePerformance, releaseCompilerWorker } from './compilePerformance';
import { type RenderedPerformanceAudio } from './mp3Export';
import { planTransportChunks, playbackChunkAt, type PlaybackChunk } from './playbackChunks';
import { preparePlaybackDSPCache, releasePlaybackWorkers, setPlaybackBackgroundPreparation, warmPlaybackWorkers } from './renderPlaybackPart';

export type PlayerStatus = 'idle' | 'compiling' | 'ready' | 'rendering' | 'starting' | 'playing' | 'seeking' | 'paused' | 'error';
export interface PlaybackTiming {
  inputToPlayMs?: number;
  contextResumeMs?: number;
  compileWaitMs?: number;
  bufferWaitMs?: number;
  scheduledStartMs?: number;
  signalObservedMs?: number;
  estimatedOutputMs?: number;
}
export interface PlayerState {
  status: PlayerStatus;
  progress: number;
  performance?: Performance;
  composition?: Sheet;
  error?: string;
  /** Optional development measurement at the player's output, before hardware latency. */
  audioStartMs?: number;
  playbackTiming?: PlaybackTiming;
  outputLatencyMs?: number;
}

/** Display labels and catalog provenance never change the sound. */
function audioSnapshot(song: Sheet) {
  const { catalogId: _id, ...snapshot } = song;
  return { ...snapshot, title: '',
    regions: song.regions?.map(({ name: _name, formLabel: _label, ...region }) => region),
    tracks: song.tracks.map(({ name: _name, ...track }) => track) };
}

/** Persist measured synthesis speed across sessions so cold starts scale conservatively. */
function getStoredRenderFactor(): number {
  if (typeof localStorage === 'undefined') return 0.2;
  try {
    const val = parseFloat(localStorage.getItem('mixgenres:render_factor') ?? '');
    return Number.isFinite(val) && val > 0 ? val : 0.2;
  } catch {
    return 0.2;
  }
}

function updateStoredRenderFactor(rate: number): void {
  if (typeof localStorage === 'undefined' || !Number.isFinite(rate) || rate <= 0) return;
  try {
    const prev = getStoredRenderFactor();
    const updated = prev * 0.7 + rate * 0.3;
    localStorage.setItem('mixgenres:render_factor', updated.toFixed(3));
  } catch {}
}

/** Prepare small structural playback chunks while keeping musical caches coarse. */
export class SongPlayer {
  private state: PlayerState = { status: 'idle', progress: 0 };
  private song?: Sheet;
  private compositionKey = '';
  private renderKey = '';
  private abort?: AbortController;
  private preparingAbort?: AbortController;
  private configurationRevision = 0;
  private activeSong?: Sheet;
  private activeCompositionKey?: string;
  private revision = 0;
  private playRequest = 0;
  private pendingPlay?: { request: number; revision: number };
  private wantsPlayback = false;
  private scrubbing = false;
  private ctx?: AudioContext;
  private suspending?: Promise<void>;
  private cancelResume?: () => void;
  private replaceContext = false;
  private removePageListeners?: () => void;
  private output?: GainNode;
  private mixOutput?: GainNode;
  private chunks: PlaybackChunk[] = [];
  private chunkBuffers = new Map<number, AudioBuffer>();
  private chunkJobs = new Map<number, Promise<AudioBuffer>>();
  private warming?: { revision: number; promise: Promise<void> };
  private backgroundAbort?: AbortController;
  private backgroundKey = '';
  private backgroundTimer?: ReturnType<typeof setTimeout>;
  private backgroundRunning = false;
  private preparedCatalog = new Set<string>();
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
  private stalledAt?: number;
  private underruns = 0;
  private bufferingSeconds = 0;
  private renderedAudioSeconds = 0;
  private renderMs = 0;
  private pump?: Promise<void>;
  private pumpGeneration = -1;
  private schedulerTimer?: ReturnType<typeof setInterval>;

  constructor(private readonly onState: (state: PlayerState) => void, private readonly onPosition: (seconds: number) => void,
    private readonly diagnostics = false) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const stop = () => this.stop();
      const hidden = () => {
        if(document.visibilityState === 'hidden')this.stop();
        else if(this.state.performance && this.song && this.abort) this.warmChunks(this.state.performance,this.activeSong ?? this.song,this.abort.signal,this.revision);
      };
      // Mobile system controls can blur a still-visible page. Visibility and
      // lifecycle events, rather than focus, determine when playback stops.
      const windowEvents = ['pagehide','beforeunload'];
      for(const event of windowEvents)window.addEventListener(event,stop);
      document.addEventListener('visibilitychange',hidden);
      document.addEventListener('freeze',stop);
      this.removePageListeners = () => {
        for(const event of windowEvents)window.removeEventListener(event,stop);
        document.removeEventListener('visibilitychange',hidden);
        document.removeEventListener('freeze',stop);
      };
    }
  }

  get snapshot(): PlayerState { return this.state; }
  get composition(): Sheet | undefined { return this.activeSong ?? this.song; }
  get playbackActivity() {return {contextState:this.ctx?.state ?? 'none',scheduledSources:this.sources.size,
    pendingStart:this.wantsPlayback && !this.transportStarted};}
  get playbackHealth() { return { underruns: this.underruns, bufferingSeconds: this.bufferingSeconds,
    renderedAudioSeconds: this.renderedAudioSeconds, renderMs: this.renderMs }; }
  get cacheWarmup() { return { active: !!this.backgroundTimer || this.backgroundRunning,
    catalogSongsPrepared: this.preparedCatalog.size, catalogSongsTotal: catalogPreparationOrder.length }; }
  get preparedDuration(): number {
    let end = 0;
    for (const chunk of this.chunks) {
      if (!this.chunkBuffers.has(chunk.index) || chunk.start > end + 1 / 44100) break;
      end = chunk.end;
    }
    return end;
  }

  /** Contiguous prepared audio ahead of the current playhead, including wrap. */
  get preparedAheadSeconds(): number {
    if (!this.chunks.length) return 0;
    const position = this.position();
    let index = Math.max(0, playbackChunkAt(this.chunks,position));
    let seconds = this.chunks[index].start - position;
    for(let count=0;count<this.chunks.length;count++) {
      if(!this.chunkBuffers.has(index)) break;
      seconds += this.chunks[index].end-this.chunks[index].start;
      index=(index+1)%this.chunks.length;
    }
    return Math.max(0,seconds);
  }

  private publish(patch: Partial<PlayerState>) {
    if (this.disposed) return;
    this.state = { ...this.state, ...patch };
    this.onState(this.state);
  }

  configure(song: Sheet, force = false): void {
    if (this.disposed || !force && this.song === song) return;
    const snapshot = audioSnapshot(song);
    const renderKey = JSON.stringify(snapshot);
    if (!force && renderKey === this.renderKey) {
      this.song = song;
      if (!this.preparingAbort) this.activeSong = song;
      this.publish({ composition: song });
      return;
    }
    if(this.song && (this.song.worldId !== song.worldId || this.song.styleId !== song.styleId || this.song.catalogId !== song.catalogId)) this.stop();
    this.renderKey = renderKey;

    const compositionKey = JSON.stringify({ ...snapshot, tracks: snapshot.tracks.map(track => {
      const musical = { ...track } as Record<string, unknown>;
      delete musical.volume; delete musical.pan; delete musical.solo; delete musical.muted;
      return musical;
    }) });
    const physicalChanged = compositionKey !== (this.activeCompositionKey ?? this.compositionKey);
    const retainedPerformance = !force && !physicalChanged ? this.state.performance : undefined;
    this.cancelBackground();
    this.compositionKey = compositionKey;
    this.offset = this.position();
    const wasPlaying = this.wantsPlayback && this.transportStarted;
    this.preparingAbort?.abort();
    this.preparingAbort = undefined;
    const configuration = ++this.configurationRevision;
    if (!wasPlaying) {
      this.haltSources();
      this.chunks = [];
      this.chunkBuffers.clear();
      this.chunkJobs.clear();
      this.abort?.abort();
      this.abort = new AbortController();
      ++this.revision;
      ++this.playRequest;
      this.activeSong = song;
      this.activeCompositionKey = compositionKey;
      this.underruns = 0; this.bufferingSeconds = 0; this.renderedAudioSeconds = 0; this.renderMs = 0;
    } else this.preparingAbort = new AbortController();
    const controller = wasPlaying ? this.preparingAbort! : this.abort!;
    const signal = controller.signal;
    this.song = song;
    // Keep the audible snapshot and its scheduler alive until the replacement
    // has its own buffers. Pending edits never share the active chunk map.
    this.publish({ composition: song, progress: 0, error: undefined,
      ...(!wasPlaying ? { status: retainedPerformance ? 'ready' as const : 'compiling' as const,
        performance: retainedPerformance } : {}) });
    queueMicrotask(() => {
      if (!playbackResources().constrained && !signal.aborted && !this.disposed) warmPlaybackWorkers();
    });

    this.compiling = (retainedPerformance ? Promise.resolve(retainedPerformance) : compilePerformance(song, signal)).then(async performance => {
      if (signal.aborted || configuration !== this.configurationRevision || this.disposed) return;
      const chunks = planTransportChunks(performance);
      let replacement: Map<number, AudioBuffer> | undefined;
      if (wasPlaying) {
        replacement = await this.prepareReplacement(performance, song, chunks, signal);
        if (signal.aborted || configuration !== this.configurationRevision || this.disposed) return;
        // Capture after rendering: the old audio clock kept advancing meanwhile.
        this.offset = this.replacementPosition(performance);
        this.cancelBackground();
        this.haltSources();
        this.abort?.abort();
        this.abort = controller;
        this.preparingAbort = undefined;
        ++this.revision;
        ++this.playRequest;
        this.chunkJobs.clear();
        this.chunkBuffers = replacement;
      }
      this.activeSong = this.song!; // Includes display-only renames made during preparation.
      this.activeCompositionKey = compositionKey;
      this.chunks = chunks;
      this.offset = Math.min(this.offset, Math.max(0, this.loopDuration(performance) - 1 / 44100));
      const revision = this.revision;
      this.publish({ status: this.wantsPlayback ? this.scrubbing ? 'seeking' : 'starting' : 'rendering',
        progress: this.chunkBuffers.size / chunks.length, performance });
      this.onPosition(this.offset);
      try { this.ensureContext(); } catch { /* Play surfaces browser capability errors. */ }
      warmPlaybackWorkers();
      this.warmChunks(performance, this.activeSong, signal, revision);
      if (this.wantsPlayback && !this.scrubbing) {
        if (replacement && this.ctx?.state === 'running') this.beginChunkPlayback(this.offset, revision, false);
        else if (this.pendingPlay?.revision !== revision) void this.play();
      } else if (this.chunkBuffers.has(playbackChunkAt(chunks, this.offset))) this.publish({ status: 'ready' });
    }).catch(error => { if (!signal.aborted && configuration === this.configurationRevision) this.fail(error); });
  }

  private async prepareReplacement(performance: Performance, song: Sheet, chunks: PlaybackChunk[], signal: AbortSignal) {
    const buffers = new Map<number, AudioBuffer>();
    const physicalChanged = performance !== this.state.performance;
    // Prepare a reserve independently; old playback retains scheduling priority.
    // If the playhead crosses a boundary while rendering, prepare its new chunk
    // before committing so an edit cannot install an already-expired buffer.
    while (true) {
      checkAbort(signal);
      const duration = chunks.at(-1)!.end;
      let position = Math.min(this.replacementPosition(performance), duration - 1 / 44100);
      const target = Math.min(playbackResources().aheadSeconds, duration);
      const current = playbackChunkAt(chunks, position);
      if (this.wantsPlayback && physicalChanged && !buffers.has(current)) {
        const upcoming = [...buffers.keys()].map(index => ({ index,
          distance: (chunks[index].start - position + duration) % duration }))
          .sort((a, b) => a.distance - b.distance)[0];
        // A staged future window is already ready. Let the old audio clock
        // arrive there, rather than repeatedly chasing/re-rendering its current
        // chunk. Pause/seek/cancellation are checked again at each short wait.
        if (upcoming && upcoming.distance < 24) {
          await new Promise<void>(resolve => setTimeout(resolve, 50));
          continue;
        }
        const rate = this.renderedAudioSeconds ? this.renderMs / (this.renderedAudioSeconds * 1000) : 0;
        if (rate > .25) {
          const desired = (position + Math.min(16, Math.max(6, target * rate * 3 + 2))) % duration;
          const next = chunks.find(chunk => chunk.start >= desired);
          position = next?.start ?? 0;
        }
      }
      let index = Math.max(0, playbackChunkAt(chunks, position));
      let ahead = chunks[index].start - position;
      const missing: number[] = [];
      const reserve = this.wantsPlayback && !buffers.has(current) ? target + chunks[index].end - chunks[index].start : target;
      for (let count = 0; count < chunks.length && ahead < reserve; count++) {
        if (!buffers.has(index)) missing.push(index);
        ahead += chunks[index].end - chunks[index].start;
        index = (index + 1) % chunks.length;
      }
      if (!missing.length) return buffers;
      for (const next of missing) {
        const chunk = chunks[next];
        const audio = await renderSongMix(performance, song, signal,
          { start: chunk.renderStart, end: chunk.renderEnd }, () => physicalChanged
            ? this.preparedAheadSeconds < 4 ? 4 : 1
            : this.preparedAheadSeconds < 2 ? 4 : -1);
        checkAbort(signal);
        buffers.set(next, this.toChunkBuffer(audio, chunk));
      }
      // Bound staging memory during a slow render/seek, just like active PCM.
      if (buffers.size > 4) {
        const current = playbackChunkAt(chunks, this.replacementPosition(performance));
        for (const key of buffers.keys()) if ((key - current + chunks.length) % chunks.length > 3) buffers.delete(key);
      }
    }
  }

  /** Tempo edits retain the current bar and fractional beat on the new clock. */
  private replacementPosition(performance: Performance) {
    const position = this.position();
    const old = this.state.performance;
    const index = old?.bars.findIndex(bar => position >= bar.start && position < bar.end) ?? -1;
    const before = old?.bars[index], after = performance.bars[index];
    return before && after && before.end > before.start
      ? after.start + (position - before.start) / (before.end - before.start) * (after.end - after.start)
      : old && position >= old.duration ? performance.duration + position - old.duration : position;
  }

  private cancelBackground() {
    clearTimeout(this.backgroundTimer);
    this.backgroundTimer = undefined;
    this.backgroundRunning = false;
    this.backgroundAbort?.abort();
    setPlaybackBackgroundPreparation(false);
    this.backgroundAbort = undefined;
    this.backgroundKey = '';
  }

  /** Idle work starts after the playhead neighborhood is ready. Foreground
   * playback, seeking, edits and page suspension always own the workers. */
  private warmPersistentDSP(performance: Performance, song: Sheet, compositionKey: string) {
    if (this.wantsPlayback || this.scrubbing || this.disposed || this.state.status === 'error' || this.warming?.revision === this.revision || typeof Worker === 'undefined' ||
      typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
    if (this.backgroundKey === compositionKey && this.backgroundAbort && !this.backgroundAbort.signal.aborted) return;
    this.cancelBackground();
    const controller = new AbortController();
    this.backgroundAbort = controller;
    this.backgroundKey = compositionKey;
    this.backgroundTimer = setTimeout(() => {
      this.backgroundTimer = undefined;
      this.backgroundRunning = true;
      void (async () => {
        if (!await persistentPreparedAudioAvailable()) return;
        checkAbort(controller.signal);
        setPlaybackBackgroundPreparation(true);
        try {
          await preparePlaybackDSPCache(performance, { ...songMixOptions(song), signal: controller.signal }, () => this.position());
        } finally {
          if (this.backgroundAbort === controller) setPlaybackBackgroundPreparation(false);
        }
      })().catch(error => {
        if (!controller.signal.aborted && !this.disposed) console.warn('Background DSP cache warmup failed', error);
      }).finally(() => { if (this.backgroundAbort === controller) this.backgroundRunning = false; });
    }, 500);
  }

  private ensureContext() {
    if (!this.ctx || this.ctx.state === 'closed' || this.replaceContext) {
      if (this.ctx) {
        this.ctx.onstatechange = null;
        if (this.ctx.state !== 'closed') void this.ctx.close().catch(() => {});
        this.output?.disconnect();
        this.probe?.disconnect();
      }
      this.replaceContext = false;
      const Constructor = window.AudioContext ?? window.webkitAudioContext;
      if (!Constructor) throw new Error('This browser does not support audio playback.');
      this.ctx = new Constructor({ latencyHint: 'interactive' });
      this.output = this.ctx.createGain();
      this.output.gain.value = 1;
      if (this.diagnostics) {
        this.probe = this.ctx.createAnalyser(); this.probe.fftSize = 256;
        this.output.connect(this.probe); this.probe.connect(this.ctx.destination);
      } else this.output.connect(this.ctx.destination);
      const context = this.ctx;
      this.ctx.onstatechange = () => {
        if (this.ctx !== context || !this.wantsPlayback) return;
        const state = context.state as string; // Safari also reports "interrupted".
        if (state === 'interrupted' || state === 'closed' || state === 'suspended' && this.transportStarted) {
          this.pause();
          this.publish({ error: 'Audio was interrupted. Press Play to resume.' });
        }
      };
    }
  }

  /** Some mobile browsers leave resume() pending indefinitely. Retry on a
   * fresh context on the next gesture, retaining all prepared AudioBuffers. */
  private resumeContext(context: AudioContext): Promise<void> {
    this.cancelResume?.();
    if (context.state === 'running' && !this.suspending) return Promise.resolve();
    const resumed = context.resume(); // Must run synchronously in the gesture.
    return new Promise((resolve, reject) => {
      let settled = false;
      const finish = (error?: unknown) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (this.cancelResume === cancel) this.cancelResume = undefined;
        if (error) reject(error); else resolve();
      };
      const cancel = () => finish(new DOMException('Playback start cancelled', 'AbortError'));
      const timer = setTimeout(() => {
        this.replaceContext = true;
        finish(new Error('Audio could not resume. Press Play to try again.'));
      }, 4000);
      this.cancelResume = cancel;
      resumed.then(() => finish(), error => { if (!settled) this.replaceContext = true; finish(error); });
    });
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
    const began = globalThis.performance.now();
    const job = renderSongMix(performance, song, signal,
      { start: chunk.renderStart, end: chunk.renderEnd }, priority, undefined,
      Math.max(0, Math.min(8, this.preparedAheadSeconds - 4))).then(audio => {
      checkAbort(signal);
      if (revision !== this.revision || this.disposed) throw new DOMException('Playback rendering superseded', 'AbortError');
      const buffer = this.toChunkBuffer(audio, chunk);
      this.renderedAudioSeconds += chunk.end - chunk.start;
      const elapsed = globalThis.performance.now() - began;
      this.renderMs += elapsed;
      if (chunk.end > chunk.start) {
        updateStoredRenderFactor(elapsed / ((chunk.end - chunk.start) * 1000));
      }
      this.chunkBuffers.set(index, buffer);
      this.trimChunkBuffers();
      return buffer;
    }).finally(() => {
      if (this.chunkJobs.get(index) === job) this.chunkJobs.delete(index);
    });
    this.chunkJobs.set(index, job);
    return job;
  }

  /** Small idle warmup; a larger, bounded reserve during playback. */
  private bufferNeighborhood(): number[] {
    if (!this.chunks.length) return [];
    const position = this.position();
    let index = Math.max(0, playbackChunkAt(this.chunks, position));
    let seconds = this.chunks[index].start - position;
    const indices: number[] = [];
    do {
      indices.push(index);
      seconds += this.chunks[index].end - this.chunks[index].start;
      index = (index + 1) % this.chunks.length;
    } while (seconds < (this.wantsPlayback ? playbackResources().playingAheadSeconds : playbackResources().aheadSeconds) &&
      indices.length < this.chunks.length);
    return indices;
  }

  private trimChunkBuffers() {
    const neighborhood = this.bufferNeighborhood();
    if (!neighborhood.length) return;
    const keep = new Set(neighborhood);
    keep.add((neighborhood[0] + this.chunks.length - 1) % this.chunks.length);
    if (!this.wantsPlayback) {
      for (const index of this.chunkBuffers.keys()) if (!keep.has(index)) this.chunkBuffers.delete(index);
    }
    let bytes = this.bufferedBytes;
    // Always keep the current chunk. Audio sources retain their scheduled
    // buffer references independently of this reusable lookup map.
    for (const index of [...this.chunkBuffers.keys()].sort((a,b) => this.chunkPriority(b)-this.chunkPriority(a))) {
      if (bytes <= playbackResources().playbackBufferBytes) break;
      if (index === neighborhood[0]) continue;
      const buffer = this.chunkBuffers.get(index)!;
      bytes -= buffer.length * buffer.numberOfChannels * 4;
      this.chunkBuffers.delete(index);
    }
  }

  get bufferedBytes(): number {
    return [...this.chunkBuffers.values()].reduce((bytes, buffer) => bytes + buffer.length * buffer.numberOfChannels * 4, 0);
  }

  private warmChunks(performance: Performance, song: Sheet, signal: AbortSignal, revision: number) {
    if (!this.chunks.length || this.warming?.revision === revision) return;
    const warming = { revision, promise: Promise.resolve() };
    this.warming = warming;
    warming.promise = (async () => {
      while (!signal.aborted && revision === this.revision && !this.disposed) {
        // Re-evaluate after each render so a seek promotes its neighborhood.
        const next = this.bufferNeighborhood().find(index => !this.chunkBuffers.has(index));
        if (next === undefined) break;
        const buffer = await this.ensureChunk(next, performance, song, signal, revision);
        checkAbort(signal);
        if (revision !== this.revision || this.disposed) return;
        this.chunkBuffers.set(next, buffer);
        this.trimChunkBuffers();
        this.publish({ progress: this.chunkBuffers.size / this.chunks.length,
          ...(!this.wantsPlayback && this.state.status === 'rendering' &&
            this.chunkBuffers.has(playbackChunkAt(this.chunks, this.offset)) ? { status: 'ready' as const } : {}) });
      }
    })().catch(error => {
      if (!signal.aborted && revision === this.revision) this.fail(error);
    }).finally(() => {
      if (this.warming === warming) this.warming = undefined;
      if (!signal.aborted && revision === this.revision) this.warmPersistentDSP(performance,song,this.compositionKey);
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

  private beginChunkPlayback(position: number, revision: number, measureStart = true) {
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
    this.waitingForSignal = this.diagnostics && measureStart;
    this.scheduleIndex = index;
    this.scheduleOffset = Math.max(0, position - chunk.start);
    this.scheduleWhen = when;
    this.stalledAt = undefined;
    const generation = this.playbackGeneration;
    this.requestPump(generation, revision);
    if (measureStart) this.recordTiming({ scheduledStartMs: performance.now() - this.playClickedAt + (when - this.ctx.currentTime) * 1000 });
    // Cached audio is already scheduled; do not leave the control waiting for
    // a potentially throttled animation frame to acknowledge it.
    if (this.sources.size) this.publish({ status: 'playing', error: undefined });
    // Audio scheduling must continue even when the browser stops UI frames.
    this.schedulerTimer = setInterval(() => {
      this.observeBuffering(generation, revision);
      this.requestPump(generation, revision);
      this.warmChunks(this.state.performance!, this.activeSong ?? this.song!, this.abort!.signal, revision);
      this.observeSignal();
    }, 100);
    this.warmChunks(this.state.performance, this.activeSong ?? this.song, this.abort!.signal, revision);
    this.animate();
  }

  private observeBuffering(generation: number, revision: number) {
    if (!this.currentPlayback(generation, revision) || !this.transportStarted || !this.ctx ||
      this.stalledAt !== undefined || this.scheduleWhen >= this.ctx.currentTime) return;
    // Freeze at the end of the last scheduled source, even while a worker is
    // still rendering. Pause/seek must use this exact musical position too.
    this.stalledAt = this.scheduleWhen;
    this.publish({ status: 'starting' });
    this.onPosition(this.position());
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
    const song = this.activeSong ?? this.song;
    const signal = this.abort?.signal;
    if (!signal) return;
    const horizon = playbackResources().playingAheadSeconds;
    while (this.currentPlayback(generation, revision) && this.scheduleWhen < this.ctx.currentTime + horizon) {
      const index = this.scheduleIndex;
      const chunk = this.chunks[index];
      if (!chunk) return;
      this.observeBuffering(generation, revision);
      const buffer = this.chunkBuffers.get(index) ?? await this.ensureChunk(index, performance, song, signal, revision,
        () => index === playbackChunkAt(this.chunks, this.position()) ? 0 : Math.min(3, this.chunkPriority(index) + 1));
      if (!this.currentPlayback(generation, revision) || !this.ctx || !this.mixOutput) return;

      const earliest = this.ctx.currentTime + .003;
      // A missed deadline is silence, not elapsed song time. Resume the next
      // unscheduled sample rather than dropping notes or entire sections.
      const when = Math.max(this.scheduleWhen, earliest);
      if (when - this.scheduleWhen > .02) {
        this.underruns++;
        this.bufferingSeconds += when - this.scheduleWhen;
      }
      this.anchorContextTime += when - this.scheduleWhen;
      this.scheduleWhen = when;
      this.stalledAt = undefined;
      const offset = this.scheduleOffset;
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
          if (this.state.status === 'starting') this.publish({ status: 'playing', error: undefined });
        }
      }
      this.scheduleWhen += duration - this.scheduleOffset;

      this.scheduleIndex = (index + 1) % this.chunks.length;
      this.scheduleOffset = 0;
    }
  }

  private currentPlayback(generation: number, revision: number) {
    return !this.disposed && this.wantsPlayback && generation === this.playbackGeneration && revision === this.revision;
  }

  private async prepareStartReserve(performance: Performance, song: Sheet, signal: AbortSignal, revision: number, request: number) {
    const rate = this.renderedAudioSeconds ? this.renderMs / (this.renderedAudioSeconds * 1000) : getStoredRenderFactor();
    const target = Math.min(rate > .9 ? 8 : 4, this.loopDuration());
    // Touch devices need more protection against bursts. Desktop synthesis
    // faster than the audio clock starts immediately and builds its reserve
    // while playing; near-real-time rendering banks a reserve on either profile.
    if (rate < (playbackResources().constrained ? .35 : .9) || this.preparedAheadSeconds >= target) return false;
    const position = this.offset;
    let index = Math.max(0, playbackChunkAt(this.chunks, position));
    let ahead = this.chunks[index].start - position, waited = false;
    for (let count = 0; count < this.chunks.length && ahead < target; count++) {
      if (!this.current(request, revision)) return waited;
      if (!this.chunkBuffers.has(index)) {
        waited = true;
        await this.ensureChunk(index, performance, song, signal, revision, () => 0);
      }
      ahead += this.chunks[index].end - this.chunks[index].start;
      index = (index + 1) % this.chunks.length;
    }
    return waited;
  }

  /** Called directly from click/keyboard handlers so resume retains user activation. */
  async play(inputTime?: number): Promise<void> {
    if (this.disposed || !this.song || this.state.status === 'playing') return;
    this.cancelBackground();
    if (this.state.status === 'error' && (!this.state.performance || this.activeSong && this.activeSong !== this.song)) this.configure(this.song, true);
    if (!this.wantsPlayback) {
      const enteredAt = performance.now();
      this.playClickedAt = inputTime !== undefined && Number.isFinite(inputTime) && inputTime <= enteredAt && inputTime >= enteredAt - 60_000
        ? inputTime : enteredAt;
      if (this.diagnostics) this.publish({ playbackTiming: { inputToPlayMs: enteredAt - this.playClickedAt }, outputLatencyMs: undefined });
    }
    this.wantsPlayback = true;
    if (this.scrubbing) { this.publish({ status: 'seeking' }); return; }
    const request = ++this.playRequest;
    const revision = this.revision;
    const pendingPlay = { request, revision };
    this.pendingPlay = pendingPlay;
    // Acknowledge the click immediately. Only the current chunk must be ready
    // before playback starts; remaining chunks prepare behind it.
    this.publish({ status: 'starting', error: undefined, audioStartMs: undefined });
    try {
      this.ensureContext();
      this.output!.gain.cancelScheduledValues(this.ctx!.currentTime);
      this.output!.gain.value = 1;
      const resumeStarted = globalThis.performance.now();
      await this.resumeContext(this.ctx!);
      if (!this.current(request, revision)) return;
      this.recordTiming({ contextResumeMs: globalThis.performance.now() - resumeStarted });
      const compileStarted = globalThis.performance.now();
      await this.compiling;
      if (this.current(request, revision)) this.recordTiming({ compileWaitMs: globalThis.performance.now() - compileStarted });
      if (!this.current(request, revision)) return;
      const performance = this.state.performance;
      const song = this.song;
      if (!performance?.notes.length || !song) throw new Error('This arrangement has no audible notes.');
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      const index = Math.max(0, playbackChunkAt(this.chunks, this.offset));
      const bufferStarted = globalThis.performance.now(), waitingForBuffer = !this.chunkBuffers.has(index);
      if (waitingForBuffer) await this.ensureChunk(index, performance, song, this.abort!.signal, revision, () => 0);
      if (!this.current(request, revision)) return;
      const waitingForReserve = await this.prepareStartReserve(performance, song, this.abort!.signal, revision, request);
      if (this.current(request, revision)) this.recordTiming({ bufferWaitMs: waitingForBuffer || waitingForReserve
        ? globalThis.performance.now() - bufferStarted : 0 });
      if (!this.current(request, revision)) return;
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      this.startSourcesAt(this.offset);
      this.publish({ status: 'starting', error: undefined });
      this.beginChunkPlayback(this.offset, revision);
    } catch (error) { if (this.current(request, revision)) this.fail(error); }
    finally { if (this.pendingPlay === pendingPlay) this.pendingPlay = undefined; }
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
    const clock = Math.min(this.ctx.currentTime, this.stalledAt ?? this.scheduleWhen);
    const absolute = this.anchorPosition + Math.max(0, clock - this.anchorContextTime);
    return duration > 0 ? absolute % duration : 0;
  }

  locate(seconds: number) {
    if (this.disposed || !Number.isFinite(seconds)) return;
    this.cancelBackground();
    // Compilation will clamp to the real duration once its tempo map arrives.
    const duration = this.state.performance ? this.loopDuration() : Infinity;
    this.offset = Math.max(0, Math.min(Math.max(0, duration - 1 / 44100), seconds));
    if (!this.scrubbing && this.wantsPlayback && this.state.performance && this.song && this.chunks.length) {
      if (this.ctx?.state !== 'running') {
        // A Play still awaiting resume will consume this latest offset. A seek
        // must not cancel that resume and schedule into a suspended context.
        this.onPosition(this.offset);
        return;
      }
      this.playClickedAt = performance.now();
      if (this.diagnostics) this.publish({ playbackTiming: {}, outputLatencyMs: undefined });
      this.publish({ status: 'starting', audioStartMs: undefined });
      this.startSourcesAt(this.offset);
      const request = ++this.playRequest;
      const revision = this.revision;
      const perf = this.state.performance;
      const song = this.activeSong ?? this.song;
      const index = Math.max(0, playbackChunkAt(this.chunks, this.offset));
      const begin = async () => {
        if (!this.current(request, revision)) return;
        await this.prepareStartReserve(perf, song, this.abort!.signal, revision, request);
        if (!this.current(request, revision)) return;
        this.beginChunkPlayback(this.offset, revision);
      };
      if (this.chunkBuffers.has(index)) void begin().catch(error => { if (this.current(request, revision)) this.fail(error); });
      else void this.ensureChunk(index, perf, song, this.abort!.signal, revision, () => 0).then(begin)
        .catch(error => { if (this.current(request, revision)) this.fail(error); });
    } else if (!this.scrubbing && this.state.performance && this.song && this.chunks.length) {
      // A paused seek should be ready by the time the user presses Play.
      const revision = this.revision;
      if (!this.chunkBuffers.has(Math.max(0, playbackChunkAt(this.chunks,this.offset)))) this.publish({status:'rendering'});
      this.trimChunkBuffers();
      this.warmChunks(this.state.performance, this.activeSong ?? this.song, this.abort!.signal, revision);
      void this.ensureChunk(Math.max(0, playbackChunkAt(this.chunks, this.offset)), this.state.performance,
        this.activeSong ?? this.song, this.abort!.signal, revision, () => 0).catch(error => {
        if (!this.abort?.signal.aborted && revision === this.revision) this.fail(error);
      });
    }
    this.onPosition(this.offset);
  }

  /** Suspend once for a drag; locate() previews without restarting synthesis. */
  beginScrub() {
    if (this.disposed || this.scrubbing) return;
    this.cancelBackground();
    this.offset = this.position();
    this.scrubbing = true;
    ++this.playRequest;
    this.haltSources();
    this.transportStarted = false;
    if (this.wantsPlayback) this.publish({ status: 'seeking' });
  }

  endScrub() {
    if (!this.scrubbing) return;
    this.scrubbing = false;
    if (this.wantsPlayback) void this.play();
    else this.locate(this.offset);
  }

  pause() {
    this.pauseTransport(false);
    if (this.state.performance && this.song && !this.preparingAbort) this.warmPersistentDSP(this.state.performance,this.activeSong ?? this.song,this.compositionKey);
  }

  /** Navigation/shutdown silence synchronously, including future queued sources. */
  stop() {
    if(this.disposed)return;
    this.cancelBackground();
    this.scrubbing=false;
    this.pauseTransport(true);
    if(this.output && this.ctx) {
      this.output.gain.cancelScheduledValues(this.ctx.currentTime);
      this.output.gain.value=0;
      this.output.gain.setValueAtTime(0,this.ctx.currentTime);
    }
    if(this.ctx && this.ctx.state !== 'closed' && typeof this.ctx.suspend === 'function') {
      const suspension=this.ctx.suspend().catch(()=>{}).finally(()=>{if(this.suspending===suspension)this.suspending=undefined;});
      this.suspending=suspension;
    }
  }

  private pauseTransport(immediate: boolean) {
    this.offset = this.position();
    this.wantsPlayback = false;
    ++this.playRequest;
    this.haltSources(immediate);
    if (this.state.status !== 'compiling') this.publish({ status: 'paused' });
    this.onPosition(this.offset);
  }

  toggle(inputTime?: number) { if (this.wantsPlayback || this.sources.size) this.pause(); else void this.play(inputTime); }

  private recordTiming(patch: Partial<PlaybackTiming>) {
    if (this.diagnostics) this.publish({ playbackTiming: { ...this.state.playbackTiming, ...patch } });
  }

  private observeSignal() {
    // An analyser can still contain pre-seek samples. Wait until its complete
    // observation window belongs to the newly scheduled sources.
    if (this.wantsPlayback && !this.disposed && this.waitingForSignal && this.probe && this.transportStarted && this.ctx &&
      this.ctx.currentTime >= this.anchorContextTime + this.probe.fftSize / this.ctx.sampleRate) {
      this.probe.getFloatTimeDomainData(this.probeSamples);
      if (this.probeSamples.some(sample => Math.abs(sample) > 1e-5)) {
        this.waitingForSignal = false;
        const signalObservedMs = performance.now() - this.playClickedAt;
        const outputLatencyMs = ((this.ctx.baseLatency ?? 0) + (this.ctx.outputLatency ?? 0)) * 1000;
        this.publish({ audioStartMs: signalObservedMs, outputLatencyMs });
        // This is a browser/device estimate, not a microphone measurement.
        const timestamp = this.ctx.getOutputTimestamp?.();
        const estimatedOutputMs = timestamp?.performanceTime && typeof timestamp.contextTime === 'number'
          ? timestamp.performanceTime + (this.ctx.currentTime - timestamp.contextTime) * 1000 - this.playClickedAt
          : signalObservedMs + outputLatencyMs;
        this.recordTiming({ signalObservedMs, estimatedOutputMs: Math.max(signalObservedMs, estimatedOutputMs) });
      }
    }
  }

  private animate() {
    if (!this.wantsPlayback || this.disposed) return;
    this.observeSignal();
    if (this.state.status === 'starting' && this.stalledAt === undefined && this.transportStarted && this.ctx!.currentTime >= this.anchorContextTime) {
      this.publish({ status: 'playing', error: undefined });
    }
    this.offset = this.position();
    this.onPosition(this.offset);
    this.raf = requestAnimationFrame(() => this.animate());
  }

  private haltSources(immediate = false) {
    this.cancelResume?.();
    this.playbackGeneration++;
    if (this.schedulerTimer !== undefined) clearInterval(this.schedulerTimer);
    this.schedulerTimer = undefined;
    if (this.raf !== undefined) cancelAnimationFrame(this.raf);
    this.raf = undefined;
    const gain = this.mixOutput;
    const fade = !immediate && !!gain && !!this.sources.size && this.ctx?.state === 'running' && !this.disposed;
    const now = this.ctx?.currentTime ?? 0;
    const stopAt = fade ? now + .008 : now;
    if (fade) {
      gain!.gain.cancelScheduledValues(now);
      gain!.gain.setValueAtTime(gain!.gain.value, now);
      gain!.gain.linearRampToValueAtTime(0, stopAt);
    }
    let remaining = this.sources.size;
    for (const source of this.sources) {
      source.onended = () => { source.disconnect(); if (--remaining === 0) gain?.disconnect(); };
      try { source.stop(stopAt); } catch { /* source already ended */ }
      if (!fade) source.disconnect();
    }
    this.sources.clear();
    if (!fade) gain?.disconnect();
    this.mixOutput = undefined;
    this.waitingForSignal = false;
    this.transportStarted = false;
    this.stalledAt = undefined;
    this.pump = undefined;
    this.pumpGeneration = -1;
  }

  private fail(error: unknown) {
    this.wantsPlayback = false;
    this.haltSources();
    this.publish({ status: 'error', error: error instanceof Error ? error.message : String(error), progress: 0 });
  }

  dispose() {
    this.removePageListeners?.();this.removePageListeners=undefined;
    this.disposed = true;
    this.wantsPlayback = false;
    ++this.revision; ++this.playRequest;
    this.abort?.abort();
    this.preparingAbort?.abort();
    this.cancelBackground();
    this.haltSources();
    releasePlaybackWorkers();
    releaseCompilerWorker();
    if (this.ctx) { this.ctx.onstatechange = null; void this.ctx.close().catch(() => {}); }
    this.output?.disconnect();
    this.probe?.disconnect();
    this.chunkBuffers.clear();
    this.chunkJobs.clear();
  }
}
