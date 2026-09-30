import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "country-intro-15",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Boom-Chuck Intro",
          "family": "Boom-Chuck",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "country",
            "boom-chuck",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            2,
            4,
            5,
            8
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
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 52,
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
              "id": "country-intro-15-v-01",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                5
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
              "id": "country-intro-15-v-02",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                8
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
            },
            {
              "id": "country-intro-15-v-03",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                2,
                4,
                5,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "boom-chuck"
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
