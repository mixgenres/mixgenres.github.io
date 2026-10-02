import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_2: GenreStyleDefinition = {
        "id": "flamenco-alegrias-style",
        "worldId": "flamenco",
        "scaleMode": "major",
        "name": "Alegrías",
        "origin": "Cádiz, western Andalusia",
        "description": "Bright • 12-beat • Major\nCadiz sparkle,",
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
        "tuningSystem": "12-tet",
        "sectionProgressions": {
          "intro": ["E", "B7", "E", "B7"],
          "verse": ["E", "A", "B7", "E"],
          "falseta": ["E", "B7", "A", "E"],
          "cierre": ["B7", "E"]
        },
        "signatureCell": "12-beat cantiñas compás with major-key brightness and clear dance punctuation.",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "flamenco-buleria-style",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Bulerías",
        "origin": "Jerez de la Frontera & Triana",
        "description": "Fast • 12-beat • Contratiempo\nPlayful, explosive,",
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
          "intro": [
            "Bb",
            "F",
            "Bb",
            "A"
          ],
          "verse": [
            "Dm",
            "C",
            "Bb",
            "A"
          ],
          "chorus": [
            "Gm",
            "A",
            "Gm",
            "A"
          ],
          "solo": [
            "Dm",
            "C",
            "Bb",
            "A"
          ],
          "coda": [
            "A",
            "A",
            "A",
            "A"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "flamenco-fandango-style",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Fandangos",
        "origin": "Huelva, Andalusia",
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
        }
      };

const STYLE_7: GenreStyleDefinition = {
        "id": "flamenco-rumba",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Rumba",
        "origin": "Catalonia, Andalusia & Caribbean crossover",
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
          "intro": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "verse": [
            "Am",
            "Dm",
            "G",
            "C"
          ],
          "chorus": [
            "F",
            "E7",
            "Am",
            "E7"
          ],
          "solo": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "coda": [
            "E",
            "E",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "flamenco-seguiriya-style",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Seguiriya",
        "origin": "Andalusia",
        "description": "Dark • Asymmetric • Cante jondo\nRaw,",
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
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "flamenco-solea-style",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Soleá",
        "origin": "Andalusia (Seville, Cádiz, Jerez)",
        "description": "Deep • 12-beat • Phrygian\nThe foundation",
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
          "intro": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "verse": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "chorus": [
            "C",
            "F",
            "G",
            "E"
          ],
          "solo": [
            "Am",
            "G",
            "F",
            "E"
          ],
          "coda": [
            "E",
            "E",
            "E",
            "E"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "flamenco-tangos-style",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Tangos",
        "origin": "Cádiz, Triana, Granada",
        "description": "Grounded • 4-beat • Phrygian\nHeavy pulse,",
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
          "intro": [
            "Bb",
            "A",
            "Bb",
            "A"
          ],
          "verse": [
            "Dm",
            "C",
            "Bb",
            "A"
          ],
          "chorus": [
            "F",
            "Bb",
            "A",
            "A"
          ],
          "coda": [
            "A",
            "A",
            "A",
            "A"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "flamenco-tientos-style",
        "worldId": "flamenco",
        "scaleMode": "phrygian",
        "name": "Tientos",
        "origin": "Andalusia",
        "description": "Slow • 4-beat • Modal\nTangos stretched",
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
        }
      };

export const FLAMENCO_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
