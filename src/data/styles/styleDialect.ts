import type { MusicalPattern, Role } from '../../types';
import type { SongStyle } from './schema';
import { profileForStyle } from './styleProfiles';
import { styleTheoryFor } from '../musicTheory/genreTheory';





const SPECIAL_STYLE_CELLS: Record<string, number[][]> = {
  // Style cells are indexed by the resolved five-part ensemble order.
  'tango:guardia vieja': [[0,4,7,12],[0,3,6,8,11,14],[0,4,8,12],[2,6,10,14],[0,3,8,11]],
  'tango:troilo': [[0,3,6,8,11,14],[0,4,8,12],[1,5,9,13],[0,6,8,14],[3,7,11,15]],
  'tango:pugliese': [[0,5,8,11,14],[0,4,8,12],[2,6,10,14],[0,3,8,11],[0,6,9,14]],
  'tango:milonga': [[0,3,6,8,11,14],[0,2,4,6],[1,3,5,7],[0,4,7,11,14],[2,5,8,11,15]],
  'tango:tango vals': [[0,4,8],[3,7,11],[0,6,12],[0,4,8,10],[2,6,10]],
  'tango:tango nuevo': [[0,3,6,8,11,14],[0,4,8,12],[0,2,6,9,12,14],[1,5,8,11,15],[0,6,9,14]],
  'tango:piazzolla': [[0,3,6,8,11,14],[0,4,7,10,12,15],[1,4,6,9,12,14],[0,3,7,8,11,15],[2,5,9,13]],
  'tango:chacarera': [[0,3,6,9],[0,4,8],[1,5,7,11],[0,3,6,8,10],[2,6,9,11]],
  'salsa:pachanga': [[0,3,5,7,10,12,14],[0,4,8,12],[1,5,9,13],[0,2,4,6,8,10,12,14],[0,3,6,9,12,15]],
  'salsa:cha-cha-chá': [[0,4,8,12],[0,4,7,8,12,15],[1,5,9,13],[0,2,4,6,8,10,12,14],[4,6,8,12,14]],
  'salsa:salsa dura': [[0,3,6,8,11,14],[0,4,8,12],[2,5,10,13],[0,3,7,8,11,15],[1,6,9,14]],
  'salsa:charanga': [[0,3,6,8,11,14],[0,4,8,12],[0,2,4,6,8,10,12,14],[1,5,9,13],[3,7,11,15]],
  'salsa:son montuno': [[0,3,6,8,11,14],[0,4,7,12],[1,5,9,13],[0,2,6,8,11,14],[3,6,10,15]],
  'salsa:descarga': [[0,3,6,8,11,14],[0,4,8,12],[2,5,9,12,14],[0,3,7,8,11,15],[1,6,10,13]],
  'timba:timba clásica': [[0,3,6,8,11,14],[0,4,8,12],[1,5,9,13],[0,2,6,8,11,14],[3,7,10,15]],
  'timba:timba funk': [[0,2,5,8,10,13,15],[0,4,7,8,12,15],[2,6,10,14],[1,4,7,9,12,15],[0,3,6,11,14]],
  'timba:timba despelote': [[0,3,6,8,11,14],[0,4,8,12],[1,3,6,9,12,14],[0,3,7,8,11,15],[2,6,8,10,14]],
  'timba:timba rumbeada': [[0,3,6,8,11,14],[0,4,8,12],[1,5,7,10,13],[0,3,6,9,11,14],[2,6,9,12,15]],
  'timba:afro-cuban timba': [[0,3,6,8,11,14],[0,4,8,12],[1,5,9,13],[0,2,6,8,11,14],[3,7,10,15]],
  'timba:cimafunk groove': [[0,2,5,8,10,13,15],[0,4,7,8,12,15],[2,6,10,14],[1,4,7,9,12,15],[0,3,6,11,14]],
  'cumbia:cumbia colombiana': [[0,4,6],[0,2,5,7],[1,4,6],[0,3,5,7],[0,2,4,6]],
  'cumbia:gaita cumbia': [[0,3,6],[0,2,5,7],[1,4,6],[0,3,5],[0,2,6,7]],
  'cumbia:cumbia sabanera': [[0,4,6],[0,2,5,7],[1,4,6],[0,3,5,7],[0,2,4,6]],
  'cumbia:villera': [[0,4,6],[0,2,4,7],[1,5,7],[0,3,6],[0,2,5,7]],
  'cumbia:chicha': [[0,4,6,7],[0,2,5,7],[1,4,6],[0,3,5],[0,2,4,6]],
  'cumbia:sonidera': [[0,4,6],[0,2,5,7],[1,4,6],[0,3,5,7],[0,2,4,6]],
  'cumbia:rebajada': [[0,4],[0,3,6],[1,5],[0,4,7],[2,6]],
  'cumbia:porro': [[0,3,6],[0,2,5,7],[1,4,6],[0,3,5,7],[0,2,4,6]],
  'bachata:tradicional': [[0,3,6,8,11,14],[0,4,8,12],[1,5,9,13],[0,3,7,11,14],[2,6,10,14]],
  'bachata:dominicana': [[0,2,5,8,10,13,15],[0,4,8,12],[1,4,6,9,12,14],[0,3,6,8,11,14],[2,5,9,13]],
  'bachata:sensual': [[0,3,8,11],[0,4,8,12],[2,6,10,14],[0,3,7,11],[4,8,12]],
  'kizomba:tradicional': [[0,3,6,8,11,14],[0,4,8,12],[1,5,9,13],[0,2,6,10,14],[3,7,11,15]],
  'kizomba:passada': [[0,3,6,8,11,14],[0,4,7,12],[1,5,9,13],[0,3,8,11],[2,6,10,14]],
  'kizomba:tarraxinha': [[0,4,12],[0,7,12],[3,11],[0,8],[4,12]],
  'kizomba:urbankiz': [[0,3,6,8,11,14],[0,4,8,12],[2,5,9,13],[0,3,7,11],[1,6,10,15]],
  'zouk:zouk love': [[0,3,8,11],[0,4,8,12],[2,6,10,14],[0,3,7,11],[4,8,12]],
  'zouk:kassav carnival zouk': [[0,3,6,8,11,14],[0,4,7,12],[1,5,9,13],[0,3,7,11,14],[2,6,10,15]],
  'zouk:brazilian zouk': [[0,3,6,10,13],[0,4,8,12],[1,5,9,13],[0,3,7,11],[2,6,10,14]],
};

