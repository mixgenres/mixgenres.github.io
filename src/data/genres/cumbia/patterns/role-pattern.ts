import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "cu-keyboard-hook",
          "worldId": "cumbia",
          "styleIds": ["cumbia-villera"],
          "name": "Keyboard Hook",
          "family": "Cumbia Hooks",
          "category": "rolePattern",
          "description": "Short repeating keyboard hook placed between",
          "tags": [
            "cumbia",
            "hook",
            "keyboard"
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
            "polysynth",
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12
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
          "syncopationRating": 0.68,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "staccato"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "verse"
          ],
    
    
    
          "variants": [
            {
              "id": "cu-keyboard-hook-v-sparse",
              "parentPatternId": "cu-keyboard-hook",
              "name": "Keyboard Hook — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "cu-keyboard-hook-v-shift",
              "parentPatternId": "cu-keyboard-hook",
              "name": "Keyboard Hook — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12
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
            "cumbia",
            "hook",
            "keyboard"
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
          "id": "cu-11-cumbia-organ-hook",
          "worldId": "cumbia",
          "styleIds": ["cumbia-sonora", "cumbia-digitale"],
          "name": "Cumbia Organ Hook",
          "family": "Electric Cumbia",
          "category": "rolePattern",
          "description": "A short organ riff repeats over the chord cycle.",
          "tags": [
            "organ",
            "hook"
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
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            6,
            12,
            16,
            22,
            28
          ],
          "accentProfile": [
            0.8,
            0.65,
            0.75,
            0.8,
            0.65,
            0.9
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "organ",
            " hook"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Electric Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "organ",
            "hook"
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
