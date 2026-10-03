import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

/**
 * BandoneonModule
 * 
 * Simplified reed synthesis for a 142-tone bisonoric bandoneon:
 * - Dry 8' fundamental and 4' upper-octave reeds
 * - True bisonoric asymmetry between bellows opening (abrir/pull) and closing (cerrar/push)
 * - Knee-drop ("golpe de rodilla") impact transients on aggressive marcato downbeats
 * - Bellows pressure shaping; chromatic arrastre approaches belong in the score
 * - Resonant wooden air chamber and valve air-rush acoustic modeling
 */
export default class BandoneonModule implements InstrumentModule {
  id = 'bandoneon';
  ownedDspSections = ['coupledResonators', 'excitationDynamics.kneeDropImpact'];

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
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

    // The compiler's physical button selection is now carried all the way into
    // synthesis. Button/side do not change the intended pitch (the map already
    // resolved that), but they shape the small mechanical/contact component: the
    // two manuals have different case coupling and each button has a stable
    // deterministic contact variance. This makes the physical map audible in the
    // same restrained way a real player's button mechanics are audible.
    const buttonIndex = voice.bandoneonButtonIndex ?? 0;
    const sideCode = voice.bandoneonSideCode ?? 1;
    const buttonVariation = ((buttonIndex * 37 + sideCode * 17) % 101) / 100;
    const manualCoupling = sideCode === 1 ? 1.0 : 0.88;
    const buttonContact = 0.82 + buttonVariation * 0.18;

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
    const isLegato = action === 'legato' || action === 'legato_squeeze' || /legato/i.test(action ?? '');
    const isPortato = action === 'portato';
    const isChapa = action === 'chapa' || /chapa|mute/i.test(action ?? '');
    const isTremolo = action === 'tremolo';
    const isBend = action === 'bend' || /bend|portamento/i.test(action ?? '');

    // Arrastre is an approach figure and pressure swell. Chromatic approach
    // notes belong in the score; a free reed does not slide three semitones.
    const arrastreEnv = el.adsr(0.001, 0.085, 0, 0.01, gateSignal);
    const arrastrePitchMod = isArrastre
      ? el.sub(1.0, el.mul(el.const({ value: 0.002 }), arrastreEnv))
      : el.const({ value: 1.0 });

    // Vibrato on sustained lyrical notes
    const wantsVibrato = action === 'vibrato' || isTremolo;
    const vibratoRate = 5.2 + randNorm(noteSeed ^ 0x51) * 0.12;
    const vibratoOnsetEnv = el.adsr(isLegato ? 0.15 : 0.28, 0.05, 1.0, 0.04, gateSignal);
    const vibLfo = el.cycle(vibratoRate);
    const vibratoMod = wantsVibrato
      ? el.add(1.0, el.mul(0.055, el.mul(vibLfo, vibratoOnsetEnv)))
      : el.const({ value: 1.0 });
    const tremoloLfo = el.add(0.78, el.mul(0.22, el.add(1, el.cycle(8.5))));
    const tremoloMod = isTremolo ? tremoloLfo : el.const({ value: 1.0 });
    const bendEnv = isBend ? el.adsr(0.001, 0.14, 0, 0.02, gateSignal) : el.const({ value: 0 });
    const bendRatio = isBend ? el.add(1, el.mul(-0.004, bendEnv)) : el.const({ value: 1.0 });

    const directionPitchCents = bellows
      ? (isClosing ? bellows.closing.pitchDriftCents : bellows.opening.pitchDriftCents)
      : (isClosing ? 1.5 : -1.5);
    const directionPitchRatio = Math.pow(2, directionPitchCents / 1200);
    const reedFreq = el.mul(
      freqSignal,
      el.mul(arrastrePitchMod, el.mul(bendRatio, directionPitchRatio))
    );
    const safeReedFreq = el.min(el.const({ value: 18000 }), el.max(el.const({ value: 20 }), reedFreq));

