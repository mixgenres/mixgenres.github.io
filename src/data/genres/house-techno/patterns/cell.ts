import type { MusicalPattern } from '../../../schema';

export const HOUSE_TECHNO_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "ht-09-house-chord-stab",
          "worldId": "house-techno",
          "styleIds": ["techno-detroit", "house-techno-melodic-techno"],
          "name": "House Chord Stab",
          "family": "House",
          "category": "cell",
          "description": "Syncopated chord stab on the offbeat",
          "tags": [
            "stab",
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
            "piano",
            "polysynth"
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
            0.65,
            0.72,
            0.68
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" offbeat"],
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
            "stab",
            "offbeat"
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
