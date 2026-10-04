import { el } from './dsp';
import type { VoiceRenderContext, InstrumentModule, AudioSignal } from './instrumentTypes.ts';
import { STRUCK_MODES, UNMEASURED_BAR_MODES } from '../../data/sound/dsp/struckModes';

export default class MarimbaModule implements InstrumentModule {
  id = 'marimba';

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const {
      gateSignal,
      freqSignal,
      decayTime
    } = ctx;

    const profile = STRUCK_MODES[ctx.params.instrumentId ?? ''] ?? UNMEASURED_BAR_MODES;
    const modes = profile.ratios.map((ratio, index) => el.mul(profile.gains[index],
      el.mul(el.cycle(el.min(19000, el.mul(freqSignal, ratio))),
        el.adsr(.0003, decayTime * profile.decays[index], 0, .03, gateSignal))));
    // A mallet strike is a short noise impulse, not a unipolar DC step.
    const strike = el.mul(profile.strike, el.mul(el.highpass(1800, .7, el.noise()),
      el.adsr(.0002, .004, 0, .002, gateSignal)));
    return modes.reduce((sum, mode) => el.add(sum, mode), strike);
  }
}
