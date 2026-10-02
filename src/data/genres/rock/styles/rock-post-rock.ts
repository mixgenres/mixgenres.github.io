import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "rock-post-rock",
        "worldId": "rock",
        "name": "Post-Rock",
        "origin": "Montreal / Reykjavik / Texas",
        "era": "Late 1990s–Present",
        "description": "Crescendo • Cinematic • Instrumental\nEpic dynamic",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "strings",
          "glockenspiel"
        ],
        "preferredMeters": [
          "4/4",
          "6/8",
          "3/4"
        ],
        "tempoRange": [
          70,
          110
        ],
        "keySubstyles": [
          "Crescendo Post-Rock",
          "Cinematic Ambient Rock"
        ],
        "coreConcepts": [
          "massive ten-minute dynamic builds from whispering delay to roaring crescendos",
          "bowed guitars and shimmering glockenspiels",
          "absence of standard verse/chorus lyrics",
          "sublime emotional catharsis"
        ],
        "rhythmicGrammar": [
          "slowly accelerating and intensifying drum rolls building from gentle brushes into crashing cymbals"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Whispering tremolo-picked delay guitar slowly swelling into monumental wall of crashing sound",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "F",
            "C",
            "G"
          ],
          "build": [
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F",
            "C",
            "Em"
          ],
          "climax": [
            "F",
            "G",
            "Am",
            "Em",
            "F",
            "G",
            "Am",
            "Am"
          ],
          "coda": [
            "F",
            "G",
            "Am",
            "Am"
          ]
        }
      };
