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
import { reportMetadata, writeReport } from './lib/auditReport';
import { createMasterChain } from '../src/engine/studio/mixer';
import { createSongMixGraph } from '../src/engine/studio/dynamicMix/MixGraph';

// Inspect the actual generated Elementary DAG, including all reachable nodes.
// Counts describe the physical instrument synthesis used by playback and export.
interface NodeData {
  hash: number; kind: string; props: Record<string, unknown>;
  children: 0 | { hd: NodeData; tl: NodeData['children'] };
}
function inspect(...roots: AudioSignal[]) {
  const nodes = new Map<number, { id: number; kind: string; props: Record<string, unknown>; inputs: number[] }>();
  const visit = (node: NodeData) => {
    if (nodes.has(node.hash)) return;
    const inputs: NodeData[] = [];
    for (let list = node.children; list; list = list.tl) inputs.push(list.hd);
    nodes.set(node.hash, { id: node.hash, kind: node.kind, props: node.props, inputs: inputs.map(n => n.hash) });
    inputs.forEach(visit);
  };
  roots.forEach(root => visit(root as unknown as NodeData));
  const kinds: Record<string, number> = {};
  for (const node of nodes.values()) kinds[node.kind] = (kinds[node.kind] ?? 0) + 1;
  return { count: nodes.size, kinds, roots: roots.map(root => (root as unknown as NodeData).hash), nodes: [...nodes.values()] };
}
const song = makeSheet('tango', 'tango-golden-age'), performance = compileWholeSong(song);
mkdirSync('audit/tango-graphs', { recursive: true });
// Record the real mix builders' allocations/connections with a structural
// context. This is topology inspection, not browser audio/CPU measurement.
const mixNodes: Array<{ id: number; kind: string }> = [];
const mixConnections: Array<{ from: number; to: number | string }> = [];
const factories = ['Gain', 'BiquadFilter', 'DynamicsCompressor', 'WaveShaper', 'Delay', 'StereoPanner', 'ChannelSplitter', 'ChannelMerger'];
const context: Record<string, unknown> = { sampleRate: 44100, currentTime: 0 };
for (const kind of factories) context[`create${kind}`] = () => {
  const node = { id: mixNodes.length, kind };
  mixNodes.push(node);
  const values = new Map<string, unknown>();
  return new Proxy(node, {
    get(target, property) {
      if (property === 'connect') return (destination: { id?: number; owner?: string }) => mixConnections.push({ from: target.id, to: destination.id ?? destination.owner! });
      if (property === 'disconnect') return () => {};
      if (property in target) return target[property as keyof typeof target];
      if (!values.has(String(property))) values.set(String(property), { value: 0, owner: `${target.id}.${String(property)}` });
      return values.get(String(property));
    },
    set(_target, property, value) { values.set(String(property), value); return true; },
  });
};
const master = createMasterChain(context as unknown as BaseAudioContext, performance.mixTimeline!.scenes[0].resolvedMix.contract.character, song.styleId);
const masterNodes = mixNodes.length;
createSongMixGraph(context as unknown as BaseAudioContext, master, performance.mixTimeline!, song.tracks.map(t => t.id));
const mixKinds: Record<string, number> = {};
for (const node of mixNodes) mixKinds[node.kind] = (mixKinds[node.kind] ?? 0) + 1;
writeFileSync('audit/tango-graphs/mix.json', JSON.stringify({ nodes: mixNodes, connections: mixConnections }, null, 2));
const parts = song.tracks.map(track => {
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
  const core = inspect(module.renderVoice(buildVoiceContext(track.id, 0, example, params)));
  const wrapped = inspect(renderVoice(track.id, 0, example, params));
  const trackGraph = renderTrack(track.id, voices, params);
  const whole = inspect(trackGraph.left, trackGraph.right);
  writeFileSync(`audit/tango-graphs/${id}.json`, JSON.stringify({ instrumentId: id, peakTime: peakTime.time, ...whole }, null, 2));
  const body = notes.filter(n => n.time >= performance.bars[4].start);
  const motifShapes = new Set(performance.bars.slice(4).map(bar => body.filter(n => n.bar === bar.index)
    .map(n => `${((n.time - bar.start) * bar.bpm / 60).toFixed(3)}:${(n.dur * bar.bpm / 60).toFixed(3)}:${n.gestureCode}`).join('|')));
  return { instrumentId: id, name: INSTRUMENTS_BY_ID[id].name, notes: notes.length,
    coreNodes: core.count, wrappedNodes: wrapped.count, addedNodes: wrapped.count - core.count,
    coreKinds: core.kinds, wrappedKinds: wrapped.kinds,
    heldNotePeak: requiredVoiceCount(notes, 0), reservedVoicePeak: requiredVoiceCount(notes, tail),
    releaseSeconds: tail(notes[0]), graphAtReservedPeak: { time: peakTime.time, nodes: whole.count, kinds: whole.kinds },
    distinctDevelopedBarRhythmTechniqueShapes: motifShapes.size };
});
writeReport('tango-graph', { ...reportMetadata(), styleId: song.styleId, bars: performance.bars.length,
  notes: performance.notes.length, duration: performance.duration, parts,
  browserMixTopology: { allocatedNodes: mixNodes.length, masterNodes, dynamicMixNodes: mixNodes.length - masterNodes, kinds: mixKinds, evidence: 'Structural execution of the existing Web Audio mix builders. Includes inactive routes; not a CPU cost or audible-processing count.' },
  evidence: 'Actual reachable Elementary graph nodes, grouped by hash, for representative notes and worst reserved voice overlap. Full DAGs under audit/tango-graphs. Separate from browser mix/master nodes. Rhythm-shape counts exclude pitch and dynamics.' });
for (const p of parts) console.log(`${p.name}: ${p.coreNodes} core / ${p.wrappedNodes} wrapped nodes; ${p.heldNotePeak} held / ${p.reservedVoicePeak} reserved voices; ${p.graphAtReservedPeak.nodes} peak graph nodes`);
console.log('Full graph report: audit/tango-graph.json');
console.log(`Browser mix topology: ${mixNodes.length} allocated nodes (${masterNodes} master, ${mixNodes.length - masterNodes} dynamic strips/buses)`);
