import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { PatternEvent } from '../../schema';

/** Original study phrases, not transcriptions of the named orchestras.
 * Rhythmic models: marcato en cuatro/en dos, habanera, síncopa, yumba,
 * umpa-umpa and nuevo 3+3+2. See docs/sample-authenticity.md for references.
 */
const pitch = (degree: number, register: number): PatternEvent['pitch'] => ({ degree, register, voicing: 'single' });
const chord: PatternEvent['pitch'] = { voicing: 'chord' };
function cell(name: string, role: string, instrument: string, onsets: number[], durations: number[],
  articulation: string, pitches?: Array<PatternEvent['pitch']>, accents?: number[], cycleLength = 1): AuthoredCell {
  return { name, role, instruments: [instrument], onsets, durations, articulation, pitches, accents, cycleLength };
}
function line(instrument: string, name: string, onsets: number[], degrees: number[], durations: number[], articulation = 'legato', cycleLength = 2) {
  return cell(name, 'lead', instrument, onsets, durations, articulation,
    degrees.map(degree => pitch(degree, instrument === 'violin' ? 74 : instrument === 'voice' ? 64 : 65)), undefined, cycleLength);
}
const four = [0, 1, 2, 3];
const marcato = (instrument: string, accents = [1, .68, .92, .68]) => cell('Marcato en cuatro', 'harmony', instrument,
  four, [.42, .28, .42, .28], 'marcato', four.map(() => chord), accents);
const bass = (onsets = four, durations = [.5, .35, .5, .35], degrees = [1, 5, 1, 5], instrument = 'upright-bass') =>
  cell('Root and fifth pulse', 'bass', instrument, onsets, durations, 'pizzicato', degrees.map(degree => pitch(degree, 40)), [1, .72, .92, .72]);
const habanera = (instrument: string, role: string) => cell('Habanera dotted eighth–sixteenth–eighth–eighth', role, instrument,
  [0, .75, 1, 1.5], [.62, .18, .35, .35], instrument === 'upright-bass' ? 'pizzicato' : 'staccato',
  role === 'bass' ? [1, 1, 5, 5].map(degree => pitch(degree, 40)) : [chord, chord, chord, chord], [1, .58, .82, .65]);

