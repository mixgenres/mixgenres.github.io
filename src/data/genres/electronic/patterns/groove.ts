import type { MusicalPattern } from '../../../schema';

export const ELECTRONIC_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "elec-trance-16ths",
          "worldId": "electronic",
          "styleIds": ["electronic-techno"],
          "name": "Trance Bass 16ths",
          "family": "Bass",
          "category": "groove",
          "description": "Driving 16th-note arpeggiated bass adds motion beneath the breakbeat.",
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
          "instruments": [
            "bass",
            "synth"
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "instruments": [
            "drums"
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
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
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
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
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
          "instruments": [
            "drums"
          ],
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "instruments": [
            "drums"
          ],
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "styleIds": ["electronic-techno", "electronic-synthwave"],
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
          "instruments": [
            "drums"
          ],
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "styleIds": ["electronic-techno", "electronic-synthwave"],
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
          "instruments": [
            "keys",
            "synth"
          ],
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
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
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
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
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
          "styleIds": ["electronic-techno", "electronic-synthwave"],
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
          "instruments": [
            "bass",
            "synth"
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
          "styleIds": ["electronic-techno", "electronic-synthwave"],
          "name": "Drop Comping",
          "family": "Drop",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
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
          "instruments": [
            "synth"
          ],
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
              "id": "electronic-comp-16-v-02",
              "parentPatternId": "electronic-comp-16",
              "name": "Drop Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
,
  {
    "id": "tech-electronic-808-909-programming",
    "worldId": "electronic",
    "styleIds": [],
    "name": "808/909 programming",
    "shortName": "808/909 programming",
    "family": "electronic",
    "category": "groove",
    "description": "Technique: 808/909 programming",
    "tags": [
      "electronic",
      "808/909 programming"
    ],
    "approaches": [
      "808/909 programming"
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
      "electronic",
      "808/909 programming"
    ],
    "techniques": [
      "808/909 programming"
    ]
  },
  {
    "id": "tech-electronic-electro-syncopated-kick",
    "worldId": "electronic",
    "styleIds": [
      "electronic-electro",
      "electronic-detroit-techno"
    ],
    "name": "electro syncopated kick",
    "shortName": "electro syncopated kick",
    "family": "electronic",
    "category": "groove",
    "description": "Technique: electro syncopated kick",
    "tags": [
      "electronic",
      "electro syncopated kick"
    ],
    "approaches": [
      "electro syncopated kick"
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
      "electronic",
      "electro syncopated kick"
    ],
    "techniques": [
      "electro syncopated kick"
    ]
  },
  {
    "id": "tech-electronic-breakbeat-chopping",
    "worldId": "electronic",
    "styleIds": [
      "electronic-breakbeat-hardcore"
    ],
    "name": "breakbeat chopping",
    "shortName": "breakbeat chopping",
    "family": "electronic",
    "category": "groove",
    "description": "Technique: breakbeat chopping",
    "tags": [
      "electronic",
      "breakbeat chopping"
    ],
    "approaches": [
      "breakbeat chopping"
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
      "electronic",
      "breakbeat chopping"
    ],
    "techniques": [
      "breakbeat chopping"
    ]
  },
  {
    "id": "tech-electronic-four-on-floor-groove",
    "worldId": "electronic",
    "styleIds": [
      "electronic-detroit-techno"
    ],
    "name": "four-on-floor groove",
    "shortName": "four-on-floor groove",
    "family": "electronic",
    "category": "groove",
    "description": "Technique: four-on-floor groove",
    "tags": [
      "electronic",
      "four-on-floor groove"
    ],
    "approaches": [
      "four-on-floor groove"
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
      "electronic",
      "four-on-floor groove"
    ],
    "techniques": [
      "four-on-floor groove"
    ]
  },
  {
    "id": "tech-electronic-techno-percussion-loop",
    "worldId": "electronic",
    "styleIds": [
      "electronic-detroit-techno",
      "electronic-ambient-techno"
    ],
    "name": "techno percussion loop",
    "shortName": "techno percussion loop",
    "family": "electronic",
    "category": "groove",
    "description": "Technique: techno percussion loop",
    "tags": [
      "electronic",
      "techno percussion loop"
    ],
    "approaches": [
      "techno percussion loop"
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
      "electronic",
      "techno percussion loop"
    ],
    "techniques": [
      "techno percussion loop"
    ]
  },
  {
    "id": "style-electronic-electro-signature",
    "worldId": "electronic",
    "styleIds": [
      "electronic-electro"
    ],
    "name": "Electro Signature Cell",
    "shortName": "Electro Cell",
    "family": "electronic",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "electronic",
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
      "drums",
      "synth",
      "bass-lead",
      "snare"
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
      "electronic",
      "signature"
    ],
    "techniques": [
      "electro syncopated kick",
      "filter-envelope bass"
    ]
  },
  {
    "id": "style-electronic-detroit-techno-signature",
    "worldId": "electronic",
    "styleIds": [
      "electronic-detroit-techno"
    ],
    "name": "Detroit Techno Signature Cell",
    "shortName": "Detroit Techno Cell",
    "family": "electronic",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "electronic",
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
      "drums",
      "synth",
      "polysynth",
      "bass-lead"
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
      "electronic",
      "signature"
    ],
    "techniques": [
      "four-on-floor groove",
      "gated synth sequence",
      "techno percussion loop",
      "303 acid sequence",
      "electro syncopated kick"
    ]
  },
  {
    "id": "style-electronic-chicago-acid-house-signature",
    "worldId": "electronic",
    "styleIds": [
      "electronic-chicago-acid-house"
    ],
    "name": "Chicago Acid House Signature Cell",
    "shortName": "Chicago Acid House Cell",
    "family": "electronic",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "electronic",
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
      "acid-303",
      "drums",
      "bass-lead",
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
      "electronic",
      "signature"
    ],
    "techniques": [
      "303 acid sequence",
      "filter-envelope bass",
      "gated synth sequence"
    ]
  },
  {
    "id": "style-electronic-ambient-techno-signature",
    "worldId": "electronic",
    "styleIds": [
      "electronic-ambient-techno"
    ],
    "name": "Ambient Techno Signature Cell",
    "shortName": "Ambient Techno Cell",
    "family": "electronic",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "electronic",
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
      "drums",
      "warm-pad",
      "halo-pad",
      "bass-lead"
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
      "electronic",
      "signature"
    ],
    "techniques": [
      "evolving ambient pad",
      "techno percussion loop"
    ]
  },
  {
    "id": "style-electronic-breakbeat-hardcore-signature",
    "worldId": "electronic",
    "styleIds": [
      "electronic-breakbeat-hardcore"
    ],
    "name": "Breakbeat Hardcore Signature Cell",
    "shortName": "Breakbeat Hardcore Cell",
    "family": "electronic",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "electronic",
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
      "drums",
      "synth",
      "sampler",
      "bass-lead"
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
      "electronic",
      "signature"
    ],
    "techniques": [
      "breakbeat chopping",
      "rave stab",
      "filter-envelope bass"
    ]
  }
];
