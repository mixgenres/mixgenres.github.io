import type { GenreWorld } from '../../schema';
export const METAL_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.2, swing: 0.0, pocket: 'ahead', pocketDepth: 5 },
  "tuningSystem": "12-tet",
  "signatureCell": "High-speed palm-muted galloping guitar chug locked with double-kick drum and crushing breakdown",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "pushed"
    }
};
