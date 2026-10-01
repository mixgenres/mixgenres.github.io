import type { GenreWorld, MusicalPattern } from '../../schema';


const SKA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "sk-offbeat-chop",
          "worldId": "ska",
          "styleIds": ["ska-trad-ska"],
          "name": "Ska Offbeat Chop",
          "family": "Ska Skank",
          "category": "ostinato",
          "description": "Short guitar/piano attacks on every offbeat,",
          "tags": [
            "ska",
            "upstroke",
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
            "electric-guitar",
            "piano"
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
          "syncopationRating": 0.78,
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
              "id": "sk-offbeat-chop-v-sparse",
              "parentPatternId": "sk-offbeat-chop",
              "name": "Ska Offbeat Chop — sparse",
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
              "id": "sk-offbeat-chop-v-shift",
              "parentPatternId": "sk-offbeat-chop",
              "name": "Ska Offbeat Chop — accent shift",
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
            "ska",
            "upstroke",
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
          "id": "sk-rocksteady-bass",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Rocksteady Bass Hold",
          "family": "Rocksteady Bass",
          "category": "ostinato",
          "description": "Longer bass notes and fewer attacks",
          "tags": [
            "rocksteady",
            "bass",
            "reggae"
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
            "bass",
            "upright-bass"
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
          "syncopationRating": 0.35,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "bridge",
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "sk-rocksteady-bass-v-sparse",
              "parentPatternId": "sk-rocksteady-bass",
              "name": "Rocksteady Bass Hold — sparse",
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
              "id": "sk-rocksteady-bass-v-shift",
              "parentPatternId": "sk-rocksteady-bass",
              "name": "Rocksteady Bass Hold — accent shift",
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
            "rocksteady",
            "bass",
            "reggae"
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


const SKA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "sk-walking-bass",
          "worldId": "ska",
          "styleIds": ["ska-trad-ska"],
          "name": "Ska Walking Bass",
          "family": "Ska Bass",
          "category": "phrasePattern",
          "description": "Walking bass connects chord roots with passing notes.",
          "tags": [
            "ska",
            "walking",
            "bass"
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
            "bass",
            "upright-bass"
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
          "syncopationRating": 0.62,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "walking"
          ],
          "supportedEnergy": [4, 5],
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
              "id": "sk-walking-bass-v-sparse",
              "parentPatternId": "sk-walking-bass",
              "name": "Ska Walking Bass — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9,
                0.65
              ]
            },
            {
              "id": "sk-walking-bass-v-shift",
              "parentPatternId": "sk-walking-bass",
              "name": "Ska Walking Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
            "ska",
            "walking",
            "bass"
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


const SKA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "sk-horn-answer",
          "worldId": "ska",
          "styleIds": ["ska-trad-ska"],
          "name": "Horn Section Answer",
          "family": "Ska Horns",
          "category": "interactionPattern",
          "description": "Short brass riff answers the guitar/vocal",
          "tags": [
            "ska",
            "horn",
            "answer"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "trombone"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            16,
            20,
            22,
            24,
            28,
            30
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
          "syncopationRating": 0.72,
          "anticipationOffset": 0,
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
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "sk-horn-answer-v-sparse",
              "parentPatternId": "sk-horn-answer",
              "name": "Horn Section Answer — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                16,
                22,
                28
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "sk-horn-answer-v-shift",
              "parentPatternId": "sk-horn-answer",
              "name": "Horn Section Answer — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                16,
                20,
                22,
                24,
                28,
                30
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
            "ska",
            "horn",
            "answer"
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
          "id": "sk-08-horn-section-answer",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Horn Section Answer",
          "family": "First-Wave Ska",
          "category": "interactionPattern",
          "description": "Short horn riff responds after vocal/guitar",
          "tags": [
            "horn answer"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "horn-section"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "trumpet",
            "trombone",
            "alto-sax"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            8,
            10,
            12,
            24,
            26,
            28
          ],
          "accentProfile": [
            0.65,
            0.72,
            0.85,
            0.62,
            0.7,
            0.9
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "horn answer"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "horn answer"
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


const SKA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
,
  {
    "id": "tech-ska-jamaican-shuffle",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-jamaican-ska-jazz"
    ],
    "name": "Jamaican shuffle",
    "shortName": "Jamaican shuffle",
    "family": "ska",
    "category": "groove",
    "description": "Technique: Jamaican shuffle",
    "tags": [
      "ska",
      "Jamaican shuffle"
    ],
    "approaches": [
      "Jamaican shuffle"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums"
    ],
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
      0.65,
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "Jamaican shuffle"
    ],
    "techniques": [
      "Jamaican shuffle"
    ]
  },
  {
    "id": "tech-ska-ska-punk-double-time",
    "worldId": "ska",
    "styleIds": [
      "ska-third-wave-ska"
    ],
    "name": "ska-punk double-time",
    "shortName": "ska-punk double-time",
    "family": "ska",
    "category": "groove",
    "description": "Technique: ska-punk double-time",
    "tags": [
      "ska",
      "ska-punk double-time"
    ],
    "approaches": [
      "ska-punk double-time"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "ska-punk double-time"
    ],
    "techniques": [
      "ska-punk double-time"
    ]
  },
  {
    "id": "style-ska-jamaican-first-wave-ska-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska"
    ],
    "name": "Jamaican First-Wave Ska Signature Cell",
    "shortName": "Jamaican First-Wave Ska Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "brass"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "ska",
      "signature"
    ],
    "techniques": [
      "jazz horn solo",
      "walking ska bass",
      "skank guitar",
      "horn/guitar call-response",
      "Jamaican shuffle",
      "horn stab"
    ]
  },
  {
    "id": "style-ska-rocksteady-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-rocksteady"
    ],
    "name": "Rocksteady Signature Cell",
    "shortName": "Rocksteady Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "bass",
      "electric-guitar",
      "drums",
      "voice"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "ska",
      "signature"
    ],
    "techniques": [
      "rocksteady bass",
      "skank guitar",
      "horn/guitar call-response",
      "walking ska bass"
    ]
  },
  {
    "id": "style-ska-jamaican-ska-jazz-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-ska-jazz"
    ],
    "name": "Jamaican Ska Jazz Signature Cell",
    "shortName": "Jamaican Ska Jazz Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "trumpet",
      "trombone",
      "bass",
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "ska",
      "signature"
    ],
    "techniques": [
      "jazz horn solo",
      "skank guitar",
      "walking ska bass",
      "horn/guitar call-response",
      "Jamaican shuffle",
      "horn stab"
    ]
  },
  {
    "id": "style-ska-third-wave-ska-signature",
    "worldId": "ska",
    "styleIds": [
      "ska-third-wave-ska"
    ],
    "name": "Third-Wave Ska Signature Cell",
    "shortName": "Third-Wave Ska Cell",
    "family": "ska",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "ska",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "brass"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "ska",
      "signature"
    ],
    "techniques": [
      "horn stab",
      "ska-punk double-time",
      "horn/guitar call-response",
      "jazz horn solo",
      "walking ska bass"
    ]
  }
];


