import type { MusicalPattern } from '../../../schema';

export const KIZOMBA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "kizomba-phrase-9",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba-playful"],
          "name": "Hook Phrase",
          "family": "Hook",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves",
          "tags": [
            "kizomba",
            "hook",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth"
          ],
          "compatibleInstruments": [
            "synth"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.7142857142857143,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
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
              "id": "kizomba-phrase-9-v-01",
              "parentPatternId": "kizomba-phrase-9",
              "name": "Hook Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                8,
                13,
                15
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "kizomba-phrase-9-v-02",
              "parentPatternId": "kizomba-phrase-9",
              "name": "Hook Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                4,
                7,
                8,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
              ],
              "microtimingOffset": [
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
          "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "kizomba",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];
