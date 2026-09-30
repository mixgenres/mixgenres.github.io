import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "timba-gear-marcha",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Gear Change: Marcha (Standard Drive)",
          "family": "Timba Gear System",
          "category": "sectionPattern",
          "description": "Base gear featuring full driving groove",
          "tags": [
            "timba",
            "gear",
            "marcha",
            "groove"
          ],
          "scopes": [
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
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14,
            16,
            20,
            22,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.9,
            0.7,
            1,
            0.7,
            0.95,
            1,
            0.9,
            0.7,
            1,
            0.7,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            1,
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            1
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "montuno",
            "gear-change"
          ],
          "variants": [
            {
              "id": "timba-gear-bomba",
              "parentPatternId": "timba-gear-marcha",
              "name": "Gear Change: Bomba (Bass Slap & Kick Breakdown)",
              "variationType": "breakdown",
              "probability": 0.6,
              "onsetGrid": [
                0,
                6,
                12,
                16,
                22,
                28
              ],
              "accentProfile": [
                1,
                0.85,
                0.95,
                1,
                0.85,
                0.95
              ],
              "description": "Drops to raw sub-bass and slap accents for a stripped-back break."
            },
            {
              "id": "timba-gear-presion",
              "parentPatternId": "timba-gear-marcha",
              "name": "Gear Change: Presión (High Tension Climax)",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                16,
                18,
                20,
                22,
                24,
                26,
                28,
                30
              ],
              "accentProfile": [
                1,
                0.8,
                1,
                0.8,
                1,
                0.8,
                1,
                0.9,
                1,
                0.8,
                1,
                0.8,
                1,
                0.8,
                1,
                1
              ],
              "description": "Maximum density and accelerating cowbell raise the energy into the next section."
            },
            {
              "id": "timba-gear-marcha-v-03",
              "parentPatternId": "timba-gear-marcha",
              "name": "Gear Change: Marcha (Standard Drive) — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14,
                15,
                16,
                20,
                22,
                26,
                28,
                30
              ],
              "accentProfile": [
                0.88,
                0.6799999999999999,
                0.98,
                0.6799999999999999,
                0.9299999999999999,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
              ],
              "velocityProfile": [
                0.9,
                0.7,
                1,
                0.7,
                0.9,
                0.98,
                0.98,
                0.98,
                0.98,
                0.98,
                0.98,
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
                -6,
                -6,
                -6,
                -6,
                -6,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 4,
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
          "id": "timba-intro-16",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Marcha Intro",
          "family": "Marcha",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "timba",
            "marcha",
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
          "swingPercentage": 53,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "timba-intro-16-v-01",
              "parentPatternId": "timba-intro-16",
              "name": "Marcha Intro — sparse variation",
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
              "id": "timba-intro-16-v-02",
              "parentPatternId": "timba-intro-16",
              "name": "Marcha Intro — accent shift",
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
            },
            {
              "id": "timba-intro-16-v-03",
              "parentPatternId": "timba-intro-16",
              "name": "Marcha Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                4,
                6,
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "marcha"
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
