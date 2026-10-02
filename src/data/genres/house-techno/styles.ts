import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_4: GenreStyleDefinition = {
        "id": "house-techno-acid-techno",
        "worldId": "house-techno",
        "name": "Acid Techno",
        "origin": "Chicago / London",
        "era": "Late 1980s–1990s",
        "description": "TB-303 Squawk • Resonant • Fast\nRoland",
        "characteristicInstruments": [
          "synth",
          "drums",
          "sub-bass",
          "sampler",
          "acid-303"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          130,
          142
        ],
        "keySubstyles": [
          "Acid House / Acid Techno",
          "TB-303 Squelch"
        ],
        "coreConcepts": [
          "Roland TB-303 cutoff, resonance, accent, and slide manipulations",
          "distorted overdriven synthesizer filter sweeps",
          "hypnotic 16th-note repeating sequence",
          "driving high-energy drum pulse"
        ],
        "rhythmicGrammar": [
          "continuous 16th-note 303 bassline with accents and slides shifting against 4/4 kick"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Screaming Roland TB-303 resonance knob twist on high accented slide note over 909 kick",
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
          "squelch": [
            "Dm",
            "Dm",
            "Bb",
            "C",
            "Dm",
            "Dm",
            "Bb",
            "A7"
          ],
          "coda": [
            "Dm",
            "Dm",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "house-techno-detroit-techno",
        "worldId": "house-techno",
        "name": "Detroit Techno",
        "origin": "Detroit, Michigan",
        "era": "1980s–1990s",
        "description": "Soulful • Futuristic • Strings\nThe original",
        "characteristicInstruments": [
          "synth",
          "drums",
          "strings",
          "bass",
          "sampler"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          126,
          134
        ],
        "keySubstyles": [
          "Belleville Three Sound",
          "Futuristic Soul"
        ],
        "coreConcepts": [
          "emotive synthesizer string progressions",
          "futuristic sci-fi themes and optimism",
          "Roland TR-808/909 syncopated programming",
          "soulful chord voicings"
        ],
        "rhythmicGrammar": [
          "fast driving 4-on-the-floor kick with syncopated 16th-note snare ghost notes and open hats"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Soaring emotional synth strings blooming over driving 909 kick and syncopated snare",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Fmaj7",
            "G",
            "Am7",
            "Em7"
          ],
          "verse": [
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

const STYLE_2: GenreStyleDefinition = {
        "id": "house-techno-dub-techno",
        "worldId": "house-techno",
        "name": "Dub Techno",
        "origin": "Berlin / Detroit",
        "era": "1990s–Present",
        "description": "Echo • Filter Sweep • Cavernous\nBasic",
        "characteristicInstruments": [
          "synth",
          "sub-bass",
          "drums",
          "tape-echo",
          "sampler"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          116,
          124
        ],
        "keySubstyles": [
          "Echospace",
          "Deep Dub Techno"
        ],
        "coreConcepts": [
          "heavily filtered minor-9th synth chord stabs",
          "infinite analog tape delay feedback loops",
          "dense blankets of vinyl noise and hiss",
          "warm rolling sub-bass"
        ],
        "rhythmicGrammar": [
          "spacious 4-on-the-floor kick with delayed chord stab landing on the upbeat of beat 2 or 4"
        ],
        "danceTags": [
          "listening",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Filtered minor chord stab shooting into infinite tape delay over cavernous sub-bass",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am7",
            "Am7",
            "Am7",
            "Am7"
          ],
          "flow": [
            "Am7",
            "Am7",
            "Dm7",
            "Am7",
            "Am7",
            "Am7",
            "Fmaj7",
            "Em7"
          ],
          "coda": [
            "Am7",
            "Am7",
            "Am7",
            "Am7"
          ]
        }
      };

const STYLE_7: GenreStyleDefinition = {
        "id": "house-techno-ebm",
        "worldId": "house-techno",
        "name": "EBM",
        "origin": "Belgium / Germany",
        "era": "1980s–Present",
        "description": "Aggressive • 16th Bassline • Cyberpunk\nElectronic",
        "characteristicInstruments": [
          "synth",
          "drums",
          "sub-bass",
          "sampler",
          "saw-lead"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          124,
          134
        ],
        "keySubstyles": [
          "Electronic Body Music",
          "Dark EBM / Techno-EBM"
        ],
        "coreConcepts": [
          "relentless 16th-note sequenced bassline drive",
          "harsh militaristic drum machine beats",
          "shouted aggressive vocal commands",
          "dark industrial synthesizer leads"
        ],
        "rhythmicGrammar": [
          "machine-gun 16th-note synth bass sequence locked with heavy electronic kick and snare on 2 and 4"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Aggressive 16th-note machine-gun synth bass sequence driving under harsh militaristic snare",
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
          "verse": [
            "Dm",
            "Dm",
            "Bb",
            "C",
            "Dm",
            "Dm",
            "Bb",
            "A7"
          ],
          "coda": [
            "Dm",
            "Dm",
            "Dm",
            "Dm"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "house-techno-hard-techno",
        "worldId": "house-techno",
        "name": "Hard Techno",
        "origin": "Berlin / Netherlands / UK",
        "era": "2000s–Present",
        "description": "Industrial • 140+ BPM • Distorted",
        "characteristicInstruments": [
          "drums",
          "sub-bass",
          "synth",
          "sampler",
          "noise-sweep"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          142,
          155
        ],
        "keySubstyles": [
          "Schranz",
          "Industrial Hard Techno"
        ],
        "coreConcepts": [
          "heavily distorted clipped industrial kick drums",
          "relentless fast tempos (145+ BPM)",
          "harsh metallic percussion and screeches",
          "unforgiving warehouse energy"
        ],
        "rhythmicGrammar": [
          "ferocious four-on-the-floor distorted kick pounding through continuous 16th metallic rides"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Massive clipped industrial kick drum slamming at 150 BPM under screeching metallic synth",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "Em",
            "Em",
            "Em"
          ],
          "drop": [
            "Em",
            "Em",
            "Em",
            "Em",
            "Em",
            "Em",
            "F",
            "D#dim"
          ],
          "coda": [
            "Em",
            "Em",
            "Em",
            "Em"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "house-techno-melodic-techno",
        "worldId": "house-techno",
        "name": "Melodic Techno",
        "origin": "Berlin / Italy / Ibiza",
        "era": "2015–Present",
        "description": "Emotional • Plucks • Cinematic\nEthereal lead",
        "characteristicInstruments": [
          "synth",
          "drums",
          "bass",
          "strings",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          122,
          128
        ],
        "keySubstyles": [
          "Afterlife Sound",
          "Cinematic Techno"
        ],
        "coreConcepts": [
          "soaring cinematic analog synth lead plucks (Moog/Prophet)",
          "dramatic emotional chord progressions",
          "deep rolling basslines with gentle sidechain",
          "subtle organic percussion layers"
        ],
        "rhythmicGrammar": [
          "smooth rolling 4-on-the-floor kick with 16th bassline arpeggio and elegant hi-hats"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Cinematic Moog pluck lead arpeggiating into sweeping euphoric chord resolution over rolling kick",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "Fmaj7",
            "C",
            "G"
          ],
          "buildup": [
            "Am",
            "Fmaj7",
            "C",
            "G",
            "Dm7",
            "Em7",
            "Fmaj7",
            "G"
          ],
          "drop": [
            "Am",
            "Fmaj7",
            "C",
            "G",
            "Am",
            "Fmaj7",
            "Em7",
            "Am"
          ],
          "coda": [
            "Fmaj7",
            "G",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "house-techno-minimal",
        "worldId": "house-techno",
        "name": "Minimal",
        "origin": "Berlin / Frankfurt",
        "era": "2000s",
        "description": "Sparse • Sub-bass • Micro-sounds\nSubtle hypnotic",
        "characteristicInstruments": [
          "drums",
          "sampler",
          "synth",
          "sub-bass",
          "warm-pad"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          122,
          128
        ],
        "keySubstyles": [
          "Clicks & Cuts",
          "Minimal Techno / Microhouse"
        ],
        "coreConcepts": [
          "microscopic percussive glitches and clicks",
          "deep subterranean sub-bass pulses",
          "ultra-spacious arrangements",
          "hypnotic cyclical repetition"
        ],
        "rhythmicGrammar": [
          "subtle understated 4-on-the-floor kick surrounded by organic micro-percussive textures"
        ],
        "danceTags": [
          "festival-fusion",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Subtle understated kick thump enveloped in microscopic metallic clicks and warm sub pulse",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "groove": [
            "Dm",
            "Dm",
            "Dm",
            "Dm",
            "Dm",
            "Dm",
            "Bb",
            "A7"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "house-techno-peak-time",
        "worldId": "house-techno",
        "name": "Peak Time",
        "origin": "Berlin / Ibiza / Amsterdam",
        "era": "2010s–Present",
        "description": "Pounding 909 • Big Room Drop",
        "characteristicInstruments": [
          "drums",
          "synth",
          "sub-bass",
          "sampler",
          "noise-sweep"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          130,
          136
        ],
        "keySubstyles": [
          "Peak Time Driving Techno",
          "Main Room Techno"
        ],
        "coreConcepts": [
          "thunderous processed 909 kick with heavy sub rumble",
          "rising acid/synth lead tension buildups",
          "massive white noise sweeps and snare rolls",
          "earth-shattering low-end drops"
        ],
        "rhythmicGrammar": [
          "relentless four-on-the-floor kick with driving 16th-note hi-hat rides and offbeat claps"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Pounding 909 kick rumble driving into euphoric synth drop with crisp open hi-hat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Fm",
            "Fm",
            "Fm",
            "Fm"
          ],
          "buildup": [
            "Fm",
            "Fm",
            "Db",
            "C7"
          ],
          "drop": [
            "Fm",
            "Fm",
            "Fm",
            "Fm",
            "Fm",
            "Fm",
            "Db",
            "C7"
          ],
          "coda": [
            "Fm",
            "Fm",
            "Fm",
            "Fm"
          ]
        }
      };

export const HOUSE_TECHNO_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
