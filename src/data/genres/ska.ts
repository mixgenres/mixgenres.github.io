import type { GenreWorld } from '../../types';

export const SKA_WORLD: GenreWorld = {
  "id": "ska",
  "name": "Ska",
  "family": "Jamaican / UK revival",
  "color": "#d4a72c",
  "level": "world",
  "description": "Ska gets its own world because",
  "styleDefinitions": [
    {
      "id": "ska-trad-ska",
      "worldId": "ska",
      "name": "Traditional Ska",
      "origin": "Kingston, Jamaica",
      "era": "Late 1950s–1960s",
      "description": "Upbeat Chop • Big Band Horns",
      "characteristicInstruments": [
        "brass",
        "electric-guitar",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        140
      ],
      "keySubstyles": [
        "First Wave Ska",
        "Studio One Sound"
      ],
      "coreConcepts": [
        "sharp offbeat guitar and piano chops (the \"skank\")",
        "Don Drummond lyrical trombone solos and trumpet fanfares",
        "walking acoustic basslines with jazz swing feel",
        "infectious dancehall energy"
      ],
      "rhythmicGrammar": [
        "accent strictly on offbeat eighth notes (1-and, 2-and, 3-and, 4-and) with walking bass on downbeats"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Don Drummond trombone lead soaring over sharp offbeat skank guitar chop and walking bass",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Bb",
          "Eb",
          "F",
          "Bb"
        ],
        "theme": [
          "Bb",
          "Eb",
          "F",
          "Bb",
          "Gm",
          "Cm",
          "F",
          "Bb"
        ],
        "solo": [
          "Eb",
          "Eb",
          "Bb",
          "Bb",
          "F",
          "Eb",
          "Bb",
          "Bb"
        ],
        "coda": [
          "Eb",
          "F",
          "Bb",
          "Bb"
        ]
      }
    },
    {
      "id": "ska-two-tone",
      "worldId": "ska",
      "name": "Two-Tone",
      "origin": "Coventry / London, UK",
      "era": "Late 1970s–Early 1980s",
      "description": "Punk Energy • Checkered • Social",
      "characteristicInstruments": [
        "electric-guitar",
        "organ",
        "brass",
        "bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        140,
        165
      ],
      "keySubstyles": [
        "2-Tone UK",
        "Nutty Sound"
      ],
      "coreConcepts": [
        "fast punk rock tempos combined with Jamaican ska skank chops",
        "Jerry Dammers biting Hammond organ leads",
        "antiracist working-class lyrics and black-and-white checkered suits",
        "snappy drum kick and snare"
      ],
      "rhythmicGrammar": [
        "rapid offbeat guitar skank over driving rock backbeat snare and aggressive bassline"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Fast-paced organ skank chop launching into snappy British vocal delivery and punchy brass",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "G",
          "Dm",
          "G"
        ],
        "verse": [
          "Dm",
          "G",
          "Dm",
          "G",
          "Dm",
          "G",
          "Dm",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "Dm",
          "Dm",
          "F",
          "G",
          "A7",
          "A7"
        ],
        "coda": [
          "Dm",
          "G",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "ska-ska-punk",
      "worldId": "ska",
      "name": "Ska-Punk",
      "origin": "California / Gainesville / Boston",
      "era": "1990s",
      "description": "Distortion • Blistering Speed • Horn",
      "characteristicInstruments": [
        "electric-guitar",
        "brass",
        "bass",
        "drums",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        160,
        200
      ],
      "keySubstyles": [
        "Third Wave Ska",
        "Skate Ska-Punk"
      ],
      "coreConcepts": [
        "instant dynamic switching between clean ska upstrokes and roaring distortion power chords",
        "blazing high-speed brass horn melodies in unison",
        "punk-rock fast drum beats and breakdown skank pits",
        "humorous self-deprecating lyrics"
      ],
      "rhythmicGrammar": [
        "blistering 4/4 punk beat alternating with fast clean offbeat skanks and distorted choruses"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Clean high-speed ska skank abruptly exploding into roaring distortion power chord chorus and horns",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G",
          "Am",
          "F"
        ],
        "verse": [
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am",
          "F",
          "G",
          "C",
          "C"
        ],
        "coda": [
          "F",
          "G",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Traditional Ska",
    "Two-Tone",
    "Ska-Punk"
  ],
  "artists": [
    "The Skatalites",
    "Prince Buster",
    "The Specials",
    "Madness",
    "Sublime",
    "Reel Big Fish"
  ],
  "concepts": [
    "offbeat chop",
    "walking bass",
    "horn answer",
    "2 Tone drive",
    "rocksteady transition"
  ],
  "roles": {
    "harmony": [
      "offbeat guitar/piano"
    ],
    "bass": [
      "walking / melodic bass"
    ],
    "lead": [
      "horn riffs"
    ],
    "drums": [
      "ska drive"
    ],
    "synth": [
      "call-and-response"
    ]
  },
  "patterns": [
    {
      "id": "sk-offbeat-chop",
      "worldId": "ska",
      "styleIds": ["ska-first-wave"],
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
          "id": "sk-offbeat-chop-v-shift",
          "parentPatternId": "sk-offbeat-chop",
          "name": "Ska Offbeat Chop — accent shift",
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
      "id": "sk-walking-bass",
      "worldId": "ska",
      "styleIds": ["ska-first-wave"],
      "name": "Ska Walking Bass",
      "family": "Ska Bass",
      "category": "phrasePattern",
      "description": "Walking bass connects chord roots with",
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
          "description": "Leaves selected attacks open for a",
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
          "description": "Retains the cell while moving emphasis",
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
    },
    {
      "id": "sk-horn-answer",
      "worldId": "ska",
      "styleIds": ["ska-first-wave"],
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
          "description": "Leaves selected attacks open for a",
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
          "description": "Retains the cell while moving emphasis",
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
      "id": "sk-two-tone-drive",
      "worldId": "ska",
      "styleIds": ["ska-two-tone"],
      "name": "Two-tone upstroke drive",
      "family": "2 Tone Rhythm",
      "category": "groove",
      "description": "Tighter revival-era offbeat guitar with a",
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
          "id": "sk-two-tone-drive-v-shift",
          "parentPatternId": "sk-two-tone-drive",
          "name": "2 Tone Drive — accent shift",
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
      "id": "sk-rocksteady-bass",
      "worldId": "ska",
      "styleIds": ["ska-rocksteady-bridge"],
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
          "id": "sk-rocksteady-bass-v-shift",
          "parentPatternId": "sk-rocksteady-bass",
          "name": "Rocksteady Bass Hold — accent shift",
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
    },
    {
      "id": "sk-06-first-wave-offbeat-chop",
      "worldId": "ska",
      "styleIds": ["ska-first-wave"],
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
    },
    {
      "id": "sk-09-ska-drum-drive",
      "worldId": "ska",
      "styleIds": ["ska-two-tone"],
      "name": "Ska Drum Drive",
      "family": "First-Wave Ska",
      "category": "groove",
      "description": "Up-tempo drum pattern that keeps the",
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
    },
    {
      "id": "sk-12-ska-piano-bubble",
      "worldId": "ska",
      "styleIds": ["ska-two-tone"],
      "name": "Piano bubble response",
      "family": "First-Wave Ska",
      "category": "cell",
      "description": "Offbeat piano bubble used as a",
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
      "description": "Short horn punctuation displaced from the",
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
    },
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
    },
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
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Offbeat chop + walking bass + horn response",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 6
  },
  "crossLinks": [
    "Ska ↔ Reggae / Dub",
    "Ska ↔ Rock / Funk"
  ],
};
