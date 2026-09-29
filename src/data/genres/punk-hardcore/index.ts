import type { GenreWorld } from '../../schema';

/** Standalone authored definition for Punk / Hardcore. */
export const PUNK_HARDCORE_WORLD: GenreWorld = {
  "id": "punk-hardcore",
  "name": "Punk / Hardcore",
  "family": "Amplified / Guitar Music",
  "color": "#b45b68",
  "level": "world",
  "description": "A broad rock vocabulary organized around",
  "substyles": [
    "Hard Rock",
    "Grunge",
    "Progressive Rock",
    "Punk Rock",
    "Garage Rock",
    "Psychedelic",
    "Post-Rock",
    "Shoegaze"
  ],
  "artists": [
    "Led Zeppelin",
    "AC/DC",
    "Nirvana",
    "Soundgarden",
    "Pink Floyd",
    "Yes",
    "Ramones",
    "The Clash",
    "The Stooges",
    "The Strokes",
    "The Jimi Hendrix Experience",
    "The Doors",
    "Godspeed You! Black Emperor",
    "Explosions in the Sky",
    "My Bloody Valentine",
    "Slowdive"
  ],
  "concepts": [
    "riff architecture",
    "power chords",
    "backbeat",
    "dynamic contrast",
    "verse/chorus",
    "instrumental break",
    "odd meter"
  ],
  "crossLinks": [
    "Rock ↔ Blues",
    "Rock ↔ Metal",
    "Rock ↔ Rock en Español",
    "Rock ↔ Chinese Rock"
  ],
  "roles": {
    "guitar": [
      "power-chord riffs",
      "single-note hooks",
      "textural layers",
      "fills"
    ],
    "bass": [
      "riff lock",
      "root drive",
      "melodic counterline"
    ],
    "drums": [
      "backbeat",
      "kick/riff lock",
      "fills",
      "breaks"
    ]
  },
  "tuningSystem": "12-tet",
  "signatureCell": "Driving straight-8th power riff locked with kick drum and snare on 2 & 4",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "styleDefinitions": [
    {
      "id": "punk-hardcore-hard-rock",
      "worldId": "punk-hardcore",
      "name": "Hard Rock",
      "origin": "London / Los Angeles",
      "era": "Late 1960s–1980s",
      "description": "Heavy Riffs • Marshall Stacks •",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        140
      ],
      "keySubstyles": [
        "Classic Hard Rock",
        "Blues Rock",
        "Arena Rock"
      ],
      "coreConcepts": [
        "cranking Marshall valve overdrive guitar power chords",
        "driving straight-ahead drum groove with huge snare on 2 and 4",
        "screaming blues-based high-tenor lead vocals",
        "virtuosic pentatonic guitar solos"
      ],
      "rhythmicGrammar": [
        "driving 4/4 rock beat with four-on-the-floor bass drum option and heavy snare backbeat"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Thunderous Marshall stack power chord riff ringing out over driving open-hi-hat drum beat",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "A5",
          "G5",
          "D5",
          "A5"
        ],
        "verse": [
          "A5",
          "G5",
          "D5",
          "A5",
          "A5",
          "G5",
          "D5",
          "A5"
        ],
        "chorus": [
          "D5",
          "C5",
          "G5",
          "A5",
          "D5",
          "C5",
          "G5",
          "A5"
        ],
        "solo": [
          "A5",
          "G5",
          "D5",
          "A5"
        ],
        "coda": [
          "D5",
          "E5",
          "A5",
          "A5"
        ]
      }
    },
    {
      "id": "punk-hardcore-grunge",
      "worldId": "punk-hardcore",
      "name": "Grunge",
      "origin": "Seattle, Washington",
      "era": "Late 1980s–1990s",
      "description": "Loud-Quiet-Loud • Fuzz • Anguish\nRaw flannel-clad",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "distortion-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4",
        "6/8",
        "7/4"
      ],
      "tempoRange": [
        90,
        125
      ],
      "keySubstyles": [
        "Seattle Sound",
        "Post-Grunge"
      ],
      "coreConcepts": [
        "dramatic loud-quiet-loud verse/chorus dynamics",
        "sludgy Electro-Harmonix Big Muff / DS-1 distortion",
        "raw gravelly impassioned vocal delivery",
        "drop-D down-tuned heavy riffs"
      ],
      "rhythmicGrammar": [
        "heavy dragging drum beat exploding into high-energy open-cymbal thrash on chorus"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Clean chorus-drenched verse arpeggio suddenly erupting into crushing fuzz power chord chorus",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "F5",
          "Bb5",
          "Ab5",
          "Db5"
        ],
        "verse": [
          "F5",
          "Bb5",
          "Ab5",
          "Db5",
          "F5",
          "Bb5",
          "Ab5",
          "Db5"
        ],
        "chorus": [
          "F5",
          "Bb5",
          "Ab5",
          "Db5",
          "F5",
          "Bb5",
          "Ab5",
          "Db5"
        ],
        "coda": [
          "F5",
          "Bb5",
          "Ab5",
          "F5"
        ]
      }
    },
    {
      "id": "punk-hardcore-progressive-rock",
      "worldId": "punk-hardcore",
      "name": "Progressive Rock",
      "origin": "London / Cambridge, UK",
      "era": "Late 1960s–1970s",
      "description": "Odd Meters • Mellotron • Multi-Movement\nComplex",
      "characteristicInstruments": [
        "electric-guitar",
        "strings",
        "bass",
        "drums",
        "organ"
      ],
      "preferredMeters": [
        "7/8",
        "5/4",
        "4/4",
        "12/8"
      ],
      "tempoRange": [
        75,
        135
      ],
      "keySubstyles": [
        "Symphonic Prog",
        "Canterbury Scene",
        "Space Rock"
      ],
      "coreConcepts": [
        "epic multi-movement conceptual song structures",
        "Mellotron string and flute s and Hammond organs",
        "unusual time signatures and classical counterpoint",
        "philosophical and fantastical lyrics"
      ],
      "rhythmicGrammar": [
        "shifting metric structures (7/8 alternating with 4/4) with delicate symphonic dynamics"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Haunting Mellotron string  swelling behind soaring Gilmour-esque melodic guitar bend",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Em9",
          "A7",
          "Em9",
          "A7"
        ],
        "movement1": [
          "Em9",
          "A7",
          "Cmaj7",
          "Bm7",
          "Am7",
          "D7",
          "Gmaj7",
          "B7"
        ],
        "movement2": [
          "Cmaj7",
          "D/C",
          "Bm7",
          "Em",
          "Am7",
          "B7",
          "Em",
          "Em"
        ],
        "coda": [
          "Cmaj7",
          "D",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "punk-hardcore-punk-rock",
      "worldId": "punk-hardcore",
      "name": "Punk Rock",
      "origin": "New York / London",
      "era": "Mid 1970s",
      "description": "Fast Downstrokes • 3 Chords •",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "distortion-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        160,
        210
      ],
      "keySubstyles": [
        "NYC 77 Punk",
        "UK 77 Punk",
        "Hardcore Punk"
      ],
      "coreConcepts": [
        "relentless high-speed 8th-note downpicked power chords",
        "straightforward three-chord structural simplicity",
        "shouted urgent anti-establishment lyrics",
        "no guitar solos, pure energy and speed"
      ],
      "rhythmicGrammar": [
        "fast 4/4 straight eighth notes with snare cracking relentlessly on 2 and 4"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "\"1-2-3-4!\" shout launching into blinding 180 BPM downpicked 3-chord power blast",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "E5",
          "A5",
          "B5",
          "E5"
        ],
        "verse": [
          "E5",
          "A5",
          "B5",
          "E5",
          "E5",
          "A5",
          "B5",
          "E5"
        ],
        "chorus": [
          "A5",
          "B5",
          "E5",
          "C#5",
          "A5",
          "B5",
          "E5",
          "E5"
        ],
        "coda": [
          "A5",
          "B5",
          "E5",
          "E5"
        ]
      }
    },
    {
      "id": "punk-hardcore-garage-rock",
      "worldId": "punk-hardcore",
      "name": "Garage Rock",
      "origin": "Detroit / Detroit / NYC",
      "era": "1960s / 2000s Revival",
      "description": "Lo-Fi Fuzz • Catchy Riffs •",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        150
      ],
      "keySubstyles": [
        "60s Garage Punk",
        "2000s Garage Revival"
      ],
      "coreConcepts": [
        "interlocking punchy single-coil guitar riffs",
        "snappy drum-machine-tight acoustic drum beats",
        "cool detached nonchalant vocal delivery",
        "vintage analog tube saturation"
      ],
      "rhythmicGrammar": [
        "tight driving 4/4 with sixteenth-note hi-hat pulse and punchy kick/snare interplay"
      ],
      "danceTags": [
        "festival-fusion",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Snappy interlocking clean/overdriven guitar duel over tight metronomic drum beat",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Dm",
          "G",
          "C"
        ],
        "verse": [
          "Am",
          "Dm",
          "G",
          "C",
          "F",
          "Dm",
          "E7",
          "E7"
        ],
        "chorus": [
          "C",
          "F",
          "Am",
          "G",
          "C",
          "F",
          "Am",
          "G"
        ],
        "coda": [
          "F",
          "G",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "punk-hardcore-psychedelic",
      "worldId": "punk-hardcore",
      "name": "Psychedelic",
      "origin": "San Francisco / London",
      "era": "Late 1960s",
      "description": "Wah-wah • Tape Delay • Mind-expanding\nAcid-soaked",
      "characteristicInstruments": [
        "electric-guitar",
        "organ",
        "bass",
        "drums",
        "tape-echo"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        95,
        128
      ],
      "keySubstyles": [
        "Acid Rock",
        "San Francisco Sound"
      ],
      "coreConcepts": [
        "Jimi Hendrix Uni-Vibe, Fuzz Face, and Cry Baby wah-wah manipulation",
        "modal Indian raga scale improvisations",
        "swirling Vox Continental / Farfisa organ chords",
        "surrealistic poetic stream-of-consciousness"
      ],
      "rhythmicGrammar": [
        "fluid expressive drum grooves with Mitch Mitchell-style rolling triplet snare fills"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Wah-wah pedal sweep over overdriven fuzz 7#9 Hendrix chord with swirling tape flanger",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "E7#9",
          "G",
          "A",
          "E7#9"
        ],
        "verse": [
          "E7#9",
          "G",
          "A",
          "E7#9",
          "C",
          "D",
          "E7#9",
          "E7#9"
        ],
        "solo": [
          "E7#9",
          "A7",
          "E7#9",
          "B7",
          "C",
          "D",
          "E7#9",
          "E7#9"
        ],
        "coda": [
          "C",
          "D",
          "E7#9",
          "E7#9"
        ]
      }
    },
    {
      "id": "punk-hardcore-post-rock",
      "worldId": "punk-hardcore",
      "name": "Post-Rock",
      "origin": "Montreal / Reykjavik / Texas",
      "era": "Late 1990s–Present",
      "description": "Crescendo • Cinematic • Instrumental\nEpic dynamic",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "strings",
        "glockenspiel"
      ],
      "preferredMeters": [
        "4/4",
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        70,
        110
      ],
      "keySubstyles": [
        "Crescendo Post-Rock",
        "Cinematic Ambient Rock"
      ],
      "coreConcepts": [
        "massive ten-minute dynamic builds from whispering delay to roaring crescendos",
        "bowed guitars and shimmering glockenspiels",
        "absence of standard verse/chorus lyrics",
        "sublime emotional catharsis"
      ],
      "rhythmicGrammar": [
        "slowly accelerating and intensifying drum rolls building from gentle brushes into crashing cymbals"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Whispering tremolo-picked delay guitar slowly swelling into monumental wall of crashing sound",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "C",
          "G"
        ],
        "build": [
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F",
          "C",
          "Em"
        ],
        "climax": [
          "F",
          "G",
          "Am",
          "Em",
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
    },
    {
      "id": "punk-hardcore-shoegaze",
      "worldId": "punk-hardcore",
      "name": "Shoegaze",
      "origin": "London / Oxford / Dublin",
      "era": "Late 1980s–Early 1990s",
      "description": "Glide Guitar • Wall of Sound",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "synth",
        "distortion-guitar"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        95,
        120
      ],
      "keySubstyles": [
        "Dream Pop",
        "Noise Pop Shoegaze"
      ],
      "coreConcepts": [
        "Kevin Shields \"glide guitar\" (strumming while riding the Jaguar tremolo arm)",
        "Alesis/Yamaha reverse reverb into fuzz distortion",
        "whispering androgynous buried vocal harmonies",
        "dense shimmering harmonic overtones"
      ],
      "rhythmicGrammar": [
        "steady metronomic 4/4 drum pulse anchoring floating oceanic guitars"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Glide-guitar chord bent with tremolo arm while drowning in reverse reverb and roaring fuzz",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dmaj7",
          "Gmaj7",
          "Dmaj7",
          "Gmaj7"
        ],
        "verse": [
          "Dmaj7",
          "Gmaj7",
          "Dmaj7",
          "Gmaj7",
          "Bm7",
          "A",
          "Gmaj7",
          "Gmaj7"
        ],
        "chorus": [
          "Gmaj7",
          "A",
          "Bm7",
          "D",
          "Gmaj7",
          "A",
          "D",
          "D"
        ],
        "coda": [
          "Gmaj7",
          "A",
          "D",
          "D"
        ]
      }
    }
  ],
  "patterns": [
    {
      "id": "punk-hardcore--rock-riff-lock",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Riff + Bass Lock",
      "family": "Riff",
      "category": "ostinato",
      "description": "Electric guitar and bass share a",
      "tags": [
        "rock",
        "riff",
        "bass",
        "guitar"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "pulse",
        "drums"
      ],
      "approaches": [
        "walking",
        "groove"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
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
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.8,
        0.9,
        0.95,
        0.7,
        0.9,
        0.8
      ],
      "velocityProfile": [
        1,
        0.75,
        0.85,
        0.9,
        0.65,
        0.85,
        0.75
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-riff-stop",
          "parentPatternId": "punk-hardcore--rock-riff-lock",
          "name": "Stop-Time Hit",
          "variationType": "breakdown",
          "probability": 0.4,
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            1,
            1
          ],
          "description": "The riff collapses into accented hits,"
        },
        {
          "id": "punk-hardcore--rock-riff-lock-v-02",
          "parentPatternId": "punk-hardcore--rock-riff-lock",
          "name": "Riff + Bass Lock — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.88,
            0.86,
            1,
            0.6599999999999999,
            0.98,
            0.76
          ],
          "velocityProfile": [
            1,
            0.73,
            0.83,
            0.96,
            0.63,
            0.83,
            0.81
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-straight-drive",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Straight-Eighth Drive",
      "family": "Driving Eighths",
      "category": "phrasePattern",
      "description": "Continuous guitar eighths with a firm",
      "tags": [
        "rock",
        "punk",
        "eighths",
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
        "rhythm-guitar",
        "bass",
        "drums",
        "pulse"
      ],
      "approaches": [
        "walking",
        "groove"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums"
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
        0.7,
        0.9,
        0.7,
        1,
        0.7,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.65,
        0.95,
        0.65,
        0.85,
        0.65
      ],
      "supportedEnergy": [
        4,
        5
      ],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-straight-drive-v-01",
          "parentPatternId": "punk-hardcore--rock-straight-drive",
          "name": "Straight-Eighth Drive — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.85,
            0.6499999999999999,
            0.95
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.77,
            0.5700000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-straight-drive-v-02",
          "parentPatternId": "punk-hardcore--rock-straight-drive",
          "name": "Straight-Eighth Drive — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
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
            0.96,
            0.7799999999999999,
            0.86,
            0.7799999999999999,
            0.96,
            0.7799999999999999,
            0.86,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.83,
            0.71,
            0.9299999999999999,
            0.63,
            0.9099999999999999,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-open-close",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Open Verse → Full Chorus",
      "family": "Dynamic Arrangement",
      "category": "sectionPattern",
      "description": "A sparse verse leaves negative space",
      "tags": [
        "rock",
        "arrangement",
        "dynamics",
        "chorus"
      ],
      "scopes": [
        "phrase",
        "region",
        "song"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "drums",
        "texture"
      ],
      "approaches": [
        "walking",
        "groove"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums",
        "keys"
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
        0.8,
        0.7,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.6,
        0.55,
        0.7,
        0.6
      ],
      "supportedEnergy": [
        1,
        2,
        3,
        4,
        5
      ],
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
          "id": "punk-hardcore--rock-open-close-v-01",
          "parentPatternId": "punk-hardcore--rock-open-close",
          "name": "Open Verse → Full Chorus — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.75,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.52,
            0.47000000000000003,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-open-close-v-02",
          "parentPatternId": "punk-hardcore--rock-open-close",
          "name": "Open Verse → Full Chorus — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.76,
            0.7799999999999999,
            0.86,
            0.88
          ],
          "velocityProfile": [
            0.6599999999999999,
            0.53,
            0.6799999999999999,
            0.6599999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "punk-hardcore--rock-open-close-v-03",
          "parentPatternId": "punk-hardcore--rock-open-close",
          "name": "Open Verse → Full Chorus — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.78,
            0.6799999999999999,
            0.88,
            0.78,
            1,
            1
          ],
          "velocityProfile": [
            0.6,
            0.55,
            0.7,
            0.6,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-odd-meter",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "7/8 Accent Group",
      "family": "Odd Meter",
      "category": "ostinato",
      "description": "A seven-eighth-note cycle grouped 2+2+3, with",
      "tags": [
        "rock",
        "progressive",
        "7/8",
        "odd-meter"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track",
        "region"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "drums"
      ],
      "approaches": [
        "walking",
        "groove"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums"
      ],
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 14,
      "onsetGrid": [
        0,
        4,
        8,
        10
      ],
      "accentProfile": [
        1,
        0.7,
        1,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.75
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-odd-meter-v-01",
          "parentPatternId": "punk-hardcore--rock-odd-meter",
          "name": "7/8 Accent Group — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            10
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.95
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-odd-meter-v-02",
          "parentPatternId": "punk-hardcore--rock-odd-meter",
          "name": "7/8 Accent Group — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            10
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.96,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.81
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-power-chords",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Power Chords",
      "family": "Guitar",
      "category": "fill",
      "transitionType": "fill",
      "description": "Distorted 8th note power chords driving",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.78,
        0.88,
        0.76,
        0.95,
        0.78,
        0.88,
        0.82
      ],
      "velocityProfile": [
        0.95,
        0.72,
        0.82,
        0.7,
        0.9,
        0.72,
        0.82,
        0.78
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-power-chords-v-01",
          "parentPatternId": "punk-hardcore--rock-power-chords",
          "name": "Power Chords — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6
          ],
          "accentProfile": [
            0.95,
            0.73,
            0.83,
            0.71,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.64,
            0.74,
            0.62,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-power-chords-v-02",
          "parentPatternId": "punk-hardcore--rock-power-chords",
          "name": "Power Chords — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "accentProfile": [
            0.96,
            0.86,
            0.84,
            0.84,
            0.9099999999999999,
            0.86,
            0.84,
            0.8999999999999999
          ],
          "velocityProfile": [
            1,
            0.7,
            0.7999999999999999,
            0.76,
            0.88,
            0.7,
            0.8799999999999999,
            0.76
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-halftime-groove",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Half-Time Groove",
      "family": "Drums",
      "category": "break",
      "transitionType": "fill",
      "description": "Spacious half-time groove with massive snare",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        4
      ],
      "accentProfile": [
        0.96,
        1
      ],
      "velocityProfile": [
        0.92,
        0.98
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-halftime-groove-v-01-safe",
          "parentPatternId": "punk-hardcore--rock-halftime-groove",
          "name": "Half-Time Groove — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.9099999999999999,
            1
          ],
          "velocityProfile": [
            0.9500000000000001,
            0.94
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "punk-hardcore--rock-halftime-groove-v-02-safe",
          "parentPatternId": "punk-hardcore--rock-halftime-groove",
          "name": "Half-Time Groove — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.9099999999999999,
            1
          ],
          "velocityProfile": [
            0.9500000000000001,
            0.94
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-tom-beat",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Tom Groove",
      "family": "Drums",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Tribal tom-tom beat for atmospheric verses",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
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
        4,
        7,
        8,
        11,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.7,
        0.85,
        0.65,
        0.95,
        0.7,
        0.85,
        0.65
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.8,
        0.6,
        0.9,
        0.65,
        0.8,
        0.6
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "ending",
        "turnaround"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-tom-beat-v-01",
          "parentPatternId": "punk-hardcore--rock-tom-beat",
          "name": "Tom Groove — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
            11,
            12
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.7999999999999999,
            0.6,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.7200000000000001,
            0.52,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-tom-beat-v-02",
          "parentPatternId": "punk-hardcore--rock-tom-beat",
          "name": "Tom Groove — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
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
            0.96,
            0.7799999999999999,
            0.8099999999999999,
            0.73,
            0.9099999999999999,
            0.7799999999999999,
            0.8099999999999999,
            0.73
          ],
          "velocityProfile": [
            1,
            0.63,
            0.78,
            0.6599999999999999,
            0.88,
            0.63,
            0.8600000000000001,
            0.58
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-organ-sustain",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Hammond Organ Sustain",
      "family": "Keys",
      "category": "cell",
      "description": "Sustained Hammond B3 chords with Leslie",
      "tags": [
        "rock",
        "organ",
        "keys"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        7,
        8,
        15
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.85,
        0.65
      ],
      "velocityProfile": [
        0.85,
        0.55,
        0.8,
        0.6
      ],
      "supportedEnergy": [
        1,
        2
      ],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-organ-sustain-v-01",
          "parentPatternId": "punk-hardcore--rock-organ-sustain",
          "name": "Hammond Organ Sustain — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            15
          ],
          "accentProfile": [
            0.85,
            0.5499999999999999,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.77,
            0.47000000000000003,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-organ-sustain-v-02",
          "parentPatternId": "punk-hardcore--rock-organ-sustain",
          "name": "Hammond Organ Sustain — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            7,
            8,
            15
          ],
          "accentProfile": [
            0.86,
            0.6799999999999999,
            0.8099999999999999,
            0.73
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.53,
            0.78,
            0.6599999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-prog-7-8",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "7/8 Riff",
      "family": "Guitar",
      "category": "groove",
      "description": "Odd meter guitar riff in 2+2+3",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 7,
      "onsetGrid": [
        0,
        2,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.8,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.75,
        0.85,
        0.7
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-prog-7-8-v-01",
          "parentPatternId": "punk-hardcore--rock-prog-7-8",
          "name": "7/8 Riff — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            5
          ],
          "accentProfile": [
            0.95,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-prog-7-8-v-02",
          "parentPatternId": "punk-hardcore--rock-prog-7-8",
          "name": "7/8 Riff — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            5
          ],
          "accentProfile": [
            0.96,
            0.88,
            0.86,
            0.83
          ],
          "velocityProfile": [
            1,
            0.73,
            0.83,
            0.76
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-prog-synth",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Prog Synth Arp",
      "family": "Synth",
      "category": "groove",
      "description": "Fast synth arpeggiator creating swirling harmonic",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "synth",
        "keys"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "synth",
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.6,
        0.75,
        0.6,
        0.9,
        0.6,
        0.75,
        0.6,
        0.95,
        0.6,
        0.75,
        0.6,
        0.9,
        0.6,
        0.75,
        0.65
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.7,
        0.55,
        0.85,
        0.55,
        0.7,
        0.55,
        0.9,
        0.55,
        0.7,
        0.55,
        0.85,
        0.55,
        0.7,
        0.6
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-prog-synth-v-01",
          "parentPatternId": "punk-hardcore--rock-prog-synth",
          "name": "Prog Synth Arp — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.7,
            0.5499999999999999,
            0.85,
            0.5499999999999999,
            0.7,
            0.5499999999999999,
            0.8999999999999999,
            0.5499999999999999,
            0.7
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.62,
            0.47000000000000003,
            0.77,
            0.47000000000000003,
            0.62,
            0.47000000000000003,
            0.8200000000000001,
            0.47000000000000003,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-prog-synth-v-02",
          "parentPatternId": "punk-hardcore--rock-prog-synth",
          "name": "Prog Synth Arp — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.71,
            0.6799999999999999,
            0.86,
            0.6799999999999999,
            0.71,
            0.6799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.71,
            0.6799999999999999,
            0.86,
            0.6799999999999999,
            0.71,
            0.73
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.6799999999999999,
            0.6100000000000001,
            0.83,
            0.53,
            0.76,
            0.53,
            0.88,
            0.6100000000000001,
            0.6799999999999999,
            0.53,
            0.9099999999999999,
            0.53,
            0.6799999999999999,
            0.6599999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 5,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-acoustic-strum",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Acoustic Strum",
      "family": "Guitar",
      "category": "groove",
      "description": "Acoustic guitar layering with accented down-up",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar"
      ],
      "approaches": [
        "chop"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.65,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.6,
        0.8,
        0.7
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-acoustic-strum-v-01",
          "parentPatternId": "punk-hardcore--rock-acoustic-strum",
          "name": "Acoustic Strum — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            5,
            7
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.85,
            0.6
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.77,
            0.52
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "punk-hardcore--rock-acoustic-strum-v-02",
          "parentPatternId": "punk-hardcore--rock-acoustic-strum",
          "name": "Acoustic Strum — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            5,
            6,
            7
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.86,
            0.73,
            0.8099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.63,
            0.83,
            0.6599999999999999,
            0.78,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-lead-bend",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Lead Guitar Bend",
      "family": "Guitar",
      "category": "groove",
      "description": "Sustained bending lead note answering vocal",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        2,
        6
      ],
      "accentProfile": [
        0.88,
        0.96
      ],
      "velocityProfile": [
        0.82,
        0.92
      ],
      "supportedEnergy": [
        1,
        2
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-lead-bend-v-01-safe",
          "parentPatternId": "punk-hardcore--rock-lead-bend",
          "name": "Lead Guitar Bend — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.83,
            1
          ],
          "velocityProfile": [
            0.85,
            0.88
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "punk-hardcore--rock-lead-bend-v-02-safe",
          "parentPatternId": "punk-hardcore--rock-lead-bend",
          "name": "Lead Guitar Bend — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.83,
            1
          ],
          "velocityProfile": [
            0.85,
            0.88
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "punk-hardcore--rock-roster-",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Rock  part",
      "family": "Build",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives",
      "tags": [
        "rock",
        "build",
        "roster",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "phrase"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "compatibleRoles": [
        "electric-guitar"
      ],
      "compatibleInstruments": [
        "electric-guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        10,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.72,
        0.72,
        1,
        0.72,
        0.72
      ],
      "velocityProfile": [
        0.95,
        0.68,
        0.68,
        0.95,
        0.68,
        0.68
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-roster-13-v-01",
          "parentPatternId": "punk-hardcore--rock-roster-",
          "name": "Build Texture — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-roster-13-v-02",
          "parentPatternId": "punk-hardcore--rock-roster-",
          "name": "Build Texture — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "rock",
        "build"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "punk-hardcore--rock-call-14",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Break Response",
      "family": "Break",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "rock",
        "break",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "phrase"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "compatibleRoles": [
        "electric-guitar"
      ],
      "compatibleInstruments": [
        "electric-guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        5,
        9,
        13
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-call-14-v-01",
          "parentPatternId": "punk-hardcore--rock-call-14",
          "name": "Break Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            9,
            13
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-call-14-v-02",
          "parentPatternId": "punk-hardcore--rock-call-14",
          "name": "Break Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "punk-hardcore--rock-call-14-v-03",
          "parentPatternId": "punk-hardcore--rock-call-14",
          "name": "Break Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            5,
            9,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "rock",
        "break"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "punk-hardcore--rock-anchor-15",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Power Chord Anchor",
      "family": "Power Chord",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "rock",
        "power-chord",
        "anchor",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "bass"
      ],
      "approaches": [
        "walking"
      ],
      "instruments": [
        "bass"
      ],
      "compatibleRoles": [
        "bass"
      ],
      "compatibleInstruments": [
        "bass"
      ],
      "canCrossRole": true,
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
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-anchor-15-v-01",
          "parentPatternId": "punk-hardcore--rock-anchor-15",
          "name": "Power Chord Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            10,
            14
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-anchor-15-v-02",
          "parentPatternId": "punk-hardcore--rock-anchor-15",
          "name": "Power Chord Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "rock",
        "power-chord"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "punk-hardcore--rock-comp-16",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Backbeat Comping",
      "family": "Backbeat",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "rock",
        "backbeat",
        "comp",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony"
      ],
      "approaches": [
        "comping"
      ],
      "instruments": [
        "guitar",
        "keys"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys"
      ],
      "canCrossRole": true,
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
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-comp-16-v-01",
          "parentPatternId": "punk-hardcore--rock-comp-16",
          "name": "Backbeat Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            3,
            11,
            15
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-comp-16-v-02",
          "parentPatternId": "punk-hardcore--rock-comp-16",
          "name": "Backbeat Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            3,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "rock",
        "backbeat"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "punk-hardcore--rock-verse-17",
      "worldId": "punk-hardcore",
      "styleIds": [],
      "name": "Solo Verse Variation",
      "family": "Solo",
      "category": "groove",
      "description": "A restrained verse variation with intentional",
      "tags": [
        "rock",
        "solo",
        "verse",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        3,
        5,
        7,
        9,
        11,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse"
      ],
      "variants": [
        {
          "id": "punk-hardcore--rock-verse-17-v-01",
          "parentPatternId": "punk-hardcore--rock-verse-17",
          "name": "Solo Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "punk-hardcore--rock-verse-17-v-02",
          "parentPatternId": "punk-hardcore--rock-verse-17",
          "name": "Solo Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            3,
            5,
            7,
            9,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "rock",
        "solo"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "punk-hardcore--punk-downpick-eighths",
      "worldId": "punk-hardcore",
      "name": "Punk Downpick Eighths",
      "shortName": "Punk Downpick Eighths",
      "family": "punk-hardcore",
      "category": "groove",
      "description": "Continuous downpicked eighth-note guitar/bass drive with accents at phrase boundaries.",
      "tags": [
        "punk",
        "downpick",
        "eighths"
      ],
      "approaches": [
        "punk",
        "downpick",
        "eighths"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "harmony",
        "bass",
        "rhythm"
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
        "punk",
        "downpick",
        "eighths"
      ]
    },
    {
      "id": "punk-hardcore--punk-d-beat",
      "worldId": "punk-hardcore",
      "name": "D-Beat",
      "shortName": "D-Beat",
      "family": "punk-hardcore",
      "category": "groove",
      "description": "Fast kick/snare displacement supporting relentless eighth-note guitars.",
      "tags": [
        "d-beat",
        "punk",
        "hardcore"
      ],
      "approaches": [
        "d-beat",
        "punk",
        "hardcore"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "rhythm"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        8,
        11,
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
        "d-beat",
        "punk",
        "hardcore"
      ]
    },
    {
      "id": "punk-hardcore--punk-half-time-breakdown",
      "worldId": "punk-hardcore",
      "name": "Hardcore Half-Time Breakdown",
      "shortName": "Hardcore Half-Time Breakdown",
      "family": "punk-hardcore",
      "category": "groove",
      "description": "Half-time kick/snare weight for contrast, leaving guitar to articulate syncopated power chords.",
      "tags": [
        "breakdown",
        "half-time",
        "hardcore"
      ],
      "approaches": [
        "breakdown",
        "half-time",
        "hardcore"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "rhythm",
        "harmony"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        8,
        12
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
        "breakdown",
        "half-time",
        "hardcore"
      ]
    },
    {
      "id": "punk-hardcore--punk-bass-unison",
      "worldId": "punk-hardcore",
      "name": "Punk Bass Unison",
      "shortName": "Punk Bass Unison",
      "family": "punk-hardcore",
      "category": "groove",
      "description": "Bass reinforces guitar roots while adding selective fifths at cadential turns.",
      "tags": [
        "unison",
        "power-chord",
        "punk"
      ],
      "approaches": [
        "unison",
        "power-chord",
        "punk"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass",
        "harmony"
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
        "unison",
        "power-chord",
        "punk"
      ]
    }
  ],
  "kind": "world",
  "strictness": "strict"
};
