import { songCatalog } from '../../data/songs/catalog';
import { createCatalogSong } from '../sheet/songCatalog';
import { compilePerformance } from '../playback/compilePerformance';
import { planTransportChunks } from '../playback/playbackChunks';
import { renderSongMix } from '../playback/renderSongMix';
import { checkAbort } from '../../export/audioEncoding';
import { flushPersistentPreparedAudio } from './persistentPreparedAudio';
import { prepareCatalogInPlaybackWorker } from '../playback/renderPlaybackPart';

interface PreparationDependencies {
  compile: typeof compilePerformance;
  render: typeof renderSongMix;
  flush: typeof flushPersistentPreparedAudio;
  build?: typeof prepareCatalogInPlaybackWorker;
}

export const favoriteCatalogIds = songCatalog.filter(song =>
  song.genreId === 'tango' || song.genreId === 'flamenco').map(song => song.id);

const genreGroups = new Map<string, string[]>();
for (const song of songCatalog) genreGroups.set(song.genreId, [...(genreGroups.get(song.genreId) ?? []), song.id]);
export const catalogPreparationOrder = (() => {
  const favorites = new Set(favoriteCatalogIds);
  const ordered = [...favoriteCatalogIds];
  const add = (id: string) => { if (!favorites.has(id) && !ordered.includes(id)) ordered.push(id); };
  // Give every genre a representative opening before spending time on depth.
  for (const ids of genreGroups.values()) add(ids.find(id => !favorites.has(id)) ?? '');
  // Then cover every arrangement in broad and especially extensive genres.
  for (const ids of genreGroups.values()) if (ids.length >= 10) ids.forEach(add);
  // Finish with the remaining catalog so all styles eventually get sampled.
  for (const ids of genreGroups.values()) ids.forEach(add);
  return ordered;
})();

/** Prepare exactly the bounded opening windows used by Play, one song at a
 * time. Cancellation releases synthesis immediately to foreground work. */
export async function prepareFavoriteOpenings(signal: AbortSignal, currentId?: string,
  dependencies: PreparationDependencies = { compile: compilePerformance, render: renderSongMix,
    flush: flushPersistentPreparedAudio, build: prepareCatalogInPlaybackWorker }, onPrepared?: (id: string) => void) {
  const first = Math.max(0, favoriteCatalogIds.indexOf(currentId ?? ''));
  const ids = [...favoriteCatalogIds.slice(first), ...favoriteCatalogIds.slice(0, first)];
  for (const id of ids) {
    checkAbort(signal);
    const prepared = dependencies.build ? await dependencies.build(id,signal) : undefined;
    const song = prepared?.song ?? createCatalogSong(id);
    const performance = prepared?.performance ?? await dependencies.compile(song, signal);
    checkAbort(signal);
    for (const chunk of planTransportChunks(performance).filter(chunk => chunk.start < 10)) {
      checkAbort(signal);
      await dependencies.render(performance, song, signal,
        { start: chunk.renderStart, end: chunk.renderEnd }, () => 50);
    }
    await dependencies.flush();
    checkAbort(signal);
    onPrepared?.(id);
  }
}

/** Visit every catalog arrangement. Tango and flamenco keep three transport
 * openings; other styles persist their first playable opening. */
export async function prepareCatalogOpenings(signal: AbortSignal, currentId?: string,
  dependencies: PreparationDependencies = { compile: compilePerformance, render: renderSongMix,
    flush: flushPersistentPreparedAudio, build: prepareCatalogInPlaybackWorker }, onPrepared?: (id: string) => void) {
  const first = Math.max(0, catalogPreparationOrder.indexOf(currentId ?? ''));
  const ids = [...catalogPreparationOrder.slice(first), ...catalogPreparationOrder.slice(0, first)];
  const favorites = new Set(favoriteCatalogIds);
  for (const id of ids) {
    checkAbort(signal);
    const prepared = dependencies.build ? await dependencies.build(id, signal) : undefined;
    const song = prepared?.song ?? createCatalogSong(id);
    const performance = prepared?.performance ?? await dependencies.compile(song, signal);
    checkAbort(signal);
    const openingSeconds = favorites.has(id) ? 10 : 2;
    for (const chunk of planTransportChunks(performance).filter(chunk => chunk.start < openingSeconds)) {
      checkAbort(signal);
      await dependencies.render(performance, song, signal,
        { start: chunk.renderStart, end: chunk.renderEnd }, () => 50);
    }
    await dependencies.flush();
    checkAbort(signal);
    onPrepared?.(id);
  }
}
