import type { MusicalPattern } from '../../../schema';

export const HIP_HOP_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