    // 4. Dual zinc reed generation. A 142-tone Rheinische/Doble-A bandoneon is
    // two-chörig in octave tuning: the written fundamental plus its octave above.
    // Keep the pair dry and beat-free; the octave relationship is a major part of
    // the instrument's recognizable compact, transparent spectrum.
    const octaveUpperFreq = el.min(19000, el.mul(safeReedFreq, 2));
    const reed8 = el.blepsaw(safeReedFreq);
    const reed4 = el.blepsaw(octaveUpperFreq);

    const reedCore = el.add(
      el.mul(0.64, reed8),
      el.mul(0.36, reed4)
    );

    // 5. Non-linear Zinc Reed Pressure Waveshaping (Self-Owned Excitation Saturation)
    const dynamicPressure = el.add(
      el.const({ value: 0.72 + basePressure * 0.40 }),
      el.mul(el.const({ value: 0.22 * directionBias }), velSignal)
    );
    const reedPressureRaw = el.mul(reedCore, dynamicPressure);
    // Asymmetric soft-clipping characteristic of heavy zinc reeds
    const reedPressure = el.tanh(el.mul(el.add(1.0, el.mul(0.85, basePressure)), reedPressureRaw));
    const articulationDamp = isChapa ? 0.42 : isPortato ? 0.72 : 1.0;
    const articulationPressure = el.mul(articulationDamp, el.mul(tremoloMod, vibratoMod));

    // 6. Resonant Wooden Air Chamber & Bisonoric Formants (Owned coupledResonators)
    let chamberAudio: AudioSignal;
    const modes = dspProfile?.coupledResonators?.bodyModes;
    if (modes && modes.length > 0) {
      const modeSignals: AudioSignal[] = [];
      for (let i = 0; i < modes.length; i++) {
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
    // Bellows leakage is a continuous acoustic detail, but it should sit well below
    // the reed core rather than behaving like broadband percussion.
    const flowNoise = el.mul(
      el.lowpass(3800 + b * 2600, 0.85, el.pinknoise()),
      el.mul((0.024 + (dspProfile?.mechanicalArtifacts.bellowsNoise ?? 0.05) * 0.09) * manualCoupling, gateSignal)
    );

    // The famous knee/leg marcato is an intentional physical accent, not a noise
    // component on every note. Applying it to every onset makes sustained or lyrical
    // bandoneon lines sound like a stream of mechanical impacts.
    const kneeData = dspProfile?.excitationDynamics?.kneeDropImpact;
    const kneeDecayMs = kneeData?.decayMs ?? 18;
    const kneeBaseGain = (kneeData?.gain ?? 0.9) * (kneeData?.saturation ?? 1.0);
    const kneeAccentScale = isMarcato && (voice.velocity ?? 0) >= (kneeData?.threshold ?? .65) ? 0.16 : 0;
    const kneeEnv = el.adsr(0.0002, kneeDecayMs / 1000, 0, 0.004, gateSignal);
    const kneeThump = el.mul(el.cycle(68), kneeEnv);
    const kneeNoise = el.mul(el.highpass(1600 + b * 2000, 0.9, el.noise()), kneeEnv);
    const kneeImpact = el.mul(
      el.const({ value: kneeBaseGain * kneeAccentScale * (0.35 + velBoost * 0.65) * buttonContact }),
      el.add(el.mul(0.6, kneeThump), el.mul(0.4, kneeNoise))
    );

    // 8. Final Acoustic Sum & Master Timbral Filter
    const acousticSum = el.add(
      el.mul(0.42, el.mul(articulationPressure, reedPressure)),
      el.add(chamberAudio, el.add(flowNoise, kneeImpact))
    );

    const masterCutoff = Math.min(19000, 4200 + b * 4600 + (isClosing ? 400 : 0));
    return el.lowpass(masterCutoff, 1.05, acousticSum);
  }
}
