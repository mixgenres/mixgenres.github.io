import type { GenreWorld, GenreStyleDefinition, GrooveMechanics, MusicalPattern, PatternEvent, Role } from '../../schema';
import type { MixOverride, MixContract } from '../../sound/schema/dynamicMix';
import { INSTRUMENTS_BY_ID } from '../../instruments';
import { authorSampleSongDevelopment } from './sampleSongDevelopment';
import { authorGenreProduction } from './production';
import { authorCatalogSupportParts } from './catalogSupportParts';
import { authorMelodicStudies } from './melodicStudies';
import { authorBassStudies } from './bassStudies';

/** Authored beat positions, in quarter-note units; no style-name hashing. */
export interface AuthoredCell {
  name: string;
  /** Concise student-facing label; the full source name and technique stay in description. */
  shortName?: string;
  role: string;
  instruments?: string[];
  onsets: number[];
  durations?: Array<number | undefined>;
  accents?: number[];
  velocities?: number[];
  /** Deterministic per-event chance, re-evaluated in each played phrase. */
  probabilities?: Array<number | undefined>;
  /** Authored per-event pocket in milliseconds; positive is late, negative is early. */
  microtiming?: number[];
  hits?: PatternEvent['hitType'][];
  cycleLength?: number;
  articulation?: string;
  articulations?: string[];
  pitches?: Array<PatternEvent['pitch']>;
  notations?: Array<PatternEvent['notation']>;
  phraseEnd?: boolean;
  /** Context belongs to the cell, rather than a name-matching heuristic. */
  sectionUsage?: MusicalPattern['sectionUsage'];
  supportedEnergy?: MusicalPattern['supportedEnergy'];
  description?: string;
  /** Difficulty of this playable part (1 = foundation, 5 = advanced). */
  difficulty?: number;
  /** A complete authored alternative for developing a song phrase. */
  arrangementVariation?: boolean;
  /** Preserve the authored placement of a coordinated ensemble cue. */
  timingLock?: MusicalPattern['timingLock'];
}
export interface CalibratedStyleInput {
  instrumentDialects: Record<string, Partial<import('../../styles/contracts').InstrumentDialect>>;
  meter: string;
  tempo: [number, number];
  /** Concrete tuning engine ID; pitchSystem remains descriptive theory metadata. */
  tuningSystem?: string;
  scale: string;
  roles: Record<string, string[]>;
  progressions: Record<string, string[]>;
  form: Array<{ label: string; bars: number; instruments?: string[]; intensity?: 'low' | 'medium' | 'high' | 'peak'; leadInstrumentId?: string; soloInstrumentId?: string; soloMode?: 'accompanied' | 'unaccompanied' | 'trading' }>;
  cells: AuthoredCell[];
  groove: GrooveMechanics;
  instrumentTechniques: Record<string, string[]>;
  requiresChords: boolean;
  harmonyModel: string;
  harmonicRhythm: string;
  bassMotion: string;
  bassAnticipationBeats?: number[];
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
  /** Concrete tuning runtime inherited by styles unless a style overrides it. */
  tuningSystem: string;
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
    const chosen = style.form[i].instruments ?? Object.values(roles).flat();
    return { key: `${slug(label)}-${i}`, label, kind: label, bars: style.form?.[i]?.bars ?? (/alap|drone/i.test(label) ? 8 : i === 0 ? 4 : 8),
      ...(style.form?.[i]?.soloInstrumentId ? { soloInstrumentId: style.form[i].soloInstrumentId, soloMode: style.form[i].soloMode } : {}),
      intensity: style.form[i].intensity ?? (i === labels.length - 1 ? 'medium' : /climax|mambo|gear|jhala|remate/i.test(label) ? 'peak' : isSparse ? 'low' : 'high'),
      instruments: [...chosen], leadInstrumentId: style.form[i].leadInstrumentId ?? leadRole[0] };
  });
}

function rolesForStyle(_input: GenrePackInput, style: CalibratedStyleInput) { return style.roles; }

function phraseBehaviorsFor(patternFamilies: string[]): string[] {
  const authored = patternFamilies.join(' ').toLowerCase();
  const cues: Array<[string, RegExp]> = [
    ['pickup', /\b(?:pickup|anacrusis)\b/],
    ['call-and-response', /\b(?:call.*(?:responses?|answers?|repl(?:y|ies)|after)|(?:responses?|answers?|repl(?:y|ies)).*call|responses?|answers?|repl(?:y|ies))\b/],
    ['phrase-end cadence', /\b(?:cadence\w*|cadential|turnaround|remate|cierre|coda)\b/],
    ['motif development', /\b(?:motif\w*|theme development|sequences?|variations?|development|hooks?|ostinatos?|riffs?)\b/],
    ['break and re-entry', /\b(?:breaks?|drops?|pauses?|rests?|silences?|stop.?time|parada|corte|suwuk|angsel|returns?)\b/],
    ['ornamented phrase', /\b(?:ornament\w*|melismas?|meend|gamak|taans?|alap|taqsim|krintan|kampita)\b/],
    ['interlocking lines', /\b(?:interlock\w*|heterophon\w*|counterpoint|counterline|exchange)\b/],
    ['sustained phrasing', /\b(?:sustain|drone|long.?tone|overlap|breath)\b/],
    ['build and release', /\b(?:build|rise|rising|crescendo|swell|escalat\w*|gear change)\b/],
  ];
  return cues.filter(([, cue]) => cue.test(authored)).map(([label]) => label);
}



