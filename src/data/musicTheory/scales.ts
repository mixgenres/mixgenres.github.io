/** Canonical improvisation-scale vocabulary shared by melody generation and WorldContracts. */
export const MAJOR_KEY_INTERVALS = [0, 2, 4, 5, 7, 9, 11];
export const MINOR_KEY_INTERVALS = [0, 2, 3, 5, 7, 8, 10];

export const SCALE_MODE_INTERVALS: Record<string, number[]> = {
  'major': [0, 2, 4, 5, 7, 9, 11],
  'ionian': [0, 2, 4, 5, 7, 9, 11],
  'natural-minor': [0, 2, 3, 5, 7, 8, 10],
  'aeolian': [0, 2, 3, 5, 7, 8, 10],
  'harmonic-minor': [0, 2, 3, 5, 7, 8, 11],
  'melodic-minor': [0, 2, 3, 5, 7, 9, 11],
  'dorian': [0, 2, 3, 5, 7, 9, 10],
  'phrygian': [0, 1, 3, 5, 7, 8, 10],
  'phrygian-dominant': [0, 1, 4, 5, 7, 8, 10],
  'flamenco': [0, 1, 4, 5, 7, 8, 10],
  'lydian': [0, 2, 4, 6, 7, 9, 11],
  'mixolydian': [0, 2, 4, 5, 7, 9, 10],
  'locrian': [0, 1, 3, 5, 6, 8, 10],
  'blues': [0, 3, 5, 6, 7, 10],
  'minor-blues': [0, 3, 5, 6, 7, 10],
  'major-blues': [0, 2, 3, 4, 7, 9],
  'minor-pentatonic': [0, 3, 5, 7, 10],
  'minor-pentatonic-jazz': [0, 3, 5, 7, 10],
  'major-pentatonic': [0, 2, 4, 7, 9],
  'pentatonic-major': [0, 2, 4, 7, 9],
  'bebop-dominant': [0, 2, 4, 5, 7, 9, 10, 11],
  'altered': [0, 1, 3, 4, 6, 8, 10],
  'whole-tone': [0, 2, 4, 6, 8, 10],
  'chromatic': Array.from({ length: 12 }, (_, i) => i),
  'chromatic-enclosure': Array.from({ length: 12 }, (_, i) => i),
};

export const IONIAN     = [0, 2, 4, 5, 7, 9, 11];
export const DORIAN     = [0, 2, 3, 5, 7, 9, 10];
export const AEOLIAN    = [0, 2, 3, 5, 7, 8, 10];
export const MIXOLYDIAN = [0, 2, 4, 5, 7, 9, 10];
export const LYDIAN     = [0, 2, 4, 6, 7, 9, 11];
export const PHRYGIAN_D = [0, 1, 4, 5, 7, 8, 10];
export const ALTERED    = [0, 1, 3, 4, 6, 8, 10];
export const LOCRIAN    = [0, 1, 3, 5, 6, 8, 10];
export const WHOLE_TONE = [0, 2, 4, 6, 8, 10];
export const DIMINISHED = [0, 2, 3, 5, 6, 8, 9, 11];
export const MIXO_B9B13 = [0, 1, 4, 5, 7, 8, 10];
export const MAJ_PENTA  = [0, 2, 4, 7, 9];

export const SCALES = {
  IONIAN, DORIAN, AEOLIAN, MIXOLYDIAN, LYDIAN, PHRYGIAN_D,
  ALTERED, LOCRIAN, WHOLE_TONE, DIMINISHED, MIXO_B9B13, MAJ_PENTA,
};
