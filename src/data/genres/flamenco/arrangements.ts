import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';

const pitch = (degree: number, register: number): NonNullable<AuthoredCell['pitches']>[number] =>
  ({ degree, register, voicing: 'single' });
const chord: NonNullable<AuthoredCell['pitches']>[number] = { voicing: 'chord' };

function guitar(name: string, onsets: number[], articulation: string[], options: {
  durations?: number[]; accents?: number[]; pitches?: Array<NonNullable<AuthoredCell['pitches']>[number]>;
  notations?: Array<NonNullable<AuthoredCell['notations']>[number]>; cycleLength?: number; phraseEnd?: boolean;
} = {}): AuthoredCell {
  return { name, role: 'lead', instruments: ['guitar'], onsets, articulations: articulation,
    durations: options.durations, accents: options.accents, pitches: options.pitches,
    notations: options.notations, cycleLength: options.cycleLength ?? 1, phraseEnd: options.phraseEnd };
}

const COMPAS_12 = [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];
const COMPAS_ACCENTS = [1, .3, .45, .8, .35, .45, .92, .32, .72, .3, .82, .38];
const SOLEA_BEATS = [0, 1.5, 3, 4, 5];

function flamencoLead(id: string): AuthoredCell[] {
  if (id === 'solea') return [
    guitar('Soleá compás: bass-string pickup, syncopated rasgueado and golpe',
      [0, .5, 1.5, 2.5, 3, 4, 4.5, 5],
      ['picado', 'rasgueado', 'rasgueado', 'golpe', 'rasgueado', 'picado', 'rasgueado', 'alzapua'],
      { durations: [.28, .22, .38, .18, .3, .24, .18, .42],
        accents: [1, .4, .84, .68, .95, .5, .68, 1],
        pitches: [pitch(1, 45), chord, chord, chord, chord, pitch(5, 57), chord, chord],
        notations: [
          { fingering: 'p' }, { stroke: 'down', fingering: 'i' }, { stroke: 'down', fingering: 'a' },
          { bodyTechnique: 'golpe', stroke: 'down' }, { stroke: 'up', fingering: 'i' }, { fingering: 'p' },
          { stroke: 'down', fingering: 'm' }, { stroke: 'up', fingering: 'p' },
        ] }),
  ];
  if (id === 'bulerias') return [
    guitar('Bulerías llamada and contratiempo rasgueado', [0, .5, 1, 1.5, 2.5, 3, 3.5, 4, 5],
      ['rasgueado', 'picado', 'rasgueado', 'rasgueado', 'alzapua', 'rasgueado', 'rasgueado', 'picado', 'rasgueado'],
      { durations: [.18, .16, .2, .24, .18, .2, .16, .22, .32], accents: [1, .45, .72, .9, .48, .95, .4, .8, 1],
        pitches: [chord, pitch(3, 64), chord, chord, chord, pitch(1, 57), chord, pitch(5, 64), chord],
        notations: [0,1,2,3,4,5,6,7,8].map(i => ({ stroke: i % 2 ? 'up' : 'down', ...(i === 5 ? { bodyTechnique: 'golpe' as const } : {}) })) }),
  ];
  if (id === 'alegrias' || id === 'guajira') return [
    guitar(`${id} bright compás with answering thumb and abanico`, [0, .5, 1.5, 2.5, 3, 4, 4.5, 5.5],
      ['rasgueado', 'picado', 'rasgueado', 'abanico', 'golpe', 'rasgueado', 'picado', 'alzapua'],
      { durations: [.24, .22, .32, .18, .2, .28, .18, .38], accents: [1, .42, .8, .68, .95, .62, .45, 1],
        pitches: [chord, pitch(3, 64), chord, chord, chord, pitch(5, 57), pitch(1, 65), chord],
        notations: [0,1,2,3,4,5,6,7].map(i => ({ stroke: i % 2 ? 'up' : 'down', ...(i === 4 ? { bodyTechnique: 'golpe' as const } : {}) })) }),
  ];
  if (id === 'seguiriya') return [
    guitar('Seguiriya asymmetric pulse, low thumb and restrained cierre', [0, .5, 1.5, 2, 3, 3.5, 4.5, 5],
      ['thumb', 'rasgueado', 'golpe', 'rasgueado', 'picado', 'rasgueado', 'alzapua', 'rasgueado'],
      { durations: [.4, .18, .22, .3, .24, .2, .18, .46], accents: [1, .4, .96, .52, .82, .42, .72, 1],
        pitches: [pitch(1, 45), chord, chord, chord, pitch(5, 64), chord, chord, chord],
        notations: [0,1,2,3,4,5,6,7].map(i => ({ stroke: i % 2 ? 'up' : 'down', ...(i === 2 ? { bodyTechnique: 'golpe' as const } : {}) })) }),
  ];
  if (id === 'tangos' || id === 'tientos') return [
    guitar(`${id} binary compás: anticipations and dry rasgueado`, [0, .5, 1, 1.5, 2, 2.5, 3, 3.5],
      ['rasgueado', 'rasgueado', 'picado', 'rasgueado', 'golpe', 'rasgueado', 'alzapua', 'rasgueado'],
      { durations: [.25, .18, .2, .24, .2, .18, .22, .28], accents: [1, .38, .72, .48, .92, .4, .8, .55],
        pitches: [chord, chord, pitch(3, 64), chord, chord, chord, pitch(5, 57), chord],
        notations: [0,1,2,3,4,5,6,7].map(i => ({ stroke: i % 2 ? 'up' : 'down', ...(i === 4 ? { bodyTechnique: 'golpe' as const } : {}) })) }),
  ];
  if (id === 'fandangos') return [
    guitar('Fandangos de Huelva ternary thumb bass and upper arpeggio', [0, .5, 1, 1.5, 2, 2.5],
      ['thumb', 'fingerstyle', 'fingerstyle', 'thumb', 'rasgueado', 'picado'],
      { durations: [.42, .18, .18, .38, .24, .18], accents: [1, .42, .35, .92, .72, .58],
        pitches: [pitch(1, 45), pitch(3, 57), pitch(5, 64), pitch(1, 45), chord, pitch(3, 65)],
        notations: ['p','i','a','p','m','i'].map(fingering => ({ fingering })) }),
  ];
  if (id === 'rumba') return [
    guitar('Rumba abanico groove with alternating thumb and golpe', [0, .5, 1, 1.5, 2, 2.5, 3, 3.5],
      ['rasgueado', 'rasgueado', 'abanico', 'rasgueado', 'golpe', 'rasgueado', 'abanico', 'rasgueado'],
      { durations: Array(8).fill(.24), accents: [.82, .45, .96, .48, .9, .45, 1, .52], pitches: Array(8).fill(chord),
        notations: [0,1,2,3,4,5,6,7].map(i => ({ stroke: i % 2 ? 'up' : 'down', ...(i === 4 ? { bodyTechnique: 'golpe' as const } : {}) })) }),
  ];
  if (id === 'taranta' || id === 'granaina-malaguena' || id === 'tonas-martinetes') return [];
  if (id === 'farruca') return [
    guitar('Farruca minor duple thumb bass, arpeggio and firm cierre', [0, .75, 1.5, 2, 2.75, 3.5],
      ['thumb', 'fingerstyle', 'rasgueado', 'picado', 'rasgueado', 'alzapua'],
      { durations: [.55, .28, .32, .25, .3, .45], accents: [1, .48, .82, .55, .72, 1],
        pitches: [pitch(1, 45), pitch(3, 57), chord, pitch(5, 64), chord, chord] }),
  ];
  if (id === 'sevillanas') return [
    guitar('Sevillanas 3/4 copla strum with picked answer', [0, .5, 1, 1.5, 2],
      ['rasgueado', 'picado', 'rasgueado', 'golpe', 'rasgueado'],
      { durations: [.3, .2, .28, .2, .4], accents: [1, .44, .76, .7, .92],
        pitches: [chord, pitch(3, 64), chord, chord, chord],
        notations: [0,1,2,3,4].map(i => ({ stroke: i % 2 ? 'up' : 'down', ...(i === 3 ? { bodyTechnique: 'golpe' as const } : {}) })) }),
  ];
  if (id === 'flamenco-jazz') return [
    guitar('Flamenco jazz compás with thumb bass and compact rasgueado', [0, .5, 1.5, 2, 3, 4, 5],
      ['thumb', 'rasgueado', 'picado', 'rasgueado', 'alzapua', 'picado', 'rasgueado'],
      { durations: [.45, .22, .24, .2, .3, .22, .38], accents: [1, .5, .76, .44, .82, .55, .92],
        pitches: [pitch(1, 45), chord, pitch(3, 64), chord, chord, pitch(5, 65), chord] }),
  ];
  if (id === 'flamenco-rock' || id === 'nuevo-flamenco') return [
    guitar(`${id} hook with palmas gaps and short rasgueado`, [0, .5, 1.5, 2, 2.5, 3, 3.5],
      ['rasgueado', 'rasgueado', 'picado', 'rasgueado', 'golpe', 'rasgueado', 'rasgueado'],
      { durations: [.3, .2, .3, .22, .18, .25, .32], accents: [1, .48, .82, .5, .92, .55, .9], pitches: Array(7).fill(chord) }),
  ];
  return [];
}

