import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop.ts';

/**
 * RequintoModule
 * 
 * Physical synthesis module modeling an authentic Latin/Mexican 6-string Requinto guitar:
 * - High-tension nylon string Karplus-Strong waveguide tuned a fourth higher (A2-D3-G3-C4-E4-A4)
 * - Sharp celluloid púa (pick) excitation impulse delivering signature singing "mordiente" snap
 * - Deep 115mm wooden body acoustic filtering: 148Hz Helmholtz air cavity, 330Hz soundboard top mode, and 2.8kHz mordiente presence
 * - Authentic Latin/Trio Romántico techniques: fast picado scale runs, tremolo falsetas, alzapúa thumb sweeps, and apagado muted chops
 */
export default class RequintoModule implements InstrumentModule {
  id = 'requinto';

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

    const noteSeed = seedOf(trackId, voiceIndex, 4040);

    // 1. Percussive Golpe Tap
    if (action === 'golpe' || action === 'tap' || action === 'golpe-caja') {
      const bodyPunch = el.mul(el.cycle(120), el.adsr(0.0004, 0.022, 0, 0.008, gateSignal));
      const woodClick = el.mul(el.highpass(1800, 1.3, el.noise()), el.adsr(0.0002, 0.007, 0, 0.003, gateSignal));
      return el.add(el.mul(0.72, bodyPunch), el.mul(0.38, woodClick));
    }

    // 2. Articulation Recognition
    const isRasgueado = action === 'abanico' || action === 'rasgueado';
    const isAlzapua = action === 'alzapua' || action === 'alzapúa';
    const isPicado = action === 'picado' || action === 'pick' || action === 'apoyando' || action === 'accent';
    const isMuted = action === 'palm-mute' || action === 'apagado' || action === 'mute' || params.mute > 0.35;
    const isHarmonic = action === 'harmonic' || /harmonic/i.test(action ?? '');
    const isTremolo = action === 'tremolo' || /tremolo|rapid-run/i.test(action ?? '');
    const isLegato = action === 'legato' || action === 'slur' || action === 'hammer-on' || action === 'pull-off';

    // 3. Pitch Dynamics & Singing Vibrato
    // Expressive high-register vibrato characteristic of romantic bolero requinto solos
    const baseVibSpeed = 5.8 + randNorm(noteSeed ^ 0x61) * 0.15;
    const vibOnset = el.adsr(isLegato ? 0.10 : 0.18, 0.08, 1.0, 0.05, gateSignal);
    const vibLfo = el.cycle(baseVibSpeed);
    const vibratoDepth = (!isMuted && !isRasgueado)
      ? el.mul(el.const({ value: 0.014 * (params.resonance + 0.3) }), vibOnset)
      : el.const({ value: 0 });
    
    // Natural harmonic node doubling pitch
    const pitchRatio = isHarmonic ? 2.0 : 1.0;
    const baseFreq = el.mul(safeFreqSignal, el.const({ value: pitchRatio }));
    const vibratingFreq = el.mul(baseFreq, el.add(1.0, el.mul(vibratoDepth, vibLfo)));

    // 4. Púa (Pick) & Excitation Impulse Modeling
    // High-tension nylon produces a bright, sharp attack transient
    const broadbandPluck = el.lowpass(el.mul(vibratingFreq, 4.5), 0.9, el.pinknoise());
    let impulse: AudioSignal;

