import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "jazz-fusion",
        "worldId": "jazz",
        "name": "Fusion",
        "origin": "New York / Los Angeles",
        "era": "Late 1960s–1970s",
        "description": "Electric • Complex Meter • High",
        "characteristicInstruments": [
          "synth",
          "electric-guitar",
          "bass",
          "drums",
          "tenor-sax"
        ],
        "preferredMeters": [
          "4/4",
          "7/8",
          "5/4"
        ],
        "tempoRange": [
          110,
          145
        ],
        "keySubstyles": [
          "Jazz-Rock Fusion",
          "Electric Jazz"
        ],
        "coreConcepts": [
          "virtuosic electric bass technical mastery (Jaco Pastorius fretless harmonics)",
          "screaming overdrive guitar solos",
          "complex analog synthesizer polyphony (Rhodes, Minimoog, Prophet)",
          "complex odd-meter funk rhythms"
        ],
        "rhythmicGrammar": [
          "tight virtuosic 16th-note funk/rock drumming with complex polyrhythmic hi-hat subdivisions"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Jaco fretless bass harmonic flourish locked with lightning-fast odd-meter synth/guitar unison",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dmaj9",
            "Cmaj9#11",
            "Bbmaj7#11",
            "A7alt"
          ],
          "theme": [
            "Dmaj9",
            "Gmaj7#11",
            "Cmaj9#11",
            "Fmaj7#11",
            "Bm9",
            "Em9",
            "A7alt",
            "Dmaj9"
          ],
          "solo": [
            "Bm9",
            "E13",
            "Bm9",
            "E13",
            "Gmaj7",
            "F#m7",
            "Em7",
            "A7alt"
          ],
          "coda": [
            "Bbmaj7#11",
            "A7alt",
            "Dmaj9",
            "Dmaj9"
          ]
        }
      };
