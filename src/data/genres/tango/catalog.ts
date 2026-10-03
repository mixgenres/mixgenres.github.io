import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "tango",
  "name": "Tango",
  "family": "Río de la Plata / Argentina",
  "color": "#e252a5",
  "description": "Tango is an independent musical world. Río de la Plata / Argentina idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Golden Age",
  "meter": "4/4",
  "tempo": [
    108,
    132
  ],
  "instruments": [
    "bandoneon",
    "violin",
    "piano",
    "upright-bass",
    "cello"
  ],
  "roles": {
    "lead": [
      "bandoneon",
      "violin"
    ],
    "harmony": [
      "piano",
      "guitar",
      "cello"
    ],
    "bass": [
      "upright-bass"
    ],
    "percussion": [
      "palmas"
    ]
  },
  "pitchSystem": "12-tet",
  "scales": [
    "minor",
    "major",
    "harmonic minor"
  ],
  "chordQualities": [
    "minor",
    "major",
    "dominant 7",
    "dominant 7 flat 9",
    "diminished passing",
    "augmented sixth color"
  ],
  "harmonicRhythm": "functional tonal; phrase-led; delayed cadence",
  "cadences": [
    "authentic V-i",
    "deceptive delay",
    "chromatic approach"
  ],
  "bassChordInteraction": "marcato bass roots with chromatic approach and arrastre",
  "patternFamilies": [
    "marcato en 4",
    "marcato en 2",
    "síncopa",
    "arrastre",
    "bandoneón response",
    "violin countermelody",
    "silence before cadence"
  ],
  "techniques": [
    "bandoneón staccato",
    "bandoneón legato",
    "bellows swell",
    "violin portamento",
    "violin tremolo",
    "violin pizzicato",
    "piano marcato",
    "arrastre",
    "accented unison",
    "rubato phrase ending"
  ],
  "forbiddenPatterns": [
    "patterns owned by another genre",
    "generic four-on-the-floor unless the selected style specifies it"
  ],
  "styles": [
    {
      "id": "golden-age",
      "name": "Golden Age",
      "description": "balanced marcato/síncopa regular 4/8-bar phrases clean staccato/legato contrast functional tonal harmony",
      "patterns": [
        "balanced marcato/síncopa",
        "regular 4/8-bar phrases",
        "moderate fills"
      ],
      "techniques": [
        "clean staccato/legato contrast",
        "controlled rubato",
        "ensemble crescendos"
      ],
      "harmony": [
        "functional tonal harmony",
        "sevenths",
        "diminished passing chords",
        "moderate chromaticism"
      ]
    },
    {
      "id": "canyengue",
      "name": "Canyengue",
      "description": "habanera-derived bass 2/4 bounce dry staccato simpler tonic/dominant/subdominant motion",
      "patterns": [
        "habanera-derived bass",
        "2/4 bounce",
        "short repeated accompaniment cells"
      ],
      "techniques": [
        "dry staccato",
        "lighter ensemble attacks",
        "minimal sustained strings"
      ],
      "harmony": [
        "simpler tonic/dominant/subdominant motion",
        "fewer extensions",
        "modal/habanera color"
      ]
    },
    {
      "id": "guardia-nueva-de-caro",
      "name": "Guardia Nueva / De Caro",
      "description": "independent countermelodies contrapuntal piano/bandoneón/violin movement expressive portamento richer chromaticism",
      "patterns": [
        "independent countermelodies",
        "contrapuntal piano/bandoneón/violin movement"
      ],
      "techniques": [
        "expressive portamento",
        "ornamental inner voices",
        "chamber-style interaction"
      ],
      "harmony": [
        "richer chromaticism",
        "tonicizations",
        "diminished links",
        "altered dominant colors"
      ]
    },
    {
      "id": "canaro",
      "name": "Canaro",
      "description": "direct marcato predictable phrase cadences economical ornament mostly direct tonal progressions",
      "patterns": [
        "direct marcato",
        "predictable phrase cadences",
        "vocal-supporting accompaniment"
      ],
      "techniques": [
        "economical ornament",
        "restrained accents",
        "clear sectional endings"
      ],
      "harmony": [
        "mostly direct tonal progressions",
        "light chromatic passing harmony"
      ]
    },
    {
      "id": "darienzo",
      "name": "D'Arienzo",
      "description": "hard four-beat marcato short síncopa cells sharp staccato relatively direct",
      "patterns": [
        "hard four-beat marcato",
        "short síncopa cells",
        "rhythmic piano fills"
      ],
      "techniques": [
        "sharp staccato",
        "aggressive piano accents",
        "short violin attacks"
      ],
      "harmony": [
        "relatively direct",
        "quicker functional cadence",
        "avoid excessive sustained color chords"
      ]
    },
    {
      "id": "di-sarli",
      "name": "Di Sarli",
      "description": "stable pulse under long lyrical melody rolling piano transitions legato strings richer inner voice leading",
      "patterns": [
        "stable pulse under long lyrical melody",
        "rolling piano transitions"
      ],
      "techniques": [
        "legato strings",
        "broad bowing",
        "softer bandoneón attack"
      ],
      "harmony": [
        "richer inner voice leading",
        "sixths/sevenths",
        "chromatic approach chords used elegantly"
      ]
    },
    {
      "id": "troilo",
      "name": "Troilo",
      "description": "flexible bandoneón responses mixed marcato/síncopa expressive bellows moderate chromaticism",
      "patterns": [
        "flexible bandoneón responses",
        "mixed marcato/síncopa",
        "melodic countermotion"
      ],
      "techniques": [
        "expressive bellows",
        "rubato endings",
        "lyrical violin responses"
      ],
      "harmony": [
        "moderate chromaticism",
        "secondary dominants",
        "suspended resolutions"
      ]
    },
    {
      "id": "pugliese",
      "name": "Pugliese",
      "description": "yumba delayed bass attacks exaggerated accent dense dominant tension",
      "patterns": [
        "yumba",
        "delayed bass attacks",
        "long crescendos",
        "large silences",
        "syncopated ensemble blocks"
      ],
      "techniques": [
        "exaggerated accent",
        "elastic timing",
        "heavy piano/bass",
        "extreme dynamic contrast"
      ],
      "harmony": [
        "dense dominant tension",
        "diminished passing harmony",
        "chromatic bass",
        "delayed resolution",
        "altered dominants"
      ]
    },
    {
      "id": "salgan",
      "name": "Salgán",
      "description": "contrapuntal ostinati irregular accent layering highly articulated piano extended chords",
      "patterns": [
        "contrapuntal ostinati",
        "irregular accent layering",
        "independent inner figures"
      ],
      "techniques": [
        "highly articulated piano",
        "chamber-like interplay",
        "fast ornamental figures"
      ],
      "harmony": [
        "extended chords",
        "altered dominants",
        "chromatic substitutions",
        "contrapuntal voice leading",
        "quartal colors"
      ]
    },
    {
      "id": "tango-cancion",
      "name": "Tango Canción",
      "description": "sparse accompaniment under voice instrumental answering phrase singer-led rubato richer cadential delay",
      "patterns": [
        "sparse accompaniment under voice",
        "instrumental answering phrase"
      ],
      "techniques": [
        "singer-led rubato",
        "long legato melody",
        "expressive portamento"
      ],
      "harmony": [
        "richer cadential delay",
        "chromatic approach",
        "romantic sevenths/ninths"
      ]
    },
    {
      "id": "milonga",
      "name": "Milonga",
      "description": "habanera fast 2/4 short dry articulation simpler functional cycles",
      "patterns": [
        "habanera",
        "fast 2/4",
        "repeated bass cells",
        "light syncopation"
      ],
      "techniques": [
        "short dry articulation",
        "minimal rubato"
      ],
      "harmony": [
        "simpler functional cycles",
        "tonic/dominant focus",
        "occasional chromatic passing chord"
      ]
    },
    {
      "id": "vals",
      "name": "Vals",
      "description": "3/4 rotational bass 1–2–3 sweeping accompaniment legato functional waltz progressions",
      "patterns": [
        "3/4 rotational bass",
        "1–2–3 sweeping accompaniment",
        "cross-bar melody"
      ],
      "techniques": [
        "legato",
        "circular phrasing",
        "lighter accents"
      ],
      "harmony": [
        "functional waltz progressions",
        "secondary dominants",
        "smooth inversions"
      ]
    },
    {
      "id": "piazzolla-nuevo-tango",
      "name": "Piazzolla / Nuevo Tango",
      "description": "ostinati asymmetric meters extended string effects ninths/elevenths/thirteenths",
      "patterns": [
        "ostinati",
        "asymmetric meters",
        "additive rhythms",
        "contrapuntal bass"
      ],
      "techniques": [
        "extended string effects",
        "aggressive bandoneón",
        "pizzicato",
        "glissando",
        "percussive piano"
      ],
      "harmony": [
        "ninths/elevenths/thirteenths",
        "altered dominants",
        "quartal harmony",
        "pedal points",
        "nonfunctional chromaticism"
      ]
    },
    {
      "id": "electrotango-gotan",
      "name": "Electrotango / Gotan",
      "description": "downtempo breakbeat electronic kick/snare sampled bandoneón minor/modal loops",
      "patterns": [
        "downtempo breakbeat",
        "electronic kick/snare",
        "looped tango cells"
      ],
      "techniques": [
        "sampled bandoneón",
        "filtered strings",
        "sidechain",
        "texture chopping"
      ],
      "harmony": [
        "minor/modal loops",
        "suspended chords",
        "extended pads",
        "static harmony"
      ]
    },
    {
      "id": "electro-rock-bajofondo",
      "name": "Electro-Rock / Bajofondo",
      "description": "rock backbeat + tango syncopation distorted bass ostinati distortion modal/minor riffs",
      "patterns": [
        "rock backbeat + tango syncopation",
        "distorted bass ostinati"
      ],
      "techniques": [
        "distortion",
        "aggressive bowing",
        "electronic drops"
      ],
      "harmony": [
        "modal/minor riffs",
        "power-chord layers",
        "chromatic tango cadences"
      ]
    },
    {
      "id": "modern-orquesta",
      "name": "Modern Orquesta",
      "description": "Golden-Age vocabulary with much larger dynamic blocks exaggerated attack traditional tango harmony with denser voicings and modern dissonance",
      "patterns": [
        "Golden-Age vocabulary with much larger dynamic blocks"
      ],
      "techniques": [
        "exaggerated attack",
        "raw ensemble unison",
        "harsh bow/bellows accents"
      ],
      "harmony": [
        "traditional tango harmony with denser voicings and modern dissonance"
      ]
    },
    {
      "id": "chacarera-crossover",
      "name": "Chacarera Crossover",
      "description": "6/8 against 3/4 bombo accents folk strumming modal/diatonic folk progressions",
      "patterns": [
        "6/8 against 3/4",
        "bombo accents",
        "guitar hemiola"
      ],
      "techniques": [
        "folk strumming",
        "bombo rim/body differentiation"
      ],
      "harmony": [
        "modal/diatonic folk progressions",
        "pedal tones",
        "thirds/sixths"
      ]
    }
  ]
};
