import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule } from './types';

export default class SynthModule implements InstrumentModule {
  id = 'synth';

  renderVoice(ctx: VoiceRenderContext): any {
    const {
      params,
      gateSignal,
      freqSignal,
      b
    } = ctx;

    const instId = (params.instrumentId ?? '').toLowerCase();
    const isTangoSampler = instId === 'sampler' && /tango-electronico|electrotango/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isKizomba = /kizomba|tarraxo|urbankiz|ghetto-zouk/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const isReggaeton = /reggaeton|reggaetón|dembow|perreo|neoperreo/i.test(`${params.genreId ?? ''} ${params.dialect ?? ''}`);
    const gd = ctx.genreDialect;
    const genre = gd.id;
    if (isKizomba || isReggaeton) {
      const p1 = el.syncphasor(freqSignal, gateSignal);
      const p2 = el.syncphasor(el.mul(freqSignal, isKizomba ? 1.003 : 1.0015), gateSignal);
      const sine = el.sin(el.mul(2 * Math.PI, p1));
      const softSaw = el.tanh(el.mul(isKizomba ? 2.4 : 3.2, el.sub(el.mul(2, p2), 1)));
      const sub = el.sin(el.mul(2 * Math.PI, el.syncphasor(el.mul(freqSignal, 0.5), gateSignal)));
      const attack = el.adsr(0.002, isKizomba ? 0.10 : 0.065, isKizomba ? 0.62 : 0.48, 0.045, gateSignal);
      const cutoff = isKizomba ? 1100 + b * 5200 : 700 + b * 4300;
      const body = el.add(el.mul(isKizomba ? 0.56 : 0.45, sine), el.add(el.mul(isKizomba ? 0.25 : 0.34, softSaw), el.mul(isKizomba ? 0.19 : 0.21, sub)));
      const filtered = el.svf({ mode: 'lowpass' }, cutoff, 1.2 + params.resonance * 2.0, body);
      const air = el.mul(isKizomba ? 0.025 : 0.045, el.mul(el.highpass(isKizomba ? 4200 : 5200, 0.8, el.noise()), el.adsr(0.001, 0.012, 0, 0.004, gateSignal)));
      return el.mul(attack, el.add(filtered, air));
    }
    if (!isKizomba && !isReggaeton && /house|electronic|drum-and-bass|uk-bass|hip-hop|industrial|disco/.test(genre)) {
      const p = el.syncphasor(freqSignal, gateSignal);
      const sub = el.sin(el.mul(2 * Math.PI, el.syncphasor(el.mul(freqSignal, 0.5), gateSignal)));
      const saw = el.tanh(el.mul(/industrial|drum-and-bass/.test(genre) ? 4.8 : 3.0, el.sub(el.mul(2, p), 1)));
      const env = el.adsr(0.001, /drum-and-bass|uk-bass/.test(genre) ? 0.05 : 0.08, /house|disco/.test(genre) ? 0.60 : 0.48, 0.03, gateSignal);
      const cut = (/industrial|drum-and-bass|uk-bass/.test(genre) ? 950 : 1250) + b * 5000 * gd.brightness;
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
