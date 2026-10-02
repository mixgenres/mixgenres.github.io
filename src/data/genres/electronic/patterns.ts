import type { MusicalPattern, GenreWorld } from '../../schema';

export const ELECTRONIC_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "elec-offbeat-hats",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Offbeat Hats",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "Open hi-hats on the upbeats creating",
          "tags": [
            "electronic",
            "house"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
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
            0.95,
            0.9,
            1,
            0.9
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.95,
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
              "id": "elec-offbeat-hats-v-01",
              "parentPatternId": "elec-offbeat-hats",
              "name": "Offbeat Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                10,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.85,
                0.95
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.77,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "elec-offbeat-hats-v-02",
              "parentPatternId": "elec-offbeat-hats",
              "name": "Offbeat Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                0.98,
                0.96,
                0.98
              ],
              "velocityProfile": [
                0.96,
                0.83,
                0.9299999999999999,
                0.9099999999999999
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
        }
];

export const ELECTRONIC_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "elec-techno-rumble",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Techno Rumble",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Driving 16th note bass/kick interaction and",
          "tags": [
            "electronic",
            "techno"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums",
            "bass"
          ],
    
          "approaches": ["groove", "walking"],
          "instruments": ["drums", "bass"],
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
            0.65,
            0.7,
            0.95,
            0.65,
            0.7,
            1,
            0.65,
            0.7,
            0.95,
            0.65,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.6,
            0.9,
            0.55,
            0.6,
            0.95,
            0.55,
            0.6,
            0.9,
            0.55,
            0.6
          ],
          "supportedEnergy": [4, 5],
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
              "id": "elec-techno-rumble-v-01",
              "parentPatternId": "elec-techno-rumble",
              "name": "Techno Rumble — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
                0.6,
                0.6499999999999999,
                0.8999999999999999,
                0.6,
                0.6499999999999999,
                0.95,
                0.6
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.52,
                0.8200000000000001,
                0.47000000000000003,
                0.52,
                0.87,
                0.47000000000000003
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
              "id": "elec-techno-rumble-v-02",
              "parentPatternId": "elec-techno-rumble",
              "name": "Techno Rumble — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.73,
                0.6599999999999999,
                1,
                0.61,
                0.7799999999999999,
                0.96,
                0.73,
                0.6599999999999999,
                1,
                0.61,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.53,
                0.58,
                0.96,
                0.53,
                0.58,
                1,
                0.53,
                0.58,
                0.96,
                0.53,
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
        }
];

export const ELECTRONIC_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "elec-4onfloor",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Four on the Floor",
          "family": "Beat",
          "category": "fill",
          "transitionType": "fill",
          "description": "Kick on every quarter note driving",
          "tags": [
            "electronic",
            "house"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
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
            0.9,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.88,
            0.92,
            0.88
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
              "id": "elec-4onfloor-v-01",
              "parentPatternId": "elec-4onfloor",
              "name": "Four on the Floor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.85,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.8,
                0.8400000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "elec-4onfloor-v-02",
              "parentPatternId": "elec-4onfloor",
              "name": "Four on the Floor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.86,
                0.9,
                0.94
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
        }
];

