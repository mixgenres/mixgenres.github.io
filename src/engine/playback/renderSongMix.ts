import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';
import { checkAbort } from '../../export/audioEncoding';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from './mp3Export';
import { renderPerformanceToAudio } from './mp3Export';

/** Resolve the sheet's instrument, role and mixer settings for playback and export. */
export function songMixOptions(song: Sheet): Mp3RenderOptions {
  return {
    trackInstruments: new Map(song.tracks.map(track => [track.id, track.instrumentId ?? track.instrument])),
    trackRoles: new Map(song.tracks.map(track => [track.id, track.role])),
    worldId: song.worldId,
    styleId: song.styleId,
    mixState: {
      volume: Object.fromEntries(song.tracks.map(track => [track.id, track.volume ?? 1])),
      pan: Object.fromEntries(song.tracks.filter(track => track.pan !== undefined).map(track => [track.id, track.pan!])),
      muted: Object.fromEntries(song.tracks.map(track => [track.id, !!track.muted])),
      solo: Object.fromEntries(song.tracks.map(track => [track.id, !!track.solo])),
    },
  };
}

/** Render the requested parts now, then pass them through the shared mix. */
export async function renderSampleMix(performance: Performance, song: Sheet, signal: AbortSignal,
  window?: { start: number; end: number }, onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  checkAbort(signal);
  return renderPerformanceToAudio(performance, {
    ...songMixOptions(song),
    signal,
    renderWindow: window,
    yieldForUI: true,
  }, onProgress);
}
