import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_0: GenreStyleDefinition = {
        "id": "blues-chicago",
        "worldId": "blues",
        "name": "Chicago Blues",
        "origin": "Chicago, Illinois",
        "era": "1940s–1960s",
        "description": "Electric • 12-bar • Driving\nAmplified harmonica",
        "characteristicInstruments": ["guitar", "harmonica", "piano", "bass", "drums", "voice"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          86,
          110
        ],
        "keySubstyles": [
          "South Side Chicago Blues",
          "Chess Records Sound"
        ],
        "coreConcepts": [
          "distorted amplified harmonica (bullet mic)",
          "heavy electric guitar shuffle riffs",
          "rolling boogie basslines",
          "deep guttural vocal delivery"
        ],
        "rhythmicGrammar": [
          "driving 12/8 triplet shuffle with backbeat snare and walking bass"
        ],
        "danceTags": [
          "social-partner",
          "blues-fusion-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Electric guitar shuffle riff with answering distorted harmonica cry",
        "grooveMechanics": {
          "swingPercentage": 66,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "E7",
            "A7",
            "E7",
            "B7"
          ],
          "verse": [
            "E7",
            "E7",
            "E7",
            "E7",
            "A7",
            "A7",
            "E7",
            "E7",
            "B7",
            "A7",
            "E7",
            "B7"
          ],
          "solo": [
            "E7",
            "E7",
            "E7",
            "E7",
            "A7",
            "A7",
            "E7",
            "E7",
            "B7",
            "A7",
            "E7",
            "B7"
          ],
          "coda": [
            "B7",
            "A7",
            "E7",
            "E9"
          ]
        }
      };

