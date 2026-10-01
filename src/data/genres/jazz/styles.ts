import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "jazz-bebop",
        "worldId": "jazz",
        "name": "Bebop",
        "origin": "Harlem, New York City",
        "era": "1940s",
        "description": "Fast • Chromatic • Virtuosic\nRapid harmonic",
        "characteristicInstruments": [
          "alto-sax",
          "trumpet",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          180,
          260
        ],
        "keySubstyles": [
          "Classic Bebop",
          "52nd Street Sound"
        ],
        "coreConcepts": [
          "lightning-fast chromatic approach notes and enclosures",
          "extended upper chord tones (9ths, 11ths, b13ths, #11ths)",
          "snappy ii-V-I substitutions and tritone subs",
          "unison trumpet/alto horn heads and blistering solos"
        ],
        "rhythmicGrammar": [
          "fast ride cymbal \"spang-a-lang\" with Max Roach snare and bass drum dropping bombs on unexpected beats"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Rapid chromatic enclosure lick landing on #11 upper chord extension with ride cymbal drive",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "C7b9"
          ],
          "head": [
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "C7b9",
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "Ebmaj7"
          ],
          "bridge": [
            "Abm7",
            "Db7",
            "Gbmaj7",
            "Gbmaj7",
            "Am7",
            "D7",
            "Gmaj7",
            "C7b9"
          ],
          "coda": [
            "Fm7",
            "Bb7",
            "Ebmaj7",
            "Ebmaj7"
          ]
        }
      };


const STYLE_1: GenreStyleDefinition = {
        "id": "jazz-cool-jazz",
        "worldId": "jazz",
        "name": "Cool Jazz",
        "origin": "New York / Los Angeles (West Coast)",
        "era": "Late 1940s–1950s",
        "description": "Subtle • Relaxed • Lyricism\nRestrained, understated",
        "characteristicInstruments": [
          "trumpet",
          "alto-sax",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4",
          "3/4"
        ],
        "tempoRange": [
          95,
          130
        ],
        "keySubstyles": [
          "Birth of the Cool",
          "West Coast Jazz"
        ],
        "coreConcepts": [
          "subtle breathy tone with minimal vibrato (Miles Harmon mute)",
          "intricate contrapuntal horn arrangements",
          "relaxed laid-back swing feel",
          "understated lyrical melodic purity"
        ],
        "rhythmicGrammar": [
          "feathered bass drum with gentle brushed snare and smooth relaxed ride cymbal pulse"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Miles Davis Harmon-muted trumpet line whispering gently over brushed snare and cool bass",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "Dm7",
            "G7",
            "Cmaj7",
            "A7b9"
          ],
          "head": [
            "Dm7",
            "G7",
            "Cmaj7",
            "Am7",
            "Dm7",
            "G7",
            "Cmaj7",
            "Cmaj7"
          ],
          "bridge": [
            "Fmaj7",
            "Fm7",
            "Em7",
            "A7",
            "Dm7",
            "D7",
            "G7",
            "A7b9"
          ],
          "coda": [
            "Dm7",
            "G7",
            "Cmaj7",
            "Cmaj7"
          ]
        }
      };


