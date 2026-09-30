import type { MusicalPattern } from '../../../schema';

export const JAZZ_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "jazz-piano-red-garland",
          "worldId": "jazz",
          "styleIds": ["jazz-bebop"],
          "name": "Block Chords",
          "family": "Piano",
          "category": "break",
          "transitionType": "fill",
          "description": "Locked-hands syncopated block chords.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "piano",
            "keys"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            3,
            5
          ],
          "accentProfile": [
            0.95,
            0.8,
            1
          ],
          "velocityProfile": [
            0.9,
            0.75,
            0.95
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
              "id": "jazz-piano-red-garland-v-01",
              "parentPatternId": "jazz-piano-red-garland",
              "name": "Block Chords — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.8999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "jazz-piano-red-garland-v-02",
              "parentPatternId": "jazz-piano-red-garland",
              "name": "Block Chords — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                5
              ],
              "accentProfile": [
                0.9099999999999999,
                0.88,
                0.96
              ],
              "velocityProfile": [
                0.96,
                0.73,
                0.9299999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 1,
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
