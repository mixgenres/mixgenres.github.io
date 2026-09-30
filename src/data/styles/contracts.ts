import type { ImprovisationGrammar } from './schema';
export type PerformanceMode = 'acoustic-ensemble' | 'programmed-electronic' | 'hybrid';

export interface InstrumentDialect {
  id: string;
  instrumentId: string;
  name: string;
  family: string;
  performanceMode: PerformanceMode;
  defaultTechnique: string;
  allowedTechniques: string[];
  pluckPositionOverride?: number;
  bowPressureOverride?: number;
  contactPointOverride?: number;
  decayMultiplier?: number;
  brightnessMultiplier?: number;
  bodyMultiplier?: number;
  tuningSystemId?: string;
  micProximityPreset?: 'close-mic' | 'room-ambient' | 'direct-box' | 'hall-stage';
  bendGlideMs?: number;
  courses?: number;
  bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric';
  excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer';
  sympatheticStrings?: boolean;
  /** Optional role-specific overrides for the same instrument/style pairing. */
  roleVariants?: Record<string, Partial<InstrumentDialect>>;
  /** Optional coarse energy-specific physical-model adjustments (1..5). */
  energyTweaks?: Partial<Record<1 | 2 | 3 | 4 | 5, Partial<InstrumentDialect>>>;
}



export type InteractionModel = 'homophonic' | 'interlock' | 'unison' | 'counterpoint';

export type PulseModel =
  | 'metric-hierarchical'
  | 'timeline-cycle'
  | 'additive'
  | 'long-cycle'
  | 'free-rubato'
  | 'machine-grid';

export interface PocketSpec {
  referenceTempo: number;
  beatRelative: boolean;
  byRole: Partial<Record<string, number[]>>;
  jitterMs: number;
}

export interface PercussionDialect {
  kitMode: 'none' | 'hybrid' | 'full';
  allowedHitTypes: string[];
  forbidWesternBackbeat: boolean;
  forbidSectionCrash: boolean;
  allowTomFills: boolean;
  ride: boolean;
}

export interface BassDialect {
  style: 'root' | 'rootFifth' | 'walking' | 'tumbao' | 'octave' | 'riff' | 'sub' | 'dembow' | 'cumbia' | 'reggae' | 'samba' | 'house';
  rhythmJob: string;
  pitchJob: string;
  articulation: string[];
}

export interface ApproachSpec {
  /** Stable behavioral vocabulary independent of the physical instrument. */
  id: string;
  description?: string;
  /** Catalog tags/phrases that identify authored material for this approach. */
  tags: string[];
}

export interface EnergyMapping {
  activity: number;
  brightness: number;
  fxWetness: number;
}

export type EnergyDelta = 'build' | 'drop' | 'hold';
export type TransitionType = 'fill' | 'turnaround' | 'drop-out' | 'arrastre' | 'corte';

export interface TransitionGrammar {
  byDelta: Record<EnergyDelta, TransitionType[]>;
  types: TransitionType[];
  onEnergyRise?: TransitionType;
  onEnergyFall?: TransitionType;
  authoredPriority?: boolean;
}

export interface DragProfile {
  roles: string[];              // e.g. ['lead', 'bass', 'harmony', 'comp']
  maxLagBeats: number;          // how far behind the grid the drag can pull at its peak
  growthCurve: 'linear' | 'eased-in' | 'eased-in-out';
  resolvesAtCadence: boolean;   // snaps back to on-time at phrase/cadence boundaries
  affectsTempo?: boolean;       // phrase-local tempo elasticity for soloist/expressive tracks
}

export interface PerformanceIdioms {
  bluesRockLeadMinorThirdBend?: boolean;
  dropPortamento?: boolean;
  spotlightLeadRubato?: boolean;
  dragProfile?: DragProfile;
}

export interface MixCharacter {
  dryness: number;      // 0..1, 1 = very dry/close, 0 = roomy/ambient
  bassForward: number;  // 0..1, how far forward the bass/drums sit vs. the rest
  width: number;        // 0..1, overall stereo spread
  brightness: number;   // 0..1, overall top-end lift
  compressionRatio?: number; // e.g. 1.2 .. 8.0
  saturationType?: 'tape' | 'tube' | 'hard-clip';
  subHarmonics?: number; // 0..1
  transientSnap?: number; // 0..1
  sidechainDucking?: number; // 0..1, genre-specific kick/bass ducking depth
}

export interface WorldContract {
  pulseModel: PulseModel;
  meter: string;
  cycleLength: number;
  energyMappings: Record<1 | 2 | 3 | 4 | 5, EnergyMapping>;
  energyLabels?: Partial<Record<1 | 2 | 3 | 4 | 5, string>>;
  subdivision: number;
  timeline: string;
  timelineGrid: number[];
  timelineRequired: boolean;
  microtiming: PocketSpec;
  accentGrammar: Record<string, string>;
  accentMap: number[];
  articulationGrammar: Record<string, string[]>;
  harmonyModel: string;
  harmonyVocabulary: string[];
  harmonicRhythm: string;
  pitchModel: string;
  tuningSystem: string;
  pitchIntervals: number[];
  bass: BassDialect;
  form: string[];
  interactionModel: InteractionModel;
  approaches: Record<string, ApproachSpec>;
  transitionGrammar: TransitionGrammar;
  defaultSpotlights: Record<string, string[]>;
  performanceIdioms: PerformanceIdioms;
  improvisationGrammar: ImprovisationGrammar;
  ensemble: Record<string, string>;
  timbreSpace: { palette: string[]; production: string; mixCharacter?: MixCharacter };
  instrumentDialects?: Record<string, Partial<InstrumentDialect>>;
  performanceGrammar?: import('./schema').PerformanceGrammar;
  performanceMode?: 'acoustic-ensemble' | 'programmed-electronic' | 'hybrid';
  forbidden: string[];
  groove: {
    name: string;
    swing: number;
    swingUnit: 8 | 16;
    lean: number;
    roleLean: Record<string, number>;
    humanizeMs: number;
    humanizeVel: number;
    accentDepth: number;
    pocket: number[];
    anticipationMs: number;
    dynamicRange: number;
  };
  percussion: PercussionDialect;
}

