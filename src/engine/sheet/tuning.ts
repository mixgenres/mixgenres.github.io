export interface TuningOptions {
  instrumentId?: string;
  styleId?: string;
  genreId?: string;
  activeChordSymbol?: string;
  activeChordPc?: number;
  activeChordIntervals?: number[];
  previousMidi?: number;
  articulation?: string;
}

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
  const isFixedPitch = /piano|rhodes|vibraphone|harpsichord|vibes|fm-ep|clav/i.test(inst);
  if (isFixedPitch) {
    const isWerckmeister = options.styleId?.includes('werckmeister') || options.genreId?.includes('werckmeister');
    if (isWerckmeister) {
      const pc = ((midiNote % 12) + 12) % 12;
      const offsets = [0, -10, -8, -6, -10, -2, -12, -4, -12, -8, -4, -10];
      return offsets[pc];
    }
    return 0; // Aggressively lock to 12-TET
  }

  let offset = baseOffset;

  // 2. Dynamic Just Intonation for Strings/Choirs (Prompt 15)
  const isBowedOrVoice = /string|violin|viola|cello|fiddle|strings|choir|voice|vocal/i.test(inst);
  if (isBowedOrVoice && options.activeChordPc !== undefined) {
    const pc = ((Math.round(midiNote) % 12 - options.activeChordPc) + 12) % 12;
    if (pc === 4) {
      // Major 3rd: flatten by -13.7 cents
      offset = -13.7;
    } else if (pc === 10) {
      // Minor 7th: flatten by -31 cents
      offset = -31.0;
    }
  }

  // 3. The Leading-Tone Push (Prompt 15)
  const isClassicalOrJazz = /classical|jazz|swing|chamber|orchestra/i.test((options.styleId || '') + ' ' + (options.genreId || ''));
  if (isClassicalOrJazz && options.activeChordPc !== undefined) {
    const pc = ((Math.round(midiNote) % 12 - options.activeChordPc) + 12) % 12;
    if (pc === 11) {
      offset = +8.0;
    }
  }

  // 4. Blue Note Magnetic Pull (Prompt 15)
  const isBluesOrRock = /blues|rock|grunge|metal/i.test((options.styleId || '') + ' ' + (options.genreId || ''));
  if (isBluesOrRock && options.activeChordPc !== undefined) {
    const pc = ((Math.round(midiNote) % 12 - options.activeChordPc) + 12) % 12;
    if (pc === 3) {
      offset = +35.0; // drift to blue note
    }
  }

  // 5. Fret-Snapping for Guitars (Prompt 15)
  const isFretted = /guitar|bass|ukulele|banjo|tres|cavaquinho/i.test(inst);
  if (isFretted && !/slide|bend|gliss|portamento/i.test(options.articulation || '')) {
    offset = Math.round(offset / 50) * 50;
  }

  return offset;
}

export const TUNING_SYSTEMS: Record<string, TuningSystem> = {
  '12-tet': {
    id: '12-tet',
    name: '12-TET Equal Temperament',
    description: 'Standard 12-tone equal temperament (A4 = 440 Hz)',
    getFrequencyHz(midiNote, tonicPc, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      return 440 * Math.pow(2, (midiNote + cents / 100 - 69) / 12);
    },
    getCentsOffset(midiNote, _tonicPc, options) {
      return applyTuningConstraints(0, midiNote, options);
    },
  },

  'just-intonation': {
    id: 'just-intonation',
    name: 'Just Intonation (5-limit)',
    description: 'Harmonic pure intervals based on integer frequency ratios',
    getFrequencyHz(midiNote, tonicPc = 0, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      const relative = midiNote - (60 + tonicPc);
      const pc = ((relative % 12) + 12) % 12;
      const octave = Math.floor(relative / 12);
      const ratios = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 9/5, 15/8];
      const tonicFreq = 440 * Math.pow(2, ((60 + tonicPc) - 69) / 12);
      const baseFreq = tonicFreq * ratios[pc] * Math.pow(2, octave);
      return baseFreq * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = 0, options) {
      const relative = midiNote - (60 + tonicPc);
      const pc = ((relative % 12) + 12) % 12;
      const ratios = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 9/5, 15/8];
      const baseCents = 1200 * Math.log2(ratios[pc]) - pc * 100;
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'maqam-bayati': {
    id: 'maqam-bayati',
    name: 'Arabic Maqam Bayati',
    description: 'Bayati ajnas featuring quarter-tone neutral second (-50 cents on 2nd degree)',
    getFrequencyHz(midiNote, tonicPc = 2, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      const baseHz = 440 * Math.pow(2, (midiNote - 69) / 12);
      return baseHz * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = 2, options) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      let baseCents = 0;
      if (pc === 1 || pc === 2) {
        baseCents = -50;
      }
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'blues-continuum': {
    id: 'blues-continuum',
    name: 'Blues Neutral Third & Slur',
    description: 'Dynamic blues-scale neutral third (+35 cents offset on minor third)',
    getFrequencyHz(midiNote, tonicPc = 0, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      const baseHz = 440 * Math.pow(2, (midiNote - 69) / 12);
      return baseHz * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = 0, options) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      let baseCents = 0;
      if (pc === 3) baseCents = +35;
      if (pc === 6) baseCents = -20;
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'gamelan-slendro': {
    id: 'gamelan-slendro',
    name: 'Gamelan Slendro (5-tone equidistance)',
    description: 'Inharmonic 5-tone pentatonic scale (~240 cents step size)',
    getFrequencyHz(midiNote, tonicPc = 0, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      return 440 * Math.pow(2, (midiNote + cents / 100 - 69) / 12);
    },
    getCentsOffset(midiNote, tonicPc = 0, options) {
      const relative = midiNote - (60 + tonicPc);
      const semitone = ((relative % 12) + 12) % 12;
      const degree = Math.max(0, Math.min(4, Math.round(semitone * 5 / 12)));
      let baseCents = degree * 240 - semitone * 100;

      // 5. Gamelan Slendro Octave Stretching (Prompt 15): +2 cents per octave
      const octave = (midiNote - 60) / 12;
      baseCents += octave * 2;

      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },

  'werckmeister-iii': {
    id: 'werckmeister-iii',
    name: 'Werckmeister III Well-Temperament',
    description: 'Historically fixed keyboard temperament (Werckmeister III)',
    getFrequencyHz(midiNote, tonicPc = 0, options) {
      const cents = this.getCentsOffset(midiNote, tonicPc, options);
      return 440 * Math.pow(2, (midiNote + cents / 100 - 69) / 12);
    },
    getCentsOffset(midiNote, _tonicPc = 0, options) {
      const pc = ((midiNote % 12) + 12) % 12;
      const offsets = [0, -10, -8, -6, -10, -2, -12, -4, -12, -8, -4, -10];
      const baseCents = offsets[pc];
      return applyTuningConstraints(baseCents, midiNote, options);
    },
  },
};

export function resolveTuningSystem(systemId = '12-tet'): TuningSystem {
  return TUNING_SYSTEMS[systemId] ?? TUNING_SYSTEMS['12-tet'];
}
