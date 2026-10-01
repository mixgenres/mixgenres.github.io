import type { GenreWorld } from '../../schema';

export const BACHATA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "bachata",
  "name": "Bachata",
  "family": "Caribbean / Latin Dance",
  "color": "#d2768e",
  "level": "world",
  "description": "Dominican and Latin dance style defined"
};

export const BACHATA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Urbana",
      "Tradicional",
      "Sensual",
      "Bachata Moderna",
      "Bolero Bachata",
      "Bachatango",
      "Campestre",
      "Merengue de Guitarra"
    ],
  "artists": [
      "Aventura",
      "Romeo Santos",
      "Luis Vargas",
      "Anthony Santos",
      "Dani J",
      "DJ Tronky",
      "Johnny Sky",
      "Toby Love",
      "Jose Manuel Calderon",
      "Leonardo Paniagua",
      "Grace Jones",
      "Steve Morrill",
      "Edilio Paredes",
      "Joan Soriano"
    ],
  "concepts": [
      "3 gears: derecho (verse), majao (chorus), mambo (breakdown)",
      "requinto treble picking",
      "bongo martillo to campana",
      "güira repique",
      "anticipated bass pulse"
    ],
  "crossLinks": [
      "Bachata ↔ R&B",
      "Bachata ↔ Dembow / Reggaeton"
    ]
};

export const BACHATA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "lead": [
        "requinto picking",
        "accordion melody",
        "sax jaleos"
      ],
      "harmony": [
        "segunda guitar chords",
        "piano merengue comping",
        "guitar chops"
      ],
      "bass": [
        "anticipated bachata bass",
        "merengue bass gallop",
        "syncopated cumbia bass"
      ],
      "percussion": [
        "bongo martillo",
        "güira repique",
        "tambora",
        "guacharaca"
      ]
    }
};

export const BACHATA_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "3 gears: Derecho (verse), Majao (chorus), Mambo (instrumental breakdown)",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": -1,
      "microtimingFeel": "pushed"
    }
};
