import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "folk-travis",
          "worldId": "folk",
          "styleIds": ["folk-singer-songwriter"],
          "name": "Travis Picking",
          "family": "Fingerpicking",
          "category": "phrasePattern",
          "description": "Alternating thumb bass with syncopated treble.",
          "tags": [
            "folk",
            "fingerpicking"
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
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            6,
            14
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.85,
            0.75,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.8,
            0.7,
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
              "id": "folk-travis-variant-clawhammer-feel",
              "parentPatternId": "folk-travis",
              "name": "Clawhammer Feel",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Bum-ditty rhythm translated to guitar. Retained",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                7
              ],
              "accentProfile": [
                1,
                0.7,
                0.85,
                0.95,
                0.7,
                0.85
              ],
              "velocityProfile": [
                0.95,
                0.65,
                0.8,
                0.9,
                0.65,
                0.8
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "folk-travis-v-02",
              "parentPatternId": "folk-travis",
              "name": "Travis Picking — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                6,
                14
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.9299999999999999,
                0.71,
                0.88
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88,
                0.8600000000000001,
                0.6799999999999999,
                0.73
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
