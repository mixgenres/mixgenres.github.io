import type { MusicalPattern } from '../../../schema';

export const BACHATA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "bachata-bass-majao",
          "worldId": "bachata",
          "styleIds": ["latin-bachata"],
          "name": "Bass Majao",
          "family": "Bass",
          "category": "break",
          "transitionType": "fill",
          "description": "Driving syncopated bass pattern for majao",
          "tags": [
            "bachata",
            "bass",
            "majao"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "majao",
            "chorus",
            "mambo"
          ],
          "variants": [
            {
              "id": "bachata-bass-majao-v-01",
              "parentPatternId": "bachata-bass-majao",
              "name": "Bass Majao — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                12
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "bachata-bass-majao-v-02",
              "parentPatternId": "bachata-bass-majao",
              "name": "Bass Majao — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            },
            {
              "id": "bachata-bass-majao-v-03",
              "parentPatternId": "bachata-bass-majao",
              "name": "Bass Majao — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.83,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.8,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
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
