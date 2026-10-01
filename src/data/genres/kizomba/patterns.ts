import type { GenreWorld, MusicalPattern } from '../../schema';


const KIZOMBA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "kizomba-batida-groove",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Batida & Sub-Kick Beat",
          "family": "Kizomba Drumming",
          "category": "break",
          "transitionType": "fill",
          "description": "The hypnotic heartbeat of Kizomba: low",
          "tags": [
            "kizomba",
            "batida",
            "dikanza",
            "drums",
            "angola"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums",
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.82,
            0.94,
            0.72,
            0.88
          ],
          "velocityProfile": [
            0.95,
            0.78,
            0.88,
            0.68,
            0.82
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "tarraxinha-sub-drop",
              "parentPatternId": "kizomba-batida-groove",
              "name": "Tarraxinha Minimal Sub Drop",
              "variationType": "breakdown",
              "probability": 0.5,
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                1,
                0.92,
                0.86
              ],
              "description": "A stripped-down electronic sub-bass kick anchors the break."
            },
            {
              "id": "kizomba-batida-groove-v-02",
              "parentPatternId": "kizomba-batida-groove",
              "name": "Batida & Sub-Kick Beat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.8999999999999999,
                0.8999999999999999,
                0.7999999999999999,
                0.84
              ],
              "velocityProfile": [
                1,
                0.76,
                0.86,
                0.74,
                0.7999999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const KIZOMBA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "kizomba-dikanza-scraper",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Dikanza Scraper",
          "family": "Percussion",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Authentic Angolan dikanza (reco-reco / bamboo",
          "tags": [
            "kizomba",
            "semba",
            "dikanza",
            "percussion",
            "angola"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.76,
            0.94,
            0.72,
            0.88,
            0.82,
            0.94
          ],
          "velocityProfile": [
            0.72,
            0.88,
            0.68,
            0.84,
            0.76,
            0.88
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "kizomba-dikanza-scraper-v-01",
              "parentPatternId": "kizomba-dikanza-scraper",
              "name": "Dikanza Scraper — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                7,
                10,
                15
              ],
              "accentProfile": [
                0.71,
                0.8899999999999999,
                0.6699999999999999,
                0.83
              ],
              "velocityProfile": [
                0.64,
                0.8,
                0.6000000000000001,
                0.76
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "kizomba-dikanza-scraper-v-02",
              "parentPatternId": "kizomba-dikanza-scraper",
              "name": "Dikanza Scraper — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                7,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.72,
                1,
                0.6799999999999999,
                0.96,
                0.7799999999999999,
                1
              ],
              "velocityProfile": [
                0.78,
                0.86,
                0.66,
                0.8999999999999999,
                0.74,
                0.86
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const KIZOMBA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "kizomba-semba-guitar",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Semba Guitar Arpeggio",
          "family": "Guitar",
          "category": "groove",
          "description": "Fast, intricate African guitar lines add a bright counter-rhythm.",
          "tags": [
            "kizomba",
            "semba",
            "guitar",
            "angola"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar",
            "electric-guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "guitar",
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            9,
            12,
            14
          ],
          "accentProfile": [
            0.98,
            0.74,
            0.88,
            0.74,
            0.92,
            0.82
          ],
          "velocityProfile": [
            0.92,
            0.7,
            0.84,
            0.7,
            0.88,
            0.76
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "kizomba-semba-guitar-v-01",
              "parentPatternId": "kizomba-semba-guitar",
              "name": "Semba Guitar Arpeggio — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9,
                14
              ],
              "accentProfile": [
                0.9299999999999999,
                0.69,
                0.83,
                0.69
              ],
              "velocityProfile": [
                0.8400000000000001,
                0.62,
                0.76,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "kizomba-semba-guitar-v-02",
              "parentPatternId": "kizomba-semba-guitar",
              "name": "Semba Guitar Arpeggio — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                12,
                14
              ],
              "accentProfile": [
                0.94,
                0.82,
                0.84,
                0.82,
                0.88,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.98,
                0.6799999999999999,
                0.82,
                0.76,
                0.86,
                0.74
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "kizomba-tarraxinha-sub",
          "worldId": "kizomba",
          "styleIds": ["kizomba-tarraxinha"],
          "name": "Tarraxinha Sub-Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Heavy syncopated sub-bass pulse anchoring sensual",
          "tags": [
            "kizomba",
            "tarraxinha",
            "sub-bass",
            "bass"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass",
            "synth"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            1,
            0.88,
            0.82
          ],
          "velocityProfile": [
            0.96,
            0.84,
            0.78
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "kizomba-tarraxinha-sub-v-01",
              "parentPatternId": "kizomba-tarraxinha-sub",
              "name": "Tarraxinha Sub-Bass — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                12
              ],
              "accentProfile": [
                0.95,
                0.83
              ],
              "velocityProfile": [
                0.88,
                0.76
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "kizomba-tarraxinha-sub-v-02",
              "parentPatternId": "kizomba-tarraxinha-sub",
              "name": "Tarraxinha Sub-Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                0.96,
                0.96,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.82,
                0.76
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "kizomba-kick-batida",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Kick Batida",
          "family": "Beat",
          "category": "groove",
          "description": "Classic syncopated kizomba batida kick pattern",
          "tags": [
            "kizomba",
            "kick",
            "batida",
            "drums"
          ],
          "scopes": [
            "measure"
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
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.86,
            0.92,
            0.78
          ],
          "velocityProfile": [
            0.95,
            0.82,
            0.86,
            0.74
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "kizomba-kick-batida-v-01",
              "parentPatternId": "kizomba-kick-batida",
              "name": "Kick Batida — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.8099999999999999,
                0.87
              ],
              "velocityProfile": [
                0.87,
                0.74,
                0.78
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-kick-batida-v-02",
              "parentPatternId": "kizomba-kick-batida",
              "name": "Kick Batida — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.94,
                0.88,
                0.86
              ],
              "velocityProfile": [
                1,
                0.7999999999999999,
                0.84,
                0.8
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "kizomba-hats",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Hi-Hats",
          "family": "Beat",
          "category": "groove",
          "description": "16th note hi-hats with subtle swing",
          "tags": [
            "kizomba",
            "hihat",
            "drums"
          ],
          "scopes": [
            "measure"
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
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.92,
            0.62,
            0.82,
            0.64,
            0.88,
            0.62,
            0.82,
            0.68
          ],
          "velocityProfile": [
            0.88,
            0.58,
            0.78,
            0.58,
            0.82,
            0.58,
            0.78,
            0.62
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "kizomba-hats-v-01",
              "parentPatternId": "kizomba-hats",
              "name": "Hi-Hats — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.87,
                0.57,
                0.7699999999999999,
                0.59,
                0.83
              ],
              "velocityProfile": [
                0.8,
                0.49999999999999994,
                0.7000000000000001,
                0.49999999999999994,
                0.74
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-hats-v-02",
              "parentPatternId": "kizomba-hats",
              "name": "Hi-Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.88,
                0.7,
                0.7799999999999999,
                0.72,
                0.84,
                0.7,
                0.7799999999999999,
                0.76
              ],
              "velocityProfile": [
                0.94,
                0.5599999999999999,
                0.76,
                0.6399999999999999,
                0.7999999999999999,
                0.5599999999999999,
                0.8400000000000001,
                0.6
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "kizomba-urban-synth-pulse",
          "worldId": "kizomba",
          "styleIds": ["kizomba-urbankiz"],
          "name": "Urban Kiz Synth Pulse",
          "family": "Synth",
          "category": "groove",
          "description": "Polished electronic synth pulse and atmospheric",
          "tags": [
            "kizomba",
            "urban-kiz",
            "synth",
            "keys"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys",
            "synth"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.8,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.8,
            0.9,
            0.75,
            0.85,
            0.7
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "kizomba-urban-synth-pulse-v-01",
              "parentPatternId": "kizomba-urban-synth-pulse",
              "name": "Urban Kiz Synth Pulse — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                8,
                11
              ],
              "accentProfile": [
                0.7999999999999999,
                0.8999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.8200000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-urban-synth-pulse-v-02",
              "parentPatternId": "kizomba-urban-synth-pulse",
              "name": "Urban Kiz Synth Pulse — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.76,
                0.98,
                0.71
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.88,
                0.73,
                0.9099999999999999,
                0.6799999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "kizomba-vocal-comping",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Vocal Phrase Response",
          "family": "synth",
          "category": "groove",
          "description": "Sensual vocal phrase answers and smooth",
          "tags": [
            "kizomba",
            "synth",
            "comping"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
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
            0.92,
            0.85,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.88,
            0.8,
            0.9,
            0.75
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "kizomba-vocal-comping-v-01",
              "parentPatternId": "kizomba-vocal-comping",
              "name": "Vocal Phrase Response — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                4,
                12,
                15
              ],
              "accentProfile": [
                0.87,
                0.7999999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8,
                0.7200000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-vocal-comping-v-02",
              "parentPatternId": "kizomba-vocal-comping",
              "name": "Vocal Phrase Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                4,
                7,
                12,
                15
              ],
              "accentProfile": [
                0.88,
                0.9299999999999999,
                0.9099999999999999,
                0.88
              ],
              "velocityProfile": [
                0.94,
                0.78,
                0.88,
                0.81
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "breath",
            "phrase-end"
          ]
        },
  {
          "id": "kizomba-comp-12",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Call Comping",
          "family": "Call",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "kizomba",
            "call",
            "comp",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "guitar",
            "keys"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            3,
            5,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.7142857142857143,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-comp-12-v-01",
              "parentPatternId": "kizomba-comp-12",
              "name": "Call Comping — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                5,
                8,
                12,
                15
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-comp-12-v-02",
              "parentPatternId": "kizomba-comp-12",
              "name": "Call Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                3,
                5,
                8,
                11,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "call"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "kizomba-verse-14",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Hook Verse Variation",
          "family": "Hook",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "kizomba",
            "hook",
            "verse",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion",
            "bass"
          ],
          "compatibleRoles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-verse-14-v-01",
              "parentPatternId": "kizomba-verse-14",
              "name": "Hook Verse Variation — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                7,
                11,
                13
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-verse-14-v-02",
              "parentPatternId": "kizomba-verse-14",
              "name": "Hook Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 1,
          "enabled": true
        }
,
  {
    "id": "tech-kizomba-delayed-kick",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-classic-angolan-kizomba"
    ],
    "name": "delayed kick",
    "shortName": "delayed kick",
    "family": "kizomba",
    "category": "groove",
    "description": "Technique: delayed kick",
    "tags": [
      "kizomba",
      "delayed kick"
    ],
    "approaches": [
      "delayed kick"
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
      "kizomba",
      "delayed kick"
    ],
    "techniques": [
      "delayed kick"
    ]
  },
  {
    "id": "tech-kizomba-soft-shaker-subdivision",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-semba-to-kizomba-transition"
    ],
    "name": "soft shaker subdivision",
    "shortName": "soft shaker subdivision",
    "family": "kizomba",
    "category": "groove",
    "description": "Technique: soft shaker subdivision",
    "tags": [
      "kizomba",
      "soft shaker subdivision"
    ],
    "approaches": [
      "soft shaker subdivision"
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
      "kizomba",
      "soft shaker subdivision"
    ],
    "techniques": [
      "soft shaker subdivision"
    ]
  },
  {
    "id": "tech-kizomba-sparse-percussion",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-semba-to-kizomba-transition",
      "kizomba-cape-verdean-ghetto-zouk",
      "kizomba-minimal-tarraxinha",
      "kizomba-tarraxo-club"
    ],
    "name": "sparse percussion",
    "shortName": "sparse percussion",
    "family": "kizomba",
    "category": "groove",
    "description": "Technique: sparse percussion",
    "tags": [
      "kizomba",
      "sparse percussion"
    ],
    "approaches": [
      "sparse percussion"
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
      "kizomba",
      "sparse percussion"
    ],
    "techniques": [
      "sparse percussion"
    ]
  },
  {
    "id": "tech-kizomba-tarraxinha-bass-pulse",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-classic-angolan-kizomba",
      "kizomba-semba-to-kizomba-transition",
      "kizomba-cape-verdean-ghetto-zouk",
      "kizomba-minimal-tarraxinha",
      "kizomba-tarraxo-club"
    ],
    "name": "tarraxinha bass pulse",
    "shortName": "tarraxinha bass pulse",
    "family": "kizomba",
    "category": "groove",
    "description": "Technique: tarraxinha bass pulse",
    "tags": [
      "kizomba",
      "tarraxinha bass pulse"
    ],
    "approaches": [
      "tarraxinha bass pulse"
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
      "kizomba",
      "tarraxinha bass pulse"
    ],
    "techniques": [
      "tarraxinha bass pulse"
    ]
  },
  {
    "id": "tech-kizomba-tarraxo-stop",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-tarraxo-club"
    ],
    "name": "tarraxo stop",
    "shortName": "tarraxo stop",
    "family": "kizomba",
    "category": "groove",
    "description": "Technique: tarraxo stop",
    "tags": [
      "kizomba",
      "tarraxo stop"
    ],
    "approaches": [
      "tarraxo stop"
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
      "kizomba",
      "tarraxo stop"
    ],
    "techniques": [
      "tarraxo stop"
    ]
  },
  {
    "id": "style-kizomba-classic-angolan-kizomba-signature",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-classic-angolan-kizomba"
    ],
    "name": "Classic Angolan Kizomba",
    "shortName": "Classic Angolan Kizomba",
    "family": "kizomba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "kizomba",
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
      "shaker"
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
      "kizomba",
      "signature"
    ],
    "techniques": [
      "kizomba bass ostinato",
      "delayed kick",
      "semba guitar",
      "ghetto-zouk sub-bass",
      "tarraxinha bass pulse"
    ]
  },
  {
    "id": "style-kizomba-semba-to-kizomba-transition-signature",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-semba-to-kizomba-transition"
    ],
    "name": "Semba-to-Kizomba Transition",
    "shortName": "Semba-to-Kizomba Transition",
    "family": "kizomba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "kizomba",
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
      "hand-percussion",
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
      "kizomba",
      "signature"
    ],
    "techniques": [
      "semba guitar",
      "kizomba bass ostinato",
      "soft shaker subdivision",
      "sparse percussion",
      "tarraxinha bass pulse"
    ]
  },
  {
    "id": "style-kizomba-cape-verdean-ghetto-zouk-signature",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-cape-verdean-ghetto-zouk"
    ],
    "name": "Cape Verdean Ghetto Zouk",
    "shortName": "Cape Verdean Ghetto Zouk",
    "family": "kizomba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "kizomba",
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
      "synth",
      "sub-bass",
      "drums",
      "electric-guitar"
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
      "kizomba",
      "signature"
    ],
    "techniques": [
      "sparse percussion",
      "ghetto-zouk sub-bass",
      "long R&B chord voicing",
      "kizomba bass ostinato",
      "tarraxinha bass pulse"
    ]
  },
  {
    "id": "style-kizomba-minimal-tarraxinha-signature",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-minimal-tarraxinha"
    ],
    "name": "Minimal Tarraxinha",
    "shortName": "Minimal Tarraxinha",
    "family": "kizomba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "kizomba",
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
      "sub-bass",
      "drums",
      "synth",
      "voice"
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
      "kizomba",
      "signature"
    ],
    "techniques": [
      "tarraxinha bass pulse",
      "vocal-space arrangement",
      "ghetto-zouk sub-bass",
      "kizomba bass ostinato",
      "sparse percussion"
    ]
  },
  {
    "id": "style-kizomba-tarraxo-club-signature",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-tarraxo-club"
    ],
    "name": "Tarraxo Club",
    "shortName": "Tarraxo Club",
    "family": "kizomba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "kizomba",
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
      "sub-bass",
      "drums",
      "synth",
      "noise-sweep"
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
      "kizomba",
      "signature"
    ],
    "techniques": [
      "tarraxo stop",
      "ghetto-zouk sub-bass",
      "kizomba bass ostinato",
      "sparse percussion",
      "tarraxinha bass pulse"
    ]
  }
];


