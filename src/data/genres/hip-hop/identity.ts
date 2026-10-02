import type { GenreWorld } from '../../schema';

export const HIP_HOP_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "hip-hop",
  "name": "Global Urban Beat",
  "family": "Urban / Beat-driven Continuum",
  "color": "#8c8c8c",
  "level": "world",
  "description": "Unified global urban beat continuum spanning"
};

export const HIP_HOP_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Boom Bap",
      "Trap",
      "Lo-Fi",
      "Drill",
      "G-Funk",
      "Experimental",
      "Cloud Rap",
      "Jazz Rap"
    ],
  "artists": [
      "DJ Premier",
      "Nas",
      "Future",
      "Metro Boomin",
      "J Dilla",
      "Nujabes",
      "Pop Smoke",
      "Central Cee",
      "Dr. Dre",
      "Snoop Dogg",
      "Death Grips",
      "JPEGMAFIA",
      "Yung Lean",
      "Clams Casino",
      "A Tribe Called Quest",
      "Noname"
    ],
  "concepts": [
      "808 sub glide",
      "dembow riddim [3, 3, 2]",
      "swung 16th-note hi-hat pocket",
      "half-time snare placement",
      "vocal-forward space",
      "chopped sample loops"
    ],
  "crossLinks": [
      "Global Urban Beat ↔ Afrobeats",
      "Global Urban Beat ↔ Bachata Sensual",
      "Global Urban Beat ↔ Funk"
    ]
};

export const HIP_HOP_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "drums": [
        "swung boom-bap break",
        "trap rolled hi-hat kit",
        "dembow kick-snare riddim"
      ],
      "bass": [
        "808 slide & sub bass",
        "sampled upright walking bass",
        "dembow-locked sub pulse"
      ],
      "harmony": [
        "minimal sampled piano loop",
        "dark minor synth pad"
      ],
      "lead": [
        "vocal delivery hook",
        "G-funk synth lead",
        "drill vocal chops"
      ],
      "percussion": [
        "dembow rimshot and conga accents"
      ]
    }
};

export const HIP_HOP_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Dembow riddim [0, 6, 8, 12, 14] & 808 sliding sub-bass",
  "grooveMechanics": {
      "swingPercentage": 54,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "laid-back"
    }
};
