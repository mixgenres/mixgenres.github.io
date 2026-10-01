import type { GenreWorld } from '../../schema';

export const SALSA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "salsa",
  "name": "Salsa",
  "family": "Caribbean / Cuban",
  "color": "#d3a23d",
  "level": "world",
  "description": "The monumental Afro-Cuban & Salsa universe:"
};

export const SALSA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Mambo",
      "Salsa Dura",
      "Son Montuno",
      "Cha-Cha-Chá",
      "Salsa Romántica"
    ],
  "artists": [
      "Pérez Prado",
      "Tito Puente",
      "Willie Colón",
      "Héctor Lavoe",
      "Arsenio Rodríguez",
      "Benny Moré",
      "Enrique Jorrín",
      "Orquesta Aragón",
      "Eddie Santiago",
      "Frankie Ruiz"
    ],
  "concepts": [
      "clave 2-3 & 3-2",
      "rumba clave",
      "tumbao",
      "montuno / guajeo",
      "cáscara",
      "campana (bongo bell & mambo bell)",
      "martillo",
      "coro-pregón",
      "bloque / break",
      "anticipación",
      "interlocking syncopation"
    ],
  "crossLinks": [
      "Salsa ↔ Timba",
      "Salsa ↔ Bachata (Latin Congress)",
      "Salsa ↔ Jazz"
    ]
};

export const SALSA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "tumbao on 2-and & 4",
        "anticipated chord modulation",
        "pedal breakdowns"
      ],
      "piano": [
        "guajeo / montuno",
        "syncopated octaves",
        "percussive block chords",
        "vamp expansion"
      ],
      "harmony": [
        "guitar guajeo",
        "tres pattern",
        "montuno accompaniment"
      ],
      "percussion": [
        "clave timeline",
        "timbal cáscara",
        "campana bongo bell",
        "conga marcha",
        "guiro"
      ],
      "lead": [
        "mambo horn stabs",
        "trumpet pregón response",
        "sax solo over montuno"
      ]
    }
};

export const SALSA_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Son Clave [3-2 / 2-3] with anticipatory bass tumbao on 4-and",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "pushed"
    }
};
