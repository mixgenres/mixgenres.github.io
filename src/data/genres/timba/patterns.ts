import type { GenreWorld, MusicalPattern } from '../../schema';


const TIMBA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "timba-gear-marcha",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Gear Change: Marcha (Standard Drive)",
          "family": "Timba Gear System",
          "category": "sectionPattern",
          "description": "Base gear featuring full driving groove",
          "tags": [
            "timba",
            "gear",
            "marcha",
            "groove"
          ],
          "scopes": [
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony",
            "piano",
            "keyboard"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14,
            16,
            20,
            22,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.9,
            0.7,
            1,
            0.7,
            0.95,
            1,
            0.9,
            0.7,
            1,
            0.7,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            1,
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            1
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "montuno",
            "gear-change"
          ],
          "variants": [
            {
              "id": "timba-gear-bomba",
              "parentPatternId": "timba-gear-marcha",
              "name": "Gear Change: Bomba (Bass Slap & Kick Breakdown)",
              "variationType": "breakdown",
              "probability": 0.6,
              "onsetGrid": [
                0,
                6,
                12,
                16,
                22,
                28
              ],
              "accentProfile": [
                1,
                0.85,
                0.95,
                1,
                0.85,
                0.95
              ],
              "description": "Drops to raw sub-bass and slap accents for a stripped-back break."
            },
            {
              "id": "timba-gear-presion",
              "parentPatternId": "timba-gear-marcha",
              "name": "Gear Change: Presión (High Tension Climax)",
              "variationType": "dense",
              "probability": 0.5,
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
                1,
                0.8,
                1,
                0.8,
                1,
                0.8,
                1,
                0.9,
                1,
                0.8,
                1,
                0.8,
                1,
                0.8,
                1,
                1
              ],
              "description": "Maximum density and accelerating cowbell raise the energy into the next section."
            },
            {
              "id": "timba-gear-marcha-v-03",
              "parentPatternId": "timba-gear-marcha",
              "name": "Gear Change: Marcha (Standard Drive) — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14,
                15,
                16,
                20,
                22,
                26,
                28,
                30
              ],
              "accentProfile": [
                0.88,
                0.6799999999999999,
                0.98,
                0.6799999999999999,
                0.9299999999999999,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
              ],
              "velocityProfile": [
                0.9,
                0.7,
                1,
                0.7,
                0.9,
                0.98,
                0.98,
                0.98,
                0.98,
                0.98,
                0.98,
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
                -6,
                -6,
                -6,
                -6,
                -6,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 4,
          "weight": 0.7,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-intro-16",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Marcha Intro",
          "family": "Marcha",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "timba",
            "marcha",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            6,
            9,
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
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "timba-intro-16-v-01",
              "parentPatternId": "timba-intro-16",
              "name": "Marcha Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
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
              "id": "timba-intro-16-v-02",
              "parentPatternId": "timba-intro-16",
              "name": "Marcha Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                6,
                9,
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
            },
            {
              "id": "timba-intro-16-v-03",
              "parentPatternId": "timba-intro-16",
              "name": "Marcha Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                4,
                6,
                9,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.72,
                0.88,
                0.66,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.69,
                0.9,
                0.68,
                0.95,
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "marcha"
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


const TIMBA_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "timba-songo-groove",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Songo Drum Kit & Cowbell Groove (Changuito / Los Van Van)",
          "family": "Songo Drumming",
          "category": "fill",
          "transitionType": "fill",
          "description": "Changuito’s revolutionary drum groove combining foot",
          "tags": [
            "songo",
            "drums",
            "los-van-van",
            "changuito",
            "timba"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "drums",
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "timbales",
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
            0.95,
            0.5,
            0.9,
            0.6,
            0.95,
            0.5,
            1,
            0.6
          ],
          "velocityProfile": [
            0.9,
            0.5,
            0.85,
            0.6,
            0.9,
            0.5,
            0.95,
            0.6
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "montuno"
          ],
          "variants": [
            {
              "id": "timba-songo-with-snare-drag",
              "parentPatternId": "timba-songo-groove",
              "name": "Songo with Linear Snare Drags",
              "variationType": "ornamented",
              "probability": 0.5,
              "onsetGrid": [
                0,
                2,
                3,
                4,
                6,
                8,
                10,
                11,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.4,
                0.6,
                0.9,
                0.6,
                0.95,
                0.4,
                0.6,
                1,
                0.6
              ],
              "description": "Syncopated linear snare fills weaving between"
            },
            {
              "id": "timba-songo-groove-variant-bongo-bell-drive",
              "parentPatternId": "timba-songo-groove",
              "name": "Bongo Bell Drive",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Driving cowbell syncopation for high-energy presión",
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
                1,
                0.6,
                0.85,
                0.65,
                0.95,
                0.6,
                0.85,
                0.7
              ],
              "velocityProfile": [
                0.95,
                0.55,
                0.8,
                0.6,
                0.9,
                0.55,
                0.8,
                0.65
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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


const TIMBA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "timba-displaced-bass",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Displaced Funk / Timba Bassline",
          "family": "Timba Bass Systems",
          "category": "ostinato",
          "description": "Syncopated bass utilizing slap thumb pops,",
          "tags": [
            "bass",
            "slap",
            "funk",
            "timba",
            "displaced"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "bass",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "bass",
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9,
            0.85,
            1,
            0.8,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.9,
            0.8,
            0.95,
            0.75,
            0.9,
            0.85
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "montuno",
            "gear-change"
          ],
          "variants": [
            {
              "id": "timba-bass-pedal-riff",
              "parentPatternId": "timba-displaced-bass",
              "name": "Timba Pedal Bass (Root Anchor)",
              "variationType": "sparse",
              "probability": 0.45,
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                1,
                0.8,
                0.95
              ],
              "description": "Heavy sustained pedal point creating tension"
            },
            {
              "id": "timba-displaced-bass-v-02",
              "parentPatternId": "timba-displaced-bass",
              "name": "Displaced Funk / Timba Bassline — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.86,
                0.9299999999999999,
                0.96,
                0.88,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                0.96,
                0.78,
                0.9299999999999999,
                0.81,
                0.88,
                0.83
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-anchor-14",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Moña Anchor",
          "family": "Moña",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "timba",
            "mona",
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
            1,
            2,
            4,
            8,
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
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.5714285714285714,
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
              "id": "timba-anchor-14-v-01",
              "parentPatternId": "timba-anchor-14",
              "name": "Moña Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                4,
                8,
                12,
                14
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
              "id": "timba-anchor-14-v-02",
              "parentPatternId": "timba-anchor-14",
              "name": "Moña Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                4,
                8,
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
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "mona"
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


const TIMBA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "timba-conga-gear",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Timba Conga Gear",
          "family": "Conga",
          "category": "break",
          "transitionType": "fill",
          "description": "A dense modern timba conga pattern drives the groove.",
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
            0.75,
            0.95,
            0.6,
            0.85,
            0.75,
            0.95,
            0.6,
            0.9
          ],
          "velocityProfile": [
            0.7,
            0.95,
            0.55,
            0.8,
            0.7,
            0.95,
            0.55,
            0.85
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
              "id": "timba-conga-gear-v-01",
              "parentPatternId": "timba-conga-gear",
              "name": "Timba Conga Gear — sparse variation",
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
                0.7,
                0.8999999999999999,
                0.5499999999999999,
                0.7999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.62,
                0.87,
                0.47000000000000003,
                0.7200000000000001,
                0.62
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
              "id": "timba-conga-gear-v-02",
              "parentPatternId": "timba-conga-gear",
              "name": "Timba Conga Gear — accent shift",
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
                0.71,
                1,
                0.5599999999999999,
                0.9299999999999999,
                0.71,
                1,
                0.5599999999999999,
                0.98
              ],
              "velocityProfile": [
                0.76,
                0.9299999999999999,
                0.53,
                0.8600000000000001,
                0.6799999999999999,
                0.9299999999999999,
                0.6100000000000001,
                0.83
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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


const TIMBA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "timba-bata-fusion",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Bata Fusion",
          "family": "Percussion",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Bata drum accents blended into drumkit",
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
            8,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.75,
            0.9
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
              "id": "timba-bata-fusion-v-01",
              "parentPatternId": "timba-bata-fusion",
              "name": "Bata Fusion — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                10
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-bata-fusion-v-02",
              "parentPatternId": "timba-bata-fusion",
              "name": "Bata Fusion — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                0.88,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.81,
                0.88
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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


const TIMBA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "timba-synth-bass",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Synth Bass Tumbao",
          "family": "Bass",
          "category": "groove",
          "description": "Aggressive synth bass timba line punching",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass",
            "synth"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "synth",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.85,
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.8,
            0.9
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
              "id": "timba-synth-bass-v-01",
              "parentPatternId": "timba-synth-bass",
              "name": "Synth Bass Tumbao — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                10,
                14
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-synth-bass-v-02",
              "parentPatternId": "timba-synth-bass",
              "name": "Synth Bass Tumbao — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
                0.78,
                0.96
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-piano-guajeo",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Piano Guajeo",
          "family": "Piano",
          "category": "groove",
          "description": "Syncopated two-handed timba piano ostinato.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "piano",
            "keys"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "keys"
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
            0.9,
            0.75,
            1,
            0.7,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.85,
            0.7,
            0.95,
            0.65,
            0.9,
            0.75
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
              "id": "timba-piano-guajeo-v-01",
              "parentPatternId": "timba-piano-guajeo",
              "name": "Piano Guajeo — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.85,
                0.7,
                0.95,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.77,
                0.62,
                0.87,
                0.5700000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "timba-piano-guajeo-v-02",
              "parentPatternId": "timba-piano-guajeo",
              "name": "Piano Guajeo — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.86,
                0.83,
                0.96,
                0.7799999999999999,
                0.9099999999999999,
                0.88
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.9299999999999999,
                0.71,
                0.88,
                0.73
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
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-kick-bomobo",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Kick Bombo",
          "family": "Drum Kit",
          "category": "groove",
          "description": "Kick hitting the bombo note heavily",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            6,
            14
          ],
          "accentProfile": [
            1,
            0.85
          ],
          "velocityProfile": [
            0.95,
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
              "id": "timba-kick-bomobo-v-01-safe",
              "parentPatternId": "timba-kick-bomobo",
              "name": "Kick Bombo — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                6,
                14
              ],
              "accentProfile": [
                0.95,
                0.9299999999999999
              ],
              "velocityProfile": [
                0.98,
                0.76
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "timba-kick-bomobo-v-02-safe",
              "parentPatternId": "timba-kick-bomobo",
              "name": "Kick Bombo — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                6,
                14
              ],
              "accentProfile": [
                0.95,
                0.9299999999999999
              ],
              "velocityProfile": [
                0.98,
                0.76
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-horn-moña",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Horn Moña",
          "family": "Horns",
          "category": "groove",
          "description": "Interlocking brass riffs cut through the rhythm section.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "brass",
            "trumpet"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "brass",
            "trumpet"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            4,
            7,
            9,
            12
          ],
          "accentProfile": [
            0.85,
            1,
            0.75,
            0.9,
            0.95
          ],
          "velocityProfile": [
            0.8,
            0.95,
            0.7,
            0.85,
            0.9
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
              "id": "timba-horn-moña-v-01",
              "parentPatternId": "timba-horn-moña",
              "name": "Horn Moña — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                9
              ],
              "accentProfile": [
                0.7999999999999999,
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.87,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-horn-moña-v-02",
              "parentPatternId": "timba-horn-moña",
              "name": "Horn Moña — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.71,
                0.98,
                0.9099999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.9299999999999999,
                0.6799999999999999,
                0.9099999999999999,
                0.88
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-clave-rumba",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "2-3 Rumba Clave",
          "family": "Clave",
          "category": "groove",
          "description": "Rumba clave direction fundamental to modern",
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
            2,
            4,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.9,
            0.85,
            1,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.85,
            0.8,
            0.95,
            0.9,
            0.85
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
              "id": "timba-clave-rumba-v-01",
              "parentPatternId": "timba-clave-rumba",
              "name": "2-3 Rumba Clave — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                8,
                11
              ],
              "accentProfile": [
                0.85,
                0.7999999999999999,
                0.95
              ],
              "velocityProfile": [
                0.77,
                0.7200000000000001,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-clave-rumba-v-02",
              "parentPatternId": "timba-clave-rumba",
              "name": "2-3 Rumba Clave — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                4,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.86,
                0.9299999999999999,
                0.96,
                1,
                0.8099999999999999
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.78,
                0.9299999999999999,
                0.96,
                0.83
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
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
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
          "id": "timba-anticipated-pedal",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Anticipated Presión Pedal",
          "family": "Bass",
          "category": "groove",
          "description": "Bass hits landing a 16th note",
          "tags": [
            "timba",
            "anticipated",
            "presion"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.8,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.75,
            0.85,
            0.9,
            0.95
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "gear-change"
          ],
          "variants": [
            {
              "id": "timba-anticipated-pedal-v-01",
              "parentPatternId": "timba-anticipated-pedal",
              "name": "Anticipated Presión Pedal — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                11,
                15
              ],
              "accentProfile": [
                0.75,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.67,
                0.77,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "timba-anticipated-pedal-v-02",
              "parentPatternId": "timba-anticipated-pedal",
              "name": "Anticipated Presión Pedal — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.76,
                0.98,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.81,
                0.83,
                0.88,
                1
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Timba catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "timba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 1,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "timba-comp-15",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Presión Comping",
          "family": "Presión",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "timba",
            "presion",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
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
            6,
            10,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.7142857142857143,
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
              "id": "timba-comp-15-v-01",
              "parentPatternId": "timba-comp-15",
              "name": "Presión Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                11,
                14
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
              "id": "timba-comp-15-v-02",
              "parentPatternId": "timba-comp-15",
              "name": "Presión Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                10,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "presion"
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
    "id": "tech-timba-songo",
    "worldId": "timba",
    "styleIds": [
      "timba-los-van-van-songo"
    ],
    "name": "songo",
    "shortName": "songo",
    "family": "timba",
    "category": "groove",
    "description": "Technique: songo",
    "tags": [
      "timba",
      "songo"
    ],
    "approaches": [
      "songo"
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
      "timba",
      "songo"
    ],
    "techniques": [
      "songo"
    ]
  },
  {
    "id": "tech-timba-bomba-break",
    "worldId": "timba",
    "styleIds": [
      "timba-timba-aggression"
    ],
    "name": "bomba break",
    "shortName": "bomba break",
    "family": "timba",
    "category": "groove",
    "description": "Technique: bomba break",
    "tags": [
      "timba",
      "bomba break"
    ],
    "approaches": [
      "bomba break"
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
      "timba",
      "bomba break"
    ],
    "techniques": [
      "bomba break"
    ]
  },
  {
    "id": "tech-timba-masacote",
    "worldId": "timba",
    "styleIds": [
      "timba-timba-aggression"
    ],
    "name": "masacote",
    "shortName": "masacote",
    "family": "timba",
    "category": "groove",
    "description": "Technique: masacote",
    "tags": [
      "timba",
      "masacote"
    ],
    "approaches": [
      "masacote"
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
      "timba",
      "masacote"
    ],
    "techniques": [
      "masacote"
    ]
  },
  {
    "id": "tech-timba-percussion-cascade",
    "worldId": "timba",
    "styleIds": [
      "timba-los-van-van-songo",
      "timba-timba-aggression"
    ],
    "name": "percussion cascade",
    "shortName": "percussion cascade",
    "family": "timba",
    "category": "groove",
    "description": "Technique: percussion cascade",
    "tags": [
      "timba",
      "percussion cascade"
    ],
    "approaches": [
      "percussion cascade"
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
      "timba",
      "percussion cascade"
    ],
    "techniques": [
      "percussion cascade"
    ]
  },
  {
    "id": "tech-timba-clave-displacement",
    "worldId": "timba",
    "styleIds": [
      "timba-son-montuno-timba",
      "timba-timba-piano-tumbao"
    ],
    "name": "clave displacement",
    "shortName": "clave displacement",
    "family": "timba",
    "category": "groove",
    "description": "Technique: clave displacement",
    "tags": [
      "timba",
      "clave displacement"
    ],
    "approaches": [
      "clave displacement"
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
      "timba",
      "clave displacement"
    ],
    "techniques": [
      "clave displacement"
    ]
  },
  {
    "id": "tech-timba-rhythmic-gear-change",
    "worldId": "timba",
    "styleIds": [
      "timba-timba-aggression"
    ],
    "name": "rhythmic gear change",
    "shortName": "rhythmic gear change",
    "family": "timba",
    "category": "groove",
    "description": "Technique: rhythmic gear change",
    "tags": [
      "timba",
      "rhythmic gear change"
    ],
    "approaches": [
      "rhythmic gear change"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
    ],
    "instruments": [
      "drums"
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
      "timba",
      "rhythmic gear change"
    ],
    "techniques": [
      "rhythmic gear change"
    ]
  },
  {
    "id": "style-timba-son-montuno-timba-signature",
    "worldId": "timba",
    "styleIds": [
      "timba-son-montuno-timba"
    ],
    "name": "Son-Montuno Timba Signature Cell",
    "shortName": "Son-Montuno Timba Cell",
    "family": "timba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "timba",
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
      "timba",
      "signature"
    ],
    "techniques": [
      "clave displacement",
      "horn block",
      "coro/pregón",
      "timba bass anticipation",
      "timba piano tumbao"
    ]
  },
  {
    "id": "style-timba-los-van-van-songo-signature",
    "worldId": "timba",
    "styleIds": [
      "timba-los-van-van-songo"
    ],
    "name": "Los Van Van Songo Signature Cell",
    "shortName": "Los Van Van Songo Cell",
    "family": "timba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "timba",
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
      "bass",
      "drums",
      "piano",
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
      "timba",
      "signature"
    ],
    "techniques": [
      "songo",
      "percussion cascade",
      "timba bass anticipation",
      "timba piano tumbao"
    ]
  },
  {
    "id": "style-timba-timba-aggression-signature",
    "worldId": "timba",
    "styleIds": [
      "timba-timba-aggression"
    ],
    "name": "Timba Aggression Signature Cell",
    "shortName": "Timba Aggression Cell",
    "family": "timba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "timba",
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
      "bass",
      "piano",
      "congas",
      "timbales"
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
      0.7,
      0.7,
      0.7,
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
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
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "timba",
      "signature"
    ],
    "techniques": [
      "density switch",
      "percussion cascade",
      "masacote",
      "rhythmic gear change",
      "bomba break",
      "timba bass anticipation"
    ]
  },
  {
    "id": "style-timba-timba-piano-tumbao-signature",
    "worldId": "timba",
    "styleIds": [
      "timba-timba-piano-tumbao"
    ],
    "name": "Timba Piano-Tumbao Signature Cell",
    "shortName": "Timba Piano-Tumbao Cell",
    "family": "timba",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "timba",
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
      "timba",
      "signature"
    ],
    "techniques": [
      "timba piano tumbao",
      "clave displacement",
      "timba bass anticipation"
    ]
  }
];


