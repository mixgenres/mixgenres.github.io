import type { GenreWorld } from '../../schema';

/** Standalone authored definition for Brazilian. */
export const BRAZILIAN_WORLD: GenreWorld = {
  "id": "brazilian",
  "name": "Brazilian",
  "family": "Brazilian",
  "color": "#3f8f7a",
  "level": "world",
  "description": "Samba and bossa nova share ancestry",
  "substyles": [
    "Bossa Nova",
    "Samba de Enredo",
    "Pagode",
    "Samba-Reggae"
  ],
  "artists": [
    "Antônio Carlos Jobim",
    "João Gilberto",
    "Cartola",
    "Jamelão",
    "Fundo de Quintal",
    "Zeca Pagodinho",
    "Olodum",
    "Ilê Aiyê"
  ],
  "concepts": [
    "surdo",
    "pandeiro",
    "cavaquinho",
    "samba bass",
    "bossa guitar",
    "syncopated jazz harmony"
  ],
  "crossLinks": [
    "Samba ↔ Funk / Latin",
    "Bossa ↔ Jazz"
  ],
  "roles": {
    "percussion": [
      "surdo/pandeiro interlock"
    ],
    "harmony": [
      "cavaquinho comp",
      "bossa guitar"
    ],
    "bass": [
      "syncopated samba/bossa bass"
    ],
    "synth": [
      "intimate phrasing"
    ]
  },
  "tuningSystem": "12-tet",
  "signatureCell": "Brazilian 2/4 samba interlock or quiet bossa guitar/bass independence",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 7
  },
  "styleDefinitions": [
    {
      "id": "brazilian-bossa-nova",
      "worldId": "brazilian",
      "name": "Bossa Nova",
      "origin": "Rio de Janeiro (Ipanema / Copacabana)",
      "era": "Late 1950s–1960s",
      "description": "Nylon-string guitar and intimate vocals.",
      "characteristicInstruments": [
        "acoustic-guitar",
        "piano",
        "flute",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        120,
        145
      ],
      "keySubstyles": [
        "Classic Bossa",
        "Bossa-Jazz"
      ],
      "coreConcepts": [
        "João Gilberto violão syncopated thumb bass and finger comping",
        "extended jazz harmonies (maj7, m7b5, 9, 13)",
        "whispered understated vocal delivery",
        "brush pattern on snare simulating surdo and shaker"
      ],
      "rhythmicGrammar": [
        "bossa nova guitar comping with thumb anchoring alternating bass on downbeats and fingers syncopating chords on offbeats"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "João Gilberto nylon guitar syncopation accompanying understated vocal whisper and brush snare",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "G7",
          "Gm7",
          "C7b9"
        ],
        "parte-a": [
          "Fmaj7",
          "G7",
          "Gm7",
          "C7b9",
          "Fmaj7",
          "G7",
          "Gm7",
          "C7b9"
        ],
        "parte-b": [
          "Gbmaj7",
          "B7",
          "F#m7",
          "B7",
          "Gm7",
          "C7",
          "Fmaj7",
          "C7b9"
        ],
        "coda": [
          "Gbmaj7",
          "C7b9",
          "Fmaj7",
          "Fmaj7"
        ]
      }
    },
    {
      "id": "brazilian-samba-de-enredo",
      "worldId": "brazilian",
      "name": "Samba de Enredo",
      "origin": "Rio de Janeiro (Sambadrome / Escolas de Samba)",
      "era": "1930s–Present",
      "description": "Bateria • Surdo Accent • Carnival",
      "characteristicInstruments": [
        "surdo",
        "tamborim",
        "cavaquinho",
        "cuica",
        "brass"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        136,
        150
      ],
      "keySubstyles": [
        "Carnival Samba",
        "Escola de Samba"
      ],
      "coreConcepts": [
        "thunderous surdo drum dialogue (surdo de primeira on beat 2, surdo de resposta on beat 1)",
        "sharp syncopated tamborim teleco-teco phrasing",
        "brisk cavaquinho chord strumming",
        "massive unison choral singing"
      ],
      "rhythmicGrammar": [
        "fast 2/4 samba swing with heavy accent on beat 2 and continuous caixa snare roll"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Thunderous surdo beat 2 explosion answering rapid tamborim teleco-teco pattern and cavaquinho",
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
        "enredo": [
          "C",
          "A7",
          "Dm",
          "G7",
          "C",
          "C7",
          "F",
          "G7"
        ],
        "chorus": [
          "C",
          "E7",
          "Am",
          "D7",
          "G7",
          "G7",
          "C",
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
      "id": "brazilian-pagode",
      "worldId": "brazilian",
      "name": "Pagode",
      "origin": "Rio de Janeiro (Fundo de Quintal)",
      "era": "Late 1970s–Present",
      "description": "Tantan • Pandeiro • Backyard Party\nWarm,",
      "characteristicInstruments": [
        "cavaquinho",
        "pandeiro",
        "tantan",
        "repinique",
        "synth"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        90,
        115
      ],
      "keySubstyles": [
        "Pagode Tradicional",
        "Pagode Romântico"
      ],
      "coreConcepts": [
        "tantan hand bass drum playing the surdo role in acoustic settings",
        "samba banjo with four strings replacing or doubling cavaquinho",
        "communal round-the-table singing (roda de samba)",
        "humorous everyday storytelling"
      ],
      "rhythmicGrammar": [
        "relaxed 2/4 acoustic swing with tantan hand slaps and sparkling pandeiro jingles"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tantan hand bass slap answering cheerful cavaquinho intro and communal roda singalong",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "E7",
          "Am7",
          "D7"
        ],
        "verse": [
          "G",
          "E7",
          "Am7",
          "D7",
          "Bm7",
          "E7",
          "Am7",
          "D7"
        ],
        "refrão": [
          "C",
          "D7",
          "Bm7",
          "E7",
          "Am7",
          "D7",
          "G",
          "G"
        ],
        "coda": [
          "Am7",
          "D7",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "brazilian-samba-reggae",
      "worldId": "brazilian",
      "name": "Samba-Reggae",
      "origin": "Salvador da Bahia (Pelourinho / Olodum)",
      "era": "1980s–Present",
      "description": "Afro-Bahian percussion and a relaxed, swinging groove.",
      "characteristicInstruments": [
        "surdo",
        "timbales",
        "repinique",
        "brass",
        "synth"
      ],
      "preferredMeters": [
        "4/4",
        "2/4"
      ],
      "tempoRange": [
        92,
        108
      ],
      "keySubstyles": [
        "Bahian Carnival Bloc",
        "Axé Fusion"
      ],
      "coreConcepts": [
        "slowed-down reggae-infused tempo combined with Brazilian polyrhythms",
        "tuned surdo drum sections playing intricate melodic counterpoint",
        "blazing timbal hand drumming and repinique rolls",
        "Afro-Brazilian civil rights themes"
      ],
      "rhythmicGrammar": [
        "reggae offbeat accentuation fused with four tuned surdo drums in complex polyrhythm"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Tuned surdo drum battery melodic roll exploding with blazing timbal slap and Afro-Bahian chant",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "bloco": [
          "Am",
          "G",
          "F",
          "E7",
          "Am",
          "G",
          "F",
          "E7"
        ],
        "chorus": [
          "C",
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
          "E7",
          "Am",
          "Am"
        ]
      }
    }
  ,
    {
    "id": "brazilian-choro-brazilian-chamber-groove",
    "worldId": "brazilian",
    "name": "Choro / Brazilian Chamber Groove",
    "origin": "Brazil",
    "era": "1900s–Present",
    "description": "Virtuosic melodic counterpoint over pandeiro and cavaquinho with moving seven-string bass.",
    "characteristicInstruments": [
        "cavaquinho",
        "acoustic-guitar",
        "pandeiro",
        "mandolin",
        "upright-bass",
        "flute"
    ],
    "preferredMeters": [
        "2/4",
        "4/4"
    ],
    "tempoRange": [
        90,
        150
    ],
    "keySubstyles": [
        "Choro / Brazilian Chamber Groove"
    ],
    "coreConcepts": [
        "choro counterpoint",
        "7-string baixaria",
        "pandeiro subdivision"
    ],
    "rhythmicGrammar": [
        "Choro counterpoint over syncopated pandeiro"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Choro counterpoint over syncopated pandeiro",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Dm7",
        "G7",
        "Cmaj7",
        "A7"
    ],
    "sectionProgressions": {
        "intro": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "verse": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "bridge": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "solo": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "coda": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ]
    },
    "referenceArtists": [
        "Pixinguinha",
        "Jacob do Bandolim"
    ],
    "referenceTracks": [
        "Carinhoso"
    ],
    "techniques": [
        "choro counterpoint",
        "pandeiro subdivision",
        "7-string baixaria",
        "Brazilian guitar syncopation"
    ]
},
{
    "id": "brazilian-baiao-northeastern-brazilian",
    "worldId": "brazilian",
    "name": "Baião / Northeastern Brazilian",
    "origin": "Northeast Brazil",
    "era": "1940s–Present",
    "description": "Accordion, zabumba and triangle establish the characteristic Northeastern pulse and syncopation.",
    "characteristicInstruments": [
        "accordion",
        "zabumba",
        "triangle",
        "acoustic-guitar",
        "bass",
        "voice"
    ],
    "preferredMeters": [
        "2/4",
        "4/4"
    ],
    "tempoRange": [
        90,
        130
    ],
    "keySubstyles": [
        "Baião / Northeastern Brazilian"
    ],
    "coreConcepts": [
        "zabumba bass/stroke",
        "triangle 16ths",
        "6/8 ambiguity"
    ],
    "rhythmicGrammar": [
        "Zabumba pulse with triangle subdivision"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Zabumba pulse with triangle subdivision",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Dm7",
        "G7",
        "Cmaj7",
        "A7"
    ],
    "sectionProgressions": {
        "intro": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "verse": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "bridge": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "solo": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "coda": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ]
    },
    "referenceArtists": [
        "Luiz Gonzaga"
    ],
    "referenceTracks": [
        "Asa Branca"
    ],
    "techniques": [
        "triangle 16ths",
        "zabumba bass/stroke relationship",
        "baião 6/8 ambiguity",
        "Brazilian guitar syncopation",
        "pandeiro subdivision"
    ]
},
{
    "id": "brazilian-forro",
    "worldId": "brazilian",
    "name": "Forró",
    "origin": "Northeast Brazil",
    "era": "1940s–Present",
    "description": "Dance-oriented accordion music driven by zabumba, triangle and repetitive melodic hooks.",
    "characteristicInstruments": [
        "accordion",
        "zabumba",
        "triangle",
        "bass",
        "acoustic-guitar",
        "voice"
    ],
    "preferredMeters": [
        "2/4",
        "4/4"
    ],
    "tempoRange": [
        95,
        145
    ],
    "keySubstyles": [
        "Forró"
    ],
    "coreConcepts": [
        "zabumba interaction",
        "triangle subdivision",
        "repetitive accordion hook"
    ],
    "rhythmicGrammar": [
        "Accordion hook over zabumba/triangle groove"
    ],
    "danceTags": [
        "social-partner"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Accordion hook over zabumba/triangle groove",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Dm7",
        "G7",
        "Cmaj7",
        "A7"
    ],
    "sectionProgressions": {
        "intro": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "verse": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "bridge": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "solo": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "coda": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ]
    },
    "referenceArtists": [
        "Dominguinhos",
        "Luiz Gonzaga"
    ],
    "referenceTracks": [],
    "techniques": [
        "pandeiro subdivision",
        "triangle 16ths",
        "zabumba bass/stroke relationship"
    ]
},
{
    "id": "brazilian-tropicalia",
    "worldId": "brazilian",
    "name": "Tropicalia",
    "origin": "Brazil",
    "era": "1960s–1970s",
    "description": "Brazilian rhythmic language fused with rock, psychedelia, orchestral color and studio experimentation.",
    "characteristicInstruments": [
        "electric-guitar",
        "acoustic-guitar",
        "bass",
        "drums",
        "strings",
        "voice"
    ],
    "preferredMeters": [
        "4/4"
    ],
    "tempoRange": [
        80,
        125
    ],
    "keySubstyles": [
        "Tropicalia"
    ],
    "coreConcepts": [
        "psychedelic studio texture",
        "Brazilian guitar syncopation",
        "orchestral color"
    ],
    "rhythmicGrammar": [
        "Brazilian rhythm under psychedelic rock texture"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Brazilian rhythm under psychedelic rock texture",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Dm7",
        "G7",
        "Cmaj7",
        "A7"
    ],
    "sectionProgressions": {
        "intro": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "verse": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "bridge": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "solo": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "coda": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ]
    },
    "referenceArtists": [
        "Caetano Veloso",
        "Gilberto Gil",
        "Os Mutantes"
    ],
    "referenceTracks": [],
    "techniques": [
        "Brazilian guitar syncopation",
        "cavaquinho syncopation",
        "partido-alto rhythm"
    ]
},
{
    "id": "brazilian-mpb",
    "worldId": "brazilian",
    "name": "MPB",
    "origin": "Brazil",
    "era": "1960s–Present",
    "description": "Song-centered Brazilian writing combining samba, bossa, jazz harmony and flexible arrangements.",
    "characteristicInstruments": [
        "acoustic-guitar",
        "piano",
        "bass",
        "drums",
        "flute",
        "voice"
    ],
    "preferredMeters": [
        "4/4",
        "3/4"
    ],
    "tempoRange": [
        70,
        120
    ],
    "keySubstyles": [
        "MPB"
    ],
    "coreConcepts": [
        "extended harmony",
        "Brazilian guitar syncopation",
        "flexible vocal phrasing"
    ],
    "rhythmicGrammar": [
        "Syncopated Brazilian guitar with extended harmony"
    ],
    "danceTags": [
        "listening"
    ],
    "tuningSystem": "12-tet",
    "signatureCell": "Syncopated Brazilian guitar with extended harmony",
    "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "straight"
    },
    "prominentChords": [
        "Dm7",
        "G7",
        "Cmaj7",
        "A7"
    ],
    "sectionProgressions": {
        "intro": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "verse": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "bridge": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "solo": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ],
        "coda": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7"
        ]
    },
    "referenceArtists": [
        "Milton Nascimento",
        "Elis Regina",
        "Chico Buarque"
    ],
    "referenceTracks": [],
    "techniques": [
        "Brazilian guitar syncopation",
        "cavaquinho syncopation"
    ]
}],
  "patterns": [
    {
      "id": "brazilian--sb-surdo-foundation",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Surdo Two-Beat Foundation",
      "family": "Samba Low Drums",
      "category": "groove",
      "description": "Low/high surdo cycle with complementary accents",
      "tags": [
        "samba",
        "surdo",
        "2/4"
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
        "surdo",
        "drums"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        4,
        6
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
      "syncopationRating": 0.45,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "low-drum"
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
          "id": "brazilian--sb-surdo-foundation-v-sparse",
          "parentPatternId": "brazilian--sb-surdo-foundation",
          "name": "Surdo Two-Beat Foundation — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
          "onsetGrid": [
            0,
            6
          ],
          "accentProfile": [
            0.9,
            0.65
          ]
        },
        {
          "id": "brazilian--sb-surdo-foundation-v-shift",
          "parentPatternId": "brazilian--sb-surdo-foundation",
          "name": "Surdo Two-Beat Foundation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
          "onsetGrid": [
            0,
            4,
            6
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
        "samba",
        "surdo",
        "2/4"
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
      "id": "brazilian--sb-pandeiro",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Pandeiro Syncopation",
      "family": "Samba Hand Percussion",
      "category": "groove",
      "description": "Alternating thumb and finger attacks create a syncopated accompaniment pattern.",
      "tags": [
        "pandeiro",
        "samba",
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
        "percussion"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "pandeiro",
        "shaker"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        6,
        7
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
        "hand-percussion"
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
          "id": "brazilian--sb-pandeiro-v-sparse",
          "parentPatternId": "brazilian--sb-pandeiro",
          "name": "Pandeiro Syncopation — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
          "onsetGrid": [
            0,
            3,
            6
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "brazilian--sb-pandeiro-v-shift",
          "parentPatternId": "brazilian--sb-pandeiro",
          "name": "Pandeiro Syncopation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            7
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
        "pandeiro",
        "samba",
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
      "id": "brazilian--sb-cavaquinho",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Cavaquinho Comp",
      "family": "Cavaquinho Chords",
      "category": "ostinato",
      "description": "Short syncopated chord attacks that interlock",
      "tags": [
        "cavaquinho",
        "samba",
        "comp"
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
        "cavaquinho",
        "guitar"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        1,
        3,
        5,
        7
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
          "id": "brazilian--sb-cavaquinho-v-sparse",
          "parentPatternId": "brazilian--sb-cavaquinho",
          "name": "Cavaquinho Comp — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
          "onsetGrid": [
            1,
            5
          ],
          "accentProfile": [
            0.9,
            0.65
          ]
        },
        {
          "id": "brazilian--sb-cavaquinho-v-shift",
          "parentPatternId": "brazilian--sb-cavaquinho",
          "name": "Cavaquinho Comp — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
          "onsetGrid": [
            1,
            3,
            5,
            7
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
        "cavaquinho",
        "samba",
        "comp"
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
      "id": "brazilian--sb-bossa-guitar",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Bossa nova guitar syncopation",
      "family": "Bossa Guitar",
      "category": "groove",
      "description": "Independent thumb-and-finger guitar syncopation: bass notes",
      "tags": [
        "bossa",
        "guitar",
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
        "harmony"
      ],
      "approaches": [
        "comping"
      ],
      "instruments": [
        "guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
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
      "syncopationRating": 0.86,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "fingerstyle"
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
          "id": "brazilian--sb-bossa-guitar-v-sparse",
          "parentPatternId": "brazilian--sb-bossa-guitar",
          "name": "Bossa Nova Guitar Cell — sparse",
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
          "id": "brazilian--sb-bossa-guitar-v-shift",
          "parentPatternId": "brazilian--sb-bossa-guitar",
          "name": "Bossa Nova Guitar Cell — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
          "onsetGrid": [
            0,
            2,
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
        "bossa",
        "guitar",
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
      "id": "brazilian--sb-bossa-bass",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Bossa bass anchor / anticipation",
      "family": "Bossa Bass",
      "category": "ostinato",
      "description": "A root-and-approach bass contour supports the harmonic changes.",
      "tags": [
        "bossa",
        "bass",
        "interlock"
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
        "upright-bass"
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
        15
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
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "fingerstyle"
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
          "id": "brazilian--sb-bossa-bass-v-sparse",
          "parentPatternId": "brazilian--sb-bossa-bass",
          "name": "Bossa Nova Bass — sparse",
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
          "id": "brazilian--sb-bossa-bass-v-shift",
          "parentPatternId": "brazilian--sb-bossa-bass",
          "name": "Bossa Nova Bass — accent shift",
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
        "bossa",
        "bass",
        "interlock"
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
      "id": "brazilian--sb-06-samba-surdo-foundation",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Samba Surdo Foundation",
      "family": "Samba",
      "category": "groove",
      "description": "Low surdo articulates the large pulse",
      "tags": [
        "surdo",
        "samba"
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
        "surdo"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        4
      ],
      "accentProfile": [
        1,
        0.72
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " samba"
      ],
      "supportedEnergy": [
        1,
        2
      ],
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "surdo",
        "samba"
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
      "id": "brazilian--sb-07-samba-pandeiro-interlock",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Samba Pandeiro Interlock",
      "family": "Samba",
      "category": "groove",
      "description": "Pandeiro combines bass slap and high",
      "tags": [
        "pandeiro",
        "interlock"
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
        "pandeiro"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        1,
        2,
        4,
        5,
        6
      ],
      "accentProfile": [
        0.55,
        0.7,
        0.48,
        0.8,
        0.58,
        0.72
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " interlock"
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
      "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "pandeiro",
        "interlock"
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
      "id": "brazilian--sb-08-tamborim-cross-accent",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Tamborim Cross Accent",
      "family": "Samba",
      "category": "ostinato",
      "description": "Bright tamborim pattern with displaced accents;",
      "tags": [
        "tamborim",
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
        "percussion"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "tamborim"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        1,
        2,
        4,
        6,
        7
      ],
      "accentProfile": [
        0.45,
        0.7,
        0.55,
        0.75,
        0.6
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        " accent"
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
        "chorus",
        "solo"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "tamborim",
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
      "id": "brazilian--sb-09-cavaquinho-partido",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Cavaquinho Partido",
      "family": "Samba",
      "category": "cell",
      "description": "Short chord strokes outlining the syncopated",
      "tags": [
        "cavaquinho",
        "partido-alto"
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
        "cavaquinho"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        1,
        3,
        5,
        7
      ],
      "accentProfile": [
        0.72,
        0.55,
        0.75,
        0.6
      ],
      "syncopationRating": 1,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        " partido-alto"
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
      "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "cavaquinho",
        "partido-alto"
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
      "id": "brazilian--sb-10-bossa-guitar-clave",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Bossa Guitar Clave",
      "family": "Bossa Nova",
      "category": "ostinato",
      "description": "Quiet syncopated guitar voicing pattern combining",
      "tags": [
        "bossa",
        "guitar rhythm"
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
        "guitar"
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
        0.65,
        0.52,
        0.7,
        0.58,
        0.68,
        0.55
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        " guitar rhythm"
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
      "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bossa",
        "guitar rhythm"
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
      "id": "brazilian--sb-11-bossa-bass-anticipation",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Bossa Bass Anticipation",
      "family": "Bossa Nova",
      "category": "bass",
      "description": "Root/approach notes anticipate the next chord,",
      "tags": [
        "bossa",
        "anticipation"
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
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        10,
        14
      ],
      "accentProfile": [
        0.78,
        0.45,
        0.65,
        0.55
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " anticipation"
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
      "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bossa",
        "anticipation"
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
      "id": "brazilian--sb-12-bossa-piano-voicing",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Bossa piano chord punctuation",
      "family": "Bossa Nova",
      "category": "rolePattern",
      "description": "Sparse chord punctuation for a piano-led",
      "tags": [
        "piano",
        "voicing"
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
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        2,
        6,
        9,
        13
      ],
      "accentProfile": [
        0.55,
        0.62,
        0.5,
        0.66
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " voicing"
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
      "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "piano",
        "voicing"
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
      "id": "brazilian--sb-13-samba-call-response",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Samba Call Response",
      "family": "Samba",
      "category": "interactionPattern",
      "description": "The percussion group answers the vocal or lead phrase.",
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "pandeiro",
        "tamborim"
      ],
      "meter": "2/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        6,
        12,
        14
      ],
      "accentProfile": [
        0.6,
        0.8,
        0.58,
        0.85
      ],
      "syncopationRating": 0.5,
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
        "verse",
        "chorus"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
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
      "id": "brazilian--sb-14-batucada-break",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Batucada Break",
      "family": "Samba",
      "category": "break",
      "transitionType": "fill",
      "description": "A brief reduction to surdo and one supporting percussion part creates space.",
      "tags": [
        "batucada",
        "break"
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
        "surdo",
        "pandeiro",
        "tamborim"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        6
      ],
      "accentProfile": [
        0.9,
        0.7
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " break"
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
      "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "batucada",
        "break"
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
      "id": "brazilian--sb-15-bossa-ending-turn",
      "worldId": "brazilian",
      "styleIds": [],
      "name": "Bossa ending cadence",
      "family": "Bossa Nova",
      "category": "cadence",
      "transitionType": "fill",
      "description": "A short harmonic cadence figure marks the end of a phrase.",
      "tags": [
        "extended harmony",
        "release"
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
        "guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        5,
        9,
        13
      ],
      "accentProfile": [
        0.6,
        0.45,
        0.68,
        0.5
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        " release"
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
        "coda",
        "ending"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "extended harmony",
        "release"
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
      "id": "brazilian--brz-samba-batucada",
      "worldId": "brazilian",
      "name": "Samba Batucada",
      "shortName": "Samba Batucada",
      "family": "brazilian",
      "category": "groove",
      "description": "Syncopated 2/4-derived samba grid with surdo foundation and interlocking caixa/tamborim space.",
      "tags": [
        "samba",
        "batucada",
        "surdo",
        "caixa"
      ],
      "approaches": [
        "samba",
        "batucada",
        "surdo",
        "caixa"
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
        "samba",
        "batucada",
        "surdo",
        "caixa"
      ]
    },
    {
      "id": "brazilian--brz-bossa-violao",
      "worldId": "brazilian",
      "name": "Bossa Violão Syncopation",
      "shortName": "Bossa Violão Syncopation",
      "family": "brazilian",
      "category": "groove",
      "description": "Even-eighth Brazilian guitar comping with anticipations and bass/chord independence.",
      "tags": [
        "bossa",
        "violao",
        "syncopation"
      ],
      "approaches": [
        "bossa",
        "violao",
        "syncopation"
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
        0,
        3,
        6,
        8,
        10,
        13
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
        "bossa",
        "violao",
        "syncopation"
      ]
    },
    {
      "id": "brazilian--brz-choro-maxixe",
      "worldId": "brazilian",
      "name": "Choro Maxixe Pulse",
      "shortName": "Choro Maxixe Pulse",
      "family": "brazilian",
      "category": "groove",
      "description": "Lightly displaced 2/4 accompaniment that leaves room for countermelody and phrase fills.",
      "tags": [
        "choro",
        "maxixe",
        "two-four"
      ],
      "approaches": [
        "choro",
        "maxixe",
        "two-four"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "harmony",
        "rhythm"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        7,
        8,
        10,
        12,
        15
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
        "choro",
        "maxixe",
        "two-four"
      ]
    },
    {
      "id": "brazilian--brz-baiao-zabumba",
      "worldId": "brazilian",
      "name": "Baião Zabumba",
      "shortName": "Baião Zabumba",
      "family": "brazilian",
      "category": "groove",
      "description": "Baião-style pulse with alternating low and high percussion roles.",
      "tags": [
        "baiao",
        "zabumba",
        "forro"
      ],
      "approaches": [
        "baiao",
        "zabumba",
        "forro"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "rhythm",
        "percussion",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        8,
        10,
        13
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
        "baiao",
        "zabumba",
        "forro"
      ]
    }
  ,
  {
  "id": "tech-brazilian-pandeiro-subdivision",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-choro-brazilian-chamber-groove",
    "brazilian-baiao-northeastern-brazilian",
    "brazilian-forro"
  ],
  "name": "pandeiro subdivision",
  "shortName": "pandeiro subdivision",
  "family": "brazilian",
  "category": "groove",
  "description": "Technique: pandeiro subdivision",
  "tags": [
    "brazilian",
    "pandeiro subdivision"
  ],
  "approaches": [
    "pandeiro subdivision"
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
    "brazilian",
    "pandeiro subdivision"
  ],
  "techniques": [
    "pandeiro subdivision"
  ]
},
{
  "id": "tech-brazilian-7-string-baixaria",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-choro-brazilian-chamber-groove"
  ],
  "name": "7-string baixaria",
  "shortName": "7-string baixaria",
  "family": "brazilian",
  "category": "texture",
  "description": "Technique: 7-string baixaria",
  "tags": [
    "brazilian",
    "7-string baixaria"
  ],
  "approaches": [
    "7-string baixaria"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "texture",
    "harmony"
  ],
  "instruments": [
    "strings"
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
    "brazilian",
    "7-string baixaria"
  ],
  "techniques": [
    "7-string baixaria"
  ]
},
{
  "id": "tech-brazilian-cavaquinho-syncopation",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-tropicalia",
    "brazilian-mpb"
  ],
  "name": "cavaquinho syncopation",
  "shortName": "cavaquinho syncopation",
  "family": "brazilian",
  "category": "comping",
  "description": "Technique: cavaquinho syncopation",
  "tags": [
    "brazilian",
    "cavaquinho syncopation"
  ],
  "approaches": [
    "cavaquinho syncopation"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "harmony",
    "rhythm"
  ],
  "instruments": [
    "cavaquinho"
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
    "brazilian",
    "cavaquinho syncopation"
  ],
  "techniques": [
    "cavaquinho syncopation"
  ]
},
{
  "id": "tech-brazilian-choro-counterpoint",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-choro-brazilian-chamber-groove"
  ],
  "name": "choro counterpoint",
  "shortName": "choro counterpoint",
  "family": "brazilian",
  "category": "comping",
  "description": "Technique: choro counterpoint",
  "tags": [
    "brazilian",
    "choro counterpoint"
  ],
  "approaches": [
    "choro counterpoint"
  ],
  "scopes": [
    "song",
    "region",
    "measure"
  ],
  "roles": [
    "harmony",
    "lead"
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
    "brazilian",
    "choro counterpoint"
  ],
  "techniques": [
    "choro counterpoint"
  ]
},
{
  "id": "tech-brazilian-zabumba-bass-stroke-relationship",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-baiao-northeastern-brazilian",
    "brazilian-forro"
  ],
  "name": "zabumba bass/stroke relationship",
  "shortName": "zabumba bass/stroke relationship",
  "family": "brazilian",
  "category": "bass",
  "description": "Technique: zabumba bass/stroke relationship",
  "tags": [
    "brazilian",
    "zabumba bass/stroke relationship"
  ],
  "approaches": [
    "zabumba bass/stroke relationship"
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
    "brazilian",
    "zabumba bass/stroke relationship"
  ],
  "techniques": [
    "zabumba bass/stroke relationship"
  ]
},
{
  "id": "tech-brazilian-triangle-16ths",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-baiao-northeastern-brazilian",
    "brazilian-forro"
  ],
  "name": "triangle 16ths",
  "shortName": "triangle 16ths",
  "family": "brazilian",
  "category": "groove",
  "description": "Technique: triangle 16ths",
  "tags": [
    "brazilian",
    "triangle 16ths"
  ],
  "approaches": [
    "triangle 16ths"
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
    "brazilian",
    "triangle 16ths"
  ],
  "techniques": [
    "triangle 16ths"
  ]
},
{
  "id": "tech-brazilian-baiao-6-8-ambiguity",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-baiao-northeastern-brazilian"
  ],
  "name": "baião 6/8 ambiguity",
  "shortName": "baião 6/8 ambiguity",
  "family": "brazilian",
  "category": "groove",
  "description": "Technique: baião 6/8 ambiguity",
  "tags": [
    "brazilian",
    "baião 6/8 ambiguity"
  ],
  "approaches": [
    "baião 6/8 ambiguity"
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
  "meter": "6/8",
  "cycleLength": 1,
  "subdivisions": 12,
  "onsetGrid": [
    0,
    3,
    6,
    9
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
    "brazilian",
    "baião 6/8 ambiguity"
  ],
  "techniques": [
    "baião 6/8 ambiguity"
  ]
},
{
  "id": "tech-brazilian-partido-alto-rhythm",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-tropicalia"
  ],
  "name": "partido-alto rhythm",
  "shortName": "partido-alto rhythm",
  "family": "brazilian",
  "category": "groove",
  "description": "Technique: partido-alto rhythm",
  "tags": [
    "brazilian",
    "partido-alto rhythm"
  ],
  "approaches": [
    "partido-alto rhythm"
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
    "brazilian",
    "partido-alto rhythm"
  ],
  "techniques": [
    "partido-alto rhythm"
  ]
},
{
  "id": "tech-brazilian-samba-tamborim-phrases",
  "worldId": "brazilian",
  "styleIds": [],
  "name": "samba tamborim phrases",
  "shortName": "samba tamborim phrases",
  "family": "brazilian",
  "category": "groove",
  "description": "Technique: samba tamborim phrases",
  "tags": [
    "brazilian",
    "samba tamborim phrases"
  ],
  "approaches": [
    "samba tamborim phrases"
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
    "brazilian",
    "samba tamborim phrases"
  ],
  "techniques": [
    "samba tamborim phrases"
  ]
},
{
  "id": "tech-brazilian-brazilian-guitar-syncopation",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-choro-brazilian-chamber-groove",
    "brazilian-baiao-northeastern-brazilian",
    "brazilian-tropicalia",
    "brazilian-mpb"
  ],
  "name": "Brazilian guitar syncopation",
  "shortName": "Brazilian guitar syncopation",
  "family": "brazilian",
  "category": "comping",
  "description": "Technique: Brazilian guitar syncopation",
  "tags": [
    "brazilian",
    "Brazilian guitar syncopation"
  ],
  "approaches": [
    "Brazilian guitar syncopation"
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
    "brazilian",
    "Brazilian guitar syncopation"
  ],
  "techniques": [
    "Brazilian guitar syncopation"
  ]
},
{
  "id": "style-brazilian-choro-brazilian-chamber-groove-signature",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-choro-brazilian-chamber-groove"
  ],
  "name": "Choro / Brazilian Chamber Groove Signature Cell",
  "shortName": "Choro / Brazilian Chamber Groove Cell",
  "family": "brazilian",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "brazilian",
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
    "cavaquinho",
    "acoustic-guitar",
    "pandeiro",
    "mandolin"
  ],
  "meter": "2/4",
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
    "brazilian",
    "signature"
  ],
  "techniques": [
    "choro counterpoint",
    "pandeiro subdivision",
    "7-string baixaria",
    "Brazilian guitar syncopation"
  ]
},
{
  "id": "style-brazilian-baiao-northeastern-brazilian-signature",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-baiao-northeastern-brazilian"
  ],
  "name": "Baião / Northeastern Brazilian Signature Cell",
  "shortName": "Baião / Northeastern Brazilian Cell",
  "family": "brazilian",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "brazilian",
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
    "accordion",
    "zabumba",
    "triangle",
    "acoustic-guitar"
  ],
  "meter": "2/4",
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
    "brazilian",
    "signature"
  ],
  "techniques": [
    "triangle 16ths",
    "zabumba bass/stroke relationship",
    "baião 6/8 ambiguity",
    "Brazilian guitar syncopation",
    "pandeiro subdivision"
  ]
},
{
  "id": "style-brazilian-forro-signature",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-forro"
  ],
  "name": "Forró Signature Cell",
  "shortName": "Forró Cell",
  "family": "brazilian",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "brazilian",
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
    "accordion",
    "zabumba",
    "triangle",
    "bass"
  ],
  "meter": "2/4",
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
    "brazilian",
    "signature"
  ],
  "techniques": [
    "pandeiro subdivision",
    "triangle 16ths",
    "zabumba bass/stroke relationship"
  ]
},
{
  "id": "style-brazilian-tropicalia-signature",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-tropicalia"
  ],
  "name": "Tropicalia Signature Cell",
  "shortName": "Tropicalia Cell",
  "family": "brazilian",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "brazilian",
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
    "electric-guitar",
    "acoustic-guitar",
    "bass",
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
    "brazilian",
    "signature"
  ],
  "techniques": [
    "Brazilian guitar syncopation",
    "cavaquinho syncopation",
    "partido-alto rhythm"
  ]
},
{
  "id": "style-brazilian-mpb-signature",
  "worldId": "brazilian",
  "styleIds": [
    "brazilian-mpb"
  ],
  "name": "MPB Signature Cell",
  "shortName": "MPB Cell",
  "family": "brazilian",
  "category": "groove",
  "description": "Style signature groove cue",
  "tags": [
    "brazilian",
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
    "acoustic-guitar",
    "piano",
    "bass",
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
    "brazilian",
    "signature"
  ],
  "techniques": [
    "Brazilian guitar syncopation",
    "cavaquinho syncopation"
  ]
}],
  "kind": "family",
  "strictness": "flexible"
};
