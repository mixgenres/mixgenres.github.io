import type { MusicalPattern } from '../../../schema';

export const TIMBA_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "timba-songo-groove",
          "worldId": "timba",
          "styleIds": ["timba-havana-modern"],
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
