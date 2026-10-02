import type { GenreStyleDefinition } from '../../../schema';

export const STYLE_DEFINITION: GenreStyleDefinition = {
        "id": "rock-shoegaze",
        "worldId": "rock",
        "name": "Shoegaze",
        "origin": "London / Oxford / Dublin",
        "era": "Late 1980s–Early 1990s",
        "description": "Glide Guitar • Wall of Sound",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "synth",
          "distortion-guitar"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          95,
          120
        ],
        "keySubstyles": [
          "Dream Pop",
          "Noise Pop Shoegaze"
        ],
        "coreConcepts": [
          "Kevin Shields \"glide guitar\" (strumming while riding the Jaguar tremolo arm)",
          "Alesis/Yamaha reverse reverb into fuzz distortion",
          "whispering androgynous buried vocal harmonies",
          "dense shimmering harmonic overtones"
        ],
        "rhythmicGrammar": [
          "steady metronomic 4/4 drum pulse anchoring floating oceanic guitars"
        ],
        "danceTags": [
          "listening",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Glide-guitar chord bent with tremolo arm while drowning in reverse reverb and roaring fuzz",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dmaj7",
            "Gmaj7",
            "Dmaj7",
            "Gmaj7"
          ],
          "verse": [
            "Dmaj7",
            "Gmaj7",
            "Dmaj7",
            "Gmaj7",
            "Bm7",
            "A",
            "Gmaj7",
            "Gmaj7"
          ],
          "chorus": [
            "Gmaj7",
            "A",
            "Bm7",
            "D",
            "Gmaj7",
            "A",
            "D",
            "D"
          ],
          "coda": [
            "Gmaj7",
            "A",
            "D",
            "D"
          ]
        }
      };
