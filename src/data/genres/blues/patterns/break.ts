import type { MusicalPattern } from '../../../schema';

export const BLUES_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "blues-slow-12-8",
          "worldId": "blues",
          "styleIds": ["blues-chicago"],
          "name": "Slow 12/8 Groove",
          "family": "Drums",
          "category": "break",
          "transitionType": "fill",
          "description": "Slow heavy triplet feel with snare",
          "tags": [],
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
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            6,
            9
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.65
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
              "id": "blues-slow-12-8-v-01",
              "parentPatternId": "blues-slow-12-8",
              "name": "Slow 12/8 Groove — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "blues-slow-12-8-v-02",
              "parentPatternId": "blues-slow-12-8",
              "name": "Slow 12/8 Groove — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                9
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.71
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
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];
