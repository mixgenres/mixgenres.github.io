import { TANGO_INSTRUMENT_RESPONSE, URBAN_ELECTRIC_GUITAR_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { ELECTRIC_GUITAR_DECAY_RULES, ELECTRIC_GUITAR_GENRE_DRIVE_RULES } from '../../data/sound/dsp/genrePlaybackProfiles';
import { KIZOMBA_PATTERN, REGGAETON_PATTERN, TANGO_NUEVO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

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
    const isTangoNuevo = TANGO_NUEVO_PATTERN.test(`${params.genreId ?? ''}`);
    const tangoResponse = TANGO_INSTRUMENT_RESPONSE.electricGuitar;
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''}`);
    const isReggaeton = REGGAETON_PATTERN.test(`${params.genreId ?? ''}`);
    const isUrbanLatin = isKizomba || isReggaeton;
    const isArrastre = ctx.action === 'arrastre' || /arrastre|slide/i.test(ctx.action ?? '');
    const isMarcato = ctx.action === 'marcato' || /marcato/i.test(ctx.action ?? '');
    const gd = ctx.genreDialect;
    const genre = gd.id;

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));

    const genreDecayRule = ELECTRIC_GUITAR_DECAY_RULES.find(rule => rule.pattern.test(genre));
    const targetDecaySeconds = genreDecayRule
      ? genreDecayRule.base + decayTime * genreDecayRule.decay
      : isUrbanLatin
      ? (isKizomba ? URBAN_ELECTRIC_GUITAR_RESPONSE.kizombaDecayBase + decayTime * URBAN_ELECTRIC_GUITAR_RESPONSE.kizombaDecayTime : URBAN_ELECTRIC_GUITAR_RESPONSE.reggaetonDecayBase + decayTime * URBAN_ELECTRIC_GUITAR_RESPONSE.reggaetonDecayTime)
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
      activeFreq = el.mul(safeFreqSignal, el.sub(1.0, el.mul(isTangoNuevo ? tangoResponse.arrastrePitchDrop : tangoResponse.arrastrePitchDropDefault, slideEnv)));
    }

    const exciteFilter = el.lowpass(el.mul(activeFreq, 4.0), 0.9, el.pinknoise());
    const impulse = el.mul(
      el.add(el.mul(0.65, exciteFilter), el.mul(0.35, el.noise())),
      el.adsr(attackTime, isMutedGuitar ? 0.004 : 0.008, 0, 0.003, gateSignal)
    );

    const mult = isUrbanLatin ? (isKizomba ? URBAN_ELECTRIC_GUITAR_RESPONSE.urbanKizombaMult + b * URBAN_ELECTRIC_GUITAR_RESPONSE.urbanKizombaBrightness : URBAN_ELECTRIC_GUITAR_RESPONSE.urbanReggaetonMult + b * URBAN_ELECTRIC_GUITAR_RESPONSE.urbanReggaetonBrightness) : isJazz ? (2.5 + b * 3.5) : isMutedGuitar ? (2.0 + b * 2.5) : (3.5 + b * 6.5);
    const loopCutoff = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 1200 }), el.mul(safeFreqSignal, el.const({ value: mult }))));
    
    const stringLoop = createDampedStringLoop(`${pk}:egf`, delayTimeSignal, damping, loopCutoff, impulse);

    const genreDrive = ELECTRIC_GUITAR_GENRE_DRIVE_RULES.find(rule => rule.pattern.test(genre))?.value ?? 1.0;
    const driveAmount = isDistortion ? 7.5 : isOverdrive ? 4.0 : isHarmonics ? 1.6 : isTangoNuevo ? tangoResponse.driveBase + params.drive * tangoResponse.driveParamMultiplier : (1.2 + params.drive * 2.0) * genreDrive;
    const driven = el.tanh(el.mul(el.const({ value: driveAmount }), stringLoop));

    const cabHP = el.highpass(isTangoNuevo ? tangoResponse.highPass : (isUrbanLatin ? tangoResponse.highPassUrban : tangoResponse.highPassDefault), 0.8, driven);
    const conePresence = el.svf({ mode: 'bandpass' }, isTangoNuevo ? tangoResponse.presence : tangoResponse.presenceDefault, 1.4, cabHP);
    const cabWithCone = el.add(cabHP, el.mul(0.35, conePresence));
    const cabCutoff = Math.min(19000, isTangoNuevo ? tangoResponse.cutoffBase + b * tangoResponse.cutoffBrightness : (isKizomba ? tangoResponse.kizombaCutoffBase + b * tangoResponse.kizombaCutoffBrightness : (isReggaeton ? tangoResponse.reggaetonCutoffBase + b * tangoResponse.reggaetonCutoffBrightness : (isJazz ? tangoResponse.jazzCutoff : tangoResponse.defaultCutoffBase + b * tangoResponse.defaultCutoffBrightness))));
    const cabOut = el.lowpass(cabCutoff, 1.2, cabWithCone);

    const harmonic = isHarmonics ? el.mul(0.65, el.cycle(el.mul(safeFreqSignal, 2.0))) : 0;
    const mutedBody = isMutedGuitar ? el.mul(0.5, el.highpass(500, 1.0, cabOut)) : cabOut;
    const urbanPluck = isUrbanLatin
      ? el.mul(isKizomba ? tangoResponse.kizombaNoiseGain : tangoResponse.noiseGainDefault, el.mul(el.highpass(isReggaeton ? tangoResponse.reggaetonNoiseCutoff : tangoResponse.noiseCutoffDefault, 1.3, el.noise()), el.adsr(0.00015, 0.006, 0, 0.0025, gateSignal)))
      : el.const({ value: 0 });
    const tangoMarcatoClick = isTangoNuevo && isMarcato
      ? el.mul(0.10, el.mul(el.svf({ mode: 'bandpass' }, 1450, 2.0, el.noise()), el.adsr(0.0002, 0.009, 0, 0.003, gateSignal)))
      : el.const({ value: 0 });

    return el.add(mutedBody, el.add(harmonic, el.add(tangoMarcatoClick, urbanPluck)));
  }
}
