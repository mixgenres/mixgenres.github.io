import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class ViolaModule implements InstrumentModule {
  id = 'viola';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      trackId,
      voiceIndex,
      params,
      pk,
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const noteSeed = seedOf(trackId, voiceIndex, 3003);
    
    // Articulation definitions
    const isPizz = action === 'pluck' || action === 'pizzicato' || action === 'tambor' || /pizz/i.test(action ?? '');
    const isTremolo = action === 'tremolo' || /tremolo/i.test(action ?? '');
    const isStaccato = action === 'staccato' || action === 'spiccato' || action === 'accent' || ctx.articulation > 0.65;
    const isSulPonticello = action === 'sul-ponticello' || /ponticello/i.test(action ?? '');
    const isLegato = action === 'legato' || action === 'slur';
    const isChicharra = action === 'chicharra' || /chicharra/i.test(action ?? '');

    if (isChicharra) {
      const scrapeNoise = el.svf({ mode: 'bandpass' }, 3800, 5.5, el.pinknoise());
      const scrapeLfo = el.add(el.const({ value: 0.6 }), el.mul(el.const({ value: 0.4 }), el.blepsaw(el.const({ value: 15 }))));
      const cricketMod = el.mul(scrapeLfo, scrapeNoise);
      const chicharraEnv = el.adsr(0.002, 0.16, 0.2, 0.045, gateSignal);
      const ring = el.mul(0.15, el.cycle(el.mul(safeFreqSignal, 4.2)));
      return el.mul(chicharraEnv, el.add(cricketMod, ring));
    }

    // 1. Attack Intonation Settling (Attack Chirp)
    // Viola strings have unique inertia between violin and cello
    const settleEnv = el.adsr(0.001, isStaccato ? 0.018 : 0.040, 0, 0.005, gateSignal);
    const intonationJitter = randNorm(noteSeed ^ 0x15) * (isStaccato ? 0.020 : 0.007);
    const intonationOffset = el.mul(el.const({ value: intonationJitter }), settleEnv);
    const settledFreq = el.mul(safeFreqSignal, el.add(1.0, intonationOffset));

    // 2. Warm Viola Vibrato (5.5Hz, intermediate speed, with organic fluctuation jitter)
    const baseVibSpeed = 5.5 + randNorm(noteSeed ^ 0x55) * 0.18;
    const vibJitter = el.mul(el.const({ value: 0.25 }), el.lowpass(11, 0.707, el.pinknoise()));
    const dynamicVibSpeed = el.add(el.const({ value: baseVibSpeed }), vibJitter);
    const vibratoLfo = el.cycle(dynamicVibSpeed);
    
    const vibratoOnset = el.adsr(isLegato ? 0.13 : 0.30, 0.11, 1.0, 0.1, gateSignal);
    const vibratoDepth = el.mul(el.const({ value: 0.010 * (params.resonance + 0.22) }), vibratoOnset);
    const vibratoMod = el.add(1.0, el.mul(vibratoDepth, vibratoLfo));
    const vibratingFreq = el.mul(settledFreq, vibratoMod);

    // 3. Excitation Generation
    if (isPizz) {
      // Plucked Viola
      const pluckEnv = el.adsr(0.0005, 0.009, 0, 0.0025, gateSignal);
      const pluckNoise = el.mul(el.noise(), pluckEnv);
      const pluckExcite = el.lowpass(el.mul(vibratingFreq, 3.6), 0.88, pluckNoise);
      
      const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), vibratingFreq)));
      const targetDecaySeconds = 0.25 + decayTime * (0.55 + b * 0.75);
      const fbGain = fbGainForDecay(vibratingFreq, targetDecaySeconds);
      const pizzCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1000 }), el.mul(vibratingFreq, el.const({ value: 3.0 + b * 4.0 }))));
      
      const stringLoop = createDampedStringLoop(`${pk}:pizz_va`, delayTimeSignal, fbGain, pizzCutoff, pluckExcite);
      
      // Viola body resonances: Helmholtz (180Hz) and Wood Main (245Hz)
      const airRes = el.svf({ mode: 'bandpass' }, 180, 3.2, stringLoop);
      const woodRes = el.svf({ mode: 'bandpass' }, 245, 2.5, stringLoop);
      
      return el.add(stringLoop, el.add(el.mul(0.42, airRes), el.mul(0.32, woodRes)));
    } else {
      // Bowed Viola (Mellow Arco)
      const bowJitter = el.mul(el.const({ value: 0.0030 }), el.noise());
      const jitteredFreq = el.mul(vibratingFreq, el.add(1.0, bowJitter));
      
      const coreOsc = el.blepsaw(jitteredFreq);
      
      // Open-string sympathetic resonance bank (C3=130.81Hz, G3=196Hz, D4=293.66Hz, A4=440Hz)
      const c3Res = el.svf({ mode: 'bandpass' }, 130.81, 28.0, coreOsc);
      const g3Res = el.svf({ mode: 'bandpass' }, 196.0, 28.0, coreOsc);
      const d4Res = el.svf({ mode: 'bandpass' }, 293.66, 28.0, coreOsc);
      const a4Res = el.svf({ mode: 'bandpass' }, 440.0, 28.0, coreOsc);
      const sympatheticSum = el.mul(el.const({ value: 0.050 * params.body }), el.add(c3Res, el.add(g3Res, el.add(d4Res, a4Res))));
      
      let tremoloMod = el.const({ value: 1.0 });
      if (isTremolo) {
        const tremLfo = el.cycle(7.5);
        tremoloMod = el.add(0.6, el.mul(0.4, tremLfo));
      }

      const frictionAttackGate = isStaccato
        ? el.adsr(0.0005, 0.018, 0, 0.009, gateSignal)
        : el.adsr(0.028, 0.10, 0.82, 0.052, gateSignal);

      const bowSpeed = el.mul(el.const({ value: params.bowVelocity }), tremoloMod);
      const bowForce = el.const({ value: params.bowPressure });
      
      const rosinCutoff = isSulPonticello ? 3000 : 1100;
      const rosinGrit = isSulPonticello ? 1.50 : 1.08;

      const frictionNoise = el.mul(
        el.mul(el.mul(bowForce, bowSpeed), el.mul(0.30 * rosinGrit, frictionAttackGate)),
        el.highpass(rosinCutoff, 1.15, el.pinknoise())
      );
      
      // Attack bow-catch transient click/crunch
      const bowCatchEnv = el.adsr(0.0003, 0.014, 0, 0.004, gateSignal);
      const bowCatch = el.mul(
        el.mul(el.const({ value: 0.18 * (isStaccato ? 1.75 : 1.0) }), bowCatchEnv),
        el.highpass(1500, 1.3, el.noise())
      );

      const excited = el.add(coreOsc, el.add(frictionNoise, el.add(sympatheticSum, bowCatch)));
      const stickSlip = el.tanh(el.mul(el.add(1.0, el.mul(bowForce, 2.35)), excited));

      // Resonant body coloring
      const airRes = el.svf({ mode: 'bandpass' }, 182, 2.6, stickSlip);
      const woodRes = el.svf({ mode: 'bandpass' }, 248, 2.2, stickSlip);
      const bridgeHill = el.svf({ mode: 'bandpass' }, 2250, 1.6, stickSlip);
      
      const combinedBody = el.add(
        stickSlip,
        el.add(el.mul(0.52, airRes), el.add(el.mul(0.42, woodRes), el.mul(0.26, bridgeHill)))
      );

      const baseCutoff = 850 + b * 4200;
      const dynamicCutoff = el.min(
        el.const({ value: 19000 }),
        el.max(
          el.const({ value: 250 }),
          el.mul(el.const({ value: baseCutoff }), el.add(0.42, el.mul(bowForce, 0.78)))
        )
      );

      return el.lowpass(dynamicCutoff, 1.18, combinedBody);
    }
  }
}