const KIZOMBA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "kizomba-phrase-9",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Hook Phrase",
          "family": "Hook",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "kizomba",
            "hook",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth"
          ],
          "compatibleInstruments": [
            "synth"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.7142857142857143,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-phrase-9-v-01",
              "parentPatternId": "kizomba-phrase-9",
              "name": "Hook Phrase — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                8,
                13,
                15
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-phrase-9-v-02",
              "parentPatternId": "kizomba-phrase-9",
              "name": "Hook Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7,
                8,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const KIZOMBA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "kizomba-call-10",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Bass Response",
          "family": "Kizomba Bass",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "kizomba",
            "kizomba-bass",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth"
          ],
          "compatibleInstruments": [
            "synth"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            8,
            9,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95
          ],
          "syncopationRating": 0.5714285714285714,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-call-10-v-01",
              "parentPatternId": "kizomba-call-10",
              "name": "Bass Response — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54,
                0.82
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-call-10-v-02",
              "parentPatternId": "kizomba-call-10",
              "name": "Bass Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
                8,
                9,
                12,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2
              ]
            },
            {
              "id": "kizomba-call-10-v-03",
              "parentPatternId": "kizomba-call-10",
              "name": "Bass Response — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                5,
                8,
                9,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.57,
                0.95,
                0.62,
                0.8999999999999999,
                0.62,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "kizomba-bass"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const KIZOMBA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "kizomba-anchor-11",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Semba Anchor",
          "family": "Semba",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "kizomba",
            "semba",
            "anchor",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "compatibleRoles": [
            "bass"
          ],
          "compatibleInstruments": [
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            3,
            6,
            9,
            10,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-anchor-11-v-01",
              "parentPatternId": "kizomba-anchor-11",
              "name": "Semba Anchor — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                6,
                9,
                13,
                15
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-anchor-11-v-02",
              "parentPatternId": "kizomba-anchor-11",
              "name": "Semba Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                3,
                6,
                9,
                10,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "semba"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const KIZOMBA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "kizomba-intro-13",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Drop Intro",
          "family": "Drop",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "kizomba",
            "drop",
            "intro",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "texture"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "guitar",
            "keys"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            6,
            7,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-intro-13-v-01",
              "parentPatternId": "kizomba-intro-13",
              "name": "Drop Intro — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                7,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-intro-13-v-02",
              "parentPatternId": "kizomba-intro-13",
              "name": "Drop Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                7,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "kizomba-intro-13-v-03",
              "parentPatternId": "kizomba-intro-13",
              "name": "Drop Intro — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                6,
                7,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                0.72,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
                0.74,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "drop"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "kizomba-chorus-15",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Bass Chorus Lift",
          "family": "Kizomba Bass",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer increases rhythmic density while keeping the underlying pulse clear.",
          "tags": [
            "kizomba",
            "kizomba-bass",
            "chorus",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "pulse",
            "harmony",
            "drums"
          ],
    
          "approaches": ["groove", "comping"],
          "instruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "harmony",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            2,
            4,
            8,
            9,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-chorus-15-v-01",
              "parentPatternId": "kizomba-chorus-15",
              "name": "Bass Chorus Lift — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                2,
                4,
                9,
                12
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-chorus-15-v-02",
              "parentPatternId": "kizomba-chorus-15",
              "name": "Bass Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                4,
                8,
                9,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "kizomba-chorus-15-v-03",
              "parentPatternId": "kizomba-chorus-15",
              "name": "Bass Chorus Lift — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                2,
                4,
                8,
                9,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                0.72,
                0.88,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
                0.74,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "kizomba-bass"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "kizomba-bridge-16",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Semba Bridge",
          "family": "Semba",
          "category": "sectionPattern",
          "description": "A contrasting bridge texture creates a clear change in energy before the main section returns.",
          "tags": [
            "kizomba",
            "semba",
            "bridge",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "lead"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": [
            "guitar",
            "keys"
          ],
          "compatibleRoles": [
            "harmony",
            "lead"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            10,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "bridge",
            "interlude",
            "development"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-bridge-16-v-01",
              "parentPatternId": "kizomba-bridge-16",
              "name": "Semba Bridge — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                4,
                10,
                11
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-bridge-16-v-02",
              "parentPatternId": "kizomba-bridge-16",
              "name": "Semba Bridge — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                10,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "kizomba-bridge-16-v-03",
              "parentPatternId": "kizomba-bridge-16",
              "name": "Semba Bridge — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                10,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                0.72,
                0.88,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
                0.74,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "semba"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        }
];


const KIZOMBA_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "kizomba-fill-17",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Call Fill",
          "family": "Call",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short transition fill that signals",
          "tags": [
            "kizomba",
            "call",
            "fill",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "fill",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "compatibleRoles": [
            "fill",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion"
          ],
          "canCrossRole": true,
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
            0.72,
            0.78,
            0.84,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            1
          ],
          "syncopationRating": 0,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "fill"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "pre-chorus",
            "turnaround",
            "ending"
          ],
    
    
          "variants": [
            {
              "id": "kizomba-fill-17-v-01",
              "parentPatternId": "kizomba-fill-17",
              "name": "Call Fill — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.6699999999999999,
                0.73,
                0.7899999999999999
              ],
              "velocityProfile": [
                0.64,
                0.65,
                0.76
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-fill-17-v-02",
              "parentPatternId": "kizomba-fill-17",
              "name": "Call Fill — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.6799999999999999,
                0.86,
                0.7999999999999999,
                1
              ],
              "velocityProfile": [
                0.78,
                0.71,
                0.82,
                1
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "kizomba-fill-17-v-03",
              "parentPatternId": "kizomba-fill-17",
              "name": "Call Fill — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.7,
                0.76,
                0.82,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.72,
                0.73,
                0.84,
                1,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "call"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];


const KIZOMBA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-kizomba-kizomba-bass-ostinato",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-classic-angolan-kizomba",
      "kizomba-semba-to-kizomba-transition",
      "kizomba-cape-verdean-ghetto-zouk",
      "kizomba-minimal-tarraxinha",
      "kizomba-tarraxo-club"
    ],
    "name": "bass ostinato",
    "shortName": "bass ostinato",
    "family": "kizomba",
    "category": "bass",
    "description": "Technique: kizomba bass ostinato",
    "tags": [
      "kizomba",
      "kizomba bass ostinato"
    ],
    "approaches": [
      "kizomba bass ostinato"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
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
      "kizomba",
      "kizomba bass ostinato"
    ],
    "techniques": [
      "kizomba bass ostinato"
    ]
  },
  {
    "id": "tech-kizomba-ghetto-zouk-sub-bass",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-classic-angolan-kizomba",
      "kizomba-cape-verdean-ghetto-zouk",
      "kizomba-minimal-tarraxinha",
      "kizomba-tarraxo-club"
    ],
    "name": "ghetto-zouk sub-bass",
    "shortName": "ghetto-zouk sub-bass",
    "family": "kizomba",
    "category": "bass",
    "description": "Technique: ghetto-zouk sub-bass",
    "tags": [
      "kizomba",
      "ghetto-zouk sub-bass"
    ],
    "approaches": [
      "ghetto-zouk sub-bass"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
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
      "kizomba",
      "ghetto-zouk sub-bass"
    ],
    "techniques": [
      "ghetto-zouk sub-bass"
    ]
  }
];


