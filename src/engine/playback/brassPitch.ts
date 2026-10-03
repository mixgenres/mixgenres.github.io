import { el } from '@elemaudio/core';
import type { VoiceRenderContext } from './instrumentTypes';

/** Falls and doits finish the held note; they are pitch gestures, not gain dips. */
export function brassReleasePitch(ctx: VoiceRenderContext) {
  if (!/^(fall|drop|doit|rip|rip-up)$/.test(ctx.action)) return el.const({ value: 1 });
  const duration = Math.max(.04, ctx.voice.noteDurationSeconds ?? .4);
  const progress = el.adsr(duration, .001, 1, .008, ctx.gateSignal);
  const finish = el.min(1, el.max(0, el.div(el.sub(progress, .55), .45)));
  return el.pow(2, el.mul(/fall|drop/.test(ctx.action) ? -5 / 12 : 4 / 12, finish));
}
