/** Default articulation action by instrument family when a voice has no authored gesture. */
export const DEFAULT_ACTION_BY_FAMILY: Record<string, string> = {
  bowed: 'arco',
  winds: 'legato',
  brass: 'legato',
  'free-reed': 'legato',
  voice: 'legato',
  plucked: 'pluck',
  'plucked-string': 'pluck',
  'hand-drums': 'tone',
  kit: 'tone',
  'metal-and-wood': 'tone',
  'body-percussion': 'tone',
};
export const BELLOWS_LEGATO_INSTRUMENT_PATTERN = /accordion|bandoneon|concertina|harmonium|organ/i;
