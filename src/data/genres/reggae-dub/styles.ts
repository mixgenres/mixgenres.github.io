import type { GenreStyleDefinition, GenreWorld } from '../../schema';

const STYLE_7: GenreStyleDefinition = {
        "id": "reggae-dub-calypso",
        "worldId": "reggae-dub",
        "name": "Calypso",
        "origin": "Trinidad and Tobago",
        "era": "Early 20th Century–Present",
        "description": "Steelpan • Acoustic • Witty\nTrinidadian storytelling",
        "characteristicInstruments": [
          "steel-drums",
          "acoustic-guitar",
          "brass",
          "hand-percussion",
          "bass"
        ],
        "preferredMeters": [
          "2/4",
          "4/4"
        ],
        "tempoRange": [
          100,
          126
        ],
        "keySubstyles": [
          "Traditional Calypso",
          "Steelband Calypso"
        ],
        "coreConcepts": [
          "sparkling steelpan melodic cascades",
          "satirical, witty, and clever rhyming social commentary",
          "breezy acoustic guitar syncopation",
          "bright Caribbean horn fanfares"
        ],
        "rhythmicGrammar": [
          "syncopated 2/4 calypso beat with heavy accents on beat 1 and the upbeat of beat 2"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Sparkling steelpan melody roll answering witty vocal rhyming verse over Caribbean bounce",
        "grooveMechanics": {
          "swingPercentage": 52,
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
            "F",
            "G7",
            "C",
            "C",
            "F",
            "G7",
            "C"
          ],
          "chorus": [
            "F",
            "G7",
            "C",
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

const STYLE_2: GenreStyleDefinition = {
        "id": "reggae-dub-dancehall",
        "worldId": "reggae-dub",
        "name": "Dancehall",
        "origin": "Kingston, Jamaica",
        "era": "1980s–Present",
        "description": "Digital Riddim • Deejay Toasting •",
        "characteristicInstruments": [
          "sampler",
          "drums",
          "sub-bass",
          "synth",
          "horn-section"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          92,
          108
        ],
        "keySubstyles": [
          "Digital Dancehall (Sleng Teng)",
          "90s Dancehall",
          "Modern Dancehall"
        ],
        "coreConcepts": [
          "iconic digital Casio MT-40 \"Sleng Teng\" and \"Bam Bam\" riddims",
          "fast syncopated deejay toasting and vocal chants",
          "hard-hitting punchy electronic snare and kick programming",
          "sound clash energy and wheel-up rewinds"
        ],
        "rhythmicGrammar": [
          "syncopated 3+3+2 Dembow-precursor dancehall beat with aggressive offbeat rim hits"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Punchy Sleng Teng digital synth bassline driving under fast syncopated deejay vocal toasting",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Dm",
            "C",
            "Dm",
            "C"
          ],
          "riddim": [
            "Dm",
            "C",
            "Dm",
            "C",
            "Dm",
            "Bb",
            "C",
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

const STYLE_1: GenreStyleDefinition = {
        "id": "reggae-dub-dub",
        "worldId": "reggae-dub",
        "name": "Dub",
        "origin": "Kingston, Jamaica",
        "era": "1970s",
        "description": "Space Echo • Bass Drops •",
        "characteristicInstruments": [
          "bass",
          "drums",
          "tape-echo",
          "spring-reverb",
          "organ"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          65,
          80
        ],
        "keySubstyles": [
          "Tubby Dub",
          "Black Ark Sound"
        ],
        "coreConcepts": [
          "stripping away vocals to leave massive bass and drums",
          "sending snare hits and guitar chords into infinite tape delay",
          "thunderous spring reverb crashes and filter sweeps",
          "deep subterranean sub-bass frequencies"
        ],
        "rhythmicGrammar": [
          "isolated drum and bass groove punctuated by sudden echoing snare cracks and dropouts"
        ],
        "danceTags": [
          "listening",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Snare rimshot thrown into cascading Roland Space Echo delay over thunderous bassline drop",
        "grooveMechanics": {
          "swingPercentage": 60,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Am",
            "Dm",
            "Am",
            "Em"
          ],
          "drop": [
            "Am",
            "Dm",
            "Am",
            "Em",
            "Am",
            "Dm",
            "F",
            "E7"
          ],
          "coda": [
            "F",
            "E7",
            "Am",
            "Am"
          ]
        }
      };

const STYLE_3: GenreStyleDefinition = {
        "id": "reggae-dub-lovers-rock",
        "worldId": "reggae-dub",
        "name": "Lovers Rock",
        "origin": "London, UK / Jamaica",
        "era": "Late 1970s–1980s",
        "description": "Romantic • Smooth • Soul Harmonies\nSoulful",
        "characteristicInstruments": [
          "electric-guitar",
          "bass",
          "drums",
          "piano",
          "strings"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          72,
          86
        ],
        "keySubstyles": [
          "UK Lovers Rock",
          "Romantic Roots"
        ],
        "coreConcepts": [
          "sweet Philadelphia soul-style melodies and vocal harmonies",
          "gentle flowing one-drop reggae groove",
          "romantic lyrical intimacy",
          "lush Rhodes piano and string synthesizer chords"
        ],
        "rhythmicGrammar": [
          "gentle laid-back 4/4 one-drop with smooth bassline and sweet guitar chop"
        ],
        "danceTags": [
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Silky sweet vocal harmony floating over gentle one-drop reggae beat and melodic bass",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Cmaj7",
            "Am7",
            "Dm7",
            "G7"
          ],
          "verse": [
            "Cmaj7",
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7",
            "Am7",
            "Dm7",
            "G7"
          ],
          "chorus": [
            "Fmaj7",
            "Em7",
            "Dm7",
            "G7",
            "Fmaj7",
            "Em7",
            "Dm7",
            "Cmaj7"
          ],
          "coda": [
            "Fmaj7",
            "G7",
            "Cmaj7",
            "Cmaj7"
          ]
        }
      };

const STYLE_5: GenreStyleDefinition = {
        "id": "reggae-dub-ragga",
        "worldId": "reggae-dub",
        "name": "Ragga",
        "origin": "Kingston, Jamaica",
        "era": "Late 1980s–1990s",
        "description": "Digital • Hardcore • Machine Beats\nRaggamuffin",
        "characteristicInstruments": [
          "sampler",
          "drums",
          "sub-bass",
          "synth",
          "horn-section"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          96,
          112
        ],
        "keySubstyles": [
          "Raggamuffin",
          "Digital Ragga"
        ],
        "coreConcepts": [
          "fully computerized synth-drum grooves",
          "gravelly aggressive baritone vocal toasting",
          "syncopated digital horn stabs",
          "relentless dancefloor drive"
        ],
        "rhythmicGrammar": [
          "aggressive electronic kick and snare syncopations with galloping 16th-note digital percussion"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Gravelly baritone vocal shout cutting through aggressive digital ragga synth bass and drum loop",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Em",
            "D",
            "Em",
            "D"
          ],
          "verse": [
            "Em",
            "D",
            "Em",
            "D",
            "C",
            "D",
            "Em",
            "Em"
          ],
          "chorus": [
            "C",
            "D",
            "Em",
            "Bm",
            "C",
            "D",
            "Em",
            "Em"
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
        "id": "reggae-dub-rocksteady",
        "worldId": "reggae-dub",
        "name": "Rocksteady",
        "origin": "Kingston, Jamaica",
        "era": "1966–1968",
        "description": "Soulful • Prominent Bass • Slow",
        "characteristicInstruments": [
          "bass",
          "electric-guitar",
          "drums",
          "brass",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          76,
          92
        ],
        "keySubstyles": [
          "Classic Rocksteady",
          "Vocal Group Rocksteady"
        ],
        "coreConcepts": [
          "heavy melodic electric basslines taking center stage",
          "slower tempo than ska without the frantic horn lines",
          "three-part Motown-inspired vocal harmonies",
          "quiet guitar skank on offbeats"
        ],
        "rhythmicGrammar": [
          "relaxed 4/4 swing with snare rimshot on beat 3 and syncopated electric bass counterpoint"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Prominent melodic bassline hook carrying the groove under three-part soulful vocal harmonies",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "F",
            "Bb",
            "C",
            "F"
          ],
          "verse": [
            "F",
            "Bb",
            "C",
            "F",
            "Dm",
            "Gm",
            "C7",
            "F"
          ],
          "chorus": [
            "Bb",
            "C",
            "F",
            "Dm",
            "Bb",
            "C",
            "F",
            "F"
          ],
          "coda": [
            "Bb",
            "C",
            "F",
            "F"
          ]
        }
      };

const STYLE_0: GenreStyleDefinition = {
        "id": "reggae-dub-roots-reggae",
        "worldId": "reggae-dub",
        "name": "Roots Reggae",
        "origin": "Kingston, Jamaica",
        "era": "1970s",
        "description": "One Drop • Skank • Conscious\nSpiritual",
        "characteristicInstruments": [
          "drums",
          "bass",
          "electric-guitar",
          "organ",
          "brass"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          68,
          84
        ],
        "keySubstyles": [
          "One Drop Reggae",
          "Rocker Style"
        ],
        "coreConcepts": [
          "\"One Drop\" drum pattern (snare and kick landing together strictly on beat 3)",
          "guitar and piano skank on offbeat eighth notes (2 and 4)",
          "heavy melodic basslines carrying the song hook",
          "conscious Rastafari spiritual and political lyrics"
        ],
        "rhythmicGrammar": [
          "empty beat 1 downbeat with explosive rimshot and kick combination on beat 3"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "One Drop kick-and-rimshot landing on beat 3 answered by twin organ bubble and guitar skank",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "C",
            "G",
            "D"
          ],
          "verse": [
            "G",
            "C",
            "G",
            "D",
            "G",
            "C",
            "D",
            "G"
          ],
          "chorus": [
            "C",
            "G",
            "D",
            "G",
            "C",
            "G",
            "D",
            "G"
          ],
          "coda": [
            "C",
            "D",
            "G",
            "G"
          ]
        }
      };

const STYLE_6: GenreStyleDefinition = {
        "id": "reggae-dub-ska",
        "worldId": "reggae-dub",
        "name": "Ska",
        "origin": "Kingston, Jamaica",
        "era": "Late 1950s–1960s",
        "description": "Fast • Walking Bass • Big",
        "characteristicInstruments": [
          "brass",
          "electric-guitar",
          "upright-bass",
          "drums",
          "piano"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          145
        ],
        "keySubstyles": [
          "Original Jamaican Ska",
          "2 Tone Ska"
        ],
        "coreConcepts": [
          "sharp guitar and piano chops strictly on upbeat eighth notes (\"skank\")",
          "fast driving walking bassline",
          "exuberant jazz-influenced brass horn section melodies",
          "high-energy skanking dance beat"
        ],
        "rhythmicGrammar": [
          "fast 4/4 with accented upbeat offbeat chops [and of 1, 2, 3, 4] and walking quarter bass"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Blistering brass section fanfare over high-speed offbeat guitar chop and walking bassline",
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
          "head": [
            "Bb",
            "Eb",
            "F",
            "Bb",
            "Bb",
            "Eb",
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

export const REGGAE_DUB_WORLD_STYLES: Partial<GenreWorld> = {
  styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7],
};
