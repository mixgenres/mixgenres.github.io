import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "hip-hop-boom-bap",
        "worldId": "hip-hop",
        "name": "Boom Bap",
        "origin": "New York City",
        "era": "1990s",
        "description": "Punchy • 4/4 MPC • Head-nod\nGritty",
        "characteristicInstruments": [
          "sampler",
          "drums",
          "bass",
          "turntable",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          96
        ],
        "keySubstyles": [
          "East Coast Golden Age",
          "SP1200 / MPC60 Boom Bap"
        ],
        "coreConcepts": [
          "12-bit SP-1200 / MPC punchy drum chop",
          "acoustic snare crack on 2 and 4 (the Bap)",
          "heavy filtered jazz bassline sample",
          "intricate multisyllabic lyricism and vocal scratches"
        ],
        "rhythmicGrammar": [
          "swung 16th-note drum swing (MPC 58-62% swing) with heavy kick on 1 and syncopated kick before 3"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Hard vinyl kick-snare pocket with filtered jazz bassline and vocal turntable scratch",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Am7",
            "Dm7",
            "Em7",
            "Am7"
          ],
          "verse": [
            "Am7",
            "Dm7",
            "Em7",
            "Am7",
            "Am7",
            "Dm7",
            "Em7",
            "Am7"
          ],
          "scratch": [
            "Am7",
            "Dm7",
            "Fmaj7",
            "Em7"
          ],
          "coda": [
            "Am7",
            "Dm7",
            "Am7",
            "Am7"
          ]
        }
      };


const STYLE_1: GenreStyleDefinition = {
        "id": "hip-hop-trap",
        "worldId": "hip-hop",
        "name": "Trap",
        "origin": "Atlanta, Georgia",
        "era": "2000s–Present",
        "description": "808 • Fast Hi-Hats • Dark\nRolling",
        "characteristicInstruments": [
          "sub-bass",
          "drums",
          "synth",
          "sampler",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          130,
          160
        ],
        "keySubstyles": [
          "Atlanta Trap",
          "Dark 808 Trap"
        ],
        "coreConcepts": [
          "tuned distorted 808 sub-bass glides",
          "rapid-fire 32nd and 64th-note triplet hi-hat rolls",
          "half-time snare clap on beat 3",
          "dark minor bell/synth melodies"
        ],
        "rhythmicGrammar": [
          "half-time feel: kick on 1, snare clap on 3, with frantic stuttering hi-hat rolls"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Sliding 808 sub-bass pitch glide locked with 32nd-note triplet hi-hat roll and snare on 3",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Fm",
            "Db",
            "Bbm",
            "C7"
          ],
          "verse": [
            "Fm",
            "Db",
            "Bbm",
            "C7",
            "Fm",
            "Db",
            "Bbm",
            "C7"
          ],
          "hook": [
            "Fm",
            "Fm",
            "Db",
            "C7",
            "Fm",
            "Fm",
            "Db",
            "C7"
          ],
          "coda": [
            "Db",
            "C7",
            "Fm",
            "Fm"
          ]
        }
      };


const STYLE_2: GenreStyleDefinition = {
        "id": "hip-hop-lo-fi",
        "worldId": "hip-hop",
        "name": "Lo-Fi",
        "origin": "Tokyo / Internet / Global",
        "era": "2010s–Present",
        "description": "Warm • Vinyl Noise • Relaxed\nJazzy, dusty and sample-driven with laid-back pocket.",
        "characteristicInstruments": [
          "sampler",
          "piano",
          "drums",
          "bass",
          "acoustic-guitar"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          74,
          88
        ],
        "keySubstyles": [
          "Chillhop",
          "Lo-Fi Hip Hop"
        ],
        "coreConcepts": [
          "drunk unquantized J Dilla swing timing",
          "dusty vinyl surface noise and wow/flutter",
          "warm jazz 7th/9th Rhodes and piano chords",
          "mellow sidechain pumping"
        ],
        "rhythmicGrammar": [
          "unquantized loose hi-hats and late snare backbeat creating relaxed human head-nod"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Unquantized drunk kick/snare pocket rolling under warm Rhodes major 7th chord with vinyl crackle",
        "grooveMechanics": {
          "swingPercentage": 62,
          "anticipationOffsetSteps": 1,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Ebmaj7",
            "Cm7",
            "Fm7",
            "Bb7"
          ],
          "verse": [
            "Ebmaj7",
            "Cm7",
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "Cm7",
            "Fm7",
            "Bb7"
          ],
          "chorus": [
            "Abmaj7",
            "Gm7",
            "Fm7",
            "Bb7",
            "Abmaj7",
            "Gm7",
            "Fm7",
            "Ebmaj7"
          ],
          "coda": [
            "Abmaj7",
            "Bb7",
            "Ebmaj7",
            "Ebmaj7"
          ]
        }
      };


