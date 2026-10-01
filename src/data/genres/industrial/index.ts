import type { GenreWorld } from '../../schema';

/** Standalone authored definition for Industrial. */
export const INDUSTRIAL_WORLD: GenreWorld = {
  "id": "industrial",
  "name": "Industrial",
  "family": "Electronic / Mechanical / Noise",
  "color": "#4f5459",
  "level": "world",
  "description": "Mechanical rhythms, distorted synthesizers, harsh noise sampling, and relentless electronic drive.",
  "substyles": [
    "EBM",
    "Industrial Techno",
    "Noise Industrial",
    "Dark Industrial"
  ],
  "artists": [
    "Front 242",
    "Nitzer Ebb",
    "Skinny Puppy",
    "Ministry",
    "Nine Inch Nails"
  ],
  "concepts": [
    "Sequenced 16th bass",
    "Distorted drums",
    "Sampled metallic noise",
    "Harsh sequencing"
  ],
  "crossLinks": [
    "EBM ↔ Electronic Dance Music",
    "Industrial Rock ↔ Rock",
    "Industrial ↔ Noise / Experimental Music"
  ],
  "roles": {
    "lead": [
      "synth",
      "noise-sweep"
    ],
    "harmony": [
      "synth",
      "sampler"
    ],
    "bass": [
      "bass-lead",
      "sub-bass",
      "synth"
    ],
    "rhythm": [
      "drums"
    ],
    "percussion": [
      "sampler",
      "noise-sweep"
    ]
  },
  "rhythm": {
    "syncopation": 0.2,
    "swing": 0,
    "pocket": "ahead",
    "pocketDepth": 5
  },
  "tuningSystem": "12-tet",
  "signatureCell": "Rigid machine pulse, sequenced distorted bass and metallic noise accents with abrupt stops",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed"
  },
  "styleDefinitions": [
    {
      "id": "industrial-ebm",
      "worldId": "industrial",
      "name": "EBM",
      "origin": "Belgium / Germany",
      "era": "1980s–1990s",
      "description": "Electronic Body Music: sequencing, harsh beats, and aggressive synth bass.",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sampler",
        "bass-lead",
        "noise-sweep"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        132
      ],
      "keySubstyles": [
        "EBM",
        "Industrial Techno",
        "Noise Industrial",
        "Dark Industrial"
      ],
      "coreConcepts": [
        "Sequenced 16th-note basslines",
        "Aggressive drum machines",
        "Sampled metallic noise"
      ],
      "rhythmicGrammar": [
        "Driving four-on-the-floor mechanical pulse"
      ],
      "danceTags": [
        "club-dark"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Mechanical 16th bass with cold industrial beat",
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
        "verse": [
          "Em",
          "Em",
          "C",
          "D"
        ],
        "chorus": [
          "C",
          "D",
          "Em",
          "Em"
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
      "id": "industrial-techno",
      "worldId": "industrial",
      "name": "Industrial Techno",
      "origin": "Germany / United Kingdom / Netherlands",
      "era": "1990s–present",
      "description": "Pounding distorted kicks and metallic percussion at club-hard tempos.",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sampler",
        "bass-lead",
        "noise-sweep"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        128,
        150
      ],
      "keySubstyles": [
        "Industrial Techno",
        "Hard Techno"
      ],
      "coreConcepts": [
        "Distorted kick as bass",
        "Metallic hat and clang percussion",
        "Long filtered risers"
      ],
      "rhythmicGrammar": [
        "Driving four-on-the-floor with offbeat rumble and clanging accents"
      ],
      "danceTags": [
        "club-dark"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Overdriven four-on-the-floor kick with offbeat rumble bass and metal hits",
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
        "buildup": [
          "Dm",
          "Dm",
          "Bb",
          "C"
        ],
        "drop": [
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Bb",
          "C"
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
      "id": "industrial-noise",
      "worldId": "industrial",
      "name": "Noise Industrial",
      "origin": "United Kingdom / United States / Japan",
      "era": "1970s–present",
      "description": "Harsh textural sound design with sparse, unstable rhythm and heavy distortion.",
      "characteristicInstruments": [
        "noise-sweep",
        "sampler",
        "synth",
        "drums",
        "bass-lead"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        60,
        110
      ],
      "keySubstyles": [
        "Noise Industrial",
        "Power Electronics"
      ],
      "coreConcepts": [
        "Feedback and distortion as texture",
        "Found-sound sampling",
        "Irregular pulse"
      ],
      "rhythmicGrammar": [
        "Loose or free pulse with irregular metallic hits over drone"
      ],
      "danceTags": [
        "solo-listening",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Irregular metallic impacts over a distorted drone and feedback swells",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "drunk"
      },
      "sectionProgressions": {
        "intro": [
          "E",
          "E",
          "E",
          "E"
        ],
        "verse": [
          "E",
          "E",
          "F",
          "E"
        ],
        "chorus": [
          "E",
          "F",
          "E",
          "F"
        ],
        "solo": [
          "E",
          "E",
          "E",
          "E"
        ],
        "coda": [
          "E",
          "E",
          "E",
          "E"
        ]
      }
    },
    {
      "id": "industrial-dark",
      "worldId": "industrial",
      "name": "Dark Industrial",
      "origin": "Canada / United States / Germany",
      "era": "1990s–present",
      "description": "Brooding, cinematic industrial with minor-key synths and heavy mid-tempo beats.",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sampler",
        "bass-lead",
        "noise-sweep"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        80,
        120
      ],
      "keySubstyles": [
        "Dark Industrial",
        "Industrial Rock"
      ],
      "coreConcepts": [
        "Minor-key synth hooks",
        "Heavy mid-tempo beat",
        "Dark atmospheric samples"
      ],
      "rhythmicGrammar": [
        "4/4 heavy mid-tempo backbeat over sequenced 16th bass"
      ],
      "danceTags": [
        "club-dark",
        "solo-listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Heavy half-time backbeat with distorted sequenced bass and cold synth pads",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "Em",
          "C",
          "D"
        ],
        "verse": [
          "Em",
          "Em",
          "C",
          "D"
        ],
        "chorus": [
          "C",
          "D",
          "Em",
          "Em"
        ],
        "solo": [
          "Em",
          "C",
          "D",
          "Em"
        ],
        "coda": [
          "Em",
          "Em",
          "Em",
          "Em"
        ]
      }
    }
  ,
    {
    "id": "industrial-industrial-rock",
    "worldId": "industrial",
    "name": "Industrial Rock",
    "origin": "United States / United Kingdom",
    "era": "1980s–Present",
    "description": "Rock song structures combined with programmed percussion, distorted guitar and industrial loops.",
    "characteristicInstruments": [
        "distortion-guitar",
        "bass",
        "drums",
        "sampler",
        "voice"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        90,
        130
    ],
    "keySubstyles": [
        "Industrial Rock"
    ],
    "coreConcepts": [
        "distorted loop",
        "machine kick",
        "guitar/kick synchronization"
    ],
    "rhythmicGrammar": [
        "Rock song form with machine percussion"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Rock song form with machine percussion",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Em",
        "C",
        "D",
        "B7"
    ],
    "sectionProgressions": {
        "intro": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "verse": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "chorus": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "bridge": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "solo": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "coda": [
            "Em",
            "C",
            "D",
            "B7"
        ]
    },
    "referenceArtists": [
        "Nine Inch Nails",
        "Ministry"
    ],
    "referenceTracks": [],
    "techniques": [
        "distorted loop",
        "machine kick",
        "synchronized guitar/kick",
        "industrial noise layer",
        "metallic percussion"
    ]
},
{
    "id": "industrial-industrial-metal",
    "worldId": "industrial",
    "name": "Industrial Metal",
    "origin": "United Kingdom / United States",
    "era": "1990s–Present",
    "description": "Machine-like guitar riffs with synchronized kick attacks and controlled rhythmic repetition.",
    "characteristicInstruments": [
        "distortion-guitar",
        "bass",
        "drums",
        "noise-sweep"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        80,
        135
    ],
    "keySubstyles": [
        "Industrial Metal"
    ],
    "coreConcepts": [
        "synchronized guitar/kick",
        "mechanical ostinato",
        "palm-muted chug"
    ],
    "rhythmicGrammar": [
        "Mechanical guitar riff locked to kick"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Mechanical guitar riff locked to kick",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Em",
        "C",
        "D",
        "B7"
    ],
    "sectionProgressions": {
        "intro": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "verse": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "chorus": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "bridge": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "solo": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "coda": [
            "Em",
            "C",
            "D",
            "B7"
        ]
    },
    "referenceArtists": [
        "Godflesh",
        "Fear Factory"
    ],
    "referenceTracks": [],
    "techniques": [
        "mechanical ostinato",
        "synchronized guitar/kick",
        "industrial noise layer",
        "machine kick"
    ]
},
{
    "id": "industrial-power-electronics",
    "worldId": "industrial",
    "name": "Power Electronics",
    "origin": "United Kingdom / Japan",
    "era": "1980s–Present",
    "description": "Noise, feedback, extreme frequency content and nontraditional rhythmic organization used as texture.",
    "characteristicInstruments": [
        "noise-sweep",
        "sampler",
        "drums",
        "voice"
    ],
    "preferredMeters": [
        "4/4",
        "free"
    ],
    "tempoRange": [
        50,
        140
    ],
    "keySubstyles": [
        "Power Electronics"
    ],
    "coreConcepts": [
        "feedback swell",
        "noise layer",
        "density build"
    ],
    "rhythmicGrammar": [
        "Noise texture with non-grid density"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Noise texture with non-grid density",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Em",
        "C",
        "D",
        "B7"
    ],
    "sectionProgressions": {
        "intro": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "verse": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "chorus": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "bridge": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "solo": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "coda": [
            "Em",
            "C",
            "D",
            "B7"
        ]
    },
    "referenceArtists": [
        "Whitehouse",
        "Merzbow"
    ],
    "referenceTracks": [],
    "techniques": [
        "feedback swell",
        "frequency-density build",
        "industrial noise layer",
        "gated noise"
    ]
},
{
    "id": "industrial-industrial-ambient",
    "worldId": "industrial",
    "name": "Industrial Ambient",
    "origin": "United Kingdom / Europe",
    "era": "1990s–Present",
    "description": "Dark drones, metallic textures, field recordings and slow spectral development.",
    "characteristicInstruments": [
        "drone",
        "noise-sweep",
        "sampler",
        "warm-pad"
    ],
    "preferredMeters": [
        "4/4",
        "free"
    ],
    "tempoRange": [
        40,
        100
    ],
    "keySubstyles": [
        "Industrial Ambient"
    ],
    "coreConcepts": [
        "dark drone",
        "metallic texture",
        "slow spectral build"
    ],
    "rhythmicGrammar": [
        "Dark drone with metallic texture"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Dark drone with metallic texture",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Em",
        "C",
        "D",
        "B7"
    ],
    "sectionProgressions": {
        "intro": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "verse": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "chorus": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "bridge": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "solo": [
            "Em",
            "C",
            "D",
            "B7"
        ],
        "coda": [
            "Em",
            "C",
            "D",
            "B7"
        ]
    },
    "referenceArtists": [
        "Lustmord",
        "Coil"
    ],
    "referenceTracks": [],
    "techniques": [
        "drone",
        "frequency-density build",
        "industrial noise layer",
        "metallic percussion"
    ]
}],
  "patterns": [
    {
      "id": "industrial--industrial-mechanical-pulse",
      "worldId": "industrial",
      "name": "Industrial Mechanical Pulse",
      "meter": "4/4",
      "cycleLength": 16,
      "subdivisions": 16,
      "category": "groove",
      "family": "industrial",
      "description": "Relentless sequenced electronic kick and distorted synth pulse",
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
      "instruments": [
        "synth",
        "drums",
        "sampler",
        "bass-lead",
        "noise-sweep"
      ],
      "roles": [
        "rhythm",
        "bass"
      ],
      "tags": [
        "mechanical",
        "driving",
        "electronic"
      ],
      "scopes": [
        "region"
      ],
      "variants": [],
      "styleIds": []
    },
    {
      "id": "industrial--industrial-ebm-pulse-native",
      "worldId": "industrial",
      "name": "Industrial EBM 16th Pulse",
      "shortName": "Industrial EBM 16th Pulse",
      "family": "industrial",
      "category": "groove",
      "description": "Rigid electronic 16th-note motor with heavy downbeat emphasis and hard stop at the bar turn.",
      "tags": [
        "EBM-pulse",
        "mechanical-stop",
        "industrial"
      ],
      "approaches": [
        "EBM-pulse",
        "mechanical-stop",
        "industrial"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass",
        "rhythm",
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
        "EBM-pulse",
        "mechanical-stop",
        "industrial"
      ]
    },
    {
      "id": "industrial--industrial-four-native",
      "worldId": "industrial",
      "name": "Industrial Four Pulse",
      "shortName": "Industrial Four Pulse",
      "family": "industrial",
      "category": "groove",
      "description": "Relentless quarter-note pulse with metallic punctuation at the phrase end.",
      "tags": [
        "industrial-four",
        "mechanical-stop",
        "industrial"
      ],
      "approaches": [
        "industrial-four",
        "mechanical-stop",
        "industrial"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "rhythm",
        "percussion"
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
        0.5,
        0.78,
        0.5,
        1
      ],
      "styleIds": [],
      "durationGrid": [
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
        "industrial-four",
        "mechanical-stop",
        "industrial"
      ]
    },
    {
      "id": "industrial--industrial-ebm-pulse",
      "worldId": "industrial",
      "name": "Industrial EBM Pulse",
      "shortName": "Industrial EBM Pulse",
      "family": "industrial",
      "category": "groove",
      "description": "Rigid four-on-floor pulse coupled to 16th-note bass attacks and controlled stops.",
      "tags": [
        "ebm",
        "mechanical",
        "16th"
      ],
      "approaches": [
        "ebm",
        "mechanical",
        "16th"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "rhythm",
        "bass",
        "pulse"
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
        "ebm",
        "mechanical",
        "16th"
      ]
    },
    {
      "id": "industrial--industrial-four-kick",
      "worldId": "industrial",
      "name": "Industrial Four Kick",
      "shortName": "Industrial Four Kick",
      "family": "industrial",
      "category": "groove",
      "description": "Heavy quarter-note kick grid with bar-end interruption for impact.",
      "tags": [
        "industrial",
        "four-kick",
        "impact"
      ],
      "approaches": [
        "industrial",
        "four-kick",
        "impact"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "pulse"
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
        0.5,
        0.78,
        0.5,
        1
      ],
      "styleIds": [],
      "durationGrid": [
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
        "industrial",
        "four-kick",
        "impact"
      ]
    },
    {
      "id": "industrial--industrial-metal-hit",
      "worldId": "industrial",
      "name": "Industrial Metal Hit",
      "shortName": "Industrial Metal Hit",
      "family": "industrial",
      "category": "groove",
      "description": "Short metallic impact accents placed around the groove rather than on every beat.",
      "tags": [
        "metal-hit",
        "noise",
        "punctuation"
      ],
      "approaches": [
        "metal-hit",
        "noise",
        "punctuation"
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
        0,
        7,
        8,
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
        "metal-hit",
        "noise",
        "punctuation"
      ]
    },
    {
      "id": "industrial--industrial-stop-start",
      "worldId": "industrial",
      "name": "Industrial Stop Start",
      "shortName": "Industrial Stop Start",
      "family": "industrial",
      "category": "groove",
      "description": "Synchronized cutoff/re-entry cell for section transitions and breakdowns.",
      "tags": [
        "stop-start",
        "breakdown",
        "industrial"
      ],
      "approaches": [
        "stop-start",
        "breakdown",
        "industrial"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "rhythm",
        "harmony",
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
        "stop-start",
        "breakdown",
        "industrial"
      ]
    },
    {
      "id": "industrial--industrial-bass-lock",
      "worldId": "industrial",
      "name": "Industrial Bass Lock",
      "shortName": "Industrial Bass Lock",
      "family": "industrial",
      "category": "groove",
      "description": "Low-register power/riff attacks synchronized to the mechanical pulse.",
      "tags": [
        "industrial",
        "EBM-pulse",
        "mechanical-stop"
      ],
      "approaches": [
        "industrial",
        "EBM-pulse",
        "mechanical-stop"
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
        0.78
      ],
      "styleIds": [],
      "durationGrid": [
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
        "industrial",
        "EBM-pulse",
        "mechanical-stop"
      ]
    },
    {
      "id": "industrial--industrial-metal-percussion",
      "worldId": "industrial",
      "name": "Industrial Metal Percussion",
      "shortName": "Industrial Metal Percussion",
      "family": "industrial",
      "category": "groove",
      "description": "Metallic strike accents on transitions and offbeat mechanical cells.",
      "tags": [
        "industrial",
        "mechanical-stop",
        "metal-hit"
      ],
      "approaches": [
        "industrial",
        "mechanical-stop",
        "metal-hit"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        7,
        12,
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
        "industrial",
        "mechanical-stop",
        "metal-hit"
      ]
    }
  ,
  {
  "id": "tech-industrial-machine-kick",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-rock",
    "industrial-industrial-metal"
  ],
  "name": "machine kick",
  "shortName": "machine kick",
  "family": "industrial",
  "category": "groove",
  "description": "Technique: machine kick",
  "tags": [
    "industrial",
    "machine kick"
  ],
  "approaches": [
    "machine kick"
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
    "industrial",
    "machine kick"
  ],
  "techniques": [
    "machine kick"
  ]
},
{
  "id": "tech-industrial-metallic-percussion",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-rock",
    "industrial-industrial-ambient"
  ],
  "name": "metallic percussion",
  "shortName": "metallic percussion",
  "family": "industrial",
  "category": "groove",
  "description": "Technique: metallic percussion",
  "tags": [
    "industrial",
    "metallic percussion"
  ],
  "approaches": [
    "metallic percussion"
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
    "industrial",
    "metallic percussion"
  ],
  "techniques": [
    "metallic percussion"
  ]
},
{
  "id": "tech-industrial-distorted-loop",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-rock"
  ],
  "name": "distorted loop",
  "shortName": "distorted loop",
  "family": "industrial",
  "category": "groove",
  "description": "Technique: distorted loop",
  "tags": [
    "industrial",
    "distorted loop"
  ],
  "approaches": [
    "distorted loop"
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
    "industrial",
    "distorted loop"
  ],
  "techniques": [
    "distorted loop"
  ]
},
{
  "id": "tech-industrial-industrial-noise-layer",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-rock",
    "industrial-industrial-metal",
    "industrial-power-electronics",
    "industrial-industrial-ambient"
  ],
  "name": "industrial noise layer",
  "shortName": "industrial noise layer",
  "family": "industrial",
  "category": "texture",
  "description": "Technique: industrial noise layer",
  "tags": [
    "industrial",
    "industrial noise layer"
  ],
  "approaches": [
    "industrial noise layer"
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
    "industrial",
    "industrial noise layer"
  ],
  "techniques": [
    "industrial noise layer"
  ]
},
{
  "id": "tech-industrial-synchronized-guitar-kick",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-rock",
    "industrial-industrial-metal"
  ],
  "name": "synchronized guitar/kick",
  "shortName": "synchronized guitar/kick",
  "family": "industrial",
  "category": "groove",
  "description": "Technique: synchronized guitar/kick",
  "tags": [
    "industrial",
    "synchronized guitar/kick"
  ],
  "approaches": [
    "synchronized guitar/kick"
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
    "industrial",
    "synchronized guitar/kick"
  ],
  "techniques": [
    "synchronized guitar/kick"
  ]
},
{
  "id": "tech-industrial-gated-noise",
  "worldId": "industrial",
  "styleIds": [
    "industrial-power-electronics"
  ],
  "name": "gated noise",
  "shortName": "gated noise",
  "family": "industrial",
  "category": "texture",
  "description": "Technique: gated noise",
  "tags": [
    "industrial",
    "gated noise"
  ],
  "approaches": [
    "gated noise"
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
    "industrial",
    "gated noise"
  ],
  "techniques": [
    "gated noise"
  ]
},
{
  "id": "tech-industrial-feedback-swell",
  "worldId": "industrial",
  "styleIds": [
    "industrial-power-electronics"
  ],
  "name": "feedback swell",
  "shortName": "feedback swell",
  "family": "industrial",
  "category": "texture",
  "description": "Technique: feedback swell",
  "tags": [
    "industrial",
    "feedback swell"
  ],
  "approaches": [
    "feedback swell"
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
    "industrial",
    "feedback swell"
  ],
  "techniques": [
    "feedback swell"
  ]
},
{
  "id": "tech-industrial-drone",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-ambient"
  ],
  "name": "drone",
  "shortName": "drone",
  "family": "industrial",
  "category": "texture",
  "description": "Technique: drone",
  "tags": [
    "industrial",
    "drone"
  ],
  "approaches": [
    "drone"
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
    8
  ],
  "accentProfile": [
    1,
    0.65
  ],
  "velocityProfile": [
    0.92,
    0.72
  ],
  "durationGrid": [
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-genre",
  "canCrossRole": true,
  "authenticityTags": [
    "industrial",
    "drone"
  ],
  "techniques": [
    "drone"
  ]
},
{
  "id": "tech-industrial-mechanical-ostinato",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-metal"
  ],
  "name": "mechanical ostinato",
  "shortName": "mechanical ostinato",
  "family": "industrial",
  "category": "groove",
  "description": "Technique: mechanical ostinato",
  "tags": [
    "industrial",
    "mechanical ostinato"
  ],
  "approaches": [
    "mechanical ostinato"
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
    "industrial",
    "mechanical ostinato"
  ],
  "techniques": [
    "mechanical ostinato"
  ]
},
{
  "id": "tech-industrial-frequency-density-build",
  "worldId": "industrial",
  "styleIds": [
    "industrial-power-electronics",
    "industrial-industrial-ambient"
  ],
  "name": "frequency-density build",
  "shortName": "frequency-density build",
  "family": "industrial",
  "category": "texture",
  "description": "Technique: frequency-density build",
  "tags": [
    "industrial",
    "frequency-density build"
  ],
  "approaches": [
    "frequency-density build"
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
    "industrial",
    "frequency-density build"
  ],
  "techniques": [
    "frequency-density build"
  ]
},
{
  "id": "style-industrial-industrial-rock-signature",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-rock"
  ],
  "name": "Industrial Rock Signature Cell",
  "shortName": "Industrial Rock Cell",
  "family": "industrial",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "industrial",
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
    "distortion-guitar",
    "bass",
    "drums",
    "sampler"
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
    "industrial",
    "signature"
  ],
  "techniques": [
    "distorted loop",
    "machine kick",
    "synchronized guitar/kick",
    "industrial noise layer",
    "metallic percussion"
  ]
},
{
  "id": "style-industrial-industrial-metal-signature",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-metal"
  ],
  "name": "Industrial Metal Signature Cell",
  "shortName": "Industrial Metal Cell",
  "family": "industrial",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "industrial",
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
    "distortion-guitar",
    "bass",
    "drums",
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
    "industrial",
    "signature"
  ],
  "techniques": [
    "mechanical ostinato",
    "synchronized guitar/kick",
    "industrial noise layer",
    "machine kick"
  ]
},
{
  "id": "style-industrial-power-electronics-signature",
  "worldId": "industrial",
  "styleIds": [
    "industrial-power-electronics"
  ],
  "name": "Power Electronics Signature Cell",
  "shortName": "Power Electronics Cell",
  "family": "industrial",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "industrial",
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
    "noise-sweep",
    "sampler",
    "drums",
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
    "industrial",
    "signature"
  ],
  "techniques": [
    "feedback swell",
    "frequency-density build",
    "industrial noise layer",
    "gated noise"
  ]
},
{
  "id": "style-industrial-industrial-ambient-signature",
  "worldId": "industrial",
  "styleIds": [
    "industrial-industrial-ambient"
  ],
  "name": "Industrial Ambient Signature Cell",
  "shortName": "Industrial Ambient Cell",
  "family": "industrial",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "industrial",
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
    "drone",
    "noise-sweep",
    "sampler",
    "warm-pad"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    0,
    8
  ],
  "accentProfile": [
    1,
    0.7
  ],
  "velocityProfile": [
    0.9,
    0.7
  ],
  "durationGrid": [
    1,
    1
  ],
  "articulations": [],
  "variants": [],
  "sourceLevel": "native-style",
  "canCrossRole": false,
  "authenticityTags": [
    "industrial",
    "signature"
  ],
  "techniques": [
    "drone",
    "frequency-density build",
    "industrial noise layer",
    "metallic percussion"
  ]
}]
};
