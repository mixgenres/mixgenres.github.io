import type { MusicalPattern } from '../../../schema';

export const JAZZ_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "jazz-walking-bass",
          "worldId": "jazz",
          "styleIds": ["jazz-swing-bebop"],
          "name": "Walking Bass (Continuous Harmonic Navigation)",
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
              "name": "Two-Feel Bass (Head Statement)",
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
          "styleIds": ["jazz-swing-bebop"],
          "name": "Jazz Ride Cymbal (Spang-a-Lang)",
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
              "name": "Ballad Snare Brushes (Circular Sweep)",
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
              "name": "Jazz Ride Cymbal (Spang-a-Lang) — accent shift",
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
          "styleIds": ["jazz-swing-bebop"],
          "name": "Syncopated Piano Comping (Charleston & Red Garland Pluck)",
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
              "name": "Syncopated Piano Comping (Charleston & Red Garland Pluck) — accent shift",
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
          "styleIds": ["jazz-modal-contemporary"],
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
              "name": "Latin Jazz Montuno Comping — sparse variation",
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
          "styleIds": ["jazz-swing-bebop"],
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
              "name": "Head Anchor — sparse variation",
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
