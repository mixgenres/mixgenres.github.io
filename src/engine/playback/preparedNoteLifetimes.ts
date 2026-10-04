import type { Performance } from '../band/performanceData';
import type { Mp3RenderOptions } from './mp3Export';

/** Compiled songs already carry physical lifetimes. Keep the synthesis
 * implementation out of the UI bundle unless an uncompiled input needs it. */
export async function preparedNoteLifetimes(performance: Performance, options: Mp3RenderOptions) {
  if (performance.notes.every(note => note.physical) &&
    !performance.ccs.some(cc => cc.cc === 74 || cc.cc === 18)) {
    return (note: Performance['notes'][number]) => note.physical!.tailSeconds;
  }
  const { createNoteTailResolver } = await import('./noteLifetime');
  return createNoteTailResolver(performance, options);
}
