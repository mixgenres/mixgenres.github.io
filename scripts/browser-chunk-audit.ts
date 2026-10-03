import { renderPreparedMix } from '../src/engine/playback/renderSongMix';
import { planPlaybackChunks } from '../src/engine/playback/playbackChunks';
import { clearPreparedAudio } from '../src/engine/cache/preparedAudio';
import { resolveStyle } from '../src/engine/style/resolve';
import { analyzeMixWindow } from '../src/engine/studio/dynamicMix/MixAnalysis';
import { planMixScene } from '../src/engine/studio/dynamicMix/DynamicMixPlanner';
import type { Performance } from '../src/engine/band/performanceData';

const report = document.querySelector<HTMLPreElement>('#report')!;
const button = document.querySelector<HTMLButtonElement>('#run')!;
button.onclick = async () => {
  button.disabled = true;
  report.textContent = 'Rendering native master comparisons…';
  try {
    clearPreparedAudio();
    const style = resolveStyle({ genreId: 'tango', styleId: 'tango-golden-age' });
    const resolvedMix = { ...style.resolvedMix, contract: { ...style.resolvedMix.contract, character: {
      ...style.resolvedMix.contract.character, delayTimeSeconds: 1, delayFeedback: .7, delaySend: .6, dryness: .2,
    } } };
    const notes = [{ trackId: 'keys', midi: 60, vel: 96, time: .05, dur: .05, bar: 0,
      gestureCode: 0, hitFunctionCode: 0, accent: .8 }];
    const scene = planMixScene(analyzeMixWindow({ sectionId: 'song', phraseIndex: 0, startBeat: 0,
      endBeat: 12, startTime: 0, endTime: 3, energy: 3 }, [{ trackId: 'keys', role: 'harmony', notes }],
    resolvedMix.contract), resolvedMix, style.id);
    scene.tracks.keys = { ...scene.tracks.keys, delaySend: .6, reverbSend: 0 };
    const performance: Performance = { notes, ccs: [], duration: 3, tail: 0, blends: {}, worldId: 'tango',
      bars: Array.from({ length: 3 }, (_, index) => ({ index, start: index, end: index + 1,
        regionId: 'song', bpm: 240, beatsPerBar: 4 })),
      trackInfo: { keys: { instrumentId: 'organ', role: 'harmony' } },
      mixTimeline: { version: 1, duration: 3, baselineHeadroom: .8, scenes: [scene] } };
    const options = { trackInstruments: new Map([['keys', 'organ']]), trackRoles: new Map([['keys', 'harmony']]),
      worldId: 'tango', styleId: style.id, mixState: { volume: { keys: .5 } } };
    const whole = await renderPreparedMix(performance, options, new AbortController().signal);
    const stitched = new Float32Array(whole.left.length);
    const timings = [];
    for (const chunk of planPlaybackChunks(performance)) {
      const started = globalThis.performance.now();
      const audio = await renderPreparedMix(performance, { ...options,
        renderWindow: { start: chunk.renderStart, end: chunk.renderEnd } }, new AbortController().signal);
      const from = Math.round((chunk.start - chunk.renderStart) * audio.sampleRate);
      const count = Math.round((chunk.end - chunk.start) * audio.sampleRate);
      stitched.set(audio.left.subarray(from, from + count), Math.round(chunk.start * audio.sampleRate));
      timings.push({ chunk: chunk.index, preparationMs: Math.round(globalThis.performance.now() - started), nativeMaster: !!audio.buffer });
    }
    const peak = (audio: Float32Array, start: number, end: number) => {
      let result = 0;
      for (let i = Math.round(start * 44100); i < Math.min(audio.length, Math.round(end * 44100)); i++) result = Math.max(result, Math.abs(audio[i]));
      return result;
    };
    const fullEchoPeak = peak(whole.left, 1, 1.5), chunkedEchoPeak = peak(stitched, 1, 1.5);
    let maxDifference = 0;
    for (let i = 0; i < stitched.length; i++) maxDifference = Math.max(maxDifference, Math.abs(stitched[i] - whole.left[i]));
    const chunk = planPlaybackChunks(performance)[1];
    const replayStarted = globalThis.performance.now();
    await renderPreparedMix(performance, { ...options, renderWindow: { start: chunk.renderStart, end: chunk.renderEnd } }, new AbortController().signal);
    report.textContent = JSON.stringify({ nativeMaster: !!whole.buffer, sampleRate: whole.sampleRate,
      fixture: 'Short organ note at 0.05 s; native delay of 1 s with feedback 0.7',
      fullEchoPeak, chunkedEchoPeak, echoPreserved: chunkedEchoPeak >= fullEchoPeak * .9,
      maxDifference, timings, cachedWindowMs: Math.round(globalThis.performance.now() - replayStarted) }, null, 2);
  } catch (error) { report.textContent = `FAIL: ${String(error)}`; }
  finally { button.disabled = false; }
};
