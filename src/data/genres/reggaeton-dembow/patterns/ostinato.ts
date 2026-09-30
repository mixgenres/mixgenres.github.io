import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "rg-dembow-bass",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow"],
          "name": "Dembow Syncopated Bass",
          "family": "Dembow Bass",
          "category": "ostinato",
          "description": "Short sub-bass notes answer the kick",
          "tags": [
            "dembow",
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
            "sub-bass",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            6,
            8,
            14,
            16,
            22,
            24,
            30
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
          "syncopationRating": 0.9,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "short",
            "sub"
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
              "id": "rg-dembow-bass-v-sparse",
              "parentPatternId": "rg-dembow-bass",
              "name": "Dembow Syncopated Bass — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                8,
                16,
                24
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "rg-dembow-bass-v-shift",
              "parentPatternId": "rg-dembow-bass",
              "name": "Dembow Syncopated Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                0,
                5,
                8,
                13,
                16,
                21,
                24,
                29
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
            "dembow",
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
          "id": "rg-synth-stab",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Offbeat Synth Stab",
          "family": "Reggaetón Stabs",
          "category": "ostinato",
          "description": "Short chord/synth stabs reinforce the offbeat",
          "tags": [
            "stabs",
            "offbeat",
            "reggaeton"
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
            "clavinet"
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
            "chorus",
            "verse"
          ],
    
    
    
          "variants": [
            {
              "id": "rg-synth-stab-v-sparse",
              "parentPatternId": "rg-synth-stab",
              "name": "Offbeat Synth Stab — sparse",
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
              "id": "rg-synth-stab-v-shift",
              "parentPatternId": "rg-synth-stab",
              "name": "Offbeat Synth Stab — accent shift",
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
            "stabs",
            "offbeat",
            "reggaeton"
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
          "id": "rg-10-perreo-shaker-layer",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Perreo shaker displacement",
          "family": "Percussion",
          "category": "ostinato",
          "description": "Straight eighth-note shaker pulse kept quiet",
          "tags": [
            "shaker",
            "density control"
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
            "shaker"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.38,
            0.5,
            0.4,
            0.52,
            0.4,
            0.48,
            0.38,
            0.5
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" density control"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Percussion; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "shaker",
            "density control"
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
          "id": "rg-18-dembow-lead-counterline",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow-perreo", "reggaeton-dembow-melodic"],
          "name": "Dembow Synth Counterline",
          "family": "Melody",
          "category": "ostinato",
          "description": "Syncopated offbeat synth counterline weaving around the Dembow vocals",
          "tags": ["reggaeton", "counterline", "synth"],
          "scopes": ["measure", "phrase", "region", "track", "song"],
          "roles": ["lead", "melody", "counterline"],
          "approaches": ["counterline", "groove"],
          "instruments": ["synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [2, 5, 8, 10, 13],
          "accentProfile": [0.8, 0.9, 0.85, 0.9, 0.85],
          "durationGrid": [2, 2, 2, 2, 2],
          "syncopationRating": 0.8,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["fm-bite"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": ["middle", "end"],
          "sectionUsage": ["verse", "chorus", "solo"],
          "variants": [],
          "provenance": "Authored native Reggaeton counterline pattern.",
          "authenticityTags": ["reggaeton", "counterline"],
          "danceTags": ["social-partner"],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];
