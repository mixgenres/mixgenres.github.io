import type { GenreWorld } from '../../schema';

export const TANGO_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "tango",
  "name": "Tango",
  "family": "Río de la Plata",
  "color": "#c87561",
  "level": "world",
  "description": "A deep architectural Tango lens: marcato"
};

export const TANGO_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Tango Tradicional",
      "Tango Nuevo",
      "Milonga",
      "Tango Vals",
      "Tango Electrónico"
    ],
  "artists": [
      "Juan D'Arienzo",
      "Carlos Di Sarli",
      "Astor Piazzolla",
      "Quinteto Real",
      "Francisco Canaro",
      "Edgardo Donato",
      "Alfredo De Angelis",
      "Osvaldo Pugliese",
      "Gotan Project",
      "Bajofondo"
    ],
  "concepts": [
      "marcato en 4",
      "marcato en 2",
      "yumba",
      "síncopa a tierra",
      "arrastre",
      "anticipación",
      "bordoneo",
      "corte",
      "chiche",
      "fraseo",
      "rubato",
      "3+3+2 grouping",
      "pesado vs liviano"
    ],
  "crossLinks": [
      "Tango ↔ Blues Fusion",
      "Tango ↔ Flamenco",
      "Tango ↔ Jazz"
    ]
};

export const TANGO_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "marcato en 2",
        "marcato en 4",
        "arrastre",
        "bass division",
        "bordoneo",
        "slap pizzicato"
      ],
      "piano": [
        "marcato",
        "yumba",
        "síncopa",
        "campanitas",
        "arrastre",
        "percussive chords"
      ],
      "harmony": [
        "marcato accompaniment",
        "síncopa",
        "arpeggios",
        "bordoneos"
      ],
      "melody": [
        "fraseo",
        "rubato",
        "variation",
        "dialogue",
        "counter-phrase"
      ],
      "lead": [
        "bandoneón variation",
        "violin solo",
        "expressive fraseo"
      ],
      "percussion": [
        "chiche string hits",
        "piano wood knocking",
        "pandeiro/candombe accents"
      ]
    }
};

export const TANGO_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Marcato en 4 with heavy Pesado on beats 1 & 3 and chromatic arrastre",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "rubato"
    }
};

export const TANGO_WORLD_HARMONY: Partial<GenreWorld> = {
  "prominentChords": ['Min', 'Min Maj 7', 'Dim 7', 'Dom 7b9', 'Aug']
};
