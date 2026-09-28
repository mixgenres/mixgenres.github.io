import type { GenreWorld } from '../../types';

export const CUMBIA_WORLD: GenreWorld = {
  "id": "cumbia",
  "name": "Cumbia",
  "family": "Colombian / Latin American",
  "color": "#3f9b62",
  "level": "world",
  "description": "Cumbia is treated as a family",
  "styleDefinitions": [
    {
      "id": "cumbia-colombiana",
      "worldId": "cumbia",
      "name": "Cumbia Colombiana",
      "origin": "Caribbean Coast, Colombia",
      "era": "1940s–Present",
      "description": "Classic • 2/4 • Guache Shaker\nTraditional",
      "characteristicInstruments": [
        "accordion",
        "drums",
        "hand-percussion",
        "bass",
        "flute"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        88,
        106
      ],
      "keySubstyles": [
        "Cumbia Tradicional",
        "Gaita Cumbia",
        "Orchestral Cumbia"
      ],
      "coreConcepts": [
        "tambor alegre improvisation",
        "llamador steady upbeat pulse",
        "guache/maraca shaker roll",
        "gaita flute / accordion call and response"
      ],
      "rhythmicGrammar": [
        "llamador striking exclusively on beat 2 with alegre playing syncopated repiques"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Guache shaker gallop [16th-two 32nds] over llamador offbeat strike",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "verse": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "Dm",
          "E7",
          "Am",
          "Am"
        ],
        "chorus": [
          "C",
          "G",
          "E7",
          "Am",
          "C",
          "G",
          "E7",
          "Am"
        ],
        "coda": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "cumbia-villera",
      "worldId": "cumbia",
      "name": "Villera",
      "origin": "Buenos Aires, Argentina (Villas Miseria)",
      "era": "Late 1990s–Present",
      "description": "Gritty • Synthesizer • Keytar\nRaw Argentine",
      "characteristicInstruments": [
        "synth",
        "drums",
        "bass",
        "guiro",
        "sampler"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        92,
        108
      ],
      "keySubstyles": [
        "Cumbia Villera",
        "Cumbia Cabeza"
      ],
      "coreConcepts": [
        "staccato keytar lead riffs with high pitch-bend",
        "electronic drum pads (Roland Octapad)",
        "metal güiro heavy rasp",
        "socially conscious barrio slang lyrics"
      ],
      "rhythmicGrammar": [
        "snappy electro güiro scrape with punchy electronic kick and sub-bass pulse"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Snappy electronic keytar melody over relentless metal guiro rasp",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "G",
          "Am"
        ],
        "verse": [
          "Am",
          "F",
          "G",
          "Am",
          "Am",
          "F",
          "G",
          "Am"
        ],
        "chorus": [
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
    },
    {
      "id": "cumbia-chicha",
      "worldId": "cumbia",
      "name": "Chicha",
      "origin": "Lima / Peruvian Amazon",
      "era": "1970s–1980s",
      "description": "Psychedelic • Pentatonic • Surf Guitar\nAndean",
      "characteristicInstruments": [
        "electric-guitar",
        "synth",
        "bass",
        "timbales",
        "guiro"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        96,
        114
      ],
      "keySubstyles": [
        "Cumbia Amazónica",
        "Cumbia Andina",
        "Psychedelic Cumbia"
      ],
      "coreConcepts": [
        "fuzz/wah-wah psychedelic surf guitar leads",
        "Andean huayno pentatonic melodies",
        "driving timbale cascara rhythm",
        "Farfisa organ pads"
      ],
      "rhythmicGrammar": [
        "energetic 2/4 cumbia groove with bright timbale rim clicks and syncopated cowbell"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Psychedelic wah-wah guitar playing Andean pentatonic melody over crisp timbale cascara",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "D",
          "C",
          "B7"
        ],
        "verse": [
          "Em",
          "G",
          "D",
          "Em",
          "G",
          "D",
          "C",
          "B7"
        ],
        "chorus": [
          "G",
          "D",
          "Em",
          "B7",
          "G",
          "D",
          "C",
          "B7"
        ],
        "coda": [
          "C",
          "B7",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "cumbia-sonora",
      "worldId": "cumbia",
      "name": "Sonora",
      "origin": "Mexico / Cuba / Colombia",
      "era": "1950s–1970s",
      "description": "Big Band • Trumpets • Polished\nBig",
      "characteristicInstruments": [
        "trumpet",
        "brass",
        "piano",
        "bass",
        "timbales"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        94,
        112
      ],
      "keySubstyles": [
        "Sonora Style",
        "Big Band Cumbia"
      ],
      "coreConcepts": [
        "blazing dual trumpet section melodies",
        "piano montuno-cumbia hybrid comps",
        "tight conga and timbale rhythm section",
        "charismatic lead vocal duets"
      ],
      "rhythmicGrammar": [
        "solid 2/4 cumbia pulse with Cuban son-influenced conga and bongo accents"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Bright dual-trumpet fanfare answering rhythmic piano montuno cumbia comp",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
          "C",
          "G7",
          "C",
          "F",
          "C",
          "G7",
          "C"
        ],
        "coda": [
          "G7",
          "G7",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "cumbia-rebajada",
      "worldId": "cumbia",
      "name": "Rebajada",
      "origin": "Monterrey, Mexico (Sonidero Culture)",
      "era": "Late 1970s–Present",
      "description": "Slowed-down • Deep • Hypnotic\nPitch-shifted pitched",
      "characteristicInstruments": [
        "accordion",
        "bass",
        "guiro",
        "drums",
        "synth"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        68,
        84
      ],
      "keySubstyles": [
        "Sonidero Rebajado",
        "Slowed Cumbia"
      ],
      "coreConcepts": [
        "drastically slowed turntable/tape playback",
        "deep dragged bass resonance",
        "prolonged cavernous accordion reeds",
        "sonidero microphone greetings over the music"
      ],
      "rhythmicGrammar": [
        "dragged lazy 2/4 groove emphasizing heavy low-end thud and hypnotic güiro scrape"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Deep pitched-down accordion drag over slow hypnotic low-frequency güiro groove",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "verse": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "chorus": [
          "Dm",
          "G",
          "C",
          "Am",
          "Dm",
          "E7",
          "Am",
          "Am"
        ],
        "coda": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "cumbia-digitale",
      "worldId": "cumbia",
      "name": "Digitale",
      "origin": "Buenos Aires / Mexico City / Global",
      "era": "2008–Present",
      "description": "Electronic • Bass • Crossover\nFolktronica meets",
      "characteristicInstruments": [
        "synth",
        "sampler",
        "sub-bass",
        "guiro",
        "flute"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        86,
        104
      ],
      "keySubstyles": [
        "Digital Cumbia",
        "Cumbia Electrónica",
        "Andean Bass"
      ],
      "coreConcepts": [
        "deep 808 sub-bass kicks",
        "indigenous gaita flute samples warped through delay",
        "electronic synthesizer arpeggiations",
        "global club bass aesthetics"
      ],
      "rhythmicGrammar": [
        "modern electronic 4-beat or 2-beat grid layered with organic shuffled shakers"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Warped digital synth-flute hook dropping over massive 808 sub-bass and shaker",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Am",
          "Bb",
          "C"
        ],
        "verse": [
          "Dm",
          "Am",
          "Bb",
          "C",
          "Dm",
          "Am",
          "Bb",
          "C"
        ],
        "drop": [
          "Dm",
          "Dm",
          "Bb",
          "C",
          "Dm",
          "Dm",
          "Bb",
          "C"
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
      "id": "cumbia-santafesina",
      "worldId": "cumbia",
      "name": "Santafesina",
      "origin": "Santa Fe, Argentina",
      "era": "1970s–Present",
      "description": "Romantic • Guitar-led • Melodic\nAcoustic guitar",
      "characteristicInstruments": [
        "accordion",
        "acoustic-guitar",
        "bass",
        "timbales",
        "guiro"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        94,
        110
      ],
      "keySubstyles": [
        "Cumbia con Guitarra",
        "Cumbia con Acordeón"
      ],
      "coreConcepts": [
        "melodic nylon/electric guitar arpeggiations",
        "warm diatonic accordion leads",
        "romantic emotive vocal serenades",
        "smooth danceable rhythm"
      ],
      "rhythmicGrammar": [
        "smooth 2/4 rhythm with crisp güiro and melodic walking basslines"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Singing guitar arpeggio dueting with sweet romantic accordion fills",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "D",
          "Em",
          "C"
        ],
        "verse": [
          "G",
          "D",
          "Em",
          "C",
          "G",
          "D",
          "Em",
          "C"
        ],
        "chorus": [
          "C",
          "D",
          "G",
          "Em",
          "C",
          "D",
          "G",
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
      "id": "cumbia-porro",
      "worldId": "cumbia",
      "name": "Porro",
      "origin": "Sucre / Córdoba, Colombia",
      "era": "Traditional / 20th Century",
      "description": "Brass Band • Festive • Syncopated\nPelayero",
      "characteristicInstruments": [
        "brass",
        "trumpet",
        "clarinet",
        "drums",
        "hand-percussion"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        98,
        120
      ],
      "keySubstyles": [
        "Porro Pelayero",
        "Porro Palitiao",
        "Porro Tapao"
      ],
      "coreConcepts": [
        "explosive brass band fanfares",
        "dramatic bombo drum breaks (paliteo)",
        "syncopated clarinet improvisations",
        "festive carnival energy"
      ],
      "rhythmicGrammar": [
        "distinctive paliteo rim-clicks on the shell of the bombo leading into full-band brass blasts"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Clattering bombo wood-rim paliteo erupting into joyous brass fanfare",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "F",
          "C7",
          "F",
          "C7"
        ],
        "verse": [
          "F",
          "Bb",
          "C7",
          "F",
          "Bb",
          "C7",
          "F",
          "F"
        ],
        "boza": [
          "C7",
          "C7",
          "F",
          "F",
          "C7",
          "C7",
          "F",
          "F"
        ],
        "coda": [
          "Bb",
          "C7",
          "F",
          "F"
        ]
      }
    }
  ],
  "substyles": [
    "Cumbia Colombiana",
    "Villera",
    "Chicha",
    "Sonora",
    "Rebajada",
    "Digitale",
    "Santafesina",
    "Porro"
  ],
  "artists": [
    "Lucho Bermúdez",
    "Los Gaiteros de San Jacinto",
    "Damas Gratis",
    "Pibes Chorros",
    "Los Mirlos",
    "Chacalón",
    "Sonora Dinamita",
    "Sonora Santanera",
    "Sonido Dueñez",
    "Celso Piña",
    "ZZK Records",
    "Nicola Cruz",
    "Los Palmeras",
    "Leo Mattioli",
    "Banda 19 de Enero",
    "Totó La Momposina"
  ],
  "concepts": [
    "cumbia pulse",
    "tambora",
    "alegre",
    "guacharaca",
    "gaita",
    "chicha tremolo"
  ],
  "roles": {
    "bass": [
      "cumbia root/fifth pulse"
    ],
    "percussion": [
      "tambora / alegre",
      "guacharaca"
    ],
    "melody": [
      "gaita or tremolo guitar"
    ],
    "harmony": [
      "keyboard hooks"
    ]
  },
  "patterns": [
    {
      "id": "cu-cumbia-bass",
      "worldId": "cumbia",
      "styleIds": ["cumbia-colombian"],
      "name": "Cumbia bass anticipation",
      "family": "Cumbia Bass",
      "category": "ostinato",
      "description": "Short-long bass anticipation that leaves the",
      "tags": [
        "cumbia",
        "bass",
        "pulse"
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
        "acoustic-bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        7,
        8,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.65,
        1,
        0.72
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.92,
        0.62
      ],
      "syncopationRating": 0.45,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "short"
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
          "id": "cu-cumbia-bass-v-sparse",
          "parentPatternId": "cu-cumbia-bass",
          "name": "Cumbia Bass Pulse — sparse",
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
          "id": "cu-cumbia-bass-v-shift",
          "parentPatternId": "cu-cumbia-bass",
          "name": "Cumbia Bass Pulse — accent shift",
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
        "cumbia",
        "bass",
        "pulse"
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
      "id": "cu-cumbia-drum",
      "worldId": "cumbia",
      "styleIds": ["cumbia-colombian"],
      "name": "Tambora / alegre conversation",
      "family": "Cumbia Drums",
      "category": "groove",
      "description": "Abstracted low/high hand-drum conversation for a",
      "tags": [
        "cumbia",
        "tambora",
        "alegre"
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
        "cumbia-drum"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        5,
        8,
        10,
        13
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
        "hand-drum"
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
          "id": "cu-cumbia-drum-v-sparse",
          "parentPatternId": "cu-cumbia-drum",
          "name": "Tambora / Alegre Interlock — sparse",
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
          "id": "cu-cumbia-drum-v-shift",
          "parentPatternId": "cu-cumbia-drum",
          "name": "Tambora / Alegre Interlock — accent shift",
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
        "cumbia",
        "tambora",
        "alegre"
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
      "id": "cu-guacharaca",
      "worldId": "cumbia",
      "styleIds": ["cumbia-colombian"],
      "name": "Guacharaca scraper pulse",
      "family": "Cumbia Scrapers",
      "category": "ostinato",
      "description": "Continuous scraper motion with accented downstrokes;",
      "tags": [
        "guacharaca",
        "scraper",
        "cumbia"
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
        "guacharaca"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        3,
        4,
        6,
        7,
        9,
        10,
        12,
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
        0.62,
        1,
        0.72,
        0.9
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.84,
        0.64,
        0.78,
        0.58,
        0.92,
        0.62,
        0.86
      ],
      "syncopationRating": 0.55,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "scrape"
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
          "id": "cu-guacharaca-v-sparse",
          "parentPatternId": "cu-guacharaca",
          "name": "Guacharaca Scrape — sparse",
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
          "id": "cu-guacharaca-v-shift",
          "parentPatternId": "cu-guacharaca",
          "name": "Guacharaca Scrape — accent shift",
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
        "guacharaca",
        "scraper",
        "cumbia"
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
      "id": "cu-chicha-guitar",
      "worldId": "cumbia",
      "styleIds": ["cumbia-chicha"],
      "name": "Chicha Tremolo Guitar",
      "family": "Chicha Guitar",
      "category": "ostinato",
      "description": "Fast tremolo-picked pentatonic melody that sits",
      "tags": [
        "chicha",
        "tremolo",
        "andino"
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

      "approaches": ["phrase"],
      "instruments": [
        "electric-guitar",
        "guitar"
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
        "tremolo"
      ],
      "supportedEnergy": [4, 5],
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
          "id": "cu-chicha-guitar-v-sparse",
          "parentPatternId": "cu-chicha-guitar",
          "name": "Chicha Tremolo Guitar — sparse",
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
          "id": "cu-chicha-guitar-v-shift",
          "parentPatternId": "cu-chicha-guitar",
          "name": "Chicha Tremolo Guitar — accent shift",
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
        "chicha",
        "tremolo",
        "andino"
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
      "id": "cu-keyboard-hook",
      "worldId": "cumbia",
      "styleIds": ["cumbia-villera"],
      "name": "Keyboard Hook",
      "family": "Cumbia Hooks",
      "category": "rolePattern",
      "description": "Short repeating keyboard hook placed between",
      "tags": [
        "cumbia",
        "hook",
        "keyboard"
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
        "polysynth",
        "organ"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        10,
        12
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
      "syncopationRating": 0.68,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "staccato"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "verse"
      ],



      "variants": [
        {
          "id": "cu-keyboard-hook-v-sparse",
          "parentPatternId": "cu-keyboard-hook",
          "name": "Keyboard Hook — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a",
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "cu-keyboard-hook-v-shift",
          "parentPatternId": "cu-keyboard-hook",
          "name": "Keyboard Hook — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis",
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12
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
        "cumbia",
        "hook",
        "keyboard"
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
      "id": "cu-06-cumbia-bass-tumbao",
      "worldId": "cumbia",
      "styleIds": ["cumbia-colombian"],
      "name": "Cumbia tumbao bass",
      "family": "Colombian Cumbia",
      "category": "bass",
      "description": "A syncopated tumbao-like bass cycle used",
      "tags": [
        "tumbao",
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
        0.9,
        0.55,
        0.75,
        0.7,
        0.6,
        0.82
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "tumbao",
        " bass"
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
      "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "tumbao",
        "bass"
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
      "id": "cu-07-tambor-alegre-reply",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Tambor Alegre Reply",
      "family": "Colombian Cumbia",
      "category": "groove",
      "description": "Hand-drum answer pattern that sits around",
      "tags": [
        "tambor",
        "call-response"
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
        "cumbia-drum"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        5,
        8,
        13,
        16,
        21,
        24,
        29
      ],
      "accentProfile": [
        0.9,
        0.55,
        0.78,
        0.62,
        0.85,
        0.5,
        0.8,
        0.65
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "tambor",
        " call-response"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "tambor",
        "call-response"
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
      "id": "cu-08-guacharaca-scrape",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Guacharaca reverse accent cycle",
      "family": "Colombian Cumbia",
      "category": "ostinato",
      "description": "A denser guacharaca variant with displaced",
      "tags": [
        "guacharaca",
        "scrape"
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
        "guacharaca"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        7,
        9,
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        0.55,
        0.65,
        0.5,
        0.68,
        0.56,
        0.66,
        0.52,
        0.72,
        0.55,
        0.65
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "guacharaca",
        " scrape"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "guacharaca",
        "scrape"
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
      "id": "cu-09-cumbia-guitar-offbeat",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Cumbia guitar anticipations",
      "family": "Cumbia Guitar",
      "category": "cell",
      "description": "Short anticipated guitar attacks that sit",
      "tags": [
        "offbeat guitar",
        "cumbia"
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
        1,
        5,
        9,
        13
      ],
      "accentProfile": [
        0.62,
        0.7,
        0.58,
        0.78
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "offbeat guitar",
        " cumbia"
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
      "provenance": "Authored genre-pack pattern based on Cumbia Guitar; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "offbeat guitar",
        "cumbia"
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
      "id": "cu-10-chicha-tremolo-figure",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Chicha Tremolo Figure",
      "family": "Peruvian Cumbia / Chicha",
      "category": "ostinato",
      "description": "Electric-guitar tremolo line with minor-key contour,",
      "tags": [
        "chicha",
        "tremolo"
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

      "approaches": ["phrase"],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        14,
        16,
        19,
        22,
        24,
        27,
        30
      ],
      "accentProfile": [
        0.7,
        0.55,
        0.68,
        0.5,
        0.75,
        0.6,
        0.7,
        0.55,
        0.65,
        0.5,
        0.78,
        0.62
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "chicha",
        " tremolo"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Peruvian Cumbia / Chicha; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "chicha",
        "tremolo"
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
      "id": "cu-11-cumbia-organ-hook",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Cumbia Organ Hook",
      "family": "Electric Cumbia",
      "category": "rolePattern",
      "description": "Short organ riff repeating over the",
      "tags": [
        "organ",
        "hook"
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
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        6,
        12,
        16,
        22,
        28
      ],
      "accentProfile": [
        0.8,
        0.65,
        0.75,
        0.8,
        0.65,
        0.9
      ],
      "syncopationRating": 0.33,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "organ",
        " hook"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Electric Cumbia; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "organ",
        "hook"
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
      "id": "cu-12-cumbia-maraca-layer",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Maraca offbeat shimmer",
      "family": "Percussion",
      "category": "ostinato",
      "description": "Even offbeat maraca layer; kept separate",
      "tags": [
        "maracas",
        "texture"
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
        "maracas"
      ],
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
        0.4,
        0.52,
        0.45,
        0.58,
        0.42,
        0.5,
        0.46,
        0.62
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "maracas",
        " texture"
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
        "maracas",
        "texture"
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
      "id": "cu-13-cumbia-call-and-response",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Cumbia Call-and-Response",
      "family": "Melody",
      "category": "interactionPattern",
      "description": "Lead phrase is answered by guitar/organ",
      "tags": [
        "call-response"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "counterline"
      ],

      "approaches": ["groove"],
      "instruments": [
        "electric-guitar",
        "organ"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        18,
        22,
        26,
        30
      ],
      "accentProfile": [
        0.8,
        0.6,
        0.7,
        0.55,
        0.78,
        0.62,
        0.72,
        0.6
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "call-response"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Melody; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "call-response"
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
      "id": "cu-14-cumbia-stop-break",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Cumbia Stop Break",
      "family": "Break",
      "category": "break",
      "transitionType": "fill",
      "description": "Band cuts the scraper and bass",
      "tags": [
        "stop-time",
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
        "percussion"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "guiro"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        12
      ],
      "accentProfile": [
        1,
        0.75
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "stop-time",
        " re-entry"
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "bridge"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "stop-time",
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
      "id": "cu-15-cumbia-final-tag",
      "worldId": "cumbia",
      "styleIds": ["cumbia-electric"],
      "name": "Cumbia Final Tag",
      "family": "Cadence",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Compact percussion and bass tag to",
      "tags": [
        "tag",
        "cadence"
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
        "cumbia-drum"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        8,
        12,
        14
      ],
      "accentProfile": [
        0.65,
        0.8,
        1
      ],
      "syncopationRating": 0.33,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "tag",
        " cadence"
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "ending"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "tag",
        "cadence"
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
  "signatureCell": "Cyclical cumbia pulse with scraper/drum interlock and regional lead figures",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight",
    "humanizeJitterMs": 9
  },
  "crossLinks": [
    "Cumbia ↔ Reggaetón",
    "Cumbia ↔ Latin Folk"
  ],
};
