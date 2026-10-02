import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "tango-piano-chumba",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Piano Chumba",
          "family": "Piano",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Heavy bass anchor on beats 1",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "piano",
            "keys"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            1,
            4,
            5
          ],
          "accentProfile": [
            1,
            0.65,
            0.95,
            0.6
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.9,
            0.55
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "tango-piano-chumba-v-01",
              "parentPatternId": "tango-piano-chumba",
              "name": "Piano Chumba — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                5
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "tango-piano-chumba-v-02",
              "parentPatternId": "tango-piano-chumba",
              "name": "Piano Chumba — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                4,
                5
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.9099999999999999,
                0.6799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.88,
                0.6100000000000001
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
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];
