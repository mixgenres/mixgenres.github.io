import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "country-boom-chuck",
          "worldId": "country",
          "styleIds": ["country-honky-tonk", "country-neotraditional"],
          "name": "Boom-Chuck",
          "family": "Rhythm",
          "category": "fill",
          "transitionType": "fill",
          "description": "Alternating root/fifth bass and upbeat chord",
          "tags": [
            "country",
            "honky-tonk"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar",
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "guitar",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.82,
            0.94,
            0.84
          ],
          "velocityProfile": [
            0.95,
            0.78,
            0.9,
            0.8
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
              "id": "country-boom-chuck-variant-bluegrass-2-4",
              "parentPatternId": "country-boom-chuck",
              "name": "Bluegrass 2/4",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast 2/4 cut-time rhythm with high-speed",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                1,
                0.88,
                0.96,
                0.88
              ],
              "velocityProfile": [
                0.95,
                0.84,
                0.92,
                0.84
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "country-boom-chuck-variant-country-pop-rock",
              "parentPatternId": "country-boom-chuck",
              "name": "Country Pop Rock",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Straight 8ths rock backbeat for contemporary",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.9,
                1,
                0.85,
                1
              ],
              "velocityProfile": [
                0.85,
                0.95,
                0.8,
                0.95
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 1,
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
