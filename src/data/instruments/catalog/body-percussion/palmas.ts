import type { InstrumentDef } from '../../schema/instrument-def';

export const palmas: InstrumentDef = {
  id: "palmas",
  name: "Palmas Flamencas",
  family: "body-percussion",
  drum: {
    low: 39,
    mid: 39,
    high: 40
  },
  voicing: "unpitched",
  
  
  polyphony: 8,
  note: "Authentic flamenco handclapping ensemble capturing both hollow, deep, cupped Palmas Sordas (for cante jondo and Soleá) and sharp, cutting, dry Palmas Claras/Fuertes (for Bulerías, Alegrías, and remates)",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.2,
    trim: -2,
    space: 0.2,
    ring: 0.5,
    ensembleSmearMs: 18
  },
  luthierPhysics: {
    category: "body_impact",
    materialDensity: 0.65,
    tension: 0.72,
    bodyResonanceVolume: 0.4,
    decayTimeFactor: 0.15,
    harmonicRichness: 0.65,
    soundboardResonanceHz: 380,
    airResonanceHz: 2800
  },
  kitComponents: [
    {
      id: "palmas-sordas",
      name: "Palmas Sordas (Cupped Muted Clap)",
      midi: 39,
      physicalType: "membrane",
      tuningHz: 380,
      decayTimeSec: 0.08,
      damping: 0.85,
      strikeZones: ["center"],
      defaultPan: 0.15,
      gainTrimDb: 0,
      
    },
    {
      id: "palmas-claras",
      name: "Palmas Claras / Fuertes (Open Sharp Clap)",
      midi: 40,
      physicalType: "metal",
      tuningHz: 2800,
      decayTimeSec: 0.04,
      damping: 0.95,
      strikeZones: ["edge"],
      defaultPan: 0.25,
      gainTrimDb: 1.5,
      
    }
  ],
  techniques: {
    articulations: ["accent", "ghost", "staccato", "open", "palmas-sordas", "palmas-claras", "palmas-fuertes"],
    techniqueMethods: [
      "palmas sordas (cupped hand accompaniment)",
      "palmas claras (sharp cutting finger slap)",
      "base compás and contratiempo interlocking",
      "flamenco bulería & soleá remate accents"
    ],
    playingStyles: ["flamenco", "bulerias", "solea", "tangos", "rumba", "alegrias", "sevillanas"],
    genreTechniques: {
      flamenco: ["accent", "ghost", "staccato", "open"],
      bulerias: ["accent", "staccato", "open"],
      solea: ["ghost", "staccato", "accent"]
    }
  },
  physicalModel: {
    model: "noise-source",
    parameters: {
      airResonance: 0.65,
      bodyResonance: 0.55,
      transientSharpness: 0.95,
      damping: 0.85
    },
    
    
  }
};
