import type { MusicalPattern } from '../../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "sb-14-batucada-break",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Batucada Break",
          "family": "Samba",
          "category": "break",
          "transitionType": "fill",
          "description": "Brief reduction to surdo and a",
          "tags": [
            "batucada",
            "break"
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
            "surdo",
            "pandeiro",
            "tamborim"
          ],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            0,
            6
          ],
          "accentProfile": [
            0.9,
            0.7
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" break"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "breakdown",
            "bridge"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "batucada",
            "break"
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
