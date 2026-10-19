import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';

type DrumHit = NonNullable<NonNullable<AuthoredCell['hits']>[number]>;
type Pocket = {
  bass: number[]; lengths: number[]; degrees: number[];
  kit: Array<[number, DrumHit, number]>;
  scrape: number[]; keys: number[]; reply: number[];
};

/** Original two-bar learning arrangements. These teach the different jobs of
 * the rhythm section; they are not transcriptions of the selected recordings.
 * Source context: Ableton's interview with Henrique J. Paris / RS Produções
 * describes the light, loose kizomba/semba percussion and electronic ancestry:
 * https://www.ableton.com/en/blog/henrique-j-paris-rs-producoes-mapping-batidas-heritage/
 */
const POCKETS: Record<string, Pocket> = {
  traditional: {
    bass: [0, 1.5, 2.75, 3.5, 4, 5.5, 6.75, 7.5],
    lengths: [.95, .7, .34, .35, 1, .65, .3, .38], degrees: [1, 5, 6, 5, 1, 3, 2, 5],
    kit: [[0,'kick',1],[.5,'hat',.32],[1,'rim',.62],[1.75,'kick',.68],[2.5,'hat',.36],[3,'rim',.72],[3.5,'kick',.62],[4,'kick',.92],[4.5,'hat',.3],[5,'rim',.58],[5.75,'kick',.72],[6.5,'hat',.4],[7,'rim',.74],[7.75,'hat',.35]],
    scrape: [.25,.75,1.5,2.25,2.75,3.5,4.25,4.75,5.5,6.25,6.75,7.5], keys: [0,4.5], reply: [2.5,3,3.5,6.25,6.75,7.25],
  },
  'semba-derived': {
    bass: [0,.75,1.5,2.5,3.25,3.75,4,4.75,5.5,6.5,7.25],
    lengths: [.5,.32,.65,.45,.28,.2,.5,.32,.65,.45,.45], degrees: [1,3,5,6,5,2,1,3,5,2,5],
    kit: [[0,'kick',.9],[.5,'hat',.4],[1,'rim',.65],[1.5,'kick',.65],[2,'hat',.36],[2.75,'kick',.68],[3,'rim',.82],[3.5,'hat',.4],[4,'kick',.94],[4.5,'hat',.42],[5,'rim',.7],[5.5,'kick',.58],[6.25,'hat',.34],[6.75,'kick',.72],[7,'rim',.86],[7.5,'openHat',.42]],
    scrape: [0,.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5], keys: [.75,2.5,4.75,6.5], reply: [.5,1.25,2,3.25,4.5,5.25,6,7.25],
  },
  passada: {
    bass: [0,1.75,3.25,4,5.5,6.75,7.5], lengths: [1.4,.9,.5,1.1,.8,.4,.38], degrees: [1,5,2,1,3,5,2],
    kit: [[0,'kick',.92],[.75,'hat',.3],[1,'rim',.55],[1.75,'kick',.62],[2.5,'hat',.34],[3,'rim',.64],[4,'kick',.9],[4.75,'hat',.34],[5,'rim',.58],[5.75,'kick',.68],[6.5,'hat',.38],[7,'rim',.7],[7.5,'hat',.28]],
    scrape: [.5,1.25,2.5,3.25,4.5,5.25,6.5,7.75], keys: [1.25,5.25], reply: [2.75,3.5,6.5,7.25],
  },
  tarraxinha: {
    bass: [0,1.75,4,6.5], lengths: [1.25,.65,1.5,.75], degrees: [1,1,1,5],
    kit: [[0,'kick',1],[1,'rim',.56],[1.75,'kick',.72],[2.75,'hat',.26],[3,'rim',.64],[4,'kick',.94],[5,'rim',.52],[6.5,'kick',.74],[7,'rim',.62],[7.75,'hat',.22]],
    scrape: [1.5,3.5,5.5,7.25], keys: [0], reply: [3.25,7.25],
  },
  'urban-kiz': {
    bass: [0,.75,2.5,4,4.75,6.75], lengths: [.42,.28,.62,.42,.28,.4], degrees: [1,1,5,1,3,5],
    kit: [[0,'kick',1],[.75,'kick',.72],[1,'snare',.82],[1.5,'hat',.32],[2.75,'hat',.4],[3,'snare',.86],[4,'kick',1],[4.75,'kick',.66],[5,'snare',.8],[5.5,'hat',.28],[6.75,'kick',.76],[7,'snare',.9],[7.75,'hat',.4]],
    scrape: [1.75,3.5,5.75,7.5], keys: [.75,4.75], reply: [2.25,2.75,6,6.75],
  },
  'ghetto-zouk-crossover': {
    bass: [0,1.5,2.75,4,5.5,6.75,7.5], lengths: [1,.55,.7,1,.6,.3,.38], degrees: [1,5,3,1,3,2,5],
    kit: [[0,'kick',.96],[.5,'hat',.34],[1,'snare',.76],[1.75,'kick',.68],[2.5,'hat',.4],[3,'snare',.82],[3.75,'hat',.26],[4,'kick',.94],[4.5,'hat',.3],[5,'snare',.74],[5.75,'kick',.7],[6.5,'hat',.38],[7,'snare',.84],[7.5,'openHat',.36]],
    scrape: [.75,2.25,3.5,4.75,6.25,7.5], keys: [.5,4.5], reply: [2.5,3.25,6.5,7,7.5],
  },
  'fusion-kiz': {
    bass: [0,1.5,3.5,4,5.75,7.25], lengths: [.8,.6,.25,1.1,.65,.5], degrees: [1,5,2,1,3,5],
    kit: [[0,'kick',1],[.75,'hat',.3],[1,'rim',.64],[1.5,'kick',.7],[2.5,'hat',.34],[3,'snare',.8],[4,'kick',.96],[4.5,'hat',.28],[5,'rim',.6],[5.75,'kick',.7],[6.5,'hat',.36],[7,'snare',.88]],
    scrape: [.25,1.75,2.5,3.75,4.25,5.5,6.75,7.5], keys: [1,5.5], reply: [2.25,3.25,6.25,7.25],
  },
};
const pitch = (degree: number, register: number) => ({ degree, register, voicing: 'single' as const });
const chord = { register: 60, voicing: 'chord' as const };

