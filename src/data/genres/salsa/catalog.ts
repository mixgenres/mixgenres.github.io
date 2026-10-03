import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "salsa",
  "name": "Salsa",
  "family": "Afro-Cuban / Caribbean",
  "color": "#0143c1",
  "description": "Salsa is an independent musical world. Afro-Cuban / Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Salsa Dura",
  "meter": "4/4",
  "tempo": [
    108,
    132
  ],
  "instruments": [
    "voice",
    "piano",
    "bass",
    "congas",
    "timbales",
    "bongos",
    "trumpet",
    "trombone",
    "guiro",
    "cowbell"
  ],
  "roles": {
    "lead": [
      "trumpet",
      "trombone",
      "voice"
    ],
    "harmony": [
      "piano"
    ],
    "bass": [
      "bass",
      "upright-bass"
    ],
    "percussion": [
      "congas",
      "timbales",
      "bongos",
      "claves",
      "cowbell",
      "guiro"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "major",
    "minor",
    "Mixolydian",
    "Dorian"
  ],
  "chordQualities": [
    "dominant 7",
    "dominant 9",
    "minor 7",
    "major 7",
    "diminished passing"
  ],
  "harmonicRhythm": "montuno vamp with changes by section",
  "cadences": [
    "clave-aligned turnaround",
    "dominant vamp resolution"
  ],
  "bassChordInteraction": "tumbao anticipates the next harmonic root",
  "patternFamilies": [
    "clave 2-3 / 3-2",
    "tumbao",
    "montuno",
    "cáscara",
    "bell pattern",
    "conga marcha",
    "mambo horn block"
  ],
  "techniques": [
    "tres guajeo",
    "piano montuno",
    "brass falls",
    "brass shakes",
    "campana articulation",
    "quinto improvisation"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "salsa-dura",
      "name": "Salsa Dura",
      "description": "hard 2-3/3-2 clave aggressive montuno brass stabs/falls dominant sevenths/ninths",
      "patterns": [
        "hard 2-3/3-2 clave",
        "aggressive montuno",
        "trombone mambo"
      ],
      "techniques": [
        "brass stabs/falls",
        "strong cowbell",
        "dense percussion fills"
      ],
      "harmony": [
        "dominant sevenths/ninths",
        "chromatic turnarounds",
        "modal vamp sections"
      ]
    },
    {
      "id": "son",
      "name": "Son",
      "description": "tres guajeo simpler clave tres arpeggio simpler I-IV-V",
      "patterns": [
        "tres guajeo",
        "simpler clave",
        "sparse bongó/maracas",
        "extended montuno",
        "bass anticipation",
        "repeated coro"
      ],
      "techniques": [
        "tres arpeggio",
        "vocal call-response",
        "sharper tres/piano guajeo",
        "trumpet punctuations"
      ],
      "harmony": [
        "simpler I-IV-V",
        "dominant sevenths",
        "modal tonic/dominant cycles",
        "vamp-centered",
        "dominant tension",
        "repeated tonic-dominant motion"
      ]
    },
    {
      "id": "son-montuno",
      "name": "Son Montuno",
      "description": "tres guajeo simpler clave tres arpeggio simpler I-IV-V",
      "patterns": [
        "tres guajeo",
        "simpler clave",
        "sparse bongó/maracas",
        "extended montuno",
        "bass anticipation",
        "repeated coro"
      ],
      "techniques": [
        "tres arpeggio",
        "vocal call-response",
        "sharper tres/piano guajeo",
        "trumpet punctuations"
      ],
      "harmony": [
        "simpler I-IV-V",
        "dominant sevenths",
        "modal tonic/dominant cycles",
        "vamp-centered",
        "dominant tension",
        "repeated tonic-dominant motion"
      ]
    },
    {
      "id": "mambo",
      "name": "Mambo",
      "description": "big-band horn syncopation timbal-forward sections trumpet/trombone shakes jazzier dominants",
      "patterns": [
        "big-band horn syncopation",
        "timbal-forward sections"
      ],
      "techniques": [
        "trumpet/trombone shakes",
        "falls",
        "unison hits"
      ],
      "harmony": [
        "jazzier dominants",
        "chromatic horn voice leading"
      ]
    },
    {
      "id": "cha-cha-cha",
      "name": "Cha-Cha-Chá",
      "description": "steady cha-cha pulse lighter tumbao güiro consistency simpler major/minor functional progressions",
      "patterns": [
        "steady cha-cha pulse",
        "lighter tumbao"
      ],
      "techniques": [
        "güiro consistency",
        "flute/violin articulation"
      ],
      "harmony": [
        "simpler major/minor functional progressions"
      ]
    },
    {
      "id": "charanga",
      "name": "Charanga",
      "description": "flute melody + violin counterlines flute ornament diatonic with sevenths",
      "patterns": [
        "flute melody + violin counterlines"
      ],
      "techniques": [
        "flute ornament",
        "light string staccato"
      ],
      "harmony": [
        "diatonic with sevenths",
        "elegant voice leading"
      ]
    },
    {
      "id": "pachanga",
      "name": "Pachanga",
      "description": "buoyant charanga-like groove bright staccato simple repetitive dance harmony",
      "patterns": [
        "buoyant charanga-like groove"
      ],
      "techniques": [
        "bright staccato",
        "short flute/violin riffs"
      ],
      "harmony": [
        "simple repetitive dance harmony"
      ]
    },
    {
      "id": "boogaloo",
      "name": "Boogaloo",
      "description": "R&B backbeat + Latin percussion handclaps blues/soul dominant chords",
      "patterns": [
        "R&B backbeat + Latin percussion"
      ],
      "techniques": [
        "handclaps",
        "shouted hooks",
        "bluesy horns"
      ],
      "harmony": [
        "blues/soul dominant chords",
        "simple vamp"
      ]
    },
    {
      "id": "descarga",
      "name": "Descarga",
      "description": "open vamp rotating soloist extended improvisation static dominant/modal vamp",
      "patterns": [
        "open vamp",
        "rotating soloist"
      ],
      "techniques": [
        "extended improvisation",
        "percussion exchanges"
      ],
      "harmony": [
        "static dominant/modal vamp",
        "occasional cycle changes"
      ]
    },
    {
      "id": "guaguanco-salsa",
      "name": "Guaguancó Salsa",
      "description": "rumba clave guaguancó percussion quinto-like improvisation modal vamp",
      "patterns": [
        "rumba clave",
        "guaguancó percussion",
        "coro"
      ],
      "techniques": [
        "quinto-like improvisation",
        "vocal pregón"
      ],
      "harmony": [
        "modal vamp",
        "minimal chord movement"
      ]
    },
    {
      "id": "salsa-romantica",
      "name": "Salsa Romántica",
      "description": "softened percussion more regular pop sections smoother brass pop-ballad progressions",
      "patterns": [
        "softened percussion",
        "more regular pop sections"
      ],
      "techniques": [
        "smoother brass",
        "legato keys"
      ],
      "harmony": [
        "pop-ballad progressions",
        "maj7/min7/add9"
      ]
    },
    {
      "id": "puerto-rican-salsa",
      "name": "Puerto Rican Salsa",
      "description": "polished piano/bass/clave clean horn blocks tight ensemble articulation functional salsa harmony with clean voice leading",
      "patterns": [
        "polished piano/bass/clave",
        "clean horn blocks"
      ],
      "techniques": [
        "tight ensemble articulation"
      ],
      "harmony": [
        "functional salsa harmony with clean voice leading"
      ]
    },
    {
      "id": "salsa-calena",
      "name": "Salsa Caleña",
      "description": "faster pulse active bass/piano crisp horn punctuation frequent dominant movement",
      "patterns": [
        "faster pulse",
        "active bass/piano"
      ],
      "techniques": [
        "crisp horn punctuation",
        "energetic fills"
      ],
      "harmony": [
        "frequent dominant movement",
        "bright major centers"
      ]
    },
    {
      "id": "salsa-jazz",
      "name": "Salsa Jazz",
      "description": "extended montuno + jazz solo sections improvisation altered dominants",
      "patterns": [
        "extended montuno + jazz solo sections"
      ],
      "techniques": [
        "improvisation",
        "complex horn voicing"
      ],
      "harmony": [
        "altered dominants",
        "ii-V",
        "modal interchange",
        "upper structures"
      ]
    },
    {
      "id": "merengue-crossover",
      "name": "Merengue Crossover",
      "description": "tambora/güira fast straight bass rapid horn stabs simple tonic/dominant cycles",
      "patterns": [
        "tambora/güira",
        "fast straight bass"
      ],
      "techniques": [
        "rapid horn stabs",
        "güira rolls"
      ],
      "harmony": [
        "simple tonic/dominant cycles"
      ]
    },
    {
      "id": "cumbia-crossover",
      "name": "Cumbia Crossover",
      "description": "binary cumbia bass/percussion less dense clave interaction accordion/keyboard/flute riffs simple functional loops",
      "patterns": [
        "binary cumbia bass/percussion",
        "less dense clave interaction"
      ],
      "techniques": [
        "accordion/keyboard/flute riffs"
      ],
      "harmony": [
        "simple functional loops"
      ]
    }
  ]
};
