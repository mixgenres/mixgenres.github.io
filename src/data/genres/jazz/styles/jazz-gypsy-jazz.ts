import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "jazz-gypsy-jazz",
        "worldId": "jazz",
        "name": "Gypsy Jazz",
        "origin": "Paris, France (Manouche GenreStyleDefinition)",
        "era": "1930s–1940s",
        "description": "La pompe rhythm guitar and acoustic strings.",
        "characteristicInstruments": [
          "acoustic-guitar",
          "violin",
          "upright-bass",
          "clarinet",
          "tenor-sax"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          140,
          240
        ],
        "keySubstyles": [
          "Jazz Manouche",
          "Hot Club Swing"
        ],
        "coreConcepts": [
          "\"La Pompe\" percussive acoustic guitar rhythm strumming on 2 and 4",
          "virtuosic chromatic Selmer acoustic guitar runs",
          "sweet singing Grappelli-style violin glissandi and vibrato",
          "driving bass pulse without drums"
        ],
        "rhythmicGrammar": [
          "tight percussive four-to-the-bar rhythm guitar with heavy downward chop on beats 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Crisp percussive La Pompe guitar chop driving blinding chromatic Django acoustic guitar arpeggio",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Am6",
            "E7",
            "Am6",
            "E7"
          ],
          "head": [
            "Am6",
            "Am6",
            "Dm6",
            "Dm6",
            "E7",
            "E7",
            "Am6",
            "E7"
          ],
          "bridge": [
            "Cmaj7",
            "C#dim",
            "Dm7",
            "G7",
            "Cmaj7",
            "F7",
            "E7",
            "E7"
          ],
          "coda": [
            "Dm6",
            "E7",
            "Am6",
            "Am6"
          ]
        }
      };
