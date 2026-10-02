import type { MusicalPattern, GenreWorld } from '../../schema';

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

export const REGGAETON_DEMBOW_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "rg-15-reggaeton-tag-turn",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Dembow tag turnaround",
          "family": "Cadence",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Four-hit turnaround into the next loop",
          "tags": [
            "tag",
            "transition"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "fill"
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
            11,
            13,
            14,
            15
          ],
          "hitGrid": [
            "snare",
            "clap",
            "snare",
            "clap"
          ],
          "accentProfile": [
            0.75,
            1,
            0.75,
            1
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" transition"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tag",
            "transition"
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

export const REGGAETON_DEMBOW_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "rg-09-reggaeton-piano-stab",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Reggaetón piano offbeat stab",
          "family": "Harmony",
          "category": "cell",
          "description": "Short piano/synth anticipations that leave the",
          "tags": [
            "stabs",
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
            "piano",
            "polysynth"
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
            0.55,
            0.72,
            0.58,
            0.8
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" offbeat"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Harmony; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stabs",
            "offbeat"
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

export const REGGAETON_DEMBOW_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "rg-14-modern-dembow-triplet-fill",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Modern Dembow Phrase-End Turn",
          "family": "Fill",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short 16th-note phrase-end turn that",
          "tags": [
            "fill",
            "phrase end",
            "16th subdivision"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "fill"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            12,
            14,
            15
          ],
          "hitGrid": [
            "snare",
            "clap",
            "kick"
          ],
          "accentProfile": [
            0.58,
            0.76,
            0.96
          ],
          "syncopationRating": 0.72,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Fill; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "phrase-end fill",
            "16th subdivision"
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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

export const REGGAETON_DEMBOW_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "rg-11-dembow-vocal-pickup",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Dembow Vocal Pickup",
          "family": "synth",
          "category": "phrasePattern",
          "description": "Short pickup into the next bar,",
          "tags": [
            "pickup",
            "vocal pocket"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            13,
            14,
            15
          ],
          "accentProfile": [
            0.5,
            0.7,
            0.9
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" vocal pocket"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Voice; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "pickup",
            "vocal pocket"
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
          "id": "rg-16-perreo-synth-hook",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow-perreo", "reggaeton-modern"],
          "name": "Perreo Minor Synth Hook",
          "family": "Melody",
          "category": "phrasePattern",
          "description": "Aggressive syncopated 16th minor synth hook driving over the Dembow beat",
          "tags": ["perreo", "synth", "lead", "minor-hook"],
          "scopes": ["measure", "phrase", "region", "track", "song"],
          "roles": ["lead", "melody"],
          "approaches": ["lead", "melody"],
          "instruments": ["synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [0, 3, 6, 8, 11, 14],
          "accentProfile": [1.0, 0.75, 0.85, 0.95, 0.75, 0.85],
          "velocityProfile": [0.9, 0.8, 0.85, 0.9, 0.8, 0.85],
          "durationGrid": [2, 2, 2, 2, 2, 2],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["staccato", "fm-bite"],
          "supportedEnergy": [2, 3, 4, 5],
          "phrasePosition": ["start", "middle", "end"],
          "sectionUsage": ["intro", "verse", "chorus", "solo"],
          "variants": [],
          "provenance": "Authored native Reggaeton lead pattern.",
          "authenticityTags": ["reggaeton", "perreo", "synth-lead"],
          "danceTags": ["festival-fusion"],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.95,
          "enabled": true
        },
  {
          "id": "rg-17-melodic-pluck-lead",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow-melodic", "reggaeton-modern"],
          "name": "Medellín Plucked Synth Lead",
          "family": "Melody",
          "category": "phrasePattern",
          "description": "Smooth Colombia Medellín style plucked synth melody with romantic vocal-style phrasing",
          "tags": ["medellin", "synth", "pluck", "lead"],
          "scopes": ["measure", "phrase", "region", "track", "song"],
          "roles": ["lead", "melody"],
          "approaches": ["lead", "melody"],
          "instruments": ["synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [0, 2, 4, 7, 10, 12, 14],
          "accentProfile": [0.9, 0.7, 0.8, 0.85, 0.9, 0.7, 0.8],
          "durationGrid": [2, 2, 3, 2, 2, 2, 2],
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["tight-env-pluck"],
          "supportedEnergy": [1, 2, 3, 4],
          "phrasePosition": ["start", "middle", "end"],
          "sectionUsage": ["intro", "verse", "chorus"],
          "variants": [],
          "provenance": "Authored native Reggaeton lead pattern.",
          "authenticityTags": ["reggaeton", "melodic", "pluck-lead"],
          "danceTags": ["social-partner"],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.95,
          "enabled": true
        }
];

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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
          "description": "Short sub-bass answer lands around the",
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

export const REGGAETON_DEMBOW_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rg-12-reggaeton-hook-lift",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Reggaeton Hook Dembow Lift",
          "family": "Dembow",
          "category": "sectionPattern",
          "description": "Two-bar chorus variation: the core dembow",
          "tags": [
            "hook lift",
            "dembow",
            "chorus"
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
            "drums"
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
            "clap",
            "kick"
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
            0.92,
            0.7,
            0.9,
            0.68,
            0.86,
            0.94
          ],
          "syncopationRating": 0.54,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern rebuilt as a single-track dembow performance cell; no mixed-layer recipe.",
          "authenticityTags": [
            "dembow",
            "chorus variation",
            "clap punctuation"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": REGGAETON_DEMBOW_WORLD_PATTERNS_GROOVE,
  "ostinato": REGGAETON_DEMBOW_WORLD_PATTERNS_OSTINATO,
  "rolePattern": REGGAETON_DEMBOW_WORLD_PATTERNS_ROLEPATTERN,
  "break": REGGAETON_DEMBOW_WORLD_PATTERNS_BREAK,
  "cell": REGGAETON_DEMBOW_WORLD_PATTERNS_CELL,
  "phrasePattern": REGGAETON_DEMBOW_WORLD_PATTERNS_PHRASEPATTERN,
  "sectionPattern": REGGAETON_DEMBOW_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": REGGAETON_DEMBOW_WORLD_PATTERNS_FILL,
  "cadence": REGGAETON_DEMBOW_WORLD_PATTERNS_CADENCE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"ostinato","index":0},{"category":"rolePattern","index":0},{"category":"ostinato","index":1},{"category":"break","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"rolePattern","index":1},{"category":"cell","index":0},{"category":"ostinato","index":2},{"category":"phrasePattern","index":0},{"category":"sectionPattern","index":0},{"category":"break","index":1},{"category":"fill","index":0},{"category":"cadence","index":0},{"category":"phrasePattern","index":1},{"category":"phrasePattern","index":2},{"category":"ostinato","index":3}];

export const REGGAETON_DEMBOW_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
