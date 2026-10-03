import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';
import { checkAbort } from '../../export/audioEncoding';
import { renderPerformanceToAudio, type Mp3RenderOptions, type RenderedPerformanceAudio } from './mp3Export';
import { renderPlaybackPart, releasePlaybackWorkers } from './renderPlaybackPart';
import { preparedAudioKey, prepareSongMix } from '../cache/preparedAudio';
import { contentKey } from '../cache/contentKey';

/** Resolve the sheet's instrument, role and mixer settings for playback and export. */
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
  return renderPreparedMix(performance,{...songMixOptions(song),renderWindow:window},signal,priority,onProgress);
}

/** Shared preparation for the player, auditions and audio downloads. */
export async function renderPreparedMix(performance: Performance, options: Mp3RenderOptions, signal: AbortSignal,
  priority: () => number = () => 3, onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  checkAbort(signal);
  options={...options,rawStem:false};
  const window=options.renderWindow, selected=new Set(options.selectedTrackIds ?? options.trackInstruments.keys());
  const solo=Object.values(options.mixState?.solo ?? {}).some(Boolean);
  const active=[...selected].filter(id => !options.mixState?.muted?.[id] && (!solo || options.mixState?.solo?.[id]) &&
    performance.notes.some(note => note.trackId===id && (!window || note.time<window.end && note.time+note.dur>window.start)));
  // An intentionally silent selection still advances the transport.
  if (!active.length) {
    const frames = Math.ceil(Math.max(.1, window ? window.end - window.start : performance.duration + (performance.tail ?? 0)) * 44100);
    return { sampleRate: 44100, left: new Float32Array(frames), right: new Float32Array(frames) };
  }
  const key=contentKey(['song-mix-v1',preparedAudioKey(performance,{...options,selectedTrackIds:active}),
    active.map(id => [id,options.mixState?.volume?.[id] ?? 1,options.mixState?.pan?.[id] ?? 'instrument']),
    performance.mixTimeline,!!options.bypassWebAudioMaster]);
  const result=await prepareSongMix(key,signal,async preparationSignal => {
    const trackProgress=new Map<string,number>();
    const progress=() => onProgress?.([...trackProgress.values()].reduce((a,b) => a+b,0)/active.length*.8);
    const entries=await Promise.all(active.map(async id => {
      const audio=await renderPlaybackPart(performance,{...options,selectedTrackIds:[id],rawStem:true,sectionStems:true,
        signal:preparationSignal,renderPriority:priority},fraction => {trackProgress.set(id,fraction);progress();});
      checkAbort(preparationSignal); trackProgress.set(id,1); progress(); return [id,audio] as const;
    }));
    checkAbort(preparationSignal);
    releasePlaybackWorkers();
    return renderPerformanceToAudio(performance,{...options,selectedTrackIds:active,preparedStems:new Map(entries),
      signal:preparationSignal,renderPriority:priority},fraction => onProgress?.(.8+fraction*.2));
  });
  onProgress?.(1); return result;
}