const z = (n: number = 16) => Array.from({ length: n }, () => 0);

function base(
  pulseModel: PulseModel,
  meter: string,
  timeline: string,
  harmonyModel: string,
  pitchModel: string,
  tuningSystem: string,
  bass: BassDialect,
  form: string[],
  ensemble: Record<string,string>,
  palette: string[],
  production: string,
  forbidden: string[],
  groove: WorldContract['groove'],
  percussion: PercussionDialect,
  opts: Partial<Pick<WorldContract,'cycleLength'|'subdivision'|'timelineRequired'|'harmonicRhythm'|'harmonyVocabulary'|'accentGrammar'|'articulationGrammar'|'microtiming'|'interactionModel' | 'energyMappings' | 'transitionGrammar' | 'approaches' | 'performanceIdioms' | 'improvisationGrammar' | 'instrumentDialects'>> & { mixCharacter?: MixCharacter } = {},
): WorldContract {
  const pm = pitchModel.toLowerCase();
  const pitchIntervals = pm.includes('pentatonic') ? [0,2,4,7,9]
    : pm.includes('phrygian') ? [0,1,3,5,7,8,10]
    : pm.includes('dorian') ? [0,2,3,5,7,9,10]
    : pm.includes('mixolydian') ? [0,2,4,5,7,9,10]
    : pm.includes('minor') ? [0,2,3,5,7,8,10]
    : [0,2,4,5,7,9,11];
  const accentMap = Array.from({length: Math.max(8, opts.subdivision ?? 16)}, (_, i) => {
    if (timeline !== 'none' && (timeline.includes('clave') || timeline.includes('3+3+2'))) {
      const grid = timeline.includes('3+3+2') ? [0,3,6,8] : [0,2,5,8,10,12,14];
      return grid.includes(i) ? 1 : 0.58;
    }
    if (i % Math.max(1, Math.round((opts.subdivision ?? 16) / 4)) === 0) return 1;
    return i % 2 === 0 ? 0.72 : 0.52;
  });
  const transitionGrammar = opts.transitionGrammar ?? { byDelta: { build: ['fill'], drop: ['drop-out'], hold: [] }, types: ['fill', 'drop-out'], onEnergyRise: 'fill', onEnergyFall: 'drop-out', authoredPriority: true };
  const approaches = opts.approaches ?? {
      bass: { id: bass.style === 'walking' ? 'walking' : bass.style, tags: [bass.style, 'bass'] },
      pulse: { id: bass.style === 'dembow' ? 'dembow-bass' : bass.style, tags: [bass.style, 'pulse', 'bass'] },
      harmony: { id: 'comping', tags: ['harmony', 'comping'] },
      lead: { id: 'phrase', tags: ['lead', 'phrase'] },
      percussion: { id: 'groove', tags: ['percussion', 'groove'] },
    };
  const energyMappings = opts.energyMappings ?? {
    1: { activity: 0.35, brightness: 0.25, fxWetness: 1.25 },
    2: { activity: 0.55, brightness: 0.4, fxWetness: 1.1 },
    3: { activity: 0.75, brightness: 0.58, fxWetness: 1.0 },
    4: { activity: 0.9, brightness: 0.78, fxWetness: 0.9 },
    5: { activity: 1.0, brightness: 1.0, fxWetness: 0.78 },
  };
  return {
    pulseModel, meter, cycleLength: opts.cycleLength ?? 1, energyMappings, subdivision: opts.subdivision ?? 16,
    timeline, timelineGrid: timeline === 'none' ? [] : (timeline.includes('clave') ? [0,2,5,8,10,12,14] : timeline.includes('3+3+2') ? [0,3,6,8] : []), timelineRequired: opts.timelineRequired ?? false,
    microtiming: opts.microtiming ?? {
      referenceTempo: 100, beatRelative: true,
      byRole: { bass: groove.roleLean.bass ? [groove.roleLean.bass] : [0], comp: [groove.roleLean.comp ?? 0], lead: [groove.roleLean.lead ?? 0], percussion: [groove.roleLean.perc ?? 0] },
      jitterMs: groove.humanizeMs,
    },
    accentGrammar: opts.accentGrammar ?? { ensemble: 'metric accents from the style pocket' },
    accentMap,
    articulationGrammar: opts.articulationGrammar ?? { ensemble: ['style-native attack and release'] },
    harmonyModel, harmonyVocabulary: opts.harmonyVocabulary ?? ['shared chord library'],
    harmonicRhythm: opts.harmonicRhythm ?? '1-bar',
    pitchModel, tuningSystem, pitchIntervals, bass, form,
    interactionModel: opts.interactionModel ?? (timeline.includes('clave') ? 'interlock' : pulseModel === 'machine-grid' ? 'unison' : 'homophonic'),
    approaches,
    performanceIdioms: {
      bluesRockLeadMinorThirdBend: false,
      dropPortamento: false,
      spotlightLeadRubato: false,
      ...(opts.performanceIdioms ?? {}),
    },
    improvisationGrammar: {
      scaleMode: pm.includes('minor') ? 'minor-pentatonic' : 'major',
      targetToneStrategy: 'chord-tone-on-beat-1',
      phraseStages: ['state', 'rest', 'repeat-transpose', 'rapid-run'],
      transposeDegrees: 2,
      phraseBars: 4,
      rapidRunOrnaments: ['rapid-run'],
      ...(opts.improvisationGrammar ?? {}),
    },
    transitionGrammar,
    defaultSpotlights: {},
    ensemble,
    timbreSpace: {
      palette,
      production,
      mixCharacter: opts.mixCharacter ?? { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.5, saturationType: 'tape', compressionRatio: 2.0, subHarmonics: 0.0, transientSnap: 0.3 },
    },
    instrumentDialects: opts.instrumentDialects ?? {},
    forbidden,
    groove,
    percussion,
  };
}

