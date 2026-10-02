import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_6: GenreStyleDefinition = {
        "id": "kizomba-ghetto-zouk",
        "worldId": "kizomba",
        "name": "Ghetto Zouk",
        "origin": "Lisbon, Portugal / Rotterdam / Paris",
        "era": "2000s–Present",
        "description": "R&B Chords • Electronic • Heavy",
        "characteristicInstruments": [
          "synth",
          "drums",
          "sub-bass",
          "piano",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          98
        ],
        "keySubstyles": [
          "Ghetto Zouk Pop",
          "Lisbon Zouk"
        ],
        "coreConcepts": [
          "R&B-style lush synthesizer chords and piano voicings",
          "hard-hitting punchy electronic kick/snare",
          "silky romantic autotuned and acoustic vocals",
          "dynamic club-friendly production"
        ],
        "rhythmicGrammar": [
          "crisp electronic 4/4 zouk beat: kick on 1, 1-and, 3-and with sharp snare clap on 3"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Hard electronic kick [0, 6, 10] with lush R&B minor 9th synth chords and silky vocals",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Bb",
            "F",
            "C"
          ],
          "verse": [
            "Dm",
            "Bb",
            "F",
            "C",
            "Dm",
            "Bb",
            "F",
            "C"
          ],
          "chorus": [
            "Bb",
            "C",
            "Dm",
            "Am",
            "Bb",
            "C",
            "Dm",
            "Dm"
          ],
          "coda": [
            "Bb",
            "C",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "kizomba-passada",
        "worldId": "kizomba",
        "name": "Passada",
        "origin": "Cape Verde / Angola",
        "era": "1980s–Present",
        "description": "Smooth • Walking • Classic\nRefined, flowing",
        "characteristicInstruments": [
          "acoustic-guitar",
          "bass",
          "drums",
          "piano",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          90,
          104
        ],
        "keySubstyles": [
          "Passada Cabo-Verdiana",
          "Classic Flow"
        ],
        "coreConcepts": [
          "continuous, smooth, elegant walking steps",
          "flowing partner connection without sharp breaks",
          "warm Cabo-Verdean / Angolan melodies",
          "gentle hip movement in sync with steps"
        ],
        "rhythmicGrammar": [
          "smooth 4/4 pulse with warm bass and gentle syncopated guitar strumming"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Gentle acoustic guitar strumming and warm bass accompanying smooth continuous walking step",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7"
          ],
          "verse": [
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7",
            "Fmaj7",
            "Dm7",
            "E7",
            "Am7"
          ],
          "chorus": [
            "Dm7",
            "G7",
            "Cmaj7",
            "Fmaj7",
            "Dm7",
            "E7",
            "Am7",
            "Am7"
          ],
          "coda": [
            "Dm7",
            "E7",
            "Am7",
            "Am7"
          ]
        }
      };

