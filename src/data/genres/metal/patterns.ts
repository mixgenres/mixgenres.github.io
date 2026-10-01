import type { GenreWorld, MusicalPattern } from '../../schema';


const METAL_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "metal-gallop-riff",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "The Gallop Rhythm (Iron Maiden / Steve Harris)",
          "family": "Metal Gallop",
          "category": "ostinato",
          "description": "Classic 16th-16th-8th galloping chug on palm-muted",
          "tags": [
            "metal",
            "gallop",
            "thrash",
            "iron-maiden",
            "palm-mute"
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
            "rhythm-guitar",
            "bass",
            "drums"
          ],
    
          "approaches": ["comping", "walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            2,
            4,
            5,
            6,
            8,
            9,
            10,
            12,
            13,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            1,
            0.7,
            0.9,
            1,
            0.7,
            0.9,
            1,
            0.7,
            0.9
          ],
          "velocityProfile": [
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85
          ],
          "articulations": [
            "palm-mute",
            "down-pick"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "metal-double-kick-blast",
              "parentPatternId": "metal-gallop-riff",
              "name": "Continuous 16th Double-Kick Stream",
              "variationType": "dense",
              "probability": 0.5,
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.8
              ],
              "description": "Wall of 16th note double bass"
            },
            {
              "id": "metal-gallop-riff-v-02",
              "parentPatternId": "metal-gallop-riff",
              "name": "The Gallop Rhythm (Iron Maiden / Steve Harris) — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                2,
                4,
                5,
                6,
                8,
                9,
                10,
                12,
                13,
                14
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                1,
                0.6599999999999999,
                0.98,
                0.96,
                0.7799999999999999,
                0.86,
                1,
                0.6599999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                1,
                0.6799999999999999,
                0.83,
                1,
                0.6799999999999999,
                0.83,
                1,
                0.6799999999999999,
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "metal-djent-chug",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Djent Polymetric Low Chug",
          "family": "Djent Rhythms",
          "category": "ostinato",
          "description": "Syncopated, unyielding low-tuned palm-muted chugs grouped",
          "tags": [
            "djent",
            "prog-metal",
            "meshuggah",
            "polymeter",
            "chug"
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
            "rhythm-guitar",
            "bass"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": [
            "electric-guitar",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            9,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.9,
            0.85,
            1
          ],
          "velocityProfile": [
            1,
            0.9,
            1,
            0.9,
            0.85,
            1
          ],
          "articulations": [
            "tight-djent-mute",
            "percussive-strike"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "breakdown",
            "solo"
          ],
          "variants": [
            {
              "id": "metal-half-time-breakdown",
              "parentPatternId": "metal-djent-chug",
              "name": "Crushing Half-Time Breakdown",
              "variationType": "breakdown",
              "probability": 0.6,
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.9
              ],
              "description": "Tempo feel halved with devastating snare"
            },
            {
              "id": "metal-djent-chug-v-02",
              "parentPatternId": "metal-djent-chug",
              "name": "Djent Polymetric Low Chug — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.96,
                0.98,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.88,
                0.98,
                0.96,
                0.83,
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "metal-anchor-12",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Tremolo Anchor",
          "family": "Tremolo",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "metal",
            "tremolo",
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
            2,
            6,
            8,
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
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-anchor-12-v-01",
              "parentPatternId": "metal-anchor-12",
              "name": "Tremolo Anchor — sparse variation",
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
              "id": "metal-anchor-12-v-02",
              "parentPatternId": "metal-anchor-12",
              "name": "Tremolo Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "tremolo"
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


const METAL_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "metal-blast-beat",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Blast Beat",
          "family": "Drums",
          "category": "fill",
          "transitionType": "fill",
          "description": "Extremely fast alternating kick and snare",
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
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.85,
            1,
            0.85,
            0.95,
            0.85,
            1,
            0.85,
            0.95,
            0.85,
            1,
            0.85,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.8,
            0.95,
            0.8,
            0.9,
            0.8,
            0.95,
            0.8,
            0.9,
            0.8,
            0.95,
            0.8,
            0.9,
            0.8
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "metal-blast-beat-variant-double-kick-16ths",
              "parentPatternId": "metal-blast-beat",
              "name": "Double Kick 16ths",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Continuous 16th note double bass stream",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
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
                0.85,
                0.7,
                0.95,
                0.7,
                0.85,
                0.7,
                1,
                0.7,
                0.85,
                0.7,
                0.95,
                0.7,
                0.85,
                0.7
              ],
              "velocityProfile": [
                0.95,
                0.65,
                0.8,
                0.65,
                0.9,
                0.65,
                0.8,
                0.65,
                0.95,
                0.65,
                0.8,
                0.65,
                0.9,
                0.65,
                0.8,
                0.65
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "metal-blast-beat-variant-tremolo-picking",
              "parentPatternId": "metal-blast-beat",
              "name": "Tremolo Picking",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast continuous picking with dynamic shaping",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.6,
                0.7,
                0.6,
                0.9,
                0.6,
                0.7,
                0.6,
                0.95,
                0.6,
                0.7,
                0.6,
                0.9,
                0.6,
                0.7,
                0.65
              ],
              "velocityProfile": [
                0.95,
                0.55,
                0.65,
                0.55,
                0.85,
                0.55,
                0.65,
                0.55,
                0.9,
                0.55,
                0.65,
                0.55,
                0.85,
                0.55,
                0.65,
                0.6
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "metal-blast-beat-variant-sweep-picking-solo",
              "parentPatternId": "metal-blast-beat",
              "name": "Sweep Picking Solo",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fluid high-speed arpeggiated lead guitar run.",
              "onsetGrid": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
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
                0.7,
                0.75,
                0.8,
                0.85,
                0.9,
                0.95,
                1,
                0.9,
                0.85,
                0.8,
                0.75,
                0.7,
                0.65,
                0.6
              ],
              "velocityProfile": [
                0.95,
                0.6,
                0.65,
                0.7,
                0.75,
                0.8,
                0.85,
                0.9,
                0.95,
                0.85,
                0.8,
                0.75,
                0.7,
                0.65,
                0.6,
                0.55
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 5,
          "weight": 1,
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const METAL_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "metal-breakdown",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Breakdown Chug",
          "family": "Guitar",
          "category": "break",
          "transitionType": "fill",
          "description": "Crushing, heavy, syncopated palm-muted chords.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar",
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "electric-guitar",
            "bass"
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
            10,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            0.8,
            0.95,
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            1,
            0.85,
            0.75,
            0.9,
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
              "id": "metal-breakdown-v-01",
              "parentPatternId": "metal-breakdown",
              "name": "Breakdown Chug — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.75,
                0.8999999999999999,
                0.95
              ],
              "velocityProfile": [
                0.92,
                0.77,
                0.67,
                0.8200000000000001,
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
              "id": "metal-breakdown-v-02",
              "parentPatternId": "metal-breakdown",
              "name": "Breakdown Chug — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                8,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.76,
                1,
                0.96,
                0.9299999999999999,
                0.9099999999999999
              ],
              "velocityProfile": [
                1,
                0.83,
                0.73,
                0.96,
                0.9299999999999999,
                0.78,
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
    
          "difficulty": 2,
          "weight": 1,
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const METAL_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "metal-djent-sync",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Djent Syncopation",
          "family": "Guitar",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Complex syncopated low-register chugging.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
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
            13
          ],
          "accentProfile": [
            1,
            0.9,
            0.8,
            0.95,
            0.85,
            1
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.75,
            0.9,
            0.8,
            0.95
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
              "id": "metal-djent-sync-v-01",
              "parentPatternId": "metal-djent-sync",
              "name": "Djent Syncopation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                5,
                8,
                13
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.75,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.77,
                0.67,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "metal-djent-sync-v-02",
              "parentPatternId": "metal-djent-sync",
              "name": "Djent Syncopation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                13
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.76,
                1,
                0.8099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.83,
                0.73,
                0.96,
                0.78,
                0.9299999999999999
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const METAL_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "metal-clean-arp",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "Clean Arpeggio",
          "family": "Guitar",
          "category": "groove",
          "description": "Atmospheric clean arpeggiated intro with dynamic",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar",
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "electric-guitar",
            "guitar"
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
            0.6,
            0.75,
            0.65,
            0.9,
            0.6,
            0.75,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.7,
            0.6,
            0.85,
            0.55,
            0.7,
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
              "id": "metal-clean-arp-v-01",
              "parentPatternId": "metal-clean-arp",
              "name": "Clean Arpeggio — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.8999999999999999,
                0.5499999999999999,
                0.7,
                0.6,
                0.85
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.62,
                0.52,
                0.77
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
              "id": "metal-clean-arp-v-02",
              "parentPatternId": "metal-clean-arp",
              "name": "Clean Arpeggio — accent shift",
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
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.6799999999999999,
                0.71,
                0.73,
                0.86,
                0.6799999999999999,
                0.71,
                0.7799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.6799999999999999,
                0.6599999999999999,
                0.83,
                0.53,
                0.76,
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "metal-bass-gallop",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Bass Gallop",
          "family": "Bass",
          "category": "groove",
          "description": "Iron Maiden style triplet/gallop feel driving",
          "tags": [],
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
            0.7,
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85,
            1,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.95,
            0.65,
            0.8,
            0.95,
            0.65,
            0.8,
            0.95,
            0.65,
            0.8
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "metal-bass-gallop-v-01",
              "parentPatternId": "metal-bass-gallop",
              "name": "Bass Gallop — sparse variation",
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
                0.6499999999999999,
                0.7999999999999999,
                0.95,
                0.6499999999999999,
                0.7999999999999999,
                0.95,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.7200000000000001,
                0.87,
                0.5700000000000001,
                0.7200000000000001,
                0.87,
                0.5700000000000001
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
              "id": "metal-bass-gallop-v-02",
              "parentPatternId": "metal-bass-gallop",
              "name": "Bass Gallop — accent shift",
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
                0.7799999999999999,
                0.8099999999999999,
                1,
                0.6599999999999999,
                0.9299999999999999,
                0.96,
                0.7799999999999999,
                0.8099999999999999,
                1,
                0.6599999999999999,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.78,
                1,
                0.63,
                0.78,
                1,
                0.63,
                0.78,
                1,
                0.63,
                0.78
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "metal-prog-odd-meter",
          "worldId": "metal",
          "styleIds": ["metal-progressive-metal"],
          "name": "5/8 Riff",
          "family": "Guitar",
          "category": "groove",
          "description": "Odd meter progressive riff in asymmetric",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "5/8",
          "cycleLength": 1,
          "subdivisions": 10,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.75,
            0.85,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.8,
            0.9,
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
              "id": "metal-prog-odd-meter-v-01",
              "parentPatternId": "metal-prog-odd-meter",
              "name": "5/8 Riff — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "metal-prog-odd-meter-v-02",
              "parentPatternId": "metal-prog-odd-meter",
              "name": "5/8 Riff — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.8099999999999999,
                1,
                0.6599999999999999
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.78,
                0.96,
                0.63
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "metal-groove-metal",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Groove Metal Riff",
          "family": "Guitar",
          "category": "groove",
          "description": "Mid-tempo swinging heavy riff with biting",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.75,
            0.9,
            0.7,
            0.95,
            0.7,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.65,
            0.9,
            0.65,
            0.85,
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
              "id": "metal-groove-metal-v-01",
              "parentPatternId": "metal-groove-metal",
              "name": "Groove Metal Riff — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                9
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77,
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
              "id": "metal-groove-metal-v-02",
              "parentPatternId": "metal-groove-metal",
              "name": "Groove Metal Riff — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.86,
                0.7799999999999999,
                0.9099999999999999,
                0.7799999999999999,
                0.86,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.71,
                0.88,
                0.63,
                0.9099999999999999,
                0.73
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
          "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "metal"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "metal-comp-13",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Blast Comping",
          "family": "Blast",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "metal",
            "blast",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            4,
            8,
            10,
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
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-comp-13-v-01",
              "parentPatternId": "metal-comp-13",
              "name": "Blast Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
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
              "id": "metal-comp-13-v-02",
              "parentPatternId": "metal-comp-13",
              "name": "Blast Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                8,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "blast"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "metal-verse-15",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Breakdown Verse Variation",
          "family": "Breakdown",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "metal",
            "breakdown",
            "verse",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            2,
            5,
            6,
            9,
            10,
            13,
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
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "metal-verse-15-v-01",
              "parentPatternId": "metal-verse-15",
              "name": "Breakdown Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                5,
                6,
                10,
                13
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
              "id": "metal-verse-15-v-02",
              "parentPatternId": "metal-verse-15",
              "name": "Breakdown Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                2,
                5,
                6,
                9,
                10,
                13,
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "breakdown"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 1,
          "enabled": true
        }
,
  {
    "id": "tech-metal-gallop",
    "worldId": "metal",
    "styleIds": [
      "metal-nwobhm"
    ],
    "name": "gallop",
    "shortName": "gallop",
    "family": "metal",
    "category": "groove",
    "description": "Technique: gallop",
    "tags": [
      "metal",
      "gallop"
    ],
    "approaches": [
      "gallop"
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
      "metal",
      "gallop"
    ],
    "techniques": [
      "gallop"
    ]
  },
  {
    "id": "tech-metal-palm-muted-chug",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal"
    ],
    "name": "palm-muted chug",
    "shortName": "palm-muted chug",
    "family": "metal",
    "category": "groove",
    "description": "Technique: palm-muted chug",
    "tags": [
      "metal",
      "palm-muted chug"
    ],
    "approaches": [
      "palm-muted chug"
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
      "metal",
      "palm-muted chug"
    ],
    "techniques": [
      "palm-muted chug"
    ]
  },
  {
    "id": "tech-metal-tremolo-picking",
    "worldId": "metal",
    "styleIds": [
      "metal-blackgaze"
    ],
    "name": "tremolo picking",
    "shortName": "tremolo picking",
    "family": "metal",
    "category": "groove",
    "description": "Technique: tremolo picking",
    "tags": [
      "metal",
      "tremolo picking"
    ],
    "approaches": [
      "tremolo picking"
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
      "metal",
      "tremolo picking"
    ],
    "techniques": [
      "tremolo picking"
    ]
  },
  {
    "id": "tech-metal-blast-beat",
    "worldId": "metal",
    "styleIds": [
      "metal-deathcore",
      "metal-blackgaze"
    ],
    "name": "blast beat",
    "shortName": "blast beat",
    "family": "metal",
    "category": "groove",
    "description": "Technique: blast beat",
    "tags": [
      "metal",
      "blast beat"
    ],
    "approaches": [
      "blast beat"
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
      "metal",
      "blast beat"
    ],
    "techniques": [
      "blast beat"
    ]
  },
  {
    "id": "tech-metal-double-kick",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal"
    ],
    "name": "double-kick",
    "shortName": "double-kick",
    "family": "metal",
    "category": "groove",
    "description": "Technique: double-kick",
    "tags": [
      "metal",
      "double-kick"
    ],
    "approaches": [
      "double-kick"
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
      "metal",
      "double-kick"
    ],
    "techniques": [
      "double-kick"
    ]
  },
  {
    "id": "tech-metal-breakdown",
    "worldId": "metal",
    "styleIds": [
      "metal-metalcore",
      "metal-deathcore"
    ],
    "name": "breakdown",
    "shortName": "breakdown",
    "family": "metal",
    "category": "groove",
    "description": "Technique: breakdown",
    "tags": [
      "metal",
      "breakdown"
    ],
    "approaches": [
      "breakdown"
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
      "metal",
      "breakdown"
    ],
    "techniques": [
      "breakdown"
    ]
  },
  {
    "id": "tech-metal-half-time-breakdown",
    "worldId": "metal",
    "styleIds": [
      "metal-metalcore",
      "metal-deathcore"
    ],
    "name": "half-time breakdown",
    "shortName": "half-time breakdown",
    "family": "metal",
    "category": "groove",
    "description": "Technique: half-time breakdown",
    "tags": [
      "metal",
      "half-time breakdown"
    ],
    "approaches": [
      "half-time breakdown"
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
      "metal",
      "half-time breakdown"
    ],
    "techniques": [
      "half-time breakdown"
    ]
  },
  {
    "id": "tech-metal-polyrhythmic-meter-shifts",
    "worldId": "metal",
    "styleIds": [],
    "name": "polyrhythmic meter shifts",
    "shortName": "polyrhythmic meter shifts",
    "family": "metal",
    "category": "groove",
    "description": "Technique: polyrhythmic meter shifts",
    "tags": [
      "metal",
      "polyrhythmic meter shifts"
    ],
    "approaches": [
      "polyrhythmic meter shifts"
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
      "metal",
      "polyrhythmic meter shifts"
    ],
    "techniques": [
      "polyrhythmic meter shifts"
    ]
  },
  {
    "id": "style-metal-nwobhm-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-nwobhm"
    ],
    "name": "NWOBHM Signature Cell",
    "shortName": "NWOBHM Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
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
      "metal",
      "signature"
    ],
    "techniques": [
      "gallop",
      "twin-guitar harmony"
    ]
  },
  {
    "id": "style-metal-groove-metal-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal"
    ],
    "name": "Groove Metal Signature Cell",
    "shortName": "Groove Metal Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
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
      "metal",
      "signature"
    ],
    "techniques": [
      "palm-muted chug",
      "chromatic low-string riff",
      "double-kick",
      "twin-guitar harmony"
    ]
  },
  {
    "id": "style-metal-metalcore-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-metalcore"
    ],
    "name": "Metalcore Signature Cell",
    "shortName": "Metalcore Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "voice"
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
      "metal",
      "signature"
    ],
    "techniques": [
      "breakdown",
      "half-time breakdown"
    ]
  },
  {
    "id": "style-metal-deathcore-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-deathcore"
    ],
    "name": "Deathcore Signature Cell",
    "shortName": "Deathcore Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "voice"
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
      "metal",
      "signature"
    ],
    "techniques": [
      "blast beat",
      "breakdown",
      "chromatic low-string riff",
      "half-time breakdown"
    ]
  },
  {
    "id": "style-metal-blackgaze-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-blackgaze"
    ],
    "name": "Blackgaze Signature Cell",
    "shortName": "Blackgaze Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "strings"
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
      "metal",
      "signature"
    ],
    "techniques": [
      "blast beat",
      "tremolo picking",
      "tremolo/drone layer"
    ]
  }
];


