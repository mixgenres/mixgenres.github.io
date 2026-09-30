import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "folk-strum-sync",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Syncopated Strum",
          "family": "Strumming",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Standard folk syncopated strum (D-D-U-U-D-U).",
          "tags": [
            "folk",
            "strumming"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            5,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.8,
            0.9,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.85,
            0.7,
            0.8
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
              "id": "folk-strum-sync-v-01",
              "parentPatternId": "folk-strum-sync",
              "name": "Syncopated Strum — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.75,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.67,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "folk-strum-sync-v-02",
              "parentPatternId": "folk-strum-sync",
              "name": "Syncopated Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                5,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.86,
                0.83,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.73,
                0.83,
                0.76,
                0.78
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "folk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];
