import type { DrumRuleStep, DrumRuleStickState, GenreWorld } from '../../schema';

export const FUNK_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "funk",
  "name": "Funk",
  "family": "African American Groove",
  "color": "#e28743",
  "level": "world",
  "description": "The masters of groove: \"The One\""
};

export const FUNK_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "P-Funk",
      "Deep Funk",
      "Synth Funk",
      "Disco",
      "Go-Go",
      "Boogie",
      "Afrobeat",
      "Funk Carioca"
    ],
  "artists": [
      "Parliament",
      "Funkadelic",
      "The Meters",
      "Sharon Jones & The Dap-Kings",
      "Prince",
      "Cameo",
      "Chic",
      "Donna Summer",
      "Chuck Brown",
      "Trouble Funk",
      "Evelyn \"Champagne\" King",
      "D-Train",
      "Fela Kuti",
      "Tony Allen",
      "MC Marcinho",
      "Anitta"
    ],
  "concepts": [
      "The One",
      "chicken-scratch guitar",
      "ghost notes",
      "clavinet syncopation",
      "horn stabs",
      "Dilla swing",
      "laid-back snare"
    ],
  "crossLinks": [
      "Funk ↔ Jazz",
      "Funk ↔ Hip-Hop",
      "Funk ↔ Afrobeat",
      "Funk ↔ WCS"
    ]
};

export const FUNK_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "slap bass on The One",
        "syncopated 16th pops",
        "melodic soul walking lines",
        "synth bass ostinatos"
      ],
      "guitar": [
        "chicken-scratch 16th muting",
        "isolated 9th chord stabs",
        "wah-wah pedal comping"
      ],
      "drums": [
        "funky drummer breakbeat",
        "linear ghost-note snare patterns",
        "laid-back neo-soul pocket"
      ],
      "keys": [
        "percussive clavinet",
        "Rhodes/Wurlitzer tremolo chords",
        "B3 organ glissandos"
      ],
      "lead": [
        "tight brass section hits",
        "vocal falsetto and call-and-response"
      ]
    }
};

export const FUNK_WORLD_FEEL: Partial<GenreWorld> = {
  rhythm: { syncopation: 0.9, swing: 0.15, pocket: 'behind', pocketDepth: 12 },
  drumRules: {
      evaluateStep: (step: DrumRuleStep, stickState?: DrumRuleStickState) => {
        const events = [];
        if (step.kick) events.push({ type: 'kick', time: step.time, velocity: step.velocity });
  
        if (step.snare) {
          const lastSnare = stickState?.lastSnareHitTime ?? -1;
          const timeSinceLastHit = lastSnare >= 0 ? step.time - lastSnare : 999;
          if (timeSinceLastHit < 0.15 && timeSinceLastHit > 0) {
            events.push({ type: 'snare_ghost', time: step.time, velocity: Math.min(step.velocity, 40) });
          } else {
            events.push({ type: step.velocity > 90 ? 'snare_rimshot' : 'snare', time: step.time, velocity: step.velocity });
          }
        }
        return events;
      }
    },
  "tuningSystem": "12-tet",
  "signatureCell": "Explosive root slap on The One with syncopated 16th ghost notes and chicken-scratch 9th guitar",
  "grooveMechanics": {
      "swingPercentage": 54,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "laid-back"
    }
};
