import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "sk-two-tone-drive",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Two-tone upstroke drive",
          "family": "2 Tone Rhythm",
          "category": "groove",
          "description": "Tighter revival-era offbeat guitar gives the groove a crisp, compact feel.",
          "tags": [
            "2tone",
            "ska",
            "punk"
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
          "syncopationRating": 0.76,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "upstroke"
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
              "id": "sk-two-tone-drive-v-sparse",
              "parentPatternId": "sk-two-tone-drive",
              "name": "2 Tone Drive — sparse",
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
              "id": "sk-two-tone-drive-v-shift",
              "parentPatternId": "sk-two-tone-drive",
              "name": "2 Tone Drive — accent shift",
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
            "2tone",
            "ska",
            "punk"
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
          "id": "sk-09-ska-drum-drive",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska Drum Drive",
          "family": "First-Wave Ska",
          "category": "groove",
          "description": "An up-tempo drum pattern keeps the dance pulse moving.",
          "tags": [
            "drive"
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
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.5,
            0.82,
            0.92,
            0.55
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "drive"
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
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "drive"
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
          "id": "sk-11-two-tone-guitar-pulse",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Two-Tone Guitar Pulse",
          "family": "Two-Tone",
          "category": "groove",
          "description": "Sharper punk-influenced offbeat guitar with slightly",
          "tags": [
            "two-tone"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "rhythm-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.65,
            0.45,
            0.72,
            0.62,
            0.5,
            0.76
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "two-tone"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Two-Tone; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "two-tone"
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
