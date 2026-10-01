import type { GenreWorld } from '../../schema';

export const ZOUK_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "zouk",
  "name": "Zouk",
  "family": "French Caribbean / Antillean",
  "color": "#55a6a1",
  "level": "world",
  "description": "Zouk emerged in Guadeloupe and Martinique, combining Caribbean rhythms with modern band arrangements."
};

export const ZOUK_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Zouk Béton",
      "Zouk Love",
      "Ghetto Zouk",
      "Neo-Zouk"
    ],
  "artists": [
      "Kassav'",
      "Jocelyne Béroard",
      "Patrick Saint-Éloi",
      "Gilles Floro",
      "Nelson Freitas",
      "Kaysha",
      "Alok",
      "Mafie Zouker"
    ],
  "concepts": [
      "chawa guitar skank",
      "ti-bwa woodblock drive",
      "horn section punch",
      "syncopated bass movement",
      "DX7 electric piano chords",
      "French Creole vocal phrasing"
    ],
  "crossLinks": [
      "Zouk ↔ Kizomba (harmonic root)",
      "Zouk ↔ Compas Direct",
      "Zouk ↔ Lambazouk / Brazilian Zouk"
    ]
};

export const ZOUK_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "syncopated zouk bass",
        "sub-bass glide",
        "melodic octaves"
      ],
      "guitar": [
        "clean chawa skank chops",
        "rhythmic muted riffs"
      ],
      "keys": [
        "lush DX7 electric piano & pad chords",
        "synth bells"
      ],
      "drums": [
        "four-on-the-floor kick with snare backbeat",
        "ti-bwa woodblock stick pattern",
        "shaker shimmer"
      ],
      "brass": [
        "punchy horn section stabs",
        "trumpet counter-melodies"
      ]
    }
};

export const ZOUK_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Driving ti-bwa stick ostinato over syncopated 16th sub-bass and chawa guitar chops",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "pushed"
    }
};
