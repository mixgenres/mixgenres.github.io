import type { GenreWorld, MusicalPattern } from '../../schema';


const FUNK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "funk-the-one-bass",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "\"The One\" 16th-Note Syncopated Bass",
          "family": "Funk Basslines",
          "category": "ostinato",
          "description": "Explosive root hit on beat 1",
          "tags": [
            "funk",
            "bass",
            "slap",
            "the-one",
            "james-brown",
            "groove"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "bass",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.6,
            0.9,
            0.8,
            0.6,
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            1,
            0.6,
            0.85,
            0.75,
            0.55,
            0.9,
            0.65,
            0.8
          ],
          "articulations": ["ghost"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "funk-jamerson-motown-bass",
              "parentPatternId": "funk-the-one-bass",
              "name": "James Jamerson Melodic Walking Soul Line",
              "variationType": "ornamented",
              "probability": 0.5,
              "onsetGrid": [
                0,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85,
                0.9,
                0.75,
                0.95,
                0.8
              ],
              "description": "Syncopated melodic bassline using chromatic enclosures"
            },
            {
              "id": "funk-the-one-bass-v-02",
              "parentPatternId": "funk-the-one-bass",
              "name": "\"The One\" 16th-Note Syncopated Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.86,
                0.88,
                0.5599999999999999,
                1,
                0.6599999999999999,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.83,
                0.81,
                0.53,
                0.88,
                0.71,
                0.78
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
          "weight": 0.7,
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "funk-chicken-scratch-guitar",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Chicken-Scratch 9th Chords (Muted 16th Strum)",
          "family": "Funk Guitar",
          "category": "ostinato",
          "description": "Rapid 16th-note muted rhythmic scratches add a crisp, percussive guitar layer.",
          "tags": [
            "guitar",
            "funk",
            "chicken-scratch",
            "9th-chords",
            "rhythm"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony",
            "rhythm-guitar"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "electric-guitar",
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
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
            11,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.9,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.95,
            0.3,
            0.9,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.95,
            0.3
          ],
          "velocityProfile": [
            0.85,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.9,
            0.3,
            0.85,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.9,
            0.3
          ],
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "funk-guitar-sparse-chank",
              "parentPatternId": "funk-chicken-scratch-guitar",
              "name": "Single-Chord Syncopated \"Chank\"",
              "variationType": "sparse",
              "probability": 0.5,
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                1,
                1,
                1,
                1
              ],
              "description": "Clean, isolated off-beat chord stabs leaving"
            },
            {
              "id": "funk-chicken-scratch-guitar-v-02",
              "parentPatternId": "funk-chicken-scratch-guitar",
              "name": "Chicken-Scratch 9th Chords (Muted 16th Strum) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                11,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.86,
                0.4,
                0.4,
                0.4,
                0.96,
                0.4,
                0.9099999999999999,
                0.4,
                0.86,
                0.4,
                0.4,
                0.4,
                0.96,
                0.4,
                0.9099999999999999,
                0.4
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.4,
                0.4,
                0.4,
                0.98,
                0.4,
                0.96,
                0.4,
                0.83,
                0.4,
                0.4,
                0.4,
                1,
                0.4,
                0.88,
                0.4
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
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 5,
          "weight": 0.7,
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "funk-anchor-15",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Pocket Anchor",
          "family": "Pocket",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "funk",
            "pocket",
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
            1,
            2,
            5,
            6,
            9,
            10,
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
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "funk-anchor-15-v-01",
              "parentPatternId": "funk-anchor-15",
              "name": "Pocket Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                5,
                6,
                10,
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
              "id": "funk-anchor-15-v-02",
              "parentPatternId": "funk-anchor-15",
              "name": "Pocket Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                5,
                6,
                9,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "funk",
            "pocket"
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


const FUNK_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "funk-drum-breakbeat",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat",
          "family": "Funk Drumming",
          "category": "fill",
          "transitionType": "fill",
          "description": "The most sampled groove in music",
          "tags": [
            "drums",
            "breakbeat",
            "funk",
            "clyde-stubblefield",
            "ghost-notes"
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
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            7,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.4,
            1,
            0.35,
            0.4,
            0.9,
            0.4,
            1,
            0.35,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.4,
            0.95,
            0.3,
            0.35,
            0.85,
            0.4,
            0.95,
            0.3,
            0.75
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "neosoul-dilla-swung-pocket",
              "parentPatternId": "funk-drum-breakbeat",
              "name": "Neo-Soul Laid-Back Swung Pocket",
              "variationType": "syncopated",
              "probability": 0.5,
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
                0.95,
                0.5,
                0.85,
                1,
                0.6
              ],
              "description": "Unquantized relaxed pocket with delayed backbeat"
            },
            {
              "id": "funk-drum-breakbeat-v-02",
              "parentPatternId": "funk-drum-breakbeat",
              "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                7,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.48000000000000004,
                0.96,
                0.43,
                0.4,
                0.98,
                0.4,
                1,
                0.4,
                0.88
              ],
              "velocityProfile": [
                1,
                0.4,
                0.9299999999999999,
                0.4,
                0.4,
                0.83,
                0.46,
                0.9299999999999999,
                0.4,
                0.81
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
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const FUNK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "funk-16th-strum",
          "worldId": "funk",
          "styleIds": ["soul-neo-soul"],
          "name": "16th Note Strum",
          "family": "Guitar",
          "category": "break",
          "transitionType": "fill",
          "description": "Continuous 16ths chicken-scratch with accented backbeat",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.7,
            1,
            0.65,
            0.9,
            0.6,
            1,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.5,
            0.6,
            0.95,
            0.55,
            0.85,
            0.5,
            0.95,
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
              "id": "funk-16th-strum-v-01",
              "parentPatternId": "funk-16th-strum",
              "name": "16th Note Strum — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                10,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.5499999999999999,
                0.6499999999999999,
                0.95,
                0.6,
                0.85
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.42,
                0.52,
                0.87,
                0.47000000000000003,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "funk-16th-strum-v-02",
              "parentPatternId": "funk-16th-strum",
              "name": "16th Note Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                1,
                0.61,
                0.98,
                0.5599999999999999,
                1,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.96,
                0.48,
                0.58,
                1,
                0.53,
                0.83,
                0.56,
                0.9299999999999999,
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
          "weight": 1,
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const FUNK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "funk-slap-bass",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Slap Bass",
          "family": "Bass",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Thumb slap on downbeats and syncopated",
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
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.85,
            0.7,
            0.9,
            0.95,
            0.8,
            0.7,
            0.85
          ],
          "velocityProfile": [
            1,
            0.8,
            0.65,
            0.85,
            0.9,
            0.75,
            0.65,
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
              "id": "funk-slap-bass-v-01",
              "parentPatternId": "funk-slap-bass",
              "name": "Slap Bass — sparse variation",
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
                0.7999999999999999,
                0.6499999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.92,
                0.7200000000000001,
                0.5700000000000001,
                0.77,
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
              "id": "funk-slap-bass-v-02",
              "parentPatternId": "funk-slap-bass",
              "name": "Slap Bass — accent shift",
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
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.6599999999999999,
                0.98,
                0.9099999999999999,
                0.88,
                0.6599999999999999,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.63,
                0.9099999999999999,
                0.88,
                0.73,
                0.71,
                0.78
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const FUNK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "funk-ghost-snares",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Ghost Snares",
          "family": "Drums",
          "category": "groove",
          "description": "Subtle 16th ghost note chatter dancing",
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
            2,
            3,
            6,
            7,
            10,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.45,
            0.5,
            0.5,
            0.55,
            0.45,
            0.5,
            0.5,
            0.6
          ],
          "velocityProfile": [
            0.4,
            0.45,
            0.45,
            0.5,
            0.4,
            0.45,
            0.45,
            0.55
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
              "id": "funk-ghost-snares-v-01",
              "parentPatternId": "funk-ghost-snares",
              "name": "Ghost Snares — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                6,
                7,
                11,
                14
              ],
              "accentProfile": [
                0.45,
                0.45,
                0.45,
                0.5,
                0.45
              ],
              "velocityProfile": [
                0.4,
                0.4,
                0.4,
                0.42,
                0.4
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
              "id": "funk-ghost-snares-v-02",
              "parentPatternId": "funk-ghost-snares",
              "name": "Ghost Snares — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                3,
                6,
                7,
                10,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.41000000000000003,
                0.58,
                0.46,
                0.63,
                0.41000000000000003,
                0.58,
                0.46,
                0.6799999999999999
              ],
              "velocityProfile": [
                0.46,
                0.43,
                0.43,
                0.56,
                0.4,
                0.43,
                0.51,
                0.53
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-clavinet",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Clavinet Sync",
          "family": "Keys",
          "category": "groove",
          "description": "Perceptive syncopated clavinet riff driving forward",
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
            0.75,
            0.9,
            0.8,
            0.85
          ],
          "velocityProfile": [
            0.9,
            0.7,
            0.85,
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
              "id": "funk-clavinet-v-01",
              "parentPatternId": "funk-clavinet",
              "name": "Clavinet Sync — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                10
              ],
              "accentProfile": [
                0.8999999999999999,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.8200000000000001,
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
              "id": "funk-clavinet-v-02",
              "parentPatternId": "funk-clavinet",
              "name": "Clavinet Sync — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7,
                10,
                13
              ],
              "accentProfile": [
                0.9099999999999999,
                0.83,
                0.86,
                0.88,
                0.8099999999999999
              ],
              "velocityProfile": [
                0.96,
                0.6799999999999999,
                0.83,
                0.81,
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-horn-section",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Horn Section Hits",
          "family": "Brass",
          "category": "groove",
          "description": "Explosive unison brass stabs marking rhythmic",
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
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            1,
            0.95,
            0.9
          ],
          "velocityProfile": [
            1,
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
              "id": "funk-horn-section-v-01",
              "parentPatternId": "funk-horn-section",
              "name": "Horn Section Hits — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                12
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.92,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "funk-horn-section-v-02",
              "parentPatternId": "funk-horn-section",
              "name": "Horn Section Hits — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                0.96,
                1,
                0.86
              ],
              "velocityProfile": [
                1,
                0.88,
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-soul-bass",
          "worldId": "funk",
          "styleIds": ["soul-neo-soul"],
          "name": "Motown Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Melodic James Jamerson style syncopated walking",
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
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.75,
            0.9,
            0.85,
            0.7,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.8,
            0.65,
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
              "id": "funk-soul-bass-v-01",
              "parentPatternId": "funk-soul-bass",
              "name": "Motown Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                7,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77,
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
              "id": "funk-soul-bass-v-02",
              "parentPatternId": "funk-soul-bass",
              "name": "Motown Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.9299999999999999,
                0.6599999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.8600000000000001,
                0.63,
                0.88
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-hihat-open",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Open Hi-Hat",
          "family": "Drums",
          "category": "groove",
          "description": "Crisp open hi-hat barking on upbeats.",
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
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            0.95,
            0.85,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.9,
            0.8,
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
              "id": "funk-hihat-open-v-01",
              "parentPatternId": "funk-hihat-open",
              "name": "Open Hi-Hat — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                5,
                7
              ],
              "accentProfile": [
                0.8999999999999999,
                0.7999999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
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
              "id": "funk-hihat-open-v-02",
              "parentPatternId": "funk-hihat-open",
              "name": "Open Hi-Hat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                3,
                5,
                7
              ],
              "accentProfile": [
                0.9099999999999999,
                0.9299999999999999,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                0.96,
                0.78,
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-neo-soul-beat",
          "worldId": "funk",
          "styleIds": ["soul-neo-soul"],
          "name": "Neo-Soul Drag",
          "family": "Drums",
          "category": "groove",
          "description": "Dilla-style unquantized groove with laid-back snare",
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
            5,
            8,
            13
          ],
          "accentProfile": [
            1,
            0.9,
            0.75,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.85,
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
              "id": "funk-neo-soul-beat-v-01",
              "parentPatternId": "funk-neo-soul-beat",
              "name": "Neo-Soul Drag — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.77,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "funk-neo-soul-beat-v-02",
              "parentPatternId": "funk-neo-soul-beat",
              "name": "Neo-Soul Drag — accent shift",
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
                0.96,
                0.98,
                0.71,
                1
              ],
              "velocityProfile": [
                1,
                0.83,
                0.6799999999999999,
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-wah-guitar",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Wah-Wah Guitar",
          "family": "Guitar",
          "category": "groove",
          "description": "Expressive wah-pedal rhythm sweeps through the chord changes.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.85,
            0.7,
            0.9,
            0.65,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.8,
            0.65,
            0.85,
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
              "id": "funk-wah-guitar-v-01",
              "parentPatternId": "funk-wah-guitar",
              "name": "Wah-Wah Guitar — sparse variation",
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
                0.8999999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.7200000000000001,
                0.5700000000000001,
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
              "id": "funk-wah-guitar-v-02",
              "parentPatternId": "funk-wah-guitar",
              "name": "Wah-Wah Guitar — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                7,
                8,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.7799999999999999,
                0.86,
                0.73,
                0.8099999999999999,
                0.83
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.78,
                0.71,
                0.83,
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-comp-16",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Clav Comping",
          "family": "Clav",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "funk",
            "clav",
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
            1,
            4,
            6,
            9,
            11,
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
          "swingPercentage": 50,
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
              "id": "funk-comp-16-v-01",
              "parentPatternId": "funk-comp-16",
              "name": "Clav Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
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
              "id": "funk-comp-16-v-02",
              "parentPatternId": "funk-comp-16",
              "name": "Clav Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                6,
                9,
                11,
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "funk",
            "clav"
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
,
  {
    "id": "tech-funk-james-brown-one",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown"
    ],
    "name": "James Brown “one”",
    "shortName": "James Brown “one”",
    "family": "funk",
    "category": "groove",
    "description": "Technique: James Brown “one”",
    "tags": [
      "funk",
      "James Brown “one”"
    ],
    "approaches": [
      "James Brown “one”"
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
      "funk",
      "James Brown “one”"
    ],
    "techniques": [
      "James Brown “one”"
    ]
  },
  {
    "id": "tech-funk-vamp-extension",
    "worldId": "funk",
    "styleIds": [
      "funk-jazz-funk",
      "funk-p-funk-cosmic"
    ],
    "name": "vamp extension",
    "shortName": "vamp extension",
    "family": "funk",
    "category": "groove",
    "description": "Technique: vamp extension",
    "tags": [
      "funk",
      "vamp extension"
    ],
    "approaches": [
      "vamp extension"
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
      "funk",
      "vamp extension"
    ],
    "techniques": [
      "vamp extension"
    ]
  },
  {
    "id": "tech-funk-rhythmic-stop",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown",
      "funk-p-funk-cosmic"
    ],
    "name": "rhythmic stop",
    "shortName": "rhythmic stop",
    "family": "funk",
    "category": "groove",
    "description": "Technique: rhythmic stop",
    "tags": [
      "funk",
      "rhythmic stop"
    ],
    "approaches": [
      "rhythmic stop"
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
      "funk",
      "rhythmic stop"
    ],
    "techniques": [
      "rhythmic stop"
    ]
  },
  {
    "id": "tech-funk-pocket-displacement",
    "worldId": "funk",
    "styleIds": [],
    "name": "pocket displacement",
    "shortName": "pocket displacement",
    "family": "funk",
    "category": "groove",
    "description": "Technique: pocket displacement",
    "tags": [
      "funk",
      "pocket displacement"
    ],
    "approaches": [
      "pocket displacement"
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
      "funk",
      "pocket displacement"
    ],
    "techniques": [
      "pocket displacement"
    ]
  },
  {
    "id": "style-funk-one-pocket-funk-james-brown-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown"
    ],
    "name": "One-Pocket Funk — James Brown Signature Cell",
    "shortName": "One-Pocket Funk — James Brown Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "electric-guitar",
      "bass",
      "drums",
      "brass"
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
      "funk",
      "signature"
    ],
    "techniques": [
      "rhythmic stop",
      "16th-note guitar scratch",
      "James Brown “one”",
      "ghost-note bass",
      "funk horn stab",
      "muted guitar"
    ]
  },
  {
    "id": "style-funk-minneapolis-funk-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-minneapolis-funk"
    ],
    "name": "Minneapolis Funk Signature Cell",
    "shortName": "Minneapolis Funk Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "electric-guitar",
      "bass",
      "drums",
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
      "funk",
      "signature"
    ],
    "techniques": [
      "syncopated bass octave",
      "clavinet riff",
      "muted guitar",
      "16th-note guitar scratch",
      "funk horn stab",
      "ghost-note bass"
    ]
  },
  {
    "id": "style-funk-jazz-funk-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-jazz-funk"
    ],
    "name": "Jazz-Funk Signature Cell",
    "shortName": "Jazz-Funk Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "rhodes",
      "clavinet",
      "bass",
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
      "funk",
      "signature"
    ],
    "techniques": [
      "clavinet riff",
      "funk horn stab",
      "vamp extension"
    ]
  },
  {
    "id": "style-funk-p-funk-cosmic-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-p-funk-cosmic"
    ],
    "name": "P-Funk Cosmic Signature Cell",
    "shortName": "P-Funk Cosmic Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "electric-guitar",
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
      "funk",
      "signature"
    ],
    "techniques": [
      "funk horn stab",
      "rhythmic stop",
      "vamp extension"
    ]
  }
];


