import type { MusicalPattern } from '../../../schema';

export const FUNK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "funk-the-one-bass",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "\"The One\" 16th-Note Syncopated Bass",
          "family": "Funk Basslines",
          "category": "ostinato",
          "description": "Explosive root hit on beat 1",
          "tags": [
            "funk",
            "bass",
            "slap",
            "the-one",
            "james-brown",
            "groove"
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
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.6,
            0.9,
            0.8,
            0.6,
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            1,
            0.6,
            0.85,
            0.75,
            0.55,
            0.9,
            0.65,
            0.8
          ],
          "articulations": ["ghost"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo",
            "vamp"
          ],
          "variants": [
            {
              "id": "funk-jamerson-motown-bass",
              "parentPatternId": "funk-the-one-bass",
              "name": "James Jamerson Melodic Walking Soul Line",
              "variationType": "ornamented",
              "probability": 0.5,
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
                0.95,
                0.7,
                0.85,
                0.9,
                0.75,
                0.95,
                0.8
              ],
              "description": "Syncopated melodic bassline using chromatic enclosures"
            },
            {
              "id": "funk-the-one-bass-v-02",
              "parentPatternId": "funk-the-one-bass",
              "name": "\"The One\" 16th-Note Syncopated Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.96,
                0.6799999999999999,
                0.86,
                0.88,
                0.5599999999999999,
                1,
                0.6599999999999999,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.83,
                0.81,
                0.53,
                0.88,
                0.71,
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
          "weight": 0.7,
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "funk-chicken-scratch-guitar",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Chicken-Scratch 9th Chords (Muted 16th Strum)",
          "family": "Funk Guitar",
          "category": "ostinato",
          "description": "Rapid 16th-note muted rhythmic scratches with",
          "tags": [
            "guitar",
            "funk",
            "chicken-scratch",
            "9th-chords",
            "rhythm"
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
            "rhythm-guitar"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "electric-guitar",
            "guitar"
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
            0.9,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.95,
            0.3,
            0.9,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.95,
            0.3
          ],
          "velocityProfile": [
            0.85,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.9,
            0.3,
            0.85,
            0.3,
            0.4,
            0.3,
            1,
            0.3,
            0.9,
            0.3
          ],
          "articulations": ["accent"],
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
              "id": "funk-guitar-sparse-chank",
              "parentPatternId": "funk-chicken-scratch-guitar",
              "name": "Single-Chord Syncopated \"Chank\"",
              "variationType": "sparse",
              "probability": 0.5,
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                1,
                1,
                1,
                1
              ],
              "description": "Clean, isolated off-beat chord stabs leaving"
            },
            {
              "id": "funk-chicken-scratch-guitar-v-02",
              "parentPatternId": "funk-chicken-scratch-guitar",
              "name": "Chicken-Scratch 9th Chords (Muted 16th Strum) — accent shift",
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
                0.86,
                0.4,
                0.4,
                0.4,
                0.96,
                0.4,
                0.9099999999999999,
                0.4,
                0.86,
                0.4,
                0.4,
                0.4,
                0.96,
                0.4,
                0.9099999999999999,
                0.4
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.4,
                0.4,
                0.4,
                0.98,
                0.4,
                0.96,
                0.4,
                0.83,
                0.4,
                0.4,
                0.4,
                1,
                0.4,
                0.88,
                0.4
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
          "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "funk"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    },
  {
          "id": "funk-anchor-15",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Pocket Anchor",
          "family": "Pocket",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "funk",
            "pocket",
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
              "id": "funk-anchor-15-v-01",
              "parentPatternId": "funk-anchor-15",
              "name": "Pocket Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "id": "funk-anchor-15-v-02",
              "parentPatternId": "funk-anchor-15",
              "name": "Pocket Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
          "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "funk",
            "pocket"
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
