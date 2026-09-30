export const BLUES_CENTS_BY_PITCH_CLASS: Record<number, number> = { 3: 35, 6: -20 };
export const WERCKMEISTER_CENTS_OFFSETS = [0, -10, -8, -6, -10, -2, -12, -4, -12, -8, -4, -10];
export const MAQAM_NEUTRAL_SECOND_PITCH_CLASSES: number[] = [1, 2];

export const TUNING_SYSTEM_DATA = {
  '12-tet': {
    id: '12-tet', name: '12-TET Equal Temperament',
    description: 'Standard 12-tone equal temperament (A4 = 440 Hz)',
  },
  'just-intonation': {
    id: 'just-intonation', name: 'Just Intonation (5-limit)',
    description: 'Harmonic pure intervals based on integer frequency ratios',
    ratios: [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 9/5, 15/8],
    tonicMidi: 60, defaultTonicPc: 0,
  },
  'maqam-bayati': {
    id: 'maqam-bayati', name: 'Arabic Maqam Bayati',
    description: 'Bayati ajnas featuring quarter-tone neutral second (-50 cents on 2nd degree)',
    defaultTonicPc: 2, neutralSecondPitchClasses: MAQAM_NEUTRAL_SECOND_PITCH_CLASSES, neutralSecondCents: -50,
  },
  'blues-continuum': {
    id: 'blues-continuum', name: 'Blues Neutral Third & Slur',
    description: 'Dynamic blues-scale neutral third (+35 cents offset on minor third)',
    defaultTonicPc: 0, centsByPitchClass: BLUES_CENTS_BY_PITCH_CLASS,
  },
  'gamelan-slendro': {
    id: 'gamelan-slendro', name: 'Gamelan Slendro (5-tone equidistance)',
    description: 'Inharmonic 5-tone pentatonic scale (~240 cents step size)',
    defaultTonicPc: 0, tonicMidi: 60, divisions: 5, centsPerStep: 240, octaveStretchCents: 2,
  },
  'werckmeister-iii': {
    id: 'werckmeister-iii', name: 'Werckmeister III Well-Temperament',
    description: 'Historically fixed keyboard temperament (Werckmeister III)',
    defaultTonicPc: 0, centsOffsets: WERCKMEISTER_CENTS_OFFSETS, fixedPitchInstrumentOffsets: WERCKMEISTER_CENTS_OFFSETS,
  },
} as const;
