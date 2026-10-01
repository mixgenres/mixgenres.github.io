import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "flamenco-solea-style",
        "worldId": "flamenco",
        "name": "Soleá",
        "origin": "Andalusia (Seville, Cádiz, Jerez)",
        "era": "Mid-19th century–present",
        "description": "Deep • 12-beat • Phrygian\nThe foundation of the soleá compás and its Andalusian cadence.",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "cajon",
          "hand-percussion"
        ],
        "preferredMeters": [
          "12/8",
          "3/4"
        ],
        "tempoRange": [
          70,
          95
        ],
        "keySubstyles": [
          "Soleá de Triana",
          "Soleá de Alcalá",
          "Soleá de Cádiz"
        ],
        "coreConcepts": [
          "12-beat compás",
          "falseta",
          "llamada",
          "letra",
          "cierre",
          "remate",
          "palmas sordas"
        ],
        "rhythmicGrammar": [
          "compás accents on: [12] 1 2 [3] 4 5 [6] 7 [8] 9 [10] 11"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "12-beat compás accented on [12, 3, 6, 8, 10] with Andalusian cadence",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "salida": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "llamada": [
            "C",
            "F",
            "G",
            "E"
          ],
          "letra": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "falseta": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "remate": [
            "C",
            "F",
            "G",
            "E"
          ],
          "cierre": [
            "E",
            "E",
            "E",
            "E"
          ]
        }
      };


const STYLE_1: GenreStyleDefinition = {
        "id": "flamenco-buleria-style",
        "worldId": "flamenco",
        "name": "Bulerías",
        "origin": "Jerez de la Frontera & Triana",
        "era": "Late 19th century–present",
        "description": "Fast • 12-beat • Contratiempo\nPlayful, explosive compás with rapid palmas and remates.",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "cajon",
          "hand-percussion"
        ],
        "preferredMeters": [
          "12/8",
          "6/8",
          "3/4"
        ],
        "tempoRange": [
          180,
          240
        ],
        "keySubstyles": [
          "Bulería al Golpe",
          "Bulería Festera",
          "Bulería por Soleá"
        ],
        "coreConcepts": [
          "remate",
          "jaleo",
          "alzapúa",
          "rasgueado",
          "contratiempo",
          "cajón syncopation"
        ],
        "rhythmicGrammar": [
          "accents on [12] . . [3] . . [6] . [7] [8] . [10] ."
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "Blazing 12-beat compás with contratiempo palmas and alzapúa thumb engine",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 1,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "salida": [
            "Bb",
            "F",
            "Bb",
            "A"
          ],
          "letra": [
            "Dm",
            "C",
            "Bb",
            "A"
          ],
          "escobilla": [
            "Dm",
            "C",
            "Bb",
            "A"
          ],
          "jaleo": [
            "Gm",
            "A",
            "Gm",
            "A"
          ],
          "remate": [
            "Gm",
            "A",
            "Gm",
            "A"
          ],
          "cierre": [
            "A",
            "A",
            "A",
            "A"
          ]
        }
      };


const STYLE_2: GenreStyleDefinition = {
        "id": "flamenco-alegrias-style",
        "worldId": "flamenco",
        "name": "Alegrías",
        "origin": "Cádiz, western Andalusia",
        "era": "Mid-19th century–present",
        "description": "Bright • 12-beat • Major\nCadiz sparkle, clean guitar compás and festive escobilla.",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "cajon",
          "hand-percussion"
        ],
        "preferredMeters": [
          "12/8",
          "6/8",
          "3/4"
        ],
        "tempoRange": [
          120,
          160
        ],
        "keySubstyles": [
          "Alegrías de Cádiz",
          "Romeras",
          "Caracoles"
        ],
        "coreConcepts": [
          "cantiñas",
          "silencio",
          "escobilla",
          "subida",
          "tirititrán"
        ],
        "rhythmicGrammar": [
          "12-beat cantiñas grouping 3+3+2+2+2",
          "bright palmas and dance remates"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "12-beat cantiñas compás with major-key brightness and clear dance punctuation.",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "salida": [
            "C",
            "F",
            "G7",
            "C"
          ],
          "letra": [
            "C",
            "G7",
            "C",
            "F"
          ],
          "silencio": [
            "C",
            "F",
            "G7",
            "C"
          ],
          "escobilla": [
            "C",
            "F",
            "G7",
            "C"
          ],
          "canti\u00f1a": [
            "F",
            "G7",
            "C",
            "C"
          ],
          "cierre": [
            "G7",
            "C",
            "G7",
            "C"
          ]
        }
      };


