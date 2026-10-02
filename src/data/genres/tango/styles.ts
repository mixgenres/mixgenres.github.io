import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "tango-tango-tradicional",
        "worldId": "tango",
        "name": "Tango Tradicional",
        "origin": "Buenos Aires / Montevideo",
        "era": "Golden Age (1935–1955)",
        "description": "Marcato • Bandoneón • Golden Age tango with arrastre, accented marcato and dramatic stops.",
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
          "intro": ["Am","E7","Am","E7"],
          "A": ["Am","Dm","E7","Am","Am","Dm","E7","Am"],
          "B": ["Am","C","E7","Am","Dm","G7","C","E7"],
          "variación": ["Dm","Gm","A7","Dm","E7","Am","E7","Am"],
          "coda": ["E7","E7","Am","Am"]
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
    "intro": ["Am7","Dm7","F#dim","E7b9"],
    "tema": ["Am7","Dm7","G7","Cmaj7","Fmaj7","Bm7b5","E7b9","Am7"],
    "development": ["Am7","Cmaj7","Fmaj7#11","E7alt","Am7","Dm7","G7","Cmaj7"],
    "3+3+2 ostinato": ["Am7","Am7","Fmaj7#11","E7alt","Dm7","E7b9","Am7"],
    "lyrical section": ["Dm7","G7","Cmaj7","Fmaj7","Bm7b5","E7b9","Am7","Am7"],
    "coda": ["F#dim","E7b9","Am","Am"]
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
        "description": "Fast • Habanera Syncopation • Bouncy milonga with traspié accents and crisp staccato phrasing.",
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
          "intro": ["D","A7","D","A7"],
          "milonga-a": ["D","A7","D","G","A7","D"],
          "milonga-b": ["G","A7","D","B7","Em","A7","D"],
          "variación": ["D","F#7","Bm","E7","A7","D"],
          "coda": ["A7","A7","D","D"]
        }
      };


const STYLE_3: GenreStyleDefinition = {
        "id": "tango-tango-vals",
        "worldId": "tango",
        "name": "Tango Vals",
        "origin": "Río de la Plata",
        "era": "Golden Age (1930s–1950s)",
        "description": "Lyrical • 3/4 Waltzing • Flowing tango vals with expressive violin and buoyant accompaniment.",
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
          "intro": ["Am","E7","Am","E7"],
          "vals-a": ["Am","Dm","G7","C","F","Dm","E7","Am"],
          "vals-b": ["C","G7","C","F","Dm","E7","Am","Am"],
          "variación": ["F","Dm","G7","C","F","E7","Am","Am"],
          "coda": ["E7","E7","Am","Am"]
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
    "intro": ["Dm","Gm","A7","Dm"],
    "A": ["Dm","Gm","C","F","Bb","Gm","A7","Dm"],
    "B": ["Gm","A7","Dm","Bb","F","C","A7","Dm"],
    "variación": ["Dm","C","Bb","A7","Gm","A7","Dm","Dm"],
    "coda": ["Gm","A7","Dm","Dm"]
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

















export const TANGO_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4] };
