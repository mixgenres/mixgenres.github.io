import type { MusicalPattern } from '../../../schema';

export const KIZOMBA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "kizomba-batida-groove",
          "worldId": "kizomba",
          "styleIds": ["kizomba-semba"],
          "name": "Kizomba Batida & Sub-Kick Beat",
          "family": "Kizomba Drumming",
          "category": "break",
          "transitionType": "fill",
          "description": "The hypnotic heartbeat of Kizomba: low",
          "tags": [
            "kizomba",
            "batida",
            "dikanza",
            "drums",
            "angola"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums",
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.82,
            0.94,
            0.72,
            0.88
          ],
          "velocityProfile": [
            0.95,
            0.78,
            0.88,
            0.68,
            0.82
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "tarraxinha-sub-drop",
              "parentPatternId": "kizomba-batida-groove",
              "name": "Tarraxinha Minimal Sub Drop",
              "variationType": "breakdown",
              "probability": 0.5,
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                1,
                0.92,
                0.86
              ],
              "description": "Stripped-down heavy electronic sub-bass kick for"
            },
            {
              "id": "kizomba-batida-groove-v-02",
              "parentPatternId": "kizomba-batida-groove",
              "name": "Kizomba Batida & Sub-Kick Beat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.8999999999999999,
                0.8999999999999999,
                0.7999999999999999,
                0.84
              ],
              "velocityProfile": [
                1,
                0.76,
                0.86,
                0.74,
                0.7999999999999999
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
          "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "kizomba"
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
