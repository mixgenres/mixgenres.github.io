import { el } from './dsp';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';

export default class FreeReedModule implements InstrumentModule {
  id = 'free-reed';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const { params, gateSignal, freqSignal, action, dspProfile } = ctx;
    const profile = INSTRUMENTS_BY_ID[params.instrumentId ?? '']?.freeReedSynthesis;
    const fundamentalGain = profile?.fundamentalGain ?? 0.62;
    const upperPartialGain = profile?.upperPartialGain ?? 0.20;
    const upperPartialRatio = profile?.upperPartialRatio ?? 2;
    const pressure = Math.max(0.05, Math.min(1, params.pressure));

    const reedFreq = action === 'bend'
      ? el.mul(freqSignal, el.add(1, el.mul(-(profile?.bendDepth ?? 0.035) * pressure, el.cycle(1.2))))
      : freqSignal;
    const primary = el.blepsaw(reedFreq);
    const upper = el.blepsaw(el.mul(reedFreq, upperPartialRatio));
    const reed = el.add(
      el.mul(fundamentalGain, primary),
      el.mul(upperPartialGain, upper),
    );

    const breath = el.mul(
      (dspProfile?.mechanicalArtifacts.airHiss ?? 0.12) * (0.12 + 0.18 * pressure),
      el.highpass(profile?.breathNoiseCutoffHz ?? 1800, 0.9, el.noise()),
    );
    const click = el.mul(
      profile?.transientClickGain ?? 0.025,
      el.highpass(2500, 1.0, el.noise()),
    );
    const chamber = profile?.chamberResonances?.length
      ? profile.chamberResonances.reduce((sum, band) => el.add(
          sum,
          el.mul(band.gain, el.svf({ mode: 'bandpass' }, band.frequencyHz, band.q, reed)),
        ), el.const({ value: 0 }))
      : el.mul(0.10, el.svf({ mode: 'bandpass' }, Math.max(400, ctx.freq * (profile?.chamberFrequencyMultiple ?? 2.1)), profile?.chamberQ ?? 2.8, reed));

    const env = el.adsr(
      0.002,
      profile?.attackSeconds ?? 0.045,
      0.78,
      0.05,
      gateSignal,
    );
    const handWah = profile?.handWah && (action === 'wah' || action === 'hand-wah')
      ? el.svf({ mode: 'lowpass' }, 900 + ctx.b * 3800, 2.2, reed)
      : reed;

    return el.mul(
      env,
      el.tanh(el.mul(
        1.0 + (dspProfile?.excitationDynamics.nonlinearDrive ?? 0.08) * 2.2,
        el.add(el.mul(0.78, handWah), chamber, breath, click),
      )),
    );
  }
}
