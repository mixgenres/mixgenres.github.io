import type { MusicalPattern } from '../../../schema';

export const METAL_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "metal-blast-beat",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Blast Beat",
          "family": "Drums",
          "category": "fill",
          "transitionType": "fill",
          "description": "Extremely fast alternating kick and snare",
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
          "subdivisions": 16,
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
            0.85,
            0.95,
            0.85,
            1,
            0.85,
            0.95,
            0.85,
            1,
            0.85,
            0.95,
            0.85,
            1,
            0.85,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.8,
            0.95,
            0.8,
            0.9,
            0.8,
            0.95,
            0.8,
            0.9,
            0.8,
            0.95,
            0.8,
            0.9,
            0.8
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "metal-blast-beat-variant-double-kick-16ths",
              "parentPatternId": "metal-blast-beat",
              "name": "Double Kick 16ths",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Continuous 16th note double bass stream",
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
                0.7,
                0.85,
                0.7,
                0.95,
                0.7,
                0.85,
                0.7,
                1,
                0.7,
                0.85,
                0.7,
                0.95,
                0.7,
                0.85,
                0.7
              ],
              "velocityProfile": [
                0.95,
                0.65,
                0.8,
                0.65,
                0.9,
                0.65,
                0.8,
                0.65,
                0.95,
                0.65,
                0.8,
                0.65,
                0.9,
                0.65,
                0.8,
                0.65
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "metal-blast-beat-variant-tremolo-picking",
              "parentPatternId": "metal-blast-beat",
              "name": "Tremolo Picking",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast continuous picking with dynamic shaping",
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
                0.6,
                0.7,
                0.6,
                0.9,
                0.6,
                0.7,
                0.6,
                0.95,
                0.6,
                0.7,
                0.6,
                0.9,
                0.6,
                0.7,
                0.65
              ],
              "velocityProfile": [
                0.95,
                0.55,
                0.65,
                0.55,
                0.85,
                0.55,
                0.65,
                0.55,
                0.9,
                0.55,
                0.65,
                0.55,
                0.85,
                0.55,
                0.65,
                0.6
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "metal-blast-beat-variant-sweep-picking-solo",
              "parentPatternId": "metal-blast-beat",
              "name": "Sweep Picking Solo",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fluid high-speed arpeggiated lead guitar run.",
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
                0.65,
                0.7,
                0.75,
                0.8,
                0.85,
                0.9,
                0.95,
                1,
                0.9,
                0.85,
                0.8,
                0.75,
                0.7,
                0.65,
                0.6
              ],
              "velocityProfile": [
                0.95,
                0.6,
                0.65,
                0.7,
                0.75,
                0.8,
                0.85,
                0.9,
                0.95,
                0.85,
                0.8,
                0.75,
                0.7,
                0.65,
                0.6,
                0.55
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 5,
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
