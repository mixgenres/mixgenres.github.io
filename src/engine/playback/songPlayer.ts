import { checkAbort } from '../../export/audioEncoding';
import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';
import { renderSongMix } from './renderSongMix';
import { compilePerformance } from './compilePerformance';
import { type RenderedPerformanceAudio } from './mp3Export';

export type PlayerStatus = 'idle' | 'compiling' | 'ready' | 'rendering' | 'starting' | 'playing' | 'paused' | 'error';
export interface PlayerState {
  status: PlayerStatus;
  progress: number;
  performance?: Performance;
  composition?: Sheet;
  error?: string;
}

interface Segment { index: number; start: number; end: number }

/** Warm a coherent opening, then prepare one complete, shared-master song mix. */
export class SongPlayer {
  private state: PlayerState = { status: 'idle', progress: 0 };
  private song?: Sheet;
  private compositionKey = '';
  private renderKey = '';
  private abort?: AbortController;
  private previewAbort?: AbortController;
  private revision = 0;
  private playRequest = 0;
  private wantsPlayback = false;
  private ctx?: AudioContext;
  private output?: GainNode;
  private mixOutput?: GainNode;
  private fullBuffer?: AudioBuffer;
  private fullPlaying = false;
  private fullJob?: Promise<void>;
  private chunks = new Map<number, AudioBuffer>();
  private chunkJobs = new Map<number, Promise<AudioBuffer>>();
  private sources = new Set<AudioBufferSourceNode>();
  private scheduled = new Set<string>();
  private segmentCache?: { performance: Performance; segments: Segment[] };
  private lastScheduleTime = -Infinity;
  private anchorContextTime = 0;
  private anchorPosition = 0;
  private transportStarted = false;
  private scheduledThrough = 0;
  private offset = 0;
  private raf?: number;
  private schedulerTimer?: ReturnType<typeof setInterval>;
  private disposed = false;
  private compiling: Promise<void> = Promise.resolve();

  constructor(private readonly onState: (state: PlayerState) => void, private readonly onPosition: (seconds: number) => void) {}

  get snapshot(): PlayerState { return this.state; }
  get composition(): Sheet | undefined { return this.song; }
  get preparedDuration(): number { return this.fullBuffer?.duration ?? 0; }

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
    this.previewAbort?.abort();
    this.abort = new AbortController();
    this.previewAbort = new AbortController();
    const signal = this.abort.signal;
    const revision = ++this.revision;
    ++this.playRequest;
    this.song = song;
    this.chunkJobs.clear();
    this.chunks.clear();
    this.fullBuffer = undefined;
    this.fullPlaying = false;
    this.fullJob = undefined;
    this.publish({ status: retainedPerformance ? 'ready' : 'compiling', composition: song, progress: 0,
      performance: retainedPerformance, error: undefined });

