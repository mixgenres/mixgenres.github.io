import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';

for (const unison of [1, 3]) test(`sine patch with ${unison} oscillator(s) keeps its waveform and allocates its release`, async () => {
  const params = resolveTrackSound('synth', 'ambient', 'ambient-atmospheric', 'lead');
  params.synthPatch = { id: 'test-sine-unison', name: 'Test sine', oscillator: 'sine', filter: 'lowpass',
    cutoffHz: 3000, resonance: 0, attackSeconds: .02, decaySeconds: .1, sustain: 1, releaseSeconds: 2.5, unison };
  params.synthPatchId = params.synthPatch.id;
  const note: PerfNote = { trackId: 'p', time: 0, dur: 1.5, bar: 0, midi: 69, vel: 80, gestureCode: 0, hitFunctionCode: 0, accent: .8 };
  const voice = prepareNoteVoice(note, params, 'ambient', 'ambient-atmospheric');
  voice.soundParams = params;
  assert.ok(voiceTailSeconds(params, voice) >= 2.5);
  note.physical = { key: `sine-unison-calibration-${unison}`, voice, tailSeconds: 2.5 };
  const performance: Performance = { notes: [note], ccs: [], bars: [], duration: 1.5, tail: 2.5, blends: {}, trackInfo: { p: { instrumentId: 'synth', role: 'lead' } } };
  const audio = await renderPerformanceToAudio(performance, { trackInstruments: new Map([['p', 'synth']]), rawStem: true });
  assert.ok(audio.left.every(Number.isFinite));
  const segment = audio.left.subarray(Math.round(audio.sampleRate * .2), Math.round(audio.sampleRate * 1.2));
  const energy = (frequency: number) => {
    let real = 0, imaginary = 0;
    for (let i = 0; i < segment.length; i++) {
      const value = segment[i] * (.5 - .5 * Math.cos(2 * Math.PI * i / (segment.length - 1)));
      const phase = 2 * Math.PI * frequency * i / audio.sampleRate;
      real += value * Math.cos(phase); imaginary += value * Math.sin(phase);
    }
    return real ** 2 + imaginary ** 2;
  };
  assert.ok(energy(440) > 1e-5);
  assert.ok(energy(880) < energy(440) * .001, 'unison must not inject a sawtooth second harmonic');
});

test('default ambient has independent overlapping registers and flamenco opens with guitar alone', () => {
  const ambient = compileSongPipeline(makeSheet('ambient'));
  const tracks = new Set(ambient.performance.notes.filter(n => n.time < 15).map(n => n.trackId));
  assert.equal(tracks.size, 3);
  assert.ok(ambient.performance.notes.some(n => n.midi >= 72 && n.dur > 4));
  const flamenco = makeSheet('flamenco'), notes = compileSongPipeline(flamenco).performance.notes;
  const introEnd = flamenco.regions[0].end * 6 * 60 / flamenco.bpm;
  const guitar = flamenco.tracks.find(t => t.instrumentId === 'guitar')!.id;
  assert.ok(notes.filter(n => n.time < introEnd - .1).every(n => n.trackId === guitar));
});

test('salsa late bass attack anticipates the next root while clave retains its written timeline', () => {
  const sheet = makeSheet('salsa');
  const performance = compileSongPipeline(sheet).performance;
  const bass = sheet.tracks.find(t => t.instrumentId === 'bass')!;
  const notes = performance.notes.filter(n => n.trackId === bass.id && n.bar === 1).sort((a, b) => a.time - b.time);
  assert.equal(notes.at(-1)!.midi % 12, 2, 'A7 anticipates the following D minor root on four-and');
  const clave = sheet.tracks.find(t => t.instrumentId === 'claves')!;
  const firstClave = performance.notes.find(n => n.trackId === clave.id)!;
  assert.ok(firstClave.time < .04, 'the written downbeat is not shifted by a global sixteenth');
});
