import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "sk-two-tone-drive",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Two-tone upstroke drive",
          "family": "2 Tone Rhythm",
          "category": "groove",
          "description": "Tighter revival-era offbeat guitar gives the groove a crisp, compact feel.",
          "tags": [
            "2tone",
            "ska",
            "punk"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "electric-guitar",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.76,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "upstroke"
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
              "id": "sk-two-tone-drive-v-sparse",
              "parentPatternId": "sk-two-tone-drive",
              "name": "2 Tone Drive — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                2,
                10
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "sk-two-tone-drive-v-shift",
              "parentPatternId": "sk-two-tone-drive",
              "name": "2 Tone Drive — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "2tone",
            "ska",
            "punk"
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
          "id": "sk-09-ska-drum-drive",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska Drum Drive",
          "family": "First-Wave Ska",
          "category": "groove",
          "description": "An up-tempo drum pattern keeps the dance pulse moving.",
          "tags": [
            "drive"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.5,
            0.82,
            0.92,
            0.55
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "drive"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "drive"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "sk-11-two-tone-guitar-pulse",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Two-Tone Guitar Pulse",
          "family": "Two-Tone",
          "category": "groove",
          "description": "Sharper punk-influenced offbeat guitar with slightly",
          "tags": [
            "two-tone"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.65,
            0.45,
            0.72,
            0.62,
            0.5,
            0.76
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "two-tone"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Two-Tone; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "two-tone"
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
    "id": "tech-ska-jamaican-shuffle",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-jamaican-ska-jazz"
    ],
    "name": "Jamaican shuffle",
    "shortName": "Jamaican shuffle",
    "family": "ska",
    "category": "groove",
    "description": "Technique: Jamaican shuffle",
    "tags": [
      "ska",
      "Jamaican shuffle"
    ],
    "approaches": [
      "Jamaican shuffle"
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
      3,
      6,
      8,
      11,
      14
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
    "durationGrid": [
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
      "ska",
      "Jamaican shuffle"
    ],
    "techniques": [
      "Jamaican shuffle"
    ]
  },
  {
    "id": "tech-ska-ska-punk-double-time",
    "worldId": "ska",
    "styleIds": [
      "ska-third-wave-ska"
    ],
    "name": "ska-punk double-time",
    "shortName": "ska-punk double-time",
    "family": "ska",
    "category": "groove",
    "description": "Technique: ska-punk double-time",
    "tags": [
      "ska",
      "ska-punk double-time"
    ],
    "approaches": [
      "ska-punk double-time"
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
      "ska",
      "ska-punk double-time"
    ],
    "techniques": [
      "ska-punk double-time"
    ]
  },
  {
    "id": "style-ska-jamaican-first-wave-ska-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska"
    ],
    "name": "Jamaican First-Wave Ska Signature Cell",
    "shortName": "Jamaican First-Wave Ska Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
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
      "brass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      2,
      6,
      10,
      14
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
      "ska",
      "signature"
    ],
    "techniques": [
      "jazz horn solo",
      "walking ska bass",
      "skank guitar",
      "horn/guitar call-response",
      "Jamaican shuffle",
      "horn stab"
    ]
  },
  {
    "id": "style-ska-rocksteady-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-rocksteady"
    ],
    "name": "Rocksteady Signature Cell",
    "shortName": "Rocksteady Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
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
      "bass",
      "electric-guitar",
      "drums",
      "voice"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      2,
      6,
      10,
      14
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
      "ska",
      "signature"
    ],
    "techniques": [
      "rocksteady bass",
      "skank guitar",
      "horn/guitar call-response",
      "walking ska bass"
    ]
  },
  {
    "id": "style-ska-jamaican-ska-jazz-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-ska-jazz"
    ],
    "name": "Jamaican Ska Jazz Signature Cell",
    "shortName": "Jamaican Ska Jazz Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
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
      "trumpet",
      "trombone",
      "bass",
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
      "ska",
      "signature"
    ],
    "techniques": [
      "jazz horn solo",
      "skank guitar",
      "walking ska bass",
      "horn/guitar call-response",
      "Jamaican shuffle",
      "horn stab"
    ]
  },
  {
    "id": "style-ska-third-wave-ska-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-third-wave-ska"
    ],
    "name": "Third-Wave Ska Signature Cell",
    "shortName": "Third-Wave Ska Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
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
      "brass"
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
      "ska",
      "signature"
    ],
    "techniques": [
      "horn stab",
      "ska-punk double-time",
      "horn/guitar call-response",
      "jazz horn solo",
      "walking ska bass"
    ]
  }
];
