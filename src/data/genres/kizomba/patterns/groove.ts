import type { MusicalPattern } from '../../../schema';

export const KIZOMBA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "kizomba-semba-guitar",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba"],
          "name": "Semba Guitar Arpeggio",
          "family": "Guitar",
          "category": "groove",
          "description": "Fast intricate African guitar lines and",
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
              "name": "Semba Guitar Arpeggio — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
              "name": "Tarraxinha Sub-Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["kizomba-semba"],
          "name": "Kizomba Kick Batida",
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
              "name": "Kizomba Kick Batida — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "name": "Kizomba Kick Batida — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["kizomba-semba"],
          "name": "Kizomba Hi-Hats",
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
              "name": "Kizomba Hi-Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "name": "Kizomba Hi-Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["kizomba-urban-kiz"],
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
              "name": "Urban Kiz Synth Pulse — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["kizomba-semba"],
          "name": "Kizomba Vocal Phrase Response",
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
              "name": "Kizomba Vocal Phrase Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "name": "Kizomba Vocal Phrase Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["kizomba-semba"],
          "name": "Call Comping",
          "family": "Call",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
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
              "name": "Call Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["kizomba-semba"],
          "name": "Hook Verse Variation",
          "family": "Hook",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
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
              "name": "Hook Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
];
