import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_TRANSITION: MusicalPattern[] = [
  {
          "id": "flam-llamada-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style", "flamenco-solea-style"],
          "name": "Llamada into Cante",
          "family": "Cante/Guitar Interaction",
          "category": "transition",
          "transitionType": "fill",
          "description": "Short guitar-and-compás calling gesture that announces",
          "tags": [
            "llamada",
            "solea",
            "transition"
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
            "lead",
            "pulse"
          ],
    
          "approaches": ["comping", "phrase", "groove"],
          "instruments": [
            "guitar"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            9,
            10,
            11,
            0,
            2
          ],
          "accentProfile": [
            0.55,
            0.75,
            1,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.89,
            0.93,
            0.98,
            0.96,
            0.93
          ],
          "syncopationRating": 0.4,
          "articulations": [
            "golpe + rasgueado"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end",
            "start"
          ],
          "sectionUsage": [
            "intro",
            "verse",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "flam-llamada-12-v2",
              "parentPatternId": "flam-llamada-12",
              "name": "Llamada with final golpe",
              "variationType": "transition",
              "probability": 0.4,
              "description": "Tightens the final two beats into",
              "onsetGrid": [
                9,
                10,
                11,
                0,
                1,
                2
              ],
              "accentProfile": [
                0.6,
                0.8,
                1,
                0.9,
                0.65,
                0.95
              ],
              "velocityProfile": [
                0.9,
                0.94,
                0.98,
                0.96,
                0.91,
                0.97
              ]
            }
          ],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-solea-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.97,
          "enabled": true
        }
];
