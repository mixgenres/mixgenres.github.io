import type { MusicalPattern } from '../../../schema';

export const HOUSE_TECHNO_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "ht-four-floor",
          "worldId": "house-techno",
          "styleIds": ["house-deep"],
          "name": "Four-on-the-Floor Foundation",
          "family": "House Kick",
          "category": "groove",
          "description": "Unbroken quarter-note kick foundation; other parts",
          "tags": [
            "house",
            "four-on-floor",
            "kick"
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
            "drums",
            "kick"
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
          "syncopationRating": 0.05,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "kick"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "ht-four-floor-v-sparse",
              "parentPatternId": "ht-four-floor",
              "name": "Four-on-the-Floor Foundation — sparse",
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
              "id": "ht-four-floor-v-shift",
              "parentPatternId": "ht-four-floor",
              "name": "Four-on-the-Floor Foundation — accent shift",
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
            "house",
            "four-on-floor",
            "kick"
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
          "id": "ht-06-four-on-the-floor-kick",
          "worldId": "house-techno",
          "styleIds": ["house-chicago-deep"],
          "name": "Four-floor kick with bar accent",
          "family": "House",
          "category": "groove",
          "description": "A stable four-on-the-floor foundation supports the arrangement.",
          "tags": [
            "four-on-floor"
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
            "kick",
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
            0.72,
            0.86,
            0.74
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
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
          "provenance": "Authored genre-pack pattern based on House; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "four-on-floor"
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
          "id": "ht-12-techno-clap-backbeat",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Techno Clap Backbeat",
          "family": "Techno",
          "category": "groove",
          "description": "Sparse clap/snare at 2 and 4,",
          "tags": [
            "clap",
            "backbeat"
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
            "claves"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            12
          ],
          "accentProfile": [
            0.72,
            0.8
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" backbeat"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "groove",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Techno; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "clap",
            "backbeat"
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
