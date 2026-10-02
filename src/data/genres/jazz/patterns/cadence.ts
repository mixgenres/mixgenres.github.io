import type { MusicalPattern } from '../../../schema';

export const JAZZ_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "jazz-hihat-2-4",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Hi-Hat 2 & 4",
          "family": "Drums",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Crisp foot hi-hat chick locking beats",
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
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 4,
          "onsetGrid": [
            1,
            3
          ],
          "accentProfile": [
            0.9,
            1
          ],
          "velocityProfile": [
            0.85,
            0.95
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
              "id": "jazz-hihat-2-4-v-01-safe",
              "parentPatternId": "jazz-hihat-2-4",
              "name": "Hi-Hat 2 & 4 — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                1,
                3
              ],
              "accentProfile": [
                0.85,
                1
              ],
              "velocityProfile": [
                0.88,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "jazz-hihat-2-4-v-02-safe",
              "parentPatternId": "jazz-hihat-2-4",
              "name": "Hi-Hat 2 & 4 — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                1,
                3
              ],
              "accentProfile": [
                0.85,
                1
              ],
              "velocityProfile": [
                0.88,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "jazz"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];
