import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class SynthModule implements InstrumentModule {
  id = 'synth';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      params,
      gateSignal,
      freqSignal,
      b
    } = ctx;

    const p1 = el.syncphasor(freqSignal, gateSignal);
    const p2 = el.syncphasor(el.mul(freqSignal, 1.004), gateSignal);
    const sawResettable = el.sub(el.mul(2.0, p1), 1.0);
    const squareResettable = el.tanh(el.mul(8.0, el.sin(el.mul(2 * Math.PI, p2))));
    const subSine = el.sin(el.mul(2 * Math.PI, p1));
    const sig = el.add(el.mul(0.35, sawResettable), el.add(el.mul(0.35, squareResettable), el.mul(0.30, subSine)));
    
    const cut = 300 + b * 7500;
    const q = 1 + params.resonance * 4;
    
    return el.svf({ mode: 'lowpass' }, cut, q, sig);
  }
}
