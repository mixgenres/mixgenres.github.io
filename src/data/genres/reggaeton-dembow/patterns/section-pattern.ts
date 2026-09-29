import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rg-12-reggaeton-hook-lift",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Reggaeton Hook Dembow Lift",
          "family": "Dembow",
          "category": "sectionPattern",
          "description": "Two-bar chorus variation: the core dembow",
          "tags": [
            "hook lift",
            "dembow",
            "chorus"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            11,
            12,
            14,
            16,
            19,
            20,
            22,
            24,
            27,
            28,
            30
          ],
          "hitGrid": [
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "kick",
            "snare",
            "clap",
            "kick"
          ],
          "accentProfile": [
            1,
            0.72,
            0.9,
            0.65,
            0.88,
            0.7,
            0.82,
            0.62,
            1,
            0.72,
            0.92,
            0.7,
            0.9,
            0.68,
            0.86,
            0.94
          ],
          "syncopationRating": 0.54,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern rebuilt as a single-track dembow performance cell; no mixed-layer recipe.",
          "authenticityTags": [
            "dembow",
            "chorus variation",
            "clap punctuation"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];
