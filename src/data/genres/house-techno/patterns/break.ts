import type { MusicalPattern } from '../../../schema';

export const HOUSE_TECHNO_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "ht-14-club-breakdown",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit"],
          "name": "Club Breakdown",
          "family": "Arrangement",
          "category": "break",
          "transitionType": "fill",
          "description": "Remove kick and bass for a",
          "tags": [
            "breakdown",
            "tension"
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
            "warm-pad",
            "polysynth"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            12,
            20
          ],
          "accentProfile": [
            0.55,
            0.4,
            0.75
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" tension"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "start",
            "end"
          ],
          "sectionUsage": [
            "breakdown"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Arrangement; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "breakdown",
            "tension"
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
