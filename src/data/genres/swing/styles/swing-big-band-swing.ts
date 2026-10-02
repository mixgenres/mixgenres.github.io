import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "swing-big-band-swing",
        "worldId": "swing",
        "name": "Big Band Swing",
        "origin": "New York / Kansas City / Chicago",
        "era": "1930s–1940s",
        "description": "Four-on-the-Floor • Horn Riffs • Lindy",
        "characteristicInstruments": [
          "brass",
          "clarinet",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          140,
          185
        ],
        "keySubstyles": [
          "Kansas City Swing",
          "Harlem Big Band"
        ],
        "coreConcepts": [
          "driving four-on-the-floor bass drum pulse and Freddie Green acoustic guitar chomp",
          "call-and-response horn section riffs (trumpets vs reeds)",
          "virtuosic clarinet and saxophone improvisations",
          "high-flying Lindy Hop dance energy"
        ],
        "rhythmicGrammar": [
          "shuffled ride cymbal [ding-spang-a-lang] over unamplified acoustic four-beat rhythm section"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Benny Goodman soaring clarinet glissando over swinging big band brass shout chorus and ride cymbal",
        "grooveMechanics": {
          "swingPercentage": 62,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Bb",
            "G7",
            "Cm7",
            "F7"
          ],
          "chorus": [
            "Bb",
            "Eb7",
            "Bb",
            "Bb7",
            "Eb7",
            "Ebm7",
            "Bb",
            "G7",
            "Cm7",
            "F7",
            "Bb",
            "F7"
          ],
          "coda": [
            "Cm7",
            "F7",
            "Bb",
            "Bb"
          ]
        }
      };
