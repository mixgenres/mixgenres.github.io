import { TANGO_INSTRUMENT_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { TANGO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

/**
 * ViolinModule
 * 
 * Physical synthesis module modeling an authentic acoustic violin:
 * - Helmholtz stick-slip horsehair-on-rosin bow friction interaction
 * - Corpus resonance network: A0 Helmholtz air cavity (280Hz), main wood modes (460Hz), and 3.1kHz bridge hill
 * - 4-string open sympathetic resonance bank (G3, D4, A4, E5)
 * - Authentic extended techniques: spiccato, sul-ponticello, sul-tasto, tango chicharra, tambor, and látigo whip
 * - Dedicated plucked pizzicato waveguide with realistic fingerpad damping
 */
export default class ViolinModule implements InstrumentModule {
  id = 'violin';

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

    const noteSeed = seedOf(trackId, voiceIndex, 1001);
    
    // 1. Articulation & Extended Technique Flags
    const isPizz = action === 'pluck' || action === 'pizzicato' || /pizz/i.test(action ?? '');
    const isTremolo = action === 'tremolo' || /tremolo/i.test(action ?? '');
    const isStaccato = action === 'staccato' || action === 'spiccato' || action === 'martele' || action === 'accent' || ctx.articulation > 0.65;
    const isSulPonticello = action === 'sul-ponticello' || /ponticello/i.test(action ?? '');
    const isSulTasto = action === 'sul-tasto' || /tasto|flautando/i.test(action ?? '');
    const isLegato = action === 'legato' || action === 'slur';
    const isChicharra = action === 'chicharra' || /chicharra/i.test(action ?? '');
    const isTambor = action === 'tambor' || /tambor/i.test(action ?? '');
    const isLatigo = action === 'latigo' || /latigo|whip/i.test(action ?? '');
    const isTango = TANGO_PATTERN.test(`${params.genreId ?? ''}`);
    const tangoResponse = TANGO_INSTRUMENT_RESPONSE.violin;
    const isArrastre = action === 'arrastre' || /arrastre|drag/i.test(action ?? '');
    const isTangoObligato = isTango && (ctx.voice.note ?? 60) <= 62 && !isPizz;

    // 2. Special Extended Techniques (Chicharra, Tambor, Látigo)
    if (isChicharra) {
      // Tango behind-the-bridge metallic cricket scrape
      const scrapeNoise = el.svf({ mode: 'bandpass' }, 4200, 6.0, el.pinknoise());
      const scrapeLfo = el.add(el.const({ value: 0.55 }), el.mul(el.const({ value: 0.45 }), el.blepsaw(el.const({ value: 16 }))));
      const cricketMod = el.mul(scrapeLfo, scrapeNoise);
      const chicharraEnv = el.adsr(0.002, 0.15, 0.2, 0.04, gateSignal);
      const ring = el.mul(0.15, el.cycle(el.mul(safeFreqSignal, 4.5)));
      return el.mul(chicharraEnv, el.add(cricketMod, ring));
    }

    if (isTambor) {
      // Percussive string snap / knuckle body tap
      const bodyThump = el.mul(el.cycle(145), el.adsr(0.0003, 0.025, 0, 0.008, gateSignal));
      const stringSnap = el.mul(el.highpass(1600, 1.2, el.noise()), el.adsr(0.0002, 0.009, 0, 0.004, gateSignal));
      return el.add(el.mul(0.70, bodyThump), el.mul(0.40, stringSnap));
    }

    // 3. Attack Intonation Settling & Látigo Whip Pitch Trajectory
    const settleEnv = el.adsr(0.001, isStaccato ? 0.015 : 0.035, 0, 0.005, gateSignal);
    const intonationJitter = randNorm(noteSeed ^ 0x12) * (isStaccato ? 0.022 : 0.008);
    const intonationOffset = el.mul(el.const({ value: intonationJitter }), settleEnv);

    // Tango arrastre: a short portamento-like scoop into the target pitch.
    // It is deliberately shallower than the bandoneón/bass scoop because the
    // violin's expressive slide is primarily a left-hand/bow inflection.
    const arrastreEnv = el.adsr(0.001, 0.070, 0, 0.008, gateSignal);
    const arrastrePitch = isArrastre
      ? el.sub(1.0, el.mul(el.const({ value: 0.095 }), arrastreEnv))
      : el.const({ value: 1.0 });

    // Látigo whip: Rapid upward glissando spike
    const latigoEnv = el.adsr(0.01, 0.12, 0, 0.01, gateSignal);
    const latigoGliss = isLatigo ? el.mul(el.const({ value: 1.0 }), latigoEnv) : el.const({ value: 0 });

    const settledFreq = el.mul(safeFreqSignal, el.mul(el.add(el.add(1.0, intonationOffset), latigoGliss), arrastrePitch));

    // 4. Natural Organic Vibrato (Onset delay, speed/amplitude fluctuation jitter)
    const baseVibSpeed = 5.8 + randNorm(noteSeed ^ 0x33) * 0.18;
    const vibJitter = el.mul(el.const({ value: 0.28 }), el.lowpass(12, 0.707, el.pinknoise()));
    const dynamicVibSpeed = el.add(el.const({ value: baseVibSpeed }), vibJitter);
    const vibratoLfo = el.cycle(dynamicVibSpeed);
    
    // Vibrato swells naturally into sustained notes
    const wantsVib = !isPizz && !isStaccato && !isLatigo && !isArrastre;
    const vibratoOnset = el.adsr(isLegato ? 0.12 : (isTango ? tangoResponse.vibratoOnset : tangoResponse.vibratoOnsetDefault), 0.10, 1.0, 0.08, gateSignal);
    const vibratoDepth = wantsVib
      ? el.mul(el.const({ value: 0.016 * (params.resonance + 0.3) }), vibratoOnset)
      : el.const({ value: 0 });
    const vibratoMod = el.add(1.0, el.mul(vibratoDepth, vibratoLfo));
    const vibratingFreq = el.mul(settledFreq, vibratoMod);

    // 5. Plucked Pizzicato Synthesis
    if (isPizz) {
      const pluckEnv = el.adsr(0.0004, 0.006, 0, 0.002, gateSignal);
      const pluckNoise = el.mul(el.noise(), pluckEnv);
      const pluckExcite = el.lowpass(el.mul(vibratingFreq, 4.0), 0.9, pluckNoise);
      
      const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), vibratingFreq)));
      const targetDecaySeconds = 0.22 + decayTime * (0.45 + b * 0.65);
      const fbGain = fbGainForDecay(vibratingFreq, targetDecaySeconds);
      const pizzCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1400 }), el.mul(vibratingFreq, el.const({ value: 3.5 + b * 4.5 }))));
      
      const stringLoop = createDampedStringLoop(`${pk}:pizz_vn`, delayTimeSignal, fbGain, pizzCutoff, pluckExcite);
      
      // Violin wooden body modes: Helmholtz (280Hz) and Wood Main (460Hz)
      const airRes = el.svf({ mode: 'bandpass' }, 280, 3.2, stringLoop);
      const woodRes = el.svf({ mode: 'bandpass' }, 460, 2.8, stringLoop);
      const bridgeRes = el.svf({ mode: 'bandpass' }, 3100, 2.0, stringLoop);
      
      return el.add(stringLoop, el.add(el.mul(0.35, airRes), el.add(el.mul(0.28, woodRes), el.mul(0.18, bridgeRes))));
    }

    // 6. Bowed Arco Synthesis (Continuous Stick-Slip Helmholtz Motion)
    const bowJitter = el.mul(el.const({ value: 0.0035 }), el.noise());
    const jitteredFreq = el.mul(vibratingFreq, el.add(1.0, bowJitter));
    
    // Core slip-slip sawtooth oscillator
    const coreOsc = el.blepsaw(jitteredFreq);
    
    // Open-string sympathetic resonance bank (G3=196Hz, D4=293.66Hz, A4=440Hz, E5=659.25Hz)
    const g3Res = el.svf({ mode: 'bandpass' }, 196.0, 32.0, coreOsc);
    const d4Res = el.svf({ mode: 'bandpass' }, 293.66, 32.0, coreOsc);
    const a4Res = el.svf({ mode: 'bandpass' }, 440.0, 32.0, coreOsc);
    const e5Res = el.svf({ mode: 'bandpass' }, 659.25, 32.0, coreOsc);
    const sympatheticSum = el.mul(el.const({ value: 0.048 * params.body }), el.add(g3Res, el.add(d4Res, el.add(a4Res, e5Res))));
    
    // Tremolo Bowing (Rapid 7.8Hz alternating bow strokes)
    let tremoloMod = el.const({ value: 1.0 });
    if (isTremolo) {
      const tremLfo = el.cycle(7.8);
      tremoloMod = el.add(0.60, el.mul(0.40, tremLfo));
    }

    // Rosin Friction Noise Modeling & Rosin Grab
    const frictionAttackGate = isStaccato
      ? el.adsr(0.0004, 0.015, 0, 0.008, gateSignal)
      : el.adsr(0.022, 0.08, 0.85, 0.045, gateSignal);

    const bowSpeed = el.mul(el.const({ value: params.bowVelocity }), tremoloMod);
    const bowForce = el.const({ value: params.bowPressure });

    // Tango obligato often lives lower on the instrument, especially in the
    // traditional style. Give the low register a warmer fourth-string-like
    // response while retaining enough bridge bite to cut through bandoneón.
    const obligatoWarmth = isTangoObligato
      ? el.mul(tangoResponse.obligatoWarmthGain, el.svf({ mode: 'bandpass' }, 275, 2.2, coreOsc))
      : el.const({ value: 0 });

    // Sul Ponticello shifts spectrum to brilliant glassy rasp; Sul Tasto warms and softens
    const rosinCutoff = isSulPonticello ? 3800 : (isSulTasto ? 900 : 1500);
    const rosinGrit = isSulPonticello ? 1.65 : (isSulTasto ? 0.45 : 1.0);

    const frictionNoise = el.mul(
      el.mul(el.mul(bowForce, bowSpeed), el.mul(0.32 * rosinGrit, frictionAttackGate)),
      el.highpass(rosinCutoff, 1.1, el.pinknoise())
    );
    
    // Attack bow-catch "crunch" transient
    const bowCatchEnv = el.adsr(0.0002, 0.012, 0, 0.004, gateSignal);
    const bowCatch = el.mul(
      el.mul(el.const({ value: tangoResponse.bowCatchGain * (isStaccato ? 1.8 : 1.0) * (isTango ? tangoResponse.bowCatchDefaultMultiplier : 1.0) }), bowCatchEnv),
      el.highpass(1800, 1.3, el.noise())
    );

    // A small tango "bite" transient on marcato/accented attacks, distinct from
    // the dedicated chicharra/tambor effects.
    const tangoBite = isTango && isStaccato
      ? el.mul(tangoResponse.tangoBiteGain, el.mul(el.svf({ mode: 'bandpass' }, 2600, 2.8, el.noise()), el.adsr(0.0002, 0.010, 0, 0.003, gateSignal)))
      : el.const({ value: 0 });

    // Combine core sawtooth with slip friction noise, sympathetic resonance, and bow-catch crunch
    const excited = el.add(coreOsc, el.add(obligatoWarmth, el.add(frictionNoise, el.add(sympatheticSum, el.add(bowCatch, tangoBite)))));
    
    // Non-linear slip-stick velocity saturation
    const stickSlip = el.tanh(el.mul(el.add(1.0, el.mul(bowForce, 2.2)), excited));

    // Violin resonant body coloring: Main air cavity (Helmholtz 280Hz), Wood modes (460Hz), and Bridge Hill (3100Hz)
    const airRes = el.svf({ mode: 'bandpass' }, 280, 2.5, stickSlip);
    const woodRes = el.svf({ mode: 'bandpass' }, 460, 2.2, stickSlip);
    const bridgeHill = el.svf({ mode: 'bandpass' }, 3100, 1.8, stickSlip);
    
    const combinedBody = el.add(
      stickSlip,
      el.add(el.mul(0.48, airRes), el.add(el.mul(0.38, woodRes), el.mul(0.24, bridgeHill)))
    );

    // Dynamic Bow Cutoff Frequency based on pressure & velocity
    const baseCutoff = isSulTasto ? (800 + b * 2500) : (1100 + b * 5400);
    const dynamicCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 380 }),
        el.mul(el.const({ value: baseCutoff }), el.add(0.45, el.mul(bowForce, 0.75)))
      )
    );

    return el.lowpass(dynamicCutoff, 1.15, combinedBody);
  }
}
