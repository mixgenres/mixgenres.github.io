/** Genre keyed playback response rules. Arrays preserve the original first-match precedence. */
export const UPRIGHT_BASS_DECAY_RULES = [
  { pattern: /funk|disco|ska|reggaeton|house|drum-and-bass|uk-bass/, value: 0.28 },
  { pattern: /jazz|blues|swing|gospel|soul/, value: 0.62 },
  { pattern: /reggae|afrobeats|zouk|kizomba/, value: 0.50 },
] as const;
export const UPRIGHT_BASS_CUTOFF_RULES = [
  { pattern: /jazz|blues|swing|country/, base: 5200, brightness: 4200 },
  { pattern: /funk|rock|ska|disco/, base: 4300, brightness: 3900 },
  { pattern: /reggae|zouk|kizomba|afrobeats/, base: 3600, brightness: 3200 },
] as const;
export const ELECTRIC_GUITAR_DECAY_RULES = [
  { pattern: /funk|ska|reggae|bachata/, base: 0.10, decay: 0.35 },
  { pattern: /country|blues|jazz/, base: 0.42, decay: 0.95 },
] as const;
export const ELECTRIC_GUITAR_GENRE_DRIVE_RULES = [
  { pattern: /metal|industrial/, value: 1.30 },
  { pattern: /rock|punk-hardcore|blues/, value: 1.15 },
  { pattern: /jazz|country|reggae|ska/, value: 0.88 },
] as const;
export const GUITAR_EXACT_GENRE_IDS = ['bachata', 'brazilian', 'reggae', 'ska', 'funk', 'country'] as const;
export const DRUM_URBAN_PATTERN = /house|disco|electronic|drum-and-bass|uk-bass|hip-hop|industrial/;
export const DRUM_ROCK_PATTERN = /rock|metal|punk-hardcore/;
export const DRUM_LATIN_PATTERN = /salsa|timba|cumbia|bachata|afrobeats|brazilian|reggae|ska/;
export const DRUM_REGGAE_SKA_PATTERN = /reggae|ska/;
export const DRUM_HEAVY_ROCK_PATTERN = /metal|rock|punk-hardcore/;
export const DRUM_KICK_GENRE_TUNING: Record<string, { frequency: number; tail: number }> = {
  'drum-and-bass': { frequency: 58, tail: 0.095 },
  'uk-bass': { frequency: 58, tail: 0.125 },
};
export const SALSA_MASTER_ROOM_DEPTH = 0.07;
export const ELECTRONIC_MASTER_SIDECHAIN_DEPTH = 0.34;
export const TANGO_MASTER_SIDECHAIN_DEPTH = 0.16;
