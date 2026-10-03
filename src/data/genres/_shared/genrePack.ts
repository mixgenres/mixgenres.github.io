import type { GenreWorld, GenreStyleDefinition, GrooveMechanics, MusicalPattern, PatternEvent, Role } from '../../schema';
import type { MixOverride, MixContract } from '../../sound/schema/dynamicMix';

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
  return matched.length ? matched : techniques;
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
  const stylePatterns = item.patterns, styleTechniques = item.techniques, styleHarmony = item.harmony;
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
        phraseBehaviors: ['pickup', 'phrase-end cadence', 'section variation'], forbidden: input.forbiddenPatterns },
      harmony: { pitchSystem: input.pitchSystem, scales: list([scaleMode], input.scales), chordQualities: styleHarmony,
        progressionExamples: Object.values(progressions(input, item)),
        harmonicRhythm: item.harmonicRhythm ?? input.harmonicRhythm, cadences: list(item.harmony, input.cadences),
        bassChordInteraction: input.bassChordInteraction, requiresChords: item.requiresChords ?? !/free|drone|atonal|heterophonic/i.test(input.pitchSystem),
        preferredVoicingTones: /jazz|bossa|soul|cinematic|orchestra/i.test(item.name) ? [3, 8] : [2, 5],
        voicingTonesByRole: { guitar: [2, 5], piano: [2, 8], strings: [2, 12], horns: [3, 8], pads: [3, 12] } },
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
    family: cell.name, category: cell.phraseEnd ? 'fill' : cell.role === 'bass' ? 'bass' : 'groove',
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
