import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "sk-horn-answer",
          "worldId": "ska",
          "styleIds": ["ska-trad-ska"],
          "name": "Horn Section Answer",
          "family": "Ska Horns",
          "category": "interactionPattern",
          "description": "Short brass riff answers the guitar/vocal",
          "tags": [
            "ska",
            "horn",
            "answer"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "trombone"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            16,
            20,
            22,
            24,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7
          ],
          "velocityProfile": [
            0.92,
            0.62,
            0.86,
            0.58,
            0.84,
            0.64
          ],
          "syncopationRating": 0.72,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "staccato"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [
            {
              "id": "sk-horn-answer-v-sparse",
              "parentPatternId": "sk-horn-answer",
              "name": "Horn Section Answer — sparse",
              "variationType": "sparse",
              "probability": 0.35,
              "description": "Leaves selected attacks open to create a more spacious, dub-influenced pocket.",
              "onsetGrid": [
                16,
                22,
                28
              ],
              "accentProfile": [
                0.9,
                0.65,
                0.9
              ]
            },
            {
              "id": "sk-horn-answer-v-shift",
              "parentPatternId": "sk-horn-answer",
              "name": "Horn Section Answer — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Retains the core cell while shifting its emphasis for a subtle variation.",
              "onsetGrid": [
                16,
                20,
                22,
                24,
                28,
                30
              ],
              "accentProfile": [
                0.95,
                0.7,
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
            "horn",
            "answer"
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
          "id": "sk-08-horn-section-answer",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Horn Section Answer",
          "family": "First-Wave Ska",
          "category": "interactionPattern",
          "description": "Short horn riff responds after vocal/guitar",
          "tags": [
            "horn answer"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "horn-section"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "trumpet",
            "trombone",
            "alto-sax"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            8,
            10,
            12,
            24,
            26,
            28
          ],
          "accentProfile": [
            0.65,
            0.72,
            0.85,
            0.62,
            0.7,
            0.9
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "horn answer"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "horn answer"
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
