import type { GenreWorld, GenreStyleDefinition, GrooveMechanics, MusicalPattern, PatternEvent, Role, Scope } from '../../schema';
import type { MixOverride, MixContract } from '../../sound/schema/dynamicMix';

export interface CalibratedStyleInput {
  name: string;
  id: string;
  description: string;
  patterns: string[];
  techniques: string[];
  harmony: string[];
}
export interface GenrePackInput {
  id: string;
  name: string;
  family: string;
  color: string;
  description: string;
  defaultStyle: string;
  meter: string;
  tempo: [number, number];
  instruments: string[];
  roles: Record<string, string[]>;
  pitchSystem: string;
  scales: string[];
  chordQualities: string[];
  harmonicRhythm: string;
  cadences: string[];
  bassChordInteraction: string;
  patternFamilies: string[];
  techniques: string[];
  forbiddenPatterns: string[];
  styles: CalibratedStyleInput[];
}

const toRole = (key: string): Role | string => key as Role;
const slug = (value: string) => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const list = (...values: string[][]) => Array.from(new Set(values.flat().map(v => v.trim()).filter(Boolean)));
function progressions(input: GenrePackInput, style: CalibratedStyleInput): Record<string, string[]> {
  const seed = `${input.id} ${style.name}`.toLowerCase();
  if (/flamenco|soleá|solea|bulería|buleria|tientos|farruca/.test(seed)) return { intro: ['Am', 'G', 'F', 'E'], verse: ['Am', 'G', 'F', 'E'], cierre: ['F', 'E', 'Am'] };
  if (/tango/.test(seed)) return { intro: ['Am', 'E7', 'Am', 'E7'], A: ['Am', 'Dm', 'E7', 'Am'], B: ['C', 'G7', 'C', 'E7'], coda: ['Dm', 'E7', 'Am'] };
  if (/salsa|timba|latin/.test(seed)) return { intro: ['Dm7', 'G7', 'Cmaj7', 'A7'], montuno: ['Dm7', 'G7', 'Dm7', 'A7'], mambo: ['Dm7', 'G7', 'Cmaj7', 'A7'] };
  if (/zouk|kizomba|bachata/.test(seed)) return { verse: ['Am7', 'Fmaj7', 'Cadd9', 'G'], refrain: ['Am7', 'Fmaj7', 'Cadd9', 'G'] };
  if (/indian|qawwali|arabic|persian|taarab|gamelan|chinese|japanese|korean|gnawa|ethiopian/.test(seed)) return { alap: ['D drone', 'D drone'], theme: ['D modal center', 'D modal center'], cadence: ['D cadence'] };
  if (/ambient|cinematic|weird/.test(seed)) return { opening: ['D5(add9)', 'D5(add9)'], development: ['Bbmaj7(#11)', 'D5(add9)'], coda: ['D drone'] };
  if (/metal|rock|punk|industrial/.test(seed)) return { riff: ['E5', 'G5', 'A5', 'E5'], chorus: ['Em', 'C', 'G', 'D'] };
  if (/jazz|swing|blues/.test(seed)) return { head: ['C7', 'F7', 'C7', 'G7'], solo: ['Dm7', 'G7', 'Cmaj7', 'A7'] };
  return { verse: ['C', 'Am', 'F', 'G'], chorus: ['F', 'G', 'Em', 'Am'] };
}
function sections(input: GenrePackInput, styleRoles: Record<string, string[]>): NonNullable<GenreStyleDefinition['arrangementSections']> {
  const genres: Record<string, string[]> = {
    tango: ['intro', 'theme', 'variation', 'coda'], flamenco: ['salida', 'llamada', 'letra', 'falseta', 'remate', 'cierre'],
    salsa: ['intro', 'tema', 'montuno', 'mambo', 'montuno return', 'cierre'], timba: ['intro', 'verso', 'coro', 'marcha', 'gear', 'break', 'cierre'],
    ambient: ['drone opening', 'slow evolution', 'texture shift', 'dissolve'], cinematic: ['opening', 'development', 'climax', 'resolution'],
    'indian-classical': ['alap', 'jor', 'gat', 'jhala'], qawwali: ['intro', 'verse', 'refrain', 'climax'], gamelan: ['buka', 'main cycle', 'irama shift', 'suwuk'],
    arabic: ['instrumental opening', 'vocal section', 'taqsim', 'return'], persian: ['darâmad', 'gushé', 'avaz', 'forud'],
  };
  const labels = genres[input.id] ?? ['intro', 'theme', 'development', 'return', 'coda'];
  const roles = styleRoles;
  return labels.map((label, i) => {
    const isSparse = i === 0 || i === labels.length - 1 || /break|alap|drone|avaz/i.test(label);
    const leadRole = roles.lead ?? roles.voice ?? Object.values(roles)[0] ?? [];
    const chosen = Object.entries(roles).flatMap(([role, ids]) => {
      if (isSparse && !['lead','voice','bass'].includes(role)) return [];
      if (/break|suwuk|dissolve/i.test(label) && role === 'percussion') return [];
      return ids.slice(0, /mambo|climax|gear|jhala/i.test(label) ? ids.length : 2);
    });
    return { key: slug(label), label, kind: label, bars: /alap|drone/i.test(label) ? 8 : i === 0 ? 4 : 8,
      intensity: i === labels.length - 1 ? 'medium' : /climax|mambo|gear|jhala|remate/i.test(label) ? 'peak' : isSparse ? 'low' : 'high',
      instruments: Array.from(new Set(chosen)), leadInstrumentId: leadRole[0] };
  });
}

