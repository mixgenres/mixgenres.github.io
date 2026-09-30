import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "timba-displaced-bass",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Displaced Funk / Timba Bassline",
          "family": "Timba Bass Systems",
          "category": "ostinato",
          "description": "Syncopated bass utilizing slap thumb pops,",
          "tags": [
            "bass",
            "slap",
            "funk",
            "timba",
            "displaced"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
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
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9,
            0.85,
            1,
            0.8,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.9,
            0.8,
            0.95,
            0.75,
            0.9,
            0.85
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "montuno",
            "gear-change"
          ],
          "variants": [
            {
              "id": "timba-bass-pedal-riff",
              "parentPatternId": "timba-displaced-bass",
              "name": "Timba Pedal Bass (Root Anchor)",
              "variationType": "sparse",
              "probability": 0.45,
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.8,
                0.95
              ],
              "description": "Heavy sustained pedal point creating tension"
            },
            {
              "id": "timba-displaced-bass-v-02",
              "parentPatternId": "timba-displaced-bass",
              "name": "Displaced Funk / Timba Bassline — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.86,
                0.9299999999999999,
                0.96,
                0.88,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                0.96,
                0.78,
                0.9299999999999999,
                0.81,
                0.88,
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-anchor-14",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Moña Anchor",
          "family": "Moña",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "timba",
            "mona",
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
            4,
            8,
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
              "id": "timba-anchor-14-v-01",
              "parentPatternId": "timba-anchor-14",
              "name": "Moña Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                8,
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
              "id": "timba-anchor-14-v-02",
              "parentPatternId": "timba-anchor-14",
              "name": "Moña Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "mona"
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
