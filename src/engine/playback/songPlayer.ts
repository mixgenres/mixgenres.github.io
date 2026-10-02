import { checkAbort, yieldToUI } from '../../export/audioEncoding';
import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';
import { compilePerformance } from './compilePerformance';
import { renderPerformanceToAudio } from './mp3Export';

export type PlayerStatus = 'idle' | 'compiling' | 'ready' | 'rendering' | 'starting' | 'playing' | 'paused' | 'error';
export interface PlayerState {
  status: PlayerStatus;
  progress: number;
  performance?: Performance;
  composition?: Sheet;
  error?: string;
}

/** One immutable composition -> one completed render -> one native audio source.
 * No UI timers, note scheduling, or graph commits participate in musical timing.
 */
export class SongPlayer {
  private state: PlayerState = { status: 'idle', progress: 0 };
  private song?: Sheet;
  private compositionKey = "";
  private abort?: AbortController;
  private revision = 0;
  private playRequest = 0;
  private wantsPlayback = false;
  private ctx?: AudioContext;
  private gain?: GainNode;
  private buffer?: AudioBuffer;
  private source?: AudioBufferSourceNode;
  private sourceGain?: GainNode;
  private startedAt = 0;
  private offset = 0;
  private raf?: number;
  private disposed = false;
  private preparing?: Promise<void>;
  private compiling: Promise<void> = Promise.resolve();

  constructor(private readonly onState: (state: PlayerState) => void, private readonly onPosition: (seconds: number) => void) {}

  get snapshot(): PlayerState { return this.state; }
  get composition(): Sheet | undefined { return this.song; }

  private publish(patch: Partial<PlayerState>) {
    if (this.disposed) return;
    this.state = { ...this.state, ...patch };
    this.onState(this.state);
  }

  configure(song: Sheet, force = false): void {
    if (this.disposed || !force && this.song === song) return;
    if (this.song && !force) {
      const previous = this.song as unknown as Record<string, unknown>;
      const next = song as unknown as Record<string, unknown>;
      const musicalKeys = Object.keys(next).filter(key => key !== 'title');
      if (musicalKeys.length === Object.keys(previous).filter(key => key !== 'title').length &&
          musicalKeys.every(key => next[key] === previous[key])) {
        this.song = song;
        this.publish({ composition: song });
        return;
      }
    }
    const compositionKey = JSON.stringify({ ...song, title: '', tracks: song.tracks.map(track => {
      const musical = { ...track } as Record<string, unknown>;
      delete musical.volume; delete musical.pan; delete musical.solo;
      return musical;
    }) });
    const retainedPerformance = !force && compositionKey === this.compositionKey ? this.state.performance : undefined;
    this.compositionKey = compositionKey;
    this.offset = this.position();
    this.haltSource();
    this.abort?.abort();
    this.abort = new AbortController();
    const signal = this.abort.signal;
    const revision = ++this.revision;
    ++this.playRequest;
    this.song = song;
    this.buffer = undefined;
    this.preparing = undefined;
    this.publish({ status: retainedPerformance ? 'ready' : 'compiling', composition: song, progress: 0, performance: retainedPerformance, error: undefined });
    this.compiling = (retainedPerformance ? Promise.resolve(retainedPerformance) : compilePerformance(song, signal)).then(performance => {
      if (signal.aborted || revision !== this.revision || this.disposed) return;
      this.offset = Math.min(this.offset, Math.max(0, performance.duration - 1 / 44100));
      this.publish({ status: 'ready', progress: 0, performance });
      this.onPosition(this.offset);
      if (this.wantsPlayback) void this.play();
    }).catch(error => { if (!signal.aborted && revision === this.revision) this.fail(error); });
  }

