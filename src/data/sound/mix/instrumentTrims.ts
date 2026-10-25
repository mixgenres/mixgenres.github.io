export const ELECTRONIC_MIX_GENRE_PATTERN = /electronic|house|disco|drum-and-bass|uk-bass|reggaeton|kpop/;
export const INSTRUMENT_MIX_TRIMS: Record<string, { electronic?: number; acoustic?: number }> = {
  // This compact SoundFont patch is a sustained vowel guide, not a recorded
  // singer. Keep it behind the band so the groove remains present while the
  // user follows the lead melody.
  voice: { electronic: -10.5, acoustic: -10.5 },
  'upright-bass': { electronic: 0, acoustic: -2.5 },
  bass: { electronic: 0, acoustic: -1.25 },
  piano: { acoustic: -0.8 },
  bandoneon: { acoustic: -0.5 },
  // Equal-velocity, repeated-contact renders of the shipped bank put these
  // sources 13–28 dB below piano peaks. Fixed source compensation restores
  // readable attacks; quieter gestures and velocity layers retain their ratios.
  congas: { acoustic: 10 },
  bongos: { acoustic: 12 },
  cowbell: { acoustic: 16 },
  claves: { acoustic: 16 },
  guiro: { acoustic: 20 },
  guira: { acoustic: 20 },
  guacharaca: { acoustic: 20 },
  dikanza: { acoustic: 20 },
  washboard: { acoustic: 20 },
  shaker: { acoustic: 10 },
  maracas: { acoustic: 10 },
  shekere: { acoustic: 10 },
  sistrum: { acoustic: 10 },
  tambourine: { acoustic: 8 },
};
