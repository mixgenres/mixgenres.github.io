import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class PizzStringsModule implements InstrumentModule {
  id = 'pizz-strings';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      pk
    } = ctx;

    const renderSectionVoice = (idx: number, detuneCents: number, panSide: number, delayMs: number) => {
      const intonationDetune = Math.pow(2, detuneCents / 1200);
      const playerFreq = el.mul(safeFreqSignal, el.const({ value: intonationDetune }));

      // Snappy finger pluck transients
      const pluckEnv = el.adsr(0.0004, 0.006 + idx * 0.002, 0, 0.002, gateSignal);
      const pluckNoise = el.mul(el.noise(), pluckEnv);
      const pluckExcite = el.lowpass(el.mul(playerFreq, 3.8), 0.9, pluckNoise);

      const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), playerFreq)));
      const targetDecaySeconds = 0.16 + decayTime * (0.35 + b * 0.55);
      const fbGain = fbGainForDecay(playerFreq, targetDecaySeconds);
      const pizzCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(playerFreq, el.const({ value: 3.2 + b * 4.0 }))));

      const stringLoop = createDampedStringLoop(`${pk}_pizz_player_${idx}`, delayTimeSignal, fbGain, pizzCutoff, pluckExcite);

      // Unique body modes per player (mixed violins and violas)
      const airRes = el.svf({ mode: 'bandpass' }, 180 + idx * 45, 3.0, stringLoop);
      const woodRes = el.svf({ mode: 'bandpass' }, 260 + idx * 80, 2.4, stringLoop);
      const colored = el.add(stringLoop, el.add(el.mul(0.38, airRes), el.mul(0.28, woodRes)));

      const pan = 0.5 + panSide * 0.4;
      const leftGain = Math.cos(pan * Math.PI * 0.5);

      const delayKey = `${pk}_pizz_delay_${idx}`;
      const delayed = delayMs > 0
        ? el.delay({ key: delayKey, size: 4410 }, el.const({ value: delayMs * 44.1 }), el.const({ value: 0 }), colored)
        : colored;

      return el.mul(el.const({ value: leftGain }), delayed);
    };

    const p1 = renderSectionVoice(0, -3.0, 0, 0);
    const p2 = renderSectionVoice(1, 10.5, -1.0, 15);
    const p3 = renderSectionVoice(2, -11.2, 1.0, 22);

    return el.mul(el.const({ value: 0.45 }), el.add(p1, el.add(p2, p3)));
  }
}
