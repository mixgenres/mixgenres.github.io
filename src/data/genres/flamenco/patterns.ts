import type { MusicalPattern, GenreWorld } from '../../schema';

export const FLAMENCO_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "flam-rumba-bass",
          "worldId": "flamenco",
          "styleIds": ["flamenco-rumba", "flamenco-rumba"],
          "name": "Rumba Flamenca Bass Propulsion",
          "family": "Rumba Groove",
          "category": "bass",
          "description": "Rumba flamenca bass motion follows the",
          "tags": [
            "rumba",
            "bass",
            "pickup",
            "abanico"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass",
            "upright-bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.55,
            0.85,
            0.8,
            0.65,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.96,
            0.89,
            0.95,
            0.94,
            0.91,
            0.96,
            0.93
          ],
          "syncopationRating": 0.14,
          "articulations": [
            "syncopated"
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
            "flamenco-rumba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.94,
          "enabled": true
        }
];

export const FLAMENCO_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "flamenco-bulerias-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style"],
          "name": "Bulerias Palmas",
          "family": "Palmas",
          "category": "break",
          "transitionType": "fill",
          "description": "12-beat compás cycle handclaps with classic",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            7,
            8,
            10
          ],
          "accentProfile": [
            1,
            0.85,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.85,
            0.9,
            0.95
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
              "id": "flamenco-bulerias-palmas-v-01",
              "parentPatternId": "flamenco-bulerias-palmas",
              "name": "Bulerias Palmas — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                7,
                8
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "flamenco-bulerias-palmas-v-02",
              "parentPatternId": "flamenco-bulerias-palmas",
              "name": "Bulerias Palmas — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                7,
                8,
                10
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.86,
                1,
                0.96
              ],
              "velocityProfile": [
                1,
                0.78,
                0.83,
                0.96,
                0.9299999999999999
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
        }
];

export const FLAMENCO_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "flamenco-picado",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tangos-style"],
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
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": [],
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

export const FLAMENCO_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "flamenco-golpe",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Golpe (Tap)",
          "family": "Percussion",
          "category": "fill",
          "transitionType": "fill",
          "description": "Resonant finger taps on the tapador/guitar",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion",
            "guitar"
          ],
    
          "approaches": ["groove", "chop"],
          "instruments": [
            "percussion",
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12
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
              "id": "flamenco-golpe-v-01",
              "parentPatternId": "flamenco-golpe",
              "name": "Golpe (Tap) — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.85,
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.77,
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "flamenco-golpe-v-02",
              "parentPatternId": "flamenco-golpe",
              "name": "Golpe (Tap) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.86,
                1,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.9299999999999999,
                0.78,
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
        }
];

