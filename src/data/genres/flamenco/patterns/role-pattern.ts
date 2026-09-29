import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "flam-alzapua-bass",
          "worldId": "flamenco",
          "styleIds": ["flamenco-bulerias"],
          "name": "Alzapúa Thumb Technique (Bass Driver)",
          "family": "Thumb Virtuosity",
          "category": "rolePattern",
          "description": "Iconic three-stroke thumb mechanic: down-stroke on",
          "tags": [
            "alzapua",
            "thumb",
            "bass",
            "guitar",
            "virtuoso"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track"
          ],
          "roles": [
            "bass",
            "harmony",
            "counterline"
          ],
    
          "approaches": ["walking", "comping"],
          "instruments": [
            "guitar",
            "electric-guitar",
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            1.5,
            3,
            4,
            5.5,
            7
          ],
          "accentProfile": [
            0.95,
            0.4,
            0.85,
            0.95,
            0.4,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.4,
            0.85,
            0.95,
            0.4,
            0.85
          ],
          "articulations": [
            "alzapua",
            "golpe",
            "pulgar-apoyando"
          ],
          "hitGrid": [
            "alzapua",
            "alzapua",
            "golpe",
            "alzapua",
            "alzapua",
            "golpe"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "solo",
            "chorus",
            "development"
          ],
          "variants": [
            {
              "id": "flam-alzapua-syncopated",
              "parentPatternId": "flam-alzapua-bass",
              "name": "Alzapúa with Off-Beat Punch",
              "variationType": "syncopated",
              "probability": 0.5,
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
                0.8,
                0.9,
                0.8,
                1,
                0.8,
                0.9,
                0.85
              ],
              "description": "Polyrhythmic thumb grouping cutting across the"
            },
            {
              "id": "flam-alzapua-bass-v-02",
              "parentPatternId": "flam-alzapua-bass",
              "name": "Alzapúa Thumb Technique (Bass Driver) — accent shift",
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
                0.58,
                0.6599999999999999,
                1,
                0.46,
                0.7799999999999999,
                0.96,
                0.58,
                0.6599999999999999,
                0.98,
                0.46,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.48,
                0.6799999999999999,
                0.96,
                0.48,
                0.6799999999999999,
                1,
                0.48,
                0.6799999999999999,
                0.9099999999999999,
                0.48,
                0.6799999999999999
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
          "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "flamenco"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
        },
  {
          "id": "flam-solea-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style", "flamenco-solea-style"],
          "name": "Soleá Palmas Contratiempo",
          "family": "Palmas",
          "category": "rolePattern",
          "description": "Cupped and clear hand-clap dialogue that",
          "tags": [
            "solea",
            "palmas",
            "contratiempo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            1,
            3,
            4,
            6,
            8,
            10
          ],
          "accentProfile": [
            0.35,
            0.7,
            0.45,
            0.68,
            0.5,
            0.7,
            0.5
          ],
          "velocityProfile": [
            0.85,
            0.92,
            0.87,
            0.92,
            0.88,
            0.92,
            0.88
          ],
          "syncopationRating": 0.29,
          "articulations": [
            "palmas-sordas/claras"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
    
    
          "variants": [],
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
          "weight": 0.94,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-buleria-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style", "flamenco-buleria-style"],
          "name": "Bulería Palmas Contratiempo",
          "family": "Bulería Palmas",
          "category": "rolePattern",
          "description": "Fast clear/contratiempo palmas that articulate the",
          "tags": [
            "buleria",
            "palmas",
            "contratiempo",
            "jaleo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            3,
            5,
            7,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.5,
            0.8,
            0.55,
            0.8,
            1,
            0.55,
            0.8,
            0.95
          ],
          "velocityProfile": [
            0.88,
            0.94,
            0.89,
            0.94,
            0.98,
            0.89,
            0.94,
            0.97
          ],
          "syncopationRating": 0.62,
          "articulations": [
            "palmas-claras"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "ending"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-buleria-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.98,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-alzapua-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style", "flamenco-buleria-style"],
          "name": "Alzapúa over 12-Beat Compás",
          "family": "Thumb Technique",
          "category": "rolePattern",
          "description": "Thumb-driven bass/brush engine used as a",
          "tags": [
            "buleria",
            "alzapua",
            "pulgar"
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
            "harmony",
            "counterline"
          ],
    
          "approaches": ["walking", "comping"],
          "instruments": [
            "guitar"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            11,
            0,
            2,
            4,
            5,
            7,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.55,
            0.9,
            0.5,
            0.7,
            0.95,
            0.5,
            0.9,
            1
          ],
          "velocityProfile": [
            0.98,
            0.89,
            0.96,
            0.88,
            0.92,
            0.97,
            0.88,
            0.96,
            0.98
          ],
          "syncopationRating": 0.56,
          "articulations": [
            "alzapúa"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "solo",
            "chorus"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-buleria-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.96,
          "enabled": true
        },
  {
          "id": "flam-alegrias-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-alegrias-style", "flamenco-alegrias-style"],
          "name": "Alegrías Palmas",
          "family": "Cantiñas Palmas",
          "category": "rolePattern",
          "description": "Clear, buoyant palmas for Alegrías, brighter",
          "tags": [
            "alegrias",
            "palmas",
            "cadiz"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            9,
            11
          ],
          "accentProfile": [
            0.45,
            0.8,
            0.45,
            0.7,
            0.95,
            0.75,
            0.95
          ],
          "velocityProfile": [
            0.87,
            0.94,
            0.87,
            0.92,
            0.97,
            0.93,
            0.97
          ],
          "syncopationRating": 0.57,
          "articulations": [
            "palmas-claras"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-alegrias-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.95,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-seguiriya-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-seguiriya-style", "flamenco-seguiriya-style"],
          "name": "Seguiriya Sparse Palmas",
          "family": "Seguiriya Palmas",
          "category": "rolePattern",
          "description": "Restrained hand percussion for cante jondo:",
          "tags": [
            "seguiriya",
            "palmas",
            "jondo",
            "sparse"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            2,
            4,
            7,
            10
          ],
          "accentProfile": [
            0.7,
            0.8,
            0.85,
            1
          ],
          "velocityProfile": [
            0.92,
            0.94,
            0.95,
            0.98
          ],
          "syncopationRating": 0.25,
          "articulations": [
            "palmas-sordas"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-seguiriya-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.94,
          "enabled": true,
          "canCrossRole": true
        },
  {
          "id": "flam-tientos-palmas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-tientos-style", "flamenco-tientos-style"],
          "name": "Tientos Sparse Palmas",
          "family": "Tientos Palmas",
          "category": "rolePattern",
          "description": "Measured palmas supporting tientos without turning",
          "tags": [
            "tientos",
            "palmas",
            "sparse"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "hand-percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "palmas"
          ],
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
            0.7,
            0.85,
            0.75,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.95,
            0.93,
            0.96
          ],
          "syncopationRating": 0.0,
          "articulations": [
            "palmas-sordas"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-tientos-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.93,
          "enabled": true,
          "canCrossRole": true
        }
];
