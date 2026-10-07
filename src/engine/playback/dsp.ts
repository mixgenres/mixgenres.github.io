import { el as standard } from '@elemaudio/core';

/** The documented seed property keeps physical noise repeatable.
 * Authored seeds remain authoritative. Otherwise identical sections must not
 * change their attacks/tails according to previous render jobs. */
export const el = {
  ...standard,
  noise: (props?: Parameters<typeof standard.noise>[0]) => standard.noise({ ...props, seed: props?.seed ?? 1 }),
  pinknoise: (props?: Parameters<typeof standard.pinknoise>[0]) => standard.pinknoise({ ...props, seed: props?.seed ?? 1 }),
};
