import type { InstrumentDef } from '../../schema/instrument-def';

export const synth: InstrumentDef = {
  id: "synth",
  name: "Synthesizer",
  family: "electronic",
  voicing: "single",
  elementaryModel: 9,
  makeupGain: 0.548,
  polyphony: 8,
  note: "Lead synth voice",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.5,
    tension: 0.5,
    bodyResonanceVolume: 10,
    decayTimeFactor: 2,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "bend"],
    techniqueMethods: ["mono lead", "filter sweep", "pitch glide", "velocity envelope"],
    playingStyles: ["electronic"],
    genreTechniques: {
      electronic: ["staccato", "portamento"]
    }
  },
  physicalTechniques: ["accent", "staccato", "legato", "portamento", "vibrato", "bend", "filter-sweep", "pulse-width-modulation", "unison", "sub-sweep", "punch-stab"],
  patches: [
    { id: "saw-lead", name: "Saw Lead", role: "lead", oscillator: "saw", filter: "lowpass", cutoffHz: 4200, resonance: 0.2, attackSeconds: 0.008, decaySeconds: 0.18, sustain: 0.72, releaseSeconds: 0.12, unison: 1, saturation: 0.16 },
    { id: "square-lead", name: "Square Lead", role: "lead", oscillator: "square", filter: "lowpass", cutoffHz: 3000, resonance: 0.16, attackSeconds: 0.004, decaySeconds: 0.12, sustain: 0.68, releaseSeconds: 0.1 },
    { id: "warm-pad", name: "Warm Pad", role: "pad", oscillator: "hybrid", filter: "lowpass", cutoffHz: 1800, resonance: 0.08, attackSeconds: 0.42, decaySeconds: 0.7, sustain: 0.82, releaseSeconds: 1.3, unison: 3 },
    { id: "halo-pad", name: "Halo Pad", role: "pad", oscillator: "sine", filter: "bandpass", cutoffHz: 2400, resonance: 0.14, attackSeconds: 0.75, decaySeconds: 1.1, sustain: 0.74, releaseSeconds: 1.8, unison: 3, noise: 0.025 },
    { id: "sweep-pad", name: "Sweep Pad", role: "pad", oscillator: "saw", filter: "lowpass", cutoffHz: 900, resonance: 0.34, attackSeconds: 0.6, decaySeconds: 1.4, sustain: 0.78, releaseSeconds: 1.4, unison: 2 },
    { id: "polysynth", name: "Poly Synth", role: "comp", oscillator: "hybrid", filter: "lowpass", cutoffHz: 3200, resonance: 0.12, attackSeconds: 0.025, decaySeconds: 0.28, sustain: 0.62, releaseSeconds: 0.24, unison: 2 },
    { id: "synth-strings", name: "Synth Strings", role: "pad", oscillator: "saw", filter: "lowpass", cutoffHz: 2600, resonance: 0.08, attackSeconds: 0.32, decaySeconds: 0.5, sustain: 0.78, releaseSeconds: 0.8, unison: 3 },
    { id: "synth-brass", name: "Synth Brass", role: "comp", oscillator: "saw", filter: "lowpass", cutoffHz: 2500, resonance: 0.2, attackSeconds: 0.018, decaySeconds: 0.24, sustain: 0.58, releaseSeconds: 0.18, saturation: 0.12 },
    { id: "sub-bass", name: "Sub Bass", role: "bass", oscillator: "sine", filter: "lowpass", cutoffHz: 180, resonance: 0.02, attackSeconds: 0.004, decaySeconds: 0.16, sustain: 0.82, releaseSeconds: 0.12 },
    { id: "bass-lead", name: "Bass Lead", role: "bass", oscillator: "hybrid", filter: "lowpass", cutoffHz: 650, resonance: 0.38, attackSeconds: 0.003, decaySeconds: 0.14, sustain: 0.64, releaseSeconds: 0.1, saturation: 0.24 },
    { id: "acid-sequencer", name: "Acid Sequencer", role: "bass", oscillator: "saw", filter: "ladder", cutoffHz: 1200, resonance: 0.78, attackSeconds: 0.002, decaySeconds: 0.19, sustain: 0.16, releaseSeconds: 0.08, saturation: 0.42 },
    { id: "ambient-drone", name: "Ambient Drone", role: "texture", oscillator: "sine", filter: "lowpass", cutoffHz: 700, resonance: 0.05, attackSeconds: 1.2, decaySeconds: 2.5, sustain: 0.92, releaseSeconds: 2.4, unison: 3, noise: 0.018 },
    { id: "noise-transition", name: "Noise Transition", role: "texture", oscillator: "noise", filter: "highpass", cutoffHz: 1600, resonance: 0.12, attackSeconds: 0.25, decaySeconds: 0.5, sustain: 0.24, releaseSeconds: 0.8, noise: 0.65, signalChain: ["filter", "delay", "reverb"] },
  ]
};
