import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';
import { checkAbort } from '../../export/audioEncoding';
import { renderPerformanceToAudio, type Mp3RenderOptions, type RenderedPerformanceAudio } from './mp3Export';
import { renderPlaybackPart } from './renderPlaybackPart';

/** The exact sheet mix is baked once, before the shared buses and master. */
export function songMixOptions(song: Sheet): Mp3RenderOptions {
  return {
    trackInstruments: new Map(song.tracks.map(track => [track.id, track.instrumentId ?? track.instrument])),
    trackRoles: new Map(song.tracks.map(track => [track.id, track.role])),
    worldId: song.worldId, styleId: song.styleId,
    mixState: {
      volume: Object.fromEntries(song.tracks.map(track => [track.id, track.volume ?? 1])),
      pan: Object.fromEntries(song.tracks.filter(track => track.pan !== undefined).map(track => [track.id, track.pan!])),
      muted: Object.fromEntries(song.tracks.map(track => [track.id, !!track.muted])),
      solo: Object.fromEntries(song.tracks.map(track => [track.id, !!track.solo])),
    },
  };
}

/** Workers synthesize raw instruments; the browser masters the ensemble once. */
export async function renderSongMix(performance: Performance, song: Sheet, signal: AbortSignal,
  window?: { start: number; end: number }, priority: () => number = () => 3,
  onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  checkAbort(signal);
  const options = songMixOptions(song);
  const solo = song.tracks.some(track => track.solo);
  const active = song.tracks.filter(track => !track.muted && (!solo || track.solo) && performance.notes.some(note =>
    note.trackId === track.id && (!window || note.time < window.end && note.time + note.dur > window.start)));
  // An intentionally silent selection still advances the transport.
  if (!active.length) {
    const frames = Math.ceil(Math.max(.1, window ? window.end - window.start : performance.duration + (performance.tail ?? 0)) * 44100);
    return { sampleRate: 44100, left: new Float32Array(frames), right: new Float32Array(frames) };
  }
  let completed = 0;
  const entries = await Promise.all(active.map(async track => {
    const audio = await renderPlaybackPart(performance, { ...options, selectedTrackIds: [track.id],
      rawStem: true, renderWindow: window, signal, renderPriority: priority });
    checkAbort(signal);
    onProgress?.(++completed / active.length * .8);
    return [track.id, audio] as const;
  }));
  checkAbort(signal);
  return renderPerformanceToAudio(performance, { ...options, preparedStems: new Map(entries),
    renderWindow: window, signal, renderPriority: priority }, fraction => onProgress?.(.8 + fraction * .2));
}
