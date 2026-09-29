import type { MusicalPattern } from '../../../schema';

export const SWING_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "swing-walking-bass",
          "worldId": "swing",
          "styleIds": ["swing-big-band"],
          "name": "Walking Bass",
          "family": "Bass",
          "category": "break",
          "transitionType": "fill",
          "description": "Quarter note acoustic walking bass line",
          "tags": [
            "swing",
            "bass"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 4,
          "onsetGrid": [
            0,
            1,
            2,
            3
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.9,
            0.85
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
              "id": "swing-walking-bass-variant-la-pompe",
              "parentPatternId": "swing-walking-bass",
              "name": "La Pompe",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Gypsy jazz rhythm guitar with bass",
              "onsetGrid": [
                0,
                1,
                2,
                3
              ],
              "accentProfile": [
                0.8,
                1,
                0.8,
                1
              ],
              "velocityProfile": [
                0.75,
                0.95,
                0.75,
                0.95
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "swing-walking-bass-v-02",
              "parentPatternId": "swing-walking-bass",
              "name": "Walking Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                2,
                3
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                0.9099999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];
