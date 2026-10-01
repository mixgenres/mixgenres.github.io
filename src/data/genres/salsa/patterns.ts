import type { GenreWorld, MusicalPattern } from '../../schema';


const SALSA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "afro-clave-son-23",
          "worldId": "salsa",
          "styleIds": ["salsa-son-montuno"],
          "name": "Son Clave 2–3 Structural Timeline",
          "family": "Clave Timelines",
          "category": "ostinato",
          "description": "The structural rhythmic key: 2-side (beats",
          "tags": [
            "clave",
            "son",
            "2-3",
            "timeline",
            "structural"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "percussion",
            "bell"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion",
            "drums",
            "cowbell"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            4,
            8,
            16,
            22,
            28
          ],
          "accentProfile": [
            0.95,
            0.9,
            1,
            0.9,
            0.95
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.95,
            0.85,
            0.9
          ],
          "articulations": [
            "clave-strike"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "montuno",
            "mambo",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "afro-clave-son-32",
              "parentPatternId": "afro-clave-son-23",
              "name": "Son Clave 3–2 (Reverse Polarity)",
              "variationType": "syncopated",
              "probability": 0.5,
              "onsetGrid": [
                0,
                6,
                12,
                20,
                24
              ],
              "accentProfile": [
                1,
                0.9,
                0.95,
                0.9,
                0.95
              ],
              "description": "Son clave with 3-side in measure"
            },
            {
              "id": "afro-clave-rumba-23",
              "parentPatternId": "afro-clave-son-23",
              "name": "Rumba Clave 2–3 (Delayed 8th Hit)",
              "variationType": "syncopated",
              "probability": 0.45,
              "onsetGrid": [
                4,
                8,
                16,
                22,
                30
              ],
              "accentProfile": [
                0.95,
                0.9,
                1,
                0.85,
                0.95
              ],
              "description": "Rumba clave where the 3rd stroke"
            }
          ],
    
          "difficulty": 2,
          "weight": 0.7,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "afro-bass-tumbao",
          "worldId": "salsa",
          "styleIds": ["salsa-son-montuno"],
          "name": "Bass Tumbao (Anticipated Harmony)",
          "family": "Tumbao Basslines",
          "category": "ostinato",
          "description": "Classic bass tumbao emphasizes the anticipated beat.",
          "tags": [
            "bass",
            "tumbao",
            "anticipation",
            "salsa",
            "son"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "bass",
            "piano"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            6,
            12
          ],
          "accentProfile": [
            0.85,
            1
          ],
          "velocityProfile": [
            0.8,
            1
          ],
          "articulations": [
            "sustained-pizz",
            "percussive-finger"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "montuno",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "afro-bass-tumbao-with-downbeat",
              "parentPatternId": "afro-bass-tumbao",
              "name": "Bass Tumbao with Downbeat Anchor",
              "variationType": "dense",
              "probability": 0.4,
              "onsetGrid": [
                0,
                6,
                12
              ],
              "accentProfile": [
                0.7,
                0.85,
                1
              ],
              "description": "Tumbao incorporates a light downbeat before the anticipated bass note."
            },
            {
              "id": "afro-bass-tumbao-salsa-walk",
              "parentPatternId": "afro-bass-tumbao",
              "name": "Walking Salsa Tumbao Turnaround",
              "variationType": "cadence",
              "probability": 0.5,
              "onsetGrid": [
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.85,
                0.7,
                0.95,
                0.8
              ],
              "description": "A leading bass walk sets up the next chord."
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 1,
    
    },
  {
          "id": "afro-piano-montuno",
          "worldId": "salsa",
          "styleIds": ["salsa-son-montuno"],
          "name": "Piano Montuno / Guajeo (Interlocking Arpeggios)",
          "family": "Montuno Interlocking Figures",
          "category": "ostinato",
          "description": "Two-bar syncopated piano ostinato that weaves",
          "tags": [
            "piano",
            "montuno",
            "guajeo",
            "interlocking",
            "salsa"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony",
            "piano",
            "keyboard",
            "counterline"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14,
            16,
            19,
            22,
            24,
            27,
            30
          ],
          "accentProfile": [
            0.9,
            0.7,
            0.95,
            0.7,
            0.9,
            0.95,
            0.9,
            0.7,
            0.95,
            0.7,
            0.9,
            1
          ],
          "velocityProfile": [
            0.85,
            0.65,
            0.9,
            0.65,
            0.85,
            0.9,
            0.85,
            0.65,
            0.9,
            0.65,
            0.85,
            0.95
          ],
          "articulations": [
            "staccato-octaves",
            "tenuto-top-note"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "montuno",
            "mambo",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "afro-montuno-cross-octave",
              "parentPatternId": "afro-piano-montuno",
              "name": "Eddie Palmieri Heavy Block Montuno",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                9,
                12,
                14,
                16,
                19,
                22,
                25,
                28,
                30
              ],
              "accentProfile": [
                1,
                0.8,
                1,
                0.8,
                1,
                1,
                1,
                0.8,
                1,
                0.8,
                1,
                1
              ],
              "description": "Aggressive two-handed dissonant block chords characteristic"
            },
            {
              "id": "afro-piano-montuno-v-02",
              "parentPatternId": "afro-piano-montuno",
              "name": "Piano Montuno / Guajeo (Interlocking Arpeggios) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14,
                16,
                19,
                22,
                24,
                27,
                30
              ],
              "accentProfile": [
                0.86,
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999,
                0.86,
                1,
                0.86,
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999,
                0.86,
                1
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.63,
                0.88,
                0.71,
                0.83,
                0.88,
                0.9099999999999999,
                0.63,
                0.88,
                0.71,
                0.83,
                0.9299999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 4,
          "weight": 0.7,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "afro-timbal-cascara",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Timbal Cáscara Pattern (Side-Shell Stick)",
          "family": "Percussion Timelines",
          "category": "ostinato",
          "description": "Crisp wooden/metal click on the side",
          "tags": [
            "timbales",
            "cascara",
            "percussion",
            "salsa"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "aux-percussion",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "timbales",
            "percussion",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.95,
            0.4,
            0.9,
            0.4,
            0.95,
            0.4,
            0.9,
            0.4,
            0.95,
            0.4,
            0.9,
            0.4,
            0.95,
            0.4,
            0.95,
            0.4
          ],
          "velocityProfile": [
            0.9,
            0.4,
            0.85,
            0.4,
            0.9,
            0.4,
            0.85,
            0.4,
            0.9,
            0.4,
            0.85,
            0.4,
            0.9,
            0.4,
            0.9,
            0.4
          ],
          "articulations": [
            "cascara-side-stick"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "solo"
          ],
          "variants": [
            {
              "id": "afro-cascara-with-mambo-bell",
              "parentPatternId": "afro-timbal-cascara",
              "name": "Campana Bongo Bell & Cáscara Transition",
              "variationType": "dense",
              "probability": 0.6,
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                16,
                20,
                24,
                28,
                30
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.95,
                0.85,
                1,
                0.9,
                1,
                0.95,
                0.85
              ],
              "description": "Switch from cáscara to heavy hand-held"
            },
            {
              "id": "afro-timbal-cascara-v-02",
              "parentPatternId": "afro-timbal-cascara",
              "name": "Timbal Cáscara Pattern (Side-Shell Stick) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                16,
                18,
                20,
                22,
                24,
                26,
                28,
                30
              ],
              "accentProfile": [
                0.9099999999999999,
                0.48000000000000004,
                0.86,
                0.48000000000000004,
                0.9099999999999999,
                0.48000000000000004,
                0.86,
                0.48000000000000004,
                0.9099999999999999,
                0.48000000000000004,
                0.86,
                0.48000000000000004,
                0.9099999999999999,
                0.48000000000000004,
                0.9099999999999999,
                0.48000000000000004
              ],
              "velocityProfile": [
                0.96,
                0.4,
                0.83,
                0.46,
                0.88,
                0.4,
                0.9099999999999999,
                0.4,
                0.88,
                0.46,
                0.83,
                0.4,
                0.96,
                0.4,
                0.88,
                0.46
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 5,
          "weight": 0.7,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "afro-conga-tumbao",
          "worldId": "salsa",
          "styleIds": ["salsa-son-montuno"],
          "name": "Conga Marcha (Slap & Open Tones)",
          "family": "Conga Tumbaos",
          "category": "ostinato",
          "description": "Heel-toe hand technique on beats 1",
          "tags": [
            "congas",
            "tumbao",
            "slap",
            "open-tone",
            "percussion"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "congas",
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.4,
            0.4,
            1,
            0.4,
            0.4,
            0.4,
            0.95,
            0.95
          ],
          "velocityProfile": [
            0.45,
            0.45,
            1,
            0.45,
            0.45,
            0.45,
            0.9,
            0.9
          ],
          "articulations": [
            "heel-toe",
            "slap-tap",
            "abierto-open"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "montuno",
            "mambo",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "afro-conga-two-drum-quinto",
              "parentPatternId": "afro-conga-tumbao",
              "name": "Two-Drum Conga Open Tones with Quinto Flourish",
              "variationType": "ornamented",
              "probability": 0.5,
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.4,
                0.4,
                1,
                0.4,
                0.4,
                0.4,
                0.9,
                0.6,
                0.95,
                0.7
              ],
              "description": "Tumbao extending into high-drum syncopated roll."
            },
            {
              "id": "afro-conga-tumbao-variant-bongo-martillo",
              "parentPatternId": "afro-conga-tumbao",
              "name": "Bongo Martillo",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "A steady martillo rhythm adds a slap accent on the offbeat.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.75,
                0.5,
                1,
                0.5,
                0.7,
                0.5,
                0.95,
                0.55
              ],
              "velocityProfile": [
                0.7,
                0.45,
                0.95,
                0.45,
                0.65,
                0.45,
                0.9,
                0.5
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 0.7,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
    },
  {
          "id": "salsa-anchor-14",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Tumbao Anchor",
          "family": "Tumbao",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "salsa",
            "tumbao",
            "anchor",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "compatibleRoles": [
            "bass"
          ],
          "compatibleInstruments": [
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "salsa-anchor-14-v-01",
              "parentPatternId": "salsa-anchor-14",
              "name": "Tumbao Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                7,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "salsa-anchor-14-v-02",
              "parentPatternId": "salsa-anchor-14",
              "name": "Tumbao Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "tumbao"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const SALSA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "afro-mambo-horn-hits",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Mambo Section Horn Stabs & Punctuation",
          "family": "Horn Mambos",
          "category": "phrasePattern",
          "description": "Explosive syncopated horn riffs and stabs",
          "tags": [
            "horns",
            "mambo",
            "trumpet",
            "sax",
            "brass",
            "stabs"
          ],
          "scopes": [
            "phrase",
            "region",
            "track"
          ],
          "roles": [
            "lead",
            "horn-section",
            "counterline"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "sax",
            "electric-guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            6,
            12,
            14,
            22,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.95,
            1,
            1,
            0.95,
            1
          ],
          "velocityProfile": [
            1,
            0.9,
            1,
            1,
            0.9,
            1
          ],
          "articulations": [
            "staccatissimo",
            "fall-off"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "mambo",
            "breakdown",
            "chorus"
          ],
          "variants": [
            {
              "id": "afro-mambo-unison-break",
              "parentPatternId": "afro-mambo-horn-hits",
              "name": "Ensemble Tutti Bloque / Break",
              "variationType": "breakdown",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                12,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.95,
                1,
                1
              ],
              "description": "Full band unison stop-time break."
            },
            {
              "id": "afro-mambo-horn-hits-v-02",
              "parentPatternId": "afro-mambo-horn-hits",
              "name": "Mambo Section Horn Stabs & Punctuation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                6,
                12,
                14,
                22,
                28,
                30
              ],
              "accentProfile": [
                0.96,
                1,
                0.96,
                1,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.88,
                0.98,
                1,
                0.88,
                0.98
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 0.7,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
        },
  {
          "id": "salsa-phrase-12",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Coro Phrase",
          "family": "Coro / backing vocals",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "salsa",
            "coro",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "trumpet"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "trumpet"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
            6,
            9,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "salsa-phrase-12-v-01",
              "parentPatternId": "salsa-phrase-12",
              "name": "Coro Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                6,
                9,
                14
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "salsa-phrase-12-v-02",
              "parentPatternId": "salsa-phrase-12",
              "name": "Coro Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                6,
                9,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "coro"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "salsa--phrasing",
          "worldId": "salsa",
          "styleIds": ["salsa-son-montuno"],
          "name": "Salsa Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Coro response phrasing sits between clave-driven",
          "tags": [
            "salsa",
            "trumpet",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "trumpet"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "trumpet",
            "lead"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.94,
            0.62,
            0.94,
            0.62,
            0.94,
            0.62
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
            0.58
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge",
            "coro"
          ],
    
    
          "variants": [
            {
              "id": "salsa--phrasing-v--alt",
              "parentPatternId": "salsa--phrasing",
              "name": "Salsa Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "An alternate vocal entry shifts the placement of a phrase for subtle rhythmic variation.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.92,
                0.62,
                0.92,
                0.62,
                0.92,
                0.62
              ],
              "velocityProfile": [
                0.88,
                0.58,
                0.88,
                0.58,
                0.88,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            },
            {
              "id": "salsa--phrasing-v-final-accent",
              "parentPatternId": "salsa--phrasing",
              "name": "Salsa Vocal Phrasing — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Same rhythmic shape with shifted emphasis",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.9,
                0.58,
                0.9,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Salsa.",
          "authenticityTags": [
            "salsa",
            "trumpet"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];


const SALSA_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "salsa-campana",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Campana (Bongo Bell)",
          "family": "Bell",
          "category": "fill",
          "transitionType": "fill",
          "description": "A driving hand-held bongo bell pattern adds a bright rhythmic layer.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.95,
            0.65,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.9,
            0.6,
            0.9,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "montuno",
            "mambo",
            "chorus"
          ],
          "variants": [
            {
              "id": "salsa-campana-v-01",
              "parentPatternId": "salsa-campana",
              "name": "Campana (Bongo Bell) — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85,
                0.8999999999999999,
                0.6
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77,
                0.8200000000000001,
                0.52
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "salsa-campana-v-02",
              "parentPatternId": "salsa-campana",
              "name": "Campana (Bongo Bell) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                1,
                0.61,
                1,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.96,
                0.58,
                0.88,
                0.8600000000000001
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const SALSA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "salsa-guiro",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Guiro Pattern",
          "family": "Guiro",
          "category": "break",
          "transitionType": "fill",
          "description": "Traditional long down-stroke and rapid up-up",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            7,
            8,
            10,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.5,
            0.7,
            1,
            0.5,
            0.7,
            1,
            0.5,
            0.7,
            1,
            0.5,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.45,
            0.65,
            0.95,
            0.45,
            0.65,
            0.95,
            0.45,
            0.65,
            0.95,
            0.45,
            0.65
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "salsa-guiro-v-01",
              "parentPatternId": "salsa-guiro",
              "name": "Guiro Pattern — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                15
              ],
              "accentProfile": [
                0.95,
                0.45,
                0.6499999999999999,
                0.95,
                0.45,
                0.6499999999999999,
                0.95,
                0.45
              ],
              "velocityProfile": [
                0.87,
                0.4,
                0.5700000000000001,
                0.87,
                0.4,
                0.5700000000000001,
                0.87,
                0.4
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "salsa-guiro-v-02",
              "parentPatternId": "salsa-guiro",
              "name": "Guiro Pattern — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                7,
                8,
                10,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.58,
                0.6599999999999999,
                1,
                0.46,
                0.7799999999999999,
                0.96,
                0.58,
                0.6599999999999999,
                1,
                0.46,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.43,
                0.63,
                1,
                0.43,
                0.63,
                1,
                0.43,
                0.63,
                1,
                0.43,
                0.63
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 4,
          "weight": 1,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const SALSA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "salsa-maracas",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Maracas",
          "family": "Maracas",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Crisp forward-back maraca pulse with accented",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.6,
            0.9,
            0.6,
            0.95,
            0.6,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.85,
            0.55,
            0.9,
            0.55,
            0.85,
            0.6
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "ending",
            "turnaround"
          ],
          "variants": [
            {
              "id": "salsa-maracas-v-01",
              "parentPatternId": "salsa-maracas",
              "name": "Maracas — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.85,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.77,
                0.47000000000000003,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "salsa-maracas-v-02",
              "parentPatternId": "salsa-maracas",
              "name": "Maracas — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.86,
                0.6799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.86,
                0.73
              ],
              "velocityProfile": [
                1,
                0.53,
                0.83,
                0.6100000000000001,
                0.88,
                0.53,
                0.9099999999999999,
                0.58
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        }
];


const SALSA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "salsa-clave-32",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "3-2 Son Clave",
          "family": "Clave",
          "category": "groove",
          "description": "Classic 3-2 clave timeline.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.9,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.85,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "salsa-clave-32-v-01",
              "parentPatternId": "salsa-clave-32",
              "name": "3-2 Son Clave — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                10
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "salsa-clave-32-v-02",
              "parentPatternId": "salsa-clave-32",
              "name": "3-2 Son Clave — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.98,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88,
                0.9099999999999999,
                0.78
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "salsa-timbal-bell",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Timbal Mambo Bell",
          "family": "Bell",
          "category": "groove",
          "description": "A timbalero mambo cowbell pattern rides over the clave.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.85,
            0.7,
            0.95,
            0.65,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.8,
            0.65,
            0.9,
            0.6,
            0.8,
            0.65
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "salsa-timbal-bell-v-01",
              "parentPatternId": "salsa-timbal-bell",
              "name": "Timbal Mambo Bell — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.7999999999999999,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.7200000000000001,
                0.5700000000000001,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "salsa-timbal-bell-v-02",
              "parentPatternId": "salsa-timbal-bell",
              "name": "Timbal Mambo Bell — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.8099999999999999,
                0.7799999999999999,
                0.9099999999999999,
                0.73,
                0.8099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.78,
                0.71,
                0.88,
                0.58,
                0.8600000000000001,
                0.63
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "salsa-comp-15",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Son Clave Comping",
          "family": "Son Clave",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "salsa",
            "son-clave",
            "comp",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "guitar",
            "piano"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            6,
            9,
            10,
            13
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74
          ],
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "salsa-comp-15-v-01",
              "parentPatternId": "salsa-comp-15",
              "name": "Son Clave Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9,
                13
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "salsa-comp-15-v-02",
              "parentPatternId": "salsa-comp-15",
              "name": "Son Clave Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                9,
                10,
                13
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "son-clave"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
,
  {
    "id": "tech-salsa-2-3-clave",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation",
      "salsa-salsa-jazz-fusion"
    ],
    "name": "2-3 clave",
    "shortName": "2-3 clave",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: 2-3 clave",
    "tags": [
      "salsa",
      "2-3 clave"
    ],
    "approaches": [
      "2-3 clave"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      2,
      5,
      8,
      10,
      12,
      14
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "2-3 clave"
    ],
    "techniques": [
      "2-3 clave"
    ]
  },
  {
    "id": "tech-salsa-3-2-clave",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation",
      "salsa-salsa-jazz-fusion"
    ],
    "name": "3-2 clave",
    "shortName": "3-2 clave",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: 3-2 clave",
    "tags": [
      "salsa",
      "3-2 clave"
    ],
    "approaches": [
      "3-2 clave"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      3,
      6,
      8,
      11,
      14
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "3-2 clave"
    ],
    "techniques": [
      "3-2 clave"
    ]
  },
  {
    "id": "tech-salsa-cascara",
    "worldId": "salsa",
    "styleIds": [],
    "name": "cascara",
    "shortName": "cascara",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: cascara",
    "tags": [
      "salsa",
      "cascara"
    ],
    "approaches": [
      "cascara"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "cascara"
    ],
    "techniques": [
      "cascara"
    ]
  },
  {
    "id": "tech-salsa-bongo-martillo",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation"
    ],
    "name": "bongó martillo",
    "shortName": "bongó martillo",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: bongó martillo",
    "tags": [
      "salsa",
      "bongó martillo"
    ],
    "approaches": [
      "bongó martillo"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "bongó martillo"
    ],
    "techniques": [
      "bongó martillo"
    ]
  },
  {
    "id": "tech-salsa-campana",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york",
      "salsa-salsa-conjunto"
    ],
    "name": "campana",
    "shortName": "campana",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: campana",
    "tags": [
      "salsa",
      "campana"
    ],
    "approaches": [
      "campana"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "campana"
    ],
    "techniques": [
      "campana"
    ]
  },
  {
    "id": "tech-salsa-mambo-break",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york"
    ],
    "name": "mambo break",
    "shortName": "mambo break",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: mambo break",
    "tags": [
      "salsa",
      "mambo break"
    ],
    "approaches": [
      "mambo break"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
    "durationGrid": [
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "mambo break"
    ],
    "techniques": [
      "mambo break"
    ]
  },
  {
    "id": "tech-salsa-percussion-coda",
    "worldId": "salsa",
    "styleIds": [],
    "name": "percussion coda",
    "shortName": "percussion coda",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: percussion coda",
    "tags": [
      "salsa",
      "percussion coda"
    ],
    "approaches": [
      "percussion coda"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
    "instruments": [
      "drums",
      "hand-percussion"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "percussion coda"
    ],
    "techniques": [
      "percussion coda"
    ]
  },
  {
    "id": "style-salsa-son-cubano-foundation-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation"
    ],
    "name": "Son Cubano Foundation Signature Cell",
    "shortName": "Son Cubano Foundation Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "tres",
      "bongos",
      "bass",
      "claves"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "salsa",
      "signature"
    ],
    "techniques": [
      "bongó martillo",
      "2-3 clave",
      "3-2 clave"
    ]
  },
  {
    "id": "style-salsa-salsa-brava-1970s-new-york-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york"
    ],
    "name": "Salsa Brava / 1970s New York Signature Cell",
    "shortName": "Salsa Brava / 1970s New York Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "trombone",
      "piano",
      "bass",
      "congas"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "salsa",
      "signature"
    ],
    "techniques": [
      "campana",
      "montuno",
      "coro/pregón",
      "mambo horn section",
      "mambo break"
    ]
  },
  {
    "id": "style-salsa-salsa-conjunto-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-conjunto"
    ],
    "name": "Salsa Conjunto Signature Cell",
    "shortName": "Salsa Conjunto Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "trumpet",
      "piano",
      "bass",
      "congas"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "salsa",
      "signature"
    ],
    "techniques": [
      "campana",
      "montuno",
      "tumbao",
      "coro/pregón"
    ]
  },
  {
    "id": "style-salsa-salsa-jazz-fusion-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-jazz-fusion"
    ],
    "name": "Salsa Jazz Fusion Signature Cell",
    "shortName": "Salsa Jazz Fusion Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "piano",
      "bass",
      "congas",
      "timbales"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "salsa",
      "signature"
    ],
    "techniques": [
      "montuno",
      "2-3 clave",
      "3-2 clave",
      "mambo horn section"
    ]
  },
  {
    "id": "style-salsa-boogaloo-latin-soul-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-boogaloo-latin-soul"
    ],
    "name": "Boogaloo / Latin Soul Signature Cell",
    "shortName": "Boogaloo / Latin Soul Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "piano",
      "bass",
      "congas",
      "brass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "salsa",
      "signature"
    ],
    "techniques": [
      "mambo horn section"
    ]
  }
];


