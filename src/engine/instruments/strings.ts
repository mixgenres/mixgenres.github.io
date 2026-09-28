import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class StringsModule implements InstrumentModule {
  id = 'strings';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      gateSignal,
      safeFreqSignal,
      b,
      pk
    } = ctx;

    // Create 3 detuned and asynchronously vibrato-modulated voices for natural chorus ensemble depth
    const renderSectionVoice = (idx: number, detuneCents: number, panSide: number, vibSpeed: number, delayMs: number) => {
      // Intonation drift + vibrato
      const vibLfo = el.cycle(vibSpeed);
      const vibOnset = el.adsr(0.35 + idx * 0.1, 0.15, 1.0, 0.12, gateSignal);
      const vibDepth = el.mul(el.const({ value: 0.007 }), vibOnset);
      const intonationDetune = Math.pow(2, detuneCents / 1200);
      
      const modulatedFreq = el.mul(
        el.mul(safeFreqSignal, el.const({ value: intonationDetune })),
        el.add(1.0, el.mul(vibDepth, vibLfo))
      );

      // Unique bow jitter/friction per player
      const bowJitter = el.mul(el.const({ value: 0.003 + idx * 0.001 }), el.noise());
      const playerFreq = el.mul(modulatedFreq, el.add(1.0, bowJitter));

      const coreOsc = el.blepsaw(playerFreq);

      // Rosin scraping noise
      const frictionAttackGate = el.adsr(0.04 + idx * 0.015, 0.15, 0.82, 0.08, gateSignal);
      const rosinCutoff = 1000 + idx * 250;
      const frictionNoise = el.mul(
        el.mul(el.const({ value: 0.08 }), frictionAttackGate),
        el.highpass(rosinCutoff, 1.0, el.pinknoise())
      );

      const excited = el.add(coreOsc, frictionNoise);
      const playerAudio = el.tanh(el.mul(el.const({ value: 1.4 }), excited));

      // Individual player physical cavity filtering (violin/cello mix)
      const lpCutoff = 1200 + b * 4500;
      const filtered = el.lowpass(lpCutoff, 1.1, playerAudio);

      // Equal power pan positioning for the ensemble width
      const pan = 0.5 + panSide * 0.35;
      const leftGain = Math.cos(pan * Math.PI * 0.5);
      const rightGain = Math.sin(pan * Math.PI * 0.5);

      // Fractional delay to simulate spatial spacing of players in an orchestral section
      const delayKey = `${pk}_player_${idx}`;
      const delayed = delayMs > 0
        ? el.delay({ key: delayKey, size: 4410 }, el.const({ value: delayMs * 44.1 }), el.const({ value: 0 }), filtered)
        : filtered;

      return {
        left: el.mul(el.const({ value: leftGain }), delayed),
        right: el.mul(el.const({ value: rightGain }), delayed)
      };
    };

    // Stacking 3 distinct string players:
    // Player 1: Centered, dry, LFO 5.2Hz
    const p1 = renderSectionVoice(0, -3.2, 0, 5.2, 0);
    // Player 2: Left stage, +12 cents sharp, delayed 18ms, LFO 5.9Hz
    const p2 = renderSectionVoice(1, 11.8, -1.0, 5.9, 18);
    // Player 3: Right stage, -13 cents flat, delayed 26ms, LFO 4.6Hz
    const p3 = renderSectionVoice(2, -12.5, 1.0, 4.6, 26);

    // Return stereo pair (the framework/mixer is designed for mono-to-stereo routing,
    // so we can sum them or return leftSum. In elementary, our track signals sum.
    // Wait, the `renderVoice` in elementaryEngine returns a mono signal node,
    // and then `renderTrack` handles track panning.
    // If a module returns a mono signal, we can return the sum of leftSum and rightSum,
    // or just return the mono mixed signal and let the track pan do the spatialization.
    // To fit within the mono Node return signature of renderVoice, we return the mono sum:
    return el.mul(el.const({ value: 0.45 }), el.add(p1.left, el.add(p2.left, p3.left)));
  }
}
