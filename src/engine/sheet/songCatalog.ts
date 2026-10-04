import { FULL_SONGS_BY_ID, sampleSongs } from '../../data/songs/catalog';
import { RECORDING_ARRANGEMENTS, parseRecordingForm } from '../../data/songs/recordingArrangements';
import { getStyle } from '../style/registry';
import { createSheet, rebuild, type Sheet } from './sheet';
import type { FormStepTemplate, SongStyle } from '../../data/styles/schema';
import type { Region, Track } from '../../types';

export type CatalogSongKind = NonNullable<Sheet['catalogKind']>;

export function catalogIdForStyle(styleId: string, kind: CatalogSongKind): string {
  return kind === 'full-song' ? `${styleId}_song` : `${styleId}_starter`;
}

/** Build a reference arrangement without registering any new style or pattern.
 * Song-local overrides use the existing style's roles, dialects, mix and cells.
 */
export function createCatalogSong(id: string): Sheet {
  const sample = sampleSongs.find(entry => entry.id === id);
  if (sample) {
    const sheet = createSheet(sample.genreId, sample.styleId);
    return { ...sheet, title: sample.name, catalogId: id, catalogKind: 'sample', catalogModified: false };
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
  return { ...sheet, title: `${entry.styleName} Full`, catalogId: id, catalogKind: 'full-song', catalogModified: false, bpm: recording.bpm };
}

export function markCatalogModified(sheet: Sheet): Sheet {
  return sheet.catalogModified ? sheet : { ...sheet, catalogModified: true };
}

function same(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

function barsOf(region: Region): number {
  return Math.max(1, region.bars ?? region.end - region.start);
}

function hasStructuralRegionEdits(sheet: Sheet, source: Sheet): boolean {
  if (sheet.regions.length !== source.regions.length) return true;
  return sheet.regions.some((region, index) => region.id !== source.regions[index]?.id);
}

function scaleBars(regions: Region[], targetBars: number): Region[] {
  if (!regions.length) return [];
  const currentTotal = regions.reduce((sum, region) => sum + barsOf(region), 0);
  const minimumTotal = regions.length;
  const desired = Math.max(minimumTotal, Math.round(targetBars));
  const raw = regions.map(region => barsOf(region) * desired / Math.max(1, currentTotal));
  const bars = raw.map(value => Math.max(1, Math.floor(value)));
  let remaining = desired - bars.reduce((sum, value) => sum + value, 0);
  const order = raw.map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((a, b) => b.fraction - a.fraction);
  for (let i = 0; remaining > 0; i = (i + 1) % order.length) {
    bars[order[i].index] += 1;
    remaining -= 1;
  }
  return regions.map((region, index) => ({ ...region, bars: bars[index] }));
}

function sourceTrackKey(track: Track, tracks: Track[]): string {
  const instrumentId = track.instrumentId ?? track.kind;
  const peers = tracks.filter(candidate => (candidate.instrumentId ?? candidate.kind) === instrumentId && candidate.role === track.role);
  const ordinal = Math.max(0, peers.findIndex(candidate => candidate.id === track.id));
  return `${instrumentId}:${track.role}:${ordinal}`;
}

function mapSourceTracks(source: Sheet, target: Sheet): Map<string, string> {
  const targetByKey = new Map(target.tracks.map(track => [sourceTrackKey(track, target.tracks), track.id]));
  return new Map(source.tracks.flatMap(track => {
    const targetId = targetByKey.get(sourceTrackKey(track, source.tracks));
    return targetId ? [[track.id, targetId] as const] : [];
  }));
}

function closestSourceRegion(targetRegion: Region, targetIndex: number, targetCount: number, source: Sheet): Region | undefined {
  if (!source.regions.length) return undefined;
  const normalized = targetCount <= 1 ? 0 : targetIndex / (targetCount - 1);
  const expected = normalized * Math.max(0, source.regions.length - 1);
  const scored = source.regions.map((region, index) => {
    let score = -Math.abs(index - expected);
    if (region.kind === targetRegion.kind) score += 8;
    if (region.formKey && targetRegion.formKey && region.formKey === targetRegion.formKey) score += 12;
    return { region, score };
  }).sort((a, b) => b.score - a.score);
  return scored[0]?.region;
}

const REGION_PATCH_KEYS = [
  'name', 'kind', 'formKey', 'formLabel', 'chords', 'energy', 'bpm', 'tempoShift', 'genre', 'styleId', 'worldId',
  'activeInstrumentIds', 'leadInstrumentId', 'tempoFeel', 'solo', 'repetitionGroup',
] as const;

function projectRegionEdits(sheet: Sheet, currentSource: Sheet, target: Sheet): Sheet {
  const sourceTrackToTarget = mapSourceTracks(currentSource, target);
  let tracks = [...target.tracks];
  const targetTrackIds = new Set(tracks.map(track => track.id));
  const currentById = new Map(sheet.tracks.map(track => [track.id, track]));
  const sourceById = new Map(currentSource.tracks.map(track => [track.id, track]));
  const freshTrackId = () => {
    let index = 0;
    while (targetTrackIds.has(`v${index}`)) index += 1;
    return `v${index}`;
  };

  // Carry track-level edits to the equivalent target part. If a user-added or
  // edited part has no equivalent in the target source, keep it as an extra
  // part instead of silently discarding it.
  for (const sourceTrack of currentSource.tracks) {
    const currentTrack = currentById.get(sourceTrack.id);
    const targetId = sourceTrackToTarget.get(sourceTrack.id);
    if (!currentTrack) {
      if (targetId) tracks = tracks.filter(track => track.id !== targetId);
      continue;
    }
    if (same(currentTrack, sourceTrack)) continue;
    if (targetId) {
      tracks = tracks.map(track => track.id === targetId ? { ...track, ...Object.fromEntries(
        Object.entries(currentTrack).filter(([key, value]) => key !== 'id' && !same(value, (sourceTrack as any)[key]))
      ) } as Track : track);
    } else {
      const id = targetTrackIds.has(currentTrack.id) ? freshTrackId() : currentTrack.id;
      targetTrackIds.add(id);
      tracks.push({ ...currentTrack, id });
      sourceTrackToTarget.set(sourceTrack.id, id);
    }
  }
  for (const currentTrack of sheet.tracks) {
    if (sourceById.has(currentTrack.id)) continue;
    const id = targetTrackIds.has(currentTrack.id) ? freshTrackId() : currentTrack.id;
    targetTrackIds.add(id);
    tracks.push({ ...currentTrack, id });
    sourceTrackToTarget.set(currentTrack.id, id);
  }

  const activeTrackIds = new Set(tracks.map(track => track.id));

  const arrangement = { ...target.arrangement };
  const energies = { ...(target.energies ?? {}) };
  const partRoles = { ...(target.partRoles ?? {}) };

  const regions = target.regions.map((targetRegion, index) => {
    const sourceRegion = closestSourceRegion(targetRegion, index, target.regions.length, currentSource);
    const currentRegion = sourceRegion ? sheet.regions.find(region => region.id === sourceRegion.id) : undefined;
    if (!sourceRegion || !currentRegion) return targetRegion;

    let nextRegion: Region = { ...targetRegion };
    for (const key of REGION_PATCH_KEYS) {
      if (!same(currentRegion[key], sourceRegion[key])) (nextRegion as any)[key] = currentRegion[key];
    }
    if (barsOf(currentRegion) !== barsOf(sourceRegion)) {
      nextRegion.bars = Math.max(1, Math.round(barsOf(targetRegion) * barsOf(currentRegion) / barsOf(sourceRegion)));
    }

    const nextArrangement = Object.fromEntries(Object.entries(arrangement[targetRegion.id] ?? {}).filter(([trackId]) => activeTrackIds.has(trackId)));
    const nextEnergies = Object.fromEntries(Object.entries(energies[targetRegion.id] ?? {}).filter(([trackId]) => activeTrackIds.has(trackId)));
    const nextRoles = Object.fromEntries(Object.entries(partRoles[targetRegion.id] ?? {}).filter(([trackId]) => activeTrackIds.has(trackId)));
    for (const currentTrack of sheet.tracks) {
      const targetTrackId = sourceTrackToTarget.get(currentTrack.id);
      if (!targetTrackId) continue;
      const sourceTrack = sourceById.get(currentTrack.id);
      const sourcePattern = sourceTrack ? currentSource.arrangement[sourceRegion.id]?.[sourceTrack.id] : undefined;
      const currentPattern = sheet.arrangement[currentRegion.id]?.[currentTrack.id];
      if (!sourceTrack || currentPattern !== sourcePattern) {
        if (currentPattern) nextArrangement[targetTrackId] = currentPattern;
        else delete nextArrangement[targetTrackId];
      }
      const sourceEnergy = sourceTrack ? currentSource.energies?.[sourceRegion.id]?.[sourceTrack.id] : undefined;
      const currentEnergy = sheet.energies?.[currentRegion.id]?.[currentTrack.id];
      if (!sourceTrack || currentEnergy !== sourceEnergy) {
        if (currentEnergy !== undefined) nextEnergies[targetTrackId] = currentEnergy;
        else delete nextEnergies[targetTrackId];
      }
      const sourceRole = sourceTrack ? currentSource.partRoles?.[sourceRegion.id]?.[sourceTrack.id] : undefined;
      const currentRole = sheet.partRoles?.[currentRegion.id]?.[currentTrack.id];
      if (!sourceTrack || currentRole !== sourceRole) {
        if (currentRole) nextRoles[targetTrackId] = currentRole;
        else delete nextRoles[targetTrackId];
      }
    }
    arrangement[targetRegion.id] = nextArrangement;
    energies[targetRegion.id] = nextEnergies;
    partRoles[targetRegion.id] = nextRoles;
    return nextRegion;
  });

  return rebuild({ ...target, tracks, regions, arrangement, energies, partRoles });
}

function projectSongLevelEdits(sheet: Sheet, source: Sheet, target: Sheet): Sheet {
  const next: Sheet = { ...target };
  const fields: Array<keyof Sheet> = [
    'title', 'bpm', 'timeSignature', 'tempoShift', 'styleInfluences', 'styleOverrides',
    'customProgressions', 'preferences', 'generationSeed',
  ];
  for (const field of fields) {
    if (!same(sheet[field], source[field])) (next as any)[field] = sheet[field];
  }
  return next;
}

function resizeStructurallyEditedSong(sheet: Sheet, source: Sheet, target: Sheet): Sheet {
  const resized = scaleBars(sheet.regions, target.durationMeasures);
  const next = projectSongLevelEdits(sheet, source, {
    ...sheet,
    catalogId: target.catalogId,
    catalogKind: target.catalogKind,
    catalogModified: true,
    title: target.title,
    bpm: target.bpm,
    timeSignature: target.timeSignature,
    styleOverrides: target.styleOverrides,
  });
  return rebuild({ ...next, regions: resized, catalogId: target.catalogId, catalogKind: target.catalogKind, catalogModified: true });
}

/**
 * Switch between the short style sample and its full source arrangement.
 *
 * Untouched songs are exact catalog swaps. Edited songs are projected: ordinary
 * part/section edits are applied to the paired source, while explicit form
 * surgery (add/remove/reorder sections) keeps the user's form and scales its
 * authored bar lengths to the destination duration instead of discarding it.
 */
export function switchCatalogSongKind(sheet: Sheet, kind: CatalogSongKind): Sheet {
  const styleId = sheet.styleId;
  if (!styleId) return sheet;
  if (sheet.catalogKind === kind) return sheet;
  const target = createCatalogSong(catalogIdForStyle(styleId, kind));
  if (!sheet.catalogModified) return target;

  const sourceKind = sheet.catalogKind ?? (sheet.catalogId?.endsWith('_song') ? 'full-song' : 'sample');
  const source = createCatalogSong(catalogIdForStyle(styleId, sourceKind));
  if (hasStructuralRegionEdits(sheet, source)) return resizeStructurallyEditedSong(sheet, source, target);

  const withSongEdits = projectSongLevelEdits(sheet, source, target);
  const projected = projectRegionEdits(sheet, source, withSongEdits);
  return { ...projected, catalogId: target.catalogId, catalogKind: kind, catalogModified: true };
}
