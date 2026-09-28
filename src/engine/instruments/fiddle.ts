import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class FiddleModule implements InstrumentModule {
  id = 'fiddle';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      pk,
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const noteSeed = seedOf(trackId, voiceIndex, 4004);
    
    const isPizz = action === 'pluck' || action === 'pizzicato' || action === 'tambor' || /pizz/i.test(voice.articulation ?? '');
    const isTremolo = action === 'tremolo' || /tremolo/i.test(voice.articulation ?? '');
    const isStaccato = action === 'staccato' || action === 'spiccato' || action === 'accent' || params.articulation > 0.50; // Fiddle players play short rhythmic strokes

    // Fiddle Vibrato is usually faster, shallower, and starts earlier than classical violin
    const vibratoSpeed = 6.4 + randNorm(noteSeed ^ 0x66) * 0.25;
    const vibratoLfo = el.cycle(vibratoSpeed);
    const vibratoOnset = el.adsr(0.12, 0.08, 1.0, 0.05, gateSignal); // Faster onset
    const vibratoDepth = el.mul(el.const({ value: 0.007 * (params.resonance + 0.15) }), vibratoOnset);
    const vibratoMod = el.add(1.0, el.mul(vibratoDepth, vibratoLfo));
    const vibratingFreq = el.mul(safeFreqSignal, vibratoMod);

    if (isPizz) {
      // Fiddle pluck (sharp, bright pluck)
      const pluckEnv = el.adsr(0.0003, 0.005, 0, 0.0018, gateSignal);
      const pluckNoise = el.mul(el.noise(), pluckEnv);
      const pluckExcite = el.lowpass(el.mul(vibratingFreq, 4.5), 0.95, pluckNoise);
      
      const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), vibratingFreq)));
      const targetDecaySeconds = 0.18 + decayTime * (0.35 + b * 0.55);
      const fbGain = fbGainForDecay(vibratingFreq, targetDecaySeconds);
      const pizzCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1800 }), el.mul(vibratingFreq, el.const({ value: 4.2 + b * 5.5 }))));
      
      const stringLoop = createDampedStringLoop(`${pk}:pizz_fd`, delayTimeSignal, fbGain, pizzCutoff, pluckExcite);
      
      const airRes = el.svf({ mode: 'bandpass' }, 280, 3.0, stringLoop);
      const woodRes = el.svf({ mode: 'bandpass' }, 470, 2.5, stringLoop);
      
      return el.add(stringLoop, el.add(el.mul(0.30, airRes), el.mul(0.20, woodRes)));
    } else {
      // Bowed Fiddle (Bright, rhythmic, scraping Arco)
      const bowJitter = el.mul(el.const({ value: 0.0045 }), el.noise()); // High jitter for rustic sound
      const jitteredFreq = el.mul(vibratingFreq, el.add(1.0, bowJitter));
      
      const coreOsc = el.blepsaw(jitteredFreq);
      
      let tremoloMod = el.const({ value: 1.0 });
      if (isTremolo) {
        const tremLfo = el.cycle(8.2);
        tremoloMod = el.add(0.55, el.mul(0.45, tremLfo));
      }

      // Folk bowing has sharp, direct attack transients
      const frictionAttackGate = isStaccato
        ? el.adsr(0.0003, 0.010, 0, 0.006, gateSignal)
        : el.adsr(0.010, 0.05, 0.90, 0.035, gateSignal);

      const bowSpeed = el.mul(el.const({ value: params.bowVelocity * 1.15 }), tremoloMod); // Energetic bowing
      const bowForce = el.const({ value: params.bowPressure * 1.1 });
      
      // High-frequency rosin scraping and grit
      const rosinCutoff = 2200;
      const rosinGrit = 1.8; // High grit

      const frictionNoise = el.mul(
        el.mul(el.mul(bowForce, bowSpeed), el.mul(0.38 * rosinGrit, frictionAttackGate)),
        el.highpass(rosinCutoff, 1.25, el.pinknoise())
      );
      
      const excited = el.add(coreOsc, frictionNoise);
      const stickSlip = el.tanh(el.mul(el.add(1.0, el.mul(bowForce, 2.6)), excited));

      // Resonant body coloring (bright and wooden)
      const airRes = el.svf({ mode: 'bandpass' }, 290, 2.4, stickSlip);
      const woodRes = el.svf({ mode: 'bandpass' }, 480, 2.0, stickSlip);
      const bridgeHill = el.svf({ mode: 'bandpass' }, 3400, 2.0, stickSlip);
      
      const combinedBody = el.add(
        stickSlip,
        el.add(el.mul(0.40, airRes), el.add(el.mul(0.35, woodRes), el.mul(0.32, bridgeHill)))
      );

      const baseCutoff = 1400 + b * 6200;
      const dynamicCutoff = el.min(
        el.const({ value: 19000 }),
        el.max(
          el.const({ value: 400 }),
          el.mul(el.const({ value: baseCutoff }), el.add(0.45, el.mul(bowForce, 0.75)))
        )
      );

      return el.lowpass(dynamicCutoff, 1.1, combinedBody);
    }
  }
}
