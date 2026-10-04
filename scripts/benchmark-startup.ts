// Run with: node --import tsx scripts/benchmark-startup.ts
const started = performance.now();
const { createCatalogSong, catalogIdForStyle } = await import('../src/engine/sheet/songCatalog');
const loaded = performance.now();
const { arrangeBand } = await import('../src/engine/band/arrangeBand');
const { planPlaybackChunks } = await import('../src/engine/playback/playbackChunks');
const { planDSPSections } = await import('../src/engine/playback/dspSections');
const { renderSongMix, songMixOptions } = await import('../src/engine/playback/renderSongMix');
const song = createCatalogSong(catalogIdForStyle('tango-golden-age'));
const compileStarted = performance.now();
const score = arrangeBand(song);
const compiled = performance.now();
const first = planPlaybackChunks(score)[0];
const window = { start: first.renderStart, end: first.renderEnd };
const options = songMixOptions(song);
const plannedSeconds = song.tracks.map(track => ({ instrument: track.instrumentId,
  seconds: planDSPSections(score, { ...options, selectedTrackIds: [track.id], renderWindow: window })
    .reduce((sum, section) => sum + Math.min(section.performance.duration, window.end - section.startSample/44100), 0) }));
const renderStarted = performance.now();
const audio = await renderSongMix(score, song, new AbortController().signal, window);
const rendered = performance.now();
console.log(JSON.stringify({ catalogLoadMs: Math.round(loaded - started), compileMs: Math.round(compiled - compileStarted),
  firstChunkSeconds: first.end, renderWindowSeconds: window.end - window.start, plannedSeconds,
  firstRenderMs: Math.round(rendered - renderStarted), samples: audio.left.length }, null, 2));
