import type { GenreWorld, GenreStyleDefinition, GrooveMechanics, MusicalPattern, PatternEvent, Role } from '../../schema';
import type { MixOverride, MixContract } from '../../sound/schema/dynamicMix';
import { INSTRUMENTS_BY_ID } from '../../instruments';

/** Authored beat positions, in quarter-note units; no style-name hashing. */
export interface AuthoredCell {
  name: string;
  role: string;
  instruments?: string[];
  onsets: number[];
  durations?: number[];
  accents?: number[];
  hits?: PatternEvent['hitType'][];
  cycleLength?: number;
  articulation?: string;
  articulations?: string[];
  pitches?: Array<PatternEvent['pitch']>;
  phraseEnd?: boolean;
}
export interface CalibratedStyleInput {
  instrumentDialects: Record<string, Partial<import('../../styles/contracts').InstrumentDialect>>;
  meter: string;
  tempo: [number, number];
  scale: string;
  roles: Record<string, string[]>;
  progressions: Record<string, string[]>;
  form: Array<{ label: string; bars: number; soloInstrumentId?: string; soloMode?: 'accompanied' | 'unaccompanied' | 'trading' }>;
  cells: AuthoredCell[];
  groove: GrooveMechanics;
  instrumentTechniques: Record<string, string[]>;
  requiresChords: boolean;
  harmonyModel: string;
  harmonicRhythm: string;
  bassMotion: string;
  mix: MixOverride<MixContract>;
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
function progressions(_input: GenrePackInput, style: CalibratedStyleInput): Record<string, string[]> { return style.progressions; }
function sections(_input: GenrePackInput, styleRoles: Record<string, string[]>, style: CalibratedStyleInput): NonNullable<GenreStyleDefinition['arrangementSections']> {
  const labels = style.form.map(step => step.label);
  const roles = styleRoles;
  return labels.map((label, i) => {
    const isSparse = i === 0 || i === labels.length - 1 || /break|alap|drone|avaz/i.test(label);
    const leadRole = roles.lead ?? roles.voice ?? Object.values(roles)[0] ?? [];
    const chosen = Object.entries(roles).flatMap(([role, ids]) => {
      if (isSparse && !['lead','voice','bass'].includes(role)) return [];
      if (/break|suwuk|dissolve/i.test(label) && role === 'percussion') return [];
      return ids;
    });
    return { key: `${slug(label)}-${i}`, label, kind: label, bars: style.form?.[i]?.bars ?? (/alap|drone/i.test(label) ? 8 : i === 0 ? 4 : 8),
      ...(style.form?.[i]?.soloInstrumentId ? { soloInstrumentId: style.form[i].soloInstrumentId, soloMode: style.form[i].soloMode } : {}),
      intensity: i === labels.length - 1 ? 'medium' : /climax|mambo|gear|jhala|remate/i.test(label) ? 'peak' : isSparse ? 'low' : 'high',
      instruments: Array.from(new Set(chosen)), leadInstrumentId: leadRole[0] };
  });
}

function rolesForStyle(_input: GenrePackInput, style: CalibratedStyleInput) { return style.roles; }

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
  return matched;
}

