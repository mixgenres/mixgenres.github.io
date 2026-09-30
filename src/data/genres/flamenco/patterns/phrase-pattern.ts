import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "flam-solea-12beat",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Soleá 12-Beat Compás Framework",
          "family": "12-Beat Metrical Cycles",
          "category": "phrasePattern",
          "description": "The foundation of cante jondo, counted",
          "tags": [
            "solea",
            "12beat",
            "compas",
            "deep",
            "jondo"
          ],
          "scopes": [
            "phrase",
            "region",
            "track"
          ],
          "roles": [
            "melody",
            "lead",
            "flute"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "flute",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            2,
            5,
            7,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            1,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.9,
            0.95,
            0.8
          ],
          "articulations": [
            "alzapua",
            "palmas-sordas"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "solo",
            "development"
          ],
          "variants": [
            {
              "id": "flam-solea-cierre",
              "parentPatternId": "flam-solea-12beat",
              "name": "Soleá Cierre (Formal Cadence on 10)",
              "variationType": "cadence",
              "probability": 0.6,
              "onsetGrid": [
                2,
                5,
                7,
                8,
                9
              ],
              "accentProfile": [
                0.8,
                0.8,
                0.9,
                0.95,
                1
              ],
              "description": "A decisive closing golpe lands before the silence."
            },
            {
              "id": "flam-solea-12beat-v-02",
              "parentPatternId": "flam-solea-12beat",
              "name": "Soleá 12-Beat Compás Framework — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                7,
                9,
                11
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                1,
                0.76
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                1,
                0.78
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 0.7,
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
    
    },
  {
          "id": "flam-falseta-melodic",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Falseta Melodic Development",
          "family": "Solo Falsetas",
          "category": "phrasePattern",
          "description": "Self-contained lyric guitar or instrumental solo",
          "tags": [
            "falseta",
            "picado",
            "tremolo",
            "melody",
            "solo"
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
            "guitar",
            "flute",
            "sax",
            "violin"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            12,
            14,
            16,
            19,
            22,
            24,
            28,
            30
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.8,
            0.95,
            0.7,
            0.8,
            0.9,
            0.6,
            0.85,
            1,
            0.7,
            0.9
          ],
          "velocityProfile": [
            0.85,
            0.6,
            0.75,
            0.9,
            0.7,
            0.75,
            0.85,
            0.6,
            0.8,
            0.95,
            0.7,
            0.85
          ],
          "articulations": [
            "picado",
            "ligado",
            "tremolo"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "intro",
            "solo",
            "falseta",
            "development"
          ],
          "variants": [
            {
              "id": "flam-falseta-tremolo-swell",
              "parentPatternId": "flam-falseta-melodic",
              "name": "4-Note Flamenco Tremolo Swell",
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
                0.4,
                0.4,
                0.4,
                0.9,
                0.4,
                0.4,
                0.4,
                0.95,
                0.4,
                0.4,
                0.4,
                1,
                0.4,
                0.4,
                0.4
              ],
              "description": "Thumb bass note followed by p-i-a-m-i"
            },
            {
              "id": "flam-falseta-melodic-v-02",
              "parentPatternId": "flam-falseta-melodic",
              "name": "Falseta Melodic Development — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                12,
                14,
                16,
                19,
                22,
                24,
                28,
                30
              ],
              "accentProfile": [
                0.86,
                0.6799999999999999,
                0.76,
                1,
                0.6599999999999999,
                0.88,
                0.86,
                0.6799999999999999,
                0.8099999999999999,
                1,
                0.6599999999999999,
                0.98
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.58,
                0.73,
                0.96,
                0.6799999999999999,
                0.73,
                0.9099999999999999,
                0.58,
                0.78,
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
    
    },
  {
          "id": "flamenco-phrase-10",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Llamada Phrase",
          "family": "Llamada",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "flamenco",
            "llamada",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "flute"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "flute"
          ],
          "compatibleRoles": [
            "flute"
          ],
          "compatibleInstruments": [
            "flute"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            6,
            7,
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
          "syncopationRating": 0.7142857142857143,
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
              "id": "flamenco-phrase-10-v-01",
              "parentPatternId": "flamenco-phrase-10",
              "name": "Llamada Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                7,
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
              "id": "flamenco-phrase-10-v-02",
              "parentPatternId": "flamenco-phrase-10",
              "name": "Llamada Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "llamada"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "flam-seguiriya-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-seguiriya-style"],
          "name": "Seguiriya 2+2+3+3+2",
          "family": "Seguiriya Compás",
          "category": "phrasePattern",
          "description": "Seguiriya's asymmetric 2+2+3+3+2 grouping, deliberately unlike",
          "tags": [
            "seguiriya",
            "2+2+3+3+2",
            "jondo",
            "tension"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "percussion",
            "harmony"
          ],
    
          "approaches": ["groove", "comping"],
          "instruments": [
            "guitar",
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            4,
            7,
            10
          ],
          "accentProfile": [
            1,
            0.82,
            1,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.98,
            0.94,
            0.98,
            0.97,
            0.96
          ],
          "syncopationRating": 0.2,
          "articulations": [
            "golpe + rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "solo",
            "ending"
          ],
    
    
          "variants": [
            {
              "id": "flam-seguiriya-compas-corte",
              "parentPatternId": "flam-seguiriya-compas",
              "name": "Seguiriya Cierre",
              "variationType": "cadence",
              "probability": 0.4,
              "description": "Compressed closing gesture with dramatic space",
              "onsetGrid": [
                0,
                2,
                4,
                7,
                9,
                10
              ],
              "accentProfile": [
                1,
                0.8,
                0.95,
                0.9,
                0.65,
                1
              ],
              "velocityProfile": [
                0.98,
                0.94,
                0.97,
                0.96,
                0.91,
                0.98
              ]
            }
          ],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-seguiriya-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.99,
          "enabled": true
        }
];
