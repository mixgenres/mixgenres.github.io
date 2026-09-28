import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { getFormantProfileForInstrument } from '../elementary/elementaryEngine';

export default class SaxModule implements InstrumentModule {
  id = 'sax';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      params,
      gateSignal,
      velSignal,
      freqSignal,
      b,
      action
    } = ctx;

    const noteSeed = seedOf(trackId, voiceIndex, 6789);
    const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

    const isFall = action === 'fall' || action === 'drop' || /fall|drop|caida|pitch-env-down/i.test(action ?? '');
    const isDoit = action === 'doit' || action === 'rip' || action === 'rip-up' || /doit|rip|pitch-env-up/i.test(action ?? '');
    const isGrowl = action === 'growl' || /growl|throat-growl/i.test(action ?? '');
    const isShake = action === 'shake' || /shake|lip-trill/i.test(action ?? '');

    const scoopDepth = (isFall || isDoit) ? 0 : 0.04 * (0.5 + params.pressure * 0.5);
    const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
    const scoopOffset = el.mul(scoopDepth, scoopEnv);

    const fallGlide = isFall ? el.mul(el.const({ value: -0.18 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
    const doitGlide = isDoit ? el.mul(el.const({ value: 0.20 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
    const shakeMod = isShake ? el.mul(el.cycle(7.8), el.mul(el.const({ value: 0.055 }), gateSignal)) : el.const({ value: 0 });

    const pitchMod = el.add(el.sub(1.0, scoopOffset), el.add(fallGlide, el.add(doitGlide, shakeMod)));
    const dynamicFreqSignal = el.mul(freqSignal, pitchMod);
    const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

    let reedPulse: any = el.add(
      el.mul(0.85, el.blepsaw(safeDynamicFreqSignal)),
      el.mul(0.15, el.blepsquare(safeDynamicFreqSignal))
    );

    if (isGrowl) {
      const growlNoise = el.mul(0.25, el.noise());
      const growlMod = el.mul(el.add(el.cycle(44), growlNoise), el.mul(el.const({ value: 0.45 }), gateSignal));
      reedPulse = el.add(reedPulse, el.mul(reedPulse, growlMod));
    }

    const breathNoise = el.mul(0.08 * (1 - params.pressure) * breathDev, el.noise());
    const excited = el.add(reedPulse, breathNoise);

    const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
    const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
    const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.30);

    const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 16);
    const reedTongueBurst = el.highpass(Math.min(19000, profile.tongueFreq), 1.2, el.noise());
    const tongueTransient = el.mul(tongueLevel, el.mul(reedTongueBurst, el.adsr(0.0002, 0.006, 0, 0.002, gateSignal)));

    const reedEnv = el.adsr(0.006, 0.055, 0.72, 0.06, gateSignal);
    const reedCutoff = el.min(
      el.const({ value: 18000 }),
      el.max(
        el.const({ value: 300 }),
        el.add(safeDynamicFreqSignal, el.mul(el.const({ value: 3000 + b * 5500 }), el.mul(reedEnv, velSignal)))
      )
    );

    const f1 = el.mul(profile.f1.gain, el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, excited));
    const f2 = el.mul(profile.f2.gain, el.svf({ mode: 'bandpass' }, profile.f2.freq, profile.f2.q, excited));
    const f3Freq = profile.f3?.freq ?? Math.min(19000, profile.f2.freq * 1.55);
    const f3Gain = profile.f3?.gain ?? 0.22;
    const f3Q = profile.f3?.q ?? 2.8;
    const f3 = el.mul(f3Gain, el.svf({ mode: 'bandpass' }, Math.min(19000, f3Freq), f3Q, excited));
    const bodyResonance = el.mul(params.body, el.add(f1, el.add(f2, f3)));

    const filteredReed = el.lowpass(reedCutoff, 1.15, el.add(excited, el.add(tongueTransient, bodyResonance)));
    const drive = el.add(el.const({ value: 1.3 + params.drive * 1.8 }), el.mul(el.const({ value: 1.5 }), velSignal));
    
    return el.mul(0.85, el.tanh(el.mul(filteredReed, drive)));
  }
}
