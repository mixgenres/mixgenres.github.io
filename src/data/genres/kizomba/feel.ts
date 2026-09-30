import type { GenreWorld, DrumRuleStep, SamplerTimbreControl } from '../../schema';
export const KIZOMBA_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.4, swing: 0.08, pocket: 'center', pocketDepth: 0, intonationSystem: 'equal', quantizeJitterMs: 2 },
  drumRules: {
      evaluateStep: (step: DrumRuleStep) => {
        const percussionTimbre: SamplerTimbreControl = {
          samplePlaybackRate: 0.6,
          formantShiftAmount: 0,
          aliasingArtifacts: 0.6,
          transientShaping: { attackMs: 15, sustainLevel: 0.4 },
          distortion: { type: 'tape_saturation', driveAmount: 0.3 },
          intonationOffsetCents: 0,
          actuationSyncOffsetMs: 0
        };
  
        return [
          ...(step.kick ? [{ type: 'kick_sub', time: step.time, velocity: step.velocity * 0.8, timbreControl: percussionTimbre }] : []),
          ...(step.snare ? [{ type: 'soft_clap', time: step.time, velocity: step.velocity * 0.7, timbreControl: percussionTimbre }] : []),
          ...(step.hihat ? [{ type: 'shaker', time: step.time, velocity: step.velocity * 0.6 }] : [])
        ];
      }
    },
  "tuningSystem": "12-tet",
  "signatureCell": "Syncopated batida kick [0,6,8,12,14] with continuous 16th dikanza scraper and warm sub-bass",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "laid-back"
    }
};