const STYLE_2: GenreStyleDefinition = {
        "id": "jazz-hard-bop",
        "worldId": "jazz",
        "name": "Hard Bop",
        "origin": "New York / Philadelphia / Detroit",
        "era": "1950s–1960s",
        "description": "Soulful, blues-inflected hard bop with driving gospel influence.",
        "characteristicInstruments": [
          "tenor-sax",
          "trumpet",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          160
        ],
        "keySubstyles": [
          "Blue Note Sound",
          "Soul Jazz"
        ],
        "coreConcepts": [
          "heavy gospel and blues chord inflections",
          "Art Blakey driving press-rolls and thunderous hi-hat snaps on 2 and 4",
          "earthy memorable horn themes",
          "funky walking basslines"
        ],
        "rhythmicGrammar": [
          "driving medium-up swing with aggressive hi-hat snap on 2 and 4 and piano church-chord comping"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Art Blakey explosive drum press-roll erupting into soulful minor-blues horn unison",
        "grooveMechanics": {
          "swingPercentage": 58,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "Fm7",
            "Bbm7",
            "C7#9",
            "Fm7"
          ],
          "head": [
            "Fm7",
            "Bbm7",
            "C7#9",
            "Fm7",
            "Ab7",
            "Db7",
            "C7#9",
            "Fm7"
          ],
          "solo": [
            "Fm7",
            "Bbm7",
            "C7#9",
            "Fm7",
            "Bbm7",
            "Eb7",
            "Abmaj7",
            "C7#9"
          ],
          "coda": [
            "Bbm7",
            "C7#9",
            "Fm7",
            "Fm7"
          ]
        }
      };


const STYLE_3: GenreStyleDefinition = {
        "id": "jazz-free-jazz",
        "worldId": "jazz",
        "name": "Free Jazz",
        "origin": "New York City / Los Angeles",
        "era": "Late 1950s–1960s",
        "description": "Avant-Garde • Atonal • Unbound\nRadical improvisation",
        "characteristicInstruments": [
          "tenor-sax",
          "alto-sax",
          "trumpet",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "free"
        ],
        "tempoRange": [
          100,
          220
        ],
        "keySubstyles": [
          "Avant-Garde Jazz",
          "Harmolodics",
          "Energy Music"
        ],
        "coreConcepts": [
          "abandonment of preset chord changes and fixed meters",
          "overblowing, multiphonics, and screeches on horns",
          "intense collective improvisation and energy waves",
          "free harmonic and microtonal exploration"
        ],
        "rhythmicGrammar": [
          "multidirectional polyrhythmic percussion pulses without a fixed metronomic downbeat"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "High multiphonic saxophone shriek erupting over frantic multidirectional free drum flurry",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "head": [
            "F",
            "B",
            "Eb",
            "A",
            "D",
            "Ab",
            "Db",
            "G"
          ]
        }
      };


const STYLE_4: GenreStyleDefinition = {
        "id": "jazz-gypsy-jazz",
        "worldId": "jazz",
        "name": "Gypsy Jazz",
        "origin": "Paris, France (Manouche GenreStyleDefinition)",
        "era": "1930s–1940s",
        "description": "La pompe rhythm guitar and acoustic strings.",
        "characteristicInstruments": [
          "acoustic-guitar",
          "violin",
          "upright-bass",
          "clarinet",
          "tenor-sax"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          140,
          240
        ],
        "keySubstyles": [
          "Jazz Manouche",
          "Hot Club Swing"
        ],
        "coreConcepts": [
          "\"La Pompe\" percussive acoustic guitar rhythm strumming on 2 and 4",
          "virtuosic chromatic Selmer acoustic guitar runs",
          "sweet singing Grappelli-style violin glissandi and vibrato",
          "driving bass pulse without drums"
        ],
        "rhythmicGrammar": [
          "tight percussive four-to-the-bar rhythm guitar with heavy downward chop on beats 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Crisp percussive La Pompe guitar chop driving blinding chromatic Django acoustic guitar arpeggio",
        "grooveMechanics": {
          "swingPercentage": 56,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "Am6",
            "E7",
            "Am6",
            "E7"
          ],
          "head": [
            "Am6",
            "Am6",
            "Dm6",
            "Dm6",
            "E7",
            "E7",
            "Am6",
            "E7"
          ],
          "bridge": [
            "Cmaj7",
            "C#dim",
            "Dm7",
            "G7",
            "Cmaj7",
            "F7",
            "E7",
            "E7"
          ],
          "coda": [
            "Dm6",
            "E7",
            "Am6",
            "Am6"
          ]
        }
      };


