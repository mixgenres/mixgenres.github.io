import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { getFormantProfileForInstrument } from '../elementary/elementaryEngine';

export default class FluteModule implements InstrumentModule {
  id = 'flute';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      params,
      dspProfile,
      gateSignal,
      velSignal,
      freqSignal,
      b,
      action
    } = ctx;

    const noteSeed = seedOf(trackId, voiceIndex, 7890);
    const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

    const scoopDepth = 0.04 * (0.5 + params.pressure * 0.5);
    const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
    const dynamicFreqSignal = el.mul(freqSignal, el.sub(1.0, el.mul(scoopDepth, scoopEnv)));
    const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

    const breath = el.mul(0.12 * (1 - params.pressure) * breathDev, el.noise());
    const isReservoir = Boolean(dspProfile?.excitationDynamics.continuousReservoir?.articulationNeverSilences);
    const exciterEnv = isReservoir ? el.const({ value: 1 }) : el.adsr(0.015, 0.06, 0.70, 0.05, gateSignal);
    const phasor = el.syncphasor(safeDynamicFreqSignal, gateSignal);
    const coreTone = el.add(
      el.mul(0.8, el.sin(el.mul(2 * Math.PI, phasor))),
      el.mul(0.2, el.blepsquare(safeDynamicFreqSignal))
    );
    const jetInput = el.add(el.mul(exciterEnv, coreTone), breath);

    const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (ctx.articulation < 0.25 && action !== 'staccato');
    const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || ctx.articulation > 0.65;
    const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.55 : 0.25);

    const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 7);
    const chiffBurst = profile.tongueType === 'soft-puff'
      ? el.lowpass(Math.min(19000, profile.tongueFreq), 1.0, el.noise())
      : el.svf({ mode: 'bandpass' }, Math.min(19000, profile.tongueFreq), 2.2, el.noise());
    const chiff = el.mul(tongueLevel, el.mul(chiffBurst, el.adsr(0.0004, 0.009, 0, 0.003, gateSignal)));

    const filterEnv = el.adsr(0.012, 0.08, 0.65, 0.06, gateSignal);
    const cutoff = el.min(
      el.const({ value: 18000 }),
      el.max(
        el.const({ value: 350 }),
        el.add(safeDynamicFreqSignal, el.mul(el.const({ value: 2200 + b * 4500 }), el.mul(filterEnv, velSignal)))
      )
    );
    const filtered = el.lowpass(cutoff, 1.1, el.add(jetInput, chiff));
    
    return el.mul(0.9, el.tanh(el.mul(el.const({ value: 1.2 + params.drive * 1.5 }), filtered)));
  }
}