const G: Record<string, WorldContract> = {};

G.tango = base('metric-hierarchical','4/4','none','functional','tonal with chromatic passing','12-tet',
  {style:'riff',rhythmJob:'marcato roots/fifths/octaves; cadence approach and arrastre; never walking',pitchJob:'root/fifth/octave with chromatic approach',articulation:['marcato','arrastre','arco','hard pizzicato']},
  ['intro','A','B','A','variación','coda'], {motor:'piano + bass',lead:'bandoneón / violin',answer:'bandoneón ↔ violin'}, ['bandoneon','violin','piano','upright-bass','cello'],'dry room, wood/bellows/bow detail',
  ['drum-kit','2-and-4 backbeat','crash on section start','walking bass','swing','tom fills'],
  {name:'Marcato / Yumba',swing:.5,swingUnit:16,lean:5,roleLean:{bass:-6,comp:7,lead:13,perc:0},humanizeMs:9,humanizeVel:.14,accentDepth:.95,pocket:[-10, 5, 0, 5, -10, 5, 0, 5, -10, 5, 0, 5, -10, 5, 0, 5],anticipationMs:-22,dynamicRange:1.35},
  {kitMode:'none',allowedHitTypes:[],forbidWesternBackbeat:true,forbidSectionCrash:true,allowTomFills:false,ride:false},
  {cycleLength:1,subdivision:16,timelineRequired:false,harmonicRhythm:'1/2-bar',
   harmonyVocabulary:['minor-key cadence','V7b9','chromatic passing','secondary dominant'],
   accentGrammar:{bass:'marcato en 4 or en 2; weight 1/3',comp:'short marcato / yumba',lead:'rubato over stable motor'},
   articulationGrammar:{bass:['pizzicato','arco','arrastre'],bandoneon:['staccato','legato','bellows phrasing'],violin:['chicharra','látigo','portamento'],piano:['octave marcato','variación']},
   microtiming:{referenceTempo:120,beatRelative:true,byRole:{bass:[-6,0,-6,2],comp:[7,0,7,8],lead:[12,18,8,20],percussion:[0]},jitterMs:5}});

G.salsa = base('timeline-cycle','4/4','son clave 2-3 or 3-2','modal-vamp','major/minor tonal with modal vamp color','12-tet',
  {style:'tumbao',rhythmJob:'downbeat sparse/empty; anticipates next bar',pitchJob:'root/fifth/octave and approach into next root',articulation:['plucked','muted','slap']},
  ['intro','verso/tema','montuno','mambo','montuno','cierre'], {motor:'piano guajeo + bass tumbao',percussion:'conga + timbales + clave/cáscara',lead:'trumpet/horn-section response'}, ['piano','timbales','congas','trumpet','upright-bass'],'bright brass, forward percussion, tight room',
  ['rock backbeat','crash on section start','tom fills','walking bass','clave mismatch'],
  {name:'Clave Pocket',swing:.5,swingUnit:16,lean:-1,roleLean:{bass:-18,conga:0,comp:-5,piano:-5,campana:12,lead:5,horn:5,perc:0},humanizeMs:3,humanizeVel:.1,accentDepth:.84,pocket:(()=> {const a=z();a[6]=-8;a[12]=-6;a[14]=-5;return a})(),anticipationMs:-28,dynamicRange:1.25},
  {kitMode:'hybrid',allowedHitTypes:['rim','cowbell','ghost'],forbidWesternBackbeat:true,forbidSectionCrash:true,allowTomFills:false,ride:false},
  {cycleLength:2,subdivision:16,timelineRequired:true,harmonicRhythm:'1/2-bar',
   harmonyVocabulary:['montuno vamp','ii-V','minor vamp','dominant vamp'],
   accentGrammar:{clave:'hard invariant',bass:'tumbao anticipations',piano:'guajeo interlock',horn:'short stabs'},
   articulationGrammar:{conga:['open','slap','muff','bass'],timbales:['cáscara','paila','rim','campana'],bongo:['martillo','campana'],horn:['stab']},
   microtiming:{referenceTempo:96,beatRelative:true,byRole:{bass:[-18],conga:[0],comp:[-5],piano:[-5],campana:[12],lead:[5],horn:[5],percussion:[0]},jitterMs:3}});