const STYLE_5: GenreStyleDefinition = {
        "id": "jazz-fusion",
        "worldId": "jazz",
        "name": "Fusion",
        "origin": "New York / Los Angeles",
        "era": "Late 1960s–1970s",
        "description": "Electric • Complex Meter • High",
        "characteristicInstruments": [
          "synth",
          "electric-guitar",
          "bass",
          "drums",
          "tenor-sax"
        ],
        "preferredMeters": [
          "4/4",
          "7/8",
          "5/4"
        ],
        "tempoRange": [
          110,
          145
        ],
        "keySubstyles": [
          "Jazz-Rock Fusion",
          "Electric Jazz"
        ],
        "coreConcepts": [
          "virtuosic electric bass technical mastery (Jaco Pastorius fretless harmonics)",
          "screaming overdrive guitar solos",
          "complex analog synthesizer polyphony (Rhodes, Minimoog, Prophet)",
          "complex odd-meter funk rhythms"
        ],
        "rhythmicGrammar": [
          "tight virtuosic 16th-note funk/rock drumming with complex polyrhythmic hi-hat subdivisions"
        ],
        "danceTags": [
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Jaco fretless bass harmonic flourish locked with lightning-fast odd-meter synth/guitar unison",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "Dmaj9",
            "Cmaj9#11",
            "Bbmaj7#11",
            "A7alt"
          ],
          "theme": [
            "Dmaj9",
            "Gmaj7#11",
            "Cmaj9#11",
            "Fmaj7#11",
            "Bm9",
            "Em9",
            "A7alt",
            "Dmaj9"
          ],
          "solo": [
            "Bm9",
            "E13",
            "Bm9",
            "E13",
            "Gmaj7",
            "F#m7",
            "Em7",
            "A7alt"
          ],
          "coda": [
            "Bbmaj7#11",
            "A7alt",
            "Dmaj9",
            "Dmaj9"
          ]
        }
      };


const STYLE_6: GenreStyleDefinition = {
        "id": "jazz-spiritual-jazz",
        "worldId": "jazz",
        "name": "Spiritual Jazz",
        "origin": "New York / Chicago / Global",
        "era": "Late 1960s–1970s",
        "description": "Modal Drone • Cosmic • Transcendental\nSearching",
        "characteristicInstruments": [
          "tenor-sax",
          "harp",
          "piano",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4",
          "3/4",
          "free"
        ],
        "tempoRange": [
          80,
          115
        ],
        "keySubstyles": [
          "Strata-East Sound",
          "Cosmic Jazz",
          "Transcendental Jazz"
        ],
        "coreConcepts": [
          "hypnotic open-fifth modal bass ostinatos",
          "cascading concert harp glissandi and organ drones",
          "transcendental overblown saxophone cries and hums",
          "shimmering bells, shakers, and tambourines"
        ],
        "rhythmicGrammar": [
          "oceanic rolling 3/4 or 4/4 triplet waves over steady grounding bass pedal point"
        ],
        "danceTags": [
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Cascading Alice Coltrane harp glissando rising over deep bass drone and Pharoah Sanders saxophone cry",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "rubato"
        },
        "sectionProgressions": {
          "intro": [
            "Fm",
            "Fm",
            "Fm",
            "Fm"
          ],
          "theme": [
            "Fm7",
            "Bbm7",
            "Eb7",
            "Abmaj7",
            "Dbmaj7",
            "Bbm7",
            "C7alt",
            "Fm7"
          ],
          "drone": [
            "Fm7",
            "Fm7",
            "Fm7",
            "Fm7"
          ],
          "coda": [
            "Dbmaj7",
            "C7alt",
            "Fm7",
            "Fm7"
          ]
        }
      };


