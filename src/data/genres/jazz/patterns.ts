import type { GenreWorld, MusicalPattern } from '../../schema';


const JAZZ_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "jazz-walking-bass",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop", "jazz-hard-bop"],
          "name": "Walking Bass",
          "family": "Walking Basslines",
          "category": "ostinato",
          "description": "Continuous four-to-the-bar walking bass connecting roots,",
          "tags": [
            "bass",
            "walking",
            "swing",
            "bebop",
            "pulse"
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
            0.9,
            0.95,
            0.85,
            1
          ],
          "velocityProfile": [
            0.85,
            0.9,
            0.8,
            0.95
          ],
          "articulations": [
            "tenuto-pizz",
            "chromatic-lead"
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "jazz-two-feel-bass",
              "parentPatternId": "jazz-walking-bass",
              "name": "Two-Feel Bass",
              "variationType": "sparse",
              "probability": 0.5,
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                1,
                0.9
              ],
              "description": "Half-note pulse used during head statements"
            },
            {
              "id": "jazz-walking-with-triplet-skip",
              "parentPatternId": "jazz-walking-bass",
              "name": "Walking Bass with Triplet Ghost Skip",
              "variationType": "ornamented",
              "probability": 0.45,
              "onsetGrid": [
                0,
                4,
                6,
                8,
                12
              ],
              "accentProfile": [
                0.9,
                0.9,
                0.5,
                0.85,
                1
              ],
              "description": "Ray Brown-style ghosted triplet skip note"
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
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
    
    },
  {
          "id": "jazz-ride-spangalang",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop", "jazz-hard-bop"],
          "name": "Ride Cymbal",
          "family": "Jazz Drumming",
          "category": "ostinato",
          "description": "The definitive jazz swing ride pattern",
          "tags": [
            "drums",
            "ride",
            "swing",
            "jazz",
            "hi-hat"
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
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.65,
            0.85,
            1,
            0.7
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.6,
            0.8,
            1,
            0.65
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "jazz-brushes-ballad",
              "parentPatternId": "jazz-ride-spangalang",
              "name": "Ballad Snare Brushes",
              "variationType": "sparse",
              "probability": 0.5,
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.6,
                0.75,
                0.6,
                0.8
              ],
              "description": "Gentle circular wire-brush sweeps provide a soft, continuous texture."
            },
            {
              "id": "jazz-ride-spangalang-v-02",
              "parentPatternId": "jazz-ride-spangalang",
              "name": "Ride Cymbal — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.61,
                0.9299999999999999,
                0.96,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
                0.58,
                0.8600000000000001,
                0.98,
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
          "weight": 0.7,
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
          "id": "jazz-piano-comping",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop", "jazz-hard-bop"],
          "name": "Syncopated Piano Comping",
          "family": "Piano Comping",
          "category": "ostinato",
          "description": "Sparse, syncopated chord voicings placed around",
          "tags": [
            "piano",
            "comping",
            "charleston",
            "harmony",
            "voicings"
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
            "piano",
            "keyboard"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            14
          ],
          "accentProfile": [
            0.95,
            1,
            0.85
          ],
          "velocityProfile": [
            0.9,
            0.95,
            0.8
          ],
          "supportedEnergy": [1, 2],
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
              "id": "jazz-quartal-mccoy-comping",
              "parentPatternId": "jazz-piano-comping",
              "name": "McCoy Tyner Quartal Power Comping",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                1,
                0.7,
                0.95,
                0.8,
                0.9,
                1
              ],
              "description": "Powerful fourth-based modal chords with pentatonic"
            },
            {
              "id": "jazz-piano-comping-v-02",
              "parentPatternId": "jazz-piano-comping",
              "name": "Syncopated Piano Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                1,
                0.8099999999999999
              ],
              "velocityProfile": [
                0.96,
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
          "weight": 0.7,
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
          "id": "jazz-latin-montuno-comp",
          "worldId": "jazz",
          "styleIds": ["jazz-fusion"],
          "name": "Latin Jazz Montuno Comping",
          "family": "Piano Comping",
          "category": "ostinato",
          "description": "Syncopated two-handed montuno piano ostinato bringing",
          "tags": [
            "jazz",
            "latin-jazz",
            "montuno",
            "piano"
          ],
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
            2,
            4,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.85,
            1,
            0.7,
            0.95,
            0.8,
            0.9
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.65,
            0.9,
            0.75,
            0.85
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "jazz-latin-montuno-comp-v-01",
              "parentPatternId": "jazz-latin-montuno-comp",
              "name": "Latin Jazz Montuno Comping — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                7,
                10,
                15
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87,
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
              "id": "jazz-latin-montuno-comp-v-02",
              "parentPatternId": "jazz-latin-montuno-comp",
              "name": "Latin Jazz Montuno Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                7,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.6599999999999999,
                1,
                0.76,
                0.98
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
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
            }
          ],
    
          "difficulty": 2,
          "weight": 0.7,
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
          "id": "jazz-anchor-15",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop", "jazz-hard-bop"],
          "name": "Head Anchor",
          "family": "Head",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "jazz",
            "head",
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
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            8,
            11,
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
              "id": "jazz-anchor-15-v-01",
              "parentPatternId": "jazz-anchor-15",
              "name": "Head Anchor — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
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
              "id": "jazz-anchor-15-v-02",
              "parentPatternId": "jazz-anchor-15",
              "name": "Head Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "jazz",
            "head"
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


