import type { GenreWorld } from '../../schema';

export const SAMBA_BOSSA_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "samba-bossa",
  "name": "Samba / Bossa Nova",
  "family": "Brazilian",
  "color": "#3f8f7a",
  "level": "world",
  "description": "Samba and bossa nova share ancestry"
};

export const SAMBA_BOSSA_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Bossa Nova",
      "Samba de Enredo",
      "Pagode",
      "Samba-Reggae"
    ],
  "artists": [
      "Antônio Carlos Jobim",
      "João Gilberto",
      "Cartola",
      "Jamelão",
      "Fundo de Quintal",
      "Zeca Pagodinho",
      "Olodum",
      "Ilê Aiyê"
    ],
  "concepts": [
      "surdo",
      "pandeiro",
      "cavaquinho",
      "samba bass",
      "bossa guitar",
      "syncopated jazz harmony"
    ],
  "crossLinks": [
      "Samba ↔ Funk / Latin",
      "Bossa ↔ Jazz"
    ]
};

export const SAMBA_BOSSA_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "percussion": [
        "surdo/pandeiro interlock"
      ],
      "harmony": [
        "cavaquinho comp",
        "bossa guitar"
      ],
      "bass": [
        "syncopated samba/bossa bass"
      ],
      "synth": [
        "intimate phrasing"
      ]
    }
};

export const SAMBA_BOSSA_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Brazilian 2/4 samba interlock or quiet bossa guitar/bass independence",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "pushed",
      "humanizeJitterMs": 7
    }
};
