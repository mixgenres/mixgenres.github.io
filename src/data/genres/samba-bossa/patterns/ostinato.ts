import type { MusicalPattern } from '../../../schema';

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
          "instruments": [
            "cavaquinho",
            "guitar"
          ],
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
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
          "description": "A root-and-approach bass contour supports the harmonic changes.",
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
              "id": "sb-bossa-bass-v-shift",
              "parentPatternId": "sb-bossa-bass",
              "name": "Bossa Nova Bass — accent shift",
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
          "instruments": [
            "tamborim"
          ],
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
          "instruments": [
            "guitar"
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