  /** Called directly from click/keyboard handlers so resume retains user activation. */
  async play(): Promise<void> {
    if (this.disposed || !this.song || this.state.status === 'playing') return;
    if (this.state.status === 'error' && !this.state.performance) this.configure(this.song, true);
    this.wantsPlayback = true;
    const request = ++this.playRequest;
    const revision = this.revision;
    try {
      if (!this.ctx || this.ctx.state === 'closed') {
        const Constructor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Constructor) throw new Error('This browser does not support audio playback.');
        this.ctx = new Constructor({ latencyHint: 'playback' });
        this.gain = this.ctx.createGain();
        this.gain.gain.value = 0.85;
        this.gain.connect(this.ctx.destination);
        this.ctx.onstatechange = () => {
          if (this.source && this.ctx?.state !== 'running') {
            this.pause();
            this.publish({ error: 'Audio was interrupted. Press Play to resume.' });
          }
        };
      }
      // Invoke resume before the first await: Safari/iOS require the user gesture.
      const resumed = this.ctx.state === 'running' ? Promise.resolve() : this.ctx.resume();
      if (this.state.status !== 'compiling') this.publish({ status: this.buffer ? 'starting' : 'rendering', error: undefined });
      await resumed;
      await this.compiling;
      if (!this.current(request, revision)) return;
      await this.prepareAudio();
      if (!this.current(request, revision)) return;
      if (this.ctx.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      if (!this.buffer || !this.state.performance) throw new Error('No compiled audio is ready.');
      this.publish({ status: 'starting' });
      this.startSource();

    } catch (error) { if (this.current(request, revision)) this.fail(error); }
  }

  private current(request: number, revision: number) {
    return !this.disposed && this.wantsPlayback && request === this.playRequest && revision === this.revision;
  }

  private prepareAudio(): Promise<void> {
    if (this.buffer) return Promise.resolve();
    if (this.preparing) return this.preparing;
    const song = this.song!, performance = this.state.performance;
    if (!performance?.notes.length) return Promise.reject(new Error('This arrangement has no audible notes.'));
    const signal = this.abort!.signal, revision = this.revision;
    this.publish({ status: 'rendering', progress: 0 });
    const task = renderPerformanceToAudio(performance, {
      signal, trackInstruments: new Map(song.tracks.map(track => [track.id, track.instrumentId ?? track.instrument])),
      trackRoles: new Map(song.tracks.map(track => [track.id, track.role])), worldId: song.worldId, styleId: song.styleId,
      mixState: {
        volume: Object.fromEntries(song.tracks.map(track => [track.id, track.volume ?? 1])),
        pan: Object.fromEntries(song.tracks.filter(track => track.pan !== undefined).map(track => [track.id, track.pan!])),
        muted: Object.fromEntries(song.tracks.map(track => [track.id, !!track.muted])),
        solo: Object.fromEntries(song.tracks.map(track => [track.id, !!track.solo])),
      },
    }, progress => { if (!signal.aborted && revision === this.revision && this.wantsPlayback) this.publish({ progress }); })
      .then(async audio => {
        if (signal.aborted || revision !== this.revision || this.disposed) return;
        let peak = 0;
        let lastYield = globalThis.performance.now();
        for (let i = 0; i < audio.left.length; i++) {
          if (!Number.isFinite(audio.left[i]) || !Number.isFinite(audio.right[i])) throw new Error('Audio rendering produced invalid samples.');
          peak = Math.max(peak, Math.abs(audio.left[i]), Math.abs(audio.right[i]));
          if (i % 65536 === 0 && globalThis.performance.now() - lastYield > 16) {
            await yieldToUI(); checkAbort(signal);
            lastYield = globalThis.performance.now();
          }
        }
        if (peak < 1e-9) throw new Error('This arrangement is silent. Enable an instrument to play.');
        const buffer = audio.buffer ?? this.ctx!.createBuffer(2, audio.left.length, audio.sampleRate);
        if (!audio.buffer) { buffer.getChannelData(0).set(audio.left); buffer.getChannelData(1).set(audio.right); }
        // Fixed output gain preserves the computed dynamics and prevents clipping.
        this.gain!.gain.value = 0.85 * (peak > 0.965 ? 0.965 / peak : 1);
        checkAbort(signal);
        if (revision !== this.revision || this.disposed) return;
        this.buffer = buffer;
      }).finally(() => { if (this.preparing === task) this.preparing = undefined; });
    this.preparing = task;
    return task;
  }

