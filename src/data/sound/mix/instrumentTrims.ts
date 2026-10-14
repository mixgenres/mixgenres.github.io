export const ELECTRONIC_MIX_GENRE_PATTERN = /electronic|house|disco|drum-and-bass|uk-bass|reggaeton|kpop/;
export const INSTRUMENT_MIX_TRIMS: Record<string, { electronic?: number; acoustic?: number }> = {
  // This compact SoundFont patch is a sustained vowel guide, not a recorded
  // singer. Keep it behind the band so the groove remains present while the
  // user follows the lead melody.
  voice: { electronic: -5.5, acoustic: -5.5 },
  'upright-bass': { electronic: 0, acoustic: -2.5 },
  bass: { electronic: 0, acoustic: -1.25 },
  piano: { acoustic: -0.8 },
  bandoneon: { acoustic: -0.5 },
};
