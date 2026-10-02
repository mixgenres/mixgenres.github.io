import type { MusicalPattern } from '../../../schema';

export const HIP_HOP_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "hiphop-trap-hats",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Trap Hi-Hats",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Continuous 16ths with 32nd note hi-hat",
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
          "subdivisions": 32,
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
            21,
            22,
            24,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.8,
            0.65,
            0.85,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.7,
            0.8,
            0.9,
            0.85,
            0.65,
            0.8,
            0.65
          ],
          "velocityProfile": [
            0.85,
            0.55,
            0.75,
            0.55,
            0.8,
            0.55,
            0.75,
            0.55,
            0.85,
            0.55,
            0.6,
            0.7,
            0.85,
            0.8,
            0.55,
            0.75,
            0.55
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "hiphop-trap-hats-v-01",
              "parentPatternId": "hiphop-trap-hats",
              "name": "Trap Hi-Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                16,
                18,
                21,
                22,
                26,
                28
              ],
              "accentProfile": [
                0.85,
                0.6,
                0.75,
                0.6,
                0.7999999999999999,
                0.6,
                0.75,
                0.6,
                0.85,
                0.6,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.77,
                0.47000000000000003,
                0.67,
                0.47000000000000003,
                0.7200000000000001,
                0.47000000000000003,
                0.67,
                0.47000000000000003,
                0.77,
                0.47000000000000003,
                0.52
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "hiphop-trap-hats-v-02",
              "parentPatternId": "hiphop-trap-hats",
              "name": "Trap Hi-Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                21,
                22,
                24,
                26,
                28,
                30
              ],
              "accentProfile": [
                0.86,
                0.73,
                0.76,
                0.73,
                0.8099999999999999,
                0.73,
                0.76,
                0.73,
                0.86,
                0.73,
                0.6599999999999999,
                0.88,
                0.86,
                0.9299999999999999,
                0.61,
                0.88,
                0.61
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.53,
                0.73,
                0.6100000000000001,
                0.78,
                0.53,
                0.81,
                0.53,
                0.83,
                0.6100000000000001,
                0.58,
                0.6799999999999999,
                0.9099999999999999,
                0.78,
                0.53,
                0.81,
                0.53
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
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
    
          "difficulty": 5,
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
