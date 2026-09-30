import type { MusicalPattern } from '../../../schema';

export const HOUSE_TECHNO_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "ht-offbeat-hat",
          "worldId": "house-techno",
          "styleIds": ["house-deep"],
          "name": "Offbeat Hat",
          "family": "House Hats",
          "category": "ostinato",
          "description": "Open or closed hi-hat marks the subdivision.",
          "tags": [
            "house",
            "hat",
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
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "hats",
            "drums"
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
          "syncopationRating": 0.35,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "hat"
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
              "id": "ht-offbeat-hat-v-sparse",
              "parentPatternId": "ht-offbeat-hat",
              "name": "Offbeat Hat — sparse",
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
              "id": "ht-offbeat-hat-v-shift",
              "parentPatternId": "ht-offbeat-hat",
              "name": "Offbeat Hat — accent shift",
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
            "house",
            "hat",
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
          "id": "ht-house-bass",
          "worldId": "house-techno",
          "styleIds": ["house-deep"],
          "name": "House Syncopated Bass",
          "family": "House Bass",
          "category": "ostinato",
          "description": "Bass notes land between kicks, creating",
          "tags": [
            "house",
            "bass",
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
          "syncopationRating": 0.78,
          "anticipationOffset": 1,
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
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "ht-house-bass-v-sparse",
              "parentPatternId": "ht-house-bass",
              "name": "House Syncopated Bass — sparse",
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
              "id": "ht-house-bass-v-shift",
              "parentPatternId": "ht-house-bass",
              "name": "House Syncopated Bass — accent shift",
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
            "house",
            "bass",
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
          "id": "ht-techno-sequence",
          "worldId": "house-techno",
          "styleIds": ["house-techno-detroit"],
          "name": "Detroit 16th Sequence",
          "family": "Techno Sequences",
          "category": "ostinato",
          "description": "A machine-tight repeating synth sequence whose",
          "tags": [
            "techno",
            "sequence",
            "16th"
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
            "polysynth",
            "saw-lead"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            6,
            8,
            10,
            11,
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
          "syncopationRating": 0.82,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
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
              "id": "ht-techno-sequence-v-sparse",
              "parentPatternId": "ht-techno-sequence",
              "name": "Detroit 16th Sequence — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                3,
                8,
                11
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "ht-techno-sequence-v-shift",
              "parentPatternId": "ht-techno-sequence",
              "name": "Detroit 16th Sequence — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                2,
                3,
                6,
                8,
                10,
                11,
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
            "techno",
            "sequence",
            "16th"
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
          "id": "ht-07-offbeat-hat",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Open-hat lift",
          "family": "House",
          "category": "ostinato",
          "description": "Sparse open-hat lift on offbeats, leaving",
          "tags": [
            "offbeat hat"
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
            "hats"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            6,
            14
          ],
          "accentProfile": [
            0.55,
            0.65
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on House; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "offbeat hat"
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
          "id": "ht-10-detroit-sequence",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Detroit Sequence",
          "family": "Detroit Techno",
          "category": "ostinato",
          "description": "Repeating 16th-note synth sequence with small",
          "tags": [
            "Detroit",
            "sequence"
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
            "synth",
            "saw-lead"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            6,
            9,
            12,
            16,
            19,
            22,
            25,
            28
          ],
          "accentProfile": [
            0.55,
            0.65,
            0.5,
            0.72,
            0.58,
            0.6,
            0.68,
            0.52,
            0.75,
            0.55
          ],
          "syncopationRating": 0.6,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" sequence"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "groove",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Detroit Techno; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "Detroit",
            "sequence"
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
          "id": "ht-11-acid-303-accent",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Acid 303 Accent",
          "family": "Acid",
          "category": "ostinato",
          "description": "Resonant 16th-note bass sequence with rests",
          "tags": [
            "acid",
            "slide",
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
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "acid-303"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            2,
            5,
            7,
            10,
            12,
            14,
            16,
            19,
            22,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.8,
            0.5,
            0.65,
            0.75,
            0.45,
            0.7,
            0.82,
            0.6,
            0.55,
            0.72,
            0.62,
            0.8,
            0.55
          ],
          "syncopationRating": 0.69,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" slide"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "groove",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Acid; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "acid",
            "slide",
            "accent"
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
