import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "tango-tango-tradicional",
        "worldId": "tango",
        "name": "Tango Tradicional",
        "origin": "Buenos Aires / Montevideo",
        "era": "Golden Age (1935–1955)",
        "description": "Marcato • Bandoneón • Golden Age\nThe",
        "characteristicInstruments": [
          "bandoneon",
          "violin",
          "piano",
          "upright-bass",
          "cello"
        ],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          120,
          136
        ],
        "keySubstyles": [
          "Estilo D'Arienzo",
          "Estilo Di Sarli"
        ],
        "coreConcepts": [
          "Marcato en 4 (accented downbeats 1, 2, 3, 4)",
          "Síncopa and arrastre (bass drag into the downbeat)",
          "bandoneón bellows phrasing",
          "dramatic dynamic stops"
        ],
        "rhythmicGrammar": [
          "Marcato en 4: heavy walking downbeats with sharp percussive chiques on violin"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Arrastre bass drag resolving into sharp Marcato en 4 bandoneon chord and violin staccato",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "tema-a": [
            "Am",
            "Dm",
            "E7",
            "Am",
            "Am",
            "Dm",
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
      };


const STYLE_1: GenreStyleDefinition = {
  "id": "tango-tango-nuevo",
  "worldId": "tango",
  "name": "Tango Nuevo",
  "origin": "Buenos Aires / Paris",
  "era": "1960s–1990s",
  "description": "Nuevo tango combining classical counterpoint, jazz harmony, ostinati and chromatic bass.",
  "characteristicInstruments": [
    "bandoneon",
    "violin",
    "electric-guitar",
    "piano",
    "upright-bass"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    110,
    140
  ],
  "keySubstyles": [
    "Piazzolla Style",
    "Concert Tango"
  ],
  "coreConcepts": [
    "classical counterpoint",
    "jazz harmony",
    "chromatic bass",
    "rhythmic ostinato"
  ],
  "rhythmicGrammar": [
    "aggressive tango cells with displaced accents and persistent ostinato"
  ],
  "danceTags": [
    "listening",
    "tango-compatible"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Bandoneon ostinato over chromatic tango bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed"
  },
  "sectionProgressions": {
    "intro": [
      "Am7",
      "Dm7",
      "F#dim",
      "E7b9"
    ],
    "theme": [
      "Am7",
      "Dm7",
      "G7",
      "Cmaj7",
      "Fmaj7",
      "Bm7b5",
      "E7b9",
      "Am7"
    ],
    "coda": [
      "F#dim",
      "E7b9",
      "Am",
      "Am"
    ]
  },
  "referenceArtists": [
    "Astor Piazzolla"
  ],
  "referenceTracks": [
    "Adiós Nonino",
    "Libertango"
  ],
  "techniques": [
    "Piazzolla ostinato",
    "chromatic tango bass",
    "bandoneon/string counterpoint",
    "3-3-2"
  ]
};


const STYLE_2: GenreStyleDefinition = {
        "id": "tango-milonga",
        "worldId": "tango",
        "name": "Milonga",
        "origin": "Río de la Plata",
        "era": "Late 19th Century–Present",
        "description": "Fast • Habanera Syncopation • Bouncy\nFast,",
        "characteristicInstruments": [
          "bandoneon",
          "violin",
          "piano",
          "upright-bass",
          "spanish-guitar"
        ],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          96,
          116
        ],
        "keySubstyles": [
          "Milonga Ciudadana",
          "Milonga Campera"
        ],
        "coreConcepts": [
          "habanera / milonga syncopated rhythm",
          "snappy high-speed footwork (traspié)",
          "bright staccato bandoneón chords",
          "joyful urban spirit"
        ],
        "rhythmicGrammar": [
          "strict 2/4 milonga syncopation: [1, 1-and-a, 2, 2-and] played staccatissimo"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Crisp 2/4 habanera milonga syncopation on piano and bandoneon with traspie violin leap",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "D",
            "A7",
            "D",
            "A7"
          ],
          "verse": [
            "D",
            "A7",
            "D",
            "A7",
            "D",
            "G",
            "A7",
            "D"
          ],
          "coda": [
            "A7",
            "A7",
            "D",
            "D"
          ]
        }
      };