const STYLE_7: GenreStyleDefinition = {
        "id": "jazz-ragtime",
        "worldId": "jazz",
        "name": "Ragtime",
        "origin": "Sedalia / St. Louis, Missouri",
        "era": "1890s–1910s",
        "description": "Syncopated • Marching Bass • Piano\nFoundational",
        "characteristicInstruments": [
          "piano",
          "banjo",
          "brass",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "2/4"
        ],
        "tempoRange": [
          80,
          104
        ],
        "keySubstyles": [
          "Classic Ragtime",
          "St. Louis Rag"
        ],
        "coreConcepts": [
          "steady \"boom-chick\" marching left-hand stride bass",
          "heavily syncopated right-hand melodies",
          "multi-strain classical march structure (AABBACCDD)",
          "clean acoustic articulation"
        ],
        "rhythmicGrammar": [
          "strict marching 2/4 meter with syncopated right-hand accents tied across eighth-note beats"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Steady left-hand boom-chick march bass with sparkling syncopated right-hand Joplin melody",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "G7",
            "C",
            "G7"
          ],
          "strain-a": [
            "C",
            "G7",
            "C",
            "G7",
            "C",
            "C7",
            "F",
            "D7",
            "G",
            "G7",
            "C",
            "C"
          ],
          "strain-b": [
            "C",
            "G7",
            "C",
            "C",
            "F",
            "C",
            "G7",
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


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "jazz-swing-era",
  "worldId": "jazz",
  "name": "Swing Era",
  "origin": "United States",
  "era": "1920s–1940s",
  "description": "Walking bass, ride swing, brass-section writing and call-and-response big-band arrangement.",
  "characteristicInstruments": [
    "drums",
    "upright-bass",
    "piano",
    "brass",
    "clarinet"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    120,
    190
  ],
  "keySubstyles": [
    "Swing Era"
  ],
  "coreConcepts": [
    "ride swing",
    "walking bass",
    "big-band shout chorus"
  ],
  "rhythmicGrammar": [
    "Walking bass under ride-driven swing"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Walking bass under ride-driven swing",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "A7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ]
  },
  "referenceArtists": [
    "Count Basie",
    "Duke Ellington"
  ],
  "referenceTracks": [],
  "techniques": [
    "walking bass",
    "big-band shout chorus",
    "ride cymbal swing"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "jazz-modal-jazz",
  "worldId": "jazz",
  "name": "Modal Jazz",
  "origin": "United States",
  "era": "1950s–1960s",
  "description": "Long harmonic fields, quartal voicings, pedal points and modal melodic development.",
  "characteristicInstruments": [
    "upright-bass",
    "drums",
    "piano",
    "tenor-sax",
    "trumpet"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    100,
    170
  ],
  "keySubstyles": [
    "Modal Jazz"
  ],
  "coreConcepts": [
    "modal vamp",
    "quartal voicing",
    "pedal point"
  ],
  "rhythmicGrammar": [
    "Modal vamp with quartal comping"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Modal vamp with quartal comping",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "A7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ]
  },
  "referenceArtists": [
    "Miles Davis",
    "John Coltrane"
  ],
  "referenceTracks": [
    "So What"
  ],
  "techniques": [
    "modal vamp",
    "quartal voicing",
    "comping anticipation",
    "jazz triplet"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "jazz-post-bop",
  "worldId": "jazz",
  "name": "Post-Bop",
  "origin": "United States",
  "era": "1960s–Present",
  "description": "Hard-bop foundations expanded through ambiguous harmony, sophisticated forms and interactive improvisation.",
  "characteristicInstruments": [
    "upright-bass",
    "drums",
    "piano",
    "tenor-sax",
    "trumpet"
  ],
  "preferredMeters": [
    "4/4",
    "3/4"
  ],
  "tempoRange": [
    100,
    180
  ],
  "keySubstyles": [
    "Post-Bop"
  ],
  "coreConcepts": [
    "guide-tone line",
    "harmonic ambiguity",
    "interactive trading"
  ],
  "rhythmicGrammar": [
    "Ambiguous harmony with interactive improvisation"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Ambiguous harmony with interactive improvisation",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "A7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ]
  },
  "referenceArtists": [
    "Wayne Shorter",
    "Herbie Hancock"
  ],
  "referenceTracks": [],
  "techniques": [
    "guide-tone line",
    "collective improvisation",
    "trading fours"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "jazz-jazz-funk",
  "worldId": "jazz",
  "name": "Jazz-Funk",
  "origin": "United States",
  "era": "1970s–Present",
  "description": "Electric bass, Rhodes, clavinet and funk drums under jazz improvisation.",
  "characteristicInstruments": [
    "bass",
    "drums",
    "rhodes",
    "clavinet",
    "electric-guitar"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    90,
    125
  ],
  "keySubstyles": [
    "Jazz-Funk"
  ],
  "coreConcepts": [
    "electric funk vamp",
    "Rhodes comping",
    "clavinet funk"
  ],
  "rhythmicGrammar": [
    "Funk vamp with jazz improvisation"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Funk vamp with jazz improvisation",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "A7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ]
  },
  "referenceArtists": [
    "Herbie Hancock"
  ],
  "referenceTracks": [
    "Head Hunters"
  ],
  "techniques": [
    "collective improvisation",
    "comping anticipation",
    "jazz triplet",
    "modal vamp"
  ]
};


