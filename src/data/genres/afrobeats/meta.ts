import type { GenreWorld } from '../../schema';

export const AFROBEATS_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "afrobeats",
  "name": "Afrobeats",
  "family": "West African Pop / Global Groove",
  "color": "#d48834",
  "level": "world",
  "description": "Vibrant West African dance music continuum:"
};

export const AFROBEATS_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Afro-Pop",
      "Afrobeat",
      "Amapiano",
      "Gqom",
      "Afro-House",
      "Highlife",
      "Palm-Wine",
      "Alté"
    ],
  "artists": [
      "Wizkid",
      "Davido",
      "Fela Kuti",
      "Tony Allen",
      "Asake",
      "Focalistic",
      "DJ Lag",
      "Griffit Vigo",
      "Black Coffee",
      "Sun-El Musician",
      "The Cavemen",
      "E.T. Mensah",
      "Koo Nimo",
      "S.E. Rogie",
      "Santi",
      "Lady Donli"
    ],
  "concepts": [
      "syncopated kick/clap pocket",
      "log-drum pitched bass rolls",
      "clean highlife guitar picking",
      "shekere continuous groove",
      "horn section punch",
      "vocal hook repetition"
    ],
  "crossLinks": [
      "Kizomba ↔ Afrobeats (Afro-Kiz festival room)",
      "Afrobeats ↔ Global Urban Beat",
      "Afrobeats ↔ Funk (Fela Kuti / James Brown shared DNA)"
    ]
};

export const AFROBEATS_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "pitched log-drum bass rolls",
        "Fela minor vamp bass",
        "sub 808 pulse"
      ],
      "drums": [
        "syncopated Afropop kick/clap pocket",
        "Tony Allen polyrhythmic snare",
        "Amapiano ghost kick"
      ],
      "guitar": [
        "highlife fingerstyle arpeggios",
        "rhythm muted chops"
      ],
      "percussion": [
        "shekere shaker rattle",
        "talking drum accents",
        "conga syncopations"
      ],
      "lead": [
        "horn section stabs",
        "vocal hook lines"
      ],
      "harmony": [
        "airy Rhodes 9th chords",
        "warm pad washes"
      ]
    }
};

export const AFROBEATS_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap",
  "grooveMechanics": {
      "swingPercentage": 54,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "laid-back"
    }
};
