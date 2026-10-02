import type { MusicalPattern, GenreWorld } from '../../schema';

export const AFROBEATS_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "afrobeats-break-15",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeat Break",
          "family": "Afrobeat",
          "category": "break",
          "transitionType": "fill",
          "description": "A deliberate drop in density for",
          "tags": [
            "afrobeats",
            "afrobeat",
            "break",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": ["drums", "percussion", "bass"],
          "compatibleRoles": [
            "drums",
            "bass"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "bass"
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
            1,
            0.55,
            0.55,
            0.55,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.95,
            1
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "stop-time"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-break-15-v-01",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.95,
                0.5,
                0.5,
                0.5
              ],
              "velocityProfile": [
                0.92,
                0.42,
                0.47000000000000003,
                0.47000000000000003
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-break-15-v-02",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                5,
                7,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.63,
                0.51,
                0.63,
                0.96,
                1
              ],
              "velocityProfile": [
                1,
                0.48,
                0.53,
                0.6100000000000001,
                0.9299999999999999,
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
            },
            {
              "id": "afrobeats-break-15-v-03",
              "parentPatternId": "afrobeats-break-15",
              "name": "Afrobeat Break — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
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
                0.98,
                0.53,
                0.53,
                0.53,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                1,
                0.5,
                0.55,
                0.55,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "afrobeat"
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

export const AFROBEATS_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "afro-horn-stabs",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afrobeat"],
          "name": "Fela Afrobeat Horn Section Stabs",
          "family": "Afro Horns",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Pungent brass section horn stabs locking",
          "tags": [
            "afrobeat",
            "horns",
            "horn-section",
            "fela"
          ],
          "scopes": [
            "phrase",
            "region"
          ],
          "roles": [
            "lead",
            "horn-section"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["trumpet", "horn-section", "sax"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.9,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.9,
            0.95
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "solo",
            "coda"
          ],
          "variants": [
            {
              "id": "afro-horn-stabs-v-01",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                3,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
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
              "id": "afro-horn-stabs-v-02",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                3,
                7,
                11,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.98,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.96,
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
            },
            {
              "id": "afro-horn-stabs-v-03",
              "parentPatternId": "afro-horn-stabs",
              "name": "Fela Afrobeat Horn Section Stabs — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                3,
                7,
                11,
                14,
                15
              ],
              "accentProfile": [
                0.9299999999999999,
                0.88,
                0.9299999999999999,
                1,
                1
              ],
              "velocityProfile": [
                0.9,
                0.85,
                0.9,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": [
            "legato"
          ]
        },
  {
          "id": "afrobeats-cadence-16",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Log Drum Cadence",
          "family": "Log Drum",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A phrase-ending cadence that gives the",
          "tags": [
            "afrobeats",
            "log-drum",
            "cadence",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "bass"
          ],
    
          "approaches": ["comping", "walking"],
          "instruments": ["guitar", "bass"],
          "compatibleRoles": [
            "harmony",
            "bass"
          ],
          "compatibleInstruments": [
            "guitar",
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
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "turnaround",
            "ending",
            "coda",
            "remate",
            "cierre"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-cadence-16-v-01",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "id": "afrobeats-cadence-16-v-02",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
            },
            {
              "id": "afrobeats-cadence-16-v-03",
              "parentPatternId": "afrobeats-cadence-16",
              "name": "Log Drum Cadence — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                6,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "log-drum"
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

export const AFROBEATS_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "afrobeats-fill-14",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Horn Fill",
          "family": "Horn",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short transition fill that signals",
          "tags": [
            "afrobeats",
            "horn",
            "fill",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "fill",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums", "percussion"],
          "compatibleRoles": [
            "fill",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion"
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
            0.72,
            0.78,
            0.84,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.95,
            1
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "pre-chorus",
            "turnaround",
            "ending"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-fill-14-v-01",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.6699999999999999,
                0.73,
                0.7899999999999999,
                0.6699999999999999
              ],
              "velocityProfile": [
                0.64,
                0.65,
                0.76,
                0.64
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afrobeats-fill-14-v-02",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.6799999999999999,
                0.86,
                0.7999999999999999,
                0.7999999999999999,
                0.96,
                1
              ],
              "velocityProfile": [
                0.78,
                0.71,
                0.82,
                0.78,
                0.9299999999999999,
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
            },
            {
              "id": "afrobeats-fill-14-v-03",
              "parentPatternId": "afrobeats-fill-14",
              "name": "Horn Fill — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.7,
                0.76,
                0.82,
                0.7,
                0.98,
                1,
                1
              ],
              "velocityProfile": [
                0.72,
                0.73,
                0.84,
                0.72,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "horn"
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

export const AFROBEATS_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "afro-log-drum-bass",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Pitched Log Drum Bass Groove",
          "family": "Log Drum",
          "category": "groove",
          "description": "Resonant FM synth log drum bassline",
          "tags": [
            "afrobeats",
            "bass",
            "log-drum",
            "amapiano",
            "sub"
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
          "instruments": ["bass", "synth"],
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
            0.85,
            0.95,
            0.75,
            0.9,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.7,
            0.85,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
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
              "id": "afro-log-drum-bass-v-01",
              "parentPatternId": "afro-log-drum-bass",
              "name": "Pitched Log Drum Bass Groove — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.8999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.8200000000000001,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "afro-log-drum-bass-v-02",
              "parentPatternId": "afro-log-drum-bass",
              "name": "Pitched Log Drum Bass Groove — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.83,
                0.86,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88,
                0.76,
                0.83,
                0.78
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
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afro-syncopated-kit",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Modern Afropop Kick & Rim Pocket",
          "family": "Afrobeats Drums",
          "category": "groove",
          "description": "Signature Afrobeats syncopated kick placement with",
          "tags": [
            "afrobeats",
            "drums",
            "kick",
            "rimshot"
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
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.9,
            0.7,
            0.8
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "afro-syncopated-kit-v-01",
              "parentPatternId": "afro-syncopated-kit",
              "name": "Modern Afropop Kick & Rim Pocket — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
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
              "id": "afro-syncopated-kit-v-02",
              "parentPatternId": "afro-syncopated-kit",
              "name": "Modern Afropop Kick & Rim Pocket — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                6,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.83,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                0.76,
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
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afro-shekere-shaker",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afrobeat"],
          "name": "Shekere & Gourd Shaker Engine",
          "family": "Afro Percussion",
          "category": "groove",
          "description": "Continuous 16th-note gourd shaker rattle with",
          "tags": [
            "afrobeat",
            "percussion",
            "shekere",
            "shaker"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": ["percussion", "guiro"],
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
            0.5,
            0.75,
            0.5,
            0.85,
            0.5,
            0.75,
            0.5,
            0.95,
            0.5,
            0.75,
            0.5,
            0.85,
            0.5,
            0.75,
            0.55
          ],
          "velocityProfile": [
            0.95,
            0.45,
            0.7,
            0.45,
            0.8,
            0.45,
            0.7,
            0.45,
            0.9,
            0.45,
            0.7,
            0.45,
            0.8,
            0.45,
            0.7,
            0.5
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "afro-shekere-shaker-v-01",
              "parentPatternId": "afro-shekere-shaker",
              "name": "Shekere & Gourd Shaker Engine — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6,
                8,
                9,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.95,
                0.45,
                0.7,
                0.45,
                0.7999999999999999,
                0.45,
                0.7,
                0.45,
                0.8999999999999999,
                0.45,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.4,
                0.62,
                0.4,
                0.7200000000000001,
                0.4,
                0.62,
                0.4,
                0.8200000000000001,
                0.4,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3,
                6,
                -3
              ]
            },
            {
              "id": "afro-shekere-shaker-v-02",
              "parentPatternId": "afro-shekere-shaker",
              "name": "Shekere & Gourd Shaker Engine — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.96,
                0.58,
                0.71,
                0.58,
                0.8099999999999999,
                0.58,
                0.71,
                0.58,
                0.9099999999999999,
                0.58,
                0.71,
                0.58,
                0.8099999999999999,
                0.58,
                0.71,
                0.63
              ],
              "velocityProfile": [
                1,
                0.43,
                0.6799999999999999,
                0.51,
                0.78,
                0.43,
                0.76,
                0.43,
                0.88,
                0.51,
                0.6799999999999999,
                0.43,
                0.8600000000000001,
                0.43,
                0.6799999999999999,
                0.56
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
          "weight": 1,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afro-amapiano-pad",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-amapiano"],
          "name": "Airy Rhodes & Synth Pad Comping",
          "family": "Amapiano Keys",
          "category": "groove",
          "description": "Spacious, warm electric piano voicings floating",
          "tags": [
            "amapiano",
            "keys",
            "rhodes",
            "pad"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "harmony",
            "texture"
          ],
    
          "approaches": ["comping"],
          "instruments": ["keys", "piano", "synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            0.85,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.8,
            0.85,
            0.75
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "afro-amapiano-pad-v-01",
              "parentPatternId": "afro-amapiano-pad",
              "name": "Airy Rhodes & Synth Pad Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                14
              ],
              "accentProfile": [
                0.7999999999999999,
                0.85
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.77
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "afro-amapiano-pad-v-02",
              "parentPatternId": "afro-amapiano-pad",
              "name": "Airy Rhodes & Synth Pad Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                8,
                14
              ],
              "accentProfile": [
                0.8099999999999999,
                0.98,
                0.76
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.83,
                0.73
              ],
              "microtimingOffset": [
                2,
                -5,
                2
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afrobeats-comp-9",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Horn Comping",
          "family": "Horn",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "afrobeats",
            "horn",
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
          "instruments": ["guitar"],
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
            2,
            4,
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-comp-9-v-01",
              "parentPatternId": "afrobeats-comp-9",
              "name": "Horn Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                7,
                10,
                15
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
              "id": "afrobeats-comp-9-v-02",
              "parentPatternId": "afrobeats-comp-9",
              "name": "Horn Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "horn"
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
          "id": "afrobeats-verse-11",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Log Drum Verse Variation",
          "family": "Log Drum",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "afrobeats",
            "log-drum",
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
          "instruments": ["drums", "percussion", "bass"],
          "compatibleRoles": [
            "pulse",
            "rhythm-guitar",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            5,
            7,
            10,
            12,
            13,
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
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
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
              "id": "afrobeats-verse-11-v-01",
              "parentPatternId": "afrobeats-verse-11",
              "name": "Log Drum Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                5,
                7,
                12,
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
              "id": "afrobeats-verse-11-v-02",
              "parentPatternId": "afrobeats-verse-11",
              "name": "Log Drum Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                5,
                7,
                10,
                12,
                13,
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
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "log-drum"
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
];

export const AFROBEATS_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "afrobeats-call-7",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Shekere Response",
          "family": "Shekere",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "afrobeats",
            "shekere",
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
          "instruments": ["synth"],
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
            1,
            4,
            7,
            9,
            12,
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-call-7-v-01",
              "parentPatternId": "afrobeats-call-7",
              "name": "Shekere Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                7,
                9,
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
              "id": "afrobeats-call-7-v-02",
              "parentPatternId": "afrobeats-call-7",
              "name": "Shekere Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12,
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
              "id": "afrobeats-call-7-v-03",
              "parentPatternId": "afrobeats-call-7",
              "name": "Shekere Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                4,
                7,
                9,
                12,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "shekere"
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

export const AFROBEATS_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "afro-highlife-guitar",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Highlife Fingerstyle Clean Guitar",
          "family": "Highlife Guitar",
          "category": "ostinato",
          "description": "Bright clean electric guitar playing rhythmic",
          "tags": [
            "afrobeats",
            "guitar",
            "highlife",
            "clean"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "guitar"
          ],
    
          "approaches": ["comping", "chop"],
          "instruments": ["guitar", "guitar"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.75,
            0.9,
            0.8,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.8,
            0.9,
            0.7,
            0.85,
            0.75,
            0.9,
            0.65
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
              "id": "afro-highlife-guitar-v-01",
              "parentPatternId": "afro-highlife-guitar",
              "name": "Highlife Fingerstyle Clean Guitar — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                7,
                8,
                13,
                15
              ],
              "accentProfile": [
                0.7999999999999999,
                0.8999999999999999,
                0.7,
                0.85,
                0.75
              ],
              "velocityProfile": [
                0.7200000000000001,
                0.8200000000000001,
                0.62,
                0.77,
                0.67
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
              "id": "afro-highlife-guitar-v-02",
              "parentPatternId": "afro-highlife-guitar",
              "name": "Highlife Fingerstyle Clean Guitar — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                7,
                8,
                11,
                13,
                15
              ],
              "accentProfile": [
                0.8099999999999999,
                1,
                0.71,
                0.98,
                0.76,
                1,
                0.6599999999999999
              ],
              "velocityProfile": [
                0.8600000000000001,
                0.88,
                0.6799999999999999,
                0.9099999999999999,
                0.73,
                0.88,
                0.71
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
          "weight": 0.7,
          "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "afrobeats"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "afrobeats-anchor-8",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Hook Anchor",
          "family": "Hook",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "afrobeats",
            "hook",
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
          "instruments": ["bass"],
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
            5,
            8,
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-anchor-8-v-01",
              "parentPatternId": "afrobeats-anchor-8",
              "name": "Hook Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                8,
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
              "id": "afrobeats-anchor-8-v-02",
              "parentPatternId": "afrobeats-anchor-8",
              "name": "Hook Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                5,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "hook"
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

export const AFROBEATS_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "afrobeats--phrasing",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeats Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Hook-driven vocal placement designed around syncopated",
          "tags": [
            "afrobeats",
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
          "instruments": ["synth"],
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
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats--phrasing-v--alt",
              "parentPatternId": "afrobeats--phrasing",
              "name": "Afrobeats Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "Alternate vocal entry placement for a",
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
              "id": "afrobeats--phrasing-v-final-accent",
              "parentPatternId": "afrobeats--phrasing",
              "name": "Afrobeats Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Afrobeats.",
          "authenticityTags": [
            "afrobeats",
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

export const AFROBEATS_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "afrobeats-intro-10",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Afrobeat Intro",
          "family": "Afrobeat",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "afrobeats",
            "afrobeat",
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
          "instruments": ["guitar"],
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
            1,
            3,
            4,
            6,
            9,
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
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "afrobeats-intro-10-v-01",
              "parentPatternId": "afrobeats-intro-10",
              "name": "Afrobeat Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                4,
                6,
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
              "id": "afrobeats-intro-10-v-02",
              "parentPatternId": "afrobeats-intro-10",
              "name": "Afrobeat Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                3,
                4,
                6,
                9,
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
              "id": "afrobeats-intro-10-v-03",
              "parentPatternId": "afrobeats-intro-10",
              "name": "Afrobeat Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                3,
                4,
                6,
                9,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "afrobeat"
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
          "id": "afrobeats-chorus-12",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Shekere Chorus Lift",
          "family": "Shekere",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer that increases",
          "tags": [
            "afrobeats",
            "shekere",
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
          "instruments": ["drums", "percussion", "guitar"],
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
            0,
            3,
            5,
            6,
            8,
            11,
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
          "syncopationRating": 0.75,
          "anticipationOffset": 1,
          "swingPercentage": 50,
          "articulations": [
            "accented",
            "ghost-aware"
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
              "id": "afrobeats-chorus-12-v-01",
              "parentPatternId": "afrobeats-chorus-12",
              "name": "Shekere Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                6,
                11,
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
              "id": "afrobeats-chorus-12-v-02",
              "parentPatternId": "afrobeats-chorus-12",
              "name": "Shekere Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                5,
                6,
                8,
                11,
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
            },
            {
              "id": "afrobeats-chorus-12-v-03",
              "parentPatternId": "afrobeats-chorus-12",
              "name": "Shekere Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                3,
                5,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "shekere"
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
          "id": "afrobeats-bridge-13",
          "worldId": "afrobeats",
          "styleIds": ["afrobeats-afro-pop"],
          "name": "Hook Bridge",
          "family": "Hook",
          "category": "sectionPattern",
          "description": "A contrasting bridge texture designed to",
          "tags": [
            "afrobeats",
            "hook",
            "bridge",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmony",
            "lead"
          ],
    
          "approaches": ["comping", "phrase"],
          "instruments": ["guitar"],
          "compatibleRoles": [
            "harmony",
            "lead"
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
            5,
            7,
            8,
            10,
            13,
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
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "bridge",
            "interlude",
            "development"
          ],
    
    
          "variants": [
            {
              "id": "afrobeats-bridge-13-v-01",
              "parentPatternId": "afrobeats-bridge-13",
              "name": "Hook Bridge — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
                7,
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
              "id": "afrobeats-bridge-13-v-02",
              "parentPatternId": "afrobeats-bridge-13",
              "name": "Hook Bridge — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                5,
                7,
                8,
                10,
                13,
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
              "id": "afrobeats-bridge-13-v-03",
              "parentPatternId": "afrobeats-bridge-13",
              "name": "Hook Bridge — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                5,
                7,
                8,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "afrobeats",
            "hook"
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "groove": AFROBEATS_WORLD_PATTERNS_GROOVE,
  "ostinato": AFROBEATS_WORLD_PATTERNS_OSTINATO,
  "cadence": AFROBEATS_WORLD_PATTERNS_CADENCE,
  "interactionPattern": AFROBEATS_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": AFROBEATS_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": AFROBEATS_WORLD_PATTERNS_FILL,
  "break": AFROBEATS_WORLD_PATTERNS_BREAK,
  "phrasePattern": AFROBEATS_WORLD_PATTERNS_PHRASEPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"groove","index":0},{"category":"groove","index":1},{"category":"ostinato","index":0},{"category":"groove","index":2},{"category":"cadence","index":0},{"category":"groove","index":3},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":4},{"category":"sectionPattern","index":0},{"category":"groove","index":5},{"category":"sectionPattern","index":1},{"category":"sectionPattern","index":2},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":1},{"category":"phrasePattern","index":0}];

export const AFROBEATS_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
