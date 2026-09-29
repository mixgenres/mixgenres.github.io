import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "flamenco-solea-style",
        "worldId": "flamenco",
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
