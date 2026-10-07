import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';

const chord = (degree: number, register: number) => ({ degree, register, voicing: 'chord' as const });

/** Instrument-specific companion parts for Atmospheric; each part stays in the
 * slow, long-envelope vocabulary of this style instead of borrowing a groove. */
export function authorAmbientStudies(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    if (style.id !== 'atmospheric') return style;
    const roles = {
      ...style.roles,
      harmony: [...new Set([...(style.roles.harmony ?? []), 'piano'])],
      texture: [...new Set([...(style.roles.texture ?? []), 'string-ensemble'])],
    };
    const cells: AuthoredCell[] = [
      {
        name: 'Piano open-voicing breath and upper answer', role: 'harmony', instruments: ['piano'], cycleLength: 4,
        onsets: [0, 8], durations: [7.5, 7.5], articulation: 'legato', difficulty: 2,
        pitches: [chord(1, 48), chord(5, 55)], accents: [.62, .5], supportedEnergy: [1, 2, 3],
        description: 'Atmospheric piano foundation: leave a full phrase of air between open tonic and fifth voicings; let the pad melody remain in front.',
      },
      {
        name: 'String-ensemble slow-attack fifth cloud', role: 'texture', instruments: ['string-ensemble'], cycleLength: 4,
        onsets: [0, 8], durations: [7.75, 7.75], articulation: 'slow-attack', difficulty: 2,
        pitches: [chord(1, 60), chord(5, 67)], accents: [.4, .35], supportedEnergy: [1, 2],
        description: 'Atmospheric string-ensemble texture: two very slow open-fifth swells support the local pad phrase without adding a new beat.',
      },
    ];
    const instrumentDialects = { ...style.instrumentDialects,
      'piano:harmony': { ...style.instrumentDialects['piano:harmony'], allowedTechniques: style.instrumentTechniques.piano, defaultTechnique: 'legato' },
      'string-ensemble:texture': { ...style.instrumentDialects['string-ensemble:texture'], allowedTechniques: style.instrumentTechniques['string-ensemble'], defaultTechnique: 'slow-attack' },
    };
    return { ...style, roles, instrumentDialects, cells: [...cells, ...style.cells],
      patterns: [...new Set([...style.patterns, ...cells.map(cell => cell.name)])] };
  }) };
}
