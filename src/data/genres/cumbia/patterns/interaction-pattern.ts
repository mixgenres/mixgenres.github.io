import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "cu-13-cumbia-call-and-response",
          "worldId": "cumbia",
          "styleIds": ["cumbia-electric"],
          "name": "Cumbia Call-and-Response",
          "family": "Melody",
          "category": "interactionPattern",
          "description": "Lead phrase is answered by guitar/organ",
          "tags": [
            "call-response"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "counterline"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "electric-guitar",
            "organ"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            18,
            22,
            26,
            30
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.7,
            0.55,
            0.78,
            0.62,
            0.72,
            0.6
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "call-response"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Melody; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "call-response"
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
