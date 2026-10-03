import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { BandWorkletNode, type PlaybackConfiguration } from '../src/engine/playback/bandWorklet';
import { graphChildren, PreparedVoiceGraph } from '../src/engine/playback/preparedGraph';
import { el, type NodeRepr_t } from '@elemaudio/core';
import type { Performance, PerfNote } from '../src/engine/band/performanceData';
import { codeForGesture } from '../src/engine/band/gestures';

function config(instrument = 'piano'): PlaybackConfiguration {
  const note = (midi: number, vel: number, gesture: string, time: number): PerfNote => ({
    trackId: 't', midi, vel, gestureCode: codeForGesture(gesture), time, dur: 0.4, bar: 0, hitFunctionCode: 0, accent: 1,
  });
  const performance: Performance = { notes: [note(40, 45, 'legato', 0), note(76, 120, 'staccato', 0.5), note(60, 80, 'marcato', 1)],
    ccs: [{ trackId: 't', cc: 74, value: 100, time: 0.1 }, { trackId: 't', cc: 18, value: 90, time: 0.2 }],
    bars: [], duration: 2, tail: 1, blends: {} };
  return { performance, instruments: new Map([['t', instrument]]), roles: new Map([['t', 'lead']]),
    levels: new Map([['t', 0.7]]), worldId: 'tango', styleId: 'tango-electrotango-gotan' };
}
function fakeRenderer(node: BandWorkletNode) {
  const nodeMap = new Map<number, { props: Record<string, unknown> }>();
  let commits = 0, messages = 0;
  const mount = (n: NodeRepr_t) => {
    if (nodeMap.has(n.hash)) return;
    graphChildren(n).forEach(mount);
    nodeMap.set(n.hash, { props: { ...(n.props as unknown as Record<string, unknown>) } });
  };
  const delegate = { nodeMap, clear() {}, setProperty(hash: number, property: string, value: number) {
    assert.ok(nodeMap.has(hash)); nodeMap.get(hash)!.props[property] = value;
  }, commitUpdates() {}, getPackedInstructions() { return [1]; } };
  const core = { render(...roots: NodeRepr_t[]) { commits++; nodeMap.clear(); roots.forEach(mount); return Promise.resolve(); },
    _renderer: { _delegate: delegate, _sendMessage() { messages++; } } };
  const audioNode = { connect() {}, disconnect() {} };
  const bus = { connect() {}, disconnect() {} };
  const masterChain = { drumBus: bus, subBus: bus, instBus: bus, setMixCharacter() {}, dispose() {} };
  // Model an already initialized output graph; configure() owns graph commits,
  // while these tests focus on updates after that initial preparation.
  Object.assign(node, { core, ctx: { currentTime: 0 }, audioNode, masterChain, rendererOutputCount: 3 });
  return { get commits() { return commits; }, get messages() { return messages; }, nodeMap };
}

test('notes, expression, CCs, bends, mix controls, stop and stealing never prepare or commit graphs', async () => {
  for (const instrument of ['piano', 'bandoneon', 'drums', 'violin', 'flute', 'guitar']) {
    const node = new BandWorkletNode(); const renderer = fakeRenderer(node); const c = config(instrument);
    await node.configure(c); const baseline = node.getDiagnostics();
    for (let loop = 0; loop < 4; loop++) {
      node.clear();
      for (let i = 0; i < 80; i++) node.postPreparedNote('t', i % 3, `${loop}:${i}`);
      node.postCC('t', 74, 100); node.postCC('t', 18, 90);
      node.postCC('t', 7, 84); node.postCC('t', 11, 70); node.postCC('t', 10, 90);
      node.postBend('t', 10000); node.postRelease('t', 60, undefined, `${loop}:79`);
      node.setTrackVolume('t', 0.6); node.setTrackPan('t', 0.8); node.setTrackMute('t', true);
      node.setTrackMute('t', false); node.setTrackSolo('t', true); node.setTrackSolo('t', false);
      node.processPendingEvents(); node.softNotesOff();
    }
    const result = node.getDiagnostics();
    assert.equal(result.preparations, baseline.preparations, instrument);
    assert.equal(result.graphCommits, baseline.graphCommits, instrument);
    assert.equal(renderer.commits, 1, instrument);
    assert.equal(result.missingBindings, 0, instrument);
    assert.equal(result.unpreparedEvents, 0, instrument);
    assert.ok(renderer.messages > 0, instrument);
    node.dispose();
  }
});

