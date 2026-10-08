import { SONGS_BY_ID } from '../../data/songs/catalog';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { GENRE_WORLDS_BY_ID, PATTERNS_BY_ID } from '../../data/genres';
import type { MusicalPattern } from '../../data/schema';
import { getStyle } from '../style/registry';
import { createSheet, rebuild, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';

const SAMPLE_ENSEMBLE_MIN = 5;
const SAMPLE_ENSEMBLE_MAX = 8;
type EnsembleParts = NonNullable<NonNullable<SongStyle['arrangement']>['ensemble']>;

/** A few electronic and guitar-band worlds have deliberately tiny house rosters.
 * These additions provide distinct, quiet support parts for the reference-score
 * catalogue while leaving the regular style templates unchanged.
 */
const SAMPLE_SUPPORT_FALLBACKS: Record<string, string[]> = {
  bass: ['bass', 'piano', 'organ'],
  electronic: ['bass', 'sampler', 'piano', 'turntable'],
  metal: ['organ', 'piano', 'string-ensemble'],
  punk: ['piano', 'tambourine', 'organ'],
  reggaeton: ['bass', 'piano', 'guitar'],
  rock: ['organ', 'piano', 'synth'],
};

const SAMPLE_SUPPORT_PREFERENCES: Record<string, string[]> = {
  tango: ['cello', 'viola', 'guitar', 'voice', 'synth', 'drums'],
  flamenco: ['cajon', 'palmas', 'voice', 'violin', 'guitar'],
  rock: ['organ', 'piano', 'synth', 'string-ensemble'],
  metal: ['organ', 'string-ensemble', 'piano'],
  punk: ['piano', 'tambourine', 'organ'],
};

function patternRoleForInstrument(instrumentId: string, genreId: string, preferred?: string): string {
  if (preferred) return preferred;
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (def?.voicing === 'bass') return 'bass';
  if (def?.voicing === 'unpitched' || def?.kit) return 'percussion';
  if (def?.family === 'voice') return 'lead';
  if (def?.voicing === 'chord') return 'harmony';
  if (genreId === 'tango' && ['cello', 'viola'].includes(instrumentId)) return 'harmony';
  if (['ambient', 'cinematic', 'steppe', 'weird'].includes(genreId)) return 'texture';
  return 'lead';
}

function supportPattern(
  styleId: string,
  genreId: string,
  instrumentId: string,
  role: string,
  allowedPatternIds: string[],
): MusicalPattern[] {
  const id = `${styleId}-sample-support-${instrumentId}-core`;
  const variationId = `${styleId}-sample-support-${instrumentId}-response`;
  const existing = PATTERNS_BY_ID[id];
  const existingVariation = PATTERNS_BY_ID[variationId];
  if (existing && existingVariation) return [existing, existingVariation];

  const world = GENRE_WORLDS_BY_ID[genreId];
  const localPatterns = world?.patterns ?? [];
  const authoredPatterns = allowedPatternIds.map(patternId => PATTERNS_BY_ID[patternId]).filter((p): p is MusicalPattern => !!p);
  const candidates = [...authoredPatterns, ...localPatterns].filter(pattern => pattern.enabled !== false);
  const exact = candidates.filter(pattern => pattern.instruments?.includes(instrumentId));
  const source = [...(exact.length ? exact : candidates)].sort((a, b) => {
    const score = (p: MusicalPattern) =>
      (p.roles.includes(role) ? 100 : 0)
      + (p.styleIds?.includes(styleId) ? 60 : 0)
      + (p.worldId === genreId ? 30 : 0)
      + (p.category === 'ostinato' || p.category === 'accompaniment' || p.category === 'comping' ? 8 : 0);
    return score(b) - score(a) || a.id.localeCompare(b.id);
  })[0];

  const isPercussion = role === 'percussion';
  const onsetGrid = isPercussion && source?.hitGrid?.length
    ? [...source.onsetGrid]
    : role === 'bass' ? [0, 4, 8, 12]
      : role === 'lead' ? [2, 6, 10, 14]
        : role === 'texture' ? [0]
          : [0, 8];
  const base: MusicalPattern = {
    ...(source ?? {
      id, worldId: genreId, name: `Sample support for ${instrumentId}`, family: genreId,
      category: role === 'bass' ? 'bass' : role === 'lead' ? 'lead' : role === 'percussion' ? 'groove' : 'accompaniment',
      description: 'Quiet, sparse support part in the local style vocabulary.', tags: [], scopes: ['song'],
      roles: [role], meter: '4/4', cycleLength: 1, subdivisions: 16, onsetGrid,
      variants: [],
    }),
    id,
    worldId: genreId,
    styleIds: [styleId],
    name: `Sample ${genreId} ${instrumentId} core accompaniment`,
    shortName: `${instrumentId} support`,
    family: `${genreId}-sample-support`,
    category: role === 'bass' ? 'bass' : role === 'lead' ? 'lead' : role === 'percussion' ? 'groove' : role === 'texture' ? 'texture' : 'accompaniment',
    description: `Quiet ${role} sample accompaniment for ${instrumentId}, derived from ${source?.shortName ?? 'the style-local score'}; use as supporting ensemble vocabulary, not as a historical transcription.`,
    tags: ['sample-support', 'sparse'],
    approaches: [],
    roles: [role],
    instruments: [instrumentId],
    compatibleRoles: [role],
    compatibleInstruments: [instrumentId],
    sourceLevel: 'sample-support',
    canCrossRole: false,
    onsetGrid,
    durationGrid: onsetGrid.map(() => role === 'texture' ? 16 : role === 'harmony' ? 6 : 3),
    // Keep source mechanics only when this exact instrument owns the source;
    // a quiet support part must never inherit another instrument's technique.
    events: source?.instruments?.includes(instrumentId) ? source.events : undefined,
    hitGrid: isPercussion ? source?.hitGrid : undefined,
    accentProfile: undefined,
    velocityProfile: onsetGrid.map(() => role === 'percussion' ? 0.35 : 0.3),
    articulations: source?.instruments?.includes(instrumentId) ? source.articulations : [],
    supportedEnergy: [2, 3, 4, 5],
    sectionUsage: undefined,
    phrasePosition: undefined,
    seamOnly: false,
    variants: [],
    provenance: `Sample-only quiet ${role} adaptation from ${source?.id ?? `${genreId} score grammar`}; this is support voicing, not a style-authored teaching cell.`,
    enabled: true,
  };
  const meter = base.meter.split('/').map(Number);
  const cycleBeats = meter[0] * 4 / meter[1] * Math.max(1, base.cycleLength);
  const sourceEvents = base.events?.length
    ? base.events
    : base.onsetGrid.map((step, index) => ({ position: step / 4,
      duration: (base.durationGrid?.[index] ?? 2) / 4,
      hitType: base.hitGrid?.[index], kind: 'attack' as const }));
  const motif = sourceEvents.length >= 4
    ? sourceEvents.slice(-Math.ceil(sourceEvents.length / 2))
    : sourceEvents;
  const first = motif[0]?.position ?? 0;
  const last = motif.at(-1)?.position ?? first;
  const span = last - first;
  const maxStart = Math.max(0, cycleBeats - span - 0.125);
  const half = cycleBeats / 2;
  let start = first <= half ? Math.min(maxStart, half + 0.25) : Math.max(0, first - half - 0.25);
  if (Math.abs(start - first) < 0.125) start = first > 0.25 ? Math.max(0, first - 0.5) : Math.min(maxStart, first + 0.5);
  const responseEvents = motif.map(event => ({ ...event, position: start + event.position - first }));
  const responseOnsets = responseEvents.map(event => Math.max(0, Math.round(event.position * 4)));
  const response: MusicalPattern = {
    ...base,
    id: variationId,
    name: `Sample ${genreId} ${instrumentId} phrase response`,
    shortName: `${instrumentId} answer`,
    family: `${genreId}-sample-support-${instrumentId}`,
    onsetGrid: responseOnsets,
    durationGrid: responseEvents.map(event => Math.max(1, Math.round((event.duration ?? 0.2) * 4))),
    events: base.events?.length && source?.instruments?.includes(instrumentId) ? responseEvents : undefined,
    hitGrid: responseEvents.every(event => !!event.hitType)
      ? responseEvents.map(event => event.hitType!) : undefined,
    variants: [],
    description: `A quiet, displaced phrase response for the ${instrumentId} sample part, derived from the same local source cell. It gives the support lane a contrasting entrance while leaving the named style's lead and groove cells in front.`,
    provenance: `Sample-only phrase response derived from ${source?.id ?? `${genreId} score grammar`}; not a style-authored teaching cell.`,
  };
  PATTERNS_BY_ID[id] = base;
  PATTERNS_BY_ID[variationId] = response;
  return [base, response];
}

function chooseCatalogEnsemble(
  style: SongStyle,
  genreId: string,
  styleId: string,
  recording: typeof RECORDING_ARRANGEMENTS[string],
  authoredEnsemble: EnsembleParts,
): { ensemble: EnsembleParts; supportIds: string[]; keptIds: Set<string>; patternIds: string[]; supportPatterns: Record<string, string[]> } {
  const allParts = authoredEnsemble.flatMap((part, partIndex) => part.instrumentIds.map(instrumentId => ({
    part, partIndex, instrumentId,
  })));
  const allAuthoredIds = [...new Set(allParts.map(part => part.instrumentId))];
  const requestedIds = recording.instruments ? new Set(recording.instruments) : new Set(allAuthoredIds);
  const requestedParts = allParts.filter(part => requestedIds.has(part.instrumentId));
  if (!requestedParts.length) throw new Error(`Recording ${styleId} has no authored instruments`);

  const primaryIds = new Set([recording.lead, ...Object.values(recording.solos ?? {})].filter((id): id is string => !!id));
  const sectionIds = new Set(Object.values(recording.sectionInstruments ?? {}).flat());
  const rank = (item: typeof requestedParts[number]) => {
    const role = item.part.role.toLowerCase();
    return (primaryIds.has(item.instrumentId) ? 1000 : 0)
      + (sectionIds.has(item.instrumentId) ? 200 : 0)
      + (role === 'lead' ? 80 : role === 'bass' ? 70 : role === 'percussion' ? 60 : role === 'harmony' ? 50 : 30)
      + (item.part.priority ?? 0) / 100;
  };

  // Preserve the clearest melody and rhythm-section identities when an authored
  // sample roster exceeds the requested cap.
  const keptIds = new Set<string>();
  for (const item of [...requestedParts].sort((a, b) => rank(b) - rank(a) || a.partIndex - b.partIndex)) {
    if (keptIds.size >= SAMPLE_ENSEMBLE_MAX) break;
    keptIds.add(item.instrumentId);
  }

  const baseParts = authoredEnsemble.map(part => ({ ...part,
    instrumentIds: part.instrumentIds.filter(instrumentId => keptIds.has(instrumentId)),
  })).filter(part => part.instrumentIds.length);
  const missing = Math.max(0, SAMPLE_ENSEMBLE_MIN - keptIds.size);
  const world = GENRE_WORLDS_BY_ID[genreId];
  const frequency = new Map<string, number>();
  for (const definition of world?.styleDefinitions ?? []) for (const instrumentId of definition.characteristicInstruments ?? []) {
    frequency.set(instrumentId, (frequency.get(instrumentId) ?? 0) + 3);
  }
  for (const pattern of world?.patterns ?? []) for (const instrumentId of pattern.instruments ?? []) {
    frequency.set(instrumentId, (frequency.get(instrumentId) ?? 0) + 1);
  }
  const preference = SAMPLE_SUPPORT_PREFERENCES[genreId] ?? [];
  const preferredRank = new Map(preference.map((instrumentId, index) => [instrumentId, preference.length - index]));
  const fallback = SAMPLE_SUPPORT_FALLBACKS[genreId] ?? [];
  const required = genreId === 'tango' ? ['bandoneon'].filter(instrumentId => !keptIds.has(instrumentId)) : [];
  const candidates = [...new Set([
    ...required,
    ...allAuthoredIds,
    ...(world?.styleDefinitions ?? []).flatMap(definition => definition.characteristicInstruments ?? []),
    ...(world?.patterns ?? []).flatMap(pattern => pattern.instruments ?? []),
    ...preference,
    ...fallback,
  ])].filter(instrumentId => !keptIds.has(instrumentId) && !!INSTRUMENTS_BY_ID[instrumentId])
    .sort((a, b) => (preferredRank.get(b) ?? 0) - (preferredRank.get(a) ?? 0)
      || (frequency.get(b) ?? 0) - (frequency.get(a) ?? 0)
      || a.localeCompare(b));

  const allowedPatternIds = [...new Set([...(style.patterns?.allowed ?? []), ...(world?.patterns ?? []).map(pattern => pattern.id)])];
  const supportIds: string[] = [];
  const supportPatterns: Record<string, string[]> = {};
  const supportParts: EnsembleParts = [];
  // Required identity instruments must survive candidate ranking. Tango's
  // bandoneon is part of the defining palette even when a crossover score's
  // authored roster does not request it; fill any remaining minimum slots
  // from the ranked, local support choices afterward.
  const supportCapacity = Math.max(0, SAMPLE_ENSEMBLE_MAX - keptIds.size);
  const supportCount = Math.min(supportCapacity, Math.max(missing, required.length));
  const selectedSupportIds = [...required, ...candidates.filter(id => !required.includes(id))]
    .slice(0, supportCount);
  for (const instrumentId of selectedSupportIds) {
    const matchingPart = allParts.find(item => item.instrumentId === instrumentId)?.part
      ?? (world?.styleDefinitions ?? []).map(definition => getStyle(definition.id)?.arrangement?.ensemble
        ?.find(part => part.instrumentIds.includes(instrumentId))).find(part => !!part);
    const samplePattern = world?.patterns.find(pattern => pattern.instruments?.includes(instrumentId));
    const role = patternRoleForInstrument(instrumentId, genreId, matchingPart?.role ?? samplePattern?.roles?.[0]);
    const patterns = supportPattern(styleId, genreId, instrumentId, role, allowedPatternIds);
    supportIds.push(instrumentId);
    keptIds.add(instrumentId);
    supportParts.push({ role, instrumentIds: [instrumentId], priority: Math.max(10, (baseParts.at(-1)?.priority ?? 70) - supportParts.length - 2) });
    supportPatterns[instrumentId] = patterns.map(pattern => pattern.id);
    allowedPatternIds.push(...patterns.map(pattern => pattern.id));
  }
  if (keptIds.size < SAMPLE_ENSEMBLE_MIN) {
    throw new Error(`Could not build ${SAMPLE_ENSEMBLE_MIN}-instrument sample ensemble for ${styleId}; got ${keptIds.size}`);
  }
  return {
    ensemble: [...baseParts, ...supportParts], supportIds, keptIds, supportPatterns,
    patternIds: [...new Set(allowedPatternIds)],
  };
}

/** Lightweight catalog inspection for the genre verification report. */
export function auditCatalogSongInstruments(id: string): { genreId: string; styleId: string; instruments: string[]; supportInstruments: string[] } {
  const entry = SONGS_BY_ID[id];
  if (!entry) throw new Error(`Unknown catalog song: ${id}`);
  const style = getStyle(entry.styleId);
  if (!style) throw new Error(`Unknown catalog style: ${entry.styleId}`);
  const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
  if (!recording) throw new Error(`Missing full recording arrangement: ${entry.referenceKey}`);
  const authoredEnsemble = style.arrangement?.ensemble;
  if (!authoredEnsemble?.length) throw new Error(`Catalog style ${entry.styleId} has no ensemble`);
  const authoredIds = new Set(authoredEnsemble.flatMap(part => part.instrumentIds));
  recording.instruments?.forEach(instrumentId => {
    if (!authoredIds.has(instrumentId)) throw new Error(`Recording ${id} names instrument outside its style: ${instrumentId}`);
  });
  const selected = chooseCatalogEnsemble(style, entry.genreId, entry.styleId, recording, authoredEnsemble);
  return { genreId: entry.genreId, styleId: entry.styleId,
    instruments: [...selected.keptIds], supportInstruments: [...selected.supportIds] };
}

export function catalogIdForStyle(styleId: string): string {
  return `${styleId}_song`;
}

/** Build a reference arrangement with local, quiet support parts where needed.
 * Regular style templates remain untouched; adapted support cells are scoped to
 * this sample score and use the existing style's roles, dialects, and mix.
 */
export function createCatalogSong(id: string): Sheet {
  const entry = SONGS_BY_ID[id];
  if (!entry) throw new Error(`Unknown catalog song: ${id}`);
  const style = getStyle(entry.styleId);
  if (!style) throw new Error(`Unknown catalog style: ${entry.styleId}`);
  const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
  if (!recording) throw new Error(`Missing full recording arrangement: ${entry.referenceKey}`);
  const authoredEnsemble = style.arrangement?.ensemble;
  if (!authoredEnsemble?.length) throw new Error(`Catalog style ${entry.styleId} has no ensemble`);
  const styleInstruments = authoredEnsemble.flatMap(part => part.instrumentIds);
  const assertMember = (instrument: string) => {
    if (!styleInstruments.includes(instrument)) throw new Error(`Recording ${id} names instrument outside its style: ${instrument}`);
  };
  recording.instruments?.forEach(assertMember);
  const selected = chooseCatalogEnsemble(style, entry.genreId, entry.styleId, recording, authoredEnsemble);
  const ensemble = selected.ensemble;
  const baseInstrumentIds = [...new Set(ensemble.flatMap(part => part.instrumentIds).filter(instrument => !selected.supportIds.includes(instrument)))];
  const instruments = ensemble.flatMap(part => part.instrumentIds);
  const playableRecording = {
    ...recording,
    lead: recording.lead && selected.keptIds.has(recording.lead) ? recording.lead : undefined,
    sectionInstruments: recording.sectionInstruments
      ? Object.fromEntries(Object.entries(recording.sectionInstruments).map(([kind, ids]) => [kind, ids.filter(instrument => selected.keptIds.has(instrument))]))
      : undefined,
    solos: recording.solos
      ? Object.fromEntries(Object.entries(recording.solos).filter(([, instrument]) => selected.keptIds.has(instrument)))
      : undefined,
    patternAssignments: recording.patternAssignments
      ? Object.fromEntries(Object.entries(recording.patternAssignments).map(([kind, assignments]) => [kind,
        Object.fromEntries(Object.entries(assignments).filter(([instrument]) => selected.keptIds.has(instrument))),
      ]))
      : undefined,
  };
  const assertActiveMember = (instrument: string) => {
    if (!instruments.includes(instrument)) throw new Error(`Recording ${id} features an absent instrument: ${instrument}`);
  };
  if (playableRecording.lead) assertActiveMember(playableRecording.lead);
  const sections = parseRecordingForm(recording.form);
  const form: FormStepTemplate[] = sections.map((part, index) => {
    const sectionBase = playableRecording.sectionInstruments?.[part.kind] ?? baseInstrumentIds;
    const active = [...new Set([...sectionBase, ...(part.energy >= 2 ? selected.supportIds : [])])];
    active.forEach(assertActiveMember);
    const solo = playableRecording.solos?.[part.kind];
    const lead = solo ?? playableRecording.lead;
    for (const feature of [solo, lead]) {
      if (feature && !active.includes(feature)) throw new Error(`Recording ${id} features ${feature} in inactive section ${part.kind}`);
    }
    return {
      key: `recording-${index}`, label: `${String(part.kind).replace(/-/g, ' ')}${sections.filter(p => p.kind === part.kind).length > 1 ? ` ${sections.slice(0,index + 1).filter(p => p.kind === part.kind).length}` : ''}`,
      kind: part.kind, bars: part.bars, intensity: part.intensity,
      instrumentIds: [...active], ...(lead ? { leadInstrumentId: lead } : {}),
      ...(solo ? { soloInstrumentId: solo, soloMode: part.kind === 'trading' ? 'trading' as const : 'accompanied' as const } : {}),
    };
  });
  const energyMappings = Object.fromEntries(form.map((f, index) => [f.key, sections[index].energy]));
  const overrides: Partial<SongStyle> = {
    form: { ...style.form, templates: [{ value: form, w: 1 }] },
    arrangement: { ...style.arrangement, ensemble, energyMappings: { ...style.arrangement?.energyMappings, ...energyMappings } },
  };
  const sectionProgressions = Object.fromEntries(form.map(f => [f.key, recording.chords?.[f.kind] ?? recording.chords?._ ?? []]));
  if (Object.values(sectionProgressions).some(chords => !chords.length)) throw new Error(`Incomplete harmonic plan: ${id}`);
  overrides.harmony = { ...style.harmony, sectionProgressions, progressionTemplates: [{ value: Object.values(sectionProgressions)[0], w: 1 }] };
  overrides.rhythm = { ...style.rhythm, defaultBpm: recording.bpm, tempoRange: [recording.bpm, recording.bpm] };
  const sheet = createSheet({ genreId: entry.genreId, styleId: entry.styleId, overrides });
  const arrangement = { ...sheet.arrangement };
  const lockedPatternAssignments: NonNullable<typeof sheet.lockedPatternAssignments> = {};
  for (const instrumentId of selected.supportIds) {
    const track = sheet.tracks.find(part => part.instrumentId === instrumentId);
    if (!track) throw new Error(`Sample support instrument ${instrumentId} is missing from ${id}`);
    const [corePatternId, responsePatternId] = selected.supportPatterns[instrumentId] ?? [];
    if (!corePatternId || !responsePatternId) throw new Error(`Sample support patterns are incomplete for ${instrumentId} in ${id}`);
    const activeRegions = sheet.regions.filter(region => region.activeInstrumentIds?.includes(instrumentId));
    const featuredRegions = activeRegions.filter(region => /solo|response|interlude|variation|development|climax|drop|mambo|bridge|instrumental|trading|jhala/i.test(region.kind));
    const highEnergyRegions = activeRegions.filter(region => (region.energy ?? 0) >= 4);
    const responseRegion = featuredRegions[0] ?? highEnergyRegions[0] ?? activeRegions[Math.floor(activeRegions.length / 2)];
    for (const region of activeRegions) {
      const useResponse = !!responseRegion && region.id === responseRegion.id && activeRegions.length > 1;
      const patternId = useResponse ? responsePatternId : corePatternId;
      arrangement[region.id] = { ...(arrangement[region.id] ?? {}), [track.id]: patternId };
      (lockedPatternAssignments[region.id] ??= {})[track.id] = patternId;
    }
  }
  for (const region of sheet.regions) {
    const requested = playableRecording.patternAssignments?.[region.kind];
    if (!requested) continue;
    arrangement[region.id] = { ...(arrangement[region.id] ?? {}) };
    lockedPatternAssignments[region.id] ??= {};
    for (const [instrumentId, shortName] of Object.entries(requested)) {
      const track = sheet.tracks.find(part => part.instrumentId === instrumentId);
      if (!track) throw new Error(`Recording ${id} assigns a pattern to absent instrument ${instrumentId}`);
      const patternId = (style.patterns?.allowed ?? []).find(candidateId => {
        const pattern = PATTERNS_BY_ID[candidateId];
        // Keep existing recording assignments valid when a cell gains a concise
        // student-facing label; its source name remains searchable in tags.
        return (pattern?.shortName === shortName || pattern?.family === shortName || pattern?.name.endsWith(`: ${shortName}`)
          || pattern?.tags.includes(shortName))
          && pattern.instruments?.includes(instrumentId);
      });
      if (!patternId) throw new Error(`Recording ${id} cannot resolve ${instrumentId} pattern ${shortName}`);
      arrangement[region.id][track.id] = patternId;
      lockedPatternAssignments[region.id][track.id] = patternId;
    }
  }
  const tracks = sheet.tracks.map(track => selected.supportIds.includes(String(track.instrumentId ?? ''))
    ? { ...track, volume: track.role === 'bass' ? 0.24 : 0.18 }
    : track);
  const arranged = rebuild({ ...sheet, tracks, arrangement, lockedPatternAssignments });
  return { ...arranged, title: entry.styleName, catalogId: id, bpm: recording.bpm };
}
