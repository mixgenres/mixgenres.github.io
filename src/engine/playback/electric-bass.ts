import { el } from './dsp';
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
    const contact = Math.max(.05, Math.min(.9, position));
    const noiseExcitation = el.sub(burst, el.delay({ size: 4096 }, el.mul(period, contact), 0, burst));
    // Initialize the string with the triangular displacement of a pull at the
    // chosen position. A noise-only burst often cancels its own lowest mode,
    // leaving a bass note whose overtones overwhelm its fundamental.
    const phase = el.syncphasor(safeFreqSignal, gateSignal);
    const displacement = el.sub(el.mul(2, el.min(el.div(phase, contact), el.div(el.sub(1, phase), 1 - contact))), 1);
    const pull = el.mul(.18, displacement, el.adsr(.0001, el.div(1, safeFreqSignal), 0, .002, gateSignal));
    const excitation = el.add(pull, el.mul(pick || slap || pop ? .7 : .12, noiseExcitation));
    const loop = createDampedStringLoop(`${pk}:electric-bass`, period, fbGainForDecay(safeFreqSignal, .3 + decayTime * 1.8), 1800 + b * 5500, excitation);
    const pickupComb = el.sub(loop, el.mul(.45, el.delay({ size: 4096 }, el.mul(period, .12), 0, loop)));
    // Fingerpad contact and pickup tone roll off upper string modes. Keeping
    // the pick/slap bandwidth for every note made a fingered tumbao carry more
    // energy in the upper mids than in its intended low anchor.
    const pickup = el.lowpass(pick || slap || pop ? 2200 + b * 2600 : 360 + b * 480, .707, pickupComb);
    const collision = slap || pop ? el.mul(pop ? .25 : .4, el.mul(el.highpass(pop ? 2600 : 1200, .8, el.noise()), el.adsr(.0001, pop ? .009 : .014, 0, .003, gateSignal))) : 0;
    // Acoustic bass guitar is a selectable variant; electric bass itself has
    // no double-bass cavity modes and acquires no bowed path.
    const body = params.variantId === 'acoustic-bass-guitar' ? el.mul(.2, el.svf({ mode: 'bandpass' }, 110, 2.5, pickup)) : 0;
    return el.add(pickup, collision, body);
  }
}
