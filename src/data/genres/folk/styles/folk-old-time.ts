import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "folk-old-time",
        "worldId": "folk",
        "name": "Old-Time",
        "origin": "Appalachian Mountains, USA",
        "era": "19th Century–Early 20th Century",
        "description": "Clawhammer • Fiddle • Drone\nRaw mountain",
        "characteristicInstruments": [
          "banjo",
          "fiddle",
          "acoustic-guitar",
          "upright-bass",
          "hand-percussion"
        ],
        "preferredMeters": [
          "2/4",
          "4/4"
        ],
        "tempoRange": [
          110,
          136
        ],
        "keySubstyles": [
          "Appalachian Old-Time",
          "Clawhammer Banjo Tune"
        ],
        "coreConcepts": [
          "clawhammer \"bump-ditty\" banjo strumming",
          "fiddle bowing with heavy open-string drones",
          "communal porch-picking feel",
          "modal mountain scales"
        ],
        "rhythmicGrammar": [
          "driving 2/4 clawhammer banjo rhythm locked in close unison with melodic fiddle line"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "just-intonation",
        "signatureCell": "Clawhammer banjo bump-ditty rhythm locked in unison with droning mountain fiddle",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "A",
            "D",
            "E",
            "A"
          ],
          "part-a": [
            "A",
            "D",
            "E",
            "A",
            "A",
            "D",
            "E",
            "A"
          ],
          "part-b": [
            "D",
            "A",
            "E",
            "A",
            "D",
            "A",
            "E",
            "A"
          ],
          "coda": [
            "D",
            "E",
            "A",
            "A"
          ]
        }
      };