const STYLE_3: GenreStyleDefinition = {
        "id": "tango-tango-vals",
        "worldId": "tango",
        "name": "Tango Vals",
        "origin": "Río de la Plata",
        "era": "Golden Age (1930s–1950s)",
        "description": "Lyrical • 3/4 Waltzing • Flowing\nFlowing,",
        "characteristicInstruments": [
          "violin",
          "bandoneon",
          "piano",
          "upright-bass",
          "cello"
        ],
        "preferredMeters": [
          "3/4"
        ],
        "tempoRange": [
          60,
          75
        ],
        "keySubstyles": [
          "Vals Porteño",
          "Vals Criollo"
        ],
        "coreConcepts": [
          "continuous rotational movement and turns (giros)",
          "expressive lyrical violin melodies in triple meter",
          "rhythmic accent on beat 1 with light 2 and 3",
          "nostalgic themes"
        ],
        "rhythmicGrammar": [
          "flowing 3/4 waltz meter with subtle syncopations across bar lines"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Flowing 3/4 violin waltz melody swelling over buoyant piano downbeat and bandoneon sigh",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "vals-a": [
            "Am",
            "Dm",
            "G7",
            "C",
            "F",
            "Dm",
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
      };


const STYLE_4: GenreStyleDefinition = {
  "id": "tango-tango-electronico",
  "worldId": "tango",
  "name": "Electrotango",
  "origin": "Paris / Buenos Aires",
  "era": "2000s–Present",
  "description": "Sampled bandoneon and tango ostinati fused with electronic bass and loop-based pulse.",
  "characteristicInstruments": [
    "bandoneon",
    "sub-bass",
    "drums",
    "sampler",
    "acoustic-guitar"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    115
  ],
  "keySubstyles": [
    "Electrotango",
    "Tango Lounge"
  ],
  "coreConcepts": [
    "sampled bandoneon",
    "tango ostinato",
    "electronic bass",
    "loop-based arrangement"
  ],
  "rhythmicGrammar": [
    "tango-derived ostinato over four-on-floor or broken electronic pulse"
  ],
  "danceTags": [
    "social-partner",
    "tango-compatible",
    "sensual-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Sampled bandoneon loop over electronic tango pulse",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "sectionProgressions": {
    "intro": [
      "Dm",
      "Gm",
      "A7",
      "Dm"
    ],
    "groove": [
      "Dm",
      "Gm",
      "C",
      "F",
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
  },
  "referenceArtists": [
    "Gotan Project"
  ],
  "referenceTracks": [
    "Santa María"
  ],
  "techniques": [
    "electrotango loop",
    "tango ostinato",
    "four-on-floor groove",
    "instrumental dropout"
  ]
};


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "tango-song-centered-tango",
  "worldId": "tango",
  "name": "Song-Centered Tango",
  "origin": "Buenos Aires / Argentina",
  "era": "1920s–1930s",
  "description": "Vocal-first tango with guitar-derived accompaniment, rubato and highly shaped melodic phrasing.",
  "characteristicInstruments": [
    "voice",
    "acoustic-guitar",
    "bandoneon",
    "violin",
    "upright-bass"
  ],
  "preferredMeters": [
    "4/4",
    "2/4"
  ],
  "tempoRange": [
    70,
    105
  ],
  "keySubstyles": [
    "Song-Centered Tango"
  ],
  "coreConcepts": [
    "rubato entrance",
    "guitar accompaniment",
    "cantabile phrase"
  ],
  "rhythmicGrammar": [
    "Vocal tango with elastic accompaniment"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Vocal tango with elastic accompaniment",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Carlos Gardel"
  ],
  "referenceTracks": [
    "Mi Noche Triste"
  ],
  "techniques": [
    "elastic rubato",
    "chromatic tango bass",
    "tango vals bass"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "tango-guardia-nueva-modernism",
  "worldId": "tango",
  "name": "Guardia Nueva Modernism",
  "origin": "Buenos Aires / Argentina",
  "era": "1910s–1920s",
  "description": "Early orchestral modernization through counterpoint, rhythmic complexity and richer harmony.",
  "characteristicInstruments": [
    "bandoneon",
    "violin",
    "piano",
    "upright-bass"
  ],
  "preferredMeters": [
    "4/4",
    "2/4"
  ],
  "tempoRange": [
    90,
    125
  ],
  "keySubstyles": [
    "Guardia Nueva Modernism"
  ],
  "coreConcepts": [
    "counterpoint",
    "síncopa tanguera",
    "orchestral texture"
  ],
  "rhythmicGrammar": [
    "Counterpoint-driven tango with syncopation"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Counterpoint-driven tango with syncopation",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Julio de Caro"
  ],
  "referenceTracks": [
    "Mala Junta"
  ],
  "techniques": [
    "síncopa tanguera",
    "bandoneon/string counterpoint",
    "chromatic tango bass",
    "orchestral silence",
    "tango vals bass"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "tango-rhythmic-drive-tango",
  "worldId": "tango",
  "name": "Rhythmic Drive Tango",
  "origin": "Buenos Aires / Argentina",
  "era": "1930s–1940s",
  "description": "Dance-focused articulation with emphatic pulse, staccato attacks and rapid rhythmic propulsion.",
  "characteristicInstruments": [
    "bandoneon",
    "violin",
    "piano",
    "upright-bass"
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
    "Rhythmic Drive Tango"
  ],
  "coreConcepts": [
    "marcato en 2",
    "staccato attack",
    "rhythmic propulsion"
  ],
  "rhythmicGrammar": [
    "Hard marcato pulse with staccato attack"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Hard marcato pulse with staccato attack",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Juan D'Arienzo"
  ],
  "referenceTracks": [
    "La Cumparsita"
  ],
  "techniques": [
    "chromatic tango bass",
    "marcato en 2",
    "marcato en 4",
    "tango vals bass"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "tango-elegant-cantabile-tango",
  "worldId": "tango",
  "name": "Elegant Cantabile Tango",
  "origin": "Buenos Aires / Argentina",
  "era": "1930s–1950s",
  "description": "Smooth strings, lyrical melody, controlled dynamics and polished orchestral surface.",
  "characteristicInstruments": [
    "bandoneon",
    "violin",
    "piano",
    "upright-bass",
    "cello"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    85,
    120
  ],
  "keySubstyles": [
    "Elegant Cantabile Tango"
  ],
  "coreConcepts": [
    "cantabile melody",
    "string legato",
    "controlled dynamics"
  ],
  "rhythmicGrammar": [
    "Lyrical strings over elegant marcato"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Lyrical strings over elegant marcato",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Carlos Di Sarli"
  ],
  "referenceTracks": [
    "Bahía Blanca"
  ],
  "techniques": [
    "bandoneon/string counterpoint",
    "chromatic tango bass",
    "marcato en 2",
    "marcato en 4",
    "tango vals bass"
  ]
};


const EXPANSION_STYLE_4: GenreStyleDefinition = {
  "id": "tango-elastic-golden-age-tango",
  "worldId": "tango",
  "name": "Elastic Golden-Age Tango",
  "origin": "Buenos Aires / Argentina",
  "era": "1930s–1950s",
  "description": "Flexible tempo, expressive bandoneon, arrastre, breathing spaces and lyrical countermelodies.",
  "characteristicInstruments": [
    "bandoneon",
    "violin",
    "piano",
    "upright-bass",
    "cello"
  ],
  "preferredMeters": [
    "4/4",
    "2/4"
  ],
  "tempoRange": [
    80,
    125
  ],
  "keySubstyles": [
    "Elastic Golden-Age Tango"
  ],
  "coreConcepts": [
    "elastic rubato",
    "arrastre",
    "orchestral silence",
    "bandoneon counterpoint"
  ],
  "rhythmicGrammar": [
    "Elastic rubato with bandoneon countermelody"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Elastic rubato with bandoneon countermelody",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Aníbal Troilo"
  ],
  "referenceTracks": [
    "Toda Mi Vida"
  ],
  "techniques": [
    "elastic rubato",
    "orchestral silence",
    "arrastre",
    "bandoneon/string counterpoint",
    "bandoneon repeated-note figure",
    "chromatic tango bass"
  ]
};


const EXPANSION_STYLE_5: GenreStyleDefinition = {
  "id": "tango-dramatic-yumba-tango",
  "worldId": "tango",
  "name": "Dramatic Yumba Tango",
  "origin": "Buenos Aires / Argentina",
  "era": "1940s–1960s",
  "description": "Heavy marcato, repeated accented cells, dynamic contrast and architectural tension/release.",
  "characteristicInstruments": [
    "bandoneon",
    "violin",
    "piano",
    "upright-bass",
    "cello"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    80,
    115
  ],
  "keySubstyles": [
    "Dramatic Yumba Tango"
  ],
  "coreConcepts": [
    "yumba",
    "heavy marcato",
    "dynamic contrast",
    "sudden silence"
  ],
  "rhythmicGrammar": [
    "Yumba accents with dramatic dynamic space"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Yumba accents with dramatic dynamic space",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Osvaldo Pugliese"
  ],
  "referenceTracks": [
    "La Yumba"
  ],
  "techniques": [
    "yumba",
    "chromatic tango bass",
    "marcato en 2",
    "marcato en 4",
    "orchestral silence",
    "tango vals bass"
  ]
};


const EXPANSION_STYLE_6: GenreStyleDefinition = {
  "id": "tango-harmonic-modernism-tango",
  "worldId": "tango",
  "name": "Harmonic Modernism Tango",
  "origin": "Buenos Aires / Argentina",
  "era": "1940s–1970s",
  "description": "Extended harmony, counterpoint, displaced accents and sophisticated piano/orchestral writing.",
  "characteristicInstruments": [
    "bandoneon",
    "piano",
    "violin",
    "upright-bass",
    "cello"
  ],
  "preferredMeters": [
    "4/4",
    "2/4"
  ],
  "tempoRange": [
    80,
    120
  ],
  "keySubstyles": [
    "Harmonic Modernism Tango"
  ],
  "coreConcepts": [
    "extended harmony",
    "counterpoint",
    "displaced accent",
    "piano writing"
  ],
  "rhythmicGrammar": [
    "Counterpoint and extended harmony in tango"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Counterpoint and extended harmony in tango",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Horacio Salgán"
  ],
  "referenceTracks": [
    "A Fuego Lento"
  ],
  "techniques": [
    "bandoneon/string counterpoint",
    "chromatic tango bass",
    "tango vals bass"
  ]
};


const EXPANSION_STYLE_7: GenreStyleDefinition = {
  "id": "tango-rio-de-la-plata-fusion",
  "worldId": "tango",
  "name": "Río de la Plata Fusion",
  "origin": "Argentina / Uruguay",
  "era": "2000s–Present",
  "description": "Tango, milonga, candombe, rock and electronic production blended as live/electronic hybrid.",
  "characteristicInstruments": [
    "bandoneon",
    "electric-guitar",
    "bass",
    "drums",
    "hand-percussion",
    "synth"
  ],
  "preferredMeters": [
    "4/4",
    "2/4"
  ],
  "tempoRange": [
    90,
    125
  ],
  "keySubstyles": [
    "Río de la Plata Fusion"
  ],
  "coreConcepts": [
    "candombe layer",
    "electronic pulse",
    "tango ostinato",
    "rock texture"
  ],
  "rhythmicGrammar": [
    "Tango ostinato over candombe/electronic pulse"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Tango ostinato over candombe/electronic pulse",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "prominentChords": [
    "Am",
    "E7",
    "Am",
    "G7"
  ],
  "sectionProgressions": {
    "intro": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "verse": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "chorus": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "bridge": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "solo": [
      "Am",
      "E7",
      "Am",
      "G7"
    ],
    "coda": [
      "Am",
      "E7",
      "Am",
      "G7"
    ]
  },
  "referenceArtists": [
    "Bajofondo"
  ],
  "referenceTracks": [
    "Pa' Bailar",
    "El Mareo"
  ],
  "techniques": [
    "Piazzolla ostinato",
    "chromatic tango bass",
    "tango vals bass"
  ]
};

export const TANGO_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3, EXPANSION_STYLE_4, EXPANSION_STYLE_5, EXPANSION_STYLE_6, EXPANSION_STYLE_7] };