/** Give each palo its own compás and let solo guitar references stay exposed. */
export function authorFlamencoArrangements(input: GenrePackInput): GenrePackInput {
  return { ...input, styles: input.styles.map(style => {
    const id = style.id;
    const lead = flamencoLead(id);
    const cells = style.cells.filter(cell => !(lead.length && !cell.phraseEnd && cell.role === 'lead' && cell.instruments?.includes('guitar')));
    cells.unshift(...lead);
    const soloGuitar = ['taranta', 'granaina-malaguena'].includes(id);
    const soleVoice = ['tonas-martinetes'].includes(id);
    if (soloGuitar || soleVoice) {
      cells.splice(0, cells.length, ...cells.filter(cell => cell.role === 'lead' && cell.instruments?.some(instrument =>
        soloGuitar ? instrument === 'guitar' : instrument === 'voice')));
      if (soloGuitar) return { ...style, roles: { lead: ['guitar'] }, cells,
        form: style.form.map(section => ({ ...section, instruments: ['guitar'], leadInstrumentId: 'guitar' })) };
      return { ...style, roles: { lead: ['voice'] }, cells,
        form: style.form.map(section => ({ ...section, instruments: ['voice'], leadInstrumentId: 'voice' })) };
    }
    // The old shared scaffold declared both palmas and cajón on every palo.
    // Keep cajón only where its shell pulse belongs; palo-specific hand claps
    // carry the accents and the guitar articulations carry the fills.
    const pulse = cells.find(cell => cell.role === 'percussion' && cell.instruments?.[0] === 'palmas' && !cell.phraseEnd);
    if (pulse) {
      pulse.onsets = id === 'tangos' || id === 'tientos' ? [0, .5, 1, 1.5, 2, 2.5, 3, 3.5]
        : id === 'sevillanas' || id === 'fandangos' ? [0, 1, 2]
          : id === 'bulerias' ? COMPAS_12
            : COMPAS_12.filter((_, i) => i % 2 === 0);
      pulse.accents = id === 'bulerias' ? COMPAS_ACCENTS
        : id === 'solea' || id === 'alegrias' || id === 'seguiriya' || id === 'guajira' ? COMPAS_12.map((_, i) => SOLEA_BEATS.includes(COMPAS_12[i]) ? 1 : .34)
          : undefined;
      pulse.durations = pulse.onsets.map(() => .12);
      pulse.articulations = pulse.onsets.map((_, i) => i % 4 === 0 ? 'palmas-fuertes' : i % 2 ? 'palmas-sordas' : 'palmas-claras');
    }
    const cajon = cells.find(cell => cell.role === 'percussion' && cell.instruments?.[0] === 'cajon' && !cell.phraseEnd);
    if (cajon && ['solea', 'bulerias', 'alegrias', 'tangos', 'rumba', 'nuevo-flamenco'].includes(id)) {
      cajon.onsets = id === 'bulerias' || id === 'solea' || id === 'alegrias' ? SOLEA_BEATS : [0, 1, 2, 3];
      cajon.durations = cajon.onsets.map(() => .14);
      cajon.articulations = cajon.onsets.map((_, i) => i % 2 ? 'edge-slap' : 'center-bass');
      cajon.accents = cajon.onsets.map((_, i) => i === 0 || i === 2 ? .9 : .48);
    } else if (cajon) {
      for (const cell of [...cells]) if (cell.instruments?.[0] === 'cajon') cells.splice(cells.indexOf(cell), 1);
    }
    return { ...style, cells,
      description: `${style.description} Guitar compás, bass-string punctuation, rasgueado, picado and phrase-ending gestures are authored for this palo.` };
  }) };
}
