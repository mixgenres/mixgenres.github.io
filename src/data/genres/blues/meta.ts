import type { GenreWorld } from '../../schema';

export const BLUES_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "blues",
  "name": "Blues",
  "family": "Roots / Blues",
  "color": "#6f7f9a",
  "level": "world",
  "description": "A deep blues vocabulary built around"
};

export const BLUES_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Chicago Blues",
      "Delta Blues",
      "Texas Blues",
      "Piedmont Blues",
      "Jump Blues",
      "Hill Country Blues",
      "Swamp Blues",
      "Soul Blues"
    ],
  "artists": [
      "Muddy Waters",
      "Howlin' Wolf",
      "Robert Johnson",
      "Charley Patton",
      "Stevie Ray Vaughan",
      "Freddie King",
      "Blind Willie McTell",
      "Reverend Gary Davis",
      "Louis Jordan",
      "Big Joe Turner",
      "R.L. Burnside",
      "Junior Kimbrough",
      "Slim Harpo",
      "Lightnin' Slim",
      "B.B. King",
      "Bobby \"Blue\" Bland"
    ],
  "concepts": [
      "12-bar form",
      "shuffle feel",
      "call and response",
      "turnaround",
      "blues scale",
      "dominant harmony",
      "space and phrasing"
    ],
  "crossLinks": [
      "Blues ↔ Rock",
      "Blues ↔ Jazz",
      "Blues ↔ Country",
      "Blues ↔ Blues Fusion"
    ]
};

export const BLUES_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "root–fifth boogie",
        "walking blues bass",
        "riff lock"
      ],
      "guitar": [
        "fills",
        "turnarounds",
        "bends",
        "double-stops"
      ],
      "drums": [
        "shuffle",
        "backbeat",
        "fills"
      ],
      "piano": [
        "boogie",
        "blues comping",
        "turnaround figures"
      ]
    }
};

export const BLUES_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Chicago triplet shuffle ride with heavy 2 & 4 snare backbeat and turnaround",
  "grooveMechanics": {
      "swingPercentage": 66,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "laid-back"
    }
};
