import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "cu-06-cumbia-bass-tumbao",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana"],
          "name": "Cumbia tumbao bass",
          "family": "Colombian Cumbia",
          "category": "bass",
          "description": "A syncopated tumbao-like bass cycle used",
          "tags": [
            "tumbao",
            "bass"
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
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.9,
            0.55,
            0.75,
            0.7,
            0.6,
            0.82
          ],
          "syncopationRating": 0.67,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "tumbao",
            " bass"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Colombian Cumbia; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tumbao",
            "bass"
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
