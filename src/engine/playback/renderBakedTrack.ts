import type { PerfNote, PerfCC } from '../band/performanceData';
import type { TrackParams } from './elementaryEngine';
import { midiToFreq } from './elementaryEngine';
import { prepareNoteVoice } from './performancePlan';
import { resolveTrackGain } from './trackSound';
import { resolveInstrumentKitComponent } from '../lookup/instrument-components';
import { checkAbort, yieldToUI } from '../../export/audioEncoding';
import { selectBakedSample, type BakedBank } from './bakedInstruments';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';

/** Resample and sum baked voices. No physical DSP graphs run on this path. */
export async function renderBakedTrack(bank: BakedBank, notes: PerfNote[], ccs: PerfCC[], params: TrackParams,
  level: number, startSample: number, frames: number, signal?: AbortSignal): Promise<{ left: Float32Array; right: Float32Array; startSample: number } | undefined> {
  const sr = 44100;
  const controls = [...ccs].sort((a, b) => a.time - b.time);
  // Excitation controllers cannot be reproduced by a neutral recording.
  if (controls.some(cc => [16, 17, 19, 20, 21, 22, 24, 25].includes(cc.cc))) return undefined;
  const prepared = notes.map(note => {
    const voice = prepareNoteVoice(note, params, params.genreId ?? '', '', undefined, controls.map(cc => cc.cc));
    const sample = selectBakedSample(bank, note.midi, note.vel, voice.action ?? 'tone', voice.bellowsDirectionCode);
    return { note, voice, sample };
  });
  // Never transpose one drum component into an unrelated missing component.
  if (prepared.some(entry => !entry.sample)) return undefined;
  const left = new Float32Array(frames), right = new Float32Array(frames);
  let lastYield = performance.now();
  for (const { note, voice, sample: selected } of prepared) {
    checkAbort(signal);
    const sample = selected!;
    const held = sample.loopStart !== undefined;
    const def = INSTRUMENTS_BY_ID[params.instrumentId!];
    const damped = held || def?.family === 'plucked' || def?.family === 'bellows-and-keys' || def?.id === 'vibraphone'
      || /mute|choke/.test(voice.action ?? '');
    const release = /staccato|mute|chapa|choke|marcato/.test(voice.action ?? '') ? .04 : def?.id === 'piano' ? .09 : .18;
    const begin = Math.round(note.time * sr) - startSample;
    const baseRate = (note.frequencyHz ?? midiToFreq(note.midi)) / midiToFreq(sample.midi) * bank.manifest.sampleRate / sr;
    const length = damped ? Math.min(held ? Infinity : Math.ceil(sample.frames / baseRate), Math.ceil((note.dur + release) * sr)) : Math.ceil(sample.frames / baseRate);
    let position = 0, ccIndex = 0, bendIndex = 0, bend = 1;
    let volume = 1, expression = 1, pan = params.pan, brightness = voice.soundParams?.brightness ?? params.brightness, mute = voice.soundParams?.mute ?? params.mute;
    let filter = 0;
    const componentPan = resolveInstrumentKitComponent(params.instrumentId!, note.midi, voice.action)?.defaultPan ?? 0;
    let gain = 0, lGain = 0, rGain = 0, alpha = 1;
    const read = (p: number) => {
      const index = Math.floor(p), fraction = p - index;
      const a = bank.pcm[sample.offset + Math.min(sample.frames - 1, index)];
      const b = bank.pcm[sample.offset + Math.min(sample.frames - 1, index + 1)];
      return a + (b - a) * fraction;
    };
    for (let i = 0; i < length && begin + i < frames; i++) {
      const time = note.time + i / sr;
      if (i % 64 === 0) {
        while (ccIndex < controls.length && controls[ccIndex].time <= time) {
          const cc = controls[ccIndex++], value = cc.value / 127;
          if (cc.cc === 7) volume = value;
          else if (cc.cc === 11) expression = value;
          else if (cc.cc === 10) pan = value;
          else if (cc.cc === 74) brightness = value;
          else if (cc.cc === 18) mute = value;
        }
        while (bendIndex < (note.pitchBend?.length ?? 0) && note.pitchBend![bendIndex].offset <= i / sr) {
          bend = Math.pow(2, ((note.pitchBend![bendIndex++].value - 8192) / 8192 * 2) / 12);
        }
        gain = (bank.manifest.playbackGain ?? 1) * (sample.levelTrim ?? 1) * resolveTrackGain(params, level, volume, expression) * voice.velocity / (sample.velocity / 127) * (1 - .58 * mute);
        const angle = Math.max(0, Math.min(1, pan + componentPan)) * Math.PI / 2;
        lGain = gain * Math.cos(angle); rGain = gain * Math.sin(angle);
        // Only darken relative to the baked neutral tone; no extra resonators.
        alpha = 1 - Math.exp(-2 * Math.PI * Math.min(19000, 1500 + brightness * 24000) / sr);
      }
      if (held && position >= sample.loopEnd!) position = sample.loopStart! + (position - sample.loopEnd!) % (sample.loopEnd! - sample.loopStart!);
      if (position >= sample.frames - 1) break;
      let value = read(position);
      if (held) {
        const crossfade = Math.min(bank.manifest.sampleRate * .025, (sample.loopEnd! - sample.loopStart!) / 4);
        if (position >= sample.loopEnd! - crossfade) {
          const weight = (position - (sample.loopEnd! - crossfade)) / crossfade;
          value = value * (1 - weight) + read(sample.loopStart! - crossfade + position - (sample.loopEnd! - crossfade)) * weight;
        }
      }
      filter += alpha * (value - filter);
      const envelope = damped && i > note.dur * sr ? Math.max(0, 1 - (i / sr - note.dur) / release) : 1;
      if (begin + i >= 0) { left[begin + i] += filter * envelope * lGain; right[begin + i] += filter * envelope * rGain; }
      position += baseRate * bend;
      if (i % 8192 === 0 && performance.now() - lastYield > 16) { await yieldToUI(); checkAbort(signal); lastYield = performance.now(); }
    }
  }
  return { left, right, startSample };
}