export function authorKizombaArrangements(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const pocket = POCKETS[style.id];
    if (!pocket) throw new Error(`Missing Kizomba rhythm section: ${style.id}`);
    const electronic = ['tarraxinha','urban-kiz','ghetto-zouk-crossover','fusion-kiz'].includes(style.id);
    const make = (instrument: string, role: string, shortName: string, onsets: number[], extra: Partial<AuthoredCell>): AuthoredCell => ({
      name: `${style.name} ${shortName}`, shortName, role, instruments: [instrument], cycleLength: 2,
      onsets, difficulty: 2, ...extra,
    });
    const bass = make('bass','bass','Bass pickup',pocket.bass, {
      durations: pocket.lengths, pitches: pocket.degrees.map(d => pitch(d,40)),
      accents: pocket.bass.map((_,i) => i === 0 || pocket.bass[i] === 4 ? 1 : i % 2 ? .66 : .8), articulation: 'legato',
      description: 'Anchor the low downbeat, release before the next attack, then use the written upper tone as a pickup. The second bar answers the first; do not sustain across a new bass attack.',
    });
    const bassAnswer = { ...bass, name: `${style.name} Bass return`, shortName: 'Bass return', arrangementVariation: true,
      pitches: pocket.degrees.map((d,i) => pitch(i === pocket.degrees.length - 1 ? 7 : d,40)),
      description: 'Keep the two-bar pocket and change the final pickup to approach the next chord. Preserve the kick spaces.' };
    const kit = make('drums','percussion','Dance pocket',pocket.kit.map(h=>h[0]), {
      durations: pocket.kit.map(()=>.12), hits: pocket.kit.map(h=>h[1]), accents: pocket.kit.map(h=>h[2]),
      articulations: pocket.kit.map(h=>h[1]==='hat'?'ghost':'accent'),
      microtiming: pocket.kit.map(h=>/rim|snare/.test(h[1]) ? electronic ? 2 : 9 : h[1]==='hat' ? -2 : 0),
      description: 'Separate the syncopated low drum, light upper pulse and answering backbeat. Learn the two bars as one dance sentence; this is an original groove study.',
    });
    const kitReturn = { ...kit, name: `${style.name} Drum pickup`, shortName: 'Drum pickup', arrangementVariation: true,
      onsets: [...kit.onsets,7.5], durations: [...kit.durations!,.1], hits: [...kit.hits!,'rim' as DrumHit],
      accents: [...kit.accents!,.48], articulations: [...kit.articulations!,'ghost'], microtiming: [...kit.microtiming!,0],
      description: 'Keep the dance pocket intact and add one quiet rim pickup at the end of the second bar. Avoid a full tom fill at every phrase end.',
    };
    const scrape = make('dikanza','percussion','Dikanza weave',pocket.scrape, {
      durations: pocket.scrape.map(()=>.12), hits: pocket.scrape.map((_,i)=>i%2?'ghost':'open'),
      accents: pocket.scrape.map((_,i)=>i%2?.3:.55), articulation:'accent',
      description: 'Alternate a clear scrape and a softer return, interlocking with the drum-machine gaps. Keep the rasp beneath the guitar.',
    });
    const support = [
      make('rhodes','harmony','Rhodes cushion',pocket.keys, { durations:pocket.keys.map(()=>style.id==='tarraxinha'?5.5:1.2),pitches:pocket.keys.map(()=>chord),accents:pocket.keys.map(()=>.4),articulation:'legato',description:'Hold a quiet middle-register voicing in the guitar gaps. This support layer supplies depth without doubling the guitar rhythm.' }),
      make('piano','harmony','Piano answer',pocket.reply.filter((_,i)=>i%2===0), { durations:pocket.reply.filter((_,i)=>i%2===0).map(()=>.3),pitches:pocket.reply.filter((_,i)=>i%2===0).map((_,i)=>pitch(i%2?5:3,65)),articulation:'legato',description:'Answer with a few upper notes after the guitar. Leave the low register to the bass and the chord sustain to Rhodes.' }),
      make('shaker','percussion','Shaker lift',pocket.scrape.filter((_,i)=>i%2===1), { durations:pocket.scrape.filter((_,i)=>i%2===1).map(()=>.1),hits:pocket.scrape.filter((_,i)=>i%2===1).map(()=> 'ghost'),accents:pocket.scrape.filter((_,i)=>i%2===1).map((_,i)=>i%2?.42:.58),articulation:'accent',description:'Add soft return strokes between dikanza attacks. Keep the top light and avoid duplicating its full grid.' }),
      make('guitar','harmony','Guitar answer',pocket.reply, { durations:pocket.reply.map((_,i)=>i%3===2?.4:.24),pitches:pocket.reply.map((_,i)=>pitch([3,5,2,4,3,1][i%6],60)),articulation:'fingerstyle',arrangementVariation:true,description:'Answer the sung phrase with a connected upper-string figure. The two bars have different entry points; do not play the fill over every vocal syllable.' }),
    ];
    const replaced = new Set(['bass','drums','dikanza','rhodes','piano','shaker']);
    const cells = [...style.cells.filter(c=>!c.instruments?.some(i=>replaced.has(i))),bass,bassAnswer,kit,kitReturn,scrape,...support];
    const instrumentTechniques = { ...style.instrumentTechniques, rhodes:['legato','tenuto','accent'], piano:['legato','staccato','accent'], shaker:['ghost','accent','open'] };
    return { ...style, cells, patterns:[...style.patterns,'Bass pickup','Dance pocket','Dikanza weave','Guitar answer'],
      groove:{...style.groove,humanizeJitterMs:electronic?2:5},
      instrumentTechniques,
      instrumentDialects:{...style.instrumentDialects,
        'guitar:harmony':{...style.instrumentDialects['guitar:harmony'],variantId:'solid-electric',drive:.02},
        'drums:percussion':{...style.instrumentDialects['drums:percussion'],variantId:electronic?'electronic-kit':'dance-kit'},
        'bass:bass':{...style.instrumentDialects['bass:bass'],variantId:'fretted-electric',defaultTechnique:'legato'},
        'rhodes:harmony':{allowedTechniques:instrumentTechniques.rhodes,defaultTechnique:'legato'},
        'piano:harmony':{allowedTechniques:instrumentTechniques.piano,defaultTechnique:'legato'},
        'shaker:percussion':{allowedTechniques:instrumentTechniques.shaker,defaultTechnique:'ghost'}},
      mix:{...style.mix,roles:{...style.mix.roles,
        harmony:{...style.mix.roles?.harmony,gainDb:-2.5,bodyDb:-.5,ambienceSend:.1},
        bass:{...style.mix.roles?.bass,width:0,ambienceSend:.025,protectLowEnd:true},
        percussion:{...style.mix.roles?.percussion,gainDb:-.4,ambienceSend:.06,transientEmphasis:electronic?.6:.35}}},
    };
  }) };
}