    if (isRasgueado) {
      // 5-finger rapid strum fan
      const bursts = Array.from({ length: 5 }, (_, i) =>
        el.adsr(0.0002 + i * 0.0028, 0.0048, 0, 0.002, gateSignal)
      );
      const rasgNoise = el.add(el.mul(0.65, broadbandPluck), el.mul(0.35, el.svf({ mode: 'bandpass' }, 2600, 1.4, el.noise())));
      impulse = el.mul(rasgNoise, bursts.reduce((acc, bst) => el.add(acc, bst), el.const({ value: 0 })));
    } else if (isAlzapua) {
      // Heavy thumb sweep impulse with low-mid body punch
      const burst1 = el.adsr(0.0002, 0.005, 0, 0.002, gateSignal);
      const burst2 = el.adsr(0.004, 0.006, 0, 0.002, gateSignal);
      const alzapuaNoise = el.add(
        el.mul(0.60, broadbandPluck),
        el.mul(0.40, el.svf({ mode: 'bandpass' }, 1400, 1.5, el.noise()))
      );
      impulse = el.mul(alzapuaNoise, el.add(burst1, el.mul(0.8, burst2)));
    } else if (isTremolo) {
      // Fast tremolo picking repeats
      const tremBurst = el.adsr(0.0001, 0.0035, 0, 0.0015, gateSignal);
      const tremClick = el.svf({ mode: 'bandpass' }, 2900, 1.8, el.noise());
      impulse = el.mul(el.add(el.mul(0.65, broadbandPluck), el.mul(0.60, tremClick)), tremBurst);
    } else if (isPicado) {
      // Celluloid púa picado attack (sharp transient click at 2.8kHz + pluck noise)
      const puaBurst = el.adsr(0.0001, 0.0032, 0, 0.0015, gateSignal);
      const puaClick = el.svf({ mode: 'bandpass' }, 2800, 1.8, el.noise());
      impulse = el.mul(el.add(el.mul(0.65, broadbandPluck), el.mul(0.55, puaClick)), puaBurst);
    } else {
      // Fingerstyle / tirando stroke
      const fingerBurst = el.adsr(0.0004, 0.0065, 0, 0.003, gateSignal);
      impulse = el.mul(broadbandPluck, fingerBurst);
    }

    // Plectrum release scrape/choke
    const puaChoke = el.mul(
      -0.20,
      el.mul(el.svf({ mode: 'bandpass' }, 1600, 1.6, el.noise()), el.adsr(0.0001, 0.002, 0, 0.001, gateSignal))
    );
    impulse = el.add(impulse, puaChoke);

    // 5. High-Tension Nylon Waveguide & Karplus-Strong Loop
    const baseDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), vibratingFreq)));
    // Shorter scale length and high tension create a brighter cutoff and punchier initial decay
    const cutoffMult = isMuted ? 1.8 : (isHarmonic ? 7.5 : (3.6 + b * 6.2));
    const stringCutoff = el.min(
      el.const({ value: 19000 }),
      el.max(el.const({ value: 1200 }), el.mul(vibratingFreq, el.const({ value: cutoffMult })))
    );

    // Requinto decay time (punchier and shorter than full classical guitar)
    const baseDecaySec = isMuted ? 0.08 : (isHarmonic ? 1.8 : (0.28 + decayTime * (0.50 + b * 1.2)));
    const d1 = fbGainForDecay(vibratingFreq, baseDecaySec);

    // Inharmonicity on high-tension nylon strings
    const B = 0.00018;
    const inharmonicFreq = el.max(el.const({ value: 20 }), el.mul(vibratingFreq, el.const({ value: Math.sqrt(1 + B * 4) })));
    const inharmonicDelay = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), inharmonicFreq)));
    const d2 = fbGainForDecay(inharmonicFreq, baseDecaySec * 0.88);

    const loop1 = createDampedStringLoop(`${pk}:req_s1`, baseDelaySignal, d1, stringCutoff, impulse);
    const loop2 = createDampedStringLoop(`${pk}:req_s2`, inharmonicDelay, d2, el.mul(stringCutoff, el.const({ value: 0.94 })), impulse);
    const stringSignal = el.add(loop1, el.mul(0.28, loop2));

    // 6. Deep Wooden Body Acoustic Formants
    // 148Hz Helmholtz air cavity, 330Hz solid spruce soundboard, and 2.8kHz mordiente presence
    const airRes = el.svf({ mode: 'bandpass' }, 148, 3.2, stringSignal);
    const woodRes = el.svf({ mode: 'bandpass' }, 330, 2.8, stringSignal);
    const mordienteRes = el.svf({ mode: 'bandpass' }, 2800, 2.2, stringSignal);

    const bodyOut = el.add(
      stringSignal,
      el.add(
        el.mul(0.38, airRes),
        el.add(el.mul(0.32, woodRes), el.mul(0.24, mordienteRes))
      )
    );

    // 7. Fret & Púa Collision Transient on Attack
    const collisionEnv = el.adsr(0.0001, 0.004, 0, 0.0015, gateSignal);
    const fretClick = el.mul(0.08, el.mul(el.highpass(3100, 1.2, el.noise()), collisionEnv));

    const finalAcoustic = el.add(bodyOut, fretClick);
    const masterCutoff = Math.min(19000, isMuted ? 1400 : (1200 + b * 7200));
    return el.lowpass(masterCutoff, 1.05, finalAcoustic);
  }
}
