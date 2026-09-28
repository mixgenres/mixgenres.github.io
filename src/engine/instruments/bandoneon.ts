import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';

/**
 * BandoneonModule
 * 
 * Physical synthesis module modeling an authentic 142-tone Alfred Arnold (AA) bisonoric bandoneon:
 * - Dual zinc reed plates (8' fundamental + subtle dry-detuned unison/octave) delivering characteristic metallic bite
 * - True bisonoric asymmetry between bellows opening (abrir/pull) and closing (cerrar/push)
 * - Knee-drop ("golpe de rodilla") impact transients on aggressive marcato downbeats
 * - Tango arrastre pitch & pressure scooping dynamics
 * - Resonant wooden air chamber and valve air-rush acoustic modeling
 */
export default class BandoneonModule implements InstrumentModule {
  id = 'bandoneon';
  ownedDspSections = ['coupledResonators', 'excitationDynamics.kneeDropImpact'];

  renderVoice(ctx: VoiceRenderContext): any {
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

    const noteSeed = seedOf(trackId, voiceIndex, 5150);

    // 1. Pure Percussive Articulations (Bellows Slap & Golpe de Caja)
    if (action === 'bellows-slap') {
      const airBurst = el.lowpass(850, 0.9, el.noise());
      const bodyThump = el.mul(el.cycle(75), el.adsr(0.0003, 0.025, 0, 0.008, gateSignal));
      const snapEnv = el.adsr(0.0004, 0.018, 0, 0.005, gateSignal);
      return el.mul(el.const({ value: 1.1 }), el.add(el.mul(0.7, el.mul(snapEnv, airBurst)), el.mul(0.6, bodyThump)));
    }

    if (action === 'golpe-caja') {
      const woodPunch = el.mul(el.cycle(115), el.adsr(0.0004, 0.028, 0, 0.010, gateSignal));
      const caseClick = el.mul(el.svf({ mode: 'bandpass' }, 1850, 2.5, el.noise()), el.adsr(0.0002, 0.008, 0, 0.004, gateSignal));
      return el.add(el.mul(0.75, woodPunch), el.mul(0.35, caseClick));
    }

    // 2. Bellows Direction & Bisonoric Asymmetry
    const isClosing = voice.bellowsDirectionCode !== undefined
      ? voice.bellowsDirectionCode === 2
      : false;

    const reservoir = dspProfile?.excitationDynamics.continuousReservoir;
    const bellows = dspProfile?.excitationDynamics.bisonoricAsymmetry;
    const basePressure = reservoir?.pressure ?? params.pressure;
    const directionBias = bellows
      ? (isClosing ? bellows.closing.pressure : bellows.opening.pressure)
      : (isClosing ? 1.06 : 0.96);
    const directionFormant = bellows
      ? (isClosing ? 1 + bellows.closing.formantShift : 1 + bellows.opening.formantShift)
      : (isClosing ? 1.08 : 0.95);

    // 3. Pitch Dynamics & Tango Arrastre (Pre-beat scooping drag)
    const isArrastre = action === 'arrastre' || /arrastre|drag/i.test(action ?? '');
    const isMarcato = action === 'marcato' || /marcato|en 4|marcado/i.test(action ?? '');
    const isStaccato = action === 'staccato' || action === 'seco' || /staccato|seco/i.test(action ?? '');
    const isLegato = action === 'legato' || action === 'legato_squeeze' || /legato/i.test(action ?? '');

    // Arrastre starts ~2-3 semitones below and sweeps quickly into the fundamental with rising bellows pressure
    const arrastreEnv = el.adsr(0.001, 0.085, 0, 0.01, gateSignal);
    const arrastrePitchMod = isArrastre
      ? el.sub(1.0, el.mul(el.const({ value: 0.16 }), arrastreEnv))
      : el.const({ value: 1.0 });

    // Vibrato on sustained lyrical notes
    const wantsVibrato = isLegato || (!isMarcato && !isStaccato && !isArrastre);
    const vibratoRate = 5.2 + randNorm(noteSeed ^ 0x51) * 0.12;
    const vibratoDepthRatio = Math.pow(2, 28 / 1200) - 1; // 28 cents
    const vibratoOnsetEnv = el.adsr(isLegato ? 0.15 : 0.28, 0.05, 1.0, 0.04, gateSignal);
    const vibLfo = el.cycle(vibratoRate);
    const vibratoMod = wantsVibrato
      ? el.add(1.0, el.mul(vibratoDepthRatio, el.mul(vibLfo, vibratoOnsetEnv)))
      : el.const({ value: 1.0 });

    const reedFreq = el.mul(freqSignal, el.mul(arrastrePitchMod, vibratoMod));
    const safeReedFreq = el.min(el.const({ value: 18000 }), el.max(el.const({ value: 20 }), reedFreq));

    // 4. Dual Zinc Reed Generation (8' Fundamental + 8'/4' Register Detuned Partial)
    const zincDetuneCents = 4.2 + randNorm(noteSeed ^ 0x99) * 1.8;
    const secondReedFreq = el.mul(safeReedFreq, Math.pow(2, zincDetuneCents / 1200));

    // Thick zinc reeds generate sharp asymmetric pulse-saw waves
    const reed1 = el.blepsaw(safeReedFreq);
    const reed2 = el.blepsaw(secondReedFreq);
    const octHigh = el.lowpass(el.mul(safeReedFreq, 6.0), 0.8, el.blepsaw(el.mul(safeReedFreq, 2.001)));

    // Combined dual-reed acoustic core
    const reedCore = el.add(
      el.mul(0.68, reed1),
      el.add(el.mul(0.24, reed2), el.mul(0.12, octHigh))
    );

    // 5. Non-linear Zinc Reed Pressure Waveshaping (Self-Owned Excitation Saturation)
    const dynamicPressure = el.add(
      el.const({ value: 0.72 + basePressure * 0.40 }),
      el.mul(el.const({ value: 0.22 * directionBias }), velSignal)
    );
    const reedPressureRaw = el.mul(reedCore, dynamicPressure);
    // Asymmetric soft-clipping characteristic of heavy zinc reeds
    const reedPressure = el.tanh(el.mul(el.add(1.0, el.mul(0.85, basePressure)), reedPressureRaw));

    // 6. Resonant Wooden Air Chamber & Bisonoric Formants (Owned coupledResonators)
    let chamberAudio: any;
    const modes = dspProfile?.coupledResonators?.bodyModes;
    if (modes && modes.length > 0) {
      const modeSignals: any[] = [];
      for (let i = 0; i < Math.min(4, modes.length); i++) {
        const m = modes[i];
        const modeFreq = Math.min(19000, Math.max(30, ctx.freq * m.ratio * directionFormant));
        modeSignals.push(el.mul(m.gain, el.svf({ mode: 'bandpass' }, modeFreq, m.q, reedPressure)));
      }
      chamberAudio = modeSignals.length === 1 ? modeSignals[0] : el.add(...modeSignals);
    } else {
      const airCavity = el.svf({ mode: 'bandpass' }, 220, 3.2, reedPressure);
      const chamberFreq = 820 * directionFormant;
      const primaryChamber = el.svf({ mode: 'bandpass' }, chamberFreq, 2.8, reedPressure);
      const secondaryChamber = el.svf({ mode: 'bandpass' }, chamberFreq * 2.08, 2.2, reedPressure);
      chamberAudio = el.add(el.mul(0.38, primaryChamber), el.add(el.mul(0.16, secondaryChamber), el.mul(0.18, airCavity)));
    }

    // 7. Mechanical Bellows Air Rush & Knee-Drop Impact (Owned excitationDynamics.kneeDropImpact)
    const flowNoise = el.mul(
      el.lowpass(3800 + b * 2600, 0.85, el.pinknoise()),
      el.mul(0.042 + (dspProfile?.mechanicalArtifacts.bellowsNoise ?? 0.05) * 0.15, gateSignal)
    );

    const kneeData = dspProfile?.excitationDynamics?.kneeDropImpact;
    const kneeDecayMs = kneeData?.decayMs ?? (isMarcato ? 22 : 14);
    const kneeGain = (kneeData?.gain ?? (isMarcato ? 1.25 : 0.45)) * (kneeData?.saturation ?? 1.0);
    const kneeEnv = el.adsr(0.0002, kneeDecayMs / 1000, 0, 0.004, gateSignal);
    const kneeThump = el.mul(el.cycle(68), kneeEnv);
    const kneeNoise = el.mul(el.highpass(1600 + b * 2000, 0.9, el.noise()), kneeEnv);
    const kneeImpact = el.mul(
      el.const({ value: kneeGain * (0.35 + velBoost * 0.65) }),
      el.add(el.mul(0.6, kneeThump), el.mul(0.4, kneeNoise))
    );

    // 8. Final Acoustic Sum & Master Timbral Filter
    const acousticSum = el.add(
      el.mul(0.42, reedPressure),
      el.add(chamberAudio, el.add(flowNoise, kneeImpact))
    );

    const masterCutoff = Math.min(19000, 4200 + b * 4600 + (isClosing ? 400 : 0));
    return el.lowpass(masterCutoff, 1.05, acousticSum);
  }
}
