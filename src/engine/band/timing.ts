import { TIMING_OFFSETS_BY_FEEL } from '../../data/performance/timingOffsets';
export interface SequenceEvent {
  beat: number;
  duration?: number;
  velocity?: number;
  instrument?: string;
  pitch?: number;
  midi?: number;
  metadata?: Record<string, unknown>;
  [key: string]: unknown;
}

import type { GenreTimingProfile } from '../../data/performance/schema/genre-timing';

export interface SequencerContext {
  bpmToSeconds: number;
  rng: { float(): number };
  genre?: GenreTimingProfile;
}

export class TimingCalculator {
  public calculateEventTiming(event: SequenceEvent, ctx: SequencerContext): number {
    const exactBeatTime = event.beat * ctx.bpmToSeconds;
    let timingOffset = 0;
    const instrumentFeel = ctx.genre?.microTiming?.instrumentRoles?.[event.instrument || ''] || 'strict';

    switch (instrumentFeel) {
      case 'laid_back':
        timingOffset = TIMING_OFFSETS_BY_FEEL.laid_back.offset + ctx.rng.float() * TIMING_OFFSETS_BY_FEEL.laid_back.jitter;
        break;
      case 'pushed':
        timingOffset = TIMING_OFFSETS_BY_FEEL.pushed.offset - ctx.rng.float() * TIMING_OFFSETS_BY_FEEL.pushed.jitter;
        break;
      case 'rubato':
        timingOffset = Math.sin(((event.beat % 4) / 4) * Math.PI) * TIMING_OFFSETS_BY_FEEL.rubato.amplitude + TIMING_OFFSETS_BY_FEEL.rubato.center;
        break;
    }

    return Math.max(0, exactBeatTime + timingOffset + (ctx.rng.float() * 0.01 - 0.005));
  }
}
