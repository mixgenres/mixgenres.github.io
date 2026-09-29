import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "blues-chicago",
        "worldId": "blues",
        "name": "Chicago Blues",
        "origin": "Chicago, Illinois",
        "era": "1940s–1960s",
        "description": "Electric • 12-bar • Driving\nAmplified harmonica",
        "characteristicInstruments": [
          "electric-guitar",
          "harmonica",
          "piano",
          "bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          110
        ],
        "keySubstyles": [
          "South Side Chicago Blues",
          "Chess Records Sound"
        ],
        "coreConcepts": [
          "distorted amplified harmonica (bullet mic)",
          "heavy electric guitar shuffle riffs",
          "rolling boogie basslines",
          "deep guttural vocal delivery"
        ],
        "rhythmicGrammar": [
          "driving 12/8 triplet shuffle with backbeat snare and walking bass"
        ],
        "danceTags": [
          "social-partner",
          "blues-fusion-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Electric guitar shuffle riff with answering distorted harmonica cry",
        "grooveMechanics": {
          "swingPercentage": 66,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "E7",
            "A7",
            "E7",
            "B7"
          ],
          "verse": [
            "E7",
            "E7",
            "E7",
            "E7",
            "A7",
            "A7",
            "E7",
            "E7",
            "B7",
            "A7",
            "E7",
            "B7"
          ],
          "solo": [
            "E7",
            "E7",
            "E7",
            "E7",
            "A7",
            "A7",
            "E7",
            "E7",
            "B7",
            "A7",
            "E7",
            "B7"
          ],
          "coda": [
            "B7",
            "A7",
            "E7",
            "E9"
          ]
        }
      };