const FUNK_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "funk-phrase-13",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Vamp Phrase",
          "family": "Vamp",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "funk",
            "vamp",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "tenor-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "tenor-sax"
          ],
          "compatibleRoles": [
            "tenor-sax"
          ],
          "compatibleInstruments": [
            "tenor-sax"
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
            8,
            11,
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
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
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
              "id": "funk-phrase-13-v-01",
              "parentPatternId": "funk-phrase-13",
              "name": "Vamp Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
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
              "id": "funk-phrase-13-v-02",
              "parentPatternId": "funk-phrase-13",
              "name": "Vamp Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "funk",
            "vamp"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "funk--phrasing",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Funk Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Rhythmic vocal hook template that uses",
          "tags": [
            "funk",
            "tenor-sax",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "tenor-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "tenor-sax"
          ],
          "compatibleRoles": [
            "tenor-sax",
            "lead"
          ],
          "compatibleInstruments": [
            "tenor-sax"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.94,
            0.62,
            0.94,
            0.62,
            0.94,
            0.62
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
            0.58
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
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
              "id": "funk--phrasing-v--alt",
              "parentPatternId": "funk--phrasing",
              "name": "Funk Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "An alternate vocal entry shifts the placement of a phrase for subtle rhythmic variation.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.92,
                0.62,
                0.92,
                0.62,
                0.92,
                0.62
              ],
              "velocityProfile": [
                0.88,
                0.58,
                0.88,
                0.58,
                0.88,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            },
            {
              "id": "funk--phrasing-v-final-accent",
              "parentPatternId": "funk--phrasing",
              "name": "Funk Vocal Phrasing — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Same rhythmic shape with shifted emphasis",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.9,
                0.58,
                0.9,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Funk.",
          "authenticityTags": [
            "funk",
            "tenor-sax"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];


const FUNK_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "funk-call-14",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Break Response",
          "family": "Break",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "funk",
            "break",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "tenor-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "tenor-sax"
          ],
          "compatibleRoles": [
            "tenor-sax"
          ],
          "compatibleInstruments": [
            "tenor-sax"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            4,
            5,
            8,
            9,
            12,
            13
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95,
            0.57
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
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
              "id": "funk-call-14-v-01",
              "parentPatternId": "funk-call-14",
              "name": "Break Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                5,
                9,
                12
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
              "id": "funk-call-14-v-02",
              "parentPatternId": "funk-call-14",
              "name": "Break Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                4,
                5,
                8,
                9,
                12,
                13
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1,
                0.5499999999999999
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
              "id": "funk-call-14-v-03",
              "parentPatternId": "funk-call-14",
              "name": "Break Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                4,
                5,
                8,
                9,
                12,
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
                0.6,
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
                0.57,
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
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "funk",
            "break"
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


const FUNK_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-funk-ghost-note-bass",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown",
      "funk-minneapolis-funk"
    ],
    "name": "ghost-note bass",
    "shortName": "ghost-note bass",
    "family": "funk",
    "category": "bass",
    "description": "Technique: ghost-note bass",
    "tags": [
      "funk",
      "ghost-note bass"
    ],
    "approaches": [
      "ghost-note bass"
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
      "funk",
      "ghost-note bass"
    ],
    "techniques": [
      "ghost-note bass"
    ]
  },
  {
    "id": "tech-funk-syncopated-bass-octave",
    "worldId": "funk",
    "styleIds": [
      "funk-minneapolis-funk"
    ],
    "name": "syncopated bass octave",
    "shortName": "syncopated bass octave",
    "family": "funk",
    "category": "bass",
    "description": "Technique: syncopated bass octave",
    "tags": [
      "funk",
      "syncopated bass octave"
    ],
    "approaches": [
      "syncopated bass octave"
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
      "funk",
      "syncopated bass octave"
    ],
    "techniques": [
      "syncopated bass octave"
    ]
  }
];