const GENERIC_DESCRIPTION_TECHNIQUES = new Set([
  'accent', 'staccato', 'legato', 'tenuto', 'open', 'ghost', 'ghost-note', 'roll', 'vibrato',
]);

function listForSentence(values: string[]): string {
  const unique = [...new Set(values.filter(Boolean))];
  if (unique.length < 2) return unique[0] ?? '';
  if (unique.length === 2) return `${unique[0]} and ${unique[1]}`;
  return `${unique.slice(0, -1).join(', ')}, and ${unique.at(-1)}`;
}

function studentStyleDescription(item: CalibratedStyleInput): string {
  const center = item.patterns[0]?.replace(/[.!?]+$/, '') || item.name;
  const leadInstruments = item.roles.lead ?? item.roles.voice ?? Object.values(item.roles)[0] ?? [];
  const leadNames = leadInstruments.slice(0, 2).map(id => id === 'voice' ? 'vocal line' : studentInstrumentLabel(id));
  const leadLabel = listForSentence(leadNames) || 'the lead part';
  const supportId = [...(item.roles.harmony ?? []), ...(item.roles.percussion ?? [])]
    .find(id => !leadInstruments.includes(id));
  const supportLabel = supportId ? studentInstrumentLabel(supportId) : 'the ensemble';
  const leadTechniques = leadInstruments.flatMap(id => item.instrumentTechniques[id] ?? [])
    .filter(value => !GENERIC_DESCRIPTION_TECHNIQUES.has(value.toLowerCase()))
    .slice(0, 3);
  const techniques = listForSentence(leadTechniques);
  const microtimingFeel = item.groove.microtimingFeel ?? 'straight';
  const feelText = `${microtimingFeel} ${item.patterns.join(' ')}`;
  const grooveName = /swing|shuffle|triplet/i.test(feelText) || (item.groove.swingPercentage ?? 50) >= 58 ? 'swung'
    : /free|rubato/i.test(microtimingFeel) ? 'elastic'
      : /straight|quantized/i.test(microtimingFeel) ? 'straight' : 'flexible';
  const bassMotion = ({
    'root-fifth': 'root-and-fifth bass motion', tumbao: 'tumbao bass', riff: 'riff-driven bass',
    walking: 'walking bass', pedal: 'pedal bass',
  } as Record<string, string>)[item.bassMotion] ?? `${item.bassMotion.replaceAll('-', ' ')} bass motion`;
  const formLabels = [...new Set(item.form.map(step => step.label.toLowerCase()))].slice(0, 5);
  const form = formLabels.length > 1 ? ` The form moves through ${formLabels.join(' → ')}.` : '';
  const techniqueSentence = techniques
    ? ` Practice ${techniques} in the lead phrase.`
    : ` Keep ${supportLabel} distinct from the lead.`;
  return `${item.name} centers ${center}. A ${grooveName} ${item.meter} pulse at ${item.tempo[0]}–${item.tempo[1]} BPM puts ${leadLabel} against ${supportLabel}, with ${bassMotion}.${techniqueSentence}${form}`;
}

