import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_2: GenreStyleDefinition = {
        "id": "zouk-ghetto-zouk",
        "worldId": "zouk",
        "name": "Ghetto Zouk",
        "origin": "Lisbon / Rotterdam / Paris",
        "era": "2000s–Present",
        "description": "R&B Chords • Modern Beat •",
        "characteristicInstruments": ["synth", "drums", "synth", "piano", "synth"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          88,
          98
        ],
        "keySubstyles": [
          "Afro-European Zouk",
          "Zouk-R&B"
        ],
        "coreConcepts": [
          "R&B chord progressions over zouk rhythms",
          "crisp electronic drum machine programming with sub-bass",
          "multilingual lyrics (Portuguese, English, French)",
          "sleek club production"
        ],
        "rhythmicGrammar": [
          "electronic zouk beat: kick on [1, 1-and, 3-and] with crisp handclap/snare on 3"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Smooth R&B vocal melody gliding over punchy electronic zouk beat and deep sub-bass drop",
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
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "zouk-neo-zouk",
        "worldId": "zouk",
        "name": "Neo-Zouk",
        "origin": "Rio de Janeiro / Sao Paulo",
        "era": "2010s–Present",
        "description": "Lyrical • Head Movements • Modern",
        "characteristicInstruments": ["synth", "synth", "drums", "sampler", "synth"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          82,
          94
        ],
        "keySubstyles": [
          "Brazilian Zouk Neo",
          "Flow Zouk"
        ],
        "coreConcepts": [
          "continuous flowing head-rolls and cambres for Brazilian Zouk dancers",
          "cinematic electronic buildups and emotional drops",
          "spacious sub-bass textures",
          "fluid musicality adaptations"
        ],
        "rhythmicGrammar": [
          "flowing zouk pulse [chic-chic-boom] with dynamic filters and spatial delay washes"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Spacious cinematic synth pad swelling into deep zouk sub-bass drop and continuous fluid head-roll",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "F#m",
            "D",
            "A",
            "E"
          ],
          "verse": [
            "F#m",
            "D",
            "A",
            "E",
            "F#m",
            "D",
            "A",
            "E"
          ],
          "drop": [
            "D",
            "E",
            "F#m",
            "C#m",
            "D",
            "E",
            "F#m",
            "F#m"
          ],
          "coda": [
            "D",
            "E",
            "F#m",
            "F#m"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "zouk-zouk-beton",
        "worldId": "zouk",
        "name": "Zouk Béton",
        "origin": "Guadeloupe & Martinique",
        "era": "1980s",
        "description": "Carnival Horns • Fast 4/4 •",
        "characteristicInstruments": ["horn-section", "drums", "bass", "synth", "hand-percussion"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          138
        ],
        "keySubstyles": [
          "Classic Kassav' Sound",
          "Carnival Zouk"
        ],
        "coreConcepts": [
          "driving syncopated slap/finger basslines",
          "explosive brass section fanfares",
          "crisp Simmons electronic drum fills",
          "Creole carnival party euphoria"
        ],
        "rhythmicGrammar": [
          "fast 4/4 zouk beat: kick on 1, 1-and, 3-and with crisp snare on 3 and fast hi-hats"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Explosive Antillean brass fanfare over driving bassline and carnival zouk beat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
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
            "F",
            "G",
            "Em",
            "Am",
            "Dm",
            "G",
            "C",
            "C"
          ],
          "coda": [
            "F",
            "G",
            "C",
            "C"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "zouk-zouk-love",
        "worldId": "zouk",
        "name": "Zouk Love",
        "origin": "Guadeloupe & Martinique / Paris",
        "era": "Late 1980s–1990s",
        "description": "Slow • Sensual • Romantic Keyboards\nRomantic,",
        "characteristicInstruments": ["synth", "bass", "drums", "guitar", "rhodes"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          98
        ],
        "keySubstyles": [
          "Antillean Slow Zouk",
          "Romantic Zouk"
        ],
        "coreConcepts": [
          "silky romantic Creole vocal delivery",
          "lush DX7 electric piano layers",
          "gentle flowing zouk drum pulse with soft rimshots",
          "intimate close partner dance connection"
        ],
        "rhythmicGrammar": [
          "slow 4/4 zouk beat: kick on 1, 1-and, 3-and with soft rimshot on 3"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Silky romantic Creole vocal melody floating over warm DX7 keys and gentle zouk love beat",
        "grooveMechanics": {
          "swingPercentage": 52,
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
      };

export const ZOUK_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3],
};
