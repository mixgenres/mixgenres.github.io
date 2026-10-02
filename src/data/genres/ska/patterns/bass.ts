import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "sk-07-walking-ska-bass",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska walking bass contour",
          "family": "First-Wave Ska",
          "category": "bass",
          "description": "Walking bass contour with an approach",
          "tags": [
            "walking bass"
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
            2,
            4,
            7,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.68,
            0.82,
            0.7,
            0.9,
            0.68,
            0.82,
            0.7
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "walking bass"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "walking bass"
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