const EXPANSION_STYLE_4: GenreStyleDefinition = {
  "id": "jazz-avant-garde-free-improvisation",
  "worldId": "jazz",
  "name": "Avant-Garde / Free Improvisation",
  "origin": "United States / Europe",
  "era": "1960s–Present",
  "description": "Collective improvisation replaces fixed harmonic progression with non-grid interaction and timbral development.",
  "characteristicInstruments": [
    "piano",
    "upright-bass",
    "drums",
    "alto-sax",
    "trumpet"
  ],
  "preferredMeters": [
    "4/4",
    "free"
  ],
  "tempoRange": [
    50,
    180
  ],
  "keySubstyles": [
    "Avant-Garde / Free Improvisation"
  ],
  "coreConcepts": [
    "non-grid phrasing",
    "collective improvisation",
    "timbral density"
  ],
  "rhythmicGrammar": [
    "Collective free improvisation without fixed changes"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Collective free improvisation without fixed changes",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "A7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ]
  },
  "referenceArtists": [
    "Ornette Coleman",
    "Cecil Taylor"
  ],
  "referenceTracks": [],
  "techniques": [
    "collective improvisation",
    "non-grid phrasing"
  ]
};


const EXPANSION_STYLE_5: GenreStyleDefinition = {
  "id": "jazz-brazilian-jazz",
  "worldId": "jazz",
  "name": "Brazilian Jazz",
  "origin": "Brazil / United States",
  "era": "1950s–Present",
  "description": "Bossa rhythm, extended harmony, restrained dynamics and conversational improvisation.",
  "characteristicInstruments": [
    "acoustic-guitar",
    "piano",
    "upright-bass",
    "drums",
    "flute"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    100,
    150
  ],
  "keySubstyles": [
    "Brazilian Jazz"
  ],
  "coreConcepts": [
    "bossa syncopation",
    "extended harmony",
    "conversational solo"
  ],
  "rhythmicGrammar": [
    "Bossa syncopation with jazz harmony"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Bossa syncopation with jazz harmony",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "Dm7",
    "G7",
    "Cmaj7",
    "A7"
  ],
  "sectionProgressions": {
    "intro": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "verse": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "chorus": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "bridge": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "solo": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ],
    "coda": [
      "Dm7",
      "G7",
      "Cmaj7",
      "A7"
    ]
  },
  "referenceArtists": [
    "Antônio Carlos Jobim",
    "João Gilberto"
  ],
  "referenceTracks": [],
  "techniques": [
    "jazz triplet"
  ]
};

export const JAZZ_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3, EXPANSION_STYLE_4, EXPANSION_STYLE_5] };