const STYLE_3: GenreStyleDefinition = {
        "id": "flamenco-tangos-style",
        "worldId": "flamenco",
        "name": "Tangos",
        "origin": "Cádiz, Triana, Granada",
        "era": "19th century–present",
        "description": "Grounded • 4-beat • Phrygian\nHeavy pulse, restrained space and a path toward Tangos.",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "cajon",
          "bass"
        ],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          110,
          150
        ],
        "keySubstyles": [
          "Tangos de Triana",
          "Tangos de Cádiz",
          "Tangos de Granada"
        ],
        "coreConcepts": [
          "binary compás",
          "2-3-4 weight",
          "por medio",
          "por arriba",
          "golpe"
        ],
        "rhythmicGrammar": [
          "4/4 with breathing beat 1",
          "accented 2, 3 and 4",
          "contratiempo pickups"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "4/4 flamenco tangos with a breathing downbeat and weighted 2–3–4.",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "salida": [
            "Bb",
            "A",
            "Bb",
            "A"
          ],
          "llamada": [
            "Bb",
            "A",
            "Bb",
            "A"
          ],
          "letra": [
            "Dm",
            "C",
            "Bb",
            "A"
          ],
          "falseta": [
            "F",
            "Bb",
            "A",
            "A"
          ],
          "remate": [
            "F",
            "Bb",
            "A",
            "A"
          ],
          "cierre": [
            "A",
            "A",
            "A",
            "A"
          ]
        }
      };


const STYLE_4: GenreStyleDefinition = {
        "id": "flamenco-seguiriya-style",
        "worldId": "flamenco",
        "name": "Seguiriya",
        "origin": "Andalusia",
        "era": "Early 19th century–present",
        "description": "Dark • Asymmetric • Cante jondo\nRaw, elastic phrasing with severe remates and dramatic space.",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "hand-percussion",
          "drums"
        ],
        "preferredMeters": [
          "12/8",
          "6/8"
        ],
        "tempoRange": [
          90,
          140
        ],
        "keySubstyles": [
          "Seguiriya",
          "Cabales",
          "Liviana"
        ],
        "coreConcepts": [
          "quejío",
          "jondo",
          "2+2+3+3+2",
          "corte",
          "remate"
        ],
        "rhythmicGrammar": [
          "2+2+3+3+2 grouping",
          "space around the cante",
          "elastic internal phrasing"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "2+2+3+3+2 asymmetry rather than the standard Soleá-family accent map.",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "salida": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "llamada": [
            "F",
            "E",
            "Am",
            "E"
          ],
          "letra": [
            "Am",
            "Dm",
            "E",
            "Am"
          ],
          "falseta": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "remate": [
            "F",
            "E",
            "Am",
            "E"
          ],
          "cierre": [
            "F",
            "E",
            "E",
            "E"
          ]
        }
      };


const STYLE_5: GenreStyleDefinition = {
        "id": "flamenco-tientos-style",
        "worldId": "flamenco",
        "name": "Tientos",
        "origin": "Andalusia",
        "era": "19th century–present",
        "description": "Slow • 4-beat • Modal\nTangos stretched into a deliberate, weighty compás.",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "cajon",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          50,
          90
        ],
        "keySubstyles": [
          "Tientos",
          "Tientos por Tangos"
        ],
        "coreConcepts": [
          "slow binary",
          "jondo",
          "subida",
          "tangos ending"
        ],
        "rhythmicGrammar": [
          "slow 4-beat compás",
          "space and weight",
          "controlled acceleration"
        ],
        "danceTags": [
          "listening",
          "social-partner"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "Slow binary compás with heavy space and a path toward Tangos.",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "salida": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "llamada": [
            "Dm",
            "G",
            "C",
            "E"
          ],
          "letra": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "falseta": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "remate": [
            "Dm",
            "G",
            "C",
            "E"
          ],
          "cierre": [
            "Am",
            "E",
            "Am",
            "E"
          ]
        }
      };


