import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

/**
 * PianoModule
 * 
 * Physical synthesis module modeling an authentic Concert Grand Piano:
 * - Non-linear felt hammer dynamics: Velocity-dependent hammer hardness shaping attack spectrum
 * - Multi-string unison dispersion: 3 detuned unisons in treble, 2 in tenor, single copper-wound string in bass
 * - String inharmonicity (B-parameter dispersion) modeling stiff steel wire acoustics
 * - Soundboard corpus: 120Hz longitudinal spruce mode, 240Hz cross-grain mode, and cast-iron frame duplex chime
 * - Authentic Tango techniques:
 *   - Marcato en 4: Heavy percussive chord attack with dry felt rebound
 *   - Arrastre: Anticipatory pre-beat pitch drag
 *   - Yumba (Pugliese): Deep accented low cluster slam with rich plate resonance
 *   - Chapa: Damped metallic percussive chop
 *   - Campana (Salgán): High-register crystal-clear ringing bell stabs
 *   - Pesada: Heavy sub-octave fundamental coupling
 */
export default class PianoModule implements InstrumentModule {
  id = 'piano';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      pk,
      gateSignal,
      velSignal,
      safeFreqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const noteSeed = seedOf(trackId, voiceIndex, 4040);
    const noteNum = voice.note ?? 60;
    const isBassRegister = noteNum < 48;

    // 1. Tango Technique & Articulation Recognition
    const isMarcato = action === 'marcato' || /marcato/i.test(action ?? '');
    const isArrastre = action === 'arrastre' || /arrastre/i.test(action ?? '');
    const isYumba = action === 'yumba' || action === 'cluster' || /yumba|cluster/i.test(action ?? '');
    const isChapa = action === 'chapa' || /chapa|muted/i.test(action ?? '') || params.mute > 0.4;
    const isCampana = action === 'campana' || /campana|bell/i.test(action ?? '');
    const isPesada = action === 'pesada' || /pesada/i.test(action ?? '');
    const isTango = /tango|milonga|vals/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isCampanitas = action === 'campanitas' || /campanitas/i.test(action ?? '');
    const gd = ctx.genreDialect;
    const genre = gd.id;
    const isJazzFamily = /jazz|blues|swing|soul|gospel/.test(genre);
    const isDance = /house|disco|funk|electronic|hip-hop|rnb/.test(genre);

    // 2. Arrastre Pre-Beat Pitch Scoop
    let activeFreqSignal = safeFreqSignal;
    if (isArrastre) {
      const arrastrePitchEnv = el.adsr(0.001, 0.045, 0.0, 0.01, gateSignal);
      const semitoneDrop = el.mul(arrastrePitchEnv, el.const({ value: -2.0 }));
      const pitchRatio = el.pow(2, el.div(semitoneDrop, 12));
      activeFreqSignal = el.mul(safeFreqSignal, pitchRatio);
    }

