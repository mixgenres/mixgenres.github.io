import type { MusicalPattern } from '../../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "sb-09-cavaquinho-partido",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Cavaquinho Partido",
          "family": "Samba",
          "category": "cell",
          "description": "Short chord strokes outlining the syncopated",
          "tags": [
            "cavaquinho",
            "partido-alto"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
          "instruments": [
            "cavaquinho"
          ],
          "meter": "2/4",
          "cycleLength": 1,
          "subdivisions": 8,
          "onsetGrid": [
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            0.72,
            0.55,
            0.75,
            0.6
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" partido-alto"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "any"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "cavaquinho",
            "partido-alto"
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
