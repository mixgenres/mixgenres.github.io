import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

export default class ElectricGuitarModule implements InstrumentModule {
  id = 'electric-guitar';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      params,
      pk,
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      model
    } = ctx;

    const isJazz = model === 22;
    const isMutedGuitar = model === 23;
    const isDistortion = model === 24;
    const isOverdrive = model === 25;
    const isHarmonics = model === 26;
    const isTangoNuevo = /nuevo|tango/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isKizomba = /kizomba|tarraxo|urbankiz|ghetto-zouk/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = /reggaeton|reggaetón|dembow|perreo|neoperreo/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isUrbanLatin = isKizomba || isReggaeton;
    const isArrastre = ctx.action === 'arrastre' || /arrastre|slide/i.test(ctx.action ?? '');
    const isMarcato = ctx.action === 'marcato' || /marcato/i.test(ctx.action ?? '');
    const gd = ctx.genreDialect;
    const genre = gd.id;

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));

    const targetDecaySeconds = /funk|ska|reggae|bachata/.test(genre)
      ? 0.10 + decayTime * 0.35
      : /country|blues|jazz/.test(genre)
      ? 0.42 + decayTime * 0.95
      : isUrbanLatin
      ? (isKizomba ? 0.19 + decayTime * 0.55 : 0.16 + decayTime * 0.42)
      : isMutedGuitar
      ? (0.08 + decayTime * 0.25)
      : isTangoNuevo
      ? (0.24 + decayTime * 0.85)
      : isJazz
      ? (0.35 + decayTime * 0.9)
      : (0.45 + decayTime * 1.8);
    const damping = fbGainForDecay(safeFreqSignal, targetDecaySeconds);
    const attackTime = isMutedGuitar ? 0.00035 : 0.0007;

    let activeFreq = safeFreqSignal;
    if (isArrastre) {
      const slideEnv = el.adsr(0.001, 0.065, 0, 0.008, gateSignal);
      activeFreq = el.mul(safeFreqSignal, el.sub(1.0, el.mul(isTangoNuevo ? 0.095 : 0.06, slideEnv)));
    }

    const exciteFilter = el.lowpass(el.mul(activeFreq, 4.0), 0.9, el.pinknoise());
    const impulse = el.mul(
      el.add(el.mul(0.65, exciteFilter), el.mul(0.35, el.noise())),
      el.adsr(attackTime, isMutedGuitar ? 0.004 : 0.008, 0, 0.003, gateSignal)
    );

    const mult = isUrbanLatin ? (isKizomba ? 3.2 + b * 4.0 : 2.7 + b * 3.5) : isJazz ? (2.5 + b * 3.5) : isMutedGuitar ? (2.0 + b * 2.5) : (3.5 + b * 6.5);
    const loopCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: mult }))));
    
    const stringLoop = createDampedStringLoop(`${pk}:egf`, delayTimeSignal, damping, loopCutoff, impulse);

    const genreDrive = /metal|industrial/.test(genre) ? 1.30 : /rock|punk-hardcore|blues/.test(genre) ? 1.15 : /jazz|country|reggae|ska/.test(genre) ? 0.88 : 1.0;
    const driveAmount = isDistortion ? 7.5 : isOverdrive ? 4.0 : isHarmonics ? 1.6 : isTangoNuevo ? 1.05 + params.drive * 1.25 : (1.2 + params.drive * 2.0) * genreDrive;
    const driven = el.tanh(el.mul(el.const({ value: driveAmount }), stringLoop));

    const cabHP = el.highpass(isTangoNuevo ? 82 : (isUrbanLatin ? 90 : 100), 0.8, driven);
    const conePresence = el.svf({ mode: 'bandpass' }, isTangoNuevo ? 1850 : 2200, 1.4, cabHP);
    const cabWithCone = el.add(cabHP, el.mul(0.35, conePresence));
    const cabCutoff = Math.min(19000, isTangoNuevo ? 5200 + b * 900 : (isKizomba ? 5600 + b * 1100 : (isReggaeton ? 5000 + b * 900 : (isJazz ? 4200 : 4800 + b * 700))));
    const cabOut = el.lowpass(cabCutoff, 1.2, cabWithCone);

    const harmonic = isHarmonics ? el.mul(0.65, el.cycle(el.mul(safeFreqSignal, 2.0))) : 0;
    const mutedBody = isMutedGuitar ? el.mul(0.5, el.highpass(500, 1.0, cabOut)) : cabOut;
    const urbanPluck = isUrbanLatin
      ? el.mul(isKizomba ? 0.09 : 0.13, el.mul(el.highpass(isReggaeton ? 2500 : 1900, 1.3, el.noise()), el.adsr(0.00015, 0.006, 0, 0.0025, gateSignal)))
      : el.const({ value: 0 });
    const tangoMarcatoClick = isTangoNuevo && isMarcato
      ? el.mul(0.10, el.mul(el.svf({ mode: 'bandpass' }, 1450, 2.0, el.noise()), el.adsr(0.0002, 0.009, 0, 0.003, gateSignal)))
      : el.const({ value: 0 });

    return el.add(mutedBody, el.add(harmonic, el.add(tangoMarcatoClick, urbanPluck)));
  }
}
