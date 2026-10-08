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
const bass = (onsets = four, durations = [.32, .28, .32, .28], degrees = [1, 5, 1, 5], instrument = 'upright-bass') =>
  cell('Root and fifth pulse', 'bass', instrument, onsets, durations, 'pizzicato', degrees.map(degree => pitch(degree, 40)), [1, .72, .92, .72]);
const habanera = (instrument: string, role: string) => cell('Habanera dotted eighth–sixteenth–eighth–eighth', role, instrument,
  [0, .75, 1, 1.5], [.62, .18, .35, .35], instrument === 'upright-bass' ? 'pizzicato' : 'staccato',
  role === 'bass' ? [1, 1, 5, 5].map(degree => pitch(degree, 40)) : [chord, chord, chord, chord], [1, .58, .82, .65]);

const pedagogy: Record<string, { description: string; patterns: string[] }> = {
  'golden-age': { description: 'Dance-orchestra tango: keep marcato en cuatro steady, let violin and bandoneon trade the tune, and save a short variation for the close.', patterns: ['Marcato en cuatro', 'Violin answer', 'Bandoneon variation'] },
  canyengue: { description: 'Early tango in a clipped two-beat feel: keep the attacks dry, the bass bouncing, and the phrases compact.', patterns: ['Canyengue bounce', 'Clipped phrase', 'Habanera bass'] },
  'guardia-nueva-de-caro': { description: 'De Caro opens the ensemble texture: the violin carries independent counterlines while piano and bandoneon answer between phrases.', patterns: ['Violin counterline', 'Bandoneon answer', 'Chromatic link'] },
  canaro: { description: 'Canaro favors clear dance strains, an even pulse and direct melodic returns; keep fills short so the refrain stays easy to follow.', patterns: ['Dance marcato', 'Clear refrain', 'Short fill'] },
  darienzo: { description: 'D’Arienzo turns the pulse into propulsion: hard piano marcato, clipped bandoneon attacks and sharp stop-time breaks.', patterns: ['Hard marcato', 'Staccato bandoneon', 'Stop-time break'] },
  'di-sarli': { description: 'Di Sarli pairs a rolling, even piano pulse with broad violin melody; preserve the legato line and leave the accompaniment settled underneath.', patterns: ['Lyrical violin', 'Rolling piano', 'Even bass'] },
  troilo: { description: 'Troilo gives the bandoneon a vocal, breathing line; use flexible phrase endings and let the violin answer rather than doubling every note.', patterns: ['Singing bandoneon', 'Violin answer', 'Flexible ending'] },
  pugliese: { description: 'Pugliese shapes time with weighted yumba attacks, meaningful silences and a slow ensemble crescendo into the returning theme.', patterns: ['Yumba', 'Dramatic rest', 'Long crescendo'] },
  salgan: { description: 'Salgán builds a dancing piano groove with umpa-umpa bass, syncopated inner voices and a piano-led feature.', patterns: ['Umpa-umpa piano', 'Inner counterpoint', 'Piano feature'] },
  'tango-cancion': { description: 'Tango canción puts the sung line first: use sparse chords under the verse and answer the vocal cadence with bandoneon.', patterns: ['Vocal phrase', 'Sparse chords', 'Bandoneon reply'] },
  milonga: { description: 'Milonga moves in quick two-beat phrases over a habanera-derived bass; keep the groove light and the refrain returns clear.', patterns: ['Habanera bass', 'Two-beat bounce', 'Short refrain'] },
  vals: { description: 'Tango vals turns in three, with bass–chord–chord support and melodies that sweep across the bar line.', patterns: ['Three-beat bass', 'Waltz sweep', 'Violin answer'] },
  'piazzolla-nuevo-tango': { description: 'Nuevo tango sets angular melodies against a persistent 3+3+2 ostinato, then opens space for a bandoneon feature.', patterns: ['3+3+2 ostinato', 'Angular melody', 'Bandoneon feature'] },
  'electrotango-gotan': { description: 'Electrotango layers a restrained electronic pulse under a recurring tango hook; pull the beat back for a breakdown, then let bandoneon return.', patterns: ['Tango loop', 'Bandoneon hook', 'Beat breakdown'] },
  'electro-rock-bajofondo': { description: 'Electro-rock tango combines a firm rock backbeat with tango syncopation; separate distorted low-end riffs from the bandoneon answers.', patterns: ['Rock backbeat', 'Tango syncopation', 'Distorted riff'] },
  'modern-orquesta': { description: 'Modern orquesta contrasts broad ensemble attacks with quiet melodic replies; move from spacious strains to a strong collective return.', patterns: ['Ensemble attack', 'Lyrical reply', 'Dynamic return'] },
  'chacarera-crossover': { description: 'This crossover is chacarera-led: guitar and bombo mark the 6/8–3/4 hemiola, with voice and violin answering across the cycle.', patterns: ['6/8–3/4 pulse', 'Guitar copla', 'Bombo answer'] },
};

