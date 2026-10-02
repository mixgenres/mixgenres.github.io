import type { MusicalPattern } from '../../../schema';

export const ELECTRONIC_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "elec-offbeat-hats",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Offbeat Hats",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "Open hi-hats on the upbeats creating",
          "tags": [
            "electronic",
            "house"
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
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.95,
            0.9,
            1,
            0.9
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.95,
            0.85
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
              "id": "elec-offbeat-hats-v-01",
              "parentPatternId": "elec-offbeat-hats",
              "name": "Offbeat Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                10,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.85,
                0.95
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.77,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "elec-offbeat-hats-v-02",
              "parentPatternId": "elec-offbeat-hats",
              "name": "Offbeat Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.98,
                0.96,
                0.98
              ],
              "velocityProfile": [
                0.96,
                0.83,
                0.9299999999999999,
                0.9099999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
