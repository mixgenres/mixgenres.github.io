import type { MusicalPattern } from '../../../schema';

export const REGGAE_DUB_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
          "id": "rd-10-dub-echo-fragment",
          "worldId": "reggae-dub",
          "styleIds": ["dub"],
          "name": "Dub Echo Fragment",
          "family": "Dub",
          "category": "texture",
          "description": "Isolated snare/perc fragment sent into echo/reverb",
          "tags": [
            "dub",
            "echo",
            "send"
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
            "snare",
            "shaker"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            12
          ],
          "accentProfile": [
            0.7,
            0.55
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" echo"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Dub; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "dub",
            "echo",
            "send"
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
