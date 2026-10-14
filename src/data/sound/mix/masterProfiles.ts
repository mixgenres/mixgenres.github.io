/** Shared live/export master defaults. These are product mix targets, not loudness measurements. */
export const MASTER_MIX_DEFAULTS = {
  bassForward: 0.5, brightness: 0.5, dryness: 0.5, width: 0.5,
  roomScale: 0.34, subEnhancement: 0.16, outputGain: 1,
  // Bring quiet SoundFont parts into the glue stage's working range and
  // recover level after compression. Sparse rendered pop passages were still
  // peaking 8 dB below the shared ceiling at +12 dB; the linked -2 dBFS reserve
  // and live lookahead guard catch dense sections after this additional lift.
  programMakeupDb: 18,
};
export const MASTER_GLUE_PROFILES = {
  salsa: { threshold: -12, knee: 12, ratio: 3, attack: 0.01, release: 0.15 },
  gentle: { threshold: -8, knee: 18, ratio: 1.8, attack: 0.08, release: 0.35 },
  punchy: { threshold: -16, knee: 8, ratio: 3, attack: 0.015, release: 0.12 },
};

/** Neutral style controls, intentionally inherited unless a style authors them. */
export const DEFAULT_STYLE_MASTER_PROFILE = { pocket: 0.5, lift: 0.5 };
