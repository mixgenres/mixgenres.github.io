import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "country-call-12",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Nashville Response",
          "family": "Nashville",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "country",
            "nashville",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "steel-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "steel-guitar"
          ],
          "compatibleRoles": [
            "steel-guitar"
          ],
          "compatibleInstruments": [
            "steel-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
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
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 52,
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
              "id": "country-call-12-v-01",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                4,
                9,
                11
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
              "id": "country-call-12-v-02",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                3,
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
              "id": "country-call-12-v-03",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                3,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "nashville"
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