const METAL_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "metal-phrase-10",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Breakdown Phrase",
          "family": "Breakdown",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "metal",
            "breakdown",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "overdrive-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "overdrive-guitar"
          ],
          "compatibleRoles": [
            "overdrive-guitar"
          ],
          "compatibleInstruments": [
            "overdrive-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            6,
            10,
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
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-phrase-10-v-01",
              "parentPatternId": "metal-phrase-10",
              "name": "Breakdown Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                10,
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
              "id": "metal-phrase-10-v-02",
              "parentPatternId": "metal-phrase-10",
              "name": "Breakdown Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "breakdown"
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
          "id": "metal--phrasing",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Metal Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Screamed/clean vocal onset template with accented",
          "tags": [
            "metal",
            "overdrive-guitar",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "overdrive-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "overdrive-guitar"
          ],
          "compatibleRoles": [
            "overdrive-guitar",
            "lead"
          ],
          "compatibleInstruments": [
            "overdrive-guitar"
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
          "articulations": ["breath"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "metal--phrasing-v--alt",
              "parentPatternId": "metal--phrasing",
              "name": "Metal Vocal Phrasing — alternate phrasing",
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
              "id": "metal--phrasing-v-final-accent",
              "parentPatternId": "metal--phrasing",
              "name": "Metal Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Metal.",
          "authenticityTags": [
            "metal",
            "overdrive-guitar"
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


const METAL_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "metal-call-11",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Gallop Response",
          "family": "Gallop",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "metal",
            "gallop",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "overdrive-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "overdrive-guitar"
          ],
          "compatibleRoles": [
            "overdrive-guitar"
          ],
          "compatibleInstruments": [
            "overdrive-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            7,
            11,
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
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-call-11-v-01",
              "parentPatternId": "metal-call-11",
              "name": "Gallop Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                7,
                11,
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
              "id": "metal-call-11-v-02",
              "parentPatternId": "metal-call-11",
              "name": "Gallop Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                5,
                7,
                11,
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
              "id": "metal-call-11-v-03",
              "parentPatternId": "metal-call-11",
              "name": "Gallop Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                5,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "gallop"
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


const METAL_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "metal-intro-14",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Lead Intro",
          "family": "Lead",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish the groove before the full ensemble enters.",
          "tags": [
            "metal",
            "lead",
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
            "guitar"
          ],
          "compatibleRoles": [
            "harmony",
            "texture"
          ],
          "compatibleInstruments": [
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            4,
            5,
            8,
            9,
            12,
            13
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
          "swingPercentage": 50,
          "articulations": [
            "muted"
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
              "id": "metal-intro-14-v-01",
              "parentPatternId": "metal-intro-14",
              "name": "Lead Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                5,
                9,
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
              "id": "metal-intro-14-v-02",
              "parentPatternId": "metal-intro-14",
              "name": "Lead Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                1,
                4,
                5,
                8,
                9,
                12,
                13
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
              "id": "metal-intro-14-v-03",
              "parentPatternId": "metal-intro-14",
              "name": "Lead Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                1,
                4,
                5,
                8,
                9,
                12,
                13,
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
                0.66,
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
                0.63,
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
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "lead"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "metal-chorus-16",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Gallop Chorus Lift",
          "family": "Gallop",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer increases rhythmic density while keeping the underlying pulse clear.",
          "tags": [
            "metal",
            "gallop",
            "chorus",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "pulse",
            "harmony",
            "drums"
          ],
    
          "approaches": ["groove", "comping"],
          "instruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "compatibleRoles": [
            "pulse",
            "harmony",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            3,
            6,
            7,
            10,
            11,
            14,
            15
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
          "syncopationRating": 1,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "muted"
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "metal-chorus-16-v-01",
              "parentPatternId": "metal-chorus-16",
              "name": "Gallop Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                6,
                7,
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
              "id": "metal-chorus-16-v-02",
              "parentPatternId": "metal-chorus-16",
              "name": "Gallop Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                3,
                6,
                7,
                10,
                11,
                14,
                15
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
              "id": "metal-chorus-16-v-03",
              "parentPatternId": "metal-chorus-16",
              "name": "Gallop Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                2,
                3,
                6,
                7,
                10,
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
                0.72,
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
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "metal",
            "gallop"
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


const METAL_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-metal-twin-guitar-harmony",
    "worldId": "metal",
    "styleIds": [
      "metal-nwobhm",
      "metal-groove-metal"
    ],
    "name": "twin-guitar harmony",
    "shortName": "twin-guitar harmony",
    "family": "metal",
    "category": "comping",
    "description": "Technique: twin-guitar harmony",
    "tags": [
      "metal",
      "twin-guitar harmony"
    ],
    "approaches": [
      "twin-guitar harmony"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "lead"
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
      "metal",
      "twin-guitar harmony"
    ],
    "techniques": [
      "twin-guitar harmony"
    ]
  }
];


const METAL_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
    "id": "tech-metal-tremolo-drone-layer",
    "worldId": "metal",
    "styleIds": [
      "metal-blackgaze"
    ],
    "name": "tremolo/drone layer",
    "shortName": "tremolo/drone layer",
    "family": "metal",
    "category": "texture",
    "description": "Technique: tremolo/drone layer",
    "tags": [
      "metal",
      "tremolo/drone layer"
    ],
    "approaches": [
      "tremolo/drone layer"
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
      8
    ],
    "accentProfile": [
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72
    ],
    "durationGrid": [
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "metal",
      "tremolo/drone layer"
    ],
    "techniques": [
      "tremolo/drone layer"
    ]
  },
  {
    "id": "tech-metal-chromatic-low-string-riff",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal",
      "metal-deathcore"
    ],
    "name": "chromatic low-string riff",
    "shortName": "chromatic low-string riff",
    "family": "metal",
    "category": "texture",
    "description": "Technique: chromatic low-string riff",
    "tags": [
      "metal",
      "chromatic low-string riff"
    ],
    "approaches": [
      "chromatic low-string riff"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture",
      "harmony"
    ],
    "instruments": [
      "strings"
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
      "metal",
      "chromatic low-string riff"
    ],
    "techniques": [
      "chromatic low-string riff"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": METAL_WORLD_PATTERNS_OSTINATO,
  "fill": METAL_WORLD_PATTERNS_FILL,
  "break": METAL_WORLD_PATTERNS_BREAK,
  "cadence": METAL_WORLD_PATTERNS_CADENCE,
  "groove": METAL_WORLD_PATTERNS_GROOVE,
  "phrasePattern": METAL_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": METAL_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": METAL_WORLD_PATTERNS_SECTIONPATTERN,
  "comping": METAL_WORLD_PATTERNS_COMPING,
  "texture": METAL_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"phrasePattern","index":1},{"category":"comping","index":0},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"groove","index":16},{"category":"groove","index":17},{"category":"groove","index":18},{"category":"texture","index":0},{"category":"texture","index":1}];

export const METAL_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
