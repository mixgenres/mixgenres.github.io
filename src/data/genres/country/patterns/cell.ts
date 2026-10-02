import type { MusicalPattern } from '../../../schema';

export const COUNTRY_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "country-pedal-steel-swell",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Pedal Steel Volume Swell",
          "family": "Texture",
          "category": "cell",
          "description": "Crying pedal-steel volume-pedal swells fading in",
          "tags": [
            "country",
            "pedal-steel",
            "texture"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            5
          ],
          "accentProfile": [
            0.75,
            1
          ],
          "velocityProfile": [
            0.7,
            0.95
          ],
          "supportedEnergy": [1, 2],
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
              "id": "country-pedal-steel-swell-v-01-safe",
              "parentPatternId": "country-pedal-steel-swell",
              "name": "Pedal Steel Volume Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "country-pedal-steel-swell-v-02-safe",
              "parentPatternId": "country-pedal-steel-swell",
              "name": "Pedal Steel Volume Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
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
