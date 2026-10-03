import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "flamenco",
  "name": "Flamenco",
  "family": "Andalusia / Iberian",
  "color": "#31632f",
  "description": "Flamenco is an independent musical world. Andalusia / Iberian idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Soleá",
  "meter": "12/8",
  "tempo": [
    88,
    120
  ],
  "instruments": [
    "voice",
    "guitar",
    "palmas",
    "cajon",
    "castanets",
    "bass"
  ],
  "roles": {
    "lead": [
      "voice",
      "guitar"
    ],
    "harmony": [
      "guitar"
    ],
    "bass": [
      "bass"
    ],
    "percussion": [
      "palmas",
      "cajon",
      "castanets"
    ]
  },
  "pitchSystem": "flamenco Phrygian",
  "scales": [
    "Phrygian",
    "major/Phrygian mixture",
    "modal drone"
  ],
  "chordQualities": [
    "Phrygian tonic",
    "major flat II",
    "dominant",
    "open-string voicing"
  ],
  "harmonicRhythm": "palo-specific; compás-anchored",
  "cadences": [
    "Andalusian cadence",
    "dominant-to-Phrygian",
    "cierre"
  ],
  "bassChordInteraction": "tonic/dominant pedal, cadence-linked bass",
  "patternFamilies": [
    "compás cycle",
    "palmas",
    "rasgueado structure",
    "llamada",
    "cierre",
    "remate",
    "escobilla support"
  ],
  "techniques": [
    "rasgueado",
    "picado",
    "golpe",
    "alzapúa",
    "tremolo",
    "ligado",
    "pulgar",
    "abanico",
    "cejilla",
    "vocal melisma"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "solea",
      "name": "Soleá",
      "description": "canonical 12-count accents spacious compás restrained picado Phrygian cadence",
      "patterns": [
        "canonical 12-count accents",
        "spacious compás",
        "slow rasgueado"
      ],
      "techniques": [
        "restrained picado",
        "deep cante melisma",
        "strong cierres"
      ],
      "harmony": [
        "Phrygian cadence",
        "tonicized III",
        "dominant-to-Phrygian resolution"
      ]
    },
    {
      "id": "bulerias",
      "name": "Bulerías",
      "description": "fast 12-count displaced accents rapid rasgueado faster chord rhythm",
      "patterns": [
        "fast 12-count",
        "displaced accents",
        "short llamadas",
        "dense palmas"
      ],
      "techniques": [
        "rapid rasgueado",
        "picado bursts",
        "golpe",
        "abrupt remates"
      ],
      "harmony": [
        "faster chord rhythm",
        "Phrygian/major alternation",
        "compact cadences"
      ]
    },
    {
      "id": "alegrias",
      "name": "Alegrías",
      "description": "bright 12-count escobilla-compatible pulse lighter rasgueado major-key emphasis",
      "patterns": [
        "bright 12-count",
        "escobilla-compatible pulse"
      ],
      "techniques": [
        "lighter rasgueado",
        "crisp palmas",
        "lyrical falsetas"
      ],
      "harmony": [
        "major-key emphasis",
        "secondary dominants",
        "bright cadences"
      ]
    },
    {
      "id": "tangos",
      "name": "Tangos",
      "description": "4/4 strong beat 2/4 feel groove-based rasgueado Phrygian loops",
      "patterns": [
        "4/4",
        "strong beat 2/4 feel",
        "syncopated palmas"
      ],
      "techniques": [
        "groove-based rasgueado",
        "short vocal melisma"
      ],
      "harmony": [
        "Phrygian loops",
        "simple repeated progressions"
      ]
    },
    {
      "id": "seguiriya",
      "name": "Seguiriya",
      "description": "asymmetrical 12-count accent feel sparse accompaniment extreme cante ornament dark Phrygian",
      "patterns": [
        "asymmetrical 12-count accent feel",
        "sparse accompaniment"
      ],
      "techniques": [
        "extreme cante ornament",
        "dramatic pauses"
      ],
      "harmony": [
        "dark Phrygian",
        "dissonant suspensions",
        "slow cadence"
      ]
    },
    {
      "id": "tientos",
      "name": "Tientos",
      "description": "slow 4/4 heavy accents deep rasgueado dark Phrygian loops",
      "patterns": [
        "slow 4/4",
        "heavy accents",
        "often transitions into Tangos"
      ],
      "techniques": [
        "deep rasgueado",
        "vocal rubato"
      ],
      "harmony": [
        "dark Phrygian loops",
        "slower harmonic rhythm"
      ]
    },
    {
      "id": "fandangos",
      "name": "Fandangos",
      "description": "freer verse rhythm optional regular compás singer-following guitar major/Phrygian switching",
      "patterns": [
        "freer verse rhythm",
        "optional regular compás"
      ],
      "techniques": [
        "singer-following guitar",
        "decorative falsetas"
      ],
      "harmony": [
        "major/Phrygian switching",
        "characteristic Andalusian resolutions"
      ]
    },
    {
      "id": "rumba",
      "name": "Rumba",
      "description": "binary strum Latin percussion fast rasgueado pop-functional loops",
      "patterns": [
        "binary strum",
        "Latin percussion",
        "syncopated bass"
      ],
      "techniques": [
        "fast rasgueado",
        "muted strum",
        "percussive guitar"
      ],
      "harmony": [
        "pop-functional loops",
        "modal color",
        "seventh chords"
      ]
    },
    {
      "id": "tonas-martinetes",
      "name": "Tonás / Martinetes",
      "description": "voice-led free rhythm a cappella ornament modal melodic center",
      "patterns": [
        "voice-led free rhythm"
      ],
      "techniques": [
        "a cappella ornament",
        "dramatic vocal attack"
      ],
      "harmony": [
        "modal melodic center",
        "no required chord progression"
      ]
    },
    {
      "id": "taranta",
      "name": "Taranta",
      "description": "free meter long guitar responses tremolo mining-song modal colors",
      "patterns": [
        "free meter",
        "long guitar responses"
      ],
      "techniques": [
        "tremolo",
        "sustained resonance",
        "rubato"
      ],
      "harmony": [
        "mining-song modal colors",
        "unusual open-string voicings"
      ]
    },
    {
      "id": "granaina-malaguena",
      "name": "Granaína / Malagueña",
      "description": "free vocal phrases elaborate melisma rich Phrygian/major ambiguity",
      "patterns": [
        "free vocal phrases"
      ],
      "techniques": [
        "elaborate melisma",
        "responsive guitar arpeggiation"
      ],
      "harmony": [
        "rich Phrygian/major ambiguity"
      ]
    },
    {
      "id": "guajira",
      "name": "Guajira",
      "description": "12-count Cuban-derived feel flowing arpeggio major-key",
      "patterns": [
        "12-count Cuban-derived feel"
      ],
      "techniques": [
        "flowing arpeggio",
        "lighter rasgueado"
      ],
      "harmony": [
        "major-key",
        "dominant sevenths",
        "brighter functional progressions"
      ]
    },
    {
      "id": "farruca",
      "name": "Farruca",
      "description": "4/4 firm downbeat powerful footwork support minor/modal",
      "patterns": [
        "4/4",
        "firm downbeat",
        "repeated guitar ostinato"
      ],
      "techniques": [
        "powerful footwork support",
        "staccato guitar"
      ],
      "harmony": [
        "minor/modal",
        "clear tonal cadence"
      ]
    },
    {
      "id": "sevillanas",
      "name": "Sevillanas",
      "description": "fixed copla sections triple-feel accompaniment regular rasgueado simple functional major/minor progression",
      "patterns": [
        "fixed copla sections",
        "triple-feel accompaniment"
      ],
      "techniques": [
        "regular rasgueado",
        "phrase-ending cierre"
      ],
      "harmony": [
        "simple functional major/minor progression"
      ]
    },
    {
      "id": "nuevo-flamenco",
      "name": "Nuevo Flamenco",
      "description": "pop/rock backbeat layered with flamenco cells traditional guitar + electric/synth effects broader pop/jazz chord vocabulary",
      "patterns": [
        "pop/rock backbeat layered with flamenco cells"
      ],
      "techniques": [
        "traditional guitar + electric/synth effects"
      ],
      "harmony": [
        "broader pop/jazz chord vocabulary"
      ]
    },
    {
      "id": "flamenco-jazz",
      "name": "Flamenco Jazz",
      "description": "compás + swing/Latin jazz phrasing extended improvisation altered dominants",
      "patterns": [
        "compás + swing/Latin jazz phrasing"
      ],
      "techniques": [
        "extended improvisation",
        "jazz articulation"
      ],
      "harmony": [
        "altered dominants",
        "ii-V",
        "modal interchange",
        "extended voicings"
      ]
    },
    {
      "id": "flamenco-rock",
      "name": "Flamenco Rock",
      "description": "rock backbeat + palmas/rasgueado distortion blues/rock harmony with Phrygian cadences",
      "patterns": [
        "rock backbeat + palmas/rasgueado"
      ],
      "techniques": [
        "distortion",
        "bends",
        "palm mute + flamenco attack"
      ],
      "harmony": [
        "blues/rock harmony with Phrygian cadences"
      ]
    },
    {
      "id": "urban-experimental",
      "name": "Urban / Experimental",
      "description": "fragmented palmas electronic hits chopped vocals minimal loops",
      "patterns": [
        "fragmented palmas",
        "electronic hits",
        "sparse sub pulse"
      ],
      "techniques": [
        "chopped vocals",
        "processed claps",
        "pitch manipulation"
      ],
      "harmony": [
        "minimal loops",
        "modal drones",
        "bass-centered harmony"
      ]
    }
  ]
};
