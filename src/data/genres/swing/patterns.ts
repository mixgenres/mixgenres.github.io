import type { GenreWorld, MusicalPattern } from '../../schema';


const SWING_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "swing-spang",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Spang-a-lang",
          "family": "Ride",
          "category": "fill",
          "transitionType": "fill",
          "description": "A classic swing ride-cymbal pattern maintains the triplet pulse.",
          "tags": [
            "swing",
            "ride"
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
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.65,
            0.8,
            0.95,
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
              "id": "swing-spang-v-01",
              "parentPatternId": "swing-spang",
              "name": "Spang-a-lang — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95,
                0.6499999999999999,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87,
                0.5700000000000001,
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
              "id": "swing-spang-v-02",
              "parentPatternId": "swing-spang",
              "name": "Spang-a-lang — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                9,
                10
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.6599999999999999,
                0.9299999999999999,
                0.96,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
                0.63,
                0.8600000000000001,
                0.9299999999999999,
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const SWING_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "swing-walking-bass",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Walking Bass",
          "family": "Bass",
          "category": "break",
          "transitionType": "fill",
          "description": "Quarter note acoustic walking bass line",
          "tags": [
            "swing",
            "bass"
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
          "subdivisions": 4,
          "onsetGrid": [
            0,
            1,
            2,
            3
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.85,
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
              "id": "swing-walking-bass-variant-la-pompe",
              "parentPatternId": "swing-walking-bass",
              "name": "La Pompe",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Gypsy jazz rhythm guitar with bass",
              "onsetGrid": [
                0,
                1,
                2,
                3
              ],
              "accentProfile": [
                0.8,
                1,
                0.8,
                1
              ],
              "velocityProfile": [
                0.75,
                0.95,
                0.75,
                0.95
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "swing-walking-bass-v-02",
              "parentPatternId": "swing-walking-bass",
              "name": "Walking Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                3
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                0.9099999999999999
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const SWING_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "swing-2-feel",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "2-Feel Bass",
          "family": "Bass",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Half note bass line for verses",
          "tags": [
            "swing",
            "bass"
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
          "subdivisions": 4,
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            1,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8
          ],
          "supportedEnergy": [1, 2],
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
              "id": "swing-2-feel-v-01-safe",
              "parentPatternId": "swing-2-feel",
              "name": "2-Feel Bass — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                2
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
              "id": "swing-2-feel-v-02-safe",
              "parentPatternId": "swing-2-feel",
              "name": "2-Feel Bass — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                2
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const SWING_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "swing-charleston",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Charleston Comping",
          "family": "Comping",
          "category": "groove",
          "description": "Classic dotted quarter and eighth note",
          "tags": [
            "swing",
            "piano"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys",
            "piano"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "keys",
            "piano"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            3
          ],
          "accentProfile": [
            1,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8
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
              "id": "swing-charleston-v-01-safe",
              "parentPatternId": "swing-charleston",
              "name": "Charleston Comping — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                3
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
              "id": "swing-charleston-v-02-safe",
              "parentPatternId": "swing-charleston",
              "name": "Charleston Comping — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                3
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
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
          "id": "swing-shuffle",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Shuffle Swing",
          "family": "Beat",
          "category": "groove",
          "description": "Heavy big band shuffle blues feel",
          "tags": [
            "swing",
            "shuffle"
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
            0.7,
            0.95,
            0.7,
            0.9,
            0.7,
            0.95,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.65,
            0.85,
            0.65,
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
              "id": "swing-shuffle-variant-jump-blues-shuffle",
              "parentPatternId": "swing-shuffle",
              "name": "Jump Blues Shuffle",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Aggressive Louis Jordan style triplet shuffle.",
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
                0.75,
                0.95,
                0.75,
                0.9,
                0.75,
                0.95,
                0.8
              ],
              "velocityProfile": [
                0.95,
                0.7,
                0.9,
                0.7,
                0.85,
                0.7,
                0.9,
                0.75
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "swing-shuffle-v-02",
              "parentPatternId": "swing-shuffle",
              "name": "Shuffle Swing — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999,
                0.86,
                0.7799999999999999,
                0.9099999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.71,
                0.83,
                0.63,
                0.96,
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
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
          "id": "swing-bebop-ride",
          "worldId": "swing",
          "styleIds": ["swing-gypsy-jazz"],
          "name": "Bebop Ride",
          "family": "Ride",
          "category": "groove",
          "description": "Fast, light ride pattern with dropped",
          "tags": [
            "swing",
            "bebop"
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
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            10,
            11
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.7,
            0.85,
            1,
            0.7,
            0.9
          ],
          "velocityProfile": [
            0.8,
            0.9,
            0.65,
            0.8,
            0.95,
            0.65,
            0.85
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "swing-bebop-ride-v-01",
              "parentPatternId": "swing-bebop-ride",
              "name": "Bebop Ride — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                11
              ],
              "accentProfile": [
                0.7999999999999999,
                0.8999999999999999,
                0.6499999999999999,
                0.7999999999999999,
                0.95
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.8200000000000001,
                0.5700000000000001,
                0.7200000000000001,
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
              "id": "swing-bebop-ride-v-02",
              "parentPatternId": "swing-bebop-ride",
              "name": "Bebop Ride — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                9,
                10,
                11
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.6599999999999999,
                0.9299999999999999,
                0.96,
                0.7799999999999999,
                0.86
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.88,
                0.63,
                0.8600000000000001,
                0.9299999999999999,
                0.63,
                0.9099999999999999
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
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
          "id": "swing-brushes",
          "worldId": "swing",
          "styleIds": ["swing-gypsy-jazz"],
          "name": "Brushes Ballad",
          "family": "Beat",
          "category": "groove",
          "description": "Swished wire brushes on coated snare",
          "tags": [
            "swing",
            "brushes"
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            0.75,
            1,
            0.75,
            1
          ],
          "velocityProfile": [
            0.7,
            0.95,
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
              "id": "swing-brushes-v-02",
              "parentPatternId": "swing-brushes",
              "name": "Brushes Ballad — accent shift",
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
                0.71,
                1,
                0.71,
                1
              ],
              "velocityProfile": [
                0.76,
                0.9299999999999999,
                0.6799999999999999,
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
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
          "id": "swing-ensemble",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Ensemble Hits",
          "family": "Comping",
          "category": "groove",
          "description": "Syncopated brass and rhythm section punch",
          "tags": [
            "swing",
            "big-band"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys",
            "trumpet"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys",
            "trumpet"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            1,
            4,
            6
          ],
          "accentProfile": [
            0.9,
            1,
            0.95
          ],
          "velocityProfile": [
            0.85,
            0.95,
            0.9
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
              "id": "swing-ensemble-v-01",
              "parentPatternId": "swing-ensemble",
              "name": "Ensemble Hits — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                6
              ],
              "accentProfile": [
                0.85,
                0.95
              ],
              "velocityProfile": [
                0.77,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "swing-ensemble-v-02",
              "parentPatternId": "swing-ensemble",
              "name": "Ensemble Hits — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                6
              ],
              "accentProfile": [
                0.86,
                1,
                0.9099999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.9299999999999999,
                0.88
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
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
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
          "id": "swing-comp-13",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Piano Comping",
          "family": "Comping",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "swing",
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
            4,
            7,
            8,
            10,
            11,
            13,
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
              "id": "swing-comp-13-v-01",
              "parentPatternId": "swing-comp-13",
              "name": "Piano Comping — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                4,
                8,
                10,
                13,
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
              "id": "swing-comp-13-v-02",
              "parentPatternId": "swing-comp-13",
              "name": "Piano Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                4,
                7,
                8,
                10,
                11,
                13,
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "comping"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "swing-verse-15",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Spang-a-Lang Verse Variation",
          "family": "Spang-a-Lang",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "swing",
            "spang-a-lang",
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
          "subdivisions": 12,
          "onsetGrid": [
            1,
            2,
            3,
            5,
            7,
            8
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
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 66,
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
              "id": "swing-verse-15-v-01",
              "parentPatternId": "swing-verse-15",
              "name": "Spang-a-Lang Verse Variation — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                3,
                5,
                8
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
              "id": "swing-verse-15-v-02",
              "parentPatternId": "swing-verse-15",
              "name": "Spang-a-Lang Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                3,
                5,
                7,
                8
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "spang-a-lang"
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
    "id": "tech-swing-ride-swing",
    "worldId": "swing",
    "styleIds": [
      "swing-new-orleans-trad-jazz",
      "swing-kansas-city-swing",
      "swing-chicago-swing",
      "swing-vocal-swing"
    ],
    "name": "ride swing",
    "shortName": "ride swing",
    "family": "swing",
    "category": "groove",
    "description": "Technique: ride swing",
    "tags": [
      "swing",
      "ride swing"
    ],
    "approaches": [
      "ride swing"
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
      "swing",
      "ride swing"
    ],
    "techniques": [
      "ride swing"
    ]
  },
  {
    "id": "tech-swing-charleston",
    "worldId": "swing",
    "styleIds": [
      "swing-chicago-swing"
    ],
    "name": "Charleston",
    "shortName": "Charleston",
    "family": "swing",
    "category": "groove",
    "description": "Technique: Charleston",
    "tags": [
      "swing",
      "Charleston"
    ],
    "approaches": [
      "Charleston"
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
      "swing",
      "Charleston"
    ],
    "techniques": [
      "Charleston"
    ]
  },
  {
    "id": "tech-swing-swing-triplets",
    "worldId": "swing",
    "styleIds": [
      "swing-new-orleans-trad-jazz",
      "swing-kansas-city-swing",
      "swing-chicago-swing",
      "swing-vocal-swing"
    ],
    "name": "triplets",
    "shortName": "triplets",
    "family": "swing",
    "category": "groove",
    "description": "Technique: swing triplets",
    "tags": [
      "swing",
      "swing triplets"
    ],
    "approaches": [
      "swing triplets"
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
      "swing",
      "swing triplets"
    ],
    "techniques": [
      "swing triplets"
    ]
  },
  {
    "id": "tech-swing-big-band-riff",
    "worldId": "swing",
    "styleIds": [
      "swing-kansas-city-swing"
    ],
    "name": "big-band riff",
    "shortName": "big-band riff",
    "family": "swing",
    "category": "groove",
    "description": "Technique: big-band riff",
    "tags": [
      "swing",
      "big-band riff"
    ],
    "approaches": [
      "big-band riff"
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
      "swing",
      "big-band riff"
    ],
    "techniques": [
      "big-band riff"
    ]
  },
  {
    "id": "style-swing-new-orleans-trad-jazz-signature",
    "worldId": "swing",
    "styleIds": [
      "swing-new-orleans-trad-jazz"
    ],
    "name": "New Orleans Trad Jazz",
    "shortName": "New Orleans Trad Jazz",
    "family": "swing",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "swing",
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
      "clarinet",
      "trumpet",
      "trombone",
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
      "swing",
      "signature"
    ],
    "techniques": [
      "ride swing",
      "stride piano",
      "swing triplets"
    ]
  },
  {
    "id": "style-swing-kansas-city-swing-signature",
    "worldId": "swing",
    "styleIds": [
      "swing-kansas-city-swing"
    ],
    "name": "Kansas City Swing",
    "shortName": "Kansas City Swing",
    "family": "swing",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "swing",
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
      "swing",
      "signature"
    ],
    "techniques": [
      "ride swing",
      "shout chorus",
      "walking bass",
      "big-band riff",
      "swing triplets"
    ]
  },
  {
    "id": "style-swing-chicago-swing-signature",
    "worldId": "swing",
    "styleIds": [
      "swing-chicago-swing"
    ],
    "name": "Chicago Swing",
    "shortName": "Chicago Swing",
    "family": "swing",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "swing",
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
      "clarinet",
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
      "swing",
      "signature"
    ],
    "techniques": [
      "walking bass",
      "Charleston",
      "ride swing",
      "swing triplets"
    ]
  },
  {
    "id": "style-swing-vocal-swing-signature",
    "worldId": "swing",
    "styleIds": [
      "swing-vocal-swing"
    ],
    "name": "Vocal Swing",
    "shortName": "Vocal Swing",
    "family": "swing",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "swing",
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
      "voice",
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
      "swing",
      "signature"
    ],
    "techniques": [
      "scat syllables",
      "swing triplets",
      "ride swing"
    ]
  }
];


const SWING_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "swing-shout-chorus",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Shout Chorus Ensemble Hits",
          "family": "Ensemble",
          "category": "sectionPattern",
          "description": "Full horn section and rhythm section",
          "tags": [
            "swing",
            "big-band",
            "shout-chorus"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "keys",
            "trumpet",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys",
            "trumpet",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            8,
            11,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.7,
            0.95,
            0.8,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.65,
            0.9,
            0.75,
            0.85
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "coda"
          ],
          "variants": [
            {
              "id": "swing-shout-chorus-v-01",
              "parentPatternId": "swing-shout-chorus",
              "name": "Shout Chorus Ensemble Hits — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.5700000000000001,
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
              "id": "swing-shout-chorus-v-02",
              "parentPatternId": "swing-shout-chorus",
              "name": "Shout Chorus Ensemble Hits — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                11,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.6599999999999999,
                1,
                0.76,
                0.98
              ],
              "velocityProfile": [
                1,
                0.78,
                0.63,
                0.96,
                0.73,
                0.83
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
              "id": "swing-shout-chorus-v-03",
              "parentPatternId": "swing-shout-chorus",
              "name": "Shout Chorus Ensemble Hits — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.83,
                0.6799999999999999,
                0.9299999999999999,
                0.78,
                0.88,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.8,
                0.65,
                0.9,
                0.75,
                0.85,
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
    
          "difficulty": 2,
          "weight": 0.7,
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
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
          "id": "swing-intro-14",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Turnaround Intro",
          "family": "Turnaround",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "swing",
            "turnaround",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
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
            2,
            3,
            6,
            8,
            9,
            11
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
          "articulations": ["accented"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "swing-intro-14-v-01",
              "parentPatternId": "swing-intro-14",
              "name": "Turnaround Intro — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                6,
                9,
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
              "id": "swing-intro-14-v-02",
              "parentPatternId": "swing-intro-14",
              "name": "Turnaround Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                6,
                8,
                9,
                11
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
            },
            {
              "id": "swing-intro-14-v-03",
              "parentPatternId": "swing-intro-14",
              "name": "Turnaround Intro — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                3,
                6,
                8,
                9,
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "turnaround"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "swing-chorus-16",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "La Pompe Chorus Lift",
          "family": "La Pompe",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer increases rhythmic density while keeping the underlying pulse clear.",
          "tags": [
            "swing",
            "la-pompe",
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
            "piano"
          ],
          "compatibleRoles": [
            "pulse",
            "harmony",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            5,
            8,
            10,
            11,
            13
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
          "anticipationOffset": 1,
          "swingPercentage": 66,
          "articulations": ["accented"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "swing-chorus-16-v-01",
              "parentPatternId": "swing-chorus-16",
              "name": "La Pompe Chorus Lift — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                5,
                8,
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
              "id": "swing-chorus-16-v-02",
              "parentPatternId": "swing-chorus-16",
              "name": "La Pompe Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                5,
                8,
                10,
                11,
                13
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
            },
            {
              "id": "swing-chorus-16-v-03",
              "parentPatternId": "swing-chorus-16",
              "name": "La Pompe Chorus Lift — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                2,
                4,
                5,
                8,
                10,
                11,
                13,
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "la-pompe"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const SWING_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "swing-phrase-10",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Spang-a-Lang Phrase",
          "family": "Spang-a-Lang",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "swing",
            "spang-a-lang",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "alto-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "alto-sax"
          ],
          "compatibleRoles": [
            "alto-sax"
          ],
          "compatibleInstruments": [
            "alto-sax"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            7,
            9,
            10
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
          "articulations": ["breath"],
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
              "id": "swing-phrase-10-v-01",
              "parentPatternId": "swing-phrase-10",
              "name": "Spang-a-Lang Phrase — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                9,
                10
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
              "id": "swing-phrase-10-v-02",
              "parentPatternId": "swing-phrase-10",
              "name": "Spang-a-Lang Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                7,
                9,
                10
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "spang-a-lang"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "swing--phrasing",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Dedicated vocal phrasing space for Swing,",
          "tags": [
            "swing",
            "alto-sax",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "alto-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "alto-sax"
          ],
          "compatibleRoles": [
            "alto-sax",
            "lead"
          ],
          "compatibleInstruments": [
            "alto-sax"
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
            0.98,
            0.62,
            0.84,
            0.6,
            0.94,
            0.68
          ],
          "velocityProfile": [
            0.92,
            0.58,
            0.78,
            0.56,
            0.88,
            0.64
          ],
          "syncopationRating": 0.66,
          "anticipationOffset": 0,
          "swingPercentage": 55,
          "articulations": ["breath"],
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
              "id": "swing--phrasing-v1",
              "parentPatternId": "swing--phrasing",
              "name": "Vocal Phrasing — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Sparse answer-friendly repeat.",
              "onsetGrid": [
                0,
                3,
                10,
                15
              ],
              "accentProfile": [
                0.98,
                0.62,
                0.92,
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
              "id": "swing--phrasing-v2",
              "parentPatternId": "swing--phrasing",
              "name": "Vocal Phrasing — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Shifted vocal emphasis for repeat variation.",
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
                0.8,
                0.65,
                1,
                0.62
              ],
              "velocityProfile": [
                0.86,
                0.62,
                0.76,
                0.6,
                0.92,
                0.58
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: vocal coverage for Swing.",
          "authenticityTags": [
            "swing",
            "alto-sax"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.8,
          "enabled": true
        }
];


const SWING_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "swing-call-11",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "La Pompe Response",
          "family": "La Pompe",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "swing",
            "la-pompe",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "alto-sax",
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "drums",
            "bass",
            "piano"
          ],
          "compatibleRoles": [
            "alto-sax",
            "lead"
          ],
          "compatibleInstruments": [
            "drums",
            "bass",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            5,
            7,
            8,
            10,
            11
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
          "syncopationRating": 0.7142857142857143,
          "anticipationOffset": 0,
          "swingPercentage": 66,
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
              "id": "swing-call-11-v-01",
              "parentPatternId": "swing-call-11",
              "name": "La Pompe Response — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                5,
                7,
                10,
                11
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
              "id": "swing-call-11-v-02",
              "parentPatternId": "swing-call-11",
              "name": "La Pompe Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                5,
                7,
                8,
                10,
                11
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
              "id": "swing-call-11-v-03",
              "parentPatternId": "swing-call-11",
              "name": "La Pompe Response — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                4,
                5,
                7,
                8,
                10,
                11,
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
                0.62,
                0.95,
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "la-pompe"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const SWING_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "swing-anchor-12",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Shout Anchor",
          "family": "Shout",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "swing",
            "shout",
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
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
            6,
            8,
            9,
            11,
            12
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
              "id": "swing-anchor-12-v-01",
              "parentPatternId": "swing-anchor-12",
              "name": "Shout Anchor — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                6,
                8,
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
              "id": "swing-anchor-12-v-02",
              "parentPatternId": "swing-anchor-12",
              "name": "Shout Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                6,
                8,
                9,
                11,
                12
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "shout"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const SWING_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-swing-walking-bass",
    "worldId": "swing",
    "styleIds": [
      "swing-kansas-city-swing",
      "swing-chicago-swing"
    ],
    "name": "walking bass",
    "shortName": "walking bass",
    "family": "swing",
    "category": "bass",
    "description": "Technique: walking bass",
    "tags": [
      "swing",
      "walking bass"
    ],
    "approaches": [
      "walking bass"
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
      0.65,
      0.65,
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72,
      0.92,
      0.72
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
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "swing",
      "walking bass"
    ],
    "techniques": [
      "walking bass"
    ]
  }
];


const SWING_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-swing-four-to-the-bar-guitar",
    "worldId": "swing",
    "styleIds": [],
    "name": "four-to-the-bar guitar",
    "shortName": "four-to-the-bar guitar",
    "family": "swing",
    "category": "comping",
    "description": "Technique: four-to-the-bar guitar",
    "tags": [
      "swing",
      "four-to-the-bar guitar"
    ],
    "approaches": [
      "four-to-the-bar guitar"
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
      "swing",
      "four-to-the-bar guitar"
    ],
    "techniques": [
      "four-to-the-bar guitar"
    ]
  },
  {
    "id": "tech-swing-stride-piano",
    "worldId": "swing",
    "styleIds": [
      "swing-new-orleans-trad-jazz"
    ],
    "name": "stride piano",
    "shortName": "stride piano",
    "family": "swing",
    "category": "comping",
    "description": "Technique: stride piano",
    "tags": [
      "swing",
      "stride piano"
    ],
    "approaches": [
      "stride piano"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "piano"
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
      "swing",
      "stride piano"
    ],
    "techniques": [
      "stride piano"
    ]
  },
  {
    "id": "tech-swing-horn-section-voicing",
    "worldId": "swing",
    "styleIds": [],
    "name": "horn section voicing",
    "shortName": "horn section voicing",
    "family": "swing",
    "category": "comping",
    "description": "Technique: horn section voicing",
    "tags": [
      "swing",
      "horn section voicing"
    ],
    "approaches": [
      "horn section voicing"
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
      "swing",
      "horn section voicing"
    ],
    "techniques": [
      "horn section voicing"
    ]
  }
];


const SWING_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-swing-shout-chorus",
    "worldId": "swing",
    "styleIds": [
      "swing-kansas-city-swing"
    ],
    "name": "shout chorus",
    "shortName": "shout chorus",
    "family": "swing",
    "category": "lead",
    "description": "Technique: shout chorus",
    "tags": [
      "swing",
      "shout chorus"
    ],
    "approaches": [
      "shout chorus"
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
      "swing",
      "shout chorus"
    ],
    "techniques": [
      "shout chorus"
    ]
  },
  {
    "id": "tech-swing-scat-syllables",
    "worldId": "swing",
    "styleIds": [
      "swing-vocal-swing"
    ],
    "name": "scat syllables",
    "shortName": "scat syllables",
    "family": "swing",
    "category": "lead",
    "description": "Technique: scat syllables",
    "tags": [
      "swing",
      "scat syllables"
    ],
    "approaches": [
      "scat syllables"
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
      "swing",
      "scat syllables"
    ],
    "techniques": [
      "scat syllables"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": SWING_WORLD_PATTERNS_FILL,
  "break": SWING_WORLD_PATTERNS_BREAK,
  "cadence": SWING_WORLD_PATTERNS_CADENCE,
  "groove": SWING_WORLD_PATTERNS_GROOVE,
  "sectionPattern": SWING_WORLD_PATTERNS_SECTIONPATTERN,
  "phrasePattern": SWING_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": SWING_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": SWING_WORLD_PATTERNS_OSTINATO,
  "bass": SWING_WORLD_PATTERNS_BASS,
  "comping": SWING_WORLD_PATTERNS_COMPING,
  "lead": SWING_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"groove","index":6},{"category":"sectionPattern","index":2},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"lead","index":0},{"category":"lead","index":1}];

export const SWING_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
