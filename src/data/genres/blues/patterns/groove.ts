import type { MusicalPattern } from '../../../schema';

export const BLUES_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "blues-texas-shuffle",
          "worldId": "blues",
          "styleIds": ["blues-texas"],
          "name": "Texas Shuffle",
          "family": "Guitar",
          "category": "groove",
          "description": "Driving guitar shuffle with muted rake",
          "tags": [],
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
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.65,
            0.85,
            0.6,
            0.95,
            0.65,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.6,
            0.8,
            0.55,
            0.9,
            0.6,
            0.8,
            0.65
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "blues-texas-shuffle-v-01",
              "parentPatternId": "blues-texas-shuffle",
              "name": "Texas Shuffle — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                9
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.7999999999999999,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.52,
                0.7200000000000001,
                0.47000000000000003,
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
              "id": "blues-texas-shuffle-v-02",
              "parentPatternId": "blues-texas-shuffle",
              "name": "Texas Shuffle — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.8099999999999999,
                0.6799999999999999,
                0.9099999999999999,
                0.73,
                0.8099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.58,
                0.78,
                0.6100000000000001,
                0.88,
                0.58,
                0.8600000000000001,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-soul-groove",
          "worldId": "blues",
          "styleIds": ["blues-soul"],
          "name": "Soul Blues Beat",
          "family": "Drums",
          "category": "groove",
          "description": "Straight 8ths Memphis style beat with",
          "tags": [],
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.6,
            0.95,
            0.65
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.9,
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
              "id": "blues-soul-groove-v-01",
              "parentPatternId": "blues-soul-groove",
              "name": "Soul Blues Beat — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "blues-soul-groove-v-02",
              "parentPatternId": "blues-soul-groove",
              "name": "Soul Blues Beat — accent shift",
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
                0.6799999999999999,
                0.9099999999999999,
                0.73
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.88,
                0.6599999999999999
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-bass-walk",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Walking Blues Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Quarter note walking bass leading through",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "meter": "4/4",
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
              "id": "blues-bass-walk-v-01",
              "parentPatternId": "blues-bass-walk",
              "name": "Walking Blues Bass — sparse variation",
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
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "blues-bass-walk-v-02",
              "parentPatternId": "blues-bass-walk",
              "name": "Walking Blues Bass — accent shift",
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-piano-triplets",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Piano Triplets",
          "family": "Piano",
          "category": "groove",
          "description": "Rolling right hand blues triplets over",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "piano",
            "keys"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
          ],
          "accentProfile": [
            1,
            0.6,
            0.7,
            0.9,
            0.6,
            0.7,
            0.95,
            0.6,
            0.7,
            0.85,
            0.6,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.65,
            0.85,
            0.55,
            0.65,
            0.9,
            0.55,
            0.65,
            0.8,
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
              "id": "blues-piano-triplets-v-01",
              "parentPatternId": "blues-piano-triplets",
              "name": "Piano Triplets — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.6499999999999999,
                0.85,
                0.5499999999999999,
                0.6499999999999999,
                0.8999999999999999,
                0.5499999999999999
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.5700000000000001,
                0.77,
                0.47000000000000003,
                0.5700000000000001,
                0.8200000000000001,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "blues-piano-triplets-v-02",
              "parentPatternId": "blues-piano-triplets",
              "name": "Piano Triplets — accent shift",
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
                7,
                8,
                9,
                10,
                11
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.6599999999999999,
                0.98,
                0.5599999999999999,
                0.7799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                0.9299999999999999,
                0.5599999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.53,
                0.63,
                0.9099999999999999,
                0.53,
                0.63,
                0.96,
                0.53,
                0.63,
                0.8600000000000001,
                0.53,
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
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 4,
          "weight": 1,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-horn-stabs",
          "worldId": "blues",
          "styleIds": ["blues-soul"],
          "name": "Horn Stabs",
          "family": "Brass",
          "category": "groove",
          "description": "Punchy brass punctuation answering the vocal",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "brass",
            "trumpet",
            "sax"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "brass",
            "trumpet",
            "sax"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.9,
            1
          ],
          "velocityProfile": [
            0.85,
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
              "id": "blues-horn-stabs-v-01-safe",
              "parentPatternId": "blues-horn-stabs",
              "name": "Horn Stabs — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                2,
                6
              ],
              "accentProfile": [
                0.85,
                1
              ],
              "velocityProfile": [
                0.88,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "blues-horn-stabs-v-02-safe",
              "parentPatternId": "blues-horn-stabs",
              "name": "Horn Stabs — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                2,
                6
              ],
              "accentProfile": [
                0.85,
                1
              ],
              "velocityProfile": [
                0.88,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-delta-slide",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Slide Guitar Lick",
          "family": "Guitar",
          "category": "groove",
          "description": "Acoustic slide guitar response with vocal",
          "tags": [],
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
            4,
            8,
            10,
            12
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
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
            "chorus"
          ],
          "variants": [
            {
              "id": "blues-delta-slide-v-01",
              "parentPatternId": "blues-delta-slide",
              "name": "Slide Guitar Lick — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                10
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "blues-delta-slide-v-02",
              "parentPatternId": "blues-delta-slide",
              "name": "Slide Guitar Lick — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                0.83,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-rhumba",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Blues Rhumba",
          "family": "Drums",
          "category": "groove",
          "description": "Cross-stick and tom rhumba beat popularized",
          "tags": [],
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
            0.7,
            0.9,
            0.95,
            0.65,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.9,
            0.6,
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
              "id": "blues-rhumba-v-01",
              "parentPatternId": "blues-rhumba",
              "name": "Blues Rhumba — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
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
              "id": "blues-rhumba-v-02",
              "parentPatternId": "blues-rhumba",
              "name": "Blues Rhumba — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.7799999999999999,
                0.86,
                1,
                0.61,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.96,
                0.58,
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-organ-swell",
          "worldId": "blues",
          "styleIds": ["blues-soul"],
          "name": "Organ Swell",
          "family": "Keys",
          "category": "groove",
          "description": "Hammond B3 chord swell rising into",
          "tags": [],
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
          "subdivisions": 4,
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.75,
            0.95
          ],
          "velocityProfile": [
            0.7,
            0.9
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
              "id": "blues-organ-swell-v-01-safe",
              "parentPatternId": "blues-organ-swell",
              "name": "Organ Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                2
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.86
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "blues-organ-swell-v-02-safe",
              "parentPatternId": "blues-organ-swell",
              "name": "Organ Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                2
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.86
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-comp-16",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Turnaround Comping",
          "family": "Turnaround",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "blues",
            "turnaround",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            6,
            7,
            10,
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
          "swingPercentage": 66,
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
              "id": "blues-comp-16-v-01",
              "parentPatternId": "blues-comp-16",
              "name": "Turnaround Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                4,
                7,
                10,
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
              "id": "blues-comp-16-v-02",
              "parentPatternId": "blues-comp-16",
              "name": "Turnaround Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                4,
                6,
                7,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "turnaround"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
];
