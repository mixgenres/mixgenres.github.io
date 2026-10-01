import type { GenreWorld, MusicalPattern } from '../../schema';


const CUMBIA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "cu-cumbia-bass",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Cumbia bass anticipation",
          "family": "Cumbia Bass",
          "category": "ostinato",
          "description": "A short-long bass anticipation leaves the downbeat open.",
          "tags": [
            "cumbia",
            "bass",
            "pulse"
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
            "acoustic-bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            7,
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            1,
            0.72
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.92,
            0.62
          ],
          "syncopationRating": 0.45,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "short"
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
    
    
    
          "variants": [
            {
              "id": "cu-cumbia-bass-v-sparse",
              "parentPatternId": "cu-cumbia-bass",
              "name": "Cumbia Bass Pulse — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "cu-cumbia-bass-v-shift",
              "parentPatternId": "cu-cumbia-bass",
              "name": "Cumbia Bass Pulse — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "cumbia",
            "bass",
            "pulse"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "cu-guacharaca",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Guacharaca scraper pulse",
          "family": "Cumbia Scrapers",
          "category": "ostinato",
          "description": "Continuous scraper motion with accented downstrokes;",
          "tags": [
            "guacharaca",
            "scraper",
            "cumbia"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guacharaca"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            4,
            6,
            7,
            9,
            10,
            12,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7,
            0.82,
            0.62,
            1,
            0.72,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84,
            0.64,
            0.78,
            0.58,
            0.92,
            0.62,
            0.86
          ],
          "syncopationRating": 0.55,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "scrape"
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
    
    
    
          "variants": [
            {
              "id": "cu-guacharaca-v-sparse",
              "parentPatternId": "cu-guacharaca",
              "name": "Guacharaca Scrape — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "cu-guacharaca-v-shift",
              "parentPatternId": "cu-guacharaca",
              "name": "Guacharaca Scrape — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
                0.7,
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "guacharaca",
            "scraper",
            "cumbia"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "cu-chicha-guitar",
          "worldId": "cumbia",
          "styleIds": ["cumbia-chicha"],
          "name": "Chicha Tremolo Guitar",
          "family": "Chicha Guitar",
          "category": "ostinato",
          "description": "Fast tremolo-picked pentatonic melody that sits",
          "tags": [
            "chicha",
            "tremolo",
            "andino"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "melody"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "electric-guitar",
            "guitar"
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
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7,
            0.82,
            0.62
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84,
            0.64,
            0.78,
            0.58
          ],
          "syncopationRating": 0.62,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "tremolo"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "cu-chicha-guitar-v-sparse",
              "parentPatternId": "cu-chicha-guitar",
              "name": "Chicha Tremolo Guitar — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "cu-chicha-guitar-v-shift",
              "parentPatternId": "cu-chicha-guitar",
              "name": "Chicha Tremolo Guitar — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
                0.7,
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "chicha",
            "tremolo",
            "andino"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "cu-08-guacharaca-scrape",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Guacharaca reverse accent cycle",
          "family": "Colombian Cumbia",
          "category": "ostinato",
          "description": "A denser guacharaca variant with displaced",
          "tags": [
            "guacharaca",
            "scrape"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "guacharaca"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            9,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.55,
            0.65,
            0.5,
            0.68,
            0.56,
            0.66,
            0.52,
            0.72,
            0.55,
            0.65
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "guacharaca",
            " scrape"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "guacharaca",
            "scrape"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "cu-10-chicha-tremolo-figure",
          "worldId": "cumbia",
          "styleIds": ["cumbia-chicha"],
          "name": "Chicha Tremolo Figure",
          "family": "Peruvian Cumbia / Chicha",
          "category": "ostinato",
          "description": "Electric-guitar tremolo line with minor-key contour,",
          "tags": [
            "chicha",
            "tremolo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "melody"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14,
            16,
            19,
            22,
            24,
            27,
            30
          ],
          "accentProfile": [
            0.7,
            0.55,
            0.68,
            0.5,
            0.75,
            0.6,
            0.7,
            0.55,
            0.65,
            0.5,
            0.78,
            0.62
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "chicha",
            " tremolo"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Peruvian Cumbia / Chicha; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "chicha",
            "tremolo"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "cu-12-cumbia-maraca-layer",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana", "cumbia-sonora"],
          "name": "Maraca offbeat shimmer",
          "family": "Percussion",
          "category": "ostinato",
          "description": "Even offbeat maraca layer; kept separate",
          "tags": [
            "maracas",
            "texture"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "maracas"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            3,
            5,
            7,
            9,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.4,
            0.52,
            0.45,
            0.58,
            0.42,
            0.5,
            0.46,
            0.62
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "maracas",
            " texture"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Percussion; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "maracas",
            "texture"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];


const CUMBIA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "cu-cumbia-drum",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Tambora / alegre conversation",
          "family": "Cumbia Drums",
          "category": "groove",
          "description": "A low-and-high hand-drum conversation creates a layered cumbia pulse.",
          "tags": [
            "cumbia",
            "tambora",
            "alegre"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "cumbia-drum"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            8,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84,
            0.64
          ],
          "syncopationRating": 0.72,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "hand-drum"
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
    
    
    
          "variants": [
            {
              "id": "cu-cumbia-drum-v-sparse",
              "parentPatternId": "cu-cumbia-drum",
              "name": "Tambora / Alegre Interlock — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                6,
                11
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "cu-cumbia-drum-v-shift",
              "parentPatternId": "cu-cumbia-drum",
              "name": "Tambora / Alegre Interlock — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "cumbia",
            "tambora",
            "alegre"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "cu-07-tambor-alegre-reply",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Tambor Alegre Reply",
          "family": "Colombian Cumbia",
          "category": "groove",
          "description": "Hand-drum answer pattern that sits around",
          "tags": [
            "tambor",
            "call-response"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "cumbia-drum"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            5,
            8,
            13,
            16,
            21,
            24,
            29
          ],
          "accentProfile": [
            0.9,
            0.55,
            0.78,
            0.62,
            0.85,
            0.5,
            0.8,
            0.65
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "tambor",
            " call-response"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tambor",
            "call-response"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
,
  {
    "id": "tech-cumbia-tambora-pattern",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "tambora pattern",
    "shortName": "tambora pattern",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: tambora pattern",
    "tags": [
      "cumbia",
      "tambora pattern"
    ],
    "approaches": [
      "tambora pattern"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "tambora pattern"
    ],
    "techniques": [
      "tambora pattern"
    ]
  },
  {
    "id": "tech-cumbia-alegre-improvisation",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "alegre improvisation",
    "shortName": "alegre improvisation",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: alegre improvisation",
    "tags": [
      "cumbia",
      "alegre improvisation"
    ],
    "approaches": [
      "alegre improvisation"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "hand-percussion"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "alegre improvisation"
    ],
    "techniques": [
      "alegre improvisation"
    ]
  },
  {
    "id": "tech-cumbia-llamador-pulse",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia",
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "llamador pulse",
    "shortName": "llamador pulse",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: llamador pulse",
    "tags": [
      "cumbia",
      "llamador pulse"
    ],
    "approaches": [
      "llamador pulse"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "llamador pulse"
    ],
    "techniques": [
      "llamador pulse"
    ]
  },
  {
    "id": "tech-cumbia-guacharaca-scrape",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "guacharaca scrape",
    "shortName": "guacharaca scrape",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: guacharaca scrape",
    "tags": [
      "cumbia",
      "guacharaca scrape"
    ],
    "approaches": [
      "guacharaca scrape"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "guacharaca scrape"
    ],
    "techniques": [
      "guacharaca scrape"
    ]
  },
  {
    "id": "tech-cumbia-rebajada-half-speed-feel",
    "worldId": "cumbia",
    "styleIds": [],
    "name": "rebajada half-speed feel",
    "shortName": "rebajada half-speed feel",
    "family": "cumbia",
    "category": "groove",
    "description": "Technique: rebajada half-speed feel",
    "tags": [
      "cumbia",
      "rebajada half-speed feel"
    ],
    "approaches": [
      "rebajada half-speed feel"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
    ],
    "instruments": [
      "drums"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "rebajada half-speed feel"
    ],
    "techniques": [
      "rebajada half-speed feel"
    ]
  },
  {
    "id": "style-cumbia-traditional-coastal-cumbia-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia"
    ],
    "name": "Traditional Coastal Cumbia Signature Cell",
    "shortName": "Traditional Coastal Cumbia Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "tambora",
      "bombo",
      "hand-percussion",
      "guacharaca"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "alegre improvisation",
      "guacharaca scrape",
      "llamador pulse",
      "tambora pattern",
      "cumbia bass ostinato",
      "cumbia turnaround"
    ]
  },
  {
    "id": "style-cumbia-cumbia-orchestral-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-orchestral"
    ],
    "name": "Cumbia Orchestral Signature Cell",
    "shortName": "Cumbia Orchestral Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "clarinet",
      "trumpet",
      "trombone",
      "bass"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "cumbia turnaround",
      "cumbia bass ostinato",
      "digital cumbia sub-bass",
      "electric-guitar cumbia riff",
      "gaita melody"
    ]
  },
  {
    "id": "style-cumbia-cumbia-peruana-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-peruana"
    ],
    "name": "Cumbia Peruana Signature Cell",
    "shortName": "Cumbia Peruana Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "hand-percussion"
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
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "cumbia bass ostinato",
      "electric-guitar cumbia riff",
      "digital cumbia sub-bass",
      "cumbia turnaround"
    ]
  },
  {
    "id": "style-cumbia-cumbia-digital-global-bass-signature",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "Cumbia Digital / Global Bass Signature Cell",
    "shortName": "Cumbia Digital / Global Bass Cell",
    "family": "cumbia",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "cumbia",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "sampler",
      "sub-bass",
      "drums",
      "hand-percussion"
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
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "cumbia",
      "signature"
    ],
    "techniques": [
      "digital cumbia sub-bass",
      "cumbia bass ostinato",
      "cumbia turnaround",
      "electric-guitar cumbia riff",
      "llamador pulse"
    ]
  }
];


const CUMBIA_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "cu-keyboard-hook",
          "worldId": "cumbia",
          "styleIds": ["cumbia-villera"],
          "name": "Keyboard Hook",
          "family": "Cumbia Hooks",
          "category": "rolePattern",
          "description": "Short repeating keyboard hook placed between",
          "tags": [
            "cumbia",
            "hook",
            "keyboard"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "polysynth",
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84
          ],
          "syncopationRating": 0.68,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "staccato"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "verse"
          ],
    
    
    
          "variants": [
            {
              "id": "cu-keyboard-hook-v-sparse",
              "parentPatternId": "cu-keyboard-hook",
              "name": "Keyboard Hook — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "cu-keyboard-hook-v-shift",
              "parentPatternId": "cu-keyboard-hook",
              "name": "Keyboard Hook — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7,
                0.95
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "cumbia",
            "hook",
            "keyboard"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "cu-11-cumbia-organ-hook",
          "worldId": "cumbia",
          "styleIds": ["cumbia-sonora", "cumbia-digitale"],
          "name": "Cumbia Organ Hook",
          "family": "Electric Cumbia",
          "category": "rolePattern",
          "description": "A short organ riff repeats over the chord cycle.",
          "tags": [
            "organ",
            "hook"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            6,
            12,
            16,
            22,
            28
          ],
          "accentProfile": [
            0.8,
            0.65,
            0.75,
            0.8,
            0.65,
            0.9
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "organ",
            " hook"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Electric Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "organ",
            "hook"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];


const CUMBIA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "cu-06-cumbia-bass-tumbao",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Cumbia tumbao bass",
          "family": "Colombian Cumbia",
          "category": "bass",
          "description": "A syncopated tumbao-like bass cycle used",
          "tags": [
            "tumbao",
            "bass"
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
            "bass"
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
            0.9,
            0.55,
            0.75,
            0.7,
            0.6,
            0.82
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "tumbao",
            " bass"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tumbao",
            "bass"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
,
  {
    "id": "tech-cumbia-cumbia-bass-ostinato",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia",
      "cumbia-cumbia-orchestral",
      "cumbia-cumbia-peruana",
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "cumbia bass ostinato",
    "shortName": "cumbia bass ostinato",
    "family": "cumbia",
    "category": "bass",
    "description": "Technique: cumbia bass ostinato",
    "tags": [
      "cumbia",
      "cumbia bass ostinato"
    ],
    "approaches": [
      "cumbia bass ostinato"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "cumbia bass ostinato"
    ],
    "techniques": [
      "cumbia bass ostinato"
    ]
  },
  {
    "id": "tech-cumbia-digital-cumbia-sub-bass",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-orchestral",
      "cumbia-cumbia-peruana",
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "digital cumbia sub-bass",
    "shortName": "digital cumbia sub-bass",
    "family": "cumbia",
    "category": "bass",
    "description": "Technique: digital cumbia sub-bass",
    "tags": [
      "cumbia",
      "digital cumbia sub-bass"
    ],
    "approaches": [
      "digital cumbia sub-bass"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "digital cumbia sub-bass"
    ],
    "techniques": [
      "digital cumbia sub-bass"
    ]
  }
];


const CUMBIA_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "cu-09-cumbia-guitar-offbeat",
          "worldId": "cumbia",
          "styleIds": ["cumbia-chicha", "cumbia-santafesina"],
          "name": "Cumbia guitar anticipations",
          "family": "Cumbia Guitar",
          "category": "cell",
          "description": "Short anticipated guitar attacks that sit",
          "tags": [
            "offbeat guitar",
            "cumbia"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "electric-guitar",
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.62,
            0.7,
            0.58,
            0.78
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "offbeat guitar",
            " cumbia"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Cumbia Guitar; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "offbeat guitar",
            "cumbia"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];


const CUMBIA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "cu-13-cumbia-call-and-response",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana", "cumbia-sonora"],
          "name": "Cumbia Call-and-Response",
          "family": "Melody",
          "category": "interactionPattern",
          "description": "Lead phrase is answered by guitar/organ",
          "tags": [
            "call-response"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "counterline"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar",
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            18,
            22,
            26,
            30
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.7,
            0.55,
            0.78,
            0.62,
            0.72,
            0.6
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "call-response"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Melody; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "call-response"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];


const CUMBIA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "cu-14-cumbia-stop-break",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana", "cumbia-sonora", "cumbia-porro"],
          "name": "Cumbia Stop Break",
          "family": "Break",
          "category": "break",
          "transitionType": "fill",
          "description": "Band cuts the scraper and bass",
          "tags": [
            "stop-time",
            "re-entry"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "guiro"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            1,
            0.75
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "stop-time",
            " re-entry"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stop-time",
            "re-entry"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];


const CUMBIA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "cu-15-cumbia-final-tag",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana", "cumbia-sonora", "cumbia-porro"],
          "name": "Cumbia Final Tag",
          "family": "Cadence",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A compact percussion-and-bass tag closes the phrase.",
          "tags": [
            "tag",
            "cadence"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "fill"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "bass",
            "cumbia-drum"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            8,
            12,
            14
          ],
          "accentProfile": [
            0.65,
            0.8,
            1
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "tag",
            " cadence"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tag",
            "cadence"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];


const CUMBIA_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-cumbia-cumbia-turnaround",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-traditional-coastal-cumbia",
      "cumbia-cumbia-orchestral",
      "cumbia-cumbia-peruana",
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "cumbia turnaround",
    "shortName": "cumbia turnaround",
    "family": "cumbia",
    "category": "comping",
    "description": "Technique: cumbia turnaround",
    "tags": [
      "cumbia",
      "cumbia turnaround"
    ],
    "approaches": [
      "cumbia turnaround"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "lead"
    ],
    "instruments": [
      "piano"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "cumbia turnaround"
    ],
    "techniques": [
      "cumbia turnaround"
    ]
  },
  {
    "id": "tech-cumbia-electric-guitar-cumbia-riff",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-orchestral",
      "cumbia-cumbia-peruana",
      "cumbia-cumbia-digital-global-bass"
    ],
    "name": "electric-guitar cumbia riff",
    "shortName": "electric-guitar cumbia riff",
    "family": "cumbia",
    "category": "comping",
    "description": "Technique: electric-guitar cumbia riff",
    "tags": [
      "cumbia",
      "electric-guitar cumbia riff"
    ],
    "approaches": [
      "electric-guitar cumbia riff"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "electric-guitar cumbia riff"
    ],
    "techniques": [
      "electric-guitar cumbia riff"
    ]
  }
];


