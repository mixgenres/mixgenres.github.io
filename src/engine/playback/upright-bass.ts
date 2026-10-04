import { TANGO_INSTRUMENT_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { UPRIGHT_BASS_CUTOFF_RULES, UPRIGHT_BASS_DECAY_RULES } from '../../data/sound/dsp/genrePlaybackProfiles';
import { TANGO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';
import { resolveVoiceParameters } from './instrumentRegistry';
import type { TrackParams } from './elementaryEngine';
import { renderBodyStrike, renderMutedString, renderStrappata } from './stringPercussion';

/** Estimated plucked/bowed double-bass source and body response. Bowed tone
 * uses a source/filter approximation, not a nonlinear bow/string waveguide. */
export default class UprightBassModule implements InstrumentModule {
  id = 'upright-bass';
  ownedDspSections: InstrumentModule['ownedDspSections'] = ['coupledResonators', 'mechanicalArtifacts'];

  releaseTailSeconds(params: TrackParams): number {
    const physical = resolveVoiceParameters({ id: 'tail', note: 60, velocity: 1, gate: 0 }, params);
    const response = TANGO_INSTRUMENT_RESPONSE.uprightBass;
    const isTango = TANGO_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const base = UPRIGHT_BASS_DECAY_RULES.find(rule => rule.pattern.test(physical.genreDialect.id))?.value ?? 0.55;
    // fbGainForDecay already expresses T60, not an exponential time constant.
    // Use the actual string-loop law instead of multiplying decayTime by four.
    return isTango
      ? response.decayBase + physical.decayTime * (response.decayTimeMultiplier + physical.b * response.brightnessMultiplier)
      : base + physical.decayTime * (1.05 + physical.b * 1.25) * physical.genreDialect.decay;
  }

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      params,
      pk,
      gateSignal,
      safeFreqSignal,
      b,
      decayTime,
      action
    } = ctx;

    // 1. Technique Recognition
    const isStrappata = action === 'strappata' || action === 'slap' || /strappata|slap/i.test(action ?? '');
    const isArrastre = action === 'arrastre' || /arrastre/i.test(action ?? '');
    const isLija = action === 'lija' || /lija|sandpaper/i.test(action ?? '');
    const isTambor = action === 'tambor' || action === 'body-tap' || /tambor/i.test(action ?? '');
    const isChicharra = action === 'chicharra' || /chicharra/i.test(action ?? '');
    const isTango = TANGO_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const tangoResponse = TANGO_INSTRUMENT_RESPONSE.uprightBass;
    const isMarcato = action === 'marcato' || /marcato|marked/i.test(action ?? '');
    const gd = ctx.genreDialect;
    const genre = gd.id;
    const isYumba = action === 'yumba' || /yumba/i.test(action ?? '');
    const isArco = ctx.voice.mechanics?.excitation === 'bow' || action === 'arco' || action === 'bow' || action === 'bow_drag' || isLija || isArrastre;

    if (ctx.voice.mechanics?.surface === 'soundboard' || action === 'golpe-caja' || action === 'body-tap') return renderBodyStrike(ctx, 'bass');
    if (isTambor) return renderMutedString(ctx);
    if (action === 'strappata') return renderStrappata(ctx);
    if (ctx.voice.mechanics?.surface === 'muted-string') return renderMutedString(ctx);

    // 4. Chicharra (Behind bridge scrape)
    if (isChicharra) {
      const scratchNoise = el.highpass(3200, 1.4, el.noise());
      const scratchGate = el.adsr(0.002, Math.max(0.08, decayTime * 0.7), 0.4, 0.03, gateSignal);
      const scratch = el.mul(el.mul(0.9, scratchNoise), scratchGate);
      const bridgeRes = el.svf({ mode: 'bandpass' }, 2100, 2.8, scratch);
      return el.add(scratch, el.mul(0.6, bridgeRes));
    }

    // Arrastre combines bow energy with the authored approach/target pitches.
    // A universal three-semitone oscillator scoop invents an unwritten melody.
    const activeFreq = safeFreqSignal;

    // 6. Bowed Double Bass (Arco / Lija)
    if (isArco) {
      const bowJitter = el.mul(el.const({ value: 0.0025 }), el.noise());
      const jitteredFreq = el.mul(activeFreq, el.add(1.0, bowJitter));
      const rawSaw = el.blepsaw(jitteredFreq);
      const subO = el.sin(el.mul(2 * Math.PI, el.syncphasor(jitteredFreq, gateSignal)));
      const osc = el.add(el.mul(0.58, rawSaw), el.mul(0.42, subO));

      const effectivePressure = ctx.voice.mechanics?.bowPressure ?? (isLija ? 0.95 : Math.max(0.20, params.bowPressure));
      const bowSpeed = ctx.voice.mechanics?.bowVelocity ?? params.bowVelocity;
      const bowEnvelope = el.adsr(isArrastre ? Math.min(.09, (ctx.voice.noteDurationSeconds ?? .2) * .5) : .012, .04, 1, .04, gateSignal);
      const frictionAttackGate = el.adsr(0.002, 0.06, 0.4, 0.04, gateSignal);
      const frictionNoise = el.mul(
        el.mul(effectivePressure * (isLija ? 0.65 : 0.35), frictionAttackGate),
        el.highpass(isLija ? 350 : 550, 1.0, isLija ? el.noise() : el.pinknoise())
      );
      const rawExcited = el.mul(bowEnvelope, el.add(el.mul(.35 + bowSpeed * .65, osc), frictionNoise));

      // Source/filter saturation approximation
      const asymmetry = el.mul(0.20, gateSignal);
      const stickSlip = el.tanh(
        el.add(asymmetry, el.mul(el.add(1.0, el.mul(effectivePressure * 2.6, gateSignal)), rawExcited))
      );

      // Double Bass Body Resonances: 42Hz air, 65Hz top wood, 110Hz back plate, 1300Hz bridge hill
      const airRes = el.svf({ mode: 'bandpass' }, 42, 3.5, stickSlip);
      const woodRes = el.svf({ mode: 'bandpass' }, 65, 2.8, stickSlip);
      const backRes = el.svf({ mode: 'bandpass' }, 110, 2.4, stickSlip);
      const bridgeHill = el.svf({ mode: 'bandpass' }, 1300, 2.0, stickSlip);

      const shaped = el.add(
        stickSlip,
        el.add(
          el.mul(0.55, airRes),
          el.add(el.mul(0.45, woodRes), el.add(el.mul(0.30, backRes), el.mul(isLija ? 0.50 : 0.25, bridgeHill)))
        )
      );

      const dynamicCutoff = el.min(
        el.const({ value: 19000 }),
        el.max(
          el.const({ value: 180 }),
          el.mul(el.const({ value: 320 + b * 2200 }), el.add(0.4, el.mul(effectivePressure * 0.8, gateSignal)))
        )
      );
      return el.lowpass(dynamicCutoff, 1.25, shaped);
    }

    // 7. Plucked Upright Double Bass (Pizzicato)
    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), activeFreq)));

    // Deep string pluck impulse with fleshy fingerpad damping
    const exciteFilter = el.lowpass(el.mul(activeFreq, 3.2), 0.9, el.pinknoise());
    let impulse = el.mul(
      el.add(el.mul(0.75, exciteFilter), el.mul(0.25, el.lowpass(1100, 0.8, el.noise()))),
      el.adsr(0.0015, 0.022, 0, 0.008, gateSignal)
    );

    if (isStrappata) {
      // Upright slap retains the plucked pitch plus fingerboard collision.
      impulse = el.add(impulse, el.mul(.3, el.mul(el.highpass(1800, .8, el.noise()), el.adsr(.0002, .008, 0, .003, gateSignal))));
    }
    const pluckPosition = ctx.voice.mechanics?.pluckPosition ?? params.pluckPosition;
    impulse = el.sub(impulse, el.delay({ size: 4096 }, el.mul(delayTimeSignal, Math.max(.05, Math.min(.9, pluckPosition))), 0, impulse));

    const genreDecayBase = UPRIGHT_BASS_DECAY_RULES.find(rule => rule.pattern.test(genre))?.value ?? 0.55;
    const targetDecaySeconds = isTango
      ? tangoResponse.decayBase + decayTime * (tangoResponse.decayTimeMultiplier + b * tangoResponse.brightnessMultiplier)
      : genreDecayBase + decayTime * (1.05 + b * 1.25) * gd.decay;
    const damping = fbGainForDecay(activeFreq, targetDecaySeconds);
    const bassCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(el.const({ value: 550 }), el.mul(activeFreq, el.const({ value: 3.2 + b * 4.5 })))
    );

    const stringLoop = createDampedStringLoop(`${pk}:bass`, delayTimeSignal, damping, bassCutoff, impulse);

    // Acoustic Double Bass Body Resonances (42Hz air, 65Hz top wood, 110Hz back plate)
    const air = el.svf({ mode: 'bandpass' }, 42, 3.8, stringLoop);
    const wood = el.svf({ mode: 'bandpass' }, 65, 2.9, stringLoop);
    const back = el.svf({ mode: 'bandpass' }, 110, 2.2, stringLoop);
    const acousticBody = el.add(
      stringLoop,
      el.add(el.mul((isTango ? tangoResponse.airGain : tangoResponse.airGainDefault) * gd.body, air), el.add(el.mul((isTango ? tangoResponse.woodGain : tangoResponse.woodGainDefault) * gd.body, wood), el.mul((isTango ? tangoResponse.backGain : tangoResponse.backGainDefault) * gd.body, back)))
    );

    // Tango needs the woody attack and fifth/upper harmonics of a real double
    // sine component made the instrument read as synth bass in an MP3 export.
    const subPhasor = el.syncphasor(activeFreq, gateSignal);
    const subSine = el.mul(isTango ? tangoResponse.subGain : tangoResponse.subGainDefault, el.sin(el.mul(2 * Math.PI, subPhasor)));
    const marcatoThud = (isTango && (isMarcato || isYumba))
      ? el.mul(tangoResponse.marcatoThudGain, el.mul(el.cycle(72), el.adsr(0.0003, 0.050, 0, 0.014, gateSignal)))
      : el.const({ value: 0 });
    const mixed = el.add(acousticBody, el.add(subSine, marcatoThud));

    const cutoffRule = UPRIGHT_BASS_CUTOFF_RULES.find(rule => rule.pattern.test(genre));
    const genreCutoff = cutoffRule ? cutoffRule.base + b * cutoffRule.brightness : 3000 + b * 3000;
    const tangoCutoff = isTango ? tangoResponse.cutoffBase + b * tangoResponse.cutoffBrightness : genreCutoff * gd.brightness;
    return el.lowpass(Math.min(19000, tangoCutoff), 1.1, mixed);
  }
}
