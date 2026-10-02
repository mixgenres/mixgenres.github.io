import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "rg-dembow-core",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow"],
          "name": "Dembow Core Timeline",
          "family": "Dembow Drums",
          "category": "groove",
          "description": "The canonical engine cell: kick attacks",
          "tags": [
            "dembow",
            "reggaeton",
            "timeline"
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
            "kick",
            "snare"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            11,
            12,
            14,
            16,
            19,
            20,
            22,
            24,
            27,
            28,
            30
          ],
          "hitGrid": [
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare"
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
            0.9,
            0.65,
            1,
            0.72,
            0.9,
            0.65
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
            0.86,
            0.58,
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.92,
          "anticipationOffset": 1,
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
            "breakdown"
          ],
    
    
    
          "variants": [
            {
              "id": "rg-dembow-core-v-sparse",
              "parentPatternId": "rg-dembow-core",
              "name": "Dembow Core Timeline — sparse",
              "variationType": "sparse",
              "probability": 0.05,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                8,
                14,
                24
              ],
              "hitGrid": [
                "kick",
                "kick",
                "snare",
                "kick"
              ],
              "accentProfile": [
                0.92,
                0.72,
                0.9,
                0.68
              ]
            },
            {
              "id": "rg-dembow-core-v-shift",
              "parentPatternId": "rg-dembow-core",
              "name": "Dembow Core Timeline — accent shift",
              "variationType": "accentShift",
              "probability": 0.12,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                8,
                11,
                12,
                14,
                16,
                19,
                20,
                22,
                24,
                27,
                28,
                30
              ],
              "hitGrid": [
                "kick",
                "snare",
                "kick",
                "snare",
                "kick",
                "snare",
                "kick",
                "snare",
                "kick",
                "snare",
                "kick",
                "snare",
                "kick",
                "snare",
                "kick",
                "snare"
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7,
                0.95,
                0.7,
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
            "dembow",
            "reggaeton",
            "timeline"
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
          "id": "rg-06-classic-dembow-skeleton",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow"],
          "name": "Classic dembow two-bar answer",
          "family": "Dembow",
          "category": "groove",
          "description": "Two-bar dembow skeleton with a second-bar",
          "tags": [
            "dembow",
            "timeline"
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
            "kick",
            "snare"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            11,
            12,
            14,
            16,
            19,
            20,
            22,
            24,
            27,
            28,
            30
          ],
          "hitGrid": [
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare"
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
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7
          ],
          "syncopationRating": 0.38,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["timeline"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dembow; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dembow",
            "timeline"
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
          "id": "rg-07-dembow-clave-like-ghosts",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Dembow Offbeat Texture",
          "family": "Dembow",
          "category": "groove",
          "description": "A sparse 2-bar shaker/click texture that",
          "tags": [
            "offbeat texture",
            "negative space"
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
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            2,
            6,
            10,
            14,
            18,
            22,
            26,
            30
          ],
          "accentProfile": [
            0.28,
            0.34,
            0.26,
            0.38,
            0.3,
            0.36,
            0.28,
            0.42
          ],
          "syncopationRating": 0.58,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "offbeat texture",
            "negative space"
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
          "provenance": "Authored genre-pack pattern based on Dembow; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dembow texture",
            "offbeat subdivision"
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
