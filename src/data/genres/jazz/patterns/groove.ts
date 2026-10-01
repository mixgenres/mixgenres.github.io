import type { MusicalPattern } from '../../../schema';

export const JAZZ_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "jazz-ride-broken",
          "worldId": "jazz",
          "styleIds": ["jazz-fusion"],
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
          "styleIds": ["jazz-fusion"],
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
          "styleIds": ["jazz-fusion", "jazz-hard-bop"],
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
          "styleIds": ["jazz-bebop", "jazz-hard-bop"],
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
          "styleIds": ["jazz-fusion"],
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
          "styleIds": ["jazz-bebop"],
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
,
  {
    "id": "tech-jazz-ride-cymbal-swing",
    "worldId": "jazz",
    "styleIds": [
      "jazz-swing-era"
    ],
    "name": "ride cymbal swing",
    "shortName": "ride cymbal swing",
    "family": "jazz",
    "category": "groove",
    "description": "Technique: ride cymbal swing",
    "tags": [
      "jazz",
      "ride cymbal swing"
    ],
    "approaches": [
      "ride cymbal swing"
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
      "jazz",
      "ride cymbal swing"
    ],
    "techniques": [
      "ride cymbal swing"
    ]
  },
  {
    "id": "tech-jazz-comping-anticipation",
    "worldId": "jazz",
    "styleIds": [
      "jazz-modal-jazz",
      "jazz-jazz-funk"
    ],
    "name": "comping anticipation",
    "shortName": "comping anticipation",
    "family": "jazz",
    "category": "groove",
    "description": "Technique: comping anticipation",
    "tags": [
      "jazz",
      "comping anticipation"
    ],
    "approaches": [
      "comping anticipation"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
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
      "jazz",
      "comping anticipation"
    ],
    "techniques": [
      "comping anticipation"
    ]
  },
  {
    "id": "tech-jazz-jazz-triplet",
    "worldId": "jazz",
    "styleIds": [
      "jazz-modal-jazz",
      "jazz-jazz-funk",
      "jazz-brazilian-jazz"
    ],
    "name": "jazz triplet",
    "shortName": "jazz triplet",
    "family": "jazz",
    "category": "groove",
    "description": "Technique: jazz triplet",
    "tags": [
      "jazz",
      "jazz triplet"
    ],
    "approaches": [
      "jazz triplet"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
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
      "jazz",
      "jazz triplet"
    ],
    "techniques": [
      "jazz triplet"
    ]
  },
  {
    "id": "tech-jazz-trading-fours",
    "worldId": "jazz",
    "styleIds": [
      "jazz-post-bop"
    ],
    "name": "trading fours",
    "shortName": "trading fours",
    "family": "jazz",
    "category": "groove",
    "description": "Technique: trading fours",
    "tags": [
      "jazz",
      "trading fours"
    ],
    "approaches": [
      "trading fours"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
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
      "jazz",
      "trading fours"
    ],
    "techniques": [
      "trading fours"
    ]
  },
  {
    "id": "style-jazz-swing-era-signature",
    "worldId": "jazz",
    "styleIds": [
      "jazz-swing-era"
    ],
    "name": "Swing Era Signature Cell",
    "shortName": "Swing Era Cell",
    "family": "jazz",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "jazz",
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
      "upright-bass",
      "piano",
      "brass"
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
      0.7,
      0.7,
      0.7,
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
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
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "jazz",
      "signature"
    ],
    "techniques": [
      "walking bass",
      "big-band shout chorus",
      "ride cymbal swing"
    ]
  },
  {
    "id": "style-jazz-modal-jazz-signature",
    "worldId": "jazz",
    "styleIds": [
      "jazz-modal-jazz"
    ],
    "name": "Modal Jazz Signature Cell",
    "shortName": "Modal Jazz Cell",
    "family": "jazz",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "jazz",
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
      "upright-bass",
      "drums",
      "piano",
      "tenor-sax"
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
      "jazz",
      "signature"
    ],
    "techniques": [
      "modal vamp",
      "quartal voicing",
      "comping anticipation",
      "jazz triplet"
    ]
  },
  {
    "id": "style-jazz-post-bop-signature",
    "worldId": "jazz",
    "styleIds": [
      "jazz-post-bop"
    ],
    "name": "Post-Bop Signature Cell",
    "shortName": "Post-Bop Cell",
    "family": "jazz",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "jazz",
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
      "upright-bass",
      "drums",
      "piano",
      "tenor-sax"
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
      "jazz",
      "signature"
    ],
    "techniques": [
      "guide-tone line",
      "collective improvisation",
      "trading fours"
    ]
  },
  {
    "id": "style-jazz-jazz-funk-signature",
    "worldId": "jazz",
    "styleIds": [
      "jazz-jazz-funk"
    ],
    "name": "Jazz-Funk Signature Cell",
    "shortName": "Jazz-Funk Cell",
    "family": "jazz",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "jazz",
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
      "drums",
      "rhodes",
      "clavinet"
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
      "jazz",
      "signature"
    ],
    "techniques": [
      "collective improvisation",
      "comping anticipation",
      "jazz triplet",
      "modal vamp"
    ]
  },
  {
    "id": "style-jazz-avant-garde-free-improvisation-signature",
    "worldId": "jazz",
    "styleIds": [
      "jazz-avant-garde-free-improvisation"
    ],
    "name": "Avant-Garde / Free Improvisation Signature Cell",
    "shortName": "Avant-Garde / Free Improvisation Cell",
    "family": "jazz",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "jazz",
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
      "piano",
      "upright-bass",
      "drums",
      "alto-sax"
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
      "jazz",
      "signature"
    ],
    "techniques": [
      "collective improvisation",
      "non-grid phrasing"
    ]
  },
  {
    "id": "style-jazz-brazilian-jazz-signature",
    "worldId": "jazz",
    "styleIds": [
      "jazz-brazilian-jazz"
    ],
    "name": "Brazilian Jazz Signature Cell",
    "shortName": "Brazilian Jazz Cell",
    "family": "jazz",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "jazz",
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
      "acoustic-guitar",
      "piano",
      "upright-bass",
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
      "jazz",
      "signature"
    ],
    "techniques": [
      "jazz triplet"
    ]
  }
];
