import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "rg-14-modern-dembow-triplet-fill",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Modern Dembow Phrase-End Turn",
          "family": "Fill",
          "category": "fill",
          "transitionType": "fill",
          "description": "A short 16th-note phrase-end turn that",
          "tags": [
            "fill",
            "phrase end",
            "16th subdivision"
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
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            12,
            14,
            15
          ],
          "hitGrid": [
            "snare",
            "clap",
            "kick"
          ],
          "accentProfile": [
            0.58,
            0.76,
            0.96
          ],
          "syncopationRating": 0.72,
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
          "provenance": "Authored genre-pack pattern based on Fill; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "phrase-end fill",
            "16th subdivision"
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