function inferredTechniqueRoles(technique: string, roles: Record<string, string[]>): string[] {
  const text = technique.toLowerCase();
  const rules: Array<[RegExp, string[]]> = [
    [/voice|vocal|singer|cante|preg[oó]n|soneo|melisma|breath|syllab|sargam|taan|murki|meend|gamak|briga|kampita/, ['voice','lead']],
    [/bandone[oó]n|bellows|accordion|button.?box/, ['bandoneon','lead','harmony']],
    [/bass|tumbao|walking|sub.?bass|slap bass|finger bass|pizzicato bass|alternating thumb.?bass/, ['bass']],
    [/palmas|clave|cascara|cáscara|conga|bombo|bongo|bong[oó]|timbale|tambora|drum|caj[oó]n|percussion|cowbell|shaker|scrape|clap|ghost.?note|brush|rimshot|heel.?stomp|open.?tone|mallet|alternating.?mallet/, ['percussion']],
    [/bow|violin|cello|viola|string|fiddle|arco|pizzicato|sul.?pont|sul.?tasto|chicharra|tremolo bow|double.?stop/, ['strings','bowed','lead']],
    [/piano|keyboard|keys|montuno|guajeo|comping|voicing|chord|marcato|strum|rasgueado|rasgueo|arpeggio|ostinato|short.?chord/, ['harmony','comping']],
    [/trumpet|trombone|horn|sax|flute|wind|reed|tongue|breath|fall|doit|scoop/, ['winds','brass','lead']],
    [/guitar|tres|requinto|banjo|mandolin|charango|oud|qanun|harp|plucked|pick|fingerstyle|alzap[uú]a|picado|golpe|pulgar/, ['lead','harmony','strings']],
    [/call.?response|call.?and.?response|answer|reply|soneo|preg[oó]n|jaleo/, ['lead','voice']],
    [/ornament|trill|melisma|meend|murki|gamak|taan|grace.?note|turn|mordent|krintan|kampita|andolan/, ['lead','voice','winds','strings']],
    [/pitch.?bend|bend|glide|gliss|slide|portamento|meend|scoop|vibrato|continuous.?pitch/, ['lead','voice','strings','winds','bass']],
    [/roll|shake|flourish|fill|lick|run|burst|tremolo/, ['percussion','lead','winds','strings']],
    [/downstroke|upstroke|strum|rasgue|palm.?mute|chop|skank|offbeat|short.?chord.?stab|open.?tone/, ['harmony','comping','strings']],
    [/harmonic|overtone|microtonal|inflection|blue.?note|growl|flutter.?tongue|throat.?sing/, ['lead','voice','winds','strings']],
    [/pitch.?correction|filter|sidechain|distort|saturat|sample|chop|reverse|delay|reverb|texture|analog production|wow.?and.?flutter|modular synth|synth sequence|synth nostalgia|mood/, ['texture','lead','voice','harmony']],
    [/lyric|melod|singing|weeping|breathy|phrasing|improvis|solo|counterline|countermelody|songwriting|hook|chant|storytelling|quej[ií]o|jondo|letra/, ['lead','voice']],
    [/swell|sustain|crescendo|rubato|fermata|cierre|cadence|remate|unison|attack|staccato|legato|accent|articulation|elastic timing|dynamic contrast|sectional ending|dynamic break|pause|lyricism|hook|pluck|slap|double.?stop/, ['lead','voice','harmony','strings','winds','bandoneon','bass','percussion']],
    [/drop|sidechain|filter|distort|sample|texture|chop|mute|unmute|gear|crescendo|rubato|fermata|accented unison|ensemble/, ['lead','harmony','bass','percussion','strings','winds','bandoneon','voice']],
  ];
  const rule = rules.find(([pattern]) => pattern.test(text));
  if (!rule) return [];
  const mapped = rule[1].filter(role => role in roles);
  return mapped.length ? mapped : Object.keys(roles).filter(role => {
    const instruments = roles[role].join(' ').toLowerCase();
    return rule[1].some(candidate => candidate === 'strings' && /violin|viola|cello|string|guitar|oud|harp/.test(instruments)
      || candidate === 'winds' && /sax|trumpet|flute|clarinet|oboe|reed|horn/.test(instruments)
      || candidate === 'brass' && /trumpet|trombone|horn|tuba/.test(instruments)
      || candidate === 'percussion' && /drum|perc|bombo|cajon|cajón|conga|bongo|timbal|palmas|clap|foot-stomp|zapateado/.test(instruments)
      || candidate === 'bass' && /bass|sub|tuba|guitarron/.test(instruments)
      || candidate === 'voice' && /voice|choir|coro/.test(instruments)
      || candidate === 'texture' && /synth|sampler|turntable|fx|electronic/.test(instruments)
      || candidate === 'comping' && /piano|keyboard|guitar|tres|accordion|bandoneon|harp|synth/.test(instruments));
  });
}

