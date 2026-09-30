import type { TuningOptions } from '../../data/musicTheory/schema/tuning';
import { TUNING_SYSTEM_DATA } from '../../data/musicTheory/tuningSystems';
import { TUNING_CONSTRAINTS } from '../../data/musicTheory/tuningConstraints';

export interface TuningSystem {
  id: string;
  name: string;
  description: string;
  /** Returns frequency in Hz for a base MIDI note number */
  getFrequencyHz(midiNote: number, tonicPc?: number, options?: TuningOptions): number;
  /** Returns microtonal offset in cents relative to 12-TET */
  getCentsOffset(midiNote: number, tonicPc?: number, options?: TuningOptions): number;
}

export function applyTuningConstraints(
  baseOffset: number,
  midiNote: number,
  options?: TuningOptions
): number {
  if (!options) return baseOffset;
  const inst = (options.instrumentId || '').toLowerCase();

  // 1. Fixed-Pitch Instrument Locks (Prompt 15)
  const isFixedPitch = TUNING_CONSTRAINTS.fixedPitchInstrumentPattern.test(inst);
  if (isFixedPitch) {
    const isWerckmeister = options.styleId?.includes(TUNING_CONSTRAINTS.werckmeisterMarker) || options.genreId?.includes(TUNING_CONSTRAINTS.werckmeisterMarker);
    if (isWerckmeister) {
      const pc = ((midiNote % 12) + 12) % 12;
      const offsets = TUNING_SYSTEM_DATA['werckmeister-iii'].fixedPitchInstrumentOffsets;
      return offsets[pc];
    }
    return 0; // Aggressively lock to 12-TET
  }

  let offset = baseOffset;

  // 2. Dynamic Just Intonation for Strings/Choirs (Prompt 15)
  const isBowedOrVoice = TUNING_CONSTRAINTS.bowedOrVoicePattern.test(inst);
  if (isBowedOrVoice && options.activeChordPc !== undefined) {
    const pc = ((Math.round(midiNote) % 12 - options.activeChordPc) + 12) % 12;
    if (pc === 4) {
      // Major 3rd: flatten by -13.7 cents
      offset = TUNING_CONSTRAINTS.bowedChordOffsetsCents[4];
    } else if (pc === 10) {
      // Minor 7th: flatten by -31 cents
      offset = TUNING_CONSTRAINTS.bowedChordOffsetsCents[10];
    }
  }

  // 3. The Leading-Tone Push (Prompt 15)
  const isClassicalOrJazz = TUNING_CONSTRAINTS.classicalJazzGenrePattern.test((options.styleId || '') + ' ' + (options.genreId || ''));
  if (isClassicalOrJazz && options.activeChordPc !== undefined) {
    const pc = ((Math.round(midiNote) % 12 - options.activeChordPc) + 12) % 12;
    if (pc === TUNING_CONSTRAINTS.leadingTonePitchClass) {
      offset = TUNING_CONSTRAINTS.leadingToneOffsetCents;
    }
  }

  // 4. Blue Note Magnetic Pull (Prompt 15)
  const isBluesOrRock = TUNING_CONSTRAINTS.bluesRockGenrePattern.test((options.styleId || '') + ' ' + (options.genreId || ''));
  if (isBluesOrRock && options.activeChordPc !== undefined) {
    const pc = ((Math.round(midiNote) % 12 - options.activeChordPc) + 12) % 12;
    if (pc === TUNING_CONSTRAINTS.blueNotePitchClass) {
      offset = TUNING_CONSTRAINTS.blueNoteOffsetCents; // drift to blue note
    }
  }

  // 5. Fret-Snapping for Guitars (Prompt 15)
  const isFretted = TUNING_CONSTRAINTS.frettedInstrumentPattern.test(inst);
  if (isFretted && !TUNING_CONSTRAINTS.slidingArticulationPattern.test(options.articulation || '')) {
    offset = Math.round(offset / TUNING_CONSTRAINTS.frettedSnapCents) * TUNING_CONSTRAINTS.frettedSnapCents;
  }

  return offset;
}

