import type { MusicalPattern } from '../../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "sb-12-bossa-piano-voicing",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa piano chord punctuation",
          "family": "Bossa Nova",
          "category": "rolePattern",
          "description": "Sparse chord punctuation for a piano-led",
          "tags": [
            "piano",
            "voicing"
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
            "piano"
          ],
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            2,
            6,
            9,
            13
          ],
          "accentProfile": [
            0.55,
            0.62,
            0.5,
            0.66
          ],
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" voicing"],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "piano",
            "voicing"
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
