import type { MusicalPattern } from '../../../schema';

export const HOUSE_TECHNO_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "ht-08-house-bass-lock",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit", "house-techno-melodic-techno"],
          "name": "House Bass Lock",
          "family": "House",
          "category": "bass",
          "description": "Short bass notes interlock with kick",
          "tags": [
            "bass lock"
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
            "sub-bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            6,
            9,
            13
          ],
          "accentProfile": [
            0.7,
            0.6,
            0.78,
            0.65
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
            "groove",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on House; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bass lock"
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