function makeStylePattern(style: SongStyle, instrumentId: string, index: number, cell: number[]): MusicalPattern {
  const role = instrumentRole(instrumentId) as Role;
  return {
    id: `style-${style.id}-${index}-${instrumentId}`,
    worldId: style.primaryGenre, styleIds: [style.id], name: `${style.name} ${instrumentId} cell`,
    family: 'style-dialect', category: 'groove', description: `Generated ${style.name} role dialect`,
    tags: [style.primaryGenre, 'style-dialect'], approaches: [role === 'bass' ? 'walking' : role === 'percussion' ? 'groove' : role === 'harmony' ? 'comping' : 'phrase'],
    scopes: ['world'] as any, roles: [role], meter: style.rhythm?.meter ?? '4/4', cycleLength: 1,
    subdivisions: 16, onsetGrid: cell, variants: [], supportedEnergy: [1,2,3,4,5], enabled: true,
  } as MusicalPattern;
}

function instrumentRole(instrumentId: string): Role | string {
  const n = instrumentId.toLowerCase();
  if (/bass|guitarron/.test(n)) return 'bass';
  if (/drum|guiro|güiro|bongo|conga|timbale|shaker|guacharaca|palma|bombo|dikanza|percussion|tambor/.test(n)) return 'percussion';
  if (/flute|violin|bandoneon|trumpet|horn|sax|guitar|accordion|tres|requinto|mandolin|fiddle|voice|choir/.test(n)) return 'melody';
  return 'harmony';
}

function styleCellsFor(style: SongStyle): number[][] {
  const key = `${style.primaryGenre}:${style.name.toLowerCase()}`;
  if (SPECIAL_STYLE_CELLS[key]) return SPECIAL_STYLE_CELLS[key];
  const base = /2\/4/.test(style.rhythm?.meter ?? '') ? [[0,2,4,6],[1,3,5,7],[0,3,5,7],[0,2,5],[2,4,6]]
    : /3\/4/.test(style.rhythm?.meter ?? '') ? [[0,4,8],[2,6,10],[0,6,12],[3,7,11],[1,5,9]]
    : /6\/8|12\/8/.test(style.rhythm?.meter ?? '') ? [[0,3,6,9],[0,4,8],[2,6,10],[0,3,7,10],[1,5,9,11]]
    : [[0,4,8,12],[2,6,10,14],[0,3,7,11],[1,5,9,13],[0,3,6,11,14]];
  const shift = Math.abs(style.name.split('').reduce((a,c)=>a+c.charCodeAt(0),0)) % 5;
  return base.map((_, i) => base[(i + shift) % base.length]);
}



