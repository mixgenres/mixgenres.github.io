import type { Performance, PerfNote } from '../../src/engine/band/performanceData';
import { makeSheet, type Sheet } from '../../src/engine/sheet/sheet';
import type { SongPlayer, PlayerState } from '../../src/engine/playback/songPlayer';
import type { PlaybackChunk } from '../../src/engine/playback/playbackChunks';

export function performanceFixture(patch: Partial<Performance> = {}): Performance {
  return { duration: 1, tail: 0, notes: [], ccs: [], bars: [], blends: {}, ...patch };
}
export function noteFixture(patch: Partial<PerfNote> = {}): PerfNote {
  return { trackId: 'keys', midi: 60, time: 0, dur: .5, vel: 80, bar: 0,
    gestureCode: 0, hitFunctionCode: 0, accent: 1, ...patch };
}
export function songFixture(patch: Partial<Sheet> = {}): Sheet {
  return { ...makeSheet('tango'), catalogId: undefined, tracks: [], regions: [], measures: [], arrangement: {}, ...patch };
}

/** Test-owned transport seam. This describes only our player's state, never a
 * third-party engine's internals. Native audio doubles are installed separately. */
export interface PlayerHarness extends Pick<SongPlayer, 'play' | 'pause' | 'stop' | 'dispose' | 'configure' | 'locate' | 'beginScrub' | 'endScrub' | 'position' | 'snapshot' | 'composition' | 'preparedDuration' | 'preparedAheadSeconds' | 'bufferedBytes' | 'playbackActivity' | 'playbackHealth'> {
  state: PlayerState;
  song: Sheet;
  ctx?: AudioContext;
  output: GainNode;
  mixOutput?: GainNode;
  probe?: AnalyserNode;
  diagnostics: boolean;
  compositionKey: string;
  renderKey: string;
  abort: AbortController;
  chunks: PlaybackChunk[];
  chunkBuffers: Map<number, AudioBuffer>;
  compiling: Promise<void>;
  revision: number;
  offset: number;
  anchorPosition: number;
  wantsPlayback: boolean;
  playbackGeneration: number;
  playRequest: number;
  pump?: Promise<void>;
  replaceContext: boolean;
  backgroundAbort?: AbortController;
  backgroundKey: string;
  backgroundTimer?: ReturnType<typeof setTimeout>;
  renderedAudioSeconds: number;
  renderMs: number;
  ensureContext(): void;
  animate(): void;
  ensureChunk(index: number, performance: Performance, song: Sheet, signal: AbortSignal, revision: number, priority?: () => number): Promise<AudioBuffer>;
  warmChunks(performance: Performance, song: Sheet, signal: AbortSignal, revision: number): void;
  pumpSchedule(generation: number, revision: number): Promise<void>;
  observeBuffering(generation: number, revision: number): void;
  requestPump(generation: number, revision: number): void;
  prepareStartReserve(performance: Performance, song: Sheet, signal: AbortSignal, revision: number, request: number): Promise<boolean>;
  prepareReplacement(performance: Performance, song: Sheet, chunks: PlaybackChunk[], signal: AbortSignal): Promise<Map<number, AudioBuffer>>;
  replacementPosition(performance: Performance): number;
}
export const inspectPlayer = (player: SongPlayer): PlayerHarness => player as unknown as PlayerHarness;
