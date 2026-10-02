import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "tango-tango-electronico",
        "worldId": "tango",
        "name": "Tango Electrónico",
        "origin": "Paris / Buenos Aires",
        "era": "2000s–Present",
        "description": "Bandoneon-led electrotango with a steady electronic pulse, deep bass, and sharply edited acoustic phrases.",
        "characteristicInstruments": [
          "bandoneon",
          "sub-bass",
          "drums",
          "sampler",
          "synth",
          "electric-guitar",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          90,
          115
        ],
        "keySubstyles": [
          "Electrotango",
          "Tango Lounge"
        ],
        "coreConcepts": [
          "trip-hop and electronic drum programming",
          "vintage vinyl bandoneón sample loops",
          "deep sub-bass pulses with nylon guitar comping",
          "sensual downtempo lounge atmosphere"
        ],
        "rhythmicGrammar": [
          "electronic 4/4 beat with heavy kick on 1 and 3, crisp snare on 2 and 4, and bandoneón syncopation"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Dusty vintage bandoneon sample looping over deep trip-hop sub-bass and crisp electronic snare",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Gm",
            "A7",
            "Dm"
          ],
          "groove": [
            "Dm",
            "Gm",
            "C",
            "F",
            "Bb",
            "Gm",
            "A7",
            "Dm"
          ],
          "coda": [
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ]
        }
        ,"arrangementSections": [
          { "key": "intro", "label": "Filtered bandoneon intro", "kind": "intro", "bars": 8, "intensity": "low", "instruments": ["bandoneon", "sampler", "synth"], "leadInstrumentId": "bandoneon", "tempoFeel": "steady electronic pulse, filtered entrance" },
          { "key": "groove", "label": "Electrotango groove", "kind": "groove", "bars": 16, "intensity": "medium", "instruments": ["bandoneon", "sub-bass", "drums", "sampler", "synth", "electric-guitar", "piano"], "leadInstrumentId": "bandoneon" },
          { "key": "breakdown", "label": "Bandoneon breakdown", "kind": "breakdown", "bars": 8, "intensity": "low", "instruments": ["bandoneon", "sampler", "piano"], "leadInstrumentId": "bandoneon", "tempoFeel": "pulse thins; tempo stays fixed" },
          { "key": "return", "label": "Full groove return", "kind": "drop", "bars": 16, "intensity": "peak", "instruments": ["bandoneon", "sub-bass", "drums", "sampler", "synth", "electric-guitar", "piano"], "leadInstrumentId": "bandoneon" },
          { "key": "coda", "label": "Electronic coda", "kind": "coda", "bars": 8, "intensity": "low", "instruments": ["bandoneon", "sub-bass", "sampler"], "leadInstrumentId": "bandoneon" }
        ]
      };
