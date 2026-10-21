import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { PatternEvent } from '../../schema';

/** Original study phrases, not transcriptions of the named orchestras.
 * Rhythmic models: marcato en cuatro/en dos, habanera, síncopa, yumba,
 * umpa-umpa and nuevo 3+3+2. Orchestral roles and marcato/arrastre context:
 * https://www.ignaciovarchausky.com/ (Introduction to the Orquesta Típica).
 */
const pitch = (degree: number, register: number): PatternEvent['pitch'] => ({ degree, register, voicing: 'single' });
const chord: PatternEvent['pitch'] = { voicing: 'chord' };
function cell(name: string, role: string, instrument: string, onsets: number[], durations: number[],
  articulation: string, pitches?: Array<PatternEvent['pitch']>, accents?: number[], cycleLength = 1): AuthoredCell {
  return { name, role, instruments: [instrument], onsets, durations, articulation, pitches, accents, cycleLength };
}
function line(instrument: string, name: string, onsets: number[], degrees: number[], durations: number[], articulation = 'legato', cycleLength = 2) {
  return cell(name, 'lead', instrument, onsets, durations, articulation,
    degrees.map(degree => ({ ...pitch(degree, instrument === 'violin' ? 74 : instrument === 'cello' ? 58 : instrument === 'voice' ? 64 : 65), reference: 'tonic' })), undefined, cycleLength);
}

/** Distinct teaching sentences for orchestras previously given one shared
 * tune. Rhythms demonstrate their stated roles; these are original studies. */
const SENTENCES: Record<string, { onsets: number[]; degrees: number[]; durations: number[]; accents: number[] }> = {
  canaro: { onsets: [.5,1,2,2.5,3.5,4,5,6,7], degrees: [5,3,2,1,3,5,4,2,1],
    durations: [.3,.7,.3,.7,.3,.8,.7,.7,.7], accents: [.65,.85,.55,.8,.55,.9,.72,.65,.85] },
  darienzo: { onsets: [0,.5,1.5,2,3,3.5,4,5,6,7], degrees: [1,1,5,3,2,1,3,5,2,1],
    durations: [.25,.25,.3,.25,.3,.25,.35,.35,.3,.4], accents: [1,.55,.82,.95,.75,.5,.95,.8,.68,.92] },
  'di-sarli': { onsets: [0,1.5,2.5,3.5,4,5.5,6,6.5,7.25], degrees: [5,6,5,3,4,6,5,2,1],
    durations: [1.3,.8,.8,.3,1.3,.3,.3,.55,.65], accents: [.72,.8,.65,.58,.88,.7,.6,.55,.75] },
  troilo: { onsets: [0,1.25,2,3.25,4,5.5,6.25,7.25], degrees: [1,2,3,5,4,3,2,1],
    durations: [1,.5,.9,.5,1.25,.5,.6,.6], accents: [.75,.58,.72,.88,.8,.65,.55,.72] },
  pugliese: { onsets: [0,1.5,2,3.25,4,5,5.5,6.5,7.25], degrees: [1,3,2,1,5,6,5,2,1],
    durations: [1.25,.35,.9,.45,.85,.3,.75,.4,.55], accents: [.9,.55,.65,.5,1,.65,.82,.58,.8] },
  salgan: { onsets: [.5,1.25,1.5,2.5,3.25,4.25,5,5.5,6.25,7,7.5], degrees: [3,5,6,5,3,4,2,3,5,2,1],
    durations: [.5,.15,.6,.5,.5,.5,.3,.5,.5,.3,.35], accents: [.7,.5,.85,.65,.55,.78,.5,.65,.8,.6,.85] },
  'electrotango-gotan': { onsets: [0,1.5,3,4,5.5,6.5,7], degrees: [1,5,7,5,3,2,1],
    durations: [.5,.5,.65,.7,.5,.3,.8], accents: [.85,.65,.7,.82,.6,.55,.8] },
  'electro-rock-bajofondo': { onsets: [.5,1,2.5,3.5,4,5.25,6,6.75,7.5], degrees: [1,1,5,7,6,5,3,2,1],
    durations: [.3,.8,.6,.3,.9,.5,.5,.5,.35], accents: [.8,.95,.7,.8,.9,.6,.75,.55,.85] },
  'modern-orquesta': { onsets: [0,.75,1.5,3,4,5.25,6,6.5,7,7.5], degrees: [1,5,8,7,6,4,5,3,2,1],
    durations: [.5,.5,1,.6,.9,.5,.3,.3,.3,.35], accents: [1,.65,.85,.55,.75,.5,.7,.6,.5,.82] },
};
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
  canyengue: { description: 'Early tango in a clipped two-beat feel: keep the attacks dry, the bass bouncing, the bandoneon phrases compact, and drag the low note into the closing tonic.', patterns: ['Canyengue phrase', 'Clipped phrase', 'Habanera bass', 'Bass drag'] },
  'guardia-nueva-de-caro': { description: 'De Caro opens the ensemble texture: the violin carries independent counterlines while piano and bandoneon answer between phrases.', patterns: ['Violin counterline', 'Bandoneon answer', 'Chromatic link'] },
  canaro: { description: 'Canaro favors clear dance strains, an even pulse and direct melodic returns; keep fills short so the refrain stays easy to follow.', patterns: ['Dance marcato', 'Clear refrain', 'Short fill'] },
  darienzo: { description: 'D’Arienzo turns the pulse into propulsion: hard piano marcato, clipped bandoneon attacks and sharp parada stops.', patterns: ['Hard marcato', 'Staccato bandoneon', 'Parada'] },
  'di-sarli': { description: 'Di Sarli pairs a rolling, even piano pulse with broad violin melody; preserve the legato line and leave the accompaniment settled underneath.', patterns: ['Lyrical violin', 'Rolling piano', 'Even bass'] },
  troilo: { description: 'Troilo gives the bandoneon a vocal, breathing line; leave a clear breath at the end of the phrase and let the violin answer rather than doubling every note.', patterns: ['Singing bandoneon', 'Bandoneon breath', 'Violin answer'] },
  pugliese: { description: 'Pugliese shapes time with weighted yumba attacks, meaningful silences and a slow ensemble crescendo, then separates the two closing hits with a final pocket of air.', patterns: ['Yumba', 'Dramatic rest', 'Long crescendo', 'Chan-chan close'] },
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

