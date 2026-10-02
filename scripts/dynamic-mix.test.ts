import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveStyle } from '../src/engine/style/resolve';
import { ALL_STYLES_BY_ID } from '../src/engine/style/registry';
import { contractForGenre } from '../src/engine/style/contracts';
import { resolveMixLayers, resolveMixContract } from '../src/engine/studio/dynamicMix/resolveMixContract';
import { analyzeMixWindow, resolveForegroundOwnership, analyzeMasking, resolveMixFunctions } from '../src/engine/studio/dynamicMix/MixAnalysis';
import { planMixScene } from '../src/engine/studio/dynamicMix/DynamicMixPlanner';
import { compileMixSceneTimeline, formatMixTrace } from '../src/engine/studio/dynamicMix/compileMixSceneTimeline';
import { compileAutomation, automationValueAt, scheduleAutomation, excerptMixTimeline } from '../src/engine/studio/dynamicMix/MixAutomation';
import { createSongMixGraph } from '../src/engine/studio/dynamicMix/MixGraph';
import { accumulatePortableMix } from '../src/engine/studio/dynamicMix/PortableMixRuntime';
import { createMasterChain } from '../src/engine/studio/mixer';
import type { MixContract, MixOverride } from '../src/data/sound/schema/dynamicMix';
import type { Performance, PerfNote } from '../src/engine/band/performanceData';
import type { MixSceneTimeline } from '../src/engine/studio/dynamicMix/MixScene';
import type { Sheet } from '../src/engine/sheet/sheet';
import { makeSheet, setSectionSolo } from '../src/engine/sheet/sheet';
import { arrangeBand } from '../src/engine/band/arrangeBand';

const tango = () => resolveStyle({ genreId: 'tango', styleId: 'tango-tango-tradicional' });
const note = (trackId: string, midi = 65, time = 0, dur = 3): PerfNote => ({ trackId, midi, time, dur, bar: 0,
  vel: 88, gestureCode: 0, hitFunctionCode: 0, accent: .7, attackId: `${trackId}:${time}` });
function scene(startTime = 0, endTime = 4) {
  const style = tango();
  const analysis = analyzeMixWindow({ sectionId: 'theme', phraseIndex: 0, startBeat: startTime * 2,
    endBeat: endTime * 2, startTime, endTime, energy: 3 }, [
    { trackId: 'lead', role: 'lead', notes: [note('lead', 65, startTime)], authoredForeground: true },
    { trackId: 'comp', role: 'harmony', notes: [note('comp', 62, startTime)] },
    { trackId: 'bass', role: 'bass', notes: [note('bass', 42, startTime)] },
  ], style.resolvedMix.contract);
  return planMixScene(analysis, style.resolvedMix, style.id);
}
const timeline = (): MixSceneTimeline => ({ version: 1, duration: 8, scenes: [scene(), scene(4, 8)] });

test('recursive partial inheritance preserves siblings, false and zero, and traces every leaf', () => {
  const world = contractForGenre('tango');
  const result = resolveMixLayers(world, 'tango', [
    { mix: { dynamics: { foregroundContrastDb: 2.2 }, ambience: { roomSize: .4 } }, source: { source: 'extends', sourceId: 'parent' } },
    { mix: { ambience: { roomSize: .6 } }, source: { source: 'influence', sourceId: 'guest', weight: .5 } },
    { mix: { character: { dryness: .2 }, dynamics: { foregroundContrastDb: 3 }, roles: { bass: { priority: 0 } } }, source: { source: 'style', sourceId: 'selected' } },
    { mix: { masking: { enabled: false }, character: { dryness: 0 } }, source: { source: 'user' } },
  ]);
  assert.equal(result.contract.character.dryness, 0);
  assert.equal(result.contract.dynamics.foregroundContrastDb, 3);
  assert.equal(result.contract.roles.bass.priority, 0);
  assert.equal(result.contract.roles.bass.protectLowEnd, true);
  assert.equal(result.contract.masking.enabled, false);
  assert.equal(result.contract.ambience.roomSize, .6);
  assert.equal(result.provenance['sound.mix.character.dryness'].source, 'user');
  assert.equal(result.provenance['sound.mix.dynamics.foregroundContrastDb'].sourceId, 'selected');
  assert.ok(Object.isFrozen(result.contract.roles.bass));
  assert.equal(world.timbreSpace.mix!.character.dryness, .72);
  const leaves = (object: object, prefix: string): string[] => Object.entries(object).flatMap(([key, value]) =>
    value && typeof value === 'object' && !Array.isArray(value) ? leaves(value, `${prefix}.${key}`) : [`${prefix}.${key}`]);
  for (const path of leaves(result.contract, 'sound.mix')) assert.ok(result.provenance[path], path);
});