const JAZZ_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "jazz-brushes-swing",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Brushes Swing",
          "family": "Drums",
          "category": "fill",
          "transitionType": "fill",
          "description": "Sweeping circular wire-brush patterns add motion without a hard attack.",
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
            0.6,
            0.85,
            0.65,
            0.95,
            0.6,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.8,
            0.6,
            0.9,
            0.55,
            0.8,
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
              "id": "jazz-brushes-swing-v-01",
              "parentPatternId": "jazz-brushes-swing",
              "name": "Brushes Swing — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                9
              ],
              "accentProfile": [
                0.8999999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.7200000000000001,
                0.52,
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
              "id": "jazz-brushes-swing-v-02",
              "parentPatternId": "jazz-brushes-swing",
              "name": "Brushes Swing — accent shift",
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
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.73,
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.78,
                0.6599999999999999,
                0.88,
                0.53,
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
        }
];


const JAZZ_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "jazz-piano-red-garland",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Block Chords",
          "family": "Piano",
          "category": "break",
          "transitionType": "fill",
          "description": "Locked-hands syncopated block chords.",
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
            0,
            3,
            5
          ],
          "accentProfile": [
            0.95,
            0.8,
            1
          ],
          "velocityProfile": [
            0.9,
            0.75,
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
              "id": "jazz-piano-red-garland-v-01",
              "parentPatternId": "jazz-piano-red-garland",
              "name": "Block Chords — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.8999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "jazz-piano-red-garland-v-02",
              "parentPatternId": "jazz-piano-red-garland",
              "name": "Block Chords — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                5
              ],
              "accentProfile": [
                0.9099999999999999,
                0.88,
                0.96
              ],
              "velocityProfile": [
                0.96,
                0.73,
                0.9299999999999999
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
        }
];


const JAZZ_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "jazz-hihat-2-4",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Hi-Hat 2 & 4",
          "family": "Drums",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Crisp foot hi-hat chick locking beats",
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
          "subdivisions": 4,
          "onsetGrid": [
            1,
            3
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
            "chorus",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "jazz-hihat-2-4-v-01-safe",
              "parentPatternId": "jazz-hihat-2-4",
              "name": "Hi-Hat 2 & 4 — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                1,
                3
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
              "id": "jazz-hihat-2-4-v-02-safe",
              "parentPatternId": "jazz-hihat-2-4",
              "name": "Hi-Hat 2 & 4 — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                1,
                3
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
        }
];


const JAZZ_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
              "name": "Broken Ride — sparse",
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
              "name": "Pedal Point — sparse",
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
              "name": "Syncopated Comping — sparse",
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
              "name": "Snare Comping — sparse",
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
          "name": "Waltz Ride",
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
              "name": "Waltz Ride — sparse",
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
              "name": "Waltz Ride — accent shift",
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
          "name": "Piano Comping",
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
              "name": "Piano Comping — sparse",
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
              "name": "Piano Comping — accent shift",
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
    "name": "triplet",
    "shortName": "triplet",
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
    "name": "Swing Era",
    "shortName": "Swing Era",
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
    "name": "Modal Jazz",
    "shortName": "Modal Jazz",
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
    "name": "Post-Bop",
    "shortName": "Post-Bop",
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
    "name": "Jazz-Funk",
    "shortName": "Jazz-Funk",
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
    "name": "Avant-Garde/Free Improvisation",
    "shortName": "Avant-Garde/Free Improvisation",
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
    "name": "Brazilian Jazz",
    "shortName": "Brazilian Jazz",
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


