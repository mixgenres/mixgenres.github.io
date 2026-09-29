import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "folk-strum-basic",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Basic Strum",
          "family": "Strumming",
          "category": "break",
          "transitionType": "fill",
          "description": "Down on beats, up on offbeats.",
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
            4,
            6
          ],
          "accentProfile": [
            1,
            0.75,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.75
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
              "id": "folk-strum-basic-variant-carter-scratch",
              "parentPatternId": "folk-strum-basic",
              "name": "Carter Scratch",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Melody on bass notes followed by",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                1,
                0.8,
                0.95,
                0.85
              ],
              "velocityProfile": [
                0.95,
                0.75,
                0.9,
                0.8
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "folk-strum-basic-v-02",
              "parentPatternId": "folk-strum-basic",
              "name": "Basic Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.81
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