export const ELECTRONIC_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "elec-trance-16ths",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Trance Bass 16ths",
          "family": "Bass",
          "category": "groove",
          "description": "Driving 16th note arpeggiated bass with",
          "tags": [
            "electronic",
            "trance"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass",
            "synth"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass", "synth"],
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
            0.75,
            0.85,
            0.95,
            0.9,
            0.75,
            0.85,
            0.95,
            0.9,
            0.75,
            0.85,
            0.95,
            0.9,
            0.75,
            0.85,
            0.95,
            0.9
          ],
          "velocityProfile": [
            0.7,
            0.8,
            0.95,
            0.85,
            0.7,
            0.8,
            0.95,
            0.85,
            0.7,
            0.8,
            0.95,
            0.85,
            0.7,
            0.8,
            0.95,
            0.85
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
              "id": "elec-trance-16ths-v-01",
              "parentPatternId": "elec-trance-16ths",
              "name": "Trance Bass 16ths — sparse variation",
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
                0.7,
                0.7999999999999999,
                0.8999999999999999,
                0.85,
                0.7,
                0.7999999999999999,
                0.8999999999999999,
                0.85,
                0.7,
                0.7999999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.62,
                0.7200000000000001,
                0.87,
                0.77,
                0.62,
                0.7200000000000001,
                0.87,
                0.77,
                0.62,
                0.7200000000000001,
                0.87
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
              "id": "elec-trance-16ths-v-02",
              "parentPatternId": "elec-trance-16ths",
              "name": "Trance Bass 16ths — accent shift",
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
                0.71,
                0.9299999999999999,
                0.9099999999999999,
                0.98,
                0.71,
                0.9299999999999999,
                0.9099999999999999,
                0.98,
                0.71,
                0.9299999999999999,
                0.9099999999999999,
                0.98,
                0.71,
                0.9299999999999999,
                0.9099999999999999,
                0.98
              ],
              "velocityProfile": [
                0.76,
                0.78,
                0.9299999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.78,
                1,
                0.83,
                0.6799999999999999,
                0.8600000000000001,
                0.9299999999999999,
                0.83,
                0.76,
                0.78,
                0.9299999999999999,
                0.9099999999999999
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-dubstep-half",
          "worldId": "electronic",
          "styleIds": ["electronic-dubstep"],
          "name": "Dubstep Half-Time",
          "family": "Beat",
          "category": "groove",
          "description": "Heavy kick on 1 and crushing",
          "tags": [
            "electronic",
            "dubstep"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            1,
            0.95
          ],
          "velocityProfile": [
            0.95,
            0.9
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "elec-dubstep-half-v-01-safe",
              "parentPatternId": "elec-dubstep-half",
              "name": "Dubstep Half-Time — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.95,
                1
              ],
              "velocityProfile": [
                0.98,
                0.86
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "elec-dubstep-half-v-02-safe",
              "parentPatternId": "elec-dubstep-half",
              "name": "Dubstep Half-Time — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.95,
                1
              ],
              "velocityProfile": [
                0.98,
                0.86
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-dnb-amen",
          "worldId": "electronic",
          "styleIds": ["electronic-dubstep"],
          "name": "DnB Break",
          "family": "Beat",
          "category": "groove",
          "description": "Fast syncopated breakbeat at 174 BPM",
          "tags": [
            "electronic",
            "dnb"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            9,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.95,
            0.75,
            0.8,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.65,
            0.75,
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
              "id": "elec-dnb-amen-v-01",
              "parentPatternId": "elec-dnb-amen",
              "name": "DnB Break — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                7,
                9,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.7,
                0.75
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.5700000000000001,
                0.67
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "elec-dnb-amen-v-02",
              "parentPatternId": "elec-dnb-amen",
              "name": "DnB Break — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                7,
                9,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                1,
                0.71,
                0.88,
                0.9099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.88,
                0.63,
                0.81,
                0.88,
                0.63
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-footwork",
          "worldId": "electronic",
          "styleIds": ["electronic-dubstep"],
          "name": "Chicago Footwork / Juke",
          "family": "Footwork",
          "category": "groove",
          "description": "Rapid, chopped kick pattern with triplet-displaced",
          "tags": [
            "electronic",
            "footwork",
            "juke"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            7,
            9,
            12,
            13,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.9,
            0.6,
            0.95,
            0.85,
            0.6,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.85,
            0.55,
            0.9,
            0.8,
            0.55,
            0.85
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
              "id": "elec-footwork-v-01",
              "parentPatternId": "elec-footwork",
              "name": "Chicago Footwork / Juke — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                7,
                12,
                13
              ],
              "accentProfile": [
                0.95,
                0.6,
                0.85,
                0.5499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
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
              "id": "elec-footwork-v-02",
              "parentPatternId": "elec-footwork",
              "name": "Chicago Footwork / Juke — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                7,
                9,
                12,
                13,
                15
              ],
              "accentProfile": [
                0.96,
                0.73,
                0.86,
                0.6799999999999999,
                0.9099999999999999,
                0.9299999999999999,
                0.5599999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.58,
                0.83,
                0.6100000000000001,
                0.88,
                0.78,
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-ukg",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "UK Garage Swung",
          "family": "Beat",
          "category": "groove",
          "description": "Swung 16ths with skipping 2-step kicks",
          "tags": [
            "electronic",
            "ukg"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.95,
            0.8,
            0.85,
            0.95,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.75,
            0.8,
            0.9,
            0.7
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
              "id": "elec-ukg-v-01",
              "parentPatternId": "elec-ukg",
              "name": "UK Garage Swung — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                7,
                8,
                15
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.75,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.67,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "elec-ukg-v-02",
              "parentPatternId": "elec-ukg",
              "name": "UK Garage Swung — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                7,
                8,
                12,
                15
              ],
              "accentProfile": [
                0.96,
                1,
                0.76,
                0.9299999999999999,
                0.9099999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73,
                0.8600000000000001,
                0.88,
                0.6799999999999999
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-electro",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Electro 808",
          "family": "Beat",
          "category": "groove",
          "description": "Classic syncopated 808 robotic electro beat.",
          "tags": [
            "electronic",
            "electro"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": ["drums"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            7,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.95,
            0.8,
            0.85,
            0.95,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.75,
            0.8,
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
              "id": "elec-electro-v-01",
              "parentPatternId": "elec-electro",
              "name": "Electro 808 — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                7,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.75,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.67,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "elec-electro-v-02",
              "parentPatternId": "elec-electro",
              "name": "Electro 808 — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                7,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                1,
                0.76,
                0.9299999999999999,
                0.9099999999999999,
                0.88
              ],
              "velocityProfile": [
                1,
                0.88,
                0.73,
                0.8600000000000001,
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
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-ambient",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Ambient Pulse",
          "family": "Synth",
          "category": "groove",
          "description": "Slow evolving chord pulses with gentle",
          "tags": [
            "electronic",
            "ambient"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys",
            "synth"
          ],
    
          "approaches": ["groove"],
          "instruments": ["keys", "synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 4,
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            1,
            0.8
          ],
          "velocityProfile": [
            0.9,
            0.75
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "elec-ambient-v-01-safe",
              "parentPatternId": "elec-ambient",
              "name": "Ambient Pulse — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                2
              ],
              "accentProfile": [
                0.95,
                0.88
              ],
              "velocityProfile": [
                0.93,
                0.71
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "elec-ambient-v-02-safe",
              "parentPatternId": "elec-ambient",
              "name": "Ambient Pulse — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                2
              ],
              "accentProfile": [
                0.95,
                0.88
              ],
              "velocityProfile": [
                0.93,
                0.71
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "elec-synthwave",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Synthwave 8ths",
          "family": "Bass",
          "category": "groove",
          "description": "Straight 8th note driving retro synth",
          "tags": [
            "electronic",
            "synthwave"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass",
            "synth"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass", "synth"],
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
            0.8,
            0.92,
            0.8,
            0.96,
            0.8,
            0.92,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.88,
            0.75,
            0.92,
            0.75,
            0.88,
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
              "id": "elec-synthwave-v-01",
              "parentPatternId": "elec-synthwave",
              "name": "Synthwave 8ths — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.75,
                0.87,
                0.75,
                0.9099999999999999
              ],
              "velocityProfile": [
                0.87,
                0.67,
                0.8,
                0.67,
                0.8400000000000001
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
              "id": "elec-synthwave-v-02",
              "parentPatternId": "elec-synthwave",
              "name": "Synthwave 8ths — accent shift",
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
                7
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.88,
                0.88,
                0.9199999999999999,
                0.88,
                0.88,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.73,
                0.86,
                0.81,
                0.9,
                0.73,
                0.94,
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
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "electronic-comp-16",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Drop Comping",
          "family": "Drop",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "electronic",
            "drop",
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
          "instruments": ["synth"],
          "compatibleRoles": [
            "harmony"
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
            3,
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
              "id": "electronic-comp-16-v-01",
              "parentPatternId": "electronic-comp-16",
              "name": "Drop Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "id": "electronic-comp-16-v-02",
              "parentPatternId": "electronic-comp-16",
              "name": "Drop Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
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
          "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "electronic",
            "drop"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
];

export const ELECTRONIC_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "electronic-call-14",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Breakbeat Response",
          "family": "Breakbeat",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "electronic",
            "breakbeat",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "synth",
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["synth", "bass"],
          "compatibleRoles": [
            "synth",
            "lead"
          ],
          "compatibleInstruments": [
            "synth",
            "bass"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            6,
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
              "id": "electronic-call-14-v-01",
              "parentPatternId": "electronic-call-14",
              "name": "Breakbeat Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                6,
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
              "id": "electronic-call-14-v-02",
              "parentPatternId": "electronic-call-14",
              "name": "Breakbeat Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                3,
                6,
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
              "id": "electronic-call-14-v-03",
              "parentPatternId": "electronic-call-14",
              "name": "Breakbeat Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                1,
                3,
                6,
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
          "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "electronic",
            "breakbeat"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];

export const ELECTRONIC_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "elec-acid-303",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Acid House 303 Bassline",
          "family": "Acid Bass",
          "category": "ostinato",
          "description": "Squelchy Roland TB-303 style syncopated 16th-note",
          "tags": [
            "electronic",
            "acid-house",
            "bass"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass",
            "synth"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass", "synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            10,
            11,
            14
          ],
          "accentProfile": [
            1,
            0.6,
            0.9,
            0.65,
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.85,
            0.6,
            0.9,
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
              "id": "elec-acid-303-v-01",
              "parentPatternId": "elec-acid-303",
              "name": "Acid House 303 Bassline — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                14
              ],
              "accentProfile": [
                0.95,
                0.5499999999999999,
                0.85,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.47000000000000003,
                0.77,
                0.52,
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
              "id": "elec-acid-303-v-02",
              "parentPatternId": "elec-acid-303",
              "name": "Acid House 303 Bassline — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                7,
                10,
                11,
                14
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.86,
                0.73,
                0.9099999999999999,
                0.7799999999999999,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.53,
                0.83,
                0.6599999999999999,
                0.88,
                0.63,
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
          "weight": 0.7,
          "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "electronic"
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
          "id": "electronic-anchor-15",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Build Anchor",
          "family": "Build",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "electronic",
            "build",
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
            1,
            2,
            4,
            7,
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
          "syncopationRating": 0.7142857142857143,
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
              "id": "electronic-anchor-15-v-01",
              "parentPatternId": "electronic-anchor-15",
              "name": "Build Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                4,
                7,
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
              "id": "electronic-anchor-15-v-02",
              "parentPatternId": "electronic-anchor-15",
              "name": "Build Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                4,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "electronic",
            "build"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];

export const ELECTRONIC_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "electronic-phrase-13",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Pluck Phrase",
          "family": "Pluck",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves",
          "tags": [
            "electronic",
            "pluck",
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
            0,
            2,
            5,
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
          "swingPercentage": 50,
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
              "id": "electronic-phrase-13-v-01",
              "parentPatternId": "electronic-phrase-13",
              "name": "Pluck Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                5,
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
              "id": "electronic-phrase-13-v-02",
              "parentPatternId": "electronic-phrase-13",
              "name": "Pluck Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                5,
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
          "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "electronic",
            "pluck"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];

export const ELECTRONIC_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "electronic-intro-17",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Arp Intro",
          "family": "Arp",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "electronic",
            "arp",
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
          "instruments": ["synth"],
          "compatibleRoles": [
            "harmony",
            "texture"
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
            3,
            6,
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
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
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
              "id": "electronic-intro-17-v-01",
              "parentPatternId": "electronic-intro-17",
              "name": "Arp Intro — sparse variation",
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
              "id": "electronic-intro-17-v-02",
              "parentPatternId": "electronic-intro-17",
              "name": "Arp Intro — accent shift",
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
              "id": "electronic-intro-17-v-03",
              "parentPatternId": "electronic-intro-17",
              "name": "Arp Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                3,
                6,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "electronic",
            "arp"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": ELECTRONIC_WORLD_PATTERNS_FILL,
  "break": ELECTRONIC_WORLD_PATTERNS_BREAK,
  "cadence": ELECTRONIC_WORLD_PATTERNS_CADENCE,
  "groove": ELECTRONIC_WORLD_PATTERNS_GROOVE,
  "ostinato": ELECTRONIC_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": ELECTRONIC_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": ELECTRONIC_WORLD_PATTERNS_INTERACTIONPATTERN,
  "sectionPattern": ELECTRONIC_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":1},{"category":"groove","index":8},{"category":"sectionPattern","index":0}];

export const ELECTRONIC_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
