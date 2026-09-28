import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { getFormantProfileForInstrument } from '../elementary/elementaryEngine';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';

/**
 * TrumpetModule
 * 
 * Physical synthesis module modeling an authentic Bb brass trumpet:
 * - Lip-reed oscillation with non-linear shockwave steepening in cylindrical leadpipe
 * - Resonant mouthpiece cup and flaring bell acoustic formants
 * - Rich salsa and jazz brass performance gestures: shakes, doit rips, falls, throat growls, and half-valve scoops
 * - Authentic double-tonguing transients and mute acoustics
 */
export default class TrumpetModule implements InstrumentModule {
  id = 'trumpet';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      params,
      gateSignal,
      velSignal,
      freqSignal,
      b,
      action
    } = ctx;

    const noteSeed = seedOf(trackId, voiceIndex, 2345);
    const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

    // 1. Gesture Recognition (Falls, Doits, Shakes, Growls, Bends)
    const isFall = action === 'fall' || action === 'drop' || /fall|drop|caida|pitch-env-down/i.test(action ?? '');
    const isDoit = action === 'doit' || action === 'rip' || action === 'rip-up' || /doit|rip|pitch-env-up/i.test(action ?? '');
    const isGrowl = action === 'growl' || /growl|throat-growl/i.test(action ?? '');
    const isShake = action === 'shake' || /shake|lip-trill/i.test(action ?? '');
    const isSlur = action === 'legato' || action === 'slur' || action === 'lip_slur' || (params.articulation < 0.25 && action !== 'staccato');
    const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;

    // 2. Pitch Dynamics & Gesture Shaping
    // Attack scoop on unslurred notes
    const scoopDepth = (isFall || isDoit || isSlur) ? 0 : 0.042 * (0.5 + params.pressure * 0.5);
    const scoopEnv = el.adsr(0.0003, 0.022, 0, 0.005, gateSignal);
    const scoopOffset = el.mul(scoopDepth, scoopEnv);

    // Fall & Doit pitch trajectories
    const fallGlide = isFall ? el.mul(el.const({ value: -0.22 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });
    const doitGlide = isDoit ? el.mul(el.const({ value: 0.25 }), el.sub(1.0, gateSignal)) : el.const({ value: 0 });

    // Lip-trill shake (rapid alternation between overtone modes at 7.2Hz)
    const shakeMod = isShake ? el.mul(el.cycle(7.2), el.mul(el.const({ value: 0.065 }), gateSignal)) : el.const({ value: 0 });

    // Trumpet expressive vibrato (5.6Hz, 30 cents, delayed onset on sustained notes)
    const wantsVibrato = !isShake && !isFall && !isDoit && !isStaccato;
    const vibratoOnset = el.adsr(isSlur ? 0.12 : 0.24, 0.08, 1.0, 0.06, gateSignal);
    const vibratoLfo = el.cycle(5.6 + randNorm(noteSeed ^ 0x77) * 0.15);
    const vibratoDepth = wantsVibrato
      ? el.mul(el.const({ value: 0.016 }), vibratoOnset)
      : el.const({ value: 0 });
    const vibratoMod = el.mul(vibratoDepth, vibratoLfo);

    // Dynamic pitch combination
    const pitchMod = el.add(el.sub(1.0, scoopOffset), el.add(fallGlide, el.add(doitGlide, el.add(shakeMod, vibratoMod))));
    const dynamicFreqSignal = el.mul(freqSignal, pitchMod);
    const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

    // 3. Lip-Reed Excitation with Shockwave Steepening
    // Lip oscillation generates a rich harmonic spectrum
    let lipBuzz: any = el.add(
      el.mul(0.62, el.blepsaw(safeDynamicFreqSignal)), 
      el.mul(0.38, el.blepsquare(safeDynamicFreqSignal))
    );

    // Throat growl (sub-harmonic frequency modulation at 48Hz + low noise)
    if (isGrowl) {
      const growlNoise = el.mul(0.22, el.noise());
      const growlMod = el.mul(el.add(el.cycle(48), growlNoise), el.mul(el.const({ value: 0.48 }), gateSignal));
      lipBuzz = el.add(lipBuzz, el.mul(lipBuzz, growlMod));
    }

    // High-velocity breath rush through leadpipe
    const breathNoise = el.mul(0.045 * (1 - params.pressure * 0.6) * breathDev, el.pinknoise());
    const excited = el.add(lipBuzz, breathNoise);

    // 4. Attack Tonguing Transient
    const tongueLevel = isSlur ? 0.02 : (isStaccato ? 0.72 : 0.36);
    const profile = getFormantProfileForInstrument(params.instrumentId ?? 'trumpet', 15);
    const lipAttackBurst = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.tongueFreq || 2600), 1.9, el.noise());
    const lipTransient = el.mul(tongueLevel, el.mul(lipAttackBurst, el.adsr(0.0002, 0.008, 0, 0.003, gateSignal)));

    // 5. Mouthpiece & Bell Acoustic Formants
    const f1 = el.mul(profile.f1.gain || 0.8, el.svf({ mode: 'bandpass' }, profile.f1.freq || 1200, profile.f1.q || 2.2, excited));
    const f2 = el.mul(profile.f2.gain || 0.6, el.svf({ mode: 'bandpass' }, profile.f2.freq || 2800, profile.f2.q || 2.6, excited));
    const f3Freq = profile.f3?.freq ?? 5200;
    const f3Gain = profile.f3?.gain ?? 0.3;
    const f3Q = profile.f3?.q ?? 2.0;
    const f3 = el.mul(f3Gain, el.svf({ mode: 'bandpass' }, Math.min(19000, f3Freq), f3Q, excited));
    const bodyResonance = el.mul(params.body, el.add(f1, el.add(f2, f3)));

    // 6. Dynamic Non-Linear Shockwave Wave-Steepening (The signature brassy "bark" at forte)
    const hornEnv = el.adsr(0.006, 0.05, 0.78, 0.07, gateSignal);
    const openHornCutoff = el.min(
      el.const({ value: 18500 }),
      el.max(
        el.const({ value: 300 }),
        el.add(safeDynamicFreqSignal, el.mul(el.const({ value: 3800 + b * 6800 }), el.mul(hornEnv, velSignal)))
      )
    );

    // Mute handling (cup/straight/harmon mute behavior)
    const instrumentDef = params.instrumentId ? INSTRUMENTS_BY_ID[params.instrumentId] : undefined;
    const muteDef = instrumentDef?.performanceArticulations?.mute;
    const muteCutoffHz = muteDef?.cutoffFreqHz ?? 1600;
    const hornCutoff = el.add(
      el.mul(el.sub(1.0, params.mute), openHornCutoff),
      el.mul(params.mute, el.const({ value: Math.min(1800, muteCutoffHz) }))
    );

    const filteredHorn = el.lowpass(hornCutoff, 1.25, el.add(excited, el.add(lipTransient, bodyResonance)));

    // Non-linear acoustic saturation
    const drive = el.add(el.const({ value: 0.95 + params.drive * 1.1 }), el.mul(el.const({ value: 2.4 }), velSignal));
    return el.mul(0.86, el.tanh(el.mul(filteredHorn, drive)));
  }
}
