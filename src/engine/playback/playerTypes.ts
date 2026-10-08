import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';

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
  audioStartMs?: number;
  playbackTiming?: PlaybackTiming;
  outputLatencyMs?: number;
}
