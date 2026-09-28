import type { GenreWorld } from '../../types';

export const REGGAE_DUB_WORLD: GenreWorld = {
  "id": "reggae-dub",
  "name": "Reggae / Dub",
  "family": "Jamaican / sound-system",
  "color": "#4f8f6f",
  "level": "world",
  "description": "Reggae and dub are represented as",
  "styleDefinitions": [
    {
      "id": "reggae-dub-roots-reggae",
      "worldId": "reggae-dub",
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
      "id": "reggae-dub-dub",
      "worldId": "reggae-dub",
      "name": "Dub",
      "origin": "Kingston, Jamaica",
      "era": "1970s",
      "description": "Space Echo • Bass Drops •",
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
      "id": "reggae-dub-dancehall",
      "worldId": "reggae-dub",
      "name": "Dancehall",
      "origin": "Kingston, Jamaica",
      "era": "1980s–Present",
      "description": "Digital Riddim • Deejay Toasting •",
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
      "id": "reggae-dub-lovers-rock",
      "worldId": "reggae-dub",
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
      "id": "reggae-dub-rocksteady",
      "worldId": "reggae-dub",
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
      "id": "reggae-dub-ragga",
      "worldId": "reggae-dub",
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
      "id": "reggae-dub-ska",
      "worldId": "reggae-dub",
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
      "id": "reggae-dub-calypso",
      "worldId": "reggae-dub",
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
  ],
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
  "patterns": [
    {
      "id": "rd-one-drop",
      "worldId": "reggae-dub",
      "styleIds": ["reggae-roots"],
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

      "approaches": ["groove"],
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
          "id": "rd-one-drop-v-sparse",
          "parentPatternId": "rd-one-drop",
          "name": "One-Drop Foundation — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a",
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
          "id": "rd-one-drop-v-shift",
          "parentPatternId": "rd-one-drop",
          "name": "One-Drop Foundation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis",
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
      "id": "rd-skank",
      "worldId": "reggae-dub",
      "styleIds": ["reggae-roots"],
      "name": "Offbeat Skank",
      "family": "Reggae Skank",
      "category": "ostinato",
      "description": "Short guitar/organ chord attacks on the",
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

      "approaches": ["comping"],
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
      "supportedEnergy": [1, 2],
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
          "id": "rd-skank-v-sparse",
          "parentPatternId": "rd-skank",
          "name": "Offbeat Skank — sparse",
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
          "id": "rd-skank-v-shift",
          "parentPatternId": "rd-skank",
          "name": "Offbeat Skank — accent shift",
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
      "id": "rd-reggae-bass",
      "worldId": "reggae-dub",
      "styleIds": ["reggae-roots"],
      "name": "Melodic Reggae Bass",
      "family": "Reggae Bass",
      "category": "ostinato",
      "description": "Long, syncopated bass notes occupy the",
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

      "approaches": ["walking"],
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
          "id": "rd-reggae-bass-v-sparse",
          "parentPatternId": "rd-reggae-bass",
          "name": "Melodic Reggae Bass — sparse",
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
          "id": "rd-reggae-bass-v-shift",
          "parentPatternId": "rd-reggae-bass",
          "name": "Melodic Reggae Bass — accent shift",
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
      "id": "rd-dub-drop",
      "worldId": "reggae-dub",
      "styleIds": ["reggae-dub"],
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

      "approaches": ["groove"],
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
      "supportedEnergy": [1, 2],
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
          "id": "rd-dub-drop-v-sparse",
          "parentPatternId": "rd-dub-drop",
          "name": "Dub Dropout & Echo Fragment — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a",
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
          "id": "rd-dub-drop-v-shift",
          "parentPatternId": "rd-dub-drop",
          "name": "Dub Dropout & Echo Fragment — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis",
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
      "id": "rd-steppers",
      "worldId": "reggae-dub",
      "styleIds": ["reggae-steppers"],
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

      "approaches": ["groove"],
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
          "id": "rd-steppers-v-sparse",
          "parentPatternId": "rd-steppers",
          "name": "Steppers Foundation — sparse",
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
          "id": "rd-steppers-v-shift",
          "parentPatternId": "rd-steppers",
          "name": "Steppers Foundation — accent shift",
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
      "id": "rd-06-one-drop-core",
      "worldId": "reggae-dub",
      "styleIds": ["reggae-roots"],
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

      "approaches": ["groove"],
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
      "id": "rd-07-skank-guitar",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
      "name": "Skank Guitar",
      "family": "Roots Reggae",
      "category": "cell",
      "description": "Short clipped guitar chord on the",
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

      "approaches": ["chop"],
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
      "id": "rd-08-reggae-bass-lead",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["walking"],
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
      "articulations": ["accent"],
      "supportedEnergy": [4, 5],
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
      "id": "rd-09-bubble-organ",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["comping"],
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
      "articulations": ["accent"],
      "supportedEnergy": [2, 3, 4],
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
      "id": "rd-10-dub-echo-fragment",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["groove"],
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
      "articulations": [" echo"],
      "supportedEnergy": [1, 2],
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
      "id": "rd-11-dub-dropout",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["groove"],
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
      "supportedEnergy": [1, 2],
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
      "id": "rd-12-steppers-kick-grid",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["groove"],
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
      "articulations": ["accent"],
      "supportedEnergy": [2, 3, 4],
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
      "id": "rd-13-reggae-percussion-skitter",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["groove"],
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
      "supportedEnergy": [4, 5],
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
      "id": "rd-14-dub-horn-reply",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
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

      "approaches": ["phrase"],
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
      "articulations": ["accent"],
      "supportedEnergy": [2, 3, 4],
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
      "id": "rd-15-dub-version-tag",
      "worldId": "reggae-dub",
      "styleIds": ["dub"],
      "name": "Dub Version Tag",
      "family": "Dub",
      "category": "cadence",
      "transitionType": "fill",
      "description": "A short bass-and-drum tag announces a",
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

      "approaches": ["groove"],
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
      "articulations": [" tag"],
      "supportedEnergy": [1, 2],
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
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "One-drop/steppers drum skeleton with offbeat skank and bass-led space",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back",
    "humanizeJitterMs": 8
  },
  "crossLinks": [
    "Reggae ↔ Ska",
    "Dub ↔ House/Techno"
  ],
};
