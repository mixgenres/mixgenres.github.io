import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "flamenco-picado",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tangos-tientos"],
          "name": "Picado Scale",
          "family": "Guitar",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Rapid rest-stroke i-m finger scale passages.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "guitar"
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
            7
          ],
          "accentProfile": [
            1,
            0.7,
            0.85,
            0.7,
            0.95,
            0.7,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.8,
            0.7
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "flamenco-picado-variant-flamenco-tremolo",
              "parentPatternId": "flamenco-picado",
              "name": "Flamenco Tremolo",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "5-note tremolo pattern (p-i-a-m-i) with thumb",
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
                9
              ],
              "accentProfile": [
                1,
                0.6,
                0.65,
                0.7,
                0.65,
                0.95,
                0.6,
                0.65,
                0.7,
                0.65
              ],
              "velocityProfile": [
                0.95,
                0.55,
                0.6,
                0.65,
                0.6,
                0.9,
                0.55,
                0.6,
                0.65,
                0.6
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "flamenco-picado-v-02",
              "parentPatternId": "flamenco-picado",
              "name": "Picado Scale — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.8099999999999999,
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999,
                0.8099999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.63,
                0.78,
                0.71,
                0.88,
                0.63,
                0.8600000000000001,
                0.6799999999999999
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
          "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "flamenco"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "flam-remate-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-remate", "flamenco-remate"],
          "name": "12-Beat Remate",
          "family": "Cadential Punctuation",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Ensemble remate: synchronized accent and release",
          "tags": [
            "remate",
            "corte",
            "compas"
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
            "percussion",
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
          "instruments": [
            "guitar",
            "palmas",
            "cajon"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            9,
            10,
            11,
            0,
            2
          ],
          "accentProfile": [
            0.7,
            0.95,
            1,
            0.85,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.97,
            0.98,
            0.95,
            0.96
          ],
          "syncopationRating": 0.4,
          "articulations": [
            "golpe/corte"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "ending"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-remate"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.99,
          "enabled": true
        }
];