const STYLE_6: GenreStyleDefinition = {
        "id": "flamenco-fandango-style",
        "worldId": "flamenco",
        "name": "Fandangos",
        "origin": "Huelva, Andalusia",
        "era": "18th century–present",
        "description": "Folk-rooted • 3-beat • Expressive\nCoplas, melody",
        "characteristicInstruments": [
          "spanish-guitar",
          "flute",
          "palmas",
          "hand-percussion",
          "drums"
        ],
        "preferredMeters": [
          "3/4",
          "6/8"
        ],
        "tempoRange": [
          130,
          150
        ],
        "keySubstyles": [
          "Fandangos de Huelva",
          "Fandangos personales"
        ],
        "coreConcepts": [
          "four 3-beat phrases",
          "copla",
          "modal opening",
          "major/minor turn"
        ],
        "rhythmicGrammar": [
          "3/4 ternary cycle",
          "four-phrase copla architecture"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Four 3/4 phrases with modal opening and major/minor melodic turns.",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "salida": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "llamada": [
            "C",
            "G",
            "Am",
            "E"
          ],
          "letra": [
            "Am",
            "Dm",
            "E",
            "Am"
          ],
          "falseta": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "remate": [
            "C",
            "G",
            "Am",
            "E"
          ],
          "cierre": [
            "E",
            "E",
            "Am",
            "Am"
          ]
        }
      };