const STYLE_1: GenreStyleDefinition = {
        "id": "blues-delta",
        "worldId": "blues",
        "name": "Delta Blues",
        "origin": "Mississippi Delta",
        "era": "1920s–1930s",
        "description": "Raw • Acoustic • Bottleneck\nSlide guitar",
        "characteristicInstruments": ["guitar", "harmonica", "piano", "foot-stomp", "guitar"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          72,
          98
        ],
        "keySubstyles": [
          "Acoustic Delta Blues",
          "Bottleneck Slide"
        ],
        "coreConcepts": [
          "bottleneck glass/metal slide on acoustic guitar",
          "percussive heel stomping",
          "haunting falsetto vocal leaps",
          "elastic polyrhythmic timing"
        ],
        "rhythmicGrammar": [
          "syncopated thumb-bass pulse with free-meter vocal phrases and slide ornaments"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Bottleneck slide whine over steady acoustic thumb-bass stomp",
        "grooveMechanics": {
          "swingPercentage": 62,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "A7",
            "D7",
            "A7",
            "E7"
          ],
          "verse": [
            "A7",
            "A7",
            "A7",
            "A7",
            "D7",
            "D7",
            "A7",
            "A7",
            "E7",
            "D7",
            "A7",
            "E7"
          ],
          "coda": [
            "E7",
            "D7",
            "A7",
            "A7"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "blues-hill-country",
        "worldId": "blues",
        "name": "Hill Country Blues",
        "origin": "North Mississippi Hill Country",
        "era": "1960s–Present",
        "description": "Hypnotic • One-chord • Droning\nRelentless groove-based",
        "characteristicInstruments": ["guitar", "drums", "bass", "harmonica", "hand-percussion"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          92,
          116
        ],
        "keySubstyles": [
          "North Mississippi Blues",
          "Trance Blues"
        ],
        "coreConcepts": [
          "hypnotic one-chord drone vamp",
          "repetitive polyrhythmic guitar grooves",
          "open-ended modal improvisation",
          "raw driving drum stomps"
        ],
        "rhythmicGrammar": [
          "continuous circular modal guitar groove locked with dry kick and snare"
        ],
        "danceTags": [
          "festival-fusion",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Relentless one-chord hypnotic modal guitar vamp locked with raw drum stomp",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "E7",
            "E7",
            "E7",
            "E7"
          ],
          "verse": [
            "E7",
            "E7",
            "E7",
            "E7",
            "E7",
            "E7",
            "E7",
            "E7"
          ],
          "solo": [
            "E7",
            "E7",
            "E7",
            "E7",
            "E7",
            "E7",
            "E7",
            "E7"
          ],
          "coda": [
            "E7",
            "E7",
            "E7",
            "E7"
          ]
        }
      };

const STYLE_4: GenreStyleDefinition = {
        "id": "blues-jump",
        "worldId": "blues",
        "name": "Jump Blues",
        "origin": "Kansas City / Los Angeles",
        "era": "1940s–1950s",
        "description": "Fast • Horns • Swinging\nUpbeat predecessor",
        "characteristicInstruments": ["horn-section", "piano", "guitar", "upright-bass", "drums"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          135,
          175
        ],
        "keySubstyles": [
          "Jump Swing",
          "Boogie Jump Blues"
        ],
        "coreConcepts": [
          "swinging big-band horn riffs",
          "boogie-woogie piano bass ostinatos",
          "shouting energetic vocals",
          "fast walking bassline"
        ],
        "rhythmicGrammar": [
          "fast 4-on-the-floor four-beat swing with driving snare backbeat on 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Punchy horn unison riff over driving boogie-woogie piano and walking bass",
        "grooveMechanics": {
          "swingPercentage": 60,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Bb7",
            "Eb7",
            "Bb7",
            "F7"
          ],
          "verse": [
            "Bb7",
            "Bb7",
            "Bb7",
            "Bb7",
            "Eb7",
            "Eb7",
            "Bb7",
            "Bb7",
            "F7",
            "Eb7",
            "Bb7",
            "F7"
          ],
          "solo": [
            "Bb7",
            "Bb7",
            "Bb7",
            "Bb7",
            "Eb7",
            "Eb7",
            "Bb7",
            "Bb7",
            "F7",
            "Eb7",
            "Bb7",
            "F7"
          ],
          "coda": [
            "F7",
            "Eb7",
            "Bb7",
            "Bb7"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "blues-piedmont",
        "worldId": "blues",
        "name": "Piedmont Blues",
        "origin": "East Coast USA (Piedmont region)",
        "era": "1920s–1940s",
        "description": "Bouncy • Ragtime • Fingerpicked\nSyncopated acoustic",
        "characteristicInstruments": ["guitar", "harmonica", "washboard", "piano", "upright-bass"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          96,
          120
        ],
        "keySubstyles": [
          "East Coast Blues",
          "Ragtime Blues"
        ],
        "coreConcepts": [
          "alternating thumb-bass ragtime picking",
          "syncopated treble-string melodies",
          "upbeat cheerful bounce",
          "clean acoustic articulation"
        ],
        "rhythmicGrammar": [
          "ragtime boom-chick thumb bass with syncopated index/middle finger arpeggios"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Alternating thumb-bass ragtime arpeggio with bright syncopated treble melody",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
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
            "C7",
            "F",
            "Fm",
            "C",
            "A7",
            "D7",
            "G7",
            "C",
            "E7",
            "Am",
            "F",
            "C",
            "G7",
            "C",
            "G7"
          ],
          "coda": [
            "C",
            "A7",
            "D7",
            "G7",
            "C",
            "C"
          ]
        }
      };

const STYLE_7: GenreStyleDefinition = {
        "id": "blues-soul",
        "worldId": "blues",
        "name": "Soul Blues",
        "origin": "Memphis / Chicago / Jackson, MS",
        "era": "1960s–1970s",
        "description": "Smooth • Horn-fed • Expressive\nGospel-influenced 60s",
        "characteristicInstruments": ["guitar", "horn-section", "organ", "bass", "drums"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          74,
          94
        ],
        "keySubstyles": [
          "Urban Soul Blues",
          "Gospel Blues"
        ],
        "coreConcepts": [
          "lush brass section pads and swells",
          "gospel-tinged organ voicings",
          "expressive single-string vibrato guitar leads",
          "deep emotive vocal belts"
        ],
        "rhythmicGrammar": [
          "slow 12/8 gospel ballad triplet pulse or relaxed 4/4 soul groove"
        ],
        "danceTags": [
          "social-partner",
          "blues-fusion-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Singing vibrato guitar line answering lush warm horn section swells",
        "grooveMechanics": {
          "swingPercentage": 66,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "F",
            "C",
            "G7"
          ],
          "verse": [
            "C",
            "C",
            "C",
            "C",
            "F",
            "F",
            "C",
            "C",
            "G7",
            "F",
            "C",
            "G7"
          ],
          "chorus": [
            "F",
            "F",
            "C",
            "C",
            "F",
            "F",
            "G7",
            "G7"
          ],
          "coda": [
            "G7",
            "F",
            "C",
            "C"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "blues-swamp",
        "worldId": "blues",
        "name": "Swamp Blues",
        "origin": "Baton Rouge, Louisiana",
        "era": "1950s–1960s",
        "description": "Laid-back • Reverb • Tremolo\nLethargic Louisiana",
        "characteristicInstruments": ["guitar", "harmonica", "bass", "drums", "piano", "voice"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          78,
          96
        ],
        "keySubstyles": [
          "Louisiana Swamp Blues",
          "Excello Sound"
        ],
        "coreConcepts": [
          "heavy amplifier tremolo and spring reverb",
          "lethargic relaxed groove",
          "sparse acoustic/electric interplay",
          "lazy vocal delivery"
        ],
        "rhythmicGrammar": [
          "laid-back lazy shuffle with muted bass pulse and subtle snare brushes"
        ],
        "danceTags": [
          "listening",
          "blues-fusion-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Tremolo-pulsing electric guitar chord over slow relaxed swamp groove",
        "grooveMechanics": {
          "swingPercentage": 62,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "E",
            "A",
            "E",
            "B7"
          ],
          "verse": [
            "E",
            "E",
            "E",
            "E",
            "A",
            "A",
            "E",
            "E",
            "B7",
            "A",
            "E",
            "B7"
          ],
          "coda": [
            "B7",
            "A",
            "E",
            "E"
          ]
        }
      };

const STYLE_2: GenreStyleDefinition = {
        "id": "blues-texas",
        "worldId": "blues",
        "name": "Texas Blues",
        "origin": "Texas, USA",
        "era": "1950s–1980s",
        "description": "Swinging • Sharp • Virtuosic\nSingle-note electric",
        "characteristicInstruments": ["guitar", "bass", "drums", "piano", "harmonica", "voice"],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          115,
          145
        ],
        "keySubstyles": [
          "Texas Shuffle",
          "Electric Blues Rock"
        ],
        "coreConcepts": [
          "blistering single-note lead guitar bending",
          "heavy Texas shuffle drum groove",
          "virtuosic turnaround licks",
          "dynamic power rhythm"
        ],
        "rhythmicGrammar": [
          "uptempo triplet shuffle with snappy snare rimshots and walking bass"
        ],
        "danceTags": [
          "social-partner",
          "blues-fusion-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Sharp Texas shuffle snap with rapid ascending pentatonic guitar bend",
        "grooveMechanics": {
          "swingPercentage": 64,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "G7",
            "C7",
            "G7",
            "D7"
          ],
          "verse": [
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
          "solo": [
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
            "G9"
          ]
        }
      };

export const BLUES_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
