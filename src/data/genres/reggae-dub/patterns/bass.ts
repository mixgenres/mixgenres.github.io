import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "rd-08-reggae-bass-lead",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Reggae Bass Lead",
          "family": "Roots Reggae",
          "category": "bass",
          "description": "Longer, melodic bass line with rests;",
          "tags": [
            "bass-led"
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
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            6,
            9,
            14,
            16,
            22,
            25,
            30
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.75,
            0.55,
            0.88,
            0.62,
            0.72,
            0.58
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Roots Reggae; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bass-led"
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
