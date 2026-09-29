import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "rock-punk-rock",
        "worldId": "rock",
        "name": "Punk Rock",
        "origin": "New York / London",
        "era": "Mid 1970s",
        "description": "Fast Downstrokes • 3 Chords •",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "distortion-guitar",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          160,
          210
        ],
        "keySubstyles": [
          "NYC 77 Punk",
          "UK 77 Punk",
          "Hardcore Punk"
        ],
        "coreConcepts": [
          "relentless high-speed 8th-note downpicked power chords",
          "straightforward three-chord structural simplicity",
          "shouted urgent anti-establishment lyrics",
          "no guitar solos, pure energy and speed"
        ],
        "rhythmicGrammar": [
          "fast 4/4 straight eighth notes with snare cracking relentlessly on 2 and 4"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "\"1-2-3-4!\" shout launching into blinding 180 BPM downpicked 3-chord power blast",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "E5",
            "A5",
            "B5",
            "E5"
          ],
          "verse": [
            "E5",
            "A5",
            "B5",
            "E5",
            "E5",
            "A5",
            "B5",
            "E5"
          ],
          "chorus": [
            "A5",
            "B5",
            "E5",
            "C#5",
            "A5",
            "B5",
            "E5",
            "E5"
          ],
          "coda": [
            "A5",
            "B5",
            "E5",
            "E5"
          ]
        }
      };
