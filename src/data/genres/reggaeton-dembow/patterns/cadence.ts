import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "rg-15-reggaeton-tag-turn",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Dembow tag turnaround",
          "family": "Cadence",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Four-hit turnaround into the next loop",
          "tags": [
            "tag",
            "transition"
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
            "drums",
            "claves"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            11,
            13,
            14,
            15
          ],
          "hitGrid": [
            "snare",
            "clap",
            "snare",
            "clap"
          ],
          "accentProfile": [
            0.75,
            1,
            0.75,
            1
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" transition"],
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
            "transition"
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
