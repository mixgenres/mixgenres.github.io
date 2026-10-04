import { el } from './dsp';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

/**
 * CastanetsModule
 * 
 * Physical synthesis module modeling authentic Spanish Castañuelas (Castanets):
 * - Hembra (Right Hand): Higher pitched shell (980Hz + 3.4kHz crack) for four-finger cascading carretilla rolls (ri-au-ri-au)
 * - Macho (Left Hand): Lower pitched shell (680Hz + 2.2kHz crack) for strong single downbeat golpes (TA)
 * - Posticero: Muted thumb-damped click
 * - Choque: Direct clack of both castanets striking each other
 */
export default class CastanetsModule implements InstrumentModule {
  id = 'castanets';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      voice,
      gateSignal,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 8811);
    const jitter = 1.0 + randNorm(hitSeed ^ 0x55) * 0.03;

    const isRoll = action === 'roll' || action === 'carretilla' || /roll|carretilla/i.test(action ?? '');
    const isMacho = action === 'macho' || action === 'low' || voice.note === 76;

    if (isRoll) {
      // Carretilla: 4-finger cascading roll (little, ring, middle, index) over ~48ms
      const bursts = Array.from({ length: 4 }, (_, i) =>
        el.adsr(0.0001 + i * 0.012, 0.018, 0, 0.004, gateSignal)
      );
      const woodCup = el.svf({ mode: 'bandpass' }, el.const({ value: 980 * jitter }), 3.5, el.noise());
      const highCrack = el.highpass(3400, 1.4, el.noise());
      const combinedExcitation = el.add(el.mul(0.65, woodCup), el.mul(0.35, highCrack));
      const rollSum = bursts.reduce((acc, b) => el.add(acc, el.mul(combinedExcitation, b)), el.const({ value: 0 }));
      return el.tanh(el.mul(1.5, rollSum));
    }

    if (isMacho) {
      // Macho: Deeper hardwood cup (680Hz)
      const cupRes = el.mul(
        el.cycle(el.const({ value: 680 * jitter })),
        el.adsr(0.0002, 0.045, 0, 0.008, gateSignal)
      );
      const snapNoise = el.mul(
        el.svf({ mode: 'bandpass' }, 2200, 2.0, el.noise()),
        el.adsr(0.0001, 0.008, 0, 0.002, gateSignal)
      );
      return el.add(el.mul(0.75, cupRes), el.mul(0.45, snapNoise));
    }

    // Hembra: Bright hardwood cup (980Hz + 3.4kHz)
    const cupRes = el.mul(
      el.cycle(el.const({ value: 980 * jitter })),
      el.adsr(0.0002, 0.038, 0, 0.006, gateSignal)
    );
    const snapNoise = el.mul(
      el.highpass(3400, 1.3, el.noise()),
      el.adsr(0.0001, 0.006, 0, 0.002, gateSignal)
    );
    return el.add(el.mul(0.70, cupRes), el.mul(0.50, snapNoise));
  }
}
