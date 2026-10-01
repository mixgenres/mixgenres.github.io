import type { GenreWorld } from '../../schema';

export const SWING_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "swing",
  "name": "Swing",
  "family": "Jazz / Big Band",
  "color": "#ECD5BB",
  "level": "world",
  "description": "Big Band and Small Group Swing"
};

export const SWING_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Big Band Swing",
      "Gypsy Jazz (Manouche)",
      "Jump Blues"
    ],
  "artists": [
      "Benny Goodman",
      "Count Basie",
      "Django Reinhardt",
      "Stéphane Grappelli",
      "Louis Jordan",
      "Wynonie Harris"
    ],
  "concepts": [
      "spang-a-lang",
      "walking bass",
      "four-on-the-floor bass drum feathering",
      "hi-hat on 2 and 4",
      "Charleston rhythm",
      "shout chorus",
      "call-and-response brass"
    ],
  "crossLinks": [
      "Swing ↔ Blues",
      "Swing ↔ Funk",
      "Swing ↔ WCS",
      "Swing ↔ Pop"
    ]
};

export const SWING_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "drums": [
        "spang-a-lang ride cymbal",
        "hi-hat pedal snap on 2 & 4",
        "feathered bass drum"
      ],
      "bass": [
        "acoustic four-to-the-bar walking bass"
      ],
      "piano": [
        "syncopated Freddie Green / Charleston comping",
        "tasty right-hand blues fills"
      ],
      "lead": [
        "brass section unison stabs",
        "improvised saxophone lines"
      ]
    }
};

export const SWING_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Spang-a-lang ride cymbal phrasing with four-to-the-bar acoustic walking bass and brass ensemble punch hits",
  "grooveMechanics": {
      "swingPercentage": 64,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "pushed"
    }
};
