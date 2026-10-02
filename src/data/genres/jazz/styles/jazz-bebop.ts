import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "jazz-bebop",
        "worldId": "jazz",
        "name": "Bebop",
        "origin": "Harlem, New York City",
        "era": "1940s",
        "description": "Fast • Chromatic • Virtuosic\nRapid harmonic",
        "characteristicInstruments": [
          "alto-sax",
          "trumpet",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          180,
          260
        ],
        "keySubstyles": [
          "Classic Bebop",
          "52nd Street Sound"
        ],
        "coreConcepts": [
          "lightning-fast chromatic approach notes and enclosures",
          "extended upper chord tones (9ths, 11ths, b13ths, #11ths)",
          "snappy ii-V-I substitutions and tritone subs",
          "unison trumpet/alto horn heads and blistering solos"
        ],
        "rhythmicGrammar": [
          "fast ride cymbal \"spang-a-lang\" with Max Roach snare and bass drum dropping bombs on unexpected beats"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Rapid chromatic enclosure lick landing on #11 upper chord extension with ride cymbal drive",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "C7b9"
          ],
          "head": [
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "C7b9",
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "Ebmaj7"
          ],
          "bridge": [
            "Abm7",
            "Db7",
            "Gbmaj7",
            "Gbmaj7",
            "Am7",
            "D7",
            "Gmaj7",
            "C7b9"
          ],
          "coda": [
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "Ebmaj7"
          ]
        }
      };
