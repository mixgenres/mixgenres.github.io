import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
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