const JAZZ_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "jazz-phrase-13",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Solo Phrase",
          "family": "Solo",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "jazz",
            "solo",
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
          "subdivisions": 12,
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11
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
              "id": "jazz-phrase-13-v-01",
              "parentPatternId": "jazz-phrase-13",
              "name": "Solo Phrase — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
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
              "id": "jazz-phrase-13-v-02",
              "parentPatternId": "jazz-phrase-13",
              "name": "Solo Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                6,
                9,
                11
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
            "solo"
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


const JAZZ_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "jazz-call-14",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Horn Head & Solo Phrase",
          "family": "Horn Head",
          "category": "interactionPattern",
          "description": "A horn-head/solo contour slot that gives",
          "tags": [
            "jazz",
            "shout",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "sax"
          ],
          "compatibleRoles": [
            "lead"
          ],
          "compatibleInstruments": [
            "sax"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
            7,
            10,
            12
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
              "id": "jazz-call-14-v-01",
              "parentPatternId": "jazz-call-14",
              "name": "Shout Response — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
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
              "id": "jazz-call-14-v-02",
              "parentPatternId": "jazz-call-14",
              "name": "Shout Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                7,
                10,
                12
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
              "id": "jazz-call-14-v-03",
              "parentPatternId": "jazz-call-14",
              "name": "Shout Response — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                2,
                5,
                7,
                10,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "jazz",
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
,
  {
    "id": "tech-jazz-non-grid-phrasing",
    "worldId": "jazz",
    "styleIds": [
      "jazz-avant-garde-free-improvisation"
    ],
    "name": "non-grid phrasing",
    "shortName": "non-grid phrasing",
    "family": "jazz",
    "category": "interactionPattern",
    "description": "Technique: non-grid phrasing",
    "tags": [
      "jazz",
      "non-grid phrasing"
    ],
    "approaches": [
      "non-grid phrasing"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "lead",
      "harmony",
      "rhythm"
    ],
    "instruments": [
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
      "non-grid phrasing"
    ],
    "techniques": [
      "non-grid phrasing"
    ]
  },
  {
    "id": "tech-jazz-collective-improvisation",
    "worldId": "jazz",
    "styleIds": [
      "jazz-post-bop",
      "jazz-jazz-funk",
      "jazz-avant-garde-free-improvisation"
    ],
    "name": "collective improvisation",
    "shortName": "collective improvisation",
    "family": "jazz",
    "category": "interactionPattern",
    "description": "Technique: collective improvisation",
    "tags": [
      "jazz",
      "collective improvisation"
    ],
    "approaches": [
      "collective improvisation"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "lead",
      "harmony",
      "rhythm"
    ],
    "instruments": [
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
      "collective improvisation"
    ],
    "techniques": [
      "collective improvisation"
    ]
  }
];


const JAZZ_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "jazz-intro-17",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop", "jazz-hard-bop"],
          "name": "Shout Horn Answer",
          "family": "Turnaround",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "jazz",
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
            "texture",
            "lead"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "harmony",
            "texture",
            "lead"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
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
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 66,
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
              "id": "jazz-intro-17-v-01",
              "parentPatternId": "jazz-intro-17",
              "name": "Turnaround Intro — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
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
              "id": "jazz-intro-17-v-02",
              "parentPatternId": "jazz-intro-17",
              "name": "Turnaround Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
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
            },
            {
              "id": "jazz-intro-17-v-03",
              "parentPatternId": "jazz-intro-17",
              "name": "Turnaround Intro — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                2,
                4,
                5,
                7,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "jazz",
            "turnaround"
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


const JAZZ_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-jazz-walking-bass",
    "worldId": "jazz",
    "styleIds": [
      "jazz-swing-era"
    ],
    "name": "walking bass",
    "shortName": "walking bass",
    "family": "jazz",
    "category": "bass",
    "description": "Technique: walking bass",
    "tags": [
      "jazz",
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
      "jazz",
      "walking bass"
    ],
    "techniques": [
      "walking bass"
    ]
  }
];


