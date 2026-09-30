import type { MusicalPattern } from '../../../schema';

export const ELECTRONIC_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "elec-techno-rumble",
          "worldId": "electronic",
          "styleIds": ["electronic-house"],
          "name": "Techno Rumble",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Driving 16th-note bass and kick interaction creates a tightly interlocked low-end groove.",
          "tags": [
            "electronic",
            "techno"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": [
            "drums",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            7,
            8,
            10,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.7,
            0.95,
            0.65,
            0.7,
            1,
            0.65,
            0.7,
            0.95,
            0.65,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.6,
            0.9,
            0.55,
            0.6,
            0.95,
            0.55,
            0.6,
            0.9,
            0.55,
            0.6
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
              "id": "elec-techno-rumble-v-01",
              "parentPatternId": "elec-techno-rumble",
              "name": "Techno Rumble — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                15
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.6499999999999999,
                0.8999999999999999,
                0.6,
                0.6499999999999999,
                0.95,
                0.6
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.52,
                0.8200000000000001,
                0.47000000000000003,
                0.52,
                0.87,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "elec-techno-rumble-v-02",
              "parentPatternId": "elec-techno-rumble",
              "name": "Techno Rumble — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                7,
                8,
                10,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.6599999999999999,
                1,
                0.61,
                0.7799999999999999,
                0.96,
                0.73,
                0.6599999999999999,
                1,
                0.61,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.53,
                0.58,
                0.96,
                0.53,
                0.58,
                1,
                0.53,
                0.58,
                0.96,
                0.53,
                0.58
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
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
    
          "difficulty": 4,
          "weight": 1,
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
