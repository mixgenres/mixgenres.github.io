import { el } from './dsp';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class CowbellModule implements InstrumentModule {
  id = 'cowbell';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      velSignal,
      safeFreqSignal,
      b,
      decayTime
    } = ctx;

    const carrierPhasor = el.syncphasor(safeFreqSignal, gateSignal);

    const mod1 = el.sin(el.mul(2 * Math.PI * 1.414, carrierPhasor));
    const mod2 = el.sin(el.mul(2 * Math.PI * 2.718, carrierPhasor));
    const mod3 = el.sin(el.mul(2 * Math.PI * 4.236, carrierPhasor));

    const envMod1 = el.adsr(0.0002, 0.045 + decayTime * 0.07, 0, 0.02, gateSignal);
    const envMod2 = el.adsr(0.0002, 0.025 + decayTime * 0.04, 0, 0.015, gateSignal);
    const envMod3 = el.adsr(0.0001, 0.012 + decayTime * 0.02, 0, 0.01, gateSignal);

    const modIndex1 = el.mul(el.mul(el.const({ value: 3.4 + b * 2.8 }), velSignal), envMod1);
    const modIndex2 = el.mul(el.mul(el.const({ value: 2.6 + b * 2.2 }), velSignal), envMod2);
    const modIndex3 = el.mul(el.mul(el.const({ value: 1.8 + b * 1.6 }), velSignal), envMod3);

    const totalMod = el.add(el.mul(modIndex1, mod1), el.add(el.mul(modIndex2, mod2), el.mul(modIndex3, mod3)));
    const carrierPhase = el.add(el.mul(2 * Math.PI, carrierPhasor), totalMod);

    const bell = el.add(el.mul(0.65, el.sin(el.mul(2 * Math.PI, carrierPhasor))), el.mul(0.35, el.sin(carrierPhase)));

    const strikeNoise = el.mul(0.35, el.mul(el.highpass(3800, 1.2, el.noise()), el.adsr(0.0001, 0.006, 0, 0.003, gateSignal)));

    const tailPhasor = el.syncphasor(el.mul(safeFreqSignal, 1.002), gateSignal);
    const tailSine = el.mul(0.38, el.sin(el.mul(2 * Math.PI, tailPhasor)));

    const bellSum = el.add(bell, el.add(strikeNoise, tailSine));
    const sizzleEnv = el.adsr(0.001, decayTime * 0.6, 0, 0.05, gateSignal);
    const sizzle = el.mul(el.highpass(6500, 1.0, el.noise()), sizzleEnv);
    const finalBellSum = el.add(bellSum, el.mul(0.25 + b * 0.25, sizzle));
    
    return el.lowpass(Math.min(19000, 2400 + b * 8500), 1.0, finalBellSum);
  }
}
