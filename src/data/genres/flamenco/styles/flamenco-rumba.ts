import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "flamenco-rumba",
        "worldId": "flamenco",
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
