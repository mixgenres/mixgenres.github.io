import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "kizomba-tradicional",
        "worldId": "kizomba",
        "name": "Tradicional",
        "origin": "Luanda, Angola",
        "era": "1980s–1990s",
        "description": "Grounded 4/4 groove with zouk influence.",
        "characteristicInstruments": [
          "bass",
          "drums",
          "acoustic-guitar",
          "synth",
          "dikanza"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          88,
          100
        ],
        "keySubstyles": [
          "Classic Angolan Kizomba",
          "Passada Tradicional"
        ],
        "coreConcepts": [
          "grounded weight transfers and clean passada footwork",
          "warm melodic electric basslines",
          "syncopated zouk-derived drum rhythm",
          "sweet Portuguese/Kimbundu vocal melodies"
        ],
        "rhythmicGrammar": [
          "syncopated batida kick with a light snare or clap, soft rolling high percussion and a continuous dikanza scraper pattern"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Smooth syncopated bassline walking under classic Angolan kizomba kick-snare pulse",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Gm",
            "C",
            "F"
          ],
          "verse": [
            "Dm",
            "Gm",
            "C",
            "F",
            "Bb",
            "Gm",
            "A7",
            "Dm"
          ],
          "chorus": [
            "Gm",
            "C",
            "F",
            "Dm",
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ],
          "coda": [
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ]
        }
      };


const STYLE_1: GenreStyleDefinition = {
        "id": "kizomba-semba-playful",
        "worldId": "kizomba",
        "name": "Semba Playful",
        "origin": "Luanda, Angola",
        "era": "1950s–Present",
        "description": "Upbeat • Bouncy • Roots\nJoyful fast-paced",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "congas",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          102,
          118
        ],
        "keySubstyles": [
          "Semba Rápido",
          "Semba de Carnaval"
        ],
        "coreConcepts": [
          "acrobatic trick footwork (ginga)",
          "rasping dikanza (reco-reco) scraper",
          "intricate dual-guitar fingerpicking",
          "humorous joyful social commentary"
        ],
        "rhythmicGrammar": [
          "driving syncopated 4/4 with dikanza scraping continuous 16ths and conga slap on 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Bouncy dual-guitar syncopation with continuous dikanza scrape and playful vocal laugh",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "verse": [
            "C",
            "G7",
            "C",
            "G7",
            "F",
            "C",
            "G7",
            "C"
          ],
          "chorus": [
            "F",
            "G7",
            "Em",
            "Am",
            "Dm",
            "G7",
            "C",
            "C"
          ],
          "coda": [
            "F",
            "G7",
            "C",
            "C"
          ]
        }
      };


const STYLE_2: GenreStyleDefinition = {
        "id": "kizomba-urbankiz",
        "worldId": "kizomba",
        "name": "Urbankiz",
        "origin": "Paris, France / European Circuit",
        "era": "2010s–Present",
        "description": "Linear • Electronic • Syncopated Breaks\nFrench",
        "characteristicInstruments": [
          "synth",
          "drums",
          "sub-bass",
          "sampler",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          96
        ],
        "keySubstyles": [
          "Urban Kiz",
          "Tarraxa Fusion",
          "Kizomba Hip-Hop Remix"
        ],
        "coreConcepts": [
          "strict linear geometric footwork and sharp isolations",
          "electronic Ghetto Zouk beats with sub-bass drops",
          "sudden dynamic breaks and tempo illusions",
          "tension-and-release partnering"
        ],
        "rhythmicGrammar": [
          "electronic 4/4 beat with syncopated 16th sub-bass kicks and dead-stop silence cuts"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Sharp syncopated electronic sub-bass stop followed by instant linear step and sliding synth pad",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "F",
            "C",
            "G"
          ],
          "verse": [
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F",
            "C",
            "G"
          ],
          "breakdown": [
            "F",
            "G",
            "Am",
            "Am",
            "F",
            "G",
            "Am",
            "Am"
          ],
          "coda": [
            "F",
            "G",
            "Am",
            "Am"
          ]
        }
      };