const STYLE_3: GenreStyleDefinition = {
        "id": "hip-hop-drill",
        "worldId": "hip-hop",
        "name": "Drill",
        "origin": "Chicago / London / Brooklyn",
        "era": "2010s–Present",
        "description": "Sliding 808 bass and syncopated snare.",
        "characteristicInstruments": [
          "sub-bass",
          "drums",
          "synth",
          "piano",
          "sampler"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          138,
          146
        ],
        "keySubstyles": [
          "UK Drill",
          "Brooklyn Drill",
          "Chicago Drill"
        ],
        "coreConcepts": [
          "extreme sliding 808 sub-bass octaves and pitch bends",
          "syncopated counter-snare on beat 3 and beat 4-and",
          "haunting minor piano/vocal sample loops",
          "aggressive syncopated hi-hat gallop"
        ],
        "rhythmicGrammar": [
          "kick on 1, snare on 3 with delayed secondary snare on 4-and creating iconic drill skip"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Extreme sliding 808 octave jump landing on syncopated counter-snare and hi-hat triplet skip",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Bb",
            "Gm",
            "A7"
          ],
          "verse": [
            "Dm",
            "Bb",
            "Gm",
            "A7",
            "Dm",
            "Bb",
            "Gm",
            "A7"
          ],
          "hook": [
            "Dm",
            "Dm",
            "Bb",
            "A7",
            "Dm",
            "Dm",
            "Gm",
            "A7"
          ],
          "coda": [
            "Bb",
            "A7",
            "Dm",
            "Dm"
          ]
        }
      };


const STYLE_4: GenreStyleDefinition = {
        "id": "hip-hop-g-funk",
        "worldId": "hip-hop",
        "name": "G-Funk",
        "origin": "Los Angeles / Long Beach, California",
        "era": "1990s",
        "description": "Laid-back • Whiny Synth • Funk",
        "characteristicInstruments": [
          "synth",
          "bass",
          "drums",
          "electric-guitar",
          "sampler"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          88,
          98
        ],
        "keySubstyles": [
          "West Coast G-Funk",
          "Gangsta Rap"
        ],
        "coreConcepts": [
          "high-pitched sine wave portamento synth lead (\"whistle\")",
          "heavy live-sounding P-Funk slap basslines",
          "relaxed laid-back pocket groove",
          "lush female vocal choruses"
        ],
        "rhythmicGrammar": [
          "relaxed 4/4 funk groove with heavy kick, crisp handclap snare, and lazy hi-hat swing"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "High whiny portamento sine synth lead gliding over fat funk bassline and lazy clap backbeat",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Em7",
            "A7",
            "Em7",
            "A7"
          ],
          "verse": [
            "Em7",
            "A7",
            "Em7",
            "A7",
            "Em7",
            "A7",
            "Em7",
            "A7"
          ],
          "chorus": [
            "Cmaj7",
            "Bm7",
            "Am7",
            "B7",
            "Cmaj7",
            "Bm7",
            "Em7",
            "Em7"
          ],
          "coda": [
            "Cmaj7",
            "Bm7",
            "Em7",
            "Em7"
          ]
        }
      };


