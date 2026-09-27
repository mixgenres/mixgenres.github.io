import { GenreWorld } from '../../types';
import { AnalogSynthTimbreControl, SamplerTimbreControl } from '../../engine/theory/physicsInterfaces';

export const REGGAETON_DEMBOW_WORLD: GenreWorld = {
  "id": "reggaeton-dembow",
  "name": "Reggaetón / Dembow",
  "family": "Caribbean / Latin urban",
  "color": "#d14b7a",
  "level": "world",
  "description": "Reggaetón and dembow are represented as",
  rhythm: { syncopation: 0.5, swing: 0.0, pocket: 'strict_grid', pocketDepth: 0, intonationSystem: 'equal', quantizeJitterMs: 2 },
  performanceRules: {
    'synth_bass': {
      evaluateNote: (phrase: any, index: number, _acousticState?: any, electronicState?: any) => {
        const note = phrase.notes[index];
        const isDownbeat = ((note.time ?? 0) % 1) === 0;

        const timbre: AnalogSynthTimbreControl = {
          oscillatorPhase: 'reset_on_note',
          filterEnvelopeDepth: 0.8,
          distortion: { type: 'analog_tube', driveAmount: 0.65, asymmetry: 0.8 },
          subOscillatorLevel: 1.0,
          sidechainDuckDepth: isDownbeat ? (electronicState?.globalSidechainDuckAmount ?? 1.0) * 0.9 : 0.0,
          portamentoTimeMs: (note.duration ?? 0.25) > 0.4 ? 120 : 0,
          intonationOffsetCents: electronicState?.thermalAnalogDrift ?? 0,
          actuationSyncOffsetMs: 0
        };

        return [{ ...note, type: 'synth', articulation: 'plucked_sub', timbreControl: timbre }];
      }
    },
    'sub-bass': {
      evaluateNote: (phrase: any, index: number, _acousticState?: any, electronicState?: any) => {
        const note = phrase.notes[index];
        const isDownbeat = ((note.time ?? 0) % 1) === 0;

        const timbre: AnalogSynthTimbreControl = {
          oscillatorPhase: 'reset_on_note',
          filterEnvelopeDepth: 0.8,
          distortion: { type: 'analog_tube', driveAmount: 0.65, asymmetry: 0.8 },
          subOscillatorLevel: 1.0,
          sidechainDuckDepth: isDownbeat ? (electronicState?.globalSidechainDuckAmount ?? 1.0) * 0.9 : 0.0,
          portamentoTimeMs: (note.duration ?? 0.25) > 0.4 ? 120 : 0,
          intonationOffsetCents: electronicState?.thermalAnalogDrift ?? 0,
          actuationSyncOffsetMs: 0
        };

        return [{ ...note, type: 'synth', articulation: 'plucked_sub', timbreControl: timbre }];
      }
    }
  },
  drumRules: {
    evaluateStep: (step: any) => {
      const kickTimbre: SamplerTimbreControl = {
        samplePlaybackRate: 1.0,
        formantShiftAmount: 0,
        aliasingArtifacts: 0.1,
        transientShaping: { attackMs: 2, sustainLevel: 0.2 },
        distortion: { type: 'digital_hard_clip', driveAmount: 0.4 },
        intonationOffsetCents: 0,
        actuationSyncOffsetMs: 0
      };
      const snareTimbre: SamplerTimbreControl = {
        samplePlaybackRate: 1.2,
        formantShiftAmount: -0.2,
        aliasingArtifacts: 0.5,
        transientShaping: { attackMs: 0, sustainLevel: 0.8 },
        distortion: { type: 'tape_saturation', driveAmount: 0.8 },
        intonationOffsetCents: 0,
        actuationSyncOffsetMs: 0
      };

      return [
        ...(step.kick ? [{ type: 'kick', time: step.time, velocity: step.velocity, timbreControl: kickTimbre }] : []),
        ...(step.snare ? [{ type: 'snare_rimshot', time: step.time, velocity: step.velocity, timbreControl: snareTimbre }] : [])
      ];
    }
  },
  "styleDefinitions": [
    {
      "id": "reggaeton-dembow-perreo",
      "worldId": "reggaeton-dembow",
      "name": "Perreo",
      "origin": "San Juan, Puerto Rico",
      "era": "2000s",
      "description": "Heavy Dembow • 4/4 3-3-2 •",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "sampler",
        "drum-machine"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        92,
        98
      ],
      "keySubstyles": [
        "Perreo Clásico",
        "Old-School Reggaeton"
      ],
      "coreConcepts": [
        "uncompromising Dembow kick-and-snare syncopation (3+3+2)",
        "pounding sub-bass kicks on every quarter beat",
        "aggressive street lyrics and party chants",
        "hypnotic minor synth riffs"
      ],
      "rhythmicGrammar": [
        "kick on 1, 2, 3, 4 with snare on 1-and-a, 2-and, 3-and-a, 4-and (the Dembow rhythm)"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Hard Dembow kick/snare pattern [0, 6, 10, 16] driving under aggressive perreo synth hook",
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
          "Em"
        ],
        "verse": [
          "Am",
          "F",
          "G",
          "Em",
          "Am",
          "F",
          "G",
          "Em"
        ],
        "chorus": [
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
      "id": "reggaeton-dembow-melodic",
      "worldId": "reggaeton-dembow",
      "name": "Melodic",
      "origin": "Medellín, Colombia / Puerto Rico",
      "era": "2015–Present",
      "description": "Smooth • Pop-Sensibility • Romantic\nPolished Colombian",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sub-bass",
        "electric-guitar",
        "drum-machine"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        96
      ],
      "keySubstyles": [
        "Medellín Sound",
        "Reggaeton Romántico"
      ],
      "coreConcepts": [
        "softer, warmer Dembow percussion with filtered snares",
        "smooth vocal melodies and romantic lyricism",
        "lush synthesizer pads and electric guitar licks",
        "clean mainstream pop arrangement"
      ],
      "rhythmicGrammar": [
        "mellow Dembow beat with filtered kick and warm snare clap with gentle reverb"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Warm filtered Dembow beat rolling under smooth vocal melody and plucked guitar hook",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G"
        ],
        "coda": [
          "Am",
          "F",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "reggaeton-dembow-neoperreo",
      "worldId": "reggaeton-dembow",
      "name": "Neoperreo",
      "origin": "Santiago, Chile / Mexico / Spain",
      "era": "2018–Present",
      "description": "Distorted • Cyberpunk • Club Underground\nDistorted",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "sub-bass",
        "synth",
        "drum-machine"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        96,
        110
      ],
      "keySubstyles": [
        "Industrial Dembow",
        "Hyperpop Reggaeton"
      ],
      "coreConcepts": [
        "distorted industrial 808 kicks and aggressive bitcrushed snares",
        "cyberpunk / hyperpop synthesizer leads",
        "unapologetic queer and feminist party themes",
        "speed alterations and glitch artifacts"
      ],
      "rhythmicGrammar": [
        "fast aggressive Dembow beat pushed with harsh distortion and syncopated snare flurries"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Bitcrushed Dembow beat slamming into industrial synth screeches and irreverent vocal chant",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Bb",
          "A"
        ],
        "verse": [
          "Dm",
          "Dm",
          "Bb",
          "A",
          "Dm",
          "Dm",
          "Gm",
          "A"
        ],
        "drop": [
          "Dm",
          "Dm",
          "Bb",
          "A",
          "Dm",
          "Dm",
          "Bb",
          "A"
        ],
        "coda": [
          "Bb",
          "A",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "reggaeton-dembow-dancehall",
      "worldId": "reggaeton-dembow",
      "name": "Dancehall",
      "origin": "Panama / Puerto Rico",
      "era": "1990s",
      "description": "Spanish Reggae • Roots • Jamaican",
      "characteristicInstruments": [
        "drums",
        "bass",
        "sampler",
        "organ",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        94,
        102
      ],
      "keySubstyles": [
        "Reggae en Español",
        "Plena Panameña"
      ],
      "coreConcepts": [
        "reversioning Jamaican dancehall riddims with Spanish rhymes",
        "acoustic and digital drums locked in driving dancehall syncopation",
        "classic organ skanks and horn riffs",
        "vibrant Caribbean street energy"
      ],
      "rhythmicGrammar": [
        "Jamaican Bam Bam / Fever Pitch riddim syncopation with sharp snare crack"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Classic Bam-Bam riddim snare skip with punchy Spanish vocal toasting and organ skank",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "F",
          "C",
          "Dm",
          "Bb"
        ],
        "verse": [
          "F",
          "C",
          "Dm",
          "Bb",
          "F",
          "C",
          "Bb",
          "C"
        ],
        "chorus": [
          "Dm",
          "Bb",
          "F",
          "C",
          "Dm",
          "Bb",
          "C",
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
      "id": "reggaeton-dembow-pop-reggaeton",
      "worldId": "reggaeton-dembow",
      "name": "Pop-Reggaeton",
      "origin": "Miami / San Juan / Madrid",
      "era": "2017–Present",
      "description": "Commercial • Acoustic Guitar • Global",
      "characteristicInstruments": [
        "acoustic-guitar",
        "synth",
        "drums",
        "sub-bass",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        96
      ],
      "keySubstyles": [
        "Global Latin Pop",
        "Flamenco-Reggaeton"
      ],
      "coreConcepts": [
        "clean acoustic guitar or flamenco palmas opening",
        "massively catchy singalong stadium choruses",
        "dynamic blend of organic instruments and crisp electronic Dembow",
        "universal romantic lyrics"
      ],
      "rhythmicGrammar": [
        "acoustic verse building into full electronic Dembow dance beat on the chorus drop"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Acoustic guitar strumming building into explosive global Dembow chorus drop and singalong hook",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Bm",
          "G",
          "D",
          "A"
        ],
        "verse": [
          "Bm",
          "G",
          "D",
          "A",
          "Bm",
          "G",
          "D",
          "A"
        ],
        "chorus": [
          "D",
          "A",
          "Bm",
          "G",
          "D",
          "A",
          "Bm",
          "G"
        ],
        "coda": [
          "G",
          "A",
          "D",
          "D"
        ]
      }
    },
    {
      "id": "reggaeton-dembow-trap",
      "worldId": "reggaeton-dembow",
      "name": "Trap",
      "origin": "San Juan, Puerto Rico",
      "era": "2016–Present",
      "description": "808 • Dark • Melancholic\nLatin trap",
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
        125,
        145
      ],
      "keySubstyles": [
        "Latin Trap",
        "Sad Trap"
      ],
      "coreConcepts": [
        "booming tuned 808 bass glides and rolls",
        "fast 32nd-note hi-hat triplets",
        "dark minor chord progressions with guitar/synth samples",
        "deep baritone vocal flow with raw emotional delivery"
      ],
      "rhythmicGrammar": [
        "half-time trap beat: kick on 1, hard snare on 3, with frantic hi-hat rolls"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Booming 808 pitch glide locked with sharp snare on 3 and melancholic minor guitar sample",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "Dm",
          "Em"
        ],
        "verse": [
          "Am",
          "F",
          "Dm",
          "Em",
          "Am",
          "F",
          "Dm",
          "Em"
        ],
        "chorus": [
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
      "id": "reggaeton-dembow-playero",
      "worldId": "reggaeton-dembow",
      "name": "Playero",
      "origin": "San Juan, Puerto Rico (Casas & Mixtapes)",
      "era": "1990s",
      "description": "Underground • Mixtape • Raw Loops\nDJ",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "synth",
        "turntable",
        "drum-machine"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        94,
        102
      ],
      "keySubstyles": [
        "Playero 37/38 Sound",
        "Underground PR"
      ],
      "coreConcepts": [
        "raw tape cassette compression and vinyl sample chops",
        "fast continuous multi-artist vocal cyphers",
        "unfiltered reggae drum machine loops",
        "foundational Puerto Rican urban roots"
      ],
      "rhythmicGrammar": [
        "raw unpolished drum loop rolling continuously with sudden vocal drops and rewinds"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Raw underground mixtape cassette beat chop with rapid-fire cypher MC vocal handover",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Gm",
          "F",
          "Eb",
          "D7"
        ],
        "cypher": [
          "Gm",
          "F",
          "Eb",
          "D7",
          "Gm",
          "F",
          "Eb",
          "D7"
        ],
        "coda": [
          "Eb",
          "D7",
          "Gm",
          "Gm"
        ]
      }
    },
    {
      "id": "reggaeton-dembow-bachata",
      "worldId": "reggaeton-dembow",
      "name": "Bachata",
      "origin": "Dominican Republic / Puerto Rico",
      "era": "2000s–Present",
      "description": "Requinto • Bongo • Dembow Fusion\nBachata-reggaeton",
      "characteristicInstruments": [
        "requinto",
        "bongos",
        "sub-bass",
        "drums",
        "guiro"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        130
      ],
      "keySubstyles": [
        "Bachatón",
        "Urban Bachata Fusion"
      ],
      "coreConcepts": [
        "fast intricate requinto guitar arpeggios",
        "bongo and güira syncopations blended with Dembow bass hits",
        "romantic falsetto vocal deliveries",
        "hybrid sensual partner dance appeal"
      ],
      "rhythmicGrammar": [
        "bachata bongo martillo pattern fused with syncopated Dembow kick/snare pulse"
      ],
      "danceTags": [
        "social-partner",
        "sensual-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "High virtuosic requinto guitar arpeggio ringing over fused bongo martillo and Dembow bass pulse",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Gm",
          "A7",
          "Dm"
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
          "F",
          "C",
          "Dm",
          "Am",
          "Bb",
          "Gm",
          "A7",
          "Dm"
        ],
        "coda": [
          "Gm",
          "A7",
          "Dm",
          "Dm"
        ]
      }
    }
  ],
  "substyles": [
    "Perreo",
    "Melodic",
    "Neoperreo",
    "Dancehall",
    "Pop-Reggaeton",
    "Trap",
    "Playero",
    "Bachata"
  ],
  "artists": [
    "Daddy Yankee",
    "Don Omar",
    "J Balvin",
    "Maluma",
    "Ms Nina",
    "Tomasa del Real",
    "El General",
    "Nando Boom",
    "Luis Fonsi",
    "Rosalía",
    "Bad Bunny",
    "Anuel AA",
    "DJ Playero",
    "DJ Negro",
    "Aventura"
  ],
  "concepts": [
    "dembow",
    "negative space",
    "kick-snare interlock",
    "syncopated sub-bass",
    "vocal pocket"
  ],
  "roles": {
    "drums": [
      "dembow skeleton",
      "kick/snare interlock"
    ],
    "bass": [
      "syncopated sub answers"
    ],
    "harmony": [
      "short offbeat stabs"
    ],
    "synth": [
      "syncopated reggaetón phrasing"
    ]
  },
  "patterns": [
    {
      "id": "rg-dembow-core",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-dembow"],
      "name": "Dembow Core Timeline",
      "family": "Dembow Drums",
      "category": "groove",
      "description": "The canonical engine cell: kick attacks",
      "tags": [
        "dembow",
        "reggaeton",
        "timeline"
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
        "drums",
        "kick",
        "snare"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        8,
        11,
        12,
        14,
        16,
        19,
        20,
        22,
        24,
        27,
        28,
        30
      ],
      "hitGrid": [
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare"
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
        0.9,
        0.65,
        1,
        0.72,
        0.9,
        0.65
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
        0.86,
        0.58,
        0.92,
        0.62,
        0.86,
        0.58
      ],
      "syncopationRating": 0.92,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": ["accent"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "breakdown"
      ],



      "variants": [
        {
          "id": "rg-dembow-core-v-sparse",
          "parentPatternId": "rg-dembow-core",
          "name": "Dembow Core Timeline — sparse",
          "variationType": "sparse",
          "probability": 0.05,
          "description": "Leaves selected attacks open for a",
          "onsetGrid": [
            0,
            8,
            14,
            24
          ],
          "hitGrid": [
            "kick",
            "kick",
            "snare",
            "kick"
          ],
          "accentProfile": [
            0.92,
            0.72,
            0.9,
            0.68
          ]
        },
        {
          "id": "rg-dembow-core-v-shift",
          "parentPatternId": "rg-dembow-core",
          "name": "Dembow Core Timeline — accent shift",
          "variationType": "accentShift",
          "probability": 0.12,
          "description": "Retains the cell while moving emphasis",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            11,
            12,
            14,
            16,
            19,
            20,
            22,
            24,
            27,
            28,
            30
          ],
          "hitGrid": [
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare"
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7,
            0.95,
            0.7,
            0.95,
            0.7,
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
        "dembow",
        "reggaeton",
        "timeline"
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
      "id": "rg-dembow-bass",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-dembow"],
      "name": "Dembow Syncopated Bass",
      "family": "Dembow Bass",
      "category": "ostinato",
      "description": "Short sub-bass notes answer the kick",
      "tags": [
        "dembow",
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

      "approaches": ["walking"],
      "instruments": [
        "sub-bass",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        6,
        8,
        14,
        16,
        22,
        24,
        30
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
      "syncopationRating": 0.9,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "short",
        "sub"
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
          "id": "rg-dembow-bass-v-sparse",
          "parentPatternId": "rg-dembow-bass",
          "name": "Dembow Syncopated Bass — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a",
          "onsetGrid": [
            0,
            8,
            16,
            24
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9,
            0.65
          ]
        },
        {
          "id": "rg-dembow-bass-v-shift",
          "parentPatternId": "rg-dembow-bass",
          "name": "Dembow Syncopated Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis",
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
        "dembow",
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
      "id": "rg-perc-ghost",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Percussive Ghost Layer",
      "family": "Modern Reggaetón Percussion",
      "category": "rolePattern",
      "description": "A sparse shaker/click layer fills selected",
      "tags": [
        "negative-space",
        "shaker"
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
        "cabasa"
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
      "syncopationRating": 0.65,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": ["accent"],
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
          "id": "rg-perc-ghost-v-sparse",
          "parentPatternId": "rg-perc-ghost",
          "name": "Percussive Ghost Layer — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a",
          "onsetGrid": [
            2,
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
          "id": "rg-perc-ghost-v-shift",
          "parentPatternId": "rg-perc-ghost",
          "name": "Percussive Ghost Layer — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis",
          "onsetGrid": [
            2,
            4,
            6,
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
            0.7
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "negative-space",
        "shaker"
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
      "id": "rg-synth-stab",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Offbeat Synth Stab",
      "family": "Reggaetón Stabs",
      "category": "ostinato",
      "description": "Short chord/synth stabs reinforce the offbeat",
      "tags": [
        "stabs",
        "offbeat",
        "reggaeton"
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
        "clavinet"
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
      "syncopationRating": 0.82,
      "anticipationOffset": 1,
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
        "chorus",
        "verse"
      ],



      "variants": [
        {
          "id": "rg-synth-stab-v-sparse",
          "parentPatternId": "rg-synth-stab",
          "name": "Offbeat Synth Stab — sparse",
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
          "id": "rg-synth-stab-v-shift",
          "parentPatternId": "rg-synth-stab",
          "name": "Offbeat Synth Stab — accent shift",
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
        "stabs",
        "offbeat",
        "reggaeton"
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
      "id": "rg-dembow-break",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-dembow"],
      "name": "Dembow Break & Pickup",
      "family": "Breaks",
      "category": "break",
      "transitionType": "fill",
      "description": "Drops the main kick for a",
      "tags": [
        "break",
        "pickup",
        "dembow"
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
        "snare"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        14
      ],
      "hitGrid": [
        "kick",
        "kick",
        "kick",
        "kick",
        "snare"
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
      "syncopationRating": 0.8,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": ["accent"],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "ending",
        "bridge"
      ],



      "variants": [
        {
          "id": "rg-dembow-break-v-sparse",
          "parentPatternId": "rg-dembow-break",
          "name": "Dembow Break & Pickup — sparse",
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
          "id": "rg-dembow-break-v-shift",
          "parentPatternId": "rg-dembow-break",
          "name": "Dembow Break & Pickup — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis",
          "onsetGrid": [
            0,
            4,
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
        "break",
        "pickup",
        "dembow"
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
      "id": "rg-06-classic-dembow-skeleton",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-dembow"],
      "name": "Classic dembow two-bar answer",
      "family": "Dembow",
      "category": "groove",
      "description": "Two-bar dembow skeleton with a second-bar",
      "tags": [
        "dembow",
        "timeline"
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
        "drums",
        "kick",
        "snare"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        8,
        11,
        12,
        14,
        16,
        19,
        20,
        22,
        24,
        27,
        28,
        30
      ],
      "hitGrid": [
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare"
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
        1,
        0.72,
        0.9,
        0.65,
        0.88,
        0.7
      ],
      "syncopationRating": 0.38,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": ["timeline"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Dembow; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "dembow",
        "timeline"
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
      "id": "rg-07-dembow-clave-like-ghosts",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Dembow Offbeat Texture",
      "family": "Dembow",
      "category": "groove",
      "description": "A sparse 2-bar shaker/click texture that",
      "tags": [
        "offbeat texture",
        "negative space"
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
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        2,
        6,
        10,
        14,
        18,
        22,
        26,
        30
      ],
      "accentProfile": [
        0.28,
        0.34,
        0.26,
        0.38,
        0.3,
        0.36,
        0.28,
        0.42
      ],
      "syncopationRating": 0.58,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "offbeat texture",
        "negative space"
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
      "provenance": "Authored genre-pack pattern based on Dembow; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "dembow texture",
        "offbeat subdivision"
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
      "id": "rg-08-reggaeton-sub-answer",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Reggaeton Sub Answer",
      "family": "Bass",
      "category": "rolePattern",
      "description": "Short sub-bass answer lands around the",
      "tags": [
        "sub-bass",
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

      "approaches": ["walking"],
      "instruments": [
        "sub-bass"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        6,
        10,
        14,
        16,
        22,
        26,
        30
      ],
      "accentProfile": [
        1,
        0.65,
        0.7,
        0.6,
        0.9,
        0.62,
        0.72,
        0.58
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [" syncopation"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Bass; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "sub-bass",
        "syncopation"
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
      "id": "rg-09-reggaeton-piano-stab",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Reggaetón piano offbeat stab",
      "family": "Harmony",
      "category": "cell",
      "description": "Short piano/synth anticipations that leave the",
      "tags": [
        "stabs",
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
        0.55,
        0.72,
        0.58,
        0.8
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [" offbeat"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Harmony; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "stabs",
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
      "id": "rg-10-perreo-shaker-layer",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Perreo shaker displacement",
      "family": "Percussion",
      "category": "ostinato",
      "description": "Straight eighth-note shaker pulse kept quiet",
      "tags": [
        "shaker",
        "density control"
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
        "shaker"
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
        0.38,
        0.5,
        0.4,
        0.52,
        0.4,
        0.48,
        0.38,
        0.5
      ],
      "syncopationRating": 1,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [" density control"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "chorus",
        "solo"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Percussion; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "shaker",
        "density control"
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
      "id": "rg-11-dembow-vocal-pickup",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Dembow Vocal Pickup",
      "family": "synth",
      "category": "phrasePattern",
      "description": "Short pickup into the next bar,",
      "tags": [
        "pickup",
        "vocal pocket"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
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
        13,
        14,
        15
      ],
      "accentProfile": [
        0.5,
        0.7,
        0.9
      ],
      "syncopationRating": 1,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [" vocal pocket"],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Voice; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "pickup",
        "vocal pocket"
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
      "id": "rg-12-reggaeton-hook-lift",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Reggaeton Hook Dembow Lift",
      "family": "Dembow",
      "category": "sectionPattern",
      "description": "Two-bar chorus variation: the core dembow",
      "tags": [
        "hook lift",
        "dembow",
        "chorus"
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
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        8,
        11,
        12,
        14,
        16,
        19,
        20,
        22,
        24,
        27,
        28,
        30
      ],
      "hitGrid": [
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "kick",
        "snare",
        "clap",
        "kick"
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
        0.92,
        0.7,
        0.9,
        0.68,
        0.86,
        0.94
      ],
      "syncopationRating": 0.54,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": ["accent"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern rebuilt as a single-track dembow performance cell; no mixed-layer recipe.",
      "authenticityTags": [
        "dembow",
        "chorus variation",
        "clap punctuation"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "rg-13-dembow-break-silence",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Dembow Break / Re-entry",
      "family": "Breaks",
      "category": "break",
      "transitionType": "fill",
      "description": "A sparse dembow break that keeps",
      "tags": [
        "dropout",
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
        3,
        8,
        11,
        14
      ],
      "hitGrid": [
        "kick",
        "snare",
        "kick",
        "snare",
        "clap"
      ],
      "accentProfile": [
        1,
        0.72,
        0.92,
        0.68,
        0.82
      ],
      "syncopationRating": 0.49,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": ["accent"],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start",
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "bridge"
      ],



      "variants": [],
      "provenance": "Authored genre-pack pattern based on Breaks; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "dropout",
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
      "id": "rg-14-modern-dembow-triplet-fill",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Modern Dembow Phrase-End Turn",
      "family": "Fill",
      "category": "fill",
      "transitionType": "fill",
      "description": "A short 16th-note phrase-end turn that",
      "tags": [
        "fill",
        "phrase end",
        "16th subdivision"
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
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        12,
        14,
        15
      ],
      "hitGrid": [
        "snare",
        "clap",
        "kick"
      ],
      "accentProfile": [
        0.58,
        0.76,
        0.96
      ],
      "syncopationRating": 0.72,
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
      "provenance": "Authored genre-pack pattern based on Fill; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "phrase-end fill",
        "16th subdivision"
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
      "id": "rg-15-reggaeton-tag-turn",
      "worldId": "reggaeton-dembow",
      "styleIds": ["reggaeton-modern"],
      "name": "Dembow tag turnaround",
      "family": "Cadence",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Four-hit turnaround into the next loop",
      "tags": [
        "tag",
        "transition"
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
        "drums",
        "claves"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        11,
        13,
        14,
        15
      ],
      "hitGrid": [
        "snare",
        "clap",
        "snare",
        "clap"
      ],
      "accentProfile": [
        0.75,
        1,
        0.75,
        1
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [" transition"],
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
        "transition"
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
  "signatureCell": "Dembow kick/snare conversation with a syncopated sub-bass answer",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 5
  },
  "crossLinks": [
    "Reggaetón ↔ Dancehall / Afrobeats",
    "Reggaetón ↔ Salsa / Bachata"
  ],
};
