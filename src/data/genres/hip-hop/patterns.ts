import type { GenreWorld, MusicalPattern } from '../../schema';


const HIP_HOP_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "hiphop-boom-basic",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap", "hip-hop-lo-fi"],
          "name": "Boom Bap Basic",
          "family": "Beat",
          "category": "sectionPattern",
          "description": "A classic 1990s boom-bap beat pairs a firm kick with a swung snare.",
          "tags": [
            "hip-hop",
            "beat"
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
            4,
            8,
            12,
            10
          ],
          "accentProfile": [
            1,
            0.95,
            0.85,
            0.95,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.8,
            0.9,
            0.7
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "intro"
          ],
          "variants": [
            {
              "id": "hiphop-boom-basic-v-01",
              "parentPatternId": "hiphop-boom-basic",
              "name": "Boom Bap Basic — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "hiphop-boom-basic-v-02",
              "parentPatternId": "hiphop-boom-basic",
              "name": "Boom Bap Basic — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                10
              ],
              "accentProfile": [
                0.96,
                1,
                0.8099999999999999,
                1,
                0.71
              ],
              "velocityProfile": [
                1,
                0.88,
                0.78,
                0.96,
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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


const HIP_HOP_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "hiphop-boom-sync",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap", "hip-hop-lo-fi"],
          "name": "Syncopated Kick",
          "family": "Beat",
          "category": "fill",
          "transitionType": "fill",
          "description": "Boom Bap with syncopated 16th kick",
          "tags": [
            "hip-hop",
            "beat"
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
            4,
            7,
            8,
            11,
            12
          ],
          "accentProfile": [
            1,
            0.95,
            0.8,
            0.9,
            0.75,
            1
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.75,
            0.85,
            0.7,
            0.95
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
              "id": "hiphop-boom-sync-v-01",
              "parentPatternId": "hiphop-boom-sync",
              "name": "Syncopated Kick — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                7,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.75,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.67,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "hiphop-boom-sync-v-02",
              "parentPatternId": "hiphop-boom-sync",
              "name": "Syncopated Kick — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                11,
                12
              ],
              "accentProfile": [
                0.96,
                1,
                0.76,
                0.98,
                0.71,
                1
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73,
                0.9099999999999999,
                0.6799999999999999,
                0.9299999999999999
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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


const HIP_HOP_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "hiphop-trap-basic",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Trap Half-Time",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "Basic half-time trap beat with booming",
          "tags": [
            "hip-hop",
            "beat"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            1,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.95,
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
              "id": "hiphop-trap-basic-v-01",
              "parentPatternId": "hiphop-trap-basic",
              "name": "Trap Half-Time — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "hiphop-trap-basic-v-02",
              "parentPatternId": "hiphop-trap-basic",
              "name": "Trap Half-Time — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                8,
                14
              ],
              "accentProfile": [
                0.96,
                1,
                0.76
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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


const HIP_HOP_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "hiphop-trap-hats",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Trap Hi-Hats",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Continuous 16ths with 32nd note hi-hat",
          "tags": [
            "hip-hop",
            "beat"
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
          "subdivisions": 32,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            16,
            18,
            20,
            21,
            22,
            24,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.8,
            0.65,
            0.85,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.7,
            0.8,
            0.9,
            0.85,
            0.65,
            0.8,
            0.65
          ],
          "velocityProfile": [
            0.85,
            0.55,
            0.75,
            0.55,
            0.8,
            0.55,
            0.75,
            0.55,
            0.85,
            0.55,
            0.6,
            0.7,
            0.85,
            0.8,
            0.55,
            0.75,
            0.55
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "hiphop-trap-hats-v-01",
              "parentPatternId": "hiphop-trap-hats",
              "name": "Trap Hi-Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                16,
                18,
                21,
                22,
                26,
                28
              ],
              "accentProfile": [
                0.85,
                0.6,
                0.75,
                0.6,
                0.7999999999999999,
                0.6,
                0.75,
                0.6,
                0.85,
                0.6,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.77,
                0.47000000000000003,
                0.67,
                0.47000000000000003,
                0.7200000000000001,
                0.47000000000000003,
                0.67,
                0.47000000000000003,
                0.77,
                0.47000000000000003,
                0.52
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "hiphop-trap-hats-v-02",
              "parentPatternId": "hiphop-trap-hats",
              "name": "Trap Hi-Hats — accent shift",
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
                14,
                16,
                18,
                20,
                21,
                22,
                24,
                26,
                28,
                30
              ],
              "accentProfile": [
                0.86,
                0.73,
                0.76,
                0.73,
                0.8099999999999999,
                0.73,
                0.76,
                0.73,
                0.86,
                0.73,
                0.6599999999999999,
                0.88,
                0.86,
                0.9299999999999999,
                0.61,
                0.88,
                0.61
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.53,
                0.73,
                0.6100000000000001,
                0.78,
                0.53,
                0.81,
                0.53,
                0.83,
                0.6100000000000001,
                0.58,
                0.6799999999999999,
                0.9099999999999999,
                0.78,
                0.53,
                0.81,
                0.53
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
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
    
          "difficulty": 5,
          "weight": 1,
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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


const HIP_HOP_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "hip-hop-sampled-keys",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap", "hip-hop-lo-fi"],
          "name": "Sampled Keys Loop",
          "family": "Sample Loop",
          "category": "groove",
          "description": "A looped melodic or harmonic sample provides a foundation beneath the lead.",
          "tags": [
            "hip-hop",
            "beat",
            "sample-loop"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "keys"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 24,
          "onsetGrid": [
            0,
            6,
            12,
            18,
            10
          ],
          "accentProfile": [
            0.9,
            0.85,
            0.8,
            0.9,
            0.7
          ],
          "velocityProfile": [
            0.85,
            0.8,
            0.75,
            0.85,
            0.65
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
              "id": "hiphop-lofi-v-01",
              "parentPatternId": "hip-hop-sampled-keys",
              "name": "Lo-Fi Swing — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                12,
                18
              ],
              "accentProfile": [
                0.85,
                0.7999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.77,
                0.7200000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "hiphop-lofi-v-02",
              "parentPatternId": "hip-hop-sampled-keys",
              "name": "Lo-Fi Swing — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                12,
                18,
                10
              ],
              "accentProfile": [
                0.86,
                0.9299999999999999,
                0.76,
                0.98,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.78,
                0.73,
                0.9099999999999999,
                0.63
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "keys"
          ]
        },
  {
          "id": "hiphop-gfunk",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "G-Funk",
          "family": "Beat",
          "category": "groove",
          "description": "Heavy kick and snare with driving",
          "tags": [
            "hip-hop",
            "beat"
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
            1,
            0.65,
            0.95,
            0.65,
            0.9,
            0.65,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.9,
            0.6,
            0.85,
            0.6,
            0.9,
            0.65
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
              "id": "hiphop-gfunk-v-01",
              "parentPatternId": "hiphop-gfunk",
              "name": "G-Funk — sparse variation",
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
                0.95,
                0.6,
                0.8999999999999999,
                0.6,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.8200000000000001,
                0.52,
                0.77
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
              "id": "hiphop-gfunk-v-02",
              "parentPatternId": "hiphop-gfunk",
              "name": "G-Funk — accent shift",
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
                0.96,
                0.73,
                0.9099999999999999,
                0.73,
                0.86,
                0.73,
                0.9099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.88,
                0.6599999999999999,
                0.83,
                0.58,
                0.96,
                0.63
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-drill",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Drill Beat",
          "family": "Beat",
          "category": "groove",
          "description": "Syncopated sliding snare/clap placement for drill.",
          "tags": [
            "hip-hop",
            "beat"
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
            7,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.75
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
              "id": "hiphop-drill-v-01",
              "parentPatternId": "hiphop-drill",
              "name": "Drill Beat — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                11,
                14
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
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
              "id": "hiphop-drill-v-02",
              "parentPatternId": "hiphop-drill",
              "name": "Drill Beat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                7,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.88
              ],
              "velocityProfile": [
                1,
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-breakbeat",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "Old School Break",
          "family": "Beat",
          "category": "groove",
          "description": "Syncopated funk breakbeat style drum groove",
          "tags": [
            "hip-hop",
            "beat"
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
            3,
            4,
            7,
            8,
            10,
            12
          ],
          "accentProfile": [
            1,
            0.78,
            0.98,
            0.72,
            0.88,
            0.82,
            0.96
          ],
          "velocityProfile": [
            0.96,
            0.72,
            0.94,
            0.68,
            0.84,
            0.78,
            0.92
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
              "id": "hiphop-breakbeat-v-01",
              "parentPatternId": "hiphop-breakbeat",
              "name": "Old School Break — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.73,
                0.9299999999999999,
                0.6699999999999999,
                0.83
              ],
              "velocityProfile": [
                0.88,
                0.64,
                0.86,
                0.6000000000000001,
                0.76
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
              "id": "hiphop-breakbeat-v-02",
              "parentPatternId": "hiphop-breakbeat",
              "name": "Old School Break — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                10,
                12
              ],
              "accentProfile": [
                0.96,
                0.86,
                0.94,
                0.7999999999999999,
                0.84,
                0.8999999999999999,
                0.9199999999999999
              ],
              "velocityProfile": [
                1,
                0.7,
                0.9199999999999999,
                0.74,
                0.82,
                0.76,
                0.98
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
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-bounce",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Bounce Beat",
          "family": "Beat",
          "category": "groove",
          "description": "New Orleans-style bounce adds a rolling rhythmic feel.",
          "tags": [
            "hip-hop",
            "beat"
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
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.8,
            0.85,
            0.95,
            0.8,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.8,
            0.9,
            0.75,
            0.8
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
              "id": "hiphop-bounce-v-01",
              "parentPatternId": "hiphop-bounce",
              "name": "Bounce Beat — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.75,
                0.7999999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.67,
                0.7200000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "hiphop-bounce-v-02",
              "parentPatternId": "hiphop-bounce",
              "name": "Bounce Beat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.8099999999999999,
                1,
                0.76,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.73,
                0.78,
                0.96,
                0.73,
                0.78
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-westcoast",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "West Coast",
          "family": "Beat",
          "category": "groove",
          "description": "Syncopated kicks with handclaps and crisp",
          "tags": [
            "hip-hop",
            "beat"
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
            4,
            7,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.95,
            0.8,
            0.95,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.75,
            0.9,
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
              "id": "hiphop-westcoast-v-01",
              "parentPatternId": "hiphop-westcoast",
              "name": "West Coast — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                7,
                12
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.87,
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
              "id": "hiphop-westcoast-v-02",
              "parentPatternId": "hiphop-westcoast",
              "name": "West Coast — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                7,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                1,
                0.76,
                1,
                0.71
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73,
                0.96,
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-neosoul",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap", "hip-hop-lo-fi"],
          "name": "Neo-Soul Hip Hop",
          "family": "Beat",
          "category": "groove",
          "description": "Behind the beat snare with organic",
          "tags": [
            "hip-hop",
            "beat"
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
            5,
            8,
            13
          ],
          "accentProfile": [
            0.9,
            0.85,
            0.8,
            0.85
          ],
          "velocityProfile": [
            0.85,
            0.8,
            0.75,
            0.8
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
              "id": "hiphop-neosoul-v-01",
              "parentPatternId": "hiphop-neosoul",
              "name": "Neo-Soul Hip Hop — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                13
              ],
              "accentProfile": [
                0.85,
                0.7999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.77,
                0.7200000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "hiphop-neosoul-v-02",
              "parentPatternId": "hiphop-neosoul",
              "name": "Neo-Soul Hip Hop — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.86,
                0.9299999999999999,
                0.76,
                0.9299999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.78,
                0.73,
                0.8600000000000001
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-minimal808",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Minimal 808",
          "family": "Beat",
          "category": "groove",
          "description": "Sparse 808 sub kicks leaving open",
          "tags": [
            "hip-hop",
            "beat"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.85,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85
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
              "id": "hiphop-minimal808-v-01",
              "parentPatternId": "hiphop-minimal808",
              "name": "Minimal 808 — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                14
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "hiphop-minimal808-v-02",
              "parentPatternId": "hiphop-minimal808",
              "name": "Minimal 808 — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.86
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hiphop-dembow-riddim",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-drill"],
          "name": "Classic Dembow Riddim",
          "family": "Dembow",
          "category": "groove",
          "description": "The heartbeat of global urban Latin",
          "tags": [
            "reggaeton",
            "dembow",
            "drums",
            "latin",
            "beat"
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
            "pulse"
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
            3,
            4,
            6,
            8,
            11,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.88,
            0.95,
            0.88,
            1,
            0.88,
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.95,
            0.82,
            0.92,
            0.82,
            0.95,
            0.82,
            0.92,
            0.82
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
              "id": "hiphop-dembow-riddim-v-01",
              "parentPatternId": "hiphop-dembow-riddim",
              "name": "Classic Dembow Riddim — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.83,
                0.8999999999999999,
                0.83,
                0.95
              ],
              "velocityProfile": [
                0.87,
                0.74,
                0.8400000000000001,
                0.74,
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
              "id": "hiphop-dembow-riddim-v-02",
              "parentPatternId": "hiphop-dembow-riddim",
              "name": "Classic Dembow Riddim — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                8,
                11,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.96,
                0.9099999999999999,
                0.96,
                0.96,
                0.96,
                0.9099999999999999,
                0.96
              ],
              "velocityProfile": [
                1,
                0.7999999999999999,
                0.9,
                0.8799999999999999,
                0.9299999999999999,
                0.7999999999999999,
                0.98,
                0.7999999999999999
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
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
,
  {
    "id": "tech-hip-hop-chopped-break",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-old-school-breakbeat",
      "hip-hop-golden-age-sample-collage",
      "hip-hop-memphis-southern-rap",
      "hip-hop-jersey-club-rap"
    ],
    "name": "chopped break",
    "shortName": "chopped break",
    "family": "hip-hop",
    "category": "groove",
    "description": "Technique: chopped break",
    "tags": [
      "hip-hop",
      "chopped break"
    ],
    "approaches": [
      "chopped break"
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
      10,
      11,
      12,
      13,
      14,
      15
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
      "hip-hop",
      "chopped break"
    ],
    "techniques": [
      "chopped break"
    ]
  },
  {
    "id": "tech-hip-hop-mpc-swing",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-golden-age-sample-collage"
    ],
    "name": "MPC swing",
    "shortName": "MPC swing",
    "family": "hip-hop",
    "category": "groove",
    "description": "Technique: MPC swing",
    "tags": [
      "hip-hop",
      "MPC swing"
    ],
    "approaches": [
      "MPC swing"
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
      "hip-hop",
      "MPC swing"
    ],
    "techniques": [
      "MPC swing"
    ]
  },
  {
    "id": "tech-hip-hop-boom-bap-kick-snare",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-jersey-club-rap"
    ],
    "name": "boom-bap kick/snare",
    "shortName": "boom-bap kick/snare",
    "family": "hip-hop",
    "category": "groove",
    "description": "Technique: boom-bap kick/snare",
    "tags": [
      "hip-hop",
      "boom-bap kick/snare"
    ],
    "approaches": [
      "boom-bap kick/snare"
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
      "hip-hop",
      "boom-bap kick/snare"
    ],
    "techniques": [
      "boom-bap kick/snare"
    ]
  },
  {
    "id": "tech-hip-hop-trap-hi-hat-rolls",
    "worldId": "hip-hop",
    "styleIds": [],
    "name": "trap hi-hat rolls",
    "shortName": "trap hi-hat rolls",
    "family": "hip-hop",
    "category": "groove",
    "description": "Technique: trap hi-hat rolls",
    "tags": [
      "hip-hop",
      "trap hi-hat rolls"
    ],
    "approaches": [
      "trap hi-hat rolls"
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
      10,
      11,
      12,
      13,
      14,
      15
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
      "hip-hop",
      "trap hi-hat rolls"
    ],
    "techniques": [
      "trap hi-hat rolls"
    ]
  },
  {
    "id": "tech-hip-hop-triplet-hi-hats",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-memphis-southern-rap"
    ],
    "name": "triplet hi-hats",
    "shortName": "triplet hi-hats",
    "family": "hip-hop",
    "category": "groove",
    "description": "Technique: triplet hi-hats",
    "tags": [
      "hip-hop",
      "triplet hi-hats"
    ],
    "approaches": [
      "triplet hi-hats"
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
      "hip-hop",
      "triplet hi-hats"
    ],
    "techniques": [
      "triplet hi-hats"
    ]
  },
  {
    "id": "tech-hip-hop-beat-switch",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-golden-age-sample-collage",
      "hip-hop-west-coast-g-funk-expansion"
    ],
    "name": "beat switch",
    "shortName": "beat switch",
    "family": "hip-hop",
    "category": "groove",
    "description": "Technique: beat switch",
    "tags": [
      "hip-hop",
      "beat switch"
    ],
    "approaches": [
      "beat switch"
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
      "hip-hop",
      "beat switch"
    ],
    "techniques": [
      "beat switch"
    ]
  },
  {
    "id": "style-hip-hop-old-school-breakbeat-signature",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-old-school-breakbeat"
    ],
    "name": "Old-School Breakbeat Signature Cell",
    "shortName": "Old-School Breakbeat Cell",
    "family": "hip-hop",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "hip-hop",
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
      "drums",
      "turntable",
      "bass",
      "voice"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7,
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
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
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "hip-hop",
      "signature"
    ],
    "techniques": [
      "vinyl texture",
      "DJ scratch",
      "chopped break"
    ]
  },
  {
    "id": "style-hip-hop-golden-age-sample-collage-signature",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-golden-age-sample-collage"
    ],
    "name": "Golden-Age Sample Collage Signature Cell",
    "shortName": "Golden-Age Sample Collage Cell",
    "family": "hip-hop",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "hip-hop",
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
      "drums",
      "sampler",
      "turntable",
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
      "hip-hop",
      "signature"
    ],
    "techniques": [
      "MPC swing",
      "beat switch",
      "sample chop",
      "vinyl texture",
      "chopped break",
      "vocal chop"
    ]
  },
  {
    "id": "style-hip-hop-west-coast-g-funk-expansion-signature",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-west-coast-g-funk-expansion"
    ],
    "name": "West Coast G-Funk Expansion Signature Cell",
    "shortName": "West Coast G-Funk Expansion Cell",
    "family": "hip-hop",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "hip-hop",
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
      "drums",
      "bass",
      "synth",
      "synth"
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
      "hip-hop",
      "signature"
    ],
    "techniques": [
      "beat switch",
      "vinyl texture"
    ]
  },
  {
    "id": "style-hip-hop-memphis-southern-rap-signature",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-memphis-southern-rap"
    ],
    "name": "Memphis / Southern Rap Signature Cell",
    "shortName": "Memphis / Southern Rap Cell",
    "family": "hip-hop",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "hip-hop",
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
      "drums",
      "sub-bass",
      "sampler",
      "voice"
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
      0.7,
      0.7,
      0.7,
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
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
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "hip-hop",
      "signature"
    ],
    "techniques": [
      "808 glide",
      "triplet hi-hats",
      "chopped break",
      "sample chop",
      "vocal chop"
    ]
  },
  {
    "id": "style-hip-hop-jersey-club-rap-signature",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-jersey-club-rap"
    ],
    "name": "Jersey / Club Rap Signature Cell",
    "shortName": "Jersey / Club Rap Cell",
    "family": "hip-hop",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "hip-hop",
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
      "drums",
      "sampler",
      "sub-bass",
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
      "hip-hop",
      "signature"
    ],
    "techniques": [
      "vocal chop",
      "boom-bap kick/snare",
      "chopped break",
      "sample chop"
    ]
  }
];


