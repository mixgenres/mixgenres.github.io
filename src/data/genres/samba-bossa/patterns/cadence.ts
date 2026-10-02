import type { MusicalPattern } from '../../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "sb-15-bossa-ending-turn",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa ending cadence",
          "family": "Bossa Nova",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Short harmonic cadence figure for a",
          "tags": [
            "extended harmony",
            "release"
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
            "guitar",
            "piano"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            0,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.6,
            0.45,
            0.68,
            0.5
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" release"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "coda",
            "ending"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "extended harmony",
            "release"
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
