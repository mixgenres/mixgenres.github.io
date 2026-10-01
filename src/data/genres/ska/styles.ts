import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
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
      };


const STYLE_1: GenreStyleDefinition = {
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
      };


const STYLE_2: GenreStyleDefinition = {
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
      };


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "ska-jamaican-first-wave-ska",
  "worldId": "ska",
  "name": "Jamaican First-Wave Ska",
  "origin": "Jamaica",
  "era": "1960s",
  "description": "Walking bass, offbeat guitar and piano, jazz horn lines and strong dance pulse.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "brass",
    "piano"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    130
  ],
  "keySubstyles": [
    "Jamaican First-Wave Ska"
  ],
  "coreConcepts": [
    "skank guitar",
    "walking ska bass",
    "jazz horn solo"
  ],
  "rhythmicGrammar": [
    "Walking bass with offbeat skank"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Walking bass with offbeat skank",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "C",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "C",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "The Skatalites",
    "Prince Buster"
  ],
  "referenceTracks": [],
  "techniques": [
    "jazz horn solo",
    "walking ska bass",
    "skank guitar",
    "horn/guitar call-response",
    "Jamaican shuffle",
    "horn stab"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "ska-rocksteady",
  "worldId": "ska",
  "name": "Rocksteady",
  "origin": "Jamaica",
  "era": "1960s",
  "description": "Slower ska evolution emphasizing melodic bass, vocal harmony and relaxed offbeat guitar.",
  "characteristicInstruments": [
    "bass",
    "electric-guitar",
    "drums",
    "voice",
    "backing-vocals"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    70,
    100
  ],
  "keySubstyles": [
    "Rocksteady"
  ],
  "coreConcepts": [
    "rocksteady bass",
    "offbeat guitar",
    "vocal harmony"
  ],
  "rhythmicGrammar": [
    "Melodic bass with relaxed skank"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Melodic bass with relaxed skank",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "C",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "C",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "Alton Ellis",
    "The Heptones"
  ],
  "referenceTracks": [],
  "techniques": [
    "rocksteady bass",
    "skank guitar",
    "horn/guitar call-response",
    "walking ska bass"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "ska-jamaican-ska-jazz",
  "worldId": "ska",
  "name": "Jamaican Ska Jazz",
  "origin": "Jamaica",
  "era": "1960s",
  "description": "Bebop and hard-bop horn language laid over Jamaican rhythm-section patterns.",
  "characteristicInstruments": [
    "trumpet",
    "trombone",
    "bass",
    "drums",
    "electric-guitar"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    130
  ],
  "keySubstyles": [
    "Jamaican Ska Jazz"
  ],
  "coreConcepts": [
    "jazz horn solo",
    "skank guitar",
    "walking bass"
  ],
  "rhythmicGrammar": [
    "Jazz horn language over ska pocket"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Jazz horn language over ska pocket",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "C",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "C",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "Don Drummond",
    "The Skatalites"
  ],
  "referenceTracks": [],
  "techniques": [
    "jazz horn solo",
    "skank guitar",
    "walking ska bass",
    "horn/guitar call-response",
    "Jamaican shuffle",
    "horn stab"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "ska-third-wave-ska",
  "worldId": "ska",
  "name": "Third-Wave Ska",
  "origin": "United States",
  "era": "1990s–Present",
  "description": "Faster punk drums, distorted guitars, horn stabs and pop-punk song structures.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "brass",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    150,
    190
  ],
  "keySubstyles": [
    "Third-Wave Ska"
  ],
  "coreConcepts": [
    "ska-punk double-time",
    "horn stab",
    "punk backbeat"
  ],
  "rhythmicGrammar": [
    "Double-time punk drums with horn stabs"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Double-time punk drums with horn stabs",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "C",
    "Am",
    "F",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "verse": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "chorus": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "bridge": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "solo": [
      "C",
      "Am",
      "F",
      "G"
    ],
    "coda": [
      "C",
      "Am",
      "F",
      "G"
    ]
  },
  "referenceArtists": [
    "Reel Big Fish",
    "Less Than Jake"
  ],
  "referenceTracks": [],
  "techniques": [
    "horn stab",
    "ska-punk double-time",
    "horn/guitar call-response",
    "jazz horn solo",
    "walking ska bass"
  ]
};

export const SKA_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3] };
