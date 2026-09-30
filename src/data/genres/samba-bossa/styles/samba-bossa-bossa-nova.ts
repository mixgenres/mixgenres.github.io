import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "samba-bossa-bossa-nova",
        "worldId": "samba-bossa",
        "name": "Bossa Nova",
        "origin": "Rio de Janeiro (Ipanema / Copacabana)",
        "era": "Late 1950s–1960s",
        "description": "Nylon-string guitar and intimate vocals.",
        "characteristicInstruments": [
          "acoustic-guitar",
          "piano",
          "flute",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "2/4",
          "4/4"
        ],
        "tempoRange": [
          120,
          145
        ],
        "keySubstyles": [
          "Classic Bossa",
          "Bossa-Jazz"
        ],
        "coreConcepts": [
          "João Gilberto violão syncopated thumb bass and finger comping",
          "extended jazz harmonies (maj7, m7b5, 9, 13)",
          "whispered understated vocal delivery",
          "brush pattern on snare simulating surdo and shaker"
        ],
        "rhythmicGrammar": [
          "bossa nova guitar comping with thumb anchoring alternating bass on downbeats and fingers syncopating chords on offbeats"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "João Gilberto nylon guitar syncopation accompanying understated vocal whisper and brush snare",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Fmaj7",
            "G7",
            "Gm7",
            "C7b9"
          ],
          "parte-a": [
            "Fmaj7",
            "G7",
            "Gm7",
            "C7b9",
            "Fmaj7",
            "G7",
            "Gm7",
            "C7b9"
          ],
          "parte-b": [
            "Gbmaj7",
            "B7",
            "F#m7",
            "B7",
            "Gm7",
            "C7",
            "Fmaj7",
            "C7b9"
          ],
          "coda": [
            "Gbmaj7",
            "C7b9",
            "Fmaj7",
            "Fmaj7"
          ]
        }
      };
