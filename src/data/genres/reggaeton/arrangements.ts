import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { PatternEvent } from '../../schema';

/** Original teaching parts, not recording transcriptions. The snare's
 * .75/1.5 + 2.75/3.5 placement follows the dembow example documented at
 * https://www.native-instruments.com/blogs/blog/reggaeton . */
const single = (degree: number): PatternEvent['pitch'] => ({ degree, register: 60, voicing: 'single' });
const chord: PatternEvent['pitch'] = { voicing: 'chord', register: 60 };

function drums(name: string, shortName: string, kicks: number[], hats: number[], openHats: number[] = []): AuthoredCell {
  const events = [
    ...kicks.map(position => ({ position, hit: 'kick', accent: .9 })),
    ...[.75, 1.5, 2.75, 3.5].map((position, i) => ({ position, hit: 'snare', accent: i % 2 ? .82 : .72 })),
    ...hats.map((position, i) => ({ position, hit: 'hat', accent: i % 2 ? .3 : .4 })),
    ...openHats.map(position => ({ position, hit: 'openHat', accent: .48 })),
  ].sort((a, b) => a.position - b.position);
  return { name, shortName, role: 'percussion', instruments: ['drums'], cycleLength: 1,
    onsets: events.map(event => event.position), hits: events.map(event => event.hit),
    accents: events.map(event => event.accent), durations: events.map(event => event.hit === 'openHat' ? .45 : .12),
    description: 'Keep the kick steady while the snare answers on the last sixteenth of beats one and three, then the offbeat of two and four. Hats stay lighter than the kick and snare.' };
}

export function authorReggaetonParts(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    if (!['classic', 'playero-underground', 'melodic'].includes(style.id)) return style;
    const melodic = style.id === 'melodic';
    const kit = drums('', melodic ? 'Dembow pocket' : style.id === 'classic' ? 'Dembow' : 'Raw dembow',
      melodic ? [0, 2] : [0, 1, 2, 3], melodic ? [.5, 1, 2.5, 3] : [0, .5, 1, 1.5, 2, 2.5, 3, 3.5]);
    const cells = style.cells.map((cell): AuthoredCell => {
      if (cell.role === 'percussion' && cell.instruments?.includes('drums') && !cell.phraseEnd) {
        return { ...cell, ...kit, name: cell.name };
      }
      if (!melodic) return cell;
      if (cell.instruments?.includes('guitar') && cell.role === 'harmony') {
        if (cell.phraseEnd) return { ...cell, shortName: 'Guitar close',
          pitches: [5, 3, 2].map(single), durations: [.35, .3, .2],
          description: 'Pick three separate chord tones into the next phrase; keep the last note short enough to leave room for the lead pickup.' };
        return { ...cell, shortName: 'Guitar arpeggio', cycleLength: 2,
          onsets: [0, .5, 1.5, 2.5, 4, 4.5, 5.5, 6.5],
          durations: [.4, .7, .65, .8, .4, .7, .65, .8],
          pitches: [1, 5, 3, 5, 1, 5, 3, 2].map(single),
          accents: [.76, .45, .55, .5, .72, .45, .58, .46],
          description: 'Pick one chord tone at a time across two bars. Let the upper notes ring lightly, and leave the final beat clear for the vocal pickup.' };
      }
      if (cell.instruments?.includes('synth') && cell.role === 'harmony') return { ...cell,
        shortName: cell.phraseEnd ? 'Pad release' : 'Soft pad', pitches: cell.onsets.map(() => chord),
        description: 'Hold a quiet chord bed behind the guitar and vocal. Release the pad at the phrase edge so the next lead entrance stays clear.' };
      if (cell.instruments?.includes('sampler') && cell.role === 'percussion') return { ...cell,
        shortName: 'Shaker replies', onsets: [.5, .75, 1.5, 2.5, 2.75, 3.5],
        durations: Array(6).fill(.12), hits: ['shaker', 'clap', 'shaker', 'shaker', 'clap', 'shaker'],
        pitches: [70, 39, 70, 70, 39, 70].map(midi => ({ midi })),
        accents: [.4, .55, .3, .4, .55, .3],
        description: 'Keep the shaker quiet and reinforce only two of the syncopated snare attacks with a clap. The sampled replies leave space between the drum hits.' };
      return cell;
    });
    const lift = drums(`${style.name} dembow chorus lift`, 'Dembow lift', [0, 1, 2, 3],
      [0, 1, 1.5, 2, 3, 3.5], [.5, 2.5]);
    lift.arrangementVariation = true;
    lift.id = `reggaeton-${style.id}-dembow-lift`;
    lift.sectionUsage = ['chorus', 'hook', 'drop'];
    const verse = drums(`${style.name} dembow verse reduction`, 'Dembow verse', [0, 2], [.5, 2.5]);
    verse.arrangementVariation = true;
    verse.id = `reggaeton-${style.id}-dembow-verse`;
    verse.sectionUsage = ['verse', 'chant'];
    const close = drums(`${style.name} dembow cadence`, 'Dembow turn', [0, 2], [.5, 1, 2.5, 3, 3.75]);
    close.phraseEnd = true;
    const additions: AuthoredCell[] = [verse, lift, close];
    if (melodic) additions.push({
      id: 'reggaeton-melodic-guitar-answer',
      name: 'Melodic reggaeton guitar answer', shortName: 'Guitar answer', role: 'harmony', instruments: ['guitar'],
      cycleLength: 2, arrangementVariation: true, sectionUsage: ['chorus', 'bridge', 'outro'],
      onsets: [.5, 1.5, 2, 3, 4.5, 5.5, 6, 7], durations: [.65, .35, .65, .6, .65, .35, .65, .6],
      pitches: [3, 5, 8, 5, 3, 2, 5, 1].map(single),
      accents: [.5, .62, .72, .48, .5, .45, .65, .58], articulation: 'fingerstyle',
      description: 'Answer the vocal with a higher picked contour in the returning chorus. Each attack is one note; the pad supplies the chord underneath.',
    });
    return { ...style, cells: [...cells, ...additions] };
  }) };
}
