import type { Performance } from '../band/performanceData';
import type { Sheet } from '../sheet/sheet';
import { checkAbort } from '../../export/audioEncoding';
import type { Mp3RenderOptions, RenderedPerformanceAudio } from './mp3Export';
import { renderPlaybackPart } from './renderPlaybackPart';
import { preparedAudioKey, prepareSongMix } from '../cache/preparedAudio';
import { contentKey } from '../cache/contentKey';
import { preparedNoteLifetimes } from './preparedNoteLifetimes';

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
  return renderPreparedMix(performance, { ...songMixOptions(song), renderWindow: window, boundedStems: !!window }, signal, priority, onProgress);
}

function windowPreparedStem(audio: RenderedPerformanceAudio, window: { start: number; end: number }): RenderedPerformanceAudio {
  // Without section stems, renderPlaybackPart already applied renderWindow.
  if (!audio.sections) return audio;
  const sampleRate = audio.sampleRate;
  const from = Math.max(0, Math.round(window.start * sampleRate));
  const to = Math.max(from + 1, Math.ceil(window.end * sampleRate));
  const source = audio.sections;
  const sections = source.flatMap(section => {
    const sectionEnd = section.startSample + section.left.length;
    const overlapStart = Math.max(from, section.startSample);
    const overlapEnd = Math.min(to, sectionEnd);
    if (overlapEnd <= overlapStart) return [];
    const localStart = overlapStart - section.startSample;
    const localEnd = overlapEnd - section.startSample;
    return [{
      left: section.left.subarray(localStart, localEnd),
      right: section.right.subarray(localStart, localEnd),
      startSample: overlapStart - from,
    }];
  });
  return { sampleRate, left: new Float32Array(0), right: new Float32Array(0), sections };
}

/** Shared preparation for the player, auditions and audio downloads. */
export async function renderPreparedMix(performance: Performance, options: Mp3RenderOptions, signal: AbortSignal,
  priority: () => number = () => 3, onProgress?: (fraction: number) => void): Promise<RenderedPerformanceAudio> {
  checkAbort(signal);
  options = { ...options, rawStem: false };
  const window = options.renderWindow;
  const selected = new Set(options.selectedTrackIds ?? options.trackInstruments.keys());
  const solo = Object.values(options.mixState?.solo ?? {}).some(Boolean);
  const noteTail = await preparedNoteLifetimes(performance, options);
  const active = [...selected].filter(id =>
    !options.mixState?.muted?.[id] && (!solo || options.mixState?.solo?.[id]) &&
    performance.notes.some(note => note.trackId === id &&
      (!window || note.time < window.end && note.time + note.dur + noteTail(note) > window.start)));
  // An intentionally silent selection still advances the transport.
  if (!active.length) {
    const frames = Math.ceil(Math.max(.1, window ? window.end - window.start : performance.duration + (performance.tail ?? 0)) * 44100);
    return { sampleRate: 44100, left: new Float32Array(frames), right: new Float32Array(frames) };
  }
  const key = contentKey([
    'song-mix-v3', !!options.boundedStems, preparedAudioKey(performance, { ...options, selectedTrackIds: active }),
    active.map(id => [id, options.mixState?.volume?.[id] ?? 1, options.mixState?.pan?.[id] ?? 'instrument']),
    performance.mixTimeline, !!options.bypassWebAudioMaster,
  ]);
  const result = await prepareSongMix(key, signal, async preparationSignal => {
    const trackProgress = new Map<string, number>();
    const progress = () => onProgress?.(
      [...trackProgress.values()].reduce((sum, fraction) => sum + fraction, 0) / active.length * .8);
    // Fetch the master while workers load/render, not after every stem finishes.
    const [entries, { renderPerformanceToAudio }] = await Promise.all([Promise.all(active.map(async id => {
      const audio = await renderPlaybackPart(performance, {
        ...options, selectedTrackIds: [id], rawStem: true, sectionStems: true,
        signal: preparationSignal, renderPriority: priority,
      }, fraction => { trackProgress.set(id, fraction); progress(); });
      checkAbort(preparationSignal);
      trackProgress.set(id, 1);
      progress();
      return [id, window ? windowPreparedStem(audio, window) : audio] as const;
    })), import('./mp3Export')]);
    checkAbort(preparationSignal);
    return renderPerformanceToAudio(performance, {
      ...options, selectedTrackIds: active, preparedStems: new Map(entries),
      signal: preparationSignal, renderPriority: priority,
    }, fraction => onProgress?.(.8 + fraction * .2));
  });
  onProgress?.(1);
  return result;
}
