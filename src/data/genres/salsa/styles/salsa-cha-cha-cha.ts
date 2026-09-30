import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "salsa-cha-cha-cha",
        "worldId": "salsa",
        "name": "Cha-Cha-Chá",
        "origin": "Havana, Cuba",
        "era": "1950s",
        "description": "Güiro, flute, and violins.",
        "characteristicInstruments": [
          "flute",
          "violin",
          "guiro",
          "congas",
          "piano"
        ],
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
