/**
 * CULTURAL ACOUSTIC TRANSPORT & SCHEDULER
 * ======================================
 * Event queue and playhead management for the physical acoustic engine.
 * Directly scheduled via high-precision lookahead on the audio clock without Web Workers.
 */

import type { Performance, PerfNote, PerfCC } from '../band/performanceData.ts';

const LOOKAHEAD_SEC = 0.40;
const TICK_MS = 25;

export interface TransportSink {
  now(): number;
  noteOn(trackId: string | number, midi: number, vel: number, time: number, gestureCode?: number, frequencyHz?: number, bellowsDirectionCode?: 1 | 2, bandoneonButtonId?: string, bandoneonButtonIndex?: number, bandoneonSideCode?: 1 | 2, noteInstanceId?: string): void;
  noteOff(trackId: string | number, midi: number, time: number, noteInstanceId?: string): void;
  pitchBend(trackId: string | number, value: number, time: number, targetMidi?: number): void;
  controlChange(trackId: string | number, cc: number, value: number, time: number): void;
  setDrumChannel(trackId: string | number, isDrum: boolean): void;
  allNotesOff(): void;
  setPlaybackEnabled?(enabled: boolean): void;
  softNotesOff?(): void;
  processPendingEvents?(): void;
  setTrackVolume?(trackId: string | number, volume: number, time?: number): void;
  setTrackMute?(trackId: string | number, muted: boolean, time?: number): void;
  setTrackPan?(trackId: string | number, pan: number, time?: number): void;
  setTrackSolo?(trackId: string | number, solo: boolean, time?: number): void;
  setTrackSpotlight?(trackId: string | number, mode: string, time?: number): void;
}

export interface TransportCallbacks {
  /** Called on every animation frame with current position in seconds */
  onPosition?(seconds: number): void;
  /** Called once when playhead reaches end of song */
  onEnd?(): void;
}

export class Transport {
  private perf: Performance | null = null;
  private sink: TransportSink;
  private cb: TransportCallbacks;

  private timerId: number | null = null;
  private rafId: number | null = null;

  private origin = 0;
  private startOffset = 0;
  private noteCursor = 0;
  private ccCursor = 0;
  private running = false;
  private looping = true;
  private endFired = false;

  constructor(sink: TransportSink, cb: TransportCallbacks = {}) {
    this.sink = sink;
    this.cb = cb;
  }

  get isRunning() { return this.running; }

  setLooping(v: boolean) { this.looping = v; }

  setPerformance(perf: Performance) {
    const wasRunning = this.running;
    const pos = wasRunning ? this.position() : this.startOffset;
    this.perf = perf;
    if (wasRunning) {
      if (typeof this.sink.softNotesOff === 'function') {
        this.sink.softNotesOff();
      } else {
        this.sink.allNotesOff();
      }
      this.locate(pos);
      this.tick();
    }
  }

  /**
   * Transport update: refreshes performance data immediately, cuts scheduled future notes
   * and resumes cleanly from the current playback position.
   */
  patchPerformance(perf: Performance, _changedRegionIds?: string[]) {
    if (!this.running || !this.perf) {
      this.setPerformance(perf);
      return;
    }
    const currentPos = this.position();
    this.perf = perf;
    if (typeof this.sink.softNotesOff === 'function') {
      this.sink.softNotesOff();
    } else {
      this.sink.allNotesOff();
    }
    this.locate(currentPos);
    this.tick();
  }

  // Live mix controls (Tier 3 -> Sink direct path)
  setTrackVolume(trackId: string | number, volume: number) {
    this.sink.setTrackVolume?.(trackId, volume, this.sink.now());
  }

  setTrackMute(trackId: string | number, muted: boolean) {
    this.sink.setTrackMute?.(trackId, muted, this.sink.now());
  }

  setTrackPan(trackId: string | number, pan: number) {
    this.sink.setTrackPan?.(trackId, pan, this.sink.now());
  }

  setTrackSolo(trackId: string | number, solo: boolean) {
    this.sink.setTrackSolo?.(trackId, solo, this.sink.now());
  }

  setTrackSpotlight(trackId: string | number, mode: string) {
    this.sink.setTrackSpotlight?.(trackId, mode, this.sink.now());
  }

  position(): number {
    if (!this.perf) return this.startOffset;
    if (!this.running) return this.startOffset;
    const raw = this.sink.now() - this.origin;
    const total = this.totalLength();
    if (total <= 0) return 0;
    return this.looping ? ((raw % total) + total) % total : Math.min(raw, total);
  }

  private totalLength(): number {
    if (!this.perf) return 0;
    return this.perf.duration;
  }

