import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "rg-09-reggaeton-piano-stab",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Reggaetón piano offbeat stab",
          "family": "Harmony",
          "category": "cell",
          "description": "Short piano/synth anticipations that leave the",
          "tags": [
            "stabs",
            "offbeat"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "harmony"
          ],
    
          "approaches": ["comping"],
          "instruments": [
            "piano",
            "polysynth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.55,
            0.72,
            0.58,
            0.8
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" offbeat"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Harmony; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stabs",
            "offbeat"
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
