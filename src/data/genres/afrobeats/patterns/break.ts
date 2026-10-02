import type { MusicalPattern } from '../../../schema';

export const AFROBEATS_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "afrobeats-break-15",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeat Break",
          "family": "Afrobeat",
          "category": "break",
          "transitionType": "fill",
          "description": "A deliberate drop in density for",
          "tags": [
            "afrobeats",
            "afrobeat",
            "break",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "percussion",
            "bass"
          ],
          "compatibleRoles": [
            "drums",
            "bass"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "bass"
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
            1,
            0.55,
            0.55,
            0.55,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.95,
            1
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "stop-time"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-break-15-v-01",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.95,
                0.5,
                0.5,
                0.5
              ],
              "velocityProfile": [
                0.92,
                0.42,
                0.47000000000000003,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-break-15-v-02",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                5,
                7,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.63,
                0.51,
                0.63,
                0.96,
                1
              ],
              "velocityProfile": [
                1,
                0.48,
                0.53,
                0.6100000000000001,
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
              "id": "afrobeats-break-15-v-03",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
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
                0.98,
                0.53,
                0.53,
                0.53,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.5,
                0.55,
                0.55,
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
            "afrobeat"
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
