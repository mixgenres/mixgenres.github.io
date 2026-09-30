import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "timba-call-13",
          "worldId": "timba",
          "styleIds": ["timba-havana-modern"],
          "name": "Coro Response",
          "family": "Coro / backing vocals",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "timba",
            "coro",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth"
          ],
          "compatibleInstruments": [
            "synth"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
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
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95
          ],
          "syncopationRating": 0.7142857142857143,
          "anticipationOffset": 0,
          "swingPercentage": 53,
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
              "id": "timba-call-13-v-01",
              "parentPatternId": "timba-call-13",
              "name": "Coro Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                7,
                11,
                13
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
              "id": "timba-call-13-v-02",
              "parentPatternId": "timba-call-13",
              "name": "Coro Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
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
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1
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
            },
            {
              "id": "timba-call-13-v-03",
              "parentPatternId": "timba-call-13",
              "name": "Coro Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
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
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "coro"
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
