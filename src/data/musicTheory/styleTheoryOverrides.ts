import type { GenreTheoryDelta } from './genreTheory';

/** Authored per-style theory deltas, materialized from the former style-id rules. */
export const STYLE_THEORY_OVERRIDES: Record<string, GenreTheoryDelta> = {
  "brazilian-bossa-nova": {
    "meter": "4/4",
    "bass": {
      "passingProbability": 0.3
    },
    "harmony": {
      "voicing": "drop-two"
    },
    "rhythm": {
      "signature": [
        "samba-2/4",
        "bossa-baiao-variants",
        "syncopated-violao",
        "bossa-clave",
        "violao-syncopation"
      ]
    }
  },
  "brazilian-samba-de-enredo": {
    "rhythm": {
      "signature": [
        "samba-2/4",
        "bossa-baiao-variants",
        "syncopated-violao",
        "surdo",
        "tamborim",
        "pandeiro"
      ]
    },
    "mixFocus": {
      "percussion": 0.86
    }
  },
  "brazilian-pagode": {
    "rhythm": {
      "signature": [
        "samba-2/4",
        "bossa-baiao-variants",
        "syncopated-violao",
        "pandeiro",
        "tantan",
        "cavaquinho"
      ]
    }
  },
  "brazilian-samba-reggae": {
    "rhythm": {
      "signature": [
        "samba-2/4",
        "bossa-baiao-variants",
        "syncopated-violao",
        "surdo",
        "tamborim",
        "pandeiro"
      ]
    },
    "mixFocus": {
      "percussion": 0.86
    }
  },
  "country-outlaw": {
    "rhythm": {
      "signature": [
        "boom-chick",
        "train",
        "bluegrass-drive",
        "mandolin-chop",
        "boom-chick",
        "shuffle"
      ]
    },
    "techniques": {
      "bass": [
        "pizzicato",
        "accent",
        "staccato",
        "walk-up",
        "walk-down"
      ]
    }
  },
  "country-bluegrass": {
    "rhythm": {
      "signature": [
        "boom-chick",
        "train",
        "bluegrass-drive",
        "mandolin-chop",
        "boom-chick",
        "banjo-roll",
        "mandolin-chop",
        "fiddle-break"
      ]
    },
    "mixFocus": {
      "lead": 0.9
    }
  },
  "country-honky-tonk": {
    "rhythm": {
      "signature": [
        "boom-chick",
        "train",
        "bluegrass-drive",
        "mandolin-chop",
        "boom-chick",
        "shuffle"
      ]
    },
    "techniques": {
      "bass": [
        "pizzicato",
        "accent",
        "staccato",
        "walk-up",
        "walk-down"
      ]
    }
  },
  "electronic-dubstep": {
    "rhythm": {
      "signature": [
        "four-on-floor",
        "breakbeat",
        "sidechain-space",
        "half-time",
        "bass-drop"
      ]
    }
  },
  "folk-bluegrass": {
    "rhythm": {
      "signature": [
        "fingerstyle",
        "flatpick",
        "old-time-drive",
        "boom-chick",
        "banjo-roll",
        "mandolin-chop",
        "fiddle-break"
      ]
    },
    "mixFocus": {
      "lead": 0.9
    }
  },
  "house-dub-techno": {
    "bass": {
      "silenceProbability": 0.18
    },
    "rhythm": {
      "signature": [
        "four-on-floor",
        "offbeat-hat",
        "organ-stab",
        "2-step-variant",
        "dropout",
        "echo-space"
      ]
    },
    "mixFocus": {
      "bass": 0.9
    }
  },
  "house-melodic-techno": {
    "melody": {
      "scale": [
        "dorian",
        "mixolydian",
        "major-pentatonic",
        "major-pentatonic"
      ]
    }
  },
  "house-ebm": {
    "rhythm": {
      "signature": [
        "four-on-floor",
        "offbeat-hat",
        "organ-stab",
        "2-step-variant",
        "four-on-floor",
        "sequenced-bass"
      ]
    },
    "mixFocus": {
      "drums": 0.9
    }
  },
  "jazz-bebop": {
    "bass": {
      "passingProbability": 0.55
    },
    "melody": {
      "scale": [
        "dorian",
        "mixolydian",
        "melodic-minor",
        "blues",
        "melodic-minor"
      ],
      "ornamentCap": 0.26
    }
  },
  "jazz-cool-jazz": {
    "bass": {
      "passingProbability": 0.34
    },
    "rhythm": {
      "swing": 0.61
    },
    "mixFocus": {
      "lead": 0.78
    }
  },
  "jazz-hard-bop": {
    "bass": {
      "passingProbability": 0.55
    },
    "melody": {
      "scale": [
        "dorian",
        "mixolydian",
        "melodic-minor",
        "blues",
        "melodic-minor"
      ],
      "ornamentCap": 0.26
    }
  },
  "jazz-free-jazz": {
    "bass": {
      "silenceProbability": 0.18
    },
    "melody": {
      "scale": [
        "chromatic",
        "dorian"
      ],
      "ornamentCap": 0.3
    }
  },
  "jazz-gypsy-jazz": {
    "harmony": {
      "voicing": "drop-two"
    },
    "rhythm": {
      "signature": [
        "ride-spang-a-lang",
        "comping",
        "ii-V-I",
        "walking",
        "la-pompe"
      ]
    }
  },
  "tango-tango-tradicional": {
    "bass": {
      "passingProbability": 0.12
    },
    "rhythm": {
      "signature": [
        "marcato",
        "sincopa",
        "bordoneo",
        "milonga",
        "arrastre",
        "marcato-en-4",
        "marcato-en-2",
        "habanera-bass",
        "arrastre"
      ]
    },
    "techniques": {
      "bass": [
        "arrastre",
        "strappata",
        "lija",
        "tambor",
        "chicharra",
        "pizzicato",
        "staccato",
        "staccato",
        "pizzicato",
        "arrastre"
      ],
      "bellows": [
        "marcato",
        "arrastre",
        "staccato",
        "legato",
        "marcato",
        "staccato",
        "arrastre"
      ]
    }
  },
  "tango-tango-nuevo": {
    "defaultScale": "melodic-minor",
    "melody": {
      "scale": [
        "harmonic-minor",
        "dorian",
        "phrygian-dominant",
        "melodic-minor"
      ]
    },
    "rhythm": {
      "signature": [
        "marcato",
        "sincopa",
        "bordoneo",
        "milonga",
        "arrastre",
        "3+3+2-ostinato"
      ]
    }
  },
  "tango-milonga": {
    "bass": {
      "passingProbability": 0.2
    },
    "rhythm": {
      "signature": [
        "marcato",
        "sincopa",
        "bordoneo",
        "milonga",
        "arrastre",
        "traspie",
        "3+3+2"
      ]
    }
  },
  "tango-tango-vals": {
    "meter": "3/4",
    "rhythm": {
      "signature": [
        "marcato",
        "sincopa",
        "bordoneo",
        "milonga",
        "arrastre",
        "waltz-three"
      ]
    }
  },
  "metal-heavy-metal": {
    "rhythm": {
      "signature": [
        "palm-mute",
        "double-kick",
        "breakdown",
        "double-kick",
        "palm-mute"
      ]
    }
  },
  "metal-death-metal": {
    "rhythm": {
      "signature": [
        "palm-mute",
        "double-kick",
        "breakdown",
        "double-kick",
        "palm-mute"
      ]
    }
  },
  "metal-black-metal": {
    "rhythm": {
      "signature": [
        "palm-mute",
        "double-kick",
        "breakdown",
        "double-kick",
        "palm-mute"
      ]
    }
  },
  "metal-power-metal": {
    "rhythm": {
      "signature": [
        "palm-mute",
        "double-kick",
        "breakdown",
        "double-kick",
        "palm-mute"
      ]
    }
  },
  "metal-doom-metal": {
    "rhythm": {
      "signature": [
        "palm-mute",
        "double-kick",
        "breakdown",
        "double-kick",
        "palm-mute"
      ]
    }
  },
  "metal-progressive-metal": {
    "rhythm": {
      "signature": [
        "palm-mute",
        "double-kick",
        "breakdown",
        "double-kick",
        "palm-mute"
      ]
    }
  },
  "reggae-roots-reggae": {
    "bass": {
      "silenceProbability": 0.12
    },
    "rhythm": {
      "signature": [
        "one-drop",
        "skank",
        "rockers",
        "one-drop",
        "skank"
      ]
    }
  },
  "reggae-dub": {
    "bass": {
      "silenceProbability": 0.18
    },
    "rhythm": {
      "signature": [
        "one-drop",
        "skank",
        "rockers",
        "dropout",
        "echo-space"
      ]
    },
    "mixFocus": {
      "bass": 0.9
    }
  },
  "reggae-dancehall": {
    "bass": {
      "style": "sub"
    },
    "rhythm": {
      "signature": [
        "one-drop",
        "skank",
        "rockers",
        "dancehall-kick",
        "digital-skank"
      ]
    }
  },
  "reggae-rocksteady": {
    "bass": {
      "style": "riff"
    },
    "rhythm": {
      "signature": [
        "one-drop",
        "skank",
        "rockers",
        "rocksteady-walk"
      ]
    }
  },
  "reggae-ragga": {
    "bass": {
      "style": "sub"
    },
    "rhythm": {
      "signature": [
        "one-drop",
        "skank",
        "rockers",
        "dancehall-kick",
        "digital-skank"
      ]
    }
  },
  "reggaeton-melodic": {
    "melody": {
      "scale": [
        "aeolian",
        "minor-pentatonic",
        "major-pentatonic"
      ]
    }
  },
  "reggaeton-dancehall": {
    "bass": {
      "style": "sub"
    },
    "rhythm": {
      "signature": [
        "dembow",
        "perreo-break",
        "vocal-pickup",
        "dancehall-kick",
        "digital-skank"
      ]
    }
  },
  "rock-grunge": {
    "rhythm": {
      "signature": [
        "straight-eighths",
        "riff-lock",
        "half-time",
        "dynamic-verse-chorus"
      ]
    }
  },
  "rock-punk-rock": {
    "bass": {
      "passingProbability": 0.05
    },
    "rhythm": {
      "signature": [
        "straight-eighths",
        "riff-lock",
        "half-time",
        "downpick-8ths"
      ]
    }
  },
  "rock-shoegaze": {
    "harmony": {
      "voicing": "open"
    },
    "mixFocus": {
      "lead": 0.72,
      "pad": 0.7
    }
  },
  "salsa-salsa-dura": {
    "rhythm": {
      "signature": [
        "2-3-son-clave",
        "3-2-son-clave",
        "tumbao",
        "montuno",
        "cascara",
        "mambo",
        "mambo-break",
        "cascara"
      ]
    },
    "mixFocus": {
      "percussion": 0.84
    }
  },
  "salsa-cha-cha-cha": {
    "bass": {
      "style": "rootFifth"
    },
    "rhythm": {
      "signature": [
        "2-3-son-clave",
        "3-2-son-clave",
        "tumbao",
        "montuno",
        "cascara",
        "mambo",
        "cha-cha-chá",
        "charanga"
      ]
    },
    "mixFocus": {
      "lead": 0.86
    }
  },
  "ska-ska-punk": {
    "bass": {
      "passingProbability": 0.05
    },
    "rhythm": {
      "signature": [
        "offbeat-skank",
        "walking-bass",
        "rocksteady",
        "downpick-8ths"
      ]
    }
  },
  "swing-gypsy-jazz": {
    "rhythm": {
      "signature": [
        "spang-a-lang",
        "charleston",
        "walking",
        "shout",
        "la-pompe"
      ]
    }
  },
  "drum-and-bass-dubstep": {
    "rhythm": {
      "signature": [
        "chopped-break",
        "two-step-sub",
        "half-time-drop",
        "half-time",
        "bass-drop"
      ]
    }
  },
  "industrial-ebm": {
    "rhythm": {
      "signature": [
        "EBM-pulse",
        "industrial-four",
        "mechanical-stop",
        "four-on-floor",
        "sequenced-bass"
      ]
    },
    "mixFocus": {
      "drums": 0.9
    }
  },
  "punk-hardcore-grunge": {
    "rhythm": {
      "signature": [
        "straight-power-chord-pulse",
        "backbeat",
        "dynamic-verse-chorus"
      ]
    }
  },
  "punk-hardcore-punk-rock": {
    "bass": {
      "passingProbability": 0.05
    },
    "rhythm": {
      "signature": [
        "straight-power-chord-pulse",
        "backbeat",
        "downpick-8ths"
      ]
    }
  },
  "punk-hardcore-shoegaze": {
    "harmony": {
      "voicing": "open"
    },
    "mixFocus": {
      "lead": 0.72,
      "pad": 0.7
    }
  },
  "uk-bass-dubstep": {
    "rhythm": {
      "signature": [
        "bass-forward-broken-club-groove",
        "half-time",
        "bass-drop"
      ]
    }
  }
};