test('resolution sanitizes invalid and unsafe DSP values without losing negative cut limits', () => {
  const mix = resolveMixLayers(contractForGenre('tango'), 'tango', [{ source: { source: 'user' }, mix: {
    dynamics: { maxTrackCutDb: -5, foregroundContrastDb: Infinity },
    character: { dryness: NaN, compressionRatio: 99 }, ambience: { preDelayMs: 5000 },
    stage: { rolePan: { comp: 99 } }, roles: { bass: { gainDb: 'bad' } },
  } as unknown as MixOverride<MixContract> }]).contract;
  assert.equal(mix.dynamics.maxTrackCutDb, -5);
  assert.equal(mix.dynamics.foregroundContrastDb, 2);
  assert.equal(mix.character.dryness, .72);
  assert.equal(mix.character.compressionRatio, 8);
  assert.equal(mix.ambience.preDelayMs, 200);
  assert.equal(mix.stage.rolePan.comp, 1);
  assert.equal(mix.roles.bass.gainDb, undefined);
});

test('selected styles win over sound influences; rhythm influences do not import production', () => {
  const plain = tango();
  const rhythm = resolveStyle({ genreId: 'tango', styleId: plain.id,
    influences: [{ source: { styleId: 'tango-pugliese' }, weight: 1, aspects: ['rhythm'] }] });
  assert.deepEqual(rhythm.resolvedMix.contract, plain.resolvedMix.contract);
  const sound = resolveStyle({ genreId: 'tango', styleId: plain.id,
    influences: [{ source: { styleId: 'tango-pugliese' }, weight: 1, aspects: ['sound'] }] });
  assert.equal(sound.resolvedMix.contract.character.dryness, .76);
  assert.equal(sound.resolvedMix.contract.ambience.roomSize, .3);
  assert.equal(sound.resolvedMix.contract.dynamics.foregroundContrastDb, 3);
  assert.equal(sound.provenance['sound.mix.character.dryness'].source, 'style');
});

test('extends metadata merges through resolveStyle and user edits with the same keys invalidate its cache', () => {
  const parent = { ...ALL_STYLES_BY_ID['tango-troilo'], id: 'test-mix-parent', sound: { mix: { ambience: { roomSize: .7 } } } };
  const child = { ...ALL_STYLES_BY_ID['tango-tango-tradicional'], id: 'test-mix-child', extends: parent.id,
    sound: { mix: { dynamics: { foregroundContrastDb: 2.6 } } } };
  ALL_STYLES_BY_ID[parent.id] = parent; ALL_STYLES_BY_ID[child.id] = child;
  try {
    const resolved = resolveStyle({ genreId: 'tango', styleId: child.id });
    assert.equal(resolved.resolvedMix.contract.ambience.roomSize, .7);
    assert.equal(resolved.provenance['sound.mix.ambience.roomSize'].source, 'extends');
    const a = resolveStyle({ genreId: 'tango', styleId: child.id, userOverrides: { sound: { mix: { character: { dryness: .2 } } } } });
    const b = resolveStyle({ genreId: 'tango', styleId: child.id, userOverrides: { sound: { mix: { character: { dryness: .8 } } } } });
    assert.equal(a.resolvedMix.contract.character.dryness, .2);
    assert.equal(b.resolvedMix.contract.character.dryness, .8);
    assert.notEqual(a, b);
    const user = resolveMixContract(resolved, { character: { width: .9 } });
    assert.equal(user.provenance['sound.mix.character.width'].source, 'user');
    assert.equal(user.provenance['sound.mix.ambience.roomSize'].source, 'extends');
  } finally { delete ALL_STYLES_BY_ID[parent.id]; delete ALL_STYLES_BY_ID[child.id]; }
});