const STYLE_3: GenreStyleDefinition = {
        "id": "kizomba-tarraxinha",
        "worldId": "kizomba",
        "name": "Tarraxinha",
        "origin": "Luanda, Angola",
        "era": "Late 1990s–Present",
        "description": "Sensual • Deep Bass • Micro-movement\nSlow, intimate tarraxinha pulse with restrained syncopation.",
        "characteristicInstruments": [
          "sub-bass",
          "drums",
          "synth",
          "sampler",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          78,
          90
        ],
        "keySubstyles": [
          "Tarraxinha de Luanda",
          "Electronic Tarraxa"
        ],
        "coreConcepts": [
          "slow, hypnotic, minimal percussive beats",
          "massive subterranean sub-bass frequencies",
          "intense static pelvic micro-movements",
          "minimal melodic distraction"
        ],
        "rhythmicGrammar": [
          "sparse, heavy kick and low-tom pulses with deep sub-bass slides and subtle rim clicks"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Deep resonant sub-bass pulse dropping on slow pelvic micro-isolation cue",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "loop": [
            "Fm",
            "Db",
            "Bbm",
            "C7"
          ]
        }
      };


const STYLE_4: GenreStyleDefinition = {
        "id": "kizomba-tarraxo",
        "worldId": "kizomba",
        "name": "Tarraxo",
        "origin": "Paris, France / Portugal",
        "era": "2018–Present",
        "description": "Heavy Sub • Robotic • Chest",
        "characteristicInstruments": [
          "sub-bass",
          "drums",
          "synth",
          "sampler",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          80,
          92
        ],
        "keySubstyles": [
          "Tarraxo French Style",
          "Tarraxo Wave"
        ],
        "coreConcepts": [
          "upper body and chest-led circular movement dynamics",
          "robotic pops, waves, and isolations",
          "aggressive sub-bass wobble and trap-influenced drums",
          "dark electronic sound design"
        ],
        "rhythmicGrammar": [
          "sharp electronic trap-kizomba fusion with stuttering hi-hats and heavy sub-kick"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Aggressive electronic sub-kick and trap snare supporting dynamic chest-roll isolation",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "drop": [
            "Cm",
            "Ab",
            "Fm",
            "G7",
            "Cm",
            "Ab",
            "Bb",
            "G7"
          ]
        }
      };


const STYLE_5: GenreStyleDefinition = {
        "id": "kizomba-passada",
        "worldId": "kizomba",
        "name": "Passada",
        "origin": "Cape Verde / Angola",
        "era": "1980s–Present",
        "description": "Smooth • Walking • Classic\nRefined, flowing",
        "characteristicInstruments": [
          "acoustic-guitar",
          "bass",
          "drums",
          "piano",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          90,
          104
        ],
        "keySubstyles": [
          "Passada Cabo-Verdiana",
          "Classic Flow"
        ],
        "coreConcepts": [
          "continuous, smooth, elegant walking steps",
          "flowing partner connection without sharp breaks",
          "warm Cabo-Verdean / Angolan melodies",
          "gentle hip movement in sync with steps"
        ],
        "rhythmicGrammar": [
          "smooth 4/4 pulse with warm bass and gentle syncopated guitar strumming"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Gentle acoustic guitar strumming and warm bass accompanying smooth continuous walking step",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
          ],
          "verse": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7",
            "Fmaj7",
            "Dm7",
            "E7",
            "Am7"
          ],
          "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "Fmaj7",
            "Dm7",
            "E7",
            "Am7",
            "Am7"
          ],
          "coda": [
            "Dm7",
            "E7",
            "Am7",
            "Am7"
          ]
        }
      };


