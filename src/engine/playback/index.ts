/** Phase 4: perform compiled notes through instrument models and export audio. */
export {
  startAudio,
  stopAudio,
  ensureSynth,
  createSink,
  renderSongToMp3,
  setMasterVolume,
  setTrackInstruments,
  setActiveWorld,
  setPlaybackConfiguration,
  getPlaybackDiagnostics,
} from './liveAudio.ts';
export { renderPerformanceToMp3, type Mp3RenderOptions } from './mp3Export.ts';
export { Transport } from './transport.ts';
