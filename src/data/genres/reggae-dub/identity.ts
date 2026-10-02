import type { GenreWorld } from '../../schema';

export const REGGAE_DUB_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "reggae-dub",
  "name": "Reggae / Dub",
  "family": "Jamaican / sound-system",
  "color": "#4f8f6f",
  "level": "world",
  "description": "Reggae and dub are represented as"
};

export const REGGAE_DUB_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Roots Reggae",
      "Dub",
      "Dancehall",
      "Lovers Rock",
      "Rocksteady",
      "Ragga",
      "Ska",
      "Calypso"
    ],
  "artists": [
      "Bob Marley & The Wailers",
      "Burning Spear",
      "King Tubby",
      "Lee \"Scratch\" Perry",
      "Yellowman",
      "Sean Paul",
      "Janet Kay",
      "Gregory Isaacs",
      "Alton Ellis",
      "The Paragons",
      "Shabba Ranks",
      "Buju Banton",
      "The Skatalites",
      "Prince Buster",
      "Mighty Sparrow",
      "Lord Kitchener"
    ],
  "concepts": [
      "one-drop",
      "skank",
      "melodic bass",
      "dub dropout",
      "echo space",
      "steppers"
    ],
  "crossLinks": [
      "Reggae ↔ Ska",
      "Dub ↔ House/Techno"
    ]
};

export const REGGAE_DUB_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "drums": [
        "one-drop",
        "steppers"
      ],
      "bass": [
        "melodic deep bass"
      ],
      "harmony": [
        "guitar/organ skank"
      ],
      "texture": [
        "dub fragments"
      ],
      "horn-section": [
        "laid-back lead/coro"
      ]
    }
};

export const REGGAE_DUB_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "One-drop/steppers drum skeleton with offbeat skank and bass-led space",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "laid-back",
      "humanizeJitterMs": 8
    }
};
