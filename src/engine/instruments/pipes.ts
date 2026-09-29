import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';

export default class PipesModule implements InstrumentModule {
  id = 'pipes';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const { params, gateSignal, freqSignal, action, dspProfile } = ctx;
    const id = (params.instrumentId ?? '').toLowerCase();
    const uilleann = id === 'uilleann-pipes';
    const pressure = dspProfile?.excitationDynamics.continuousReservoir?.pressure ?? 0.8;
    const phase = el.syncphasor(freqSignal, gateSignal);
    const chanter = el.add(
      el.mul(0.64, el.blepsaw(freqSignal)),
      el.mul(0.18, el.sin(el.mul(2 * Math.PI, el.mul(phase, 2)))),
    );

    const droneRatios = uilleann ? [0.5, 1, 2] : [0.5, 1, 1.5, 2];
    const drones = droneRatios.map((ratio, i) =>
      el.mul(
        (0.10 - i * 0.012) * (0.75 + pressure * 0.35),
        el.blepsaw(el.mul(freqSignal, ratio)),
      ),
    );

    const grace = /grace|doubling|taorluath|triplet/i.test(action)
      ? el.mul(0.14, el.adsr(0.0002, 0.012, 0, 0.004, gateSignal))
      : 0;
    const air = el.mul(
      (dspProfile?.mechanicalArtifacts.airHiss ?? 0.30) * 0.08,
      el.lowpass(3200, 0.8, el.noise()),
    );

    // A reservoir instrument does not collapse to zero between notes; the
    // chanter/drone system remains acoustically pressurized.
    const flow = el.adsr(0.002, 0.018, 1.0, 0.04, gateSignal);
    return el.mul(flow, el.tanh(el.mul(1.0 + ctx.velBoost * 0.35, el.add(chanter, ...drones, grace, air))));
  }
}
