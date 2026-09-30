/** Shared manual spotlight balance used by live playback and MP3 rendering. */
export function spotlightGain(mode: string | undefined, anyExplicitOn: boolean): number {
  if (mode === 'on') return 1.18;
  if (anyExplicitOn) return 0.78;
  return 1;
}
