import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';

export default class AccordionModule implements InstrumentModule {
  id = 'accordion';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      voice,
      params,
      dspProfile,
      gateSignal,
      velSignal,
      freqSignal,
      b,
      action
    } = ctx;

    const reedFreq = freqSignal;

    const fourFootDetuneCents = 0;
    const fourFootFreq = el.mul(reedFreq, Math.pow(2, fourFootDetuneCents / 1200) * 2);
    const eightFoot = el.blepsaw(reedFreq);
    const fourFootRaw = el.blepsaw(fourFootFreq);
    const fourFoot = fourFootRaw;
    const sixteenFoot = el.blepsaw(el.mul(reedFreq, 0.5));

    const registerText = `${action ?? ''} ${action ?? ''} ${action ?? ''}`.toLowerCase();
    const musetteRegister = registerText.includes('musette');
    const dryRegister = registerText.includes('dry') || registerText.includes('master') || registerText.includes('clarinet');

    const reedCore = musetteRegister
      ? el.add(el.mul(0.31, el.blepsaw(el.mul(reedFreq, 0.986))), el.mul(0.38, eightFoot), el.mul(0.31, el.blepsaw(el.mul(reedFreq, 1.014))))
      : dryRegister
        ? el.add(el.mul(0.20, sixteenFoot), el.mul(0.58, eightFoot), el.mul(0.22, fourFoot))
        : el.add(el.mul(0.34, sixteenFoot), el.mul(0.56, eightFoot), el.mul(0.10, fourFoot));

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
    const reedPressure = reedPressureRaw;

    const chamberFreq = 860 * directionFormant;
    const chamberQ = 1.7;
    const chamber = el.svf({ mode: 'bandpass' }, chamberFreq, chamberQ, reedPressure);
    const secondChamber = el.svf({ mode: 'bandpass' }, chamberFreq * 2.03, 2.0, reedPressure);

    const flowNoise = el.mul(
      el.lowpass(4200 + b * 2200, 0.8, el.pinknoise()),
      el.mul(0.045 + (dspProfile?.mechanicalArtifacts.bellowsNoise ?? 0) * 0.16, gateSignal)
    );

    const bellowsImpact: AudioSignal = el.const({ value: 0 });

    return el.lowpass(
      Math.min(19000, 4200 + b * 5200),
      1.0,
      el.add(el.mul(0.58, reedPressure), el.add(el.mul(0.42, chamber), el.add(el.mul(0.12, secondChamber), el.add(flowNoise, bellowsImpact))))
    );
  }
}
