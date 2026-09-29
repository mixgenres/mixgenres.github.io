import type { MusicalPattern } from '../../../schema';

export const SKA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "sk-15-ska-final-shout",
          "worldId": "ska",
          "styleIds": ["ska-two-tone"],
          "name": "Ska Final Shout",
          "family": "Cadence",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Full-band accent sequence for the ending,",
          "tags": [
            "final hit"
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
            "horn-section",
            "guitar"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.7,
            0.82,
            0.75,
            1
          ],
          "syncopationRating": 0.2,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [
            "final hit"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "final hit"
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
