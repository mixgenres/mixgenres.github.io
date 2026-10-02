import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "rock-progressive-rock",
        "worldId": "rock",
        "name": "Progressive Rock",
        "origin": "London / Cambridge, UK",
        "era": "Late 1960s–1970s",
        "description": "Odd Meters • Mellotron • Multi-Movement\nComplex",
        "characteristicInstruments": [
          "electric-guitar",
          "strings",
          "bass",
          "drums",
          "organ"
        ],
        "preferredMeters": [
          "7/8",
          "5/4",
          "4/4",
          "12/8"
        ],
        "tempoRange": [
          75,
          135
        ],
        "keySubstyles": [
          "Symphonic Prog",
          "Canterbury Scene",
          "Space Rock"
        ],
        "coreConcepts": [
          "epic multi-movement conceptual song structures",
          "Mellotron string and flute s and Hammond organs",
          "unusual time signatures and classical counterpoint",
          "philosophical and fantastical lyrics"
        ],
        "rhythmicGrammar": [
          "shifting metric structures (7/8 alternating with 4/4) with delicate symphonic dynamics"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Haunting Mellotron string  swelling behind soaring Gilmour-esque melodic guitar bend",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Em9",
            "A7",
            "Em9",
            "A7"
          ],
          "movement1": [
            "Em9",
            "A7",
            "Cmaj7",
            "Bm7",
            "Am7",
            "D7",
            "Gmaj7",
            "B7"
          ],
          "movement2": [
            "Cmaj7",
            "D/C",
            "Bm7",
            "Em",
            "Am7",
            "B7",
            "Em",
            "Em"
          ],
          "coda": [
            "Cmaj7",
            "D",
            "Em",
            "Em"
          ]
        }
      };
