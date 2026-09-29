import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_PULSE: MusicalPattern[] = [
  {
          "id": "flam-escobilla-12",
          "worldId": "flamenco",
          "styleIds": ["flamenco-alegrias-style", "flamenco-alegrias-style"],
          "name": "Escobilla Footwork Pulse",
          "family": "Dance Footwork",
          "category": "pulse",
          "description": "Repeated footwork-support cell for the escobilla",
          "tags": [
            "escobilla",
            "alegrias",
            "zapateado"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "percussion",
            "pulse"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "zapateado",
            "cajon"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.6,
            0.55,
            0.6,
            0.75,
            0.85,
            0.6,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.9,
            0.89,
            0.9,
            0.93,
            0.95,
            0.9,
            0.96,
            0.94
          ],
          "syncopationRating": 0.5,
          "articulations": [
            "taconeo"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "solo",
            "chorus"
          ],
    
    
          "variants": [],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-alegrias-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.93,
          "enabled": true,
          "canCrossRole": true
        }
];