G.timba = { ...G.salsa, pulseModel:'timeline-cycle', timeline:'son clave / style-specific clave direction', form:['intro','verso','coro','marcha','gear','break','cierre'], ensemble:{motor:'tumbao + marcha',interaction:'gears, breaks, horn response/lead'}, timbreSpace:{...G.salsa.timbreSpace,production:'harder attacks, sectional breaks, dense percussion'}, forbidden:[...G.salsa.forbidden,'static salsa arrangement'], groove:{...G.salsa.groove,name:'Gear Pocket',lean:-3,roleLean:{...G.salsa.groove.roleLean,bass:-15,comp:-10,stab:-8},anticipationMs:-32,dynamicRange:1.32} };

G.jazz = { ...base('metric-hierarchical','4/4','none','functional','major/minor modes + chromatic','12-tet',
  {style:'walking',rhythmJob:'quarter-note walking with phrase-leading approach',pitchJob:'chord tones + scale passing tones',articulation:['pizzicato','ghost','legato']},
  ['head','solo','trading','solo','head','tag'], {motor:'ride + walking bass',comp:'interactive piano/guitar',lead:'horn'}, ['tenor-sax','upright-bass','piano','jazz-guitar','brush-kit'],'live room, moderate width, soft compression',
  ['fixed pop backbeat','crash every section','four-bar fill rule'],
  {name:'Swing',swing:.64,swingUnit:8,lean:2,roleLean:{ride:5,bass:-4,comp:7,snare:3,lead:9},humanizeMs:8,humanizeVel:.15,accentDepth:.76,pocket:z(16),anticipationMs:-22,dynamicRange:1.3},
  {kitMode:'full',allowedHitTypes:['ride','brush','hat','snare','ghost','kick'],forbidWesternBackbeat:false,forbidSectionCrash:true,allowTomFills:false,ride:true},
  {harmonicRhythm:'1/2-bar',harmonyVocabulary:['ii-V-I','turnaround','dominant substitution','modal vamp'],
   accentGrammar:{ride:'triplet pulse',bass:'quarter-note walking',comp:'irregular comping',lead:'phrase accents'},
   articulationGrammar:{bass:['pizzicato'],drums:['ride','brush','ghost'],lead:['legato','fall','doit']},
   microtiming:{referenceTempo:140,beatRelative:true,byRole:{ride:[0,2,0,2],bass:[-4,0,-4,0],comp:[7,4,9,4],lead:[8,14,10,16]},jitterMs:4}}),
  improvisationGrammar:{
    scaleMode:'chromatic-enclosure',
    targetToneStrategy:'chord-tone-on-beat-1',
    phraseStages:['state','rest','repeat-transpose','rapid-run'],
    transposeDegrees:2,
    phraseBars:4,
    rapidRunOrnaments:['rapid-run','mordent','grace-note'],
  }
};
G.swing = { ...G.jazz, form:['head','ensemble riff','shout chorus','solo','head','tag'], ensemble:{...G.jazz.ensemble,sections:'sax/brass section writing and call-response riffs'}, groove:{...G.jazz.groove,name:'Big Band Swing',swing:.66,roleLean:{...G.jazz.groove.roleLean,comp:6,lead:7}} };
G.blues = { ...G.jazz, harmonyModel:'blues-form', pitchModel:'blue-note vocabulary', form:['12-bar head','harmonica/guitar answer','solo','turnaround'], bass:{...G.jazz.bass,style:'walking',rhythmJob:'shuffle / walking hybrid with turnaround'}, groove:{...G.jazz.groove,name:'Shuffle',swing:.63,lean:4,roleLean:{...G.jazz.groove.roleLean,lead:13,comp:8},humanizeMs:10} };

function simple(
  _id:string, meter:string, pulse:PulseModel, feel:string, swing:number, bass:BassDialect,
  form:string[], ensemble:Record<string,string>, palette:string[], forbidden:string[],
  timeline='none', harmony='functional', pitch='tonal', production='genre-specific',
  kit:PercussionDialect={kitMode:'full',allowedHitTypes:['kick','snare','hat'],forbidWesternBackbeat:false,forbidSectionCrash:true,allowTomFills:false,ride:false},
): WorldContract {
  const a = z(); return base(pulse,meter,timeline,harmony,pitch,'12-tet',bass,form,ensemble,palette,production,forbidden,
    {name:feel,swing,swingUnit:8 as 8|16,lean:0,roleLean:{bass:-2,comp:2,lead:4,perc:0},humanizeMs:7,humanizeVel:.12,accentDepth:.78,pocket:a,anticipationMs:-18,dynamicRange:1.2},kit);
}