const STYLE_7: GenreStyleDefinition = {
        "id": "flamenco-rumba",
        "worldId": "flamenco",
        "name": "Rumba",
        "origin": "Catalonia, Andalusia & Caribbean crossover",
        "era": "1950s–present",
        "description": "Driving • 4-beat • Crossover\nFlamenco guitar",
        "characteristicInstruments": [
          "spanish-guitar",
          "cajon",
          "palmas",
          "bass",
          "flute"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          100,
          135
        ],
        "keySubstyles": [
          "Rumba Gitana",
          "Rumba Catalana"
        ],
        "coreConcepts": [
          "abanico fan strum",
          "golpe on beat 2 & 4",
          "cajón slap",
          "rumba bass movement"
        ],
        "rhythmicGrammar": [
          "abanico [down-thumb-up-down-golpe]"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Abanico continuous fan strum with body golpe and lively cajón slap",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "salida": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "llamada": [
            "F",
            "E7",
            "Am",
            "E7"
          ],
          "letra": [
            "Am",
            "Dm",
            "G",
            "C"
          ],
          "falseta": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "remate": [
            "F",
            "E7",
            "Am",
            "E7"
          ],
          "cierre": [
            "E",
            "E",
            "Am",
            "Am"
          ]
        }
      };


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "flamenco-solea-por-medio",
  "worldId": "flamenco",
  "name": "Soleá por Medio",
  "origin": "Andalusia / Spain",
  "era": "1900s–Present",
  "description": "Soleá guitar vocabulary centered on A-rooted harmonic color and 12-beat compás.",
  "characteristicInstruments": [
    "spanish-guitar",
    "palmas",
    "cajon",
    "voice"
  ],
  "preferredMeters": [
    "12/8"
  ],
  "tempoRange": [
    70,
    100
  ],
  "keySubstyles": [
    "Soleá por Medio"
  ],
  "coreConcepts": [
    "12-beat compás",
    "rasgueado",
    "falseta",
    "llamada",
    "remate"
  ],
  "rhythmicGrammar": [
    "12-beat soleá compás with rasgueado"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "12-beat soleá compás with rasgueado",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "G",
    "F",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "G",
      "F",
      "E7"
    ],
    "verse": [
      "Am",
      "Dm",
      "G",
      "C"
    ],
    "solo": [
      "Am",
      "Bb",
      "E7",
      "Am"
    ],
    "chorus": [
      "Dm",
      "C",
      "Bb",
      "A7"
    ],
    "coda": [
      "E7",
      "Am",
      "E7",
      "Am"
    ]
  },
  "referenceArtists": [
    "Paco de Lucía",
    "Camarón"
  ],
  "referenceTracks": [],
  "techniques": [
    "falseta",
    "llamada",
    "rasgueado",
    "remate",
    "12-beat compás"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "flamenco-flamenco-fusion",
  "worldId": "flamenco",
  "name": "Flamenco Fusion",
  "origin": "Andalusia / Global",
  "era": "1970s–Present",
  "description": "Flamenco compás expanded through jazz harmony, Latin percussion, bass and ensemble arranging.",
  "characteristicInstruments": [
    "spanish-guitar",
    "electric-guitar",
    "bass",
    "bongos",
    "cajon",
    "palmas"
  ],
  "preferredMeters": [
    "4/4",
    "12/8"
  ],
  "tempoRange": [
    90,
    125
  ],
  "keySubstyles": [
    "Flamenco Fusion"
  ],
  "coreConcepts": [
    "jazz harmony",
    "Latin percussion",
    "flamenco compás",
    "guitar counterpoint"
  ],
  "rhythmicGrammar": [
    "Flamenco guitar over Latin/jazz ensemble"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Flamenco guitar over Latin/jazz ensemble",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "G",
    "F",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am9",
      "Dm7",
      "G7",
      "Cmaj7"
    ],
    "verse": [
      "Am7",
      "Fmaj7",
      "Dm7",
      "E7alt"
    ],
    "solo": [
      "Dm9",
      "G7",
      "Cmaj7",
      "A7alt"
    ],
    "chorus": [
      "Fmaj7",
      "E7",
      "Am7",
      "D7"
    ],
    "coda": [
      "Am",
      "Fmaj7",
      "E7",
      "Am"
    ]
  },
  "referenceArtists": [
    "Paco de Lucía",
    "Ketama"
  ],
  "referenceTracks": [
    "Entre Dos Aguas"
  ],
  "techniques": [
    "12-beat compás"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "flamenco-nuevo-flamenco",
  "worldId": "flamenco",
  "name": "Nuevo Flamenco",
  "origin": "Spain",
  "era": "1980s–Present",
  "description": "Modern flamenco guitar writing with expanded harmony, atmospheric textures and longer development.",
  "characteristicInstruments": [
    "spanish-guitar",
    "cajon",
    "bass",
    "strings",
    "flute",
    "palmas"
  ],
  "preferredMeters": [
    "4/4",
    "12/8"
  ],
  "tempoRange": [
    80,
    125
  ],
  "keySubstyles": [
    "Nuevo Flamenco"
  ],
  "coreConcepts": [
    "virtuosic falseta",
    "expanded harmony",
    "atmospheric texture"
  ],
  "rhythmicGrammar": [
    "Extended falseta over expanded harmony"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Extended falseta over expanded harmony",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "G",
    "F",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Dm7",
      "F#dim7",
      "E7b9"
    ],
    "verse": [
      "Am7",
      "Cmaj7",
      "Fmaj7#11",
      "E7alt"
    ],
    "solo": [
      "Dm9",
      "G7b9",
      "Cmaj7#11",
      "A7alt"
    ],
    "chorus": [
      "Fmaj7",
      "Em7",
      "Dm9",
      "E7b9"
    ],
    "coda": [
      "Am",
      "Bb7",
      "E7b9",
      "Am"
    ]
  },
  "referenceArtists": [
    "Vicente Amigo",
    "Tomatito"
  ],
  "referenceTracks": [],
  "techniques": [
    "falseta"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "flamenco-cante-jondo",
  "worldId": "flamenco",
  "name": "Cante Jondo",
  "origin": "Andalusia / Spain",
  "era": "1900s–Present",
  "description": "Voice-centered flamenco with ornamented lines, melisma, dramatic pauses and flexible delivery.",
  "characteristicInstruments": [
    "voice",
    "spanish-guitar",
    "palmas",
    "cajon"
  ],
  "preferredMeters": [
    "12/8",
    "4/4"
  ],
  "tempoRange": [
    60,
    110
  ],
  "keySubstyles": [
    "Cante Jondo"
  ],
  "coreConcepts": [
    "melisma",
    "rubato entrance",
    "dramatic pause",
    "jaleo"
  ],
  "rhythmicGrammar": [
    "Ornamented cante over flexible compás"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Ornamented cante over flexible compás",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "prominentChords": [
    "Am",
    "G",
    "F",
    "E7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "G",
      "F",
      "E7"
    ],
    "verse": [
      "Am",
      "Dm",
      "E",
      "Am"
    ],
    "solo": [
      "F",
      "E",
      "Am",
      "E7"
    ],
    "chorus": [
      "Dm",
      "C",
      "Bb",
      "A7"
    ],
    "coda": [
      "E7",
      "Am",
      "E7",
      "Am"
    ]
  },
  "referenceArtists": [
    "Camarón",
    "Enrique Morente"
  ],
  "referenceTracks": [],
  "techniques": [
    "dramatic pause",
    "rubato entrance",
    "jaleo",
    "melisma",
    "12-beat compás"
  ]
};

export const FLAMENCO_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3] };
