import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';

/**
 * PalmasModule
 * 
 * Physical synthesis module modeling authentic Flamenco Handclapping (Palmas):
 * - Palmas Sordas (Muted/Cupped): Hollow, deep, cupped palm air resonance (380Hz) with soft fleshy transient
 * - Palmas Claras / Fuertes (Bright/Open): Sharp, cutting, high-frequency finger-on-palm impact crack (2.8kHz)
 * - Redoble / Repique: Triplet rolling bursts for remates and llamadas
 * - Microtiming ensemble smearing modeling authentic interlocking palmeros
 */
export default class PalmasModule implements InstrumentModule {
  id = 'palmas';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      params,
      gateSignal,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 9191);
    const timingJitter = 1.0 + randNorm(hitSeed ^ 0x33) * 0.05;

    // Detect Sordas vs Claras vs Redoble
    const isRedoble = action === 'redoble' || action === 'roll' || /redoble|roll/i.test(action ?? '');
    const isSordas = action === 'palmas-sordas' || action === 'ghost' || /sordas|cupped|soft|muted/i.test(`${action} ${(action ?? '')}`);

    if (isRedoble) {
      // Fast 3-clap triplet burst across ~36ms
      const bursts = Array.from({ length: 3 }, (_, i) =>
        el.adsr(0.0001 + i * 0.012, 0.025, 0, 0.006, gateSignal)
      );
      const crackNoise = el.svf({ mode: 'bandpass' }, el.const({ value: 2900 * timingJitter }), 2.2, el.noise());
      const burstSum = bursts.reduce((acc, b) => el.add(acc, b), el.const({ value: 0 }));
      const redobleSignal = el.mul(crackNoise, burstSum);
      return el.tanh(el.mul(el.const({ value: 1.6 + params.drive * 1.2 }), redobleSignal));
    }

    if (isSordas) {
      // 1. Palmas Sordas (Cupped Muted Hands - Cante Jondo / Soleá)
      const airCavityEnv = el.adsr(0.0004, 0.055, 0, 0.015, gateSignal);
      const airPop = el.mul(
        airCavityEnv,
        el.svf({ mode: 'bandpass' }, el.const({ value: 380 * timingJitter }), 3.2, el.pinknoise())
      );
      const lowThump = el.mul(
        el.adsr(0.0005, 0.035, 0, 0.01, gateSignal),
        el.cycle(el.const({ value: 120 * timingJitter }))
      );

      const sordasSum = el.add(el.mul(0.75, airPop), el.mul(0.45, lowThump));
      return el.tanh(el.mul(el.const({ value: 1.4 + params.drive * 1.0 }), sordasSum));
    } else {
      // 2. Palmas Claras / Fuertes (Sharp Open Claps - Bulerías / Remates)
      const crackEnv = el.adsr(0.0001, 0.032, 0, 0.008, gateSignal);
      const skinCrack = el.mul(
        crackEnv,
        el.svf({ mode: 'bandpass' }, el.const({ value: 2800 * timingJitter }), 2.4, el.noise())
      );
      const highSnap = el.mul(
        el.adsr(0.0001, 0.012, 0, 0.004, gateSignal),
        el.highpass(4200, 1.3, el.noise())
      );
      const palmBody = el.mul(
        el.adsr(0.0003, 0.045, 0, 0.01, gateSignal),
        el.svf({ mode: 'bandpass' }, 850, 2.0, el.pinknoise())
      );

      const clarasSum = el.add(
        el.mul(0.65, skinCrack),
        el.add(el.mul(0.45, highSnap), el.mul(0.35, palmBody))
      );
      return el.tanh(el.mul(el.const({ value: 1.6 + params.drive * 1.2 }), clarasSum));
    }
  }
}
