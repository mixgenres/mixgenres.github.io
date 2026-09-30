import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "rd-one-drop",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots", "reggae-dub-lovers-rock"],
          "name": "One-Drop Foundation",
          "family": "Reggae Drums",
          "category": "groove",
          "description": "Kick and rimshot center the third",
          "tags": [
            "one-drop",
            "reggae",
            "drums"
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
            "kick",
            "snare"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
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
          "syncopationRating": 0.7,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "kick",
            "rimshot"
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
              "id": "rd-one-drop-v-sparse",
              "parentPatternId": "rd-one-drop",
              "name": "One-Drop Foundation — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
              "id": "rd-one-drop-v-shift",
              "parentPatternId": "rd-one-drop",
              "name": "One-Drop Foundation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                6,
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
            "one-drop",
            "reggae",
            "drums"
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
          "id": "rd-steppers",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-steppers"],
          "name": "Steppers Foundation",
          "family": "Steppers Drums",
          "category": "groove",
          "description": "Four-to-the-floor kick with a deep bass",
          "tags": [
            "steppers",
            "sound-system"
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
          "syncopationRating": 0.1,
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
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-steppers-v-sparse",
              "parentPatternId": "rd-steppers",
              "name": "Steppers Foundation — sparse",
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
              "id": "rd-steppers-v-shift",
              "parentPatternId": "rd-steppers",
              "name": "Steppers Foundation — accent shift",
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
            "steppers",
            "sound-system"
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
          "id": "rd-06-one-drop-core",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-roots"],
          "name": "One Drop Core",
          "family": "Roots Reggae",
          "category": "groove",
          "description": "Drum pattern leaves the first beat",
          "tags": [
            "one-drop"
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
            6,
            8,
            12
          ],
          "accentProfile": [
            0.45,
            0.8,
            0.7,
            0.9
          ],
          "syncopationRating": 0.25,
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
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "one-drop"
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
          "id": "rd-12-steppers-kick-grid",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Steppers four-kick pulse",
          "family": "Digital Reggae",
          "category": "groove",
          "description": "Steppers kick architecture: four quarter-note kicks,",
          "tags": [
            "steppers"
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
            0.9,
            0.72,
            0.85,
            0.75
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
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Digital Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "steppers"
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
