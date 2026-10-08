import { SONGS_BY_ID } from '../../data/songs/catalog';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { PATTERNS_BY_ID } from '../../data/genres';
import { getStyle } from '../style/registry';
import { createSheet, rebuild, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';

type EnsembleParts = NonNullable<NonNullable<SongStyle['arrangement']>['ensemble']>;

function chooseCatalogEnsemble(
  styleId: string,
  recording: typeof RECORDING_ARRANGEMENTS[string],
  authoredEnsemble: EnsembleParts,
): { ensemble: EnsembleParts; keptIds: Set<string> } {
  const requestedIds = recording.instruments
    ? new Set(recording.instruments)
    : new Set(authoredEnsemble.flatMap(part => part.instrumentIds));
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
    const active = [...new Set(sectionBase)];
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
        const key = shortName.toLocaleLowerCase();
        return (pattern?.shortName?.toLocaleLowerCase() === key || pattern?.family?.toLocaleLowerCase() === key
          || pattern?.name.toLocaleLowerCase().endsWith(`: ${key}`)
          || pattern?.tags.some(tag => tag.toLocaleLowerCase() === key))
          && pattern.instruments?.includes(instrumentId);
      });
      if (!patternId) throw new Error(`Recording ${id} cannot resolve ${instrumentId} pattern ${shortName}`);
      arrangement[region.id][track.id] = patternId;
      lockedPatternAssignments[region.id][track.id] = patternId;
    }
  }
  const arranged = rebuild({ ...sheet, arrangement, lockedPatternAssignments });
  return { ...arranged, title: entry.styleName, catalogId: id, bpm: recording.bpm };
}