const STYLE_6: GenreStyleDefinition = {
        "id": "kizomba-ghetto-zouk",
        "worldId": "kizomba",
        "name": "Ghetto Zouk",
        "origin": "Lisbon, Portugal / Rotterdam / Paris",
        "era": "2000s–Present",
        "description": "R&B Chords • Electronic • Heavy",
        "characteristicInstruments": [
          "synth",
          "drums",
          "sub-bass",
          "piano",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          98
        ],
        "keySubstyles": [
          "Ghetto Zouk Pop",
          "Lisbon Zouk"
        ],
        "coreConcepts": [
          "R&B-style lush synthesizer chords and piano voicings",
          "hard-hitting punchy electronic kick/snare",
          "silky romantic autotuned and acoustic vocals",
          "dynamic club-friendly production"
        ],
        "rhythmicGrammar": [
          "crisp electronic 4/4 zouk beat: kick on 1, 1-and, 3-and with sharp snare clap on 3"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Hard electronic kick [0, 6, 10] with lush R&B minor 9th synth chords and silky vocals",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Bb",
            "F",
            "C"
          ],
          "verse": [
            "Dm",
            "Bb",
            "F",
            "C",
            "Dm",
            "Bb",
            "F",
            "C"
          ],
          "chorus": [
            "Bb",
            "C",
            "Dm",
            "Am",
            "Bb",
            "C",
            "Dm",
            "Dm"
          ],
          "coda": [
            "Bb",
            "C",
            "Dm",
            "Dm"
          ]
        }
      };


const STYLE_7: GenreStyleDefinition = {
        "id": "kizomba-semba-lento",
        "worldId": "kizomba",
        "name": "Semba Lento",
        "origin": "Angola",
        "era": "1970s–Present",
        "description": "Slow • Nostalgic • Grounded\nDeep, soulful",
        "characteristicInstruments": [
          "acoustic-guitar",
          "acoustic-bass",
          "dikanza",
          "hand-percussion",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          80,
          94
        ],
        "keySubstyles": [
          "Semba Canção",
          "Acoustic Semba"
        ],
        "coreConcepts": [
          "poignant nostalgic (saudade) vocal delivery",
          "fingerpicked nylon-string acoustic guitars",
          "subtle dikanza and conga accompaniment",
          "deep emotional connection between partners"
        ],
        "rhythmicGrammar": [
          "slow, deliberate 4/4 swing with syncopated acoustic guitar arpeggios and gentle shaker"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Slow poignant nylon-string guitar arpeggio accompanied by soft dikanza scrape and emotive vocals",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "Am",
            "B7",
            "Em"
          ],
          "verse": [
            "Em",
            "Am",
            "D7",
            "G",
            "C",
            "Am",
            "B7",
            "Em"
          ],
          "chorus": [
            "Am",
            "D7",
            "G",
            "Em",
            "Am",
            "B7",
            "Em",
            "Em"
          ],
          "coda": [
            "Am",
            "B7",
            "Em",
            "Em"
          ]
        }
      };


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "kizomba-classic-angolan-kizomba",
  "worldId": "kizomba",
  "name": "Classic Angolan Kizomba",
  "origin": "Angola",
  "era": "1980s–Present",
  "description": "Semba-derived rhythm slowed into a smooth 4/4 dance groove with warm bass and intimate vocals.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "drums",
    "shaker",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    80,
    100
  ],
  "keySubstyles": [
    "Classic Angolan Kizomba"
  ],
  "coreConcepts": [
    "semba guitar",
    "kizomba bass ostinato",
    "delayed kick"
  ],
  "rhythmicGrammar": [
    "Semba guitar with slowed bass groove"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Semba guitar with slowed bass groove",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Fmaj7",
    "Cmaj7",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "verse": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "chorus": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "bridge": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "solo": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "coda": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ]
  },
  "referenceArtists": [
    "Eduardo Paim",
    "Paulo Flores"
  ],
  "referenceTracks": [],
  "techniques": [
    "kizomba bass ostinato",
    "delayed kick",
    "semba guitar",
    "ghetto-zouk sub-bass",
    "tarraxinha bass pulse"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "kizomba-semba-to-kizomba-transition",
  "worldId": "kizomba",
  "name": "Semba-to-Kizomba Transition",
  "origin": "Angola",
  "era": "1980s–1990s",
  "description": "Historically useful hybrid retaining active semba guitar and percussion at a slower pulse.",
  "characteristicInstruments": [
    "electric-guitar",
    "bass",
    "hand-percussion",
    "drums",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    85,
    105
  ],
  "keySubstyles": [
    "Semba-to-Kizomba Transition"
  ],
  "coreConcepts": [
    "active semba guitar",
    "soft percussion",
    "slowed pulse"
  ],
  "rhythmicGrammar": [
    "Active semba guitar over slower pulse"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Active semba guitar over slower pulse",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Fmaj7",
    "Cmaj7",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "verse": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "chorus": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "bridge": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "solo": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "coda": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ]
  },
  "referenceArtists": [
    "Eduardo Paim"
  ],
  "referenceTracks": [],
  "techniques": [
    "semba guitar",
    "kizomba bass ostinato",
    "soft shaker subdivision",
    "sparse percussion",
    "tarraxinha bass pulse"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "kizomba-cape-verdean-ghetto-zouk",
  "worldId": "kizomba",
  "name": "Cape Verdean Ghetto Zouk",
  "origin": "Cape Verde / Europe",
  "era": "1990s–Present",
  "description": "R&B-influenced vocals, electronic bass, sparse percussion and extended chords.",
  "characteristicInstruments": [
    "synth",
    "sub-bass",
    "drums",
    "electric-guitar",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    80,
    105
  ],
  "keySubstyles": [
    "Cape Verdean Ghetto Zouk"
  ],
  "coreConcepts": [
    "ghetto-zouk sub-bass",
    "long R&B chord",
    "sparse percussion"
  ],
  "rhythmicGrammar": [
    "Sparse R&B chords over deep sub"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sparse R&B chords over deep sub",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Fmaj7",
    "Cmaj7",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "verse": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "chorus": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "bridge": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "solo": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "coda": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ]
  },
  "referenceArtists": [
    "Nelson Freitas",
    "Johnny Ramos"
  ],
  "referenceTracks": [],
  "techniques": [
    "sparse percussion",
    "ghetto-zouk sub-bass",
    "long R&B chord voicing",
    "kizomba bass ostinato",
    "tarraxinha bass pulse"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "kizomba-minimal-tarraxinha",
  "worldId": "kizomba",
  "name": "Minimal Tarraxinha",
  "origin": "Angola / Lisbon",
  "era": "2000s–Present",
  "description": "Extreme reduction of percussion and harmony with deep bass and tiny repeating gestures.",
  "characteristicInstruments": [
    "sub-bass",
    "drums",
    "synth",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    75,
    100
  ],
  "keySubstyles": [
    "Minimal Tarraxinha"
  ],
  "coreConcepts": [
    "tarraxinha bass pulse",
    "minimal percussion",
    "vocal-space arrangement"
  ],
  "rhythmicGrammar": [
    "Deep bass pulse with minimal gestures"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Deep bass pulse with minimal gestures",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Fmaj7",
    "Cmaj7",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "verse": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "chorus": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "bridge": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "solo": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "coda": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ]
  },
  "referenceArtists": [
    "Tarraxinha producers and dancers"
  ],
  "referenceTracks": [],
  "techniques": [
    "tarraxinha bass pulse",
    "vocal-space arrangement",
    "ghetto-zouk sub-bass",
    "kizomba bass ostinato",
    "sparse percussion"
  ]
};


