import type { GenreWorld } from '../../schema';
export const FLAMENCO_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.8, swing: 0.0, pocket: 'ahead', pocketDepth: 10 },
  "tuningSystem": "phrygian-mode",
  "signatureCell": "12-beat compás accented on [12, 3, 6, 8, 10] with Andalusian cadence",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight"
    }
};
