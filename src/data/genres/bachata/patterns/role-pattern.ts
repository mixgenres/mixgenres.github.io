import type { MusicalPattern } from '../../../schema';

export const BACHATA_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "bachata-roster-drums",
          "worldId": "bachata",
          "styleIds": ["latin-bachata"],
          "name": "Bachata drums part",
          "family": "Derecho",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern gives each ensemble role a playable part.",
          "tags": [
            "bachata",
            "derecho",
            "roster",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "drums"
          ],
          "compatibleRoles": [
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "drums"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
            11,
            14
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
          "syncopationRating": 0.5714285714285714,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "bachata-roster-10-v-01",
              "parentPatternId": "bachata-roster-10",
              "name": "Derecho Texture — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                14
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
              "id": "bachata-roster-10-v-02",
              "parentPatternId": "bachata-roster-10",
              "name": "Derecho Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                7,
                8,
                11,
                14
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "derecho"
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
