import { TANGO_INSTRUMENT_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { TANGO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

/**
 * SpanishGuitarModule
 * 
 * Physical synthesis module modeling an authentic Spanish Flamenco Guitar (Guitarra Blanca/Negra):
 * - Thin German spruce top and Spanish cypress back/sides producing immediate attack response and punchy dry decay
 * - Authentic Flamenco techniques: 5-finger rasgueado fan bursts, 3-stroke alzapúa thumb engine, rest-stroke picado, and 5-note tremolo (p-i-a-m-i)
 * - Golpeador soundboard tap acoustics (185Hz body thump + 2.4kHz crisp nail click)
 * - Fret clack (ceceo) non-linear excitation on aggressive downbeats
 */
export default class SpanishGuitarModule implements InstrumentModule {
  id = 'spanish-guitar';

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

    const noteSeed = seedOf(trackId, voiceIndex, 3030);

    // 1. Golpeador Body Tap (Tap on transparent tap plates)
    if (action === 'golpe' || action === 'tap' || action === 'golpe-tap') {
      const bodyPunch = el.mul(el.cycle(185), el.adsr(0.0003, 0.035, 0, 0.01, gateSignal));
      const nailClick = el.mul(el.highpass(2400, 1.2, el.noise()), el.adsr(0.0001, 0.008, 0, 0.003, gateSignal));
      return el.add(el.mul(0.75, bodyPunch), el.mul(0.40, nailClick));
    }

    // 2. Articulation Recognition
    const isRasgueado = action === 'abanico' || action === 'rasgueado';
    const isAlzapua = action === 'alzapua' || action === 'alzapúa';
    const isPicado = action === 'picado' || action === 'pick' || action === 'apoyando';
    const isMuted = action === 'palm-mute' || action === 'apagado' || action === 'mute' || params.mute > 0.35;
    const isTremolo = action === 'tremolo' || /tremolo/i.test(action ?? '');
    const isHarmonic = action === 'harmonic' || /harmonic/i.test(action ?? '');
    const isLegato = action === 'legato' || action === 'slur' || action === 'hammer-on' || action === 'pull-off';
    const isTango = TANGO_PATTERN.test(`${params.genreId ?? ''}`);
    const tangoResponse = TANGO_INSTRUMENT_RESPONSE.spanishGuitar;
    const isMarcato = action === 'marcato' || /marcato|marked/i.test(action ?? '');
    const isArrastre = action === 'arrastre' || /arrastre|drag/i.test(action ?? '');

    // 3. Vibrato Dynamics
    const baseVibSpeed = 5.8 + randNorm(noteSeed ^ 0x33) * 0.15;
    const vibOnset = el.adsr(isLegato ? 0.10 : 0.20, 0.08, 1.0, 0.05, gateSignal);
    const vibLfo = el.cycle(baseVibSpeed);
    const vibratoDepth = (!isMuted && !isRasgueado)
      ? el.mul(el.const({ value: 0.012 * (params.resonance + 0.3) }), vibOnset)
      : el.const({ value: 0 });
    
    const pitchRatio = isHarmonic ? 2.0 : 1.0;
    const arrastreEnv = el.adsr(0.001, 0.055, 0, 0.008, gateSignal);
    const arrastreRatio = isArrastre ? el.sub(1.0, el.mul(0.075, arrastreEnv)) : el.const({ value: 1.0 });
    const baseFreq = el.mul(safeFreqSignal, el.const({ value: pitchRatio }));
    const vibratingFreq = el.mul(baseFreq, el.mul(arrastreRatio, el.add(1.0, el.mul(vibratoDepth, vibLfo))));

    // 4. Nail & Multi-Finger Excitation Impulse Generator
    const broadbandPluck = el.lowpass(el.mul(vibratingFreq, 4.2), 0.9, el.pinknoise());
    let impulse: AudioSignal;

    if (isTango && (isMarcato || isArrastre) && !isRasgueado) {
      // Tango guitar accompaniment is tighter and more percussive than flamenco
      // rasgueado: a short chord attack with a small downbeat body thump.
      const chordEnv = el.adsr(0.00025, isArrastre ? 0.010 : 0.006, 0, 0.003, gateSignal);
      const chordNoise = el.add(
        el.mul(0.72, broadbandPluck),
        el.mul(0.28, el.svf({ mode: 'bandpass' }, 1700, 1.8, el.noise()))
      );
      const bodyPulse = el.mul(el.cycle(110), el.adsr(0.0004, 0.025, 0, 0.008, gateSignal));
      impulse = el.add(el.mul(chordNoise, chordEnv), el.mul(0.16, bodyPulse));
    } else if (isRasgueado) {
      // 5-stroke fan burst (little, ring, middle, index, thumb) spread across ~32ms
      const bursts = Array.from({ length: 5 }, (_, i) =>
        el.adsr(0.0002 + i * 0.0035, 0.005, 0, 0.002, gateSignal)
      );
      const rasgNoise = el.add(el.mul(0.65, broadbandPluck), el.mul(0.35, el.svf({ mode: 'bandpass' }, 2400, 1.3, el.noise())));
      impulse = el.mul(rasgNoise, bursts.reduce((acc, bst) => el.add(acc, bst), el.const({ value: 0 })));
    } else if (isAlzapua) {
      // 3-stroke thumb cycle: down-stroke, up-stroke nail, down-stroke golpe
      const b1 = el.adsr(0.0002, 0.0055, 0, 0.002, gateSignal);
      const b2 = el.adsr(0.0035, 0.0050, 0, 0.002, gateSignal);
      const b3 = el.adsr(0.0070, 0.0065, 0, 0.002, gateSignal);
      const thumbNoise = el.add(el.mul(0.60, broadbandPluck), el.mul(0.40, el.svf({ mode: 'bandpass' }, 1200, 1.5, el.noise())));
      impulse = el.mul(thumbNoise, el.add(b1, el.add(el.mul(0.75, b2), el.mul(0.9, b3))));
    } else if (isTremolo) {
      // 5-note flamenco tremolo (thumb bass + i-a-m-i four-finger roll)
      const tBursts = Array.from({ length: 4 }, (_, i) =>
        el.adsr(0.0001 + i * 0.004, 0.0045, 0, 0.002, gateSignal)
      );
      const tremNoise = el.add(el.mul(0.70, broadbandPluck), el.mul(0.30, el.svf({ mode: 'bandpass' }, 2800, 1.5, el.noise())));
      impulse = el.mul(tremNoise, tBursts.reduce((acc, bst) => el.add(acc, bst), el.const({ value: 0 })));
    } else if (isPicado) {
      // Apoyando rest stroke with strong nail transient
      const picadoBurst = el.adsr(0.0002, 0.004, 0, 0.0018, gateSignal);
      const nailSnap = el.svf({ mode: 'bandpass' }, 2200, 1.6, el.noise());
      impulse = el.mul(el.add(el.mul(0.65, broadbandPluck), el.mul(0.45, nailSnap)), picadoBurst);
    } else {
      // Tirando free stroke
      const fingerBurst = el.adsr(0.0004, 0.007, 0, 0.003, gateSignal);
      impulse = el.mul(broadbandPluck, fingerBurst);
    }

    // Nail release choke / string release friction
    const releaseChoke = el.mul(
      -0.22,
      el.mul(el.svf({ mode: 'bandpass' }, 1400, 1.5, el.noise()), el.adsr(0.0001, 0.002, 0, 0.001, gateSignal))
    );
    impulse = el.add(impulse, releaseChoke);

    // 5. Karplus-Strong Nylon Waveguide with Spanish Cypress Damping
    const baseDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), vibratingFreq)));
    const cutoffMult = isMuted ? 1.6 : (isHarmonic ? 7.0 : (3.2 + b * 5.8));
    const stringCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(el.const({ value: 1100 }), el.mul(vibratingFreq, el.const({ value: cutoffMult })))
    );

    // Shorter, crisper decay typical of flamenco cypress guitars
    const targetDecaySeconds = isMuted ? 0.09 : (isHarmonic ? 1.9 : (isTango ? tangoResponse.decayBase + decayTime * (tangoResponse.decayTimeBase + b * tangoResponse.decayBrightness) : (tangoResponse.decayBaseDefault + decayTime * (tangoResponse.decayTimeBaseDefault + b * tangoResponse.decayBrightnessDefault))));
    const d1 = fbGainForDecay(vibratingFreq, targetDecaySeconds);

    // Nylon string inharmonicity
    const B = 0.00015;
    const inharmonicFreq = el.max(el.const({ value: 20 }), el.mul(vibratingFreq, el.const({ value: Math.sqrt(1 + B * 4) })));
    const inharmonicDelay = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), inharmonicFreq)));
    const d2 = fbGainForDecay(inharmonicFreq, targetDecaySeconds * 0.86);

    const loop1 = createDampedStringLoop(`${pk}:flam_s1`, baseDelaySignal, d1, stringCutoff, impulse);
    const loop2 = createDampedStringLoop(`${pk}:flam_s2`, inharmonicDelay, d2, el.mul(stringCutoff, el.const({ value: 0.93 })), impulse);
    const stringSignal = el.add(loop1, el.mul(0.25, loop2));

    // 6. Resonant Flamenco Body Corpus Modes
    // 98Hz Helmholtz air cavity, 190Hz spruce top mode, and 3.2kHz presence bite
    const airRes = el.svf({ mode: 'bandpass' }, 98, 3.0, stringSignal);
    const woodRes = el.svf({ mode: 'bandpass' }, 190, 2.6, stringSignal);
    const presenceRes = el.svf({ mode: 'bandpass' }, 3200, 1.8, stringSignal);

    const bodyOut = el.add(
      stringSignal,
      el.add(
        el.mul(0.35, airRes),
        el.add(el.mul(0.28, woodRes), el.mul(0.18, presenceRes))
      )
    );

    // 7. Low-Action Fret Buzz (Ceceo) on Aggressive Strikes
    const fretEnv = el.adsr(0.0001, 0.005, 0, 0.002, gateSignal);
    const fretBuzz = el.mul(0.06, el.mul(el.highpass(2800, 1.2, el.noise()), fretEnv));

    const finalAcoustic = el.add(bodyOut, fretBuzz);
    const filterCutoff = Math.min(19000, isMuted ? 1300 : (isTango ? tangoResponse.cutoffBase + b * tangoResponse.cutoffBrightness : (1000 + b * 6800)));
    return el.lowpass(filterCutoff, 1.05, finalAcoustic);
  }
}
