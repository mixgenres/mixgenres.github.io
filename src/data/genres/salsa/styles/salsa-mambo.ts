import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "salsa-mambo",
        "worldId": "salsa",
        "name": "Mambo",
        "origin": "Havana / New York",
        "era": "1940s–1950s",
        "description": "Big-band arrangement with a 2-3 clave.",
        "characteristicInstruments": [
          "brass",
          "timbales",
          "congas",
          "piano",
          "bass"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          180,
          220
        ],
        "keySubstyles": [
          "Palladium Mambo",
          "Afro-Cuban Mambo"
        ],
        "coreConcepts": [
          "flamboyant brass section riffs",
          "Tito Puente virtuosic timbales",
          "driving tumbao conga and bass lock",
          "On2 New York dancer timing"
        ],
        "rhythmicGrammar": [
          "2-3 son clave with explosive brass riffing on offbeats"
        ],
        "danceTags": [
          "social-partner",
          "salsa-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Tito Puente timbale abanico roll into explosive big band mambo brass counter-riff",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Gm",
            "D7",
            "Gm",
            "D7"
          ],
          "mambo": [
            "Gm",
            "Cm",
            "D7",
            "Gm",
            "Gm",
            "Cm",
            "D7",
            "Gm"
          ],
          "coda": [
            "D7",
            "D7",
            "Gm",
            "Gm"
          ]
        }
      };
