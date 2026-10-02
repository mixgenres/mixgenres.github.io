import type { MusicalPattern, GenreWorld } from '../../schema';

export const TANGO_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "tango-violin-melody",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Violin Legato",
          "family": "Strings",
          "category": "break",
          "transitionType": "fill",
          "description": "Smooth expressive legato melody phrasing.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "violin",
            "string-ensemble"
          ],
    
          "approaches": ["sustain"],
          "instruments": ["violin", "string-ensemble"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            1,
            0.8
          ],
          "velocityProfile": [
            0.95,
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
              "id": "tango-violin-melody-v-01-safe",
              "parentPatternId": "tango-violin-melody",
              "name": "Violin Legato — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.88
              ],
              "velocityProfile": [
                0.98,
                0.71
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "tango-violin-melody-v-02-safe",
              "parentPatternId": "tango-violin-melody",
              "name": "Violin Legato — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.88
              ],
              "velocityProfile": [
                0.98,
                0.71
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
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
        }
];

export const TANGO_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "tango-piano-chumba",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Piano Chumba",
          "family": "Piano",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Heavy bass anchor on beats 1",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "piano",
            "keys"
          ],
    
          "approaches": ["comping"],
          "instruments": ["piano", "keys"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            1,
            4,
            5
          ],
          "accentProfile": [
            1,
            0.65,
            0.95,
            0.6
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.9,
            0.55
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
              "id": "tango-piano-chumba-v-01",
              "parentPatternId": "tango-piano-chumba",
              "name": "Piano Chumba — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                5
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "tango-piano-chumba-v-02",
              "parentPatternId": "tango-piano-chumba",
              "name": "Piano Chumba — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                4,
                5
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.9099999999999999,
                0.6799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.88,
                0.6100000000000001
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
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
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
        }
];

export const TANGO_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "tango-sincopa",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Síncopa a Tierra (Standard Syncopation)",
          "family": "Syncopated Figures",
          "category": "cell",
          "description": "Off-beat accent landing on the \"and\"",
          "tags": [
            "sincopa",
            "syncopation",
            "tango",
            "accent"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "harmony",
            "bass",
            "piano",
            "bandoneon",
            "counterline"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": ["piano", "bandoneon", "guitar", "bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.6,
            1,
            0.85,
            0.8,
            0.2
          ],
          "velocityProfile": [
            0.65,
            0.95,
            0.8,
            0.75,
            0.25
          ],
          "articulations": [
            "staccato-accent"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "tango-sincopa-volcada",
              "parentPatternId": "tango-sincopa",
              "name": "Síncopa con Remate",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                2,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.5,
                1,
                0.7,
                0.85,
                0.9
              ],
              "description": "Síncopa concluding with an accented anticipation"
            },
            {
              "id": "tango-sincopa-v-02",
              "parentPatternId": "tango-sincopa",
              "name": "Síncopa a Tierra (Standard Syncopation) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                8,
                12
              ],
              "accentProfile": [
                0.5599999999999999,
                1,
                0.8099999999999999,
                0.88
              ],
              "velocityProfile": [
                0.71,
                0.9299999999999999,
                0.78,
                0.81
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "tango-sincopa-percussiva",
              "parentPatternId": "tango-sincopa",
              "name": "Síncopa Percussiva (Chicharra y Golpe)",
              "variationType": "syncopated",
              "probability": 0.45,
              "description": "Percussive syncopation with violin chicharra scrape on weak offbeat and bass golpe on strong syncopation",
              "onsetGrid": [
                0,
                2,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.6,
                1,
                0.75,
                0.9,
                0.95
              ],
              "hitGrid": [
                "arrastre",
                "golpe",
                "chicharra",
                "cluster",
                "strappata"
              ],
              "articulation": "chicharra"
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 1,
    
        }
];

export const TANGO_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "tango-bandoneon-chords",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Bandoneon Chords",
          "family": "Bandoneon",
          "category": "fill",
          "transitionType": "fill",
          "description": "Staccato chordal accents with marcato dynamic",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bandoneon",
            "keys"
          ],
    
          "approaches": ["groove"],
          "instruments": ["bandoneon", "keys"],
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
            0.65,
            0.9,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.6,
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
              "id": "tango-bandoneon-chords-v-01",
              "parentPatternId": "tango-bandoneon-chords",
              "name": "Bandoneon Chords — sparse variation",
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
                0.6,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "tango-bandoneon-chords-v-02",
              "parentPatternId": "tango-bandoneon-chords",
              "name": "Bandoneon Chords — accent shift",
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
                0.73,
                0.86,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.83,
                0.71
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
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
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
        }
];

