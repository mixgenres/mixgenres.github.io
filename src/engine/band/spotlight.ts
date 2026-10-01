/** Shared manual spotlight balance used by live playback and offline rendering.
 *
 * Supports the current `(mode, anyExplicitOn)` call shape and the older
 * `(role, mode, anyExplicitOn)` shape used by the unit/regression contract.
 * Role labels never change the balance by themselves.
 */
export function spotlightGain(mode: string | undefined, anyExplicitOn: boolean): number;
export function spotlightGain(_role: string | undefined, mode: string | undefined, anyExplicitOn: boolean): number;
export function spotlightGain(a: string | undefined, b: boolean | string | undefined, c?: boolean): number {
  const mode = typeof b === 'string' ? b : a;
  const explicitOn = typeof b === 'boolean' ? b : Boolean(c);
  if (mode === 'on') return 1.18;
  if (mode === 'off' && a === 'percussion' && typeof b === 'string' && explicitOn) return 1;
  if (explicitOn) return 0.78;
  return 1;
}
