import type { GenreWorld, DrumRuleStep, SamplerTimbreControl } from '../../schema';

export const REGGAETON_DEMBOW_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "reggaeton-dembow",
  "name": "Reggaetón / Dembow",
  "family": "Caribbean / Latin urban",
  "color": "#d14b7a",
  "level": "world",
  "description": "Reggaetón and dembow are represented as"
};

export const REGGAETON_DEMBOW_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Perreo",
      "Melodic",
      "Neoperreo",
      "Dancehall",
      "Pop-Reggaeton",
      "Trap",
      "Playero",
      "Bachata"
    ],
  "artists": [
      "Daddy Yankee",
      "Don Omar",
      "J Balvin",
      "Maluma",
      "Ms Nina",
      "Tomasa del Real",
      "El General",
      "Nando Boom",
      "Luis Fonsi",
      "Rosalía",
      "Bad Bunny",
      "Anuel AA",
      "DJ Playero",
      "DJ Negro",
      "Aventura"
    ],
  "concepts": [
      "dembow",
      "negative space",
      "kick-snare interlock",
      "syncopated sub-bass",
      "vocal pocket"
    ],
  "crossLinks": [
      "Reggaetón ↔ Dancehall / Afrobeats",
      "Reggaetón ↔ Salsa / Bachata"
    ]
};

export const REGGAETON_DEMBOW_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "drums": [
        "dembow skeleton",
        "kick/snare interlock"
      ],
      "bass": [
        "syncopated sub answers"
      ],
      "harmony": [
        "short offbeat stabs"
      ],
      "synth": [
        "syncopated reggaetón phrasing"
      ]
    }
};

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
