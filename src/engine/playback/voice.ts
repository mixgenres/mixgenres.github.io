import { el } from './dsp';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';

export default class VoiceModule implements InstrumentModule {
  id = 'voice';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      params,
      safeFreqSignal,
      gateSignal
    } = ctx;

    const vibratoLfo = el.cycle(5.5);
    const vibratoFreq = el.mul(safeFreqSignal, el.add(1.0, el.mul(el.const({ value: 0.012 }), vibratoLfo)));

    const source = el.blepsaw(vibratoFreq);
    const breath = el.mul(0.06 + 0.12 * (1 - params.pressure), el.noise());
    const excited = el.add(source, breath);

    const f1 = el.mul(1.00, el.svf({ mode: 'bandpass' }, 730, 6.0, excited));
    const f2 = el.mul(0.75, el.svf({ mode: 'bandpass' }, 1090, 7.0, excited));
    const f3 = el.mul(0.45, el.svf({ mode: 'bandpass' }, 2440, 8.0, excited));
    const f4 = el.mul(0.30, el.svf({ mode: 'bandpass' }, 3400, 9.0, excited));

    const choirVowel = el.add(f1, el.add(f2, el.add(f3, f4)));
    
    // Vocal envelope is continuous but mapped
    const vocalEnv = el.adsr(0.035, 0.1, 0.9, 0.08, gateSignal);
    return el.mul(vocalEnv, el.lowpass(Math.min(19000, 8500), 1.0, choirVowel));
  }
}
