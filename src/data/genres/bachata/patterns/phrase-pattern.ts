import type { MusicalPattern } from '../../../schema';

export const BACHATA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "bachata--phrasing",
          "worldId": "bachata",
          "styleIds": ["bachata-tradicional"],
          "name": "Bachata Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Romantic verse/coro phrase placement that leaves",
          "tags": [
            "bachata",
            "requinto",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "requinto"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "requinto"
          ],
          "compatibleRoles": [
            "requinto",
            "lead"
          ],
          "compatibleInstruments": [
            "requinto"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.94,
            0.62,
            0.94,
            0.62,
            0.94,
            0.62
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
            0.58
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "bachata--phrasing-v--alt",
              "parentPatternId": "bachata--phrasing",
              "name": "Bachata Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "Alternate vocal entry placement for a",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.92,
                0.62,
                0.92,
                0.62,
                0.92,
                0.62
              ],
              "velocityProfile": [
                0.88,
                0.58,
                0.88,
                0.58,
                0.88,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            },
            {
              "id": "bachata--phrasing-v-final-accent",
              "parentPatternId": "bachata--phrasing",
              "name": "Bachata Vocal Phrasing — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Same rhythmic shape with shifted emphasis",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.9,
                0.58,
                0.9,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Bachata.",
          "authenticityTags": [
            "bachata",
            "requinto"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];