// Tango's mugre is not a generic shuffle or loose humanize switch. Each
// orquesta gets a small amount of correlated push/pull and accent grain, with
// a tighter pocket for styles whose identity depends on clean dance pulse.
const MUGRE_BY_STYLE: Record<string, number> = {
  'golden-age': .42, canyengue: .62, 'guardia-nueva-de-caro': .52,
  canaro: .26, darienzo: .55, 'di-sarli': .2, troilo: .66,
  pugliese: .82, salgan: .68, 'tango-cancion': .4, milonga: .38,
  vals: .24, 'piazzolla-nuevo-tango': .58, 'electrotango-gotan': .08,
  'electro-rock-bajofondo': .34, 'modern-orquesta': .46,
  'chacarera-crossover': .32,
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
  if (id === 'canyengue') return 'Canyengue mugre comp';
  if (id === 'milonga') return instrument === 'guitar' ? 'Milonga guitar habanera' : 'Milonga piano lift';
  if (id === 'vals') return 'Waltz chords';
  if (id === 'piazzolla-nuevo-tango') return '3+3+2 chords';
  if (id === 'electrotango-gotan') return instrument === 'synth' ? 'Gotan synth answer' : 'Gotan offbeat chords';
  if (id === 'electro-rock-bajofondo') return instrument === 'synth' ? 'Bajofondo synth answer' : 'Bajofondo piano backbeat';
  if (id === 'guardia-nueva-de-caro') return 'De Caro sync';
  if (id === 'troilo') return 'Troilo piano pocket';
  if (id === 'modern-orquesta') return 'Orquesta block chords';
  if (id === 'tango-cancion') return instrument === 'guitar' ? 'Tango guitar replies' : 'Tango piano anchors';
  if (id === 'chacarera-crossover') return 'Guitar hemiola';
  return 'Four-beat marcato';
}

