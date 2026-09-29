import type { MusicalPattern } from '../../../schema';

export const AFROBEATS_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "afro-horn-stabs",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afrobeat"],
          "name": "Fela Afrobeat Horn Section Stabs",
          "family": "Afro Horns",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Pungent brass section horn stabs locking",
          "tags": [
            "afrobeat",
            "horns",
            "brass",
            "fela"
          ],
          "scopes": [
            "phrase",
            "region"
          ],
          "roles": [
            "lead",
            "brass"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "brass",
            "sax"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.9,
            0.95
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "solo",
            "coda"
          ],
          "variants": [
            {
              "id": "afro-horn-stabs-v-01",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                3,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.77,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "afro-horn-stabs-v-02",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                3,
                7,
                11,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.98,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.96,
                0.83,
                0.88,
                1
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "afro-horn-stabs-v-03",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                3,
                7,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.88,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.9,
                0.85,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "legato"
          ]
        },
  {
          "id": "afrobeats-cadence-16",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Log Drum Cadence",
          "family": "Log Drum",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A phrase-ending cadence that gives the",
          "tags": [
            "afrobeats",
            "log-drum",
            "cadence",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "bass"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": [
            "guitar",
            "bass"
          ],
          "compatibleRoles": [
            "harmony",
            "bass"
          ],
          "compatibleInstruments": [
            "guitar",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            6,
            8,
            12,
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
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "turnaround",
            "ending",
            "coda",
            "remate",
            "cierre"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-cadence-16-v-01",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
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
              "id": "afrobeats-cadence-16-v-02",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                6,
                8,
                12,
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
              "id": "afrobeats-cadence-16-v-03",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                6,
                8,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "log-drum"
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
