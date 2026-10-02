import type { GenreWorld, DrumRuleStep, SamplerTimbreControl } from '../../schema';

export const KIZOMBA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "kizomba",
  "name": "Kizomba",
  "family": "African / Angolan",
  "color": "#c86d3b",
  "level": "world",
  "description": "The sensual partner dance style of"
};

export const KIZOMBA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Tradicional",
      "Semba Playful",
      "Urbankiz",
      "Tarraxinha",
      "Tarraxo",
      "Passada",
      "Ghetto Zouk",
      "Semba Lento"
    ],
  "artists": [
      "Eduardo Paim",
      "Bonga",
      "Paulo Flores",
      "Curtis Seldon",
      "Enah Lebon",
      "DJ Znobia",
      "DJ Mad-R",
      "Gwany",
      "Lil G",
      "Kassav'",
      "Tabanka Djaz",
      "Nelson Freitas",
      "C4 Pedro",
      "Carlos Burity",
      "Waldemar Bastos"
    ],
  "concepts": [
      "batida kick pulse",
      "dikanza bamboo scraper",
      "tarraxinha sub-bass",
      "sensual vocal phrasing",
      "semba guitar arpeggio"
    ],
  "crossLinks": [
      "Kizomba ↔ Zouk",
      "Kizomba ↔ Semba",
      "Kizomba ↔ Blues Fusion"
    ]
};

export const KIZOMBA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "deep tarraxinha sub-bass",
        "melodic semba bassline",
        "batida sub-pulse"
      ],
      "guitar": [
        "semba lead arpeggios",
        "syncopated rhythmic guitar lines"
      ],
      "keys": [
        "atmospheric synth pads",
        "DX7 electric piano chords"
      ],
      "drums": [
        "batida kick and rimshot groove",
        "hi-hat 16th shuffles",
        "dikanza scrape"
      ],
      "synth": [
        "Portuguese and Kimbundu lyric phrasing",
        "sensual vocal call and response"
      ]
    }
};

export const KIZOMBA_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.4, swing: 0.1, pocket: 'strict_grid', pocketDepth: 0, intonationSystem: 'equal', quantizeJitterMs: 2 },
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
