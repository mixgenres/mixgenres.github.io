import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "rg-perc-ghost",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Percussive Ghost Layer",
          "family": "Modern Reggaetón Percussion",
          "category": "rolePattern",
          "description": "A sparse shaker/click layer fills selected",
          "tags": [
            "negative-space",
            "shaker"
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
            "cabasa"
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
          "syncopationRating": 0.65,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
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
              "id": "rg-perc-ghost-v-sparse",
              "parentPatternId": "rg-perc-ghost",
              "name": "Percussive Ghost Layer — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                2,
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
              "id": "rg-perc-ghost-v-shift",
              "parentPatternId": "rg-perc-ghost",
              "name": "Percussive Ghost Layer — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                2,
                4,
                6,
                10,
                12,
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
            "negative-space",
            "shaker"
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
          "id": "rg-08-reggaeton-sub-answer",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Reggaeton Sub Answer",
          "family": "Bass",
          "category": "rolePattern",
          "description": "A short sub-bass answer lands around the kick pattern.",
          "tags": [
            "sub-bass",
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
            "sub-bass"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            6,
            10,
            14,
            16,
            22,
            26,
            30
          ],
          "accentProfile": [
            1,
            0.65,
            0.7,
            0.6,
            0.9,
            0.62,
            0.72,
            0.58
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" syncopation"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bass; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "sub-bass",
            "syncopation"
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
