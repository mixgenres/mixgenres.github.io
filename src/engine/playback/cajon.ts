import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { resolveInstrumentKitComponent } from '../../engine/lookup/instrument-components';

/**
 * CajonModule
 * 
 * Physical synthesis module modeling an authentic Flamenco/Peruvian Cajón:
 * - Grave (Bass Thump): 65Hz internal air cavity resonance + 160Hz front tapa flex
 * - Agudo (Snare Slap): 240Hz upper corner plywood snap + 3.6kHz internal snare wire buzzing noise burst
 * - Tip/Ghost: Delicate 360Hz fingertip wood tap for continuous compás subdivisions
 * - Side Knock: 480Hz solid hardwood side panel rim impact
 */
export default class CajonModule implements InstrumentModule {
  id = 'cajon';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      gateSignal,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 7890);
    const jitter = 1.0 + randNorm(hitSeed ^ 0x45) * 0.03;

    // Detect strike zone from MIDI note or action
    const noteNum = voice.note ?? 38;
    const component = resolveInstrumentKitComponent(params.instrumentId ?? 'cajon', noteNum, action);
    const componentGain = Math.pow(10, (component?.gainTrimDb ?? 0) / 20);
    const finish = (signal: AudioSignal) => el.mul(componentGain, signal);
    const isBass = component?.id === 'cajon-bass' || noteNum === 36 || action === 'low-tone' || action === 'cajon-grave' || /bass|grave|center/i.test(action);
    const isSide = component?.id === 'cajon-side' || noteNum === 37 || action === 'rim' || /side|rim/i.test(action);
    const isTip = component?.id === 'cajon-tip' || noteNum === 42 || action === 'tip' || action === 'ghost' || /tip|ghost/i.test(action);

    if (isBass) {
      // 1. Grave (Center Palm Bass Thump)
      const pitchEnv = el.adsr(0.0005, 0.035, 0, 0.01, gateSignal);
      const bassFreq = el.mul(el.const({ value: (component?.tuningHz ?? 65) * jitter }), el.add(1.0, el.mul(0.65, pitchEnv)));
      const bassOsc = el.cycle(bassFreq);
      const bassDecay = component?.decayTimeSec ?? 0.32;
      const bassEnv = el.adsr(0.0005, bassDecay * (1 - (component?.damping ?? 0.45) * 0.2), 0, 0.04, gateSignal);
      const subThump = el.mul(bassEnv, bassOsc);

      // Soundboard flex & air port rush
      const flexRes = el.svf({ mode: 'bandpass' }, component?.shellResonance ? (component.tuningHz ?? 160) * 2.46 : 160, 2.8, subThump);
      const airNoise = el.mul(
        el.lowpass(650, 0.8, el.pinknoise()),
        el.adsr(0.0005, 0.06, 0, 0.01, gateSignal)
      );

      const bassSum = el.add(subThump, el.add(el.mul(0.45, flexRes), el.mul(0.18, airNoise)));
      return finish(el.tanh(el.mul(el.const({ value: 1.5 + params.drive * 1.2 }), bassSum)));
    }

    if (isSide) {
      // 2. Hardwood Side Panel Knock
      const woodEnv = el.adsr(0.0002, 0.08, 0, 0.015, gateSignal);
      const woodTone = el.mul(woodEnv, el.cycle(el.const({ value: (component?.tuningHz ?? 480) * jitter })));
      const woodClick = el.mul(
        el.highpass(1800, 1.2, el.noise()),
        el.adsr(0.0001, 0.008, 0, 0.003, gateSignal)
      );
      return finish(el.add(el.mul(0.7, woodTone), el.mul(0.4, woodClick)));
    }

    if (isTip) {
      // 3. Delicate Fingertip Ghost Tap
      const tipEnv = el.adsr(0.0002, 0.05, 0, 0.01, gateSignal);
      const tipTone = el.mul(tipEnv, el.cycle(el.const({ value: (component?.tuningHz ?? 360) * jitter })));
      const tipNoise = el.mul(
        el.svf({ mode: 'bandpass' }, 2600, 1.8, el.pinknoise()),
        el.adsr(0.0001, 0.010, 0, 0.003, gateSignal)
      );
      return finish(el.mul(0.65, el.add(el.mul(0.6, tipTone), el.mul(0.5, tipNoise))));
    }

    // 4. Agudo (Upper Corner Snare Slap)
    // Front tapa corner wood snap + internal snare wire sizzle burst
    // The tapa slap is a noisy wood resonance, not a pitched tone. A sustained
    // 240 Hz oscillator on every MIDI 38 hit reads as a sequence of beeps in
    // fast compás patterns, so excite the authored resonance with a short
    // filtered-noise transient instead.
    const tapaTone = el.mul(
      el.svf({ mode: 'bandpass' }, (component?.tuningHz ?? 240) * jitter, 2.2, el.pinknoise()),
      el.adsr(0.0002, 0.025, 0, 0.008, gateSignal)
    );

    // Internal guitar snare wire buzz (3.6kHz highpass resonant noise)
    const snareWireNoise = el.mul(
      el.svf({ mode: 'bandpass' }, 3600, 2.2, el.noise()),
      el.adsr(0.0002, 0.065, 0, 0.01, gateSignal)
    );

    // High corner snap transient
    const cornerCrack = el.mul(
      el.highpass(4800, 1.3, el.noise()),
      el.adsr(0.0001, 0.006, 0, 0.002, gateSignal)
    );

    const slapSum = el.add(
      el.mul(0.42, tapaTone),
      el.add(el.mul(0.65, snareWireNoise), el.mul(0.40, cornerCrack))
    );

    return finish(el.tanh(el.mul(el.const({ value: 1.6 + params.drive * 1.4 }), slapSum)));
  }
}
