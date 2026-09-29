import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';

export default class BellowsModule implements InstrumentModule {
  id = 'bellows';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      dspProfile,
      gateSignal,
      velSignal,
      freqSignal,
      velBoost,
      b,
      action
    } = ctx;

    const idLower = (params.instrumentId ?? '').toLowerCase();
    const isBandoneon = idLower === 'bandoneon';
    const isConcertina = idLower === 'concertina';
    const isAccordion = idLower === 'accordion';
    const noteSeed = seedOf(trackId, voiceIndex, 5150);

    if (action === 'bellows-slap') {
      const airBurst = el.lowpass(800, 0.9, el.noise());
      const snapEnv = el.adsr(0.0005, 0.015, 0, 0.005, gateSignal);
      return el.mul(snapEnv, airBurst);
    }

    const shortHitArticulations = ['staccato', 'marcato', 'accent', 'bellows-slap', 'golpe-caja', 'tremolo', 'arrastre'];
    const wantsVibrato = isBandoneon && !shortHitArticulations.includes(action);
    const vibratoDepthRatio = Math.pow(2, 28 / 1200) - 1;
    const vibratoOnsetEnv = el.adsr(0.25, 0.02, 1.0, 0.02, gateSignal);
    const vibLfo = el.cycle(5.2);
    const vibratoMod = wantsVibrato
      ? el.add(1, el.mul(vibratoDepthRatio, el.mul(vibLfo, vibratoOnsetEnv)))
      : el.const({ value: 1 });
    const reedFreq = el.mul(freqSignal, vibratoMod);

    const fourFootDetuneCents = isBandoneon ? 5 + randNorm(noteSeed) * 3 : 0;
    const fourFootFreq = el.mul(reedFreq, Math.pow(2, fourFootDetuneCents / 1200) * 2);
    const eightFoot = el.blepsaw(reedFreq);
    const fourFootRaw = el.blepsaw(fourFootFreq);
    const fourFoot = isBandoneon
      ? el.lowpass(el.mul(reedFreq, 6.4), 0.8, fourFootRaw)
      : fourFootRaw;
    const sixteenFoot = el.blepsaw(el.mul(reedFreq, 0.5));
    
    const registerText = `${action ?? ''} ${action ?? ''} ${action ?? ''}`.toLowerCase();
    const musetteRegister = isAccordion && registerText.includes('musette');
    const dryRegister = isAccordion && (registerText.includes('dry') || registerText.includes('master') || registerText.includes('clarinet'));
    const reedCore = isBandoneon
      ? el.add(el.mul(0.78, eightFoot), el.mul(0.22, fourFoot))
      : isConcertina
        ? el.add(el.mul(0.76, eightFoot), el.mul(0.24, fourFoot))
        : isAccordion && musetteRegister
          ? el.add(el.mul(0.31, el.blepsaw(el.mul(reedFreq, 0.986))), el.mul(0.38, eightFoot), el.mul(0.31, el.blepsaw(el.mul(reedFreq, 1.014))))
          : isAccordion && dryRegister
            ? el.add(el.mul(0.20, sixteenFoot), el.mul(0.58, eightFoot), el.mul(0.22, fourFoot))
            : isAccordion
              ? el.add(el.mul(0.34, sixteenFoot), el.mul(0.56, eightFoot), el.mul(0.10, fourFoot))
              : el.add(el.mul(0.72, eightFoot), el.mul(0.28, fourFoot));

    const reservoir = dspProfile?.excitationDynamics.continuousReservoir;
    const bellows = dspProfile?.excitationDynamics.bisonoricAsymmetry;
    const bellowsClosing = voice.bellowsDirectionCode !== undefined
      ? voice.bellowsDirectionCode === 2
      : false;
    const pressure = reservoir?.pressure ?? params.pressure;
    const directionBias = bellows
      ? (bellowsClosing ? bellows.closing.pressure : bellows.opening.pressure)
      : 1;
    const directionFormant = bellows ? (bellowsClosing ? 1 + bellows.closing.formantShift : 1 + bellows.opening.formantShift) : 1;

    const reedPressureRaw = el.mul(
      reedCore,
      el.add(el.const({ value: 0.70 + pressure * 0.42 }), el.mul(el.const({ value: 0.18 * directionBias }), velSignal))
    );
    const reedPressure = isBandoneon
      ? el.tanh(el.mul(el.add(1.0, el.mul(0.85, pressure)), reedPressureRaw))
      : reedPressureRaw;

    const chamberFreq = (isBandoneon ? 820 : isAccordion ? 860 : 1050) * directionFormant;
    const chamberQ = isBandoneon ? 2.8 : 1.7;
    const chamber = el.svf({ mode: 'bandpass' }, chamberFreq, chamberQ, reedPressure);
    const secondChamber = el.svf({ mode: 'bandpass' }, chamberFreq * 2.03, 2.0, reedPressure);

    const flowNoise = el.mul(
      el.lowpass(4200 + b * 2200, 0.8, el.pinknoise()),
      el.mul(0.045 + (dspProfile?.mechanicalArtifacts.bellowsNoise ?? 0) * 0.16, gateSignal)
    );

    let bellowsImpact: AudioSignal = el.const({ value: 0 });
    if (isBandoneon) {
      const knee = dspProfile?.excitationDynamics.kneeDropImpact;
      const kneeEnv = el.adsr(0.0002, (knee?.decayMs ?? 18) / 1000, 0, 0.004, gateSignal);
      const kneeNoise = el.highpass(1800 + b * 2500, 0.8, el.noise());
      bellowsImpact = el.mul((knee?.gain ?? 0.8) * (0.35 + velBoost * 0.7), el.mul(kneeNoise, kneeEnv));
    }

    return el.lowpass(
      Math.min(19000, (isBandoneon ? 4400 : 4200) + b * (isBandoneon ? 4000 : 5200)),
      1.0,
      el.add(el.mul(isBandoneon ? 0.44 : 0.58, reedPressure), el.add(el.mul(isBandoneon ? 0.50 : 0.42, chamber), el.add(el.mul(0.12, secondChamber), el.add(flowNoise, bellowsImpact))))
    );
  }
}
