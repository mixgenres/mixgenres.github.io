import { el } from '@elemaudio/core';
import type { InstrumentModule, VoiceRenderContext, AudioSignal } from './instrumentTypes';
import { createDampedStringLoop, fbGainForDecay } from './instrumentLib_stringLoop';
import { renderMutedString } from './stringPercussion';

/** A plucked/pickup source with distinct thumb and pulled-string collisions.
 * Its parameters are estimated, not a measured electric-bass calibration. */
export default class ElectricBassModule implements InstrumentModule {
  id = 'bass';
  ownedDspSections: InstrumentModule['ownedDspSections'] = ['coupledResonators', 'mechanicalArtifacts'];

  renderVoice(ctx: VoiceRenderContext): AudioSignal {
    const { voice, params, gateSignal, safeFreqSignal, pk, b, decayTime, action } = ctx;
    if (voice.mechanics?.surface === 'muted-string') return renderMutedString(ctx);
    const slap = action === 'slap' || action === 'thumb-slap', pop = action === 'pop';
    const pick = voice.excitationType === 'hard-pick' || voice.excitationType === 'plectrum';
    const period = el.div(el.sr(), safeFreqSignal);
    const position = voice.mechanics?.pluckPosition ?? params.pluckPosition;
    const burst = el.mul(el.lowpass(pick || pop ? 7000 : slap ? 4500 : 2200, .8, el.noise()),
      el.adsr(.0003, pick || slap || pop ? .004 : .012, 0, .003, gateSignal));
    const excitation = el.sub(burst, el.delay({ size: 4096 }, el.mul(period, Math.max(.05, Math.min(.9, position))), 0, burst));
    const loop = createDampedStringLoop(`${pk}:electric-bass`, period, fbGainForDecay(safeFreqSignal, .3 + decayTime * .7), 1800 + b * 5500, excitation);
    const pickup = el.sub(loop, el.mul(.45, el.delay({ size: 4096 }, el.mul(period, .12), 0, loop)));
    const collision = slap || pop ? el.mul(pop ? .25 : .4, el.mul(el.highpass(pop ? 2600 : 1200, .8, el.noise()), el.adsr(.0001, pop ? .009 : .014, 0, .003, gateSignal))) : 0;
    // Acoustic bass guitar is a selectable variant; electric bass itself has
    // no double-bass cavity modes and acquires no bowed path.
    const body = params.variantId === 'acoustic-bass-guitar' ? el.mul(.2, el.svf({ mode: 'bandpass' }, 110, 2.5, pickup)) : 0;
    return el.add(pickup, collision, body);
  }
}
