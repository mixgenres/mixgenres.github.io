import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';

const pitch = (degree: number, register: number, semitoneOffset?: number) => ({
  degree, register, voicing: 'single' as const, ...(semitoneOffset ? { semitoneOffset } : {}),
});

function phrase(
  name: string,
  role: string,
  instrument: string,
  onsets: number[],
  degrees: number[],
  register: number,
  articulations: string[],
  options: Partial<AuthoredCell> = {},
): AuthoredCell {
  return {
    name, role, instruments: [instrument], onsets, cycleLength: options.cycleLength ?? 2,
    durations: options.durations ?? onsets.map(() => .42),
    pitches: degrees.map(degree => pitch(degree, register)), articulations,
    accents: options.accents ?? onsets.map((_, index) => index === 0 ? .9 : .58),
    difficulty: options.difficulty ?? 2, supportedEnergy: options.supportedEnergy ?? [1, 2, 3],
    description: options.description, ...options,
  };
}

/**
 * Local Chinese studies replace the original one-cell placeholders with
 * instrument-specific phrase material. These are original teaching studies,
 * not transcriptions; each style remains within the Chinese folder's own
 * regional and performance vocabulary.
 */
export function authorChineseStudies(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const endings = style.cells.filter(cell => cell.phraseEnd);
    let cells: AuthoredCell[] = [];
    let instrumentTechniques = style.instrumentTechniques;
    let instrumentDialects = style.instrumentDialects;
    let roles = style.roles;
    let form = style.form;
    let description = style.description;
    let techniques = style.techniques;

    switch (style.id) {
      case 'jiangnan-sizhu': {
        cells = [
          phrase('Jiangnan Sizhu erhu flowing statement', 'lead', 'erhu',
            [0, .5, 1, 1.5, 2, 3, 3.5, 4, 5, 5.5, 6, 7],
            [1, 2, 3, 5, 4, 3, 2, 1, 2, 3, 5, 6], 67,
            ['legato', 'legato', 'vibrato', 'legato', 'legato', 'tremolo', 'legato', 'legato', 'vibrato', 'legato', 'legato', 'legato'],
            { durations: [ .44,.44,.44,.9,.44,.44,.44,.9,.44,.44,.44,1.1 ], difficulty: 2,
              description: 'A two-bar D-pentatonic statement for the erhu. Connect the long tones and reserve vibrato and bow tremolo for marked phrase points.' }),
          phrase('Jiangnan erhu ornamented return', 'lead', 'erhu', [0,.75,1,2,2.5,3.5,4,4.75,5.5,6,7,7.5], [5,4,3,2,3,5,6,5,3,2,1,2], 69,
            ['accent','legato','vibrato','legato','staccato','legato','tremolo','legato','vibrato','legato','staccato','tenuto'],
            { durations: [.3,.65,.35,.7,.3,.8,.35,.6,.35,.7,.25,.5], difficulty: 3, description: 'A higher return phrase breaks the statement contour into short turns and longer answering tones.' }),
          phrase('Jiangnan Sizhu dizi answering variation', 'lead', 'dizi',
            [.5, 1, 2, 2.5, 3.5, 4.5, 5, 6, 6.5, 7.5],
            [5, 6, 5, 3, 4, 5, 3, 2, 1, 2], 76,
            ['legato', 'staccato', 'legato', 'legato', 'tenuto', 'legato', 'tremolo', 'legato', 'staccato', 'tenuto'],
            { durations: [.4,.3,.75,.4,.8,.4,.4,.75,.3,.45], difficulty: 3,
              description: 'A distinct dizi response enters between erhu phrase landmarks. Keep the high response light and let the shared pentatonic contour remain audible.' }),
          phrase('Jiangnan dizi lifted reply', 'lead', 'dizi', [0,1,1.5,2.5,3,4,4.5,5.5,6,7], [3,5,6,5,3,2,4,5,3,1], 79,
            ['staccato','legato','trill','legato','tenuto','staccato','legato','tremolo','legato','tenuto'],
            { durations: [.25,.65,.3,.7,.5,.25,.65,.35,.75,.8], difficulty: 4, description: 'A shorter lifted answer uses a brief trill and leaves air before its held cadence.' }),
          phrase('Jiangnan Sizhu pipa broken-tone support', 'harmony', 'pipa',
            [0, 1, 2.5, 3.5, 4, 5.5, 6.5, 7.5],
            [1, 5, 3, 2, 1, 5, 3, 1], 60,
            ['staccato', 'legato', 'staccato', 'accent', 'staccato', 'legato', 'staccato', 'accent'],
            { durations: [.24,.6,.24,.24,.24,.6,.24,.3], difficulty: 2,
              description: 'Spaced pipa plucks mark the modal frame without turning the heterophonic texture into Western block-chord comping.' }),
          phrase('Jiangnan pipa cadence punctuation', 'harmony', 'pipa', [.5,2,3.5,4.5,6,7.5], [5,3,1,5,2,1], 59,
            ['staccato','accent','staccato','legato','accent','tenuto'],
            { durations: [.2,.25,.25,.55,.22,.7], difficulty: 3, supportedEnergy: [1,2,3], description: 'A sparse cadence-focused response uses six separated attacks instead of filling every subdivision.' }),
        ];
        instrumentTechniques = { ...instrumentTechniques,
          erhu: ['legato','vibrato','tremolo','accent'],
          dizi: ['legato','tremolo','vibrato','accent','staccato','tenuto'],
          pipa: ['staccato','tremolo','accent','tenuto'],
        };
        instrumentTechniques = Object.fromEntries(Object.entries(instrumentTechniques).filter(([id]) => id !== 'guzheng'));
        instrumentDialects = Object.fromEntries(Object.entries(instrumentDialects).filter(([key]) => !key.startsWith('guzheng:')));
        roles = { ...roles, lead: ['erhu','dizi'], harmony: ['pipa'] };
        description = 'Jiangnan Sizhu is a small silk-and-bamboo ensemble tradition organized by shared melody and instrument-specific heterophonic variation. This style-owned reduction separates erhu statement, dizi answer, and pipa support. Yangqin and sanxian are not yet modeled, so guzheng is not substituted into the ensemble; it does not use a Western chord progression.';
        break;
      }
      case 'guqin':
        cells = [
          phrase('Guqin open, stopped, and harmonic tones', 'lead', 'guqin',
            [0, 2.5, 5, 8, 10.5, 13, 15], [1, 3, 5, 4, 2, 1, 1], 57,
            ['accent','legato','harmonic','legato','vibrato','legato','harmonic'],
            { cycleLength: 4, durations: [1.3,1.8,1.4,1.8,1.3,2,1.3], difficulty: 2,
              description: 'A four-bar qin study alternates open-string, stopped-note, and harmonic colors with room for decay. The notation remains a phrase scaffold, not a fixed-meter transcription.' }),
          phrase('Guqin left-hand pitch-shading response', 'lead', 'guqin',
            [1, 4.5, 7.5, 11, 14.5], [3, 5, 4, 2, 1], 62,
            ['legato','vibrato','legato','vibrato','harmonic'],
            { cycleLength: 4, durations: [2.5,2,2.6,2.3,1.5], difficulty: 3,
              description: 'Sustain each pluck while the left hand shades pitch; the existing renderer only approximates the continuous press-and-slide movement.' }),
        ];
        instrumentTechniques = { ...instrumentTechniques, guqin: ['legato','harmonic','vibrato','accent'] };
        description = 'Guqin is a solo qin tradition, not a chordal ensemble. The study uses long decays, open/pressed/harmonic tone classes and phrase breathing; its four-bar grid is a playback scaffold for flexible timing.';
        break;
      case 'guzheng':
        cells = [
          phrase('Guzheng lyrical bend-and-release phrase', 'lead', 'guzheng',
            [0, .75, 1.5, 2.5, 3.5, 4, 5.25, 6.5, 7.5],
            [1, 2, 3, 5, 6, 5, 3, 2, 1], 69,
            ['accent','legato','bend','legato','bend','legato','vibrato','legato','bend'],
            { durations: [.35,.6,.8,.6,.4,.9,.55,.7,1], difficulty: 2,
              description: 'Right-hand plucks carry the melody; the marked left-hand bends color selected arrivals rather than every note.' }),
          phrase('Guzheng yaozhi and arpeggio study', 'lead', 'guzheng',
            [0, .25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 5, 6, 7],
            [1, 3, 5, 3, 1, 3, 5, 6, 5, 3, 2, 1, 2, 4, 5, 1], 64,
            ['tremolo','tremolo','tremolo','tremolo','tremolo','tremolo','tremolo','tremolo','staccato','staccato','staccato','staccato','legato','bend','legato','bend'],
            { durations: Array.from({ length: 8 }, () => .18).concat([.35,.35,.35,.35,.55,.5,.6,.9]), difficulty: 4,
              supportedEnergy: [2,3,4], description: 'A short yaozhi pulse opens into a pentatonic arpeggio. Tremolo is localized to the sustained opening instead of painted over the whole part.' }),
        ];
        instrumentTechniques = { ...instrumentTechniques, guzheng: ['legato','tremolo','bend','accent','staccato'] };
        description = 'Guzheng studies keep right-hand plucking, sustained thumb tremolo, and left-hand pitch bends distinct. This solo instrumental style has no imported groove or chordal backing.';
        break;
      case 'pipa':
        cells = [
          phrase('Pipa alternating tan-tiao motif', 'lead', 'pipa',
            [0,.25,.75,1,1.5,1.75,2.5,3,3.5,4,4.25,5,5.5,6,6.75,7.5],
            [1,3,2,4,3,5,4,6,5,4,2,3,1,2,5,1], 72,
            ['accent','staccato','staccato','accent','staccato','staccato','accent','staccato','staccato','accent','staccato','staccato','accent','staccato','staccato','tenuto'],
            { durations: [.22,.18,.22,.18,.22,.18,.22,.18,.22,.22,.18,.22,.22,.18,.28,.65], difficulty: 2,
              description: 'A measured pipa tan-tiao figure alternates thumb/index attacks, then leaves the final tone to ring into the next breath.' }),
          phrase('Pipa lunzhi tremolo and sao response', 'lead', 'pipa',
            [0,.25,.5,.75,1,1.25,1.5,1.75,2.5,3,4,4.5,5,6,6.5,7.5],
            [1,1,1,1,1,1,1,1,5,3,1,5,3,2,1,1], 76,
            ['tremolo','tremolo','tremolo','tremolo','tremolo','tremolo','tremolo','tremolo','accent','accent','staccato','accent','staccato','legato','staccato','tenuto'],
            { durations: [.2,.2,.2,.2,.2,.2,.2,.2,.22,.22,.35,.22,.3,.5,.35,.8], difficulty: 4,
              description: 'A brief five-finger wheel tremolo leads into separated plucked and sweeping attacks; the study does not claim to reproduce a whole Ambush from Ten Sides passage.' }),
        ];
        instrumentTechniques = { ...instrumentTechniques, pipa: ['legato','tremolo','accent','staccato','tenuto','slide','harmonic'] };
        description = 'Pipa is presented as a solo plucked lute with alternating attacks, short five-finger wheel tremolo and punctuated sweeps. The original study vocabulary is local to the pipa style.';
        break;
      case 'jingju':
        cells = [
          phrase('Jingju voice aria phrase with breath points', 'lead', 'voice',
            [0, .75, 1.5, 2, 3, 3.5, 4.5, 5.5, 6.5, 7], [1,2,3,5,4,3,2,3,2,1], 69,
            ['legato','legato','vibrato','legato','staccato','legato','vibrato','legato','staccato','legato'],
            { durations: [.6,.6,.4,.8,.3,.75,.4,.6,.3,1], difficulty: 3,
              description: 'A compact aria-like phrase alternates sustained syllables and short articulations. Jingju plate and lyric-specific notation are not yet modeled.' }),
          phrase('Jingju voice rising and settling aria answer', 'lead', 'voice', [0,.5,1.5,2.5,3,4,4.5,5.5,6.5,7.5], [1,2,4,5,6,5,4,3,2,1], 71,
            ['legato','staccato','legato','vibrato','tenuto','staccato','legato','vibrato','legato','tenuto'],
            { durations: [.4,.25,.7,.4,.8,.25,.7,.45,.7,.8], difficulty: 4, description: 'A second aria contour climbs to a sustained high arrival, then descends in a slower cadence.' }),
          phrase('Jinghu answering and supporting line', 'lead', 'jinghu',
            [.5,1.5,2.5,3.5,4,5,6,7], [5,4,3,2,3,5,3,1], 75,
            ['legato','vibrato','legato','bend','staccato','legato','vibrato','accent'],
            { durations: [.7,.65,.65,.35,.3,.7,.65,.7], difficulty: 3,
              description: 'Jinghu shadows the singer at phrase edges and answers in the gaps rather than doubling every sung note.' }),
          phrase('Jinghu short pickup and held answer', 'lead', 'jinghu', [.5,1,2,3.5,4.5,5,6.5,7], [3,5,4,2,1,3,2,1], 77,
            ['staccato','legato','vibrato','staccato','bend','legato','vibrato','accent'],
            { durations: [.25,.6,.8,.3,.4,.75,.65,.7], difficulty: 4, description: 'A contrasting instrumental answer enters with clipped pickups and lets the final bow tone settle.' }),
          { name: 'Jingju paigu cue pattern with drag and roll', role: 'percussion', instruments: ['paigu'],
            cycleLength: 2, onsets: [0,1.5,2,3,4.5,5,6.5,7.5], durations: [.2,.18,.2,.2,.18,.2,.2,.35],
            accents: [.95,.4,.78,.65,.4,.9,.55,1], articulations: ['accent','ghost','drag','accent','ghost','flam','ghost','roll'],
            difficulty: 4, supportedEnergy: [2,3,4],
            description: 'A two-bar playable drum study supplies processional pulse and short approach cues; it is a reduced kit part, not the full jingju luogu jing vocabulary.' },
          { name: 'Jingju paigu pickup and cadence cues', role: 'percussion', instruments: ['paigu'], cycleLength: 2,
            onsets: [.5,2,3.5,4,5.5,6.5,7.5], durations: [.18,.2,.3,.2,.18,.2,.38], accents: [.35,.8,.65,.95,.4,.72,1],
            articulations: ['ghost','accent','drag','flam','ghost','accent','roll'], difficulty: 4,
            description: 'A less continuous cue variant leaves the downbeat open and concentrates paigu activity around phrase pickups and cadence.' },
          { name: 'Jingju gong punctuation at phrase turns', role: 'percussion', instruments: ['gongs'],
            cycleLength: 2, onsets: [0,3.5,7], durations: [.8,.7,1], accents: [1,.58,.9], articulations: ['accent','tenuto','low-tone'],
            difficulty: 2, supportedEnergy: [1,2,3],
            description: 'Gong calls mark the entrance and two phrase turns; the broad gaps preserve theatrical cue function.' },
          { name: 'Jingju gong held cadence response', role: 'percussion', instruments: ['gongs'], cycleLength: 2,
            onsets: [1.5,4,7], durations: [.5,1.2,1.4], accents: [.55,.82,1], articulations: ['tenuto','accent','roll'], difficulty: 3,
            description: 'A second sparse gong cue holds at the final arrival rather than repeating the opening call.' },
        ];
        instrumentTechniques = { ...instrumentTechniques,
          voice: ['legato','vibrato','accent','staccato'], jinghu: ['legato','vibrato','bend','staccato','accent'],
          paigu: ['accent','ghost','roll','flam','drag'], gongs: ['accent','tenuto','roll','low-tone'],
        };
        description = 'Jingju combines role-specific sung aria, jinghu support, and cue-led percussion. This reduction separates voice, bowed response, paigu articulation and sparse gong punctuation; the current instruments do not represent the complete bangu/cymbal/clapper luogu ensemble or its spoken cue notation.';
        break;
      case 'cantonese-ensemble':
        cells = [
          phrase('Cantonese gaohu ornamental statement', 'lead', 'gaohu',
            [0,.5,1,1.5,2,2.5,3,4,5,5.5,6.5,7], [1,3,5,6,5,3,2,1,2,4,3,1], 77,
            ['legato','vibrato','legato','slide','legato','vibrato','legato','staccato','legato','vibrato','legato','accent'],
            { durations: [.45,.45,.65,.45,.65,.45,.8,.4,.6,.45,.6,1], difficulty: 3,
              description: 'A high gaohu line uses small slides and vibrato at phrase peaks; the melody remains the ensemble foreground.' }),
          phrase('Cantonese gaohu descending flourish', 'lead', 'gaohu', [0,.5,1.5,2,3,3.5,4.5,5,6,6.5,7.5], [6,5,4,6,5,3,2,4,3,2,1], 79,
            ['legato','vibrato','slide','legato','staccato','vibrato','legato','slide','legato','staccato','accent'],
            { durations: [.45,.65,.35,.6,.3,.6,.55,.35,.65,.28,.8], difficulty: 4, description: 'A high-register descent places slides at two phrase peaks and shortens the approach to the cadence.' }),
          phrase('Cantonese dizi reply', 'lead', 'dizi',
            [1,1.5,2.5,3.5,4.5,5,6,7], [5,6,5,3,4,5,2,1], 78,
            ['legato','staccato','legato','tenuto','legato','trill','legato','tenuto'],
            { durations: [.45,.28,.65,.75,.45,.35,.7,.8], difficulty: 3,
              description: 'Dizi replies in the spaces after the gaohu gestures rather than carrying a second copy of the same line.' }),
          phrase('Cantonese dizi quick answer', 'lead', 'dizi', [.5,1,2,2.5,3.5,4.5,5.5,6,7], [4,5,3,6,5,3,2,4,1], 79,
            ['staccato','legato','trill','staccato','tenuto','legato','staccato','legato','tenuto'],
            { durations: [.25,.55,.3,.25,.8,.6,.25,.7,.9], difficulty: 4, description: 'A quicker flute answer uses a short trill and contrasting held final note.' }),
          phrase('Cantonese pipa light answering plucks', 'harmony', 'pipa',
            [0,1.5,3,4,5.5,7], [1,5,3,2,5,1], 62,
            ['accent','staccato','staccato','legato','staccato','accent'],
            { durations: [.22,.22,.3,.5,.22,.35], difficulty: 2,
              description: 'Sparse pipa attacks punctuate the melody and cadence; do not turn this part into continuous eighth-note chord comping.' }),
          phrase('Cantonese pipa offbeat punctuation', 'harmony', 'pipa', [.5,1.5,3,4.5,5.5,7], [5,3,1,4,2,1], 61,
            ['staccato','accent','staccato','legato','staccato','tenuto'],
            { durations: [.2,.22,.28,.45,.2,.65], difficulty: 3, description: 'Six short and ringing plucks answer phrase gaps, with no continuous chord bed.' }),
          phrase('Cantonese guzheng arpeggiated reply', 'harmony', 'guzheng',
            [.5,1,2,2.5,4.5,5,6,7.5], [1,3,5,3,2,4,5,1], 67,
            ['staccato','legato','bend','legato','staccato','bend','legato','accent'],
            { durations: [.22,.5,.8,.45,.25,.55,.7,.35], difficulty: 3,
              description: 'A higher zheng figure offers brief arpeggiated answers, with only selected notes bent.' }),
          phrase('Cantonese guzheng rolling reply', 'harmony', 'guzheng', [0,.25,.5,.75,1.5,2.5,3.5,4.5,5,6.5,7.5], [1,3,5,3,2,4,5,3,2,1,1], 69,
            ['tremolo','tremolo','tremolo','tremolo','staccato','legato','bend','staccato','legato','bend','accent'],
            { durations: [.18,.18,.18,.18,.25,.6,.4,.25,.65,.55,.8], difficulty: 4, description: 'A brief four-note rolling pickup opens into independent answering tones and two marked left-hand bends.' }),
        ];
        instrumentTechniques = { ...instrumentTechniques,
          gaohu: ['legato','vibrato','tremolo','accent','slide'], dizi: ['legato','trill','slide','staccato','tenuto'],
          pipa: ['staccato','accent','tremolo'], guzheng: ['legato','tremolo','bend','accent','staccato'],
        };
        roles = { ...roles, lead: [...new Set([...(roles.lead ?? []), 'dizi'])] };
        instrumentDialects = { ...instrumentDialects, 'dizi:lead': { allowedTechniques: instrumentTechniques.dizi, defaultTechnique: 'legato' } };
        description = 'Cantonese ensemble studies center the gaohu-led tune, decorate it with idiomatic inflection, and give dizi and plucked instruments independent responses. The catalog currently models a small ensemble reduction, not the full range of Guangdong music personnel.';
        break;
      case 'chaozhou': {
        cells = [
          phrase('Chaozhou erhu decorated melody', 'lead', 'erhu',
            [0,.5,1,1.25,2,3,3.5,4,5,5.5,6,7], [1,2,3,4,5,4,3,2,3,5,4,1], 67,
            ['legato','vibrato','legato','tremolo','legato','slide','legato','vibrato','legato','tremolo','legato','accent'],
            { durations: [.6,.42,.3,.25,.8,.45,.8,.4,.55,.25,.6,1], difficulty: 3,
              description: 'An original two-bar bowed-line study uses a decorated modal contour and uneven phrase lengths; it is not a transcription of Han Ya Xi Shui.' }),
          phrase('Chaozhou erhu turning-tone variation', 'lead', 'erhu', [0,.75,1.25,2,2.5,3.5,4.5,5,5.75,6.5,7.5], [5,4,3,5,4,2,3,5,4,2,1], 69,
            ['accent','legato','vibrato','slide','legato','tremolo','legato','vibrato','slide','legato','tenuto'],
            { durations: [.3,.65,.35,.4,.75,.3,.7,.35,.4,.7,.9], difficulty: 4, description: 'A separate bowed variation turns around upper scale tones before settling into a longer cadence.' }),
          phrase('Chaozhou gaohu alternate string response', 'lead', 'gaohu',
            [.5,1.5,2,3,4.5,5,6.5,7.5], [5,4,3,2,4,5,2,1], 78,
            ['legato','vibrato','legato','slide','tenuto','vibrato','legato','accent'],
            { durations: [.7,.5,.7,.7,.45,.75,.6,.8], difficulty: 3,
              description: 'A high bowed answer varies the erhu line instead of doubling it. Gaohu is an available-model stand-in for the locally characteristic higher fiddle family.' }),
          phrase('Chaozhou gaohu upper response', 'lead', 'gaohu', [0,1,1.5,2.5,3.5,4,5,5.5,6.5,7.5], [6,5,3,4,5,6,5,3,2,1], 80,
            ['legato','vibrato','staccato','slide','legato','vibrato','legato','staccato','legato','tenuto'],
            { durations: [.6,.5,.25,.4,.65,.45,.7,.25,.6,.9], difficulty: 4, description: 'A high response rises away from the erhu contour and releases into the shared modal cadence.' }),
          phrase('Chaozhou pipa phrase punctuation', 'harmony', 'pipa',
            [0,1,2.5,3.5,4,5.5,6.5,7.5], [1,5,3,2,1,5,3,1], 62,
            ['accent','staccato','legato','accent','staccato','legato','staccato','accent'],
            { durations: [.25,.25,.45,.22,.25,.5,.25,.35], difficulty: 2,
              description: 'Pipa punctuations and plucked phrase links sit around the bowed melody; they are not equal-volume chord attacks.' }),
          phrase('Chaozhou pipa clipped and ringing link', 'harmony', 'pipa', [0,.75,2,3,4.5,5.5,6.5,7.5], [1,3,5,2,1,4,3,1], 62,
            ['accent','staccato','legato','staccato','accent','legato','staccato','tenuto'],
            { durations: [.24,.2,.55,.2,.25,.5,.2,.7], difficulty: 3, description: 'Alternating clipped attacks and ringing links keep the plucked part phrase-led.' }),
          phrase('Chaozhou zheng melodic counterline', 'harmony', 'guzheng',
            [.5,1.5,2.5,3,4.5,5.5,6,7], [3,5,6,5,4,3,2,1], 69,
            ['staccato','legato','bend','legato','staccato','tremolo','legato','bend'],
            { durations: [.3,.55,.4,.8,.3,.35,.65,.6], difficulty: 3,
              description: 'The zheng sustains occasional melodic replies and bends rather than acting like a Western chord pad.' }),
          phrase('Chaozhou zheng sustained answer', 'harmony', 'guzheng', [.5,1.5,2,3,4.5,5.5,6,7], [5,6,5,3,4,2,3,1], 70,
            ['legato','bend','legato','staccato','tremolo','legato','bend','tenuto'],
            { durations: [.7,.4,.75,.25,.4,.65,.45,1], difficulty: 4, description: 'A second counterline spaces bent arrivals around the bowed tune, then sustains its final degree.' }),
        ];
        roles = { ...roles, lead: ['erhu','gaohu'] };
        const chaozhouTechniques = { ...instrumentTechniques };
        delete chaozhouTechniques.dizi;
        instrumentTechniques = { ...chaozhouTechniques,
          erhu: ['legato','vibrato','tremolo','accent','slide'], gaohu: ['legato','vibrato','tremolo','accent','slide'],
          pipa: ['staccato','tremolo','accent'], guzheng: ['legato','tremolo','bend','accent','staccato'],
        } as unknown as typeof style.instrumentTechniques;
        instrumentDialects = { ...instrumentDialects,
          'erhu:lead': { ...instrumentDialects['erhu:lead'], allowedTechniques: instrumentTechniques.erhu, defaultTechnique: 'legato' },
          'gaohu:lead': { allowedTechniques: instrumentTechniques.gaohu, defaultTechnique: 'legato' },
        };
        instrumentDialects = Object.fromEntries(Object.entries(instrumentDialects).filter(([key]) => !key.startsWith('dizi:')));
        description = 'Chaozhou xianshi is represented as a local bowed-and-plucked string ensemble, with decorated melodic variation and phrase cadences. The available sound set lacks erxian, tihu, yehu and sanxian, so erhu/gaohu/pipa/zheng are an explicit instrument-model reduction; dizi is removed from this style.';
        break;
      }
      case 'suona-chuida': {
        cells = [
          phrase('Chuida suona processional call', 'lead', 'suona',
            [0,.5,1.5,2,2.5,3,4,4.5,5.5,6,6.5,7.5], [1,1,3,5,4,3,1,2,3,5,4,1], 76,
            ['accent','staccato','legato','accent','staccato','legato','accent','staccato','legato','accent','staccato','tenuto'],
            { durations: [.35,.25,.65,.3,.25,.8,.35,.25,.65,.3,.25,.9], difficulty: 2,
              description: 'A repeated processional call alternates clipped attacks and held responses; the high shawm remains the foreground voice.' }),
          phrase('Chuida suona rising call and long release', 'lead', 'suona', [.5,1,2,2.5,3.5,4,5,5.5,6.5,7.5], [1,3,5,6,5,3,4,5,3,1], 77,
            ['staccato','accent','legato','accent','staccato','legato','accent','staccato','legato','tenuto'],
            { durations: [.22,.3,.75,.3,.22,.8,.3,.22,.7,1], difficulty: 3, description: 'A contrasting call climbs to a higher held peak, then leaves the procession cadence exposed.' }),
          { name: 'Chuida paigu marching and pickup pattern', role: 'percussion', instruments: ['paigu'], cycleLength: 2,
            onsets: [0,1,2,3,4,5.5,6,7], durations: [.25,.25,.25,.25,.25,.18,.25,.4],
            accents: [.95,.45,.72,.48,.85,.35,.75,1], articulations: ['accent','ghost','accent','ghost','accent','drag','accent','roll'],
            difficulty: 2, description: 'A two-bar outdoor procession pulse with one short approach roll. The held suona calls keep space between drum attacks.' },
          { name: 'Chuida paigu accented approach variant', role: 'percussion', instruments: ['paigu'], cycleLength: 2,
            onsets: [0,1.5,2.5,3,4,5,6.5,7.5], durations: [.3,.2,.2,.32,.3,.2,.2,.45], accents: [1,.35,.72,.9,.82,.4,.75,1],
            articulations: ['accent','ghost','accent','flam','accent','ghost','drag','roll'], difficulty: 3,
            description: 'A more cue-led variant groups an accented pickup and short flam at the phrase turn while retaining lighter marching taps.' },
          { name: 'Chuida gong cue and held resonance', role: 'percussion', instruments: ['gongs'], cycleLength: 2,
            onsets: [0,3.5,4,7.5], durations: [.7,.8,.45,1], accents: [1,.58,.9,.72], articulations: ['low-tone','tenuto','accent','roll'],
            difficulty: 3, description: 'Large gong cues punctuate phrase turns and leave deliberate resonance; they are not a continuous subdivision layer.' },
          { name: 'Chuida gong alternate procession signal', role: 'percussion', instruments: ['gongs'], cycleLength: 2,
            onsets: [1,3.5,5,7], durations: [.45,.9,.55,1.4], accents: [.55,.9,.65,1], articulations: ['tenuto','low-tone','accent','roll'], difficulty: 3,
            description: 'A second signal places a low gong at the middle turn and leaves the closing roll to ring across the next phrase.' },
        ];
        instrumentTechniques = { ...instrumentTechniques,
          suona: ['legato','vibrato','accent','staccato'], paigu: ['accent','ghost','roll','drag'], gongs: ['accent','roll','low-tone','tenuto'],
        };
        description = 'Chuida is a wind-and-percussion procession: the suona carries the call, paigu supplies a mobile pulse, and gongs mark structural cues. This reduced arrangement avoids importing a generic drum-kit backbeat.';
        break;
      }
    }

    if (!cells.length) return style;
    for (const [instrumentId, allowedTechniques] of Object.entries(instrumentTechniques)) {
      const dialectKey = Object.keys(instrumentDialects).find(key => key.startsWith(`${instrumentId}:`));
      if (dialectKey) instrumentDialects[dialectKey] = { ...instrumentDialects[dialectKey], allowedTechniques };
    }
    const mix = style.id === 'jiangnan-sizhu' ? {
      ...style.mix,
      character: { ...style.mix.character, width: .68 },
      stage: { ...style.mix.stage, width: .72, roleWidth: { ...style.mix.stage?.roleWidth, lead: .55, harmony: .8 },
        rolePan: { ...style.mix.stage?.rolePan, lead: -.45, harmony: .45 } },
      sections: { ...style.mix.sections,
        intro: { ...style.mix.sections?.intro, width: .52 },
        chorus: { ...style.mix.sections?.chorus, width: .67 },
        climax: { ...style.mix.sections?.climax, width: .74 } },
      roles: { ...style.mix.roles,
        lead: { ...style.mix.roles?.lead, width: .65 },
        harmony: { ...style.mix.roles?.harmony, width: .8 } },
    } : style.mix;
    return {
      ...style, roles, form, description, techniques,
      cells: [...cells, ...endings.filter(cell => cell.instruments?.every(instrument => Object.values(roles).flat().includes(instrument)))],
      instrumentTechniques, instrumentDialects, mix,
      patterns: [...new Set([...style.patterns, ...cells.map(cell => cell.name)])],
    };
  }) };
}
