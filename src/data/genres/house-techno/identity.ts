import type { GenreWorld } from '../../schema';

export const HOUSE_TECHNO_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "house-techno",
  "name": "House / Techno",
  "family": "Electronic dance music",
  "color": "#5b67c8",
  "level": "world",
  "description": "House and techno share a club-oriented"
};

export const HOUSE_TECHNO_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Peak Time",
      "Minimal",
      "Dub Techno",
      "Detroit Techno",
      "Acid Techno",
      "Hard Techno",
      "Melodic Techno",
      "EBM"
    ],
  "artists": [
      "Charlotte de Witte",
      "Enrico Sangiuliano",
      "Richie Hawtin",
      "Ricardo Villalobos",
      "Basic Channel",
      "Deepchord",
      "Juan Atkins",
      "Derrick May",
      "DJ Pierre",
      "Hardfloor",
      "I Hate Models",
      "Paula Temple",
      "Tale of Us",
      "Stephan Bodzin",
      "Front 242",
      "Nitzer Ebb"
    ],
  "concepts": [
      "four-on-floor",
      "offbeat hats",
      "syncopated bass",
      "sequence mutation",
      "acid accents",
      "filter development"
    ],
  "crossLinks": [
      "House ↔ Funk / Disco",
      "Techno ↔ Electronic / Ambient"
    ]
};

export const HOUSE_TECHNO_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "drums": [
        "four-on-floor",
        "offbeat hats"
      ],
      "bass": [
        "syncopated house bass",
        "acid sequence"
      ],
      "harmony": [
        "short chord stabs",
        "dub chords"
      ],
      "lead": [
        "repeating synth sequences"
      ]
    }
};

export const HOUSE_TECHNO_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Four-on-floor pulse with offbeat hats and evolving bass/synth sequences",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 2
    }
};
