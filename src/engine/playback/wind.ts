import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import { getFormantProfileForInstrument } from './elementaryEngine.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

/** Aerophone renderer for single-reed, double-reed, and edge-tone winds.
 * Identity is supplied by the catalog's measured formant/physical profile;
 * no wind is silently treated as a saxophone.
 */
export default class WindModule implements InstrumentModule {
  id = 'wind';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const { trackId, voiceIndex, params, gateSignal, freqSignal, action, dspProfile } = ctx;
    const id = (params.instrumentId ?? '').toLowerCase();
    const profile = getFormantProfileForInstrument(params.instrumentId ?? '', ctx.model);
    const seed = seedOf(trackId, voiceIndex, 0x51a7);
    const breathVariance = 1 + randNorm(seed) * 0.035;
    const reed = /clarinet|oboe|bassoon|sax|hichiriki|english-horn/i.test(id);
    const doubleReed = /oboe|bassoon|english-horn|hichiriki/i.test(id);
    const fipple = /recorder|tin-whistle|low-whistle/i.test(id);
    const endBlown = /quena|shakuhachi|xiao|dizi|ryuteki|pan-flute|ocarina/i.test(id);
    const bright = fipple ? 1.12 : endBlown ? 0.92 : doubleReed ? 1.08 : 1;

    const pressure = Math.max(0.05, Math.min(1, params.pressure));
    const airNoise = el.mul(
      (dspProfile?.mechanicalArtifacts.airHiss ?? (reed ? 0.16 : 0.24)) * 0.18 * (0.65 + pressure),
      el.highpass(fipple ? 3400 : 2200, 0.9, el.noise())
    );

    const phase = el.syncphasor(freqSignal, gateSignal);
    const fundamental = reed
      ? el.add(
          el.mul(0.72, el.blepsaw(freqSignal)),
          el.mul(doubleReed ? 0.20 : 0.12, el.blepsquare(el.mul(freqSignal, 2)))
        )
      : el.sin(el.mul(2 * Math.PI, phase));

    const chiff = el.mul(
      fipple || endBlown ? 0.18 : 0.10,
      el.highpass(Math.min(12000, profile.tongueFreq), 1.1, el.noise()),
    );
    const tongued = action === 'staccato' || action === 'tongue' || action === 'accent';
    const tongue = el.mul(
      tongued ? 0.42 : 0.10,
      el.mul(el.highpass(profile.tongueFreq, 1.2, el.noise()), el.adsr(0.0002, 0.005, 0, 0.002, gateSignal)),
    );

    const f1 = el.mul(profile.f1.gain, el.svf({ mode: 'bandpass' }, profile.f1.freq * bright, profile.f1.q, fundamental));
    const f2 = el.mul(profile.f2.gain, el.svf({ mode: 'bandpass' }, profile.f2.freq * bright, profile.f2.q, fundamental));
    const f3 = profile.f3
      ? el.mul(profile.f3.gain, el.svf({ mode: 'bandpass' }, profile.f3.freq * bright, profile.f3.q, fundamental))
      : 0;

    const vibrato = action === 'vibrato' || ctx.articulation < 0.25
      ? el.mul(0.0025 + 0.006 * pressure, el.cycle(doubleReed ? 5.4 : 5.9))
      : 0;
    const pitched = el.mul(fundamental, el.add(1, vibrato));
    const tone = el.add(
      el.mul(0.52, pitched),
      el.mul(0.22, f1),
      el.mul(0.16, f2),
      typeof f3 === 'number' ? f3 : el.mul(0.10, f3),
      el.mul(0.08, airNoise),
      el.mul(0.08, tongue),
      el.mul(0.05, chiff),
    );

    const env = el.adsr(
      0.002,
      0.035 + (1 - pressure) * 0.045,
      0.72,
      0.045,
      gateSignal,
    );
    return el.mul(
      env,
      el.tanh(el.mul(1.0 + (dspProfile?.excitationDynamics.nonlinearDrive ?? 0.08) * (0.7 + ctx.velBoost), el.mul(breathVariance, tone))),
    );
  }
}
