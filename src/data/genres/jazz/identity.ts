import type { GenreWorld, DrumRuleStep } from '../../schema';

export const JAZZ_WORLD_WORLD: Partial<GenreWorld> = {
  "id": "jazz",
  "name": "Jazz",
  "family": "Improvisation / Harmony",
  "color": "#5f83bb",
  "level": "world",
  "description": "The monumental Jazz style: Swing and"
};

export const JAZZ_WORLD_CULTURE: Partial<GenreWorld> = {
  "substyles": [
      "Bebop",
      "Cool Jazz",
      "Hard Bop",
      "Free Jazz",
      "Gypsy Jazz",
      "Fusion",
      "Spiritual Jazz",
      "Ragtime"
    ],
  "artists": [
      "Charlie Parker",
      "Dizzy Gillespie",
      "Miles Davis",
      "Chet Baker",
      "Art Blakey & The Jazz Messengers",
      "Horace Silver",
      "Ornette Coleman",
      "John Coltrane",
      "Django Reinhardt",
      "Stephane Grappelli",
      "Weather Report",
      "Return to Forever",
      "Pharoah Sanders",
      "Alice Coltrane",
      "Scott Joplin",
      "Jelly Roll Morton"
    ],
  "concepts": [
      "walking bass",
      "spang-a-lang ride",
      "charleston syncopation",
      "ii-V-I guide tones",
      "quartal voicings",
      "enclosures",
      "pedal point",
      "broken time"
    ],
  "crossLinks": [
      "Jazz ↔ Blues",
      "Jazz ↔ Swing",
      "Jazz ↔ Funk",
      "Jazz ↔ Bossa Nova"
    ]
};

export const JAZZ_WORLD_ROLES: Partial<GenreWorld> = {
  "roles": {
      "bass": [
        "4-feel walking line",
        "2-feel head anchor",
        "modal pedal point",
        "syncopated counterpoint"
      ],
      "piano": [
        "syncopated comping",
        "shell voicings",
        "quartal stacks",
        "chord melody"
      ],
      "drums": [
        "ride cymbal swing",
        "hi-hat 2 & 4 snap",
        "snare comping punches",
        "brush ballad sweep"
      ],
      "lead": [
        "bebop melody / solo",
        "horn section harmonized head",
        "expressive counterlines"
      ]
    }
};

export const JAZZ_WORLD_FEEL: Partial<GenreWorld> = {
  drumRules: {
      evaluateStep: (step: DrumRuleStep) => {
        const events = [];
        if (step.kick) events.push({ type: 'kick', velocity: step.velocity * 0.8, time: step.time });
        if (step.snare) {
          events.push({ type: 'snare', velocity: step.velocity, time: step.time });
          if (step.velocity < 60) events.push({ type: 'snare_ghost', velocity: step.velocity, time: step.time });
          else if (step.velocity > 95) events.push({ type: 'snare_rimshot', velocity: step.velocity, time: step.time });
        }
        if (step.hihat) {
          let hatType = step.velocity < 60 ? 'hihat_tip' : 'hihat_shank';
          if (step.isOpen) hatType = 'hihat_open';
          else if (step.isPedal) hatType = 'hihat_pedal';
          events.push({ type: hatType, velocity: step.velocity, time: step.time });
        }
        if (step.ghosts) step.ghosts.forEach((g: { velocity: number; time: number }) => events.push({ type: 'snare_ghost', velocity: g.velocity, time: g.time }));
  
        return events;
      }
    },
  "tuningSystem": "12-tet",
  "signatureCell": "Spang-a-lang ride cymbal with 4-to-the-bar walking bass and ii-V-I progressions",
  "grooveMechanics": {
      "swingPercentage": 66,
      "anticipationOffsetSteps": 1,
      "microtimingFeel": "laid-back"
    }
};

export const JAZZ_WORLD_HARMONY: Partial<GenreWorld> = {
  "prominentChords": ['Maj 7', 'Min 7', 'Dom 9', 'Min 7b5', 'Dim 7']
};
