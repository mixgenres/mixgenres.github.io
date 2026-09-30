import type { MusicalPattern } from '../../../schema';

export const JAZZ_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "jazz-brushes-swing",
          "worldId": "jazz",
          "styleIds": ["jazz-swing-bebop"],
          "name": "Brushes Swing",
          "family": "Drums",
          "category": "fill",
          "transitionType": "fill",
          "description": "Sweeping circular wire-brush patterns add motion without a hard attack.",
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
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.85,
            0.65,
            0.95,
            0.6,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.8,
            0.6,
            0.9,
            0.55,
            0.8,
            0.65
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
              "id": "jazz-brushes-swing-v-01",
              "parentPatternId": "jazz-brushes-swing",
              "name": "Brushes Swing — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                9
              ],
              "accentProfile": [
                0.8999999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.7200000000000001,
                0.52,
                0.8200000000000001
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
              "id": "jazz-brushes-swing-v-02",
              "parentPatternId": "jazz-brushes-swing",
              "name": "Brushes Swing — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11
              ],
              "accentProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.73,
                0.9099999999999999,
                0.6799999999999999,
                0.8099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.78,
                0.6599999999999999,
                0.88,
                0.53,
                0.8600000000000001,
                0.63
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 3,
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
