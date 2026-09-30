import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "tango-arrastre",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Arrastre (Chromatic Drag Lead-in)",
          "family": "Ornamental Transitions",
          "category": "phrasePattern",
          "description": "Upbeat glissando / drag that scoops",
          "tags": [
            "arrastre",
            "drag",
            "bass",
            "bandoneon",
            "transition"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "bass",
            "piano",
            "bandoneon",
            "fill"
          ],
    
          "approaches": ["walking", "comping"],
          "instruments": [
            "bass",
            "piano",
            "bandoneon",
            "strings"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            13,
            14,
            15,
            0
          ],
          "accentProfile": [
            0.4,
            0.6,
            0.8,
            1
          ],
          "velocityProfile": [
            0.45,
            0.65,
            0.85,
            1
          ],
          "articulations": [
            "glissando",
            "accented-arrival"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "tango-arrastre-extended",
              "parentPatternId": "tango-arrastre",
              "name": "Extended Bass Arrastre Sweep",
              "variationType": "ornamented",
              "probability": 0.6,
              "onsetGrid": [
                11,
                13,
                14,
                15,
                0
              ],
              "accentProfile": [
                0.3,
                0.5,
                0.7,
                0.85,
                1
              ],
              "description": "Long sweep from contrabajo bottom C"
            },
            {
              "id": "tango-arrastre-v-02",
              "parentPatternId": "tango-arrastre",
              "name": "Arrastre (Chromatic Drag Lead-in) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                13,
                14,
                15,
                0
              ],
              "accentProfile": [
                0.4,
                0.6799999999999999,
                0.76,
                1
              ],
              "velocityProfile": [
                0.51,
                0.63,
                0.83,
                1
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
    
    },
  {
          "id": "tango-fraseo-bandoneon",
          "worldId": "tango",
          "styleIds": ["tango-tango-tradicional"],
          "name": "Fraseo y Rubato (Bandoneón Lead)",
          "family": "Lyrical Lead Phrases",
          "category": "phrasePattern",
          "description": "Expressive lyrical phrasing with flexible rubato,",
          "tags": [
            "lead",
            "melody",
            "bandoneon",
            "fraseo",
            "rubato"
          ],
          "scopes": [
            "phrase",
            "region",
            "track"
          ],
          "roles": [
            "melody",
            "lead",
            "counterline"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "bandoneon",
            "sax",
            "violin",
            "trumpet",
            "flute"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            16,
            20,
            24,
            28
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.9,
            0.7,
            0.85,
            0.9,
            0.7,
            0.8,
            0.6
          ],
          "velocityProfile": [
            0.75,
            0.6,
            0.9,
            0.7,
            0.8,
            0.85,
            0.65,
            0.75,
            0.6
          ],
          "articulations": [
            "espressivo",
            "portamento"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "solo",
            "development"
          ],
          "variants": [
            {
              "id": "tango-fraseo-dramatic-cut",
              "parentPatternId": "tango-fraseo-bandoneon",
              "name": "Fraseo with Corte (Sudden Stop)",
              "variationType": "cadence",
              "probability": 0.45,
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                16,
                20,
                22
              ],
              "accentProfile": [
                0.8,
                0.6,
                0.9,
                0.7,
                0.85,
                1,
                0.8,
                1
              ],
              "description": "A sudden dynamic silence, or corte, marks the end of the phrase."
            },
            {
              "id": "tango-fraseo-bandoneon-v-02",
              "parentPatternId": "tango-fraseo-bandoneon",
              "name": "Fraseo y Rubato (Bandoneón Lead) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                16,
                20,
                24,
                28
              ],
              "accentProfile": [
                0.76,
                0.6799999999999999,
                0.86,
                0.7799999999999999,
                0.8099999999999999,
                0.98,
                0.6599999999999999,
                0.88,
                0.5599999999999999
              ],
              "velocityProfile": [
                0.81,
                0.58,
                0.88,
                0.76,
                0.78,
                0.83,
                0.71,
                0.73,
                0.58
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
                2
              ]
            }
          ],
    
          "difficulty": 3,
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
    
    },
  {
          "id": "tango-phrase-12",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Marcato Phrase",
          "family": "Marcato",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "tango",
            "marcato",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bandoneon"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "bandoneon"
          ],
          "compatibleRoles": [
            "bandoneon"
          ],
          "compatibleInstruments": [
            "bandoneon"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.5714285714285714,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-phrase-12-v-01",
              "parentPatternId": "tango-phrase-12",
              "name": "Marcato Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                8,
                12,
                15
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "tango-phrase-12-v-02",
              "parentPatternId": "tango-phrase-12",
              "name": "Marcato Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "marcato"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];
