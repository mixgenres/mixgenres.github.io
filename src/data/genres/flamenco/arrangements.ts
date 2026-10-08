import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';

const pitch = (degree: number, register: number): NonNullable<AuthoredCell['pitches']>[number] =>
  ({ degree, register, voicing: 'single' });
const chord: NonNullable<AuthoredCell['pitches']>[number] = { voicing: 'chord' };

function guitar(name: string, onsets: number[], articulation: string[], options: {
  durations?: number[]; accents?: number[]; pitches?: Array<NonNullable<AuthoredCell['pitches']>[number]>;
  notations?: Array<NonNullable<AuthoredCell['notations']>[number]>; cycleLength?: number; phraseEnd?: boolean;
  sectionUsage?: AuthoredCell['sectionUsage']; difficulty?: number; pedagogicalStudy?: AuthoredCell['pedagogicalStudy'];
  supportedEnergy?: AuthoredCell['supportedEnergy']; description?: string;
} = {}): AuthoredCell {
  return { name, role: 'lead', instruments: ['guitar'], onsets, articulations: articulation,
    durations: options.durations, accents: options.accents, pitches: options.pitches,
    notations: options.notations, cycleLength: options.cycleLength ?? 1, phraseEnd: options.phraseEnd,
    sectionUsage: options.sectionUsage, difficulty: options.difficulty, pedagogicalStudy: options.pedagogicalStudy,
    supportedEnergy: options.supportedEnergy, description: options.description };
}

const COMPAS_12 = [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];
const COMPAS_ACCENTS = [1, .3, .45, .8, .35, .45, .92, .32, .72, .3, .82, .38];
const SOLEA_BEATS = [0, 1.5, 3, 4, 5];

const STYLE_DESCRIPTIONS: Record<string, string> = {
  solea: 'A grave 12-count palo: give cante and guitar room, mark the compás clearly, and resolve with the Andalusian cadence.',
  bulerias: 'A fast 12-count fiesta palo built from flexible compás, llamadas, falsetas, jaleos, and decisive remates.',
  alegrias: 'A bright Cádiz cantiña that balances major-mode coplas, guitar responses, escobilla energy, and a clear cierre.',
  tangos: 'A grounded duple palo with a steady guitar-and-palmas pocket, short cante phrases, and a compact remate.',
  seguiriya: 'A grave cante palo whose uneven accent cycle shapes sparse guitar answers and long, tense releases.',
  tientos: 'A slow, spacious duple palo: weight the accents, leave room around the cante, and let the rhythm rise toward tangos.',
  fandangos: 'Huelva fandangos pair a ternary guitar pattern with coplas that alternate cante and guitar response.',
  rumba: 'A syncopated dance groove led by continuous abanico strum, moving bass, and lively hand percussion.',
  'tonas-martinetes': 'Unaccompanied cante with free breathing and stark modal lines; do not impose a fixed compás or ensemble pulse.',
  taranta: 'Free-rhythm cante with an expressive guitar salida, flexible pauses, and a modal response and cadence.',
  granaina: 'Free-time cante and guitar exchange open phrases, bright upper-register falsetas, and a Granada-style cadence.',
  malaguena: 'Free-time cante leads; the guitar answers with spacious arpeggios and a measured Andalusian cadence.',
  guajira: 'A bright major-key 12-count palo with a Cuban-derived lilt, guitar strums, and a long refrain.',
  farruca: 'A minor-mode duple dance palo led by a firm guitar ostinato, measured footwork, and a dramatic cierre.',
  sevillanas: 'A dance in four linked coplas; each cycles through its refrain and closes with a clear remate.',
  'nuevo-flamenco': 'Flamenco guitar and cante meet a pop song form; keep the palo-specific compás audible beneath the hook.',
  'flamenco-jazz': 'Flamenco compás meets extended jazz harmony, with room for developed solos and countermelody.',
  'flamenco-rock': 'Flamenco guitar and palmas share a rock backbeat; give the riff, vocal chorus, and guitar solo distinct jobs.',
  'urban-experimental': 'Fragment cante, compás, and electronic low-end across changing sections, with deliberate space between hits.',
};

