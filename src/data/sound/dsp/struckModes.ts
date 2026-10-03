/** Simplified modal models, not measured instrument impulse responses.
 * Modern carved bars and tuned pan notes must not share an unshaped bar's
 * inharmonic spectrum. See docs/sample-authenticity.md for sources/limits. */
export const STRUCK_MODES: Record<string, { ratios: number[]; gains: number[]; decays: number[]; strike: number }> = {
  marimba: { ratios: [1, 4, 10], gains: [1, .22, .07], decays: [.55, .18, .06], strike: .08 },
  xylophone: { ratios: [1, 3, 6], gains: [1, .48, .15], decays: [.25, .12, .04], strike: .18 },
  vibraphone: { ratios: [1, 4, 10], gains: [1, .18, .06], decays: [1, .35, .1], strike: .05 },
  'steel-drums': { ratios: [1, 2, 3], gains: [1, .5, .24], decays: [.7, .4, .18], strike: .12 },
  // Cantilever tine approximation. Local comb/tine tuning is not universal.
  kalimba: { ratios: [1, 6.267, 17.55], gains: [1, .12, .035], decays: [.65, .12, .025], strike: .12 },
  'music-box': { ratios: [1, 6.267, 17.55], gains: [1, .18, .04], decays: [.8, .16, .04], strike: .1 },
  celeste: { ratios: [1, 2.756, 5.404], gains: [1, .3, .1], decays: [.7, .24, .08], strike: .06 },
};
export const UNMEASURED_BAR_MODES = { ratios: [1, 2.756, 5.404], gains: [1, .35, .15], decays: [.4, .2, .1], strike: .1 };
