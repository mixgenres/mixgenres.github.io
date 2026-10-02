import type { GenreWorld } from '../../schema';

export const SKA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "ska",
  "name": "Ska",
  "family": "Jamaican / UK revival",
  "color": "#d4a72c",
  "level": "world",
  "description": "Ska gets its own world because"
};

export const SKA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Traditional Ska",
      "Two-Tone",
      "Ska-Punk"
    ],
  "artists": [
      "The Skatalites",
      "Prince Buster",
      "The Specials",
      "Madness",
      "Sublime",
      "Reel Big Fish"
    ],
  "concepts": [
      "offbeat chop",
      "walking bass",
      "horn answer",
      "2 Tone drive",
      "rocksteady transition"
    ],
  "crossLinks": [
      "Ska ↔ Reggae / Dub",
      "Ska ↔ Rock / Funk"
    ]
};

export const SKA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "harmony": [
        "offbeat guitar/piano"
      ],
      "bass": [
        "walking / melodic bass"
      ],
      "lead": [
        "horn riffs"
      ],
      "drums": [
        "ska drive"
      ],
      "synth": [
        "call-and-response"
      ]
    }
};

export const SKA_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Offbeat chop + walking bass + horn response",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "pushed",
      "humanizeJitterMs": 6
    }
};