export function authorTangoArrangements(input: GenrePackInput): GenrePackInput {
  return { ...input, styles: input.styles.map(style => {
    const id = style.id;
    const beats = Number(style.meter.split('/')[0]) * 4 / Number(style.meter.split('/')[1]);
    const electronic = id === 'electrotango-gotan' || id === 'electro-rock-bajofondo';
    let lines: AuthoredCell[];
    let canyengueDrag: AuthoredCell | undefined;
    if (beats === 2) {
      const bandoneonName = id === 'canyengue' ? 'Canyengue clipped two-bar motif' : 'Milonga clipped two-bar motif';
      const violinAnswerName = id === 'canyengue' ? 'Canyengue clipped violin answer' : 'Milonga violin answer';
      lines = [line('bandoneon', bandoneonName, [0, .5, .75, 1.5, 2, 2.75, 3, 3.5], [1, 3, 5, 3, 4, 3, 2, 1], [.35, .18, .55, .35, .55, .18, .35, .35], 'staccato'),
        line('violin', violinAnswerName, [1, 1.5, 2.5, 3, 3.5], [5, 3, 4, 2, 1], [.35, .35, .35, .35, .35], 'staccato')];
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
        line('violin', 'Chacarera hemiola response', [0, 1, 2, 3, 4, 5], [5, 3, 1, 4, 2, 1], [.8, .8, .8, .8, .8, .8]),
        line('bandoneon', 'Chacarera bandoneon response', [1, 2.5, 4, 5.5], [3, 5, 4, 1], [.55, .45, .75, .6], 'staccato')];
    } else {
      const lyrical = ['di-sarli', 'troilo', 'guardia-nueva-de-caro'].includes(id);
      const urgent = id === 'darienzo';
      const bandoneonPhrase = line('bandoneon', lyrical ? 'Singing bandoneon sentence' : 'Marcato motif with a contrasting answer',
        lyrical ? [0, 1.5, 2, 3, 4, 5.5, 6.5, 7] : [0, .5, 1, 2, 2.5, 3, 4, 5.5, 6, 7],
        lyrical ? [1, 3, 5, 3, 4, 3, 2, 1] : [1, 3, 5, 4, 3, 2, 5, 4, 2, 1],
        lyrical ? [1.3, .4, .8, .8, 1.3, .8, .4, .8] : [.35, .35, .75, .35, .35, .7, 1.25, .35, .75, .75],
        urgent ? 'staccato' : lyrical ? 'tenuto' : 'marcato');
      if (id === 'troilo') {
        // A little written push and pull gives the cantando line expressive
        // fraseo while piano and bass keep the dance pulse underneath it.
        bandoneonPhrase.microtiming = [0, 24, -12, 32, -18, 22, -8, 10];
        bandoneonPhrase.description = 'Shape the two-bar cantando phrase with a gentle push and pull against the steadier piano and bass; keep the notes connected, then leave room for the violin answer.';
      }
      lines = [bandoneonPhrase,
        line('violin', lyrical ? 'Long bowed countermelody' : 'Bowed answering phrase',
          lyrical ? [0, 2, 4, 6] : [1.5, 3, 4.5, 5, 6, 7], lyrical ? [5, 3, 4, 2] : [5, 3, 4, 3, 2, 1],
        lyrical ? [1.8, 1.8, 1.8, 1.8] : [1.25, .75, .4, .75, .75, .75])];
    }
    const sentence = SENTENCES[id];
    if (sentence) {
      const primary = lines.findIndex(item => item.instruments?.includes('bandoneon'));
      if (primary >= 0) {
        const original = lines[primary];
        lines[primary] = { ...original, onsets: [...sentence.onsets], durations: [...sentence.durations],
          pitches: sentence.degrees.map(degree => ({ ...pitch(degree, 65), reference: 'tonic' })),
          accents: [...sentence.accents], velocities: [...sentence.accents],
        };
      }
    }
    if (id === 'troilo') {
      const breath = line('bandoneon', 'Troilo line-ending breath', [0, 1.5, 2, 3, 4, 5.5, 6.5],
        [1, 3, 5, 3, 4, 3, 2], [1.3, .4, .8, .8, 1.3, .8, .38], 'tenuto');
      breath.microtiming = [0, 24, -12, 32, -18, 22, -8];
      breath.shortName = 'Bandoneon breath';
      breath.difficulty = 2;
      breath.description = 'Shape the two-bar cantando line with a gentle push and pull, then release the last tone early and leave the final beat open before the next phrase.';
      lines.push(breath);
    }
    if (id === 'milonga') {
      // A short double-time turn makes this sample demonstrate traspié as an
      // optional phrase interpretation while the habanera accompaniment keeps
      // the underlying milonga pulse clear. It is a playable study gesture,
      // not a fixed transcription or a replacement for the main melody.
      const traspie = line('bandoneon', 'Milonga traspié double-time turn',
        [0, .5, 1, 1.25, 1.5, 2, 2.5, 3, 3.25, 3.5],
        [1, 3, 5, 4, 3, 4, 2, 5, 3, 1],
        [.34, .28, .18, .16, .3, .34, .28, .18, .16, .3], 'staccato');
      traspie.shortName = 'Milonga traspié';
      traspie.sectionUsage = ['traspie'];
      traspie.difficulty = 2;
      traspie.description = 'Keep the habanera pulse steady underneath; add a brief double-time pickup on the second beat, then settle back into the regular milonga phrase.';
      traspie.accents = [1, .55, .82, .48, .72, 1, .55, .82, .48, .72];
      lines.push(traspie);
    }
    if (id === 'canyengue') {
      const phrase = line('bandoneon', 'Canyengue clipped two-bar call', [0, .5, 1, 1.5, 2, 2.5, 3, 3.5],
        [1, 5, 3, 1, 4, 2, 5, 1], [.22, .28, .42, .22, .22, .38, .22, .42], 'staccato');
      phrase.shortName = 'Canyengue phrase';
      phrase.description = 'Shape four clipped calls over two 2/4 bars, alternating a strong downbeat with short pickup strokes; keep the small-group bounce dry.';
      const clipped = line('bandoneon', 'Canyengue syncopated phrase turn', [0, .75, 1.5, 2, 2.75, 3.5],
        [1, 3, 5, 4, 2, 1], [.26, .2, .42, .26, .2, .48], 'staccato');
      clipped.shortName = 'Clipped phrase';
      clipped.description = 'Use a six-note syncopated turn to vary the main call; accent the long chord tone and leave the last pickup light.';
      const drag = cell('Canyengue bass arrastre into tonic', 'bass', 'upright-bass', [1.75], [.25],
        'arrastre', [pitch(7, 40)], [1]);
      drag.shortName = 'Bass drag';
      drag.difficulty = 2;
      drag.description = 'On the last sixteenth of the 2/4 bar, draw the dominant leading tone into the next downbeat; keep the gesture short and let the tonic land cleanly.';
      lines = [phrase, clipped, ...lines.filter(item => item.instruments?.[0] !== 'bandoneon')];
      canyengueDrag = drag;
    }
    if (id === 'piazzolla-nuevo-tango') {
      // One accented leading tone drags into the returning hook. The sample
      // assigns this cell only to its one-bar transition, not every phrase.
      const pickup = cell('Nuevo tango bandoneon arrastre pickup', 'lead', 'bandoneon', [3.75], [.25],
        'arrastre', [pitch(7, 65)], [1]);
      pickup.shortName = 'Bandoneon drag';
      pickup.difficulty = 3;
      pickup.description = 'Play one accented leading tone on the last sixteenth, sliding into the next bar’s returning hook.';
      lines.push(pickup);
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
    if (beats === 2) {
      accompaniment = [...(style.roles.harmony ?? []).map(instrument => habanera(instrument, 'harmony')), habanera('upright-bass', 'bass')];
      if (id === 'canyengue') {
        const piano = accompaniment.find(item => item.instruments?.[0] === 'piano')!;
        piano.name = 'Canyengue uneven habanera chord comp';
        piano.accents = [1, .46, .84, .56];
        piano.microtiming = [2, -5, 3, -3];
        piano.shortName = 'Canyengue mugre comp';
        piano.description = 'Keep the clipped two-beat habanera recognizable, but let the light pickup lean early and the next chord drag slightly. Leave the closing bass arrastre exposed.';
      } else {
        const guitar = accompaniment.find(item => item.instruments?.[0] === 'guitar')!;
        guitar.shortName = 'Milonga guitar habanera';
        guitar.description = 'Keep the four-part habanera-derived strum light and even enough to carry the quick dance. The piano punctuates different slots instead of doubling this cell.';
        const piano = accompaniment.find(item => item.instruments?.[0] === 'piano')!;
        piano.name = 'Milonga offbeat piano lift';
        piano.onsets = [.5, 1.25];
        piano.durations = [.22, .22];
        piano.accents = [.58, .74];
        piano.microtiming = [-3, -2];
        piano.shortName = 'Milonga piano lift';
        piano.description = 'Add two compact chord lifts between the guitar’s habanera attacks. Keep the piano dry and light so the guitar and bass preserve the quick two-beat walk.';
      }
    }
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
    else if (id === 'tango-cancion') {
      const piano = cell('Sparse vocal-supporting piano anchors', 'harmony', 'piano', [0, 2], [1.35, 1.35], 'tenuto', [chord, chord]);
      piano.shortName = 'Tango piano anchors';
      piano.description = 'Hold two soft harmonic anchors beneath the sung line. Release into the written breath so the singer and bandoneon can own the phrase ending.';
      const guitar = cell('Guitar replies in the vocal gaps', 'harmony', 'guitar', [.75, 2.75], [.24, .24], 'staccato', [chord, chord], [.5, .62]);
      guitar.shortName = 'Tango guitar replies';
      guitar.description = 'Place two quiet guitar chords in the spaces between lyric attacks. Keep the texture sparse and let the singer’s cadence open a full-bar breath.';
      accompaniment = [piano, guitar, bass([0, 2], [1.3, 1.3], [1, 5])];
    }
    else if (electronic) {
      const rock = id === 'electro-rock-bajofondo';
      const piano = cell(rock ? 'Bajofondo piano rock backbeat' : 'Gotan electronic tango offbeat chords', 'harmony', 'piano',
        rock ? [1, 3] : [.5, 2.5], rock ? [.24, .24] : [.35, .35], 'staccato', [chord, chord], rock ? [.72, .9] : undefined);
      const synth = cell(rock ? 'Bajofondo synth tango answer' : 'Gotan electronic harmony answer', 'harmony', 'synth',
        rock ? [.5, 2.5, 3.5] : [1.5, 3.5], rock ? [.2, .2, .28] : [.35, .35], 'staccato', rock ? [chord, chord, chord] : [chord, chord], rock ? [.68, .46, .76] : undefined);
      piano.shortName = conciseCellLabel(id, piano);
      synth.shortName = conciseCellLabel(id, synth);
      piano.description = rock
        ? 'Land compact piano chords with the rock backbeat; let the guitar and drum kit carry the weight while the bandoneon keeps a tango accent in the gaps.'
        : 'Keep the two piano chops behind the stable electronic pulse. Leave the larger phrase movement and hook returns to the acoustic tango lines.';
      synth.description = rock
        ? 'Use three clipped synth answers as a riff around the rock backbeat. Leave low-end weight to the synth bass pulse and keep the middle register clear for bandoneon.'
        : 'Answer the bandoneon hook on the later offbeats with two restrained synth chords; keep the pulse steady and let the acoustic line remain forward.';
      accompaniment = [piano, synth,
        { ...bass([0, 1.5, 3], [.9, .6, .7], [1, 5, 1], 'synth'), articulation: 'staccato' }, ...style.cells.filter(c => c.role === 'percussion' && !c.phraseEnd)];
    }
    else if (id === 'chacarera-crossover') accompaniment = [cell('Guitar hemiola against compound bombo', 'harmony', 'guitar', [0, 1, 2], [.4, .4, .4], 'staccato', [chord, chord, chord]),
      { ...bass([0, 1.5], [.7, .7], [1, 5], 'bass'), articulation: 'staccato' }, cell('Bombo compound pulse and cross-accent', 'percussion', 'bombo-leguero', [0, .5, 1, 1.5, 2, 2.5], [.15, .15, .15, .15, .15, .15], 'accent', undefined, [1, .45, .8, 1, .8, .45])];
    else if (id === 'guardia-nueva-de-caro') {
      const piano = cell('De Caro syncopated piano marcato', 'harmony', 'piano', [0, .75, 2, 2.75], [.38, .2, .38, .2], 'marcato', [chord, chord, chord, chord], [1, .54, .9, .62]);
      piano.shortName = 'De Caro sync';
      piano.microtiming = [0, -3, 0, -3];
      piano.description = 'Keep a firm first and third beat, then push short chords toward the next beats. This leaves the violin and bandoneon free to cross in independent lines.';
      accompaniment = [piano, bass()];
    }
    else if (id === 'troilo') {
      const piano = cell('Troilo steady piano under cantando', 'harmony', 'piano', [0, .75, 2, 3], [.55, .22, .5, .22], 'marcato', [chord, chord, chord, chord], [.88, .48, .78, .56]);
      piano.shortName = 'Troilo piano pocket';
      piano.microtiming = [0, -2, 1, -2];
      piano.description = 'Keep a settled dance anchor under the elastic bandoneon sentence, with two light anticipations instead of matching its rubato note for note.';
      accompaniment = [piano, bass()];
    }
    else if (id === 'modern-orquesta') {
      const piano = cell('Modern orquesta broad marcato block', 'harmony', 'piano', four, [.72, .42, .72, .42], 'marcato', four.map(() => chord), [1, .56, .9, .6]);
      piano.shortName = 'Orquesta block chords';
      piano.description = 'Use broad, weighty attacks on the main beats, then shorten the releases to make room for the exposed replies and the later full-ensemble re-entry.';
      accompaniment = [piano, bass()];
    }
    else accompaniment = [marcato('piano', id === 'darienzo' ? [1, .9, 1, .9] : id === 'golden-age' ? [1, .62, .94, .62] : id === 'canaro' ? [1, .74, .88, .72] : undefined), bass()];
    // The expanded catalog roster uses Cello as a quiet chamber color in the
    // strongest ensemble passage. Give it its own low bowed answer and a
    // separate return phrase so it never inherits the Violin contour merely
    // because both parts are bowed strings.
    const celloOnsets = beats === 3 ? [0, 1, 2] : beats === 2 ? [0, .75, 1.5] : [0, 1.5, 2.5];
    const celloDurations = beats === 3 ? [.95, .65, .9] : beats === 2 ? [.65, .45, .4] : [.9, .7, .9];
    const celloDegrees = beats === 3 ? [1, 3, 5] : beats === 2 ? [1, 5, 3] : [1, 5, 3];
    const celloCounterline = cell(`${id} low bowed counterline`, 'harmony', 'cello', celloOnsets, celloDurations,
      'legato', celloDegrees.map(degree => pitch(degree, 58)), [1, .62, .82, .58].slice(0, celloOnsets.length));
    celloCounterline.shortName = 'Cello counterline';
    celloCounterline.description = 'Let the added Cello answer underneath the tango line with a low connected contour; keep the phrase light enough for the piano and bandoneon marcato to remain clear.';
    const celloAnswer = cell(`${id} low bowed answer return`, 'harmony', 'cello',
      celloOnsets.map((onset, index) => onset + (index === 0 ? .25 : 0)),
      celloDurations.map(duration => Math.max(.35, duration * .82)),
      'tenuto', celloDegrees.slice().reverse().map(degree => pitch(degree, 58)), [1, .72, .86, .6].slice(0, celloOnsets.length));
    celloAnswer.shortName = 'Cello answer';
    celloAnswer.description = 'Return with a shorter reversed Cello answer at the next ensemble entrance, leaving a small breath before the following tango phrase.';
    accompaniment.push(celloCounterline, celloAnswer);
    // Chamber teaching colors answer the principal orchestra. Keep electric
    // bass and bombo out of an orquesta típica expansion; extra voices use
    // separate registers and phrase gaps instead of another low pulse.
    if (!electronic && id !== 'chacarera-crossover') {
      const lyrical = ['di-sarli','troilo','tango-cancion','vals'].includes(id);
      const shape = beats === 2 ? [.5,1.25,2.5,3.25] : beats === 3 ? [1,2,4,5] : lyrical ? [1,3,5,7] : [.75,2.5,4.75,6.5];
      const viola = cell(`${id} viola inner answer`, 'harmony', 'viola', shape,
        shape.map(()=>lyrical?.8:.38), 'arco', [3,2,4,3].map(d=>pitch(d,60)), [.55,.68,.5,.72], 2);
      viola.shortName='Viola inner voice';
      viola.description='Answer between the principal violin entries in a lower register. Keep the four-note inner line quiet; it is a chamber teaching color rather than a second melody in unison.';
      const clarinet = cell(`${id} clarinet phrase answer`, 'lead', 'clarinet',
        shape.map(p=>p+.125),shape.map(()=>lyrical?.65:.28),lyrical?'legato':'staccato',
        [5,3,2,1].map(d=>pitch(d,70)),[.55,.66,.58,.72],2);
      clarinet.shortName='Clarinet reply';
      clarinet.description='Play a short breath-sized reply after the strings, tapering to the tonic. Leave the next melody entrance clear; this is an optional expanded-ensemble study.';
      accompaniment.push(viola,clarinet);
      if (!accompaniment.some(c=>c.instruments?.includes('guitar'))) {
        const guitar = cell(`${id} guitar upper-string reply`, 'harmony', 'guitar',
          shape,shape.map(()=>.22),'fingerstyle',[1,5,3,2].map(d=>pitch(d,55)),[.58,.44,.6,.48],2);
        guitar.shortName='Guitar plucked reply';
        guitar.description='Pick a quiet middle-register reply in the piano gaps. Do not double the contrabass or strum another chord on every marcato beat.';
        accompaniment.push(guitar);
      }
    }
    if (id === 'piazzolla-nuevo-tango') {
      const samplerTexture = cell('Nuevo tango sampled texture answer', 'harmony', 'sampler', [1.5, 3.5], [.22, .22],
        'staccato', [chord, chord], [.62, .78]);
      samplerTexture.shortName = 'Sampler texture';
      samplerTexture.description = 'Use two dry sampled texture hits as a restrained production color around the 3+3+2 ostinato; leave the bandoneon and piano attacks in front.';
      accompaniment.push(samplerTexture);
    }
    if (canyengueDrag) accompaniment.push(canyengueDrag);
    if (id === 'piazzolla-nuevo-tango') {
      const bassPickup = cell('Nuevo tango bass arrastre pickup', 'bass', 'upright-bass', [3.75], [.25],
        'arrastre', [pitch(7, 40)], [1]);
      bassPickup.shortName = 'Bass drag';
      bassPickup.difficulty = 3;
      bassPickup.description = 'Drag one accented leading tone into the next bar’s downbeat; keep it to the written transition.';
      accompaniment.push(bassPickup);
    }
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
    if (id === 'darienzo') {
      const syncopaBurst = cell('D’Arienzo three-hit syncopa burst', 'lead', 'bandoneon',
        [.75, 1.75, 2.75], [.22, .22, .22], 'staccato', [pitch(3, 65), pitch(4, 65), pitch(5, 65)], [1, .72, .9]);
      syncopaBurst.shortName = 'Síncopa burst';
      syncopaBurst.sectionUsage = ['syncopa-burst'];
      syncopaBurst.difficulty = 2;
      syncopaBurst.description = 'Play three crisp offbeat attacks against the steady four-beat marcato; release each pickup cleanly so the following downbeat stays clear.';
      lines.push(syncopaBurst);

      const parada = (instrument: string, role: string, note: PatternEvent['pitch']): AuthoredCell => {
        const hit = cell('D’Arienzo parada: clipped downbeat then rest', role, instrument, [0], [.18], 'staccato', [note], [1]);
        hit.shortName = 'Parada hit';
        hit.sectionUsage = ['parada'];
        hit.difficulty = 1;
        hit.description = 'Strike one short, accented downbeat with the ensemble, release it cleanly, and keep the remaining beats empty until the next theme enters.';
        return hit;
      };
      // A parada is a punctuated stop: the orchestra lands together, then the
      // notated space carries the tension. It is distinct from Pugliese’s bar
      // of complete silence and keeps a playable ensemble cue in this sample.
      lines.push(parada('bandoneon', 'lead', pitch(1, 65)), parada('violin', 'lead', pitch(1, 74)));
      accompaniment.push(parada('piano', 'harmony', chord), parada('upright-bass', 'bass', pitch(1, 40)));
    }
    if (id === 'pugliese') {
      // The sample's last bar is a separated two-hit signoff. Keep this cue
      // local to the ending so its long silence does not become a looped groove.
      const cadenceLine = (instrument: string, degrees: number[], durations: number[]) => {
        const close = line(instrument, 'Pugliese chan-chan close: two separated attacks', [0, 2.5], degrees, durations, 'staccato', 1);
        close.timingLock = 'ensemble';
        close.shortName = 'Chan-chan close';
        close.difficulty = 2;
        close.description = 'Land the tonic close in two short ensemble attacks, then leave the remaining beat empty; make the space between hits audible.';
        close.accents = [1, .58];
        close.articulations = ['marcato', 'staccato'];
        return close;
      };
      lines.push(cadenceLine('bandoneon', [5, 1], [.48, .28]));
      lines.push(cadenceLine('violin', [7, 1], [.48, .28]));
      const pianoClose = cell('Pugliese chan-chan close: two separated attacks', 'harmony', 'piano', [0, 2.5], [.48, .28], 'staccato', [chord, chord], [1, .58]);
      pianoClose.timingLock = 'ensemble';
      pianoClose.shortName = 'Chan-chan close';
      pianoClose.difficulty = 2;
      pianoClose.description = 'Strike a weighty first chord, answer it softly after the long gap, and release into the final silence.';
      pianoClose.articulations = ['yumba', 'staccato'];
      const bassClose = cell('Pugliese chan-chan close: two separated attacks', 'bass', 'upright-bass', [0, 2.5], [.38, .24], 'pizzicato',
        [pitch(5, 40), pitch(1, 40)], [1, .58]);
      bassClose.timingLock = 'ensemble';
      bassClose.shortName = 'Chan-chan close';
      bassClose.difficulty = 2;
      bassClose.description = 'Anchor the two separated ensemble attacks on dominant then tonic; leave the final beat silent.';
      accompaniment.push(pianoClose, bassClose);
    }
    if (id === 'modern-orquesta') {
      const tuttiHit = (instrument: string, role: string, note: PatternEvent['pitch']) => {
        const hit = cell('Modern orquesta coordinated tutti hit', role, instrument, [0], [.2], 'marcato', [note], [1]);
        hit.shortName = 'Tutti hit';
        hit.sectionUsage = ['tutti-hit'];
        hit.difficulty = 2;
        hit.description = 'Strike one short, accented tone or chord together after the full-bar corte, release cleanly, then open into the longer variation.';
        return hit;
      };
      // The modern-orquesta sample uses the catalog's dynamic-block vocabulary:
      // an actual full-ensemble cut, one coordinated re-entry, then a longer
      // variation. Keep this attack local to its one-bar cue.
      lines.push(tuttiHit('bandoneon', 'lead', pitch(1, 65)), tuttiHit('violin', 'lead', pitch(1, 74)));
      accompaniment.push(tuttiHit('piano', 'harmony', chord), tuttiHit('upright-bass', 'bass', pitch(1, 40)));
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
      cello:['arco','legato','tenuto','accent'], viola:['arco','legato','tenuto','accent'],
      clarinet:['legato','staccato','accent'],
      ...(id === 'pugliese' ? { piano: [...new Set([...(style.instrumentTechniques.piano ?? []), 'yumba'])] } : {}),
    };
    const dialects = { ...style.instrumentDialects };
    dialects['cello:harmony']={allowedTechniques:techniques.cello,defaultTechnique:'arco'};
    dialects['viola:harmony']={allowedTechniques:techniques.viola,defaultTechnique:'arco'};
    dialects['clarinet:lead']={allowedTechniques:techniques.clarinet,defaultTechnique:'legato'};
    if (dialects['piano:harmony']) dialects['piano:harmony'] = { ...dialects['piano:harmony'], allowedTechniques: techniques.piano };
    const cells = [...lines, ...accompaniment].map(item => ({ ...item, shortName: conciseCellLabel(id, item) }));
    const authored = pedagogy[id];
    const teachingPatterns = [...new Set([...(authored?.patterns ?? style.patterns), 'Cello counterline', 'Cello answer', ...(id === 'piazzolla-nuevo-tango' ? ['Sampler texture'] : [])])];
    const mix = id === 'canyengue' ? {
      ...style.mix,
      character: { ...style.mix.character, dryness: .76, bassForward: .58, width: .34, transientSnap: .84 },
      ...(style.mix.stage ? { stage: {
        ...style.mix.stage, width: .34, depthRange: .28,
        roleWidth: { ...style.mix.stage.roleWidth, lead: .14, harmony: .38, bass: .12 },
      } } : {}),
    } : style.mix;
    return { ...style, ...(authored ? { description: authored.description } : {}), patterns: teachingPatterns,
      cells, instrumentTechniques: techniques, instrumentDialects: dialects, mix,
      bassMotion: 'root-fifth', groove: { ...style.groove, swingPercentage: 50,
        roughness: MUGRE_BY_STYLE[id] ?? .35 } };
  }) };
}
