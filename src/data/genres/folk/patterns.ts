import type { MusicalPattern, GenreWorld } from '../../schema';

export const FOLK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "folk-strum-basic",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Basic Strum",
          "family": "Strumming",
          "category": "break",
          "transitionType": "fill",
          "description": "Down on beats, up on offbeats.",
          "tags": [
            "folk",
            "strumming"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.75,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
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
              "id": "folk-strum-basic-variant-carter-scratch",
              "parentPatternId": "folk-strum-basic",
              "name": "Carter Scratch",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Melody on bass notes followed by",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                1,
                0.8,
                0.95,
                0.85
              ],
              "velocityProfile": [
                0.95,
                0.75,
                0.9,
                0.8
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "folk-strum-basic-v-02",
              "parentPatternId": "folk-strum-basic",
              "name": "Basic Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const FOLK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "folk-strum-sync",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Syncopated Strum",
          "family": "Strumming",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Standard folk syncopated strum (D-D-U-U-D-U).",
          "tags": [
            "folk",
            "strumming"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            5,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.8,
            0.9,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.85,
            0.7,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "folk-strum-sync-v-01",
              "parentPatternId": "folk-strum-sync",
              "name": "Syncopated Strum — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.75,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.67,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-strum-sync-v-02",
              "parentPatternId": "folk-strum-sync",
              "name": "Syncopated Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                5,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.86,
                0.83,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.73,
                0.83,
                0.76,
                0.78
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const FOLK_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "folk-travis-sync",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Syncopated Travis",
          "family": "Fingerpicking",
          "category": "fill",
          "transitionType": "fill",
          "description": "Travis picking with anticipations.",
          "tags": [
            "folk",
            "fingerpicking"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.85,
            0.9,
            0.95,
            0.85,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85,
            0.9,
            0.8,
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
              "id": "folk-travis-sync-v-01",
              "parentPatternId": "folk-travis-sync",
              "name": "Syncopated Travis — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                7,
                8,
                15
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.77,
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
              "id": "folk-travis-sync-v-02",
              "parentPatternId": "folk-travis-sync",
              "name": "Syncopated Travis — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.86,
                1,
                0.8099999999999999,
                0.88
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83,
                0.96,
                0.78,
                0.73
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const FOLK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "folk-waltz",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Waltz Strum",
          "family": "Strumming",
          "category": "groove",
          "description": "Bass on 1, strum on 2",
          "tags": [
            "folk",
            "strumming"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            2,
            4
          ],
          "accentProfile": [
            1,
            0.72,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.68,
            0.6
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
              "id": "folk-waltz-v-01",
              "parentPatternId": "folk-waltz",
              "name": "Waltz Strum — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.6699999999999999
              ],
              "velocityProfile": [
                0.87,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "folk-waltz-v-02",
              "parentPatternId": "folk-waltz",
              "name": "Waltz Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4
              ],
              "accentProfile": [
                0.96,
                0.7999999999999999,
                0.61
              ],
              "velocityProfile": [
                1,
                0.66,
                0.58
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-waltz-pick",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Waltz Fingerpick",
          "family": "Fingerpicking",
          "category": "groove",
          "description": "Arpeggio over 3 beats.",
          "tags": [
            "folk",
            "fingerpicking"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "accentProfile": [
            1,
            0.65,
            0.75,
            0.85,
            0.7,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.7,
            0.8,
            0.65,
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
              "id": "folk-waltz-pick-v-01",
              "parentPatternId": "folk-waltz-pick",
              "name": "Waltz Fingerpick — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.7,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.62,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "folk-waltz-pick-v-02",
              "parentPatternId": "folk-waltz-pick",
              "name": "Waltz Fingerpick — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.71,
                0.9299999999999999,
                0.6599999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.58,
                0.6799999999999999,
                0.8600000000000001,
                0.63,
                0.6799999999999999
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-68-arpeggio",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "6/8 Arpeggio",
          "family": "Fingerpicking",
          "category": "groove",
          "description": "Rolling 6/8 arpeggio pattern.",
          "tags": [
            "folk",
            "fingerpicking"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "6/8",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "accentProfile": [
            1,
            0.6,
            0.7,
            0.9,
            0.65,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.65,
            0.85,
            0.6,
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
              "id": "folk-68-arpeggio-v-01",
              "parentPatternId": "folk-68-arpeggio",
              "name": "6/8 Arpeggio — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.5700000000000001,
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
              "id": "folk-68-arpeggio-v-02",
              "parentPatternId": "folk-68-arpeggio",
              "name": "6/8 Arpeggio — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.6599999999999999,
                0.98,
                0.61,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.53,
                0.63,
                0.9099999999999999,
                0.58,
                0.63
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-fast-bluegrass",
          "worldId": "folk",
          "styleIds": ["folk-bluegrass"],
          "name": "Fast Bluegrass Drive",
          "family": "Rhythm",
          "category": "groove",
          "description": "Driving 2/4 feel flatpicking rhythm.",
          "tags": [
            "folk",
            "bluegrass"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 4,
          "onsetGrid": [
            0,
            1,
            2,
            3
          ],
          "accentProfile": [
            1,
            0.75,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
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
              "id": "folk-fast-bluegrass-v-01",
              "parentPatternId": "folk-fast-bluegrass",
              "name": "Fast Bluegrass Drive — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-fast-bluegrass-v-02",
              "parentPatternId": "folk-fast-bluegrass",
              "name": "Fast Bluegrass Drive — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                2,
                3
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.9099999999999999,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-driving-8ths",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Driving 8ths",
          "family": "Strumming",
          "category": "groove",
          "description": "Continuous 8th note strumming for builds.",
          "tags": [
            "folk",
            "strumming"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.65,
            0.85,
            0.7,
            0.95,
            0.65,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.8,
            0.65,
            0.9,
            0.6,
            0.8,
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
              "id": "folk-driving-8ths-v-01",
              "parentPatternId": "folk-driving-8ths",
              "name": "Driving 8ths — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.7999999999999999,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.7200000000000001,
                0.5700000000000001,
                0.8200000000000001
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
              "id": "folk-driving-8ths-v-02",
              "parentPatternId": "folk-driving-8ths",
              "name": "Driving 8ths — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.8099999999999999,
                0.7799999999999999,
                0.9099999999999999,
                0.73,
                0.8099999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.58,
                0.78,
                0.71,
                0.88,
                0.58,
                0.8600000000000001,
                0.6799999999999999
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-comp-15",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Fingerpick Comping",
          "family": "Fingerpick",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "folk",
            "fingerpick",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4
          ],
          "accentProfile": [
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9
          ],
          "syncopationRating": 0.3333333333333333,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
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
              "id": "folk-comp-15-v-01",
              "parentPatternId": "folk-comp-15",
              "name": "Fingerpick Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.69
              ],
              "velocityProfile": [
                0.92,
                0.61
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "folk-comp-15-v-02",
              "parentPatternId": "folk-comp-15",
              "name": "Fingerpick Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "fingerpick"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "folk-verse-17",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Banjo Roll Verse Variation",
          "family": "Banjo Roll",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "folk",
            "banjo-roll",
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
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "rhythm-guitar",
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
            1,
            2,
            5,
            7,
            9,
            12,
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
          "syncopationRating": 0.875,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "folk-verse-17-v-01",
              "parentPatternId": "folk-verse-17",
              "name": "Banjo Roll Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                5,
                7,
                12,
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
              "id": "folk-verse-17-v-02",
              "parentPatternId": "folk-verse-17",
              "name": "Banjo Roll Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                5,
                7,
                9,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "banjo-roll"
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

export const FOLK_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "folk-call-13",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Fiddle Break Response",
          "family": "Fiddle Break",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "folk",
            "fiddle-break",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "acoustic-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "acoustic-guitar"
          ],
          "compatibleRoles": [
            "acoustic-guitar"
          ],
          "compatibleInstruments": [
            "acoustic-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            10,
            13
          ],
          "accentProfile": [
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
            0.8999999999999999
          ],
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["breath"],
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
              "id": "folk-call-13-v-01",
              "parentPatternId": "folk-call-13",
              "name": "Fiddle Break Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                10
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-call-13-v-02",
              "parentPatternId": "folk-call-13",
              "name": "Fiddle Break Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                4,
                7,
                10,
                13
              ],
              "accentProfile": [
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
                0.8799999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            },
            {
              "id": "folk-call-13-v-03",
              "parentPatternId": "folk-call-13",
              "name": "Fiddle Break Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                4,
                7,
                10,
                13,
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "fiddle-break"
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

export const FOLK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "folk-fiddle-drone",
          "worldId": "folk",
          "styleIds": ["folk-bluegrass"],
          "name": "Old-Time Fiddle Drone & Shuffle Bow",
          "family": "Fiddle",
          "category": "ostinato",
          "description": "Sustained open-string drone under a rhythmic",
          "tags": [
            "folk",
            "old-time",
            "fiddle"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "violin"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "violin"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            10
          ],
          "accentProfile": [
            1,
            0.6,
            0.75,
            0.9,
            0.6,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.7,
            0.85,
            0.55,
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
              "id": "folk-fiddle-drone-v-01",
              "parentPatternId": "folk-fiddle-drone",
              "name": "Old-Time Fiddle Drone & Shuffle Bow — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                10
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.62,
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
              "id": "folk-fiddle-drone-v-02",
              "parentPatternId": "folk-fiddle-drone",
              "name": "Old-Time Fiddle Drone & Shuffle Bow — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                9,
                10
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.71,
                0.98,
                0.5599999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.53,
                0.6799999999999999,
                0.9099999999999999,
                0.53,
                0.6799999999999999
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
          "weight": 0.7,
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "folk-anchor-14",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Vocal Harmony Anchor",
          "family": "Vocal Harmony",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "folk",
            "vocal-harmony",
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
            2,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
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
              "id": "folk-anchor-14-v-01",
              "parentPatternId": "folk-anchor-14",
              "name": "Vocal Harmony Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                8,
                11
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-anchor-14-v-02",
              "parentPatternId": "folk-anchor-14",
              "name": "Vocal Harmony Anchor — accent shift",
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
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "vocal-harmony"
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

export const FOLK_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "folk-travis",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Travis Picking",
          "family": "Fingerpicking",
          "category": "phrasePattern",
          "description": "Alternating thumb bass with syncopated treble.",
          "tags": [
            "folk",
            "fingerpicking"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            6,
            14
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.85,
            0.75,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.8,
            0.7,
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
              "id": "folk-travis-variant-clawhammer-feel",
              "parentPatternId": "folk-travis",
              "name": "Clawhammer Feel",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Bum-ditty rhythm translated to guitar. Retained",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                7
              ],
              "accentProfile": [
                1,
                0.7,
                0.85,
                0.95,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.95,
                0.65,
                0.8,
                0.9,
                0.65,
                0.8
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "folk-travis-v-02",
              "parentPatternId": "folk-travis",
              "name": "Travis Picking — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                6,
                14
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.9299999999999999,
                0.71,
                0.88
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88,
                0.8600000000000001,
                0.6799999999999999,
                0.73
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
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        }
];

export const FOLK_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "folk-roster-bass",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Folk bass part",
          "family": "Flatpick",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern that gives",
          "tags": [
            "folk",
            "flatpick",
            "roster",
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
            3,
            6,
            9,
            12
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
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
              "id": "folk-roster-11-v-01",
              "parentPatternId": "folk-roster-bass",
              "name": "Flatpick Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                9
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-roster-11-v-02",
              "parentPatternId": "folk-roster-bass",
              "name": "Flatpick Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                12
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "flatpick"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "folk-roster-",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Folk  part",
          "family": "Banjo Roll",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern that gives",
          "tags": [
            "folk",
            "banjo-roll",
            "roster",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "acoustic-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "acoustic-guitar"
          ],
          "compatibleRoles": [
            "acoustic-guitar"
          ],
          "compatibleInstruments": [
            "acoustic-guitar"
          ],
          "canCrossRole": true,
          "meter": "6/8",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["breath"],
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
              "id": "folk-roster-12-v-01",
              "parentPatternId": "folk-roster-",
              "name": "Banjo Roll Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                10
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-roster-12-v-02",
              "parentPatternId": "folk-roster-",
              "name": "Banjo Roll Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                4,
                7,
                10,
                13
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "banjo-roll"
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

export const FOLK_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "folk-intro-16",
          "worldId": "folk",
          "styleIds": ["folk-old-time"],
          "name": "Flatpick Intro",
          "family": "Flatpick",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "folk",
            "flatpick",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "6/8",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            4,
            6,
            8,
            11,
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
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "folk-intro-16-v-01",
              "parentPatternId": "folk-intro-16",
              "name": "Flatpick Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                11,
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
              "id": "folk-intro-16-v-02",
              "parentPatternId": "folk-intro-16",
              "name": "Flatpick Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                4,
                6,
                8,
                11,
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
              "id": "folk-intro-16-v-03",
              "parentPatternId": "folk-intro-16",
              "name": "Flatpick Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                1,
                4,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "folk",
            "flatpick"
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "phrasePattern": FOLK_WORLD_PATTERNS_PHRASEPATTERN,
  "fill": FOLK_WORLD_PATTERNS_FILL,
  "break": FOLK_WORLD_PATTERNS_BREAK,
  "cadence": FOLK_WORLD_PATTERNS_CADENCE,
  "groove": FOLK_WORLD_PATTERNS_GROOVE,
  "ostinato": FOLK_WORLD_PATTERNS_OSTINATO,
  "rolePattern": FOLK_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": FOLK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": FOLK_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"phrasePattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"ostinato","index":0},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"rolePattern","index":0},{"category":"rolePattern","index":1},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":5},{"category":"sectionPattern","index":0},{"category":"groove","index":6}];

export const FOLK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
