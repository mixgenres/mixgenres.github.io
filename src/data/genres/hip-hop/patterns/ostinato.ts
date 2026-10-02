import type { MusicalPattern } from '../../../schema';

export const HIP_HOP_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "hiphop-808-glide-bass",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-trap"],
          "name": "808 Glide & Sub Slide Bass",
          "family": "808 Bass",
          "category": "ostinato",
          "description": "Deep sliding 808 sub bass notes",
          "tags": [
            "trap",
            "808",
            "bass",
            "sub",
            "glide"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "bass",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "hiphop-808-glide-bass-v-01",
              "parentPatternId": "hiphop-808-glide-bass",
              "name": "808 Glide & Sub Slide Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "id": "hiphop-808-glide-bass-v-02",
              "parentPatternId": "hiphop-808-glide-bass",
              "name": "808 Glide & Sub Slide Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.86
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "hip-hop"
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
        },
  {
          "id": "hip-hop-anchor-16",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "Sample Chop Anchor",
          "family": "Sample Chop",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "hip-hop",
            "sample-chop",
            "anchor",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "compatibleRoles": [
            "bass"
          ],
          "compatibleInstruments": [
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            8,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "hip-hop-anchor-16-v-01",
              "parentPatternId": "hip-hop-anchor-16",
              "name": "Sample Chop Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "hip-hop-anchor-16-v-02",
              "parentPatternId": "hip-hop-anchor-16",
              "name": "Sample Chop Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                5,
                8,
                10,
                13
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "hip-hop",
            "sample-chop"
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
