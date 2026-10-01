import type { MusicalPattern } from '../../../schema';

export const FOLK_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
    "id": "tech-folk-drone",
    "worldId": "folk",
    "styleIds": [
      "folk-celtic-traditional",
      "folk-british-ballad-tradition",
      "folk-appalachian-string-band",
      "folk-nordic-folk"
    ],
    "name": "drone",
    "shortName": "drone",
    "family": "folk",
    "category": "texture",
    "description": "Technique: drone",
    "tags": [
      "folk",
      "drone"
    ],
    "approaches": [
      "drone"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
      "synth"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      8
    ],
    "accentProfile": [
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72
    ],
    "durationGrid": [
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "folk",
      "drone"
    ],
    "techniques": [
      "drone"
    ]
  }
];