const KIZOMBA_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-kizomba-semba-guitar",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-classic-angolan-kizomba",
      "kizomba-semba-to-kizomba-transition"
    ],
    "name": "semba guitar",
    "shortName": "semba guitar",
    "family": "kizomba",
    "category": "comping",
    "description": "Technique: semba guitar",
    "tags": [
      "kizomba",
      "semba guitar"
    ],
    "approaches": [
      "semba guitar"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
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
      "kizomba",
      "semba guitar"
    ],
    "techniques": [
      "semba guitar"
    ]
  },
  {
    "id": "tech-kizomba-long-r-b-chord-voicing",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-cape-verdean-ghetto-zouk"
    ],
    "name": "long R&B chord voicing",
    "shortName": "long R&B chord voicing",
    "family": "kizomba",
    "category": "comping",
    "description": "Technique: long R&B chord voicing",
    "tags": [
      "kizomba",
      "long R&B chord voicing"
    ],
    "approaches": [
      "long R&B chord voicing"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "lead"
    ],
    "instruments": [
      "piano"
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
      "kizomba",
      "long R&B chord voicing"
    ],
    "techniques": [
      "long R&B chord voicing"
    ]
  }
];


const KIZOMBA_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-kizomba-vocal-space-arrangement",
    "worldId": "kizomba",
    "styleIds": [
      "kizomba-minimal-tarraxinha"
    ],
    "name": "vocal-space arrangement",
    "shortName": "vocal-space arrangement",
    "family": "kizomba",
    "category": "lead",
    "description": "Technique: vocal-space arrangement",
    "tags": [
      "kizomba",
      "vocal-space arrangement"
    ],
    "approaches": [
      "vocal-space arrangement"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "voice",
      "lead"
    ],
    "instruments": [
      "voice"
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
      "kizomba",
      "vocal-space arrangement"
    ],
    "techniques": [
      "vocal-space arrangement"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "break": KIZOMBA_WORLD_PATTERNS_BREAK,
  "cadence": KIZOMBA_WORLD_PATTERNS_CADENCE,
  "groove": KIZOMBA_WORLD_PATTERNS_GROOVE,
  "phrasePattern": KIZOMBA_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": KIZOMBA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": KIZOMBA_WORLD_PATTERNS_OSTINATO,
  "sectionPattern": KIZOMBA_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": KIZOMBA_WORLD_PATTERNS_FILL,
  "bass": KIZOMBA_WORLD_PATTERNS_BASS,
  "comping": KIZOMBA_WORLD_PATTERNS_COMPING,
  "lead": KIZOMBA_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":6},{"category":"sectionPattern","index":0},{"category":"groove","index":7},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"fill","index":0},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"groove","index":16},{"category":"groove","index":17},{"category":"lead","index":0}];

export const KIZOMBA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
