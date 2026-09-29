import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "tango-tango-tradicional",
        "worldId": "tango",
        "name": "Tango Tradicional",
        "origin": "Buenos Aires / Montevideo",
        "era": "Golden Age (1935–1955)",
        "description": "Marcato • Bandoneón • Golden Age\nThe",
        "characteristicInstruments": [
          "bandoneon",
          "violin",
          "piano",
          "upright-bass",
          "cello"
        ],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          120,
          136
        ],
        "keySubstyles": [
          "Estilo D'Arienzo",
          "Estilo Di Sarli"
        ],
        "coreConcepts": [
          "Marcato en 4 (accented downbeats 1, 2, 3, 4)",
          "Síncopa and arrastre (bass drag into the downbeat)",
          "bandoneón bellows phrasing",
          "dramatic dynamic stops"
        ],
        "rhythmicGrammar": [
          "Marcato en 4: heavy walking downbeats with sharp percussive chiques on violin"
        ],
        "danceTags": [
          "social-partner",
          "tango-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Arrastre bass drag resolving into sharp Marcato en 4 bandoneon chord and violin staccato",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "tema-a": [
            "Am",
            "Dm",
            "E7",
            "Am",
            "Am",
            "Dm",
            "E7",
            "Am"
          ],
          "coda": [
            "E7",
            "E7",
            "Am",
            "Am"
          ]
        }
      };
