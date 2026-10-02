import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_2: GenreStyleDefinition = {
        "id": "ska-ska-punk",
        "worldId": "ska",
        "name": "Ska-Punk",
        "origin": "California / Gainesville / Boston",
        "era": "1990s",
        "description": "Distortion • Blistering Speed • Horn",
        "characteristicInstruments": [
          "electric-guitar",
          "brass",
          "bass",
          "drums",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          160,
          200
        ],
        "keySubstyles": [
          "Third Wave Ska",
          "Skate Ska-Punk"
        ],
        "coreConcepts": [
          "instant dynamic switching between clean ska upstrokes and roaring distortion power chords",
          "blazing high-speed brass horn melodies in unison",
          "punk-rock fast drum beats and breakdown skank pits",
          "humorous self-deprecating lyrics"
        ],
        "rhythmicGrammar": [
          "blistering 4/4 punk beat alternating with fast clean offbeat skanks and distorted choruses"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Clean high-speed ska skank abruptly exploding into roaring distortion power chord chorus and horns",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G",
            "Am",
            "F"
          ],
          "verse": [
            "C",
            "G",
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F"
          ],
          "chorus": [
            "F",
            "G",
            "C",
            "Am",
            "F",
            "G",
            "C",
            "C"
          ],
          "coda": [
            "F",
            "G",
            "C",
            "C"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "ska-trad-ska",
        "worldId": "ska",
        "name": "Traditional Ska",
        "origin": "Kingston, Jamaica",
        "era": "Late 1950s–1960s",
        "description": "Upbeat Chop • Big Band Horns",
        "characteristicInstruments": [
          "brass",
          "electric-guitar",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          140
        ],
        "keySubstyles": [
          "First Wave Ska",
          "Studio One Sound"
        ],
        "coreConcepts": [
          "sharp offbeat guitar and piano chops (the \"skank\")",
          "Don Drummond lyrical trombone solos and trumpet fanfares",
          "walking acoustic basslines with jazz swing feel",
          "infectious dancehall energy"
        ],
        "rhythmicGrammar": [
          "accent strictly on offbeat eighth notes (1-and, 2-and, 3-and, 4-and) with walking bass on downbeats"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Don Drummond trombone lead soaring over sharp offbeat skank guitar chop and walking bass",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Bb",
            "Eb",
            "F",
            "Bb"
          ],
          "theme": [
            "Bb",
            "Eb",
            "F",
            "Bb",
            "Gm",
            "Cm",
            "F",
            "Bb"
          ],
          "solo": [
            "Eb",
            "Eb",
            "Bb",
            "Bb",
            "F",
            "Eb",
            "Bb",
            "Bb"
          ],
          "coda": [
            "Eb",
            "F",
            "Bb",
            "Bb"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "ska-two-tone",
        "worldId": "ska",
        "name": "Two-Tone",
        "origin": "Coventry / London, UK",
        "era": "Late 1970s–Early 1980s",
        "description": "Punk Energy • Checkered • Social",
        "characteristicInstruments": [
          "electric-guitar",
          "organ",
          "brass",
          "bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          140,
          165
        ],
        "keySubstyles": [
          "2-Tone UK",
          "Nutty Sound"
        ],
        "coreConcepts": [
          "fast punk rock tempos combined with Jamaican ska skank chops",
          "Jerry Dammers biting Hammond organ leads",
          "antiracist working-class lyrics and black-and-white checkered suits",
          "snappy drum kick and snare"
        ],
        "rhythmicGrammar": [
          "rapid offbeat guitar skank over driving rock backbeat snare and aggressive bassline"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Fast-paced organ skank chop launching into snappy British vocal delivery and punchy brass",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "G",
            "Dm",
            "G"
          ],
          "verse": [
            "Dm",
            "G",
            "Dm",
            "G",
            "Dm",
            "G",
            "Dm",
            "G"
          ],
          "chorus": [
            "F",
            "G",
            "Dm",
            "Dm",
            "F",
            "G",
            "A7",
            "A7"
          ],
          "coda": [
            "Dm",
            "G",
            "Dm",
            "Dm"
          ]
        }
      };

export const SKA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2],
};
