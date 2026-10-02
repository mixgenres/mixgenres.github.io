import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_4: GenreStyleDefinition = {
        "id": "rock-garage-rock",
        "worldId": "rock",
        "name": "Garage Rock",
        "origin": "Detroit / Detroit / NYC",
        "era": "1960s / 2000s Revival",
        "description": "Lo-Fi Fuzz • Catchy Riffs •",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "overdrive-guitar",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          150
        ],
        "keySubstyles": [
          "60s Garage Punk",
          "2000s Garage Revival"
        ],
        "coreConcepts": [
          "interlocking punchy single-coil guitar riffs",
          "snappy drum-machine-tight acoustic drum beats",
          "cool detached nonchalant vocal delivery",
          "vintage analog tube saturation"
        ],
        "rhythmicGrammar": [
          "tight driving 4/4 with sixteenth-note hi-hat pulse and punchy kick/snare interplay"
        ],
        "danceTags": [
          "festival-fusion",
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Snappy interlocking clean/overdriven guitar duel over tight metronomic drum beat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "Dm",
            "G",
            "C"
          ],
          "verse": [
            "Am",
            "Dm",
            "G",
            "C",
            "F",
            "Dm",
            "E7",
            "E7"
          ],
          "chorus": [
            "C",
            "F",
            "Am",
            "G",
            "C",
            "F",
            "Am",
            "G"
          ],
          "coda": [
            "F",
            "G",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "rock-grunge",
        "worldId": "rock",
        "name": "Grunge",
        "origin": "Seattle, Washington",
        "era": "Late 1980s–1990s",
        "description": "Loud-Quiet-Loud • Fuzz • Anguish\nRaw flannel-clad",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "distortion-guitar",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4",
          "6/8",
          "7/4"
        ],
        "tempoRange": [
          90,
          125
        ],
        "keySubstyles": [
          "Seattle Sound",
          "Post-Grunge"
        ],
        "coreConcepts": [
          "dramatic loud-quiet-loud verse/chorus dynamics",
          "sludgy Electro-Harmonix Big Muff / DS-1 distortion",
          "raw gravelly impassioned vocal delivery",
          "drop-D down-tuned heavy riffs"
        ],
        "rhythmicGrammar": [
          "heavy dragging drum beat exploding into high-energy open-cymbal thrash on chorus"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Clean chorus-drenched verse arpeggio suddenly erupting into crushing fuzz power chord chorus",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "F5",
            "Bb5",
            "Ab5",
            "Db5"
          ],
          "verse": [
            "F5",
            "Bb5",
            "Ab5",
            "Db5",
            "F5",
            "Bb5",
            "Ab5",
            "Db5"
          ],
          "chorus": [
            "F5",
            "Bb5",
            "Ab5",
            "Db5",
            "F5",
            "Bb5",
            "Ab5",
            "Db5"
          ],
          "coda": [
            "F5",
            "Bb5",
            "Ab5",
            "F5"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "rock-hard-rock",
        "worldId": "rock",
        "name": "Hard Rock",
        "origin": "London / Los Angeles",
        "era": "Late 1960s–1980s",
        "description": "Heavy Riffs • Marshall Stacks •",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "overdrive-guitar",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          115,
          140
        ],
        "keySubstyles": [
          "Classic Hard Rock",
          "Blues Rock",
          "Arena Rock"
        ],
        "coreConcepts": [
          "cranking Marshall valve overdrive guitar power chords",
          "driving straight-ahead drum groove with huge snare on 2 and 4",
          "screaming blues-based high-tenor lead vocals",
          "virtuosic pentatonic guitar solos"
        ],
        "rhythmicGrammar": [
          "driving 4/4 rock beat with four-on-the-floor bass drum option and heavy snare backbeat"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Thunderous Marshall stack power chord riff ringing out over driving open-hi-hat drum beat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "A5",
            "G5",
            "D5",
            "A5"
          ],
          "verse": [
            "A5",
            "G5",
            "D5",
            "A5",
            "A5",
            "G5",
            "D5",
            "A5"
          ],
          "chorus": [
            "D5",
            "C5",
            "G5",
            "A5",
            "D5",
            "C5",
            "G5",
            "A5"
          ],
          "solo": [
            "A5",
            "G5",
            "D5",
            "A5"
          ],
          "coda": [
            "D5",
            "E5",
            "A5",
            "A5"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "rock-post-rock",
        "worldId": "rock",
        "name": "Post-Rock",
        "origin": "Montreal / Reykjavik / Texas",
        "era": "Late 1990s–Present",
        "description": "Crescendo • Cinematic • Instrumental\nEpic dynamic",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "strings",
          "glockenspiel"
        ],
        "preferredMeters": [
          "4/4",
          "6/8",
          "3/4"
        ],
        "tempoRange": [
          70,
          110
        ],
        "keySubstyles": [
          "Crescendo Post-Rock",
          "Cinematic Ambient Rock"
        ],
        "coreConcepts": [
          "massive ten-minute dynamic builds from whispering delay to roaring crescendos",
          "bowed guitars and shimmering glockenspiels",
          "absence of standard verse/chorus lyrics",
          "sublime emotional catharsis"
        ],
        "rhythmicGrammar": [
          "slowly accelerating and intensifying drum rolls building from gentle brushes into crashing cymbals"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Whispering tremolo-picked delay guitar slowly swelling into monumental wall of crashing sound",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "F",
            "C",
            "G"
          ],
          "build": [
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F",
            "C",
            "Em"
          ],
          "climax": [
            "F",
            "G",
            "Am",
            "Em",
            "F",
            "G",
            "Am",
            "Am"
          ],
          "coda": [
            "F",
            "G",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "rock-progressive-rock",
        "worldId": "rock",
        "name": "Progressive Rock",
        "origin": "London / Cambridge, UK",
        "era": "Late 1960s–1970s",
        "description": "Odd Meters • Mellotron • Multi-Movement\nComplex",
        "characteristicInstruments": [
          "electric-guitar",
          "strings",
          "bass",
          "drums",
          "organ"
        ],
        "preferredMeters": [
          "7/8",
          "5/4",
          "4/4",
          "12/8"
        ],
        "tempoRange": [
          75,
          135
        ],
        "keySubstyles": [
          "Symphonic Prog",
          "Canterbury Scene",
          "Space Rock"
        ],
        "coreConcepts": [
          "epic multi-movement conceptual song structures",
          "Mellotron string and flute s and Hammond organs",
          "unusual time signatures and classical counterpoint",
          "philosophical and fantastical lyrics"
        ],
        "rhythmicGrammar": [
          "shifting metric structures (7/8 alternating with 4/4) with delicate symphonic dynamics"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Haunting Mellotron string  swelling behind soaring Gilmour-esque melodic guitar bend",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Em9",
            "A7",
            "Em9",
            "A7"
          ],
          "movement1": [
            "Em9",
            "A7",
            "Cmaj7",
            "Bm7",
            "Am7",
            "D7",
            "Gmaj7",
            "B7"
          ],
          "movement2": [
            "Cmaj7",
            "D/C",
            "Bm7",
            "Em",
            "Am7",
            "B7",
            "Em",
            "Em"
          ],
          "coda": [
            "Cmaj7",
            "D",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "rock-psychedelic",
        "worldId": "rock",
        "name": "Psychedelic",
        "origin": "San Francisco / London",
        "era": "Late 1960s",
        "description": "Wah-wah • Tape Delay • Mind-expanding\nAcid-soaked",
        "characteristicInstruments": [
          "electric-guitar",
          "organ",
          "bass",
          "drums",
          "tape-echo"
        ],
        "preferredMeters": [
          "4/4",
          "3/4"
        ],
        "tempoRange": [
          95,
          128
        ],
        "keySubstyles": [
          "Acid Rock",
          "San Francisco Sound"
        ],
        "coreConcepts": [
          "Jimi Hendrix Uni-Vibe, Fuzz Face, and Cry Baby wah-wah manipulation",
          "modal Indian raga scale improvisations",
          "swirling Vox Continental / Farfisa organ chords",
          "surrealistic poetic stream-of-consciousness"
        ],
        "rhythmicGrammar": [
          "fluid expressive drum grooves with Mitch Mitchell-style rolling triplet snare fills"
        ],
        "danceTags": [
          "listening",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Wah-wah pedal sweep over overdriven fuzz 7#9 Hendrix chord with swirling tape flanger",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "E7#9",
            "G",
            "A",
            "E7#9"
          ],
          "verse": [
            "E7#9",
            "G",
            "A",
            "E7#9",
            "C",
            "D",
            "E7#9",
            "E7#9"
          ],
          "solo": [
            "E7#9",
            "A7",
            "E7#9",
            "B7",
            "C",
            "D",
            "E7#9",
            "E7#9"
          ],
          "coda": [
            "C",
            "D",
            "E7#9",
            "E7#9"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
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

const STYLE_7: GenreStyleDefinition = {
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

export const ROCK_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
