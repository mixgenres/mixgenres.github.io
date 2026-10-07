import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { PatternEvent } from '../../schema';

const chord = (degree: number, register: number): PatternEvent['pitch'] => ({ degree, register, voicing: 'chord' });

/** The crossover's catalog already names piano, but had no playable piano part. */
export function authorChacareraPiano(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    if (style.id !== 'chacarera-crossover' || !style.instrumentTechniques.piano) return style;
    const cells: AuthoredCell[] = [
      {
        name: 'Piano six-eight chord and bass answer', role: 'harmony', instruments: ['piano'], cycleLength: 1,
        onsets: [0, 1.5], durations: [.6, .55], pitches: [chord(1, 48), chord(5, 55)],
        accents: [1, .68], articulation: 'staccato', difficulty: 2, supportedEnergy: [1, 2, 3],
        description: 'Chacarera crossover piano foundation: answer the guitar hemiola with two clipped open voicings across the local six-eight bar.',
      },
      {
        name: 'Piano offbeat chord response against bombo', role: 'harmony', instruments: ['piano'], cycleLength: 1,
        onsets: [.5, 2], durations: [.35, .35], pitches: [chord(3, 52), chord(5, 55)],
        accents: [.55, .82], articulation: 'yumba', difficulty: 3, supportedEnergy: [2, 3, 4],
        description: 'Chacarera crossover piano response: place two short chords away from the bombo anchors and keep the guitar cross-accent audible.',
      },
    ];
    const roles = { ...style.roles, harmony: [...new Set([...(style.roles.harmony ?? []), 'piano'])] };
    const instrumentDialects = { ...style.instrumentDialects,
      'piano:harmony': { ...style.instrumentDialects['piano:harmony'], allowedTechniques: style.instrumentTechniques.piano, defaultTechnique: 'staccato' },
    };
    return { ...style, roles, instrumentDialects, cells: [...cells, ...style.cells],
      patterns: [...new Set([...style.patterns, ...cells.map(cell => cell.name)])] };
  }) };
}