const EXPANSION_STYLE_4: GenreStyleDefinition = {
  "id": "kizomba-tarraxo-club",
  "worldId": "kizomba",
  "name": "Tarraxo Club",
  "origin": "Lisbon / Portugal",
  "era": "2010s–Present",
  "description": "Heavier sub-bass, sharper electronic percussion, abrupt stops and aggressive sound design.",
  "characteristicInstruments": [
    "sub-bass",
    "drums",
    "synth",
    "noise-sweep"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    85,
    110
  ],
  "keySubstyles": [
    "Tarraxo Club"
  ],
  "coreConcepts": [
    "tarraxo stop",
    "sub-bass pressure",
    "sharp electronic percussion"
  ],
  "rhythmicGrammar": [
    "Heavy sub-bass with abrupt stops"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Heavy sub-bass with abrupt stops",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am7",
    "Fmaj7",
    "Cmaj7",
    "G"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "verse": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "chorus": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "bridge": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "solo": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ],
    "coda": [
      "Am7",
      "Fmaj7",
      "Cmaj7",
      "G"
    ]
  },
  "referenceArtists": [
    "Contemporary Lisbon tarraxo producers"
  ],
  "referenceTracks": [],
  "techniques": [
    "tarraxo stop",
    "ghetto-zouk sub-bass",
    "kizomba bass ostinato",
    "sparse percussion",
    "tarraxinha bass pulse"
  ]
};

export const KIZOMBA_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3, EXPANSION_STYLE_4] };