function patternCategory(name: string): import('../../schema').PatternCategory {
  if (/breakdown|dropout|silence|stop|break|suspended/i.test(name)) return 'break';
  if (/transition|turnaround|pickup|lead-in|approach/i.test(name)) return 'transition';
  if (/cadence|cierre|coda|remate|ending|closing/i.test(name)) return 'cadence';
  if (/fill|roll|lick|run|flourish/i.test(name)) return 'fill';
  if (/percussion|palmas|clave|bell|cascara|cáscara|conga|timbale|tambora|drum|bombo|shaker|clap/i.test(name)) return 'percussion';
  if (/bass|tumbao|walking|pedal|sub.?bass|low anchor/i.test(name)) return 'bass';
  if (/comping|comp|strum|rasgueado|guajeo|chord|marcato|yumba|accompaniment|ostinato/i.test(name)) return 'comping';
  if (/melody|melodic|motif|theme|lead|response|answer|counterline|falseta|solo|riff|hook|phrase/i.test(name)) return 'melodic';
  return 'groove';
}

/** Some legacy catalogs placed rhythm/form descriptions in the technique list.
 * Move those entries into the style's flat pattern vocabulary at resolution. */
function isPatternVocabulary(value: string): boolean {
  return /\b(?:\d+[- ]?(?:beat|count)|\d+\s*\/\s*\d+|clave|comp[aá]s|rhythm|groove|pulse|syncopat|meter|subdivision|breaks?|drop(?:out)?|coro|montuno|guajeo|bassline|walking bass|shuffle|swing feel|timing|ostinato|riff|counterline|countermelody|phrase shape|call.?response|answer|cycle|theka|tala|section|escobilla|falseta|llamada|cierre|remate|silencio|presi[oó]n|gear|bomba|cascara|c[aá]scara|martillo|habanera|arrastre|yumba|3\s*[+-]\s*3\s*[+-]\s*2|backbeat|beat [1-4]|four.?on.?the.?floor|polyrhyth|hemiola|tumbao|lead|bounce|tirititr[aá]n|contratiempo|subida|canti[ñn]as|the one|mallet pattern|rasgueado pattern)\b/i.test(value);
}

function isHarmonyVocabulary(value: string): boolean {
  return /\b(?:chord quality|chord tone|chord extension|upper.?structure|voicing|harmon(?:y|ic)|toniciz|cadence|substitut|tritone|secondary dominant|altered dominant|chromatic approach|chromatic passing chord|modal mixture|borrowed|augmented.?sixth|quartal|pedal tone|drone|bass.?note|ii\s*[-–]\s*v|ii-v|dominant tension|functional progression|tonic.?dominant|phrygian cadence|raga pitch|maqam|scale degree)\b/i.test(value);
}

