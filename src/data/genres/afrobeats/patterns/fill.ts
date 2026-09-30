import type { MusicalPattern } from '../../../schema';

export const AFROBEATS_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "afrobeats-fill-14",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Horn Fill",
          "family": "Horn",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short transition fill that signals",
          "tags": [
            "afrobeats",
            "horn",
            "fill",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "fill",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "compatibleRoles": [
            "fill",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.72,
            0.78,
            0.84,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.95,
            1
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "pre-chorus",
            "turnaround",
            "ending"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-fill-14-v-01",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.6699999999999999,
                0.73,
                0.7899999999999999,
                0.6699999999999999
              ],
              "velocityProfile": [
                0.64,
                0.65,
                0.76,
                0.64
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-fill-14-v-02",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.6799999999999999,
                0.86,
                0.7999999999999999,
                0.7999999999999999,
                0.96,
                1
              ],
              "velocityProfile": [
                0.78,
                0.71,
                0.82,
                0.78,
                0.9299999999999999,
                0.98
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
              "id": "afrobeats-fill-14-v-03",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — transition variation",
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
                15
              ],
              "accentProfile": [
                0.7,
                0.76,
                0.82,
                0.7,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.72,
                0.73,
                0.84,
                0.72,
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
            "horn"
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
