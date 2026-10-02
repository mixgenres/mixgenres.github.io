import type { MusicalPattern, GenreWorld } from '../../schema';

export const COUNTRY_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "country-train",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Train Beat",
          "family": "Beat",
          "category": "break",
          "transitionType": "fill",
          "description": "Continuous 16ths snare train beat with",
          "tags": [
            "country",
            "honky-tonk"
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
            0.8,
            0.6,
            0.7,
            0.65,
            1,
            0.65,
            0.7,
            0.65,
            0.85,
            0.6,
            0.7,
            0.65,
            1,
            0.65,
            0.7,
            0.65
          ],
          "velocityProfile": [
            0.75,
            0.5,
            0.6,
            0.55,
            0.95,
            0.55,
            0.6,
            0.55,
            0.8,
            0.5,
            0.6,
            0.55,
            0.95,
            0.55,
            0.6,
            0.55
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
              "id": "country-train-v-01",
              "parentPatternId": "country-train",
              "name": "Train Beat — sparse variation",
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
                0.75,
                0.5499999999999999,
                0.6499999999999999,
                0.6,
                0.95,
                0.6,
                0.6499999999999999,
                0.6,
                0.7999999999999999,
                0.5499999999999999,
                0.6499999999999999
              ],
              "velocityProfile": [
                0.67,
                0.42,
                0.52,
                0.47000000000000003,
                0.87,
                0.47000000000000003,
                0.52,
                0.47000000000000003,
                0.7200000000000001,
                0.42,
                0.52
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
              "id": "country-train-v-02",
              "parentPatternId": "country-train",
              "name": "Train Beat — accent shift",
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
                0.76,
                0.6799999999999999,
                0.6599999999999999,
                0.73,
                0.96,
                0.73,
                0.6599999999999999,
                0.73,
                0.8099999999999999,
                0.6799999999999999,
                0.6599999999999999,
                0.73,
                0.96,
                0.73,
                0.6599999999999999,
                0.73
              ],
              "velocityProfile": [
                0.81,
                0.48,
                0.58,
                0.6100000000000001,
                0.9299999999999999,
                0.53,
                0.6599999999999999,
                0.53,
                0.78,
                0.56,
                0.58,
                0.53,
                1,
                0.53,
                0.58,
                0.6100000000000001
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const COUNTRY_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "country-trap-hats",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Hick-Hop Trap Hi-Hats",
          "family": "Beat",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Modern country-trap crossover: rolling hi-hat bursts",
          "tags": [
            "country",
            "trap",
            "hick-hop"
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
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.95,
            0.6,
            0.75,
            1,
            0.55,
            0.65,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.9,
            0.55,
            0.7,
            0.95,
            0.5,
            0.6,
            0.8
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
              "id": "country-trap-hats-v-01",
              "parentPatternId": "country-trap-hats",
              "name": "Hick-Hop Trap Hi-Hats — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                10,
                13,
                14
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999,
                0.5499999999999999,
                0.7,
                0.95
              ],
              "velocityProfile": [
                0.87,
                0.8200000000000001,
                0.47000000000000003,
                0.62,
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
              "id": "country-trap-hats-v-02",
              "parentPatternId": "country-trap-hats",
              "name": "Hick-Hop Trap Hi-Hats — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                10,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                1,
                0.5599999999999999,
                0.83,
                0.96,
                0.63,
                0.61,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.88,
                0.53,
                0.76,
                0.9299999999999999,
                0.48,
                0.6599999999999999,
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const COUNTRY_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "country-pedal-steel-swell",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Pedal Steel Volume Swell",
          "family": "Texture",
          "category": "cell",
          "description": "Crying pedal-steel volume-pedal swells fading in",
          "tags": [
            "country",
            "pedal-steel",
            "texture"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": ["guitar"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            5
          ],
          "accentProfile": [
            0.75,
            1
          ],
          "velocityProfile": [
            0.7,
            0.95
          ],
          "supportedEnergy": [1, 2],
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
              "id": "country-pedal-steel-swell-v-01-safe",
              "parentPatternId": "country-pedal-steel-swell",
              "name": "Pedal Steel Volume Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "country-pedal-steel-swell-v-02-safe",
              "parentPatternId": "country-pedal-steel-swell",
              "name": "Pedal Steel Volume Swell — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                5
              ],
              "accentProfile": [
                0.7,
                1
              ],
              "velocityProfile": [
                0.73,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const COUNTRY_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "country-boom-chuck",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Boom-Chuck",
          "family": "Rhythm",
          "category": "fill",
          "transitionType": "fill",
          "description": "Alternating root/fifth bass and upbeat chord",
          "tags": [
            "country",
            "honky-tonk"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "rhythm-guitar",
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": ["guitar", "bass"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.82,
            0.94,
            0.84
          ],
          "velocityProfile": [
            0.95,
            0.78,
            0.9,
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
              "id": "country-boom-chuck-variant-bluegrass-2-4",
              "parentPatternId": "country-boom-chuck",
              "name": "Bluegrass 2/4",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Fast 2/4 cut-time rhythm with high-speed",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                1,
                0.88,
                0.96,
                0.88
              ],
              "velocityProfile": [
                0.95,
                0.84,
                0.92,
                0.84
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            },
            {
              "id": "country-boom-chuck-variant-country-pop-rock",
              "parentPatternId": "country-boom-chuck",
              "name": "Country Pop Rock",
              "variationType": "instrumentSpecific",
              "probability": 0.18,
              "description": "Straight 8ths rock backbeat for contemporary",
              "onsetGrid": [
                0,
                2,
                4,
                6
              ],
              "accentProfile": [
                0.9,
                1,
                0.85,
                1
              ],
              "velocityProfile": [
                0.85,
                0.95,
                0.8,
                0.95
              ],
              "constraints": [
                "same genre context",
                "use as an alternate voicing/technique"
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];

export const COUNTRY_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "country-outlaw",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Outlaw 8ths",
          "family": "Bass",
          "category": "groove",
          "description": "Heavy driving 8th note bass line",
          "tags": [
            "country",
            "outlaw"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": ["bass"],
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
            0.72,
            0.88,
            0.72,
            0.94,
            0.72,
            0.88,
            0.78
          ],
          "velocityProfile": [
            0.95,
            0.68,
            0.82,
            0.68,
            0.9,
            0.68,
            0.82,
            0.72
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
              "id": "country-outlaw-v-01",
              "parentPatternId": "country-outlaw",
              "name": "Outlaw 8ths — sparse variation",
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
                0.6699999999999999,
                0.83,
                0.6699999999999999,
                0.8899999999999999
              ],
              "velocityProfile": [
                0.87,
                0.6000000000000001,
                0.74,
                0.6000000000000001,
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
              "id": "country-outlaw-v-02",
              "parentPatternId": "country-outlaw",
              "name": "Outlaw 8ths — accent shift",
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
                0.7999999999999999,
                0.84,
                0.7999999999999999,
                0.8999999999999999,
                0.7999999999999999,
                0.84,
                0.86
              ],
              "velocityProfile": [
                1,
                0.66,
                0.7999999999999999,
                0.74,
                0.88,
                0.66,
                0.8799999999999999,
                0.7
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "country-waltz",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Country Waltz",
          "family": "Beat",
          "category": "groove",
          "description": "Classic 3/4 country waltz with accented",
          "tags": [
            "country",
            "waltz"
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
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            2,
            4
          ],
          "accentProfile": [
            1,
            0.75,
            0.7
          ],
          "velocityProfile": [
            0.95,
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
              "id": "country-waltz-v-01",
              "parentPatternId": "country-waltz",
              "name": "Country Waltz — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.87,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6
              ]
            },
            {
              "id": "country-waltz-v-02",
              "parentPatternId": "country-waltz",
              "name": "Country Waltz — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                4
              ],
              "accentProfile": [
                0.96,
                0.83,
                0.6599999999999999
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.63
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "country-western-swing",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Western Swing",
          "family": "Beat",
          "category": "groove",
          "description": "4/4 swung jazzy Texas swing feel",
          "tags": [
            "country",
            "western-swing"
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
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            6,
            9
          ],
          "accentProfile": [
            0.95,
            0.88,
            1,
            0.88
          ],
          "velocityProfile": [
            0.9,
            0.82,
            0.95,
            0.82
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
              "id": "country-western-swing-v-01",
              "parentPatternId": "country-western-swing",
              "name": "Western Swing — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                6,
                9
              ],
              "accentProfile": [
                0.8999999999999999,
                0.83,
                0.95
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.74,
                0.87
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "country-western-swing-v-02",
              "parentPatternId": "country-western-swing",
              "name": "Western Swing — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                9
              ],
              "accentProfile": [
                0.9099999999999999,
                0.96,
                0.96,
                0.96
              ],
              "velocityProfile": [
                0.96,
                0.7999999999999999,
                0.9299999999999999,
                0.8799999999999999
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        },
  {
          "id": "country-nashville",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Nashville Smooth",
          "family": "Beat",
          "category": "groove",
          "description": "Smooth 4/4 session groove with tasteful",
          "tags": [
            "country",
            "contemporary"
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
            12,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.9,
            0.85,
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
              "id": "country-nashville-v-01",
              "parentPatternId": "country-nashville",
              "name": "Nashville Smooth — sparse variation",
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
              "id": "country-nashville-v-02",
              "parentPatternId": "country-nashville",
              "name": "Nashville Smooth — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.98,
                0.9099999999999999,
                0.98,
                0.71
              ],
              "velocityProfile": [
                1,
                0.83,
                0.88,
                0.9099999999999999,
                0.6799999999999999
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "country-chicken",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Chicken Pickin",
          "family": "Guitar",
          "category": "groove",
          "description": "Syncopated muted telecaster lead licks and",
          "tags": [
            "country",
            "guitar"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["groove"],
          "instruments": ["guitar"],
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
            0.75,
            0.9,
            0.75,
            0.95,
            0.75,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.7,
            0.9,
            0.7,
            0.85,
            0.75
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
              "id": "country-chicken-v-01",
              "parentPatternId": "country-chicken",
              "name": "Chicken Pickin — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.85,
                0.7,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.62,
                0.77,
                0.62,
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
              "id": "country-chicken-v-02",
              "parentPatternId": "country-chicken",
              "name": "Chicken Pickin — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.83,
                0.86,
                0.83,
                0.9099999999999999,
                0.83,
                0.86,
                0.88
              ],
              "velocityProfile": [
                1,
                0.6799999999999999,
                0.83,
                0.76,
                0.88,
                0.6799999999999999,
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
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "country-ballad",
          "worldId": "country",
          "styleIds": ["country-americana"],
          "name": "Slow Ballad 6/8",
          "family": "Beat",
          "category": "groove",
          "description": "Emotional 6/8 slow dance ballad groove.",
          "tags": [
            "country",
            "ballad"
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
          "meter": "6/8",
          "cycleLength": 1,
          "subdivisions": 6,
          "onsetGrid": [
            0,
            3
          ],
          "accentProfile": [
            1,
            0.82
          ],
          "velocityProfile": [
            0.95,
            0.78
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
              "id": "country-ballad-v-01-safe",
              "parentPatternId": "country-ballad",
              "name": "Slow Ballad 6/8 — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                3
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.98,
                0.74
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "country-ballad-v-02-safe",
              "parentPatternId": "country-ballad",
              "name": "Slow Ballad 6/8 — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
              "onsetGrid": [
                0,
                3
              ],
              "accentProfile": [
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.98,
                0.74
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Country catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "country"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 52,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "country-comp-14",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Steel Comping",
          "family": "Steel",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports",
          "tags": [
            "country",
            "steel",
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
            0,
            3,
            4,
            6,
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
          "syncopationRating": 0.625,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
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
              "id": "country-comp-14-v-01",
              "parentPatternId": "country-comp-14",
              "name": "Steel Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                6,
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
              "id": "country-comp-14-v-02",
              "parentPatternId": "country-comp-14",
              "name": "Steel Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                6,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "steel"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 1,
          "enabled": true
        },
  {
          "id": "country-verse-16",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Train Verse Variation",
          "family": "Train",
          "category": "groove",
          "description": "A restrained verse variation with intentional",
          "tags": [
            "country",
            "train",
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
          "instruments": ["drums", "percussion", "guitar"],
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
            2,
            4,
            6,
            8,
            11,
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
          "swingPercentage": 52,
          "articulations": ["accented"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "country-verse-16-v-01",
              "parentPatternId": "country-verse-16",
              "name": "Train Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                6,
                8,
                13,
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
              "id": "country-verse-16-v-02",
              "parentPatternId": "country-verse-16",
              "name": "Train Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                6,
                8,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "train"
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
];

export const COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "country-call-12",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Nashville Response",
          "family": "Nashville",
          "category": "interactionPattern",
          "description": "A call-and-response shape that leaves the",
          "tags": [
            "country",
            "nashville",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "resonator-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["resonator-guitar"],
          "compatibleRoles": [
            "resonator-guitar"
          ],
          "compatibleInstruments": [
            "resonator-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1,
            3,
            4,
            6,
            9,
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
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
            0.95,
            0.57
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["breath"],
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
              "id": "country-call-12-v-01",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                4,
                9,
                11
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
              "id": "country-call-12-v-02",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                1,
                3,
                4,
                6,
                9,
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
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999,
                0.8799999999999999,
                0.6,
                1,
                0.5499999999999999
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
              "id": "country-call-12-v-03",
              "parentPatternId": "country-call-12",
              "name": "Nashville Response — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                1,
                3,
                4,
                6,
                9,
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
                0.6,
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
                0.57,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "nashville"
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

export const COUNTRY_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "country-anchor-13",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Chicken Pickin Anchor",
          "family": "Chicken Pickin",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "country",
            "chicken-pickin",
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
            5,
            7,
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
          "swingPercentage": 52,
          "articulations": ["accented"],
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
              "id": "country-anchor-13-v-01",
              "parentPatternId": "country-anchor-13",
              "name": "Chicken Pickin Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                4,
                5,
                10,
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
              "id": "country-anchor-13-v-02",
              "parentPatternId": "country-anchor-13",
              "name": "Chicken Pickin Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "chicken-pickin"
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

export const COUNTRY_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "country-phrase-11",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Train Phrase",
          "family": "Train",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves",
          "tags": [
            "country",
            "train",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "resonator-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["resonator-guitar"],
          "compatibleRoles": [
            "resonator-guitar"
          ],
          "compatibleInstruments": [
            "resonator-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            8,
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
          "syncopationRating": 0.625,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["breath"],
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
              "id": "country-phrase-11-v-01",
              "parentPatternId": "country-phrase-11",
              "name": "Train Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                5,
                10,
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
              "id": "country-phrase-11-v-02",
              "parentPatternId": "country-phrase-11",
              "name": "Train Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "train"
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
          "id": "country--phrasing",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Country Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Storytelling verse vocal placement with room",
          "tags": [
            "country",
            "resonator-guitar",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "resonator-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": ["resonator-guitar"],
          "compatibleRoles": [
            "resonator-guitar",
            "lead"
          ],
          "compatibleInstruments": [
            "resonator-guitar"
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
              "id": "country--phrasing-v--alt",
              "parentPatternId": "country--phrasing",
              "name": "Country Vocal Phrasing — alternate phrasing",
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
              "id": "country--phrasing-v-final-accent",
              "parentPatternId": "country--phrasing",
              "name": "Country Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Country.",
          "authenticityTags": [
            "country",
            "resonator-guitar"
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

export const COUNTRY_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "country-intro-15",
          "worldId": "country",
          "styleIds": ["country-honky-tonk"],
          "name": "Boom-Chuck Intro",
          "family": "Boom-Chuck",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "country",
            "boom-chuck",
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
          "meter": "3/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            2,
            4,
            5,
            8
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 52,
          "articulations": ["accented"],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "country-intro-15-v-01",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                1,
                4,
                5
              ],
              "accentProfile": [
                0.95,
                0.69,
                0.85
              ],
              "velocityProfile": [
                0.92,
                0.61,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "country-intro-15-v-02",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                8
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5,
                2
              ]
            },
            {
              "id": "country-intro-15-v-03",
              "parentPatternId": "country-intro-15",
              "name": "Boom-Chuck Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                1,
                2,
                4,
                5,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Country world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "country",
            "boom-chuck"
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

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "fill": COUNTRY_WORLD_PATTERNS_FILL,
  "break": COUNTRY_WORLD_PATTERNS_BREAK,
  "cadence": COUNTRY_WORLD_PATTERNS_CADENCE,
  "groove": COUNTRY_WORLD_PATTERNS_GROOVE,
  "cell": COUNTRY_WORLD_PATTERNS_CELL,
  "phrasePattern": COUNTRY_WORLD_PATTERNS_PHRASEPATTERN,
  "interactionPattern": COUNTRY_WORLD_PATTERNS_INTERACTIONPATTERN,
  "ostinato": COUNTRY_WORLD_PATTERNS_OSTINATO,
  "sectionPattern": COUNTRY_WORLD_PATTERNS_SECTIONPATTERN,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"cell","index":0},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"phrasePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":0},{"category":"groove","index":6},{"category":"sectionPattern","index":0},{"category":"groove","index":7},{"category":"phrasePattern","index":1}];

export const COUNTRY_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
