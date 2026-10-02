import type { GenreWorld } from '../../schema';

export const FOLK_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "folk",
  "name": "Folk",
  "family": "Acoustic / Traditional",
  "color": "#DFE2C7",
  "level": "world",
  "description": "Acoustic-driven music centered around storytelling, fingerpicking,"
};

export const FOLK_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Indie Folk",
      "Old-Time",
      "Protest",
      "Psychedelic Folk",
      "Anti-Folk",
      "Bluegrass",
      "Neo-Traditional",
      "Chamber Folk"
    ],
  "artists": [
      "Fleet Foxes",
      "Bon Iver",
      "Doc Watson",
      "Tommy Jarrell",
      "Bob Dylan",
      "Joan Baez",
      "The Incredible String Band",
      "Devendra Banhart",
      "Moldy Peaches",
      "Regina Spektor",
      "Tony Rice",
      "Béla Fleck",
      "Shirley Collins",
      "Laura Marling",
      "Sufjan Stevens",
      "Andrew Bird"
    ],
  "concepts": [
      "Travis picking",
      "alternating bass",
      "Carter scratch",
      "boom-chuck",
      "ballad form",
      "modal tuning",
      "close vocal harmony"
    ],
  "crossLinks": [
      "Folk ↔ Country",
      "Folk ↔ Blues",
      "Folk ↔ Rock"
    ]
};

export const FOLK_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "voice": [
        "Travis picking",
        "flatpicking runs",
        "syncopated strumming"
      ],
      "bass": [
        "root-fifth alternating bass",
        "boom-chuck foundation"
      ],
      "violin": [
        "old-time fiddle drones",
        "melodic breaks"
      ],
      "guitar": [
        "narrative delivery",
        "high lonesome vocal harmony"
      ]
    }
};

export const FOLK_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Alternating thumb Travis picking with syncopated treble melody and open chords",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight"
    }
};
