import type { GenreWorld } from '../../schema';

export const COUNTRY_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "country",
  "name": "Country",
  "family": "Americana / Folk",
  "color": "#C7CEEA",
  "level": "world",
  "description": "Story-driven American roots music featuring honky-tonk"
};

export const COUNTRY_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Neotraditional",
      "Outlaw",
      "Bluegrass",
      "Honky-Tonk",
      "Bakersfield",
      "Americana",
      "Nashville Sound",
      "Western Swing"
    ],
  "artists": [
      "George Strait",
      "Randy Travis",
      "Waylon Jennings",
      "Willie Nelson",
      "Bill Monroe",
      "Flatt & Scruggs",
      "Hank Williams",
      "Lefty Frizzell",
      "Buck Owens",
      "Merle Haggard",
      "Jason Isbell",
      "Gillian Welch",
      "Patsy Cline",
      "Jim Reeves",
      "Bob Wills & His Texas Playboys",
      "Asleep at the Wheel"
    ],
  "concepts": [
      "boom-chuck",
      "train beat",
      "chicken pickin",
      "pedal steel bends",
      "two-step groove",
      "storytelling verse-chorus"
    ],
  "crossLinks": [
      "Country ↔ Rock",
      "Country ↔ Folk",
      "Country ↔ Blues",
      "Country ↔ WCS"
    ]
};

export const COUNTRY_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "guitar": [
        "acoustic rhythm strumming",
        "telecaster chicken pickin",
        "flatpicking runs"
      ],
      "bass": [
        "alternating root-fifth boom-chuck",
        "walking bass lines"
      ],
      "drums": [
        "snare brush train beat",
        "swung shuffle backbeat",
        "modern rock kit"
      ],
      "lead": [
        "pedal steel crying bends",
        "fiddle twin harmonies"
      ]
    }
};

export const COUNTRY_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.3, swing: 0.1, pocket: 'ahead', pocketDepth: 8 },
  "tuningSystem": "12-tet",
  "signatureCell": "Alternating root-fifth boom-chuck bass and telecaster chicken pickin over snare train beat",
  "grooveMechanics": {
      "swingPercentage": 56,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight"
    }
};
