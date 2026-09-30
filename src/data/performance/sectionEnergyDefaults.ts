import type { SectionEnergy } from '../primitives';

export const SECTION_ENERGY_DEFAULT: Record<string, SectionEnergy> = {
  intro: 1, breakdown: 1, interlude: 1, coda: 1, ending: 1, outro: 1,
  verse: 3, bridge: 3, 'pre-chorus': 3, letra: 3, A: 3,
  chorus: 5, montuno: 5, mambo: 5, solo: 5, shout: 5, drop: 5,
};