export const TANGO_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "tango-bass-pizzicato",
          "worldId": "tango",
          "styleIds": ["tango-tango-nuevo"],
          "name": "Pizzicato Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Plucked bass syncopations with dynamic accents.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            3,
            6
          ],
          "accentProfile": [
            1,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.95,
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
              "id": "tango-bass-pizzicato-v-01",
              "parentPatternId": "tango-bass-pizzicato",
              "name": "Pizzicato Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6
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
              "id": "tango-bass-pizzicato-v-02",
              "parentPatternId": "tango-bass-pizzicato",
              "name": "Pizzicato Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.71
              ],
              "velocityProfile": [
                1,
                0.78,
                0.6799999999999999
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
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
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
          "id": "tango-comp-15",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Yumba Comping",
          "family": "Yumba",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "tango",
            "yumba",
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
          "instruments": ["guitar", "piano"],
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
            0,
            3,
            4,
            7,
            9,
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
          "syncopationRating": 0.5714285714285714,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-comp-15-v-01",
              "parentPatternId": "tango-comp-15",
              "name": "Yumba Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                12,
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
              "id": "tango-comp-15-v-02",
              "parentPatternId": "tango-comp-15",
              "name": "Yumba Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                9,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "yumba"
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
          "id": "tango-verse-17",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Síncopa Verse Variation",
          "family": "Síncopa",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "tango",
            "sincopa",
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
          "instruments": ["drums", "percussion", "guitar"],
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
            3,
            6,
            7,
            10,
            13,
            15
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
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "tango-verse-17-v-01",
              "parentPatternId": "tango-verse-17",
              "name": "Síncopa Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                3,
                7,
                10,
                15
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
              "id": "tango-verse-17-v-02",
              "parentPatternId": "tango-verse-17",
              "name": "Síncopa Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                3,
                6,
                7,
                10,
                13,
                15
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "sincopa"
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

export const TANGO_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "tango-call-13",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Síncopa Response",
          "family": "Síncopa",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "tango",
            "sincopa",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bandoneon",
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["guitar", "bass", "sax"],
          "compatibleRoles": [
            "bandoneon",
            "lead"
          ],
          "compatibleInstruments": [
            "guitar",
            "bass",
            "sax"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            4,
            6,
            9,
            11,
            13
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
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-call-13-v-01",
              "parentPatternId": "tango-call-13",
              "name": "Síncopa Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                11,
                13
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
              "id": "tango-call-13-v-02",
              "parentPatternId": "tango-call-13",
              "name": "Síncopa Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                4,
                6,
                9,
                11,
                13
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
              "id": "tango-call-13-v-03",
              "parentPatternId": "tango-call-13",
              "name": "Síncopa Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                1,
                4,
                6,
                9,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "sincopa"
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

export const TANGO_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "tango-marcato-4",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Marcato en 4 (Orquesta Típica)",
          "family": "Marcato Accompaniment",
          "category": "ostinato",
          "description": "Strict four-beat staccato accompaniment providing rhythmic",
          "tags": [
            "pulse",
            "tango",
            "marcato",
            "staccato",
            "dance"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "harmony",
            "bass",
            "piano"
          ],
    
          "approaches": ["groove", "comping", "walking"],
          "instruments": ["piano", "bass", "string-ensemble", "guitar"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "durationGrid": [
            0.25,
            0.25,
            0.25,
            0.25
          ],
          "accentProfile": [
            0.95,
            0.8,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.9,
            0.75,
            0.85,
            0.75
          ],
          "articulations": [
            "staccato",
            "martellato"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "tango-m4-staccato-crisp",
              "parentPatternId": "tango-marcato-4",
              "name": "D’Arienzo Ultra-Staccato",
              "variationType": "dense",
              "probability": 0.6,
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.95
              ],
              "description": "Crisp, driving staccato characteristic of Juan"
            },
            {
              "id": "tango-m4-with-eighth-fill",
              "parentPatternId": "tango-marcato-4",
              "name": "Marcato en 4 with 8th-note turnaround",
              "variationType": "cadence",
              "probability": 0.4,
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.9,
                0.7,
                0.85,
                0.6,
                0.95,
                0.7
              ],
              "description": "Enlivened beat 3-4 with running eighth"
            },
            {
              "id": "tango-marcato-4-variant-yumba-osvaldo-pugliese",
              "parentPatternId": "tango-marcato-4",
              "name": "Yumba (Osvaldo Pugliese)",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Pugliese’s celebrated deep on-beat \"Yum\" (beats",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.35,
                0.95,
                0.3
              ],
              "velocityProfile": [
                1,
                0.4,
                0.9,
                0.35
              ],
              "articulation": "cluster",
              "hitGrid": [
                "cluster",
                "strappata",
                "cluster",
                "strappata"
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "tango-m4-strappata-arrastre",
              "parentPatternId": "tango-marcato-4",
              "name": "Marcato con Strappata y Arrastre",
              "variationType": "accentShift",
              "probability": 0.35,
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.85,
                1,
                0.9
              ],
              "articulation": "strappata",
              "hitGrid": [
                "strappata",
                "arrastre",
                "strappata",
                "arrastre"
              ],
              "description": "Bass strappata slap on strong beats with arrastre drag on offbeats"
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-marcato-2",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Marcato en 2 (Troilo / Di Sarli)",
          "family": "Marcato Accompaniment",
          "category": "ostinato",
          "description": "Heavier two-beat pulse on 1 and",
          "tags": [
            "pulse",
            "tango",
            "marcato-2",
            "lyrical"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "harmony",
            "bass",
            "piano"
          ],
    
          "approaches": ["groove", "comping", "walking"],
          "instruments": ["piano", "bass", "guitar", "string-ensemble"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            1,
            0.88
          ],
          "velocityProfile": [
            0.92,
            0.78
          ],
          "articulations": [
            "pesado",
            "legato-staccato"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
          "variants": [
            {
              "id": "tango-m2-arrastre-lead",
              "parentPatternId": "tango-marcato-2",
              "name": "Marcato en 2 with Arrastre sweep",
              "variationType": "ornamented",
              "probability": 0.5,
              "onsetGrid": [
                14,
                15,
                0,
                8
              ],
              "accentProfile": [
                0.4,
                0.6,
                1,
                0.85
              ],
              "description": "Preceded by chromatic drag into beat"
            },
            {
              "id": "tango-marcato-2-v-02-safe",
              "parentPatternId": "tango-marcato-2",
              "name": "Marcato en 2 (Troilo / Di Sarli) — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.95,
                0.96
              ],
              "velocityProfile": [
                0.9500000000000001,
                0.74
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-332-piazzolla",
          "worldId": "tango",
          "styleIds": ["tango-tango-nuevo"],
          "name": "3+3+2 Nuevo Tango Pulse (Piazzolla)",
          "family": "Additive Rhythms",
          "category": "ostinato",
          "description": "Piazzolla’s definitive 3+3+2 eighth-note syncopation across",
          "tags": [
            "piazzolla",
            "332",
            "nuevo-tango",
            "guitar",
            "piano"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "harmony",
            "bass",
            "piano",
            "rhythm-guitar",
            "drums"
          ],
    
          "approaches": ["groove", "comping", "walking"],
          "instruments": ["piano", "guitar", "bandoneon", "bass", "drums"],
          "canCrossRole": true,
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
            0.9,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.9
          ],
          "articulations": [
            "staccato-accent"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo",
            "development"
          ],
          "variants": [
            {
              "id": "tango-332-dense-16th",
              "parentPatternId": "tango-332-piazzolla",
              "name": "3+3+2 Sixteenth-Note Subdivision",
              "variationType": "dense",
              "probability": 0.5,
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
                0.6,
                0.9,
                0.6,
                0.85,
                0.6
              ],
              "description": "Double-time sixteenth note 3+3+2 additive groove."
            },
            {
              "id": "tango-332-chiche-slap",
              "parentPatternId": "tango-332-piazzolla",
              "name": "3+3+2 with Chiche / Percussive Hit",
              "variationType": "ornamented",
              "probability": 0.4,
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.4,
                0.9,
                0.4,
                0.9,
                0.5
              ],
              "description": "Accents on 0, 6, 12 layered"
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-anchor-14",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Arrastre Anchor",
          "family": "Arrastre",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "tango",
            "arrastre",
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
          "instruments": ["bass"],
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
            1,
            2,
            5,
            7,
            10,
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
          "syncopationRating": 0.8571428571428571,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-anchor-14-v-01",
              "parentPatternId": "tango-anchor-14",
              "name": "Arrastre Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                5,
                7,
                12,
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
              "id": "tango-anchor-14-v-02",
              "parentPatternId": "tango-anchor-14",
              "name": "Arrastre Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                5,
                7,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "arrastre"
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

export const TANGO_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "tango-arrastre",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Arrastre (Chromatic Drag Lead-in)",
          "family": "Ornamental Transitions",
          "category": "phrasePattern",
          "description": "Upbeat glissando / drag that scoops",
          "tags": [
            "arrastre",
            "drag",
            "bass",
            "bandoneon",
            "transition"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "bass",
            "piano",
            "bandoneon",
            "fill"
          ],
    
          "approaches": ["walking", "comping"],
          "instruments": ["bass", "piano", "bandoneon", "string-ensemble"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            13,
            14,
            15,
            0
          ],
          "accentProfile": [
            0.4,
            0.6,
            0.8,
            1
          ],
          "velocityProfile": [
            0.45,
            0.65,
            0.85,
            1
          ],
          "articulations": [
            "glissando",
            "accented-arrival"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "tango-arrastre-extended",
              "parentPatternId": "tango-arrastre",
              "name": "Extended Bass Arrastre Sweep",
              "variationType": "ornamented",
              "probability": 0.6,
              "onsetGrid": [
                11,
                13,
                14,
                15,
                0
              ],
              "accentProfile": [
                0.3,
                0.5,
                0.7,
                0.85,
                1
              ],
              "description": "Long sweep from contrabajo bottom C"
            },
            {
              "id": "tango-arrastre-v-02",
              "parentPatternId": "tango-arrastre",
              "name": "Arrastre (Chromatic Drag Lead-in) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                13,
                14,
                15,
                0
              ],
              "accentProfile": [
                0.4,
                0.6799999999999999,
                0.76,
                1
              ],
              "velocityProfile": [
                0.51,
                0.63,
                0.83,
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
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-fraseo-bandoneon",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Fraseo y Rubato (Bandoneón Lead)",
          "family": "Lyrical Lead Phrases",
          "category": "phrasePattern",
          "description": "Expressive lyrical phrasing with flexible rubato,",
          "tags": [
            "lead",
            "melody",
            "bandoneon",
            "fraseo",
            "rubato"
          ],
          "scopes": [
            "phrase",
            "region",
            "track"
          ],
          "roles": [
            "melody",
            "lead",
            "counterline"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["bandoneon", "sax", "violin", "trumpet", "flute"],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            16,
            20,
            24,
            28
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.9,
            0.7,
            0.85,
            0.9,
            0.7,
            0.8,
            0.6
          ],
          "velocityProfile": [
            0.75,
            0.6,
            0.9,
            0.7,
            0.8,
            0.85,
            0.65,
            0.75,
            0.6
          ],
          "articulations": [
            "espressivo",
            "portamento"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "solo",
            "development"
          ],
          "variants": [
            {
              "id": "tango-fraseo-dramatic-cut",
              "parentPatternId": "tango-fraseo-bandoneon",
              "name": "Fraseo with Corte (Sudden Stop)",
              "variationType": "cadence",
              "probability": 0.45,
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                16,
                20,
                22
              ],
              "accentProfile": [
                0.8,
                0.6,
                0.9,
                0.7,
                0.85,
                1,
                0.8,
                1
              ],
              "description": "Sudden dynamic silence / corte on"
            },
            {
              "id": "tango-fraseo-bandoneon-v-02",
              "parentPatternId": "tango-fraseo-bandoneon",
              "name": "Fraseo y Rubato (Bandoneón Lead) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                16,
                20,
                24,
                28
              ],
              "accentProfile": [
                0.76,
                0.6799999999999999,
                0.86,
                0.7799999999999999,
                0.8099999999999999,
                0.98,
                0.6599999999999999,
                0.88,
                0.5599999999999999
              ],
              "velocityProfile": [
                0.81,
                0.58,
                0.88,
                0.76,
                0.78,
                0.83,
                0.71,
                0.73,
                0.58
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
                2
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "tango-phrase-12",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Marcato Phrase",
          "family": "Marcato",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves",
          "tags": [
            "tango",
            "marcato",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bandoneon"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["bandoneon"],
          "compatibleRoles": [
            "bandoneon"
          ],
          "compatibleInstruments": [
            "bandoneon"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            10,
            12,
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
          "syncopationRating": 0.5714285714285714,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-phrase-12-v-01",
              "parentPatternId": "tango-phrase-12",
              "name": "Marcato Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                8,
                12,
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
              "id": "tango-phrase-12-v-02",
              "parentPatternId": "tango-phrase-12",
              "name": "Marcato Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                10,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "marcato"
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

export const TANGO_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "tango-bordoneo",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Bordoneo Criollo (Guitar Bass Movement)",
          "family": "Guitar Bordoneos",
          "category": "rolePattern",
          "description": "Melodic low-string counterlines and turns typical",
          "tags": [
            "guitar",
            "bordoneo",
            "criollo",
            "countermelody"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "harmony",
            "bass",
            "melodic-guitar",
            "counterline"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": ["guitar", "guitar", "piano"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.7,
            0.85,
            0.6,
            0.8,
            0.7
          ],
          "velocityProfile": [
            0.85,
            0.6,
            0.7,
            0.8,
            0.6,
            0.75,
            0.7
          ],
          "articulations": [
            "thumb-apoyando",
            "slur"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "solo"
          ],
          "variants": [
            {
              "id": "tango-bordoneo-milonga",
              "parentPatternId": "tango-bordoneo",
              "name": "Milonga Bordoneo Turn",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.75,
                0.7,
                0.9,
                0.75
              ],
              "description": "Syncopated habanera bordoneo figure."
            },
            {
              "id": "tango-bordoneo-v-02",
              "parentPatternId": "tango-bordoneo",
              "name": "Bordoneo Criollo (Guitar Bass Movement) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.86,
                0.6799999999999999,
                0.6599999999999999,
                0.9299999999999999,
                0.5599999999999999,
                0.88,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.58,
                0.6799999999999999,
                0.8600000000000001,
                0.58,
                0.73,
                0.76
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
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
        }
];

export const TANGO_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "tango-intro-16",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Marcato Intro",
          "family": "Marcato",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "tango",
            "marcato",
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
          "instruments": ["guitar", "piano"],
          "compatibleRoles": [
            "harmony",
            "texture"
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
            2,
            5,
            6,
            9,
            12,
            14
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
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "tango-intro-16-v-01",
              "parentPatternId": "tango-intro-16",
              "name": "Marcato Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                6,
                9,
                14
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
              "id": "tango-intro-16-v-02",
              "parentPatternId": "tango-intro-16",
              "name": "Marcato Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                5,
                6,
                9,
                12,
                14
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
            },
            {
              "id": "tango-intro-16-v-03",
              "parentPatternId": "tango-intro-16",
              "name": "Marcato Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                2,
                5,
                6,
                9,
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
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
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
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "marcato"
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": TANGO_WORLD_PATTERNS_OSTINATO,
  "cell": TANGO_WORLD_PATTERNS_CELL,
  "phrasePattern": TANGO_WORLD_PATTERNS_PHRASEPATTERN,
  "rolePattern": TANGO_WORLD_PATTERNS_ROLEPATTERN,
  "fill": TANGO_WORLD_PATTERNS_FILL,
  "break": TANGO_WORLD_PATTERNS_BREAK,
  "cadence": TANGO_WORLD_PATTERNS_CADENCE,
  "groove": TANGO_WORLD_PATTERNS_GROOVE,
  "interactionPattern": TANGO_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": TANGO_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"cell","index":0},{"category":"phrasePattern","index":0},{"category":"rolePattern","index":0},{"category":"ostinato","index":2},{"category":"phrasePattern","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"phrasePattern","index":2},{"category":"interactionPattern","index":0},{"category":"ostinato","index":3},{"category":"groove","index":1},{"category":"sectionPattern","index":0},{"category":"groove","index":2}];

export const TANGO_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
