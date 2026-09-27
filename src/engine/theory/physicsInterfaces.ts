export interface UniversalImperfections {
  // Applied to all instruments
  intonationOffsetCents?: number; // Microtonal pitch drift (Just Intonation / Expressive tension)
  actuationSyncOffsetMs?: number; // Left hand / Right hand disconnect (+ is left hand late, - is right hand late)
}

export interface VibratoEnvelope {
  delayMs: number;
  rateHz: number;
  depthCents: number;
  rateRamp: number;
}

export interface GuitarTimbreControl extends UniversalImperfections {
  // Actuation (Right Hand)
  pluckPosition?: number; // 0.0 (bridge/bright) to 1.0 (neck/warm)
  fleshToNailRatio?: number; // 0.0 (all flesh) to 1.0 (all nail)
  pickAngle?: number;
  palmMuteAmount?: number;
  stringSelection?: number;
  fretNoiseLevel?: number;
  fretBuzz?: number;
  vibrato?: VibratoEnvelope;
  isHarmonic?: boolean;
  bodyHit?: string;
  sympatheticResonance?: number;
}

export interface BowedStringTimbreControl extends UniversalImperfections {
  // Bow Mechanics (Right Hand)
  bowDirection?: 'upbow' | 'downbow';
  bowPressure?: number;
  bowSpeed?: number;
  contactPoint?: number;
  rosinGripBite?: number;
  stringSelection?: string | number;
  shiftNoiseLevel?: number;
  vibrato?: VibratoEnvelope;
  mute?: 'none' | 'con_sordino';
}

export interface WindBellowsTimbreControl extends UniversalImperfections {
  // Excitation (Breath/Bellows)
  pressure?: number;
  direction?: 'open' | 'close'; // For Bandoneon
  tongueHarshness?: number;
  embouchureTension?: number;
  spitNoiseLevel?: number;
  keyClickNoise?: number; // Mechanical valve/key sounds
  vibrato?: VibratoEnvelope;
  pitchDriftCents?: number; // Intonation failure due to lung depletion
}

export interface PercussionTimbreControl extends UniversalImperfections {
  strikeLocationRadius?: number; // 0.0 center, 1.0 rim
  stickMaterialHardness?: number;
  handDampingForce?: number;
  sympatheticSnareRattle?: number;
}

export interface DistortionProfile {
  type: 'analog_tube' | 'digital_hard_clip' | 'tape_saturation' | 'bitcrush' | 'none';
  driveAmount: number; // 0.0 to 1.0
  asymmetry?: number; // Generates even vs odd harmonics
}

export interface AnalogSynthTimbreControl extends UniversalImperfections {
  // Synth / DAW Physics
  oscillatorPhase?: 'reset_on_note' | 'free_running'; // Triggers punchy bass attacks vs phase-smeared pads
  filterEnvelopeDepth?: number;
  distortion?: DistortionProfile; // Critical for 808s and Leads
  driveSaturation?: number;
  subOscillatorLevel?: number;
  sidechainDuckDepth?: number; // Physical pumping
  analogDrift?: number; // Pitch/Phase instability
  portamentoTimeMs?: number; // Glide time between notes
}

export interface SamplerTimbreControl extends UniversalImperfections {
  // MPC / Ableton Sampler Physics
  samplePlaybackRate?: number; // If pitch is changed via speed, length physically changes
  formantShiftAmount?: number; // Preserving formants vs raw pitching
  aliasingArtifacts?: number; // SP-1200 / Akai MPC60 gritty downsampling
  transientShaping?: {
    attackMs: number;
    sustainLevel: number;
  };
  distortion?: DistortionProfile;
}

export interface KeysTimbreControl extends UniversalImperfections {
  // Mechanical Excitation (Hammer/Tine)
  hammerVelocity?: number; // Speed of the physical hammer striking the string
  keyPressWeight?: number; // Force of the finger on the keybed
  strikePosition?: number; // For Rhodes/Wurlitzer
  
  // Mechanics & Resonance
  damperState?: 'full_damping' | 'half_pedal' | 'open';
  sympatheticResonance?: number;
  mechanicalNoise?: number;
}

export interface BassTimbreControl extends UniversalImperfections {
  // Right Hand Pluck/Strike Physics
  actuationMethod?: 'finger_flesh' | 'pick' | 'thumb_slap' | 'index_pop';
  pluckPosition?: number;
  
  // Left Hand Expression
  stringSelection?: number;
  palmMuteAmount?: number;
  fretNoiseLevel?: number;
  fretBuzz?: number;
  vibrato?: VibratoEnvelope;
  
  // Imperfections
  deadNoteAmount?: number;
}
