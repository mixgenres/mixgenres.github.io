export const ELECTRONIC_TRACK_GENRE_PATTERN = /electronic|house|disco|drum-and-bass|industrial|uk-bass|reggaeton|kpop/;
export const ACOUSTIC_BASS_TRACK_VOLUME_STEPS: Array<{ upperBound: number; level: number }> = [
  { upperBound: 0.5, level: 0.62 },
  { upperBound: 0.68, level: 0.68 },
  { upperBound: 0.78, level: 0.76 },
  { upperBound: Infinity, level: 0.84 },
];
export const ELECTRONIC_BASS_TRACK_VOLUME_STEPS: Array<{ upperBound: number; level: number }> = [
  { upperBound: 0.78, level: 0.82 },
  { upperBound: Infinity, level: 0.92 },
];
export const FIXED_INSTRUMENT_TRACK_VOLUME: Record<string, number> = {
  piano: 0.76,
  bandoneon: 0.82,
  cello: 0.78,
  violin: 0.86,
};
export const TRACK_VOLUME_BY_ROLE: Record<string, number> = {
  percussion: 0.80,
  lead: 0.90,
  melody: 0.90,
  voice: 0.90,
};
export const DEFAULT_TRACK_VOLUME = 0.82;