export const FLAMENCO_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "flamenco-cajon-rumba",
          "worldId": "flamenco",
          "styleIds": ["flamenco-rumba"],
          "name": "Cajon Rumba",
          "family": "Cajon",
          "category": "groove",
          "description": "Cajón rhythm for rumba flamenca with",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
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
            0.7,
            0.95,
            0.8,
            0.7,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.75,
            0.65,
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
              "id": "flamenco-cajon-rumba-v-01",
              "parentPatternId": "flamenco-cajon-rumba",
              "name": "Cajon Rumba — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.8999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.8200000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "flamenco-cajon-rumba-v-02",
              "parentPatternId": "flamenco-cajon-rumba",
              "name": "Cajon Rumba — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.88,
                0.6599999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.81,
                0.63,
                0.83
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 2,
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
          "id": "flamenco-comp-13",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Falseta Comping",
          "family": "Falseta",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "flamenco",
            "falseta",
            "comp",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "guitar"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            8
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-comp-13-v-01",
              "parentPatternId": "flamenco-comp-13",
              "name": "Falseta Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                5
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "flamenco-comp-13-v-02",
              "parentPatternId": "flamenco-comp-13",
              "name": "Falseta Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                8
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
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
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "falseta"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "flamenco-verse-15",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Llamada Verse Variation",
          "family": "Llamada",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "flamenco",
            "llamada",
            "verse",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
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
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-verse-15-v-01",
              "parentPatternId": "flamenco-verse-15",
              "name": "Llamada Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                7,
                10,
                15
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "flamenco-verse-15-v-02",
              "parentPatternId": "flamenco-verse-15",
              "name": "Llamada Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                5,
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
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
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
          "weight": 1,
          "enabled": true
        },
  {
          "id": "flam-buleria-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style", "flamenco-buleria-style"],
          "name": "Bulería Compás / Jerez Drive",
          "family": "Bulería Compás",
          "category": "groove",
          "description": "Fast 12-beat bulería framework with elastic",
          "tags": [
            "buleria",
            "compas",
            "contratiempo",
            "fin-de-fiesta"
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
            "palmas",
            "cajon"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            11,
            2,
            5,
            7,
            8,
            9,
            10
          ],
          "accentProfile": [
            1,
            0.9,
            0.75,
            1,
            0.55,
            0.92,
            0.55
          ],
          "velocityProfile": [
            0.98,
            0.96,
            0.93,
            0.98,
            0.89,
            0.96,
            0.89
          ],
          "syncopationRating": 0.57,
          "articulations": [
            "rasgueado",
            "golpe",
            "alzapua"
          ],
          "hitGrid": [
            "rasgueado",
            "golpe",
            "rasgueado",
            "rasgueado",
            "golpe",
            "rasgueado",
            "golpe"
          ],
          "supportedEnergy": [4, 5],
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
    
    
          "variants": [
            {
              "id": "flam-buleria-compas-corte",
              "parentPatternId": "flam-buleria-compas",
              "name": "Bulería Corte / Stop",
              "variationType": "cadence",
              "probability": 0.35,
              "description": "Quick corte before the next respuesta.",
              "onsetGrid": [
                8,
                9,
                10,
                11,
                2
              ],
              "accentProfile": [
                0.6,
                0.85,
                1,
                0.9,
                1
              ],
              "velocityProfile": [
                0.9,
                0.95,
                0.98,
                0.96,
                0.98
              ]
            }
          ],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-buleria-style"
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

