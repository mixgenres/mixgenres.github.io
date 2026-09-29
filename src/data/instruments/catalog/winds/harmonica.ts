import type { InstrumentDef } from '../../schema/instrument-def';

export const harmonica: InstrumentDef = {
  id: "harmonica",
  name: "10-Hole Diatonic Harmonica (Blues Harp)",
  family: "winds",
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "breath",
  elementaryModel: 10,
  makeupGain: 0.457,
  polyphony: 4,
  note: "10-hole diatonic blues harp with brass reeds, draw reed bending, tongue-blocking, and hand wah",
  acousticProfile: {
    sustain: "blown",
    role: "melody",
    centre: 72,
    low: 60,
    high: 96,
    pan: 0.18,
    trim: -2,
    space: 0.32,
    ring: 2.2
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.75,
    tension: 0.8,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 1,
    harmonicRichness: 0.88,
    airResonanceHz: 440,
    excitationType: "breath"
  },
  formantProfile: {
    f1: {
      freq: 1550,
      q: 2.8,
      gain: 0.75
    },
    f2: {
      freq: 3350,
      q: 2.2,
      gain: 0.45
    },
    tongueType: "reed-tongue",
    tongueFreq: 2500
  },
  tuningAndMechanics: {
    tuningName: "Richter Diatonic 10-Hole Harmonica",
    keyRange: {
      lowNote: "C4",
      highNote: "C7",
      lowMidi: 60,
      highMidi: 96
    }
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 3,
      speedMs: 120,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 6,
      depthCents: 35,
      onsetDelayMs: 180
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "bend", "vibrato", "ghost", "tenuto", "trill"],
    techniqueMethods: [
      "draw reed bending",
      "tongue-blocking percussive slaps",
      "cupped hand acoustic wah",
      "throat vibrato",
      "flutter tonguing"
    ],
    playingStyles: ["blues", "folk", "country", "rock", "chicago-blues"],
    genreTechniques: {
      blues: ["bend", "vibrato", "accent", "ghost"],
      country: ["bend", "staccato", "vibrato"],
      folk: ["legato", "tenuto", "vibrato"]
    }
  }
};