G.afrobeats = simple('afrobeats','4/4','timeline-cycle','layered syncopation',.5,{style:'riff',rhythmJob:'interlocking syncopated bass; log-drum patterns where idiomatic',pitchJob:'root/third/fifth plus melodic fills',articulation:['short','muted']},['intro','verse','pre-chorus','chorus','break','outro'],{motor:'kick + percussion + bass',lead:'tenor-sax'},['log-drum','kalimba','shaker','bass','tenor-sax'],['generic dembow as primary groove','straight rock backbeat'],'3+3+2-type cells','modal-vamp','pentatonic/major','layered percussion, controlled sub');
G.bachata = simple('bachata','4/4','metric-hierarchical','derecho with anticipation',.5,{style:'tumbao',rhythmJob:'anticipated bass into chord changes',pitchJob:'root/fifth with passing approach',articulation:['plucked','muted']},['intro','verso','coro','mambo','coda'],{motor:'requinto + bongo + güira',bass:'anticipated bass',lead:'requinto'},['requinto','guitarron','guiro','bongos','accordion'],['salsa clave lock','rock backbeat'],'none','functional','minor/major','bright guitar, dry percussion');
G.brazilian = simple('brazilian','2/4','timeline-cycle','interlocking Brazilian pulse',.5,{style:'samba',rhythmJob:'style-specific syncopation; surdo anchor; bass follows style',pitchJob:'root/guide-tone with passing tones',articulation:['muted','short','ghost']},['intro','theme','variation','solo','coda'],{motor:'surdo + pandeiro + tamborim',harmony:'cavaquinho/violão interlock'},['cavaquinho','pandeiro','surdo','tamborim','flute'],['generic Latin backbeat','four-on-floor'],'samba-specific cells','functional/modal-vamp','major/minor','tight ensemble, natural room');
G.country = simple('country','4/4','metric-hierarchical','boom-chick / shuffle',.56,{style:'rootFifth',rhythmJob:'alternating bass with strum backbeat',pitchJob:'root/fifth + walk-ups',articulation:['pick','muted','slide']},['intro','verse','chorus','instrumental','verse','outro'],{motor:'alternating bass + strum',lead:'fiddle / steel'},['steel-guitar','fiddle','banjo','upright-bass','mandolin'],['funk syncopation','four-on-floor'],'none','functional','major/mixolydian','dry room, string articulation');
G.cumbia = simple('cumbia','4/4','timeline-cycle','chucu-chucu',.5,{style:'cumbia',rhythmJob:'alternating bass around percussion cycle',pitchJob:'root/fifth/approach',articulation:['plucked','short']},['intro','tema','verso','coro','break','cierre'],{motor:'guacharaca + bass + percussion',lead:'accordion/guitar'},['accordion','guacharaca','tambora','bass','clarinet'],['generic pop backbeat','four-on-floor'],'chucu-chucu cell','functional','minor/major','dry percussion, bright melodic lead');
G.disco = simple('disco','4/4','machine-grid','four-on-floor + syncopated bass',.5,{style:'octave',rhythmJob:'octave and syncopated bass locked to steady kick',pitchJob:'root/octave with passing tones',articulation:['short','palm-muted']},['intro','verse','chorus','break','chorus','outro'],{motor:'four-on-floor kick + bass',lead:'vocal hook and string answers'},['drums','bass','strings','piano','voice'],['swing','rock backbeat'],'four-on-floor','functional','major/minor','live rhythm section, string lifts, vocal-forward chorus');
G.electronic = simple('electronic','4/4','machine-grid','style-dependent machine grid',.5,{style:'octave',rhythmJob:'loop-specific bass pulse',pitchJob:'root/octave or modal sub',articulation:['short','gated']},['intro','build','drop','breakdown','drop','outro'],{motor:'drum machine + bass',texture:'synth/pads'},['synth','acid-303','drums','sub-bass','noise-sweep'],['unjustified acoustic fills'],'none','modal-vamp','mode/scale','automation and filter movement');
G.folk = simple('folk','4/4','metric-hierarchical','acoustic cycle',.5,{style:'rootFifth',rhythmJob:'supportive root/fifth; style-dependent drone',pitchJob:'modal/tonal melody',articulation:['pick','open','drone']},['intro','verse','refrain','instrumental','verse','coda'],{motor:'acoustic strum',lead:'fiddle/tin-whistle'},['banjo','fiddle','mandolin','upright-bass','tin-whistle'],['default pop chorus'],'none','modal-vamp','major/minor/modal','natural room, limited processing');
G.funk = simple('funk','4/4','metric-hierarchical','the one',.5,{style:'riff',rhythmJob:'syncopated short bass locked to kick',pitchJob:'root/fifth/7th with chromatic approach',articulation:['muted','ghost','slap']},['intro','groove','verse','breakdown','groove','tag'],{motor:'bass + kick',comp:'guitar/clavinet stabs',lead:'horn/electric-guitar'},['clavinet','slap-bass','electric-guitar','drums','horn-section'],['straight rock bass','crash every section'],'none','functional','mixolydian/dorian','tape warmth, tight mono-ish center');
G.gospel = simple('gospel','4/4','metric-hierarchical','call-response build',.52,{style:'rootFifth',rhythmJob:'supportive bass with gospel passing motion',pitchJob:'roots/guide tones and passing chords',articulation:['legato','staccato']},['verse','build','vamp','shout','coda'],{motor:'organ + piano + bass',lead:'organ / alto-sax'},['organ','alto-sax','piano','bass','drums'],['static pop loop'],'none','functional','major/blues/gospel','crescendo and room bloom');
G['hip-hop'] = simple('hip-hop','4/4','machine-grid','sample pocket / laid-back drag',.5,{style:'sub',rhythmJob:'sparse kick-synced sub; style-specific 808 rhythm',pitchJob:'root with 808 glides when available',articulation:['short','slide','sustain']},['intro','verse','hook','verse','bridge','outro'],{motor:'drums + sub',texture:'sample/chop',lead:'synth / alto-sax'},['drums','sub-bass','synth','electric-guitar','alto-sax'],['rock drum kit','four-on-floor'],'boom-bap / trap cells','functional/modal-vamp','minor/pentatonic','sample space, controlled sub');
G.house = simple('house','4/4','machine-grid','four-on-floor',.5,{style:'house',rhythmJob:'bass syncopates between kicks; repeats as a loop',pitchJob:'root/fifth/7th',articulation:['short','gated']},['intro','groove','breakdown','drop','groove','outro'],{motor:'four-on-floor kick + bass',texture:'hats/pads'},['acid-303','synth','drums','sub-bass','cowbell'],['rock backbeat','random fills'],'four-on-floor','functional/modal-vamp','minor/dorian','sidechain pumping, filter automation');
G.kizomba = simple('kizomba','4/4','metric-hierarchical','deep laid-back',.5,{style:'sub',rhythmJob:'sub-bass anchors with syncopated anticipations',pitchJob:'root/fifth with melodic movement',articulation:['legato','short']},['intro','verse','chorus','break','chorus','outro'],{motor:'sub-bass + batida',texture:'dikanza scraper',lead:'synth or vocal'},['sub-bass','guitar','dikanza','drums','synth'],['reggaeton dembow','rock backbeat'],'none','modal-vamp','minor/major','sub-heavy, soft transients, Angolan percussion');
G.flamenco = simple('flamenco','12/8','long-cycle','compás',.5,{style:'root',rhythmJob:'compás-anchored bass/guitar support; avoid generic backbeat',pitchJob:'tonic/dominant with Phrygian cadence color',articulation:['rasgueado','golpe','ligado','alzapúa']},['salida','llamada','letra','falseta','remate','cierre'],{motor:'guitar + palmas/cajón',lead:'spanish-guitar',answer:'falseta'},['guitar','palmas','cajon','flute','castanets'],['rock backbeat','crash on section start','walking bass','four-on-floor'],'12-count compás','functional','phrygian/Andalusian','dry room, strong transient contrast',{kitMode:'hybrid',allowedHitTypes:['rim','ghost'],forbidWesternBackbeat:true,forbidSectionCrash:true,allowTomFills:false,ride:false});
G.flamenco.groove.swing = 0.5;
G.flamenco.groove.roleLean = { bass: 0, comp: -4, lead: 15, perc: 0 };
G.flamenco.groove.humanizeMs = 3;
G.flamenco.microtiming.byRole = { bass: [0], comp: [-4], lead: [15], percussion: [0] };
G.flamenco.microtiming.jitterMs = 3;
G.metal = simple('metal','4/4','machine-grid','precision',.5,{style:'riff',rhythmJob:'palm-muted riff alignment with kick/double-kick',pitchJob:'root/power-chord/tritone/Phrygian color',articulation:['palm-mute','staccato','tremolo']},['intro','riff','verse','chorus','breakdown','solo','coda'],{motor:'guitar riffs + kick',lead:'guitar solo'},['distortion-guitar','bass','drums','tremolo-strings','overdrive-guitar'],['swing','loose shuffle','pop fills'],'none','functional','minor/phrygian','tight multitrack, saturation');
G['r-and-b'] = simple('r-and-b','4/4','metric-hierarchical','behind-the-beat pocket',.5,{style:'sub',rhythmJob:'syncopated melodic bass with space',pitchJob:'extended chord tones and blues-inflected vocal lines',articulation:['legato','ghost','slide']},['intro','verse','pre-chorus','chorus','bridge','outro'],{motor:'bass + drums',harmony:'piano / electric keys',lead:'lead vocal'},['voice','piano','bass','drums','synth'],['stiff quantization','rock backbeat default'],'none','functional','major/minor','warm, close, lead-forward, layered backing vocals');
G.reggae = simple('reggae','4/4','metric-hierarchical','one-drop + skank',.5,{style:'reggae',rhythmJob:'melodic heavy bass; leaves space',pitchJob:'root/5th/6th with melodic contour',articulation:['short','muted','legato']},['intro','verse','chorus','dub break','verse','outro'],{motor:'bass + one-drop',comp:'offbeat skank',texture:'organ bubble'},['organ','electric-guitar','bass','drums','horn-section'],['rock backbeat','kick on 1 as default','crash section start'],'none','modal-vamp','major/minor/mixolydian','drop-outs, delay throws');
G.reggaeton = simple('reggaeton','4/4','machine-grid','straight dembow',.5,{style:'dembow',rhythmJob:'bass answers the dembow cell; avoid continuous blanket',pitchJob:'root/fifth/approach',articulation:['short','sub']},['intro','verso','coro','puente','coro','outro'],{motor:'dembow + sub-bass',lead:'synth'},['synth','sub-bass','drums','congas','polysynth'],['swing','rock backbeat'],'3+3+2 dembow','functional/modal-vamp','minor/major','dry punch, controlled sub');
G.rock = { ...simple('rock','4/4','metric-hierarchical','driving backbeat',.5,{style:'riff',rhythmJob:'riff-centered bass/guitar lock',pitchJob:'root/fifth/power-chord tones',articulation:['pick','palm-mute','sustain']},['intro','verse','chorus','bridge','solo','outro'],{motor:'guitar + bass + drums',lead:'guitar'},['overdrive-guitar','bass','drums','organ','electric-guitar'],['swing as default','genre-inappropriate Latin cells'],'none','functional','major/minor/mixolydian','live room, guitar-forward'),
  improvisationGrammar:{
    scaleMode:'minor-pentatonic',
    targetToneStrategy:'root-or-fifth-on-beat-1',
    phraseStages:['state','rest','repeat-transpose','rapid-run'],
    transposeDegrees:2,
    phraseBars:4,
    rapidRunOrnaments:['rapid-run','blues-slur','grace-note'],
  }
};
G.ska = simple('ska','4/4','metric-hierarchical','fast offbeat skank',.5,{style:'walking',rhythmJob:'walking/propulsive bass under offbeat guitar',pitchJob:'root/fifth/passing',articulation:['short','staccato']},['intro','verse','chorus','instrumental','verse','outro'],{motor:'offbeat guitar + walking bass',lead:'horns'},['trumpet','trombone','electric-guitar','bass','drums'],['reggae one-drop as identity'],'none','functional','major/minor','bright horns, dry room');
G.soul = simple('soul','4/4','metric-hierarchical','deep pocket',.5,{style:'riff',rhythmJob:'melodic bass with backbeat support',pitchJob:'root/guide-tone/chromatic fills',articulation:['legato','short','ghost']},['intro','verse','chorus','bridge','instrumental','outro'],{motor:'melodic bass + drums',answer:'backing vocal or horn response',lead:'lead vocal'},['voice','bass','drums','organ','brass'],['generic R&B pad wash','fixed contemporary R&B arrangement'],'none','functional','major/minor/blues','warm room, vocal-led phrasing, horn and organ answers');
G.zouk = simple('zouk','4/4','metric-hierarchical','rolling offbeat',.5,{style:'sub',rhythmJob:'soft rolling bass with offbeat movement',pitchJob:'root/5th/6th',articulation:['legato','short']},['intro','verse','refrain','break','refrain','outro'],{motor:'bass + percussion',harmony:'pads/keys',lead:'synth'},['guitar','sub-bass','synth','shaker','brass'],['busy kizomba batida as primary groove','reggaeton dembow as primary groove'],'none','modal-vamp','major/minor','wide pads, soft transient profile');
G['drum-and-bass'] = simple('drum-and-bass','4/4','machine-grid','fast breakbeat drive',.5,{style:'sub',rhythmJob:'sub/reese locks to break gaps; half-time bass phrasing',pitchJob:'root/fifth with modal tension',articulation:['sustain','glide']},['intro','drop','breakdown','drop','variation','outro'],{motor:'fast breakbeat + sub/reese',texture:'pads and sampled breaks'},['drums','sub-bass','sampler','synth','voice'],['four-on-floor as core','slow breakbeat feel'],'two-step break','modal-vamp','minor/dorian','sub-heavy, break-led, controlled sidechain');
G.industrial = simple('industrial','4/4','machine-grid','mechanical pulse',.5,{style:'riff',rhythmJob:'repeating machine riff and bass lock',pitchJob:'chromatic/power/tritone',articulation:['staccato','distorted','gated']},['intro','machine','verse','break','machine','outro'],{motor:'drums + bass + noise',texture:'distortion/noise'},['distortion-guitar','synth','drums','sub-bass','noise-sweep'],['swing','random humanization'],'none','fixed-cluster','chromatic','distortion/noise bursts');
G['punk-hardcore'] = simple('punk-hardcore','4/4','machine-grid','straight speed',.5,{style:'riff',rhythmJob:'direct eighth-note root/power-chord lock',pitchJob:'root/fifth/power chords',articulation:['down-pick','staccato']},['intro','verse','chorus','break','chorus','ending'],{motor:'guitar + bass + drums',lead:'guitar'},['distortion-guitar','bass','drums','overdrive-guitar','electric-guitar'],['swing','extended jazz harmony','long intro'],'none','functional','major/minor/power','dry loud room');
G['uk-bass'] = simple('uk-bass','4/4','machine-grid','broken UK club groove',.5,{style:'sub',rhythmJob:'style-owned 2-step/half-time bass cell',pitchJob:'sub root/5th with style-specific movement',articulation:['sustain','glide','gated']},['intro','groove','drop','breakdown','drop','outro'],{motor:'broken drums + sub',texture:'bass sound design and chopped vocals'},['drums','sub-bass','synth','sampler','voice'],['generic EDM four-on-floor'],'2-step / half-time style cell','modal-vamp','minor/dorian','deep sub, swung or half-time drums, style-specific movement');