const SKA_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "sk-06-first-wave-offbeat-chop",
          "worldId": "ska",
          "styleIds": ["ska-trad-ska"],
          "name": "First-Wave Offbeat Chop",
          "family": "First-Wave Ska",
          "category": "cell",
          "description": "Crisp guitar/piano upstrokes on the offbeats,",
          "tags": [
            "offbeat chop"
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
            "electric-guitar",
            "piano"
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
            0.8,
            0.72,
            0.78,
            0.75
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "offbeat chop"
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
            "offbeat chop"
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
          "id": "sk-12-ska-piano-bubble",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Piano bubble response",
          "family": "First-Wave Ska",
          "category": "cell",
          "description": "An offbeat piano bubble provides a light harmonic pulse.",
          "tags": [
            "piano bubble"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "piano"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano"
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
            0.6,
            0.7,
            0.62,
            0.74
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "piano bubble"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "piano bubble"
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
          "id": "sk-13-ska-horn-stab",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Horn offbeat punctuations",
          "family": "Horn Section",
          "category": "cell",
          "description": "Short horn punctuation answers just after the main beat.",
          "tags": [
            "horn stab"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "brass"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "trumpet",
            "trombone"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.75,
            0.55,
            0.8,
            0.62
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "horn stab"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Horn Section; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "horn stab"
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


const SKA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "sk-07-walking-ska-bass",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska walking bass contour",
          "family": "First-Wave Ska",
          "category": "bass",
          "description": "Walking bass contour with an approach",
          "tags": [
            "walking bass"
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
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.68,
            0.82,
            0.7,
            0.9,
            0.68,
            0.82,
            0.7
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "walking bass"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "walking bass"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
,
  {
    "id": "tech-ska-walking-ska-bass",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-rocksteady",
      "ska-jamaican-ska-jazz",
      "ska-third-wave-ska"
    ],
    "name": "walking ska bass",
    "shortName": "walking ska bass",
    "family": "ska",
    "category": "bass",
    "description": "Technique: walking ska bass",
    "tags": [
      "ska",
      "walking ska bass"
    ],
    "approaches": [
      "walking ska bass"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
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
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72,
      0.92,
      0.72
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "walking ska bass"
    ],
    "techniques": [
      "walking ska bass"
    ]
  },
  {
    "id": "tech-ska-rocksteady-bass",
    "worldId": "ska",
    "styleIds": [
      "ska-rocksteady"
    ],
    "name": "rocksteady bass",
    "shortName": "rocksteady bass",
    "family": "ska",
    "category": "bass",
    "description": "Technique: rocksteady bass",
    "tags": [
      "ska",
      "rocksteady bass"
    ],
    "approaches": [
      "rocksteady bass"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "rocksteady bass"
    ],
    "techniques": [
      "rocksteady bass"
    ]
  }
];


const SKA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "sk-10-rocksteady-transition",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Rocksteady Transition",
          "family": "Ska → Rocksteady",
          "category": "sectionPattern",
          "description": "Reduce tempo feel and rhythmic density,",
          "tags": [
            "rocksteady"
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
            "bass",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.85,
            0.5,
            0.7,
            0.55
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "rocksteady"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "bridge",
            "breakdown"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Ska → Rocksteady; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "rocksteady"
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


const SKA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "sk-14-ska-break-call",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska Break Call",
          "family": "Break",
          "category": "break",
          "transitionType": "fill",
          "description": "Band stop followed by horn pickup",
          "tags": [
            "stop-time",
            "pickup"
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
            "horn-section"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            12,
            14
          ],
          "accentProfile": [
            0.8,
            0.55,
            0.9
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "stop-time",
            " pickup"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "bridge",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stop-time",
            "pickup"
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


const SKA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "sk-15-ska-final-shout",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska Final Shout",
          "family": "Cadence",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Full-band accent sequence for the ending,",
          "tags": [
            "final hit"
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
            "horn-section",
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.7,
            0.82,
            0.75,
            1
          ],
          "syncopationRating": 0.2,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "final hit"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "final hit"
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


const SKA_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-ska-skank-guitar",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-rocksteady",
      "ska-jamaican-ska-jazz"
    ],
    "name": "skank guitar",
    "shortName": "skank guitar",
    "family": "ska",
    "category": "comping",
    "description": "Technique: skank guitar",
    "tags": [
      "ska",
      "skank guitar"
    ],
    "approaches": [
      "skank guitar"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "skank guitar"
    ],
    "techniques": [
      "skank guitar"
    ]
  },
  {
    "id": "tech-ska-two-tone-organ",
    "worldId": "ska",
    "styleIds": [],
    "name": "two-tone organ",
    "shortName": "two-tone organ",
    "family": "ska",
    "category": "comping",
    "description": "Technique: two-tone organ",
    "tags": [
      "ska",
      "two-tone organ"
    ],
    "approaches": [
      "two-tone organ"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "piano"
    ],
    "instruments": [
      "organ"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "two-tone organ"
    ],
    "techniques": [
      "two-tone organ"
    ]
  }
];


const SKA_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-ska-horn-stab",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-jamaican-ska-jazz",
      "ska-third-wave-ska"
    ],
    "name": "horn stab",
    "shortName": "horn stab",
    "family": "ska",
    "category": "lead",
    "description": "Technique: horn stab",
    "tags": [
      "ska",
      "horn stab"
    ],
    "approaches": [
      "horn stab"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "horn-section",
      "lead"
    ],
    "instruments": [
      "brass"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "horn stab"
    ],
    "techniques": [
      "horn stab"
    ]
  },
  {
    "id": "tech-ska-jazz-horn-solo",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-jamaican-ska-jazz",
      "ska-third-wave-ska"
    ],
    "name": "jazz horn solo",
    "shortName": "jazz horn solo",
    "family": "ska",
    "category": "lead",
    "description": "Technique: jazz horn solo",
    "tags": [
      "ska",
      "jazz horn solo"
    ],
    "approaches": [
      "jazz horn solo"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "horn-section",
      "lead"
    ],
    "instruments": [
      "brass"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "jazz horn solo"
    ],
    "techniques": [
      "jazz horn solo"
    ]
  },
  {
    "id": "tech-ska-horn-guitar-call-response",
    "worldId": "ska",
    "styleIds": [
      "ska-jamaican-first-wave-ska",
      "ska-rocksteady",
      "ska-jamaican-ska-jazz",
      "ska-third-wave-ska"
    ],
    "name": "horn/guitar call-response",
    "shortName": "horn/guitar call-response",
    "family": "ska",
    "category": "lead",
    "description": "Technique: horn/guitar call-response",
    "tags": [
      "ska",
      "horn/guitar call-response"
    ],
    "approaches": [
      "horn/guitar call-response"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "voice",
      "lead"
    ],
    "instruments": [
      "voice"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "ska",
      "horn/guitar call-response"
    ],
    "techniques": [
      "horn/guitar call-response"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": SKA_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": SKA_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": SKA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "groove": SKA_WORLD_PATTERNS_GROOVE,
  "cell": SKA_WORLD_PATTERNS_CELL,
  "bass": SKA_WORLD_PATTERNS_BASS,
  "sectionPattern": SKA_WORLD_PATTERNS_SECTIONPATTERN,
  "break": SKA_WORLD_PATTERNS_BREAK,
  "cadence": SKA_WORLD_PATTERNS_CADENCE,
  "comping": SKA_WORLD_PATTERNS_COMPING,
  "lead": SKA_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"groove","index":0},{"category":"ostinato","index":1},{"category":"cell","index":0},{"category":"bass","index":0},{"category":"interactionPattern","index":1},{"category":"groove","index":1},{"category":"sectionPattern","index":0},{"category":"groove","index":2},{"category":"cell","index":1},{"category":"cell","index":2},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"bass","index":1},{"category":"bass","index":2},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"lead","index":2}];

export const SKA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
