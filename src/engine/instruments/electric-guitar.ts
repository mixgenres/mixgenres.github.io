import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class ElectricGuitarModule implements InstrumentModule {
  id = 'electric-guitar';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      params,
      pk,
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      model
    } = ctx;

    const isJazz = model === 22;
    const isMutedGuitar = model === 23;
    const isDistortion = model === 24;
    const isOverdrive = model === 25;
    const isHarmonics = model === 26;

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));

    const targetDecaySeconds = isMutedGuitar
      ? (0.08 + decayTime * 0.25)
      : isJazz
      ? (0.35 + decayTime * 0.9)
      : (0.45 + decayTime * 1.8);
    const damping = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
    const attackTime = isMutedGuitar ? 0.00035 : 0.0007;

    const exciteFilter = el.lowpass(el.mul(safeFreqSignal, 4.0), 0.9, el.pinknoise());
    const impulse = el.mul(
      el.add(el.mul(0.65, exciteFilter), el.mul(0.35, el.noise())),
      el.adsr(attackTime, isMutedGuitar ? 0.004 : 0.008, 0, 0.003, gateSignal)
    );

    const mult = isJazz ? (2.5 + b * 3.5) : isMutedGuitar ? (2.0 + b * 2.5) : (3.5 + b * 6.5);
    const loopCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: mult }))));
    
    const stringLoop = createDampedStringLoop(`${pk}:egf`, delayTimeSignal, damping, loopCutoff, impulse);

    const driveAmount = isDistortion ? 7.5 : isOverdrive ? 4.0 : isHarmonics ? 1.6 : 1.2 + params.drive * 2.0;
    const driven = el.tanh(el.mul(el.const({ value: driveAmount }), stringLoop));

    const cabHP = el.highpass(100, 0.8, driven);
    const conePresence = el.svf({ mode: 'bandpass' }, 2200, 1.4, cabHP);
    const cabWithCone = el.add(cabHP, el.mul(0.35, conePresence));
    const cabCutoff = Math.min(19000, isJazz ? 4200 : 4800 + b * 700);
    const cabOut = el.lowpass(cabCutoff, 1.2, cabWithCone);

    const harmonic = isHarmonics ? el.mul(0.65, el.cycle(el.mul(safeFreqSignal, 2.0))) : 0;
    const mutedBody = isMutedGuitar ? el.mul(0.5, el.highpass(500, 1.0, cabOut)) : cabOut;

    return el.add(mutedBody, harmonic);
  }
}
