import { ensembleHeadroom } from '../masterSettings';
import type { Performance, PerfNote } from '../../band/performanceData';
import type { Sheet } from '../../sheet/sheet';
import { getResolvedSectionStyle } from '../../sheet/sheet';
import { energyOf } from '../../sheet/sectionEnergy';
import { resolveSoloPlan, soloistAtBar } from '../../sheet/solo';
import { analyzeMixWindow, type TrackAnalysisInput } from './MixAnalysis';
import { planMixScene } from './DynamicMixPlanner';
import type { MixSceneTimeline } from './MixScene';

/** Symbolic analysis runs after phrase/pitch/solo compilation, never in a note-on path. */
export function compileMixSceneTimeline(sheet: Sheet, performance: Performance): MixSceneTimeline {
  const bars = performance.bars;
  const beats = [0];
  bars.forEach(bar => beats.push(beats.at(-1)! + bar.beatsPerBar));
  const notesByTrack = new Map<string, PerfNote[]>();
  for (const note of performance.notes) {
    if (!Number.isFinite(note.time) || !Number.isFinite(note.dur)) continue;
    const notes = notesByTrack.get(note.trackId) ?? []; notes.push(note); notesByTrack.set(note.trackId, notes);
  }
  for (const notes of notesByTrack.values()) notes.sort((a, b) => a.time - b.time);
  const activeAtBar = new Map<number, Set<string>>();
  for (const [id, notes] of notesByTrack) for (const note of notes) {
    const active = activeAtBar.get(note.bar) ?? new Set(); active.add(id); activeAtBar.set(note.bar, active);
  }
  const cursors = new Map<string, number>(), ringing = new Map<string, PerfNote[]>();
  const scenes: MixSceneTimeline['scenes'] = [];
  for (const region of sheet.regions.slice().sort((a, b) => a.start - b.start)) {
    const startBar = Math.max(0, region.start), endBar = Math.min(bars.length, region.end);
    if (startBar >= endBar) continue;
    const style = getResolvedSectionStyle(sheet, region), mix = style.resolvedMix.contract;
    const cycle = Math.max(1, Math.round(style.contract.cycleLength));
    const phraseBars = Math.max(cycle, style.melody.phraseLengthsBars?.find(n => Number.isFinite(n) && n > 0 && n % cycle === 0) ?? 4);
    const solo = sheet.arrangementContext?.[region.id]?.solo ?? resolveSoloPlan(region, sheet.tracks, style.contract, sheet.tracks.map(t => t.id));
    const boundaries = new Set([startBar, endBar]);
    for (let b = startBar + phraseBars; b < endBar; b += phraseBars) boundaries.add(b);
    for (const phrase of performance.phrases ?? []) if (phrase.regionId === region.id) {
      if (phrase.startBar > startBar && phrase.startBar < endBar) boundaries.add(phrase.startBar);
      if (phrase.endBar > startBar && phrase.endBar < endBar) boundaries.add(phrase.endBar);
    }
    if (solo?.mode === 'trading') {
      const turn = Math.max(cycle, Math.ceil((solo.policy.tradingBars ?? solo.policy.phraseBars) / cycle) * cycle);
      for (let b = startBar + turn; b < endBar; b += turn) boundaries.add(b);
    }
    // Only substantial ensemble changes add boundaries; ordinary individual attacks do not.
    for (let b = startBar + 1; b < endBar; b++) {
      const previous = activeAtBar.get(b - 1) ?? new Set(), next = activeAtBar.get(b) ?? new Set();
      if ([...new Set([...previous, ...next])].filter(id => previous.has(id) !== next.has(id)).length >= 2) boundaries.add(b);
    }
    const ordered = [...boundaries].sort((a, b) => a - b);
    for (let index = 0; index + 1 < ordered.length; index++) {
      const from = ordered[index], to = ordered[index + 1];
      const startTime = bars[from].start, endTime = bars[to - 1].end;
      const soloists = solo ? soloistAtBar(solo, region, from, cycle) : [];
      const inputs: TrackAnalysisInput[] = sheet.tracks.map(track => {
        const notes = notesByTrack.get(track.id) ?? [], active = (ringing.get(track.id) ?? []).filter(n => n.time + n.dur > startTime);
        let cursor = cursors.get(track.id) ?? 0;
        while (cursor < notes.length && notes[cursor].time < endTime) {
          const note = notes[cursor++]; if (note.time + note.dur > startTime) active.push(note);
        }
        cursors.set(track.id, cursor); ringing.set(track.id, active);
        const relationships = sheet.relationships.filter(r => (!r.regionId || r.regionId === region.id) && (r.from === track.id || r.to === track.id));
        const answering = relationships.some(r => r.to === track.id && /call|response|answer/.test(r.kind));
        const role = sheet.partRoles?.[region.id]?.[track.id]
          ?? active.find(n => n.time >= startTime)?.soundContext?.role ?? track.role;
        return { trackId: track.id, role, notes: active, soloist: soloists.includes(track.id),
          authoredForeground: !solo && !!region.leadInstrumentId && region.leadInstrumentId === track.instrumentId,
          answering, counterline: relationships.some(r => /counter/.test(r.kind)),
          interactionTargetIds: relationships.map(r => r.from === track.id ? r.to : r.from),
          callResponseGroup: answering ? relationships.find(r => r.to === track.id)?.id : undefined };
      });
      const analysis = analyzeMixWindow({ sectionId: region.id, phraseIndex: index, startBeat: beats[from], endBeat: beats[to],
        startTime, endTime, energy: energyOf(region) }, inputs, mix);
      scenes.push(planMixScene(analysis, style.resolvedMix, style.id, String(region.kind)));
    }
  }
  const firstRegion = sheet.regions.find(region => region.id === scenes[0]?.sectionId);
  const lift = firstRegion ? getResolvedSectionStyle(sheet, firstRegion).sound.masterProfile.lift : .5;
  return { version: 1, scenes, duration: performance.duration,
    baselineHeadroom: ensembleHeadroom(new Set(performance.notes.map(note => note.trackId)).size, lift) };

}

/** Opt-in developer trace. No production logging or analysis in the renderer. */
export function formatMixTrace(timeline: MixSceneTimeline): string {
  return timeline.scenes.map(scene => [
    `BEATS ${scene.startBeat}–${scene.endBeat} | ${scene.styleId} | ENERGY ${scene.energy}`,
    `FOREGROUND ${scene.foregroundTrackIds.join(', ') || 'none'}${scene.sharedForeground ? ' (shared)' : ''}`,
    ...scene.analysis.tracks.filter(t => t.structuralImportance > .8).map(t => `ANCHOR ${t.trackId} ${t.structuralImportance.toFixed(2)}`),
    ...scene.masking.filter(r => r.overlap > .2).map(r => `MASKING ${r.sourceTrackId} → ${r.targetTrackId} overlap ${r.overlap.toFixed(2)} priority ${r.priorityDifference.toFixed(2)}`),
    ...Object.entries(scene.tracks).map(([id, state]) => `${id}: gain ${state.gainOffsetDb.toFixed(2)} dB, presence ${state.presenceOffsetDb.toFixed(2)} dB, depth ${state.depth.toFixed(2)}`),
    ...scene.resolvedMix.trace.map(item => `${item.path}: ${JSON.stringify(item.value)} ← ${item.source}:${item.sourceId ?? ''}`),
  ].join('\n')).join('\n\n');
}