function scopesForTechnique(value: string): Array<'note'|'motif'|'phrase'|'section'|'song'> {
  const term = value.toLowerCase();
  if (/section|gear|drop|crescendo|orchestrat|transition|density|climax|filter.?sweep|automation|modulation|patch.?change/.test(term)) return ['section'];
  if (/comping|offbeat.?skank|gallop|\bchug\b|shuffle.?bow|double.?stop|open.?string|pattern|groove|rhythm/.test(term)) return ['motif'];
  if (/phrase|cadence|fill|ornament|vibrato|rubato|pickup|response|call/.test(term)) return ['phrase'];
  if (/riff|ostinato|tremolo|repeated|roll|interlock|pattern/.test(term)) return ['motif'];
  return ['note'];
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
    [/swell|sustain|crescendo|rubato|fermata|cierre|cadence|remate|unison|attack|staccato|legato|accent|articulation|elastic timing|dynamic contrast|sectional ending|dynamic break|pause|lyricism|hook|pluck|slap|double.?stop|chamber.?style interaction|chamber.?like interplay|ensemble interaction/, ['lead','voice','harmony','strings','winds','bandoneon','bass','percussion']],
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

function instrumentsForTechniqueCue(technique: string, available: string[]): string[] {
  const text = technique.toLowerCase();
  const aliases: Array<[RegExp, string[]]> = [
    [/telecaster|fender|fuzz.?face|cry.?baby|wah.?wah|guitar|fiddle|fret|bottleneck|slide guitar|rasgue|picado|falseta|por medio|por arriba/, ['guitar','violin','requinto','tres','shamisen','koto','pipa','guzheng']],
    [/minimoog|minimoog|synth|synthesizer|modular|analog synth|pad/, ['synth','rhodes','fm-ep','sampler']],
    [/cowbell|campana/, ['cowbell']],
    [/g[uü]iro|guiro/, ['guiro','guacharaca','dikanza']],
    [/tabla|bol|theka/, ['tabla','pakhawaj','dholak']],
    [/pakhawaj/, ['pakhawaj']],
    [/bandone[oó]n|bellows/, ['bandoneon','accordion','concertina']],
    [/piano|keyboard|keys|montuno|guajeo|short.?chord|chord.?stab/, ['piano','rhodes','organ','clavinet','synth']],
    [/bongo|bong[oó]|martillo/, ['bongos']],
    [/conga|quinto|tapao|slap.?tapao/, ['congas']],
    [/timbale|timbal|cascara|cáscara|campana/, ['timbales','cowbell']],
    [/brush|snare|hi.?hat|kick|drum|percussive heel|heel stomp/, ['drums','drum-kit','foot-stomp','zapateado','cajon']],
    [/brass|trombone|trumpet|horn/, ['trumpet','trombone','horn-section']],
    [/sax|reed/, ['alto-sax','tenor-sax','clarinet']],
    [/voice|vocal|singer|cante|quej[ií]o|jondo|soneo|preg[oó]n|letra|chant|lyric|melisma/, ['voice','choir']],
    [/bass|tumbao|walking|thumb.?bass|slap bass/, ['bass','upright-bass','log-drum','guitarron']],
    [/clap|palmas/, ['palmas','claves','hand-percussion']],
    [/violin|fiddle|bow|portamento|vibrato|gliss|tremolo|double.?stop/, ['violin','viola','cello','string-ensemble','sarangi','erhu']],
  ];
  const candidates = aliases.find(([pattern]) => pattern.test(text))?.[1] ?? [];
  return candidates.filter(instrument => available.includes(instrument));
}

function patternCategory(name: string): import('../../schema').PatternCategory {
  const text = name.toLowerCase();
  if (/breakdown|dropout|silence|stop|\bbreaks?\b|suspended|mute.?out/.test(text)) return 'break';
  if (/transition|turnaround|pickup|lead.?in|approach|build.?into|handoff/.test(text)) return 'transition';
  if (/fill|roll|lick|run|flourish|cadential pickup/.test(text)) return 'fill';
  if (/fanfare|brass|horn|trumpet|trombone|sax|melody|melodic|motif|theme|lead|response|answer|counterline|countermelody|falseta|solo|riff|hook|phrase|vocal|cante/.test(text)) return 'melodic';
  if (/\bbass\b|tumbao|walking|pedal|sub.?bass|low anchor/.test(text)) return 'bass';
  if (/percussion|palmas|clave|bell|cascara|cáscara|conga|bong[oó]|timbale|tambora|drum|bombo|shaker|clap|foot.?stomp/.test(text)) return 'percussion';
  if (/comping|comp(?![aá]s)|strum|rasgueado|guajeo|chord|marcato|yumba|accompaniment|arpeggio/.test(text)) return 'comping';
  if (/cadence|cierre|coda|remate|ending|closing|tag/.test(text) && !/(?:\d+[- ]?beat|comp[aá]s|clave|rhythm|groove|pulse|cycle|meter|accent|grouping)/.test(text)) return 'cadence';
  if (/rhythm|groove|pulse|comp[aá]s|clave|cycle|meter|beat|count|syncopat|habanera|ostinato|backbeat|polyrhyth|hemiola|3\s*[+-]\s*3\s*[+-]\s*2/.test(text)) return 'groove';
  return 'groove';
}

function patternRole(name: string, category: import('../../schema').PatternCategory, roles: Record<string, string[]>): string[] {
  const words = name.toLowerCase();
  const matched = Object.keys(roles).filter(role => {
    const roleWord = role.toLowerCase();
    if (roleWord === 'lead' || roleWord === 'voice') return /melody|melodic|motif|theme|lead|response|answer|counterline|falseta|solo|riff|hook|phrase|vocal|cante|fanfare|brass|horn|trumpet|trombone|sax|mambo/i.test(words);
    if (roleWord === 'bass') return /bass|tumbao|walking|pedal|sub.?bass|low anchor/i.test(words);
    if (roleWord === 'percussion') return /percussion|palmas|clave|bell|cascara|cáscara|conga|timbale|tambora|drum|bombo|shaker|clap|campana/i.test(words);
    if (roleWord === 'harmony' || roleWord === 'comping') return /comping|montuno|comp(?![aá]s)|strum|rasgueado|guajeo|chord|marcato|yumba|accompaniment/i.test(words);
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
    const availableInstruments = Array.from(new Set([...Object.values(style.roles).flat(), ...Object.keys(style.instrumentTechniques)]));
    const explicitlyMapped = instrumentsByTechnique.get(technique) ?? [];
    const exactRoles = explicitlyMapped.length
      ? Object.entries(style.roles).filter(([, instruments]) => explicitlyMapped.some(instrument => instruments.includes(instrument))).map(([role]) => role)
      : inferredTechniqueRoles(technique, style.roles);
    const inferredInstruments = exactRoles.length ? [] : instrumentsForTechniqueCue(technique, availableInstruments);
    const roles = exactRoles.length ? exactRoles : Object.entries(style.roles)
      .filter(([, instruments]) => inferredInstruments.some(instrument => instruments.includes(instrument))).map(([role]) => role);
    const mappedInstruments = explicitlyMapped.length ? explicitlyMapped : exactRoles.length ? exactRoles.flatMap(role => style.roles[role] ?? []) : inferredInstruments;
    const registers = mappedInstruments.flatMap(instrument => {
      const range = INSTRUMENTS_BY_ID[instrument]?.tuningAndMechanics?.keyRange;
      return range ? [[range.lowMidi, range.highMidi] as [number, number]] : [];
    });
    const phrasePositions = /cadence|ending|closing|remate|cierre|fill|pickup|response|answer|rubato|melisma|ornament|portamento|gliss|meend|gamak|vibrato|scoop|bend|slide|phrase/i.test(technique)
      ? ['start','middle','end'] : /crescendo|drop|mute|unmute|gear|transition|break|pause|build/i.test(technique) ? ['section-transition','section'] : ['any'];
    const transitionUse = /transition|drop|mute|unmute|gear|pickup|cadence|ending|closing|remate|cierre/i.test(technique);
    const sustained = /legato|sustain|drone|pedal|bow|portamento|vibrato|tremolo|melisma|meend|gamak|andolan|gliss|slide|bend|scoop|breath.?phrase|long.?tone/i.test(technique);
    const ornament = /ornament|grace|trill|turn|melisma|taan|briga|gliss|slide|bend|fall|doit|scoop|picado|alzap[uú]a|roll|shake/i.test(technique);
    const percussive = /staccato|slap|pluck|pick|strike|golpe|accent|stroke|scrape|rasgue|downstroke|upstroke|chop|ghost|muted|damped/i.test(technique);
    return {
      technique,
      instruments: Array.from(new Set(mappedInstruments)), roles, ...(registers.length ? { registers } : {}),
      minDurationBeats: sustained ? 0.5 : ornament ? 0.0625 : percussive ? 0.0625 : 0.125,
      maxDensityPerBar: sustained ? 4 : ornament ? 24 : transitionUse ? 8 : percussive ? 20 : 16,
      phrasePositions, transitionUse,
      intensity: /soft|restrained|light|sparse/i.test(technique) ? [1,3] : /aggressive|hard|strong|heavy|explosive/i.test(technique) ? [3,5] : [1,5],
    };
  });
}

function chordFamilyWeights(qualities: string[], progressions: string[][], requiresChords: boolean): Record<string, number> {
  const families = ['major','minor','dominant','diminished','augmented','suspended','half-diminished','extended','power','modal','quartal'];
  const counts: Record<string, number> = Object.fromEntries(families.map(family => [family, 0]));
  if (!requiresChords) return counts;
  const symbols = Array.from(new Set([...qualities, ...progressions.flat()]));
  const add = (family: string) => { counts[family] = (counts[family] ?? 0) + 1; };
  for (const value of symbols) {
    const text = value.trim();
    if (/quartal|fourth.?stack/i.test(text)) { add('quartal'); continue; }
    if (/\bmodal\b|drone|raga|maqam|dastgah/i.test(text)) { add('modal'); continue; }
    if (/diminished|\bdim\b|°/i.test(text)) { add(/half.?diminished|m7b5/i.test(text) ? 'half-diminished' : 'diminished'); continue; }
    if (/augmented|\baug\b|\+/i.test(text)) { add('augmented'); continue; }
    if (/suspend|\bsus[24]?\b/i.test(text)) { add('suspended'); continue; }
    const hasExtension = /(?:maj|M)?(?:6|7|9|11|13)|add\d|alt|[#b](?:5|9|11|13)/i.test(text);
    if (hasExtension && /^([A-G](?:#|b)?)/i.test(text)) add('extended');
    if (/^(?:[A-G](?:#|b)?)(?:m|min)(?!aj)(?:\d|[#b]|$)/i.test(text) || /\bminor\b/i.test(text)) { add('minor'); continue; }
    if (/^([A-G](?:#|b)?)(?:maj|M)(?:6|7|9|11|13)|\bmajor\b/i.test(text)) { add('major'); continue; }
    if (/^([A-G](?:#|b)?)(?:7|9|11|13|alt)(?:[#b].*)?$/i.test(text) || /\bdominant\b/i.test(text)) { add('dominant'); continue; }
    if (/^([A-G](?:#|b)?)5$/i.test(text) || /\bpower.?chord\b/i.test(text)) { add('power'); continue; }
    if (/^([A-G](?:#|b)?)(?:6|add\d+)$/i.test(text) || /^([A-G](?:#|b)?)(?:maj|M)?(?:7|9|11|13)$/i.test(text)) { add('major'); continue; }
    if (/^([A-G](?:#|b)?)$/i.test(text)) add('major');
  }
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  return total ? Object.fromEntries(families.map(family => [family, counts[family] / total])) : counts;
}

function cadenceChords(progressions: Record<string, string[]>): string[] {
  return Object.entries(progressions)
    .filter(([section]) => /coda|cierre|cadence|ending|outro|tag|remate|final|closing/i.test(section))
    .map(([, chords]) => chords[chords.length - 1]).filter((chord): chord is string => !!chord);
}

function styleDefinition(input: GenrePackInput, item: CalibratedStyleInput): GenreStyleDefinition {
  const styleId = `${input.id}-${item.id}`;
  const meter = item.meter, tempo = item.tempo, scaleMode = item.scale;
  const stylePatterns = [...item.patterns];
  const styleTechniques = [...item.techniques];
  const styleHarmony = [...item.harmony];
  const styleProgressions = progressions(input, item);
  const requiresChords = item.requiresChords;
  const cadenceVocabulary = list(input.cadences, cadenceChords(styleProgressions));
  const cadenceTypes = list(styleHarmony.filter(value => /cadence|cierre|coda|remate|delayed resolution|cadential delay|tag cadence/i.test(value)),
    stylePatterns.filter(value => /cadence|cierre|coda|remate|delayed resolution|cadential delay|tag cadence/i.test(value)));
  const bassNoteRules = list([input.bassChordInteraction], styleHarmony.filter(value => /bass.?note|bass line|chromatic bass|pedal|root|fifth|anticipat|walking bass|tumbao|drone/i.test(value)));
  const styleRoles = rolesForStyle(input, item);
  const sectionsForStyle = sections(input, styleRoles, item);
  // Older catalogs appended this same sentence to every style. It adds no
  // student-facing guidance and makes otherwise specific descriptions read
  // like generated metadata.
  const cleanedDescription = item.description.replace(
    /\s*The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells\.?$/i,
    '',
  ).trim();
  const stubDescription = `${item.name}: ${item.patterns[0] ?? item.name}`.replace(/[.!?]+$/, '').toLocaleLowerCase();
  const description = cleanedDescription.replace(/[.!?]+$/, '').toLocaleLowerCase() === stubDescription
    ? studentStyleDescription(item)
    : cleanedDescription;
  const roles = Object.fromEntries(Object.entries(styleRoles).map(([role, instruments]) => [role, {
    preferredInstruments: instruments, required: role === 'lead' || role === 'bass',
    mixFunction: role === 'lead' || role === 'voice' ? 'foreground' : role === 'bass' ? 'low-anchor' : role === 'percussion' ? 'pulse-anchor' : 'harmonic-support',
  }]));
  return {
    id: styleId, worldId: input.id, name: item.name, origin: input.family, description,
    characteristicInstruments: Object.values(styleRoles).flat() as GenreStyleDefinition['characteristicInstruments'],
    preferredMeters: [meter === 'free / cycle' || meter === 'free / 4/4' ? '4/4' : meter], tempoRange: tempo, keySubstyles: [item.name], coreConcepts: list(stylePatterns, styleTechniques),
    rhythmicGrammar: [...stylePatterns], scaleMode,
    tuningSystem: item.tuningSystem ?? input.tuningSystem, signatureCell: stylePatterns[0] ?? input.patternFamilies[0],
    grooveMechanics: item.groove,
    prominentChords: styleHarmony,
    sectionProgressions: styleProgressions,
    arrangementSections: sectionsForStyle,
    instrumentDialects: item.instrumentDialects, harmonyModel: item.harmonyModel, bassMotion: item.bassMotion,
    calibration: {
      roles, instrumentTechniques: item.instrumentTechniques, techniques: Object.fromEntries(Object.keys(styleRoles).map(role => [role, list(...styleRoles[role].map(id => item.instrumentTechniques[id] ?? []))])),
      techniqueScopes: Object.fromEntries(list(styleTechniques, Object.values(item.instrumentTechniques).flat())
        .map(technique => [technique, scopesForTechnique(technique)])),
      patterns: { families: stylePatterns, interaction: list(stylePatterns.filter(x => /answer|call|interlock|response|counter|gear|clave|compas/i.test(x))),
        phraseBehaviors: phraseBehaviorsFor(stylePatterns), forbidden: input.forbiddenPatterns,
        mappedFamilies: stylePatterns.map(name => {
          const category = patternCategory(name);
          const roles = patternRole(name, category, styleRoles);
          return { name, category, roles, instruments: Array.from(new Set(roles.flatMap(role => styleRoles[role] ?? []))),
            context: /section|gear|drop|breakdown|crescendo|escalation|block/i.test(name) ? 'section' as const : /phrase|cadence|fill|transition|response|answer|remate|cierre|pickup/i.test(name) ? 'phrase' as const : 'note' as const };
        }) },
      techniqueMappings: techniqueMappings({ ...item, techniques: styleTechniques }),
      harmony: { pitchSystem: input.pitchSystem, scales: list([scaleMode], input.scales), chordQualities: styleHarmony,
        progressionExamples: Object.values(styleProgressions),
        harmonicRhythm: item.harmonicRhythm, cadences: cadenceVocabulary, cadenceTypes,
        bassChordInteraction: input.bassChordInteraction, bassAnticipationBeats: item.bassAnticipationBeats, bassNoteRules, requiresChords,
        chordFamilyWeights: chordFamilyWeights(styleHarmony, Object.values(styleProgressions), requiresChords),
        borrowedHarmony: styleHarmony.filter(value => /modal mixture|borrowed|augmented.?sixth|neapolitan|phrygian.?major/i.test(value)),
        substitutions: styleHarmony.filter(value => /substitut|tritone|diminished passing|secondary dominant|chromatic approach/i.test(value)),
        voiceLeading: [input.bassChordInteraction, ...styleHarmony.filter(value => /voice.?leading|counterpoint|inversion|inner voice/i.test(value))],
        pedalDroneBehavior: /drone|pedal/i.test(`${stylePatterns.join(' ')} ${styleHarmony.join(' ')}`) ? 'sustain the authored tonic or modal center through changing upper voices' : 'follow authored bass motion; use pedals only where a pattern or progression calls for one' },
      mix: item.mix,
    },
  };
}

function studentCellName(style: GenreStyleDefinition, cell: AuthoredCell): string {
  const instrument = (cell.instruments?.[0] ?? '').replaceAll('-', ' ');
  const compact = (value: string) => value.trim().split(/\s+/).length <= 3 ? value.trim() : '';
  const genericStatement = (value: string) => value.split(/\s+/).length <= 3
    && /^(?:[a-z][a-z -]*\s+)?statement$/i.test(value.trim());
  if (cell.shortName && compact(cell.shortName) && !genericStatement(cell.shortName)) return cell.shortName;
  const prefixes = [...(style.calibration?.patterns?.families ?? []), style.signatureCell ?? '', style.name]
    .filter(Boolean).sort((a, b) => b.length - a.length);
  const prefix = prefixes.find(value => cell.name.toLowerCase().startsWith(`${value.toLowerCase()} `));
  const withoutStyle = prefix ? cell.name.slice(prefix.length).trim() : cell.name;
  if (genericStatement(withoutStyle)) {
    const styleWords = style.name.trim().split(/\s+/);
    const instrumentCue = studentInstrumentLabel(cell.instruments?.[0] ?? cell.role)
      .replace(/^Bb\s+/i, '').replace(/\bSaxophone\b/i, 'Sax');
    let styleCue = styleWords.length <= 2 ? styleWords.join(' ') : `${styleWords[0]} ${styleWords.at(-1)}`;
    if (styleCue.split(/\s+/).length + instrumentCue.split(/\s+/).length > 3) styleCue = styleWords[0];
    return `${styleCue} ${instrumentCue}`;
  }
  const lowerName = withoutStyle.toLowerCase();
  const compactConcept = lowerName.includes('ostinato') ? `${instrument || 'Style'} ostinato`
    : /call.?and.?response|call.?response/.test(lowerName) ? 'Call and response'
      : /answer|response/.test(lowerName) ? `${instrument || 'Lead'} answer`
        : /hook/.test(lowerName) ? `${instrument || 'Lead'} hook`
          : /swell|bloom|lift/.test(lowerName) ? `${instrument || 'Pad'} swell`
            : /pulse|groove/.test(lowerName) ? `${instrument || 'Part'} pulse`
              : /cadence|cierre|remate/.test(lowerName) ? `${instrument || 'Phrase'} cadence` : '';
  const label = compact(withoutStyle) || (cell.phraseEnd
    ? `${instrument || 'Phrase'} cadence`
    : compactConcept || (cell.role === 'lead' || cell.role === 'voice' ? `${instrument === 'voice' ? 'Vocal' : instrument || 'Lead'} phrase`
      : cell.role === 'bass' ? `${instrument || 'Bass'} pulse`
        : cell.role === 'percussion' ? `${instrument || 'Percussion'} groove`
          : cell.role === 'texture' ? `${instrument || 'Sound'} texture`
            : `${instrument || 'Chord'} comping`));
  return label.charAt(0).toLocaleUpperCase() + label.slice(1);
}

function studentInstrumentLabel(instrumentId: string): string {
  const studentLabels: Record<string, string> = {
    voice: 'Vocal', choir: 'Choir', 'pedal-steel': 'Pedal steel', 'upright-bass': 'Upright bass',
    piano: 'Piano', drums: 'Drum kit',
  };
  if (studentLabels[instrumentId]) return studentLabels[instrumentId];
  const fullName = (INSTRUMENTS_BY_ID[instrumentId]?.name ?? instrumentId.replaceAll('-', ' '))
    .split(/\s*\/\s*/)[0].replace(/\s*\([^)]*\)/g, '').trim();
  const words = fullName.trim().split(/\s+/);
  return words.length > 2 ? words.slice(-2).join(' ') : fullName;
}

function patternIdForCell(style: GenreStyleDefinition, cell: AuthoredCell, index: number): string {
  return `${style.id}-pattern-${index}-${slug(cell.name)}`;
}

function patternFromCell(input: GenrePackInput, style: GenreStyleDefinition, cell: AuthoredCell, index: number): MusicalPattern {
  const id = patternIdForCell(style, cell, index);
  const meter = style.preferredMeters[0];
  const [n, d] = meter.split('/').map(Number);
  const beats = n * 4 / d;
  const stepsPerBeat = 4;
  const cycleLength = cell.cycleLength ?? 1;
  const instruments = cell.instruments ?? style.calibration!.roles[cell.role]?.preferredInstruments ?? [];
  const events: PatternEvent[] = cell.onsets.map((position, i) => ({
    position, duration: cell.durations?.[i],
    kind: cell.phraseEnd ? 'fill' : 'attack',
    accent: cell.accents?.[i], velocity: cell.velocities?.[i],
    articulation: cell.articulations?.[i] ?? cell.articulation, hitType: cell.hits?.[i], pitch: cell.pitches?.[i], notation: cell.notations?.[i], microtiming: cell.microtiming?.[i],
    // A notated tuplet/fingering sequence is one coherent gesture. Dropping
    // individual attacks would change both its ratio and its finger order.
    ...(cell.phraseEnd ? { condition: { phrasePosition: ['cadence', 'transition'] } } : {}),
    ...(cell.probabilities?.[i] !== undefined ? { probability: cell.probabilities[i] } : {}),
  }));
  // Hit labels are positional metadata. Filtering undefined entries would
  // shift a later label onto an earlier attack. Keep only an aligned grid with
  // at least one authored label; rich events remain the source of truth.
  const alignedHits = cell.hits
    ? cell.onsets.map((_, hitIndex) => {
      const hit = cell.hits?.[hitIndex];
      return typeof hit === 'string' ? hit : '';
    })
    : undefined;
  const hasAuthoredHit = alignedHits?.some(Boolean) ?? false;
  const shortName = studentCellName(style, cell);
  return {
    id, worldId: input.id, styleIds: [style.id], name: `${style.name}: ${shortName}`, shortName,
    family: shortName, category: cell.phraseEnd ? (/cadence|cierre|remate|ending|closing/i.test(cell.name) ? 'cadence' : 'fill')
      : cell.role === 'bass' ? 'bass' : cell.role === 'percussion' ? 'percussion'
          : cell.role === 'lead' || cell.role === 'voice' ? 'melodic'
            : /break|dropout|silence/i.test(cell.name) ? 'break'
              : /transition|pickup|turnaround/i.test(cell.name) ? 'transition' : 'comping',
    description: cell.description ?? `${cell.name}. ${style.description}`, tags: [input.id, style.id, cell.role, slug(cell.name), cell.name],
    scopes: cell.phraseEnd ? ['phrase'] : ['measure', 'phrase'], roles: [cell.role] as MusicalPattern['roles'],
    instruments: instruments as MusicalPattern['instruments'], canCrossRole: false, sourceLevel: 'style-authored',
    ...(cell.timingLock ? { timingLock: cell.timingLock } : {}),
    meter, cycleLength, subdivisions: beats * stepsPerBeat * cycleLength,
    onsetGrid: cell.onsets.map(position => Math.round(position * stepsPerBeat)),
    ...(cell.durations?.length === cell.onsets.length && cell.durations.every((duration): duration is number => duration !== undefined && Number.isFinite(duration))
      ? { durationGrid: cell.durations.map(duration => Math.max(1, Math.round(duration * stepsPerBeat))) } : {}),
    ...(events.every(event => event.accent !== undefined) ? { accentProfile: events.map(event => event.accent!) } : {}),
    ...(events.every(event => event.velocity !== undefined) ? { velocityProfile: events.map(event => event.velocity!) } : {}),
    ...(hasAuthoredHit ? { hitGrid: alignedHits } : {}), events,
    supportedEnergy: cell.supportedEnergy ?? [1,2,3,4,5],
    sectionUsage: cell.sectionUsage ?? (cell.phraseEnd ? ['ending'] : undefined),
    phrasePosition: cell.phraseEnd ? ['end'] : ['start','middle','end','any'], variants: [],
    ...(cell.difficulty ? { difficulty: cell.difficulty } : {}),
    ...(cell.arrangementVariation ? { arrangementVariation: true } : {}),
    provenance: 'Folder-authored role cell; quarter-note beat positions and phrase conditions.',
    authenticityTags: [input.id, style.id, slug(cell.name)], tuningSystem: style.tuningSystem ?? input.tuningSystem, enabled: true, weight: cell.phraseEnd ? .4 : 1,
  };
}

function closingEvents(pattern: MusicalPattern, ending: MusicalPattern): PatternEvent[] {
  const [n, d] = pattern.meter.split('/').map(Number);
  const beats = n * 4 / d;
  const shift = Math.max(0, pattern.cycleLength - ending.cycleLength) * beats;
  const closing = ending.events!.map(event => ({ ...event, position: event.position + shift }));
  const boundary = Math.min(...closing.map(event => event.position));
  return [...pattern.events!.filter(event => event.position < boundary), ...closing];
}

export function createGenreWorld(input: GenrePackInput): GenreWorld {
  input = authorGenreProduction(input);
  input = authorSampleSongDevelopment(input);
  input = authorBassStudies(input);
  input = authorMelodicStudies(input);
  const styles = input.styles.map(item => styleDefinition(input, item));
  const patternItems = styles.flatMap((style, i) => {
    const authoredCells = input.styles[i].cells;
    // A style without authored playable cells has no automatic pattern source.
    if (!authoredCells.length) return [];
    // A written lesson can belong to an optional player outside the default
    // ensemble. Keep an explicit instrument/role cell even when that role has
    // no preferred player in this style's opening lineup. Dropping it here
    // made optional tracks fail to enable and forced neighboring-role phrases
    // into catalog expansions.
    // Retain the existing indices for saved scores. Optional-role cells are
    // appended with their own stable IDs below, rather than shifting every
    // regular source and ending that was already in the catalog.
    const regular = authoredCells.filter(cell => !cell.phraseEnd && style.calibration!.roles[cell.role]);
    const patterns = regular.map((cell, index) => {
      const pattern = patternFromCell(input, style, cell, index);
      // A second complete written part is an arrangement alternative.
      if (!cell.arrangementVariation && regular.slice(0, index).some(previous =>
        previous.role === cell.role
        && previous.instruments?.join('|') === cell.instruments?.join('|')
        && JSON.stringify([previous.onsets, previous.durations, previous.pitches, previous.hits, previous.accents])
          !== JSON.stringify([cell.onsets, cell.durations, cell.pitches, cell.hits, cell.accents]))) {
        pattern.arrangementVariation = true;
      }

      const fill = authoredCells.find(candidate => candidate.phraseEnd
        && candidate.role === cell.role && candidate.instruments?.[0] === cell.instruments?.[0]);
      // A short section cadence is a useful variation for compact grooves, but
      // it must not replace the closing measure of a longer authored cycle.
      // That final measure may contain the actual teaching phrase (for example
      // a tihai); its separate ending belongs in the song form after the cycle.
      if (fill && pattern.cycleLength <= 2) {
        const fillPattern = patternFromCell(input, style, fill, index);
        const events = closingEvents(pattern, fillPattern);
        pattern.variants = [{ id: `${pattern.id}-cadence`, parentPatternId: pattern.id,
          name: `${cell.name} cadence`, variationType: 'cadence', probability: 1,
          onsetGrid: events.map(event => Math.round(event.position * 4)),
          ...(events.every(event => event.duration !== undefined)
            ? { durationGrid: events.map(event => event.duration! * 4) } : { durationGrid: undefined }),
          ...(events.some(event => event.accent !== undefined) ? { accentProfile: events.map(event => event.accent ?? .6) } : {}),
          ...(events.some(event => event.velocity !== undefined) ? { velocityProfile: events.map(event => event.velocity ?? .72) } : {}), events,
        }];
      }
      return pattern;
    });
    // Phrase endings are independently auditionable learning material. Keep
    // the original regular IDs stable for saved scores and existing choices.
    const endings = authoredCells.filter(cell => cell.phraseEnd && style.calibration!.roles[cell.role])
      .map((cell, index) => {
        const pattern = { ...patternFromCell(input, style, cell, index),
          id: `${style.id}-ending-${slug(cell.role)}-${slug(cell.instruments?.join('-') ?? cell.role)}-${slug(cell.name)}` };
        // Choosing a written ending explicitly should audition it at once.
        pattern.events = pattern.events!.map(({ condition: _condition, ...event }) => event);
        return pattern;
      });
    const optionalCells = authoredCells.filter(cell => cell.instruments?.length && !style.calibration!.roles[cell.role]);
    const optionalId = (cell: AuthoredCell) => `${style.id}-optional-${slug(cell.role)}-${slug(cell.instruments!.join('-'))}-${slug(cell.name)}`;
    const optionalPatterns = optionalCells.map(cell => {
      const pattern = { ...patternFromCell(input, style, cell, 0), id: optionalId(cell) };
      if (cell.phraseEnd) pattern.events = pattern.events!.map(({ condition: _condition, ...event }) => event);
      return pattern;
    });
    return [...patterns, ...endings, ...optionalPatterns];
  });
  const homeStyleId = styles.find(style => style.name === input.defaultStyle)?.id ?? styles[0]?.id;
  return authorCatalogSupportParts({
    id: input.id, name: input.name, catalogGeneration: 'genre-style-map-v1', homeStyleId,
    family: input.family, color: input.color, description: input.description, level: 'world', kind: 'world', strictness: 'strict',
    styleDefinitions: styles, substyles: styles.map(style => style.name), artists: [],
    concepts: list(input.patternFamilies, input.techniques, input.cadences),
    instruments: [...input.instruments],
    roles: Object.fromEntries(Object.entries(input.roles).map(([role, instruments]) => [toRole(role), instruments])),
    patterns: patternItems, tuningSystem: input.tuningSystem, signatureCell: styles[0]?.signatureCell,
    prominentChords: input.chordQualities,
    rhythm: { syncopation: .5, swing: .5, pocket: 'ahead', pocketDepth: 0 },
  });
}
