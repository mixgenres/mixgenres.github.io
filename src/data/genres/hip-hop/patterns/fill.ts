import type { MusicalPattern } from '../../../schema';

export const HIP_HOP_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "hiphop-boom-sync",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "Syncopated Kick",
          "family": "Beat",
          "category": "fill",
          "transitionType": "fill",
          "description": "Boom Bap with syncopated 16th kick",
          "tags": [
            "hip-hop",
            "beat"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            11,
            12
          ],
          "accentProfile": [
            1,
            0.95,
            0.8,
            0.9,
            0.75,
            1
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.75,
            0.85,
            0.7,
            0.95
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "hiphop-boom-sync-v-01",
              "parentPatternId": "hiphop-boom-sync",
              "name": "Syncopated Kick — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                7,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.75,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.67,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "hiphop-boom-sync-v-02",
              "parentPatternId": "hiphop-boom-sync",
              "name": "Syncopated Kick — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                11,
                12
              ],
              "accentProfile": [
                0.96,
                1,
                0.76,
                0.98,
                0.71,
                1
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73,
                0.9099999999999999,
                0.6799999999999999,
                0.9299999999999999
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
          "weight": 1,
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];
