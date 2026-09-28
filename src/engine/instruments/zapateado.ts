import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';

/**
 * ZapateadoModule
 * 
 * Physical synthesis module modeling authentic Flamenco Dance Footwork (Zapateado/Taconeo):
 * - Nailed flamenco shoes on a resonant wooden tablao stage
 * - Tacón: 110Hz hollow wooden stage cavity thump + 1.2kHz heel-nail click
 * - Planta: 280Hz flat ball-of-foot wood slap
 * - Punta: 1400Hz sharp toe nail click
 * - Redoble: Rapid heel-toe triplet roll
 */
export default class ZapateadoModule implements InstrumentModule {
  id = 'zapateado';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      voice,
      gateSignal,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 6543);
    const jitter = 1.0 + randNorm(hitSeed ^ 0x22) * 0.04;

    const noteNum = voice.note ?? 38;
    const isTacon = noteNum === 36 || action === 'tacon' || action === 'heel' || /tacon|heel/i.test(`${action} ${(action ?? '')}`);
    const isPunta = noteNum === 42 || action === 'punta' || action === 'toe' || /punta|toe/i.test(`${action} ${(action ?? '')}`);
    const isRedoble = action === 'redoble' || action === 'roll' || /redoble|roll/i.test(action ?? '');

    if (isRedoble) {
      // 3-hit rapid heel-toe burst
      const bursts = Array.from({ length: 3 }, (_, i) =>
        el.adsr(0.0001 + i * 0.014, 0.022, 0, 0.005, gateSignal)
      );
      const stageThud = el.mul(el.cycle(el.const({ value: 115 * jitter })), bursts[0]);
      const woodSnap = el.mul(el.svf({ mode: 'bandpass' }, 320, 2.4, el.noise()), bursts[1]);
      const nailClick = el.mul(el.highpass(1600, 1.4, el.noise()), bursts[2]);
      return el.tanh(el.mul(1.5, el.add(stageThud, el.add(woodSnap, nailClick))));
    }

    if (isTacon) {
      // 1. Tacón (Heavy Heel Strike on Tablao Stage)
      const stageRes = el.mul(
        el.cycle(el.const({ value: 110 * jitter })),
        el.adsr(0.0005, 0.12, 0, 0.02, gateSignal)
      );
      const nailThud = el.mul(
        el.svf({ mode: 'bandpass' }, 1200, 2.0, el.noise()),
        el.adsr(0.0001, 0.012, 0, 0.003, gateSignal)
      );
      return el.add(el.mul(0.80, stageRes), el.mul(0.35, nailThud));
    }

    if (isPunta) {
      // 2. Punta (Toe Nail Click)
      const toeClick = el.mul(
        el.highpass(2200, 1.3, el.noise()),
        el.adsr(0.0001, 0.008, 0, 0.002, gateSignal)
      );
      const woodPlate = el.mul(
        el.cycle(el.const({ value: 450 * jitter })),
        el.adsr(0.0002, 0.035, 0, 0.008, gateSignal)
      );
      return el.add(el.mul(0.65, toeClick), el.mul(0.35, woodPlate));
    }

    // 3. Planta (Ball of Foot Slap)
    const plantaTone = el.mul(
      el.cycle(el.const({ value: 280 * jitter })),
      el.adsr(0.0003, 0.065, 0, 0.012, gateSignal)
    );
    const plantaSlap = el.mul(
      el.svf({ mode: 'bandpass' }, 1800, 1.8, el.noise()),
      el.adsr(0.0001, 0.010, 0, 0.003, gateSignal)
    );
    return el.add(el.mul(0.70, plantaTone), el.mul(0.40, plantaSlap));
  }
}