const SALSA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "salsa-call-13",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Mambo Response",
          "family": "Mambo",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "salsa",
            "mambo",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "trumpet"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "trumpet"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            7,
            10,
            13,
            15
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "salsa-call-13-v-01",
              "parentPatternId": "salsa-call-13",
              "name": "Mambo Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                7,
                10,
                15
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "salsa-call-13-v-02",
              "parentPatternId": "salsa-call-13",
              "name": "Mambo Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                7,
                10,
                13,
                15
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "salsa-call-13-v-03",
              "parentPatternId": "salsa-call-13",
              "name": "Mambo Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                3,
                6,
                7,
                10,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                0.6,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.57,
                0.95,
                0.62,
                0.8999999999999999,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "mambo"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];


const SALSA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "salsa-intro-16",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Montuno Intro",
          "family": "Montuno",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "salsa",
            "montuno",
            "intro",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "texture"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "guitar",
            "piano"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9,
            0.63
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "salsa-intro-16-v-01",
              "parentPatternId": "salsa-intro-16",
              "name": "Montuno Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85,
                0.63,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001,
                0.6000000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "salsa-intro-16-v-02",
              "parentPatternId": "salsa-intro-16",
              "name": "Montuno Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96,
                0.61
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "salsa-intro-16-v-03",
              "parentPatternId": "salsa-intro-16",
              "name": "Montuno Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                0.72,
                0.88,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
                0.74,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "montuno"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        }
];


