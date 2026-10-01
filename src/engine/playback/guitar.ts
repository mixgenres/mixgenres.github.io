import { GUITAR_GENRE_RESPONSE, TANGO_ACOUSTIC_GUITAR_RESPONSE, URBAN_ACOUSTIC_GUITAR_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { instrumentHasKey, ENGINE_INSTRUMENT_KEYS } from '../../engine/lookup/instrumentKeys.ts';
import { TARAB_SYMPATHETIC_RATIOS } from '../../data/musicTheory/tarabSympatheticRatios';
import { GUITAR_EXACT_GENRE_IDS } from '../../data/sound/dsp/genrePlaybackProfiles';
import { KIZOMBA_PATTERN, REGGAETON_PATTERN, TANGO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

export default class GuitarModule implements InstrumentModule {
  id = 'guitar';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      voice,
      params,
      dspProfile,
      pk,
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const instId = (params.instrumentId ?? '').toLowerCase();
    const isTango = TANGO_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = REGGAETON_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isTangoAcoustic = isTango && instrumentHasKey(instId, ENGINE_INSTRUMENT_KEYS.acousticGuitar);
    const isUrbanAcoustic = (isKizomba || isReggaeton) && instrumentHasKey(instId, ENGINE_INSTRUMENT_KEYS.acousticGuitar);
    const isMarcato = action === 'marcato' || /marcato/i.test(action ?? '');
    const isArrastre = action === 'arrastre' || /arrastre|drag/i.test(action ?? '');
    const gd = ctx.genreDialect;
    const genre = gd.id;
    const isBachata = genre === GUITAR_EXACT_GENRE_IDS[0];
    const isBrazilian = genre === GUITAR_EXACT_GENRE_IDS[1];
    const isReggae = genre === GUITAR_EXACT_GENRE_IDS[2];
    const isSka = genre === GUITAR_EXACT_GENRE_IDS[3];
    const isFunk = genre === GUITAR_EXACT_GENRE_IDS[4];
    const isCountry = genre === GUITAR_EXACT_GENRE_IDS[5];
    const genreGuitarResponse = GUITAR_GENRE_RESPONSE[genre];

    if (action === 'golpe' || action === 'tap' || action === 'golpe-caja') {
      const bodyPunch = el.mul(el.cycle(110), el.adsr(0.0005, 0.02, 0, 0.01, gateSignal));
      const woodClick = el.mul(el.highpass(1400, 1.2, el.noise()), el.adsr(0.0002, 0.008, 0, 0.004, gateSignal));
      return el.add(el.mul(0.75, bodyPunch), el.mul(0.25, woodClick));
    }

    const B = 0.00015;
    const isRasgueado = !isTangoAcoustic && !isUrbanAcoustic && !isBachata && !isBrazilian && !isReggae && !isSka && !isFunk && (action === 'abanico' || action === 'rasgueado' || ctx.articulation > 0.6);
    const excitation = voice.excitationType ?? params.excitationType ?? 'fingerpad';
    const construction = params.bodyConstruction ?? 'wood-box';
    const numCourses = params.courses ?? 1;
    const hasSympathetic = Boolean(params.sympatheticStrings);

    const broadbandPluck = el.lowpass(el.mul(safeFreqSignal, 4.0), 0.9, el.pinknoise());

    let impulse: AudioSignal;
    if (isBachata || isBrazilian || isReggae || isSka || isFunk || isCountry) {
      const env = el.adsr(0.00025, genreGuitarResponse.decay, 0, 0.003, gateSignal);
      const pluck = el.add(el.mul(genreGuitarResponse.pluckGain, broadbandPluck), el.mul(0.16, el.svf({ mode: 'bandpass' }, genreGuitarResponse.noiseFrequency, 1.4, el.noise())));
      const body = el.mul(genreGuitarResponse.bodyGain * gd.body, el.cycle(genreGuitarResponse.bodyFrequency));
      impulse = el.add(el.mul(pluck, env), el.mul(body, el.adsr(0.0003, 0.035, 0, 0.010, gateSignal)));
    } else 
    if (isUrbanAcoustic) {
      // Kizomba guitar: short, muted syncopated chord/finger attack with very
      // little flamenco rasgueado noise. Reggaetón uses an even drier pluck.
      const urbanGuitar = isKizomba ? URBAN_ACOUSTIC_GUITAR_RESPONSE.kizomba : URBAN_ACOUSTIC_GUITAR_RESPONSE.default;
      const env = el.adsr(0.00025, urbanGuitar.decayBase, 0, 0.003, gateSignal);
      const pick = el.add(el.mul(0.72, broadbandPluck), el.mul(urbanGuitar.pickNoise, el.svf({ mode: 'bandpass' }, urbanGuitar.noiseCutoff, 1.5, el.noise())));
      const body = el.mul(urbanGuitar.bodyGain, el.cycle(urbanGuitar.bodyFrequency));
      impulse = el.add(el.mul(pick, env), el.mul(body, el.adsr(0.0003, 0.035, 0, 0.009, gateSignal)));
    } else if (isTangoAcoustic && (isMarcato || isArrastre)) {
      // Tango guitar is a dry, percussive harmonic accompanist rather than a
      // flamenco rasgueado engine: short chord attacks, restrained nail noise,
      // and a small wooden body pulse.
      const chordEnv = el.adsr(0.00025, isArrastre ? 0.010 : 0.006, 0, 0.003, gateSignal);
      const chordAttack = el.add(
        el.mul(0.76, broadbandPluck),
        el.mul(0.24, el.svf({ mode: 'bandpass' }, 1600, 1.8, el.noise()))
      );
      const bodyPulse = el.mul(el.cycle(108), el.adsr(0.0003, 0.028, 0, 0.009, gateSignal));
      impulse = el.add(el.mul(chordAttack, chordEnv), el.mul(0.13, bodyPulse));
    } else if (isRasgueado) {
      const burstCount = 5;
      const bursts = Array.from({ length: burstCount }, (_, i) =>
        el.adsr(0.0003 + i * 0.003, 0.0055, 0, 0.0025, gateSignal)
      );
      const rasgNoise = el.add(el.mul(0.6, broadbandPluck), el.mul(0.4, el.noise()));
      impulse = el.mul(rasgNoise, bursts.reduce((acc, burst) => el.add(acc, burst), el.const({ value: 0 })));
    } else if (excitation === 'hard-pick') {
      const burstEnv = el.adsr(0.0002, 0.0035, 0, 0.002, gateSignal);
      const burstNoise = el.add(el.mul(0.65, broadbandPluck), el.mul(0.35, el.svf({ mode: 'bandpass' }, 2200, 1.2, el.noise())));
      impulse = el.mul(burstNoise, burstEnv);
    } else if (excitation === 'plectrum') {
      const burstEnv = el.adsr(0.0003, 0.0045, 0, 0.0025, gateSignal);
      const burstNoise = el.add(el.mul(0.60, broadbandPluck), el.mul(0.40, el.svf({ mode: 'bandpass' }, 1800, 1.3, el.noise())));
      impulse = el.mul(burstNoise, burstEnv);
    } else if (excitation === 'nail') {
      const burstEnv = el.adsr(0.0004, 0.0055, 0, 0.003, gateSignal);
      const burstNoise = el.add(el.mul(0.70, broadbandPluck), el.mul(0.30, el.svf({ mode: 'bandpass' }, 1600, 1.1, el.noise())));
      impulse = el.mul(burstNoise, burstEnv);
    } else if (excitation === 'hammer') {
      const burstEnv = el.adsr(0.0006, 0.007, 0, 0.004, gateSignal);
      const burstNoise = el.add(el.mul(0.75, broadbandPluck), el.mul(0.25, el.svf({ mode: 'bandpass' }, 850, 1.5, el.noise())));
      impulse = el.mul(burstNoise, burstEnv);
    } else {
      const burstEnv = el.adsr(0.0008, 0.009, 0, 0.005, gateSignal);
      const burstNoise = el.add(el.mul(0.80, broadbandPluck), el.mul(0.20, el.lowpass(1400, 0.8, el.noise())));
      impulse = el.mul(burstNoise, burstEnv);
    }

    const plectrumChoke = el.mul(-0.25, el.mul(el.svf({ mode: 'bandpass' }, 1200, 1.4, el.noise()), el.adsr(0.0001, 0.002, 0, 0.001, gateSignal)));
    impulse = el.add(impulse, plectrumChoke);

    let stringSignal: AudioSignal;
    const baseDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
    const cutoffMult = construction === 'board'
      ? (2.8 + b * 4.5)
      : construction === 'skin-faced'
      ? (3.8 + b * 6.5)
      : (3.2 + b * 6.0);
    const stringCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: cutoffMult }))));

    const targetDecaySeconds = genreGuitarResponse
      ? genreGuitarResponse.targetDecayBase + decayTime * genreGuitarResponse.targetDecayTime
      : isUrbanAcoustic
      ? (isKizomba ? URBAN_ACOUSTIC_GUITAR_RESPONSE.kizombaDecayBase + decayTime * URBAN_ACOUSTIC_GUITAR_RESPONSE.kizombaDecayTime : URBAN_ACOUSTIC_GUITAR_RESPONSE.reggaetonDecayBase + decayTime * URBAN_ACOUSTIC_GUITAR_RESPONSE.reggaetonDecayTime)
      : isTangoAcoustic
      ? TANGO_ACOUSTIC_GUITAR_RESPONSE.targetDecayBase + decayTime * (TANGO_ACOUSTIC_GUITAR_RESPONSE.targetDecayTime + b * TANGO_ACOUSTIC_GUITAR_RESPONSE.targetDecayBrightness)
      : 0.35 + decayTime * (0.6 + b * 1.5);
    const d1 = fbGainForDecay(safeFreqSignal, targetDecaySeconds);

    if (numCourses > 1) {
      const loop1 = createDampedStringLoop(`${pk}:c1`, baseDelaySignal, d1, stringCutoff, impulse);

      const freqCourse2 = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 1.00277 })));
      const delayCourse2 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), freqCourse2)));
      const d2 = fbGainForDecay(freqCourse2, targetDecaySeconds * 0.94);
      const loop2 = createDampedStringLoop(`${pk}:c2`, delayCourse2, d2, el.mul(stringCutoff, el.const({ value: 0.96 })), impulse);

      if (numCourses >= 3) {
        const freqCourse3 = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 0.99757 })));
        const delayCourse3 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), freqCourse3)));
        const d3 = fbGainForDecay(freqCourse3, targetDecaySeconds * 0.88);
        const loop3 = createDampedStringLoop(`${pk}:c3`, delayCourse3, d3, el.mul(stringCutoff, el.const({ value: 0.93 })), impulse);
        stringSignal = el.mul(0.48, el.add(loop1, el.add(loop2, loop3)));
      } else {
        stringSignal = el.mul(0.62, el.add(loop1, loop2));
      }
    } else {
      const inharmonicFreq = el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: Math.sqrt(1 + B * 4) })));
      const inharmonicDelay = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), inharmonicFreq)));
      const loop1 = createDampedStringLoop(`${pk}:s1`, baseDelaySignal, d1, stringCutoff, impulse);
      const d2 = fbGainForDecay(inharmonicFreq, targetDecaySeconds * 0.85);
      const loop2 = createDampedStringLoop(`${pk}:s2`, inharmonicDelay, d2, el.mul(stringCutoff, el.const({ value: 0.93 })), impulse);
      stringSignal = el.add(loop1, el.mul(0.25, loop2));
    }

    const hasJawari = instrumentHasKey(instId, ENGINE_INSTRUMENT_KEYS.jawari);
    if (hasJawari) {
      const jawariEnv = el.adsr(0.001, 0.18 + decayTime * 0.30, 0.15, 0.08, gateSignal);
      const buzzAmount = el.add(el.const({ value: 1.0 }), el.mul(el.const({ value: 8.5 }), jawariEnv));
      const folded = el.sin(el.mul(stringSignal, buzzAmount));
      stringSignal = el.add(el.mul(0.5, stringSignal), el.mul(0.5, folded));
    }

    let bodyOut: AudioSignal;
    if (construction === 'gourd') {
      const highPassed = el.highpass(140, 0.9, stringSignal);
      const m1 = el.svf({ mode: 'bandpass' }, 280, 3.8, highPassed);
      const m2 = el.svf({ mode: 'bandpass' }, 640, 3.2, highPassed);
      const m3 = el.svf({ mode: 'bandpass' }, 1250, 2.8, highPassed);
      bodyOut = el.add(highPassed, el.add(el.mul(0.30, m1), el.add(el.mul(0.28, m2), el.mul(0.18, m3))));
    } else if (construction === 'skin-faced') {
      const m1 = el.svf({ mode: 'bandpass' }, 420, 4.8, stringSignal);
      const m2 = el.svf({ mode: 'bandpass' }, 890, 3.8, stringSignal);
      const m3 = el.svf({ mode: 'bandpass' }, 1650, 3.0, stringSignal);
      bodyOut = el.add(stringSignal, el.add(el.mul(0.35, m1), el.add(el.mul(0.25, m2), el.mul(0.20, m3))));
    } else if (construction === 'board') {
      const m1 = el.svf({ mode: 'bandpass' }, 135, 2.2, stringSignal);
      const m2 = el.svf({ mode: 'bandpass' }, 270, 2.4, stringSignal);
      const m3 = el.svf({ mode: 'bandpass' }, 520, 1.8, stringSignal);
      const smoothedString = el.lowpass(Math.min(19000, 5500), 0.8, stringSignal);
      bodyOut = el.add(smoothedString, el.add(el.mul(0.40, m1), el.add(el.mul(0.28, m2), el.mul(0.16, m3))));
    } else if (construction === 'solid-electric') {
      const m1 = el.svf({ mode: 'bandpass' }, 450, 1.8, stringSignal);
      const m2 = el.svf({ mode: 'bandpass' }, 2400, 1.5, stringSignal);
      bodyOut = el.add(stringSignal, el.add(el.mul(0.15, m1), el.mul(0.20, m2)));
    } else {
      const airRes = el.svf({ mode: 'bandpass' }, 100, 3.0, stringSignal);
      const woodRes = el.svf({ mode: 'bandpass' }, 220, 2.5, stringSignal);
      const topRes = el.svf({ mode: 'bandpass' }, 380, 2.0, stringSignal);
      bodyOut = el.add(stringSignal, el.add(el.mul(0.35, airRes), el.add(el.mul(0.25, woodRes), el.mul(0.15, topRes))));
    }

    const physical = dspProfile?.physicalDetails;
    if (physical) {
      const sys = physical.system;
      const r = physical.response;
      const collisionEnv = el.adsr(0.0002, 0.006, 0, 0.002, gateSignal);
      if (sys === 'long-zither') {
        const ji = el.svf({ mode: 'bandpass' }, el.add(980, el.mul(safeFreqSignal, 0.55)), 5.2, stringSignal);
        const board = el.svf({ mode: 'bandpass' }, 165, 2.8, stringSignal);
        const tsume = el.mul(0.08 + r.contactHardness * 0.10, el.mul(el.highpass(3200, 1.1, el.noise()), collisionEnv));
        bodyOut = el.add(bodyOut, el.mul(r.bodyCoupling * 0.18, board), el.mul(0.10, ji), tsume);
      } else if (sys === 'bridge-less-long-zither') {
        const softBody = el.svf({ mode: 'bandpass' }, 120, 1.8, stringSignal);
        const floatingHarmonic = el.svf({ mode: 'bandpass' }, el.mul(safeFreqSignal, 2), 7.0, stringSignal);
        bodyOut = el.add(el.mul(0.82, bodyOut), el.mul(r.bodyCoupling * 0.16, softBody), el.mul(0.12, floatingHarmonic));
      } else if (sys === 'multi-string-bridge-zither') {
        const bridge = el.svf({ mode: 'bandpass' }, 1150, 3.8, stringSignal);
        const afterlength = el.svf({ mode: 'bandpass' }, el.mul(safeFreqSignal, 1.5), 18, stringSignal);
        bodyOut = el.add(bodyOut, el.mul(0.12 + r.bodyCoupling * 0.08, bridge), el.mul(0.10, afterlength));
      } else if (sys === 'fretted-lute') {
        const fretClick = el.mul(0.06 + r.contactHardness * 0.06, el.mul(el.highpass(2600, 1.2, el.noise()), collisionEnv));
        bodyOut = el.add(bodyOut, fretClick);
      } else if (sys === 'unfretted-skin-lute') {
        const skinRing = el.svf({ mode: 'bandpass' }, 520, 4.2, stringSignal);
        bodyOut = el.add(bodyOut, el.mul(0.18, skinRing));
      } else if (sys === 'fretted-lute-with-sympathetics') {
        // Sitar jawari is a deliberately bright, buzzy bridge interaction. Do not
        // let the generic lute low-mid body dominate the mizrab/jawari spectrum.
        const jawari = el.svf({ mode: 'bandpass' }, el.min(11000, el.mul(safeFreqSignal, 3.8)), 7.0, stringSignal);
        const jawariAir = el.mul(0.28 + r.nonlinearTransfer * 0.16, el.highpass(3600, 0.9, stringSignal));
        bodyOut = el.add(bodyOut, el.mul(0.34 + r.nonlinearTransfer * 0.16, jawari), jawariAir);
      } else if (sys === 'five-string-plucked-membrane-resonator') {
        const head = el.svf({ mode: 'bandpass' }, 900, 5.5, stringSignal);
        const rim = el.svf({ mode: 'bandpass' }, 1850, 2.6, stringSignal);
        bodyOut = el.add(bodyOut, el.mul(0.22, head), el.mul(0.08, rim));
      } else if (sys === 'single-string-bowed-flexible-bow') {
        const gourdOpen = el.svf({ mode: 'bandpass' }, 420, 2.8, stringSignal);
        const stick = el.mul(0.08, el.mul(el.highpass(1800, 1.0, el.noise()), collisionEnv));
        bodyOut = el.add(bodyOut, el.mul(0.25 + params.mute * 0.15, gourdOpen), stick);
      }
    }

    let finalAcoustic = bodyOut;
    if (hasSympathetic) {
      const droneBase = 146.83;
      const sympatheticTap = el.mul(0.14, stringSignal);
      const tarabNodes = TARAB_SYMPATHETIC_RATIOS.map(r => el.svf({ mode: 'bandpass' }, droneBase * r, 24.0, sympatheticTap));
      const sumTarab = tarabNodes.reduce((acc, curr) => el.add(acc, curr));
      finalAcoustic = el.add(bodyOut, el.mul(0.85, sumTarab));
    }

    const filterCutoff = Math.min(19000,
      isTangoAcoustic ? 6200 + b * 4200
      : physical?.system === 'fretted-lute-with-sympathetics' ? 8500 + b * 6500
      : physical?.system === 'long-zither' ? 8200 + b * 7000
      : physical?.system === 'multi-string-bridge-zither' ? 8800 + b * 6200
      : physical?.system === 'bridge-less-long-zither' ? 6500 + b * 5200
      : physical?.system === 'unfretted-skin-lute' ? 6200 + b * 6500
      : construction === 'board' ? 700 + b * 4500
      : (construction === 'skin-faced' ? 1200 + b * 7500 : 900 + b * 6800)
    );
    return el.lowpass(filterCutoff, 1.0, finalAcoustic);
  }
}
