import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "rg-dembow-break",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow"],
          "name": "Dembow Break & Pickup",
          "family": "Breaks",
          "category": "break",
          "transitionType": "fill",
          "description": "Drops the main kick for a",
          "tags": [
            "break",
            "pickup",
            "dembow"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "snare"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14
          ],
          "hitGrid": [
            "kick",
            "kick",
            "kick",
            "kick",
            "snare"
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
          "syncopationRating": 0.8,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "ending",
            "bridge"
          ],
    
    
    
          "variants": [
            {
              "id": "rg-dembow-break-v-sparse",
              "parentPatternId": "rg-dembow-break",
              "name": "Dembow Break & Pickup — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                8,
                14
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "rg-dembow-break-v-shift",
              "parentPatternId": "rg-dembow-break",
              "name": "Dembow Break & Pickup — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14
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
            "break",
            "pickup",
            "dembow"
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
          "id": "rg-13-dembow-break-silence",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Dembow Break / Re-entry",
          "family": "Breaks",
          "category": "break",
          "transitionType": "fill",
          "description": "A sparse dembow break that keeps",
          "tags": [
            "dropout",
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
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "kick",
            "snare"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            8,
            11,
            14
          ],
          "hitGrid": [
            "kick",
            "snare",
            "kick",
            "snare",
            "clap"
          ],
          "accentProfile": [
            1,
            0.72,
            0.92,
            0.68,
            0.82
          ],
          "syncopationRating": 0.49,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Breaks; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dropout",
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
