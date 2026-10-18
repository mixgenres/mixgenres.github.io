import { SONGS_BY_ID } from '../../data/songs/catalog';
import { CATALOG_ROSTER_ANCHOR_SECTIONS, CATALOG_ROSTER_EXTENSIONS, CATALOG_ROSTER_EXCLUSIONS } from '../../data/songs/catalogEnsembles';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { GENRE_WORLDS_BY_ID, PATTERNS_BY_ID, PATTERNS_BY_WORLD } from '../../data/genres';
import { INSTRUMENTS_BY_ID, WORLD_INSTRUMENT_HINTS, instrumentPatternKinds } from '../../engine/lookup/instruments';
import { getStyle } from '../style/registry';
import { canonicalPatternSection, patternAvailableInSection, createSheet, rebuild, roleForInstrument, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';

type EnsembleParts = NonNullable<NonNullable<SongStyle['arrangement']>['ensemble']>;
const MIN_CATALOG_INSTRUMENTS = 8;

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
  genreId: string,
  recording: typeof RECORDING_ARRANGEMENTS[string],
  authoredEnsemble: EnsembleParts,
): { ensemble: EnsembleParts; keptIds: Set<string>; supportIds: Set<string> } {
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

  // A sample song is also the student's first ensemble study. Keep the
  // recording's named players first, then expose enough of the genre-authored
  // palette to reach eight distinct playable instruments. The additions are
  // explicit world colors, never an unrelated global or silent fallback.
  const palette = [
    ...(GENRE_WORLDS_BY_ID[genreId]?.instruments ?? []),
    ...(WORLD_INSTRUMENT_HINTS[genreId] ?? []),
    ...(CATALOG_ROSTER_EXTENSIONS[genreId] ?? []),
    ...(CATALOG_ROSTER_EXTENSIONS[styleId] ?? []),
  ];
  const supportIds = new Set<string>();
  // A few worlds have production companions that are appropriate only for
  // named crossover styles. Merge the world rule with the exact style rule so
  // a traditional study cannot reach its teaching roster through an unrelated
  // patch simply because the world also contains an electronic variant.
  const excluded = new Set([
    ...(CATALOG_ROSTER_EXCLUSIONS[genreId] ?? []),
    ...(CATALOG_ROSTER_EXCLUSIONS[styleId] ?? []),
  ]);
  for (const instrumentId of palette) {
    if (requestedIds.size >= MIN_CATALOG_INSTRUMENTS) break;
    if (!INSTRUMENTS_BY_ID[instrumentId] || requestedIds.has(instrumentId)) continue;
    if (excluded.has(instrumentId)) continue;
    // Vocal colors enter only when the recording arrangement explicitly
    // assigns a singer/choir. This keeps instrumental studies from inheriting
    // the sustained-vowel layer while still meeting the full ensemble target.
    if (!voiceIsAssigned && (instrumentId === 'voice' || instrumentId === 'choir')) continue;
    // Pakhawaj has its own notation vocabulary; do not adapt tabla slap cells
    // into a pakhawaj part unless the style authored that instrument directly.
    if (instrumentId === 'pakhawaj' && !authoredEnsemble.some(part => part.instrumentIds.includes('pakhawaj'))) continue;
    requestedIds.add(instrumentId);
    supportIds.add(instrumentId);
  }
  if (requestedIds.size < MIN_CATALOG_INSTRUMENTS) {
    throw new Error(`Catalog ${styleId} has only ${requestedIds.size} authored palette instruments; add explicit roster extensions before building a sample`);
  }

  const authoredRoles = new Set(authoredEnsemble.map(part => String(part.role)));
  const genrePatterns = PATTERNS_BY_WORLD[genreId] ?? [];
  const roleForSupportInstrument = (instrumentId: string): string => {
    const naturalRole = roleForInstrument(instrumentId);
    // The exact style owns this player's job. A sibling's bass, lead or
    // percussion assignment must not override a local written part.
    const localRoles = [...new Set(genrePatterns.filter(pattern => pattern.sourceLevel === 'style-authored'
      && pattern.styleIds?.includes(styleId) && pattern.instruments?.includes(instrumentId))
      .flatMap(pattern => pattern.roles))];
    const production = ['synth', 'sampler', 'turntable'].includes(instrumentId);
    if (localRoles.length) {
      const order = production ? ['percussion', 'texture', 'harmony', 'bass', 'lead']
        : [naturalRole, 'bass', 'harmony', 'percussion', 'texture', 'lead'];
      return order.find(role => localRoles.includes(role)) ?? localRoles[0];
    }
    if (production) {
      const supportRole = (instrumentId === 'synth'
        ? ['texture', 'harmony', 'bass', 'percussion'] : ['percussion', 'texture', 'harmony'])
        .find(role => authoredRoles.has(role));
      return supportRole ?? (instrumentId === 'synth' ? 'texture' : 'percussion');
    }
    const genreRoles = [...new Set(genrePatterns
      .filter(pattern => pattern.sourceLevel === 'style-authored' && pattern.instruments?.includes(instrumentId))
      .flatMap(pattern => pattern.roles))];
    // A concrete instrument's authored job wins over the broad catalog role,
    // including production colors such as synth, sampler, and turntable. This
    // keeps a style-owned texture/percussion cell attached to its player
    // instead of relabeling the track as harmony and borrowing another part.
    if (genreRoles.length && !genreRoles.includes(naturalRole)) return genreRoles[0];
    const genreRole = ['bass', 'harmony', 'percussion', 'texture', 'lead']
      .find(role => genreRoles.includes(role));
    if (genreRole && (naturalRole === 'lead' || naturalRole === 'voice' || !authoredRoles.has(naturalRole))) {
      return genreRole;
    }
    if (authoredRoles.has(naturalRole)) return naturalRole;
    // A sparse solo style may expose only a lead role even though its genre
    // has an authored cell for an added support color. Preserve that natural
    // job instead of labeling percussion, bass, or harmony as foreground lead
    // merely to reach the teaching roster target.
    if (genrePatterns.some(pattern => pattern.sourceLevel === 'style-authored'
      && pattern.instruments?.includes(instrumentId)
      && pattern.roles.includes(naturalRole))) return naturalRole;
    // Do not turn an added rhythmic or harmonic color into a foreground lead
    // merely because a sparse source style declares only its solo voice. The
    // receiving part role is still meaningful to pattern selection and mix
    // staging, even when the style's original ensemble did not need that job.
    if (naturalRole === 'percussion' || naturalRole === 'bass' || naturalRole === 'harmony') {
      return naturalRole;
    }
    // A sung or electronic single-line part can follow the style's lead role;
    // a style with a texture role should keep added colors in that texture bed.
    if (naturalRole === 'voice' && authoredRoles.has('lead')) return 'lead';
    if (naturalRole === 'lead' && authoredRoles.has('texture')) return 'texture';
    if (naturalRole === 'harmony' && authoredRoles.has('texture')) return 'texture';
    const fallbackOrder = naturalRole === 'bass'
      ? ['bass', 'harmony', 'texture', 'percussion', 'lead']
      : naturalRole === 'percussion'
        ? ['percussion', 'bass', 'harmony', 'texture', 'lead']
        : naturalRole === 'harmony'
          ? ['harmony', 'texture', 'bass', 'lead', 'percussion']
          : ['lead', 'texture', 'harmony', 'bass', 'percussion'];
    return fallbackOrder.find(role => authoredRoles.has(role)) ?? naturalRole;
  };
  const expandedAuthoredEnsemble: EnsembleParts = [...authoredEnsemble];
  let supportPriority = Math.min(...authoredEnsemble.map(part => part.priority ?? 0)) - 1;
  for (const instrumentId of supportIds) {
    expandedAuthoredEnsemble.push({ role: roleForSupportInstrument(instrumentId), instrumentIds: [instrumentId], priority: supportPriority-- });
  }
  const ensemble = expandedAuthoredEnsemble.map(part => ({
    ...part,
    instrumentIds: part.instrumentIds.filter(instrumentId => requestedIds.has(instrumentId)),
  })).filter(part => part.instrumentIds.length);
  const keptIds = new Set(ensemble.flatMap(part => part.instrumentIds));
  if (!keptIds.size) throw new Error(`Recording ${styleId} has no authored instruments`);
  return { ensemble, keptIds, supportIds };
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
  const selected = chooseCatalogEnsemble(entry.styleId, entry.genreId, recording, authoredEnsemble);
  return { genreId: entry.genreId, styleId: entry.styleId,
    instruments: [...selected.keptIds], supportInstruments: [...selected.supportIds] };
}