const CUMBIA_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-cumbia-gaita-melody",
    "worldId": "cumbia",
    "styleIds": [
      "cumbia-cumbia-orchestral"
    ],
    "name": "gaita melody",
    "shortName": "gaita melody",
    "family": "cumbia",
    "category": "lead",
    "description": "Technique: gaita melody",
    "tags": [
      "cumbia",
      "gaita melody"
    ],
    "approaches": [
      "gaita melody"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "lead"
    ],
    "instruments": [
      "flute"
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "cumbia",
      "gaita melody"
    ],
    "techniques": [
      "gaita melody"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": CUMBIA_WORLD_PATTERNS_OSTINATO,
  "groove": CUMBIA_WORLD_PATTERNS_GROOVE,
  "rolePattern": CUMBIA_WORLD_PATTERNS_ROLEPATTERN,
  "bass": CUMBIA_WORLD_PATTERNS_BASS,
  "cell": CUMBIA_WORLD_PATTERNS_CELL,
  "interactionPattern": CUMBIA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "break": CUMBIA_WORLD_PATTERNS_BREAK,
  "cadence": CUMBIA_WORLD_PATTERNS_CADENCE,
  "comping": CUMBIA_WORLD_PATTERNS_COMPING,
  "lead": CUMBIA_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"groove","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"rolePattern","index":0},{"category":"bass","index":0},{"category":"groove","index":1},{"category":"ostinato","index":3},{"category":"cell","index":0},{"category":"ostinato","index":4},{"category":"rolePattern","index":1},{"category":"ostinato","index":5},{"category":"interactionPattern","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"bass","index":1},{"category":"bass","index":2},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"lead","index":0}];

export const CUMBIA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
