import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class HarpsichordModule implements InstrumentModule {
  id = 'harpsichord';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      pk
    } = ctx;

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
    const detunedFreqSignal = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 1.003 })));
    const detunedDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), detunedFreqSignal)));
    const pluck = el.mul(el.noise(), el.adsr(0.0001, 0.0025, 0, 0.0015, gateSignal));
    const harpsiCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 2200 }), el.mul(safeFreqSignal, el.const({ value: 4.5 + b * 6.5 }))));
    const targetDecaySeconds1 = 0.35 + decayTime * (0.6 + b * 1.2);
    const targetDecaySeconds2 = targetDecaySeconds1 * 0.92;
    const fbGain1 = fbGainForDecay(safeFreqSignal, targetDecaySeconds1);
    const fbGain2 = fbGainForDecay(detunedFreqSignal, targetDecaySeconds2);
    const string1 = createDampedStringLoop(`${pk}:h1`, delayTimeSignal, fbGain1, harpsiCutoff, pluck);
    const string2 = createDampedStringLoop(`${pk}:h2`, detunedDelaySignal, fbGain2, el.mul(harpsiCutoff, el.const({ value: 0.98 })), pluck);
    const upper = el.mul(0.18, el.cycle(el.mul(safeFreqSignal, 2.0)));
    const tone = el.add(string1, el.add(el.mul(0.75, string2), upper));
    
    return el.lowpass(Math.min(19000, 1400 + b * 7600), 1.0, tone);
  }
}
