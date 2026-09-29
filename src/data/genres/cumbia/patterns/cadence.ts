import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "cu-15-cumbia-final-tag",
          "worldId": "cumbia",
          "styleIds": ["cumbia-electric"],
          "name": "Cumbia Final Tag",
          "family": "Cadence",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Compact percussion and bass tag to",
          "tags": [
            "tag",
            "cadence"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "fill"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "bass",
            "cumbia-drum"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            8,
            12,
            14
          ],
          "accentProfile": [
            0.65,
            0.8,
            1
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "tag",
            " cadence"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "tag",
            "cadence"
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
