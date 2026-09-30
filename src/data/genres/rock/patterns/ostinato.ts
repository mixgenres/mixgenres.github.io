import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "rock-riff-lock",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Riff + Bass Lock",
          "family": "Riff",
          "category": "ostinato",
          "description": "Electric guitar and bass share a tightly locked rhythmic figure.",
          "tags": [
            "rock",
            "riff",
            "bass",
            "guitar"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "pulse",
            "drums"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
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
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.8,
            0.9,
            0.95,
            0.7,
            0.9,
            0.8
          ],
          "velocityProfile": [
            1,
            0.75,
            0.85,
            0.9,
            0.65,
            0.85,
            0.75
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "rock-riff-stop",
              "parentPatternId": "rock-riff-lock",
              "name": "Stop-Time Hit",
              "variationType": "breakdown",
              "probability": 0.4,
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                1,
                1
              ],
              "description": "The riff collapses into accented hits,"
            },
            {
              "id": "rock-riff-lock-v-02",
              "parentPatternId": "rock-riff-lock",
              "name": "Riff + Bass Lock — accent shift",
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
                14
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.86,
                1,
                0.6599999999999999,
                0.98,
                0.76
              ],
              "velocityProfile": [
                1,
                0.73,
                0.83,
                0.96,
                0.63,
                0.83,
                0.81
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-odd-meter",
          "worldId": "rock",
          "styleIds": ["rock-progressive-rock"],
          "name": "7/8 Accent Group",
          "family": "Odd Meter",
          "category": "ostinato",
          "description": "A seven-eighth-note cycle grouped 2+2+3 creates an uneven, driving pulse.",
          "tags": [
            "rock",
            "progressive",
            "7/8",
            "odd-meter"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track",
            "region"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "drums"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums"
          ],
          "meter": "7/8",
          "cycleLength": 1,
          "subdivisions": 14,
          "onsetGrid": [
            0,
            4,
            8,
            10
          ],
          "accentProfile": [
            1,
            0.7,
            1,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.75
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "rock-odd-meter-v-01",
              "parentPatternId": "rock-odd-meter",
              "name": "7/8 Accent Group — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                10
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.95
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
              "id": "rock-odd-meter-v-02",
              "parentPatternId": "rock-odd-meter",
              "name": "7/8 Accent Group — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                10
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.96,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.81
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-anchor-15",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Power Chord Anchor",
          "family": "Power Chord",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "rock",
            "power-chord",
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
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "rock-anchor-15-v-01",
              "parentPatternId": "rock-anchor-15",
              "name": "Power Chord Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                10,
                14
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
              "id": "rock-anchor-15-v-02",
              "parentPatternId": "rock-anchor-15",
              "name": "Power Chord Anchor — accent shift",
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
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
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
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "power-chord"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];
