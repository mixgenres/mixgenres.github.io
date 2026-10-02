import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "tango-bordoneo",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Bordoneo Criollo (Guitar Bass Movement)",
          "family": "Guitar Bordoneos",
          "category": "rolePattern",
          "description": "Melodic low-string counterlines and turns typical",
          "tags": [
            "guitar",
            "bordoneo",
            "criollo",
            "countermelody"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "harmony",
            "bass",
            "melodic-guitar",
            "counterline"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": [
            "guitar",
            "electric-guitar",
            "piano"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.7,
            0.85,
            0.6,
            0.8,
            0.7
          ],
          "velocityProfile": [
            0.85,
            0.6,
            0.7,
            0.8,
            0.6,
            0.75,
            0.7
          ],
          "articulations": [
            "thumb-apoyando",
            "slur"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "solo"
          ],
          "variants": [
            {
              "id": "tango-bordoneo-milonga",
              "parentPatternId": "tango-bordoneo",
              "name": "Milonga Bordoneo Turn",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.75,
                0.7,
                0.9,
                0.75
              ],
              "description": "Syncopated habanera bordoneo figure."
            },
            {
              "id": "tango-bordoneo-v-02",
              "parentPatternId": "tango-bordoneo",
              "name": "Bordoneo Criollo (Guitar Bass Movement) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.86,
                0.6799999999999999,
                0.6599999999999999,
                0.9299999999999999,
                0.5599999999999999,
                0.88,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.58,
                0.6799999999999999,
                0.8600000000000001,
                0.58,
                0.73,
                0.76
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
          "weight": 0.7,
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
        }
];