const HIP_HOP_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "hiphop-808-glide-bass",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "808 Glide & Sub Slide Bass",
          "family": "808 Bass",
          "category": "ostinato",
          "description": "Deep sliding 808 sub bass notes",
          "tags": [
            "trap",
            "808",
            "bass",
            "sub",
            "glide"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
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
            0.85,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85
          ],
          "supportedEnergy": [1, 2],
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
              "id": "hiphop-808-glide-bass-v-01",
              "parentPatternId": "hiphop-808-glide-bass",
              "name": "808 Glide & Sub Slide Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                12
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "hiphop-808-glide-bass-v-02",
              "parentPatternId": "hiphop-808-glide-bass",
              "name": "808 Glide & Sub Slide Bass — accent shift",
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
                0.9299999999999999,
                0.86
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
          "id": "hip-hop-anchor-16",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap", "hip-hop-lo-fi"],
          "name": "Sample Chop Anchor",
          "family": "Sample Chop",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "hip-hop",
            "sample-chop",
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
            0,
            2,
            5,
            8,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.6666666666666666,
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
              "id": "hip-hop-anchor-16-v-01",
              "parentPatternId": "hip-hop-anchor-16",
              "name": "Sample Chop Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "hip-hop-anchor-16-v-02",
              "parentPatternId": "hip-hop-anchor-16",
              "name": "Sample Chop Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
                8,
                10,
                13
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
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
          "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "hip-hop",
            "sample-chop"
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


