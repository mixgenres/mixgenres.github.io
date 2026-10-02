import type { MusicalPattern } from '../../../schema';

export const FUNK_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "funk-drum-breakbeat",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat",
          "family": "Funk Drumming",
          "category": "fill",
          "transitionType": "fill",
          "description": "The most sampled groove in music",
          "tags": [
            "drums",
            "breakbeat",
            "funk",
            "clyde-stubblefield",
            "ghost-notes"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums",
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            7,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.4,
            1,
            0.35,
            0.4,
            0.9,
            0.4,
            1,
            0.35,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.4,
            0.95,
            0.3,
            0.35,
            0.85,
            0.4,
            0.95,
            0.3,
            0.75
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "neosoul-dilla-swung-pocket",
              "parentPatternId": "funk-drum-breakbeat",
              "name": "Neo-Soul Laid-Back Swung Pocket",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                4,
                7,
                8,
                12,
                15
              ],
              "accentProfile": [
                1,
                0.95,
                0.5,
                0.85,
                1,
                0.6
              ],
              "description": "Unquantized relaxed pocket with delayed backbeat"
            },
            {
              "id": "funk-drum-breakbeat-v-02",
              "parentPatternId": "funk-drum-breakbeat",
              "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                7,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.48000000000000004,
                0.96,
                0.43,
                0.4,
                0.98,
                0.4,
                1,
                0.4,
                0.88
              ],
              "velocityProfile": [
                1,
                0.4,
                0.9299999999999999,
                0.4,
                0.4,
                0.83,
                0.46,
                0.9299999999999999,
                0.4,
                0.81
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
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
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