test('major Tango styles have distinct structured room, stage, dynamics and handoff policies', () => {
  const troilo = resolveStyle({ genreId: 'tango', styleId: 'tango-troilo' }).resolvedMix.contract;
  const pugliese = resolveStyle({ genreId: 'tango', styleId: 'tango-pugliese' }).resolvedMix.contract;
  const milonga = resolveStyle({ genreId: 'tango', styleId: 'tango-milonga' }).resolvedMix.contract;
  const nuevo = resolveStyle({ genreId: 'tango', styleId: 'tango-tango-nuevo' }).resolvedMix.contract;
  assert.ok(pugliese.ambience.roomSize > troilo.ambience.roomSize);
  assert.ok(pugliese.dynamics.ensembleBreathing > milonga.dynamics.ensembleBreathing);
  assert.ok(milonga.transitions.foregroundHandoffMs < troilo.transitions.foregroundHandoffMs);
  assert.ok(nuevo.character.transientSnap! > troilo.character.transientSnap!);
  for (const id of ['tango-guardia-vieja', 'tango-piazzolla', 'tango-tango-vals']) assert.ok(resolveStyle({ genreId: 'tango', styleId: id }).resolvedMix.contract.enabled);
});

test('resolved authored roles and phrase functions govern importance; instrument identity is absent', () => {
  const mix = tango().resolvedMix.contract;
  assert.deepEqual(resolveMixFunctions('harmony', mix).mixFunctions, ['pulse-anchor', 'harmonic-support']);
  assert.ok(resolveMixFunctions('harmony', mix, true).mixFunctions.includes('foreground'));
  const planned = scene();
  assert.deepEqual(planned.foregroundTrackIds, ['lead']);
  assert.equal(planned.tracks.bass.gainOffsetDb, 0);
  assert.equal(planned.tracks.comp.gainOffsetDb, 0);
  assert.ok(planned.tracks.comp.presenceOffsetDb < 0);
  assert.ok(planned.tracks.lead.gainOffsetDb > 0);
});

test('counterpoint shares foreground; non-simultaneous notes and shared lines are not carved', () => {
  const style = tango();
  const analysis = analyzeMixWindow({ sectionId: 'counterpoint', phraseIndex: 0, startBeat: 0, endBeat: 8,
    startTime: 0, endTime: 4, energy: 4 }, [
    { trackId: 'a', role: 'lead', notes: [note('a', 65, 0, 2)] },
    { trackId: 'b', role: 'counterline', notes: [note('b', 65, 0, 2)] },
    { trackId: 'c', role: 'texture', notes: [note('c', 65, 2.5, 1)] },
  ], style.resolvedMix.contract);
  const foreground = resolveForegroundOwnership(analysis);
  assert.equal(foreground.sharedForeground, true);
  const relationships = analyzeMasking(analysis, foreground);
  assert.ok(relationships.every(r => r.sourceTrackId === 'c' && r.overlap === 0));
});

test('voicing tones share one transient, sustains crossing a phrase still occupy the register', () => {
  const style = tango();
  const notes = [60, 64, 67].map(midi => ({ ...note('comp', midi, 0, 6), attackId: 'chord' }));
  const analysis = analyzeMixWindow({ sectionId: 'theme', phraseIndex: 0, startBeat: 0, endBeat: 8,
    startTime: 0, endTime: 4, energy: 3 }, [{ trackId: 'comp', role: 'harmony', notes }], style.resolvedMix.contract);
  assert.equal(analysis.tracks[0].attacks.length, 1);
  assert.equal(analysis.tracks[0].activity, 1);
  const later = analyzeMixWindow({ ...analysis, startTime: 4, endTime: 8 }, [{ trackId: 'comp', role: 'harmony', notes }], style.resolvedMix.contract);
  assert.equal(later.tracks[0].activity, .5); assert.equal(later.tracks[0].attacks.length, 0);
});

