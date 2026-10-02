import type { MusicalPattern } from '../../../schema';

export const METAL_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "metal-breakdown",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Breakdown Chug",
          "family": "Guitar",
          "category": "break",
          "transitionType": "fill",
          "description": "Crushing, heavy, syncopated palm-muted chords.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar",
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "electric-guitar",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            0.8,
            0.95,
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            1,
            0.85,
            0.75,
            0.9,
            0.95,
            0.8,
            0.9
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
              "id": "metal-breakdown-v-01",
              "parentPatternId": "metal-breakdown",
              "name": "Breakdown Chug — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.75,
                0.8999999999999999,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.77,
                0.67,
                0.8200000000000001,
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
              "id": "metal-breakdown-v-02",
              "parentPatternId": "metal-breakdown",
              "name": "Breakdown Chug — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.76,
                1,
                0.96,
                0.9299999999999999,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.83,
                0.73,
                0.96,
                0.9299999999999999,
                0.78,
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
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
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
