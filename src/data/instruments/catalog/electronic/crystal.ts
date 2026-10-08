import type { InstrumentDef } from '../../schema/instrument-def';

export const crystal: InstrumentDef = {
  id: "crystal",
  name: "Crystal Bell",
  family: "electronic",
  voicing: "single",
  
  
  polyphony: 4,
  note: "Synthesized crystal mallet idiophone with shimmering high-frequency partials and glass resonance",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 79,
    low: 36,
    high: 90,
    pan: 0.2,
    trim: -5,
    space: 0.5,
    ring: 4
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.98,
    tension: 0.92,
    bodyResonanceVolume: 2,
    decayTimeFactor: 4.5,
    harmonicRichness: 0.92
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "tremolo"],
    techniqueMethods: [
      "glass friction resonance",
      "high-frequency additive harmonics",
      "long crystal decay",
      "subtle stereo panning"
    ],
    playingStyles: ["ambient", "new-age", "soundtrack", "electronic", "dream-pop"],
    genreTechniques: {
      ambient: ["legato", "tenuto", "tremolo"],
      electronic: ["accent", "staccato", "legato"]
    }
  }
};
