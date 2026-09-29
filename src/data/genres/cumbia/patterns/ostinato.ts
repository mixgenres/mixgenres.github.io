import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "cu-cumbia-bass",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombian"],
          "name": "Cumbia bass anticipation",
          "family": "Cumbia Bass",
          "category": "ostinato",
          "description": "Short-long bass anticipation that leaves the",
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
          "styleIds": ["cumbia-colombian"],
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
          "styleIds": ["cumbia-electric"],
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
          "styleIds": ["cumbia-electric"],
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
          "styleIds": ["cumbia-electric"],
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
