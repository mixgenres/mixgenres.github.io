import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_1: GenreStyleDefinition = {
        "id": "timba-songo",
        "worldId": "timba",
        "name": "Songo",
        "origin": "Havana, Cuba (Los Van Van)",
        "era": "1970s–1980s",
        "description": "Changuito Drum Groove • Cowbell •",
        "characteristicInstruments": [
          "drums",
          "congas",
          "bass",
          "piano",
          "flute"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          95,
          115
        ],
        "keySubstyles": [
          "Classic Van Van Songo",
          "Afro-Funk Cuban"
        ],
        "coreConcepts": [
          "Changuito innovative hybrid drum kit and timbale rhythm",
          "linear cowbell and woodblock patterns",
          "syncopated electric bass playing around the downbeat",
          "charanga flute blending with brass and electronics"
        ],
        "rhythmicGrammar": [
          "songo linear drum pattern with bass drum on 1, 1-and-a, 3 and continuous cowbell syncopation"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Changuito songo drum-kit groove locking with syncopated electric bass and charanga flute",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Gm7",
            "C7",
            "Gm7",
            "C7"
          ],
          "groove": [
            "Gm7",
            "C7",
            "Gm7",
            "C7",
            "Fmaj7",
            "Bbmaj7",
            "A7",
            "D7"
          ],
          "coda": [
            "Gm7",
            "C7",
            "Gm7",
            "Gm7"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "timba-timba-habanera",
        "worldId": "timba",
        "name": "Timba Habanera",
        "origin": "Havana, Cuba",
        "era": "1990s–Present",
        "description": "Funk Slap Bass • Gear Shifts",
        "characteristicInstruments": [
          "drums",
          "timbales",
          "congas",
          "bass",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          92,
          108
        ],
        "keySubstyles": [
          "Classic 90s Timba",
          "Songo-Timba"
        ],
        "coreConcepts": [
          "bomba gear shifts with virtuosic slap-bass passages",
          "drum kit and timbales played together by one drummer",
          "two-handed syncopated piano tumbaos",
          "intense call-and-response coros and street slang"
        ],
        "rhythmicGrammar": [
          "dynamic gear shifts: marchando -> pedal -> bomba -> presión with complex polyrhythmic breaks"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Explosive transition into bomba gear: slap-bass slide, conga slap frenzy, and brass shout",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Fm7",
            "Bbm7",
            "C7alt",
            "Fm7"
          ],
          "canto": [
            "Fm7",
            "Bbm7",
            "Eb7",
            "Abmaj7",
            "Dbmaj7",
            "Bbm7",
            "C7",
            "Fm7"
          ],
          "montuno": [
            "Bbm7",
            "C7",
            "Fm7",
            "Fm7"
          ],
          "coda": [
            "Bbm7",
            "C7",
            "Fm7",
            "Fm7"
          ]
        }
      };

export const TIMBA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1],
};