const TIMBA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "timba-phrase-12",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Gear Change Phrase",
          "family": "Gear Change",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "timba",
            "gear-change",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth"
          ],
          "compatibleInstruments": [
            "synth"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            6,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1,
            0.74,
            0.9
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.9
          ],
          "syncopationRating": 0.7142857142857143,
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
              "id": "timba-phrase-12-v-01",
              "parentPatternId": "timba-phrase-12",
              "name": "Gear Change Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                7,
                12,
                15
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
              "id": "timba-phrase-12-v-02",
              "parentPatternId": "timba-phrase-12",
              "name": "Gear Change Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                7,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96,
                0.82,
                0.86
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999,
                0.72,
                0.96
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
            "gear-change"
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
          "id": "timba--phrasing",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Timba Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Coro and sonero phrasing template shaped",
          "tags": [
            "timba",
            "synth",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth",
            "lead"
          ],
          "compatibleInstruments": [
            "synth"
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
              "id": "timba--phrasing-v--alt",
              "parentPatternId": "timba--phrasing",
              "name": "Timba Vocal Phrasing — alternate phrasing",
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
              "id": "timba--phrasing-v-final-accent",
              "parentPatternId": "timba--phrasing",
              "name": "Timba Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Timba.",
          "authenticityTags": [
            "timba",
            "synth"
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


const TIMBA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "timba-call-13",
          "worldId": "timba",
          "styleIds": ["timba-timba-habanera"],
          "name": "Coro Response",
          "family": "Coro / backing vocals",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "timba",
            "coro",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "compatibleRoles": [
            "synth"
          ],
          "compatibleInstruments": [
            "synth"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
            11,
            13
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62,
            0.95,
            0.62,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95
          ],
          "syncopationRating": 0.7142857142857143,
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
              "id": "timba-call-13-v-01",
              "parentPatternId": "timba-call-13",
              "name": "Coro Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                7,
                11,
                13
              ],
              "accentProfile": [
                0.8999999999999999,
                0.57,
                0.8999999999999999,
                0.57,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.48999999999999994,
                0.87,
                0.54,
                0.82
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
              "id": "timba-call-13-v-02",
              "parentPatternId": "timba-call-13",
              "name": "Coro Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
                11,
                13
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1
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
            },
            {
              "id": "timba-call-13-v-03",
              "parentPatternId": "timba-call-13",
              "name": "Coro Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                3,
                7,
                8,
                11,
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
                0.62,
                0.95,
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
          "provenance": "GenreDAW catalog rebuild from existing Timba world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "timba",
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
        }
];


