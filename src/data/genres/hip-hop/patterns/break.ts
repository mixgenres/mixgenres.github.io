import type { MusicalPattern } from '../../../schema';

export const HIP_HOP_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "hiphop-trap-basic",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "Trap Half-Time",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "Basic half-time trap beat with booming",
          "tags": [
            "hip-hop",
            "beat"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            1,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.75
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "hiphop-trap-basic-v-01",
              "parentPatternId": "hiphop-trap-basic",
              "name": "Trap Half-Time — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "hiphop-trap-basic-v-02",
              "parentPatternId": "hiphop-trap-basic",
              "name": "Trap Half-Time — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                8,
                14
              ],
              "accentProfile": [
                0.96,
                1,
                0.76
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 1,
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
