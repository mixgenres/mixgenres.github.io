import { SYNTH_GENRE_RESPONSE, URBAN_LATIN_INSTRUMENT_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { DNB_UKBASS_PATTERN, HOUSE_DISCO_PATTERN, INDUSTRIAL_DNB_PATTERN, KIZOMBA_PATTERN, REGGAETON_PATTERN, SYNTH_ELECTRONIC_GENRE_PATTERN, SYNTH_LOW_CUTOFF_GENRE_PATTERN, TANGO_ELECTRONICO_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from './dsp';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class SynthModule implements InstrumentModule {
  id = 'synth';
  releaseTailSeconds(params: VoiceRenderContext['params']): number {
    return params.synthPatch?.releaseSeconds ?? .5;
  }

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      params,
      gateSignal,
      freqSignal,
      b
    } = ctx;

    const patch = params.synthPatch;
    if (patch) {
      const oscillatorAt = (frequency: AudioSignal): AudioSignal => {
      const phase = el.syncphasor(frequency, gateSignal);
      const sine = el.sin(el.mul(2 * Math.PI, phase));
      const saw = el.blepsaw(frequency);
      const square = el.tanh(el.mul(7, sine));
      const sub = el.sin(el.mul(2 * Math.PI, el.syncphasor(el.mul(frequency, 0.5), gateSignal)));
      return patch.oscillator === 'saw' ? saw
        : patch.oscillator === 'square' ? square
        : patch.oscillator === 'sine' ? sine
        : patch.oscillator === 'triangle' ? el.sub(el.mul(2, el.abs(el.sub(el.mul(2, phase), 1))), 1)
        : patch.oscillator === 'noise' ? el.noise()
        : el.add(el.mul(0.55, saw), el.add(el.mul(0.25, square), el.mul(0.2, sub)));
      };
      // Unison retains the selected waveform; a sine pad must not acquire a
      // sawtooth merely because its patch asks for multiple detuned voices.
      const count = Math.max(1, Math.min(8, Math.round(patch.unison ?? 1)));
      const oscillators = Array.from({ length: count }, (_, i) => oscillatorAt(
        el.mul(freqSignal, Math.pow(2, (i - (count - 1) / 2) * 4 / 1200))));
      const oscillator = el.mul(1 / count, el.add(...oscillators));
      const envelope = el.adsr(patch.attackSeconds, patch.decaySeconds, patch.sustain, patch.releaseSeconds, gateSignal);
      const mode = patch.filter === 'ladder' ? 'lowpass' : patch.filter;
      const filtered = el.svf({ mode }, patch.cutoffHz + b * Math.max(250, patch.cutoffHz * 0.75), 0.7 + patch.resonance * 5, oscillator);
      const texture = patch.noise ? el.mul(patch.noise, el.highpass(1600, 0.8, el.noise())) : el.const({ value: 0 });
      const driven = patch.saturation ? el.tanh(el.mul(1 + patch.saturation * 8, el.add(filtered, texture))) : el.add(filtered, texture);
      return el.mul(envelope, driven);
    }

    const instId = (params.instrumentId ?? '').toLowerCase();
    const isTangoSampler = instId === 'sampler' && TANGO_ELECTRONICO_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const urbanSynthResponse = isKizomba ? URBAN_LATIN_INSTRUMENT_RESPONSE.synth.kizomba : URBAN_LATIN_INSTRUMENT_RESPONSE.synth.reggaeton;
    const isReggaeton = REGGAETON_PATTERN.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const gd = ctx.genreDialect;
    const genre = gd.id;
    if (isKizomba || isReggaeton) {
      const p1 = el.syncphasor(freqSignal, gateSignal);
      const p2 = el.syncphasor(el.mul(freqSignal, urbanSynthResponse.detune), gateSignal);
      const sine = el.sin(el.mul(2 * Math.PI, p1));
      const softSaw = el.tanh(el.mul(urbanSynthResponse.drive, el.sub(el.mul(2, p2), 1)));
      const sub = el.sin(el.mul(2 * Math.PI, el.syncphasor(el.mul(freqSignal, 0.5), gateSignal)));
      const attack = el.adsr(0.002, urbanSynthResponse.attack, urbanSynthResponse.sustain, 0.045, gateSignal);
      const cutoff = urbanSynthResponse.cutoffBase + b * urbanSynthResponse.cutoffBrightness;
      const body = el.add(el.mul(urbanSynthResponse.sine, sine), el.add(el.mul(urbanSynthResponse.saw, softSaw), el.mul(urbanSynthResponse.sub, sub)));
      const filtered = el.svf({ mode: 'lowpass' }, cutoff, 1.2 + params.resonance * 2.0, body);
      const air = el.mul(urbanSynthResponse.air, el.mul(el.highpass(urbanSynthResponse.airHighpass, 0.8, el.noise()), el.adsr(0.001, 0.012, 0, 0.004, gateSignal)));
      return el.mul(attack, el.add(filtered, air));
    }
    if (!isKizomba && !isReggaeton && SYNTH_ELECTRONIC_GENRE_PATTERN.test(genre)) {
      const p = el.syncphasor(freqSignal, gateSignal);
      const sub = el.sin(el.mul(2 * Math.PI, el.syncphasor(el.mul(freqSignal, 0.5), gateSignal)));
      const saw = el.tanh(el.mul(INDUSTRIAL_DNB_PATTERN.test(genre) ? SYNTH_GENRE_RESPONSE.industrialDrive : SYNTH_GENRE_RESPONSE.defaultDrive, el.sub(el.mul(2, p), 1)));
      const env = el.adsr(0.001, DNB_UKBASS_PATTERN.test(genre) ? SYNTH_GENRE_RESPONSE.drumAndBassAttack : SYNTH_GENRE_RESPONSE.defaultAttack, HOUSE_DISCO_PATTERN.test(genre) ? SYNTH_GENRE_RESPONSE.houseDiscoSustain : SYNTH_GENRE_RESPONSE.defaultSustain, 0.03, gateSignal);
      const cut = (SYNTH_LOW_CUTOFF_GENRE_PATTERN.test(genre) ? SYNTH_GENRE_RESPONSE.lowCutoff : SYNTH_GENRE_RESPONSE.defaultCutoff) + b * SYNTH_GENRE_RESPONSE.brightnessScale * gd.brightness;
      const body = el.add(el.mul(0.52, saw), el.mul(0.48 * gd.lowEnd, sub));
      return el.mul(env, el.svf({ mode: 'lowpass' }, cut, 1.1 + params.resonance * 2.4, body));
    }

    if (isTangoSampler) {
      // Sample-like electrotango texture without pretending a generic synth is
      // an acoustic instrument: short dusty attack, band-limited body and a
      // restrained pitched tail.
      const p = el.syncphasor(freqSignal, gateSignal);
      const tone = el.blepsaw(freqSignal);
      const dust = el.highpass(2400, 0.8, el.pinknoise());
      const attack = el.adsr(0.0002, 0.018, 0, 0.006, gateSignal);
      const tail = el.adsr(0.004, 0.08, 0.42, 0.025, gateSignal);
      const dusty = el.mul(0.12, el.mul(dust, attack));
      return el.lowpass(5200 + b * 2200, 1.1, el.add(el.mul(0.72, tone), el.add(el.mul(0.22, el.sin(el.mul(2 * Math.PI, p))), dusty), el.mul(0.04, tail)));
    }

    const p1 = el.syncphasor(freqSignal, gateSignal);
    const p2 = el.syncphasor(el.mul(freqSignal, 1.004), gateSignal);
    const sawResettable = el.sub(el.mul(2.0, p1), 1.0);
    const squareResettable = el.tanh(el.mul(8.0, el.sin(el.mul(2 * Math.PI, p2))));
    const subSine = el.sin(el.mul(2 * Math.PI, p1));
    const sig = el.add(el.mul(0.35, sawResettable), el.add(el.mul(0.35, squareResettable), el.mul(0.30, subSine)));
    
    const cut = 300 + b * 7500;
    const q = 1 + params.resonance * 4;
    
    return el.svf({ mode: 'lowpass' }, cut, q, sig);
  }
}
