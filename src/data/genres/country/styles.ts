import type { GenreStyleDefinition, GenreWorld } from '../../schema';


const STYLE_0: GenreStyleDefinition = {
        "id": "country-neotraditional",
        "worldId": "country",
        "name": "Neotraditional",
        "origin": "Nashville / Texas",
        "era": "1980s–Present",
        "description": "Fiddle and steel guitar in a 4/4 country groove.",
        "characteristicInstruments": [
          "steel-guitar",
          "fiddle",
          "acoustic-guitar",
          "electric-guitar",
          "bass"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          98,
          122
        ],
        "keySubstyles": [
          "80s/90s Country Revival",
          "Traditional Country"
        ],
        "coreConcepts": [
          "singing pedal steel guitar bends",
          "sawstroke twin fiddle harmonies",
          "warm acoustic rhythm strum",
          "sincere baritone storytelling vocals"
        ],
        "rhythmicGrammar": [
          "two-step kick/snare train beat with root-fifth bassline and steel guitar fills"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Weeping pedal steel guitar swell answering clean baritone vocal line",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "C",
            "D",
            "G"
          ],
          "verse": [
            "G",
            "C",
            "D",
            "G",
            "G",
            "C",
            "D",
            "G"
          ],
          "chorus": [
            "C",
            "D",
            "G",
            "Em",
            "C",
            "D",
            "G",
            "G"
          ],
          "solo": [
            "G",
            "C",
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


const STYLE_1: GenreStyleDefinition = {
        "id": "country-outlaw",
        "worldId": "country",
        "name": "Outlaw",
        "origin": "Austin, Texas / Nashville",
        "era": "1970s",
        "description": "Gritty • Driving • Rebellious\nRaw, rock-edged",
        "characteristicInstruments": [
          "electric-guitar",
          "acoustic-guitar",
          "bass",
          "drums",
          "harmonica"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          105,
          128
        ],
        "keySubstyles": [
          "Texas Outlaw Country",
          "Progressive Country"
        ],
        "coreConcepts": [
          "driving four-on-the-floor rock beat",
          "phaser-drenched Telecaster rhythm",
          "nylon-string trigger acoustic leads",
          "rebellious narrative lyrics"
        ],
        "rhythmicGrammar": [
          "heavy driving four-beat kick with syncopated bass and chugging electric rhythm"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Phaser-soaked electric guitar chug locked with driving four-on-the-floor kick",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "A",
            "D",
            "E",
            "A"
          ],
          "verse": [
            "A",
            "A",
            "D",
            "A",
            "A",
            "A",
            "E",
            "A"
          ],
          "chorus": [
            "D",
            "D",
            "A",
            "A",
            "E",
            "E",
            "A",
            "A"
          ],
          "coda": [
            "D",
            "E",
            "A",
            "A"
          ]
        }
      };


const STYLE_2: GenreStyleDefinition = {
        "id": "country-bluegrass",
        "worldId": "country",
        "name": "Bluegrass",
        "origin": "Kentucky / Appalachia",
        "era": "1940s–Present",
        "description": "Acoustic • High-Speed • Virtuosic\nFast banjo,",
        "characteristicInstruments": [
          "banjo",
          "mandolin",
          "fiddle",
          "acoustic-guitar",
          "upright-bass"
        ],
        "preferredMeters": [
          "2/4",
          "4/4"
        ],
        "tempoRange": [
          130,
          165
        ],
        "keySubstyles": [
          "Traditional Bluegrass",
          "Newgrass",
          "Scruggs Style"
        ],
        "coreConcepts": [
          "three-finger Scruggs banjo rolls",
          "percussive mandolin backbeat chop",
          "high lonesome tenor harmonies",
          "blistering acoustic solo trades"
        ],
        "rhythmicGrammar": [
          "fast 2/4 boom-chick bass with offbeat mandolin chop on beats 2 and 4"
        ],
        "danceTags": [
          "social-partner",
          "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Rapid 3-finger banjo roll erupting into syncopated mandolin chop on the backbeat",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "pushed"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "C",
            "D",
            "G"
          ],
          "verse": [
            "G",
            "G",
            "C",
            "G",
            "G",
            "Em",
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
          "solo": [
            "G",
            "C",
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


const STYLE_3: GenreStyleDefinition = {
        "id": "country-honky-tonk",
        "worldId": "country",
        "name": "Honky-Tonk",
        "origin": "Texas / Oklahoma / Nashville",
        "era": "1940s–1950s",
        "description": "Twin Fiddle • Steel • 2-Step\nBeer-joint",
        "characteristicInstruments": [
          "fiddle",
          "steel-guitar",
          "acoustic-guitar",
          "upright-bass",
          "piano"
        ],
        "preferredMeters": [
          "4/4",
          "2/4"
        ],
        "tempoRange": [
          100,
          126
        ],
        "keySubstyles": [
          "Classic Honky Tonk",
          "Hard Country"
        ],
        "coreConcepts": [
          "twin fiddle leads",
          "steely weeping slide licks",
          "honky-tonk upright piano tinkle",
          "unflinching heartbreak lyricism"
        ],
        "rhythmicGrammar": [
          "classic boom-chick two-step bass with steady rhythm guitar acoustic strum"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Weeping steel guitar slide leading into twin fiddle turnaround over two-step bass",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "F",
            "G7",
            "C"
          ],
          "verse": [
            "C",
            "C",
            "F",
            "C",
            "C",
            "C",
            "G7",
            "G7",
            "C",
            "C",
            "F",
            "C",
            "C",
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


const STYLE_4: GenreStyleDefinition = {
        "id": "country-bakersfield",
        "worldId": "country",
        "name": "Bakersfield",
        "origin": "Bakersfield, California",
        "era": "1950s–1960s",
        "description": "Twangy • Telecaster • Loud\nWest Coast",
        "characteristicInstruments": [
          "electric-guitar",
          "steel-guitar",
          "bass",
          "drums",
          "fiddle"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          115,
          140
        ],
        "keySubstyles": [
          "Bakersfield Sound",
          "California Country"
        ],
        "coreConcepts": [
          "snappy treble-boosted Fender Telecaster twang",
          "driving rock-influenced drum backbeat",
          "pedal steel harmony fills",
          "punchy straightforward vocal delivery"
        ],
        "rhythmicGrammar": [
          "driving drum beat with prominent snare backbeat on 2 and 4 and driving bass"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Treble-heavy Telecaster twang lick backed by snappy drum rimshots",
        "grooveMechanics": {
          "swingPercentage": 50,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "straight"
        },
        "sectionProgressions": {
          "intro": [
            "E",
            "A",
            "B7",
            "E"
          ],
          "verse": [
            "E",
            "E",
            "A",
            "E",
            "E",
            "E",
            "B7",
            "B7",
            "E",
            "E",
            "A",
            "E",
            "E",
            "B7",
            "E",
            "E"
          ],
          "chorus": [
            "A",
            "A",
            "E",
            "E",
            "B7",
            "B7",
            "E",
            "E"
          ],
          "coda": [
            "A",
            "B7",
            "E",
            "E"
          ]
        }
      };


const STYLE_5: GenreStyleDefinition = {
        "id": "country-americana",
        "worldId": "country",
        "name": "Americana",
        "origin": "USA",
        "era": "1990s–Present",
        "description": "Rootsy • Acoustic • Soulful\nContemporary folk-country",
        "characteristicInstruments": [
          "acoustic-guitar",
          "fiddle",
          "banjo",
          "bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4",
          "3/4"
        ],
        "tempoRange": [
          80,
          108
        ],
        "keySubstyles": [
          "Roots Rock",
          "Alt-Country",
          "Contemporary Roots"
        ],
        "coreConcepts": [
          "intimate acoustic songwriting",
          "rich close-harmony vocals",
          "organic analog production",
          "literary introspective lyricism"
        ],
        "rhythmicGrammar": [
          "relaxed organic drum pocket with deep bass and warm acoustic strumming"
        ],
        "danceTags": [
          "listening",
          "social-partner"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Warm fingerpicked acoustic guitar paired with plaintive close-harmony vocals",
        "grooveMechanics": {
          "swingPercentage": 52,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
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
            "C",
            "G",
            "Am",
            "F",
            "C",
            "G",
            "G"
          ],
          "coda": [
            "F",
            "G",
            "C",
            "C"
          ]
        }
      };


const STYLE_6: GenreStyleDefinition = {
        "id": "country-nashville-sound",
        "worldId": "country",
        "name": "Nashville Sound",
        "origin": "Nashville, Tennessee",
        "era": "Late 1950s–1960s",
        "description": "Smooth • Strings • Polished\nPop-country crossover",
        "characteristicInstruments": [
          "strings",
          "piano",
          "steel-guitar",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4",
          "3/4"
        ],
        "tempoRange": [
          72,
          95
        ],
        "keySubstyles": [
          "Countrypolitan",
          "Smooth Country Pop"
        ],
        "coreConcepts": [
          "lush orchestral string section pads",
          "slip-note Floyd Cramer piano style",
          "smooth background vocal quartets (The Jordanaires)",
          "velvety lead vocals"
        ],
        "rhythmicGrammar": [
          "gentle brushed snare pulse with warm upright bass and subtle guitar ticks"
        ],
        "danceTags": [
          "social-partner",
          "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Floyd Cramer slip-note piano melody enveloped in lush string orchestra swells",
        "grooveMechanics": {
          "swingPercentage": 54,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "laid-back"
        },
        "sectionProgressions": {
          "intro": [
            "C",
            "Am",
            "Dm7",
            "G7"
          ],
          "verse": [
            "C",
            "Am",
            "Dm7",
            "G7",
            "C",
            "C7",
            "F",
            "Fm",
            "C",
            "Am",
            "Dm7",
            "G7",
            "C",
            "F",
            "C",
            "G7"
          ],
          "chorus": [
            "F",
            "G7",
            "C",
            "Am",
            "Dm7",
            "G7",
            "C",
            "C"
          ],
          "coda": [
            "Fm",
            "G7",
            "C",
            "C"
          ]
        }
      };


const STYLE_7: GenreStyleDefinition = {
        "id": "country-western-swing",
        "worldId": "country",
        "name": "Western Swing",
        "origin": "Texas / Oklahoma",
        "era": "1930s–1950s",
        "description": "Swinging • Big Band • Jazzy\nFiddle-driven",
        "characteristicInstruments": [
          "fiddle",
          "steel-guitar",
          "electric-guitar",
          "upright-bass",
          "drums"
        ],
        "preferredMeters": [
          "4/4"
        ],
        "tempoRange": [
          120,
          155
        ],
        "keySubstyles": [
          "Texas Western Swing",
          "Jazzy Hillbilly Swing"
        ],
        "coreConcepts": [
          "twin and triple fiddle jazz harmonies",
          "swinging lap steel improvisation",
          "jazz chord substitutions (diminished/augmented)",
          "driving 4-beat swing rhythm"
        ],
        "rhythmicGrammar": [
          "fast four-to-the-bar walking bass with hi-hat swing and syncopated guitar comps"
        ],
        "danceTags": [
          "social-partner",
          "wcs-compatible"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Triple fiddle swinging harmonization over walking bass and hot steel guitar riff",
        "grooveMechanics": {
          "swingPercentage": 60,
          "anticipationOffsetSteps": 0,
          "microtimingFeel": "swung"
        },
        "sectionProgressions": {
          "intro": [
            "G",
            "E7",
            "A7",
            "D7"
          ],
          "verse": [
            "G",
            "G#dim",
            "Am7",
            "D7",
            "G",
            "G#dim",
            "Am7",
            "D7",
            "G",
            "G7",
            "C",
            "C#dim",
            "G",
            "E7",
            "A7",
            "D7"
          ],
          "chorus": [
            "C",
            "C#dim",
            "G",
            "E7",
            "A7",
            "D7",
            "G",
            "G"
          ],
          "coda": [
            "G",
            "E7",
            "A7",
            "D7",
            "G",
            "G"
          ]
        }
      };


const EXPANSION_STYLE_0: GenreStyleDefinition = {
  "id": "country-appalachian-old-time",
  "worldId": "country",
  "name": "Appalachian Old-Time",
  "origin": "Appalachia / United States",
  "era": "1800s–Present",
  "description": "Banjo and fiddle lead modal melodies, drones and repetitive dance structures.",
  "characteristicInstruments": [
    "banjo",
    "fiddle",
    "acoustic-guitar",
    "upright-bass",
    "voice"
  ],
  "preferredMeters": [
    "4/4",
    "6/8"
  ],
  "tempoRange": [
    80,
    135
  ],
  "keySubstyles": [
    "Appalachian Old-Time"
  ],
  "coreConcepts": [
    "Carter alternating bass",
    "fiddle drone",
    "banjo roll"
  ],
  "rhythmicGrammar": [
    "Fiddle drone with alternating guitar bass"
  ],
  "danceTags": [
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Fiddle drone with alternating guitar bass",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "G",
    "C",
    "G",
    "D7"
  ],
  "sectionProgressions": {
    "intro": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "verse": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "chorus": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "bridge": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "solo": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "coda": [
      "G",
      "C",
      "G",
      "D7"
    ]
  },
  "referenceArtists": [
    "The Carter Family",
    "Doc Watson"
  ],
  "referenceTracks": [],
  "techniques": [
    "banjo roll",
    "fiddle drone",
    "Carter-style alternating bass"
  ]
};


const EXPANSION_STYLE_1: GenreStyleDefinition = {
  "id": "country-nashville-country-pop",
  "worldId": "country",
  "name": "Nashville Country-Pop",
  "origin": "Nashville / United States",
  "era": "1950s–1960s",
  "description": "Smooth country-pop with strings, restrained rhythm sections and lush harmonic transitions.",
  "characteristicInstruments": [
    "acoustic-guitar",
    "steel-guitar",
    "strings",
    "bass",
    "drums",
    "voice"
  ],
  "preferredMeters": [
    "4/4",
    "3/4"
  ],
  "tempoRange": [
    70,
    105
  ],
  "keySubstyles": [
    "Nashville Country-Pop"
  ],
  "coreConcepts": [
    "pedal-steel fills",
    "string swell",
    "smooth vocal harmony"
  ],
  "rhythmicGrammar": [
    "Pedal steel answer over string-backed country"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Pedal steel answer over string-backed country",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "G",
    "C",
    "G",
    "D7"
  ],
  "sectionProgressions": {
    "intro": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "verse": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "chorus": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "bridge": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "solo": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "coda": [
      "G",
      "C",
      "G",
      "D7"
    ]
  },
  "referenceArtists": [
    "Patsy Cline",
    "Jim Reeves"
  ],
  "referenceTracks": [],
  "techniques": [
    "pedal-steel fills",
    "vocal harmony thirds/sixths",
    "Nashville number-style progression",
    "country shuffle"
  ]
};


const EXPANSION_STYLE_2: GenreStyleDefinition = {
  "id": "country-country-rock",
  "worldId": "country",
  "name": "Country Rock",
  "origin": "United States",
  "era": "1960s–Present",
  "description": "Country harmony and guitar vocabulary expanded through rock drums and larger electric arrangements.",
  "characteristicInstruments": [
    "electric-guitar",
    "acoustic-guitar",
    "bass",
    "drums",
    "steel-guitar",
    "voice"
  ],
  "preferredMeters": [
    "4/4"
  ],
  "tempoRange": [
    80,
    125
  ],
  "keySubstyles": [
    "Country Rock"
  ],
  "coreConcepts": [
    "dual-guitar harmony",
    "rock backbeat",
    "country lead fills"
  ],
  "rhythmicGrammar": [
    "Country guitar harmony over rock backbeat"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Country guitar harmony over rock backbeat",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "G",
    "C",
    "G",
    "D7"
  ],
  "sectionProgressions": {
    "intro": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "verse": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "chorus": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "bridge": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "solo": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "coda": [
      "G",
      "C",
      "G",
      "D7"
    ]
  },
  "referenceArtists": [
    "Gram Parsons",
    "Eagles",
    "Poco"
  ],
  "referenceTracks": [],
  "techniques": [
    "country shuffle",
    "pedal-steel fills",
    "vocal harmony thirds/sixths"
  ]
};


const EXPANSION_STYLE_3: GenreStyleDefinition = {
  "id": "country-alt-country-roots-rock",
  "worldId": "country",
  "name": "Alt-Country / Roots Rock",
  "origin": "United States",
  "era": "1980s–Present",
  "description": "Rougher roots songwriting with folk material, rock rhythm sections and less polish.",
  "characteristicInstruments": [
    "acoustic-guitar",
    "electric-guitar",
    "bass",
    "drums",
    "fiddle",
    "voice"
  ],
  "preferredMeters": [
    "4/4",
    "6/8"
  ],
  "tempoRange": [
    70,
    120
  ],
  "keySubstyles": [
    "Alt-Country / Roots Rock"
  ],
  "coreConcepts": [
    "rough room texture",
    "folk-rock strum",
    "roots lead fills"
  ],
  "rhythmicGrammar": [
    "Folk-derived strum with rough rock pocket"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Folk-derived strum with rough rock pocket",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "G",
    "C",
    "G",
    "D7"
  ],
  "sectionProgressions": {
    "intro": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "verse": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "chorus": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "bridge": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "solo": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "coda": [
      "G",
      "C",
      "G",
      "D7"
    ]
  },
  "referenceArtists": [
    "Uncle Tupelo",
    "Lucinda Williams",
    "Steve Earle"
  ],
  "referenceTracks": [],
  "techniques": [
    "country shuffle",
    "pedal-steel fills"
  ]
};


const EXPANSION_STYLE_4: GenreStyleDefinition = {
  "id": "country-country-gospel",
  "worldId": "country",
  "name": "Country Gospel",
  "origin": "United States",
  "era": "1940s–Present",
  "description": "Close vocal harmony, gospel cadences, call-and-response and devotional phrasing.",
  "characteristicInstruments": [
    "acoustic-guitar",
    "piano",
    "bass",
    "fiddle",
    "voice",
    "backing-vocals"
  ],
  "preferredMeters": [
    "4/4",
    "3/4"
  ],
  "tempoRange": [
    70,
    120
  ],
  "keySubstyles": [
    "Country Gospel"
  ],
  "coreConcepts": [
    "gospel cadence",
    "vocal thirds/sixths",
    "call-response"
  ],
  "rhythmicGrammar": [
    "Close harmony over country gospel cadence"
  ],
  "danceTags": [
    "listening",
    "spiritual"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Close harmony over country gospel cadence",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "prominentChords": [
    "G",
    "C",
    "G",
    "D7"
  ],
  "sectionProgressions": {
    "intro": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "verse": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "chorus": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "bridge": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "solo": [
      "G",
      "C",
      "G",
      "D7"
    ],
    "coda": [
      "G",
      "C",
      "G",
      "D7"
    ]
  },
  "referenceArtists": [
    "Hank Williams",
    "The Louvin Brothers"
  ],
  "referenceTracks": [],
  "techniques": [
    "vocal harmony thirds/sixths",
    "country shuffle"
  ]
};

export const COUNTRY_WORLD_STYLES: Partial<GenreWorld> = { styleDefinitions: [STYLE_0, STYLE_1, STYLE_2, STYLE_3, STYLE_4, STYLE_5, STYLE_6, STYLE_7, EXPANSION_STYLE_0, EXPANSION_STYLE_1, EXPANSION_STYLE_2, EXPANSION_STYLE_3, EXPANSION_STYLE_4] };
