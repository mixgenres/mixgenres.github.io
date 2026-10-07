import { mkdirSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { buildVoiceContext, getInstrumentModule } from '../src/engine/playback/instrumentRegistry';
import { renderVoice, renderTrack, type VoiceState } from '../src/engine/playback/elementaryEngine';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { requiredVoiceCount, voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import type { AudioSignal } from '../src/engine/playback/instrumentTypes';
import { AudioRenderer } from '../src/engine/playback/offlineRenderer';
import { reportMetadata, writeReport } from './lib/auditReport';

// Ask the public renderer to reconcile each graph and report its documented
// RenderStats. Elementary's opaque graph representation is not an inspection API.
async function inspect(...roots: AudioSignal[]) {
  const renderer = new AudioRenderer();
  await renderer.initialize({sampleRate:44100,numInputChannels:0,numOutputChannels:roots.length,blockSize:64});
  try { return await renderer.render(...roots); }
  finally { renderer.reset(); }
}
const song = makeSheet('tango', 'tango-golden-age'), performance = compileWholeSong(song);
mkdirSync('audit/tango-graphs', { recursive: true });
const parts = [];
for (const track of song.tracks) {
  const id = track.instrumentId!, params = resolveTrackSound(id, song.worldId, song.styleId, track.role);
  const notes = performance.notes.filter(n => n.trackId === track.id);
  const prepare = (note: typeof notes[number]): VoiceState => ({ ...prepareNoteVoice(note, params, song.worldId, song.styleId!, track.role), gate: 1 });
  const tail = (note: typeof notes[number]) => voiceTailSeconds(params, prepare(note));
  const peakTime = notes.map(n => n.time).reduce((best, time) => {
    const count = notes.filter(n => n.time <= time && n.time + n.dur + tail(n) > time).length;
    return count > best.count ? { time, count } : best;
  }, { time: 0, count: 0 });
  const voices = notes.filter(n => n.time <= peakTime.time && n.time + n.dur + tail(n) > peakTime.time)
    .map((note, i) => ({ ...prepare(note), id: `graph-${id}-${i}`, gate: note.time + note.dur > peakTime.time ? 1 : 0 }));
  const example = prepare(notes.find(n => n.time >= performance.bars[4].start) ?? notes[0]);
  const module = getInstrumentModule(id);
  const core = await inspect(module.renderVoice(buildVoiceContext(track.id, 0, example, params)));
  const wrapped = await inspect(renderVoice(track.id, 0, example, params));
  const trackGraph = renderTrack(track.id, voices, params);
  const whole = await inspect(trackGraph.left, trackGraph.right);
  writeFileSync(`audit/tango-graphs/${id}.json`, JSON.stringify({ instrumentId: id, peakTime: peakTime.time, renderStats:whole }, null, 2));
  const body = notes.filter(n => n.time >= performance.bars[4].start);
  const motifShapes = new Set(performance.bars.slice(4).map(bar => body.filter(n => n.bar === bar.index)
    .map(n => `${((n.time - bar.start) * bar.bpm / 60).toFixed(3)}:${(n.dur * bar.bpm / 60).toFixed(3)}:${n.gestureCode}`).join('|')));
  parts.push({ instrumentId: id, name: INSTRUMENTS_BY_ID[id].name, notes: notes.length,
    coreNodes: core.nodesAdded, wrappedNodes: wrapped.nodesAdded, addedNodes: wrapped.nodesAdded - core.nodesAdded,
    coreRenderStats: core, wrappedRenderStats: wrapped,
    heldNotePeak: requiredVoiceCount(notes, 0), reservedVoicePeak: requiredVoiceCount(notes, tail),
    releaseSeconds: tail(notes[0]), graphAtReservedPeak: { time: peakTime.time, nodes: whole.nodesAdded, renderStats: whole },
    distinctDevelopedBarRhythmTechniqueShapes: motifShapes.size });
}
writeReport('tango-graph', { ...reportMetadata(), styleId: song.styleId, bars: performance.bars.length,
  notes: performance.notes.length, duration: performance.duration, parts,
  evidence: 'Public Elementary RenderStats for representative notes and worst reserved voice overlap. Reconciliation reports under audit/tango-graphs. Separate from browser mix/master nodes. Rhythm-shape counts exclude pitch and dynamics.' });
for (const p of parts) console.log(`${p.name}: ${p.coreNodes} core / ${p.wrappedNodes} wrapped nodes; ${p.heldNotePeak} held / ${p.reservedVoicePeak} reserved voices; ${p.graphAtReservedPeak.nodes} peak graph nodes`);
console.log('Render statistics report: audit/tango-graph.json');
