import type { MusicalPattern } from '../../../schema';

export const METAL_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "metal-gallop-riff",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "The Gallop Rhythm (Iron Maiden / Steve Harris)",
          "family": "Metal Gallop",
          "category": "ostinato",
          "description": "Classic 16th-16th-8th galloping chug on palm-muted",
          "tags": [
            "metal",
            "gallop",
            "thrash",
            "iron-maiden",
            "palm-mute"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony",
            "rhythm-guitar",
            "bass",
            "drums"
          ],
    
          "approaches": ["comping", "walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            2,
            4,
            5,
            6,
            8,
            9,
            10,
            12,
            13,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            1,
            0.7,
            0.9,
            1,
            0.7,
            0.9,
            1,
            0.7,
            0.9
          ],
          "velocityProfile": [
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85
          ],
          "articulations": [
            "palm-mute",
            "down-pick"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "metal-double-kick-blast",
              "parentPatternId": "metal-gallop-riff",
              "name": "Continuous 16th Double-Kick Stream",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.8
              ],
              "description": "Wall of 16th note double bass"
            },
            {
              "id": "metal-gallop-riff-v-02",
              "parentPatternId": "metal-gallop-riff",
              "name": "The Gallop Rhythm (Iron Maiden / Steve Harris) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                2,
                4,
                5,
                6,
                8,
                9,
                10,
                12,
                13,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                1,
                0.6599999999999999,
                0.98,
                0.96,
                0.7799999999999999,
                0.86,
                1,
                0.6599999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                1,
                0.6799999999999999,
                0.83,
                1,
                0.6799999999999999,
                0.83,
                1,
                0.6799999999999999,
                0.83
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
          "weight": 0.7,
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
    
    },
  {
          "id": "metal-djent-chug",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Djent Polymetric Low Chug",
          "family": "Djent Rhythms",
          "category": "ostinato",
          "description": "Syncopated, unyielding low-tuned palm-muted chugs grouped",
          "tags": [
            "djent",
            "prog-metal",
            "meshuggah",
            "polymeter",
            "chug"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony",
            "rhythm-guitar",
            "bass"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": [
            "electric-guitar",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            9,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.9,
            0.85,
            1
          ],
          "velocityProfile": [
            1,
            0.9,
            1,
            0.9,
            0.85,
            1
          ],
          "articulations": [
            "tight-djent-mute",
            "percussive-strike"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "breakdown",
            "solo"
          ],
          "variants": [
            {
              "id": "metal-half-time-breakdown",
              "parentPatternId": "metal-djent-chug",
              "name": "Crushing Half-Time Breakdown",
              "variationType": "breakdown",
              "probability": 0.6,
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.9
              ],
              "description": "Tempo feel halved with devastating snare"
            },
            {
              "id": "metal-djent-chug-v-02",
              "parentPatternId": "metal-djent-chug",
              "name": "Djent Polymetric Low Chug — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.96,
                0.98,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.88,
                0.98,
                0.96,
                0.83,
                0.98
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
    
          "difficulty": 2,
          "weight": 0.7,
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
    
    },
  {
          "id": "metal-anchor-12",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Tremolo Anchor",
          "family": "Tremolo",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "metal",
            "tremolo",
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
            6,
            8,
            12,
            14
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
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-anchor-12-v-01",
              "parentPatternId": "metal-anchor-12",
              "name": "Tremolo Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
                14
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
              "id": "metal-anchor-12-v-02",
              "parentPatternId": "metal-anchor-12",
              "name": "Tremolo Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                6,
                8,
                12,
                14
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
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "tremolo"
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
