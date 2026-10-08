import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { PatternEvent } from '../../schema';
import { flamencoCellLabel } from './arrangements';

const note = (degree: number, register = 62): PatternEvent['pitch'] => ({ degree, register, voicing: 'single' });
const cajonParts: Record<string, Pick<AuthoredCell, 'onsets' | 'accents' | 'articulations'>> = {
  seguiriya: { onsets: [0, 1, 2, 3.5, 5], accents: [1, .35, .72, .42, .95], articulations: ['accent', 'ghost', 'open', 'slap', 'golpe'] },
  tientos: { onsets: [0, .5, 1, 1.5, 2, 2.5, 3, 3.5], accents: [1, .32, .72, .38, .92, .34, .68, .4], articulations: ['golpe', 'ghost', 'open', 'ghost', 'slap', 'ghost', 'open', 'ghost'] },
  fandangos: { onsets: [0, 1, 1.5, 2.5], accents: [1, .45, .82, .58], articulations: ['accent', 'ghost', 'open', 'slap'] },
  guajira: { onsets: [0, .5, 1.5, 2.5, 4, 5], accents: [1, .38, .7, .52, .9, .62], articulations: ['accent', 'ghost', 'open', 'slap', 'golpe', 'open'] },
  farruca: { onsets: [0, .75, 1.5, 2, 2.75, 3.5], accents: [1, .36, .76, .95, .38, .82], articulations: ['golpe', 'ghost', 'open', 'accent', 'ghost', 'slap'] },
  sevillanas: { onsets: [0, .5, 1, 1.5, 2, 2.5], accents: [1, .35, .72, .45, .92, .5], articulations: ['accent', 'ghost', 'open', 'ghost', 'golpe', 'slap'] },
  'flamenco-jazz': { onsets: [0, .5, 1.5, 2.5, 3.5, 5], accents: [1, .32, .74, .42, .9, .62], articulations: ['golpe', 'ghost', 'open', 'slap', 'ghost', 'accent'] },
};

/** Complete the locally named cante and cajón parts where their technique
 * vocabulary already exists. Each cajón line has its own palo accent shape. */
export function authorFlamencoStudies(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const additions: AuthoredCell[] = [];
    const roles = { ...style.roles };
    const instrumentDialects = { ...style.instrumentDialects };
    const cells = [...style.cells];

    const cajon = cajonParts[style.id];
    if (cajon && style.instrumentTechniques.cajon && style.roles.percussion?.includes('cajon')
      && !style.cells.some(cell => cell.instruments?.includes('cajon') && !cell.phraseEnd)) {
      const onsets = cajon.onsets;
      additions.push({
        name: `${style.name} cajón palo pulse`, role: 'percussion', instruments: ['cajon'], cycleLength: 1,
        onsets, durations: onsets.map(() => .16), accents: cajon.accents, articulations: cajon.articulations,
        difficulty: 2, supportedEnergy: style.id === 'fandangos' ? [1, 2, 3] : [2, 3, 4],
        description: `${style.name} cajón study: alternate low center hits and edge tones around this palo's local accent cycle; it is a separate part from the palmas line.`,
      });
      instrumentDialects['cajon:percussion'] = { ...instrumentDialects['cajon:percussion'],
        allowedTechniques: style.instrumentTechniques.cajon, defaultTechnique: 'accent' };
    }

    if (style.id === 'taranta' || style.id === 'granaina' || style.id === 'malaguena') {
      if (!roles.lead.includes('voice')) roles.lead = ['voice', ...roles.lead];
      instrumentDialects['voice:lead'] = { ...instrumentDialects['voice:lead'],
        allowedTechniques: style.instrumentTechniques.voice, defaultTechnique: 'legato' };
      const granaina = style.id === 'granaina';
      const malaguena = style.id === 'malaguena';
      additions.push(
        {
          name: granaina ? 'Granaína cante held-note and melisma phrase'
            : malaguena ? 'Malagueña cante opening and descending release' : 'Taranta cante opening and descending release',
          role: 'lead', instruments: ['voice'], cycleLength: 1,
          onsets: granaina ? [0, .75, 1.75, 2.75, 3.5] : [0, 1, 2, 3.25],
          durations: granaina ? [1.2, .8, .85, .6, .42] : [1.15, .95, .75, .5],
          pitches: (granaina ? [1, 3, 5, 4, 1] : malaguena ? [1, 2, 3, 1] : [1, 2, 4, 1]).map(degree => note(degree)),
          accents: granaina ? [1, .58, .72, .62, .9] : [1, .62, .72, .88], articulation: 'legato',
          difficulty: 2, supportedEnergy: [1, 2, 3], sectionUsage: ['verse', 'solo'],
          description: granaina
            ? 'Free Granaína cante study: sustain the modal phrase, rise to the upper color tone, then release toward the tonic above the guitar cadence.'
            : malaguena
              ? 'Free Malagueña cante study: shape a long opening tone into a descending release, leaving the guitar a measured answer before the next copla.'
              : 'Free Taranta cante study: shape a long opening tone into a descending modal release, leaving the guitar answer space.',
        },
        {
          name: granaina ? 'Granaína cante cadence and breath release'
            : malaguena ? 'Malagueña cante cadence and breath release' : 'Taranta cante short response',
          role: 'lead', instruments: ['voice'], cycleLength: 1, phraseEnd: true,
          onsets: [3, 3.5, 3.75], durations: [.48, .28, .2],
          pitches: [3, 2, 1].map(degree => note(degree)), articulations: ['legato', 'vibrato', 'staccato'],
          accents: [1, .62, .85], difficulty: 3, supportedEnergy: [2, 3],
          description: `Local ${style.name} cante cadence: release the voice before the guitar's closing answer.`,
        },
      );
    }

    if (!additions.length) return style;
    const labeledAdditions = additions.map(cell => ({ ...cell, shortName: flamencoCellLabel(style.id, cell) }));
    const patternNames = labeledAdditions.map(cell => cell.shortName!);
    return { ...style, roles, instrumentDialects, cells: [...labeledAdditions, ...cells],
      patterns: [...new Set([...style.patterns, ...patternNames])] };
  }) };
}
