import { SONGS_BY_ID } from '../../data/songs/catalog';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { PATTERNS_BY_ID } from '../../data/genres';
import { getStyle } from '../style/registry';
import { patternAvailableInSection, createSheet, rebuild, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';

type EnsembleParts = NonNullable<NonNullable<SongStyle['arrangement']>['ensemble']>;

const RECORDING_SECTION_LABELS: Record<string, string> = {
  pulse: 'exposed violin cell',
  'additive-entry': 'cello and marimba enter',
  'phase-overlap': 'marimba phase shift',
  'full-ensemble': 'full ensemble',
  release: 'texture retreat',
  'whistle-return': 'returning sygyt whistle phrase',
  dialogo: 'diálogo',
  introduccion: 'introducción',
  variacion: 'variación',
  'tema-reprise': 'tema de regreso',
  'chan-chan': 'chan-chan close',
  arrastre: 'arrastre pickup',
  'cycle-a': 'trance cycle I',
  'response-a': 'chant response I',
  'cycle-b': 'trance cycle II',
  'final-response': 'final chant response',
  respiro: 'vocal respiro',
  'silencio-answer': 'silencio answer',
  traspie: 'milonga traspié · double-time turn',
  ma: 'ma · breath space',
  parada: 'parada · hit then rest',
  'syncopa-burst': 'síncopa burst · three offbeat attacks',
  corte: 'corte · ensemble cut',
  'tutti-hit': 'tutti hit · ensemble re-entry',
  bloque: 'horn bloque',
  'coro-final': 'final coro',
  'verse-return': 'returning verse',
  gear: 'gear change',
  'stop-time': 'stop-time break',
  'break-hit': 'band hit · one-beat stop',
  'break-rest': 'break rest · full-band silence',
  'trumpet-trading': 'trumpet four-bar trade',
  'tenor-sax-trading': 'tenor sax four-bar trade',
  'irama-change': 'kendang cue · irama shift',
  'irama-II': 'irama II · dense bonang over slow balungan',
  tihai: 'tihai · threefold cadence',
  sam: 'sam · shared landing',
};
const recordingSectionLabel = (kind: string, styleId: string) => {
  const bassLabels: Record<string, Record<string, string>> = {
    'bass-drum-and-bass': { intro: 'DJ break-in', verse: 'rolling two-step', build: 'snare build', drop: 'break + sub drop', breakdown: 'sub-and-air break', outro: 'DJ mix-out' },
    'bass-jungle': { intro: 'break introduction', chant: 'sample call', drop: 'chopped-break return', break: 'break-only passage', outro: 'break mix-out' },
    'bass-liquid': { intro: 'pad-and-break opening', theme: 'liquid melody', build: 'drum rise', drop: 'full liquid groove', breakdown: 'pad passage', outro: 'soft break outro' },
    'bass-neurofunk': { intro: 'tight intro', build: 'pressure roll', drop: 'modulated-bass drop', breakdown: 'bass-space break', variation: 'bass variation', outro: 'dry mix-out' },
    'bass-uk-garage': { intro: 'shuffle intro', A: 'UKG groove A', B: 'bassline exchange B', breakdown: 'vocal-gap break', outro: 'garage mix-out' },
    'bass-2-step': { intro: 'skipping two-step intro', verse: 'ghosted shuffle verse', chorus: 'lifted two-step chorus', breakdown: 'sparse-step break', outro: 'two-step mix-out' },
    'bass-dubstep': { intro: 'sub-led intro', theme: 'dub theme', drop: 'half-time bass drop', variation: 'second bass phrase', breakdown: 'low-end break', outro: 'sub-tail outro' },
    'bass-grime': { intro: 'bare intro', hook: 'square-bass hook', verse: 'open-space verse', break: 'hook dropout', outro: 'grime mix-out' },
    'bass-future-garage': { opening: 'late-step opening', A: 'ghosted texture A', B: 'atmospheric phrase B', breakdown: 'air-and-sub break', dissolve: 'reverb-tail dissolve' },
    'bass-breakbeat': { intro: 'break intro', groove: 'looped-break groove', hook: 'sampled-riff hook', breakdown: 'break dropout', build: 'drum-lift build', outro: 'break mix-out' },
  };
  const bassLabel = bassLabels[styleId]?.[kind];
  if (bassLabel) return bassLabel;
  const metalLabels: Record<string, Record<string, string>> = {
    'metal-heavy-metal': { intro: 'power-chord opening', riff: 'gallop riff', verse: 'galloping verse', chorus: 'twin-lead refrain', bridge: 'lead handoff', solo: 'guitar solo', outro: 'held-chord close' },
    'metal-thrash': { intro: 'tight-chug opening', verse: 'downpicked verse', chorus: 'skank-beat chorus', breakdown: 'half-time break', solo: 'guitar solo', coda: 'hard coda' },
    'metal-doom': { intro: 'low-drone opening', verse: 'slow doom riff', chorus: 'open-chord refrain', bridge: 'sustained bridge', solo: 'guitar solo', outro: 'ring-out' },
    'metal-death': { intro: 'tremolo pickup', riff: 'tremolo riff', verse: 'blast verse', chorus: 'blast refrain', breakdown: 'half-time breakdown', solo: 'guitar solo', coda: 'coda hit' },
    'metal-black': { intro: 'cold tremolo opening', riff: 'continuous tremolo', verse: 'blast verse', chorus: 'high-melody refrain', breakdown: 'atmosphere break', outro: 'fading tremolo' },
    'metal-progressive-metal': { intro: '7/8 opening', riff: '7/8 riff', verse: '7/8 verse', chorus: 'metric refrain', bridge: 'metric shift', build: 'accent build', climax: 'unison peak', outro: '7/8 close' },
    'metal-industrial-metal': { intro: 'machine-count opening', riff: 'machine-chug riff', verse: 'machine verse', chorus: 'machine refrain', breakdown: 'machine breakdown', hit: 'synchronized hit', stop: 'full-bar silence', outro: 'machine close' },
  };
  const metalLabel = metalLabels[styleId]?.[kind];
  if (metalLabel) return metalLabel;
  // "Silencio" has two different, intentional meanings in the sample catalog:
  // Pugliese stops the full tango ensemble, while Alegrías exposes a solo
  // guitar falseta. Keep the traditional term and make the playable event
  // clear in the timeline so students do not mistake one for the other.
  if (styleId === 'jazz-big-band') {
    const label = ({
      piano: 'piano feature',
      sax: 'sax exchange · alto/tenor answers',
      trumpet: 'trumpet feature',
      ensemble: 'full-band return',
      shout: 'shout chorus · full band',
    } as Record<string, string>)[kind];
    if (label) return label;
  }
  if (kind === 'silencio' && styleId === 'tango-pugliese') return 'silencio · ensemble rest';
  if (kind === 'silencio' && styleId === 'flamenco-alegrias') return 'silencio · solo guitar';
  if (kind === 'silencio' && /^(salsa|timba)-/.test(styleId)) return 'silencio · full-band stop';
  if (kind === 'silence' && styleId === 'japanese-taiko') return 'opening silence · ensemble rest';
  if (kind === 'break' && styleId === 'japanese-taiko') return 'ensemble break · full rest';
  if (kind === 'silence' && styleId === 'chinese-guqin') return 'qin resonance · sparse phrase';
  if (kind === 'break' && styleId === 'brazilian-samba-reggae') return 'surdo-only break';
  if (kind === 'angsel' && styleId === 'gamelan-balinese-gong-kebyar') return 'angsel · syncopated ensemble stop';
  if (kind === 'suwuk' && styleId === 'gamelan-javanese') return 'suwuk · final gong';
  return RECORDING_SECTION_LABELS[kind] ?? kind.replace(/-/g, ' ');
};

function chooseCatalogEnsemble(
  styleId: string,
  recording: typeof RECORDING_ARRANGEMENTS[string],
  authoredEnsemble: EnsembleParts,
): { ensemble: EnsembleParts; keptIds: Set<string> } {
  const requestedIds = recording.instruments
    ? new Set(recording.instruments)
    : new Set(authoredEnsemble.flatMap(part => part.instrumentIds));
  const voiceIsAssigned = recording.vocalSections?.length
    || recording.lead === 'voice'
    || recording.instruments?.includes('voice')
    || Object.values(recording.sectionInstruments ?? {}).some(instruments => instruments.includes('voice'))
    || Object.values(recording.solos ?? {}).includes('voice')
    || Object.values(recording.patternAssignments ?? {}).some(assignments => Object.keys(assignments).some(target => target === 'voice' || target.startsWith('voice:')))
    || Object.values(recording.lockPatternAssignments ?? {}).some(assignments => assignments.some(target => target === 'voice' || target.startsWith('voice:')));
  // Voice is part of many style palettes, but the MIDI voice patch is a
  // sustained-vowel approximation. Do not turn palette availability into an
  // automatic vocal arrangement for every sample.
  const hasNonVocalPart = authoredEnsemble.some(part => part.instrumentIds.some(instrumentId => instrumentId !== 'voice'));
  if (!recording.instruments && !voiceIsAssigned && hasNonVocalPart) requestedIds.delete('voice');
  const ensemble = authoredEnsemble.map(part => ({
    ...part,
    instrumentIds: part.instrumentIds.filter(instrumentId => requestedIds.has(instrumentId)),
  })).filter(part => part.instrumentIds.length);
  const keptIds = new Set(ensemble.flatMap(part => part.instrumentIds));
  if (!keptIds.size) throw new Error(`Recording ${styleId} has no authored instruments`);
  return { ensemble, keptIds };
}

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
  const selected = chooseCatalogEnsemble(entry.styleId, recording, authoredEnsemble);
  return { genreId: entry.genreId, styleId: entry.styleId,
    instruments: [...selected.keptIds], supportInstruments: [] };
}

