import type { GenreWorld } from '../../schema';

/** Standalone authored definition for House. */
export const HOUSE_WORLD: GenreWorld = {
  "id": "house",
  "name": "House",
  "family": "Electronic dance music",
  "color": "#5b67c8",
  "level": "world",
  "description": "House and techno share a club-oriented",
  "substyles": [
    "Peak Time",
    "Minimal",
    "Dub Techno",
    "Detroit Techno",
    "Acid Techno",
    "Hard Techno",
    "Melodic Techno",
    "EBM"
  ],
  "artists": [
    "Charlotte de Witte",
    "Enrico Sangiuliano",
    "Richie Hawtin",
    "Ricardo Villalobos",
    "Basic Channel",
    "Deepchord",
    "Juan Atkins",
    "Derrick May",
    "DJ Pierre",
    "Hardfloor",
    "I Hate Models",
    "Paula Temple",
    "Tale of Us",
    "Stephan Bodzin",
    "Front 242",
    "Nitzer Ebb"
  ],
  "concepts": [
    "four-on-floor",
    "offbeat hats",
    "syncopated bass",
    "sequence mutation",
    "acid accents",
    "filter development"
  ],
  "crossLinks": [
    "House ↔ Funk / Disco",
    "Techno ↔ Electronic / Ambient"
  ],
  "roles": {
    "drums": [
      "four-on-floor",
      "offbeat hats"
    ],
    "bass": [
      "syncopated house bass",
      "acid sequence"
    ],
    "harmony": [
      "short chord stabs",
      "dub chords"
    ],
    "lead": [
      "repeating synth sequences"
    ]
  },
  "tuningSystem": "12-tet",
  "signatureCell": "Four-on-floor pulse with offbeat hats and evolving bass/synth sequences",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight",
    "humanizeJitterMs": 2
  },
  "styleDefinitions": [
    {
      "id": "house-peak-time",
      "worldId": "house",
      "name": "Peak Time",
      "origin": "Berlin / Ibiza / Amsterdam",
      "era": "2010s–Present",
      "description": "Pounding 909 • Big Room Drop",
      "characteristicInstruments": [
        "drums",
        "synth",
        "sub-bass",
        "sampler",
        "noise-sweep"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        136
      ],
      "keySubstyles": [
        "Peak Time Driving Techno",
        "Main Room Techno"
      ],
      "coreConcepts": [
        "thunderous processed 909 kick with heavy sub rumble",
        "rising acid/synth lead tension buildups",
        "massive white noise sweeps and snare rolls",
        "earth-shattering low-end drops"
      ],
      "rhythmicGrammar": [
        "relentless four-on-the-floor kick with driving 16th-note hi-hat rides and offbeat claps"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Pounding 909 kick rumble driving into euphoric synth drop with crisp open hi-hat",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Fm",
          "Fm",
          "Fm",
          "Fm"
        ],
        "buildup": [
          "Fm",
          "Fm",
          "Db",
          "C7"
        ],
        "drop": [
          "Fm",
          "Fm",
          "Fm",
          "Fm",
          "Fm",
          "Fm",
          "Db",
          "C7"
        ],
        "coda": [
          "Fm",
          "Fm",
          "Fm",
          "Fm"
        ]
      }
    },
    {
      "id": "house-minimal",
      "worldId": "house",
      "name": "Minimal",
      "origin": "Berlin / Frankfurt",
      "era": "2000s",
      "description": "Sparse • Sub-bass • Micro-sounds\nSubtle hypnotic",
      "characteristicInstruments": [
        "drums",
        "sampler",
        "synth",
        "sub-bass",
        "warm-pad"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        122,
        128
      ],
      "keySubstyles": [
        "Clicks & Cuts",
        "Minimal Techno / Microhouse"
      ],
      "coreConcepts": [
        "microscopic percussive glitches and clicks",
        "deep subterranean sub-bass pulses",
        "ultra-spacious arrangements",
        "hypnotic cyclical repetition"
      ],
      "rhythmicGrammar": [
        "subtle understated 4-on-the-floor kick surrounded by organic micro-percussive textures"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Subtle understated kick thump enveloped in microscopic metallic clicks and warm sub pulse",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "groove": [
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Bb",
          "A7"
        ]
      }
    },
    {
      "id": "house-dub-techno",
      "worldId": "house",
      "name": "Dub Techno",
      "origin": "Berlin / Detroit",
      "era": "1990s–Present",
      "description": "Echo • Filter Sweep • Cavernous\nBasic",
      "characteristicInstruments": [
        "synth",
        "sub-bass",
        "drums",
        "tape-echo",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        116,
        124
      ],
      "keySubstyles": [
        "Echospace",
        "Deep Dub Techno"
      ],
      "coreConcepts": [
        "heavily filtered minor-9th synth chord stabs",
        "infinite analog tape delay feedback loops",
        "dense blankets of vinyl noise and hiss",
        "warm rolling sub-bass"
      ],
      "rhythmicGrammar": [
        "spacious 4-on-the-floor kick with delayed chord stab landing on the upbeat of beat 2 or 4"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Filtered minor chord stab shooting into infinite tape delay over cavernous sub-bass",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Am7",
          "Am7",
          "Am7"
        ],
        "flow": [
          "Am7",
          "Am7",
          "Dm7",
          "Am7",
          "Am7",
          "Am7",
          "Fmaj7",
          "Em7"
        ],
        "coda": [
          "Am7",
          "Am7",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "house-detroit-techno",
      "worldId": "house",
      "name": "Detroit Techno",
      "origin": "Detroit, Michigan",
      "era": "1980s–1990s",
      "description": "Soulful • Futuristic • Strings\nThe original",
      "characteristicInstruments": [
        "synth",
        "drums",
        "strings",
        "bass",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        126,
        134
      ],
      "keySubstyles": [
        "Belleville Three Sound",
        "Futuristic Soul"
      ],
      "coreConcepts": [
        "emotive synthesizer string progressions",
        "futuristic sci-fi themes and optimism",
        "Roland TR-808/909 syncopated programming",
        "soulful chord voicings"
      ],
      "rhythmicGrammar": [
        "fast driving 4-on-the-floor kick with syncopated 16th-note snare ghost notes and open hats"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Soaring emotional synth strings blooming over driving 909 kick and syncopated snare",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "G",
          "Am7",
          "Em7"
        ],
        "verse": [
          "Fmaj7",
          "G",
          "Am7",
          "Em7",
          "Fmaj7",
          "G",
          "Am7",
          "Am7"
        ],
        "coda": [
          "Fmaj7",
          "G",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "house-acid-techno",
      "worldId": "house",
      "name": "Acid Techno",
      "origin": "Chicago / London",
      "era": "Late 1980s–1990s",
      "description": "TB-303 Squawk • Resonant • Fast\nRoland",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sub-bass",
        "sampler",
        "acid-303"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        142
      ],
      "keySubstyles": [
        "Acid House / Acid Techno",
        "TB-303 Squelch"
      ],
      "coreConcepts": [
        "Roland TB-303 cutoff, resonance, accent, and slide manipulations",
        "distorted overdriven synthesizer filter sweeps",
        "hypnotic 16th-note repeating sequence",
        "driving high-energy drum pulse"
      ],
      "rhythmicGrammar": [
        "continuous 16th-note 303 bassline with accents and slides shifting against 4/4 kick"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Screaming Roland TB-303 resonance knob twist on high accented slide note over 909 kick",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "squelch": [
          "Dm",
          "Dm",
          "Bb",
          "C",
          "Dm",
          "Dm",
          "Bb",
          "A7"
        ],
        "coda": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "house-hard-techno",
      "worldId": "house",
      "name": "Hard Techno",
      "origin": "Berlin / Netherlands / UK",
      "era": "2000s–Present",
      "description": "Industrial • 140+ BPM • Distorted",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "sampler",
        "noise-sweep"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        142,
        155
      ],
      "keySubstyles": [
        "Schranz",
        "Industrial Hard Techno"
      ],
      "coreConcepts": [
        "heavily distorted clipped industrial kick drums",
        "relentless fast tempos (145+ BPM)",
        "harsh metallic percussion and screeches",
        "unforgiving warehouse energy"
      ],
      "rhythmicGrammar": [
        "ferocious four-on-the-floor distorted kick pounding through continuous 16th metallic rides"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Massive clipped industrial kick drum slamming at 150 BPM under screeching metallic synth",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "Em",
          "Em",
          "Em"
        ],
        "drop": [
          "Em",
          "Em",
          "Em",
          "Em",
          "Em",
          "Em",
          "F",
          "D#dim"
        ],
        "coda": [
          "Em",
          "Em",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "house-melodic-techno",
      "worldId": "house",
      "name": "Melodic Techno",
      "origin": "Berlin / Italy / Ibiza",
      "era": "2015–Present",
      "description": "Emotional • Plucks • Cinematic\nEthereal lead",
      "characteristicInstruments": [
        "synth",
        "drums",
        "bass",
        "strings",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        122,
        128
      ],
      "keySubstyles": [
        "Afterlife Sound",
        "Cinematic Techno"
      ],
      "coreConcepts": [
        "soaring cinematic analog synth lead plucks (Moog/Prophet)",
        "dramatic emotional chord progressions",
        "deep rolling basslines with gentle sidechain",
        "subtle organic percussion layers"
      ],
      "rhythmicGrammar": [
        "smooth rolling 4-on-the-floor kick with 16th bassline arpeggio and elegant hi-hats"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Cinematic Moog pluck lead arpeggiating into sweeping euphoric chord resolution over rolling kick",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Fmaj7",
          "C",
          "G"
        ],
        "buildup": [
          "Am",
          "Fmaj7",
          "C",
          "G",
          "Dm7",
          "Em7",
          "Fmaj7",
          "G"
        ],
        "drop": [
          "Am",
          "Fmaj7",
          "C",
          "G",
          "Am",
          "Fmaj7",
          "Em7",
          "Am"
        ],
        "coda": [
          "Fmaj7",
          "G",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "house-ebm",
      "worldId": "house",
      "name": "EBM",
      "origin": "Belgium / Germany",
      "era": "1980s–Present",
      "description": "Aggressive • 16th Bassline • Cyberpunk\nElectronic",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sub-bass",
        "sampler",
        "saw-lead"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        124,
        134
      ],
      "keySubstyles": [
        "Electronic Body Music",
        "Dark EBM / Techno-EBM"
      ],
      "coreConcepts": [
        "relentless 16th-note sequenced bassline drive",
        "harsh militaristic drum machine beats",
        "shouted aggressive vocal commands",
        "dark industrial synthesizer leads"
      ],
      "rhythmicGrammar": [
        "machine-gun 16th-note synth bass sequence locked with heavy electronic kick and snare on 2 and 4"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Aggressive 16th-note machine-gun synth bass sequence driving under harsh militaristic snare",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "verse": [
          "Dm",
          "Dm",
          "Bb",
          "C",
          "Dm",
          "Dm",
          "Bb",
          "A7"
        ],
        "coda": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ]
      }
    }
  ,
    {
    "id": "house-chicago-house",
    "worldId": "house",
    "name": "Chicago House",
    "origin": "Chicago / United States",
    "era": "1980s–Present",
    "description": "Soulful vocals, four-on-floor kick, piano/chord stabs, bass groove and disco percussion.",
    "characteristicInstruments": [
        "drums",
        "piano",
        "bass",
        "synth",
        "voice"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        118,
        128
    ],
    "keySubstyles": [
        "Chicago House"
    ],
    "coreConcepts": [
        "four-on-floor",
        "house piano stab",
        "offbeat open hat",
        "disco percussion"
    ],
    "rhythmicGrammar": [
        "Four-on-floor with piano stabs and bass"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Four-on-floor with piano stabs and bass",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am7",
        "Dm7",
        "G7",
        "Cmaj7"
    ],
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
            "Cmaj7"
        ],
        "chorus": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "bridge": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "solo": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "coda": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ]
    },
    "referenceArtists": [
        "Frankie Knuckles",
        "Marshall Jefferson"
    ],
    "referenceTracks": [],
    "techniques": [
        "offbeat open hat",
        "piano house stab",
        "four-on-floor",
        "house clap"
    ]
},
{
    "id": "house-deep-house",
    "worldId": "house",
    "name": "Deep House",
    "origin": "Chicago / United States",
    "era": "1980s–Present",
    "description": "Warm extended chords, restrained drums, melodic bass and long-form groove development.",
    "characteristicInstruments": [
        "drums",
        "rhodes",
        "bass",
        "synth",
        "warm-pad"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        115,
        125
    ],
    "keySubstyles": [
        "Deep House"
    ],
    "coreConcepts": [
        "extended chord voicing",
        "restrained percussion",
        "melodic bass"
    ],
    "rhythmicGrammar": [
        "Warm extended chords over deep pocket"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Warm extended chords over deep pocket",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am7",
        "Dm7",
        "G7",
        "Cmaj7"
    ],
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
            "Cmaj7"
        ],
        "chorus": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "bridge": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "solo": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "coda": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ]
    },
    "referenceArtists": [
        "Larry Heard",
        "Kerri Chandler"
    ],
    "referenceTracks": [],
    "techniques": [
        "house clap",
        "piano house stab"
    ]
},
{
    "id": "house-acid-house",
    "worldId": "house",
    "name": "Acid House",
    "origin": "Chicago / United States",
    "era": "1980s–Present",
    "description": "TB-303 sequences with resonance/filter modulation, minimal harmony and hypnotic repetition.",
    "characteristicInstruments": [
        "acid-303",
        "drums",
        "bass-lead"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        120,
        130
    ],
    "keySubstyles": [
        "Acid House"
    ],
    "coreConcepts": [
        "303 acid sequence",
        "filter automation",
        "slide/accent"
    ],
    "rhythmicGrammar": [
        "Repeating acid sequence with filter movement"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Repeating acid sequence with filter movement",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am7",
        "Dm7",
        "G7",
        "Cmaj7"
    ],
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
            "Cmaj7"
        ],
        "chorus": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "bridge": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "solo": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "coda": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ]
    },
    "referenceArtists": [
        "Phuture",
        "DJ Pierre"
    ],
    "referenceTracks": [
        "Acid Tracks"
    ],
    "techniques": [
        "303 acid sequence",
        "filter automation",
        "Detroit synth sequence",
        "house clap",
        "piano house stab"
    ]
},
{
    "id": "house-minimal-techno",
    "worldId": "house",
    "name": "Minimal Techno",
    "origin": "Detroit / Berlin",
    "era": "1990s–Present",
    "description": "Tiny rhythmic cells, subtle automation and micro-variation replace large melodic changes.",
    "characteristicInstruments": [
        "drums",
        "synth",
        "bass-lead",
        "noise-sweep"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        120,
        135
    ],
    "keySubstyles": [
        "Minimal Techno"
    ],
    "coreConcepts": [
        "microvariation",
        "filter automation",
        "tom groove"
    ],
    "rhythmicGrammar": [
        "Minimal pulse with micro-variation"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Minimal pulse with micro-variation",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am7",
        "Dm7",
        "G7",
        "Cmaj7"
    ],
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
            "Cmaj7"
        ],
        "chorus": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "bridge": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "solo": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ],
        "coda": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
        ]
    },
    "referenceArtists": [
        "Robert Hood",
        "Richie Hawtin"
    ],
    "referenceTracks": [],
    "techniques": [
        "filter automation",
        "tom-based techno groove",
        "minimal microvariation"
    ]
}],
  "patterns": [
    {
      "id": "house--ht-four-floor",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums",
        "kick"
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
      "syncopationRating": 0.05,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "kick"
      ],
      "supportedEnergy": [
        1,
        2
      ],
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
          "id": "house--ht-four-floor-v-sparse",
          "parentPatternId": "house--ht-four-floor",
          "name": "Four-on-the-Floor Foundation — sparse",
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
          "id": "house--ht-four-floor-v-shift",
          "parentPatternId": "house--ht-four-floor",
          "name": "Four-on-the-Floor Foundation — accent shift",
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
      "id": "house--ht-offbeat-hat",
      "worldId": "house",
      "styleIds": [],
      "name": "Offbeat Hat",
      "family": "House Hats",
      "category": "ostinato",
      "description": "Open or closed hi-hat marks the subdivision.",
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "hats",
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
      "syncopationRating": 0.35,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "hat"
      ],
      "supportedEnergy": [
        1,
        2
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
          "id": "house--ht-offbeat-hat-v-sparse",
          "parentPatternId": "house--ht-offbeat-hat",
          "name": "Offbeat Hat — sparse",
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
          "id": "house--ht-offbeat-hat-v-shift",
          "parentPatternId": "house--ht-offbeat-hat",
          "name": "Offbeat Hat — accent shift",
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
      "id": "house--ht-house-bass",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "walking"
      ],
      "instruments": [
        "bass",
        "sub-bass"
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
      "supportedEnergy": [
        2,
        3,
        4
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
          "id": "house--ht-house-bass-v-sparse",
          "parentPatternId": "house--ht-house-bass",
          "name": "House Syncopated Bass — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
          "id": "house--ht-house-bass-v-shift",
          "parentPatternId": "house--ht-house-bass",
          "name": "House Syncopated Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
      "id": "house--ht-techno-sequence",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "phrase"
      ],
      "instruments": [
        "polysynth",
        "saw-lead"
      ],
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
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
          "id": "house--ht-techno-sequence-v-sparse",
          "parentPatternId": "house--ht-techno-sequence",
          "name": "Detroit 16th Sequence — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
          "id": "house--ht-techno-sequence-v-shift",
          "parentPatternId": "house--ht-techno-sequence",
          "name": "Detroit 16th Sequence — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
      "id": "house--ht-acid-303",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "walking"
      ],
      "instruments": [
        "bass-lead",
        "sub-bass"
      ],
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
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
          "id": "house--ht-acid-303-v-sparse",
          "parentPatternId": "house--ht-acid-303",
          "name": "Acid 16-Step Sequence — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
          "id": "house--ht-acid-303-v-shift",
          "parentPatternId": "house--ht-acid-303",
          "name": "Acid 16-Step Sequence — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
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
    },
    {
      "id": "house--ht-06-four-on-the-floor-kick",
      "worldId": "house",
      "styleIds": [],
      "name": "Four-floor kick with bar accent",
      "family": "House",
      "category": "groove",
      "description": "A stable four-on-the-floor foundation supports the arrangement.",
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "kick",
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
        0.72,
        0.86,
        0.74
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
      "id": "house--ht-07-offbeat-hat",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "hats"
      ],
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
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
      "id": "house--ht-08-house-bass-lock",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "walking"
      ],
      "instruments": [
        "bass",
        "sub-bass"
      ],
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
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
    },
    {
      "id": "house--ht-09-house-chord-stab",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "comping"
      ],
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
        0.7,
        0.65,
        0.72,
        0.68
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " offbeat"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
    },
    {
      "id": "house--ht-10-detroit-sequence",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "phrase"
      ],
      "instruments": [
        "synth",
        "saw-lead"
      ],
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
      "articulations": [
        " sequence"
      ],
      "supportedEnergy": [
        4,
        5
      ],
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
      "id": "house--ht-11-acid-303-accent",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "walking"
      ],
      "instruments": [
        "acid-303"
      ],
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
      "articulations": [
        " slide"
      ],
      "supportedEnergy": [
        4,
        5
      ],
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
    },
    {
      "id": "house--ht-12-techno-clap-backbeat",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums",
        "claves"
      ],
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
      "articulations": [
        " backbeat"
      ],
      "supportedEnergy": [
        1,
        2
      ],
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
    },
    {
      "id": "house--ht-13-riser-build",
      "worldId": "house",
      "styleIds": [],
      "name": "Riser Build",
      "family": "Arrangement",
      "category": "sectionPattern",
      "description": "A production-style build cue raises energy before the next section.",
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "saw-lead",
        "noise-sweep"
      ],
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
      "articulations": [
        " automation"
      ],
      "supportedEnergy": [
        4,
        5
      ],
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
      "id": "house--ht-14-club-breakdown",
      "worldId": "house",
      "styleIds": [],
      "name": "Club Breakdown",
      "family": "Arrangement",
      "category": "break",
      "transitionType": "fill",
      "description": "Removes kick and bass for a brief breakdown.",
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "warm-pad",
        "polysynth"
      ],
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
      "articulations": [
        " tension"
      ],
      "supportedEnergy": [
        1,
        2
      ],
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
    },
    {
      "id": "house--ht-15-drop-re-entry",
      "worldId": "house",
      "styleIds": [],
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "kick",
        "bass",
        "synth"
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
        0.8,
        0.9,
        0.85
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " re-entry"
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
    },
    {
      "id": "house--house-four-floor",
      "worldId": "house",
      "name": "House Four-on-the-Floor",
      "shortName": "House Four-on-the-Floor",
      "family": "house",
      "category": "groove",
      "description": "Steady quarter-note kick with minimal variation so syncopation can live above the pulse.",
      "tags": [
        "four-on-floor",
        "house",
        "kick"
      ],
      "approaches": [
        "four-on-floor",
        "house",
        "kick"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "rhythm",
        "pulse"
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
        "four-on-floor",
        "house",
        "kick"
      ]
    },
    {
      "id": "house--house-offbeat-hat",
      "worldId": "house",
      "name": "House Offbeat Hat",
      "shortName": "House Offbeat Hat",
      "family": "house",
      "category": "groove",
      "description": "Open-hat lift on the offbeats with occasional phrase-end omission.",
      "tags": [
        "offbeat-hat",
        "house"
      ],
      "approaches": [
        "offbeat-hat",
        "house"
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
        "offbeat-hat",
        "house"
      ]
    },
    {
      "id": "house--house-piano-stab",
      "worldId": "house",
      "name": "House Piano Stab",
      "shortName": "House Piano Stab",
      "family": "house",
      "category": "groove",
      "description": "Short triad/seventh stabs on the upbeat, coordinated with the vocal/hook gaps.",
      "tags": [
        "piano-stab",
        "house",
        "upbeat"
      ],
      "approaches": [
        "piano-stab",
        "house",
        "upbeat"
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
        2,
        6,
        10,
        14
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
        "piano-stab",
        "house",
        "upbeat"
      ]
    },
    {
      "id": "house--house-bass-lock",
      "worldId": "house",
      "name": "House Bass Lock",
      "shortName": "House Bass Lock",
      "family": "house",
      "category": "groove",
      "description": "Short bass figures that lock with the kick while anticipating harmonic changes.",
      "tags": [
        "house-bass",
        "syncopation",
        "lock"
      ],
      "approaches": [
        "house-bass",
        "syncopation",
        "lock"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass",
        "pulse"
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
        0.5,
        0.78,
        0.5,
        1,
        0.5
      ],
      "styleIds": [],
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
        "house-bass",
        "syncopation",
        "lock"
      ]
    }
  ,
  {
  "id": "tech-house-four-on-floor",
  "worldId": "house",
  "styleIds": [
    "house-chicago-house"
  ],
  "name": "four-on-floor",
  "shortName": "four-on-floor",
  "family": "house",
  "category": "groove",
  "description": "Technique: four-on-floor",
  "tags": [
    "house",
    "four-on-floor"
  ],
  "approaches": [
    "four-on-floor"
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
    "house",
    "four-on-floor"
  ],
  "techniques": [
    "four-on-floor"
  ]
},
{
  "id": "tech-house-offbeat-open-hat",
  "worldId": "house",
  "styleIds": [
    "house-chicago-house"
  ],
  "name": "offbeat open hat",
  "shortName": "offbeat open hat",
  "family": "house",
  "category": "groove",
  "description": "Technique: offbeat open hat",
  "tags": [
    "house",
    "offbeat open hat"
  ],
  "approaches": [
    "offbeat open hat"
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
    "house",
    "offbeat open hat"
  ],
  "techniques": [
    "offbeat open hat"
  ]
},
{
  "id": "tech-house-house-clap",
  "worldId": "house",
  "styleIds": [
    "house-chicago-house",
    "house-deep-house",
    "house-acid-house"
  ],
  "name": "house clap",
  "shortName": "house clap",
  "family": "house",
  "category": "groove",
  "description": "Technique: house clap",
  "tags": [
    "house",
    "house clap"
  ],
  "approaches": [
    "house clap"
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
    "drums",
    "hand-percussion"
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
    "house",
    "house clap"
  ],
  "techniques": [
    "house clap"
  ]
},
{
  "id": "tech-house-piano-house-stab",
  "worldId": "house",
  "styleIds": [
    "house-chicago-house",
    "house-deep-house",
    "house-acid-house"
  ],
  "name": "piano house stab",
  "shortName": "piano house stab",
  "family": "house",
  "category": "comping",
  "description": "Technique: piano house stab",
  "tags": [
    "house",
    "piano house stab"
  ],
  "approaches": [
    "piano house stab"
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
    "piano"
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
    "house",
    "piano house stab"
  ],
  "techniques": [
    "piano house stab"
  ]
},
{
  "id": "tech-house-303-acid-sequence",
  "worldId": "house",
  "styleIds": [
    "house-acid-house"
  ],
  "name": "303 acid sequence",
  "shortName": "303 acid sequence",
  "family": "house",
  "category": "bass",
  "description": "Technique: 303 acid sequence",
  "tags": [
    "house",
    "303 acid sequence"
  ],
  "approaches": [
    "303 acid sequence"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "bass",
    "texture"
  ],
  "instruments": [
    "acid-303"
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
  "articulations": [
    "filter-motion"
  ],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "house",
    "303 acid sequence"
  ],
  "techniques": [
    "303 acid sequence"
  ]
},
{
  "id": "tech-house-detroit-synth-sequence",
  "worldId": "house",
  "styleIds": [
    "house-acid-house"
  ],
  "name": "Detroit synth sequence",
  "shortName": "Detroit synth sequence",
  "family": "house",
  "category": "texture",
  "description": "Technique: Detroit synth sequence",
  "tags": [
    "house",
    "Detroit synth sequence"
  ],
  "approaches": [
    "Detroit synth sequence"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "texture",
    "lead"
  ],
  "instruments": [
    "synth"
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
    "house",
    "Detroit synth sequence"
  ],
  "techniques": [
    "Detroit synth sequence"
  ]
},
{
  "id": "tech-house-tom-based-techno-groove",
  "worldId": "house",
  "styleIds": [
    "house-minimal-techno"
  ],
  "name": "tom-based techno groove",
  "shortName": "tom-based techno groove",
  "family": "house",
  "category": "groove",
  "description": "Technique: tom-based techno groove",
  "tags": [
    "house",
    "tom-based techno groove"
  ],
  "approaches": [
    "tom-based techno groove"
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
    "house",
    "tom-based techno groove"
  ],
  "techniques": [
    "tom-based techno groove"
  ]
},
{
  "id": "tech-house-minimal-microvariation",
  "worldId": "house",
  "styleIds": [
    "house-minimal-techno"
  ],
  "name": "minimal microvariation",
  "shortName": "minimal microvariation",
  "family": "house",
  "category": "groove",
  "description": "Technique: minimal microvariation",
  "tags": [
    "house",
    "minimal microvariation"
  ],
  "approaches": [
    "minimal microvariation"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "lead"
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
    "house",
    "minimal microvariation"
  ],
  "techniques": [
    "minimal microvariation"
  ]
},
{
  "id": "tech-house-filter-automation",
  "worldId": "house",
  "styleIds": [
    "house-acid-house",
    "house-minimal-techno"
  ],
  "name": "filter automation",
  "shortName": "filter automation",
  "family": "house",
  "category": "texture",
  "description": "Technique: filter automation",
  "tags": [
    "house",
    "filter automation"
  ],
  "approaches": [
    "filter automation"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "texture"
  ],
  "instruments": [
    "synth"
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
    "house",
    "filter automation"
  ],
  "techniques": [
    "filter automation"
  ]
},
{
  "id": "tech-house-8-16-bar-club-phrasing",
  "worldId": "house",
  "styleIds": [],
  "name": "8/16-bar club phrasing",
  "shortName": "8/16-bar club phrasing",
  "family": "house",
  "category": "groove",
  "description": "Technique: 8/16-bar club phrasing",
  "tags": [
    "house",
    "8/16-bar club phrasing"
  ],
  "approaches": [
    "8/16-bar club phrasing"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "rhythm",
    "lead"
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
    "house",
    "8/16-bar club phrasing"
  ],
  "techniques": [
    "8/16-bar club phrasing"
  ]
},
{
  "id": "style-house-chicago-house-signature",
  "worldId": "house",
  "styleIds": [
    "house-chicago-house"
  ],
  "name": "Chicago House Signature Cell",
  "shortName": "Chicago House Cell",
  "family": "house",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "house",
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
    "drums",
    "piano",
    "bass",
    "synth"
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
    "house",
    "signature"
  ],
  "techniques": [
    "offbeat open hat",
    "piano house stab",
    "four-on-floor",
    "house clap"
  ]
},
{
  "id": "style-house-deep-house-signature",
  "worldId": "house",
  "styleIds": [
    "house-deep-house"
  ],
  "name": "Deep House Signature Cell",
  "shortName": "Deep House Cell",
  "family": "house",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "house",
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
    "drums",
    "rhodes",
    "bass",
    "synth"
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
    "house",
    "signature"
  ],
  "techniques": [
    "house clap",
    "piano house stab"
  ]
},
{
  "id": "style-house-acid-house-signature",
  "worldId": "house",
  "styleIds": [
    "house-acid-house"
  ],
  "name": "Acid House Signature Cell",
  "shortName": "Acid House Cell",
  "family": "house",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "house",
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
    "acid-303",
    "drums",
    "bass-lead"
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
    "house",
    "signature"
  ],
  "techniques": [
    "303 acid sequence",
    "filter automation",
    "Detroit synth sequence",
    "house clap",
    "piano house stab"
  ]
},
{
  "id": "style-house-minimal-techno-signature",
  "worldId": "house",
  "styleIds": [
    "house-minimal-techno"
  ],
  "name": "Minimal Techno Signature Cell",
  "shortName": "Minimal Techno Cell",
  "family": "house",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "house",
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
    "drums",
    "synth",
    "bass-lead",
    "noise-sweep"
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
    "house",
    "signature"
  ],
  "techniques": [
    "filter automation",
    "tom-based techno groove",
    "minimal microvariation"
  ]
}],
  "kind": "world",
  "strictness": "strict"
};
