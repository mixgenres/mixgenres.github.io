import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_0: GenreStyleDefinition = {
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

const STYLE_1: GenreStyleDefinition = {
        "id": "swing-gypsy-jazz",
        "worldId": "swing",
        "name": "Gypsy Jazz (Manouche)",
        "origin": "Paris, France",
        "era": "1930s–1950s",
        "description": "La Pompe • Selmer Guitars •",
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

const STYLE_2: GenreStyleDefinition = {
        "id": "swing-jump-blues",
        "worldId": "swing",
        "name": "Jump Blues",
        "origin": "Los Angeles / Kansas City",
        "era": "Late 1940s–1950s",
        "description": "Honking Tenor Sax • Boogying Bass",
        "characteristicInstruments": [
          "tenor-sax",
          "brass",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          135,
          175
        ],
        "keySubstyles": [
          "Proto-Rock and Roll",
          "Jumpin' Swing"
        ],
        "coreConcepts": [
          "honking, screaming tenor saxophone solos and riffs",
          "shuffled boogie-woogie piano and walking basslines",
          "humorous, energetic shouted vocal storytelling",
          "proto-rock rhythmic power"
        ],
        "rhythmicGrammar": [
          "fast swinging 12-bar blues shuffle with aggressive backbeat snare rimshots on 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Honking tenor saxophone squeal over roaring boogie-woogie piano shuffle and jump blues shout",
        "grooveMechanics": {
          "swingPercentage": 60,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "C7",
            "G",
            "D7"
          ],
          "blues": [
            "G7",
            "G7",
            "G7",
            "G7",
            "C7",
            "C7",
            "G7",
            "G7",
            "D7",
            "C7",
            "G7",
            "D7"
          ],
          "coda": [
            "D7",
            "C7",
            "G7",
            "G7"
          ]
        }
      };

export const SWING_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2],
};
