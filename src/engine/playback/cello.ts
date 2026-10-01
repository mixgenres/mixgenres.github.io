import { TANGO_INSTRUMENT_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { TANGO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

/**
 * CelloModule
 * 
 * Physical synthesis module modeling an authentic acoustic violoncello:
 * - Heavy wound steel/gut string stick-slip friction with realistic inertia and settling hysteresis
 * - Resonant corpus acoustics: 110Hz Helmholtz air mode, 180Hz main wood corpus mode, and 1.55kHz bridge hill
 * - 4-string open sympathetic resonance bank (C2, G2, D3, A3)
 * - Authentic tango arrastre bow drags, expressive cantabile vibrato, and deep woody pizzicato
 */
export default class CelloModule implements InstrumentModule {
  id = 'cello';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
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

    const noteSeed = seedOf(trackId, voiceIndex, 2002);
    
    // 1. Articulation & Extended Technique Flags
    const isPizz = action === 'pluck' || action === 'pizzicato' || /pizz/i.test(action ?? '');
    const isTremolo = action === 'tremolo' || /tremolo/i.test(action ?? '');
    const isStaccato = action === 'staccato' || action === 'spiccato' || action === 'martele' || action === 'accent' || ctx.articulation > 0.65;
    const isSulPonticello = action === 'sul-ponticello' || /ponticello/i.test(action ?? '');
    const isSulTasto = action === 'sul-tasto' || /tasto|flautando/i.test(action ?? '');
    const isLegato = action === 'legato' || action === 'slur';
    const isArrastre = action === 'arrastre' || /arrastre|drag/i.test(action ?? '');
    const isChicharra = action === 'chicharra' || /chicharra/i.test(action ?? '');
    const isTango = TANGO_PATTERN.test(`${params.genreId ?? ''}`);
    const tangoResponse = TANGO_INSTRUMENT_RESPONSE.cello;
    const isYumba = action === 'yumba' || /yumba/i.test(action ?? '');
    const isMarcato = action === 'marcato' || /marcato|marked/i.test(action ?? '');

    // 2. Special Extended Techniques (Chicharra Scrape)
    if (isChicharra) {
      const scrapeNoise = el.svf({ mode: 'bandpass' }, 3400, 5.0, el.pinknoise());
      const scrapeLfo = el.add(el.const({ value: 0.55 }), el.mul(el.const({ value: 0.45 }), el.blepsaw(el.const({ value: 14 }))));
      const cricketMod = el.mul(scrapeLfo, scrapeNoise);
      const chicharraEnv = el.adsr(0.002, 0.18, 0.2, 0.05, gateSignal);
      const ring = el.mul(0.15, el.cycle(el.mul(safeFreqSignal, 4.0)));
      return el.mul(chicharraEnv, el.add(cricketMod, ring));
    }

    // 3. Attack Intonation Settling & Arrastre Pitch Trajectory
    // Heavy cello strings take 20-40ms to settle into full pitch stability on aggressive strokes
    const settleEnv = el.adsr(0.001, isStaccato ? 0.020 : 0.045, 0, 0.006, gateSignal);
    const intonationJitter = randNorm(noteSeed ^ 0x22) * (isStaccato ? 0.018 : 0.006);
    const intonationOffset = el.mul(el.const({ value: intonationJitter }), settleEnv);

    // Arrastre drag scoop
    const arrastreEnv = el.adsr(0.001, 0.090, 0, 0.01, gateSignal);
    const arrastrePitchMod = isArrastre
      ? el.sub(1.0, el.mul(el.const({ value: isTango ? tangoResponse.arrastreSemitones : tangoResponse.arrastreDefault }), arrastreEnv))
      : el.const({ value: 1.0 });

    const settledFreq = el.mul(safeFreqSignal, el.mul(el.add(1.0, intonationOffset), arrastrePitchMod));

    // 4. Warmer, Deeper Cello Vibrato (5.2Hz, slightly deeper than violin, organic fluctuation jitter)
    const baseVibSpeed = 5.2 + randNorm(noteSeed ^ 0x44) * 0.15;
    const vibJitter = el.mul(el.const({ value: 0.22 }), el.lowpass(10, 0.707, el.pinknoise()));
    const dynamicVibSpeed = el.add(el.const({ value: baseVibSpeed }), vibJitter);
    const vibratoLfo = el.cycle(dynamicVibSpeed);
    
    const wantsVib = !isPizz && !isStaccato && !isArrastre;
    const vibratoOnset = el.adsr(isLegato ? 0.15 : (isTango ? tangoResponse.vibratoOnset : tangoResponse.vibratoOnsetDefault), 0.12, 1.0, 0.08, gateSignal);
    const vibratoDepth = wantsVib
      ? el.mul(el.const({ value: 0.018 * (params.resonance + 0.35) }), vibratoOnset)
      : el.const({ value: 0 });
    const vibratoMod = el.add(1.0, el.mul(vibratoDepth, vibratoLfo));
    const vibratingFreq = el.mul(settledFreq, vibratoMod);

    // 5. Plucked Cello Synthesis (Deep, Woody Pizzicato)
    if (isPizz) {
      const pluckEnv = el.adsr(0.0006, 0.012, 0, 0.003, gateSignal);
      const pluckNoise = el.mul(el.noise(), pluckEnv);
      const pluckExcite = el.lowpass(el.mul(vibratingFreq, 3.2), 0.85, pluckNoise);
      
      const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), vibratingFreq)));
      const targetDecaySeconds = 0.32 + decayTime * (0.65 + b * 0.85);
      const fbGain = fbGainForDecay(vibratingFreq, targetDecaySeconds);
      const pizzCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 800 }), el.mul(vibratingFreq, el.const({ value: 2.8 + b * 3.5 }))));
      
      const stringLoop = createDampedStringLoop(`${pk}:pizz_vc`, delayTimeSignal, fbGain, pizzCutoff, pluckExcite);
      
      // Cello body resonances: Helmholtz (110Hz) and Wood Main (180Hz)
      const airRes = el.svf({ mode: 'bandpass' }, 110, 3.5, stringLoop);
      const woodRes = el.svf({ mode: 'bandpass' }, 180, 2.5, stringLoop);
      const bridgeRes = el.svf({ mode: 'bandpass' }, 1550, 2.0, stringLoop);
      
      return el.add(stringLoop, el.add(el.mul(0.55, airRes), el.add(el.mul(0.40, woodRes), el.mul(0.20, bridgeRes))));
    }

    // 6. Bowed Cello Synthesis (Rich, Guttural Arco)
    const bowJitter = el.mul(el.const({ value: 0.0035 }), el.noise());
    const jitteredFreq = el.mul(vibratingFreq, el.add(1.0, bowJitter));
    
    // Heavy slip-slip sawtooth oscillator
    const coreOsc = el.blepsaw(jitteredFreq);
    
    // Open-string sympathetic resonance bank (C2=65.41Hz, G2=98Hz, D3=146.83Hz, A3=220Hz)
    const c2Res = el.svf({ mode: 'bandpass' }, 65.41, 28.0, coreOsc);
    const g2Res = el.svf({ mode: 'bandpass' }, 98.0, 28.0, coreOsc);
    const d3Res = el.svf({ mode: 'bandpass' }, 146.83, 28.0, coreOsc);
    const a3Res = el.svf({ mode: 'bandpass' }, 220.0, 28.0, coreOsc);
    const sympatheticSum = el.mul(el.const({ value: 0.055 * params.body }), el.add(c2Res, el.add(g2Res, el.add(d3Res, a3Res))));
    
    // Tremolo Bowing (Rapid 7.2Hz re-bowing modulation)
    let tremoloMod = el.const({ value: 1.0 });
    if (isTremolo) {
      const tremLfo = el.cycle(7.2);
      tremoloMod = el.add(0.65, el.mul(0.35, tremLfo));
    }

    // Rosin Friction Noise Modeling & Rosin Grab
    const frictionAttackGate = isStaccato
      ? el.adsr(0.0006, 0.020, 0, 0.010, gateSignal)
      : el.adsr(0.035, 0.12, 0.80, 0.060, gateSignal);

    const bowSpeed = el.mul(el.const({ value: params.bowVelocity }), tremoloMod);
    const bowForce = el.const({ value: params.bowPressure });
    
    const rosinCutoff = isSulPonticello ? 2400 : (isSulTasto ? 550 : 750);
    const rosinGrit = isSulPonticello ? 1.55 : (isSulTasto ? 0.40 : 1.15);

    const frictionNoise = el.mul(
      el.mul(el.mul(bowForce, bowSpeed), el.mul(0.28 * rosinGrit, frictionAttackGate)),
      el.highpass(rosinCutoff, 1.2, el.pinknoise())
    );
    
    // Attack bow-catch heavy "crunch" transient
    const bowCatchEnv = el.adsr(0.0004, 0.016, 0, 0.005, gateSignal);
    const bowCatch = el.mul(
      el.mul(el.const({ value: tangoResponse.bowCatchGain * (isStaccato ? 1.8 : 1.0) * (isTango ? tangoResponse.bowCatchDefaultMultiplier : 1.0) }), bowCatchEnv),
      el.highpass(1200, 1.4, el.noise())
    );

    // Tango cello supplies the lower-register drag/weight of the ensemble.
    // Yumba uses a short low-register bow-pressure burst rather than a generic
    // sustained pad, so it locks to the piano/bass rhythmic punctuation.
    const tangoWeight = isTango
      ? el.mul(tangoResponse.tangoWeightGain, el.svf({ mode: 'bandpass' }, 110, 2.8, coreOsc))
      : el.const({ value: 0 });
    const yumbaPulse = (isTango && (isYumba || isMarcato))
      ? el.mul(tangoResponse.yumbaPulseGain, el.mul(el.cycle(82), el.adsr(0.001, 0.055, 0, 0.012, gateSignal)))
      : el.const({ value: 0 });

    const excited = el.add(coreOsc, el.add(tangoWeight, el.add(frictionNoise, el.add(sympatheticSum, el.add(bowCatch, yumbaPulse)))));
    
    // Non-linear slip-stick saturation
    const stickSlip = el.tanh(el.mul(el.add(1.0, el.mul(bowForce, 2.5)), excited));

    // Cello resonant body coloring: Main air cavity (Helmholtz 112Hz), Wood modes (185Hz), and Bridge Hill (1550Hz)
    const airRes = el.svf({ mode: 'bandpass' }, 112, 2.8, stickSlip);
    const woodRes = el.svf({ mode: 'bandpass' }, 185, 2.2, stickSlip);
    const bridgeHill = el.svf({ mode: 'bandpass' }, 1550, 1.5, stickSlip);
    
    const combinedBody = el.add(
      stickSlip,
      el.add(el.mul(0.60, airRes), el.add(el.mul(0.48, woodRes), el.mul(0.28, bridgeHill)))
    );

    // Dynamic Bow Cutoff Frequency based on pressure & velocity
    const baseCutoff = isSulTasto ? (450 + b * 1800) : (650 + b * 3200);
    const dynamicCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 180 }),
        el.mul(el.const({ value: baseCutoff }), el.add(0.4, el.mul(bowForce, 0.8)))
      )
    );

    return el.lowpass(dynamicCutoff, 1.2, combinedBody);
  }
}
