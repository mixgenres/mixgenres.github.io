import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "folk-waltz",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
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
          "styleIds": ["folk-singer-songwriter"],
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
          "styleIds": ["folk-singer-songwriter"],
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
          "styleIds": ["folk-singer-songwriter"],
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
          "styleIds": ["folk-singer-songwriter"],
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
          "styleIds": ["folk-singer-songwriter"],
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
