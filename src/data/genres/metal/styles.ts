import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_3: GenreStyleDefinition = {
        "id": "metal-black-metal",
        "worldId": "metal",
        "name": "Black Metal",
        "origin": "Norway / Sweden / UK",
        "era": "Early 1990s",
        "description": "Atmospheric • High Shrieks • Tremolo\nIcy",
        "characteristicInstruments": [
          "electric-guitar",
          "drums",
          "bass",
          "overdrive-guitar",
          "synth"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          140,
          210
        ],
        "keySubstyles": [
          "Second Wave Norwegian Black Metal",
          "Atmospheric Black Metal"
        ],
        "coreConcepts": [
          "continuous wall of sound tremolo-picked minor/diminished chords",
          "piercing high-pitched shriek vocals",
          "raw lo-fi necro production aesthetics",
          "atmospheric melancholic Nordic melodies"
        ],
        "rhythmicGrammar": [
          "hypnotic continuous blast beats and fast ride cymbal washes without dynamic compression"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Icy cold tremolo-picked minor chord wall flying over continuous blast beat and piercing shriek",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "C",
            "Am",
            "B7"
          ],
          "verse": [
            "Em",
            "C",
            "Am",
            "B7",
            "Em",
            "G",
            "D",
            "Em"
          ],
          "theme": [
            "C",
            "Em",
            "Am",
            "Em",
            "C",
            "D",
            "Em",
            "Em"
          ],
          "coda": [
            "C",
            "B7",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "metal-death-metal",
        "worldId": "metal",
        "name": "Death Metal",
        "origin": "Tampa, Florida / Sweden",
        "era": "Late 1980s–Present",
        "description": "Guttural • Blast Beats • Tremolo\nExtreme",
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
          180,
          250
        ],
        "keySubstyles": [
          "Florida Death Metal",
          "Stockholm Sound (HM-2)",
          "Technical Death Metal"
        ],
        "coreConcepts": [
          "deep guttural death growl vocals",
          "rapid-fire 16th-note blast beats",
          "down-tuned tremolo-picked chromatic riffs (D/C/B standard)",
          "diminished and augmented dissonant solos"
        ],
        "rhythmicGrammar": [
          "relentless 32nd-note blast beats switching into crushing slow double-kick breakdowns"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Relentless snare blast beat with down-tuned chromatic tremolo guitar riff and guttural growl",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "B5",
            "C5",
            "B5",
            "F5"
          ],
          "verse": [
            "B5",
            "B5",
            "C5",
            "B5",
            "B5",
            "B5",
            "F5",
            "E5"
          ],
          "slam": [
            "B5",
            "B5",
            "B5",
            "B5",
            "C5",
            "B5",
            "F5",
            "E5"
          ],
          "coda": [
            "B5",
            "C5",
            "B5",
            "B5"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "metal-doom-metal",
        "worldId": "metal",
        "name": "Doom Metal",
        "origin": "Birmingham / Maryland / Sweden",
        "era": "1970s–Present",
        "description": "Slow • Heavy • Crushing\nMassive low-tempo",
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
          50,
          75
        ],
        "keySubstyles": [
          "Epic Doom Metal",
          "Stoner Doom"
        ],
        "coreConcepts": [
          "crushing slow monolithic fuzz/distortion riffs",
          "deep resonant bass rumble",
          "lugubrious operatic or mournful clean vocals",
          "monumental weight and catastrophic tempo"
        ],
        "rhythmicGrammar": [
          "extremely heavy slow 4/4 beat with immense drum hits echoing into cavernous spaces"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Crushing monolithic down-tuned fuzz chord sustaining infinitely over slow thunderous drum strike",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "Bb",
            "A",
            "Em"
          ],
          "verse": [
            "Em",
            "Bb",
            "A",
            "Em",
            "G",
            "F",
            "Em",
            "Em"
          ],
          "chorus": [
            "C",
            "B7",
            "Em",
            "Em",
            "C",
            "B7",
            "Em",
            "Em"
          ],
          "coda": [
            "Bb",
            "A",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "metal-heavy-metal",
        "worldId": "metal",
        "name": "Heavy Metal",
        "origin": "Birmingham, UK",
        "era": "1970s–1980s",
        "description": "Riff-driven • Distorted • Operatic\nThe foundational",
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
          100,
          140
        ],
        "keySubstyles": [
          "Traditional Heavy Metal",
          "NWOBHM"
        ],
        "coreConcepts": [
          "Tony Iommi iconic heavy power-chord riffing",
          "Steve Harris driving galloping basslines",
          "twin-guitar harmonized melody leads",
          "operatic high-vibrato lead vocals (Bruce Dickinson)"
        ],
        "rhythmicGrammar": [
          "driving 4/4 gallop: eighth note followed by two sixteenth notes [8th-16th-16th]"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Galloping bass and drum rhythm powering twin-guitar harmonized heavy metal lead",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "G",
            "D",
            "Em"
          ],
          "verse": [
            "Em",
            "G",
            "D",
            "Em",
            "C",
            "D",
            "Em",
            "Em"
          ],
          "chorus": [
            "C",
            "D",
            "G",
            "Em",
            "C",
            "D",
            "Em",
            "Em"
          ],
          "solo": [
            "Em",
            "C",
            "D",
            "Em",
            "Em",
            "C",
            "D",
            "B7"
          ],
          "coda": [
            "C",
            "D",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "metal-power-metal",
        "worldId": "metal",
        "name": "Power Metal",
        "origin": "Germany / Finland",
        "era": "1980s–Present",
        "description": "Euphoric • Double-Bass • Fantasy\nHigh-speed soaring",
        "characteristicInstruments": [
          "electric-guitar",
          "drums",
          "bass",
          "synth",
          "overdrive-guitar"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          160,
          210
        ],
        "keySubstyles": [
          "European Power Metal",
          "Symphonic Power Metal"
        ],
        "coreConcepts": [
          "relentless 16th-note double-bass drum drive",
          "high-soaring clean operatic tenor vocals (Michael Kiske)",
          "bright major/modal melodic twin-guitar solos",
          "epic fantasy and mythological lyrical themes"
        ],
        "rhythmicGrammar": [
          "continuous 16th-note double-kick battery with snare cracking on 2 and 4"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "High operatic tenor vocal soaring over blinding double-kick speed and triumphant twin-guitar lead",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "F",
            "G",
            "C"
          ],
          "verse": [
            "Am",
            "F",
            "G",
            "C",
            "Dm",
            "Am",
            "F",
            "G"
          ],
          "chorus": [
            "F",
            "G",
            "C",
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

const STYLE_7: GenreStyleDefinition = {
        "id": "metal-progressive-metal",
        "worldId": "metal",
        "name": "Progressive Metal",
        "origin": "Boston / Sweden / Global",
        "era": "Late 1980s–Present",
        "description": "Technical • Complex Meter • Dynamic\nOdd-time",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "synth",
          "overdrive-guitar"
        ],
        "preferredMeters": [
          "7/8",
          "5/8",
          "9/8",
          "4/4"
        ],
        "tempoRange": [
          110,
          155
        ],
        "keySubstyles": [
          "Djent",
          "Symphonic Prog Metal",
          "Technical Prog"
        ],
        "coreConcepts": [
          "complex shifting odd-time signatures (7/8, 11/8, 13/8)",
          "syncopated palm-muted djent polymetric chugging (8-string guitars)",
          "virtuosic unison guitar/keyboard shred solos",
          "dramatic contrast between acoustic beauty and extreme metal roar"
        ],
        "rhythmicGrammar": [
          "polymetric syncopations over steady quarter-note pulse with surgical double-bass precision"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Djent 8-string polyrhythmic chug executing in 7/8 locked with surgical double-bass drumming",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "Bbmaj7",
            "Gm7",
            "A7alt"
          ],
          "verse": [
            "Dm",
            "Bbmaj7",
            "Gm7",
            "A7alt",
            "Fmaj7",
            "Em7b5",
            "A7alt",
            "Dm"
          ],
          "chorus": [
            "Bbmaj7",
            "C",
            "Dm",
            "Am",
            "Bbmaj7",
            "C",
            "Dm",
            "Dm"
          ],
          "solo": [
            "Dm",
            "Eb",
            "Dm",
            "Eb",
            "Gm",
            "A7alt",
            "Dm",
            "Dm"
          ],
          "coda": [
            "Bbmaj7",
            "A7alt",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "metal-sludge",
        "worldId": "metal",
        "name": "Sludge",
        "origin": "New Orleans, Louisiana (NOLA)",
        "era": "Late 1980s–1990s",
        "description": "Grimy • Down-tuned • Hardcore Slowness\nBlack",
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
          55,
          80
        ],
        "keySubstyles": [
          "NOLA Sludge Metal",
          "Southern Sludge"
        ],
        "coreConcepts": [
          "harsh agonizing vocal screams",
          "down-tuned Southern blues riffs slowed to a crawl",
          "screaming feedback between agonizing riff impacts",
          "gritty swampy misery and despair"
        ],
        "rhythmicGrammar": [
          "sluggish heavy groove shifting unpredictably between dragging doom and sudden punk bursts"
        ],
        "danceTags": [
          "festival-fusion",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Swampy down-tuned blues riff collapsing into screeching feedback and agonized vocal shriek",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "C#5",
            "D5",
            "C#5",
            "G5"
          ],
          "verse": [
            "C#5",
            "D5",
            "C#5",
            "G5",
            "C#5",
            "E5",
            "D#5",
            "D5"
          ],
          "coda": [
            "C#5",
            "G5",
            "C#5",
            "C#5"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "metal-thrash",
        "worldId": "metal",
        "name": "Thrash",
        "origin": "Bay Area, California / Los Angeles",
        "era": "1980s",
        "description": "Fast • Palm-muted • Aggressive\nHigh-speed palm-muted",
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
          160,
          220
        ],
        "keySubstyles": [
          "Bay Area Thrash",
          "Teutonic Thrash"
        ],
        "coreConcepts": [
          "lightning-fast downpicked palm-muted E-string chugs",
          "skank beats and fast double-kick flurries",
          "ferocious barking vocal delivery",
          "chaotic shredding whammy-bar guitar solos"
        ],
        "rhythmicGrammar": [
          "high-speed 16th-note palm-muted chugging locked with fast alternating skank snare beat"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Machine-gun palm-muted open-E chug erupting into fast skank-beat thrash riff",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "E5",
            "F5",
            "E5",
            "Bb5"
          ],
          "verse": [
            "E5",
            "E5",
            "F5",
            "E5",
            "E5",
            "E5",
            "G5",
            "F#5"
          ],
          "chorus": [
            "C5",
            "D5",
            "E5",
            "E5",
            "C5",
            "D5",
            "E5",
            "E5"
          ],
          "coda": [
            "F5",
            "Bb5",
            "E5",
            "E5"
          ]
        }
      };

export const METAL_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
