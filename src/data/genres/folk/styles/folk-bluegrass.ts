import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "folk-bluegrass",
        "worldId": "folk",
        "name": "Bluegrass",
        "origin": "Appalachia / Kentucky",
        "era": "1940s–Present",
        "description": "High-Speed • Banjo • Chop\nVirtuosic multi-instrumental",
        "characteristicInstruments": [
          "banjo",
          "mandolin",
          "acoustic-guitar",
          "fiddle",
          "upright-bass"
        ],
        "preferredMeters": [
          "2/4",
          "4/4"
        ],
        "tempoRange": [
          130,
          165
        ],
        "keySubstyles": [
          "Progressive Bluegrass",
          "Traditional Bluegrass"
        ],
        "coreConcepts": [
          "blistering acoustic flatpicking guitar runs",
          "driving three-finger Scruggs banjo speed",
          "syncopated mandolin chop on offbeats",
          "tight high-tenor vocal trios"
        ],
        "rhythmicGrammar": [
          "fast 2/4 driving boom-chick bass with percussive mandolin chop on 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Lightning-fast acoustic guitar flatpicking run trading licks with virtuosic banjo roll",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "C",
            "D",
            "G"
          ],
          "verse": [
            "G",
            "G",
            "C",
            "G",
            "G",
            "Em",
            "D",
            "G"
          ],
          "chorus": [
            "C",
            "G",
            "D",
            "G",
            "C",
            "G",
            "D",
            "G"
          ],
          "solo": [
            "G",
            "C",
            "D",
            "G"
          ],
          "coda": [
            "C",
            "D",
            "G",
            "G"
          ]
        }
      };
