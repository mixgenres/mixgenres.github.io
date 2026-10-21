import type { BassDialect } from '../styles/contracts';

/** Named teaching jobs resolve to mechanics; written notes remain the musical
 * authority. Moving lines must not all become root/fifth alternation. */
export const BASS_MOTION_ALIASES: Record<string, BassDialect['style']> = {
  'root-fifth': 'rootFifth', pedal: 'root', drone: 'root',
  'syncopated-sub': 'sub', 'fragmented-sub': 'sub', 'synth-bass-bounce': 'riff',
  countermelody: 'riff', counterline: 'riff', 'gospel-answer': 'riff',
  'riff-root': 'riff', 'orchestral-lift': 'riff', 'sustained-root': 'root',
};
