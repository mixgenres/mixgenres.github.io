import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "cu-cumbia-drum",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Tambora / alegre conversation",
          "family": "Cumbia Drums",
          "category": "groove",
          "description": "A low-and-high hand-drum conversation creates a layered cumbia pulse.",
          "tags": [
            "cumbia",
            "tambora",
            "alegre"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "cumbia-drum"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            8,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84,
            0.64
          ],
          "syncopationRating": 0.72,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "hand-drum"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "cu-cumbia-drum-v-sparse",
              "parentPatternId": "cu-cumbia-drum",
              "name": "Tambora / Alegre Interlock — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                6,
                11
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "cu-cumbia-drum-v-shift",
              "parentPatternId": "cu-cumbia-drum",
              "name": "Tambora / Alegre Interlock — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "cumbia",
            "tambora",
            "alegre"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "cu-07-tambor-alegre-reply",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Tambor Alegre Reply",
          "family": "Colombian Cumbia",
          "category": "groove",
          "description": "Hand-drum answer pattern that sits around",
          "tags": [
            "tambor",
            "call-response"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "cumbia-drum"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            5,
            8,
            13,
            16,
            21,
            24,
            29
          ],
          "accentProfile": [
            0.9,
            0.55,
            0.78,
            0.62,
            0.85,
            0.5,
            0.8,
            0.65
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "tambor",
            " call-response"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tambor",
            "call-response"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
,
  {
    "id": "tech-cumbia-tambora-pattern",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "tambora pattern",
    "shortName": "tambora pattern",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: tambora pattern",
    "tags": [
      "cumbia",
      "tambora pattern"
    ],
    "approaches": [
      "tambora pattern"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "cumbia",
      "tambora pattern"
    ],
    "techniques": [
      "tambora pattern"
    ]
  },
  {
    "id": "tech-cumbia-alegre-improvisation",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "alegre improvisation",
    "shortName": "alegre improvisation",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: alegre improvisation",
    "tags": [
      "cumbia",
      "alegre improvisation"
    ],
    "approaches": [
      "alegre improvisation"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "hand-percussion"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "cumbia",
      "alegre improvisation"
    ],
    "techniques": [
      "alegre improvisation"
    ]
  },
  {
    "id": "tech-cumbia-llamador-pulse",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia",
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "llamador pulse",
    "shortName": "llamador pulse",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: llamador pulse",
    "tags": [
      "cumbia",
      "llamador pulse"
    ],
    "approaches": [
      "llamador pulse"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "cumbia",
      "llamador pulse"
    ],
    "techniques": [
      "llamador pulse"
    ]
  },
  {
    "id": "tech-cumbia-guacharaca-scrape",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "guacharaca scrape",
    "shortName": "guacharaca scrape",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: guacharaca scrape",
    "tags": [
      "cumbia",
      "guacharaca scrape"
    ],
    "approaches": [
      "guacharaca scrape"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "cumbia",
      "guacharaca scrape"
    ],
    "techniques": [
      "guacharaca scrape"
    ]
  },
  {
    "id": "tech-cumbia-rebajada-half-speed-feel",
    "worldId": "cumbia",
    "styleIds": [],
    "name": "rebajada half-speed feel",
    "shortName": "rebajada half-speed feel",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: rebajada half-speed feel",
    "tags": [
      "cumbia",
      "rebajada half-speed feel"
    ],
    "approaches": [
      "rebajada half-speed feel"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
    ],
    "instruments": [
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "cumbia",
      "rebajada half-speed feel"
    ],
    "techniques": [
      "rebajada half-speed feel"
    ]
  },
  {
    "id": "style-cumbia-traditional-coastal-cumbia-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "Traditional Coastal Cumbia Signature Cell",
    "shortName": "Traditional Coastal Cumbia Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "tambora",
      "bombo",
      "hand-percussion",
      "guacharaca"
    ],
    "meter": "2/4",
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "alegre improvisation",
      "guacharaca scrape",
      "llamador pulse",
      "tambora pattern",
      "cumbia bass ostinato",
      "cumbia turnaround"
    ]
  },
  {
    "id": "style-cumbia-cumbia-orchestral-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-orchestral"
    ],
    "name": "Cumbia Orchestral Signature Cell",
    "shortName": "Cumbia Orchestral Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "clarinet",
      "trumpet",
      "trombone",
      "bass"
    ],
    "meter": "2/4",
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "cumbia turnaround",
      "cumbia bass ostinato",
      "digital cumbia sub-bass",
      "electric-guitar cumbia riff",
      "gaita melody"
    ]
  },
  {
    "id": "style-cumbia-cumbia-peruana-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-peruana"
    ],
    "name": "Cumbia Peruana Signature Cell",
    "shortName": "Cumbia Peruana Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "hand-percussion"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "cumbia bass ostinato",
      "electric-guitar cumbia riff",
      "digital cumbia sub-bass",
      "cumbia turnaround"
    ]
  },
  {
    "id": "style-cumbia-cumbia-digital-global-bass-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "Cumbia Digital / Global Bass Signature Cell",
    "shortName": "Cumbia Digital / Global Bass Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "sampler",
      "sub-bass",
      "drums",
      "hand-percussion"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "digital cumbia sub-bass",
      "cumbia bass ostinato",
      "cumbia turnaround",
      "electric-guitar cumbia riff",
      "llamador pulse"
    ]
  }
];
