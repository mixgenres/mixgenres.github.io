import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';
import { createDampedStringLoop, fbGainForDecay } from './lib/stringLoop';

/**
 * UprightBassModule
 * 
 * Physical synthesis module modeling an authentic 3/4 Acoustic Double Bass:
 * - 42Hz Helmholtz internal air cavity resonance + 65Hz carved spruce top mode + 110Hz back maple mode
 * - Dedicated Tango mechanics:
 *   - Arrastre: Dynamic pre-beat upward pitch drag swelling into downbeat
 *   - Strappata: Violent string snap against the ebony fingerboard with metallic clack and deep body thud
 *   - Lija (Sandpaper): Gritty, over-pressured bow scrape across wound steel strings
 *   - Tambor: Resonant wooden palm/knuckle hit on the lower bout
 *   - Chicharra: High-pitched friction scraping behind the wooden bridge
 *   - Arco: Stick-slip rosin friction modeling with heavy string inertia
 *   - Pizzicato: Deep, warm fingerpad pluck with non-linear damping
 */
export default class UprightBassModule implements InstrumentModule {
  id = 'upright-bass';

  renderVoice(ctx: VoiceRenderContext): any {
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
    const isTango = /tango|milonga|vals/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isMarcato = action === 'marcato' || /marcato|marked/i.test(action ?? '');
    const isKizomba = /kizomba|tarraxo|urbankiz|ghetto-zouk/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = /reggaeton|reggaetón|dembow|perreo|neoperreo/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isSubBass = /^(sub-bass|bass-lead)$/i.test(params.instrumentId ?? '');
    const gd = ctx.genreDialect;
    const genre = gd.id;

    // Programmed low-end instruments need a dedicated sub-bass voice rather than
    // inheriting the acoustic upright-bass model. Keep the same module boundary,
    // but make the physical response appropriate to Kizomba/Reggaetón production.
    if (isSubBass && (isKizomba || isReggaeton || /electronic|urban/i.test(params.performanceMode ?? ''))) {
      const p = el.syncphasor(safeFreqSignal, gateSignal);
      const sine = el.sin(el.mul(2 * Math.PI, p));
      const fifth = el.sin(el.mul(2 * Math.PI, el.syncphasor(el.mul(safeFreqSignal, 2), gateSignal)));
      const attack = el.adsr(0.001, isReggaeton ? 0.055 : 0.075, 0.68, 0.035, gateSignal);
      const click = el.mul(0.045, el.mul(el.highpass(900, 1.0, el.noise()), el.adsr(0.0002, 0.008, 0, 0.002, gateSignal)));
      const harmonic = el.mul(isReggaeton ? 0.13 : 0.09, fifth);
      const tone = el.add(el.mul(0.82, sine), el.add(harmonic, click));
      const cutoff = isReggaeton ? 1150 + b * 900 : 900 + b * 700;
      return el.lowpass(cutoff, 1.0, el.tanh(el.mul(isReggaeton ? 1.15 : 1.05, el.mul(attack, tone))));
    }
    const isYumba = action === 'yumba' || /yumba/i.test(action ?? '');
    const isArco = action === 'arco' || action === 'bow_drag' || isLija || params.bowPressure > 0.45;

    // 2. Tambor (Wooden lower bout strike)
    if (isTambor) {
      const bodyThud = el.mul(
        el.cycle(58),
        el.adsr(0.0005, 0.08, 0, 0.02, gateSignal)
      );
      const woodKnock = el.mul(
        el.svf({ mode: 'bandpass' }, 340, 2.5, el.noise()),
        el.adsr(0.0002, 0.015, 0, 0.005, gateSignal)
      );
      return el.add(el.mul(0.75, bodyThud), el.mul(0.40, woodKnock));
    }

    // 3. Strappata (Aggressive tango fingerboard snap)
    if (isStrappata) {
      const fingerboardClack = el.mul(
        el.adsr(0.0002, 0.018, 0, 0.008, gateSignal),
        el.svf({ mode: 'bandpass' }, 1850, 2.6, el.noise())
      );
      const subThud = el.mul(
        el.cycle(el.max(25, el.mul(safeFreqSignal, 0.5))),
        el.adsr(0.0005, 0.09, 0, 0.03, gateSignal)
      );
      const stringTwang = el.mul(
        el.cycle(safeFreqSignal),
        el.adsr(0.0008, 0.15, 0, 0.03, gateSignal)
      );
      return el.tanh(
        el.add(
          el.mul(0.70, fingerboardClack),
          el.add(el.mul(0.85, subThud), el.mul(0.50, stringTwang))
        )
      );
    }

    // 4. Chicharra (Behind bridge scrape)
    if (isChicharra) {
      const scratchNoise = el.highpass(3200, 1.4, el.noise());
      const scratchGate = el.adsr(0.002, Math.max(0.08, decayTime * 0.7), 0.4, 0.03, gateSignal);
      const scratch = el.mul(el.mul(0.9, scratchNoise), scratchGate);
      const bridgeRes = el.svf({ mode: 'bandpass' }, 2100, 2.8, scratch);
      return el.add(scratch, el.mul(0.6, bridgeRes));
    }

    // 5. Arrastre Pitch Drag Envelope
    let activeFreq = safeFreqSignal;
    if (isArrastre) {
      const arrastrePitchEnv = el.adsr(0.001, 0.065, 0.0, 0.015, gateSignal);
      const semitoneDrop = el.mul(arrastrePitchEnv, el.const({ value: -3.0 }));
      const pitchRatio = el.pow(2, el.div(semitoneDrop, 12));
      activeFreq = el.mul(safeFreqSignal, pitchRatio);
    }

    // 6. Bowed Double Bass (Arco / Lija)
    if (isArco) {
      const bowJitter = el.mul(el.const({ value: 0.0025 }), el.noise());
      const jitteredFreq = el.mul(activeFreq, el.add(1.0, bowJitter));
      const rawSaw = el.blepsaw(jitteredFreq);
      const subO = el.sin(el.mul(2 * Math.PI, el.syncphasor(jitteredFreq, gateSignal)));
      const osc = el.add(el.mul(0.58, rawSaw), el.mul(0.42, subO));

      const effectivePressure = isLija ? 0.95 : Math.max(0.20, params.bowPressure);
      const frictionAttackGate = el.adsr(0.002, 0.06, 0.4, 0.04, gateSignal);
      const frictionNoise = el.mul(
        el.mul(effectivePressure * (isLija ? 0.65 : 0.35), frictionAttackGate),
        el.highpass(isLija ? 350 : 550, 1.0, isLija ? el.noise() : el.pinknoise())
      );
      const rawExcited = el.add(osc, frictionNoise);

      // Stick-slip non-linear saturation
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
    const impulse = el.mul(
      el.add(el.mul(0.75, exciteFilter), el.mul(0.25, el.lowpass(1100, 0.8, el.noise()))),
      el.adsr(0.0015, 0.022, 0, 0.008, gateSignal)
    );

    const genreDecayBase = /funk|disco|ska|reggaeton|house|drum-and-bass|uk-bass/.test(genre) ? 0.28
      : /jazz|blues|swing|gospel|soul/.test(genre) ? 0.62
      : /reggae|afrobeats|zouk|kizomba/.test(genre) ? 0.50
      : 0.55;
    const targetDecaySeconds = isTango
      ? 0.34 + decayTime * (0.72 + b * 0.95)
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
      el.add(el.mul((isTango ? 0.52 : 0.45) * gd.body, air), el.add(el.mul((isTango ? 0.42 : 0.35) * gd.body, wood), el.mul((isTango ? 0.24 : 0.20) * gd.body, back)))
    );

    // Tango needs the woody attack and fifth/upper harmonics of a real double
    // sine component made the instrument read as synth bass in an MP3 export.
    const subPhasor = el.syncphasor(activeFreq, gateSignal);
    const subSine = el.mul(isTango ? 0.13 : 0.22, el.sin(el.mul(2 * Math.PI, subPhasor)));
    const marcatoThud = (isTango && (isMarcato || isYumba))
      ? el.mul(0.16, el.mul(el.cycle(72), el.adsr(0.0003, 0.050, 0, 0.014, gateSignal)))
      : el.const({ value: 0 });
    const mixed = el.add(acousticBody, el.add(subSine, marcatoThud));

    const genreCutoff = /jazz|blues|swing|country/.test(genre) ? 5200 + b * 4200
      : /funk|rock|ska|disco/.test(genre) ? 4300 + b * 3900
      : /reggae|zouk|kizomba|afrobeats/.test(genre) ? 3600 + b * 3200
      : 3000 + b * 3000;
    const tangoCutoff = isTango ? 4200 + b * 3600 : genreCutoff * gd.brightness;
    return el.lowpass(Math.min(19000, tangoCutoff), 1.1, mixed);
  }
}