const SALSA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-salsa-tumbao",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-conjunto"
    ],
    "name": "tumbao",
    "shortName": "tumbao",
    "family": "salsa",
    "category": "bass",
    "description": "Technique: tumbao",
    "tags": [
      "salsa",
      "tumbao"
    ],
    "approaches": [
      "tumbao"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "tumbao"
    ],
    "techniques": [
      "tumbao"
    ]
  }
];


const SALSA_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-salsa-montuno",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york",
      "salsa-salsa-conjunto",
      "salsa-salsa-jazz-fusion"
    ],
    "name": "montuno",
    "shortName": "montuno",
    "family": "salsa",
    "category": "comping",
    "description": "Technique: montuno",
    "tags": [
      "salsa",
      "montuno"
    ],
    "approaches": [
      "montuno"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "piano"
    ],
    "instruments": [
      "piano"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "montuno"
    ],
    "techniques": [
      "montuno"
    ]
  }
];


const SALSA_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-salsa-mambo-horn-section",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york",
      "salsa-salsa-jazz-fusion",
      "salsa-boogaloo-latin-soul"
    ],
    "name": "mambo horn section",
    "shortName": "mambo horn section",
    "family": "salsa",
    "category": "lead",
    "description": "Technique: mambo horn section",
    "tags": [
      "salsa",
      "mambo horn section"
    ],
    "approaches": [
      "mambo horn section"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "horn-section",
      "lead"
    ],
    "instruments": [
      "brass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "mambo horn section"
    ],
    "techniques": [
      "mambo horn section"
    ]
  },
  {
    "id": "tech-salsa-coro-pregon",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york",
      "salsa-salsa-conjunto"
    ],
    "name": "coro/pregón",
    "shortName": "coro/pregón",
    "family": "salsa",
    "category": "lead",
    "description": "Technique: coro/pregón",
    "tags": [
      "salsa",
      "coro/pregón"
    ],
    "approaches": [
      "coro/pregón"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "voice",
      "lead"
    ],
    "instruments": [
      "voice"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "coro/pregón"
    ],
    "techniques": [
      "coro/pregón"
    ]
  },
  {
    "id": "tech-salsa-mona",
    "worldId": "salsa",
    "styleIds": [],
    "name": "moña",
    "shortName": "moña",
    "family": "salsa",
    "category": "lead",
    "description": "Technique: moña",
    "tags": [
      "salsa",
      "moña"
    ],
    "approaches": [
      "moña"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "horn-section",
      "lead"
    ],
    "instruments": [
      "brass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "salsa",
      "moña"
    ],
    "techniques": [
      "moña"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": SALSA_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": SALSA_WORLD_PATTERNS_PHRASEPATTERN,
  "fill": SALSA_WORLD_PATTERNS_FILL,
  "break": SALSA_WORLD_PATTERNS_BREAK,
  "cadence": SALSA_WORLD_PATTERNS_CADENCE,
  "groove": SALSA_WORLD_PATTERNS_GROOVE,
  "interactionPattern": SALSA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": SALSA_WORLD_PATTERNS_SECTIONPATTERN,
  "bass": SALSA_WORLD_PATTERNS_BASS,
  "comping": SALSA_WORLD_PATTERNS_COMPING,
  "lead": SALSA_WORLD_PATTERNS_LEAD,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"ostinato","index":2},{"category":"ostinato","index":3},{"category":"ostinato","index":4},{"category":"phrasePattern","index":0},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"phrasePattern","index":1},{"category":"interactionPattern","index":0},{"category":"ostinato","index":5},{"category":"groove","index":2},{"category":"sectionPattern","index":0},{"category":"phrasePattern","index":2},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"lead","index":2}];

export const SALSA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
