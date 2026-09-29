import type { GenreWorld, DrumRuleStep, SamplerTimbreControl } from '../../schema';
export const REGGAETON_DEMBOW_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.5, swing: 0.0, pocket: 'strict_grid', pocketDepth: 0, intonationSystem: 'equal', quantizeJitterMs: 2 },
  drumRules: {
      evaluateStep: (step: DrumRuleStep) => {
        const kickTimbre: SamplerTimbreControl = {
          samplePlaybackRate: 1.0,
          formantShiftAmount: 0,
          aliasingArtifacts: 0.1,
          transientShaping: { attackMs: 2, sustainLevel: 0.2 },
          distortion: { type: 'digital_hard_clip', driveAmount: 0.4 },
          intonationOffsetCents: 0,
          actuationSyncOffsetMs: 0
        };
        const snareTimbre: SamplerTimbreControl = {
          samplePlaybackRate: 1.2,
          formantShiftAmount: -0.2,
          aliasingArtifacts: 0.5,
          transientShaping: { attackMs: 0, sustainLevel: 0.8 },
          distortion: { type: 'tape_saturation', driveAmount: 0.8 },
          intonationOffsetCents: 0,
          actuationSyncOffsetMs: 0
        };
  
        return [
          ...(step.kick ? [{ type: 'kick', time: step.time, velocity: step.velocity, timbreControl: kickTimbre }] : []),
          ...(step.snare ? [{ type: 'snare_rimshot', time: step.time, velocity: step.velocity, timbreControl: snareTimbre }] : [])
        ];
      }
    },
  "tuningSystem": "12-tet",
  "signatureCell": "Dembow kick/snare conversation with a syncopated sub-bass answer",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "pushed",
      "humanizeJitterMs": 5
    }
};