const GENRE_PROGRESSION_FALLBACKS: Record<string, string[][][]> = {
  afrobeats: [[['Fmaj7','Em7','Dm7','Cmaj7'],['Dm7','G7','Em7','Am7']],[['C','G','Am','F'],['F','G','Am','Em']]],
  bachata: [[['Am','Dm','E7','Am'],['Dm','G','C','E7']],[['Bm','Em','F#7','Bm'],['Em','A7','D','F#7']]],
  blues: [[['A7','D7','A7','E7'],['D7','D7','A7','A7']],[['C7','F7','C7','G7'],['F7','F7','C7','G7']]],
  brazilian: [[['Cmaj7','A7','Dm7','G7'],['Em7','A7','Dm7','G7']],[['Dm7','G7','Cmaj7','C6'],['Fmaj7','Fm6','Em7','A7']]],
  country: [[['G','C','G','D7'],['G','C','D7','G']],[['C','F','C','G7'],['C','F','G7','C']]],
  cumbia: [[['Am','G','F','E7'],['Dm','C','Bb','A7']],[['Am','F','G','E7'],['Dm','G','C','A7']]],
  disco: [[['Dm7','G7','Cmaj7','Am7'],['Fmaj7','Em7','Dm7','G7']],[['Cm7','F7','Bbmaj7','Gm7'],['Abmaj7','G7','Cm7','C7']]],
  electronic: [[['Am','F','C','G'],['Em','D','C','Em']],[['Dm7','G7','Cmaj7','Am7'],['Am7','G','F','G']]],
  flamenco: [[['Am','G','F','E7'],['Dm','C','Bb','A7']],[['E7','Am','G','F'],['Am','Bb','E7','Am']]],
  folk: [[['G','C','G','D'],['Em','C','G','D']],[['Dm','C','Bb','C'],['G','D','Em','C']]],
  funk: [[['Dm7','C','Bb','C'],['Am7','D7','G7','C7']],[['Em7','A7','Dm7','G7'],['C7','C7','F7','G7']]],
  gospel: [[['C','F','G','Am'],['F','C','Dm7','G7']],[['Cmaj7','Am7','Dm7','G7'],['Ab','Bb','C','C']]],
  'hip-hop': [[['Dm7','Bb','F','C'],['Am7','Fmaj7','Cmaj7','G6']],[['Dm9','G7','Cm9','A7'],['Am','G','F','G']]],
  house: [[['Am7','Fmaj7','C','G'],['Dm7','Em7','Am7','G']],[['Cm7','Abmaj7','Eb','Bb'],['Fm7','Gm7','Cm7','Bb']]],
  jazz: [[['Cmaj7','A7','Dm7','G7'],['Em7','A7','Dm7','G7']],[['Fmaj7','Bb7','Cmaj7','A7'],['Dm7','G7','Em7','A7']]],
  kizomba: [[['Am7','Fmaj7','Cmaj7','G7'],['Dm7','G7','Cmaj7','Am7']],[['Bm7','Gmaj7','Dmaj7','A7'],['Em7','A7','Dmaj7','Bm7']]],
  'r-and-b': [[['Dm9','G13','Cmaj9','Am9'],['Fmaj9','Em7','Dm9','G13']],[['Cmaj9','A7#5','Dm9','G13'],['Ebmaj9','F13','Gm9','C13']]],
  reggae: [[['G','C','G','D'],['Am','Bm','C','D']],[['C','G','Am','F'],['G','D','Em','C']]],
  reggaeton: [[['Am','F','C','G'],['Dm','F','Am','G']],[['Cm','Ab','Eb','Bb'],['Fm','Ab','Cm','Bb']]],
  rock: [[['E5','C5','D5','B5'],['A','D','E','A']],[['Em','C','G','D'],['A','G','D','E']]],
  salsa: [[['Am7','Dm7','G7','Cmaj7'],['Fmaj7','Bm7b5','E7','Am7']],[['Cm7','Fm7','Bb7','Ebmaj7'],['Abmaj7','Dm7b5','G7','Cm7']]],
  ska: [[['C','G','Am','F'],['F','C','G','C']],[['Dm7','G7','Cmaj7','A7'],['C','Bb','F','G']]],
  soul: [[['Cmaj7','Am7','Dm7','G7'],['Fmaj7','Em7','Dm7','G7']],[['Ebmaj7','Cm7','Fm7','Bb7'],['Cmaj7','A7','Dm7','G7']]],
  swing: [[['C6','A7','Dm7','G7'],['Dm7','G7','C6','A7']],[['Fmaj7','D7','Gm7','C7'],['Bb6','G7','Cm7','F7']]],
  tango: [[['Am','Dm','E7','Am'],['Dm','G7','C','E7']],[['Cm','Fm','G7','Cm'],['Fm','Bb7','Eb','G7']]],
  timba: [[['Am7','Dm7','E7','Am7'],['Dm7','G7','Cmaj7','A7']],[['Cm7','Fm7','G7','Cm7'],['Dm7','G7','C7','A7']]],
  zouk: [[['Am7','Fmaj7','Cmaj7','G7'],['Dm9','G13','Cmaj9','Am7']],[['Bm7','Gmaj7','Dmaj7','A7'],['Em9','A13','Dmaj9','Bm7']]],
  'drum-and-bass': [[['Em7','Cmaj7','G','D'],['Dm7','Bbmaj7','F','C']],[['Am7','G','Fmaj7','G'],['Em9','D','Cmaj7','B7']]],
  industrial: [[['E5','F5','E5','E5'],['E5','Bb5','F5','E5']],[['C5','Db5','C5','F#5'],['E5','G5','F5','E5']]],
  'punk-hardcore': [[['E5','G5','A5','B5'],['A5','C5','D5','E5']],[['E5','F#5','G5','E5'],['D5','A5','G5','D5']]],
  'uk-bass': [[['Am7','G','F','G'],['Dm7','C','Bb','C']],[['Em7','D','C','D'],['Fm7','Eb','Db','Eb']]],
};



