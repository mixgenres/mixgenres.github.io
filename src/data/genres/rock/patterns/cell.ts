import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "rock-organ-sustain",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Hammond Organ Sustain",
          "family": "Keys",
          "category": "cell",
          "description": "Sustained Hammond B3 chords with Leslie",
          "tags": [
            "rock",
            "organ",
            "keys"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            7,
            8,
            15
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.85,
            0.65
          ],
          "velocityProfile": [
            0.85,
            0.55,
            0.8,
            0.6
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "rock-organ-sustain-v-01",
              "parentPatternId": "rock-organ-sustain",
              "name": "Hammond Organ Sustain — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                15
              ],
              "accentProfile": [
                0.85,
                0.5499999999999999,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.77,
                0.47000000000000003,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "rock-organ-sustain-v-02",
              "parentPatternId": "rock-organ-sustain",
              "name": "Hammond Organ Sustain — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                7,
                8,
                15
              ],
              "accentProfile": [
                0.86,
                0.6799999999999999,
                0.8099999999999999,
                0.73
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.53,
                0.78,
                0.6599999999999999
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
          "weight": 0.7,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];