export function catalogIdForStyle(styleId: string): string {
  return `${styleId}_song`;
}

/** Build a reference arrangement from its selected, style-authored roster.
 * Short lineups remain short, and every featured part belongs to that roster.
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
  const selected = chooseCatalogEnsemble(entry.styleId, recording, authoredEnsemble);
  const ensemble = selected.ensemble;
  const baseInstrumentIds = [...new Set(ensemble.flatMap(part => part.instrumentIds))];
  const instruments = ensemble.flatMap(part => part.instrumentIds);
  const playableRecording = {
    ...recording,
    lead: recording.lead && selected.keptIds.has(recording.lead) ? recording.lead : undefined,
    sectionLeads: recording.sectionLeads
      ? Object.fromEntries(Object.entries(recording.sectionLeads).filter(([, instrument]) => selected.keptIds.has(instrument)))
      : undefined,
    sectionInstruments: recording.sectionInstruments
      ? Object.fromEntries(Object.entries(recording.sectionInstruments).map(([kind, ids]) => [kind, ids.filter(instrument => selected.keptIds.has(instrument))]))
      : undefined,
    solos: recording.solos
      ? Object.fromEntries(Object.entries(recording.solos).filter(([, instrument]) => selected.keptIds.has(instrument)))
      : undefined,
    patternAssignments: recording.patternAssignments
      ? Object.fromEntries(Object.entries(recording.patternAssignments).map(([kind, assignments]) => [kind,
        Object.fromEntries(Object.entries(assignments).filter(([target]) => selected.keptIds.has(target.split(':', 1)[0]))),
      ]))
      : undefined,
    lockPatternAssignments: recording.lockPatternAssignments
      ? Object.fromEntries(Object.entries(recording.lockPatternAssignments).map(([kind, assignments]) => [kind,
        assignments.filter(target => selected.keptIds.has(target.split(':', 1)[0])),
      ]))
      : undefined,
  };
  const assertActiveMember = (instrument: string) => {
    if (!instruments.includes(instrument)) throw new Error(`Recording ${id} features an absent instrument: ${instrument}`);
  };
  if (playableRecording.lead) assertActiveMember(playableRecording.lead);
  const sections = parseRecordingForm(recording.form);
  const vocalSections = playableRecording.vocalSections ? new Set(playableRecording.vocalSections) : undefined;
  const formSectionOccurrences = new Map<string, number>();
  const form: FormStepTemplate[] = sections.map((part, index) => {
    const occurrence = (formSectionOccurrences.get(part.kind) ?? 0) + 1;
    formSectionOccurrences.set(part.kind, occurrence);
    const occurrenceKey = `${part.kind}#${occurrence}`;
    const sectionBase = playableRecording.sectionInstruments?.[occurrenceKey]
      ?? playableRecording.sectionInstruments?.[part.kind] ?? baseInstrumentIds;
    const activeSet = new Set(sectionBase);
    if (vocalSections) {
      if (instruments.includes('voice') && vocalSections.has(part.kind)) activeSet.add('voice');
      else activeSet.delete('voice');
    }
    const active = [...activeSet];
    active.forEach(assertActiveMember);
    const solo = playableRecording.solos?.[occurrenceKey] ?? playableRecording.solos?.[part.kind];
    const soloMode = playableRecording.soloModes?.[occurrenceKey]
      ?? playableRecording.soloModes?.[part.kind]
      ?? (part.kind.includes('trading') ? 'trading' as const : 'accompanied' as const);
    const sectionLead = playableRecording.sectionLeads?.[occurrenceKey] ?? playableRecording.sectionLeads?.[part.kind];
    const lead = solo ?? sectionLead ?? playableRecording.lead;
    for (const feature of [solo, lead]) {
      if (feature && !active.includes(feature)) throw new Error(`Recording ${id} features ${feature} in inactive section ${part.kind}`);
    }
    return {
      key: `recording-${index}`, label: `${recordingSectionLabel(String(part.kind), entry.styleId)}${sections.filter(p => p.kind === part.kind).length > 1 ? ` ${sections.slice(0,index + 1).filter(p => p.kind === part.kind).length}` : ''}`,
      kind: part.kind, bars: part.bars, intensity: part.intensity,
      instrumentIds: [...active], ...(lead ? { leadInstrumentId: lead } : {}),
      ...(recording.sectionBpm?.[part.kind] ? { bpm: recording.sectionBpm[part.kind] } : {}),
      ...(solo ? { soloInstrumentId: solo, soloMode } : {}),
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
  // A recording arrangement below has its own explicit opening cells, phrase
  // tags, and return variations. Keep generic starter section selection out of
  // that source-authored catalog path.
  const sheet = createSheet({ genreId: entry.genreId, styleId: entry.styleId, overrides }, undefined, undefined, undefined, false);
  const samplePatternIds = Object.values(PATTERNS_BY_ID)
    .filter(pattern => pattern.styleIds?.includes(style.id))
    .map(pattern => pattern.id);
  const eligibleStylePatterns = [...new Set([...(style.patterns?.allowed ?? []), ...samplePatternIds])]
    .map(patternId => PATTERNS_BY_ID[patternId])
    .filter((pattern): pattern is NonNullable<typeof pattern> => !!pattern);
  const arrangement = { ...sheet.arrangement };
  const lockedPatternAssignments: NonNullable<typeof sheet.lockedPatternAssignments> = {};
  const sectionOccurrences = new Map<string, number>();
  const sectionOccurrenceKeys = new Map<string, string>();
  for (const region of sheet.regions) {
    const occurrence = (sectionOccurrences.get(region.kind) ?? 0) + 1;
    sectionOccurrences.set(region.kind, occurrence);
    sectionOccurrenceKeys.set(region.id, `${region.kind}#${occurrence}`);
  }
  const patternAssignmentsForRegion = (region: Sheet['regions'][number]) => ({
    ...(playableRecording.patternAssignments?.[region.kind] ?? {}),
    ...(playableRecording.patternAssignments?.[sectionOccurrenceKeys.get(region.id) ?? ''] ?? {}),
  });
  const lockTargetsForRegion = (region: Sheet['regions'][number]) => [...new Set([
    ...(playableRecording.lockPatternAssignments?.[region.kind] ?? []),
    ...(playableRecording.lockPatternAssignments?.[sectionOccurrenceKeys.get(region.id) ?? ''] ?? []),
  ])];
  for (const region of sheet.regions) {
    const requested = patternAssignmentsForRegion(region);
    if (!Object.keys(requested).length) continue;
    arrangement[region.id] = { ...(arrangement[region.id] ?? {}) };
    lockedPatternAssignments[region.id] ??= {};
    for (const [target, shortName] of Object.entries(requested)) {
      const roleSeparator = target.lastIndexOf(':');
      const instrumentId = roleSeparator > 0 ? target.slice(0, roleSeparator) : target;
      const role = roleSeparator > 0 ? target.slice(roleSeparator + 1) : undefined;
      const track = sheet.tracks.find(part => part.instrumentId === instrumentId && (!role || part.role === role));
      if (!track) throw new Error(`Recording ${id} assigns a pattern to absent instrument target ${target}`);
      // Kind-level pattern assignments can flow to an occurrence whose
      // section personnel intentionally removes that instrument. Keep the
      // section's silent arrangement cell instead of restoring a hidden part.
      if (region.activeInstrumentIds && !region.activeInstrumentIds.includes(instrumentId)) continue;
      const key = shortName.toLocaleLowerCase();
      // Explicit sample arrangements may retain a stable, source-authored cell
      // whose duplicate practice alias is hidden from free pattern choices.
      // Keep resolving those exact written assignments while the phrase picker
      // and improvising engine use only the enabled pattern set.
      const eligiblePatterns = eligibleStylePatterns
        .filter(pattern => pattern.instruments?.includes(instrumentId) === true
          && (!role || pattern.roles.includes(role)));
      // Prefer the visible teaching label over descriptive source tags. Tags
      // often mention a related phrase or instrument and must not redirect an
      // exact closing-cell assignment to a generic source cell. A trailing
      // source-label match is retained for older recording assignments after
      // generic visible names acquire their style cue.
      let patternId = eligiblePatterns.find(pattern => pattern.shortName?.toLocaleLowerCase() === key)?.id
        ?? eligiblePatterns.find(pattern => pattern.name.toLocaleLowerCase().endsWith(`: ${key}`))?.id
        ?? eligiblePatterns.find(pattern => pattern.tags.some(tag => tag.toLocaleLowerCase() === key || tag.toLocaleLowerCase().endsWith(` ${key}`)))?.id
        ?? eligiblePatterns.find(pattern => pattern.family?.toLocaleLowerCase() === key)?.id
        ?? eligiblePatterns.find(pattern => pattern.tags.some(tag => tag.toLocaleLowerCase() === key))?.id;
      if (!patternId) throw new Error(`Recording ${id} cannot resolve ${instrumentId} pattern ${shortName}`);
      const requestedPattern = PATTERNS_BY_ID[patternId];
      if ((requestedPattern?.pedagogicalStudy === 'reduction' || requestedPattern?.pedagogicalStudy === 'technique')
        && requestedPattern.pedagogicalSourcePatternId) {
        const sourcePattern = eligiblePatterns.find(pattern => pattern.id === requestedPattern.pedagogicalSourcePatternId
          && pattern.instruments?.includes(instrumentId) === true
          && (!role || pattern.roles.includes(role)));
        if (!sourcePattern) throw new Error(`Recording ${id} maps practice-only ${shortName} to a missing full style source for ${instrumentId}`);
        const occurrence = Number(sectionOccurrenceKeys.get(region.id)?.split('#').at(-1) ?? 1);
        const developedSection = occurrence > 1 || (region.energy ?? 3) >= 4;
        const phraseVariation = developedSection
          ? eligiblePatterns.find(pattern => pattern.pedagogicalStudy === 'variation' && pattern.arrangementVariation === true
            && pattern.instruments?.includes(instrumentId) === true
            && pattern.roles.includes(track.role)
            && patternAvailableInSection(pattern, region.kind))
          : undefined;
        patternId = phraseVariation?.id ?? sourcePattern.id;
      } else if (requestedPattern?.provenance?.startsWith('Generic phrase-close')) {
        throw new Error(`Recording ${id} assigns a neutral timing drill (${shortName}) as a style cadence for ${instrumentId}`);
      }
      arrangement[region.id][track.id] = patternId;
      const basePattern = PATTERNS_BY_ID[patternId];
      const hasPhraseVariation = (style.patterns?.allowed ?? []).some(candidateId => {
        const candidate = PATTERNS_BY_ID[candidateId];
        return candidate?.arrangementVariation === true
          && candidate.category === basePattern?.category
          && candidate.roles.some(role => basePattern.roles.includes(role))
          && candidate.instruments?.includes(instrumentId)
          && patternAvailableInSection(candidate, region.kind);
      });
      // The explicit cell remains the section's opening pattern. Do not freeze
      // it for the whole form when this style has a compatible phrase lesson.
      const lockTargets = lockTargetsForRegion(region);
      if (lockTargets.includes(instrumentId) || lockTargets.includes(target) || !hasPhraseVariation) {
        lockedPatternAssignments[region.id][track.id] = patternId;
      }
    }
  }
  // A general song sheet can explore role-crossing source material, but a
  // written sample arrangement should not quietly put a lead phrase on a
  // harmony track (or a guitar cell on a charango). Repair only mismatched
  // style-authored opening cells here; explicit assignments already resolve
  // against the target instrument and role above, and fusion remains free to
  // borrow material in the interactive engine.
  for (const region of sheet.regions) {
    const cells = arrangement[region.id];
    if (!cells) continue;
    for (const track of sheet.tracks) {
      const instrumentId = track.instrumentId;
      if (!instrumentId || !region.activeInstrumentIds?.includes(instrumentId)) continue;
      const currentId = cells[track.id];
      const current = currentId ? PATTERNS_BY_ID[currentId] : undefined;
      if (!current || current.sourceLevel !== 'style-authored' || current.canCrossRole) continue;
      const instrumentMismatch = !!current.instruments?.length && !current.instruments.includes(instrumentId);
      const roleMismatch = !!current.roles?.length && !current.roles.includes(track.role);
      if (!instrumentMismatch && !roleMismatch) continue;
      const nativeCandidates = eligibleStylePatterns.filter(pattern => pattern.sourceLevel === 'style-authored'
        && pattern.styleIds?.includes(style.id) === true
        && pattern.instruments?.includes(instrumentId) === true
        && pattern.roles.includes(track.role)
        && !pattern.pedagogicalStudy
        && !pattern.pedagogicalSourcePatternId
        && patternAvailableInSection(pattern, region.kind));
      const replacement = nativeCandidates.sort((a, b) => {
        const fit = (pattern: typeof a) => (pattern.family === current.family ? 16 : 0)
          + (pattern.category === current.category ? 12 : 0)
          + (pattern.sectionUsage?.some(section => section === region.kind) ? 6 : 0)
          + (!pattern.arrangementVariation ? 4 : 0);
        return fit(b) - fit(a) || a.id.localeCompare(b.id);
      })[0];
      if (replacement) cells[track.id] = replacement.id;
    }
  }
  // Give returning form sections a written development cell when the style
  // already teaches one for that exact instrument and role. Preserve all
  // explicitly assigned/locked recording cells; this only changes repeats
  // that would otherwise copy the same opening cell verbatim.
  const firstCellBySection = new Map<string, string>();
  const sectionOccurrence = new Map<string, number>();
  for (const region of sheet.regions) {
    for (const track of sheet.tracks) {
      const instrumentId = track.instrumentId;
      if (!instrumentId || !region.activeInstrumentIds?.includes(instrumentId)) continue;
      const basePatternId = arrangement[region.id]?.[track.id];
      if (!basePatternId || basePatternId === 'silent') continue;
      const sectionTrackKey = `${region.kind}:${track.id}`;
      const occurrence = sectionOccurrence.get(sectionTrackKey) ?? 0;
      const explicitTarget = [instrumentId, `${instrumentId}:${track.role}`];
      const regionAssignments = patternAssignmentsForRegion(region);
      const explicitlyAssigned = explicitTarget.some(target => Object.hasOwn(regionAssignments, target));
      const explicitlyLocked = lockTargetsForRegion(region).some(target => explicitTarget.includes(target));
      const originalPatternId = firstCellBySection.get(sectionTrackKey);
      if (occurrence > 0 && basePatternId === originalPatternId && !explicitlyAssigned && !explicitlyLocked) {
        const variations = (style.patterns?.allowed ?? [])
          .map(candidateId => PATTERNS_BY_ID[candidateId])
          .filter((pattern): pattern is NonNullable<typeof pattern> => !!pattern
            && pattern.id !== basePatternId
            && pattern.enabled !== false
            && pattern.arrangementVariation === true
            && pattern.sourceLevel === 'style-authored'
            && pattern.styleIds?.includes(style.id) === true
            && pattern.instruments?.includes(instrumentId) === true
            && pattern.roles.includes(track.role)
            && patternAvailableInSection(pattern, region.kind));
        if (variations.length) {
          const variation = variations[(occurrence - 1) % variations.length];
          arrangement[region.id][track.id] = variation.id;
        }
      }
      if (occurrence === 0) firstCellBySection.set(sectionTrackKey, basePatternId);
      sectionOccurrence.set(sectionTrackKey, occurrence + 1);
    }
  }
  const arranged = rebuild({ ...sheet, arrangement, lockedPatternAssignments });
  return { ...arranged, title: entry.styleName, catalogId: id, bpm: recording.bpm };
}