const GENRE_RHYTHM_FALLBACKS: Record<string,{bpm:number;range:[number,number];meter:string;feel:string;swing:number}> = {
  disco:{bpm:120,range:[112,128],meter:'4/4',feel:'four-on-floor',swing:50},
  gospel:{bpm:104,range:[76,124],meter:'4/4',feel:'call-and-response build',swing:54},
  'r-and-b':{bpm:82,range:[65,105],meter:'4/4',feel:'behind-the-beat',swing:52},
  soul:{bpm:94,range:[70,112],meter:'4/4',feel:'deep pocket',swing:54},
  'drum-and-bass':{bpm:174,range:[165,180],meter:'4/4',feel:'breakbeat drive',swing:50},
  industrial:{bpm:128,range:[110,145],meter:'4/4',feel:'machine pulse',swing:50},
  'punk-hardcore':{bpm:180,range:[150,220],meter:'4/4',feel:'straight speed',swing:50},
  'uk-bass':{bpm:132,range:[125,140],meter:'4/4',feel:'broken club',swing:50},
};


function fallbackProgressions(genreId: string, index: number, styleName: string): string[][] {
  const groups = GENRE_PROGRESSION_FALLBACKS[genreId];
  if (!groups?.length) return [];
  const n = styleName.toLowerCase();
  const hard = /hard|metal|punk|industrial|neuro|death|black|thrash/.test(n);
  const slow = /ballad|quiet|deep|ambient|cool|lyrical|sensual|romantic|liquid/.test(n);
  const group = groups[(hard ? 1 : slow ? 0 : index) % groups.length];
  return group;
}

