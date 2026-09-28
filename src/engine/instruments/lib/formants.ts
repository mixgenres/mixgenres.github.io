import { el } from '@elemaudio/core';

type Node = any;

/**
 * Applies a bandpass formant filter to an excitation signal.
 */
export function applyFormantFilter(
  freq: number | Node,
  q: number | Node,
  gain: number | Node,
  input: Node
): Node {
  const freqNode = typeof freq === 'number' ? el.const({ value: freq }) : freq;
  const qNode = typeof q === 'number' ? el.const({ value: q }) : q;
  const gainNode = typeof gain === 'number' ? el.const({ value: gain }) : gain;
  
  return el.mul(gainNode, el.svf({ mode: 'bandpass' }, freqNode, qNode, input));
}
