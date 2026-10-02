import type { MusicalPattern } from '../../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_BASS: MusicalPattern[] = [
  {
          "id": "sb-11-bossa-bass-anticipation",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Bossa Bass Anticipation",
          "family": "Bossa Nova",
          "category": "bass",
          "description": "Root/approach notes anticipate the next chord,",
          "tags": [
            "bossa",
            "anticipation"
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
            "bass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.78,
            0.45,
            0.65,
            0.55
          ],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [" anticipation"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "bossa",
            "anticipation"
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
