import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_2: GenreStyleDefinition = {
        "id": "cumbia-chicha",
        "worldId": "cumbia",
        "name": "Chicha",
        "origin": "Lima / Peruvian Amazon",
        "era": "1970s–1980s",
        "description": "Psychedelic • Pentatonic • Surf Guitar\nAndean",
        "characteristicInstruments": ["guitar", "synth", "bass", "timbales", "guiro"],
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
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "cumbia-colombiana",
        "worldId": "cumbia",
        "name": "Cumbia Colombiana",
        "origin": "Caribbean Coast, Colombia",
        "era": "1940s–Present",
        "description": "Classic • 2/4 • Guache Shaker\nTraditional",
        "characteristicInstruments": ["accordion", "drums", "hand-percussion", "bass", "flute"],
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
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "cumbia-digitale",
        "worldId": "cumbia",
        "name": "Digitale",
        "origin": "Buenos Aires / Mexico City / Global",
        "era": "2008–Present",
        "description": "Electronic • Bass • Crossover\nFolktronica meets",
        "characteristicInstruments": ["synth", "sampler", "synth", "guiro", "flute"],
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
      };

const STYLE_7: GenreStyleDefinition = {
        "id": "cumbia-porro",
        "worldId": "cumbia",
        "name": "Porro",
        "origin": "Sucre / Córdoba, Colombia",
        "era": "Traditional / 20th Century",
        "description": "Brass Band • Festive • Syncopated\nPelayero",
        "characteristicInstruments": ["horn-section", "trumpet", "clarinet", "drums", "hand-percussion"],
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
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "cumbia-rebajada",
        "worldId": "cumbia",
        "name": "Rebajada",
        "origin": "Monterrey, Mexico (Sonidero Culture)",
        "era": "Late 1970s–Present",
        "description": "Slowed-down • Deep • Hypnotic\nPitch-shifted pitched",
        "characteristicInstruments": ["accordion", "bass", "guiro", "drums", "synth"],
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
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "cumbia-santafesina",
        "worldId": "cumbia",
        "name": "Santafesina",
        "origin": "Santa Fe, Argentina",
        "era": "1970s–Present",
        "description": "Romantic • Guitar-led • Melodic\nAcoustic guitar",
        "characteristicInstruments": ["accordion", "guitar", "bass", "timbales", "guiro"],
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
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "cumbia-sonora",
        "worldId": "cumbia",
        "name": "Sonora",
        "origin": "Mexico / Cuba / Colombia",
        "era": "1950s–1970s",
        "description": "Big Band • Trumpets • Polished\nBig",
        "characteristicInstruments": ["trumpet", "horn-section", "piano", "bass", "timbales"],
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
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "cumbia-villera",
        "worldId": "cumbia",
        "name": "Villera",
        "origin": "Buenos Aires, Argentina (Villas Miseria)",
        "era": "Late 1990s–Present",
        "description": "Gritty • Synthesizer • Keytar\nRaw Argentine",
        "characteristicInstruments": ["synth", "drums", "bass", "guiro", "sampler"],
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
      };

export const CUMBIA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
