import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rd-14-dub-horn-reply",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub Horn Reply",
          "family": "Dub / Roots",
          "category": "interactionPattern",
          "description": "Short horn stab answers a vocal",
          "tags": [
            "horn reply"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "lead"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "trombone"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            8,
            12,
            24,
            28
          ],
          "accentProfile": [
            0.65,
            0.8,
            0.6,
            0.78
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "chorus",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub / Roots; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "horn reply"
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
