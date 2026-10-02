import type { GenreWorld } from '../../schema';

export const METAL_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "metal",
  "name": "Metal",
  "family": "Heavy / Amplified",
  "color": "#8c7b83",
  "level": "world",
  "description": "The sonic power of Metal: Iron"
};

export const METAL_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Heavy Metal",
      "Thrash",
      "Death Metal",
      "Black Metal",
      "Power Metal",
      "Doom Metal",
      "Sludge",
      "Progressive Metal"
    ],
  "artists": [
      "Black Sabbath",
      "Iron Maiden",
      "Metallica",
      "Slayer",
      "Death",
      "Cannibal Corpse",
      "Mayhem",
      "Darkthrone",
      "Helloween",
      "Blind Guardian",
      "Candlemass",
      "Electric Wizard",
      "Eyehategod",
      "Crowbar",
      "Dream Theater",
      "Opeth"
    ],
  "concepts": [
      "the gallop",
      "palm-muting",
      "down-picking precision",
      "double bass kick",
      "djent tone",
      "polymeter",
      "breakdown",
      "twin harmonies"
    ],
  "crossLinks": [
      "Metal ↔ Rock",
      "Metal ↔ Classical / Symphonic",
      "Metal ↔ Math Rock"
    ]
};

export const METAL_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "rhythmGuitar": [
        "tight palm-muted chugs",
        "gallop figures",
        "polymetric djent syncopations"
      ],
      "leadGuitar": [
        "twin lead harmonized melodies",
        "sweep arpeggios",
        "screaming pinch harmonics"
      ],
      "bass": [
        "distorted pick attack doubling guitars",
        "independent low end foundation"
      ],
      "drums": [
        "double bass drum patterns",
        "blast beats",
        "crushing half-time breakdown snares"
      ]
    }
};

export const METAL_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.2, swing: 0.0, pocket: 'ahead', pocketDepth: 5 },
  "tuningSystem": "12-tet",
  "signatureCell": "High-speed palm-muted galloping guitar chug locked with double-kick drum and crushing breakdown",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "pushed"
    }
};