const FUNK_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-funk-16th-note-guitar-scratch",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown",
      "funk-minneapolis-funk"
    ],
    "name": "16th-note guitar scratch",
    "shortName": "16th-note guitar scratch",
    "family": "funk",
    "category": "comping",
    "description": "Technique: 16th-note guitar scratch",
    "tags": [
      "funk",
      "16th-note guitar scratch"
    ],
    "approaches": [
      "16th-note guitar scratch"
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
      "funk",
      "16th-note guitar scratch"
    ],
    "techniques": [
      "16th-note guitar scratch"
    ]
  },
  {
    "id": "tech-funk-muted-guitar",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown",
      "funk-minneapolis-funk"
    ],
    "name": "muted guitar",
    "shortName": "muted guitar",
    "family": "funk",
    "category": "comping",
    "description": "Technique: muted guitar",
    "tags": [
      "funk",
      "muted guitar"
    ],
    "approaches": [
      "muted guitar"
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
      "funk",
      "muted guitar"
    ],
    "techniques": [
      "muted guitar"
    ]
  },
  {
    "id": "tech-funk-clavinet-riff",
    "worldId": "funk",
    "styleIds": [
      "funk-minneapolis-funk",
      "funk-jazz-funk"
    ],
    "name": "clavinet riff",
    "shortName": "clavinet riff",
    "family": "funk",
    "category": "comping",
    "description": "Technique: clavinet riff",
    "tags": [
      "funk",
      "clavinet riff"
    ],
    "approaches": [
      "clavinet riff"
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
      "funk",
      "clavinet riff"
    ],
    "techniques": [
      "clavinet riff"
    ]
  }
];


const FUNK_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-funk-funk-horn-stab",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown",
      "funk-minneapolis-funk",
      "funk-jazz-funk",
      "funk-p-funk-cosmic"
    ],
    "name": "funk horn stab",
    "shortName": "funk horn stab",
    "family": "funk",
    "category": "lead",
    "description": "Technique: funk horn stab",
    "tags": [
      "funk",
      "funk horn stab"
    ],
    "approaches": [
      "funk horn stab"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "horn-section",
      "lead"
    ],
    "instruments": [
      "brass"
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
      "funk",
      "funk horn stab"
    ],
    "techniques": [
      "funk horn stab"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": FUNK_WORLD_PATTERNS_OSTINATO,
  "fill": FUNK_WORLD_PATTERNS_FILL,
  "break": FUNK_WORLD_PATTERNS_BREAK,
  "cadence": FUNK_WORLD_PATTERNS_CADENCE,
  "groove": FUNK_WORLD_PATTERNS_GROOVE,
  "phrasePattern": FUNK_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": FUNK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "bass": FUNK_WORLD_PATTERNS_BASS,
  "comping": FUNK_WORLD_PATTERNS_COMPING,
  "lead": FUNK_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":7},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"bass","index":1},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0}];

export const FUNK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
