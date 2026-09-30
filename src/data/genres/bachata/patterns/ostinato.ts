import type { MusicalPattern } from '../../../schema';

export const BACHATA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "bachata-requinto-derecho",
          "worldId": "bachata",
          "styleIds": ["latin-bachata"],
          "name": "Requinto Derecho (Verse Picking)",
          "family": "Bachata Requinto",
          "category": "ostinato",
          "description": "Crisp lead guitar arpeggiation with muted",
          "tags": [
            "bachata",
            "requinto",
            "guitar",
            "derecho",
            "dominican"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "lead",
            "harmony",
            "melodic-guitar"
          ],
    
          "approaches": ["phrase", "comping"],
          "instruments": [
            "guitar",
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.5,
            0.85,
            0.5,
            0.9,
            0.5,
            1,
            0.6
          ],
          "velocityProfile": [
            0.9,
            0.5,
            0.8,
            0.5,
            0.85,
            0.5,
            0.95,
            0.6
          ],
          "articulations": [
            "muted-thumb",
            "bright-pluck"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "derecho",
            "verse"
          ],
          "variants": [
            {
              "id": "bachata-requinto-majao-sync",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Requinto Majao (Chorus Drive)",
              "variationType": "syncopated",
              "probability": 0.6,
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                1,
                0.8,
                0.95,
                0.7,
                0.9,
                1
              ],
              "description": "Syncopated sync-pluck driving the energetic Majao"
            },
            {
              "id": "bachata-requinto-mambo-solo",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Requinto Mambo (Virtuosic Solo Breakdown)",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.6,
                0.7,
                0.6,
                0.9,
                0.8,
                0.6,
                1,
                0.6,
                0.7,
                0.6,
                0.9,
                1,
                0.7
              ],
              "description": "Rapid 16th-note scalar runs and bends"
            },
            {
              "id": "bachata-requinto-derecho-variant-bongo-martillo-g-ira-repique",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Bongo Martillo & Güira Repique",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Bongo alternates low thumb tones with sharper finger strikes.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.8,
                0.4,
                0.85,
                0.4,
                0.8,
                0.4,
                1,
                0.5
              ],
              "velocityProfile": [
                0.8,
                0.45,
                0.8,
                0.45,
                0.8,
                0.45,
                1,
                0.5
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "bachata-requinto-derecho-variant-bachata-mambo-solo",
              "parentPatternId": "bachata-requinto-derecho",
              "name": "Bachata Mambo Solo",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast, virtuosic requinto arpeggios fill the gaps between vocal phrases.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                1,
                0.75,
                0.9,
                0.75,
                0.95,
                0.75,
                0.9,
                0.8
              ],
              "velocityProfile": [
                0.95,
                0.7,
                0.85,
                0.7,
                0.9,
                0.7,
                0.85,
                0.75
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 0.7,
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "cumbia-bass-groove",
          "worldId": "bachata",
          "styleIds": ["latin-cumbia"],
          "name": "Cumbia Syncopated Bassline",
          "family": "Cumbia Bass",
          "category": "ostinato",
          "description": "Hypnotic, syncopated cumbia bass emphasizes the offbeats.",
          "tags": [
            "cumbia",
            "bass",
            "syncopated",
            "colombia"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "bass",
            "piano"
          ],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.9,
            1,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.85,
            1,
            0.75,
            0.9
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "cumbia-bass-villera-synth",
              "parentPatternId": "cumbia-bass-groove",
              "name": "Cumbia Villera Punchy Synth Bass",
              "variationType": "dense",
              "probability": 0.45,
              "onsetGrid": [
                0,
                4,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                1,
                0.7,
                0.95,
                0.8,
                0.7,
                1
              ],
              "description": "Added 8th note pump for modern"
            },
            {
              "id": "cumbia-bass-groove-v-02",
              "parentPatternId": "cumbia-bass-groove",
              "name": "Cumbia Syncopated Bassline — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.86,
                1,
                0.76,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.98,
                0.73,
                0.96
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
          "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "bachata"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 1,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "bachata-anchor-12",
          "worldId": "bachata",
          "styleIds": ["latin-bachata"],
          "name": "Mambo Anchor",
          "family": "Mambo",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "bachata",
            "mambo",
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
            4,
            6,
            9,
            10,
            13
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
            "accented",
            "ghost-aware"
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
              "id": "bachata-anchor-12-v-01",
              "parentPatternId": "bachata-anchor-12",
              "name": "Mambo Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                13
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
              "id": "bachata-anchor-12-v-02",
              "parentPatternId": "bachata-anchor-12",
              "name": "Mambo Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                9,
                10,
                13
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
          "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "bachata",
            "mambo"
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
