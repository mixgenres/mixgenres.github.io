import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "metal-progressive-metal",
        "worldId": "metal",
        "name": "Progressive Metal",
        "origin": "Boston / Sweden / Global",
        "era": "Late 1980s–Present",
        "description": "Technical • Complex Meter • Dynamic\nOdd-time",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "synth",
          "overdrive-guitar"
        ],
        "preferredMeters": [
          "7/8",
          "5/8",
          "9/8",
          "4/4"
        ],
        "tempoRange": [
          110,
          155
        ],
        "keySubstyles": [
          "Djent",
          "Symphonic Prog Metal",
          "Technical Prog"
        ],
        "coreConcepts": [
          "complex shifting odd-time signatures (7/8, 11/8, 13/8)",
          "syncopated palm-muted djent polymetric chugging (8-string guitars)",
          "virtuosic unison guitar/keyboard shred solos",
          "dramatic contrast between acoustic beauty and extreme metal roar"
        ],
        "rhythmicGrammar": [
          "polymetric syncopations over steady quarter-note pulse with surgical double-bass precision"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Djent 8-string polyrhythmic chug executing in 7/8 locked with surgical double-bass drumming",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Bbmaj7",
            "Gm7",
            "A7alt"
          ],
          "verse": [
            "Dm",
            "Bbmaj7",
            "Gm7",
            "A7alt",
            "Fmaj7",
            "Em7b5",
            "A7alt",
            "Dm"
          ],
          "chorus": [
            "Bbmaj7",
            "C",
            "Dm",
            "Am",
            "Bbmaj7",
            "C",
            "Dm",
            "Dm"
          ],
          "solo": [
            "Dm",
            "Eb",
            "Dm",
            "Eb",
            "Gm",
            "A7alt",
            "Dm",
            "Dm"
          ],
          "coda": [
            "Bbmaj7",
            "A7alt",
            "Dm",
            "Dm"
          ]
        }
      };
