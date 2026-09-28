import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class FreeReedModule implements InstrumentModule {
  id = 'free-reed';

  renderVoice(ctx: VoiceRenderContext): any {
    const { params, gateSignal, freqSignal, action, dspProfile } = ctx;
    const id = (params.instrumentId ?? '').toLowerCase();
    const harmonica = id === 'harmonica';
    const melodica = id === 'melodica';
    const sho = id === 'sho';
    const pressure = Math.max(0.05, Math.min(1, params.pressure));

    const reedFreq = action === 'bend'
      ? el.mul(freqSignal, el.add(1, el.mul(-0.035 * pressure, el.cycle(1.2))))
      : freqSignal;
    const primary = el.blepsaw(reedFreq);
    const upper = el.blepsaw(el.mul(reedFreq, harmonica ? 2.01 : 2));
    const reed = el.add(
      el.mul(harmonica ? 0.58 : sho ? 0.46 : 0.62, primary),
      el.mul(harmonica ? 0.24 : 0.20, upper),
    );

    const breath = el.mul(
      (dspProfile?.mechanicalArtifacts.airHiss ?? 0.12) * (0.12 + 0.18 * pressure),
      el.highpass(harmonica ? 2600 : 1800, 0.9, el.noise()),
    );
    const click = el.mul(
      melodica ? 0.05 : harmonica ? 0.12 : 0.025,
      el.highpass(2500, 1.0, el.noise()),
    );
    const chamber = sho
      ? el.add(
          el.mul(0.20, el.svf({ mode: 'bandpass' }, 900, 4.5, reed)),
          el.mul(0.12, el.svf({ mode: 'bandpass' }, 1800, 3.5, reed)),
        )
      : el.mul(0.10, el.svf({ mode: 'bandpass' }, Math.max(400, ctx.freq * 2.1), 2.8, reed));

    const env = el.adsr(
      0.002,
      harmonica ? 0.025 : 0.045,
      0.78,
      0.05,
      gateSignal,
    );
    const handWah = harmonica && (action === 'wah' || action === 'hand-wah')
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
