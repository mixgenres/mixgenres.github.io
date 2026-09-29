import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';

export default class TremoloStringsModule implements InstrumentModule {
  id = 'tremolo-strings';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      safeFreqSignal,
      b,
      pk
    } = ctx;

    const renderSectionVoice = (idx: number, detuneCents: number, panSide: number, vibSpeed: number, delayMs: number) => {
      const vibLfo = el.cycle(vibSpeed);
      const vibOnset = el.adsr(0.2, 0.1, 1.0, 0.1, gateSignal);
      const vibDepth = el.mul(el.const({ value: 0.008 }), vibOnset);
      const intonationDetune = Math.pow(2, detuneCents / 1200);
      
      const modulatedFreq = el.mul(
        el.mul(safeFreqSignal, el.const({ value: intonationDetune })),
        el.add(1.0, el.mul(vibDepth, vibLfo))
      );

      const bowJitter = el.mul(el.const({ value: 0.004 }), el.noise());
      const playerFreq = el.mul(modulatedFreq, el.add(1.0, bowJitter));

      const coreOsc = el.blepsaw(playerFreq);

      // Rapid, asynchronous tremolo LFO per player (e.g. 7.2Hz, 8.1Hz, 6.7Hz)
      const tremSpeed = 6.8 + idx * 1.3;
      const tremLfo = el.cycle(tremSpeed);
      const tremMod = el.add(0.55, el.mul(0.45, tremLfo));

      const frictionAttackGate = el.adsr(0.012, 0.08, 0.85, 0.05, gateSignal);
      const rosinCutoff = 1200 + idx * 300;
      const frictionNoise = el.mul(
        el.mul(el.mul(tremMod, el.const({ value: 0.12 })), frictionAttackGate),
        el.highpass(rosinCutoff, 1.15, el.pinknoise())
      );

      // Modulate core oscillator gain with the tremolo LFO
      const excited = el.add(el.mul(tremMod, coreOsc), frictionNoise);
      const playerAudio = el.tanh(el.mul(el.const({ value: 1.5 }), excited));

      const lpCutoff = 1500 + b * 5200;
      const filtered = el.lowpass(lpCutoff, 1.1, playerAudio);

      const pan = 0.5 + panSide * 0.4;
      const leftGain = Math.cos(pan * Math.PI * 0.5);

      const delayKey = `${pk}_trem_player_${idx}`;
      const delayed = delayMs > 0
        ? el.delay({ key: delayKey, size: 4410 }, el.const({ value: delayMs * 44.1 }), el.const({ value: 0 }), filtered)
        : filtered;

      return el.mul(el.const({ value: leftGain }), delayed);
    };

    const p1 = renderSectionVoice(0, -3.8, 0, 5.0, 0);
    const p2 = renderSectionVoice(1, 12.1, -1.0, 6.2, 14);
    const p3 = renderSectionVoice(2, -14.5, 1.0, 4.4, 22);

    return el.mul(el.const({ value: 0.45 }), el.add(p1, el.add(p2, p3)));
  }
}
