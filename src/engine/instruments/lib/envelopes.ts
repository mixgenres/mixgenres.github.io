import { el } from '@elemaudio/core';

type Node = any;

/**
 * Standard ADSR envelope helper.
 */
export function createAdsrEnvelope(
  attack: number | Node,
  decay: number | Node,
  sustain: number | Node,
  release: number | Node,
  gate: Node
): Node {
  const a = typeof attack === 'number' ? el.const({ value: attack }) : attack;
  const d = typeof decay === 'number' ? el.const({ value: decay }) : decay;
  const s = typeof sustain === 'number' ? el.const({ value: sustain }) : sustain;
  const r = typeof release === 'number' ? el.const({ value: release }) : release;

  return el.adsr(a, d, s, r, gate);
}