// Explicit Cultural Overrides for Mastering & Spatialization
const CULTURAL_OVERRIDES: Record<string, Partial<WorldContract>> = {
  reggaeton: {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['synth', 'sub-bass', 'drums', 'congas', 'polysynth'],
      production: 'dry punch, hard clip, sub harmonics',
      mixCharacter: { dryness: 0.8, bassForward: 0.88, width: 0.6, brightness: 0.7, saturationType: 'hard-clip', compressionRatio: 5.5, subHarmonics: 0.85, transientSnap: 0.8 },
    },
  },
  'uk-bass': {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['sub-bass', 'synth', 'drums', 'cowbell', 'soprano-sax'],
      production: 'bass sound design, pumping sub-harmonics',
      mixCharacter: { dryness: 0.6, bassForward: 0.88, width: 0.75, brightness: 0.65, saturationType: 'hard-clip', compressionRatio: 5.0, subHarmonics: 0.9, transientSnap: 0.85 },
    },
  },
  'hip-hop': {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['drums', 'sub-bass', 'synth', 'electric-guitar', 'alto-sax'],
      production: 'sample space, controlled sub',
      mixCharacter: { dryness: 0.65, bassForward: 0.88, width: 0.6, brightness: 0.55, saturationType: 'hard-clip', compressionRatio: 4.5, subHarmonics: 0.8, transientSnap: 0.75 },
    },
  },
  folk: {
    performanceIdioms: { spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['banjo', 'fiddle', 'mandolin', 'upright-bass', 'tin-whistle'],
      production: 'natural room, limited processing, tape warmth',
      mixCharacter: { dryness: 0.55, bassForward: 0.4, width: 0.45, brightness: 0.5, saturationType: 'tape', compressionRatio: 1.5, subHarmonics: 0.0, transientSnap: 0.2 },
    },
  },
  jazz: {
    cycleLength: 4,
    interactionModel: 'counterpoint',
    performanceIdioms: { spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['tenor-sax', 'upright-bass', 'piano', 'jazz-guitar', 'brush-kit'],
      production: 'live room, moderate width, transparent tape compression',
      mixCharacter: { dryness: 0.45, bassForward: 0.4, width: 0.55, brightness: 0.5, saturationType: 'tape', compressionRatio: 1.4, subHarmonics: 0.0, transientSnap: 0.15 },
    },
  },
  swing: {
    timbreSpace: {
      palette: ['tenor-sax', 'trumpet', 'trombone', 'piano', 'upright-bass', 'drums'],
      production: 'big band width, brass sizzle, wooden floor acoustic',
      mixCharacter: { dryness: 0.5, bassForward: 0.42, width: 0.6, brightness: 0.6, saturationType: 'tape', compressionRatio: 1.6, subHarmonics: 0.0, transientSnap: 0.2 },
    },
  },
  blues: {
    cycleLength: 12,
    interactionModel: 'counterpoint',
    performanceIdioms: { bluesRockLeadMinorThirdBend: true, spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['electric-guitar', 'harmonica', 'piano', 'bass', 'drums'],
      production: 'tape compression, warm valve room',
      mixCharacter: { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.55, saturationType: 'tape', compressionRatio: 2.0, subHarmonics: 0.1, transientSnap: 0.3 },
    },
  },
  metal: {
    cycleLength: 1,
    interactionModel: 'unison',
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['distortion-guitar', 'bass', 'drums', 'tremolo-strings', 'overdrive-guitar'],
      production: 'tight multitrack, tube saturation, punchy snap',
      mixCharacter: { dryness: 0.8, bassForward: 0.72, width: 0.85, brightness: 0.7, saturationType: 'tube', compressionRatio: 5.0, subHarmonics: 0.35, transientSnap: 0.88 },
    },
  },
  rock: {
    cycleLength: 4,
    interactionModel: 'homophonic',
    transitionGrammar: { byDelta: { build: ['fill'], drop: ['drop-out'], hold: [] }, types: ['fill','drop-out'], onEnergyRise: 'fill', onEnergyFall: 'drop-out', authoredPriority: true },
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['overdrive-guitar', 'bass', 'drums', 'organ', 'electric-guitar'],
      production: 'live room, guitar-forward, tube overdrive',
      mixCharacter: { dryness: 0.65, bassForward: 0.65, width: 0.7, brightness: 0.65, saturationType: 'tube', compressionRatio: 4.0, subHarmonics: 0.2, transientSnap: 0.75 },
    },
  },
  industrial: {
    timbreSpace: {
      palette: ['distortion-guitar', 'synth', 'drums', 'sub-bass', 'noise-sweep'],
      production: 'distortion/noise bursts, hard clipping',
      mixCharacter: { dryness: 0.8, bassForward: 0.82, width: 0.8, brightness: 0.75, saturationType: 'hard-clip', compressionRatio: 6.0, subHarmonics: 0.6, transientSnap: 0.9 },
    },
  },
  'punk-hardcore': {
    timbreSpace: {
      palette: ['distortion-guitar', 'bass', 'drums', 'overdrive-guitar', 'electric-guitar'],
      production: 'dry loud room, tube overdrive',
      mixCharacter: { dryness: 0.85, bassForward: 0.68, width: 0.75, brightness: 0.75, saturationType: 'tube', compressionRatio: 4.8, subHarmonics: 0.2, transientSnap: 0.85 },
    },
  },
  house: {
    timbreSpace: {
      palette: ['acid-303', 'synth', 'drums', 'sub-bass', 'cowbell'],
      production: 'sidechain pumping, filter automation',
      mixCharacter: { dryness: 0.55, bassForward: 0.85, width: 0.75, brightness: 0.65, saturationType: 'hard-clip', compressionRatio: 4.5, subHarmonics: 0.75, transientSnap: 0.8 },
    },
  },
};

for (const [id, override] of Object.entries(CULTURAL_OVERRIDES)) {
  if (G[id]) {
    G[id] = {
      ...G[id],
      ...override,
      performanceIdioms: {
        ...(G[id]?.performanceIdioms ?? {}),
        ...(override.performanceIdioms ?? {}),
      },
      timbreSpace: {
        ...G[id].timbreSpace,
        ...(override.timbreSpace ?? {}),
        mixCharacter: {
          ...(G[id].timbreSpace.mixCharacter ?? { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.5 }),
          ...(override.timbreSpace?.mixCharacter ?? {}),
        },
      },
    };
  }
}

export const GENRE_CONTRACTS: Record<string, WorldContract> = G;

export const STYLE_PATCHES: Record<string, Partial<WorldContract>> = {
  'reggae-dancehall': { timbreSpace: { palette: ['synth', 'sub-bass', 'drums', 'congas'], production: 'dembow skank, hard clip', mixCharacter: { dryness: 0.7, bassForward: 0.88, width: 0.65, brightness: 0.65, saturationType: 'hard-clip', compressionRatio: 5.0, subHarmonics: 0.8, transientSnap: 0.8 } } },
};