  start(fromSeconds?: number) {
    if (!this.perf) return;
    this.locate(fromSeconds ?? this.startOffset);
    this.sink.setPlaybackEnabled?.(true);
    this.running = true;
    this.endFired = false;

    // Start direct lookahead timer
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    this.timerId = window.setInterval(() => this.tick(), TICK_MS);

    // Decoupled visual loop using requestAnimationFrame
    this.startVisualLoop();

    // Initial lookahead burst
    this.tick();
  }

  stop() {
    this.running = false;
    this.sink.setPlaybackEnabled?.(false);
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    this.stopVisualLoop();
    this.sink.allNotesOff();
  }

  private startVisualLoop() {
    this.stopVisualLoop();
    const render = () => {
      if (!this.running) return;
      this.cb.onPosition?.(this.position());
      this.rafId = requestAnimationFrame(render);
    };
    this.rafId = requestAnimationFrame(render);
  }

  private stopVisualLoop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  locate(seconds: number) {
    const total = this.totalLength();
    const pos = total > 0 ? Math.max(0, Math.min(total - 0.001, seconds)) : 0;
    this.startOffset = pos;
    this.origin = this.sink.now() - pos;
    this.noteCursor = this.findCursor(pos);

    const ccs = this.perf?.ccs ?? [];
    let ci = 0;
    const latest = new Map<string, PerfCC>();
    while (ci < ccs.length && ccs[ci].time <= pos) {
      const c = ccs[ci];
      latest.set(`${c.trackId}:${c.cc}`, c);
      ci++;
    }
    this.ccCursor = ci;
    const now = this.sink.now() + 0.005;
    for (const c of latest.values()) this.sink.controlChange(c.trackId, c.cc, c.value, now);

    if (this.running) this.sink.allNotesOff();
  }

  private findCursor(pos: number): number {
    const notes = this.perf?.notes ?? [];
    let lo = 0, hi = notes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (notes[mid].time < pos) lo = mid + 1; else hi = mid;
    }
    return lo;
  }

  sendCC(trackId: string | number, cc: number, value: number) {
    this.sink.controlChange(trackId, cc, Math.max(0, Math.min(127, Math.round(value))), this.sink.now() + 0.005);
  }

  private tick() {
    this.sink.processPendingEvents?.();
    if (!this.running || !this.perf) return;
    const notes = this.perf.notes;
    const total = this.totalLength();
    if (total <= 0) return;

    const now = this.sink.now();
    const horizon = now + LOOKAHEAD_SEC;

    const ccs = this.perf.ccs;
    let ccGuard = 0;
    while (ccGuard++ < 2000) {
      if (this.ccCursor >= ccs.length) {
        break;
      }
      const c = ccs[this.ccCursor];
      const at = this.origin + c.time;
      if (at > horizon) break;
      this.sink.controlChange(c.trackId, c.cc, c.value, Math.max(now, at));
      this.ccCursor++;
    }

    let guard = 0;
    while (guard++ < 4000) {
      if (this.noteCursor >= notes.length) {
        if (this.looping) {
          this.origin += total;
          this.noteCursor = 0;
          this.ccCursor = 0;
          continue;
        }
        if (!this.endFired && now - this.origin >= total) {
          this.endFired = true;
          this.cb.onEnd?.();
        }
        break;
      }
      const n = notes[this.noteCursor];
      const at = this.origin + n.time;
      if (at > horizon) break;
      this.fire(n, at);
      this.noteCursor++;
    }
  }

  private fire(n: PerfNote, at: number) {
    const midi = Math.max(0, Math.min(127, Math.round(n.midi)));
    const vel = Math.max(1, Math.min(127, Math.round(n.vel)));
    const now = this.sink.now();
    const targetOn = Math.max(now, at);
    const targetOff = Math.max(targetOn + 0.02, at + Math.max(0.02, n.dur));

    if (n.pitchBend?.length) {
      for (const point of n.pitchBend) {
        const bendAt = Math.max(targetOn, at + Math.max(0, point.offset));
        this.sink.pitchBend(n.trackId, point.value, bendAt, midi);
      }
    }
    const noteInstanceId = `${String(n.trackId)}:${this.noteCursor}:${Math.round(at * 1000)}`;
    this.sink.noteOn(n.trackId, midi, vel, targetOn, n.gestureCode, n.frequencyHz, n.bellowsDirectionCode, n.bandoneonButtonId, n.bandoneonButtonIndex, n.bandoneonSideCode, noteInstanceId);
    this.sink.noteOff(n.trackId, midi, targetOff, noteInstanceId);
    if (n.pitchBend?.length) this.sink.pitchBend(n.trackId, 8192, targetOff, midi);
  }
}
