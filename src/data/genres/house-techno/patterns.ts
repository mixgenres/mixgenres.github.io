import type { MusicalPattern, GenreWorld } from '../../schema';

export const HOUSE_TECHNO_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "ht-08-house-bass-lock",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "House Bass Lock",
          "family": "House",
          "category": "bass",
          "description": "Short bass notes interlock with kick",
          "tags": [
            "bass lock"
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
          "instruments": ["bass", "synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            6,
            9,
            13
          ],
          "accentProfile": [
            0.7,
            0.6,
            0.78,
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
            "groove",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on House; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bass lock"
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

export const HOUSE_TECHNO_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "ht-14-club-breakdown",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Club Breakdown",
          "family": "Arrangement",
          "category": "break",
          "transitionType": "fill",
          "description": "Remove kick and bass for a",
          "tags": [
            "breakdown",
            "tension"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": ["synth", "synth"],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            12,
            20
          ],
          "accentProfile": [
            0.55,
            0.4,
            0.75
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" tension"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "end"
          ],
          "sectionUsage": [
            "breakdown"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Arrangement; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "breakdown",
            "tension"
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

export const HOUSE_TECHNO_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "ht-09-house-chord-stab",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "House Chord Stab",
          "family": "House",
          "category": "cell",
          "description": "Syncopated chord stab on the offbeat",
          "tags": [
            "stab",
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
          "instruments": ["piano", "synth"],
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
            0.7,
            0.65,
            0.72,
            0.68
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
            "groove",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on House; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stab",
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
          "instruments": ["drums", "drums"],
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
          "description": "Stable four-on-the-floor foundation; kept as a",
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
          "instruments": ["drums", "drums"],
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
          "instruments": ["drums", "claves"],
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

export const HOUSE_TECHNO_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "ht-offbeat-hat",
          "worldId": "house-techno",
          "styleIds": ["house-deep"],
          "name": "Offbeat Hat",
          "family": "House Hats",
          "category": "ostinato",
          "description": "Open or closed hat on the",
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
          "instruments": ["drums", "drums"],
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
              "id": "ht-offbeat-hat-v-shift",
              "parentPatternId": "ht-offbeat-hat",
              "name": "Offbeat Hat — accent shift",
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
          "instruments": ["bass", "synth"],
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
          "instruments": ["synth", "synth"],
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
              "description": "Leaves selected attacks open for a",
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
              "description": "Retains the cell while moving emphasis",
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
          "instruments": ["drums"],
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
          "instruments": ["synth", "synth"],
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
          "instruments": ["synth"],
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

export const HOUSE_TECHNO_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "ht-acid-303",
          "worldId": "house-techno",
          "styleIds": ["house-techno-acid"],
          "name": "Acid 16-Step Sequence",
          "family": "Acid Bass",
          "category": "phrasePattern",
          "description": "16-step bass sequence with rests, accents",
          "tags": [
            "acid",
            "303",
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
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": ["synth", "synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            7,
            8,
            10,
            13,
            15
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
          "syncopationRating": 0.88,
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
              "id": "ht-acid-303-v-sparse",
              "parentPatternId": "ht-acid-303",
              "name": "Acid 16-Step Sequence — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "ht-acid-303-v-shift",
              "parentPatternId": "ht-acid-303",
              "name": "Acid 16-Step Sequence — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                3,
                5,
                7,
                8,
                10,
                13,
                15
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
            "acid",
            "303",
            "sequence"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        }
];

export const HOUSE_TECHNO_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "ht-13-riser-build",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Riser Build",
          "family": "Arrangement",
          "category": "sectionPattern",
          "description": "Production-style build cue represented as a",
          "tags": [
            "build",
            "automation"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": ["synth", "synth"],
          "meter": "4/4",
          "cycleLength": 4,
          "subdivisions": 64,
          "onsetGrid": [
            0,
            8,
            16,
            24,
            32,
            40,
            48,
            56
          ],
          "accentProfile": [
            0.35,
            0.4,
            0.48,
            0.55,
            0.62,
            0.7,
            0.8,
            0.9
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" automation"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "end"
          ],
          "sectionUsage": [
            "pre-chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Arrangement; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "build",
            "automation"
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
          "id": "ht-15-drop-re-entry",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Post-break re-entry stack",
          "family": "Arrangement",
          "category": "sectionPattern",
          "description": "Section-level re-entry cue combining kick return",
          "tags": [
            "drop",
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
          "instruments": ["drums", "bass", "synth"],
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
            0.8,
            0.9,
            0.85
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" re-entry"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Arrangement; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "drop",
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": HOUSE_TECHNO_WORLD_PATTERNS_GROOVE,
  "ostinato": HOUSE_TECHNO_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": HOUSE_TECHNO_WORLD_PATTERNS_PHRASEPATTERN,
  "bass": HOUSE_TECHNO_WORLD_PATTERNS_BASS,
  "cell": HOUSE_TECHNO_WORLD_PATTERNS_CELL,
  "sectionPattern": HOUSE_TECHNO_WORLD_PATTERNS_SECTIONPATTERN,
  "break": HOUSE_TECHNO_WORLD_PATTERNS_BREAK,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"phrasePattern","index":0},{"category":"groove","index":1},{"category":"ostinato","index":3},{"category":"bass","index":0},{"category":"cell","index":0},{"category":"ostinato","index":4},{"category":"ostinato","index":5},{"category":"groove","index":2},{"category":"sectionPattern","index":0},{"category":"break","index":0},{"category":"sectionPattern","index":1}];

export const HOUSE_TECHNO_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
