import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_3: GenreStyleDefinition = {
        "id": "salsa-cha-cha-cha",
        "worldId": "salsa",
        "name": "Cha-Cha-Chá",
        "origin": "Havana, Cuba",
        "era": "1950s",
        "description": "Güiro • Flute & Violins •",
        "characteristicInstruments": ["flute", "violin", "guiro", "congas", "piano"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          110,
          128
        ],
        "keySubstyles": [
          "Charanga Cha-Cha-Chá",
          "Big Band Cha-Cha"
        ],
        "coreConcepts": [
          "charanga instrumentation (flute and violins)",
          "güiro triple stroke rhythm on beats 4-and-1",
          "crisp piano montunos in major keys",
          "clear ballroom syncopation"
        ],
        "rhythmicGrammar": [
          "clear 4/4 meter with güiro scrape on 1, 2, 3, 4-and-1 and light cowbell"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Wooden flute trill floating over crisp güiro triple scrape \"cha-cha-chá\"",
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
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "salsa-mambo",
        "worldId": "salsa",
        "name": "Mambo",
        "origin": "Havana / New York",
        "era": "1940s–1950s",
        "description": "Big Band • Clave 2-3 •",
        "characteristicInstruments": ["horn-section", "timbales", "congas", "piano", "bass"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          180,
          220
        ],
        "keySubstyles": [
          "Palladium Mambo",
          "Afro-Cuban Mambo"
        ],
        "coreConcepts": [
          "flamboyant brass section riffs",
          "Tito Puente virtuosic timbales",
          "driving tumbao conga and bass lock",
          "On2 New York dancer timing"
        ],
        "rhythmicGrammar": [
          "2-3 son clave with explosive brass riffing on offbeats"
        ],
        "danceTags": [
          "social-partner",
          "salsa-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Tito Puente timbale abanico roll into explosive big band mambo brass counter-riff",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Gm",
            "D7",
            "Gm",
            "D7"
          ],
          "mambo": [
            "Gm",
            "Cm",
            "D7",
            "Gm",
            "Gm",
            "Cm",
            "D7",
            "Gm"
          ],
          "coda": [
            "D7",
            "D7",
            "Gm",
            "Gm"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "salsa-salsa-dura",
        "worldId": "salsa",
        "name": "Salsa Dura",
        "origin": "New York City (Fania Records)",
        "era": "1970s",
        "description": "Trombone Heavy • Clave Driven •",
        "characteristicInstruments": ["horn-section", "congas", "timbales", "bongos", "piano"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          160,
          195
        ],
        "keySubstyles": [
          "Fania Sound",
          "Barrio Salsa"
        ],
        "coreConcepts": [
          "aggressive dual-trombone arrangements",
          "driving 3-2 / 2-3 son clave and bongo campana bell",
          "percussive piano guajeos",
          "gritty barrio storytelling"
        ],
        "rhythmicGrammar": [
          "strict son clave locking conga tumbao, piano guajeo, and roaring campana bell"
        ],
        "danceTags": [
          "social-partner",
          "salsa-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Aggressive dual trombone fanfare over thunderous campana bell and piano guajeo",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "A7",
            "Dm",
            "A7"
          ],
          "canto": [
            "Dm",
            "Gm",
            "C",
            "F",
            "Bb",
            "Gm",
            "A7",
            "Dm"
          ],
          "montuno": [
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
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "salsa-salsa-romantica",
        "worldId": "salsa",
        "name": "Salsa Romántica",
        "origin": "Puerto Rico / Miami",
        "era": "1980s–1990s",
        "description": "Lush Synths • Romantic • Polished\nSmooth",
        "characteristicInstruments": ["horn-section", "piano", "synth", "congas", "timbales"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          88,
          104
        ],
        "keySubstyles": [
          "Salsa Sensual",
          "Salsa de Alcoba"
        ],
        "coreConcepts": [
          "sensual romantic crooner vocal deliveries",
          "lush synthesizer pad layers",
          "restrained percussion dynamics",
          "refined melodic horn arrangements"
        ],
        "rhythmicGrammar": [
          "gentle 4/4 son clave with warm conga tumbao and soft bongo bell in chorus"
        ],
        "danceTags": [
          "social-partner",
          "salsa-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Smooth crooner vocal melody over synthesizer string pad and warm congas",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "Dm",
            "G",
            "C"
          ],
          "verse": [
            "Am",
            "Dm",
            "G",
            "C",
            "F",
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
            "Dm",
            "E7",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "salsa-son-montuno",
        "worldId": "salsa",
        "name": "Son Montuno",
        "origin": "Eastern Cuba / Havana",
        "era": "1920s–1940s",
        "description": "Tres Cubano • Bongo • Root",
        "characteristicInstruments": ["tres", "bongos", "claves", "bass", "trumpet"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          105,
          125
        ],
        "keySubstyles": [
          "Arsenio Style",
          "Son Tradicional"
        ],
        "coreConcepts": [
          "tres cubano syncopated arpeggiated guajeos",
          "bongo martillo rhythm and bongo bell",
          "contratiempo acoustic bass pulse",
          "call-and-response montuno"
        ],
        "rhythmicGrammar": [
          "2-3 or 3-2 son clave with acoustic bass anticipating beat 1 and beat 3"
        ],
        "danceTags": [
          "social-partner",
          "salsa-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Tres cubano guajeo pattern locking with bongo martillo and 2-3 son clave",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "canto": [
            "C",
            "G7",
            "C",
            "G7",
            "F",
            "C",
            "G7",
            "C"
          ],
          "montuno": [
            "F",
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
      };

export const SALSA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4],
};
