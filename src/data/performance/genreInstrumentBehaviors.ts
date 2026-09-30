/** Ordered genre/instrument exceptions retained from the original performance compiler. */
export const ANTICIPATED_BASS_GENRES = ['salsa', 'timba'];
export const IDIOMATIC_DEGREE_RULES = [
  { genrePattern: /country/i, instrumentPattern: /fiddle/i, degrees: [1, 3, 5, 6, 5, 3, 2, 1] },
  { genrePattern: /tango|milonga/i, instrumentPattern: /violin/i, degrees: [1, 3, 5, 7, 6, 5, 3, 2] },
] as const;
