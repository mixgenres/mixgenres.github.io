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

export interface GenreTimingProfile {
  microTiming?: {
    instrumentRoles?: Record<string, 'laid_back' | 'pushed' | 'rubato' | 'strict'>;
  };
}

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
        timingOffset = 0.045 + ctx.rng.float() * 0.015;
        break;
      case 'pushed':
        timingOffset = -0.035 - ctx.rng.float() * 0.01;
        break;
      case 'rubato':
        timingOffset = Math.sin(((event.beat % 4) / 4) * Math.PI) * 0.08 - 0.04;
        break;
    }

    return Math.max(0, exactBeatTime + timingOffset + (ctx.rng.float() * 0.01 - 0.005));
  }
}