  private startSource() {
    this.haltSource();
    const source = this.ctx!.createBufferSource();
    source.buffer = this.buffer!;
    source.loop = true;
    source.loopStart = 0;
    // The completed render includes the final resonant/reverb tail. Loop the
    // complete audio so the final musical sentence is never cut at its last bar.
    source.loopEnd = this.buffer!.duration;
    const envelope = this.ctx!.createGain();
    source.connect(envelope);
    envelope.connect(this.gain!);
    source.onended = () => { if (this.source === source) this.pause(); };
    this.startedAt = this.ctx!.currentTime + 0.02;
    envelope.gain.setValueAtTime(0, this.startedAt);
    envelope.gain.linearRampToValueAtTime(1, this.startedAt + 0.008);
    source.start(this.startedAt, this.offset);
    this.source = source;
    this.sourceGain = envelope;
    this.animate();
  }

  position(): number {
    if (!this.source || !this.ctx) return this.offset;
    const duration = this.buffer?.duration ?? 0;
    const elapsed = Math.max(0, this.ctx.currentTime - this.startedAt);
    return duration > 0 ? (this.offset + elapsed) % duration : 0;
  }

  locate(seconds: number) {
    if (!Number.isFinite(seconds)) return;
    const duration = this.state.performance?.duration ?? 0;
    this.offset = Math.max(0, Math.min(Math.max(0, duration - 1 / 44100), seconds));
    if (this.source) this.startSource();
    this.onPosition(this.offset);
  }

  pause() {
    this.offset = this.position();
    this.wantsPlayback = false;
    ++this.playRequest;
    this.haltSource();
    if (this.state.status !== 'compiling') this.publish({ status: 'paused' });
    this.onPosition(this.offset);
  }

  toggle() { if (this.wantsPlayback || this.source) this.pause(); else void this.play(); }

  private animate() {
    if (!this.source || this.disposed) return;
    if (this.state.status === 'starting' && this.ctx!.currentTime >= this.startedAt) {
      this.publish({ status: 'playing', progress: 1, error: undefined });
    }
    this.onPosition(this.position());
    this.raf = requestAnimationFrame(() => this.animate());
  }

  private haltSource() {
    if (this.raf !== undefined) cancelAnimationFrame(this.raf);
    this.raf = undefined;
    const source = this.source, envelope = this.sourceGain;
    this.source = undefined;
    this.sourceGain = undefined;
    if (source) {
      source.onended = () => { source.disconnect(); envelope?.disconnect(); };
      const now = this.ctx?.currentTime ?? 0;
      if (envelope && this.ctx?.state === 'running') {
        envelope.gain.cancelScheduledValues(now);
        envelope.gain.setValueAtTime(envelope.gain.value, now);
        envelope.gain.linearRampToValueAtTime(0, now + 0.008);
        source.stop(now + 0.008);
      } else {
        source.stop(); source.disconnect(); envelope?.disconnect();
      }
    }
  }

  private fail(error: unknown) {
    this.wantsPlayback = false;
    this.haltSource();
    this.publish({ status: 'error', error: error instanceof Error ? error.message : String(error), progress: 0 });
  }

  dispose() {
    this.disposed = true;
    this.wantsPlayback = false;
    ++this.revision; ++this.playRequest;
    this.abort?.abort();
    this.haltSource();
    if (this.ctx) { this.ctx.onstatechange = null; void this.ctx.close().catch(() => {}); }
    this.gain?.disconnect();
    this.buffer = undefined;
  }
}
