import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "swing-gypsy-jazz",
        "worldId": "swing",
        "name": "Gypsy Jazz (Manouche)",
        "origin": "Paris, France",
        "era": "1930s–1950s",
        "description": "La pompe rhythm guitar played on Selmer-style guitars.",
        "characteristicInstruments": [
          "acoustic-guitar",
          "violin",
          "upright-bass",
          "clarinet",
          "alto-sax"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          160,
          240
        ],
        "keySubstyles": [
          "Jazz Manouche",
          "Swing Parisien"
        ],
        "coreConcepts": [
          "\"La Pompe\" percussive acoustic rhythm guitar strumming (dry bass hit on 1 & 3, crisp chop on 2 & 4)",
          "dazzling chromatic two-finger Django guitar solos",
          "soaring romantic violin phrasing (Stéphane Grappelli)",
          "purely acoustic string ensemble format without drums"
        ],
        "rhythmicGrammar": [
          "La Pompe: [bass-downbeat, crisp-chop-backbeat] driving relentlessly at blazing tempos"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Dazzling Django chromatic guitar arpeggio flying over relentless La Pompe rhythm guitar chop",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "E7",
            "Am",
            "E7"
          ],
          "theme": [
            "Am",
            "Dm",
            "E7",
            "Am",
            "C",
            "G7",
            "C",
            "E7",
            "Am",
            "Dm",
            "E7",
            "Am"
          ],
          "bridge": [
            "A7",
            "Dm",
            "G7",
            "C",
            "B7",
            "E7",
            "Am",
            "E7"
          ],
          "coda": [
            "Dm",
            "E7",
            "Am",
            "Am"
          ]
        }
      };
