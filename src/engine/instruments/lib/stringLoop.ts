import { el } from '@elemaudio/core';

type Node = any;

/**
Physical Karplus-Strong waveguide string loop.
Uses sample-accurate internal delay feedback to ensure perfect pitch mapping,
replacing block-delayed tapIn/tapOuts. Pre/post filtering simulates frequency-dependent
loss without requiring an unsupported 1-sample in-loop filter.
*/
export function createDampedStringLoop(
  persistentKey: string,
  delaySamples: number | Node,
  feedbackGain: number | Node,
  dampingCutoffHz: number | Node,
  excitation: Node,
  dampingQ: number | Node = 0.707
): Node {
  const pKey = persistentKey || 'damped_string_loop';
  const fbGainNode = typeof feedbackGain === 'number'
    ? el.const({ key: `${pKey}:fb`, value: feedbackGain })
    : feedbackGain;

  // Ensure delayTime can be safely updated at runtime via el.const or dynamic signal nodes.
  // Clamp delay to [1, 44000] and apply a gentle 3ms pole smoother to eliminate click
  // artifacts when delayTime is modulated or updated via el.const without graph recompilation.
  const rawDelay = typeof delaySamples === 'number'
    ? el.const({ key: `${pKey}:dt`, value: delaySamples })
    : delaySamples;
  const clampedDelay = el.min(el.const({ value: 44000 }), el.max(el.const({ value: 1 }), rawDelay));
  const safeDelay = el.smooth(el.tau2pole(0.003), clampedDelay);

  // Soften the initial burst to prevent raw metallic comb-filtering
  const dampedExcite = el.lowpass(dampingCutoffHz, dampingQ, excitation);

  // Sample-accurate internal feedback guarantees perfect tuning with persistent key
  const loop = el.delay(
    { key: pKey, size: 44100 },
    safeDelay,
    fbGainNode,
    dampedExcite
  );
  // Post-filter shapes the body resonance and dampens the tail
  return el.lowpass(dampingCutoffHz, dampingQ, loop);
}

/**
 * Frequency-compensated feedback gain for a Karplus-Strong style delay loop.
 * Formulated as signal-math nodes rather than static JS calculations executed once
 * at render time, so that feedback gain automatically updates whenever the frequency
 * signal/const changes dynamically at runtime.
 *
 * Guarantees the loop's T60 decay time (in seconds) is governed by
 * `decaySeconds` regardless of the note's pitch (i.e. regardless of how
 * short the delay line is). Without this, higher notes — which loop far
 * more times per second — decay dramatically faster than low notes purely
 * as an artifact of delay-line length, not string physics.
 */
export function fbGainForDecay(
  freqHz: number | Node,
  decaySeconds: number | Node
): Node {
  const freqNode = typeof freqHz === 'number'
    ? el.const({ value: Math.max(1, freqHz) })
    : el.max(el.const({ value: 1 }), freqHz);
  const decayNode = typeof decaySeconds === 'number'
    ? el.const({ value: Math.max(0.05, decaySeconds) })
    : el.max(el.const({ value: 0.05 }), decaySeconds);

  const exponent = el.div(
    el.const({ value: -3 * Math.LN10 }),
    el.mul(decayNode, freqNode)
  );
  const g = el.exp(exponent);
  return el.min(el.const({ value: 0.9995 }), el.max(el.const({ value: 0.5 }), g));
}

export function compensatedFeedbackGain(
  delaySamples: number | Node,
  decaySeconds: number | Node,
  sr: number | Node = el.sr()
): Node {
  const srNode = typeof sr === 'number' ? el.const({ value: sr }) : sr;
  const delayNode = typeof delaySamples === 'number' ? el.const({ value: delaySamples }) : delaySamples;
  const decayNode = typeof decaySeconds === 'number'
    ? el.const({ value: Math.max(0.05, decaySeconds) })
    : el.max(el.const({ value: 0.05 }), decaySeconds);

  const loopsPerSecond = el.div(srNode, el.max(el.const({ value: 1 }), delayNode));
  const exponent = el.div(
    el.const({ value: -3 * Math.LN10 }),
    el.mul(decayNode, loopsPerSecond)
  );
  const g = el.exp(exponent);
  return el.min(el.const({ value: 0.9995 }), el.max(el.const({ value: 0.5 }), g));
}
