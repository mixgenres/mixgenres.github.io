import { el } from './dsp';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class ConcertinaModule implements InstrumentModule {
  id = 'concertina';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      voice,
      params,
      dspProfile,
      gateSignal,
      velSignal,
      freqSignal,
      b
    } = ctx;

    const reedFreq = freqSignal;

    const fourFootFreq = el.mul(reedFreq, 2);
    const eightFoot = el.blepsaw(reedFreq);
    const fourFootRaw = el.blepsaw(fourFootFreq);
    const fourFoot = fourFootRaw;

    const reedCore = el.add(el.mul(0.76, eightFoot), el.mul(0.24, fourFoot));

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

    const chamberFreq = 1050 * directionFormant;
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
