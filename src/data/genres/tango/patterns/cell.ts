import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "tango-sincopa",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Síncopa a Tierra (Standard Syncopation)",
          "family": "Syncopated Figures",
          "category": "cell",
          "description": "Off-beat accent landing on the \"and\"",
          "tags": [
            "sincopa",
            "syncopation",
            "tango",
            "accent"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "harmony",
            "bass",
            "piano",
            "bandoneon",
            "counterline"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": [
            "piano",
            "bandoneon",
            "guitar",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.6,
            1,
            0.85,
            0.8,
            0.2
          ],
          "velocityProfile": [
            0.65,
            0.95,
            0.8,
            0.75,
            0.25
          ],
          "articulations": [
            "staccato-accent"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "tango-sincopa-volcada",
              "parentPatternId": "tango-sincopa",
              "name": "Síncopa con Remate",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                2,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.5,
                1,
                0.7,
                0.85,
                0.9
              ],
              "description": "Síncopa concluding with an accented anticipation"
            },
            {
              "id": "tango-sincopa-v-02",
              "parentPatternId": "tango-sincopa",
              "name": "Síncopa a Tierra (Standard Syncopation) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                8,
                12
              ],
              "accentProfile": [
                0.5599999999999999,
                1,
                0.8099999999999999,
                0.88
              ],
              "velocityProfile": [
                0.71,
                0.9299999999999999,
                0.78,
                0.81
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "tango-sincopa-percussiva",
              "parentPatternId": "tango-sincopa",
              "name": "Síncopa Percussiva (Chicharra y Golpe)",
              "variationType": "syncopated",
              "probability": 0.45,
              "description": "Percussive syncopation with violin chicharra scrape on weak offbeat and bass golpe on strong syncopation",
              "onsetGrid": [
                0,
                2,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.6,
                1,
                0.75,
                0.9,
                0.95
              ],
              "hitGrid": [
                "arrastre",
                "golpe",
                "chicharra",
                "cluster",
                "strappata"
              ],
              "articulation": "chicharra"
            }
          ],
    
          "difficulty": 1,
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
          "anticipationOffset": 1,
    
        }
];
