import type { MusicalPattern } from '../../../schema';

export const SWING_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "swing-shout-chorus",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Shout Chorus Ensemble Hits",
          "family": "Ensemble",
          "category": "sectionPattern",
          "description": "Full horn section and rhythm section",
          "tags": [
            "swing",
            "big-band",
            "shout-chorus"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "keys",
            "trumpet",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys",
            "trumpet",
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            4,
            8,
            11,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.7,
            0.95,
            0.8,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.65,
            0.9,
            0.75,
            0.85
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "coda"
          ],
          "variants": [
            {
              "id": "swing-shout-chorus-v-01",
              "parentPatternId": "swing-shout-chorus",
              "name": "Shout Chorus Ensemble Hits — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.7999999999999999,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.7200000000000001,
                0.5700000000000001,
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
              "id": "swing-shout-chorus-v-02",
              "parentPatternId": "swing-shout-chorus",
              "name": "Shout Chorus Ensemble Hits — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                11,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.6599999999999999,
                1,
                0.76,
                0.98
              ],
              "velocityProfile": [
                1,
                0.78,
                0.63,
                0.96,
                0.73,
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
            },
            {
              "id": "swing-shout-chorus-v-03",
              "parentPatternId": "swing-shout-chorus",
              "name": "Shout Chorus Ensemble Hits — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                3,
                4,
                8,
                11,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.98,
                0.83,
                0.6799999999999999,
                0.9299999999999999,
                0.78,
                0.88,
                1,
                1
              ],
              "velocityProfile": [
                0.95,
                0.8,
                0.65,
                0.9,
                0.75,
                0.85,
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
    
          "difficulty": 2,
          "weight": 0.7,
          "provenance": "Swing catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "swing"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        },
  {
          "id": "swing-intro-14",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Turnaround Intro",
          "family": "Turnaround",
          "category": "sectionPattern",
          "description": "A reduced entrance used to establish",
          "tags": [
            "swing",
            "turnaround",
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
            0,
            2,
            3,
            6,
            8,
            9,
            11
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
          "swingPercentage": 66,
          "articulations": ["accented"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start"
          ],
          "sectionUsage": [
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "swing-intro-14-v-01",
              "parentPatternId": "swing-intro-14",
              "name": "Turnaround Intro — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                11
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
              "id": "swing-intro-14-v-02",
              "parentPatternId": "swing-intro-14",
              "name": "Turnaround Intro — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                6,
                8,
                9,
                11
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
            },
            {
              "id": "swing-intro-14-v-03",
              "parentPatternId": "swing-intro-14",
              "name": "Turnaround Intro — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                2,
                3,
                6,
                8,
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "turnaround"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "swing-chorus-16",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "La Pompe Chorus Lift",
          "family": "La Pompe",
          "category": "sectionPattern",
          "description": "A higher-energy chorus layer that increases",
          "tags": [
            "swing",
            "la-pompe",
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
            "piano"
          ],
          "compatibleRoles": [
            "pulse",
            "harmony",
            "drums"
          ],
          "compatibleInstruments": [
            "drums",
            "percussion",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            4,
            5,
            8,
            10,
            11,
            13
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
          "anticipationOffset": 1,
          "swingPercentage": 66,
          "articulations": ["accented"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "swing-chorus-16-v-01",
              "parentPatternId": "swing-chorus-16",
              "name": "La Pompe Chorus Lift — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                5,
                8,
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
              "id": "swing-chorus-16-v-02",
              "parentPatternId": "swing-chorus-16",
              "name": "La Pompe Chorus Lift — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                5,
                8,
                10,
                11,
                13
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
            },
            {
              "id": "swing-chorus-16-v-03",
              "parentPatternId": "swing-chorus-16",
              "name": "La Pompe Chorus Lift — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                2,
                4,
                5,
                8,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "la-pompe"
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
