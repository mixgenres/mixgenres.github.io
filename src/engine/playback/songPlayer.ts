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
  /** Optional development measurement at the player's output, before hardware latency. */
  audioStartMs?: number;
  outputLatencyMs?: number;
}

/** Prepare cached section physics and one complete mix on composition edits. */
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
  private fullBuffer?: AudioBuffer;
  private fullPlaying = false;
  private fullJob?: Promise<void>;
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

  constructor(private readonly onState: (state: PlayerState) => void, private readonly onPosition: (seconds: number) => void,
    private readonly diagnostics = false) {}

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
    this.abort = new AbortController();
    const signal = this.abort.signal;
    const revision = ++this.revision;
    ++this.playRequest;
    this.song = song;
    this.fullBuffer = undefined;
    this.fullPlaying = false;
    this.fullJob = undefined;
    this.publish({ status: retainedPerformance ? 'ready' : 'compiling', composition: song, progress: 0,
      performance: retainedPerformance, error: undefined });

    this.compiling = (retainedPerformance ? Promise.resolve(retainedPerformance) : compilePerformance(song, signal)).then(performance => {
      if (signal.aborted || revision !== this.revision || this.disposed) return;
      this.offset = Math.min(this.offset, Math.max(0, this.loopDuration(performance) - 1 / 44100));
      this.publish({ status: this.wantsPlayback ? 'starting' : 'rendering', progress: 0, performance });
      this.onPosition(this.offset);
      // Create the suspended output context ahead of the first click so the
      // prepared mix can be materialized as an AudioBuffer during warmup.
      try { this.ensureContext(); } catch { /* Play surfaces browser capability errors. */ }
      // Composition edits own all expensive preparation. Play/seek/resume only
      // consume this job's completed mix; they never request new physical audio.
      this.prepareWholeSong(performance, song, signal, revision);
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
    return this.fullBuffer?.duration ?? Math.max(0.1, (performance?.duration ?? 0) + (performance?.tail ?? 0));
  }

  private prepareWholeSong(performance: Performance, song: Sheet, signal: AbortSignal, revision: number) {
    if (this.fullJob) return;
    this.fullJob = renderSongMix(performance, song, signal, undefined, () => 3, progress => {
      if (!signal.aborted && revision === this.revision && !this.disposed) this.publish({ progress });
    }).then(audio => {
      checkAbort(signal);
      if (revision !== this.revision || this.disposed) return;
      this.fullBuffer = this.toAudioBuffer(audio);
      this.publish({ status: this.wantsPlayback ? 'starting' : 'ready', progress: 1 });
    }).catch(error => {
      if (!signal.aborted && revision === this.revision) this.fail(error);
    });
  }

  private startFullMix() {
    if (!this.fullBuffer || !this.ctx || this.fullPlaying || !this.wantsPlayback) return;
    const position = this.position();
    const now = this.ctx.currentTime, when = now + .005;
    const oldSources = [...this.sources];
    const oldOutput = this.mixOutput;
    ++this.playRequest;
    this.fullPlaying = true;
    this.anchorPosition = position;
    this.anchorContextTime = when;
    this.transportStarted = true;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(1, when + .008);
    gain.connect(this.output!);
    this.mixOutput = gain;
    const source = this.ctx.createBufferSource();
    source.buffer = this.fullBuffer;
    source.loop = true;
    source.connect(gain);
    source.onended = () => { this.sources.delete(source); source.disconnect(); };
    this.sources.add(source);
    source.start(when, position % this.fullBuffer.duration);
    this.waitingForSignal = this.diagnostics;
    if (oldOutput) {
      oldOutput.gain.cancelScheduledValues(now);
      oldOutput.gain.setValueAtTime(1, when);
      oldOutput.gain.linearRampToValueAtTime(0, when + .008);
    }
    if (!oldSources.length) oldOutput?.disconnect();
    for (const old of oldSources) {
      old.onended = () => { this.sources.delete(old); old.disconnect(); if (!oldSources.some(item => this.sources.has(item))) oldOutput?.disconnect(); };
      try { old.stop(when + .01); } catch { /* already ended */ }
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
    if (!this.wantsPlayback) this.playClickedAt = performance.now();
    this.wantsPlayback = true;
    const request = ++this.playRequest;
    const revision = this.revision;
    // Acknowledge the click immediately, even while AudioContext resume or the
    // arrangement compile is pending. The control becomes Pause at once and a
    // second click can cancel this queued start.
    this.publish({ status: 'starting', error: undefined, audioStartMs: undefined });
    try {
      this.ensureContext();
      const resumed = this.ctx!.state === 'running' ? Promise.resolve() : this.ctx!.resume();
      await resumed;
      await this.compiling;
      if (this.fullJob) await this.fullJob;
      if (!this.current(request, revision)) return;
      const performance = this.state.performance;
      if (!performance?.notes.length) throw new Error('This arrangement has no audible notes.');
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      if (!this.fullBuffer) throw new Error(this.state.error ?? 'Audio preparation did not complete.');
      this.startSourcesAt(this.offset);
      this.publish({ status: 'starting', progress: 1, error: undefined });
      this.startFullMix();
      this.animate();
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
    if (this.wantsPlayback && this.state.performance && this.fullBuffer) {
      this.startSourcesAt(this.offset);
      const request = ++this.playRequest;
      const revision = this.revision;
      if (this.current(request, revision)) { this.startFullMix(); this.animate(); }
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
    if (this.waitingForSignal && this.probe) {
      this.probe.getFloatTimeDomainData(this.probeSamples);
      if (this.probeSamples.some(sample => Math.abs(sample) > 1e-5)) {
        this.waitingForSignal = false;
        this.publish({ audioStartMs: performance.now()-this.playClickedAt,
          outputLatencyMs: (this.ctx!.outputLatency ?? this.ctx!.baseLatency ?? 0)*1000 });
      }
    }
    if (this.state.status === 'starting' && this.transportStarted && this.ctx!.currentTime >= this.anchorContextTime) {
      this.publish({ status: 'playing', progress: 1, error: undefined });
    }
    this.offset = this.position();
    this.onPosition(this.offset);
    this.raf = requestAnimationFrame(() => this.animate());
  }

  private haltSources() {
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
    this.fullPlaying = false;
    this.waitingForSignal = false;
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
    if (this.ctx) { this.ctx.onstatechange = null; void this.ctx.close().catch(() => {}); }
    this.output?.disconnect();
    this.probe?.disconnect();
    this.fullBuffer = undefined;
  }
}
