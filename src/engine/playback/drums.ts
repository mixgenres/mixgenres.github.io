import { TANGO_ELECTRONIC_DRUM_RESPONSE, URBAN_LATIN_DRUM_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { DRUM_COMPONENT_PATTERNS, METAL_SHELL_INSTRUMENT_PATTERN, WOOD_BOX_INSTRUMENT_PATTERN } from '../../data/instruments/idClassifiers';
import { DRUM_HEAVY_ROCK_PATTERN, DRUM_KICK_GENRE_TUNING, DRUM_LATIN_PATTERN, DRUM_REGGAE_SKA_PATTERN, DRUM_ROCK_PATTERN, DRUM_URBAN_PATTERN } from '../../data/sound/dsp/genrePlaybackProfiles';
import { HOUSE_DISCO_PATTERN, KIZOMBA_PATTERN, REGGAETON_PATTERN, TANGO_ELECTRONICO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import { seedOf, randNorm } from '../sheet/random.ts';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { resolveInstrumentKitComponent } from '../../engine/lookup/instrument-components';

export default class DrumsModule implements InstrumentModule {
  id = 'drums';
  specializedInstrumentIds = ['congas', 'bongos', 'timbales'];

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      trackId,
      voiceIndex,
      voice,
      params,
      gateSignal,
      velSignal,
      freqSignal,
      b,
      decayTime,
      action
    } = ctx;

    const hitSeed = seedOf(trackId, voiceIndex, 1234);
    const detuneSemitones = (randNorm(hitSeed ^ 0x1234) * 3.5) / 100;
    const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

    const instId = (params.instrumentId ?? '').toLowerCase();
    const isTangoElectronico = TANGO_ELECTRONICO_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = REGGAETON_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const gd = ctx.genreDialect;
    const genre = gd.id;
    const component = resolveInstrumentKitComponent(instId, voice.note, `${action} ${voice.action ?? ''}`);
    const componentGain = Math.pow(10, (component?.gainTrimDb ?? 0) / 20);
    const applyComponentGain = (signal: ReturnType<typeof el.tanh>) => el.mul(componentGain, signal);

    // A real kit is a collection of physically different sources. The compiler
    // carries the GM/component MIDI identity into the voice; do not collapse the
    // kit back into one generic membrane after that point.
    if (instId === 'drums' || instId === 'brush-kit') {
      if (component) {
        const f = Math.max(35, component.tuningHz ?? 60);
        const componentEnv = el.adsr(0.00015, Math.max(0.008, component.decayTimeSec ?? decayTime), 0, Math.min(0.08, Math.max(0.003, (component.decayTimeSec ?? decayTime) * 0.12)), gateSignal);
        const velocity = el.mul(componentGain, el.add(0.58, el.mul(0.52, velSignal)));
        const id = component.id;
        const isKick = id === 'kick';
        const isSnare = id.startsWith('snare-');
        const isHat = id.startsWith('hihat-');
        const isTom = id.startsWith('tom-');
        const isCymbal = DRUM_COMPONENT_PATTERNS.cymbal.test(id);

        if (isKick) {
          const sweep = el.add(1, el.mul(-0.22, el.adsr(0.0002, 0.025, 0, 0.004, gateSignal)));
          const body = el.mul(el.cycle(el.mul(f, sweep)), componentEnv);
          const sub = el.mul(0.34, el.mul(el.cycle(f * 0.5), componentEnv));
          const beater = el.mul(0.10, el.mul(el.highpass(2200, 1.0, el.noise()), el.adsr(0.00005, 0.004, 0, 0.002, gateSignal)));
          return el.mul(velocity, el.tanh(el.mul(1.05, el.add(body, el.add(sub, beater)))));
        }

        if (isSnare) {
          const rim = id === 'snare-rimshot' || DRUM_COMPONENT_PATTERNS.rimshot.test(action);
          const cross = id === 'snare-cross-stick';
          const ghost = id === 'snare-ghost';
          const body = el.mul(cross ? 0.16 : ghost ? 0.34 : 0.58, el.mul(el.add(el.cycle(f), el.mul(0.32, el.cycle(f * 1.9))), componentEnv));
          const wire = el.mul(rim ? 0.66 : cross ? 0.12 : ghost ? 0.28 : 0.52, el.mul(el.highpass(rim ? 3000 : 1800, 1.0, el.pinknoise()), componentEnv));
          const rimClick = el.mul(rim || cross ? 0.42 : 0.08, el.mul(el.highpass(4200, 1.0, el.noise()), el.adsr(0.00005, 0.006, 0, 0.002, gateSignal)));
          return el.mul(velocity, el.tanh(el.mul(1.12, el.add(body, el.add(wire, rimClick)))));
        }

        if (isHat) {
          const pedal = id === 'hihat-pedal';
          const open = id === 'hihat-open';
          const duration = open ? 1.05 : pedal ? 0.06 : 0.075;
          const env = el.adsr(0.00004, duration, 0, 0.012, gateSignal);
          const metal = el.add(
            el.mul(0.72, el.highpass(open ? 4200 : 5200, 0.7, el.pinknoise())),
            el.mul(0.22, el.cycle(f)),
            el.mul(0.12, el.cycle(f * 1.73)),
          );
          const chick = el.mul(pedal ? 0.42 : 0.10, el.mul(el.highpass(3200, 1.0, el.noise()), el.adsr(0.00003, 0.004, 0, 0.0015, gateSignal)));
          return el.mul(velocity, el.mul(env, el.tanh(el.mul(open ? 0.82 : 0.95, el.add(metal, chick)))));
        }

        if (isTom) {
          const pitch = el.add(1, el.mul(-0.035, el.adsr(0.00015, 0.035, 0, 0.006, gateSignal)));
          const modal = el.add(el.cycle(el.mul(f, pitch)), el.mul(0.34, el.cycle(el.mul(f, 1.62))), el.mul(0.16, el.cycle(el.mul(f, 2.43))));
          const attack = el.mul(0.08, el.mul(el.highpass(1800, 1.0, el.noise()), el.adsr(0.00005, 0.006, 0, 0.002, gateSignal)));
          return el.mul(velocity, el.tanh(el.mul(1.0, el.add(el.mul(0.82, el.mul(modal, componentEnv)), attack))));
        }

        if (isCymbal || id === 'ride-edge' || id === 'cowbell' || id === 'tambourine') {
          const env = el.adsr(0.00003, Math.max(0.05, component.decayTimeSec ?? 1), 0, 0.025, gateSignal);
          const high = el.highpass(isCymbal ? 2600 : 1800, 0.65, el.pinknoise());
          const modes = el.add(el.mul(0.34, el.cycle(f)), el.mul(0.19, el.cycle(f * 1.41)), el.mul(0.11, el.cycle(f * 1.87)), el.mul(0.07, el.cycle(f * 2.67)));
          return el.mul(velocity, el.tanh(el.mul(isCymbal ? 0.72 : 0.9, el.mul(env, el.add(high, modes)))));
        }
      }
    }

    if (component && instId === 'tabla') {
      const id = component.id.toLowerCase();
      const isBayan = id.startsWith('bayan-');
      const isMeend = id === 'bayan-meend' || action === 'meend';
      const isMuted = component.strikeZones?.includes('closed') || DRUM_COMPONENT_PATTERNS.muted.test(id) || action === 'mute';
      const fundamental = Math.max(35, component.tuningHz ?? (isBayan ? 110 : 240));
      const decay = Math.max(0.025, component.decayTimeSec ?? (isMuted ? 0.08 : 0.8));
      const envelope = el.adsr(0.0002, decay, 0, Math.min(0.06, Math.max(0.006, decay * 0.12)), gateSignal);
      const meendEnv = isMeend ? el.adsr(0.025, 0.24, 0, 0.03, gateSignal) : el.const({ value: 0 });
      const pitch = isMeend ? el.mul(fundamental, el.add(1, el.mul(0.26, meendEnv))) : fundamental;
      const tone = isBayan
        ? el.add(el.cycle(pitch), el.mul(0.36, el.cycle(el.mul(pitch, 1.48))), el.mul(0.14, el.cycle(el.mul(pitch, 2.34))))
        : el.add(el.cycle(pitch), el.mul(0.52, el.cycle(el.mul(pitch, 2))), el.mul(0.24, el.cycle(el.mul(pitch, 3))), el.mul(0.10, el.cycle(el.mul(pitch, 4))));
      const attack = el.mul(isMuted ? 0.20 : 0.10, el.mul(el.highpass(isMuted ? 2600 : 1800, 1.0, el.noise()), el.adsr(0.0001, isMuted ? 0.006 : 0.012, 0, 0.003, gateSignal)));
      const body = isBayan ? el.mul(0.24, el.mul(el.cycle(fundamental * 0.52), envelope)) : 0;
      return applyComponentGain(el.tanh(el.mul(0.78 + params.drive * 0.22, el.add(el.mul(envelope, tone), el.add(attack, body)))));
    }

    if (component && instId === 'bata') {
      const id = component.id.toLowerCase();
      const isSmallHead = DRUM_COMPONENT_PATTERNS.smallHead.test(id);
      const fundamental = Math.max(45, component.tuningHz ?? 150);
      const decay = Math.max(0.025, component.decayTimeSec ?? 0.3);
      const envelope = el.adsr(0.00025, decay, 0, Math.min(0.05, Math.max(0.006, decay * 0.12)), gateSignal);
      const pitchDrop = el.adsr(0.0002, isSmallHead ? 0.012 : 0.025, 0, 0.005, gateSignal);
      const pitch = el.mul(fundamental, el.add(1, el.mul(-0.045, pitchDrop)));
      const head = el.add(el.cycle(pitch), el.mul(isSmallHead ? 0.25 : 0.42, el.cycle(el.mul(pitch, 1.72))), el.mul(0.13, el.cycle(el.mul(pitch, 2.63))));
      const shell = el.mul(isSmallHead ? 0.08 : 0.22, el.mul(el.cycle(fundamental * 0.56), envelope));
      const hand = el.mul(isSmallHead ? 0.34 : 0.16, el.mul(el.highpass(isSmallHead ? 2400 : 1500, 1.0, el.noise()), el.adsr(0.00012, isSmallHead ? 0.008 : 0.014, 0, 0.004, gateSignal)));
      return applyComponentGain(el.tanh(el.mul(0.82 + params.drive * 0.18, el.add(el.mul(envelope, head), el.add(shell, hand)))));
    }

    // Instrument-specific membrane models. These are deliberately resolved by
    // authored instrument identity rather than by a generic 'drum' preset: a
    // conga, bongo and timbale have materially different membrane/body behavior.
    if (instId === 'congas') {
      const componentId = component?.id.toLowerCase() ?? '';
      const open = DRUM_COMPONENT_PATTERNS.open.test(componentId) || action === 'conga-open' || action === 'open' || action === 'tumba-open' || action === 'tone';
      const slap = DRUM_COMPONENT_PATTERNS.slap.test(componentId) || action === 'quinto-slap' || action === 'slap' || action === 'slap-tapao';
      const muted = DRUM_COMPONENT_PATTERNS.mutedTouch.test(componentId) || action === 'mute' || action === 'muted';
      const fundamental = component?.tuningHz ?? el.max(el.const({ value: 95 }), f0);
      const componentDecay = component?.decayTimeSec ?? (open ? 0.55 : 0.15);
      const componentDamping = component?.damping ?? (muted ? 0.82 : 0.25);
      const membraneEnv = el.adsr(0.0002, Math.max(0.025, componentDecay * (1 - componentDamping * 0.65)), 0, 0.012, gateSignal);
      const pitchEnv = el.adsr(0.00025, slap ? 0.018 : 0.045, 0, 0.018, gateSignal);
      const pitchRatio = el.add(1, el.mul(slap ? -0.08 : muted ? 0.02 : -0.035, pitchEnv));
      const membrane = el.mul(
        open ? 0.78 : slap ? 0.92 : 0.48,
        el.mul(membraneEnv, el.add(
          el.cycle(el.mul(fundamental, pitchRatio)),
          el.mul(0.46, el.cycle(el.mul(fundamental, 1.47))),
          el.mul(0.22, el.cycle(el.mul(fundamental, 2.21))),
        )),
      );
      const handAttack = el.mul(
        slap ? 0.52 : 0.16,
        el.mul(el.highpass(slap ? 2200 : 1300, 1.0, el.noise()), el.adsr(0.00015, slap ? 0.009 : 0.014, 0, 0.004, gateSignal)),
      );
      const shellResonance = component?.shellResonance ?? 0.5;
      const shell = el.mul(0.20 * shellResonance * (0.5 + params.body), el.mul(el.cycle(el.mul(fundamental, 0.58)), el.adsr(0.0004, Math.max(0.04, componentDecay * 0.42), 0, 0.025, gateSignal)));
      const damped = muted ? el.mul(0.42, membrane) : membrane;
      return applyComponentGain(el.tanh(el.mul(1.15 + params.drive * 0.35, el.add(damped, el.add(handAttack, shell)))));
    }

    if (instId === 'bongos') {
      const componentId = component?.id.toLowerCase() ?? '';
      const slap = componentId === 'macho-slap' || action === 'macho-slap' || action === 'slap';
      const tap = componentId === 'macho-finger-tap' || componentId === 'macho-thumb' || action === 'macho-tap' || action === 'tap';
      const base = component?.tuningHz ?? el.max(el.const({ value: 180 }), f0);
      const decay = component?.decayTimeSec ?? (slap ? 0.08 : 0.35);
      const damping = component?.damping ?? (slap || tap ? 0.82 : 0.3);
      const env = el.adsr(0.0002, Math.max(0.018, decay * (1 - damping * 0.45)), 0, 0.014, gateSignal);
      const body = el.mul(slap ? 0.72 : 0.84, el.mul(el.add(el.cycle(base), el.mul(0.38, el.cycle(el.mul(base, 1.72)))), env));
      const attack = el.mul(
        slap ? 0.62 : tap ? 0.28 : 0.14,
        el.mul(el.highpass(slap ? 3000 : 1800, 1.1, el.noise()), el.adsr(0.00012, 0.008, 0, 0.003, gateSignal)),
      );
      return applyComponentGain(el.tanh(el.mul(1.15, el.add(body, attack))));
    }

    if (instId === 'timbales') {
      const componentId = component?.id.toLowerCase() ?? '';
      const isBell = DRUM_COMPONENT_PATTERNS.bell.test(componentId);
      const rim = componentId === 'cascara' || action === 'rim' || action === 'chapa' || action === 'strappata';
      const f = component?.tuningHz ?? el.max(el.const({ value: 180 }), f0);
      const decay = component?.decayTimeSec ?? (rim ? 0.08 : 0.45);
      const env = el.adsr(0.00015, Math.max(0.018, decay * (1 - (component?.damping ?? 0.3) * 0.35)), 0, 0.02, gateSignal);
      if (isBell) {
        const bell = el.add(
          el.mul(0.48, el.cycle(f)),
          el.mul(0.28, el.cycle(el.mul(f, 1.47))),
          el.mul(0.18, el.cycle(el.mul(f, 2.13))),
          el.mul(0.12, el.cycle(el.mul(f, 2.76))),
          el.mul(0.08, el.cycle(el.mul(f, 3.91))),
        );
        const strike = el.mul(0.22, el.mul(el.highpass(3200, 1.2, el.noise()), el.adsr(0.00008, 0.006, 0, 0.003, gateSignal)));
        return applyComponentGain(el.tanh(el.mul(env, el.add(bell, strike))));
      }
      const head = el.mul(0.66, el.mul(el.add(el.cycle(f), el.mul(0.52, el.cycle(el.mul(f, 2.76)))), env));
      const shell = el.mul(0.28, el.mul(el.add(el.cycle(el.mul(f, 3.41)), el.cycle(el.mul(f, 4.67))), env));
      const rimClick = el.mul(
        rim ? 0.82 : 0.22,
        el.mul(el.highpass(rim ? 3600 : 2400, 1.15, el.noise()), el.adsr(0.00008, 0.006, 0, 0.003, gateSignal)),
      );
      return applyComponentGain(el.tanh(el.mul(1.18 + params.drive * 0.3, el.add(head, el.add(shell, rimClick)))));
    }
    if (instId === 'kick' && !isKizomba && !isReggaeton && !isTangoElectronico) {
      const urban = DRUM_URBAN_PATTERN.test(genre);
      const rock = DRUM_ROCK_PATTERN.test(genre);
      const latin = DRUM_LATIN_PATTERN.test(genre);
      if (urban || rock || latin) {
        const kickTuning = DRUM_KICK_GENRE_TUNING[genre];
        const f = urban ? (kickTuning ? kickTuning.frequency : 52) : rock ? 66 : 62;
        const tail = urban ? (kickTuning?.tail ?? 0.125) : rock ? 0.105 : 0.14;
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
      const kickResponse = isReggaeton ? URBAN_LATIN_DRUM_RESPONSE.kick.reggaeton : URBAN_LATIN_DRUM_RESPONSE.kick.kizomba;
      const fast = kickResponse.fast;
      const tail = kickResponse.tail;
      const pitchEnv = el.adsr(0.0003, fast, 0, 0.008, gateSignal);
      const ratio = el.add(1.0, el.mul(kickResponse.pitchFall, pitchEnv));
      const body = el.mul(el.cycle(el.mul(f0, ratio)), el.adsr(0.00025, tail, 0, 0.025, gateSignal));
      const thump = el.mul(isKizomba ? URBAN_LATIN_DRUM_RESPONSE.kick.thumpKizomba : URBAN_LATIN_DRUM_RESPONSE.kick.thumpDefault, el.cycle(el.mul(f0, 0.5)), el.adsr(0.0005, 0.09, 0, 0.025, gateSignal));
      const click = el.mul(kickResponse.click, el.mul(el.highpass(kickResponse.clickCutoff, 1.0, el.noise()), el.adsr(0.0001, 0.006, 0, 0.002, gateSignal)));
      return el.tanh(el.mul(1.25 + params.drive * 0.55, el.add(body, el.add(thump, click))));
    }
    if ((instId === 'snare' || instId === 'clap') && !isKizomba && !isReggaeton) {
      if (HOUSE_DISCO_PATTERN.test(genre)) {
        const body = el.mul(el.cycle(190), el.adsr(0.0002, 0.075, 0, 0.014, gateSignal));
        const noise = el.mul(0.46, el.mul(el.highpass(3000, 1.0, el.noise()), el.adsr(0.0001, 0.018, 0, 0.005, gateSignal)));
        return el.tanh(el.add(body, noise));
      }
      if (DRUM_REGGAE_SKA_PATTERN.test(genre)) {
        const body = el.mul(el.cycle(175), el.adsr(0.0003, 0.11, 0, 0.02, gateSignal));
        const noise = el.mul(0.30, el.mul(el.highpass(2500, 1.0, el.noise()), el.adsr(0.0002, 0.025, 0, 0.008, gateSignal)));
        return el.add(body, noise);
      }
      if (DRUM_HEAVY_ROCK_PATTERN.test(genre)) {
        const body = el.mul(el.cycle(205), el.adsr(0.00015, 0.055, 0, 0.012, gateSignal));
        const crack = el.mul(0.62, el.mul(el.highpass(3600, 1.1, el.noise()), el.adsr(0.0001, 0.018, 0, 0.005, gateSignal)));
        return el.tanh(el.mul(1.15, el.add(body, crack)));
      }
    }
    if ((instId === 'snare' || instId === 'drums') && (isKizomba || isReggaeton)) {
      const snareResponse = isReggaeton ? URBAN_LATIN_DRUM_RESPONSE.snare.reggaeton : URBAN_LATIN_DRUM_RESPONSE.snare.kizomba;
      const bodyFreq = snareResponse.bodyFrequency;
      const body = el.mul(el.cycle(f0), el.adsr(0.0003, snareResponse.decay, 0, 0.018, gateSignal));
      const crack = el.mul(snareResponse.crack, el.mul(el.highpass(bodyFreq * 5, 1.0, el.noise()), el.adsr(0.0001, snareResponse.crackDecay, 0, 0.009, gateSignal)));
      const ring = el.mul(isKizomba ? URBAN_LATIN_DRUM_RESPONSE.snare.ringKizomba : URBAN_LATIN_DRUM_RESPONSE.snare.ringDefault, el.mul(el.cycle(bodyFreq * 2.2), el.adsr(0.0002, 0.11, 0, 0.025, gateSignal)));
      return el.tanh(el.mul(1.1 + params.drive * 0.4, el.add(body, el.add(crack, ring))));
    }
    if (instId === 'kick' && isTangoElectronico) {
      // Electrotango kick: short, deep acoustic-style thump with a controlled
      // downward pitch sweep. It is deliberately tighter than an EDM 808 kick
      // so the bandoneón/piano articulation remains audible.
      const response = TANGO_ELECTRONIC_DRUM_RESPONSE;
      const pitchEnv = el.adsr(0.0004, response.pitchAttack, 0, 0.006, gateSignal);
      const sweep = el.add(1.0, el.mul(response.pitchFall, pitchEnv));
      const body = el.mul(response.bodyGain, el.mul(el.cycle(el.mul(f0, sweep)), el.adsr(0.0003, response.bodyDecay, 0, 0.028, gateSignal)));
      const click = el.mul(response.clickGain, el.mul(el.highpass(response.clickFrequency, 1.1, el.noise()), el.adsr(0.0001, 0.006, 0, 0.002, gateSignal)));
      return el.tanh(el.mul(response.drive + params.drive * response.driveMultiplier, el.add(body, click)));
    }
    const construction = params.bodyConstruction ?? 'wood-box';
    const isMetalShell = construction === 'metal-shell' || METAL_SHELL_INSTRUMENT_PATTERN.test(instId);
    const isWoodBox = construction === 'wood-box' || WOOD_BOX_INSTRUMENT_PATTERN.test(instId);
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
