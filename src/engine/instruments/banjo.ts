import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

/**
 * Five-string banjo: a short, bright plucked-string instrument coupled to a
 * tensioned head. It deliberately does not reuse the acoustic-guitar body
 * path because the head transient and short decay are part of the instrument's
 * identity.
 */
export default class BanjoModule implements InstrumentModule {
  id = 'banjo';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      params, dspProfile, pk, gateSignal, safeFreqSignal, b, decayTime, action,
    } = ctx;

    const head = dspProfile?.instrumentSpecific?.banjoHead;
    const membrane = dspProfile?.coupledResonators?.membrane2D;
    const hardPick = params.excitationType === 'hard-pick' || params.excitationType === 'plectrum';
    const isClawhammer = /clawhammer|frail/i.test(action ?? '');
    const isMuted = ctx.isMuted || /mute|chop/i.test(action ?? '');

    // Metal fingerpick/nail attack: short, bright, and materially different
    // from the broader guitar pick burst.
    const attackNoise = el.add(
      el.mul(hardPick ? 0.62 : 0.48, el.highpass(1800 + b * 1600, 0.9, el.pinknoise())),
      el.mul(0.16, el.svf({ mode: 'bandpass' }, 4200 + b * 2200, 2.0, el.noise()))
    );
    const attack = el.adsr(
      0.00012,
      isClawhammer ? 0.006 : 0.0035,
      0,
      0.002,
      gateSignal,
    );
    const excitation = el.mul(attackNoise, attack);

    const delay = el.min(
      el.const({ value: 4000 }),
      el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)),
    );

    // The banjo head is intentionally short-lived. Keep the musical decay
    // below a second even when a global track decay is set high; velocity and
    // head damping still shape it.
    const declaredDecay = Math.max(0.08, Math.min(0.75, decayTime));
    const headDecay = Math.max(0.42, Math.min(0.90,
      0.42 + declaredDecay * (0.42 + (membrane?.damping ?? 0.7) * 0.18)
    ));
    const targetDecay = isMuted ? Math.min(0.16, headDecay) : headDecay;
    const feedback = fbGainForDecay(safeFreqSignal, targetDecay);

    const cutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 2600 }),
        el.mul(safeFreqSignal, el.const({
          value: 5.0 + b * 8.0 + (head?.headTensionSnap ?? 0.9) * 2.0,
        })),
      ),
    );

    const string = createDampedStringLoop(`${pk}:banjo-string`, delay, feedback, cutoff, excitation);

    // The mylar head is a bright membrane/resonator, not a warm wooden guitar
    // cavity. The two modes provide the characteristic "ping + body" response.
    const headCenter = el.mul(
      (membrane?.radial ?? 0.94) * 0.24,
      el.svf({ mode: 'bandpass' }, 1850, 4.2, string),
    );
    const headEdge = el.mul(
      (membrane?.circular ?? 0.78) * 0.17,
      el.svf({ mode: 'bandpass' }, 3900, 3.0, string),
    );
    const rim = el.mul(
      0.10,
      el.svf({ mode: 'bandpass' }, 720, 2.0, string),
    );

    // Short fifth-string/drone sympathetic response.
    const drone = el.mul(
      0.10 * (head?.sympatheticDrone5th ? 1 : 0.35),
      el.svf({ mode: 'bandpass' }, Math.min(19000, Math.max(80, ctx.freq * 1.5)), 18, string),
    );

    const body = el.add(string, headCenter, headEdge, rim, drone);
    const outputCutoff = Math.min(19000, 7000 + b * 9000);
    // The shared track gain is intentionally retained for catalog calibration; this
    // module needs a compact internal lift because the head-coupled waveguide is
    return el.mul(18.8, el.lowpass(outputCutoff, 0.9, body));
  }
}
