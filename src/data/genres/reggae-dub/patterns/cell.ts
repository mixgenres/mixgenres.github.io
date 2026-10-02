import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "rd-07-skank-guitar",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Skank Guitar",
          "family": "Roots Reggae",
          "category": "cell",
          "description": "Short clipped guitar chord on the",
          "tags": [
            "skank"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "electric-guitar",
            "guitar"
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
            0.72,
            0.68,
            0.7,
            0.75
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "skank"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "rd-09-bubble-organ",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Bubble Organ",
          "family": "Roots Reggae",
          "category": "cell",
          "description": "Short organ bubble fills the offbeat",
          "tags": [
            "organ bubble"
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
            "organ"
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
            0.5,
            0.62,
            0.48,
            0.66
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "organ bubble"
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