function patternRole(name: string, category: import('../../schema').PatternCategory, roles: Record<string, string[]>): string[] {
  const words = name.toLowerCase();
  const matched = Object.keys(roles).filter(role => {
    const roleWord = role.toLowerCase();
    if (roleWord === 'lead' || roleWord === 'voice') return /melody|melodic|motif|theme|lead|response|answer|counterline|falseta|solo|riff|hook|phrase|vocal|cante/i.test(words);
    if (roleWord === 'bass') return /bass|tumbao|walking|pedal|sub.?bass|low anchor/i.test(words);
    if (roleWord === 'percussion') return /percussion|palmas|clave|bell|cascara|cáscara|conga|timbale|tambora|drum|bombo|shaker|clap/i.test(words);
    if (roleWord === 'harmony' || roleWord === 'comping') return /comping|comp|strum|rasgueado|guajeo|chord|marcato|yumba|accompaniment/i.test(words);
    return new RegExp(roleWord, 'i').test(words);
  });
  if (matched.length) return matched;
  const roleNames: Record<string, RegExp> = {
    bass: /bass|low|sub|tumbao/i, comping: /harmony|comp|keys|keyboard|guitar|plucked|accompan/i,
    percussion: /percussion|drum|rhythm|clave|palmas|caj[oó]n|bombo|foot/i,
    melodic: /lead|melody|voice|vocal|wind|reed|string|bow|plucked|guitar|solo/i,
    fill: /lead|melody|voice|wind|string|guitar|percussion|drum/i,
    cadence: /harmony|bass|lead|voice|percussion|drum/i,
    transition: /harmony|bass|lead|voice|percussion|drum|texture/i,
    break: /./, groove: /./,
  };
  const byRole = Object.keys(roles).filter(role => roleNames[category]?.test(role));
  if (byRole.length) return byRole;
  const byInstrument: Record<string, RegExp> = {
    bass: /bass|sub|tuba|guitarron|guitar|plucked|pipa|guzheng|shamisen|koto|biwa/i,
    comping: /piano|keys|guitar|tres|accordion|bandoneon|harp|oud|plucked|pipa|guzheng|shamisen|koto|biwa|dulcimer/i,
    percussion: /drum|perc|bombo|caj[oó]n|conga|bongo|timbal|palmas|clap|foot/i,
    melodic: /voice|choir|sax|trumpet|flute|violin|strings|guitar|plucked|pipa|guzheng|shamisen|koto|biwa|reed|lead/i,
    fill: /voice|sax|trumpet|flute|violin|guitar|plucked|pipa|guzheng|shamisen|koto|biwa|reed|drum|perc/i,
    cadence: /piano|bass|voice|sax|trumpet|flute|violin|guitar|pipa|guzheng|shamisen|koto|biwa|drum|perc/i,
    transition: /piano|bass|voice|sax|trumpet|flute|violin|guitar|pipa|guzheng|shamisen|koto|biwa|drum|perc|synth/i,
    break: /./, groove: /./,
  };
  return Object.keys(roles).filter(role => roles[role].some(instrument => byInstrument[category]?.test(instrument)));
}

function techniqueMappings(style: CalibratedStyleInput): NonNullable<import('../../schema').StyleCalibration['techniqueMappings']> {
  const instrumentsByTechnique = new Map<string, string[]>();
  for (const [instrument, techniques] of Object.entries(style.instrumentTechniques)) {
    for (const technique of techniques) instrumentsByTechnique.set(technique, [...(instrumentsByTechnique.get(technique) ?? []), instrument]);
  }
  return style.techniques.map(technique => {
    const explicitlyMapped = instrumentsByTechnique.get(technique) ?? [];
    const roles = explicitlyMapped.length
      ? Object.entries(style.roles).filter(([, instruments]) => explicitlyMapped.some(instrument => instruments.includes(instrument))).map(([role]) => role)
      : inferredTechniqueRoles(technique, style.roles);
    const mappedInstruments = explicitlyMapped.length ? explicitlyMapped : roles.flatMap(role => style.roles[role] ?? []);
    const registers = mappedInstruments.flatMap(instrument => {
      const range = INSTRUMENTS_BY_ID[instrument]?.tuningAndMechanics?.keyRange;
      return range ? [[range.lowMidi, range.highMidi] as [number, number]] : [];
    });
    const phrasePositions = /cadence|ending|closing|remate|cierre|fill|pickup|response|answer|rubato|melisma|ornament|portamento|gliss/i.test(technique)
      ? ['start','middle','end'] : /crescendo|drop|mute|unmute|gear|transition/i.test(technique) ? ['section-transition','section'] : ['any'];
    const transitionUse = /transition|drop|mute|unmute|gear|pickup|cadence|ending|closing|remate|cierre/i.test(technique);
    const sustained = /legato|sustain|drone|pedal|bow|portamento|vibrato|tremolo|melisma/i.test(technique);
    const ornament = /ornament|grace|trill|turn|melisma|gliss|slide|bend|fall|doit|scoop/i.test(technique);
    return {
      technique,
      instruments: Array.from(new Set(mappedInstruments)), roles, ...(registers.length ? { registers } : {}),
      minDurationBeats: sustained ? 0.5 : ornament ? 0.0625 : 0.125,
      maxDensityPerBar: sustained ? 4 : ornament ? 12 : transitionUse ? 8 : 16,
      phrasePositions, transitionUse,
      intensity: /soft|restrained|light|sparse/i.test(technique) ? [1,3] : /aggressive|hard|strong|heavy|explosive/i.test(technique) ? [3,5] : [1,5],
    };
  });
}

