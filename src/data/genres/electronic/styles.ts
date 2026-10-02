import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_6: GenreStyleDefinition = {
        "id": "electronic-ambient",
        "worldId": "electronic",
        "name": "Ambient",
        "origin": "UK / Global",
        "era": "1970s–Present",
        "description": "Timbral • Beatless • Expansive\nSubtle sonic",
        "characteristicInstruments": ["synth", "sampler", "synth", "string-ensemble", "piano"],
        "preferredMeters": [
          "free"
        ],
        "tempoRange": [
          40,
          60
        ],
        "keySubstyles": [
          "Classic Ambient",
          "Drone Music",
          "Environmental Soundscapes"
        ],
        "coreConcepts": [
          "non-rhythmic expansive soundscapes",
          "endless reverb and tape delay decay",
          "gradual micro-tonal and harmonic evolutions",
          "atmospheric immersion"
        ],
        "rhythmicGrammar": [
          "unmetered sound flow evolving organically without percussive transients"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Expansive analog synth chord slowly filtering and dissolving into infinite reverb tail",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Cmaj9",
            "Fmaj7",
            "Am9",
            "Gadd9"
          ],
          "theme": [
            "Cmaj9",
            "Fmaj7",
            "Am9",
            "Gadd9",
            "Dm9",
            "Em7",
            "Fmaj7",
            "Gadd9"
          ],
          "coda": [
            "Fmaj7",
            "Gadd9",
            "Cmaj9",
            "Cmaj9"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "electronic-downtempo",
        "worldId": "electronic",
        "name": "Downtempo",
        "origin": "Bristol / Vienna / Ibiza",
        "era": "1990s–Present",
        "description": "Chilled • 4/4 • Atmospheric\nRelaxed, lush",
        "characteristicInstruments": ["synth", "drums", "bass", "sampler", "guitar"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          80,
          100
        ],
        "keySubstyles": [
          "Chillout",
          "Lush Organic Downtempo"
        ],
        "coreConcepts": [
          "spacious warm synth pads",
          "organic percussion textures (shakers, foley)",
          "relaxed unhurried drum groove",
          "melodic acoustic/electronic hybridity"
        ],
        "rhythmicGrammar": [
          "relaxed half-time or unhurried 4/4 with soft sidechain compression breathing"
        ],
        "danceTags": [
          "listening",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Lush filtering synth pad over relaxed acoustic drum loop and deep sub-bass",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Am7",
            "Fmaj7",
            "C",
            "G"
          ],
          "verse": [
            "Am7",
            "Fmaj7",
            "C",
            "G",
            "Am7",
            "Fmaj7",
            "C",
            "G"
          ],
          "chorus": [
            "Fmaj7",
            "G",
            "Am7",
            "Em7",
            "Fmaj7",
            "G",
            "Am7",
            "Am7"
          ],
          "coda": [
            "Fmaj7",
            "G",
            "Am7",
            "Am7"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "electronic-dubstep",
        "worldId": "electronic",
        "name": "Dubstep",
        "origin": "Croydon, South London",
        "era": "2000s",
        "description": "Heavy Sub • Half-step • Dark\n140",
        "characteristicInstruments": ["synth", "drums", "synth", "sampler"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          138,
          144
        ],
        "keySubstyles": [
          "Deep Dubstep",
          "UK Garage Roots Dubstep"
        ],
        "coreConcepts": [
          "massive 40Hz sub-bass pressure",
          "half-time snare drop on beat 3",
          "space, silence, and dub delay feedback",
          "shuffling 2-step hi-hats"
        ],
        "rhythmicGrammar": [
          "half-time beat: kick on 1, snare crack on 3, surrounded by spacious delay tails"
        ],
        "danceTags": [
          "festival-fusion",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Snare crack on beat 3 with massive filtered sub-bass sweep and vinyl crackle",
        "grooveMechanics": {
          "swingPercentage": 52,
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
          "drop": [
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

const STYLE_4: GenreStyleDefinition = {
        "id": "electronic-garage",
        "worldId": "electronic",
        "name": "Garage",
        "origin": "London, UK",
        "era": "Late 1990s–Present",
        "description": "Skippy • 2-Step • Vocal chops\nSyncopated",
        "characteristicInstruments": ["drums", "bass", "synth", "sampler", "piano"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          130,
          138
        ],
        "keySubstyles": [
          "UK 2-Step",
          "Speed Garage",
          "Future Garage"
        ],
        "coreConcepts": [
          "skippy syncopated 2-step kick/snare pattern",
          "deep warped basslines (donk/ Reese)",
          "chopped pitched-up vocal micro-samples",
          "bright house piano chords"
        ],
        "rhythmicGrammar": [
          "shuffled 16th-note hi-hats with kick on 1 and displaced syncopated second kick"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Skippy 2-step kick syncopation with snappy pitched vocal slice and deep Reese bass",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 1,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Dbmaj7",
            "Ebm7",
            "Fm7",
            "Gbmaj7"
          ],
          "verse": [
            "Dbmaj7",
            "Ebm7",
            "Fm7",
            "Gbmaj7",
            "Bbm7",
            "Ab",
            "Gbmaj7",
            "Gbmaj7"
          ],
          "chorus": [
            "Gbmaj7",
            "Ab",
            "Bbm7",
            "Fm7",
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

const STYLE_2: GenreStyleDefinition = {
        "id": "electronic-idm",
        "worldId": "electronic",
        "name": "IDM",
        "origin": "UK / Europe",
        "era": "1990s–Present",
        "description": "Complex • Glitchy • Brain Dance\nIntricate",
        "characteristicInstruments": ["sampler", "synth", "drums", "synth", "synth"],
        "preferredMeters": [
          "4/4",
          "7/8"
        ],
        "tempoRange": [
          110,
          160
        ],
        "keySubstyles": [
          "Intelligent Dance Music",
          "Braindance",
          "Glitch"
        ],
        "coreConcepts": [
          "micro-edited drum glitching (Amen chop)",
          "haunting analog synth nostalgia",
          "irregular rhythmic drill rolls",
          "unexpected harmonic detuning"
        ],
        "rhythmicGrammar": [
          "polymetric micro-sliced drum samples shifting across unpredictable subdivisions"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Micro-edited 64th-note glitch drum roll juxtaposed with warm melancholic synth chord",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Ebmaj7",
            "Cm7",
            "Abmaj7",
            "Bb"
          ],
          "verse": [
            "Ebmaj7",
            "Cm7",
            "Abmaj7",
            "Bb",
            "Fm7",
            "Gm7",
            "Abmaj7",
            "Bb"
          ],
          "coda": [
            "Abmaj7",
            "Bb",
            "Ebmaj7",
            "Ebmaj7"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "electronic-synthwave",
        "worldId": "electronic",
        "name": "Synthwave",
        "origin": "France / USA / Internet",
        "era": "2000s–Present",
        "description": "80s Nostalgia • Arpeggios • Gated",
        "characteristicInstruments": ["synth", "drums", "bass", "guitar", "synth"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          100,
          128
        ],
        "keySubstyles": [
          "Outrun",
          "Darksynth",
          "Dreamwave"
        ],
        "coreConcepts": [
          "relentless 16th-note bass arpeggios",
          "gated reverb snare hits",
          "soaring lead synthesizer melodies",
          "80s action film nostalgic mood"
        ],
        "rhythmicGrammar": [
          "four-on-the-floor kick with massive gated snare on 2 and 4 and 16th synth bass chug"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Driving 16th-note analog synth bass arp driving into massive gated reverb snare",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "F",
            "C",
            "G"
          ],
          "verse": [
            "Am",
            "F",
            "C",
            "G",
            "Am",
            "F",
            "C",
            "G"
          ],
          "chorus": [
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

const STYLE_7: GenreStyleDefinition = {
        "id": "electronic-techno",
        "worldId": "electronic",
        "name": "Techno",
        "origin": "Detroit, Michigan / Berlin",
        "era": "1980s–Present",
        "description": "Relentless • 4/4 • Industrial\nMachine-driven hypnotic",
        "characteristicInstruments": ["drums", "synth", "synth", "sampler", "synth"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          128,
          140
        ],
        "keySubstyles": [
          "Detroit Techno",
          "Berlin Warehouse Techno",
          "Hypnotic Techno"
        ],
        "coreConcepts": [
          "heavy Roland TR-909 kick drum on every beat",
          "offbeat open hi-hat sizzle",
          "hypnotic repetitive modular synth sequence",
          "industrial tension and release"
        ],
        "rhythmicGrammar": [
          "unrelenting 4-on-the-floor kick with 16th-note shaker/rim ostinato and offbeat hats"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Pounding 909 kick drum on all 4 beats with driving offbeat open hi-hat sizzle",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Dm",
            "Dm",
            "Dm"
          ],
          "buildup": [
            "Dm",
            "Dm",
            "Bb",
            "C"
          ],
          "drop": [
            "Dm",
            "Dm",
            "Dm",
            "Dm",
            "Dm",
            "Dm",
            "Bb",
            "C"
          ],
          "coda": [
            "Dm",
            "Dm",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "electronic-trip-hop",
        "worldId": "electronic",
        "name": "Trip-Hop",
        "origin": "Bristol, UK",
        "era": "1990s",
        "description": "Moody • Cinematic • Heavy\nSlow hip-hop",
        "characteristicInstruments": ["drums", "bass", "sampler", "synth", "string-ensemble"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          74,
          90
        ],
        "keySubstyles": [
          "Bristol Sound",
          "Cinematic Trip Hop"
        ],
        "coreConcepts": [
          "heavy detuned hip-hop drum breaks",
          "haunting vinyl scratches and tape hiss",
          "dark minor string arrangements",
          "smoky sultry vocals"
        ],
        "rhythmicGrammar": [
          "heavy slow breakbeat with prominent sub-bass rumble and offbeat ghost snares"
        ],
        "danceTags": [
          "listening",
          "blues-fusion-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Heavy vinyl-crackle breakbeat dropping under haunting minor string ostinato",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
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
          "chorus": [
            "Bb",
            "C",
            "Dm",
            "Dm",
            "Bb",
            "C",
            "A7",
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

export const ELECTRONIC_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
