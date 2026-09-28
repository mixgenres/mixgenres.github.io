import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class ClavinetModule implements InstrumentModule {
  id = 'clavinet';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      pk
    } = ctx;

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
    const impulse = el.mul(el.noise(), el.adsr(0.00025, 0.004, 0, 0.002, gateSignal));
    const clavCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 2000 }), el.mul(safeFreqSignal, el.const({ value: 4.0 + b * 5.5 }))));
    const targetDecaySeconds = 0.25 + decayTime * (0.4 + b * 0.8);
    const fbGain = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
    const stringLoop = createDampedStringLoop(`${pk}:clav`, delayTimeSignal, fbGain, clavCutoff, impulse);
    const pickup = el.svf({ mode: 'bandpass' }, Math.min(19000, 700 + b * 1800), 1.1, stringLoop);
    const click = el.mul(0.18, el.mul(el.highpass(Math.min(19000, 2200), 1.0, el.noise()), el.adsr(0.0001, 0.003, 0, 0.0015, gateSignal)));
    
    return el.lowpass(Math.min(19000, 1200 + b * 4200), 1.0, el.add(pickup, click));
  }
}