function mergeAuthoredMix(base: MixOverride<MixContract>, authored: MixOverride<MixContract>): MixOverride<MixContract> {
  const merge = (left: Record<string, unknown>, right: Record<string, unknown>): Record<string, unknown> => {
    const result = { ...left };
    for (const [key, value] of Object.entries(right)) result[key] = value && typeof value === 'object' && !Array.isArray(value)
      ? merge((left[key] as Record<string, unknown>) ?? {}, value as Record<string, unknown>) : value;
    return result;
  };
  return merge(base as Record<string, unknown>, authored as Record<string, unknown>) as MixOverride<MixContract>;
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

function styleDefinition(input: GenrePackInput, item: CalibratedStyleInput): GenreStyleDefinition {
  const styleId = `${input.id}-${item.id}`;
  const meter = item.meter, tempo = item.tempo, scaleMode = item.scale;
  const misplacedPatterns = item.techniques.filter(isPatternVocabulary);
  const misplacedHarmony = item.techniques.filter(isHarmonyVocabulary);
  const stylePatterns = list(item.patterns, misplacedPatterns);
  const styleTechniques = item.techniques.filter(technique => !isPatternVocabulary(technique) && !isHarmonyVocabulary(technique));
  const styleHarmony = list(item.harmony, misplacedHarmony);
  const styleRoles = rolesForStyle(input, item);
  const sectionsForStyle = sections(input, styleRoles, item);
  const description = item.description;
  const roles = Object.fromEntries(Object.entries(styleRoles).map(([role, instruments]) => [role, {
    preferredInstruments: instruments, required: role === 'lead' || role === 'bass',
    mixFunction: role === 'lead' || role === 'voice' ? 'foreground' : role === 'bass' ? 'low-anchor' : role === 'percussion' ? 'pulse-anchor' : 'harmonic-support',
  }]));
  return {
    id: styleId, worldId: input.id, name: item.name, origin: input.family, description,
    characteristicInstruments: Object.values(styleRoles).flat() as GenreStyleDefinition['characteristicInstruments'],
    preferredMeters: [meter === 'free / cycle' || meter === 'free / 4/4' ? '4/4' : meter], tempoRange: tempo, keySubstyles: [item.name], coreConcepts: list(stylePatterns, styleTechniques).slice(0, 10),
    rhythmicGrammar: stylePatterns.slice(0, 6), scaleMode,
    tuningSystem: input.pitchSystem, signatureCell: stylePatterns[0] ?? input.patternFamilies[0],
    grooveMechanics: item.groove,
    prominentChords: styleHarmony,
    sectionProgressions: progressions(input, item),
    arrangementSections: sectionsForStyle,
    instrumentDialects: item.instrumentDialects, harmonyModel: item.harmonyModel, bassMotion: item.bassMotion,
    calibration: {
      roles, instrumentTechniques: item.instrumentTechniques, techniques: Object.fromEntries(Object.keys(styleRoles).map(role => [role, techniquesByRole(role, styleTechniques)])),
      techniqueScopes: Object.fromEntries(styleTechniques.map(technique => [technique, scopesForTechnique(technique)])),
      patterns: { families: stylePatterns, interaction: list(stylePatterns.filter(x => /answer|call|interlock|response|counter|gear|clave|compas/i.test(x))),
        phraseBehaviors: ['pickup', 'phrase-end cadence', 'section variation'], forbidden: input.forbiddenPatterns,
        mappedFamilies: stylePatterns.map(name => {
          const category = patternCategory(name);
          const roles = patternRole(name, category, styleRoles);
          return { name, category, roles, instruments: Array.from(new Set(roles.flatMap(role => styleRoles[role] ?? []))),
            context: /section|gear|drop|breakdown|crescendo|escalation|block/i.test(name) ? 'section' as const : /phrase|cadence|fill|transition|response|answer|remate|cierre|pickup/i.test(name) ? 'phrase' as const : 'note' as const };
        }) },
      techniqueMappings: techniqueMappings({ ...item, techniques: styleTechniques }),
      harmony: { pitchSystem: input.pitchSystem, scales: list([scaleMode], input.scales), chordQualities: styleHarmony,
        progressionExamples: Object.values(progressions(input, item)),
        harmonicRhythm: item.harmonicRhythm ?? input.harmonicRhythm, cadences: list(item.harmony, input.cadences),
        bassChordInteraction: input.bassChordInteraction, requiresChords: item.requiresChords ?? !/free|drone|atonal|heterophonic/i.test(input.pitchSystem),
        voicingDensity: /jazz|bossa|soul|cinematic|orchestra|gospel/i.test(item.name) ? { min: 3, max: 10 } : { min: 2, max: 6 },
        voicingDensityByInstrument: { guitar: { min: 2, max: 6 }, piano: /jazz|gospel|cinematic/i.test(item.name) ? { min: 3, max: 10 } : { min: 2, max: 7 },
          strings: { min: 2, max: 16 }, horns: { min: 2, max: 10 }, pads: { min: 2, max: 12 }, bandoneon: { min: 2, max: 6 } },
        chordFamilyWeights: Object.fromEntries(['major','minor','dominant','diminished','suspended','extended','power','modal'].map(family => [family,
          styleHarmony.some(chord => new RegExp(family === 'extended' ? 'maj7|m7|9|11|13|add' : family === 'power' ? '5' : family, 'i').test(chord)) ? 1 : 0])),
        borrowedHarmony: styleHarmony.filter(value => /modal mixture|borrowed|augmented.?sixth|neapolitan|phrygian.?major/i.test(value)),
        substitutions: styleHarmony.filter(value => /substitut|tritone|diminished passing|secondary dominant|chromatic approach/i.test(value)),
        voiceLeading: [input.bassChordInteraction, ...styleHarmony.filter(value => /voice.?leading|counterpoint|inversion|inner voice/i.test(value))],
        pedalDroneBehavior: /drone|pedal/i.test(`${stylePatterns.join(' ')} ${styleHarmony.join(' ')}`) ? 'sustain the authored tonic or modal center through changing upper voices' : 'follow authored bass motion; use pedals only where a pattern or progression calls for one' },
      mix: mergeAuthoredMix(mixCalibration(input, item, styleRoles), item.mix),
    },
  };
}

function patternFromCell(input: GenrePackInput, style: GenreStyleDefinition, cell: AuthoredCell, index: number): MusicalPattern {
  const id = `${style.id}-pattern-${index}-${slug(cell.name)}`;
  const meter = style.preferredMeters[0];
  const [n, d] = meter.split('/').map(Number);
  const beats = n * 4 / d;
  const stepsPerBeat = 4;
  const cycleLength = cell.cycleLength ?? 1;
  const instruments = cell.instruments ?? style.calibration!.roles[cell.role]?.preferredInstruments ?? [];
  const events: PatternEvent[] = cell.onsets.map((position, i) => ({
    position, duration: cell.durations?.[i] ?? (cell.role === 'harmony' ? .35 : .2),
    kind: cell.phraseEnd ? 'fill' : 'attack',
    accent: cell.accents?.[i] ?? (i === 0 ? .9 : .65), velocity: i === 0 ? .85 : .7,
    articulation: cell.articulations?.[i] ?? cell.articulation, hitType: cell.hits?.[i], pitch: cell.pitches?.[i],
    ...(cell.phraseEnd ? { condition: { phrasePosition: ['cadence', 'transition'] }, probability: .85 } : {}),
  }));
  return {
    id, worldId: input.id, styleIds: [style.id], name: `${style.name}: ${cell.name}`, shortName: cell.name,
    family: cell.name, category: cell.phraseEnd ? (/cadence|cierre|remate|ending|closing/i.test(cell.name) ? 'cadence' : 'fill')
      : cell.role === 'bass' ? 'bass' : cell.role === 'percussion' ? 'percussion'
        : cell.role === 'lead' || cell.role === 'voice' ? 'melodic'
          : /break|dropout|silence/i.test(cell.name) ? 'break'
            : /transition|pickup|turnaround/i.test(cell.name) ? 'transition' : 'comping',
    description: `${cell.name}. ${style.description}`, tags: [input.id, style.id, cell.role, slug(cell.name)],
    scopes: cell.phraseEnd ? ['phrase'] : ['measure', 'phrase'], roles: [cell.role] as MusicalPattern['roles'],
    instruments: instruments as MusicalPattern['instruments'], canCrossRole: false, sourceLevel: 'style-authored',
    meter, cycleLength, subdivisions: beats * stepsPerBeat * cycleLength,
    onsetGrid: cell.onsets.map(position => Math.round(position * stepsPerBeat)),
    durationGrid: events.map(event => Math.max(1, Math.round(event.duration! * stepsPerBeat))),
    accentProfile: events.map(event => event.accent!), velocityProfile: events.map(event => event.velocity!),
    ...(cell.hits ? { hitGrid: cell.hits.filter((hit): hit is string => typeof hit === 'string') } : {}), events,
    supportedEnergy: [1,2,3,4,5], phrasePosition: cell.phraseEnd ? ['end'] : ['start','middle','end','any'], variants: [],
    provenance: 'Folder-authored role cell; quarter-note beat positions and phrase conditions.',
    authenticityTags: [input.id, style.id, slug(cell.name)], tuningSystem: input.pitchSystem, enabled: true, weight: cell.phraseEnd ? .4 : 1,
  };
}

export function createGenreWorld(input: GenrePackInput): GenreWorld {
  const styles = input.styles.map(item => styleDefinition(input, item));
  const patternItems = styles.flatMap((style, i) => {
    const cells = input.styles[i].cells;
    // Packs without authored cells still use their genre-level canonical
    // patterns. Keep them loadable; a missing optional style overlay must not
    // crash the entire genre registry (and therefore the player app).
    if (!cells?.length) return [];
    return cells.filter(cell => !cell.phraseEnd && style.calibration!.roles[cell.role]).map((cell, index) => {
      const pattern = patternFromCell(input, style, cell, index);
      const fill = cells.find(candidate => candidate.phraseEnd && candidate.role === cell.role && candidate.instruments?.[0] === cell.instruments?.[0]);
      if (fill) {
        const fillPattern = patternFromCell(input, style, fill, index);
        const boundary = Math.min(...fill.onsets);
        const events = [...pattern.events!.filter(event => event.position < boundary), ...fillPattern.events!];
        pattern.variants = [{ id: `${pattern.id}-cadence`, parentPatternId: pattern.id,
          name: `${cell.name} cadence`, variationType: 'cadence', probability: 1,
          onsetGrid: events.map(event => Math.round(event.position * 4)),
          durationGrid: events.map(event => Math.max(1, Math.round(event.duration! * 4))),
          accentProfile: events.map(event => event.accent!), velocityProfile: events.map(event => event.velocity!), events,
        }];
      }
      return pattern;
    });
  });
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
