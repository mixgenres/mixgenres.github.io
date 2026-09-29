import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "jazz-ragtime",
        "worldId": "jazz",
        "name": "Ragtime",
        "origin": "Sedalia / St. Louis, Missouri",
        "era": "1890s–1910s",
        "description": "Syncopated • Marching Bass • Piano\nFoundational",
        "characteristicInstruments": [
          "piano",
          "banjo",
          "brass",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          80,
          104
        ],
        "keySubstyles": [
          "Classic Ragtime",
          "St. Louis Rag"
        ],
        "coreConcepts": [
          "steady \"boom-chick\" marching left-hand stride bass",
          "heavily syncopated right-hand melodies",
          "multi-strain classical march structure (AABBACCDD)",
          "clean acoustic articulation"
        ],
        "rhythmicGrammar": [
          "strict marching 2/4 meter with syncopated right-hand accents tied across eighth-note beats"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Steady left-hand boom-chick march bass with sparkling syncopated right-hand Joplin melody",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "strain-a": [
            "C",
            "G7",
            "C",
            "G7",
            "C",
            "C7",
            "F",
            "D7",
            "G",
            "G7",
            "C",
            "C"
          ],
          "strain-b": [
            "C",
            "G7",
            "C",
            "C",
            "F",
            "C",
            "G7",
            "C"
          ],
          "coda": [
            "F",
            "G7",
            "C",
            "C"
          ]
        }
      };
