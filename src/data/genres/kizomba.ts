import { GenreWorld } from '../../types';
import { AnalogSynthTimbreControl, SamplerTimbreControl } from '../../engine/theory/physicsInterfaces';

export const KIZOMBA_WORLD: GenreWorld = {
  "id": "kizomba",
  "name": "Kizomba",
  "family": "African / Angolan",
  "color": "#c86d3b",
  "level": "world",
  "description": "The sensual partner dance style of",
  rhythm: { syncopation: 0.4, swing: 0.1, pocket: 'strict_grid', pocketDepth: 0, intonationSystem: 'equal', quantizeJitterMs: 2 },
  performanceRules: {
    'synth_bass': {
      evaluateNote: (phrase: any, index: number, _acousticState?: any, electronicState?: any) => {
        const note = phrase.notes[index];

        const timbre: AnalogSynthTimbreControl = {
          oscillatorPhase: 'free_running',
          filterEnvelopeDepth: 0.1,
          distortion: { type: 'none', driveAmount: 0 },
          subOscillatorLevel: 1.0,
          sidechainDuckDepth: (electronicState?.globalSidechainDuckAmount ?? 1.0) * 1.0,
          portamentoTimeMs: 250,
          intonationOffsetCents: 0,
          actuationSyncOffsetMs: 0
        };

        return [{ ...note, type: 'synth', articulation: 'legato_glide', timbreControl: timbre }];
      }
    },
    'sub-bass': {
      evaluateNote: (phrase: any, index: number, _acousticState?: any, electronicState?: any) => {
        const note = phrase.notes[index];

        const timbre: AnalogSynthTimbreControl = {
          oscillatorPhase: 'free_running',
          filterEnvelopeDepth: 0.1,
          distortion: { type: 'none', driveAmount: 0 },
          subOscillatorLevel: 1.0,
          sidechainDuckDepth: (electronicState?.globalSidechainDuckAmount ?? 1.0) * 1.0,
          portamentoTimeMs: 250,
          intonationOffsetCents: 0,
          actuationSyncOffsetMs: 0
        };

        return [{ ...note, type: 'synth', articulation: 'legato_glide', timbreControl: timbre }];
      }
    }
  },
  drumRules: {
    evaluateStep: (step: any) => {
      const percussionTimbre: SamplerTimbreControl = {
        samplePlaybackRate: 0.6,
        formantShiftAmount: 0,
        aliasingArtifacts: 0.6,
        transientShaping: { attackMs: 15, sustainLevel: 0.4 },
        distortion: { type: 'tape_saturation', driveAmount: 0.3 },
        intonationOffsetCents: 0,
        actuationSyncOffsetMs: 0
      };

      return [
        ...(step.kick ? [{ type: 'kick_sub', time: step.time, velocity: step.velocity * 0.8, timbreControl: percussionTimbre }] : []),
        ...(step.snare ? [{ type: 'soft_clap', time: step.time, velocity: step.velocity * 0.7, timbreControl: percussionTimbre }] : []),
        ...(step.hihat ? [{ type: 'shaker', time: step.time, velocity: step.velocity * 0.6 }] : [])
      ];
    }
  },
  "styleDefinitions": [
    {
      "id": "kizomba-tradicional",
      "worldId": "kizomba",
      "name": "Tradicional",
      "origin": "Luanda, Angola",
      "era": "1980s–1990s",
      "description": "Grounded • 4/4 Zouk Beat •",
      "characteristicInstruments": [
        "bass",
        "drums",
        "acoustic-guitar",
        "synth",
        "hand-percussion"
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
        "kick on 1, 1-and, 3-and with crisp snare on 3 and soft rolling hi-hat"
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
    },
    {
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
    },
    {
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
        "drum-machine"
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
    },
    {
      "id": "kizomba-tarraxinha",
      "worldId": "kizomba",
      "name": "Tarraxinha",
      "origin": "Luanda, Angola",
      "era": "Late 1990s–Present",
      "description": "Sensual • Deep Bass • Micro-movement\nSlow,",
      "characteristicInstruments": [
        "sub-bass",
        "drums",
        "synth",
        "sampler",
        "drum-machine"
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
    },
    {
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
        "drum-machine"
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
    },
    {
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
    },
    {
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
        "drum-machine"
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
    },
    {
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
    }
  ],
  "substyles": [
    "Tradicional",
    "Semba Playful",
    "Urbankiz",
    "Tarraxinha",
    "Tarraxo",
    "Passada",
    "Ghetto Zouk",
    "Semba Lento"
  ],
  "artists": [
    "Eduardo Paim",
    "Bonga",
    "Paulo Flores",
    "Curtis Seldon",
    "Enah Lebon",
    "DJ Znobia",
    "DJ Mad-R",
    "Gwany",
    "Lil G",
    "Kassav'",
    "Tabanka Djaz",
    "Nelson Freitas",
    "C4 Pedro",
    "Carlos Burity",
    "Waldemar Bastos"
  ],
  "concepts": [
    "batida kick pulse",
    "dikanza bamboo scraper",
    "tarraxinha sub-bass",
    "sensual vocal phrasing",
    "semba guitar arpeggio"
  ],
  "roles": {
    "bass": [
      "deep tarraxinha sub-bass",
      "melodic semba bassline",
      "batida sub-pulse"
    ],
    "guitar": [
      "semba lead arpeggios",
      "syncopated rhythmic guitar lines"
    ],
    "keys": [
      "atmospheric synth pads",
      "DX7 electric piano chords"
    ],
    "drums": [
      "batida kick and rimshot groove",
      "hi-hat 16th shuffles",
      "dikanza scrape"
    ],
    "synth": [
      "Portuguese and Kimbundu lyric phrasing",
      "sensual vocal call and response"
    ]
  },
  "patterns": [
    {
      "id": "kizomba-batida-groove",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Kizomba Batida & Sub-Kick Beat",
      "family": "Kizomba Drumming",
      "category": "break",
      "transitionType": "fill",
      "description": "The hypnotic heartbeat of Kizomba: low",
      "tags": [
        "kizomba",
        "batida",
        "dikanza",
        "drums",
        "angola"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "drums",
        "percussion",
        "pulse"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion"
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
        0.82,
        0.94,
        0.72,
        0.88
      ],
      "velocityProfile": [
        0.95,
        0.78,
        0.88,
        0.68,
        0.82
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "tarraxinha-sub-drop",
          "parentPatternId": "kizomba-batida-groove",
          "name": "Tarraxinha Minimal Sub Drop",
          "variationType": "breakdown",
          "probability": 0.5,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            1,
            0.92,
            0.86
          ],
          "description": "Stripped-down heavy electronic sub-bass kick for"
        },
        {
          "id": "kizomba-batida-groove-v-02",
          "parentPatternId": "kizomba-batida-groove",
          "name": "Kizomba Batida & Sub-Kick Beat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.8999999999999999,
            0.8999999999999999,
            0.7999999999999999,
            0.84
          ],
          "velocityProfile": [
            1,
            0.76,
            0.86,
            0.74,
            0.7999999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 2,
      "weight": 1,
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-dikanza-scraper",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Dikanza Scraper",
      "family": "Percussion",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Authentic Angolan dikanza (reco-reco / bamboo",
      "tags": [
        "kizomba",
        "semba",
        "dikanza",
        "percussion",
        "angola"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],

      "approaches": ["groove"],
      "instruments": [
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        7,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.76,
        0.94,
        0.72,
        0.88,
        0.82,
        0.94
      ],
      "velocityProfile": [
        0.72,
        0.88,
        0.68,
        0.84,
        0.76,
        0.88
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "kizomba-dikanza-scraper-v-01",
          "parentPatternId": "kizomba-dikanza-scraper",
          "name": "Dikanza Scraper — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            7,
            10,
            15
          ],
          "accentProfile": [
            0.71,
            0.8899999999999999,
            0.6699999999999999,
            0.83
          ],
          "velocityProfile": [
            0.64,
            0.8,
            0.6000000000000001,
            0.76
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "kizomba-dikanza-scraper-v-02",
          "parentPatternId": "kizomba-dikanza-scraper",
          "name": "Dikanza Scraper — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.72,
            1,
            0.6799999999999999,
            0.96,
            0.7799999999999999,
            1
          ],
          "velocityProfile": [
            0.78,
            0.86,
            0.66,
            0.8999999999999999,
            0.74,
            0.86
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
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-semba-guitar",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Semba Guitar Arpeggio",
      "family": "Guitar",
      "category": "groove",
      "description": "Fast intricate African guitar lines and",
      "tags": [
        "kizomba",
        "semba",
        "guitar",
        "angola"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar",
        "electric-guitar"
      ],

      "approaches": ["chop"],
      "instruments": [
        "guitar",
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        9,
        12,
        14
      ],
      "accentProfile": [
        0.98,
        0.74,
        0.88,
        0.74,
        0.92,
        0.82
      ],
      "velocityProfile": [
        0.92,
        0.7,
        0.84,
        0.7,
        0.88,
        0.76
      ],
      "supportedEnergy": [2, 3, 4],
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
          "id": "kizomba-semba-guitar-v-01",
          "parentPatternId": "kizomba-semba-guitar",
          "name": "Semba Guitar Arpeggio — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            9,
            14
          ],
          "accentProfile": [
            0.9299999999999999,
            0.69,
            0.83,
            0.69
          ],
          "velocityProfile": [
            0.8400000000000001,
            0.62,
            0.76,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "kizomba-semba-guitar-v-02",
          "parentPatternId": "kizomba-semba-guitar",
          "name": "Semba Guitar Arpeggio — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            9,
            12,
            14
          ],
          "accentProfile": [
            0.94,
            0.82,
            0.84,
            0.82,
            0.88,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.98,
            0.6799999999999999,
            0.82,
            0.76,
            0.86,
            0.74
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
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-tarraxinha-sub",
      "worldId": "kizomba",
      "styleIds": ["kizomba-tarraxinha"],
      "name": "Tarraxinha Sub-Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Heavy syncopated sub-bass pulse anchoring sensual",
      "tags": [
        "kizomba",
        "tarraxinha",
        "sub-bass",
        "bass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],

      "approaches": ["walking"],
      "instruments": [
        "bass",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        12
      ],
      "accentProfile": [
        1,
        0.88,
        0.82
      ],
      "velocityProfile": [
        0.96,
        0.84,
        0.78
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "kizomba-tarraxinha-sub-v-01",
          "parentPatternId": "kizomba-tarraxinha-sub",
          "name": "Tarraxinha Sub-Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.95,
            0.83
          ],
          "velocityProfile": [
            0.88,
            0.76
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "kizomba-tarraxinha-sub-v-02",
          "parentPatternId": "kizomba-tarraxinha-sub",
          "name": "Tarraxinha Sub-Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.96,
            0.96,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.82,
            0.76
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-kick-batida",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Kizomba Kick Batida",
      "family": "Beat",
      "category": "groove",
      "description": "Classic syncopated kizomba batida kick pattern",
      "tags": [
        "kizomba",
        "kick",
        "batida",
        "drums"
      ],
      "scopes": [
        "measure"
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
        10,
        14
      ],
      "accentProfile": [
        1,
        0.86,
        0.92,
        0.78
      ],
      "velocityProfile": [
        0.95,
        0.82,
        0.86,
        0.74
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "kizomba-kick-batida-v-01",
          "parentPatternId": "kizomba-kick-batida",
          "name": "Kizomba Kick Batida — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            10,
            14
          ],
          "accentProfile": [
            0.95,
            0.8099999999999999,
            0.87
          ],
          "velocityProfile": [
            0.87,
            0.74,
            0.78
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "kizomba-kick-batida-v-02",
          "parentPatternId": "kizomba-kick-batida",
          "name": "Kizomba Kick Batida — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.96,
            0.94,
            0.88,
            0.86
          ],
          "velocityProfile": [
            1,
            0.7999999999999999,
            0.84,
            0.8
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
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-hats",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Kizomba Hi-Hats",
      "family": "Beat",
      "category": "groove",
      "description": "16th note hi-hats with subtle swing",
      "tags": [
        "kizomba",
        "hihat",
        "drums"
      ],
      "scopes": [
        "measure"
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
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.92,
        0.62,
        0.82,
        0.64,
        0.88,
        0.62,
        0.82,
        0.68
      ],
      "velocityProfile": [
        0.88,
        0.58,
        0.78,
        0.58,
        0.82,
        0.58,
        0.78,
        0.62
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "kizomba-hats-v-01",
          "parentPatternId": "kizomba-hats",
          "name": "Kizomba Hi-Hats — sparse variation",
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
            0.87,
            0.57,
            0.7699999999999999,
            0.59,
            0.83
          ],
          "velocityProfile": [
            0.8,
            0.49999999999999994,
            0.7000000000000001,
            0.49999999999999994,
            0.74
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
          "id": "kizomba-hats-v-02",
          "parentPatternId": "kizomba-hats",
          "name": "Kizomba Hi-Hats — accent shift",
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
            0.88,
            0.7,
            0.7799999999999999,
            0.72,
            0.84,
            0.7,
            0.7799999999999999,
            0.76
          ],
          "velocityProfile": [
            0.94,
            0.5599999999999999,
            0.76,
            0.6399999999999999,
            0.7999999999999999,
            0.5599999999999999,
            0.8400000000000001,
            0.6
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
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-urban-synth-pulse",
      "worldId": "kizomba",
      "styleIds": ["kizomba-urban-kiz"],
      "name": "Urban Kiz Synth Pulse",
      "family": "Synth",
      "category": "groove",
      "description": "Polished electronic synth pulse and atmospheric",
      "tags": [
        "kizomba",
        "urban-kiz",
        "synth",
        "keys"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "synth"
      ],

      "approaches": ["groove"],
      "instruments": [
        "keys",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.8,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.8,
        0.9,
        0.75,
        0.85,
        0.7
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "kizomba-urban-synth-pulse-v-01",
          "parentPatternId": "kizomba-urban-synth-pulse",
          "name": "Urban Kiz Synth Pulse — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            8,
            11
          ],
          "accentProfile": [
            0.7999999999999999,
            0.8999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.8200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "kizomba-urban-synth-pulse-v-02",
          "parentPatternId": "kizomba-urban-synth-pulse",
          "name": "Urban Kiz Synth Pulse — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.76,
            0.98,
            0.71
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.88,
            0.73,
            0.9099999999999999,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 2,
      "weight": 1,
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "kizomba-vocal-comping",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Kizomba Vocal Phrase Response",
      "family": "synth",
      "category": "groove",
      "description": "Sensual vocal phrase answers and smooth",
      "tags": [
        "kizomba",
        "synth",
        "comping"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
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
        0.92,
        0.85,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.88,
        0.8,
        0.9,
        0.75
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "kizomba-vocal-comping-v-01",
          "parentPatternId": "kizomba-vocal-comping",
          "name": "Kizomba Vocal Phrase Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            4,
            12,
            15
          ],
          "accentProfile": [
            0.87,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8,
            0.7200000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "kizomba-vocal-comping-v-02",
          "parentPatternId": "kizomba-vocal-comping",
          "name": "Kizomba Vocal Phrase Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            4,
            7,
            12,
            15
          ],
          "accentProfile": [
            0.88,
            0.9299999999999999,
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            0.94,
            0.78,
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
      "weight": 1,
      "provenance": "Kizomba catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": [
        "breath",
        "phrase-end"
      ]
    },
    {
      "id": "kizomba-phrase-9",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Hook Phrase",
      "family": "Hook",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "kizomba",
        "hook",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        8,
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
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "kizomba-phrase-9-v-01",
          "parentPatternId": "kizomba-phrase-9",
          "name": "Hook Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7,
            8,
            13,
            15
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
          "id": "kizomba-phrase-9-v-02",
          "parentPatternId": "kizomba-phrase-9",
          "name": "Hook Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            7,
            8,
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
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "hook"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-call-10",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Kizomba Bass Response",
      "family": "Kizomba Bass",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "kizomba",
        "kizomba-bass",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        5,
        8,
        9,
        12,
        14
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62,
        0.95,
        0.62,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.8999999999999999,
        0.62,
        0.95
      ],
      "syncopationRating": 0.5714285714285714,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "supportedEnergy": [2, 3, 4],
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
          "id": "kizomba-call-10-v-01",
          "parentPatternId": "kizomba-call-10",
          "name": "Kizomba Bass Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54,
            0.82
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
          "id": "kizomba-call-10-v-02",
          "parentPatternId": "kizomba-call-10",
          "name": "Kizomba Bass Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            5,
            8,
            9,
            12,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999,
            0.6,
            1
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
        },
        {
          "id": "kizomba-call-10-v-03",
          "parentPatternId": "kizomba-call-10",
          "name": "Kizomba Bass Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            5,
            8,
            9,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
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
            0.8999999999999999,
            0.62,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "kizomba-bass"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-anchor-11",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Semba Anchor",
      "family": "Semba",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "kizomba",
        "semba",
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

      "approaches": ["walking"],
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
        1,
        3,
        6,
        9,
        10,
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
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [2, 3, 4],
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
          "id": "kizomba-anchor-11-v-01",
          "parentPatternId": "kizomba-anchor-11",
          "name": "Semba Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            6,
            9,
            13,
            15
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
          "id": "kizomba-anchor-11-v-02",
          "parentPatternId": "kizomba-anchor-11",
          "name": "Semba Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            3,
            6,
            9,
            10,
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
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "semba"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-comp-12",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Call Comping",
      "family": "Call",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "kizomba",
        "call",
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

      "approaches": ["comping"],
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
        1,
        3,
        5,
        8,
        11,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "kizomba-comp-12-v-01",
          "parentPatternId": "kizomba-comp-12",
          "name": "Call Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            5,
            8,
            12,
            15
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
          "id": "kizomba-comp-12-v-02",
          "parentPatternId": "kizomba-comp-12",
          "name": "Call Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            3,
            5,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "call"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-intro-13",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Drop Intro",
      "family": "Drop",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "kizomba",
        "drop",
        "intro",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "texture"
      ],

      "approaches": ["comping"],
      "instruments": [
        "guitar",
        "keys"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
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
        0,
        2,
        6,
        7,
        10,
        12,
        14,
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],


      "variants": [
        {
          "id": "kizomba-intro-13-v-01",
          "parentPatternId": "kizomba-intro-13",
          "name": "Drop Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            7,
            12,
            14
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
          "id": "kizomba-intro-13-v-02",
          "parentPatternId": "kizomba-intro-13",
          "name": "Drop Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            6,
            7,
            10,
            12,
            14,
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
        },
        {
          "id": "kizomba-intro-13-v-03",
          "parentPatternId": "kizomba-intro-13",
          "name": "Drop Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            6,
            7,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "drop"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-verse-14",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Hook Verse Variation",
      "family": "Hook",
      "category": "groove",
      "description": "A restrained verse variation with intentional",
      "tags": [
        "kizomba",
        "hook",
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

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        3,
        7,
        8,
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse"
      ],


      "variants": [
        {
          "id": "kizomba-verse-14-v-01",
          "parentPatternId": "kizomba-verse-14",
          "name": "Hook Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
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
          "id": "kizomba-verse-14-v-02",
          "parentPatternId": "kizomba-verse-14",
          "name": "Hook Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
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
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "hook"
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
      "id": "kizomba-chorus-15",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Kizomba Bass Chorus Lift",
      "family": "Kizomba Bass",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases",
      "tags": [
        "kizomba",
        "kizomba-bass",
        "chorus",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "harmony",
        "drums"
      ],

      "approaches": ["groove", "comping"],
      "instruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "compatibleRoles": [
        "pulse",
        "harmony",
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
        0,
        1,
        2,
        4,
        8,
        9,
        12,
        14
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
      "syncopationRating": 0.5,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus"
      ],


      "variants": [
        {
          "id": "kizomba-chorus-15-v-01",
          "parentPatternId": "kizomba-chorus-15",
          "name": "Kizomba Bass Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            4,
            9,
            12
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
          "id": "kizomba-chorus-15-v-02",
          "parentPatternId": "kizomba-chorus-15",
          "name": "Kizomba Bass Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            4,
            8,
            9,
            12,
            14
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
        },
        {
          "id": "kizomba-chorus-15-v-03",
          "parentPatternId": "kizomba-chorus-15",
          "name": "Kizomba Bass Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            1,
            2,
            4,
            8,
            9,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            0.88,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "kizomba-bass"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-bridge-16",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Semba Bridge",
      "family": "Semba",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to",
      "tags": [
        "kizomba",
        "semba",
        "bridge",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "lead"
      ],

      "approaches": ["comping", "phrase"],
      "instruments": [
        "guitar",
        "keys"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
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
        0,
        2,
        3,
        4,
        6,
        10,
        11,
        14
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "bridge",
        "interlude",
        "development"
      ],


      "variants": [
        {
          "id": "kizomba-bridge-16-v-01",
          "parentPatternId": "kizomba-bridge-16",
          "name": "Semba Bridge — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            4,
            10,
            11
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
          "id": "kizomba-bridge-16-v-02",
          "parentPatternId": "kizomba-bridge-16",
          "name": "Semba Bridge — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            10,
            11,
            14
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
        },
        {
          "id": "kizomba-bridge-16-v-03",
          "parentPatternId": "kizomba-bridge-16",
          "name": "Semba Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            10,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            0.88,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "semba"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-fill-17",
      "worldId": "kizomba",
      "styleIds": ["kizomba-semba"],
      "name": "Call Fill",
      "family": "Call",
      "category": "fill",
      "transitionType": "fill",
      "description": "A short transition fill that signals",
      "tags": [
        "kizomba",
        "call",
        "fill",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "fill",
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion"
      ],
      "compatibleRoles": [
        "fill",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion"
      ],
      "canCrossRole": true,
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
        0.72,
        0.78,
        0.84,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        1
      ],
      "syncopationRating": 0,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "fill"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "pre-chorus",
        "turnaround",
        "ending"
      ],


      "variants": [
        {
          "id": "kizomba-fill-17-v-01",
          "parentPatternId": "kizomba-fill-17",
          "name": "Call Fill — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.6699999999999999,
            0.73,
            0.7899999999999999
          ],
          "velocityProfile": [
            0.64,
            0.65,
            0.76
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "kizomba-fill-17-v-02",
          "parentPatternId": "kizomba-fill-17",
          "name": "Call Fill — accent shift",
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
            0.6799999999999999,
            0.86,
            0.7999999999999999,
            1
          ],
          "velocityProfile": [
            0.78,
            0.71,
            0.82,
            1
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "kizomba-fill-17-v-03",
          "parentPatternId": "kizomba-fill-17",
          "name": "Call Fill — transition variation",
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
            0.7,
            0.76,
            0.82,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            1,
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
      "provenance": "GenreDAW catalog rebuild from existing Kizomba world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "kizomba",
        "call"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Syncopated batida kick [0,6,8,12,14] with continuous 16th dikanza scraper and warm sub-bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Kizomba ↔ Zouk",
    "Kizomba ↔ Semba",
    "Kizomba ↔ Blues Fusion"
  ]
};
