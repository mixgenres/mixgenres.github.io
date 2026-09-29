import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "rd-15-dub-version-tag",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub Version Tag",
          "family": "Dub",
          "category": "cadence",
          "transitionType": "fill",
          "description": "A short bass-and-drum tag announces a",
          "tags": [
            "version",
            "tag"
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
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            8,
            12,
            15
          ],
          "accentProfile": [
            0.65,
            0.78,
            1
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" tag"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "bridge",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "version",
            "tag"
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