export function catalogIdForStyle(styleId: string): string {
  return `${styleId}_song`;
}

/** Build a reference arrangement from its selected, style-authored roster.
 * The visible teaching roster always reaches eight distinct players, while
 * each reference section keeps its authored active lineup and breathing.
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
  const selected = chooseCatalogEnsemble(entry.styleId, entry.genreId, recording, authoredEnsemble);
  const ensemble = selected.ensemble;
  // The catalog sample is an eight-part teaching ensemble. Support players
  // enter through the full-roster anchor below, while a recording can still
  // author reduced lineups and true rests through `sectionInstruments`.
  const baseInstrumentIds = [...new Set(ensemble.flatMap(part => part.instrumentIds)
    .filter(instrumentId => !selected.supportIds.has(instrumentId)))];
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
  let form: FormStepTemplate[] = sections.map((part, index) => {
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
  // Some authored recording forms enumerate a reduced lineup for every
  // section. Keep those reductions and true rests, but make sure the sample
  // still demonstrates every player in its complete teaching roster at least
  // once. Put missing colors into the strongest non-solo section so they are
  // heard as a coherent ensemble entrance rather than leaking into every
  // sparse phrase.
  const activeRoster = new Set(form.flatMap(step => step.instrumentIds ?? []));
  const missingRoster = instruments.filter(instrumentId => !activeRoster.has(instrumentId));
  if (missingRoster.length && recording.activateTeachingSupport !== false) {
    const anchors = form
      .map((step, index) => ({ step, index }))
      .filter(({ step }) => (step.instrumentIds?.length ?? 0) > 0 && !step.soloInstrumentId)
      // Keep a named peak or climax intact when the recording already has a
      // carefully authored reduced entrance. The added roster first arrives
      // in the strongest non-peak ensemble passage.
      .sort((a, b) => {
        const rank = (index: number) => (sections[index]?.energy ?? 0) === 5 ? -1 : sections[index]?.energy ?? 0;
        return rank(b.index) - rank(a.index);
      });
    const namedAnchors = new Set(CATALOG_ROSTER_ANCHOR_SECTIONS[entry.styleId] ?? []);
    const reducedOrCue = new Set(['opening', 'intro', 'silence', 'ma', 'break', 'breakdown', 'buka', 'angsel', 'suwuk', 'release', 'outro', 'coda']);
    const preferredAnchors = namedAnchors.size
      ? anchors.filter(({ step }) => namedAnchors.has(String(step.kind)))
      : anchors.filter(({ step }) => !reducedOrCue.has(String(step.kind)));
    const anchor = (preferredAnchors[0] ?? anchors[0]) ?? form.map((step, index) => ({ step, index }))
      .find(({ step }) => (step.instrumentIds?.length ?? 0) > 0);
    if (anchor) {
      const added = [...new Set([...(anchor.step.instrumentIds ?? []), ...missingRoster])];
      form = form.map((step, index) => index === anchor.index ? { ...step, instrumentIds: added } : step);
      // Bass-focused styles teach the added rhythm-section colors through a
      // return passage as well as the first full entrance, so those parts get
      // a real cell development instead of appearing for one isolated bar.
      if (entry.genreId === 'bass' && anchors[1]) {
        const second = anchors[1];
        form = form.map((step, index) => index === second.index
          ? { ...step, instrumentIds: [...new Set([...(step.instrumentIds ?? []), ...missingRoster])] }
          : step);
      }
    }
  }
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
  let sheet = createSheet({ genreId: entry.genreId, styleId: entry.styleId, overrides }, undefined, undefined, undefined, false);
  const samplePatternIds = Object.values(PATTERNS_BY_ID)
    .filter(pattern => pattern.styleIds?.includes(style.id))
    .map(pattern => pattern.id);
  const eligibleStylePatterns = [...new Set([...(style.patterns?.allowed ?? []), ...samplePatternIds])]
    .map(patternId => PATTERNS_BY_ID[patternId])
    .filter((pattern): pattern is NonNullable<typeof pattern> => !!pattern);
  const eligibleGenreSupportPatterns = (PATTERNS_BY_WORLD[entry.genreId] ?? [])
    .filter(pattern => pattern.sourceLevel === 'style-authored');
  // Explicit vocal/feature sections may name a player whose style cell was
  // authored for a neighboring instrument (for example a sung crossover over
  // a synth lead). Repair only that missing cell with the closest local role
  // phrase; never let an active track reach interpretation without a pattern.
  const repairedArrangement = { ...sheet.arrangement };
  const supportOccurrences = new Map<string, number>();
  const supportPatternIds = new Map<string, string>();
  for (const region of sheet.regions) {
    const cells = { ...(repairedArrangement[region.id] ?? {}) };
    for (const track of sheet.tracks) {
      if (!region.activeInstrumentIds?.includes(track.instrumentId ?? '')) continue;
      const supportTrack = selected.supportIds.has(track.instrumentId ?? '');
      if (cells[track.id] && cells[track.id] !== 'silent' && !supportTrack) continue;
      const instrumentId = track.instrumentId ?? '';
      // Keep the selected style's cells first. A same-genre cell is only used
      // for an added support color that has no local authored cell, and still
      // has to match the receiving instrument and natural role.
      const patternPool = [...eligibleStylePatterns,
        ...(supportTrack
          ? eligibleGenreSupportPatterns.filter(pattern =>
            pattern.instruments?.includes(instrumentId)
            || pattern.roles.includes(track.role)
            || pattern.compatibleRoles?.includes(track.role))
          : [])]
        .filter((pattern, index, all) => all.findIndex(candidate => candidate.id === pattern.id) === index);
      const patternRole = track.role === 'voice' ? 'lead' : track.role;
      const supportOccurrence = supportTrack
        ? (supportOccurrences.get(track.id) ?? 0)
        : 0;
      const roleCandidates = patternPool.filter(pattern => {
        if (pattern.sourceLevel !== 'style-authored') return false;
        if (!pattern.roles.includes(track.role) && !pattern.roles.includes(patternRole)) return false;
        return patternAvailableInSection(pattern, region.kind);
      });
      // Support roster colors may not have a dedicated cell in a very small
      // style (for example a drum color added to a guqin study). Adapt the
      // style's own authored phrase to that instrument, using the same
      // source-material adaptation as makeStarterSheet. Never synthesize a
      // neutral or generic groove for this path.
      const authoredCandidates = patternPool.filter(pattern =>
        pattern.sourceLevel === 'style-authored');
      const sectionFallback = authoredCandidates.filter(pattern => patternAvailableInSection(pattern, region.kind));
      const candidates = roleCandidates.length ? roleCandidates
        : (sectionFallback.length ? sectionFallback : authoredCandidates);
      // When a style writes a phrase for this exact section, keep that local
      // cell ahead of broad phrase variations. A sectionless variation can
      // still fill a genuinely missing part, but it must not displace a
      // written verse/chorus/coda phrase for the same instrument and role.
      const section = canonicalPatternSection(region.kind);
      const sectionCandidates = section
        ? candidates.filter(pattern => pattern.sectionUsage?.some(value => canonicalPatternSection(value) === section))
        : [];
      const preferredCandidates = sectionCandidates.length ? sectionCandidates : candidates;
      const instrumentKinds = new Set(instrumentPatternKinds(instrumentId));
      const roleMatch = (pattern: typeof candidates[number]) => pattern.roles.includes(track.role) || pattern.roles.includes(patternRole);
      const instrumentMatch = (pattern: typeof candidates[number]) => {
        const targets = [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])].map(String);
        return targets.some(target => target === instrumentId || instrumentKinds.has(target));
      };
      const exact = preferredCandidates.find(pattern => pattern.instruments?.includes(instrumentId));
      const compatible = preferredCandidates.find(pattern => instrumentMatch(pattern));
      // A section may have no local cell for a support color, but another
      // section can still carry a dedicated phrase for that exact player.
      // Prefer that authored cell over borrowing a vocal, keyboard, or kit
      // line merely because it shares the same broad role.
      const authoredExact = supportTrack
        ? authoredCandidates.find(pattern => roleMatch(pattern) && pattern.instruments?.includes(instrumentId))
        : undefined;
      const authoredCompatible = supportTrack
        ? authoredCandidates.find(pattern => roleMatch(pattern) && instrumentMatch(pattern))
        : undefined;
      const authoredRole = supportTrack
        ? authoredCandidates.find(pattern => roleMatch(pattern))
        : undefined;
      // When an added support player returns, prefer a developed cell written
      // for that exact instrument before accepting a section-local phrase for
      // a neighboring player with the same broad role. This matters most for
      // sung crossover sections: a voice must receive the world/style's vocal
      // variation, rather than inheriting the host synth's lead contour.
      const exactVariation = supportTrack && supportOccurrence > 0
        ? preferredCandidates.find(pattern => pattern.arrangementVariation === true
          && pattern.id !== supportPatternIds.get(track.id)
          && roleMatch(pattern)
          && pattern.instruments?.includes(instrumentId))
          ?? authoredCandidates.find(pattern => pattern.arrangementVariation === true
            && pattern.id !== supportPatternIds.get(track.id)
            && roleMatch(pattern)
            && pattern.instruments?.includes(instrumentId))
        : undefined;
      const variation = supportTrack && supportOccurrence > 0
        ? ([...preferredCandidates].filter(pattern => pattern.arrangementVariation === true
            && pattern.id !== supportPatternIds.get(track.id)
            && roleMatch(pattern))
            .sort((a, b) => Number(instrumentMatch(b)) - Number(instrumentMatch(a)))[0]
            // If the style wrote only one section-scoped variation, let a
            // sectionless authored support cell provide the return phrase.
            // This keeps repeated added players from sounding like a frozen
            // loop without importing a phrase from another style.
            ?? candidates.find(pattern => !pattern.sectionUsage?.length
              && pattern.id !== supportPatternIds.get(track.id)
              && roleMatch(pattern)))
        : undefined;
      const roleCompatible = preferredCandidates.find(pattern => roleMatch(pattern));
      const chosen = exactVariation ?? authoredExact ?? variation ?? exact ?? compatible ?? authoredCompatible ?? roleCompatible ?? authoredRole ?? preferredCandidates[0];
      if (!chosen) throw new Error(`Recording ${id} has an active ${track.instrumentId}/${track.role} without an authored phrase in ${region.kind}`);
      cells[track.id] = chosen.id;
      if (supportTrack) {
        supportOccurrences.set(track.id, supportOccurrence + 1);
        supportPatternIds.set(track.id, chosen.id);
      }
    }
    repairedArrangement[region.id] = cells;
  }
  sheet = rebuild({ ...sheet, arrangement: repairedArrangement });
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
      // Resolve recording assignments against the written instrument and role.
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