export const FLAMENCO_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "flamenco-call-11",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Remate Response",
          "family": "Remate",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "flamenco",
            "remate",
            "call",
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
            1,
            3,
            7,
            8,
            11,
            13
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95
          ],
          "syncopationRating": 0.7142857142857143,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-call-11-v-01",
              "parentPatternId": "flamenco-call-11",
              "name": "Remate Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                7,
                11,
                13
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54,
                0.82
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
              "id": "flamenco-call-11-v-02",
              "parentPatternId": "flamenco-call-11",
              "name": "Remate Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
                11,
                13
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1
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
            },
            {
              "id": "flamenco-call-11-v-03",
              "parentPatternId": "flamenco-call-11",
              "name": "Remate Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
                11,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.57,
                0.95,
                0.62,
                0.8999999999999999,
                0.62,
                0.95,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "remate"
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
          "styleIds": ["flamenco-tangos-style"],
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
              "description": "Decisive closing golpe and silence on"
            },
            {
              "id": "flam-solea-12beat-v-02",
              "parentPatternId": "flam-solea-12beat",
              "name": "Soleá 12-Beat Compás Framework — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
              "description": "Keeps the rhythm intact but moves",
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
          "description": "A phrase-level rhythmic template that leaves",
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
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "styleIds": ["flamenco-seguiriya-style", "flamenco-seguiriya-style"],
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

export const FLAMENCO_WORLD_PATTERNS_PULSE: MusicalPattern[] = [
  {
          "id": "flam-escobilla-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-alegrias-style", "flamenco-alegrias-style"],
          "name": "Escobilla Footwork Pulse",
          "family": "Dance Footwork",
          "category": "pulse",
          "description": "Repeated footwork-support cell for the escobilla",
          "tags": [
            "escobilla",
            "alegrias",
            "zapateado"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "zapateado",
            "cajon"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.6,
            0.55,
            0.6,
            0.75,
            0.85,
            0.6,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.9,
            0.89,
            0.9,
            0.93,
            0.95,
            0.9,
            0.96,
            0.94
          ],
          "syncopationRating": 0.5,
          "articulations": [
            "taconeo"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "solo",
            "chorus"
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
          "difficulty": 3,
          "weight": 0.93,
          "enabled": true,
          "canCrossRole": true
        }
];

export const FLAMENCO_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "flam-alzapua-bass",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style"],
          "name": "Alzapúa Thumb Technique (Bass Driver)",
          "family": "Thumb Virtuosity",
          "category": "rolePattern",
          "description": "Iconic three-stroke thumb mechanic: down-stroke on",
          "tags": [
            "alzapua",
            "thumb",
            "bass",
            "guitar",
            "virtuoso"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "bass",
            "harmony",
            "counterline"
          ],
    
          "approaches": ["walking", "comping"],
          "instruments": [
            "guitar",
            "electric-guitar",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1.5,
            3,
            4,
            5.5,
            7
          ],
          "accentProfile": [
            0.95,
            0.4,
            0.85,
            0.95,
            0.4,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.4,
            0.85,
            0.95,
            0.4,
            0.85
          ],
          "articulations": [
            "alzapua",
            "golpe",
            "pulgar-apoyando"
          ],
          "hitGrid": [
            "alzapua",
            "alzapua",
            "golpe",
            "alzapua",
            "alzapua",
            "golpe"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "solo",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "flam-alzapua-syncopated",
              "parentPatternId": "flam-alzapua-bass",
              "name": "Alzapúa with Off-Beat Punch",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                15
              ],
              "accentProfile": [
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.85
              ],
              "description": "Polyrhythmic thumb grouping cutting across the"
            },
            {
              "id": "flam-alzapua-bass-v-02",
              "parentPatternId": "flam-alzapua-bass",
              "name": "Alzapúa Thumb Technique (Bass Driver) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                7,
                8,
                10,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.58,
                0.6599999999999999,
                1,
                0.46,
                0.7799999999999999,
                0.96,
                0.58,
                0.6599999999999999,
                0.98,
                0.46,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.48,
                0.6799999999999999,
                0.96,
                0.48,
                0.6799999999999999,
                1,
                0.48,
                0.6799999999999999,
                0.9099999999999999,
                0.48,
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
          "id": "flam-solea-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style", "flamenco-solea-style"],
          "name": "Soleá Palmas Contratiempo",
          "family": "Palmas",
          "category": "rolePattern",
          "description": "Cupped and clear hand-clap dialogue that",
          "tags": [
            "solea",
            "palmas",
            "contratiempo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            1,
            3,
            4,
            6,
            8,
            10
          ],
          "accentProfile": [
            0.35,
            0.7,
            0.45,
            0.68,
            0.5,
            0.7,
            0.5
          ],
          "velocityProfile": [
            0.85,
            0.92,
            0.87,
            0.92,
            0.88,
            0.92,
            0.88
          ],
          "syncopationRating": 0.29,
          "articulations": [
            "palmas-sordas/claras"
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
            "flamenco-solea-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.94,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-buleria-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style", "flamenco-buleria-style"],
          "name": "Bulería Palmas Contratiempo",
          "family": "Bulería Palmas",
          "category": "rolePattern",
          "description": "Fast clear/contratiempo palmas that articulate the",
          "tags": [
            "buleria",
            "palmas",
            "contratiempo",
            "jaleo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            7,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.5,
            0.8,
            0.55,
            0.8,
            1,
            0.55,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.88,
            0.94,
            0.89,
            0.94,
            0.98,
            0.89,
            0.94,
            0.97
          ],
          "syncopationRating": 0.62,
          "articulations": [
            "palmas-claras"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
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
            "flamenco-buleria-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.98,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-alzapua-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style", "flamenco-buleria-style"],
          "name": "Alzapúa over 12-Beat Compás",
          "family": "Thumb Technique",
          "category": "rolePattern",
          "description": "Thumb-driven bass/brush engine used as a",
          "tags": [
            "buleria",
            "alzapua",
            "pulgar"
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
            "harmony",
            "counterline"
          ],
    
          "approaches": ["walking", "comping"],
          "instruments": [
            "guitar"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            11,
            0,
            2,
            4,
            5,
            7,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.55,
            0.9,
            0.5,
            0.7,
            0.95,
            0.5,
            0.9,
            1
          ],
          "velocityProfile": [
            0.98,
            0.89,
            0.96,
            0.88,
            0.92,
            0.97,
            0.88,
            0.96,
            0.98
          ],
          "syncopationRating": 0.56,
          "articulations": [
            "alzapúa"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "solo",
            "chorus"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-buleria-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.96,
          "enabled": true
        },
  {
          "id": "flam-alegrias-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-alegrias-style", "flamenco-alegrias-style"],
          "name": "Alegrías Palmas",
          "family": "Cantiñas Palmas",
          "category": "rolePattern",
          "description": "Clear, buoyant palmas for Alegrías, brighter",
          "tags": [
            "alegrias",
            "palmas",
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
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            9,
            11
          ],
          "accentProfile": [
            0.45,
            0.8,
            0.45,
            0.7,
            0.95,
            0.75,
            0.95
          ],
          "velocityProfile": [
            0.87,
            0.94,
            0.87,
            0.92,
            0.97,
            0.93,
            0.97
          ],
          "syncopationRating": 0.57,
          "articulations": [
            "palmas-claras"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
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
          "weight": 0.95,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-seguiriya-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-seguiriya-style", "flamenco-seguiriya-style"],
          "name": "Seguiriya Sparse Palmas",
          "family": "Seguiriya Palmas",
          "category": "rolePattern",
          "description": "Restrained hand percussion for cante jondo:",
          "tags": [
            "seguiriya",
            "palmas",
            "jondo",
            "sparse"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            2,
            4,
            7,
            10
          ],
          "accentProfile": [
            0.7,
            0.8,
            0.85,
            1
          ],
          "velocityProfile": [
            0.92,
            0.94,
            0.95,
            0.98
          ],
          "syncopationRating": 0.25,
          "articulations": [
            "palmas-sordas"
          ],
          "supportedEnergy": [1, 2],
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
            "flamenco-seguiriya-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.94,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-tientos-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tientos-style", "flamenco-tientos-style"],
          "name": "Tientos Sparse Palmas",
          "family": "Tientos Palmas",
          "category": "rolePattern",
          "description": "Measured palmas supporting tientos without turning",
          "tags": [
            "tientos",
            "palmas",
            "sparse"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.7,
            0.85,
            0.75,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.95,
            0.93,
            0.96
          ],
          "syncopationRating": 0.0,
          "articulations": [
            "palmas-sordas"
          ],
          "supportedEnergy": [1, 2],
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
          "weight": 0.93,
          "enabled": true,
          "canCrossRole": true
        }
];

