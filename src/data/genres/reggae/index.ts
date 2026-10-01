import type { GenreWorld } from '../../schema';

/** Standalone authored definition for Reggae. */
export const REGGAE_WORLD: GenreWorld = {
  "id": "reggae",
  "name": "Reggae",
  "family": "Jamaican / sound-system",
  "color": "#4f8f6f",
  "level": "world",
  "description": "Reggae and dub pair offbeat Jamaican grooves with deep bass and spacious production.",
  "substyles": [
    "Roots Reggae",
    "Dub",
    "Dancehall",
    "Lovers Rock",
    "Rocksteady",
    "Ragga",
    "Ska",
    "Calypso"
  ],
  "artists": [
    "Bob Marley & The Wailers",
    "Burning Spear",
    "King Tubby",
    "Lee \"Scratch\" Perry",
    "Yellowman",
    "Sean Paul",
    "Janet Kay",
    "Gregory Isaacs",
    "Alton Ellis",
    "The Paragons",
    "Shabba Ranks",
    "Buju Banton",
    "The Skatalites",
    "Prince Buster",
    "Mighty Sparrow",
    "Lord Kitchener"
  ],
  "concepts": [
    "one-drop",
    "skank",
    "melodic bass",
    "dub dropout",
    "echo space",
    "steppers"
  ],
  "crossLinks": [
    "Reggae ↔ Ska",
    "Dub ↔ House/Techno"
  ],
  "roles": {
    "drums": [
      "one-drop",
      "steppers"
    ],
    "bass": [
      "melodic deep bass"
    ],
    "harmony": [
      "guitar/organ skank"
    ],
    "texture": [
      "dub fragments"
    ],
    "horn-section": [
      "laid-back lead/coro"
    ]
  },
  "tuningSystem": "12-tet",
  "signatureCell": "One-drop/steppers drum skeleton with offbeat skank and bass-led space",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back",
    "humanizeJitterMs": 8
  },
  "styleDefinitions": [
    {
      "id": "reggae-roots-reggae",
      "worldId": "reggae",
      "name": "Roots Reggae",
      "origin": "Kingston, Jamaica",
      "era": "1970s",
      "description": "One Drop • Skank • Conscious\nSpiritual",
      "characteristicInstruments": [
        "drums",
        "bass",
        "electric-guitar",
        "organ",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        68,
        84
      ],
      "keySubstyles": [
        "One Drop Reggae",
        "Rocker Style"
      ],
      "coreConcepts": [
        "\"One Drop\" drum pattern (snare and kick landing together strictly on beat 3)",
        "guitar and piano skank on offbeat eighth notes (2 and 4)",
        "heavy melodic basslines carrying the song hook",
        "conscious Rastafari spiritual and political lyrics"
      ],
      "rhythmicGrammar": [
        "empty beat 1 downbeat with explosive rimshot and kick combination on beat 3"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "One Drop kick-and-rimshot landing on beat 3 answered by twin organ bubble and guitar skank",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "G",
          "D"
        ],
        "verse": [
          "G",
          "C",
          "G",
          "D",
          "G",
          "C",
          "D",
          "G"
        ],
        "chorus": [
          "C",
          "G",
          "D",
          "G",
          "C",
          "G",
          "D",
          "G"
        ],
        "coda": [
          "C",
          "D",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "reggae-dub",
      "worldId": "reggae",
      "name": "Dub",
      "origin": "Kingston, Jamaica",
      "era": "1970s",
      "description": "Space echo and deep bass drops.",
      "characteristicInstruments": [
        "bass",
        "drums",
        "tape-echo",
        "spring-reverb",
        "organ"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        65,
        80
      ],
      "keySubstyles": [
        "Tubby Dub",
        "Black Ark Sound"
      ],
      "coreConcepts": [
        "stripping away vocals to leave massive bass and drums",
        "sending snare hits and guitar chords into infinite tape delay",
        "thunderous spring reverb crashes and filter sweeps",
        "deep subterranean sub-bass frequencies"
      ],
      "rhythmicGrammar": [
        "isolated drum and bass groove punctuated by sudden echoing snare cracks and dropouts"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Snare rimshot thrown into cascading Roland Space Echo delay over thunderous bassline drop",
      "grooveMechanics": {
        "swingPercentage": 60,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Dm",
          "Am",
          "Em"
        ],
        "drop": [
          "Am",
          "Dm",
          "Am",
          "Em",
          "Am",
          "Dm",
          "F",
          "E7"
        ],
        "coda": [
          "F",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "reggae-dancehall",
      "worldId": "reggae",
      "name": "Dancehall",
      "origin": "Kingston, Jamaica",
      "era": "1980s–Present",
      "description": "Digital riddims and deejay toasting.",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "sub-bass",
        "synth",
        "horn-section"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        92,
        108
      ],
      "keySubstyles": [
        "Digital Dancehall (Sleng Teng)",
        "90s Dancehall",
        "Modern Dancehall"
      ],
      "coreConcepts": [
        "iconic digital Casio MT-40 \"Sleng Teng\" and \"Bam Bam\" riddims",
        "fast syncopated deejay toasting and vocal chants",
        "hard-hitting punchy electronic snare and kick programming",
        "sound clash energy and wheel-up rewinds"
      ],
      "rhythmicGrammar": [
        "syncopated 3+3+2 Dembow-precursor dancehall beat with aggressive offbeat rim hits"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Punchy Sleng Teng digital synth bassline driving under fast syncopated deejay vocal toasting",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "C",
          "Dm",
          "C"
        ],
        "riddim": [
          "Dm",
          "C",
          "Dm",
          "C",
          "Dm",
          "Bb",
          "C",
          "Dm"
        ],
        "coda": [
          "Bb",
          "C",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "reggae-lovers-rock",
      "worldId": "reggae",
      "name": "Lovers Rock",
      "origin": "London, UK / Jamaica",
      "era": "Late 1970s–1980s",
      "description": "Romantic • Smooth • Soul Harmonies\nSoulful",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "piano",
        "strings"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        72,
        86
      ],
      "keySubstyles": [
        "UK Lovers Rock",
        "Romantic Roots"
      ],
      "coreConcepts": [
        "sweet Philadelphia soul-style melodies and vocal harmonies",
        "gentle flowing one-drop reggae groove",
        "romantic lyrical intimacy",
        "lush Rhodes piano and string synthesizer chords"
      ],
      "rhythmicGrammar": [
        "gentle laid-back 4/4 one-drop with smooth bassline and sweet guitar chop"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Silky sweet vocal harmony floating over gentle one-drop reggae beat and melodic bass",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Cmaj7",
          "Am7",
          "Dm7",
          "G7"
        ],
        "verse": [
          "Cmaj7",
          "Am7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Am7",
          "Dm7",
          "G7"
        ],
        "chorus": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "G7",
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
        ],
        "coda": [
          "Fmaj7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ]
      }
    },
    {
      "id": "reggae-rocksteady",
      "worldId": "reggae",
      "name": "Rocksteady",
      "origin": "Kingston, Jamaica",
      "era": "1966–1968",
      "description": "Soulful • Prominent Bass • Slow",
      "characteristicInstruments": [
        "bass",
        "electric-guitar",
        "drums",
        "brass",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        76,
        92
      ],
      "keySubstyles": [
        "Classic Rocksteady",
        "Vocal Group Rocksteady"
      ],
      "coreConcepts": [
        "heavy melodic electric basslines taking center stage",
        "slower tempo than ska without the frantic horn lines",
        "three-part Motown-inspired vocal harmonies",
        "quiet guitar skank on offbeats"
      ],
      "rhythmicGrammar": [
        "relaxed 4/4 swing with snare rimshot on beat 3 and syncopated electric bass counterpoint"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Prominent melodic bassline hook carrying the groove under three-part soulful vocal harmonies",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "F",
          "Bb",
          "C",
          "F"
        ],
        "verse": [
          "F",
          "Bb",
          "C",
          "F",
          "Dm",
          "Gm",
          "C7",
          "F"
        ],
        "chorus": [
          "Bb",
          "C",
          "F",
          "Dm",
          "Bb",
          "C",
          "F",
          "F"
        ],
        "coda": [
          "Bb",
          "C",
          "F",
          "F"
        ]
      }
    },
    {
      "id": "reggae-ragga",
      "worldId": "reggae",
      "name": "Ragga",
      "origin": "Kingston, Jamaica",
      "era": "Late 1980s–1990s",
      "description": "Digital • Hardcore • Machine Beats\nRaggamuffin",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "sub-bass",
        "synth",
        "horn-section"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        96,
        112
      ],
      "keySubstyles": [
        "Raggamuffin",
        "Digital Ragga"
      ],
      "coreConcepts": [
        "fully computerized synth-drum grooves",
        "gravelly aggressive baritone vocal toasting",
        "syncopated digital horn stabs",
        "relentless dancefloor drive"
      ],
      "rhythmicGrammar": [
        "aggressive electronic kick and snare syncopations with galloping 16th-note digital percussion"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Gravelly baritone vocal shout cutting through aggressive digital ragga synth bass and drum loop",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "D",
          "Em",
          "D"
        ],
        "verse": [
          "Em",
          "D",
          "Em",
          "D",
          "C",
          "D",
          "Em",
          "Em"
        ],
        "chorus": [
          "C",
          "D",
          "Em",
          "Bm",
          "C",
          "D",
          "Em",
          "Em"
        ],
        "coda": [
          "C",
          "D",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "reggae-ska",
      "worldId": "reggae",
      "name": "Ska",
      "origin": "Kingston, Jamaica",
      "era": "Late 1950s–1960s",
      "description": "Fast • Walking Bass • Big",
      "characteristicInstruments": [
        "brass",
        "electric-guitar",
        "upright-bass",
        "drums",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        145
      ],
      "keySubstyles": [
        "Original Jamaican Ska",
        "2 Tone Ska"
      ],
      "coreConcepts": [
        "sharp guitar and piano chops strictly on upbeat eighth notes (\"skank\")",
        "fast driving walking bassline",
        "exuberant jazz-influenced brass horn section melodies",
        "high-energy skanking dance beat"
      ],
      "rhythmicGrammar": [
        "fast 4/4 with accented upbeat offbeat chops [and of 1, 2, 3, 4] and walking quarter bass"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Blistering brass section fanfare over high-speed offbeat guitar chop and walking bassline",
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
        "head": [
          "Bb",
          "Eb",
          "F",
          "Bb",
          "Bb",
          "Eb",
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
      "id": "reggae-calypso",
      "worldId": "reggae",
      "name": "Calypso",
      "origin": "Trinidad and Tobago",
      "era": "Early 20th Century–Present",
      "description": "Steelpan • Acoustic • Witty\nTrinidadian storytelling",
      "characteristicInstruments": [
        "steel-drums",
        "acoustic-guitar",
        "brass",
        "hand-percussion",
        "bass"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        100,
        126
      ],
      "keySubstyles": [
        "Traditional Calypso",
        "Steelband Calypso"
      ],
      "coreConcepts": [
        "sparkling steelpan melodic cascades",
        "satirical, witty, and clever rhyming social commentary",
        "breezy acoustic guitar syncopation",
        "bright Caribbean horn fanfares"
      ],
      "rhythmicGrammar": [
        "syncopated 2/4 calypso beat with heavy accents on beat 1 and the upbeat of beat 2"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sparkling steelpan melody roll answering witty vocal rhyming verse over Caribbean bounce",
      "grooveMechanics": {
        "swingPercentage": 52,
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
          "F",
          "G7",
          "C",
          "C",
          "F",
          "G7",
          "C"
        ],
        "chorus": [
          "F",
          "G7",
          "C",
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
    }
  ,
    {
    "id": "reggae-one-drop-roots",
    "worldId": "reggae",
    "name": "One-Drop Roots",
    "origin": "Jamaica",
    "era": "1970s–Present",
    "description": "Kick emphasis on beat three, sparse skank and melodic bass as the harmonic center.",
    "characteristicInstruments": [
        "bass",
        "drums",
        "electric-guitar",
        "organ",
        "voice"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        70,
        90
    ],
    "keySubstyles": [
        "One-Drop Roots"
    ],
    "coreConcepts": [
        "one-drop",
        "guitar skank",
        "melodic reggae bass"
    ],
    "rhythmicGrammar": [
        "One-drop pulse with melodic bass"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "One-drop pulse with melodic bass",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am",
        "G",
        "F",
        "G"
    ],
    "sectionProgressions": {
        "intro": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "verse": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "chorus": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "bridge": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "solo": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "coda": [
            "Am",
            "G",
            "F",
            "G"
        ]
    },
    "referenceArtists": [
        "Bob Marley",
        "The Abyssinians"
    ],
    "referenceTracks": [],
    "techniques": [
        "guitar skank",
        "one-drop",
        "reggae bassline"
    ]
},
{
    "id": "reggae-nyabinghi-rastafari-percussion",
    "worldId": "reggae",
    "name": "Nyabinghi / Rastafari Percussion",
    "origin": "Jamaica",
    "era": "20th century–Present",
    "description": "Hand drums and polyrhythmic ceremonial percussion forming a rhythmic ancestor to roots reggae.",
    "characteristicInstruments": [
        "hand-percussion",
        "bombo",
        "drums",
        "voice"
    ],
    "preferredMeters": [
        "4/4",
        "6/8"
    ],
    "tempoRange": [
        70,
        110
    ],
    "keySubstyles": [
        "Nyabinghi / Rastafari Percussion"
    ],
    "coreConcepts": [
        "nyabinghi drums",
        "polyrhythmic hand drums",
        "ceremonial pulse"
    ],
    "rhythmicGrammar": [
        "Polyrhythmic hand-drum cycle with space"
    ],
    "danceTags": [
        "spiritual"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Polyrhythmic hand-drum cycle with space",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am",
        "G",
        "F",
        "G"
    ],
    "sectionProgressions": {
        "intro": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "verse": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "chorus": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "bridge": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "solo": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "coda": [
            "Am",
            "G",
            "F",
            "G"
        ]
    },
    "referenceArtists": [
        "Count Ossie"
    ],
    "referenceTracks": [],
    "techniques": [
        "nyabinghi drums"
    ]
},
{
    "id": "reggae-digital-dancehall",
    "worldId": "reggae",
    "name": "Digital Dancehall",
    "origin": "Jamaica",
    "era": "1980s–Present",
    "description": "Programmed riddims, synthetic bass, minimal harmony and deejay/toasting performance.",
    "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "voice"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        90,
        115
    ],
    "keySubstyles": [
        "Digital Dancehall"
    ],
    "coreConcepts": [
        "digital riddim",
        "synthetic bass",
        "deejay toast"
    ],
    "rhythmicGrammar": [
        "Programmed riddim with synthetic bass"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Programmed riddim with synthetic bass",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am",
        "G",
        "F",
        "G"
    ],
    "sectionProgressions": {
        "intro": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "verse": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "chorus": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "bridge": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "solo": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "coda": [
            "Am",
            "G",
            "F",
            "G"
        ]
    },
    "referenceArtists": [
        "Wayne Smith"
    ],
    "referenceTracks": [
        "Under Mi Sleng Teng"
    ],
    "techniques": [
        "toast/vocal deejay",
        "riddim loop"
    ]
},
{
    "id": "reggae-dubwise-reggae",
    "worldId": "reggae",
    "name": "Dubwise Reggae",
    "origin": "Jamaica / Global",
    "era": "1970s–Present",
    "description": "Selective instrument removal and delay, reverb, filtering and bass manipulation as remix language.",
    "characteristicInstruments": [
        "bass",
        "drums",
        "organ",
        "dub-echo",
        "spring-reverb"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        65,
        90
    ],
    "keySubstyles": [
        "Dubwise Reggae"
    ],
    "coreConcepts": [
        "dub delay throw",
        "spring reverb",
        "filter drop",
        "instrumental dropout"
    ],
    "rhythmicGrammar": [
        "Sparse riddim with dub space"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Sparse riddim with dub space",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Am",
        "G",
        "F",
        "G"
    ],
    "sectionProgressions": {
        "intro": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "verse": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "chorus": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "bridge": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "solo": [
            "Am",
            "G",
            "F",
            "G"
        ],
        "coda": [
            "Am",
            "G",
            "F",
            "G"
        ]
    },
    "referenceArtists": [
        "King Tubby",
        "Lee Scratch Perry"
    ],
    "referenceTracks": [],
    "techniques": [
        "dub delay throw",
        "spring reverb",
        "one-drop",
        "reggae bassline",
        "riddim loop"
    ]
}],
  "patterns": [
    {
      "id": "reggae--rd-one-drop",
      "worldId": "reggae",
      "styleIds": [],
      "name": "One-Drop Foundation",
      "family": "Reggae Drums",
      "category": "groove",
      "description": "Kick and rimshot center the third",
      "tags": [
        "one-drop",
        "reggae",
        "drums"
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
      "approaches": [
        "groove"
      ],
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
        6,
        8,
        12,
        14
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
      "syncopationRating": 0.7,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "kick",
        "rimshot"
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
          "id": "reggae--rd-one-drop-v-sparse",
          "parentPatternId": "reggae--rd-one-drop",
          "name": "One-Drop Foundation — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
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
          "id": "reggae--rd-one-drop-v-shift",
          "parentPatternId": "reggae--rd-one-drop",
          "name": "One-Drop Foundation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
          "onsetGrid": [
            0,
            6,
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
        "one-drop",
        "reggae",
        "drums"
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
      "id": "reggae--rd-skank",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Offbeat Skank",
      "family": "Reggae Skank",
      "category": "ostinato",
      "description": "Short guitar or organ chord attacks land on the offbeats.",
      "tags": [
        "skank",
        "reggae",
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
        "electric-guitar",
        "organ"
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
        "staccato"
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
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "reggae--rd-skank-v-sparse",
          "parentPatternId": "reggae--rd-skank",
          "name": "Offbeat Skank — sparse",
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
          "id": "reggae--rd-skank-v-shift",
          "parentPatternId": "reggae--rd-skank",
          "name": "Offbeat Skank — accent shift",
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
        "skank",
        "reggae",
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
      "id": "reggae--rd-reggae-bass",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Melodic Reggae Bass",
      "family": "Reggae Bass",
      "category": "ostinato",
      "description": "Long, syncopated bass notes occupy the spaces between drum accents.",
      "tags": [
        "reggae",
        "bass",
        "melodic"
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
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
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
          "id": "reggae--rd-reggae-bass-v-sparse",
          "parentPatternId": "reggae--rd-reggae-bass",
          "name": "Melodic Reggae Bass — sparse",
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
          "id": "reggae--rd-reggae-bass-v-shift",
          "parentPatternId": "reggae--rd-reggae-bass",
          "name": "Melodic Reggae Bass — accent shift",
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
        "reggae",
        "bass",
        "melodic"
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
      "id": "reggae--rd-dub-drop",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Dub Dropout & Echo Fragment",
      "family": "Dub Space",
      "category": "break",
      "transitionType": "fill",
      "description": "Removes selected skank/drum attacks and leaves",
      "tags": [
        "dub",
        "dropout",
        "echo"
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
        "electric-guitar",
        "organ",
        "horn-section"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        8,
        14
      ],
      "accentProfile": [
        1,
        0.72,
        0.9
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86
      ],
      "syncopationRating": 0.65,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "delay"
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
        "breakdown",
        "bridge",
        "solo"
      ],
      "variants": [
        {
          "id": "reggae--rd-dub-drop-v-sparse",
          "parentPatternId": "reggae--rd-dub-drop",
          "name": "Dub Dropout & Echo Fragment — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
          "onsetGrid": [
            2,
            14
          ],
          "accentProfile": [
            0.9,
            0.65
          ]
        },
        {
          "id": "reggae--rd-dub-drop-v-shift",
          "parentPatternId": "reggae--rd-dub-drop",
          "name": "Dub Dropout & Echo Fragment — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
          "onsetGrid": [
            2,
            8,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "dub",
        "dropout",
        "echo"
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
      "id": "reggae--rd-steppers",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Steppers Foundation",
      "family": "Steppers Drums",
      "category": "groove",
      "description": "Four-to-the-floor kick with a deep bass",
      "tags": [
        "steppers",
        "sound-system"
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
      "syncopationRating": 0.1,
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
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "reggae--rd-steppers-v-sparse",
          "parentPatternId": "reggae--rd-steppers",
          "name": "Steppers Foundation — sparse",
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
          "id": "reggae--rd-steppers-v-shift",
          "parentPatternId": "reggae--rd-steppers",
          "name": "Steppers Foundation — accent shift",
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
        "steppers",
        "sound-system"
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
      "id": "reggae--rd-06-one-drop-core",
      "worldId": "reggae",
      "styleIds": [],
      "name": "One Drop Core",
      "family": "Roots Reggae",
      "category": "groove",
      "description": "Drum pattern leaves the first beat",
      "tags": [
        "one-drop"
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
        6,
        8,
        12
      ],
      "accentProfile": [
        0.45,
        0.8,
        0.7,
        0.9
      ],
      "syncopationRating": 0.25,
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
      "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "one-drop"
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
      "id": "reggae--rd-07-skank-guitar",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Skank Guitar",
      "family": "Roots Reggae",
      "category": "cell",
      "description": "Short, clipped guitar chords mark the offbeats.",
      "tags": [
        "skank"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "guitar"
      ],
      "approaches": [
        "chop"
      ],
      "instruments": [
        "electric-guitar",
        "guitar"
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
        0.72,
        0.68,
        0.7,
        0.75
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
      "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "skank"
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
      "id": "reggae--rd-08-reggae-bass-lead",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Reggae Bass Lead",
      "family": "Roots Reggae",
      "category": "bass",
      "description": "Longer, melodic bass line with rests;",
      "tags": [
        "bass-led"
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
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        6,
        9,
        14,
        16,
        22,
        25,
        30
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.75,
        0.55,
        0.88,
        0.62,
        0.72,
        0.58
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        4,
        5
      ],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bass-led"
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
      "id": "reggae--rd-09-bubble-organ",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Bubble Organ",
      "family": "Roots Reggae",
      "category": "cell",
      "description": "Short organ bubble fills the offbeat",
      "tags": [
        "organ bubble"
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
        "organ"
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
        0.5,
        0.62,
        0.48,
        0.66
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
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "organ bubble"
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
      "id": "reggae--rd-10-dub-echo-fragment",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Dub Echo Fragment",
      "family": "Dub",
      "category": "texture",
      "description": "Isolated snare/perc fragment sent into echo/reverb",
      "tags": [
        "dub",
        "echo",
        "send"
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
        "snare",
        "shaker"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        12
      ],
      "accentProfile": [
        0.7,
        0.55
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " echo"
      ],
      "supportedEnergy": [
        1,
        2
      ],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "bridge"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "dub",
        "echo",
        "send"
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
      "id": "reggae--rd-11-dub-dropout",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Dub subtraction / return",
      "family": "Dub",
      "category": "break",
      "transitionType": "fill",
      "description": "Bass/drum dropout with a final pickup",
      "tags": [
        "dropout",
        "version"
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
        "bass",
        "drums",
        "dub-echo"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        15
      ],
      "accentProfile": [
        0.9,
        0.65
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "dropout",
        " version"
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
      "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "dropout",
        "version"
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
      "id": "reggae--rd-12-steppers-kick-grid",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Steppers four-kick pulse",
      "family": "Digital Reggae",
      "category": "groove",
      "description": "Steppers kick architecture: four quarter-note kicks,",
      "tags": [
        "steppers"
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
        0.9,
        0.72,
        0.85,
        0.75
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
        "chorus",
        "solo"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Digital Reggae; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "steppers"
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
      "id": "reggae--rd-13-reggae-percussion-skitter",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Reggae shaker cross-rhythm",
      "family": "Percussion",
      "category": "ostinato",
      "description": "Sparse shaker placements that sit around",
      "tags": [
        "shaker",
        "ghost"
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
        "shaker",
        "maracas"
      ],
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
        0.32,
        0.42,
        0.35,
        0.45
      ],
      "syncopationRating": 1,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "shaker",
        " ghost"
      ],
      "supportedEnergy": [
        4,
        5
      ],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Percussion; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "shaker",
        "ghost"
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
      "id": "reggae--rd-14-dub-horn-reply",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Dub Horn Reply",
      "family": "Dub / Roots",
      "category": "interactionPattern",
      "description": "Short horn stab answers a vocal",
      "tags": [
        "horn reply"
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
      "approaches": [
        "phrase"
      ],
      "instruments": [
        "trumpet",
        "trombone"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        8,
        12,
        24,
        28
      ],
      "accentProfile": [
        0.65,
        0.8,
        0.6,
        0.78
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
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "bridge"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Dub / Roots; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "horn reply"
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
      "id": "reggae--rd-15-dub-version-tag",
      "worldId": "reggae",
      "styleIds": [],
      "name": "Dub Version Tag",
      "family": "Dub",
      "category": "cadence",
      "transitionType": "fill",
      "description": "A short bass-and-drum tag announces the transition into the next section.",
      "tags": [
        "version",
        "tag"
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "bass",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        8,
        12,
        15
      ],
      "accentProfile": [
        0.65,
        0.78,
        1
      ],
      "syncopationRating": 0.33,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        " tag"
      ],
      "supportedEnergy": [
        1,
        2
      ],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "bridge",
        "ending"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "version",
        "tag"
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
      "id": "reggae--reggae-one-drop",
      "worldId": "reggae",
      "name": "Reggae One-Drop",
      "shortName": "Reggae One-Drop",
      "family": "reggae",
      "category": "groove",
      "description": "The classic one-drop pulse with the downbeat de-emphasized and backbeat centered.",
      "tags": [
        "one-drop",
        "reggae",
        "backbeat"
      ],
      "approaches": [
        "one-drop",
        "reggae",
        "backbeat"
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
        4,
        12
      ],
      "accentProfile": [
        1,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "one-drop",
        "reggae",
        "backbeat"
      ]
    },
    {
      "id": "reggae--reggae-skank",
      "worldId": "reggae",
      "name": "Reggae Skank",
      "shortName": "Reggae Skank",
      "family": "reggae",
      "category": "groove",
      "description": "Tight offbeat guitar/keyboard chops that answer the bass rather than doubling it.",
      "tags": [
        "skank",
        "offbeat",
        "reggae"
      ],
      "approaches": [
        "skank",
        "offbeat",
        "reggae"
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
        "skank",
        "offbeat",
        "reggae"
      ]
    },
    {
      "id": "reggae--reggae-melodic-bass",
      "worldId": "reggae",
      "name": "Melodic Reggae Bass",
      "shortName": "Melodic Reggae Bass",
      "family": "reggae",
      "category": "groove",
      "description": "Root/5th/6th movement with anticipations that carry the harmony through sparse drums.",
      "tags": [
        "reggae-bass",
        "melodic",
        "anticipation"
      ],
      "approaches": [
        "reggae-bass",
        "melodic",
        "anticipation"
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
        "reggae-bass",
        "melodic",
        "anticipation"
      ]
    },
    {
      "id": "reggae--reggae-steppers",
      "worldId": "reggae",
      "name": "Reggae Steppers",
      "shortName": "Reggae Steppers",
      "family": "reggae",
      "category": "groove",
      "description": "Four-kick foundation used as a deliberate alternate dialect rather than default rock backbeat.",
      "tags": [
        "steppers",
        "reggae",
        "four-kick"
      ],
      "approaches": [
        "steppers",
        "reggae",
        "four-kick"
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
        "steppers",
        "reggae",
        "four-kick"
      ]
    }
  ,
  {
  "id": "tech-reggae-one-drop",
  "worldId": "reggae",
  "styleIds": [
    "reggae-one-drop-roots",
    "reggae-dubwise-reggae"
  ],
  "name": "one-drop",
  "shortName": "one-drop",
  "family": "reggae",
  "category": "groove",
  "description": "Technique: one-drop",
  "tags": [
    "reggae",
    "one-drop"
  ],
  "approaches": [
    "one-drop"
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
    4,
    12
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
    "reggae",
    "one-drop"
  ],
  "techniques": [
    "one-drop"
  ]
},
{
  "id": "tech-reggae-rockers-beat",
  "worldId": "reggae",
  "styleIds": [],
  "name": "rockers beat",
  "shortName": "rockers beat",
  "family": "reggae",
  "category": "groove",
  "description": "Technique: rockers beat",
  "tags": [
    "reggae",
    "rockers beat"
  ],
  "approaches": [
    "rockers beat"
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
    "reggae",
    "rockers beat"
  ],
  "techniques": [
    "rockers beat"
  ]
},
{
  "id": "tech-reggae-steppers",
  "worldId": "reggae",
  "styleIds": [],
  "name": "steppers",
  "shortName": "steppers",
  "family": "reggae",
  "category": "groove",
  "description": "Technique: steppers",
  "tags": [
    "reggae",
    "steppers"
  ],
  "approaches": [
    "steppers"
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
    "reggae",
    "steppers"
  ],
  "techniques": [
    "steppers"
  ]
},
{
  "id": "tech-reggae-guitar-skank",
  "worldId": "reggae",
  "styleIds": [
    "reggae-one-drop-roots"
  ],
  "name": "guitar skank",
  "shortName": "guitar skank",
  "family": "reggae",
  "category": "comping",
  "description": "Technique: guitar skank",
  "tags": [
    "reggae",
    "guitar skank"
  ],
  "approaches": [
    "guitar skank"
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
    "reggae",
    "guitar skank"
  ],
  "techniques": [
    "guitar skank"
  ]
},
{
  "id": "tech-reggae-organ-bubble",
  "worldId": "reggae",
  "styleIds": [],
  "name": "organ bubble",
  "shortName": "organ bubble",
  "family": "reggae",
  "category": "comping",
  "description": "Technique: organ bubble",
  "tags": [
    "reggae",
    "organ bubble"
  ],
  "approaches": [
    "organ bubble"
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
    "reggae",
    "organ bubble"
  ],
  "techniques": [
    "organ bubble"
  ]
},
{
  "id": "tech-reggae-reggae-bassline",
  "worldId": "reggae",
  "styleIds": [
    "reggae-one-drop-roots",
    "reggae-dubwise-reggae"
  ],
  "name": "reggae bassline",
  "shortName": "reggae bassline",
  "family": "reggae",
  "category": "bass",
  "description": "Technique: reggae bassline",
  "tags": [
    "reggae",
    "reggae bassline"
  ],
  "approaches": [
    "reggae bassline"
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
    "reggae",
    "reggae bassline"
  ],
  "techniques": [
    "reggae bassline"
  ]
},
{
  "id": "tech-reggae-dub-delay-throw",
  "worldId": "reggae",
  "styleIds": [
    "reggae-dubwise-reggae"
  ],
  "name": "dub delay throw",
  "shortName": "dub delay throw",
  "family": "reggae",
  "category": "texture",
  "description": "Technique: dub delay throw",
  "tags": [
    "reggae",
    "dub delay throw"
  ],
  "approaches": [
    "dub delay throw"
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
    "reggae",
    "dub delay throw"
  ],
  "techniques": [
    "dub delay throw"
  ]
},
{
  "id": "tech-reggae-spring-reverb",
  "worldId": "reggae",
  "styleIds": [
    "reggae-dubwise-reggae"
  ],
  "name": "spring reverb",
  "shortName": "spring reverb",
  "family": "reggae",
  "category": "texture",
  "description": "Technique: spring reverb",
  "tags": [
    "reggae",
    "spring reverb"
  ],
  "approaches": [
    "spring reverb"
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
    "reggae",
    "spring reverb"
  ],
  "techniques": [
    "spring reverb"
  ]
},
{
  "id": "tech-reggae-riddim-loop",
  "worldId": "reggae",
  "styleIds": [
    "reggae-digital-dancehall",
    "reggae-dubwise-reggae"
  ],
  "name": "riddim loop",
  "shortName": "riddim loop",
  "family": "reggae",
  "category": "groove",
  "description": "Technique: riddim loop",
  "tags": [
    "reggae",
    "riddim loop"
  ],
  "approaches": [
    "riddim loop"
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
    "reggae",
    "riddim loop"
  ],
  "techniques": [
    "riddim loop"
  ]
},
{
  "id": "tech-reggae-toast-vocal-deejay",
  "worldId": "reggae",
  "styleIds": [
    "reggae-digital-dancehall"
  ],
  "name": "toast/vocal deejay",
  "shortName": "toast/vocal deejay",
  "family": "reggae",
  "category": "lead",
  "description": "Technique: toast/vocal deejay",
  "tags": [
    "reggae",
    "toast/vocal deejay"
  ],
  "approaches": [
    "toast/vocal deejay"
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
    "reggae",
    "toast/vocal deejay"
  ],
  "techniques": [
    "toast/vocal deejay"
  ]
},
{
  "id": "style-reggae-one-drop-roots-signature",
  "worldId": "reggae",
  "styleIds": [
    "reggae-one-drop-roots"
  ],
  "name": "One-Drop Roots Signature Cell",
  "shortName": "One-Drop Roots Cell",
  "family": "reggae",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "reggae",
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
    "drums",
    "electric-guitar",
    "organ"
  ],
  "meter": "4/4",
  "cycleLength": 1,
  "subdivisions": 16,
  "onsetGrid": [
    4,
    12
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
    "reggae",
    "signature"
  ],
  "techniques": [
    "guitar skank",
    "one-drop",
    "reggae bassline"
  ]
},
{
  "id": "style-reggae-nyabinghi-rastafari-percussion-signature",
  "worldId": "reggae",
  "styleIds": [
    "reggae-nyabinghi-rastafari-percussion"
  ],
  "name": "Nyabinghi / Rastafari Percussion Signature Cell",
  "shortName": "Nyabinghi / Rastafari Percussion Cell",
  "family": "reggae",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "reggae",
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
    "hand-percussion",
    "bombo",
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
    "reggae",
    "signature"
  ],
  "techniques": [
    "nyabinghi drums"
  ]
},
{
  "id": "style-reggae-digital-dancehall-signature",
  "worldId": "reggae",
  "styleIds": [
    "reggae-digital-dancehall"
  ],
  "name": "Digital Dancehall Signature Cell",
  "shortName": "Digital Dancehall Cell",
  "family": "reggae",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "reggae",
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
    "sub-bass",
    "synth",
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
    "reggae",
    "signature"
  ],
  "techniques": [
    "toast/vocal deejay",
    "riddim loop"
  ]
},
{
  "id": "style-reggae-dubwise-reggae-signature",
  "worldId": "reggae",
  "styleIds": [
    "reggae-dubwise-reggae"
  ],
  "name": "Dubwise Reggae Signature Cell",
  "shortName": "Dubwise Reggae Cell",
  "family": "reggae",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "reggae",
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
    "drums",
    "organ",
    "dub-echo"
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
    "reggae",
    "signature"
  ],
  "techniques": [
    "dub delay throw",
    "spring reverb",
    "one-drop",
    "reggae bassline",
    "riddim loop"
  ]
}],
  "kind": "family",
  "strictness": "strict"
};
