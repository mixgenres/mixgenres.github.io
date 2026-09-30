import type { MusicalPattern } from '../../../schema';

export const ZOUK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "zouk-bass-movement",
          "worldId": "zouk",
          "styleIds": ["zouk-beton"],
          "name": "Zouk Syncopated Bass Movement",
          "family": "Zouk Basslines",
          "category": "ostinato",
          "description": "Warm, round bass with syncopated 16th",
          "tags": [
            "zouk",
            "bass",
            "kassav",
            "groove",
            "antilles"
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
            12,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.8,
            0.9,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.75,
            0.85,
            0.8
          ],
          "articulations": [
            "slap-pop",
            "warm-sub-slide"
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
              "id": "zouk-bass-sub-pulse",
              "parentPatternId": "zouk-bass-movement",
              "name": "Zouk Love Deep Sub-Bass Glide",
              "variationType": "sparse",
              "probability": 0.5,
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                1,
                0.9,
                0.8,
                0.95
              ],
              "description": "A slower, heavier sub-bass pattern suits breakdowns and sparse passages."
            },
            {
              "id": "zouk-bass-movement-v-02",
              "parentPatternId": "zouk-bass-movement",
              "name": "Zouk Syncopated Bass Movement — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.88,
                0.86,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.81,
                0.83,
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
          "weight": 0.7,
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "zouk-guitar-skank-chawa",
          "worldId": "zouk",
          "styleIds": ["zouk-love"],
          "name": "Chawa Guitar Skank",
          "family": "Zouk Guitar Chawa",
          "category": "ostinato",
          "description": "Crisp, muted single-coil electric guitar chops",
          "tags": [
            "guitar",
            "skank",
            "chawa",
            "zouk",
            "clean"
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
            "guitar",
            "keys"
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
            0.9,
            1,
            0.9,
            1
          ],
          "velocityProfile": [
            0.85,
            0.95,
            0.85,
            0.95
          ],
          "articulations": [
            "staccato-chop",
            "palm-mute"
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "zouk-guitar-double-chop",
              "parentPatternId": "zouk-guitar-skank-chawa",
              "name": "Double-Time 16th Chawa Chop",
              "variationType": "dense",
              "probability": 0.45,
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
                0.9,
                0.5,
                1,
                0.5,
                0.9,
                0.5,
                1,
                0.5
              ],
              "description": "Rapid double-stroke chops for high-energy Zouk"
            },
            {
              "id": "zouk-guitar-skank-chawa-v-02",
              "parentPatternId": "zouk-guitar-skank-chawa",
              "name": "Chawa Guitar Skank — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.86,
                1,
                0.86,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.9299999999999999,
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "zouk-anchor-11",
          "worldId": "zouk",
          "styleIds": ["zouk-beton"],
          "name": "Chawa Anchor",
          "family": "Chawa",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "zouk",
            "chawa",
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
            0,
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
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
              "id": "zouk-anchor-11-v-01",
              "parentPatternId": "zouk-anchor-11",
              "name": "Chawa Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                13
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
              "id": "zouk-anchor-11-v-02",
              "parentPatternId": "zouk-anchor-11",
              "name": "Chawa Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "chawa"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];