const HIP_HOP_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "hip-hop-call-15",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap", "hip-hop-lo-fi"],
          "name": "Boom Bap Response",
          "family": "Boom Bap",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "hip-hop",
            "boom-bap",
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
            1,
            4,
            7,
            9,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62
          ],
          "syncopationRating": 0.6666666666666666,
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
              "id": "hip-hop-call-15-v-01",
              "parentPatternId": "hip-hop-call-15",
              "name": "Boom Bap Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                9,
                15
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "hip-hop-call-15-v-02",
              "parentPatternId": "hip-hop-call-15",
              "name": "Boom Bap Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12,
                15
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "hip-hop-call-15-v-03",
              "parentPatternId": "hip-hop-call-15",
              "name": "Boom Bap Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                4,
                7,
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
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.57,
                0.95,
                0.62,
                0.8999999999999999,
                0.98,
                0.98
              ],
              "microtimingOffset": [
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
          "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "hip-hop",
            "boom-bap"
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


const HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "hip-hop--phrasing",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "Rap Cadence & Hook",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Rap cadence and hook placement shape the vocal phrase.",
          "tags": [
            "hip-hop",
            "synth",
            "vocal-phrasing",
            "catalog-v2",
            "sample-loop"
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
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.8,
            0.58,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.92,
            0.6,
            0.78,
            0.55,
            0.88,
            0.64
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "hip-hop--phrasing-v1",
              "parentPatternId": "hip-hop--phrasing",
              "name": "Rap Cadence & Hook — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Reduced-density repeat.",
              "onsetGrid": [
                0,
                3,
                10,
                15
              ],
              "accentProfile": [
                1,
                0.65,
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.86,
                0.64
              ]
            },
            {
              "id": "hip-hop--phrasing-v2",
              "parentPatternId": "hip-hop--phrasing",
              "name": "Rap Cadence & Hook — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Shifted emphasis repeat.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.9,
                0.7,
                0.75,
                0.68,
                1,
                0.62
              ],
              "velocityProfile": [
                0.86,
                0.62,
                0.72,
                0.58,
                0.92,
                0.56
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Global Urban Beat.",
          "authenticityTags": [
            "hip-hop",
            "synth"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];


const HIP_HOP_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-hip-hop-808-glide",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-memphis-southern-rap"
    ],
    "name": "808 glide",
    "shortName": "808 glide",
    "family": "hip-hop",
    "category": "bass",
    "description": "Technique: 808 glide",
    "tags": [
      "hip-hop",
      "808 glide"
    ],
    "approaches": [
      "808 glide"
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
      "hip-hop",
      "808 glide"
    ],
    "techniques": [
      "808 glide"
    ]
  }
];


