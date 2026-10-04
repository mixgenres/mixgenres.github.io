import { el } from '@elemaudio/core';
import type { VoiceRenderContext, AudioSignal } from './instrumentTypes';

/** Fixed body modes: body percussion must not transpose with harmony. These
 * are compact estimated modal approximations, not measured instrument data. */
export function renderBodyStrike(ctx: VoiceRenderContext, kind: 'guitar' | 'violin' | 'viola' | 'cello' | 'bass'): AudioSignal {
  const modes = kind === 'guitar' ? [110, 220, 380] : kind === 'violin' ? [280, 460, 950]
    : kind === 'viola' ? [182, 248, 750] : kind === 'cello' ? [110, 180, 750] : [58, 110, 340];
  const impulse = el.mul(el.noise(), el.adsr(.0002, .006, 0, .003, ctx.gateSignal));
  return el.add(...modes.map((hz, i) => el.mul(.6 / (i + 1), el.svf({ mode: 'bandpass' }, hz, 2.5, impulse))));
}

/** Tambor is a dry string/finger contact, separate from a body strike. */
export function renderMutedString(ctx: VoiceRenderContext): AudioSignal {
  const hit = el.mul(el.highpass(650, .8, el.noise()), el.adsr(.0002, .022, 0, .008, ctx.gateSignal));
  return el.add(el.mul(.65, hit), el.mul(.35, el.svf({ mode: 'bandpass' }, 1250, 1.8, hit)));
}

/** Tango strappata: a short bow-bounce roll plus left-hand contact. No added
 * sub-octave oscillator, and no pitched electric-slap interpretation. */
export function renderStrappata(ctx: VoiceRenderContext): AudioSignal {
  const hit = renderMutedString(ctx);
  return el.add(hit, el.mul(.65, el.delay({ size: 4096 }, el.mul(el.sr(), .024), 0, hit)),
    el.mul(.4, el.delay({ size: 4096 }, el.mul(el.sr(), .048), 0, hit)));
}
