import { FULL_SONGS_BY_ID, sampleSongs } from '../../data/songs/catalog';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { getStyle } from '../style/registry';
import { createSheet, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';

/** Build a reference arrangement without registering any new style or pattern.
 * Song-local overrides use the existing style's roles, dialects, mix and cells.
 */
export function createCatalogSong(id: string): Sheet {
  const sample = sampleSongs.find(entry => entry.id === id);
  if (sample) {
    const sheet = createSheet(sample.genreId, sample.styleId);
    return { ...sheet, title: sample.name, catalogId: id, catalogKind: 'sample' };
  }
  const entry = FULL_SONGS_BY_ID[id];
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
  const ensemble = authoredEnsemble.map(part => ({ ...part,
    instrumentIds: part.instrumentIds.filter(instrument => !recording.instruments || recording.instruments.includes(instrument)),
  })).filter(part => part.instrumentIds.length);
  if (!ensemble.length) throw new Error(`Recording ${id} has no authored instruments`);
  const instruments = ensemble.flatMap(part => part.instrumentIds);
  const assertActiveMember = (instrument: string) => {
    if (!instruments.includes(instrument)) throw new Error(`Recording ${id} features an absent instrument: ${instrument}`);
  };
  if (recording.lead) assertActiveMember(recording.lead);
  const sections = parseRecordingForm(recording.form);
  const form: FormStepTemplate[] = sections.map((part, index) => {
    const active = recording.sectionInstruments?.[part.kind] ?? instruments;
    active.forEach(assertActiveMember);
    const solo = recording.solos?.[part.kind];
    const lead = solo ?? recording.lead;
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
  return { ...sheet, title: entry.name, catalogId: id, catalogKind: 'full-song', bpm: recording.bpm };
}
