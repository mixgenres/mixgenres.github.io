import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class RhodesModule implements InstrumentModule {
  id = 'rhodes';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      gateSignal,
      velSignal,
      safeFreqSignal,
      b,
      decayTime
    } = ctx;

    const phasor = el.syncphasor(safeFreqSignal, gateSignal);
    const mod = el.sin(el.mul(2 * Math.PI * 3.5, phasor));
    const fundamental = el.sin(el.mul(2 * Math.PI, phasor));

    const barkEnv = el.adsr(0.0004, 0.06 + decayTime * 0.10, 0.02, 0.03, gateSignal);
    const modIndex = el.mul(
      el.mul(el.const({ value: 2.0 + b * 4.0 }), velSignal),
      barkEnv
    );

    const carrierPhase = el.add(el.mul(2 * Math.PI, phasor), el.mul(modIndex, mod));
    const fmBark = el.sin(carrierPhase);
    const carrier = el.add(el.mul(0.6, fundamental), el.mul(0.4, fmBark));

    const tineClick = el.mul(0.14, el.mul(el.highpass(2600, 1.2, el.noise()), el.adsr(0.0001, 0.005, 0, 0.002, gateSignal)));
    const tone = el.add(carrier, tineClick);

    return el.lowpass(Math.min(19000, 1600 + b * 7500), 1.0, tone);
  }
}
