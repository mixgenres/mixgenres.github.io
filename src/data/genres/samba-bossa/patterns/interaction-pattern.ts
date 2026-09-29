import type { MusicalPattern } from '../../../schema';

export const SAMBA_BOSSA_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "sb-13-samba-call-response",
          "worldId": "samba-bossa",
          "styleIds": ["bossa-nova"],
          "name": "Samba Call Response",
          "family": "Samba",
          "category": "interactionPattern",
          "description": "Percussion group answers a vocal or",
          "tags": [
            "call-response"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "counterline"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "pandeiro",
            "tamborim"
          ],
          "meter": "2/4",
          "cycleLength": 2,
          "subdivisions": 16,
          "onsetGrid": [
            4,
            6,
            12,
            14
          ],
          "accentProfile": [
            0.6,
            0.8,
            0.58,
            0.85
          ],
          "syncopationRating": 0.5,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["accent"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "call-response"
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
