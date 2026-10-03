import { checkAbort } from '../../export/audioEncoding';
import type { Sheet } from '../sheet/sheet';
import type { Track } from '../../types';
import type { Performance } from '../band/performanceData';
import { compilePerformance } from './compilePerformance';
import { renderPerformanceToAudio, type RenderedPerformanceAudio } from './mp3Export';

export type PlayerStatus = 'idle' | 'compiling' | 'ready' | 'rendering' | 'starting' | 'playing' | 'paused' | 'error';
export interface PlayerState {
  status: PlayerStatus;
  progress: number;
  performance?: Performance;
  composition?: Sheet;
  error?: string;
}

interface Segment { index: number; start: number; end: number }
interface TrackOutput { gain: GainNode; pan: StereoPannerNode }

/**
 * Playback renders two-bar, isolated track segments. The opening segment is
 * warmed in the background with the arrangement, then the scheduler asks for
 * upcoming segments only as playback approaches them. Offline instrument and
 * master processing remain in the shared renderer; Web Audio only schedules
 * and sums ready clips.
 */
export class SongPlayer {
  private state: PlayerState = { status: 'idle', progress: 0 };
  private song?: Sheet;
  private compositionKey = '';
  private abort?: AbortController;
  private revision = 0;
  private playRequest = 0;
  private wantsPlayback = false;
  private ctx?: AudioContext;
  private output?: GainNode;
  private trackOutputs = new Map<string, TrackOutput>();
  private chunks = new Map<string, AudioBuffer>();
  private chunkJobs = new Map<string, Promise<AudioBuffer>>();
  private sources = new Set<AudioBufferSourceNode>();
  private scheduled = new Set<string>();
  private anchorContextTime = 0;
  private anchorPosition = 0;
  private transportStarted = false;
  private offset = 0;
  private raf?: number;
  private disposed = false;
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
        this.updateTrackOutputs();
        this.publish({ composition: song });
        return;
      }
    }

    const compositionKey = JSON.stringify({ ...song, title: '', tracks: song.tracks.map(track => {
      const musical = { ...track } as Record<string, unknown>;
      delete musical.volume; delete musical.pan; delete musical.solo; delete musical.muted;
      return musical;
    }) });
    const retainedPerformance = !force && compositionKey === this.compositionKey ? this.state.performance : undefined;
    const retainedChunks = !!retainedPerformance;
    this.compositionKey = compositionKey;
    this.offset = this.position();
    this.haltSources();
    this.abort?.abort();
    this.abort = new AbortController();
    const signal = this.abort.signal;
    const revision = ++this.revision;
    ++this.playRequest;
    this.song = song;
    // In-flight jobs captured the old AbortSignal even if their composition is
    // still reusable. Keep completed buffers, but let the new revision restart
    // any unfinished renders with its own signal.
    this.chunkJobs.clear();
    if (!retainedChunks) this.chunks.clear();
    this.updateTrackOutputs();
    this.publish({ status: retainedPerformance ? 'ready' : 'compiling', composition: song, progress: 0,
      performance: retainedPerformance, error: undefined });

    this.compiling = (retainedPerformance ? Promise.resolve(retainedPerformance) : compilePerformance(song, signal)).then(performance => {
      if (signal.aborted || revision !== this.revision || this.disposed) return;
      this.offset = Math.min(this.offset, Math.max(0, this.loopDuration(performance) - 1 / 44100));
      this.publish({ status: 'ready', progress: 0, performance });
      this.updateTrackOutputs();
      this.onPosition(this.offset);
      // Create the suspended output context ahead of the first click so opening
      // clips can really be materialized as AudioBuffers during background warmup.
      try { this.ensureContext(); } catch { /* Play surfaces browser capability errors. */ }
      // Warm clips in the background; never hold the transport for all tracks.
      void this.prepareOpening(performance, signal, revision).then(() => {
        if (signal.aborted || revision !== this.revision || this.disposed) return;
        if (!this.wantsPlayback) this.publish({ status: 'ready', progress: 1 });
        const next = this.segmentAt(performance, 0).index + 1;
        if (this.segment(performance, next)) void this.ensureSegment(performance, next, signal, revision).catch(() => {});
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
      this.output.gain.value = 0.85;
      this.output.connect(this.ctx.destination);
      this.ctx.onstatechange = () => {
        if (this.sources.size && this.ctx?.state !== 'running') {
          this.pause();
          this.publish({ error: 'Audio was interrupted. Press Play to resume.' });
        }
      };
      this.trackOutputs.clear();
      this.updateTrackOutputs();
    }
  }

  private updateTrackOutputs() {
    if (!this.ctx || !this.output || !this.song) return;
    const ids = new Set(this.song.tracks.map(track => track.id));
    for (const [id, nodes] of this.trackOutputs) {
      if (ids.has(id)) continue;
      nodes.gain.disconnect(); nodes.pan.disconnect(); this.trackOutputs.delete(id);
    }
    for (const track of this.song.tracks) {
      let nodes = this.trackOutputs.get(track.id);
      if (!nodes) {
        const pan = this.ctx.createStereoPanner();
        const gain = this.ctx.createGain();
        pan.connect(gain); gain.connect(this.output);
        nodes = { gain, pan };
        this.trackOutputs.set(track.id, nodes);
      }
      nodes.gain.gain.setTargetAtTime(this.trackLevel(track), this.ctx.currentTime, 0.015);
      nodes.pan.pan.setTargetAtTime(track.pan ?? 0, this.ctx.currentTime, 0.015);
    }
  }

  private trackLevel(track: Track) {
    const hasSolo = this.song?.tracks.some(candidate => candidate.solo);
    return track.muted || (hasSolo && !track.solo) ? 0 : track.volume ?? 1;
  }

  private audibleTrackIds(performance: Performance, segment: Segment) {
    const tracks = new Map((this.song?.tracks ?? []).map(track => [track.id, track]));
    const hasSolo = [...tracks.values()].some(track => track.solo);
    return [...new Set(performance.notes.filter(note => note.time < segment.end && note.time + note.dur > segment.start)
      .map(note => note.trackId))].filter(id => {
        const track = tracks.get(id);
        return !!track && !track.muted && (!hasSolo || !!track.solo);
      });
  }

  private segments(performance: Performance): Segment[] {
    const bars = performance.bars;
    const loopEnd = this.loopDuration(performance);
    const segments: Segment[] = [];
    for (let first = 0, index = 0; first < bars.length; first += 2, index++) {
      const last = Math.min(first + 1, bars.length - 1);
      segments.push({ index, start: bars[first].start, end: last === bars.length - 1 ? loopEnd : bars[last].end });
    }
    if (!segments.length) segments.push({ index: 0, start: 0, end: loopEnd });
    return segments;
  }

  private segment(performance: Performance, index: number) { return this.segments(performance)[index]; }

  private segmentAt(performance: Performance, seconds: number) {
    const segments = this.segments(performance);
    return segments.find(segment => seconds < segment.end) ?? segments[segments.length - 1];
  }

  private loopDuration(performance = this.state.performance) {
    return Math.max(0.1, (performance?.duration ?? 0) + (performance?.tail ?? 0));
  }

  private chunkKey(trackId: string, index: number) { return `${index}:${trackId}`; }

  private async prepareOpening(performance: Performance, signal: AbortSignal, revision: number) {
    const opening = this.segmentAt(performance, 0);
    if (!opening || !this.audibleTrackIds(performance, opening).length) return;
    await this.ensureSegment(performance, opening.index, signal, revision, true);
  }

  private ensureSegment(performance: Performance, index: number, signal: AbortSignal, revision: number, report = false): Promise<void> {
    const segment = this.segment(performance, index);
    if (!segment) return Promise.resolve();
    const ids = this.audibleTrackIds(performance, segment);
    if (!ids.length) return Promise.resolve();
    let completed = 0;
    return Promise.all(ids.map(trackId => this.ensurePart(performance, segment, trackId, signal, revision).then(() => {
      completed++;
      if (report && revision === this.revision) this.publish({ progress: completed / ids.length });
    }))).then(() => undefined);
  }

  private ensurePart(performance: Performance, segment: Segment, trackId: string, signal: AbortSignal, revision: number): Promise<AudioBuffer> {
    const key = this.chunkKey(trackId, segment.index);
    const cached = this.chunks.get(key);
    if (cached) return Promise.resolve(cached);
    const pending = this.chunkJobs.get(key);
    if (pending) return pending;
    const track = this.song?.tracks.find(item => item.id === trackId);
    if (!track) return Promise.reject(new Error(`Missing playback part ${trackId}.`));
    const task = renderPerformanceToAudio(performance, {
      selectedTrackIds: [trackId], renderWindow: { start: segment.start, end: segment.end }, signal,
      trackInstruments: new Map([[trackId, track.instrumentId ?? track.instrument]]),
      trackRoles: new Map([[trackId, track.role]]), worldId: this.song?.worldId, styleId: this.song?.styleId,
      // Keep the existing isolated track render and mastering path. User faders,
      // mute and solo remain live controls on the per-part Web Audio output.
      mixState: { volume: { [trackId]: 1 }, solo: { [trackId]: true } },
    }, fraction => {
      if (revision === this.revision && this.wantsPlayback) this.publish({
        ...(this.state.status === 'playing' || this.state.status === 'starting' ? {} : { status: 'rendering' }),
        progress: fraction,
      });
    }).then(audio => {
      checkAbort(signal);
      if (revision !== this.revision || this.disposed) throw new DOMException('Playback segment was superseded', 'AbortError');
      const buffer = this.toAudioBuffer(audio);
      this.chunks.set(key, buffer);
      return buffer;
    }).finally(() => { if (this.chunkJobs.get(key) === task) this.chunkJobs.delete(key); });
    this.chunkJobs.set(key, task);
    return task;
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
    try {
      this.ensureContext();
      const resumed = this.ctx!.state === 'running' ? Promise.resolve() : this.ctx!.resume();
      await resumed;
      await this.compiling;
      if (!this.current(request, revision)) return;
      const performance = this.state.performance;
      if (!performance?.notes.length) throw new Error('This arrangement has no audible notes.');
      if (this.ctx!.state !== 'running') throw new Error('Audio is suspended. Press Play to resume.');
      this.updateTrackOutputs();
      this.startSourcesAt(this.offset);
      this.publish({ status: 'starting', progress: 1, error: undefined });
      this.scheduleAhead();
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
    this.scheduled.clear();
  }

  private scheduleAhead() {
    if (!this.wantsPlayback || !this.ctx || !this.state.performance) return;
    const performance = this.state.performance;
    const loopDuration = this.loopDuration(performance);
    const absolutePosition = this.transportStarted
      ? this.anchorPosition + Math.max(0, this.ctx.currentTime - this.anchorContextTime)
      : this.offset;
    const currentCycle = Math.floor(absolutePosition / loopDuration);
    const localPosition = absolutePosition % loopDuration;
    const horizon = localPosition + 8;
    const segments = this.segments(performance);
    for (let cycle = currentCycle; cycle <= currentCycle + 1; cycle++) {
      for (const segment of segments) {
        const cycleStart = cycle * loopDuration + segment.start;
        const cycleEnd = cycle * loopDuration + segment.end;
        if (cycleEnd <= absolutePosition || cycleStart > currentCycle * loopDuration + horizon) continue;
        const audibleTrackIds = this.audibleTrackIds(performance, segment);
        if (!audibleTrackIds.length && !this.transportStarted && cycle === currentCycle &&
            localPosition >= segment.start && localPosition < segment.end) {
          // A deliberately silent opening (or a fully muted mix) needs no
          // render gate; let the playhead advance through the silence.
          this.anchorPosition = this.offset;
          this.anchorContextTime = this.ctx.currentTime + 0.02;
          this.transportStarted = true;
        }
        for (const trackId of audibleTrackIds) {
          const token = `${cycle}:${this.chunkKey(trackId, segment.index)}`;
          if (this.scheduled.has(token)) continue;
          const request = this.playRequest, revision = this.revision, signal = this.abort!.signal;
          void this.ensurePart(performance, segment, trackId, signal, revision).then(buffer => {
            if (!this.wantsPlayback || request !== this.playRequest || revision !== this.revision || !this.ctx) return;
            const now = this.ctx.currentTime;
            // Hold the playhead at the requested position until at least one
            // clip for the current segment is ready, then start cleanly at its
            // beginning. This avoids skipping the opening while DSP warms up.
            const requestedAbsolute = this.transportStarted
              ? this.anchorPosition + Math.max(0, now - this.anchorContextTime)
              : this.offset;
            const segmentAbsoluteStart = cycle * loopDuration + segment.start;
            const segmentAbsoluteEnd = cycle * loopDuration + segment.end;
            if (!this.transportStarted) {
              if (requestedAbsolute < segmentAbsoluteStart || requestedAbsolute >= segmentAbsoluteEnd) return;
              this.anchorPosition = requestedAbsolute;
              this.anchorContextTime = now + 0.02;
              this.transportStarted = true;
            }
            const currentAbsolute = this.anchorPosition + Math.max(0, now - this.anchorContextTime);
            let localOffset = Math.max(0, currentAbsolute - segmentAbsoluteStart);
            let when = this.anchorContextTime + (segmentAbsoluteStart - this.anchorPosition);
            if (when < now + 0.01) when = now + 0.01;
            if (localOffset >= segment.end - segment.start) return;
            // Keep the rendered release tail across chunk boundaries; limiting
            // playback to the bar window creates audible hard cuts.
            const duration = buffer.duration - localOffset;
            if (duration <= 0) return;
            const source = this.ctx!.createBufferSource();
            source.buffer = buffer;
            source.connect(this.trackOutputs.get(trackId)?.pan ?? this.output!);
            source.onended = () => { this.sources.delete(source); source.disconnect(); };
            this.sources.add(source);
            this.scheduled.add(token);
            source.start(when, localOffset, duration);
          }).catch(error => {
            if (this.wantsPlayback && revision === this.revision && !(error instanceof DOMException && error.name === 'AbortError')) this.fail(error);
          });
        }
      }
    }
  }

  position(): number {
    if (!this.wantsPlayback || !this.ctx || !this.state.performance) return this.offset;
    if (!this.transportStarted) return this.offset;
    const duration = this.loopDuration();
    return duration > 0 ? (this.anchorPosition + Math.max(0, this.ctx.currentTime - this.anchorContextTime)) % duration : 0;
  }

  locate(seconds: number) {
    if (!Number.isFinite(seconds)) return;
    const duration = this.loopDuration();
    this.offset = Math.max(0, Math.min(Math.max(0, duration - 1 / 44100), seconds));
    if (this.wantsPlayback && this.state.performance) {
      this.startSourcesAt(this.offset);
      const request = ++this.playRequest;
      const revision = this.revision;
      if (this.current(request, revision)) { this.scheduleAhead(); this.animate(); }
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
    if (this.state.status === 'starting' && this.transportStarted && this.ctx!.currentTime >= this.anchorContextTime) {
      this.publish({ status: 'playing', progress: 1, error: undefined });
    }
    this.offset = this.position();
    this.onPosition(this.offset);
    this.scheduleAhead();
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
    this.haltSources();
    if (this.ctx) { this.ctx.onstatechange = null; void this.ctx.close().catch(() => {}); }
    this.output?.disconnect();
    this.trackOutputs.clear();
    this.chunks.clear();
    this.chunkJobs.clear();
  }
}