test('identical UI snapshots and volume edits are no-ops for graph ownership; removing the last track commits silence', async () => {
  const node = new BandWorkletNode(), renderer = fakeRenderer(node), c = config();
  await node.configure(c);
  await node.configure({ ...c, instruments: new Map(c.instruments), roles: new Map(c.roles), performance: structuredClone(c.performance) });
  await node.configure({ ...c, levels: new Map([['t', 0.2]]) });
  assert.equal(renderer.commits, 1);
  await node.configure({ ...c, instruments: new Map(), roles: new Map(), levels: new Map() });
  assert.equal(renderer.commits, 2);
  assert.equal(node.getDiagnostics().tracks, 0);
  node.dispose();
});

test('UI edits cancel stale scheduled notes and clear removed mix state', async () => {
  const node = new BandWorkletNode(); fakeRenderer(node); const c = config();
  await node.configure(c);
  node.postPreparedNote('t', 0, 'old', 0.03);
  assert.equal(node.getDiagnostics().pendingTimers, 1);
  await node.configure({ ...c, instruments: new Map(), roles: new Map() });
  assert.equal(node.getDiagnostics().pendingTimers, 0);
  await new Promise(resolve => setTimeout(resolve, 40));
  assert.equal(node.getDiagnostics().unpreparedEvents, 0);
  node.dispose();
});

test('prepared shapes retain every varying scalar and keep invariant literals shared', () => {
  const bank = new PreparedVoiceGraph('test');
  const a = bank.prepare(el.mul(0.5, el.cycle(el.const({ key: 'test_freq', value: 220 }))));
  const b = bank.prepare(el.mul(0.9, el.cycle(el.const({ key: 'test_freq', value: 880 }))));
  assert.equal(a.variant, b.variant);
  bank.seal();
  const variant = bank.variants[0];
  assert.ok(variant.semanticControls.has('test_freq'));
  assert.ok(variant.controls.filter(Boolean).length < a.values.length, 'invariant math constants are not live controls');
  assert.ok(a.values.includes(0.5) && b.values.includes(0.9));
  assert.ok(a.values.includes(220) && b.values.includes(880));
});

test('performance call graph has no route to graph construction or UI preparation', () => {
  const source = ts.createSourceFile('bandWorklet.ts', readFileSync('src/engine/playback/bandWorklet.ts', 'utf8'), ts.ScriptTarget.Latest, true);
  const methods = new Map<string, ts.MethodDeclaration>();
  const find = (n: ts.Node) => { if (ts.isMethodDeclaration(n)) methods.set(n.name.getText(source), n); ts.forEachChild(n, find); }; find(source);
  const visited = new Set<string>();
  const inspect = (name: string) => {
    if (visited.has(name)) return; visited.add(name);
    assert.ok(!['configure', 'commitGraph', 'control', 'initialize'].includes(name), `performance reaches ${name}`);
    const visit = (n: ts.Node) => {
      if (ts.isCallExpression(n)) {
        const callee = n.expression.getText(source);
        assert.ok(!/^(el\.|renderVoice|renderMixBuses)|\.(prepare|seal|render)$/.test(callee), `performance constructs graph through ${callee}`);
        if (callee.startsWith('this.')) inspect(callee.slice(5));
      }
      ts.forEachChild(n, visit);
    };
    const method = methods.get(name); if (method) ts.forEachChild(method, visit);
  };
  ['postPreparedNote', 'postRelease', 'postCC', 'postBend', 'clear', 'softNotesOff', 'setTrackVolume', 'setTrackPan', 'setTrackMute', 'setTrackSolo', 'processPendingEvents'].forEach(inspect);
});
