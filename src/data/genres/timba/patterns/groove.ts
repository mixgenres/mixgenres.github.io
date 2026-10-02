import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "timba-synth-bass",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Synth Bass Tumbao",
          "family": "Bass",
          "category": "groove",
          "description": "Aggressive synth bass timba line punching",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass",
            "synth"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "synth",
            "bass"
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
            0.85,
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.8,
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
              "id": "timba-synth-bass-v-01",
              "parentPatternId": "timba-synth-bass",
              "name": "Synth Bass Tumbao — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                10,
                14
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-synth-bass-v-02",
              "parentPatternId": "timba-synth-bass",
              "name": "Synth Bass Tumbao — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
                0.78,
                0.96
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-piano-guajeo",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Piano Guajeo",
          "family": "Piano",
          "category": "groove",
          "description": "Syncopated two-handed timba piano ostinato.",
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
            0.9,
            0.75,
            1,
            0.7,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.85,
            0.7,
            0.95,
            0.65,
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
              "id": "timba-piano-guajeo-v-01",
              "parentPatternId": "timba-piano-guajeo",
              "name": "Piano Guajeo — sparse variation",
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
                0.85,
                0.7,
                0.95,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.77,
                0.62,
                0.87,
                0.5700000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "timba-piano-guajeo-v-02",
              "parentPatternId": "timba-piano-guajeo",
              "name": "Piano Guajeo — accent shift",
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
                0.86,
                0.83,
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.88
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.9299999999999999,
                0.71,
                0.88,
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-kick-bomobo",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Kick Bombo",
          "family": "Drum Kit",
          "category": "groove",
          "description": "Kick hitting the bombo note heavily",
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
            6,
            14
          ],
          "accentProfile": [
            1,
            0.85
          ],
          "velocityProfile": [
            0.95,
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
              "id": "timba-kick-bomobo-v-01-safe",
              "parentPatternId": "timba-kick-bomobo",
              "name": "Kick Bombo — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                6,
                14
              ],
              "accentProfile": [
                0.95,
                0.9299999999999999
              ],
              "velocityProfile": [
                0.98,
                0.76
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "timba-kick-bomobo-v-02-safe",
              "parentPatternId": "timba-kick-bomobo",
              "name": "Kick Bombo — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                6,
                14
              ],
              "accentProfile": [
                0.95,
                0.9299999999999999
              ],
              "velocityProfile": [
                0.98,
                0.76
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-horn-moña",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Horn Moña",
          "family": "Horns",
          "category": "groove",
          "description": "Interlocking brass riffs cutting through the",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "brass",
            "trumpet"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "brass",
            "trumpet"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            9,
            12
          ],
          "accentProfile": [
            0.85,
            1,
            0.75,
            0.9,
            0.95
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.7,
            0.85,
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
              "id": "timba-horn-moña-v-01",
              "parentPatternId": "timba-horn-moña",
              "name": "Horn Moña — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                9
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-horn-moña-v-02",
              "parentPatternId": "timba-horn-moña",
              "name": "Horn Moña — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.71,
                0.98,
                0.9099999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
                0.6799999999999999,
                0.9099999999999999,
                0.88
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-clave-rumba",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "2-3 Rumba Clave",
          "family": "Clave",
          "category": "groove",
          "description": "Rumba clave direction fundamental to modern",
          "tags": [],
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
            8,
            11,
            14
          ],
          "accentProfile": [
            0.9,
            0.85,
            1,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.85,
            0.8,
            0.95,
            0.9,
            0.85
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
              "id": "timba-clave-rumba-v-01",
              "parentPatternId": "timba-clave-rumba",
              "name": "2-3 Rumba Clave — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                8,
                11
              ],
              "accentProfile": [
                0.85,
                0.7999999999999999,
                0.95
              ],
              "velocityProfile": [
                0.77,
                0.7200000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-clave-rumba-v-02",
              "parentPatternId": "timba-clave-rumba",
              "name": "2-3 Rumba Clave — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.86,
                0.9299999999999999,
                0.96,
                1,
                0.8099999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.78,
                0.9299999999999999,
                0.96,
                0.83
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-anticipated-pedal",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Anticipated Presión Pedal",
          "family": "Bass",
          "category": "groove",
          "description": "Bass hits landing a 16th note",
          "tags": [
            "timba",
            "anticipated",
            "presion"
          ],
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
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.8,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.75,
            0.85,
            0.9,
            0.95
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "gear-change"
          ],
          "variants": [
            {
              "id": "timba-anticipated-pedal-v-01",
              "parentPatternId": "timba-anticipated-pedal",
              "name": "Anticipated Presión Pedal — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                3,
                11,
                15
              ],
              "accentProfile": [
                0.75,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.67,
                0.77,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-anticipated-pedal-v-02",
              "parentPatternId": "timba-anticipated-pedal",
              "name": "Anticipated Presión Pedal — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                3,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.76,
                0.98,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.81,
                0.83,
                0.88,
                1
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 1,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-comp-15",
          "worldId": "timba",
          "styleIds": ["timba-songo"],
          "name": "Presión Comping",
          "family": "Presión",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "timba",
            "presion",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
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
          "swingPercentage": 53,
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
              "id": "timba-comp-15-v-01",
              "parentPatternId": "timba-comp-15",
              "name": "Presión Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                11,
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
              "id": "timba-comp-15-v-02",
              "parentPatternId": "timba-comp-15",
              "name": "Presión Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "presion"
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
