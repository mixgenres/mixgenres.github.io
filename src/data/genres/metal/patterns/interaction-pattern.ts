import type { MusicalPattern } from '../../../schema';

export const METAL_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "metal-call-11",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Gallop Response",
          "family": "Gallop",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "metal",
            "gallop",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "overdrive-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "overdrive-guitar"
          ],
          "compatibleRoles": [
            "overdrive-guitar"
          ],
          "compatibleInstruments": [
            "overdrive-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            15
          ],
          "accentProfile": [
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
            0.62
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-call-11-v-01",
              "parentPatternId": "metal-call-11",
              "name": "Gallop Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "metal-call-11-v-02",
              "parentPatternId": "metal-call-11",
              "name": "Gallop Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                5,
                7,
                11,
                13,
                15
              ],
              "accentProfile": [
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
                0.6
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
              "id": "metal-call-11-v-03",
              "parentPatternId": "metal-call-11",
              "name": "Gallop Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                5,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "gallop"
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
