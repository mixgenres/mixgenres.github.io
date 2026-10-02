import type { GenreWorld } from '../../schema';

export const ELECTRONIC_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "electronic",
  "name": "Electronic",
  "family": "Electronic / Dance",
  "color": "#C7E2E0",
  "level": "world",
  "description": "Synthesizer and drum machine driven music"
};

export const ELECTRONIC_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Downtempo",
      "Trip-Hop",
      "IDM",
      "Dubstep",
      "Garage",
      "Synthwave",
      "Ambient",
      "Techno"
    ],
  "artists": [
      "Bonobo",
      "Tycho",
      "Massive Attack",
      "Portishead",
      "Aphex Twin",
      "Boards of Canada",
      "Burial",
      "Skream",
      "MJ Cole",
      "Todd Edwards",
      "Kavinsky",
      "The Midnight",
      "Brian Eno",
      "Stars of the Lid",
      "Juan Atkins",
      "Jeff Mills"
    ],
  "concepts": [
      "four-on-the-floor",
      "sidechain compression",
      "filter sweeps",
      "breakbeat chopping",
      "wobble bass",
      "risers and drops",
      "arpeggiation"
    ],
  "crossLinks": [
      "Electronic ↔ Hip-Hop",
      "Electronic ↔ Rock",
      "Electronic ↔ Funk"
    ]
};

export const ELECTRONIC_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "drums": [
        "four-on-the-floor kick",
        "open offbeat hats",
        "breakbeats"
      ],
      "bass": [
        "sub-bass rumble",
        "acid synth bass",
        "reese bass"
      ],
      "synth": [
        "chord stabs",
        "supersaw leads",
        "ambient pads"
      ]
    }
};

export const ELECTRONIC_WORLD_FEEL: Partial<GenreWorld> = {
  "tuningSystem": "12-tet",
  "signatureCell": "Driving four-on-the-floor kick with open offbeat hi-hat and pumping sidechain bass",
  "grooveMechanics": {
      "swingPercentage": 52,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight"
    }
};