    // 3. Dynamic Felt Hammer Non-linear Excitation
    // Felt gets dramatically stiffer as velocity increases, injecting high frequencies
    const hammerStiffness = isMarcato || isYumba ? 0.95 : isDance ? 0.48 + b * 0.46 * gd.transient : isJazzFamily ? 0.34 + b * 0.48 : (isTango ? 0.42 + b * 0.52 : (0.35 + b * 0.65));
    const hammerCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 450 }),
        el.mul(
          el.const({ value: 800 + hammerStiffness * 8500 }),
          el.add(0.2, el.mul(0.85, velSignal))
        )
      )
    );

    const feltNoise = el.lowpass(hammerCutoff, 1.1, el.pinknoise());
    const hammerTransientDuration = isChapa ? 0.002 : (0.003 + (1 - hammerStiffness) * 0.005);
    const hammerEnv = el.adsr(0.00015, hammerTransientDuration, 0, 0.002, gateSignal);
    let hammerImpulse = el.mul(feltNoise, hammerEnv);

    // Add wooden keybed knock transient for heavy fortissimo / Marcato
    if (isMarcato || isYumba || isPesada) {
      const knockEnv = el.adsr(0.0002, 0.012, 0, 0.003, gateSignal);
      const knockNoise = el.svf({ mode: 'bandpass' }, 180, 2.2, el.noise());
      hammerImpulse = el.add(hammerImpulse, el.mul(0.45, el.mul(knockNoise, knockEnv)));
    }

    // Yumba cluster slam: Adds lower sub-cluster burst
    if (isYumba) {
      // Pugliese yumba: accented chord attack followed by a low cluster that
      // blooms briefly under the damper/pedal rather than a generic sub hit.
      const clusterThump = el.mul(
        el.cycle(58),
        el.adsr(0.0005, 0.12, 0.0, 0.055, gateSignal)
      );
      const clusterBody = el.add(
        el.svf({ mode: 'bandpass' }, 58, 2.2, clusterThump),
        el.svf({ mode: 'bandpass' }, 116, 2.8, clusterThump)
      );
      hammerImpulse = el.add(hammerImpulse, el.mul(0.62, clusterBody));
    }

    if (isCampanitas) {
      const bellEnv = el.adsr(0.0002, 0.018, 0, 0.025, gateSignal);
      const bell = el.add(
        el.mul(0.18, el.cycle(el.mul(activeFreqSignal, 2))),
        el.mul(0.10, el.cycle(el.mul(activeFreqSignal, 3)))
      );
      hammerImpulse = el.add(hammerImpulse, el.mul(bellEnv, bell));
    }

    // 4. Physical String Waveguide with Triple Unison & Inharmonicity
    // Bass notes have single/double wound string, treble notes have 3 steel strings
    const B = 0.00018; // Inharmonicity coefficient
    const f1 = activeFreqSignal;
    const len1 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), f1)));

    // Unison 2 with slight micro-detuning (+1.2 cents)
    const detuneCents2 = 1.0012 + randNorm(noteSeed ^ 0x11) * 0.0003;
    const f2 = el.max(el.const({ value: 20 }), el.mul(f1, el.const({ value: detuneCents2 })));
    const inharmonicF2 = el.mul(f2, el.const({ value: Math.sqrt(1 + B * 4) }));
    const len2 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), inharmonicF2)));

    // Unison 3 for mid/treble registers (-1.4 cents)
    const detuneCents3 = 0.9988 - randNorm(noteSeed ^ 0x22) * 0.0003;
    const f3 = el.max(el.const({ value: 20 }), el.mul(f1, el.const({ value: detuneCents3 })));
    const len3 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), f3)));

    // Piano String Decay Times
    const baseDecay = isChapa ? 0.12 : (isMarcato ? (isTango ? 0.48 : 0.65) : (isCampana || isCampanitas ? 3.8 : (0.85 + decayTime * (1.5 + b * 2.2) * gd.decay))); 
    const d1 = fbGainForDecay(f1, baseDecay);
    const d2 = fbGainForDecay(f2, baseDecay * 0.94);
    const d3 = fbGainForDecay(f3, baseDecay * 0.91);

    const stringCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(
        el.const({ value: 1200 }),
        el.mul(f1, el.const({ value: isChapa ? 2.0 : (isCampana ? 8.5 : (3.8 + b * 6.5)) }))
      )
    );

    const s1 = createDampedStringLoop(`${pk}:p1`, len1, d1, stringCutoff, hammerImpulse);
    const s2 = createDampedStringLoop(`${pk}:p2`, len2, d2, el.mul(stringCutoff, el.const({ value: 0.96 })), hammerImpulse);
    const s3 = isBassRegister
      ? el.const({ value: 0 })
      : createDampedStringLoop(`${pk}:p3`, len3, d3, el.mul(stringCutoff, el.const({ value: 0.92 })), hammerImpulse);

    // Mix unisons
    const stringsSum = isBassRegister
      ? el.add(el.mul(0.70, s1), el.mul(0.30, s2))
      : el.add(el.mul(0.45, s1), el.add(el.mul(0.35, s2), el.mul(0.20, s3)));

    // 5. Grand Piano Soundboard & Cast-Iron Frame Resonances
    // 120Hz spruce soundboard belly, 240Hz cross-grain mode, and 3.8kHz duplex scale chime
    const soundboardMain = el.svf({ mode: 'bandpass' }, 120, 2.6, stringsSum);
    const soundboardCross = el.svf({ mode: 'bandpass' }, 240, 2.2, stringsSum);
    const duplexScale = el.svf({ mode: 'bandpass' }, 3800, 3.2, stringsSum);

    const soundboardBloom = el.add(
      stringsSum,
      el.add(
        el.mul((isTango ? 0.38 : 0.32) * gd.body, soundboardMain),
        el.add(el.mul((isTango ? 0.28 : 0.24) * gd.body, soundboardCross), el.mul(isCampana || isCampanitas ? 0.45 : (isTango ? 0.15 : 0.12), duplexScale))
      )
    );

    // 6. Sub-octave reinforcement for Pesada and low bass notes
    let finalTone = soundboardBloom;
    if (isPesada || (isBassRegister && isMarcato)) {
      const subPhasor = el.syncphasor(el.mul(f1, 0.5), gateSignal);
      const subRumble = el.mul(
        0.30,
        el.mul(el.sin(el.mul(2 * Math.PI, subPhasor)), el.adsr(0.001, baseDecay * 0.8, 0, 0.02, gateSignal))
      );
      finalTone = el.add(finalTone, subRumble);
    }

    const outputCutoff = Math.min(19000, isChapa ? 1400 : (1200 + b * 8500));
    return el.lowpass(outputCutoff, 1.0, finalTone);
  }
}
