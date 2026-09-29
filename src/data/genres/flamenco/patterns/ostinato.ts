import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "flam-abanico-strum",
          "worldId": "flamenco",
          "styleIds": ["flamenco-rumba"],
          "name": "Abanico Fan Strum (Rumba)",
          "family": "Rasgueado Strumming",
          "category": "ostinato",
          "description": "Continuous triplets and fan strums utilizing",
          "tags": [
            "guitar",
            "abanico",
            "rasgueado",
            "rumba",
            "golpe"
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
            "rhythm-guitar",
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
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
            0.9,
            0.5,
            0.95,
            0.4,
            0.9,
            0.5,
            1,
            0.4
          ],
          "velocityProfile": [
            0.85,
            0.5,
            0.9,
            0.45,
            0.85,
            0.5,
            0.95,
            0.45
          ],
          "articulations": [
            "abanico-fan",
            "golpe-tap"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "flam-abanico-syncopated",
              "parentPatternId": "flam-abanico-strum",
              "name": "Abanico with 16th Golpe Accent",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                1,
                2,
                4,
                6,
                8,
                9,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.9,
                0.3,
                0.5,
                0.95,
                0.4,
                0.9,
                0.3,
                0.5,
                1,
                0.4
              ],
              "description": "Rapid rasgueado triplet lead-in to beat"
            },
            {
              "id": "flam-abanico-strum-variant-caj-n-palmas-interlocking-groove",
              "parentPatternId": "flam-abanico-strum",
              "name": "Cajón & Palmas Interlocking Groove",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Deep bass box thump on beats",
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
                0.4,
                1,
                0.45,
                0.9,
                0.4,
                1,
                0.5
              ],
              "velocityProfile": [
                0.9,
                0.4,
                0.95,
                0.45,
                0.85,
                0.4,
                0.95,
                0.5
              ],
              "articulation": "cajon-grave, cajon-agudo, palmas-claras",
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "flam-abanico-strum-variant-rumba-strum",
              "parentPatternId": "flam-abanico-strum",
              "name": "Rumba Strum",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Continuous Catalan rumba strumming with rhythmic",
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
                0.65,
                0.9,
                0.6,
                0.95,
                0.65,
                0.9,
                0.7
              ],
              "velocityProfile": [
                0.95,
                0.6,
                0.85,
                0.55,
                0.9,
                0.6,
                0.85,
                0.65
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 3,
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
          "id": "flam-tangos-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tangos-tientos"],
          "name": "Tangos de Triana (Binary Compás)",
          "family": "Tangos Rhythm",
          "category": "ostinato",
          "description": "Iconic 4/4 flamenco pulse where beat",
          "tags": [
            "tangos",
            "triana",
            "compas",
            "palmas",
            "cajon"
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
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "hand-percussion",
            "percussion"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.9,
            1,
            0.6
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.95,
            0.6
          ],
          "articulations": [
            "rasgueado",
            "palmas-fuertes"
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
              "id": "flam-tangos-with-remate",
              "parentPatternId": "flam-tangos-compas",
              "name": "Tangos Compás with Remate Hit",
              "variationType": "cadence",
              "probability": 0.45,
              "onsetGrid": [
                4,
                8,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.9,
                0.85,
                1,
                0.6,
                0.8,
                0.95
              ],
              "description": "Ending cadence with rapid 16th note"
            },
            {
              "id": "flam-tangos-compas-v-02",
              "parentPatternId": "flam-tangos-compas",
              "name": "Tangos de Triana (Binary Compás) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                4,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.98,
                0.96,
                0.6799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.83,
                0.9299999999999999,
                0.6599999999999999
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
          "id": "flamenco-anchor-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Rasgueado Anchor",
          "family": "Rasgueado",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "flamenco",
            "rasgueado",
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
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            2,
            4,
            8,
            9,
            12,
            14
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
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-anchor-12-v-01",
              "parentPatternId": "flamenco-anchor-12",
              "name": "Rasgueado Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                4,
                8,
                12,
                14
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
              "id": "flamenco-anchor-12-v-02",
              "parentPatternId": "flamenco-anchor-12",
              "name": "Rasgueado Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                4,
                8,
                9,
                12,
                14
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
            "rasgueado"
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
          "id": "flam-solea-guitar-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style", "flamenco-solea-style"],
          "name": "Soleá Guitar Compás",
          "family": "12-beat compás",
          "category": "ostinato",
          "description": "Soleá accompaniment skeleton: weight on 12,",
          "tags": [
            "solea",
            "compas",
            "cierre",
            "rasgueado"
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
            "rhythm-guitar",
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            11,
            2,
            5,
            7,
            9
          ],
          "accentProfile": [
            1,
            0.82,
            0.9,
            1,
            0.92
          ],
          "velocityProfile": [
            0.98,
            0.94,
            0.96,
            0.98,
            0.96
          ],
          "syncopationRating": 0.8,
          "articulations": [
            "rasgueado"
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
            "solo"
          ],
    
    
          "variants": [
            {
              "id": "flam-solea-guitar-cierre",
              "parentPatternId": "flam-solea-guitar-compas",
              "name": "Soleá Cierre at 10",
              "variationType": "cadence",
              "probability": 0.45,
              "description": "Land on 10, then breathe into",
              "onsetGrid": [
                11,
                2,
                5,
                7,
                9,
                10,
                11
              ],
              "accentProfile": [
                1,
                0.85,
                0.9,
                1,
                0.98,
                0.55,
                1
              ],
              "velocityProfile": [
                0.98,
                0.95,
                0.96,
                0.98,
                0.98,
                0.89,
                0.98
              ]
            }
          ],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-solea-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.98,
          "enabled": true
        },
  {
          "id": "flam-alegrias-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-alegrias-style", "flamenco-alegrias-style"],
          "name": "Alegrías / Cantiñas Bright Compás",
          "family": "Cantiñas Compás",
          "category": "ostinato",
          "description": "Bright 12-beat cantiñas framework: the soleá-family",
          "tags": [
            "alegrias",
            "cantinas",
            "compas",
            "cadiz"
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
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            11,
            2,
            5,
            7,
            9
          ],
          "accentProfile": [
            1,
            0.75,
            0.78,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.98,
            0.93,
            0.94,
            0.97,
            0.96
          ],
          "syncopationRating": 0.8,
          "articulations": [
            "rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-alegrias-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.98,
          "enabled": true
        },
  {
          "id": "flam-tangos-guitar",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tangos-style", "flamenco-tangos-style"],
          "name": "Tangos Flamencos Guitar Compás",
          "family": "Binary Compás",
          "category": "ostinato",
          "description": "Flamenco tangos guitar pulse: beat 1",
          "tags": [
            "tangos",
            "binary",
            "compas",
            "triana"
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
            "rhythm-guitar",
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.55,
            0.9,
            0.7,
            1,
            0.65,
            0.92,
            0.8
          ],
          "velocityProfile": [
            0.89,
            0.96,
            0.92,
            0.98,
            0.91,
            0.96,
            0.94
          ],
          "syncopationRating": 0.0,
          "articulations": [
            "rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-tangos-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.98,
          "enabled": true
        },
  {
          "id": "flam-tientos-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tientos-style", "flamenco-tientos-style"],
          "name": "Tientos Slow Binary Compás",
          "family": "Tientos Compás",
          "category": "ostinato",
          "description": "Slower, heavier binary accompaniment related to",
          "tags": [
            "tientos",
            "slow",
            "binary",
            "jondo"
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
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.75,
            0.95,
            0.8,
            1,
            0.85,
            0.9
          ],
          "velocityProfile": [
            0.93,
            0.97,
            0.94,
            0.98,
            0.95,
            0.96
          ],
          "syncopationRating": 0.0,
          "articulations": [
            "rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-tientos-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.98,
          "enabled": true
        },
  {
          "id": "flam-fandango-3",
          "worldId": "flamenco",
          "styleIds": ["flamenco-fandango-style", "flamenco-fandango-style"],
          "name": "Fandango 3/4 Guitar Cycle",
          "family": "Fandango Ternary",
          "category": "ostinato",
          "description": "Ternary fandango accompaniment: four three-beat phrases",
          "tags": [
            "fandango",
            "3/4",
            "huelva",
            "ternary"
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
            "pulse"
          ],
    
          "approaches": ["comping", "groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            4,
            8
          ],
          "accentProfile": [
            1,
            0.65,
            0.85
          ],
          "velocityProfile": [
            0.98,
            0.91,
            0.95
          ],
          "syncopationRating": 0.0,
          "articulations": [
            "rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-fandango-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];
