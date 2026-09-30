import type { MusicalPattern } from '../../../schema';

export const CUMBIA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "cu-14-cumbia-stop-break",
          "worldId": "cumbia",
          "styleIds": ["cumbia-colombiana", "cumbia-sonora", "cumbia-porro"],
          "name": "Cumbia Stop Break",
          "family": "Break",
          "category": "break",
          "transitionType": "fill",
          "description": "Band cuts the scraper and bass",
          "tags": [
            "stop-time",
            "re-entry"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "drums",
            "guiro"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            1,
            0.75
          ],
          "syncopationRating": 0,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "stop-time",
            " re-entry"
          ],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "stop-time",
            "re-entry"
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
