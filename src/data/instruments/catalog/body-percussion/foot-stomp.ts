import type { InstrumentDef } from '../../schema/instrument-def';

export const foot_stomp: InstrumentDef = {
  id: "foot-stomp",
  name: "Foot stomp",
  family: "body-percussion",
  drum: {
    low: 35,
    mid: 36,
    high: 38
  },
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 0.319,
  polyphony: 8,
  note: "Acoustic wooden porch, stage, or clogging board foot stomp delivering heavy woody bass pulse",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.34,
    trim: -3,
    space: 0.22,
    ring: 0.5
  },
  luthierPhysics: {
    category: "body_impact",
    materialDensity: 0.85,
    tension: 0.5,
    bodyResonanceVolume: 30,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "flam", "low-tone"],
    techniqueMethods: [
      "heavy heel slam",
      "ball-of-foot tap",
      "stage floor resonant thump",
      "clogging heel-toe syncopation"
    ],
    playingStyles: ["folk", "blues", "celtic", "flamenco", "bluegrass"],
    genreTechniques: {
      folk: ["accent", "low-tone", "ghost"],
      blues: ["accent", "low-tone"],
      flamenco: ["accent", "flam", "staccato"]
    }
  }
};
