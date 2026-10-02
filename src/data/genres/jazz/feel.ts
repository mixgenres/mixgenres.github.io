import type { GenreWorld, DrumRuleStep } from '../../schema';
export const JAZZ_WORLD_FEEL: Partial<GenreWorld> = {
  drumRules: {
      evaluateStep: (step: DrumRuleStep) => {
        const events = [];
        if (step.kick) events.push({ type: 'kick', velocity: step.velocity * 0.8, time: step.time });
        if (step.snare) {
          events.push({ type: 'snare', velocity: step.velocity, time: step.time });
          if (step.velocity < 60) events.push({ type: 'snare_ghost', velocity: step.velocity, time: step.time });
          else if (step.velocity > 95) events.push({ type: 'snare_rimshot', velocity: step.velocity, time: step.time });
        }
        if (step.hihat) {
          let hatType = step.velocity < 60 ? 'hihat_tip' : 'hihat_shank';
          if (step.isOpen) hatType = 'hihat_open';
          else if (step.isPedal) hatType = 'hihat_pedal';
          events.push({ type: hatType, velocity: step.velocity, time: step.time });
        }
        if (step.ghosts) step.ghosts.forEach((g: { velocity: number; time: number }) => events.push({ type: 'snare_ghost', velocity: g.velocity, time: g.time }));
  
        return events;
      }
    },
  "tuningSystem": "12-tet",
  "signatureCell": "Spang-a-lang ride cymbal with 4-to-the-bar walking bass and ii-V-I progressions",
  "grooveMechanics": {
      "swingPercentage": 66,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "laid-back"
    }
};
