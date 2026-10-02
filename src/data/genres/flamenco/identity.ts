import type { GenreWorld } from '../../schema';

export const FLAMENCO_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "flamenco",
  "name": "Flamenco",
  "family": "Andalusia / Iberian",
  "color": "#d9914e",
  "level": "world",
  "description": "Deep Flamenco compás architectures: Soleá and"
};

export const FLAMENCO_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Soleá",
      "Bulerías",
      "Alegrías",
      "Tangos",
      "Seguiriya",
      "Tientos",
      "Fandangos",
      "Rumba"
    ],
  "artists": [
      "Paco de Lucía",
      "Camarón de la Isla",
      "Tomatito",
      "Vicente Amigo",
      "Sabicas",
      "Moraito Chico",
      "Diego del Morao",
      "Jorge Pardo",
      "Chano Domínguez"
    ],
  "concepts": [
      "compás",
      "palo",
      "falseta",
      "llamada",
      "letra",
      "cierre",
      "remate",
      "jaleo",
      "contratiempo",
      "palmas sordas / fuertes",
      "golpe",
      "alzapúa",
      "abanico"
    ],
  "crossLinks": [
      "Flamenco ↔ Tango",
      "Flamenco ↔ Jazz",
      "Flamenco ↔ Arabic / Mediterranean"
    ]
};

export const FLAMENCO_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "harmony": [
        "guitar",
        "abanico rasgueado",
        "compás accompaniment",
        "arpeggios",
        "golpe on top plate"
      ],
      "melody": [
        "guitar",
        "flute",
        "falseta development",
        "picado runs",
        "flamenco tremolo",
        "expressive cante lead"
      ],
      "percussion": [
        "palmas",
        "cajon",
        "hand-percussion",
        "cajón grave/agudo",
        "palmas base y contratiempo",
        "golpes",
        "taconeo"
      ],
      "drums": [
        "palmas",
        "cajon",
        "hand-percussion"
      ],
      "rhythm": [
        "palmas",
        "cajon",
        "hand-percussion"
      ],
      "bass": [
        "guitar",
        "compás root support",
        "alzapúa doubling",
        "rumba bassline",
        "modal pedal"
      ],
      "lead": [
        "guitar",
        "flute",
        "voice",
        "falseta dialogue",
        "sax/flute cante phrases",
        "virtuoso picado"
      ]
    }
};

export const FLAMENCO_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.8, swing: 0.0, pocket: 'ahead', pocketDepth: 10 },
  "tuningSystem": "phrygian-mode",
  "signatureCell": "12-beat compás accented on [12, 3, 6, 8, 10] with Andalusian cadence",
  "grooveMechanics": {
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight"
    }
};

export const FLAMENCO_WORLD_HARMONY: Partial<GenreWorld> = {
  "prominentChords": ['Phrygian Dom', 'Maj (bII)', 'Min 9', 'Andalusian']
};
