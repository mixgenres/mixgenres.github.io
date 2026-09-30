import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "country-trap-hats",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Hick-Hop Trap Hi-Hats",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Modern country-trap crossover: rolling hi-hat bursts",
          "tags": [
            "country",
            "trap",
            "hick-hop"
          ],
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
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.95,
            0.6,
            0.75,
            1,
            0.55,
            0.65,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.55,
            0.7,
            0.95,
            0.5,
            0.6,
            0.8
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "country-trap-hats-v-01",
              "parentPatternId": "country-trap-hats",
              "name": "Hick-Hop Trap Hi-Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                10,
                13,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.5499999999999999,
                0.7,
                0.95
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.47000000000000003,
                0.62,
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
              "id": "country-trap-hats-v-02",
              "parentPatternId": "country-trap-hats",
              "name": "Hick-Hop Trap Hi-Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                1,
                0.5599999999999999,
                0.83,
                0.96,
                0.63,
                0.61,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.88,
                0.53,
                0.76,
                0.9299999999999999,
                0.48,
                0.6599999999999999,
                0.78
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
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
