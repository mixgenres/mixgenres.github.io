import type { MusicalPattern } from '../../../schema';

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
          "instruments": [
            "surdo",
            "drums"
          ],
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
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
          "description": "Alternating thumb and finger attacks create a syncopated accompaniment pattern.",
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
          "instruments": [
            "pandeiro",
            "shaker"
          ],
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
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
          "instruments": [
            "guitar",
            "piano"
          ],
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
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
          "instruments": [
            "surdo"
          ],
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
          "instruments": [
            "pandeiro"
          ],
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
        },
  {
          "id": "sb-bossa-flute-obbligato",
          "worldId": "samba-bossa",
          "styleIds": ["samba-bossa-bossa-nova"],
          "name": "Bossa Flute Obbligato",
          "family": "Flute",
          "category": "groove",
          "description": "Soft, breathy flute countermelody that answers the guitar in the gaps of the bossa clave.",
          "tags": [
            "samba-bossa",
            "bossa-nova",
            "flute",
            "obbligato"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "flute"
          ],

          "approaches": ["melody"],
          "instruments": [
            "flute"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            13
          ],
          "accentProfile": [
            0.85,
            0.6,
            0.75,
            0.7,
            0.6
          ],
          "velocityProfile": [
            0.8,
            0.55,
            0.7,
            0.65,
            0.55
          ],
          "supportedEnergy": [1, 2, 3],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "sb-bossa-flute-obbligato-v-sparse",
              "parentPatternId": "sb-bossa-flute-obbligato",
              "name": "Bossa Flute Obbligato — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Keeps only the anchor and the anticipated third-beat entry for a minimal countermelody.",
              "onsetGrid": [
            0,
            6,
            10
          ]
            }
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
          "articulations": ["legato"]
        }
];
