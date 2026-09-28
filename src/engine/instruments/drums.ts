import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class DrumsModule implements InstrumentModule {
  id = 'drums';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      gateSignal,
      freqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 1234);
    const detuneSemitones = (randNorm(hitSeed ^ 0x1234) * 3.5) / 100;
    const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

    const instId = (params.instrumentId ?? '').toLowerCase();
    const construction = params.bodyConstruction ?? 'wood-box';
    const isMetalShell = construction === 'metal-shell' || /timbal|metal|steel|agogo|bell|snare-metal/.test(instId);
    const isWoodBox = construction === 'wood-box' || /cajon|cajón|box|slit-drum/.test(instId);
    const isHeelToe = action === 'heel' || action === 'toe' || /heel|toe/i.test(action ?? '');

    const isLogDrum = instId.includes('log-drum');
    const isMeend = action === 'meend' || /meend/i.test(action ?? '');
    const bodyMult = 0.5 + params.body * 2.5;

    const pitchEnv = el.adsr(
      isMeend ? 0.15 : 0.001,
      isMeend ? 0.4 : (isHeelToe ? 0.02 : (0.045 + params.body * 0.02)),
      0,
      0.006,
      gateSignal
    );

    const sweepAmount = isMeend ? -0.4 : (isLogDrum ? 0.2 : (isHeelToe ? 0.8 : (isMetalShell ? 1.4 : (isWoodBox ? 2.0 : 2.6 + b * 1.0))));
    const dynamicF0 = el.mul(f0, el.add(1.0, el.mul(sweepAmount, pitchEnv)));

    const shellDecay = isHeelToe ? 0.05 : (decayTime * (0.35 + 0.5 * params.body) * (isWoodBox ? 0.75 : 1.0));
    const shellCavityDecay = isWoodBox ? shellDecay * 1.5 * bodyMult : shellDecay * 0.9 * bodyMult;
    const bodyAmpEnv = el.adsr(0.0005, shellDecay, 0, 0.03 + shellDecay * 0.1, gateSignal);
    const fundamentalCycle = el.mul(bodyAmpEnv, el.cycle(dynamicF0));

    const isRim = voice.contactPoint ? voice.contactPoint < 0.25 : false;
    const noiseTilt = 1800 + randNorm(hitSeed ^ 0x7777) * 250;
    const snapNoiseGain = isLogDrum ? 0.03 : (isHeelToe ? 0.08 : (isRim ? 0.65 : 0.25));
    const snapNoise = el.mul(
      snapNoiseGain,
      el.mul(el.highpass(noiseTilt, 1.2, el.noise()), el.adsr(0.0002, isHeelToe ? 0.005 : 0.012, 0, 0.004, gateSignal))
    );

    let metalRing: any = el.const({ value: 0 });
    if (isMetalShell && !isHeelToe) {
      const ringDecay = shellDecay * 0.7;
      metalRing = el.mul(
        0.18,
        el.mul(
          el.add(el.cycle(el.mul(f0, 2.76)), el.mul(0.7, el.cycle(el.mul(f0, 3.41)))),
          el.adsr(0.0003, ringDecay, 0, 0.015, gateSignal)
        )
      );
    }

    const shellFreq = isWoodBox ? el.mul(f0, 0.42) : el.mul(f0, 0.58);
    const shellBurstGain = isLogDrum ? 1.4 : (isHeelToe ? 0.06 : (isWoodBox ? 0.65 * (0.3 + params.body) : 0.25));
    const shellBurst = el.mul(
      shellBurstGain,
      el.mul(
        el.svf({ mode: 'bandpass' }, shellFreq, isWoodBox ? 1.6 : 2.0, fundamentalCycle),
        el.adsr(0.001, shellCavityDecay, 0, 0.04, gateSignal)
      )
    );

    const drumSum = el.add(fundamentalCycle, el.add(snapNoise, el.add(metalRing, shellBurst)));
    return el.tanh(el.mul(el.const({ value: 1.4 + params.drive * 1.5 }), drumSum));
  }
}
