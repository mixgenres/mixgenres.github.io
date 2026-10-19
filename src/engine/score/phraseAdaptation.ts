import type { MusicalPattern, PatternEvent } from '../../data/schema';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { getInstrumentPerformanceProfile } from '../lookup/performance';

type Pitch = PatternEvent['pitch'];
interface PitchAdapter {
  adapted: boolean;
  pitch: (value: Pitch) => Pitch;
  percussionHit?: (value: Pitch) => string | undefined;
}
const unpitched = (id: string) => {
  const instrument = INSTRUMENTS_BY_ID[id];
  return !!instrument && (instrument.voicing === 'unpitched' || !!instrument.kit || !!instrument.drum);
};

function octaveShift(notes: readonly number[], low: number, high: number, preferred = 0): number | undefined {
  if (!notes.length) return 0;
  const { minimum, maximum } = pitchRange(notes);
  const first = Math.ceil((low - minimum) / 12);
  const last = Math.floor((high - maximum) / 12);
  return first <= last ? Math.max(first, Math.min(last, Math.round(preferred / 12))) * 12 : undefined;
}

function pitchRange(notes: readonly number[]) {
  return notes.reduce((range, note) => ({ minimum: Math.min(range.minimum, note), maximum: Math.max(range.maximum, note) }),
    { minimum: Infinity, maximum: -Infinity });
}

/** Arrange a borrowed phrase for its receiving player. Native written parts
 * keep their literal pitches; a fusion part keeps its attacks, pitch classes,
 * contour and chord material in the receiving instrument's register. */
export function phrasePitchAdapter(pattern: MusicalPattern | undefined, instrumentId: string, role: string, projected: readonly Pitch[]): PitchAdapter {
  const foreignInstrument = !!pattern && !pattern.instruments?.includes(instrumentId);
  const changedRole = !!pattern && !pattern.roles.includes(role);
  const adapted = foreignInstrument || changedRole;
  if (!adapted) return { adapted, pitch: (value: Pitch): Pitch => value };
  const pitches = [...(pattern?.events?.map(event => event.pitch) ?? []), ...projected];
  for (const value of pitches) {
    if (value?.midi === undefined) continue;
    const written = Array.isArray(value.midi) ? value.midi : [value.midi];
    if (!written.length || written.some(note => !Number.isInteger(note) || note < 0 || note > 127)) {
      throw new Error(`Invalid written MIDI pitch in ${pattern?.id ?? 'borrowed phrase'}`);
    }
  }

  const sources = (pattern?.instruments ?? []).filter(id => !!INSTRUMENTS_BY_ID[id]);
  const sourcePercussion = sources.length > 0 && sources.every(unpitched);
  const targetPercussion = unpitched(instrumentId);
  // Percussion MIDI numbers name contacts, not harmonic pitches. Transfer
  // the rhythm through the receiving role rather than playing a kick's MIDI
  // key as C in every pitched instrument, or turning a melody into kit keys.
  if (targetPercussion) return { adapted, pitch: (_value: Pitch): Pitch => undefined,
    percussionHit: value => {
      const midi = Array.isArray(value?.midi) ? value.midi[0] : value?.midi;
      if (!sourcePercussion || midi === undefined) return undefined;
      for (const id of sources) {
        const source = INSTRUMENTS_BY_ID[id];
        const component = source.kitComponents?.find(candidate => candidate.midi === midi);
        if (component) return component.id;
        if (source.drum?.low === midi) return 'kick';
        if (source.drum?.high === midi) return 'slap';
        if (source.drum?.mid === midi) return 'open';
      }
      return undefined;
    } };
  if (sourcePercussion) return { adapted, pitch: (_value: Pitch): Pitch => undefined };

  const instrument = INSTRUMENTS_BY_ID[instrumentId];
  const { capabilities } = getInstrumentPerformanceProfile(instrumentId);
  const low = capabilities.lowMidi;
  // A flute or piccolo can outline a bass role in its own lowest register.
  // Keep a complete chromatic octave available instead of imposing a MIDI-60
  // ceiling that makes the role impossible on a high instrument.
  const high = /^(bass|low-anchor)$/.test(role)
    ? Math.min(capabilities.highMidi, Math.max(60, low + 11)) : capabilities.highMidi;
  const voices = instrument?.voicing === 'single' || changedRole && /^(bass|low-anchor)$/.test(role)
    ? 1 : capabilities.polyphony;
  const voicing = (midi: number | number[]) => {
    const notes = (Array.isArray(midi) ? midi : [midi]).slice().sort((a, b) => a - b);
    if (notes.length <= voices) return notes;
    // A single-line player follows the melody or bass voice of a chordal
    // source. This retains every rhythmic attack and the source harmony;
    // it does not ask a wind player to sound a keyboard chord simultaneously.
    if (voices === 1) return [/^(bass|low-anchor)$/.test(role) ? notes[0] : notes[notes.length - 1]];
    const distinct = notes.filter((note, index) => notes.findIndex(other => (other - note) % 12 === 0) === index);
    if (distinct.length <= voices) return distinct;
    return /^(bass|low-anchor)$/.test(role) ? distinct.slice(0, voices) : distinct.slice(-voices);
  };
  const notes = pitches.flatMap(value => value?.midi === undefined ? [] : voicing(value.midi));
  const shift = octaveShift(notes, low, high);
  const range = pitchRange(notes);
  const preferred = notes.length ? Math.round(((low + high) / 2 - (range.minimum + range.maximum) / 2) / 12) * 12 : 0;

  return { adapted, pitch: (value: Pitch): Pitch => {
    if (changedRole && /^(bass|low-anchor)$/.test(role) && value?.voicing === 'chord') return undefined;
    if (value?.midi === undefined) return value;
    const original = voicing(value.midi);
    const attackShift = shift ?? octaveShift(original, low, high, preferred);
    const midi = original.map(note => {
      if (attackShift !== undefined) return note + attackShift;
      // A source chord wider than the receiving instrument needs an octave
      // revoicing. Keep each remaining voice and pitch class, with no clipping
      // of MIDI values and no change to its attack or duration.
      const noteShift = octaveShift([note], low, high, preferred);
      if (noteShift === undefined) throw new Error(`Cannot voice ${pattern?.id} on ${instrumentId}`);
      return note + noteShift;
    });
    return { ...value, midi: Array.isArray(value.midi) ? midi : midi[0] };
  } };
}
