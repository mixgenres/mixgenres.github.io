import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class SlowStringsModule implements InstrumentModule {
  id = 'slow-strings';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      gateSignal,
      safeFreqSignal,
      b,
      pk
    } = ctx;

    // Create 3 detuned, asynchronous swelling string players
    const renderSectionVoice = (idx: number, detuneCents: number, panSide: number, vibSpeed: number, delayMs: number) => {
      const vibLfo = el.cycle(vibSpeed);
      const vibOnset = el.adsr(0.6 + idx * 0.2, 0.3, 1.0, 0.4, gateSignal);
      const vibDepth = el.mul(el.const({ value: 0.006 }), vibOnset);
      const intonationDetune = Math.pow(2, detuneCents / 1200);
      
      const modulatedFreq = el.mul(
        el.mul(safeFreqSignal, el.const({ value: intonationDetune })),
        el.add(1.0, el.mul(vibDepth, vibLfo))
      );

      const bowJitter = el.mul(el.const({ value: 0.002 + idx * 0.001 }), el.noise());
      const playerFreq = el.mul(modulatedFreq, el.add(1.0, bowJitter));

      const coreOsc = el.blepsaw(playerFreq);

      // Slow strings have a slow, gentle attack friction envelope
      const frictionAttackGate = el.adsr(0.18 + idx * 0.06, 0.3, 0.9, 0.2, gateSignal);
      const rosinCutoff = 800 + idx * 200;
      const frictionNoise = el.mul(
        el.mul(el.const({ value: 0.05 }), frictionAttackGate),
        el.highpass(rosinCutoff, 0.95, el.pinknoise())
      );

      const excited = el.add(coreOsc, frictionNoise);
      const playerAudio = el.tanh(el.mul(el.const({ value: 1.3 }), excited));

      const lpCutoff = 1000 + b * 3200;
      const filtered = el.lowpass(lpCutoff, 1.0, playerAudio);

      const pan = 0.5 + panSide * 0.4;
      const leftGain = Math.cos(pan * Math.PI * 0.5);

      const delayKey = `${pk}_slow_player_${idx}`;
      const delayed = delayMs > 0
        ? el.delay({ key: delayKey, size: 4410 }, el.const({ value: delayMs * 44.1 }), el.const({ value: 0 }), filtered)
        : filtered;

      return el.mul(el.const({ value: leftGain }), delayed);
    };

    const p1 = renderSectionVoice(0, -2.5, 0, 4.8, 0);
    const p2 = renderSectionVoice(1, 9.5, -1.0, 5.4, 25);
    const p3 = renderSectionVoice(2, -10.2, 1.0, 4.2, 38);

    // Sum mono-mix node
    return el.mul(el.const({ value: 0.42 }), el.add(p1, el.add(p2, p3)));
  }
}
