import type { MusicalPattern, GenreWorld } from '../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "sb-11-bossa-bass-anticipation",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa Bass Anticipation",
          "family": "Bossa Nova",
          "category": "bass",
          "description": "Root/approach notes anticipate the next chord,",
          "tags": [
            "bossa",
            "anticipation"
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
          "instruments": ["bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.78,
            0.45,
            0.65,
            0.55
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" anticipation"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bossa",
            "anticipation"
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

export const SAMBA_BOSSA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "sb-14-batucada-break",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Batucada Break",
          "family": "Samba",
          "category": "break",
          "transitionType": "fill",
          "description": "Brief reduction to surdo and a",
          "tags": [
            "batucada",
            "break"
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
          "instruments": ["surdo", "pandeiro", "tamborim"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            6
          ],
          "accentProfile": [
            0.9,
            0.7
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" break"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "batucada",
            "break"
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

export const SAMBA_BOSSA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "sb-15-bossa-ending-turn",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa ending cadence",
          "family": "Bossa Nova",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Short harmonic cadence figure for a",
          "tags": [
            "extended harmony",
            "release"
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
          "instruments": ["guitar", "piano"],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.6,
            0.45,
            0.68,
            0.5
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" release"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "coda",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "extended harmony",
            "release"
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

export const SAMBA_BOSSA_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "sb-09-cavaquinho-partido",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Cavaquinho Partido",
          "family": "Samba",
          "category": "cell",
          "description": "Short chord strokes outlining the syncopated",
          "tags": [
            "cavaquinho",
            "partido-alto"
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
          "instruments": ["cavaquinho"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            0.72,
            0.55,
            0.75,
            0.6
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" partido-alto"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "cavaquinho",
            "partido-alto"
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

export const SAMBA_BOSSA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "sb-surdo-foundation",
          "worldId": "samba-bossa",
          "styleIds": ["samba-batucada"],
          "name": "Surdo Two-Beat Foundation",
          "family": "Samba Low Drums",
          "category": "groove",
          "description": "Low/high surdo cycle with complementary accents",
          "tags": [
            "samba",
            "surdo",
            "2/4"
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
          "instruments": ["surdo", "drums"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.72,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86
          ],
          "syncopationRating": 0.45,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "low-drum"
          ],
          "supportedEnergy": [1, 2],
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
              "id": "sb-surdo-foundation-v-sparse",
              "parentPatternId": "sb-surdo-foundation",
              "name": "Surdo Two-Beat Foundation — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                6
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "sb-surdo-foundation-v-shift",
              "parentPatternId": "sb-surdo-foundation",
              "name": "Surdo Two-Beat Foundation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                4,
                6
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "samba",
            "surdo",
            "2/4"
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
          "id": "sb-pandeiro",
          "worldId": "samba-bossa",
          "styleIds": ["samba-pagode"],
          "name": "Pandeiro Syncopation",
          "family": "Samba Hand Percussion",
          "category": "groove",
          "description": "Thumb/finger-like alternating attacks translated to a",
          "tags": [
            "pandeiro",
            "samba",
            "syncopation"
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
          "instruments": ["pandeiro", "shaker"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            7
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
            "hand-percussion"
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
              "id": "sb-pandeiro-v-sparse",
              "parentPatternId": "sb-pandeiro",
              "name": "Pandeiro Syncopation — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                3,
                6
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "sb-pandeiro-v-shift",
              "parentPatternId": "sb-pandeiro",
              "name": "Pandeiro Syncopation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                7
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
            "pandeiro",
            "samba",
            "syncopation"
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
          "id": "sb-bossa-guitar",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa nova guitar syncopation",
          "family": "Bossa Guitar",
          "category": "groove",
          "description": "Independent thumb-and-finger guitar syncopation: bass notes",
          "tags": [
            "bossa",
            "guitar",
            "syncopation"
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
          "instruments": ["guitar", "piano"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            5,
            7,
            8,
            10,
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
          "syncopationRating": 0.86,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "fingerstyle"
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
              "id": "sb-bossa-guitar-v-sparse",
              "parentPatternId": "sb-bossa-guitar",
              "name": "Bossa Nova Guitar Cell — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "sb-bossa-guitar-v-shift",
              "parentPatternId": "sb-bossa-guitar",
              "name": "Bossa Nova Guitar Cell — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                2,
                5,
                7,
                8,
                10,
                13,
                15
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
            "bossa",
            "guitar",
            "syncopation"
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
          "id": "sb-06-samba-surdo-foundation",
          "worldId": "samba-bossa",
          "styleIds": ["samba-batucada"],
          "name": "Samba Surdo Foundation",
          "family": "Samba",
          "category": "groove",
          "description": "Low surdo articulates the large pulse",
          "tags": [
            "surdo",
            "samba"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": ["surdo"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            1,
            0.72
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" samba"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "surdo",
            "samba"
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
          "id": "sb-07-samba-pandeiro-interlock",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Samba Pandeiro Interlock",
          "family": "Samba",
          "category": "groove",
          "description": "Pandeiro combines bass slap and high",
          "tags": [
            "pandeiro",
            "interlock"
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
          "instruments": ["pandeiro"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            1,
            2,
            4,
            5,
            6
          ],
          "accentProfile": [
            0.55,
            0.7,
            0.48,
            0.8,
            0.58,
            0.72
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" interlock"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "pandeiro",
            "interlock"
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

export const SAMBA_BOSSA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "sb-13-samba-call-response",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Samba Call Response",
          "family": "Samba",
          "category": "interactionPattern",
          "description": "Percussion group answers a vocal or",
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
          "instruments": ["pandeiro", "tamborim"],
          "meter": "2/4",
          "cycleLength": 2,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            6,
            12,
            14
          ],
          "accentProfile": [
            0.6,
            0.8,
            0.58,
            0.85
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
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

export const SAMBA_BOSSA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "sb-cavaquinho",
          "worldId": "samba-bossa",
          "styleIds": ["samba-pagode"],
          "name": "Cavaquinho Comp",
          "family": "Cavaquinho Chords",
          "category": "ostinato",
          "description": "Short syncopated chord attacks that interlock",
          "tags": [
            "cavaquinho",
            "samba",
            "comp"
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
          "instruments": ["cavaquinho", "guitar"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.82,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "staccato"
          ],
          "supportedEnergy": [1, 2],
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
              "id": "sb-cavaquinho-v-sparse",
              "parentPatternId": "sb-cavaquinho",
              "name": "Cavaquinho Comp — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                1,
                5
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "sb-cavaquinho-v-shift",
              "parentPatternId": "sb-cavaquinho",
              "name": "Cavaquinho Comp — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                1,
                3,
                5,
                7
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
            "cavaquinho",
            "samba",
            "comp"
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
          "id": "sb-bossa-bass",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa bass anchor / anticipation",
          "family": "Bossa Bass",
          "category": "ostinato",
          "description": "Root/approach bass contour that supports the",
          "tags": [
            "bossa",
            "bass",
            "interlock"
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
          "instruments": ["bass", "upright-bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            7,
            8,
            11,
            15
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
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "fingerstyle"
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
              "id": "sb-bossa-bass-v-sparse",
              "parentPatternId": "sb-bossa-bass",
              "name": "Bossa Nova Bass — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
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
              "id": "sb-bossa-bass-v-shift",
              "parentPatternId": "sb-bossa-bass",
              "name": "Bossa Nova Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
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
            "bossa",
            "bass",
            "interlock"
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
          "id": "sb-08-tamborim-cross-accent",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Tamborim Cross Accent",
          "family": "Samba",
          "category": "ostinato",
          "description": "Bright tamborim pattern with displaced accents;",
          "tags": [
            "tamborim",
            "accent"
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
          "instruments": ["tamborim"],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            1,
            2,
            4,
            6,
            7
          ],
          "accentProfile": [
            0.45,
            0.7,
            0.55,
            0.75,
            0.6
          ],
          "syncopationRating": 0.8,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tamborim",
            "accent"
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
          "id": "sb-10-bossa-guitar-clave",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa Guitar Clave",
          "family": "Bossa Nova",
          "category": "ostinato",
          "description": "Quiet syncopated guitar voicing pattern combining",
          "tags": [
            "bossa",
            "guitar rhythm"
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
          "instruments": ["guitar"],
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
            0.65,
            0.52,
            0.7,
            0.58,
            0.68,
            0.55
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" guitar rhythm"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bossa",
            "guitar rhythm"
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

export const SAMBA_BOSSA_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "sb-12-bossa-piano-voicing",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa piano chord punctuation",
          "family": "Bossa Nova",
          "category": "rolePattern",
          "description": "Sparse chord punctuation for a piano-led",
          "tags": [
            "piano",
            "voicing"
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
          "instruments": ["piano"],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            2,
            6,
            9,
            13
          ],
          "accentProfile": [
            0.55,
            0.62,
            0.5,
            0.66
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" voicing"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "piano",
            "voicing"
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": SAMBA_BOSSA_WORLD_PATTERNS_GROOVE,
  "ostinato": SAMBA_BOSSA_WORLD_PATTERNS_OSTINATO,
  "cell": SAMBA_BOSSA_WORLD_PATTERNS_CELL,
  "bass": SAMBA_BOSSA_WORLD_PATTERNS_BASS,
  "rolePattern": SAMBA_BOSSA_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": SAMBA_BOSSA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "break": SAMBA_BOSSA_WORLD_PATTERNS_BREAK,
  "cadence": SAMBA_BOSSA_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"groove","index":1},{"category":"ostinato","index":0},{"category":"groove","index":2},{"category":"ostinato","index":1},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"ostinato","index":2},{"category":"cell","index":0},{"category":"ostinato","index":3},{"category":"bass","index":0},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"break","index":0},{"category":"cadence","index":0}];

export const SAMBA_BOSSA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
