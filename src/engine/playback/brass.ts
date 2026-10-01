import { instrumentHasKey, ENGINE_INSTRUMENT_KEYS } from '../../engine/lookup/instrumentKeys.ts';
import { el } from '@elemaudio/core';
import { getFormantProfileForInstrument } from './elementaryEngine.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class BrassModule implements InstrumentModule {
  id = 'brass';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const { params, gateSignal, freqSignal, action, dspProfile } = ctx;
    const id = (params.instrumentId ?? '').toLowerCase();
    const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 15);
    const trombone = id === 'trombone';
    const muted = id === 'muted-trumpet' || action === 'mute';
    const horn = instrumentHasKey(id, ENGINE_INSTRUMENT_KEYS.horn);
    const tuba = id === 'tuba';
    const pressure = Math.max(0.05, Math.min(1, params.pressure));
    const lipDrive = dspProfile?.excitationDynamics.lipTensionResistance?.nonlinearBlare ?? (trombone ? 0.72 : 0.82);

    const vibrato = action === 'vibrato' || action === 'shake'
      ? el.mul(0.004 + 0.006 * pressure, el.cycle(trombone ? 5.3 : 6.0))
      : 0;
    const pitch = el.mul(freqSignal, el.add(1, vibrato));

    // Lip-reed source: asymmetric buzz plus standing-wave feedback. The bore
    // formants come from the instrument definition, so trombone/horn/tuba do
    // not inherit trumpet resonances.
    const buzz = el.add(
      el.mul(0.62, el.blepsaw(pitch)),
      el.mul(0.18, el.blepsquare(el.mul(pitch, 2))),
      el.mul(0.10, el.blepsaw(el.mul(pitch, horn ? 0.5 : 1.5))),
    );
    const breath = el.mul(
      (dspProfile?.mechanicalArtifacts.airHiss ?? 0.10) * 0.12,
      el.highpass(1800, 0.9, el.noise()),
    );

    const f1 = el.mul(profile.f1.gain, el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, buzz));
    const f2 = el.mul(profile.f2.gain, el.svf({ mode: 'bandpass' }, profile.f2.freq, profile.f2.q, buzz));
    const f3 = profile.f3 ? el.mul(profile.f3.gain, el.svf({ mode: 'bandpass' }, profile.f3.freq, profile.f3.q, buzz)) : 0;

    const fall = action === 'fall' || action === 'doit'
      ? el.mul(action === 'fall' ? -0.08 : 0.10, el.sub(1, gateSignal))
      : 0;
    const source = el.mul(
      el.add(1, fall),
      el.add(
        el.mul(0.48, buzz),
        el.mul(0.22, f1),
        el.mul(0.16, f2),
        typeof f3 === 'number' ? f3 : el.mul(0.10, f3),
        breath,
      ),
    );

    const muteFilter = muted ? 0.52 : 1;
    const cutoff = Math.max(900, Math.min(15000, (1400 + ctx.b * 8500) * muteFilter * (tuba ? 0.78 : horn ? 0.88 : 1)));
    const attack = action === 'staccato' || action === 'accent' ? 0.0012 : 0.004;
    const env = el.adsr(attack, 0.045, 0.76, 0.055, gateSignal);

    return el.mul(
      env,
      el.tanh(el.mul(1.05 + lipDrive * (0.5 + ctx.velBoost), el.lowpass(cutoff, 1.05, source))),
    );
  }
}
