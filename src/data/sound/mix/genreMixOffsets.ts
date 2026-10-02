export const GENRE_MIX_OFFSETS: Record<string, Record<string, number>> = {
  flamenco: { lead: 1.5, comp: 2.0, bass: -2.5, pad: -4.0 },
  electronic: { bass: 3.0, lead: 0.0, comp: -1.5, pad: 1.0 },
  jazz: { lead: 1.0, bass: 1.0, comp: -0.5, pad: -3.0 },
  rock: { comp: 2.0, bass: 1.5, lead: 1.0, pad: -2.0 },
  orchestral: { pad: 2.0, lead: 0.0, comp: 0.0, bass: 0.0 },
};
