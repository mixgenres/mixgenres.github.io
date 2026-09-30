import type { InstrumentDef } from './schema/instrument-def';

const ROLES_BY_FAMILY: Record<InstrumentDef['family'], ReadonlySet<string>> = {
  'bellows-and-keys': new Set(['comp', 'harmony']),
  'plucked': new Set(['lead', 'comp', 'harmony', 'bass']),
  'bowed': new Set(['melody', 'lead', 'comp']),
  'winds': new Set(['melody', 'lead', 'bass']),
  'brass': new Set(['lead', 'comp', 'bass']),
  'voice': new Set(['lead', 'comp']),
  'hand-drums': new Set(['perc', 'percussion']),
  'metal-and-wood': new Set(['perc', 'lead', 'comp']),
  'kit': new Set(['percussion', 'perc']),
  'electronic': new Set(['comp', 'lead', 'effect', 'bass', 'pad']),
  'free-reed': new Set(['pad']),
  'plucked-string': new Set(['comp']),
  'body-percussion': new Set(['perc']),
};

/** Validate catalog-level facts used to resolve performance and role context. */
export function validateInstrumentDef(instrument: InstrumentDef): string[] {
  const errors: string[] = [];
  const prefix = `instrument ${instrument.id || '<unknown>'}`;
  const fail = (message: string) => errors.push(`${prefix}: ${message}`);
  const profile = instrument.acousticProfile;

  if (!instrument.id?.trim()) fail('id must be non-empty');
  if (!instrument.name?.trim()) fail('name must be non-empty');
  if (!profile) fail('acousticProfile is required');
  else {
    const { low, centre, high, role } = profile;
    if (![low, centre, high].every(value => Number.isInteger(value) && value >= 0 && value <= 127)) fail('acoustic MIDI range and centre must be integers from 0 to 127');
    if (low > high) fail(`acoustic range is inverted (${low}..${high})`);
    if (centre < low || centre > high) fail(`acoustic centre ${centre} is outside playable range ${low}..${high}`);
    if (!role?.trim()) fail('acousticProfile.role is required for role resolution');
    else if (!ROLES_BY_FAMILY[instrument.family]?.has(role)) fail(`role ${role} is incompatible with family ${instrument.family}`);
  }
  if (instrument.polyphony !== undefined && (!Number.isInteger(instrument.polyphony) || instrument.polyphony < 1)) fail(`polyphony must be a positive integer (${String(instrument.polyphony)})`);
  if (instrument.maxSimultaneousPitches !== undefined && (!Number.isInteger(instrument.maxSimultaneousPitches) || instrument.maxSimultaneousPitches < 1)) fail(`maxSimultaneousPitches must be a positive integer (${String(instrument.maxSimultaneousPitches)})`);

  const { playability } = instrument;
  if (playability) {
    const validRange = (label: string, range: { lowMidi: number; highMidi: number } | undefined) => {
      if (!range) return;
      if (![range.lowMidi, range.highMidi].every(value => Number.isInteger(value) && value >= 0 && value <= 127) || range.lowMidi > range.highMidi) fail(`${label} must be an ordered MIDI range within 0..127`);
    };
    validRange('absoluteRange', playability.absoluteRange);
    validRange('practicalRange', playability.practicalRange);
    validRange('comfortableRange', playability.comfortableRange);
    validRange('characteristicRegister', playability.characteristicRegister && { lowMidi: playability.characteristicRegister.lowMidi, highMidi: playability.characteristicRegister.highMidi });
    if (playability.characteristicRegister && (playability.characteristicRegister.centreMidi < playability.characteristicRegister.lowMidi || playability.characteristicRegister.centreMidi > playability.characteristicRegister.highMidi)) fail('characteristicRegister centre must lie within its range');
    const within = (inner: { lowMidi: number; highMidi: number } | undefined, outer: { lowMidi: number; highMidi: number } | undefined) => !inner || !outer || (inner.lowMidi >= outer.lowMidi && inner.highMidi <= outer.highMidi);
    if (!within(playability.practicalRange, playability.absoluteRange)) fail('practicalRange must be within absoluteRange');
    if (!within(playability.comfortableRange, playability.practicalRange)) fail('comfortableRange must be within practicalRange');
  }

  const mechanics = instrument.tuningAndMechanics;
  if (mechanics) {
    if (mechanics.frets !== undefined && (!Number.isInteger(mechanics.frets) || mechanics.frets < 0)) fail(`frets must be a non-negative integer (${mechanics.frets})`);
    if (mechanics.maxFretStretch !== undefined && (!Number.isFinite(mechanics.maxFretStretch) || mechanics.maxFretStretch <= 0)) fail(`maxFretStretch must be positive (${mechanics.maxFretStretch})`);
    const midiForNote = (note: string): number | undefined => {
      const match = /^([A-Ga-g])([#b]?)(-?\d+)$/.exec(note.trim());
      if (!match) return undefined;
      const pitchClass = ({ C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 } as Record<string, number>)[match[1].toUpperCase()];
      const accidental = match[2] === '#' ? 1 : match[2] === 'b' ? -1 : 0;
      return (Number(match[3]) + 1) * 12 + pitchClass + accidental;
    };
    const keyRange = mechanics.keyRange;
    if (keyRange) {
      if (midiForNote(keyRange.lowNote) !== keyRange.lowMidi) fail(`keyRange lowNote ${keyRange.lowNote} does not match MIDI ${keyRange.lowMidi}`);
      if (midiForNote(keyRange.highNote) !== keyRange.highMidi) fail(`keyRange highNote ${keyRange.highNote} does not match MIDI ${keyRange.highMidi}`);
      if (keyRange.lowMidi > keyRange.highMidi) fail('keyRange MIDI bounds are inverted');
    }
    for (const string of mechanics.openStrings ?? []) {
      if (!Number.isInteger(string.midi) || string.midi < 0 || string.midi > 127) fail(`open string ${string.name} has invalid MIDI pitch ${string.midi}`);
      const statedNotes = string.note.split('/').map(midiForNote);
      if (!statedNotes.includes(string.midi)) fail(`open string ${string.note} does not include MIDI ${string.midi}`);
      const expectedHz = 440 * Math.pow(2, (string.midi - 69) / 12);
      if (!Number.isFinite(string.frequencyHz) || Math.abs(string.frequencyHz - expectedHz) > Math.max(0.1, expectedHz * 0.001)) fail(`open string ${string.note} frequency ${string.frequencyHz}Hz does not match MIDI ${string.midi}`);
    }
  }
  return errors;
}