function conciseCellLabel(id: string, item: AuthoredCell): string {
  if (item.shortName && item.shortName.trim().split(/\s+/).length <= 3) return item.shortName.trim();
  const instrument = item.instruments?.[0] ?? '';
  if (item.phraseEnd) return 'Cadence fill';
  if (item.role === 'lead') {
    if (id === 'tango-cancion' && instrument === 'voice') return 'Vocal phrase';
    if (id === 'chacarera-crossover' && instrument === 'voice') return 'Chacarera copla';
    if (id === 'vals') return instrument === 'violin' ? 'Violin sweep' : 'Vals melody';
    if (id === 'piazzolla-nuevo-tango') return instrument === 'violin' ? 'Sustained counterline' : '3+3+2 hook';
    if (id === 'electrotango-gotan' || id === 'electro-rock-bajofondo') return 'Bandoneon hook';
    if (id === 'guardia-nueva-de-caro') return instrument === 'violin' ? 'Violin counterline' : 'Bandoneon answer';
    if (id === 'di-sarli') return instrument === 'violin' ? 'Lyrical violin' : 'Bandoneon phrase';
    if (id === 'troilo') return instrument === 'violin' ? 'Violin answer' : 'Singing bandoneon';
    if (id === 'milonga') return instrument === 'violin' ? 'Milonga answer' : 'Milonga phrase';
    if (id === 'canyengue') return instrument === 'violin' ? 'Clipped answer' : 'Canyengue phrase';
    if (instrument === 'voice') return 'Vocal phrase';
    if (instrument === 'violin') return 'Violin answer';
    return 'Bandoneon phrase';
  }
  if (item.role === 'bass') {
    if (id === 'vals') return 'Three-beat bass';
    if (id === 'milonga' || id === 'canyengue') return 'Habanera bass';
    if (id === 'pugliese') return 'Yumba bass';
    return 'Root–fifth bass';
  }
  if (item.role === 'percussion') return id === 'chacarera-crossover' ? 'Bombo accents' : 'Percussion pulse';
  if (id === 'pugliese') return 'Yumba';
  if (id === 'salgan') return 'Umpa-umpa piano';
  if (id === 'di-sarli') return 'Rolling piano';
  if (id === 'darienzo') return 'Hard marcato';
  if (id === 'milonga' || id === 'canyengue') return 'Habanera chords';
  if (id === 'vals') return 'Waltz chords';
  if (id === 'piazzolla-nuevo-tango') return '3+3+2 chords';
  if (id === 'electrotango-gotan' || id === 'electro-rock-bajofondo') return instrument === 'synth' ? 'Synth answer' : 'Offbeat chords';
  if (id === 'chacarera-crossover') return 'Guitar hemiola';
  return 'Four-beat marcato';
}

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
    if (id === 'canaro') {
      const refrain = line('bandoneon', 'Canaro refrain motif', [0, .5, 1.5, 2, 3, 3.5], [1, 3, 5, 4, 2, 1], [.3, .3, .6, .3, .3, .5], 'staccato', 1);
      refrain.shortName = 'Bandoneon refrain';
      lines.push(refrain);
      const violinRefrain = line('violin', 'Canaro violin refrain', [0, 1, 2, 3], [5, 3, 4, 1], [.9, .75, .75, 1], 'legato', 1);
      violinRefrain.shortName = 'Violin refrain';
      lines.push(violinRefrain);
    }
    if (id === 'di-sarli') {
      const violinReturn = line('violin', 'Di Sarli violin return', [0, 1.5, 2.5, 4, 5.5, 6.5], [5, 6, 5, 3, 2, 1], [1.4, .8, 1.2, 1.1, .8, 1.2], 'tenuto', 2);
      violinReturn.shortName = 'Violin return';
      lines.push(violinReturn);
      const bandoneonAnswer = line('bandoneon', 'Di Sarli bandoneon answer', [1, 2.5, 4, 5.5], [3, 5, 4, 1], [.8, .7, 1.1, 1.3], 'tenuto', 2);
      bandoneonAnswer.shortName = 'Bandoneon answer';
      lines.push(bandoneonAnswer);
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
    } else if (id === 'di-sarli') {
      // Di Sarli's piano should carry a smooth, even current beneath the
      // violin line, rather than the harder marcato used by dance-forward
      // orquestas. The lighter half-note bass leaves that piano motion clear.
      accompaniment = [cell('Rolling piano chords', 'harmony', 'piano', [0, 1, 2, 3], [.62, .42, .62, .42], 'tenuto',
        [chord, chord, chord, chord], [.84, .58, .78, .58]), bass([0, 2], [.62, .62], [1, 5])];
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
    else accompaniment = [marcato('piano', id === 'darienzo' ? [1, .9, 1, .9] : id === 'golden-age' ? [1, .62, .94, .62] : undefined), bass()];
    if (id === 'canaro') {
      const pickup = cell('Canaro piano pickup', 'harmony', 'piano', [0, 1.5, 2.5, 3.5], [.55, .4, .4, .3], 'staccato',
        [chord, chord, chord, chord], [1, .65, .8, .55]);
      pickup.shortName = 'Piano pickup';
      accompaniment.push(pickup);
    }
    if (id === 'di-sarli') {
      const pickup = cell('Di Sarli piano pickup', 'harmony', 'piano', [0, 1, 2.5, 3.5], [.85, .65, .8, .45], 'tenuto',
        [chord, chord, chord, chord], [.82, .55, .74, .48]);
      pickup.shortName = 'Piano pickup';
      accompaniment.push(pickup);
    }
    if (['golden-age', 'guardia-nueva-de-caro', 'canaro', 'darienzo', 'troilo', 'modern-orquesta'].includes(id)) {
      // Keep the piano's marcato downbeats crisp while a picked/arco bass
      // articulates the beat instead of only reinforcing half-note anchors.
      const low = accompaniment.find(c => c.role === 'bass' && c.instruments?.[0] === 'upright-bass');
      if (low && id !== 'pugliese') {
        low.onsets = [0, 1, 2, 3]; low.durations = [.3, .25, .3, .25];
        low.pitches = [1, 5, 1, 5].map(degree => pitch(degree, 40));
        low.accents = [1, .58, .9, .62];
      }
    }
    const techniques = { ...style.instrumentTechniques,
      ...(id === 'pugliese' ? { piano: [...new Set([...(style.instrumentTechniques.piano ?? []), 'yumba'])] } : {}),
    };
    const dialects = { ...style.instrumentDialects };
    if (dialects['piano:harmony']) dialects['piano:harmony'] = { ...dialects['piano:harmony'], allowedTechniques: techniques.piano };
    const cells = [...lines, ...accompaniment].map(item => ({ ...item, shortName: conciseCellLabel(id, item) }));
    const authored = pedagogy[id];
    return { ...style, ...(authored ? { description: authored.description, patterns: authored.patterns } : {}),
      cells, instrumentTechniques: techniques, instrumentDialects: dialects,
      bassMotion: 'root-fifth', groove: { ...style.groove, swingPercentage: 50 } };
  }) };
}