test('scene compilation is deterministic, honours section role/solo changes and ignores user faders', () => {
  const base = makeSheet('tango', 'tango-troilo');
  const perf = arrangeBand(base);
  assert.deepEqual(perf.mixTimeline, compileMixSceneTimeline(base, perf));
  assert.deepEqual(compileMixSceneTimeline(base, perf), compileMixSceneTimeline({ ...base,
    tracks: base.tracks.map(track => ({ ...track, volume: .2, pan: .9 })) }, perf));
  assert.ok(perf.mixTimeline!.scenes.length < perf.notes.length);
  const target = base.tracks.find(track => track.role === 'bass')!;
  const solo = setSectionSolo(base, base.regions[0].id, { trackIds: [target.id], mode: 'unaccompanied' });
  const soloPerf = arrangeBand(solo);
  const first = soloPerf.mixTimeline!.scenes.find(s => s.sectionId === base.regions[0].id)!;
  assert.deepEqual(first.foregroundTrackIds, [target.id]);
  const changed = { ...base, partRoles: { [base.regions[0].id]: { [target.id]: 'counterline' } } } as Sheet;
  assert.equal(compileMixSceneTimeline(changed, perf).scenes[0].analysis.tracks.find(t => t.trackId === target.id)!.authoredRole, 'counterline');
  assert.match(formatMixTrace(perf.mixTimeline!), /sound.mix.ambience.roomSize/);
});

test('uncalibrated worlds and explicitly disabled mix contracts produce neutral track automation', () => {
  const style = resolveStyle({ genreId: 'jazz', styleId: Object.values(ALL_STYLES_BY_ID).find(s => s.primaryGenre === 'jazz')!.id });
  assert.equal(style.resolvedMix.contract.enabled, false);
  const disabled = resolveMixContract(tango(), { enabled: false });
  const planned = planMixScene(scene().analysis, disabled, 'disabled');
  for (const state of Object.values(planned.tracks)) {
    assert.equal(state.gainOffsetDb, 0); assert.equal(state.presenceOffsetDb, 0);
    assert.equal(state.width, 1); assert.equal(state.reverbSend, 0);
  }
});

class Param {
  value = 0;
  events: Array<[string, number, number]> = [];
  setValueAtTime(value: number, time: number) { this.events.push(['set', value, time]); this.value = value; }
  linearRampToValueAtTime(value: number, time: number) { this.events.push(['ramp', value, time]); this.value = value; }
  setTargetAtTime(value: number, time: number) { this.events.push(['target', value, time]); this.value = value; }
  cancelScheduledValues(time: number) { this.events.push(['cancel', 0, time]); }
  cancelAndHoldAtTime(time: number) { this.events.push(['hold', 0, time]); }
}
class Node {
  gain = new Param(); frequency = new Param(); Q = new Param(); threshold = new Param(); knee = new Param();
  ratio = new Param(); attack = new Param(); release = new Param(); pan = new Param(); delayTime = new Param();
  type = ''; curve?: Float32Array; oversample = ''; disconnected = false;
  connect(_node: unknown, _output?: number, _input?: number) {}
  disconnect() { this.disconnected = true; }
}
function context() {
  const nodes: Node[] = [];
  const make = () => { const node = new Node(); nodes.push(node); return node; };
  const ctx = { currentTime: 0, destination: new Node(), createGain: make, createBiquadFilter: make,
    createWaveShaper: make, createDynamicsCompressor: make, createStereoPanner: make, createDelay: make,
    createChannelSplitter: make, createChannelMerger: make } as unknown as BaseAudioContext;
  return { ctx, nodes };
}

