export const ELECTRONIC_MIX_GENRE_PATTERN = /electronic|house|disco|drum-and-bass|uk-bass|reggaeton|kpop/;
export const INSTRUMENT_MIX_TRIMS: Record<string, { electronic?: number; acoustic?: number }> = {
  'upright-bass': { electronic: 0, acoustic: -2.5 },
  bass: { electronic: 0, acoustic: -1.25 },
  piano: { acoustic: -0.8 },
  bandoneon: { acoustic: -0.5 },
};