    this.compiling = (retainedPerformance ? Promise.resolve(retainedPerformance) : compilePerformance(song, signal)).then(performance => {
      if (signal.aborted || revision !== this.revision || this.disposed) return;
      this.offset = Math.min(this.offset, Math.max(0, this.loopDuration(performance) - 1 / 44100));
      this.publish({ status: this.wantsPlayback ? 'starting' : 'ready', progress: 0, performance });
      this.onPosition(this.offset);
      // Create the suspended output context ahead of the first click so opening
      // clips can really be materialized as AudioBuffers during background warmup.
      try { this.ensureContext(); } catch { /* Play surfaces browser capability errors. */ }
      // Warm clips in the background; never hold the transport for all tracks.
      void this.prepareOpening(performance, signal, revision).then(() => {
        if (signal.aborted || revision !== this.revision || this.disposed) return;
        if (!this.wantsPlayback) this.publish({ status: 'ready', progress: 1 });
        this.prepareWholeSong(performance, song, signal, revision);
      }).catch(error => {
        // Background warming is opportunistic. Surface failures only when the
        // user has asked to hear the arrangement; playback retries the part.
        if (!signal.aborted && revision === this.revision && this.wantsPlayback) this.fail(error);
      });
      if (this.wantsPlayback) void this.play();
    }).catch(error => { if (!signal.aborted && revision === this.revision) this.fail(error); });
  }

  private ensureContext() {
    if (!this.ctx || this.ctx.state === 'closed') {
      const Constructor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Constructor) throw new Error('This browser does not support audio playback.');
      this.ctx = new Constructor({ latencyHint: 'playback' });
      this.output = this.ctx.createGain();
      this.output.gain.value = 1;
      this.output.connect(this.ctx.destination);
      this.ctx.onstatechange = () => {
        if (this.sources.size && this.ctx?.state !== 'running') {
          this.pause();
          this.publish({ error: 'Audio was interrupted. Press Play to resume.' });
        }
      };
    }
  }

  private segments(performance: Performance): Segment[] {
    if (this.segmentCache?.performance === performance) return this.segmentCache.segments;
    const bars = performance.bars;
    const loopEnd = this.loopDuration(performance);
    const segments: Segment[] = [];
    for (let first = 0, index = 0; first < bars.length; first += 2, index++) {
      const last = Math.min(first + 1, bars.length - 1);
      segments.push({ index, start: bars[first].start, end: last === bars.length - 1 ? loopEnd : bars[last].end });
    }
    if (!segments.length) segments.push({ index: 0, start: 0, end: loopEnd });
    this.segmentCache = { performance, segments };
    return segments;
  }

  private segment(performance: Performance, index: number) { return this.segments(performance)[index]; }

  private segmentAt(performance: Performance, seconds: number) {
    const segments = this.segments(performance);
    return segments.find(segment => seconds < segment.end) ?? segments[segments.length - 1];
  }

  private loopDuration(performance = this.state.performance) {
    return this.fullPlaying && this.fullBuffer ? this.fullBuffer.duration : Math.max(0.1, (performance?.duration ?? 0) + (performance?.tail ?? 0));
  }

  private async prepareOpening(performance: Performance, signal: AbortSignal, revision: number) {
    const opening = this.segmentAt(performance, 0);
    if (opening) await this.ensureSegment(performance, opening.index, signal, revision);
  }

  private ensureSegment(performance: Performance, index: number, signal: AbortSignal, revision: number): Promise<AudioBuffer> {
    const cached = this.chunks.get(index);
    if (cached) return Promise.resolve(cached);
    const pending = this.chunkJobs.get(index);
    if (pending) return pending;
    const segment = this.segment(performance, index)!;
    const renderSignal = this.previewAbort?.signal ?? signal;
    const task = renderSongMix(performance, this.song!, renderSignal, segment, () => {
      const position = this.position();
      return this.wantsPlayback && position >= segment.start && position < segment.end ? 0 : 1;
    }).then(audio => {
      checkAbort(signal);
      if (revision !== this.revision || this.disposed) throw new DOMException('Playback segment was superseded', 'AbortError');
      const buffer = this.toAudioBuffer(audio);
      this.chunks.set(index, buffer);
      return buffer;
    }).finally(() => { if (this.chunkJobs.get(index) === task) this.chunkJobs.delete(index); });
    this.chunkJobs.set(index, task);
    return task;
  }

  private prepareWholeSong(performance: Performance, song: Sheet, signal: AbortSignal, revision: number) {
    if (this.fullJob) return;
    this.fullJob = renderSongMix(performance, song, signal, undefined, () => 3).then(audio => {
      checkAbort(signal);
      if (revision !== this.revision || this.disposed) return;
      this.fullBuffer = this.toAudioBuffer(audio);
      if (this.wantsPlayback && this.ctx?.state === 'running') this.startFullMix();
      else this.publish({ progress: 1 });
      this.previewAbort?.abort();
      this.chunks.clear();
    }).catch(error => {
      if (!signal.aborted && revision === this.revision) this.publish({ error: `Could not finish preparing audio: ${error instanceof Error ? error.message : String(error)}` });
    });
  }

  private startFullMix() {
    if (!this.fullBuffer || !this.ctx || this.fullPlaying || !this.wantsPlayback) return;
    const position = this.position() + (this.transportStarted ? .02 : 0);
    const now = this.ctx.currentTime, when = now + .02;
    const oldSources = [...this.sources];
    const oldOutput = this.mixOutput;
    ++this.playRequest;
    this.scheduled.clear();
    this.fullPlaying = true;
    this.anchorPosition = position;
    this.anchorContextTime = when;
    this.transportStarted = true;
    this.scheduledThrough = Infinity;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(1, when + .025);
    gain.connect(this.output!);
    this.mixOutput = gain;
    const source = this.ctx.createBufferSource();
    source.buffer = this.fullBuffer;
    source.loop = true;
    source.connect(gain);
    source.onended = () => { this.sources.delete(source); source.disconnect(); };
    this.sources.add(source);
    source.start(when, position % this.fullBuffer.duration);
    if (oldOutput) {
      oldOutput.gain.cancelScheduledValues(now);
      oldOutput.gain.setValueAtTime(1, when);
      oldOutput.gain.linearRampToValueAtTime(0, when + .025);
    }
    if (!oldSources.length) oldOutput?.disconnect();
    for (const old of oldSources) {
      old.onended = () => { this.sources.delete(old); old.disconnect(); if (!oldSources.some(item => this.sources.has(item))) oldOutput?.disconnect(); };
      try { old.stop(when + .03); } catch { /* already ended */ }
    }
    this.publish({ status: 'playing', progress: 1, error: undefined });
  }

  private toAudioBuffer(audio: RenderedPerformanceAudio) {
    if (audio.buffer) return audio.buffer;
    const buffer = this.ctx!.createBuffer(2, audio.left.length, audio.sampleRate);
    buffer.getChannelData(0).set(audio.left);
    buffer.getChannelData(1).set(audio.right);
    return buffer;
  }

  /** Called directly from click/keyboard handlers so resume retains user activation. */
  async play(): Promise<void> {
    if (this.disposed || !this.song || this.state.status === 'playing') return;
    this.wantsPlayback = true;
    const request = ++this.playRequest;
    const revision = this.revision;
    // Acknowledge the click immediately, even while AudioContext resume or the
    // arrangement compile is pending. The control becomes Pause at once and a
    // second click can cancel this queued start.
    this.publish({ status: 'starting', error: undefined });
    try {
      this.ensureContext();
      const resumed = this.ctx!.state === 'running' ? Promise.resolve() : this.ctx!.resume();
      await resumed;
      await this.compiling;
      if (!this.current(request, revision)) return;
      const performance = this.state.performance;
      if (!performance?.notes.length) throw new Error('This arrangement has no audible notes.');
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      this.startSourcesAt(this.offset);
      this.publish({ status: 'starting', progress: 1, error: undefined });
      if (this.fullBuffer) this.startFullMix(); else this.scheduleAhead();
      this.animate();
    } catch (error) { if (this.current(request, revision)) this.fail(error); }
  }

  private current(request: number, revision: number) {
    return !this.disposed && this.wantsPlayback && request === this.playRequest && revision === this.revision;
  }

  private startSourcesAt(position: number, preserveTimers = false) {
    // On a buffer underrun, already played notes can finish their natural
    // release while the transport waits for the next clip.
    if (!preserveTimers) {
      this.haltSources();
      this.mixOutput = this.ctx?.createGain();
      this.mixOutput?.connect(this.output!);
      this.fullPlaying = false;
    }
    this.offset = position;
    this.anchorPosition = position;
    this.anchorContextTime = 0;
    this.transportStarted = false;
    this.scheduledThrough = position;
    this.lastScheduleTime = -Infinity;
    this.scheduled.clear();
  }

  private advancePlayback() {
    if (!this.wantsPlayback || !this.ctx || !this.state.performance || !this.transportStarted || this.fullPlaying) return;
    const absolute = this.anchorPosition + Math.max(0, this.ctx.currentTime - this.anchorContextTime);
    if (absolute <= this.scheduledThrough) return;
    const boundary = this.scheduledThrough;
    // Never consume a segment that has not rendered. Retire the old schedule,
    // retain playback intent, and automatically resume at this exact boundary.
    ++this.playRequest;
    this.startSourcesAt(boundary % this.loopDuration(), true);
    this.publish({ status: 'starting' });
  }

  private scheduleAhead() {
    if (!this.wantsPlayback || !this.ctx || !this.state.performance || this.fullPlaying) return;
    if (this.fullBuffer) { this.startFullMix(); return; }
    if (this.ctx.currentTime - this.lastScheduleTime < 0.1) return;
    this.lastScheduleTime = this.ctx.currentTime;
    const performance = this.state.performance;
    const loopDuration = this.loopDuration(performance);
    const absolutePosition = this.transportStarted
      ? this.anchorPosition + Math.max(0, this.ctx.currentTime - this.anchorContextTime) : this.offset;
    const currentCycle = Math.floor(absolutePosition / loopDuration);
    const horizon = absolutePosition + 8;
    for (let cycle = currentCycle; cycle <= currentCycle + 1; cycle++) {
      for (const segment of this.segments(performance)) {
        const segmentStart = cycle * loopDuration + segment.start;
        const segmentEnd = cycle * loopDuration + segment.end;
        if (segmentEnd <= absolutePosition || segmentStart > horizon) continue;
        const token = `${cycle}:${segment.index}`;
        if (this.scheduled.has(token)) continue;
        // Reserve the whole ensemble before awaiting any render. A pending job
        // receives one completion callback, and all parts enter together.
        this.scheduled.add(token);
        const request = this.playRequest, revision = this.revision, signal = this.abort!.signal;
        void this.ensureSegment(performance, segment.index, signal, revision).then(buffer => {
          if (!this.current(request, revision) || !this.ctx) return;
          this.advancePlayback();
          if (!this.current(request, revision)) return;
          const now = this.ctx.currentTime;
          const currentAbsolute = this.transportStarted
            ? this.anchorPosition + Math.max(0, now - this.anchorContextTime) : this.offset;
          // Ready future clips wait for any earlier missing segment. Do not
          // schedule them against a clock that may need to stop and re-anchor.
          if (segmentStart > this.scheduledThrough + 1e-6) {
            this.scheduled.delete(token);
            return;
          }
          if (!this.transportStarted) {
            if (currentAbsolute < segmentStart || currentAbsolute >= segmentEnd) {
              this.scheduled.delete(token);
              return;
            }
            this.anchorPosition = currentAbsolute;
            this.anchorContextTime = now + 0.02;
            this.transportStarted = true;
          }
          const localOffset = Math.max(0, currentAbsolute - segmentStart);
          if (localOffset >= segment.end - segment.start) {
            this.scheduled.delete(token);
            this.advancePlayback();
            return;
          }
          const when = Math.max(now + 0.01, this.anchorContextTime + segmentStart - this.anchorPosition);
          const duration = Math.min(buffer.duration, segment.end - segment.start) - localOffset;
          if (duration > 0) {
            const source = this.ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(this.mixOutput ?? this.output!);
            source.onended = () => { this.sources.delete(source); source.disconnect(); };
            this.sources.add(source);
            source.start(when, localOffset, duration);
          }
          this.scheduledThrough = Math.max(this.scheduledThrough, segmentEnd);
        }).catch(error => {
          if (this.current(request, revision) && !(error instanceof DOMException && error.name === 'AbortError')) this.fail(error);
        });
      }
    }
  }

  position(): number {
    if (!this.wantsPlayback || !this.ctx || !this.state.performance) return this.offset;
    if (!this.transportStarted) return this.offset;
    const duration = this.loopDuration();
    const absolute = Math.min(this.scheduledThrough, this.anchorPosition + Math.max(0, this.ctx.currentTime - this.anchorContextTime));
    return duration > 0 ? absolute % duration : 0;
  }

  locate(seconds: number) {
    if (!Number.isFinite(seconds)) return;
    const duration = this.loopDuration();
    this.offset = Math.max(0, Math.min(Math.max(0, duration - 1 / 44100), seconds));
    if (this.wantsPlayback && this.state.performance) {
      this.startSourcesAt(this.offset);
      const request = ++this.playRequest;
      const revision = this.revision;
      if (this.current(request, revision)) { if (this.fullBuffer) this.startFullMix(); else this.scheduleAhead(); this.animate(); }
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
    if (this.schedulerTimer === undefined) this.schedulerTimer = setInterval(() => {
      this.advancePlayback();
      this.scheduleAhead();
    }, 100);
    this.advancePlayback();
    if (this.state.status === 'starting' && this.transportStarted && this.ctx!.currentTime >= this.anchorContextTime) {
      this.publish({ status: 'playing', progress: 1, error: undefined });
    }
    this.offset = this.position();
    this.onPosition(this.offset);
    this.scheduleAhead();
    this.raf = requestAnimationFrame(() => this.animate());
  }

  private haltSources(preserveTimers = false) {
    if (!preserveTimers) {
      if (this.schedulerTimer !== undefined) clearInterval(this.schedulerTimer);
      this.schedulerTimer = undefined;
      if (this.raf !== undefined) cancelAnimationFrame(this.raf);
      this.raf = undefined;
    }
    for (const source of this.sources) {
      source.onended = () => source.disconnect();
      try { source.stop(); } catch { /* source already ended */ }
      source.disconnect();
    }
    this.sources.clear();
    this.mixOutput?.disconnect();
    this.mixOutput = undefined;
    this.fullPlaying = false;
    this.scheduled.clear();
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
    this.previewAbort?.abort();
    this.haltSources();
    if (this.ctx) { this.ctx.onstatechange = null; void this.ctx.close().catch(() => {}); }
    this.output?.disconnect();
    this.fullBuffer = undefined;
    this.chunks.clear();
    this.chunkJobs.clear();
  }
}
