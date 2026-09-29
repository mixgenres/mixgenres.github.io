import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "sk-14-ska-break-call",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska Break Call",
          "family": "Break",
          "category": "break",
          "transitionType": "fill",
          "description": "Band stop followed by horn pickup",
          "tags": [
            "stop-time",
            "pickup"
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
            "horn-section"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            12,
            14
          ],
          "accentProfile": [
            0.8,
            0.55,
            0.9
          ],
          "syncopationRating": 0.33,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "stop-time",
            " pickup"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "bridge",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stop-time",
            "pickup"
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
