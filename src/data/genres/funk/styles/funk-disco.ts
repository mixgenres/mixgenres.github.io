import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "funk-disco",
        "worldId": "funk",
        "name": "Disco",
        "origin": "New York City / Philadelphia",
        "era": "1970s",
        "description": "Four-on-the-floor • Strings • Glamorous\nOrchestral dance",
        "characteristicInstruments": [
          "drums",
          "bass",
          "electric-guitar",
          "strings",
          "brass"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          115,
          128
        ],
        "keySubstyles": [
          "Philly Disco",
          "Chic Organization Sound",
          "Euro Disco"
        ],
        "coreConcepts": [
          "Nile Rodgers \"chucking\" rhythm guitar style",
          "Bernard Edwards driving octave slap/finger bass",
          "four-on-the-floor kick with open hi-hat on every upbeat",
          "sweeping string orchestra lines"
        ],
        "rhythmicGrammar": [
          "four-on-the-floor kick with open hi-hat on every upbeat and 16th-note guitar chucking"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Nile Rodgers 16th-note chucking guitar rhythm locked with driving octave disco bassline",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Em7",
            "A7",
            "Em7",
            "A7"
          ],
          "verse": [
            "Em7",
            "A7",
            "Em7",
            "A7",
            "Em7",
            "A7",
            "Em7",
            "A7"
          ],
          "chorus": [
            "Cmaj7",
            "Bm7",
            "Am7",
            "Bm7",
            "Cmaj7",
            "Bm7",
            "Em7",
            "Em7"
          ],
          "coda": [
            "Cmaj7",
            "Bm7",
            "Em7",
            "Em7"
          ]
        }
      };
