import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "rd-skank",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots", "reggae-dub-lovers-rock"],
          "name": "Offbeat Skank",
          "family": "Reggae Skank",
          "category": "ostinato",
          "description": "Short guitar or organ chord attacks land on the offbeats.",
          "tags": [
            "skank",
            "reggae",
            "offbeat"
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
            "electric-guitar",
            "organ"
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
          "syncopationRating": 0.76,
          "anticipationOffset": 0,
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
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-skank-v-sparse",
              "parentPatternId": "rd-skank",
              "name": "Offbeat Skank — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                2,
                10
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "rd-skank-v-shift",
              "parentPatternId": "rd-skank",
              "name": "Offbeat Skank — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                2,
                6,
                10,
                14
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
            "skank",
            "reggae",
            "offbeat"
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
          "id": "rd-reggae-bass",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots", "reggae-dub-lovers-rock"],
          "name": "Melodic Reggae Bass",
          "family": "Reggae Bass",
          "category": "ostinato",
          "description": "Long, syncopated bass notes occupy the spaces between drum accents.",
          "tags": [
            "reggae",
            "bass",
            "melodic"
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
            "sub-bass"
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
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
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
              "id": "rd-reggae-bass-v-sparse",
              "parentPatternId": "rd-reggae-bass",
              "name": "Melodic Reggae Bass — sparse",
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
              "id": "rd-reggae-bass-v-shift",
              "parentPatternId": "rd-reggae-bass",
              "name": "Melodic Reggae Bass — accent shift",
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
            "reggae",
            "bass",
            "melodic"
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
          "id": "rd-13-reggae-percussion-skitter",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Reggae shaker cross-rhythm",
          "family": "Percussion",
          "category": "ostinato",
          "description": "Sparse shaker placements that sit around",
          "tags": [
            "shaker",
            "ghost"
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
            "shaker",
            "maracas"
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
            0.32,
            0.42,
            0.35,
            0.45
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "shaker",
            " ghost"
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
            "shaker",
            "ghost"
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
          "id": "rd-lovers-rock-piano-skank",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-dub-lovers-rock"],
          "name": "Lovers Rock Piano Skank",
          "family": "Piano",
          "category": "ostinato",
          "description": "Soft offbeat piano chops that double the guitar skank and add sweetness under a lovers rock vocal.",
          "tags": [
            "reggae",
            "lovers-rock",
            "piano",
            "skank"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys"
          ],

          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys"
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
            0.8,
            0.85,
            0.8,
            0.9
          ],
          "velocityProfile": [
            0.7,
            0.75,
            0.7,
            0.8
          ],
          "supportedEnergy": [1, 2, 3],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "rd-lovers-rock-piano-skank-v-sparse",
              "parentPatternId": "rd-lovers-rock-piano-skank",
              "name": "Lovers Rock Piano Skank — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Plays only the second and fourth offbeat chops for a lighter comp.",
              "onsetGrid": [
            6,
            14
          ]
            }
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 56,
          "anticipationOffset": 0,
          "articulations": ["staccato"]
        }
];
