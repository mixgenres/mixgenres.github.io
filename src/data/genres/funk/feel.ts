import type { GenreWorld, DrumRuleStep, DrumRuleStickState } from '../../schema';
export const FUNK_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.9, swing: 0.15, pocket: 'behind', pocketDepth: 12 },
  drumRules: {
      evaluateStep: (step: DrumRuleStep, stickState?: DrumRuleStickState) => {
        const events = [];
        if (step.kick) events.push({ type: 'kick', time: step.time, velocity: step.velocity });
  
        if (step.snare) {
          const lastSnare = stickState?.lastSnareHitTime ?? -1;
          const timeSinceLastHit = lastSnare >= 0 ? step.time - lastSnare : 999;
          if (timeSinceLastHit < 0.15 && timeSinceLastHit > 0) {
            events.push({ type: 'snare_ghost', time: step.time, velocity: Math.min(step.velocity, 40) });
          } else {
            events.push({ type: step.velocity > 90 ? 'snare_rimshot' : 'snare', time: step.time, velocity: step.velocity });
          }
        }
        return events;
      }
    },
  "tuningSystem": "12-tet",
  "signatureCell": "Explosive root slap on The One with syncopated 16th ghost notes and chicken-scratch 9th guitar",
  "grooveMechanics": {
      "swingPercentage": 54,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "laid-back"
    }
};