function rolesForStyle(input: GenrePackInput, style: CalibratedStyleInput): Record<string, string[]> {
  const roles = Object.fromEntries(Object.entries(input.roles).map(([role, instruments]) => [role, [...instruments]]));
  const key = `${input.id} ${style.name}`.toLowerCase();
  const narrow = (role: string, preferred: string[]) => {
    if (!roles[role]) return;
    const present = preferred.filter(instrument => Object.values(input.roles).flat().includes(instrument));
    if (present.length) roles[role] = present;
  };
  if (input.id === 'tango') {
    if (/canyengue|milonga/.test(key)) { narrow('harmony', ['piano','guitar']); narrow('lead', ['bandoneon','violin']); }
    if (/d'arienzo|d-arienzo/.test(key)) { narrow('harmony', ['piano']); narrow('bass', ['upright-bass']); }
    if (/di sarli/.test(key)) { narrow('lead', ['violin','bandoneon']); narrow('harmony', ['piano','cello']); }
    if (/pugliese/.test(key)) { narrow('lead', ['bandoneon','violin']); narrow('harmony', ['piano','cello']); narrow('bass', ['upright-bass']); }
    if (/salgán|salgan|nuevo tango|piazzolla|electro|bajofondo/.test(key)) {
      roles.lead = /electro|bajofondo/.test(key) ? ['bandoneon','synth'] : ['bandoneon','violin'];
      roles.harmony = /electro|bajofondo/.test(key) ? ['piano','synth'] : ['piano','cello'];
      if (/electro|bajofondo/.test(key)) { roles.bass = ['synth-bass']; roles.percussion = ['drum-kit','sampler']; }
    }
  }
  if (input.id === 'timba') {
    if (/songo/.test(key)) narrow('percussion', ['congas','drum-kit']);
    if (/charanga habanera|ng la banda|bamboleo|havana d/.test(key)) { narrow('lead', ['voice','trumpet','trombone']); narrow('percussion', ['congas','timbales','drum-kit','cowbell']); }
    if (/irakere/.test(key)) { narrow('lead', ['trumpet','tenor-sax','flute']); narrow('harmony', ['piano','guitar']); }
  }
  if (input.id === 'flamenco') {
    if (/tonás|tonas|martinetes|taranta|granaína|granaina|malagueña|malaguena/.test(key)) { delete roles.percussion; narrow('harmony', ['guitar']); }
    if (/rumba|nuevo|rock|urban|experimental/.test(key)) { narrow('percussion', ['palmas','cajon','drum-kit']); }
  }
  if (input.id === 'salsa' && /charanga|pachanga/.test(key)) { roles.lead = ['flute','violin','voice']; roles.harmony = ['piano','violin']; }
  if (input.id === 'brazilian' && /bossa/.test(key)) { roles.harmony = ['guitar','piano']; roles.percussion = ['pandeiro']; }
  if (input.id === 'jazz' && /big band/.test(key)) { roles.lead = ['trumpet','alto-sax','trombone']; roles.harmony = ['piano']; }
  if (input.id === 'indian-classical' && /dhrupad/.test(key)) { roles.lead = ['voice','rudra-veena']; roles.percussion = ['pakhawaj']; }
  if (input.id === 'chinese' && /guqin/.test(key)) { roles.lead = ['guqin']; roles.harmony = ['guqin']; roles.percussion = []; }
  if (input.id === 'japanese' && /shakuhachi/.test(key)) { roles.lead = ['shakuhachi']; roles.harmony = ['koto']; roles.percussion = []; }
  if (input.id === 'korean' && /pansori/.test(key)) { roles.lead = ['voice']; roles.harmony = []; roles.percussion = ['buk']; }
  if (input.id === 'ambient' && /drone|generative|microsound|glitch/.test(key)) { roles.percussion = []; roles.bass = ['synth-bass']; }
  if (/urban|electronic|club|electro|synth|experimental|deconstructed/i.test(style.name)) {
    if (roles.percussion && input.instruments.includes('sampler')) roles.percussion = [...new Set([...roles.percussion, 'sampler'])];
  }
  return Object.fromEntries(Object.entries(roles).filter(([, instruments]) => instruments.length));
}

const genericAuthoring = /(?:style-defined rhythmic cells|phrase-level variation|section-specific fills|instrument-specific articulation|style-appropriate tonal\/modal vocabulary|style-specific cycle and phrase variation|style-specific articulation and phrase gesture|style-specific harmony and cadence)/i;
function authoredOrDerived(
  authored: string[], baseline: string[], genreId: string, styleName: string, kind: 'pattern'|'technique'|'harmony',
): string[] {
  const explicit = authored.filter(value => !genericAuthoring.test(value.trim()));
  if (explicit.length) return explicit;
  const meaningful = baseline.filter(value => !genericAuthoring.test(value.trim()));
  const key = `${genreId}/${styleName}/${kind}`;
  const hash = Array.from(key).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  if (!meaningful.length) {
    if (kind === 'pattern') return [
      `${styleName} pulse cell`, `${styleName} role interlock`, `${styleName} phrase-end variation`, `${styleName} section transition`,
    ];
    if (kind === 'technique') return [`${styleName} articulation`, `${styleName} phrase shaping`, `${styleName} ensemble response`];
    return [`${styleName} pitch vocabulary`, `${styleName} harmonic motion`, `${styleName} phrase cadence`];
  }
  // When source notes provide only a genre baseline, rotate a bounded subset
  // per style and bind it to that style's name. No other genre is consulted.
  const count = Math.min(4, meaningful.length);
  const picked = Array.from({ length: count }, (_, i) => meaningful[(hash + i * 3) % meaningful.length]);
  return Array.from(new Set(picked)).map(value => `${styleName}: ${value}`);
}

function scopesForTechnique(value: string): Array<'note'|'motif'|'phrase'|'section'|'song'> {
  const term = value.toLowerCase();
  if (/section|gear|drop|crescendo|orchestrat|transition|density|climax/.test(term)) return ['section'];
  if (/phrase|cadence|fill|ornament|vibrato|rubato|pickup|response|call/.test(term)) return ['phrase'];
  if (/riff|ostinato|tremolo|repeated|roll|interlock|pattern/.test(term)) return ['motif'];
  return ['note'];
}

function techniquesByRole(role: string, techniques: string[]): string[] {
  const signal: Record<string, RegExp> = {
    bass: /bass|low|root|tumbao|walking|sub|anticipat|approach|pizz|slap|pluck|riff/i,
    percussion: /drum|percuss|bell|clap|shaker|scrape|roll|stroke|ghost|hit|accent/i,
    lead: /lead|melody|ornament|bend|slide|portamento|vibrato|trill|gliss|voice|phrase/i,
    voice: /voice|vocal|breath|melisma|syllable|phrase/i,
    harmony: /chord|harmony|comp|strum|voic|piano|staccato|marcato/i,
    strings: /string|bow|pizz|arco|vibrato|portamento|tremolo/i,
    winds: /wind|breath|tongue|reed|flute|sax|trumpet/i,
    bandoneon: /bellows|bandoneon|button|staccato|legato/i,
  };
  const matched = techniques.filter(value => signal[role]?.test(value));
  return matched.length ? matched : techniques;
}

function mixCalibration(input: GenrePackInput, style: CalibratedStyleInput, styleRoles: Record<string, string[]>) {
  const lowEnd = /bass|zouk|reggaeton|hip-hop|metal|industrial|house|electronic|dembow/i.test(`${input.id} ${style.name}`);
  const sparse = /ambient|drone|minimal|slow|solea|taranta|avaz/i.test(`${input.id} ${style.name}`);
  const live = /flamenco|salsa|timba|jazz|gospel|classical|gamelan|taarab|folk/i.test(input.id);
  const broad = /orchestra|big band|choir|symphonic|cinematic|epic/i.test(style.name);
  const dryness = sparse ? .38 : live ? .68 : .56;
  const width = broad || /electronic|ambient|pop|cinematic/.test(input.id) ? .72 : .48;
  const bassForward = lowEnd ? .68 : input.id === 'tango' || input.id === 'flamenco' ? .4 : .52;
  const rolePan = Object.fromEntries(Object.keys(styleRoles).map(role => [role,
    role === 'harmony' ? -.12 : role === 'percussion' ? .12 : 0]));
  const roleWidth = Object.fromEntries(Object.keys(styleRoles).map(role => [role,
    role === 'harmony' || role === 'texture' ? .62 : role === 'percussion' ? .34 : .16]));
  const roleMap = Object.fromEntries(Object.entries(styleRoles).map(([role]) => [role, {
    mixFunctions: role === 'lead' || role === 'voice' ? ['foreground'] : role === 'bass' ? ['low-anchor'] : role === 'percussion' ? ['pulse-anchor', 'rhythmic-support'] : ['harmonic-support'],
    priority: role === 'lead' || role === 'voice' ? .9 : role === 'bass' ? .82 : role === 'percussion' ? .72 : .55,
    gainDb: role === 'lead' || role === 'voice' ? .8 : role === 'bass' ? .4 : -1.2,
    foregroundGainDb: role === 'lead' || role === 'voice' ? 1.4 : role === 'bass' ? .5 : 0,
    supportGainDb: role === 'lead' || role === 'voice' ? -.2 : -1,
    presenceDb: role === 'lead' || role === 'voice' ? .8 : role === 'percussion' ? .25 : -.15,
    bodyDb: role === 'bass' ? .55 : role === 'harmony' ? .2 : 0,
    width: roleWidth[role], transientEmphasis: role === 'percussion' ? .6 : role === 'bass' ? .3 : .15,
    maskingPriority: role === 'lead' || role === 'voice' ? .95 : role === 'bass' ? .86 : role === 'percussion' ? .72 : .52,
    ambienceSend: role === 'lead' || role === 'voice' ? .1 : role === 'texture' ? .42 : .16,
    protectLowEnd: role === 'bass', protectRhythmicDefinition: role === 'percussion' || role === 'bass',
    mayYieldSpectrally: !['lead', 'voice', 'bass'].includes(role), mayYieldInGain: !['lead', 'voice', 'bass'].includes(role),
    depth: role === 'lead' || role === 'voice' ? .2 : role === 'bass' ? .3 : .48,
  }]));
  return {
    enabled: true,
    character: { dryness, bassForward, width, brightness: /flamenco|salsa|pop|electronic|swing/i.test(input.id) ? .62 : .5,
      compressionRatio: lowEnd ? 2.2 : live ? 1.5 : 1.8, transientSnap: live ? .72 : .48,
      subHarmonics: lowEnd ? .3 : 0, sidechainDucking: /house|electronic|bass|reggaeton|amapiano/i.test(input.id) ? .35 : 0,
      delaySend: /dub|ambient|zouk|taarab/i.test(`${input.id} ${style.name}`) ? .24 : .06,
      reverbType: live ? 'room' : 'spring', saturationType: live ? 'tape' : 'tube' },
    stage: { width, depthRange: sparse ? .62 : .38,
      centerAnchorRoles: ['bass', 'percussion'].filter(role => role in styleRoles), rolePan, roleWidth, preserveNaturalStage: true },
    dynamics: { foregroundContrastDb: broad ? 3.4 : 2.8, maxTrackBoostDb: 3.5, maxTrackCutDb: -5.5,
      ensembleBreathing: live ? .68 : .48, crescendoExpansion: /timba|pugliese|cinematic|gospel/i.test(`${input.id} ${style.name}`) ? .82 : .45,
      silenceContrast: .72, peakSectionHeadroomDb: 3, busCompressionAmount: live ? .16 : .22,
      busCompressionRatio: lowEnd ? 2 : 1.7, densityCompensation: .34, sharedForeground: true },
    masking: { enabled: true, minOverlap: .2, minPriorityDifference: .14, maxPresenceCutDb: live ? 1.5 : 2.2,
      maxBodyCutDb: .9, maxGainCutDb: .8, amount: live ? .36 : .52, preserveCounterpoint: true },
    ambience: { roomSize: dryness, foregroundDepthDifference: sparse ? .5 : .34, reverbSend: live ? .14 : .09,
      delaySend: /dub|ambient|zouk|taarab/i.test(`${input.id} ${style.name}`) ? .24 : .04, bloom: sparse ? .56 : .3, preDelayMs: live ? 18 : 12 },
    roles: roleMap,
    sections: { intro: { gainDb: -1, depth: .46, width: width * .82 }, breakdown: { gainDb: -1.5, ambience: 1.12 },
      chorus: { gainDb: .7, width: Math.min(1, width * 1.12), foregroundContrast: 1.1 }, climax: { gainDb: .8, width: Math.min(1, width * 1.16), foregroundContrast: 1.2 } },
    transitions: { attackMs: live ? 80 : 120, releaseMs: live ? 360 : 480, sectionTransitionMs: 640,
      foregroundHandoffMs: 320, spectralRampMs: 240, lookaheadMs: 100 },
    buses: { glueAmount: live ? .12 : .18, lowAnchorCompression: lowEnd ? .18 : .05,
      rhythmCompression: .12, melodicCompression: .08, ensembleCompression: .14,
      parallelCompression: 0, sharedRoom: true,
      roleBus: Object.fromEntries(Object.keys(styleRoles).map(role => [role,
        role === 'bass' ? 'lowAnchor' : role === 'percussion' ? 'percussion' : role === 'lead' || role === 'voice' ? 'melodic' : 'harmony'])) },
  } as MixOverride<MixContract>;
}

function grooveCalibration(input: GenrePackInput, style: CalibratedStyleInput): GrooveMechanics {
  const terms = `${input.id} ${input.family} ${style.name} ${style.description} ${style.patterns.join(' ')} ${style.techniques.join(' ')}`.toLowerCase();
  const swingPercentage = /hard.?swing|heavy shuffle|triplet shuffle/.test(terms) ? 62
    : /swing|shuffle|blues|jazz|soul|funk|swung|ternary|12\/8/.test(terms) ? 56 : 50;
  const anticipationOffsetSteps = /anticipat|tumbao|dembow|one.?drop|pickup bass|bass pickup|yumba/.test(terms)
    || /^(salsa|timba|zouk|bachata|reggaeton-dembow|tango)$/.test(input.id) ? 1 : 0;
  const microtimingFeel: NonNullable<GrooveMechanics['microtimingFeel']> = /rubato|free time|alap|avaz|taqsim|tak.?sim/.test(terms) ? 'rubato'
    : /laid.?back|behind the beat|lazy pocket|drunk feel/.test(terms) ? 'laid-back'
      : /pushed|ahead of the beat|driving pocket|urgent/.test(terms) ? 'pushed'
        : swingPercentage > 50 ? 'swung'
          : /quantiz|machine.?tight|four.?on.?the.?floor/.test(terms) ? 'quantized' : 'straight';
  const humanizeJitterMs = /ambient|drone|rubato|free time|alap|avaz|taqsim/.test(terms) ? 9
    : /quantiz|machine.?tight|four.?on.?the.?floor|electronic|techno|drum.?and.?bass/.test(terms) ? 3
      : /flamenco|jazz|folk|acoustic|live|gamelan|taarab|classical/.test(terms) ? 7 : 5;
  return { swingPercentage, anticipationOffsetSteps, microtimingFeel, humanizeJitterMs };
}

function styleDefinition(input: GenrePackInput, item: CalibratedStyleInput): GenreStyleDefinition {
  const styleId = `${input.id}-${item.id}`;
  const styleTerms = `${item.name} ${item.description} ${item.patterns.join(' ')}`;
  const meter = /vals|waltz|3\/4/i.test(styleTerms) ? '3/4'
    : /milonga|samba|choro|forro|forró|2\/4/i.test(styleTerms) ? '2/4'
      : /solea|soleá|buleria|bulería|seguiriya|12\/8|12-count|12-beat|compas/i.test(styleTerms) ? '12/8' : input.meter;
  const tempo = /ambient|drone|slow|ballad|zouk love|tarab/i.test(styleTerms)
    ? [Math.max(48, input.tempo[0] - 24), Math.max(72, input.tempo[1] - 18)] as [number, number]
    : /jhala|speed|fast|punk|hardcore|bebop|drum.?and.?bass/i.test(styleTerms)
      ? [input.tempo[0] + 12, input.tempo[1] + 28] as [number, number] : input.tempo;
  const scaleMode = /major(?:-key)? emphasis|major tonality|major mode|bright major/i.test(styleTerms) ? 'major'
    : /minor(?:-key)? emphasis|minor tonality|minor mode/i.test(styleTerms) ? 'minor'
      : input.scales[0] ?? input.pitchSystem;
  const stylePatterns = authoredOrDerived(item.patterns, input.patternFamilies, input.id, item.name, 'pattern').slice(0, 10);
  const styleTechniques = authoredOrDerived(item.techniques, input.techniques, input.id, item.name, 'technique').slice(0, 20);
  const styleHarmony = authoredOrDerived(item.harmony, [...input.chordQualities, ...input.cadences], input.id, item.name, 'harmony').slice(0, 20);
  const styleRoles = rolesForStyle(input, item);
  const sectionsForStyle = sections(input, styleRoles);
  const description = genericAuthoring.test(item.description)
    ? `${item.name}: ${stylePatterns.slice(0, 2).join('; ')}; ${styleTechniques.slice(0, 2).join('; ')}; ${styleHarmony.slice(0, 2).join('; ')}.`
    : item.description;
  const roles = Object.fromEntries(Object.entries(styleRoles).map(([role, instruments]) => [role, {
    preferredInstruments: instruments, required: role === 'lead' || role === 'bass',
    mixFunction: role === 'lead' || role === 'voice' ? 'foreground' : role === 'bass' ? 'low-anchor' : role === 'percussion' ? 'pulse-anchor' : 'harmonic-support',
  }]));
  return {
    id: styleId, worldId: input.id, name: item.name, origin: input.family, description,
    characteristicInstruments: Array.from(new Set(Object.values(styleRoles).flat())) as GenreStyleDefinition['characteristicInstruments'],
    preferredMeters: [meter === 'free / cycle' || meter === 'free / 4/4' ? '4/4' : meter], tempoRange: tempo, keySubstyles: [item.name], coreConcepts: list(stylePatterns, styleTechniques).slice(0, 10),
    rhythmicGrammar: stylePatterns.slice(0, 6), scaleMode,
    tuningSystem: input.pitchSystem, signatureCell: stylePatterns[0] ?? input.patternFamilies[0],
    grooveMechanics: grooveCalibration(input, item),
    prominentChords: styleHarmony,
    sectionProgressions: progressions(input, item),
    arrangementSections: sectionsForStyle,
    calibration: {
      roles, techniques: Object.fromEntries(Object.keys(styleRoles).map(role => [role, techniquesByRole(role, styleTechniques)])),
      techniqueScopes: Object.fromEntries(styleTechniques.map(technique => [technique, scopesForTechnique(technique)])),
      patterns: { families: stylePatterns, interaction: list(stylePatterns.filter(x => /answer|call|interlock|response|counter|gear|clave|compas/i.test(x))),
        phraseBehaviors: ['pickup', 'phrase-end cadence', 'section variation'], forbidden: input.forbiddenPatterns },
      harmony: { pitchSystem: input.pitchSystem, scales: input.scales, chordQualities: styleHarmony,
        progressionExamples: Object.values(progressions(input, item)),
        harmonicRhythm: input.harmonicRhythm, cadences: list(item.harmony, input.cadences),
        bassChordInteraction: input.bassChordInteraction, requiresChords: !/free|drone|atonal|heterophonic/i.test(input.pitchSystem),
        preferredVoicingTones: /jazz|bossa|soul|cinematic|orchestra/i.test(item.name) ? [3, 8] : [2, 5],
        voicingTonesByRole: { guitar: [2, 5], piano: [2, 8], strings: [2, 12], horns: [3, 8], pads: [3, 12] } },
      mix: mixCalibration(input, item, styleRoles),
    },
  };
}

function patternFromFamily(input: GenrePackInput, style: GenreStyleDefinition, family: string, index: number): MusicalPattern {
  const id = `${style.id}-pattern-${slug(family) || index}`;
  const meter = style.preferredMeters[0] ?? input.meter;
  const [meterNumerator, meterDenominator] = meter.split('/').map(Number);
  const beats = meterNumerator && meterDenominator ? meterNumerator * 4 / meterDenominator : 4;
  const stepsPerBeat = meterDenominator === 8 ? 2 : 4;
  const cycleLength = /phrase|form|section|gear|compas|coro/i.test(family) ? 2 : 1;
  const span = beats * stepsPerBeat * cycleLength;
  const tuplettedFamily = /triplet|tuplet|shuffle|jig|compound|waltz|ternary|12\/8|12-count/i.test(family);
  const seed = Array.from(`${input.id}/${style.id}/${family}`).reduce((n, c) => n + c.charCodeAt(0), index * 7) % 5;
  let positions = Array.from({ length: Math.min(6, beats * cycleLength) }, (_, i) => (i * stepsPerBeat + seed) % span).sort((a,b) => a-b);
  if (/clave|compas|marcato|one.?drop|dembow|tumbao|yumba|songo|log.?drum/i.test(family)) {
    positions = Array.from(new Set([0, Math.floor(span * .1875), Math.floor(span * .375), Math.floor(span * .5), Math.floor(span * .75), Math.floor(span * .875)])).sort((a,b) => a-b);
  }
  const events: PatternEvent[] = positions.map((position, i) => ({
    position: position / stepsPerBeat,
    duration: /drone|sustain|pad|legato/i.test(family) ? .75 : .2,
    kind: /ghost/i.test(family) ? 'ghost' : /pickup|anticip/i.test(family) && i === positions.length - 1 ? 'pickup' : 'attack',
    accent: i === 0 || /marcato|clave|compas|bell|gear/i.test(family) ? .9 : .55,
    velocity: i === 0 ? .9 : .7,
    articulation: /staccato|marcato|rasgueado|skank|stab/i.test(family) ? 'staccato' : undefined,
    microtiming: /laid.?back|behind/i.test(input.description) ? .012 : /pushed|ahead/i.test(input.description) ? -.01 : 0,
    probability: /fill|ornament|response|transition/i.test(family) ? .68 : 1,
    condition: /fill|transition|cadence/i.test(family) ? { phrasePosition: ['end'] } : undefined,
    ...(tuplettedFamily && i % 3 === 0 ? { tuplet: { actual: 3, normal: 2 } } : {}),
  }));
  events.push({ position: Math.max(0, span / stepsPerBeat / 2), kind: 'rest', condition: { phrasePosition: ['end'] } });
  events.push({ position: Math.max(0, span / stepsPerBeat - .25), duration: .5, kind: 'tie', tieToNext: true,
    condition: { phrasePosition: ['end'] } });
  if (/interlock|polyrhythm|clave|compas/i.test(family)) {
    events.push({ position: .5, kind: 'ghost', accent: .35, velocity: .42, probability: .55,
      polyrhythm: { numerator: 3, denominator: 2, phase: seed % 3 } });
  }
  const lowerFamily = family.toLowerCase();
  const availableRoles = style.calibration?.roles ?? {};
  const patternRoles = /bass|tumbao|yumba|log.?drum|walking|low.?anchor/.test(lowerFamily) ? ['bass']
    : /palmas|clap|bell|clave|cáscara|cascara|drum|shaker|percussion|tambora|cajon/.test(lowerFamily) ? ['percussion']
      : /chord|montuno|guajeo|comping|strum|skank|harmony|voicing/.test(lowerFamily) ? ['harmony']
        : /response|answer|call|melody|phrase|falseta|lead|vocal/.test(lowerFamily) ? ['lead'] : Object.keys(availableRoles);
  const instruments = Array.from(new Set(patternRoles.flatMap(role => availableRoles[role]?.preferredInstruments ?? [])));
  return {
    id, worldId: input.id, styleIds: [style.id], name: `${style.name} ${family}`, shortName: family,
    family, category: /fill|remate|cierre/i.test(family) ? 'fill' : /bass|tumbao|yumba|log.?drum/i.test(family) ? 'bass' : 'groove',
    description: `${style.name}: ${family}. ${style.calibration?.patterns.families.join('; ')}.`,
    tags: [input.id, style.id, slug(family)], scopes: ['measure', ...(cycleLength > 1 ? ['phrase'] : [])] as Scope[],
    roles: patternRoles as MusicalPattern['roles'], instruments: instruments as MusicalPattern['instruments'],
    meter, cycleLength, subdivisions: stepsPerBeat * beats, onsetGrid: events.filter(e => e.kind !== 'rest' && e.kind !== 'tie').map(e => Math.round(e.position * stepsPerBeat)),
    durationGrid: events.map(e => Math.max(1, Math.round((e.duration ?? .25) * stepsPerBeat))),
    accentProfile: events.map(e => e.accent ?? .6), velocityProfile: events.map(e => e.velocity ?? .7), events,
    syncopationRating: /syncop|clave|offbeat|dembow|síncopa|sincopa/i.test(family) ? .72 : .35,
    supportedEnergy: [1,2,3,4,5], phrasePosition: ['start','middle','end','any'], variants: [],
    provenance: 'Genre/style calibration map; pattern family is owned by this style and genre.',
    authenticityTags: [input.id, style.id, slug(family)], tuningSystem: input.pitchSystem, enabled: true, weight: 1,
  };
}

export function createGenreWorld(input: GenrePackInput): GenreWorld {
  const styles = input.styles.map(item => styleDefinition(input, item));
  const patternItems = styles.flatMap(style => style.calibration!.patterns.families.slice(0, 4).map((family, index) => patternFromFamily(input, style, family, index)));
  const homeStyleId = styles.find(style => style.name === input.defaultStyle)?.id ?? styles[0]?.id;
  return {
    id: input.id, name: input.name, catalogGeneration: 'genre-style-map-v1', homeStyleId,
    family: input.family, color: input.color, description: input.description, level: 'world', kind: 'world', strictness: 'strict',
    styleDefinitions: styles, substyles: styles.map(style => style.name), artists: [],
    concepts: list(input.patternFamilies, input.techniques, input.cadences),
    roles: Object.fromEntries(Object.entries(input.roles).map(([role, instruments]) => [toRole(role), instruments])),
    patterns: patternItems, tuningSystem: input.pitchSystem, signatureCell: styles[0]?.signatureCell,
    prominentChords: input.chordQualities,
    rhythm: { syncopation: .5, swing: .5, pocket: 'ahead', pocketDepth: 0 },
  };
}