/** Apply the authored style dialect without introducing generic replacement patterns. */
export function applyStyleDialect(style: SongStyle, index: number): SongStyle {
  const profile = profileForStyle(style.primaryGenre, style.name, index);
  const theory = styleTheoryFor(style.id, style.primaryGenre);
  const fallback = fallbackProgressions(style.primaryGenre, index, style.name);
  if (!profile && !fallback.length) return style;
  const base = profile ?? {
    bpm: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.bpm ?? style.rhythm?.defaultBpm,
    tempoRange: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.range ?? style.rhythm?.tempoRange,
    meter: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.meter ?? style.rhythm?.meter,
    feel: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.feel ?? style.rhythm?.feel ?? 'style-native',
    swing: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.swing ?? style.rhythm?.swingPercentage,
    timeline: style.rhythm?.timelineClave, form: style.form?.sectionVocab ?? ['intro','verse','chorus','outro'],
    progressions: fallback, harmonicRhythm: style.harmony?.harmonicRhythm, bassMotion: style.harmony?.bassMotion,
    signatureCell: style.rhythm?.signatureCell ?? style.name, instruments: (style.sound?.instrumentPalette ?? []).map(x => x.value),
    contours: style.melody?.contourArchetypes ?? ['motif','variation'], arrangement: style.arrangement?.doublingRules ?? [], production: ''
  };
  const rhythm = { ...(style.rhythm ?? {}) };
  rhythm.defaultBpm = base.bpm ?? rhythm.defaultBpm;
  rhythm.tempoRange = base.tempoRange ?? rhythm.tempoRange;
  rhythm.meter = base.meter ?? rhythm.meter;
  rhythm.feel = base.feel ?? rhythm.feel;
  rhythm.swingPercentage = base.swing ?? rhythm.swingPercentage;
  rhythm.signatureCell = base.signatureCell;
  rhythm.timelineClave = base.timeline ?? rhythm.timelineClave;
  rhythm.microtimingFeel = /laid-back|behind|space/.test(base.feel ?? '') ? 'laid-back' : /shuffle|swing/.test(base.feel ?? '') ? 'swung' : rhythm.microtimingFeel;

  style.rhythm = rhythm;
  style.summary = `${style.name}: ${base.signatureCell}`;
  style.signatureTraits = [
    base.signatureCell,
    `${theory.meter} ${theory.harmonicModel}`,
    ...theory.rhythm.signature,
    `bass:${theory.bass.style}`,
    ...base.contours,
    ...(base.arrangement ?? []),
  ].filter(Boolean).slice(0, 14);
  style.form = {
    ...(style.form ?? {}),
    sectionVocab: base.form,
    templates: [{w:1, value: base.form.map((label, i) => ({
      key: `${label.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${i}`,
      label, kind: label, bars: label === 'intro' || label === 'outro' || label === 'coda' || label === 'cierre' ? 4 : 8,
      intensity: i === base.form.length - 1 ? 'low' : i >= base.form.length - 2 ? 'high' : 'medium'
    }))}],
    preferredMeters: [rhythm.meter ?? '4/4'],
  };
  style.harmony = {
    ...(style.harmony ?? {}),
    model: (theory.harmonicModel ?? base.harmonyModel ?? style.harmony?.model ?? 'functional') as any,
    modePolicy: (theory.defaultScale ?? base.modePolicy ?? style.harmony?.modePolicy ?? 'major') as any,
    progressionTemplates: (base.progressions.length ? base.progressions : theory.progressions).map(value => ({w:1,value})),
    harmonicRhythm: theory.harmonicRhythm ?? base.harmonicRhythm ?? style.harmony?.harmonicRhythm,
    bassMotion: theory.bass.style as any ?? base.bassMotion as any ?? style.harmony?.bassMotion,
    theoryCadences: theory.cadences,
    theoryChordScales: theory.chordScales,
  } as any;
  style.melody = {
    ...(style.melody ?? {}),
    contourArchetypes: Array.from(new Set([...theory.melody.contour, ...base.contours])),
    phraseLengthsBars: theory.melody.phraseBars.length ? theory.melody.phraseBars : [4,8],
    targetDegrees: theory.melody.targetDegrees,
    approachDegrees: theory.melody.approachDegrees,
    scaleVocabulary: theory.melody.scale,
  } as any;
  style.arrangement = {
    ...(style.arrangement ?? {}),
    doublingRules: base.arrangement,
  };
  style.sound = {
    ...(style.sound ?? {}),
    instrumentPalette: base.instruments.map(value => ({value,w:1})),
    masterProfile: { ...(style.sound?.masterProfile ?? {}), pocket: .5, lift: .5 },
  };
  return style;
}

export function dialectPatternsForStyle(style: SongStyle, _index: number): MusicalPattern[] {
  const instruments = (style.sound?.instrumentPalette ?? []).map(x => x.value).filter(Boolean);
  const cells = styleCellsFor(style);
  // Create one fixed style cell per representative instrument. Other material
  // comes from the authored pattern catalog.
  return instruments.map((instrumentId, i) =>
    makeStylePattern(style, instrumentId, i, cells[i % Math.max(1, cells.length)])
  );
}

