import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "rock-garage-rock",
        "worldId": "rock",
        "name": "Garage Rock",
        "origin": "Detroit / New York City",
        "era": "1960s / 2000s Revival",
        "description": "Lo-fi fuzz and catchy guitar riffs.",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "overdrive-guitar",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          150
        ],
        "keySubstyles": [
          "60s Garage Punk",
          "2000s Garage Revival"
        ],
        "coreConcepts": [
          "interlocking punchy single-coil guitar riffs",
          "snappy drum-machine-tight acoustic drum beats",
          "cool detached nonchalant vocal delivery",
          "vintage analog tube saturation"
        ],
        "rhythmicGrammar": [
          "tight driving 4/4 with sixteenth-note hi-hat pulse and punchy kick/snare interplay"
        ],
        "danceTags": [
          "festival-fusion",
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Snappy interlocking clean/overdriven guitar duel over tight metronomic drum beat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
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
            "E7"
          ],
          "chorus": [
            "C",
            "F",
            "Am",
            "G",
            "C",
            "F",
            "Am",
            "G"
          ],
          "coda": [
            "F",
            "G",
            "Am",
            "Am"
          ]
        }
      };
