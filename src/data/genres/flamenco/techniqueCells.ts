import type { AuthoredCell } from '../_shared/genrePack';

/** Original teaching cells, not transcriptions. Beat units are quarter notes.
 * Herrero's method documents p-i-a-m-i tremolo and multiple rhythmic rasgueado
 * formulas: https://www.oscarherrero.info/OHE/pdf/025/LCD-200E_muestra_sample.pdf
 * These cells demonstrate particular fingerings, not universal palo rules. */
export const SOLEA_TREMOLO: Omit<AuthoredCell, 'name'> = {
  role: 'lead', instruments: ['guitar'], cycleLength: 1,
  onsets: Array.from({ length: 10 }, (_, i) => 2 + i / 5),
  durations: Array(10).fill(.2),
  articulation: 'tremolo',
  accents: [1, .55, .65, .7, .6, .9, .55, .65, .7, .6],
  pitches: Array.from({ length: 10 }, (_, i) => ({ degree: i % 5 === 0 ? 1 : 3, register: i % 5 === 0 ? 48 : 64, voicing: 'single' })),
  notations: Array.from({ length: 10 }, (_, i) => ({ fingering: ['p', 'i', 'a', 'm', 'i'][i % 5], tuplet: { actual: 5, normal: 4 } })),
};

export const ALZAPUA_CIERRE: Omit<AuthoredCell, 'name'> = {
  role: 'lead', instruments: ['guitar'], cycleLength: 1, phraseEnd: true,
  onsets: [5, 5 + 1 / 6, 5 + 1 / 3], durations: [1 / 6, 1 / 6, 1 / 6],
  articulation: 'alzapua', accents: [1, .6, .8],
  pitches: [{ degree: 1, register: 48, voicing: 'single' }, { voicing: 'chord' }, { voicing: 'chord' }],
  notations: [
    { fingering: 'p', stroke: 'down', bodyTechnique: 'golpe', tuplet: { actual: 3, normal: 2 } },
    { fingering: 'p', stroke: 'down', tuplet: { actual: 3, normal: 2 } },
    { fingering: 'p', stroke: 'up', tuplet: { actual: 3, normal: 2 } },
  ],
};

export const RUMBA_STRUM: Omit<AuthoredCell, 'name'> = {
  role: 'lead', instruments: ['guitar'], cycleLength: 1,
  onsets: [0, .5, 1, 1.5, 2, 2.5, 3, 3.5], durations: Array(8).fill(.3),
  articulation: 'rasgueado', accents: [.85, .5, 1, .55, .85, .5, 1, .55],
  pitches: Array.from({ length: 8 }, () => ({ voicing: 'chord' })),
  notations: Array.from({ length: 8 }, (_, i) => ({ stroke: i % 2 ? 'up' : 'down', fingering: 'i', ...(i === 2 || i === 6 ? { bodyTechnique: 'golpe' as const } : {}) })),
};
