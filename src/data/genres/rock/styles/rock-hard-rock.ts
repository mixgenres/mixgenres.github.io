import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "rock-hard-rock",
        "worldId": "rock",
        "name": "Hard Rock",
        "origin": "London / Los Angeles",
        "era": "Late 1960s–1980s",
        "description": "Heavy riffs and Marshall-style stacks.",
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
          115,
          140
        ],
        "keySubstyles": [
          "Classic Hard Rock",
          "Blues Rock",
          "Arena Rock"
        ],
        "coreConcepts": [
          "cranking Marshall valve overdrive guitar power chords",
          "driving straight-ahead drum groove with huge snare on 2 and 4",
          "screaming blues-based high-tenor lead vocals",
          "virtuosic pentatonic guitar solos"
        ],
        "rhythmicGrammar": [
          "driving 4/4 rock beat with four-on-the-floor bass drum option and heavy snare backbeat"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Thunderous Marshall stack power chord riff ringing out over driving open-hi-hat drum beat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "A5",
            "G5",
            "D5",
            "A5"
          ],
          "verse": [
            "A5",
            "G5",
            "D5",
            "A5",
            "A5",
            "G5",
            "D5",
            "A5"
          ],
          "chorus": [
            "D5",
            "C5",
            "G5",
            "A5",
            "D5",
            "C5",
            "G5",
            "A5"
          ],
          "solo": [
            "A5",
            "G5",
            "D5",
            "A5"
          ],
          "coda": [
            "D5",
            "E5",
            "A5",
            "A5"
          ]
        }
      };