export function authorTangoArrangements(input: GenrePackInput): GenrePackInput {
  return { ...input, styles: input.styles.map(style => {
    const id = style.id;
    const beats = Number(style.meter.split('/')[0]) * 4 / Number(style.meter.split('/')[1]);
    const electronic = id === 'electrotango-gotan' || id === 'electro-rock-bajofondo';
    let lines: AuthoredCell[];
    if (beats === 2) {
      lines = [line('bandoneon', 'Clipped two-bar milonga motif', [0, .5, .75, 1.5, 2, 2.75, 3, 3.5], [1, 3, 5, 3, 4, 3, 2, 1], [.35, .18, .55, .35, .55, .18, .35, .35], 'staccato'),
        line('violin', 'Milonga violin answer', [1, 1.5, 2.5, 3, 3.5], [5, 3, 4, 2, 1], [.35, .35, .35, .35, .35], 'staccato')];
    } else if (id === 'vals') {
      lines = [line('bandoneon', 'Flowing ternary motif', [0, 1, 1.5, 2, 3, 4.5, 5], [1, 3, 4, 5, 6, 2, 1], [.9, .4, .4, .85, 1.35, .4, .85]),
        line('violin', 'Vals countermelody', [0, 2, 3, 4, 5], [5, 3, 4, 2, 1], [1.8, .9, .9, .9, .9])];
    } else if (id === 'tango-cancion') {
      lines = [line('voice', 'Vocal sentence with breathing space', [0, 1.5, 2.5, 4, 5], [1, 3, 5, 4, 3], [1.3, .8, 1.2, .8, 1.4]),
        line('bandoneon', 'Bandoneon reply after the vocal sentence', [3.5, 6.5, 7, 7.5], [3, 5, 2, 1], [.4, .4, .4, .4], 'tenuto')];
    } else if (id === 'piazzolla-nuevo-tango' || electronic) {
      lines = [line('bandoneon', 'Angular 3+3+2 hook and answer', [0, .5, 1.5, 3, 4, 5.5, 6, 7], [1, 5, 3, 7, 6, 5, 2, 1], [.35, .35, .65, .6, .6, .35, .7, .7], 'marcato')];
      if (!electronic) lines.push(line('violin', 'Nuevo sustained counterline', [0, 2, 4, 6], [5, 3, 4, 2], [1.7, 1.7, 1.7, 1.7]));
    } else if (id === 'chacarera-crossover') {
      lines = [line('voice', 'Chacarera compound motif', [0, .5, 1.5, 2, 3, 4.5, 5], [1, 3, 5, 3, 4, 2, 1], [.4, .7, .4, .7, 1.3, .4, .7]),
        line('violin', 'Chacarera hemiola response', [0, 1, 2, 3, 4, 5], [5, 3, 1, 4, 2, 1], [.8, .8, .8, .8, .8, .8])];
    } else {
      const lyrical = ['di-sarli', 'troilo', 'guardia-nueva-de-caro'].includes(id);
      const urgent = id === 'darienzo';
      lines = [line('bandoneon', lyrical ? 'Singing bandoneon sentence' : 'Marcato motif with a contrasting answer',
        lyrical ? [0, 1.5, 2, 3, 4, 5.5, 6.5, 7] : [0, .5, 1, 2, 2.5, 3, 4, 5.5, 6, 7],
        lyrical ? [1, 3, 5, 3, 4, 3, 2, 1] : [1, 3, 5, 4, 3, 2, 5, 4, 2, 1],
        lyrical ? [1.3, .4, .8, .8, 1.3, .8, .4, .8] : [.35, .35, .75, .35, .35, .7, 1.25, .35, .75, .75],
        urgent ? 'staccato' : lyrical ? 'tenuto' : 'marcato'),
        line('violin', lyrical ? 'Long bowed countermelody' : 'Bowed answering phrase',
          lyrical ? [0, 2, 4, 6] : [1.5, 3, 4.5, 5, 6, 7], lyrical ? [5, 3, 4, 2] : [5, 3, 4, 3, 2, 1],
          lyrical ? [1.8, 1.8, 1.8, 1.8] : [1.25, .75, .4, .75, .75, .75])];
    }
    let accompaniment: AuthoredCell[];
    if (beats === 2) accompaniment = [...(style.roles.harmony ?? []).map(instrument => habanera(instrument, 'harmony')), habanera('upright-bass', 'bass')];
    else if (id === 'vals') accompaniment = [cell('Waltz bass–chord–chord', 'harmony', 'piano', [0, 1, 2], [.65, .6, .6], 'tenuto', [pitch(1, 45), chord, chord], [1, .62, .68]), bass([0], [1.3], [1])];
    else if (id === 'pugliese') {
      const piano = marcato('piano', [1, .46, .98, .46]);
      piano.name = 'Yumba: weighted first and third beats with light releases';
      piano.articulations = ['yumba', 'staccato', 'yumba', 'staccato'];
      piano.durations = [.7, .2, .7, .2];
      accompaniment = [piano, bass([0, 2], [.8, .8], [1, 1])];
    } else if (id === 'salgan') {
      accompaniment = [cell('Umpa-umpa left-hand bass and right-hand offbeat chords', 'harmony', 'piano', [0, .5, 1, 1.5, 2, 2.5, 3, 3.5],
        [.3, .25, .3, .25, .3, .25, .3, .25], 'staccato', [pitch(1, 45), chord, pitch(5, 45), chord, pitch(1, 45), chord, pitch(5, 45), chord]), bass()];
    } else if (id === 'piazzolla-nuevo-tango') accompaniment = [cell('Nuevo 3+3+2 chord ostinato', 'harmony', 'piano', [0, 1.5, 3], [.55, .55, .55], 'marcato', [chord, chord, chord], [1, .85, .9]), bass([0, 1.5, 3], [.55, .55, .55], [1, 5, 1])];
    else if (id === 'tango-cancion') accompaniment = [...(style.roles.harmony ?? []).map(instrument => cell('Sparse vocal-supporting chords', 'harmony', instrument, [0, 2], [1.35, 1.35], 'tenuto', [chord, chord])), bass([0, 2], [1.3, 1.3], [1, 5])];
    else if (electronic) accompaniment = [cell('Electronic tango offbeat chords', 'harmony', 'piano', [.5, 2.5], [.35, .35], 'staccato', [chord, chord]),
      cell('Electronic harmony answer', 'harmony', 'synth', [1.5, 3.5], [.35, .35], 'staccato', [chord, chord]),
      { ...bass([0, 1.5, 3], [.9, .6, .7], [1, 5, 1], 'synth'), articulation: 'staccato' }, ...style.cells.filter(c => c.role === 'percussion' && !c.phraseEnd)];
    else if (id === 'chacarera-crossover') accompaniment = [cell('Guitar hemiola against compound bombo', 'harmony', 'guitar', [0, 1, 2], [.4, .4, .4], 'staccato', [chord, chord, chord]),
      { ...bass([0, 1.5], [.7, .7], [1, 5], 'bass'), articulation: 'staccato' }, cell('Bombo compound pulse and cross-accent', 'percussion', 'bombo-leguero', [0, .5, 1, 1.5, 2, 2.5], [.15, .15, .15, .15, .15, .15], 'accent', undefined, [1, .45, .8, 1, .8, .45])];
    else accompaniment = [marcato('piano', id === 'darienzo' ? [1, .88, .95, .88] : undefined), bass()];
    const techniques = { ...style.instrumentTechniques, piano: [...new Set([...(style.instrumentTechniques.piano ?? []), 'yumba'])] };
    const dialects = { ...style.instrumentDialects };
    if (dialects['piano:harmony']) dialects['piano:harmony'] = { ...dialects['piano:harmony'], allowedTechniques: techniques.piano };
    return { ...style, cells: [...lines, ...accompaniment], instrumentTechniques: techniques, instrumentDialects: dialects,
      bassMotion: 'root-fifth', groove: { ...style.groove, swingPercentage: 50 } };
  }) };
}