const TIMBA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
    "id": "tech-timba-timba-bass-anticipation",
    "worldId": "timba",
    "styleIds": [
      "timba-son-montuno-timba",
      "timba-los-van-van-songo",
      "timba-timba-aggression",
      "timba-timba-piano-tumbao"
    ],
    "name": "timba bass anticipation",
    "shortName": "timba bass anticipation",
    "family": "timba",
    "category": "bass",
    "description": "Technique: timba bass anticipation",
    "tags": [
      "timba",
      "timba bass anticipation"
    ],
    "approaches": [
      "timba bass anticipation"
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
      "timba",
      "timba bass anticipation"
    ],
    "techniques": [
      "timba bass anticipation"
    ]
  }
];


const TIMBA_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-timba-timba-piano-tumbao",
    "worldId": "timba",
    "styleIds": [
      "timba-son-montuno-timba",
      "timba-los-van-van-songo",
      "timba-timba-piano-tumbao"
    ],
    "name": "timba piano tumbao",
    "shortName": "timba piano tumbao",
    "family": "timba",
    "category": "comping",
    "description": "Technique: timba piano tumbao",
    "tags": [
      "timba",
      "timba piano tumbao"
    ],
    "approaches": [
      "timba piano tumbao"
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
      "timba",
      "timba piano tumbao"
    ],
    "techniques": [
      "timba piano tumbao"
    ]
  }
];