const STYLE_7: GenreStyleDefinition = {
        "id": "kizomba-semba-lento",
        "worldId": "kizomba",
        "name": "Semba Lento",
        "origin": "Angola",
        "era": "1970s–Present",
        "description": "Slow • Nostalgic • Grounded\nDeep, soulful",
        "characteristicInstruments": [
          "acoustic-guitar",
          "acoustic-bass",
          "dikanza",
          "hand-percussion",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          80,
          94
        ],
        "keySubstyles": [
          "Semba Canção",
          "Acoustic Semba"
        ],
        "coreConcepts": [
          "poignant nostalgic (saudade) vocal delivery",
          "fingerpicked nylon-string acoustic guitars",
          "subtle dikanza and conga accompaniment",
          "deep emotional connection between partners"
        ],
        "rhythmicGrammar": [
          "slow, deliberate 4/4 swing with syncopated acoustic guitar arpeggios and gentle shaker"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Slow poignant nylon-string guitar arpeggio accompanied by soft dikanza scrape and emotive vocals",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "Am",
            "B7",
            "Em"
          ],
          "verse": [
            "Em",
            "Am",
            "D7",
            "G",
            "C",
            "Am",
            "B7",
            "Em"
          ],
          "chorus": [
            "Am",
            "D7",
            "G",
            "Em",
            "Am",
            "B7",
            "Em",
            "Em"
          ],
          "coda": [
            "Am",
            "B7",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "kizomba-semba-playful",
        "worldId": "kizomba",
        "name": "Semba Playful",
        "origin": "Luanda, Angola",
        "era": "1950s–Present",
        "description": "Upbeat • Bouncy • Roots\nJoyful fast-paced",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "congas",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          102,
          118
        ],
        "keySubstyles": [
          "Semba Rápido",
          "Semba de Carnaval"
        ],
        "coreConcepts": [
          "acrobatic trick footwork (ginga)",
          "rasping dikanza (reco-reco) scraper",
          "intricate dual-guitar fingerpicking",
          "humorous joyful social commentary"
        ],
        "rhythmicGrammar": [
          "driving syncopated 4/4 with dikanza scraping continuous 16ths and conga slap on 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Bouncy dual-guitar syncopation with continuous dikanza scrape and playful vocal laugh",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "verse": [
            "C",
            "G7",
            "C",
            "G7",
            "F",
            "C",
            "G7",
            "C"
          ],
          "chorus": [
            "F",
            "G7",
            "Em",
            "Am",
            "Dm",
            "G7",
            "C",
            "C"
          ],
          "coda": [
            "F",
            "G7",
            "C",
            "C"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "kizomba-tarraxinha",
        "worldId": "kizomba",
        "name": "Tarraxinha",
        "origin": "Luanda, Angola",
        "era": "Late 1990s–Present",
        "description": "Sensual • Deep Bass • Micro-movement\nSlow,",
        "characteristicInstruments": [
          "sub-bass",
          "drums",
          "synth",
          "sampler",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          78,
          90
        ],
        "keySubstyles": [
          "Tarraxinha de Luanda",
          "Electronic Tarraxa"
        ],
        "coreConcepts": [
          "slow, hypnotic, minimal percussive beats",
          "massive subterranean sub-bass frequencies",
          "intense static pelvic micro-movements",
          "minimal melodic distraction"
        ],
        "rhythmicGrammar": [
          "sparse, heavy kick and low-tom pulses with deep sub-bass slides and subtle rim clicks"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Deep resonant sub-bass pulse dropping on slow pelvic micro-isolation cue",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "loop": [
            "Fm",
            "Db",
            "Bbm",
            "C7"
          ]
        }
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "kizomba-tarraxo",
        "worldId": "kizomba",
        "name": "Tarraxo",
        "origin": "Paris, France / Portugal",
        "era": "2018–Present",
        "description": "Heavy Sub • Robotic • Chest",
        "characteristicInstruments": [
          "sub-bass",
          "drums",
          "synth",
          "sampler",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          80,
          92
        ],
        "keySubstyles": [
          "Tarraxo French Style",
          "Tarraxo Wave"
        ],
        "coreConcepts": [
          "upper body and chest-led circular movement dynamics",
          "robotic pops, waves, and isolations",
          "aggressive sub-bass wobble and trap-influenced drums",
          "dark electronic sound design"
        ],
        "rhythmicGrammar": [
          "sharp electronic trap-kizomba fusion with stuttering hi-hats and heavy sub-kick"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Aggressive electronic sub-kick and trap snare supporting dynamic chest-roll isolation",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "drop": [
            "Cm",
            "Ab",
            "Fm",
            "G7",
            "Cm",
            "Ab",
            "Bb",
            "G7"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "kizomba-tradicional",
        "worldId": "kizomba",
        "name": "Tradicional",
        "origin": "Luanda, Angola",
        "era": "1980s–1990s",
        "description": "Grounded • 4/4 Zouk Beat •",
        "characteristicInstruments": [
          "bass",
          "drums",
          "acoustic-guitar",
          "synth",
          "hand-percussion"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          88,
          100
        ],
        "keySubstyles": [
          "Classic Angolan Kizomba",
          "Passada Tradicional"
        ],
        "coreConcepts": [
          "grounded weight transfers and clean passada footwork",
          "warm melodic electric basslines",
          "syncopated zouk-derived drum rhythm",
          "sweet Portuguese/Kimbundu vocal melodies"
        ],
        "rhythmicGrammar": [
          "kick on 1, 1-and, 3-and with crisp snare on 3 and soft rolling hi-hat"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Smooth syncopated bassline walking under classic Angolan kizomba kick-snare pulse",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Gm",
            "C",
            "F"
          ],
          "verse": [
            "Dm",
            "Gm",
            "C",
            "F",
            "Bb",
            "Gm",
            "A7",
            "Dm"
          ],
          "chorus": [
            "Gm",
            "C",
            "F",
            "Dm",
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ],
          "coda": [
            "Gm",
            "A7",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "kizomba-urbankiz",
        "worldId": "kizomba",
        "name": "Urbankiz",
        "origin": "Paris, France / European Circuit",
        "era": "2010s–Present",
        "description": "Linear • Electronic • Syncopated Breaks\nFrench",
        "characteristicInstruments": [
          "synth",
          "drums",
          "sub-bass",
          "sampler",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          96
        ],
        "keySubstyles": [
          "Urban Kiz",
          "Tarraxa Fusion",
          "Kizomba Hip-Hop Remix"
        ],
        "coreConcepts": [
          "strict linear geometric footwork and sharp isolations",
          "electronic Ghetto Zouk beats with sub-bass drops",
          "sudden dynamic breaks and tempo illusions",
          "tension-and-release partnering"
        ],
        "rhythmicGrammar": [
          "electronic 4/4 beat with syncopated 16th sub-bass kicks and dead-stop silence cuts"
        ],
        "danceTags": [
          "social-partner",
          "sensual-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Sharp syncopated electronic sub-bass stop followed by instant linear step and sliding synth pad",
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
          "breakdown": [
            "F",
            "G",
            "Am",
            "Am",
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

export const KIZOMBA_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
