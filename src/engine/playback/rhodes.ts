import { RHODES_GENRE_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';
import { KIZOMBA_PATTERN, RHODES_SOUL_GENRE_PATTERN, RHODES_SUSTAIN_GENRE_PATTERN, RHODES_TRANSIENT_GENRE_PATTERN } from '../../data/sound/dsp/genreClassifiers';
import { el } from '@elemaudio/core';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class RhodesModule implements InstrumentModule {
  id = 'rhodes';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      velSignal,
      safeFreqSignal,
      b,
      decayTime,
      params,
      action
    } = ctx;
    const isKizomba = KIZOMBA_PATTERN.test(`${params.genreId ?? ''}`);
    const gd = ctx.genreDialect;
    const genre = gd.id;
    if (isKizomba) {
      const p = el.syncphasor(safeFreqSignal, gateSignal);
      const fundamental = el.sin(el.mul(2 * Math.PI, p));
      const tine = el.sin(el.mul(4 * Math.PI, p));
      const key = el.mul(el.highpass(1800, 1.0, el.noise()), el.adsr(0.0002, 0.004, 0, 0.002, gateSignal));
      const env = el.adsr(0.001, 0.085 + decayTime * 0.06, 0.48, 0.045, gateSignal);
      const syncopatedBark = el.mul(0.12 + (action === 'marcato' ? 0.08 : 0), key);
      return el.lowpass(6200 + b * 5000, 1.0, el.mul(env, el.add(el.mul(0.78, fundamental), el.add(el.mul(0.16, tine), syncopatedBark))));
    }

    if (!isKizomba && RHODES_SOUL_GENRE_PATTERN.test(genre)) {
      const p = el.syncphasor(safeFreqSignal, gateSignal);
      const fundamental = el.sin(el.mul(2 * Math.PI, p));
      const tine = el.sin(el.mul(4 * Math.PI, p));
      const bark = el.mul((RHODES_TRANSIENT_GENRE_PATTERN.test(genre) ? RHODES_GENRE_RESPONSE.funkDiscoHouseTransient : RHODES_GENRE_RESPONSE.defaultTransient) * gd.transient, el.mul(el.highpass(1700, 1.0, el.noise()), el.adsr(0.00025, 0.006, 0, 0.002, gateSignal)));
      const env = el.adsr(0.001, 0.075 + decayTime * 0.07 * gd.decay, RHODES_SUSTAIN_GENRE_PATTERN.test(genre) ? RHODES_GENRE_RESPONSE.jazzSoulSustain : RHODES_GENRE_RESPONSE.defaultSustain, 0.045, gateSignal);
      return el.lowpass(5800 + b * 5200 * gd.brightness, 1.0, el.mul(env, el.add(el.mul(0.80, fundamental), el.add(el.mul(0.14, tine), bark))));
    }

    const phasor = el.syncphasor(safeFreqSignal, gateSignal);
    const mod = el.sin(el.mul(2 * Math.PI * 3.5, phasor));
    const fundamental = el.sin(el.mul(2 * Math.PI, phasor));

    const barkEnv = el.adsr(0.0004, 0.06 + decayTime * 0.10, 0.02, 0.03, gateSignal);
    const modIndex = el.mul(
      el.mul(el.const({ value: 2.0 + b * 4.0 }), velSignal),
      barkEnv
    );

    const carrierPhase = el.add(el.mul(2 * Math.PI, phasor), el.mul(modIndex, mod));
    const fmBark = el.sin(carrierPhase);
    const carrier = el.add(el.mul(0.6, fundamental), el.mul(0.4, fmBark));

    const tineClick = el.mul(0.14, el.mul(el.highpass(2600, 1.2, el.noise()), el.adsr(0.0001, 0.005, 0, 0.002, gateSignal)));
    const tone = el.add(carrier, tineClick);

    return el.lowpass(Math.min(19000, 1600 + b * 7500), 1.0, tone);
  }
}
