import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "flamenco-seguiriya-style",
        "worldId": "flamenco",
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
