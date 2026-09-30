export const PHRASE_TECHNIQUE_MIN_NOTES = 5;
export const PERCUSSION_ROLE_PATTERN = /percussion|drum/;
export const PERCUSSION_PHRASE_TECHNIQUE_BUDGET = 0.22;
export const BASS_ROLE_PATTERN = /bass/;
export const LEAD_ROLE_PATTERN = /lead|melody|voice/;
export const BASS_PHRASE_BUDGET_BY_GENRE: Record<string, number> = {
  idiomatic: 0.16,
  default: 0.10,
};
export const IDIOMATIC_BASS_GENRE_PATTERN = /tango|flamenco|jazz|blues|salsa|timba/;
export const LONG_TONE_FAMILY_PATTERN = /tango|jazz|folk|flamenco|salsa/;
export const LONG_TONE_FAMILY_IDS = ['bellows', 'bowed-string'];
export const LONG_TONE_FAMILY_BUDGETS: Record<string, number> = { idiomatic: 0.28, default: 0.16 };
export const LEAD_PHRASE_TECHNIQUE_BUDGET = 0.24;
export const DEFAULT_PHRASE_TECHNIQUE_BUDGET = 0.18;
