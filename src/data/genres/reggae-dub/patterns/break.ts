import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "rd-dub-drop",
          "worldId": "reggae-dub",
          "styleIds": ["reggae-dub"],
          "name": "Dub Dropout & Echo Fragment",
          "family": "Dub Space",
          "category": "break",
          "transitionType": "fill",
          "description": "Removes selected skank/drum attacks and leaves",
          "tags": [
            "dub",
            "dropout",
            "echo"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar",
            "organ",
            "horn-section"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            8,
            14
          ],
          "accentProfile": [
            1,
            0.72,
            0.9
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86
          ],
          "syncopationRating": 0.65,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "delay"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "rd-dub-drop-v-sparse",
              "parentPatternId": "rd-dub-drop",
              "name": "Dub Dropout & Echo Fragment — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open for a",
              "onsetGrid": [
                2,
                14
              ],
              "accentProfile": [
                0.9,
                0.65
              ]
            },
            {
              "id": "rd-dub-drop-v-shift",
              "parentPatternId": "rd-dub-drop",
              "name": "Dub Dropout & Echo Fragment — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the cell while moving emphasis",
              "onsetGrid": [
                2,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.7,
                0.95
              ]
            }
          ],
          "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
          "authenticityTags": [
            "dub",
            "dropout",
            "echo"
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
          "id": "rd-11-dub-dropout",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub subtraction / return",
          "family": "Dub",
          "category": "break",
          "transitionType": "fill",
          "description": "Bass/drum dropout with a final pickup",
          "tags": [
            "dropout",
            "version"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "texture"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "bass",
            "drums",
            "dub-echo"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            15
          ],
          "accentProfile": [
            0.9,
            0.65
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "dropout",
            " version"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "end"
          ],
          "sectionUsage": [
            "breakdown"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dropout",
            "version"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        }
];
