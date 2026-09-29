import type { GenreWorld } from '../../schema';

/** Standalone authored definition for Industrial. */
export const INDUSTRIAL_WORLD: GenreWorld = {
  "id": "industrial",
  "name": "Industrial",
  "family": "Electronic / Mechanical / Noise",
  "color": "#4f5459",
  "level": "world",
  "description": "Mechanical rhythms, distorted synthesizers, harsh noise sampling, and relentless electronic drive.",
  "substyles": [
    "EBM",
    "Industrial Techno",
    "Noise Industrial",
    "Dark Industrial"
  ],
  "artists": [
    "Front 242",
    "Nitzer Ebb",
    "Skinny Puppy",
    "Ministry",
    "Nine Inch Nails"
  ],
  "concepts": [
    "Sequenced 16th bass",
    "Distorted drums",
    "Sampled metallic noise",
    "Harsh sequencing"
  ],
  "crossLinks": [
    "Metal ↔ Rock",
    "Metal ↔ Classical / Symphonic",
    "Metal ↔ Math Rock"
  ],
  "roles": {
    "lead": [
      "synth",
      "noise-sweep"
    ],
    "harmony": [
      "synth",
      "sampler"
    ],
    "bass": [
      "bass-lead",
      "sub-bass",
      "synth"
    ],
    "rhythm": [
      "drums"
    ],
    "percussion": [
      "sampler",
      "noise-sweep"
    ]
  },
  "rhythm": {
    "syncopation": 0.2,
    "swing": 0,
    "pocket": "ahead",
    "pocketDepth": 5
  },
  "tuningSystem": "12-tet",
  "signatureCell": "High-speed palm-muted galloping guitar chug locked with double-kick drum and crushing breakdown",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed"
  },
  "styleDefinitions": [
    {
      "id": "industrial-ebm",
      "worldId": "industrial",
      "name": "EBM",
      "origin": "Belgium / Germany",
      "era": "1980s–1990s",
      "description": "Electronic Body Music: sequencing, harsh beats, and aggressive synth bass.",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sampler",
        "bass-lead",
        "noise-sweep"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        132
      ],
      "keySubstyles": [
        "EBM",
        "Industrial Techno",
        "Noise Industrial",
        "Dark Industrial"
      ],
      "coreConcepts": [
        "Sequenced 16th-note basslines",
        "Aggressive drum machines",
        "Sampled metallic noise"
      ],
      "rhythmicGrammar": [
        "Driving four-on-the-floor mechanical pulse"
      ],
      "danceTags": [
        "club-dark"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Mechanical 16th bass with cold industrial beat",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      }
    }
  ],
  "patterns": [
    {
      "id": "industrial--industrial-mechanical-pulse",
      "worldId": "industrial",
      "name": "Industrial Mechanical Pulse",
      "meter": "4/4",
      "cycleLength": 16,
      "subdivisions": 16,
      "category": "groove",
      "family": "industrial",
      "description": "Relentless sequenced electronic kick and distorted synth pulse",
      "onsetGrid": [
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0
      ],
      "instruments": [
        "synth",
        "drums",
        "sampler",
        "bass-lead",
        "noise-sweep"
      ],
      "roles": [
        "rhythm",
        "bass"
      ],
      "tags": [
        "mechanical",
        "driving",
        "electronic"
      ],
      "scopes": [
        "region"
      ],
      "variants": [],
      "styleIds": []
    },
    {
      "id": "industrial--industrial-ebm-pulse-native",
      "worldId": "industrial",
      "name": "Industrial EBM 16th Pulse",
      "shortName": "Industrial EBM 16th Pulse",
      "family": "industrial",
      "category": "groove",
      "description": "Rigid electronic 16th-note motor with heavy downbeat emphasis and hard stop at the bar turn.",
      "tags": [
        "EBM-pulse",
        "mechanical-stop",
        "industrial"
      ],
      "approaches": [
        "EBM-pulse",
        "mechanical-stop",
        "industrial"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass",
        "rhythm",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "EBM-pulse",
        "mechanical-stop",
        "industrial"
      ]
    },
    {
      "id": "industrial--industrial-four-native",
      "worldId": "industrial",
      "name": "Industrial Four Pulse",
      "shortName": "Industrial Four Pulse",
      "family": "industrial",
      "category": "groove",
      "description": "Relentless quarter-note pulse with metallic punctuation at the phrase end.",
      "tags": [
        "industrial-four",
        "mechanical-stop",
        "industrial"
      ],
      "approaches": [
        "industrial-four",
        "mechanical-stop",
        "industrial"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "rhythm",
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "industrial-four",
        "mechanical-stop",
        "industrial"
      ]
    },
    {
      "id": "industrial--industrial-ebm-pulse",
      "worldId": "industrial",
      "name": "Industrial EBM Pulse",
      "shortName": "Industrial EBM Pulse",
      "family": "industrial",
      "category": "groove",
      "description": "Rigid four-on-floor pulse coupled to 16th-note bass attacks and controlled stops.",
      "tags": [
        "ebm",
        "mechanical",
        "16th"
      ],
      "approaches": [
        "ebm",
        "mechanical",
        "16th"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "rhythm",
        "bass",
        "pulse"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "ebm",
        "mechanical",
        "16th"
      ]
    },
    {
      "id": "industrial--industrial-four-kick",
      "worldId": "industrial",
      "name": "Industrial Four Kick",
      "shortName": "Industrial Four Kick",
      "family": "industrial",
      "category": "groove",
      "description": "Heavy quarter-note kick grid with bar-end interruption for impact.",
      "tags": [
        "industrial",
        "four-kick",
        "impact"
      ],
      "approaches": [
        "industrial",
        "four-kick",
        "impact"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "pulse"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "industrial",
        "four-kick",
        "impact"
      ]
    },
    {
      "id": "industrial--industrial-metal-hit",
      "worldId": "industrial",
      "name": "Industrial Metal Hit",
      "shortName": "Industrial Metal Hit",
      "family": "industrial",
      "category": "groove",
      "description": "Short metallic impact accents placed around the groove rather than on every beat.",
      "tags": [
        "metal-hit",
        "noise",
        "punctuation"
      ],
      "approaches": [
        "metal-hit",
        "noise",
        "punctuation"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "percussion",
        "rhythm"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        7,
        8,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "metal-hit",
        "noise",
        "punctuation"
      ]
    },
    {
      "id": "industrial--industrial-stop-start",
      "worldId": "industrial",
      "name": "Industrial Stop Start",
      "shortName": "Industrial Stop Start",
      "family": "industrial",
      "category": "groove",
      "description": "Synchronized cutoff/re-entry cell for section transitions and breakdowns.",
      "tags": [
        "stop-start",
        "breakdown",
        "industrial"
      ],
      "approaches": [
        "stop-start",
        "breakdown",
        "industrial"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "rhythm",
        "harmony",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "stop-start",
        "breakdown",
        "industrial"
      ]
    },
    {
      "id": "industrial--industrial-bass-lock",
      "worldId": "industrial",
      "name": "Industrial Bass Lock",
      "shortName": "Industrial Bass Lock",
      "family": "industrial",
      "category": "groove",
      "description": "Low-register power/riff attacks synchronized to the mechanical pulse.",
      "tags": [
        "industrial",
        "EBM-pulse",
        "mechanical-stop"
      ],
      "approaches": [
        "industrial",
        "EBM-pulse",
        "mechanical-stop"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "industrial",
        "EBM-pulse",
        "mechanical-stop"
      ]
    },
    {
      "id": "industrial--industrial-metal-percussion",
      "worldId": "industrial",
      "name": "Industrial Metal Percussion",
      "shortName": "Industrial Metal Percussion",
      "family": "industrial",
      "category": "groove",
      "description": "Metallic strike accents on transitions and offbeat mechanical cells.",
      "tags": [
        "industrial",
        "mechanical-stop",
        "metal-hit"
      ],
      "approaches": [
        "industrial",
        "mechanical-stop",
        "metal-hit"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        7,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "industrial",
        "mechanical-stop",
        "metal-hit"
      ]
    }
  ]
};
