import type { MusicalPattern } from '../../../schema';

export const SWING_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
              "name": "Charleston Comping — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
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
              "name": "Charleston Comping — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
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
          "styleIds": [],
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
              "name": "Bebop Ride — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": [],
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
              "description": "Keeps the rhythm intact but moves",
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
              "name": "Ensemble Hits — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "name": "Comping Comping",
          "family": "Comping",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
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
              "name": "Comping Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "name": "Comping Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
          "description": "A restrained verse variation with intentional",
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
              "name": "Spang-a-Lang Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
];