const STYLE_PATTERNS: Record<string, string[]> = {
  solea: ['12-count compás', 'Thumb rasgueado', 'Tremolo falseta', 'Picado answer', 'Cierre'],
  bulerias: ['Bulería compás', 'Contratiempo', 'Alzapúa', 'Llamada', 'Remate'],
  alegrias: ['Cantiñas compás', 'Major llamada', 'Guitar answer', 'Escobilla', 'Cierre'],
  tangos: ['Duple compás', 'Weighted backbeat', 'Rasgueado', 'Cante answer'],
  seguiriya: ['Seguiriya compás', 'Uneven accents', 'Sparse cante', 'Guitar answer', 'Remate'],
  tientos: ['Slow compás', 'Heavy rasgueado', 'Cante space', 'Tangos subida'],
  fandangos: ['Ternary compás', 'Huelva copla', 'Guitar answer', 'Remate'],
  rumba: ['Abanico strum', 'Syncopated bass', 'Cajón groove', 'Guitar hook'],
  'tonas-martinetes': ['Free cante', 'Martinete line', 'Breath cadence'],
  taranta: ['Free cante', 'Taranta falseta', 'Rubato response', 'Modal cadence'],
  granaina: ['Free cante', 'Upper falseta', 'Granada cadence'],
  malaguena: ['Free cante', 'Arpeggio answer', 'Andalusian cadence'],
  guajira: ['Guajira compás', 'Habanera sway', 'Major refrain', 'Rasgueado'],
  farruca: ['Minor ostinato', 'Duple compás', 'Footwork accents', 'Cierre'],
  sevillanas: ['3/4 compás', 'Four coplas', 'Refrain strum', 'Final desplante'],
  'nuevo-flamenco': ['Pop-flamenco hook', 'Cajón backbeat', 'Guitar falseta', 'Vocal refrain'],
  'flamenco-jazz': ['Jazz voicings', 'Flamenco compás', 'Solo chorus', 'Counterline'],
  'flamenco-rock': ['Guitar riff', 'Rock backbeat', 'Palmas accents', 'Guitar solo'],
  'urban-experimental': ['Fragmented compás', 'Sub pulse', 'Vocal chops', 'Electronic breaks'],
};

/** Concise picker labels; the complete rhythmic/technical instruction remains in cell.description. */
export function flamencoCellLabel(styleId: string, cell: AuthoredCell): string {
  if (cell.shortName) return cell.shortName;
  const instrument = cell.instruments?.[0] ?? '';
  const text = `${cell.name} ${cell.articulation ?? ''} ${(cell.articulations ?? []).join(' ')}`.toLowerCase();
  if (cell.phraseEnd) return instrument === 'voice' ? 'Cante cierre'
    : instrument === 'palmas' ? 'Palmas remate'
      : instrument === 'cajon' ? 'Cajón fill' : 'Guitar cierre';
  if (instrument === 'voice') return 'Cante phrase';
  if (instrument === 'palmas') return 'Palmas compás';
  if (instrument === 'cajon') return 'Cajón pulse';
  if (text.includes('tremolo')) return 'Tremolo falseta';
  if (text.includes('picado')) return 'Picado line';
  if (text.includes('llamada')) return 'Guitar llamada';
  if (text.includes('abanico')) return 'Abanico groove';
  if (text.includes('alzapua')) return 'Alzapúa compás';
  if (text.includes('fandangos')) return 'Ternary guitar';
  if (text.includes('compas') || text.includes('rasgueado') || text.includes('thumb')) return 'Guitar compás';
  if (styleId === 'flamenco-jazz') return 'Jazz guitar';
  if (styleId === 'flamenco-rock') return 'Rock guitar';
  return 'Guitar phrase';
}