test('lookahead ramps are continuous; seek restores interpolated values and future targets', () => {
  const scenes = timeline(); scenes.scenes[1].tracks.lead.gainOffsetDb = 2;
  const points = compileAutomation(scenes, s => s.tracks.lead.gainOffsetDb);
  const rampStart = points[1].time, rampEnd = points[2].time;
  assert.ok(rampStart < 4); assert.ok(rampEnd > rampStart);
  const middle = (rampStart + rampEnd) / 2;
  const param = new Param(); scheduleAutomation(param as unknown as AudioParam, points, 100, middle);
  assert.equal(param.events[1][1], automationValueAt(points, middle));
  assert.equal(param.events.at(-1)![2], 100 + rampEnd - middle);
  assert.equal(automationValueAt(points, 100), 2);
});

test('live/offline scheduling uses identical lanes and never rebuilds strips or buses at a phrase/seek', () => {
  const a = context(), b = context(), scenes = timeline();
  const make = (ctx: BaseAudioContext) => {
    const master = createMasterChain(ctx, tango().resolvedMix.contract.character);
    return { master, graph: createSongMixGraph(ctx, master, scenes, ['lead', 'comp', 'bass']) };
  };
  const live = make(a.ctx), offline = make(b.ctx), count = a.nodes.length;
  live.graph.schedule(0, 0); offline.graph.schedule(0, 0);
  const events = (nodes: Node[]) => nodes.map(node => Object.values(node).filter(v => v instanceof Param).map(v => (v as Param).events));
  assert.deepEqual(events(a.nodes), events(b.nodes));
  live.graph.schedule(20, 5); live.graph.cancel(21);
  assert.equal(a.nodes.length, count);
  live.graph.dispose(); live.master.dispose(); offline.graph.dispose(); offline.master.dispose();
  assert.ok(a.nodes.every(node => node.disconnected));
});

test('portable runtime executes the timeline deterministically without mutating cached stems', () => {
  const scenes = timeline(), sampleRate = 8000;
  const l = new Float32Array(800).fill(.1), r = new Float32Array(800).fill(.2);
  const before = l.slice();
  const render = () => {
    const buffers = Array.from({ length: 6 }, () => new Float32Array(800));
    accumulatePortableMix(scenes, 'lead', l, r, 0, sampleRate, buffers[0], buffers[1], buffers[2], buffers[3], buffers[4], buffers[5]);
    return buffers;
  };
  assert.deepEqual(render(), render()); assert.deepEqual(l, before);
  assert.ok(render().flatMap(buffer => [...buffer]).every(Number.isFinite));
});

// Compatibility fixtures lacking a timeline must remain valid Performance objects.
const legacy: Performance = { notes: [], ccs: [], bars: [], duration: 0, tail: 0, blends: {} };
test('legacy performances do not require mix metadata', () => assert.equal(legacy.mixTimeline, undefined));


test('render excerpts retain scene ramps, initial interpolation and ensemble headroom', () => {
  const original = timeline(); original.baselineHeadroom = .7;
  original.scenes[1].tracks.lead.gainOffsetDb = 2;
  const lane = (s: MixSceneTimeline['scenes'][number]) => s.tracks.lead.gainOffsetDb;
  const full = compileAutomation(original, lane);
  const excerpt = excerptMixTimeline(original, 3.98, 1);
  const clipped = compileAutomation(excerpt, lane);
  assert.equal(automationValueAt(clipped, 0), automationValueAt(full, 3.98));
  assert.ok(Math.abs(automationValueAt(clipped, .04) - automationValueAt(full, 4.02)) < 1e-10);
  assert.equal(excerpt.baselineHeadroom, .7);
  assert.equal(excerpt.scenes, original.scenes);
});


test('unknown authored role names never read prototype properties as mix policy', () => {
  for (const authoredRole of ['constructor', 'toString', '__proto__']) {
    assert.deepEqual(resolveMixFunctions(authoredRole, tango().resolvedMix.contract).mixFunctions, ['harmonic-support']);
  }
});
