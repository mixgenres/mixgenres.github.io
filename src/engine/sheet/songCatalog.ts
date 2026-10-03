import { FULL_SONGS_BY_ID, sampleSongs } from '../../data/songs/catalog';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { getStyle } from '../style/registry';
import { createSheet, rebuild, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';
import { energyForFormIntensity } from './sectionEnergy';

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
  const style = getStyle(entry.styleId)!;
  const recording = RECORDING_ARRANGEMENTS[entry.referenceKey];
  const nativeForm = style.form?.templates?.[0]?.value ?? [];
  if (!nativeForm.length) throw new Error(`Style ${entry.styleId} has no authored form`);
  const ensemble = (style.arrangement?.ensemble ?? []).map(part => ({ ...part,
    instrumentIds: part.instrumentIds.filter(instrument => !recording?.instruments || recording.instruments.includes(instrument)),
  })).filter(part => part.instrumentIds.length);
  if (!ensemble.length) throw new Error(`Recording ${id} has no supported instruments`);
  const instruments = [...new Set(ensemble.flatMap(part => part.instrumentIds))];
  const foundation = ensemble.filter(part => ['bass', 'percussion', 'harmony', 'texture'].includes(part.role)).flatMap(part => part.instrumentIds);
  const leaders = ensemble.filter(part => ['lead', 'melody', 'voice'].includes(part.role)).flatMap(part => part.instrumentIds);
  const defaultLead = recording?.lead && instruments.includes(recording.lead) ? recording.lead : leaders[0] ?? instruments[0];
  const isVocal = instruments.includes('voice');
  const sections = recording ? parseRecordingForm(recording.form) : nativeForm.map((part, i) => ({
    kind: part.kind,
    // Expand complete native phrases rather than append an unrelated pop form.
    bars: part.bars * (i === 0 || i === nativeForm.length - 1 ? 2 : 4),
    intensity: part.intensity,
  }));
  const featured = ensemble.filter(part => part.role === 'lead' || part.role === 'melody').flatMap(part => part.instrumentIds).filter(id => id !== 'voice');
  let soloIndex = 0;
  const form: FormStepTemplate[] = sections.map((part, index) => {
    const native = nativeForm.find(f => f.kind === part.kind);
    const requestedSolo = recording?.solos?.[part.kind] ?? native?.soloInstrumentId;
    const solo = /solo|trading/.test(part.kind) ? (requestedSolo && instruments.includes(requestedSolo) ? requestedSolo : featured[soloIndex++ % Math.max(1, featured.length)])
      : requestedSolo && instruments.includes(requestedSolo) ? requestedSolo : undefined;
    const instrumental = isVocal && /intro|opening|solo|interlude|mambo|riff|build|outro|jod|jhala|alap/.test(part.kind);
    let active = recording ? [...instruments] : (native?.instrumentIds ?? instruments).filter(id => instruments.includes(id));
    if (instrumental && !['indian-classical','qawwali'].includes(entry.genreId)) active = active.filter(id => id !== 'voice');
    if (solo) active = [...new Set([...foundation, solo])];
    if (/breakdown|break|dissolve|release/.test(part.kind)) active = [...new Set([defaultLead, ...foundation.filter(id => !ensemble.some(p => p.role === 'percussion' && p.instrumentIds.includes(id))).slice(0, 2)])];
    // Drone is present before tala starts; percussion enters with the composed form.
    if (entry.genreId === 'indian-classical' && /alap|jor|jod|nom-tom/.test(part.kind)) active = instruments.filter(id => !ensemble.some(p => p.role === 'percussion' && p.instrumentIds.includes(id)));
    if (!active.length) active = [defaultLead];
    const lead = solo ?? (active.includes(defaultLead) ? defaultLead : featured.find(id => active.includes(id)) ?? active[0]);
    return {
      key: `recording-${index}`, label: `${String(part.kind).replace(/-/g, ' ')}${sections.filter(p => p.kind === part.kind).length > 1 ? ` ${sections.slice(0,index + 1).filter(p => p.kind === part.kind).length}` : ''}`,
      kind: part.kind, bars: part.bars, intensity: part.intensity,
      instrumentIds: active, leadInstrumentId: lead,
      ...(solo ? { soloInstrumentId: solo, soloMode: part.kind === 'trading' ? 'trading' as const : 'accompanied' as const } : {}),
      ...(native?.bpm ? { bpm: native.bpm } : {}),
    };
  });
  const energyMappings = Object.fromEntries(form.map(f => [f.key, energyForFormIntensity(f.intensity)]));
  const overrides: Partial<SongStyle> = {
    form: { ...style.form, templates: [{ value: form, w: 1 }] },
    arrangement: { ...style.arrangement, ensemble, energyMappings: { ...style.arrangement?.energyMappings, ...energyMappings } },
  };
  if (recording?.chords) overrides.harmony = { ...style.harmony, sectionProgressions: { ...style.harmony?.sectionProgressions, ...recording.chords } };
  if (recording) overrides.rhythm = { ...style.rhythm, defaultBpm: recording.bpm, tempoRange: [recording.bpm, recording.bpm] };
  const sheet = createSheet({ genreId: entry.genreId, styleId: entry.styleId, overrides });
  // Apply authored absolute chords AFTER makeSheet's ordinary tonic normalization,
  // preserving deliberate modal bridges (e.g. So What's semitone-up B section).
  const regions = sheet.regions.map(region => ({ ...region,
    ...(recording?.chords?.[region.kind] ? { chords: [...recording.chords[region.kind]] } : {}),
  }));
  return rebuild({ ...sheet, regions, title: entry.name,
    catalogId: id, catalogKind: 'full-song',
    ...(recording ? { bpm: recording.bpm } : {}),
  });
}
