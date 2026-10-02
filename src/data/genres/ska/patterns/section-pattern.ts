import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "sk-10-rocksteady-transition",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Rocksteady Transition",
          "family": "Ska → Rocksteady",
          "category": "sectionPattern",
          "description": "Reduce tempo feel and rhythmic density,",
          "tags": [
            "rocksteady"
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
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.85,
            0.5,
            0.7,
            0.55
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "rocksteady"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "bridge",
            "breakdown"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Ska → Rocksteady; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "rocksteady"
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
