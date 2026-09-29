import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "sk-offbeat-chop",
          "worldId": "ska",
          "styleIds": ["ska-first-wave"],
          "name": "Ska Offbeat Chop",
          "family": "Ska Skank",
          "category": "ostinato",
          "description": "Short guitar/piano attacks on every offbeat,",
          "tags": [
            "ska",
            "upstroke",
            "offbeat"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "electric-guitar",
            "piano"
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
            1,
            0.72,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.78,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "upstroke"
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
    
    
    
          "variants": [
            {
              "id": "sk-offbeat-chop-v-sparse",
              "parentPatternId": "sk-offbeat-chop",
              "name": "Ska Offbeat Chop — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                2,
                10
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "sk-offbeat-chop-v-shift",
              "parentPatternId": "sk-offbeat-chop",
              "name": "Ska Offbeat Chop — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "ska",
            "upstroke",
            "offbeat"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        },
  {
          "id": "sk-rocksteady-bass",
          "worldId": "ska",
          "styleIds": ["ska-rocksteady-bridge"],
          "name": "Rocksteady Bass Hold",
          "family": "Rocksteady Bass",
          "category": "ostinato",
          "description": "Longer bass notes and fewer attacks",
          "tags": [
            "rocksteady",
            "bass",
            "reggae"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass",
            "upright-bass"
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
            0.72,
            0.9,
            0.65
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58
          ],
          "syncopationRating": 0.35,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "legato"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "bridge",
            "chorus"
          ],
    
    
    
          "variants": [
            {
              "id": "sk-rocksteady-bass-v-sparse",
              "parentPatternId": "sk-rocksteady-bass",
              "name": "Rocksteady Bass Hold — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                0,
                8
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "sk-rocksteady-bass-v-shift",
              "parentPatternId": "sk-rocksteady-bass",
              "name": "Rocksteady Bass Hold — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95,
                0.7
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "rocksteady",
            "bass",
            "reggae"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.85,
          "enabled": true
        }
];
