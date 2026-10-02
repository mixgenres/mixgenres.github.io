import type { GenreWorld } from '../../schema';

export const ROCK_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "rock",
  "name": "Rock",
  "family": "Amplified / Guitar Music",
  "color": "#b45b68",
  "level": "world",
  "description": "A broad rock vocabulary organized around"
};

export const ROCK_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Hard Rock",
      "Grunge",
      "Progressive Rock",
      "Punk Rock",
      "Garage Rock",
      "Psychedelic",
      "Post-Rock",
      "Shoegaze"
    ],
  "artists": [
      "Led Zeppelin",
      "AC/DC",
      "Nirvana",
      "Soundgarden",
      "Pink Floyd",
      "Yes",
      "Ramones",
      "The Clash",
      "The Stooges",
      "The Strokes",
      "The Jimi Hendrix Experience",
      "The Doors",
      "Godspeed You! Black Emperor",
      "Explosions in the Sky",
      "My Bloody Valentine",
      "Slowdive"
    ],
  "concepts": [
      "riff architecture",
      "power chords",
      "backbeat",
      "dynamic contrast",
      "verse/chorus",
      "instrumental break",
      "odd meter"
    ],
  "crossLinks": [
      "Rock ↔ Blues",
      "Rock ↔ Metal",
      "Rock ↔ Rock en Español",
      "Rock ↔ Chinese Rock"
    ]
};

export const ROCK_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "guitar": [
        "power-chord riffs",
        "single-note hooks",
        "textural layers",
        "fills"
      ],
      "bass": [
        "riff lock",
        "root drive",
        "melodic counterline"
      ],
      "drums": [
        "backbeat",
        "kick/riff lock",
        "fills",
        "breaks"
      ]
    }
};

export const ROCK_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Driving straight-8th power riff locked with kick drum and snare on 2 & 4",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight"
    }
};
