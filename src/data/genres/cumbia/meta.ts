import type { GenreWorld } from '../../schema';

export const CUMBIA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "cumbia",
  "name": "Cumbia",
  "family": "Colombian / Latin American",
  "color": "#3f9b62",
  "level": "world",
  "description": "Cumbia is treated as a family"
};

export const CUMBIA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Cumbia Colombiana",
      "Villera",
      "Chicha",
      "Sonora",
      "Rebajada",
      "Digitale",
      "Santafesina",
      "Porro"
    ],
  "artists": [
      "Lucho Bermúdez",
      "Los Gaiteros de San Jacinto",
      "Damas Gratis",
      "Pibes Chorros",
      "Los Mirlos",
      "Chacalón",
      "Sonora Dinamita",
      "Sonora Santanera",
      "Sonido Dueñez",
      "Celso Piña",
      "ZZK Records",
      "Nicola Cruz",
      "Los Palmeras",
      "Leo Mattioli",
      "Banda 19 de Enero",
      "Totó La Momposina"
    ],
  "concepts": [
      "cumbia pulse",
      "tambora",
      "alegre",
      "guacharaca",
      "gaita",
      "chicha tremolo"
    ],
  "crossLinks": [
      "Cumbia ↔ Reggaetón",
      "Cumbia ↔ Latin Folk"
    ]
};

export const CUMBIA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "cumbia root/fifth pulse"
      ],
      "percussion": [
        "tambora / alegre",
        "guacharaca"
      ],
      "melody": [
        "gaita or tremolo guitar"
      ],
      "harmony": [
        "keyboard hooks"
      ]
    }
};

export const CUMBIA_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Cyclical cumbia pulse with scraper/drum interlock and regional lead figures",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 9
    }
};
