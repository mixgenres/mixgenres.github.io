import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "flamenco-buleria-style",
        "worldId": "flamenco",
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
