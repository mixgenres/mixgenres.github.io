import type { GenreWorld } from '../../schema';

export const TIMBA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "timba",
  "name": "Timba",
  "family": "Cuban Popular Music",
  "color": "#8964cf",
  "level": "world",
  "description": "High-energy modern Cuban popular music: dynamic"
};

export const TIMBA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Timba Habanera",
      "Songo"
    ],
  "artists": [
      "Los Van Van",
      "NG La Banda",
      "Changuito",
      "Juan Formell"
    ],
  "concepts": [
      "engranajes (gear changes)",
      "marcha",
      "presión",
      "bomba",
      "pedal",
      "songo",
      "bloque",
      "displaced bass"
    ],
  "crossLinks": [
      "Timba ↔ Salsa (lineage)",
      "Timba ↔ Funk (songo/slap crossover)",
      "Timba ↔ Jazz (Cuban Latin Jazz)"
    ]
};

export const TIMBA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "displaced funk bass",
        "slap bomba breakdown",
        "sustained pedal",
        "tumbao progression"
      ],
      "piano": [
        "percussive bloque",
        "syncopated timba montuno",
        "block chords"
      ],
      "drumKit": [
        "songo groove",
        "foot cowbell pulse",
        "linear snare fills"
      ],
      "percussion": [
        "timbal bell drive",
        "conga slaps",
        "guiro rasp"
      ],
      "lead": [
        "horn section stabs",
        "trumpet solos",
        "vocal pregón dialogues"
      ]
    }
};

export const TIMBA_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Timba 4-gear system (Marcha → Presión → Bomba → Pedal) with songo drums",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "pushed"
    }
};