const STYLE_5: GenreStyleDefinition = {
        "id": "hip-hop-experimental",
        "worldId": "hip-hop",
        "name": "Experimental",
        "origin": "Sacramento / Los Angeles / Underground",
        "era": "2010s–Present",
        "description": "Abrasive • Industrial • Glitchy\nDistorted avant-garde",
        "characteristicInstruments": [
          "sampler",
          "drums",
          "sub-bass",
          "synth",
          "distortion-guitar"
        ],
        "preferredMeters": [
          "4/4",
          "5/4"
        ],
        "tempoRange": [
          110,
          160
        ],
        "keySubstyles": [
          "Industrial Hip Hop",
          "Glitch Rap",
          "Noise Rap"
        ],
        "coreConcepts": [
          "blown-out digital distortion and clipping",
          "erratic rhythm changes and sudden time signature shifts",
          "aggressive punk vocal screams and frantic flow",
          "anarchic audio collage"
        ],
        "rhythmicGrammar": [
          "fractured industrial percussion colliding with explosive distorted bass hits"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Blown-out distorted sub-kick erupting into frantic glitched industrial noise bursts",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Dm",
            "Dm",
            "Dm"
          ],
          "verse": [
            "Dm",
            "D#dim",
            "Dm",
            "D#dim"
          ],
          "drop": [
            "Dm",
            "Dm",
            "Bb",
            "C#dim"
          ],
          "coda": [
            "Dm",
            "Dm",
            "Dm",
            "Dm"
          ]
        }
      };


const STYLE_6: GenreStyleDefinition = {
        "id": "hip-hop-cloud-rap",
        "worldId": "hip-hop",
        "name": "Cloud Rap",
        "origin": "Stockholm / Internet / Houston",
        "era": "2010s–Present",
        "description": "Ethereal • Reverb • Dreamy\nSpacey, ambient-sampled",
        "characteristicInstruments": [
          "synth",
          "sampler",
          "sub-bass",
          "drums",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          140
        ],
        "keySubstyles": [
          "Sad Boys Aesthetic",
          "Vapor Trap",
          "Ambient Trap"
        ],
        "coreConcepts": [
          "heavily washed ambient synth pads and reverb",
          "floating pitched-down vocal samples",
          "half-time slow 808 percussion",
          "melancholic detached delivery"
        ],
        "rhythmicGrammar": [
          "slow half-time trap beat muffled in cavernous reverb with gentle floating hats"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Ethereal vocal chop drowning in massive reverb over soft half-time 808 bass kick",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Dbmaj7",
            "Bbm7",
            "Fm",
            "Ab"
          ],
          "verse": [
            "Dbmaj7",
            "Bbm7",
            "Fm",
            "Ab",
            "Dbmaj7",
            "Bbm7",
            "Fm",
            "Ab"
          ],
          "chorus": [
            "Gbmaj7",
            "Ab",
            "Bbm7",
            "Fm",
            "Gbmaj7",
            "Ab",
            "Dbmaj7",
            "Dbmaj7"
          ],
          "coda": [
            "Gbmaj7",
            "Ab",
            "Dbmaj7",
            "Dbmaj7"
          ]
        }
      };


const STYLE_7: GenreStyleDefinition = {
        "id": "hip-hop-jazz-rap",
        "worldId": "hip-hop",
        "name": "Jazz Rap",
        "origin": "Queens / Brooklyn / Chicago",
        "era": "1990s–Present",
        "description": "Upright Bass • Horns • Conscious\nLyrical",
        "characteristicInstruments": [
          "upright-bass",
          "brass",
          "drums",
          "piano",
          "sampler"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          88,
          100
        ],
        "keySubstyles": [
          "Native Tongues Sound",
          "Conscious Hip Hop",
          "Neo-Soul Rap"
        ],
        "coreConcepts": [
          "walking acoustic upright basslines",
          "warm trumpet and saxophone horn riffs",
          "extended jazz chords (m9, maj7, 13th)",
          "socially conscious poetic lyricism"
        ],
        "rhythmicGrammar": [
          "deeply swung jazz drum pocket with warm brushed snare and relaxed kick syncopation"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Warm upright bass walking line locked with jazzy snare rimshot and muted trumpet lick",
        "grooveMechanics": {
          "swingPercentage": 60,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Cm9",
            "F13",
            "Bbmaj7",
            "G7b9"
          ],
          "verse": [
            "Cm9",
            "F13",
            "Bbmaj7",
            "G7b9",
            "Cm9",
            "F13",
            "Bbmaj7",
            "G7b9"
          ],
          "chorus": [
            "Ebm9",
            "Ab13",
            "Dbmaj7",
            "G7b9",
            "Cm9",
            "F13",
            "Bbmaj7",
            "Bbmaj7"
          ],
          "coda": [
            "Cm9",
            "F13",
            "Bbmaj7",
            "Bbmaj7"
          ]
        }
      };











export const HIP_HOP_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7] };
