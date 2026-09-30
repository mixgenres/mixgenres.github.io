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

  const mechanics = instrument.tuningAndMechanics;
  if (mechanics) {
    if (mechanics.frets !== undefined && (!Number.isInteger(mechanics.frets) || mechanics.frets < 0)) fail(`frets must be a non-negative integer (${mechanics.frets})`);
    if (mechanics.maxFretStretch !== undefined && (!Number.isFinite(mechanics.maxFretStretch) || mechanics.maxFretStretch <= 0)) fail(`maxFretStretch must be positive (${mechanics.maxFretStretch})`);
    for (const string of mechanics.openStrings ?? []) if (!Number.isInteger(string.midi) || string.midi < 0 || string.midi > 127) fail(`open string ${string.name} has invalid MIDI pitch ${string.midi}`);
  }
  return errors;
}
