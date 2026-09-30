import type { MusicalPattern } from '../../../schema';

export const JAZZ_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "jazz-ride-broken",
          "worldId": "jazz",
          "styleIds": ["jazz-modal-contemporary"],
          "name": "Broken Ride",
          "family": "Drums",
          "category": "groove",
          "description": "Interactive, conversational broken-time ride cymbal.",
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
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            9
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.55,
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
              "id": "jazz-ride-broken-v-01",
              "parentPatternId": "jazz-ride-broken",
              "name": "Broken Ride — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "jazz-ride-broken-v-02",
              "parentPatternId": "jazz-ride-broken",
              "name": "Broken Ride — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                9
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.6100000000000001,
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
          "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "jazz"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "jazz-bass-pedal",
          "worldId": "jazz",
          "styleIds": ["jazz-modal-contemporary"],
          "name": "Pedal Point",
          "family": "Bass",
          "category": "groove",
          "description": "Repeating root pedal anchor building modal",
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            0.95,
            0.78,
            0.88,
            0.72
          ],
          "velocityProfile": [
            0.9,
            0.7,
            0.82,
            0.68
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
              "id": "jazz-bass-pedal-v-01",
              "parentPatternId": "jazz-bass-pedal",
              "name": "Pedal Point — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6
              ],
              "accentProfile": [
                0.8999999999999999,
                0.73,
                0.83
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.62,
                0.74
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "jazz-bass-pedal-v-02",
              "parentPatternId": "jazz-bass-pedal",
              "name": "Pedal Point — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.9099999999999999,
                0.86,
                0.84,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.96,
                0.6799999999999999,
                0.7999999999999999,
                0.74
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
          "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "jazz"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "jazz-comping-sync",
          "worldId": "jazz",
          "styleIds": ["jazz-modal-contemporary"],
          "name": "Syncopated Comping",
          "family": "Piano",
          "category": "groove",
          "description": "Offbeat pushes and harmonic anticipations.",
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
          "subdivisions": 8,
          "onsetGrid": [
            1,
            4,
            7
          ],
          "accentProfile": [
            0.85,
            1,
            0.9
          ],
          "velocityProfile": [
            0.8,
            0.95,
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
              "id": "jazz-comping-sync-v-01",
              "parentPatternId": "jazz-comping-sync",
              "name": "Syncopated Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "jazz-comping-sync-v-02",
              "parentPatternId": "jazz-comping-sync",
              "name": "Syncopated Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.86
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
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
          "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "jazz"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "jazz-snare-comp",
          "worldId": "jazz",
          "styleIds": ["jazz-swing-bebop"],
          "name": "Snare Comping",
          "family": "Drums",
          "category": "groove",
          "description": "Dropping bombs and snare commentary behind",
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
          "subdivisions": 12,
          "onsetGrid": [
            2,
            7,
            10
          ],
          "accentProfile": [
            0.75,
            1,
            0.85
          ],
          "velocityProfile": [
            0.7,
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
              "id": "jazz-snare-comp-v-01",
              "parentPatternId": "jazz-snare-comp",
              "name": "Snare Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                10
              ],
              "accentProfile": [
                0.7,
                0.95
              ],
              "velocityProfile": [
                0.62,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "jazz-snare-comp-v-02",
              "parentPatternId": "jazz-snare-comp",
              "name": "Snare Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                7,
                10
              ],
              "accentProfile": [
                0.71,
                1,
                0.8099999999999999
              ],
              "velocityProfile": [
                0.76,
                0.9299999999999999,
                0.78
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
          "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "jazz"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "jazz-waltz-ride",
          "worldId": "jazz",
          "styleIds": ["jazz-modal-contemporary"],
          "name": "Jazz Waltz Ride",
          "family": "Drums",
          "category": "groove",
          "description": "Swinging triplet ride pattern in 3/4",
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
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 9,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8
          ],
          "accentProfile": [
            1,
            0.65,
            0.85,
            0.6,
            0.9,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.8,
            0.55,
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
              "id": "jazz-waltz-ride-v-01",
              "parentPatternId": "jazz-waltz-ride",
              "name": "Jazz Waltz Ride — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5,
                8
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.7999999999999999,
                0.5499999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.7200000000000001,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "jazz-waltz-ride-v-02",
              "parentPatternId": "jazz-waltz-ride",
              "name": "Jazz Waltz Ride — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.8099999999999999,
                0.6799999999999999,
                0.86,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.78,
                0.6100000000000001,
                0.83,
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
          "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "jazz"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "jazz-comp-16",
          "worldId": "jazz",
          "styleIds": ["jazz-swing-bebop"],
          "name": "Piano Comping Cell",
          "family": "Comping",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "jazz",
            "comping",
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
            5,
            8,
            10,
            13,
            15
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
          "swingPercentage": 66,
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
              "id": "jazz-comp-16-v-01",
              "parentPatternId": "jazz-comp-16",
              "name": "Piano Comping Cell — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                5,
                10,
                13
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
              "id": "jazz-comp-16-v-02",
              "parentPatternId": "jazz-comp-16",
              "name": "Piano Comping Cell — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                5,
                8,
                10,
                13,
                15
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
          "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "jazz",
            "comping"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
];