function flamencoLead(id: string): AuthoredCell[] {
  if (id === 'solea') return [
    guitar('Soleá compás: thumb bass, restrained rasgueado and cierre accents',
      [0, 1.5, 3, 4, 5], ['thumb', 'rasgueado', 'golpe', 'thumb', 'rasgueado'],
      { durations: [.72, .42, .18, .55, .36], accents: [1, .7, .95, .58, .92],
        pitches: [pitch(1, 45), chord, chord, pitch(5, 45), chord],
        sectionUsage: ['verse', 'chorus'], difficulty: 2, supportedEnergy: [1, 2, 3, 4],
        notations: [{ fingering: 'p' }, { stroke: 'down', fingering: 'i' },
          { bodyTechnique: 'golpe', stroke: 'down' }, { fingering: 'p' }, { stroke: 'up', fingering: 'a' }] }),
    { name: 'Soleá falseta: tremolo melody with thumb anchor', role: 'lead', instruments: ['guitar'],
      cycleLength: 2, onsets: [0, .2, .4, .6, .8, 6, 6.2, 6.4, 6.6, 6.8],
      durations: [.2, .2, .2, .2, .2, .2, .2, .2, .2, .2],
      accents: [1, .55, .65, .7, .6, .9, .55, .65, .7, .6],
      articulations: ['thumb', 'tremolo', 'tremolo', 'tremolo', 'tremolo', 'thumb', 'tremolo', 'tremolo', 'tremolo', 'tremolo'],
      pitches: [pitch(1, 45), pitch(3, 64), pitch(2, 64), pitch(3, 65), pitch(5, 67),
        pitch(1, 48), pitch(3, 65), pitch(4, 67), pitch(3, 65), pitch(1, 64)],
      notations: ['p', 'i', 'a', 'm', 'i', 'p', 'i', 'a', 'm', 'i'].map(fingering => ({ fingering })),
      sectionUsage: ['solo'], difficulty: 3, pedagogicalStudy: 'technique', supportedEnergy: [2, 3, 4],
      description: 'Original two-bar falseta study: anchor each five-note tremolo group with the thumb, shape a small rising-and-returning melody, then leave the following compás free for the ensemble.' },
    { name: 'Soleá llamada: open chord summons the next letra', role: 'lead', instruments: ['guitar'],
      cycleLength: 1, onsets: [0, 1.5, 2, 2.5, 3, 4, 5], durations: [.6, .3, .22, .3, .5, .55, .35],
      accents: [1, .62, .85, .55, .95, .68, 1], articulations: ['thumb', 'rasgueado', 'rasgueado', 'rasgueado', 'golpe', 'thumb', 'rasgueado'],
      pitches: [pitch(1, 45), chord, chord, chord, chord, pitch(5, 45), chord],
      notations: [{ fingering: 'p' }, { stroke: 'down', fingering: 'i' }, { stroke: 'up', fingering: 'i' },
        { stroke: 'down', fingering: 'a' }, { bodyTechnique: 'golpe', stroke: 'down' }, { fingering: 'p' }, { stroke: 'down', fingering: 'i' }],
      sectionUsage: ['llamada'], difficulty: 3, supportedEnergy: [2, 3, 4],
      description: 'Original llamada study: build from a thumbed bass into a short rasgueado and golpe cue; reserve the final chord for a vocal entrance or section handoff.' },
    guitar('Soleá falseta response: picado answer over an Andalusian cadence',
      [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      ['picado', 'picado', 'picado', 'picado', 'picado', 'picado', 'picado', 'picado', 'thumb', 'rasgueado', 'rasgueado'],
      { cycleLength: 2, durations: [.22, .18, .2, .24, .2, .18, .25, .22, .65, .35, .5],
        accents: [1, .54, .7, .48, .82, .55, .9, .62, 1, .7, 1],
        pitches: [pitch(1, 62), pitch(2, 64), pitch(3, 65), pitch(5, 67), pitch(4, 65), pitch(3, 64), pitch(2, 62), pitch(1, 60), pitch(1, 45), chord, chord],
        notations: ['i', 'm', 'i', 'm', 'i', 'm', 'i', 'm', 'p', 'i', 'a'].map(fingering => ({ fingering })),
        sectionUsage: ['solo'], difficulty: 2, supportedEnergy: [2, 3, 4],
        description: 'Original two-bar falseta response study: an even picado line descends to the low thumb and resolves in a compact rasgueado chord.' }),
  ];
  if (id === 'taranta') return [
    guitar('Taranta salida arpeggio', [0, .75, 1.5, 2.5, 3.5],
      ['thumb', 'fingerstyle', 'fingerstyle', 'fingerstyle', 'rasgueado'],
      { durations: [1, .55, .7, .5, .45], accents: [1, .42, .62, .48, .88],
        pitches: [pitch(1, 45), pitch(3, 57), pitch(5, 64), pitch(3, 65), chord],
        notations: ['p', 'i', 'a', 'm', 'i'].map(fingering => ({ fingering })),
        sectionUsage: ['intro', 'verse'], difficulty: 2,
        description: 'Original free-time salida study: let the bass note ring, roll the upper arpeggio without a metronomic pulse, then wait for the singer before the cadence.' }),
    guitar('Taranta falseta response', [0, .5, 1.25, 2, 3, 4],
      ['picado', 'picado', 'fingerstyle', 'thumb', 'rasgueado', 'rasgueado'],
      { durations: [.3, .28, .65, .8, .35, .5], accents: [1, .62, .5, .8, .72, 1],
        pitches: [pitch(1, 64), pitch(2, 65), pitch(4, 67), pitch(1, 45), chord, chord],
        sectionUsage: ['solo'], difficulty: 3,
        description: 'Original free-time response study: shape a short upper-register answer, return to the low thumb, and settle the cadence with two unhurried chord attacks.' }),
  ];
  if (id === 'granaina') return [
    guitar('Granaína upper falseta', [0, .5, 1.25, 2, 3, 4],
      ['thumb', 'fingerstyle', 'fingerstyle', 'picado', 'picado', 'rasgueado'],
      { durations: [.9, .45, .55, .3, .35, .55], accents: [1, .42, .58, .72, .82, .95],
        pitches: [pitch(1, 45), pitch(3, 64), pitch(5, 67), pitch(6, 69), pitch(5, 67), chord],
        sectionUsage: ['solo'], difficulty: 3,
        description: 'Original free-time falseta study: rise into the upper register, answer with a short picado turn, and leave a full breath before the cadence.' }),
    guitar('Granaína cadence answer', [0, 1, 2, 3.5],
      ['thumb', 'fingerstyle', 'rasgueado', 'rasgueado'],
      { durations: [.8, .55, .4, .65], accents: [1, .5, .76, 1],
        pitches: [pitch(1, 45), pitch(5, 64), chord, chord], sectionUsage: ['verse', 'cierre'], difficulty: 2,
        description: 'Original free-time cadence study: place the bass and upper answer by ear, then broaden the final two chords into the singer’s release.' }),
  ];
  if (id === 'malaguena') return [
    guitar('Malagueña opening arpeggio', [0, .75, 1.5, 2.5, 3.5],
      ['thumb', 'fingerstyle', 'fingerstyle', 'fingerstyle', 'thumb'],
      { durations: [1, .6, .7, .6, .8], accents: [1, .4, .54, .48, .76],
        pitches: [pitch(1, 45), pitch(3, 57), pitch(5, 64), pitch(3, 67), pitch(1, 48)],
        notations: ['p', 'i', 'a', 'm', 'p'].map(fingering => ({ fingering })),
        sectionUsage: ['intro', 'verse'], difficulty: 2,
        description: 'Original free-time opening study: sustain the bass beneath a broad arpeggio and let the singer determine the spacing of the next phrase.' }),
    guitar('Malagueña cadence falseta', [0, .5, 1, 2, 3, 4],
      ['picado', 'picado', 'fingerstyle', 'thumb', 'rasgueado', 'rasgueado'],
      { durations: [.28, .32, .6, .8, .35, .65], accents: [1, .65, .5, .78, .72, 1],
        pitches: [pitch(3, 64), pitch(5, 67), pitch(4, 65), pitch(1, 45), chord, chord],
        sectionUsage: ['solo', 'cierre'], difficulty: 3,
        description: 'Original free-time falseta study: answer the voice with a compact rising line, return to the bass, and reserve the cadence for the singer’s final release.' }),
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
  if (id === 'tonas-martinetes') return [];
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
  const expanded = input.styles.flatMap(style => style.id === 'granaina-malaguena'
    ? [
      { ...style, id: 'granaina', name: 'Granaína', meter: '4/4', tempo: [56, 72] as [number, number],
        groove: { ...style.groove, microtimingFeel: 'rubato' as const, humanizeJitterMs: 10 },
        form: [{ label: 'salida', bars: 8 }, { label: 'cante', bars: 24 }, { label: 'falseta', bars: 16, soloInstrumentId: 'guitar', soloMode: 'accompanied' as const }, { label: 'cante', bars: 24 }, { label: 'cadence', bars: 8 }] },
      { ...style, id: 'malaguena', name: 'Malagueña', meter: '4/4', tempo: [52, 68] as [number, number],
        groove: { ...style.groove, microtimingFeel: 'rubato' as const, humanizeJitterMs: 12 },
        form: [{ label: 'salida', bars: 8 }, { label: 'cante', bars: 24 }, { label: 'guitar answer', bars: 12 }, { label: 'cante', bars: 24 }, { label: 'cadence', bars: 8 }] },
    ]
    : [style]);
  return { ...input, styles: expanded.map(style => {
    const id = style.id;
    const curated = { ...style, description: STYLE_DESCRIPTIONS[id] ?? style.description,
      patterns: STYLE_PATTERNS[id] ?? style.patterns };
    const lead = flamencoLead(id);
    const cells = style.cells.filter(cell => !(lead.length && !cell.phraseEnd && cell.role === 'lead' && cell.instruments?.includes('guitar')));
    cells.unshift(...lead);
    const freeCante = ['taranta', 'granaina', 'malaguena'].includes(id);
    const soleVoice = ['tonas-martinetes'].includes(id);
    if (freeCante || soleVoice) {
      cells.splice(0, cells.length, ...(freeCante ? lead : cells.filter(cell => cell.role === 'lead' && cell.instruments?.includes('voice'))));
      const labeledCells = cells.map(cell => ({ ...cell, shortName: flamencoCellLabel(id, cell) }));
      if (freeCante) return { ...curated, roles: { lead: ['voice', 'guitar'] }, cells: labeledCells,
        form: style.form.map(section => ({ ...section, instruments: ['voice', 'guitar'], leadInstrumentId: 'guitar' })) };
      return { ...curated, roles: { lead: ['voice'] }, cells: labeledCells,
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
    return { ...curated, cells: cells.map(cell => ({ ...cell, shortName: flamencoCellLabel(id, cell) })) };
  }) };
}
