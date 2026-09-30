import type { MusicalPattern } from '../../../schema';

export const HIP_HOP_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "hip-hop--phrasing",
          "worldId": "hip-hop",
          "styleIds": ["hip-hop-boom-bap"],
          "name": "Rap Cadence & Hook",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Rap cadence and hook placement shape the vocal phrase.",
          "tags": [
            "hip-hop",
            "synth",
            "vocal-phrasing",
            "catalog-v2",
            "sample-loop"
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
            1,
            0.65,
            0.8,
            0.58,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.92,
            0.6,
            0.78,
            0.55,
            0.88,
            0.64
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
              "id": "hip-hop--phrasing-v1",
              "parentPatternId": "hip-hop--phrasing",
              "name": "Rap Cadence & Hook — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Reduced-density repeat.",
              "onsetGrid": [
                0,
                3,
                10,
                15
              ],
              "accentProfile": [
                1,
                0.65,
                0.95,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.86,
                0.64
              ]
            },
            {
              "id": "hip-hop--phrasing-v2",
              "parentPatternId": "hip-hop--phrasing",
              "name": "Rap Cadence & Hook — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Shifted emphasis repeat.",
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
                0.7,
                0.75,
                0.68,
                1,
                0.62
              ],
              "velocityProfile": [
                0.86,
                0.62,
                0.72,
                0.58,
                0.92,
                0.56
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Global Urban Beat.",
          "authenticityTags": [
            "hip-hop",
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
