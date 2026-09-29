import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class MarimbaModule implements InstrumentModule {
  id = 'marimba';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      freqSignal,
      decayTime
    } = ctx;

    const f0 = freqSignal;
    const bar0 = el.mul(el.cycle(f0), el.adsr(0.0003, decayTime * 0.4, 0, 0.01, gateSignal));
    const bar1 = el.mul(0.35, el.mul(el.cycle(el.mul(f0, 2.756)), el.adsr(0.0003, decayTime * 0.2, 0, 0.005, gateSignal)));
    const bar2 = el.mul(0.15, el.mul(el.cycle(el.mul(f0, 5.404)), el.adsr(0.0003, decayTime * 0.1, 0, 0.002, gateSignal)));

    const strike = el.mul(0.3, el.adsr(0.0002, 0.005, 0, 0.002, gateSignal));
    
    return el.add(strike, el.add(bar0, el.add(bar1, bar2)));
  }
}