const HIP_HOP_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-hip-hop-dj-scratch",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-old-school-breakbeat"
    ],
    "name": "DJ scratch",
    "shortName": "DJ scratch",
    "family": "hip-hop",
    "category": "comping",
    "description": "Technique: DJ scratch",
    "tags": [
      "hip-hop",
      "DJ scratch"
    ],
    "approaches": [
      "DJ scratch"
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
      "hip-hop",
      "DJ scratch"
    ],
    "techniques": [
      "DJ scratch"
    ]
  }
];


const HIP_HOP_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-hip-hop-vocal-chop",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-golden-age-sample-collage",
      "hip-hop-memphis-southern-rap",
      "hip-hop-jersey-club-rap"
    ],
    "name": "vocal chop",
    "shortName": "vocal chop",
    "family": "hip-hop",
    "category": "lead",
    "description": "Technique: vocal chop",
    "tags": [
      "hip-hop",
      "vocal chop"
    ],
    "approaches": [
      "vocal chop"
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
      "hip-hop",
      "vocal chop"
    ],
    "techniques": [
      "vocal chop"
    ]
  }
];


const HIP_HOP_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
    "id": "tech-hip-hop-sample-chop",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-golden-age-sample-collage",
      "hip-hop-memphis-southern-rap",
      "hip-hop-jersey-club-rap"
    ],
    "name": "sample chop",
    "shortName": "sample chop",
    "family": "hip-hop",
    "category": "texture",
    "description": "Technique: sample chop",
    "tags": [
      "hip-hop",
      "sample chop"
    ],
    "approaches": [
      "sample chop"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
      "synth"
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
      "hip-hop",
      "sample chop"
    ],
    "techniques": [
      "sample chop"
    ]
  },
  {
    "id": "tech-hip-hop-vinyl-texture",
    "worldId": "hip-hop",
    "styleIds": [
      "hip-hop-old-school-breakbeat",
      "hip-hop-golden-age-sample-collage",
      "hip-hop-west-coast-g-funk-expansion"
    ],
    "name": "vinyl texture",
    "shortName": "vinyl texture",
    "family": "hip-hop",
    "category": "texture",
    "description": "Technique: vinyl texture",
    "tags": [
      "hip-hop",
      "vinyl texture"
    ],
    "approaches": [
      "vinyl texture"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
      "synth"
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
      "hip-hop",
      "vinyl texture"
    ],
    "techniques": [
      "vinyl texture"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "sectionPattern": HIP_HOP_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": HIP_HOP_WORLD_PATTERNS_FILL,
  "break": HIP_HOP_WORLD_PATTERNS_BREAK,
  "cadence": HIP_HOP_WORLD_PATTERNS_CADENCE,
  "groove": HIP_HOP_WORLD_PATTERNS_GROOVE,
  "ostinato": HIP_HOP_WORLD_PATTERNS_OSTINATO,
  "interactionPattern": HIP_HOP_WORLD_PATTERNS_INTERACTIONPATTERN,
  "phrasePattern": HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN,
  "bass": HIP_HOP_WORLD_PATTERNS_BASS,
  "comping": HIP_HOP_WORLD_PATTERNS_COMPING,
  "lead": HIP_HOP_WORLD_PATTERNS_LEAD,
  "texture": HIP_HOP_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"sectionPattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"ostinato","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"phrasePattern","index":0},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"groove","index":16},{"category":"groove","index":17},{"category":"groove","index":18},{"category":"groove","index":19},{"category":"lead","index":0},{"category":"texture","index":0},{"category":"texture","index":1}];

export const HIP_HOP_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
