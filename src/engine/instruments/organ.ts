import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';

export default class OrganModule implements InstrumentModule {
  id = 'organ';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      params,
      gateSignal,
      safeFreqSignal,
      b,
      action,
      pk
    } = ctx;

    const dSub = el.mul(0.65, el.cycle(el.mul(safeFreqSignal, 0.5)));
    const dQuint = el.mul(0.50, el.cycle(el.mul(safeFreqSignal, 1.5)));
    const dFund = el.mul(0.85, el.cycle(safeFreqSignal));
    const d8th = el.mul(0.60, el.cycle(el.mul(safeFreqSignal, 2.0)));
    const d12th = el.mul(0.40, el.cycle(el.mul(safeFreqSignal, 3.0)));
    const d15th = el.mul(0.30, el.cycle(el.mul(safeFreqSignal, 4.0)));
    const drawbars = el.add(dSub, el.add(dQuint, el.add(dFund, el.add(d8th, el.add(d12th, d15th)))));

    const keyClick = el.mul(0.24, el.mul(el.highpass(3600, 1.2, el.noise()), el.adsr(0.0001, 0.005, 0, 0.002, gateSignal)));
    const organRaw = el.add(drawbars, keyClick);

    const rotarySpeed = params.styleFlavor > 0.65 ? 6.0 : 1.2;
    const rotaryLfo = el.cycle(rotarySpeed);
    const dopplerDelaySamples = el.add(el.const({ value: 100 }), el.mul(el.const({ value: 30 }), rotaryLfo));
    const dopplerDelay = el.delay({ key: `${pk}:leslie`, size: 44100 }, dopplerDelaySamples, el.const({ value: 0 }), organRaw);
    const amMod = el.add(el.const({ value: 0.82 }), el.mul(el.const({ value: 0.18 }), rotaryLfo));
    const leslieTone = el.mul(amMod, dopplerDelay);

    const isBubble = action === 'bubble' || action === 'staccato' || ctx.articulation > 0.7;
    const organEnv = el.adsr(0.003, isBubble ? 0.08 : 0.02, isBubble ? 0.0 : 0.95, isBubble ? 0.06 : 0.04, gateSignal);
    
    return el.mul(organEnv, el.lowpass(Math.min(19000, (isBubble ? 2800 : 4800) + b * 5500), 0.9, leslieTone));
  }
}
