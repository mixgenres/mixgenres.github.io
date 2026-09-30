import type { MusicalPattern } from '../../../schema';

export const SALSA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
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