export const TUNING_SYSTEMS: Record<string, TuningSystem> = {
  '12-tet': {
    id: TUNING_SYSTEM_DATA['12-tet'].id,
    name: TUNING_SYSTEM_DATA['12-tet'].name,
    description: TUNING_SYSTEM_DATA['12-tet'].description,
    getFrequencyHz(midiNote, tonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      return 440 * Math.pow(2, (midiNote + cents / 100 - 69) / 12);
    },
    getCentsOffset(midiNote, _tonicPc, options) {
      return applyTuningConstraints(0, midiNote, options);
    },
  },

  'just-intonation': {
    id: TUNING_SYSTEM_DATA['just-intonation'].id,
    name: TUNING_SYSTEM_DATA['just-intonation'].name,
    description: TUNING_SYSTEM_DATA['just-intonation'].description,
    getFrequencyHz(midiNote, tonicPc = TUNING_SYSTEM_DATA['just-intonation'].defaultTonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      const relative = midiNote - (TUNING_SYSTEM_DATA['just-intonation'].tonicMidi + tonicPc);
      const pc = ((relative % 12) + 12) % 12;
      const octave = Math.floor(relative / 12);
      const ratios = TUNING_SYSTEM_DATA['just-intonation'].ratios;
      const tonicFreq = 440 * Math.pow(2, ((TUNING_SYSTEM_DATA['just-intonation'].tonicMidi + tonicPc) - 69) / 12);
      const baseFreq = tonicFreq * ratios[pc] * Math.pow(2, octave);
      return baseFreq * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = TUNING_SYSTEM_DATA['just-intonation'].defaultTonicPc, options) {
      const relative = midiNote - (TUNING_SYSTEM_DATA['just-intonation'].tonicMidi + tonicPc);
      const pc = ((relative % 12) + 12) % 12;
      const ratios = TUNING_SYSTEM_DATA['just-intonation'].ratios;
      const baseCents = 1200 * Math.log2(ratios[pc]) - pc * 100;
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'maqam-bayati': {
    id: TUNING_SYSTEM_DATA['maqam-bayati'].id,
    name: TUNING_SYSTEM_DATA['maqam-bayati'].name,
    description: TUNING_SYSTEM_DATA['maqam-bayati'].description,
    getFrequencyHz(midiNote, tonicPc = TUNING_SYSTEM_DATA['maqam-bayati'].defaultTonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      const baseHz = 440 * Math.pow(2, (midiNote - 69) / 12);
      return baseHz * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = TUNING_SYSTEM_DATA['maqam-bayati'].defaultTonicPc, options) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      let baseCents = 0;
      if (TUNING_SYSTEM_DATA['maqam-bayati'].neutralSecondPitchClasses.includes(pc)) {
        baseCents = TUNING_SYSTEM_DATA['maqam-bayati'].neutralSecondCents;
      }
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'blues-continuum': {
    id: TUNING_SYSTEM_DATA['blues-continuum'].id,
    name: TUNING_SYSTEM_DATA['blues-continuum'].name,
    description: TUNING_SYSTEM_DATA['blues-continuum'].description,
    getFrequencyHz(midiNote, tonicPc = TUNING_SYSTEM_DATA['blues-continuum'].defaultTonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      const baseHz = 440 * Math.pow(2, (midiNote - 69) / 12);
      return baseHz * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = TUNING_SYSTEM_DATA['blues-continuum'].defaultTonicPc, options) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      let baseCents = 0;
      if (TUNING_SYSTEM_DATA['blues-continuum'].centsByPitchClass[pc] !== undefined) baseCents = TUNING_SYSTEM_DATA['blues-continuum'].centsByPitchClass[pc];
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'gamelan-slendro': {
    id: TUNING_SYSTEM_DATA['gamelan-slendro'].id,
    name: TUNING_SYSTEM_DATA['gamelan-slendro'].name,
    description: TUNING_SYSTEM_DATA['gamelan-slendro'].description,
    getFrequencyHz(midiNote, tonicPc = TUNING_SYSTEM_DATA['gamelan-slendro'].defaultTonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      return 440 * Math.pow(2, (midiNote + cents / 100 - 69) / 12);
    },
    getCentsOffset(midiNote, tonicPc = TUNING_SYSTEM_DATA['gamelan-slendro'].defaultTonicPc, options) {
      const relative = midiNote - (TUNING_SYSTEM_DATA['gamelan-slendro'].tonicMidi + tonicPc);
      const semitone = ((relative % 12) + 12) % 12;
      const degree = Math.max(0, Math.min(TUNING_SYSTEM_DATA['gamelan-slendro'].divisions - 1, Math.round(semitone * TUNING_SYSTEM_DATA['gamelan-slendro'].divisions / 12)));
      let baseCents = degree * TUNING_SYSTEM_DATA['gamelan-slendro'].centsPerStep - semitone * 100;

      // 5. Gamelan Slendro Octave Stretching (Prompt 15): +2 cents per octave
      const octave = (midiNote - TUNING_SYSTEM_DATA['gamelan-slendro'].tonicMidi) / 12;
      baseCents += octave * TUNING_SYSTEM_DATA['gamelan-slendro'].octaveStretchCents;

      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'werckmeister-iii': {
    id: TUNING_SYSTEM_DATA['werckmeister-iii'].id,
    name: TUNING_SYSTEM_DATA['werckmeister-iii'].name,
    description: TUNING_SYSTEM_DATA['werckmeister-iii'].description,
    getFrequencyHz(midiNote, tonicPc = TUNING_SYSTEM_DATA['werckmeister-iii'].defaultTonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      return 440 * Math.pow(2, (midiNote + cents / 100 - 69) / 12);
    },
    getCentsOffset(midiNote, _tonicPc = TUNING_SYSTEM_DATA['werckmeister-iii'].defaultTonicPc, options) {
      const pc = ((midiNote % 12) + 12) % 12;
      const offsets = TUNING_SYSTEM_DATA['werckmeister-iii'].centsOffsets;
      const baseCents = offsets[pc];
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },
};

export function resolveTuningSystem(systemId = '12-tet'): TuningSystem {
  return TUNING_SYSTEMS[systemId] ?? TUNING_SYSTEMS['12-tet'];
}