const JAZZ_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-jazz-bebop-enclosure",
    "worldId": "jazz",
    "styleIds": [],
    "name": "bebop enclosure",
    "shortName": "bebop enclosure",
    "family": "jazz",
    "category": "comping",
    "description": "Technique: bebop enclosure",
    "tags": [
      "jazz",
      "bebop enclosure"
    ],
    "approaches": [
      "bebop enclosure"
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
      "jazz",
      "bebop enclosure"
    ],
    "techniques": [
      "bebop enclosure"
    ]
  },
  {
    "id": "tech-jazz-ii-v-i",
    "worldId": "jazz",
    "styleIds": [],
    "name": "ii-V-I",
    "shortName": "ii-V-I",
    "family": "jazz",
    "category": "comping",
    "description": "Technique: ii-V-I",
    "tags": [
      "jazz",
      "ii-V-I"
    ],
    "approaches": [
      "ii-V-I"
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
      "jazz",
      "ii-V-I"
    ],
    "techniques": [
      "ii-V-I"
    ]
  },
  {
    "id": "tech-jazz-tritone-substitution",
    "worldId": "jazz",
    "styleIds": [],
    "name": "tritone substitution",
    "shortName": "tritone substitution",
    "family": "jazz",
    "category": "comping",
    "description": "Technique: tritone substitution",
    "tags": [
      "jazz",
      "tritone substitution"
    ],
    "approaches": [
      "tritone substitution"
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
      "jazz",
      "tritone substitution"
    ],
    "techniques": [
      "tritone substitution"
    ]
  },
  {
    "id": "tech-jazz-guide-tone-line",
    "worldId": "jazz",
    "styleIds": [
      "jazz-post-bop"
    ],
    "name": "guide-tone line",
    "shortName": "guide-tone line",
    "family": "jazz",
    "category": "comping",
    "description": "Technique: guide-tone line",
    "tags": [
      "jazz",
      "guide-tone line"
    ],
    "approaches": [
      "guide-tone line"
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
      "jazz",
      "guide-tone line"
    ],
    "techniques": [
      "guide-tone line"
    ]
  },
  {
    "id": "tech-jazz-quartal-voicing",
    "worldId": "jazz",
    "styleIds": [
      "jazz-modal-jazz"
    ],
    "name": "quartal voicing",
    "shortName": "quartal voicing",
    "family": "jazz",
    "category": "comping",
    "description": "Technique: quartal voicing",
    "tags": [
      "jazz",
      "quartal voicing"
    ],
    "approaches": [
      "quartal voicing"
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
      "jazz",
      "quartal voicing"
    ],
    "techniques": [
      "quartal voicing"
    ]
  },
  {
    "id": "tech-jazz-modal-vamp",
    "worldId": "jazz",
    "styleIds": [
      "jazz-modal-jazz",
      "jazz-jazz-funk"
    ],
    "name": "modal vamp",
    "shortName": "modal vamp",
    "family": "jazz",
    "category": "comping",
    "description": "Technique: modal vamp",
    "tags": [
      "jazz",
      "modal vamp"
    ],
    "approaches": [
      "modal vamp"
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
      "jazz",
      "modal vamp"
    ],
    "techniques": [
      "modal vamp"
    ]
  }
];


const JAZZ_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-jazz-big-band-shout-chorus",
    "worldId": "jazz",
    "styleIds": [
      "jazz-swing-era"
    ],
    "name": "big-band shout chorus",
    "shortName": "big-band shout chorus",
    "family": "jazz",
    "category": "lead",
    "description": "Technique: big-band shout chorus",
    "tags": [
      "jazz",
      "big-band shout chorus"
    ],
    "approaches": [
      "big-band shout chorus"
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
      "jazz",
      "big-band shout chorus"
    ],
    "techniques": [
      "big-band shout chorus"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": JAZZ_WORLD_PATTERNS_OSTINATO,
  "fill": JAZZ_WORLD_PATTERNS_FILL,
  "break": JAZZ_WORLD_PATTERNS_BREAK,
  "cadence": JAZZ_WORLD_PATTERNS_CADENCE,
  "groove": JAZZ_WORLD_PATTERNS_GROOVE,
  "phrasePattern": JAZZ_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": JAZZ_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": JAZZ_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": JAZZ_WORLD_PATTERNS_BASS,
  "comping": JAZZ_WORLD_PATTERNS_COMPING,
  "lead": JAZZ_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"fill","index":0},{"category":"ostinato","index":3},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":4},{"category":"groove","index":5},{"category":"sectionPattern","index":0},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"comping","index":3},{"category":"comping","index":4},{"category":"comping","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"interactionPattern","index":1},{"category":"interactionPattern","index":2},{"category":"lead","index":0}];

export const JAZZ_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
