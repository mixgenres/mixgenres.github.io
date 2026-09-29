import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "flam-rumba-bass",
          "worldId": "flamenco",
          "styleIds": ["flamenco-rumba", "flamenco-rumba"],
          "name": "Rumba Flamenca Bass Propulsion",
          "family": "Rumba Groove",
          "category": "bass",
          "description": "Rumba flamenca bass motion follows the",
          "tags": [
            "rumba",
            "bass",
            "pickup",
            "abanico"
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
            "bass",
            "upright-bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.55,
            0.85,
            0.8,
            0.65,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.96,
            0.89,
            0.95,
            0.94,
            0.91,
            0.96,
            0.93
          ],
          "syncopationRating": 0.14,
          "articulations": [
            "syncopated"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-rumba"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.94,
          "enabled": true
        }
];