export const FLAMENCO_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "flamenco-intro-14",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Compás Intro",
          "family": "Compás",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "flamenco",
            "compas",
            "intro",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "texture"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "guitar"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-intro-14-v-01",
              "parentPatternId": "flamenco-intro-14",
              "name": "Compás Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                6,
                9,
                14
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "flamenco-intro-14-v-02",
              "parentPatternId": "flamenco-intro-14",
              "name": "Compás Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                4,
                6,
                9,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "flamenco-intro-14-v-03",
              "parentPatternId": "flamenco-intro-14",
              "name": "Compás Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                4,
                6,
                9,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "compas"
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
          "id": "flamenco-chorus-16",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Remate Chorus Lift",
          "family": "Remate",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer that increases",
          "tags": [
            "flamenco",
            "remate",
            "chorus",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "pulse",
            "harmony",
            "drums"
          ],
    
          "approaches": ["groove", "comping"],
          "instruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "harmony",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            13
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 1,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-chorus-16-v-01",
              "parentPatternId": "flamenco-chorus-16",
              "name": "Remate Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "flamenco-chorus-16-v-02",
              "parentPatternId": "flamenco-chorus-16",
              "name": "Remate Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                13
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "flamenco-chorus-16-v-03",
              "parentPatternId": "flamenco-chorus-16",
              "name": "Remate Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                0.72,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
                0.74,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "remate"
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
          "id": "flamenco-bridge-17",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Rasgueado Bridge",
          "family": "Rasgueado",
          "category": "sectionPattern",
          "description": "A contrasting bridge texture designed to",
          "tags": [
            "flamenco",
            "rasgueado",
            "bridge",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "lead"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": [
            "guitar",
            "sax"
          ],
          "compatibleRoles": [
            "harmony",
            "lead"
          ],
          "compatibleInstruments": [
            "guitar",
            "sax"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            6,
            8
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "bridge",
            "interlude",
            "development"
          ],
    
    
          "variants": [
            {
              "id": "flamenco-bridge-17-v-01",
              "parentPatternId": "flamenco-bridge-17",
              "name": "Rasgueado Bridge — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                6,
                8
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "flamenco-bridge-17-v-02",
              "parentPatternId": "flamenco-bridge-17",
              "name": "Rasgueado Bridge — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                6,
                8
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "flamenco-bridge-17-v-03",
              "parentPatternId": "flamenco-bridge-17",
              "name": "Rasgueado Bridge — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                2,
                4,
                6,
                8,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                -6,
                -6
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
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];

export const FLAMENCO_WORLD_PATTERNS_TRANSITION: MusicalPattern[] = [
  {
          "id": "flam-llamada-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style", "flamenco-solea-style"],
          "name": "Llamada into Cante",
          "family": "Cante/Guitar Interaction",
          "category": "transition",
          "transitionType": "fill",
          "description": "Short guitar-and-compás calling gesture that announces",
          "tags": [
            "llamada",
            "solea",
            "transition"
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
            "lead",
            "pulse"
          ],
    
          "approaches": ["comping", "phrase", "groove"],
          "instruments": [
            "guitar"
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
            0.55,
            0.75,
            1,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.89,
            0.93,
            0.98,
            0.96,
            0.93
          ],
          "syncopationRating": 0.4,
          "articulations": [
            "golpe + rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end",
            "start"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "flam-llamada-12-v2",
              "parentPatternId": "flam-llamada-12",
              "name": "Llamada with final golpe",
              "variationType": "transition",
              "probability": 0.4,
              "description": "Tightens the final two beats into",
              "onsetGrid": [
                9,
                10,
                11,
                0,
                1,
                2
              ],
              "accentProfile": [
                0.6,
                0.8,
                1,
                0.9,
                0.65,
                0.95
              ],
              "velocityProfile": [
                0.9,
                0.94,
                0.98,
                0.96,
                0.91,
                0.97
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
          "weight": 0.97,
          "enabled": true
        }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": FLAMENCO_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": FLAMENCO_WORLD_PATTERNS_PHRASEPATTERN,
  "rolePattern": FLAMENCO_WORLD_PATTERNS_ROLEPATTERN,
  "fill": FLAMENCO_WORLD_PATTERNS_FILL,
  "break": FLAMENCO_WORLD_PATTERNS_BREAK,
  "cadence": FLAMENCO_WORLD_PATTERNS_CADENCE,
  "groove": FLAMENCO_WORLD_PATTERNS_GROOVE,
  "interactionPattern": FLAMENCO_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": FLAMENCO_WORLD_PATTERNS_SECTIONPATTERN,
  "transition": FLAMENCO_WORLD_PATTERNS_TRANSITION,
  "pulse": FLAMENCO_WORLD_PATTERNS_PULSE,
  "bass": FLAMENCO_WORLD_PATTERNS_BASS,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"phrasePattern","index":0},{"category":"rolePattern","index":0},{"category":"phrasePattern","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"phrasePattern","index":2},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":1},{"category":"sectionPattern","index":0},{"category":"groove","index":2},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"ostinato","index":3},{"category":"rolePattern","index":1},{"category":"transition","index":0},{"category":"cadence","index":1},{"category":"groove","index":3},{"category":"rolePattern","index":2},{"category":"rolePattern","index":3},{"category":"ostinato","index":4},{"category":"rolePattern","index":4},{"category":"pulse","index":0},{"category":"phrasePattern","index":3},{"category":"rolePattern","index":5},{"category":"ostinato","index":5},{"category":"ostinato","index":6},{"category":"rolePattern","index":6},{"category":"bass","index":0},{"category":"ostinato","index":7}];

export const FLAMENCO_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
