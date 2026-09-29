import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "cu-09-cumbia-guitar-offbeat",
          "worldId": "cumbia",
          "styleIds": ["cumbia-electric"],
          "name": "Cumbia guitar anticipations",
          "family": "Cumbia Guitar",
          "category": "cell",
          "description": "Short anticipated guitar attacks that sit",
          "tags": [
            "offbeat guitar",
            "cumbia"
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
            1,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.62,
            0.7,
            0.58,
            0.78
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "offbeat guitar",
            " cumbia"
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
          "provenance": "Authored genre-pack pattern based on Cumbia Guitar; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "offbeat guitar",
            "cumbia"
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
