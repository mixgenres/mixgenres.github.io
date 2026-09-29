import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../generators/groove';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './types';

export default class DrumsModule implements InstrumentModule {
  id = 'drums';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      gateSignal,
      freqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 1234);
    const detuneSemitones = (randNorm(hitSeed ^ 0x1234) * 3.5) / 100;
    const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

    const instId = (params.instrumentId ?? '').toLowerCase();
    const isTangoElectronico = /tango-electronico|electrotango/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isKizomba = /kizomba|tarraxo|urbankiz|ghetto-zouk/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = /reggaeton|reggaetón|dembow|perreo|neoperreo/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const gd = ctx.genreDialect;
    const genre = gd.id;
    if (instId === 'kick' && !isKizomba && !isReggaeton && !isTangoElectronico) {
      const urban = /house|disco|electronic|drum-and-bass|uk-bass|hip-hop|industrial/.test(genre);
      const rock = /rock|metal|punk-hardcore/.test(genre);
      const latin = /salsa|timba|cumbia|bachata|afrobeats|brazilian|reggae|ska/.test(genre);
      if (urban || rock || latin) {
        const f = urban ? (genre === 'drum-and-bass' || genre === 'uk-bass' ? 58 : 52) : rock ? 66 : 62;
        const tail = urban ? (genre === 'drum-and-bass' ? 0.095 : 0.125) : rock ? 0.105 : 0.14;
        const pitchEnv = el.adsr(0.0002, urban ? 0.022 : 0.035, 0, 0.006, gateSignal);
        const sweep = el.add(1.0, el.mul(urban ? -0.28 : -0.18, pitchEnv));
        const body = el.mul(el.cycle(f), el.mul(el.adsr(0.00025, tail, 0, 0.018, gateSignal), sweep));
        const shell = el.mul((latin ? 0.22 : 0.16) * gd.body, el.svf({ mode: 'bandpass' }, f * 1.9, 2.1, body));
        const click = el.mul(0.07 * gd.transient, el.mul(el.highpass(urban ? 2600 : 1800, 1.0, el.noise()), el.adsr(0.0001, 0.005, 0, 0.002, gateSignal)));
        return el.tanh(el.mul(1.05 + params.drive * 0.6, el.add(body, el.add(shell, click))));
      }
    }
    if (instId === 'kick' && (isKizomba || isReggaeton)) {
      // Genre-specific low drum: Kizomba stays rounded and pocketed; Reggaetón
      // uses the short, forward Dembow kick with a controlled pitch fall.
      const fast = isReggaeton ? 0.028 : 0.045;
      const tail = isReggaeton ? 0.115 : 0.16;
      const pitchEnv = el.adsr(0.0003, fast, 0, 0.008, gateSignal);
      const ratio = el.add(1.0, el.mul(isReggaeton ? -0.58 : -0.38, pitchEnv));
      const body = el.mul(el.cycle(el.mul(f0, ratio)), el.adsr(0.00025, tail, 0, 0.025, gateSignal));
      const thump = el.mul(isKizomba ? 0.22 : 0.16, el.cycle(el.mul(f0, 0.5)), el.adsr(0.0005, 0.09, 0, 0.025, gateSignal));
      const click = el.mul(isReggaeton ? 0.18 : 0.10, el.mul(el.highpass(isReggaeton ? 2200 : 1500, 1.0, el.noise()), el.adsr(0.0001, 0.006, 0, 0.002, gateSignal)));
      return el.tanh(el.mul(1.25 + params.drive * 0.55, el.add(body, el.add(thump, click))));
    }
    if ((instId === 'snare' || instId === 'clap') && !isKizomba && !isReggaeton) {
      if (/house|disco/.test(genre)) {
        const body = el.mul(el.cycle(190), el.adsr(0.0002, 0.075, 0, 0.014, gateSignal));
        const noise = el.mul(0.46, el.mul(el.highpass(3000, 1.0, el.noise()), el.adsr(0.0001, 0.018, 0, 0.005, gateSignal)));
        return el.tanh(el.add(body, noise));
      }
      if (/reggae|ska/.test(genre)) {
        const body = el.mul(el.cycle(175), el.adsr(0.0003, 0.11, 0, 0.02, gateSignal));
        const noise = el.mul(0.30, el.mul(el.highpass(2500, 1.0, el.noise()), el.adsr(0.0002, 0.025, 0, 0.008, gateSignal)));
        return el.add(body, noise);
      }
      if (/metal|rock|punk-hardcore/.test(genre)) {
        const body = el.mul(el.cycle(205), el.adsr(0.00015, 0.055, 0, 0.012, gateSignal));
        const crack = el.mul(0.62, el.mul(el.highpass(3600, 1.1, el.noise()), el.adsr(0.0001, 0.018, 0, 0.005, gateSignal)));
        return el.tanh(el.mul(1.15, el.add(body, crack)));
      }
    }
    if ((instId === 'snare' || instId === 'drums') && (isKizomba || isReggaeton)) {
      const bodyFreq = isReggaeton ? 185 : 210;
      const body = el.mul(el.cycle(f0), el.adsr(0.0003, isReggaeton ? 0.065 : 0.09, 0, 0.018, gateSignal));
      const crack = el.mul(isReggaeton ? 0.55 : 0.38, el.mul(el.highpass(bodyFreq * 5, 1.0, el.noise()), el.adsr(0.0001, isReggaeton ? 0.022 : 0.03, 0, 0.009, gateSignal)));
      const ring = el.mul(isKizomba ? 0.12 : 0.08, el.mul(el.cycle(bodyFreq * 2.2), el.adsr(0.0002, 0.11, 0, 0.025, gateSignal)));
      return el.tanh(el.mul(1.1 + params.drive * 0.4, el.add(body, el.add(crack, ring))));
    }
    if (instId === 'kick' && isTangoElectronico) {
      // Electrotango kick: short, deep acoustic-style thump with a controlled
      // downward pitch sweep. It is deliberately tighter than an EDM 808 kick
      // so the bandoneón/piano articulation remains audible.
      const pitchEnv = el.adsr(0.0004, 0.055, 0, 0.006, gateSignal);
      const sweep = el.add(1.0, el.mul(-0.46, pitchEnv));
      const body = el.mul(0.90, el.mul(el.cycle(el.mul(f0, sweep)), el.adsr(0.0003, 0.14, 0, 0.028, gateSignal)));
      const click = el.mul(0.13, el.mul(el.highpass(1800, 1.1, el.noise()), el.adsr(0.0001, 0.006, 0, 0.002, gateSignal)));
      return el.tanh(el.mul(1.25 + params.drive * 0.8, el.add(body, click)));
    }
    const construction = params.bodyConstruction ?? 'wood-box';
    const isMetalShell = construction === 'metal-shell' || /timbal|metal|steel|agogo|bell|snare-metal/.test(instId);
    const isWoodBox = construction === 'wood-box' || /cajon|cajón|box|slit-drum/.test(instId);
    const isHeelToe = action === 'heel' || action === 'toe' || /heel|toe/i.test(action ?? '');

    const isLogDrum = instId.includes('log-drum');
    const isMeend = action === 'meend' || /meend/i.test(action ?? '');
    const bodyMult = 0.5 + params.body * 2.5;

    const pitchEnv = el.adsr(
      isMeend ? 0.15 : 0.001,
      isMeend ? 0.4 : (isHeelToe ? 0.02 : (0.045 + params.body * 0.02)),
      0,
      0.006,
      gateSignal
    );

    const sweepAmount = isMeend ? -0.4 : (isLogDrum ? 0.2 : (isHeelToe ? 0.8 : (isMetalShell ? 1.4 : (isWoodBox ? 2.0 : 2.6 + b * 1.0))));
    const dynamicF0 = el.mul(f0, el.add(1.0, el.mul(sweepAmount, pitchEnv)));

    const shellDecay = isHeelToe ? 0.05 : (decayTime * (0.35 + 0.5 * params.body) * (isWoodBox ? 0.75 : 1.0));
    const shellCavityDecay = isWoodBox ? shellDecay * 1.5 * bodyMult : shellDecay * 0.9 * bodyMult;
    const bodyAmpEnv = el.adsr(0.0005, shellDecay, 0, 0.03 + shellDecay * 0.1, gateSignal);
    const fundamentalCycle = el.mul(bodyAmpEnv, el.cycle(dynamicF0));

    const isRim = voice.contactPoint ? voice.contactPoint < 0.25 : false;
    const noiseTilt = 1800 + randNorm(hitSeed ^ 0x7777) * 250;
    const snapNoiseGain = isLogDrum ? 0.03 : (isHeelToe ? 0.08 : (isRim ? 0.65 : 0.25));
    const snapNoise = el.mul(
      snapNoiseGain,
      el.mul(el.highpass(noiseTilt, 1.2, el.noise()), el.adsr(0.0002, isHeelToe ? 0.005 : 0.012, 0, 0.004, gateSignal))
    );

    let metalRing: AudioSignal = el.const({ value: 0 });
    if (isMetalShell && !isHeelToe) {
      const ringDecay = shellDecay * 0.7;
      metalRing = el.mul(
        0.18,
        el.mul(
          el.add(el.cycle(el.mul(f0, 2.76)), el.mul(0.7, el.cycle(el.mul(f0, 3.41)))),
          el.adsr(0.0003, ringDecay, 0, 0.015, gateSignal)
        )
      );
    }

    const shellFreq = isWoodBox ? el.mul(f0, 0.42) : el.mul(f0, 0.58);
    const shellBurstGain = isLogDrum ? 1.4 : (isHeelToe ? 0.06 : (isWoodBox ? 0.65 * (0.3 + params.body) : 0.25));
    const shellBurst = el.mul(
      shellBurstGain,
      el.mul(
        el.svf({ mode: 'bandpass' }, shellFreq, isWoodBox ? 1.6 : 2.0, fundamentalCycle),
        el.adsr(0.001, shellCavityDecay, 0, 0.04, gateSignal)
      )
    );

    const drumSum = el.add(fundamentalCycle, el.add(snapNoise, el.add(metalRing, shellBurst)));
    return el.tanh(el.mul(el.const({ value: 1.4 + params.drive * 1.5 }), drumSum));
  }
}