const TIMBA_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-timba-horn-block",
    "worldId": "timba",
    "styleIds": [
      "timba-son-montuno-timba"
    ],
    "name": "horn block",
    "shortName": "horn block",
    "family": "timba",
    "category": "lead",
    "description": "Technique: horn block",
    "tags": [
      "timba",
      "horn block"
    ],
    "approaches": [
      "horn block"
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
      "timba",
      "horn block"
    ],
    "techniques": [
      "horn block"
    ]
  },
  {
    "id": "tech-timba-coro-pregon",
    "worldId": "timba",
    "styleIds": [
      "timba-son-montuno-timba"
    ],
    "name": "coro/pregón",
    "shortName": "coro/pregón",
    "family": "timba",
    "category": "lead",
    "description": "Technique: coro/pregón",
    "tags": [
      "timba",
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
      "timba",
      "coro/pregón"
    ],
    "techniques": [
      "coro/pregón"
    ]
  }
];


const TIMBA_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
    "id": "tech-timba-density-switch",
    "worldId": "timba",
    "styleIds": [
      "timba-timba-aggression"
    ],
    "name": "density switch",
    "shortName": "density switch",
    "family": "timba",
    "category": "texture",
    "description": "Technique: density switch",
    "tags": [
      "timba",
      "density switch"
    ],
    "approaches": [
      "density switch"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
      "synth"
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
      "timba",
      "density switch"
    ],
    "techniques": [
      "density switch"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "sectionPattern": TIMBA_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": TIMBA_WORLD_PATTERNS_FILL,
  "ostinato": TIMBA_WORLD_PATTERNS_OSTINATO,
  "break": TIMBA_WORLD_PATTERNS_BREAK,
  "cadence": TIMBA_WORLD_PATTERNS_CADENCE,
  "groove": TIMBA_WORLD_PATTERNS_GROOVE,
  "phrasePattern": TIMBA_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": TIMBA_WORLD_PATTERNS_INTERACTIONPATTERN,
  "bass": TIMBA_WORLD_PATTERNS_BASS,
  "comping": TIMBA_WORLD_PATTERNS_COMPING,
  "lead": TIMBA_WORLD_PATTERNS_LEAD,
  "texture": TIMBA_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"sectionPattern","index":0},{"category":"fill","index":0},{"category":"ostinato","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":6},{"category":"sectionPattern","index":1},{"category":"phrasePattern","index":1},{"category":"bass","index":0},{"category":"comping","index":0},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"groove","index":16},{"category":"lead","index":0},{"category":"lead","index":1},{"category":"texture","index":0}];

export const TIMBA_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
