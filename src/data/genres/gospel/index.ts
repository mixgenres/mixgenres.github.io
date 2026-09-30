import type { GenreWorld } from '../../schema';

/** Standalone authored definition for Gospel. */
export const GOSPEL_WORLD: GenreWorld = {
  "id": "gospel",
  "name": "Gospel",
  "family": "Vocal / Church / Soul",
  "color": "#c29b38",
  "level": "world",
  "description": "Devotional spirit, church pocket, call-and-response choirs, and Hammond organ swells.",
  "substyles": [
    "Traditional Gospel",
    "Contemporary Gospel",
    "Southern Gospel",
    "Choir Gospel"
  ],
  "artists": [
    "Mahalia Jackson",
    "Aretha Franklin",
    "Andraé Crouch",
    "The Edwin Hawkins Singers"
  ],
  "concepts": [
    "Call and response",
    "Hammond organ swells",
    "Vocal shouting",
    "Church pocket swing"
  ],
  "crossLinks": [
    "Folk ↔ Country",
    "Folk ↔ Blues",
    "Folk ↔ Rock"
  ],
  "roles": {
    "lead": [
      "choir",
      "piano",
      "organ"
    ],
    "harmony": [
      "piano",
      "rock-organ",
      "organ"
    ],
    "bass": [
      "bass"
    ],
    "rhythm": [
      "drums",
      "tambourine"
    ],
    "percussion": [
      "tambourine",
      "hand-percussion"
    ]
  },
  "tuningSystem": "12-tet",
  "signatureCell": "Alternating thumb Travis picking with syncopated treble melody and open chords",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "styleDefinitions": [
    {
      "id": "gospel-traditional",
      "worldId": "gospel",
      "name": "Traditional Gospel",
      "origin": "Chicago / Deep South",
      "era": "1930s–1950s",
      "description": "Handclaps, foot-stomps, and soaring vocal passion.",
      "characteristicInstruments": [
        "organ",
        "piano",
        "choir",
        "drums",
        "tambourine"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        80,
        120
      ],
      "keySubstyles": [
        "Traditional Gospel",
        "Choir Gospel"
      ],
      "coreConcepts": [
        "Call and response",
        "Hammond organ swells",
        "Vocal shouting"
      ],
      "rhythmicGrammar": [
        "4/4 swing church pocket"
      ],
      "danceTags": [
        "spiritual"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Gospel shuffle with tambourine on 2 and 4",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "F",
          "C",
          "G"
        ],
        "verse": [
          "C",
          "F",
          "C",
          "G"
        ],
        "chorus": [
          "F",
          "C",
          "G",
          "C"
        ],
        "solo": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "coda": [
          "F",
          "C",
          "F",
          "C"
        ]
      }
    },
    {
      "id": "gospel-contemporary",
      "worldId": "gospel",
      "name": "Contemporary Gospel",
      "origin": "United States (Chicago, Detroit, Atlanta)",
      "era": "1980s–present",
      "description": "Polished praise-and-worship grooves with modern keys and tight rhythm section.",
      "characteristicInstruments": [
        "piano",
        "organ",
        "choir",
        "bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        76,
        112
      ],
      "keySubstyles": [
        "Contemporary Gospel",
        "Praise & Worship"
      ],
      "coreConcepts": [
        "Lead vocal with choir stacks",
        "Pop-soul harmony",
        "Build to modulating chorus"
      ],
      "rhythmicGrammar": [
        "4/4 straight-16th praise pocket with pushed backbeat"
      ],
      "danceTags": [
        "listening",
        "solo-listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Straight-16th praise pocket with piano pad and choir swell on the chorus",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "verse": [
          "C",
          "G/B",
          "Am",
          "F"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am"
        ],
        "solo": [
          "C",
          "G",
          "Am",
          "F"
        ],
        "coda": [
          "F",
          "G",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "gospel-southern",
      "worldId": "gospel",
      "name": "Southern Gospel",
      "origin": "Southern United States (Tennessee, Georgia, Texas)",
      "era": "1910s–1960s",
      "description": "Close-harmony quartet singing over upright piano and a bouncing bass.",
      "characteristicInstruments": [
        "piano",
        "bass",
        "choir",
        "drums",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        84,
        132
      ],
      "keySubstyles": [
        "Southern Gospel",
        "Gospel Quartet"
      ],
      "coreConcepts": [
        "Four-part close harmony",
        "Bass-vocal walk-ups",
        "Shape-note hymn heritage"
      ],
      "rhythmicGrammar": [
        "4/4 boom-chick with walking bass and off-beat piano fills"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Boom-chick piano left hand with quartet bass walk-ups into the cadence",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "D",
          "G",
          "D"
        ],
        "verse": [
          "G",
          "C",
          "G",
          "D"
        ],
        "chorus": [
          "C",
          "G",
          "D",
          "G"
        ],
        "solo": [
          "G",
          "Em",
          "C",
          "D"
        ],
        "coda": [
          "C",
          "G",
          "D",
          "G"
        ]
      }
    },
    {
      "id": "gospel-choir",
      "worldId": "gospel",
      "name": "Choir Gospel",
      "origin": "African American church tradition (Chicago, Los Angeles)",
      "era": "1960s–present",
      "description": "Massed choir call-and-response driven by organ swells and building vamps.",
      "characteristicInstruments": [
        "organ",
        "choir",
        "piano",
        "drums",
        "tambourine"
      ],
      "preferredMeters": [
        "4/4",
        "6/8"
      ],
      "tempoRange": [
        72,
        120
      ],
      "keySubstyles": [
        "Choir Gospel",
        "Mass Choir"
      ],
      "coreConcepts": [
        "Section call and response",
        "Shout vamp",
        "Organ swell dynamics"
      ],
      "rhythmicGrammar": [
        "4/4 or 6/8 church shuffle with vamp intensification"
      ],
      "danceTags": [
        "listening",
        "spiritual"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Slow-building choir vamp with organ swells and handclap backbeat",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "F",
          "C",
          "G"
        ],
        "verse": [
          "C",
          "F",
          "C",
          "G"
        ],
        "chorus": [
          "F",
          "C",
          "G",
          "C"
        ],
        "solo": [
          "C",
          "F",
          "G",
          "F"
        ],
        "coda": [
          "F",
          "C",
          "F",
          "C"
        ]
      }
    }
  ],
  "patterns": [
    {
      "id": "gospel--gospel-church-pocket",
      "worldId": "gospel",
      "name": "Gospel Church Pocket",
      "meter": "4/4",
      "cycleLength": 16,
      "subdivisions": 16,
      "category": "groove",
      "family": "gospel",
      "description": "Dynamic church swing with tambourine and organ swell",
      "onsetGrid": [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0
      ],
      "instruments": [
        "organ",
        "piano",
        "choir",
        "drums",
        "tambourine"
      ],
      "roles": [
        "rhythm",
        "percussion"
      ],
      "tags": [
        "pocket",
        "swing",
        "church"
      ],
      "scopes": [
        "region"
      ],
      "variants": [],
      "styleIds": []
    },
    {
      "id": "gospel--gospel-shout-vamp",
      "worldId": "gospel",
      "name": "Gospel Shout Vamp",
      "shortName": "Gospel Shout Vamp",
      "family": "gospel",
      "category": "groove",
      "description": "Repeating dominant/tonic vamp that intensifies through choir answers and organ accents.",
      "tags": [
        "shout-vamp",
        "church-backbeat",
        "gospel"
      ],
      "approaches": [
        "shout-vamp",
        "church-backbeat",
        "gospel"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "harmony",
        "voice",
        "rhythm"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        11,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
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
        "shout-vamp",
        "church-backbeat",
        "gospel"
      ]
    },
    {
      "id": "gospel--gospel-organ-response",
      "worldId": "gospel",
      "name": "Gospel Organ Response",
      "shortName": "Gospel Organ Response",
      "family": "gospel",
      "category": "groove",
      "description": "Organ chord swell or pickup between vocal statements.",
      "tags": [
        "organ-response",
        "gospel",
        "call-response"
      ],
      "approaches": [
        "organ-response",
        "gospel",
        "call-response"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "harmony",
        "comp"
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
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
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
        "organ-response",
        "gospel",
        "call-response"
      ]
    },
    {
      "id": "gospel--gospel-church-shuffle",
      "worldId": "gospel",
      "name": "Church Shuffle Pocket",
      "shortName": "Church Shuffle Pocket",
      "family": "gospel",
      "category": "groove",
      "description": "Moderate shuffle with a deep backbeat and phrase-level space for choir responses.",
      "tags": [
        "shuffle",
        "church-pocket",
        "backbeat"
      ],
      "approaches": [
        "shuffle",
        "church-pocket",
        "backbeat"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "rhythm",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        11,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
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
        "shuffle",
        "church-pocket",
        "backbeat"
      ]
    },
    {
      "id": "gospel--gospel-organ-bubble",
      "worldId": "gospel",
      "name": "Organ Bubble",
      "shortName": "Organ Bubble",
      "family": "gospel",
      "category": "groove",
      "description": "Left-hand pulse with offbeat upper-organ answers, leaving the vocal on top.",
      "tags": [
        "organ",
        "bubble",
        "response"
      ],
      "approaches": [
        "organ",
        "bubble",
        "response"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "harmony",
        "comp"
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
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
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
        "organ",
        "bubble",
        "response"
      ]
    },
    {
      "id": "gospel--gospel-tambourine-backbeat",
      "worldId": "gospel",
      "name": "Gospel Tambourine Backbeat",
      "shortName": "Gospel Tambourine Backbeat",
      "family": "gospel",
      "category": "groove",
      "description": "Strong 2-and-4 tambourine with selective fills at phrase boundaries.",
      "tags": [
        "tambourine",
        "2-and-4",
        "fill"
      ],
      "approaches": [
        "tambourine",
        "2-and-4",
        "fill"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "percussion",
        "rhythm"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.5,
        0.78
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "tambourine",
        "2-and-4",
        "fill"
      ]
    },
    {
      "id": "gospel--gospel-choir-response",
      "worldId": "gospel",
      "name": "Choir Call and Response",
      "shortName": "Choir Call and Response",
      "family": "gospel",
      "category": "groove",
      "description": "Short answer cells that occupy the gaps left by a lead statement.",
      "tags": [
        "call-response",
        "choir",
        "answer"
      ],
      "approaches": [
        "call-response",
        "choir",
        "answer"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "lead",
        "voice",
        "harmony"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        6,
        7,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
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
        "call-response",
        "choir",
        "answer"
      ]
    },
    {
      "id": "gospel--gospel-bass-walk",
      "worldId": "gospel",
      "name": "Gospel Bass Walk",
      "shortName": "Gospel Bass Walk",
      "family": "gospel",
      "category": "groove",
      "description": "Root/third/fifth passing motion that climbs into the next church cadence.",
      "tags": [
        "gospel",
        "bass",
        "passing"
      ],
      "approaches": [
        "gospel",
        "bass",
        "passing"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
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
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
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
        "gospel",
        "bass",
        "passing"
      ]
    },
    {
      "id": "gospel--gospel-handclap-pulse",
      "worldId": "gospel",
      "name": "Gospel Handclap Pulse",
      "shortName": "Gospel Handclap Pulse",
      "family": "gospel",
      "category": "groove",
      "description": "Handclap/foot-stomp answer around 2 and 4 with phrase-end lifts.",
      "tags": [
        "gospel",
        "church-backbeat",
        "clap"
      ],
      "approaches": [
        "gospel",
        "church-backbeat",
        "clap"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "percussion",
        "rhythm"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.5,
        0.78
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "gospel",
        "church-backbeat",
        "clap"
      ]
    }
  ]
};
