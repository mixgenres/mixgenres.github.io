import type { VoiceProfile } from './schema/voice-profile';
export const DEFAULT_VOICE_PROFILE: VoiceProfile = {
  sustain: 'decaying', role: 'comp', centre: 60, low: 36, high: 88,
  pan: 0, trim: -2, space: 0.28, ring: 2,
};

export const FAMILY_DEFAULTS: Record<string, Partial<VoiceProfile>> = {
  'bellows-and-keys': { sustain: 'sustained', centre: 60, low: 41, high: 84, pan: -0.12, trim: -1, space: 0.28, ring: 2, letRingAcrossSections: true },
  plucked:            { sustain: 'decaying',  centre: 57, low: 40, high: 84, pan: 0.18,  trim: 0,  space: 0.24, ring: 2.5 },
  bowed:              { sustain: 'sustained', centre: 64, low: 48, high: 88, pan: -0.24, trim: -2, space: 0.42, ring: 4, letRingAcrossSections: true },
  winds:              { sustain: 'blown',     centre: 69, low: 55, high: 92, pan: 0.26,  trim: -2, space: 0.34, ring: 3 },
  brass:              { sustain: 'blown',     centre: 67, low: 52, high: 88, pan: 0.3,   trim: -1, space: 0.3,  ring: 2.5 },
  voice:              { sustain: 'sustained', centre: 64, low: 50, high: 81, pan: 0,     trim: -3, space: 0.4,  ring: 4, letRingAcrossSections: true },
  'hand-drums':       { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: 0.3,  trim: -1, space: 0.18, ring: 0.5 },
  'metal-and-wood':   { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: -0.34, trim: -3, space: 0.22, ring: 0.5 },
  kit:                { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: 0,    trim: 0,  space: 0.14, ring: 0.5 },
  electronic:         { sustain: 'sustained', centre: 60, low: 36, high: 90, pan: 0,     trim: -2, space: 0.3, ring: 4 },
};
